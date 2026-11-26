// Prints each area map page to public/area-maps/<name>.pdf with headless Chrome.
// Usage: npm run build && npm run preview, then in another terminal:
//   node scripts/area-pdfs.mjs [base-url]   (default http://localhost:4321)
// Set CHROME to the Chrome or Chromium binary if `google-chrome` is not on the PATH.
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { areaMapName, areaMapPdfPath, areaMapPrintPath, CIRCLE_MAP_NAME } from '../src/data/areaMapFiles.ts';
import { AREA_STAFFING } from '../src/data/areaStaffing.ts';

const BASE_URL = process.argv[2] ?? 'http://localhost:4321';
const PUBLIC_DIR = new URL('../public', import.meta.url).pathname;
const DEBUG_PORT = 9334;
const MAP_READY_TIMEOUT_MS = 60_000;
const CHROME_START_ATTEMPTS = 40;

function connect(webSocketUrl) {
	const socket = new WebSocket(webSocketUrl);
	const pending = new Map();
	let nextId = 0;
	socket.addEventListener('message', (event) => {
		const message = JSON.parse(event.data);
		const resolve = pending.get(message.id);
		if (!resolve) return;
		pending.delete(message.id);
		resolve(message);
	});
	const send = (method, params = {}) =>
		new Promise((resolve, reject) => {
			nextId += 1;
			pending.set(nextId, (message) => (message.error ? reject(new Error(`area-pdfs: ${method}: ${message.error.message}`)) : resolve(message.result)));
			socket.send(JSON.stringify({ id: nextId, method, params }));
		});
	return new Promise((resolve) => socket.addEventListener('open', () => resolve({ send, close: () => socket.close() })));
}

async function pageTarget() {
	for (let attempt = 0; attempt < CHROME_START_ATTEMPTS; attempt += 1) {
		await sleep(250);
		const targets = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json`)
			.then((response) => response.json())
			.catch(() => undefined);
		const page = targets?.find((target) => target.type === 'page');
		if (page) return page;
	}
	throw new Error('area-pdfs: Chrome did not start');
}

async function waitForMap(send, name) {
	const deadline = Date.now() + MAP_READY_TIMEOUT_MS;
	while (Date.now() < deadline) {
		const { result } = await send('Runtime.evaluate', { expression: "document.body?.dataset.mapReady === 'true'" });
		if (result.value) return;
		await sleep(500);
	}
	throw new Error(`area-pdfs: the ${name} map did not finish drawing`);
}

async function printMap(send, name) {
	await send('Page.navigate', { url: new URL(areaMapPrintPath(name), BASE_URL).href });
	await sleep(1000);
	await waitForMap(send, name);
	const { data } = await send('Page.printToPDF', { preferCSSPageSize: true, printBackground: true });
	writeFileSync(join(PUBLIC_DIR, areaMapPdfPath(name)), Buffer.from(data, 'base64'));
	console.log(`Wrote public${areaMapPdfPath(name)}`);
}

const names = [areaMapName(CIRCLE_MAP_NAME), ...AREA_STAFFING.map(({ area }) => areaMapName(area))];
mkdirSync(join(PUBLIC_DIR, 'area-maps'), { recursive: true });
const profileDir = mkdtempSync(join(tmpdir(), 'area-pdfs-'));
const chrome = spawn(
	process.env.CHROME ?? 'google-chrome',
	['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profileDir}`, 'about:blank'],
	{ stdio: 'ignore' },
);
try {
	const { send, close } = await connect((await pageTarget()).webSocketDebuggerUrl);
	await send('Page.enable');
	await send('Emulation.setDeviceMetricsOverride', { width: 816, height: 1056, deviceScaleFactor: 2, mobile: false });
	for (const name of names) await printMap(send, name);
	close();
} finally {
	const exited = new Promise((resolve) => chrome.once('exit', resolve));
	chrome.kill();
	await exited;
	rmSync(profileDir, { recursive: true, force: true, maxRetries: 3 });
}
