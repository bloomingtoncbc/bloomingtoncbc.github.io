// Turns a KML export from CBC Circle Manager's map into src/data/circle-areas.json.
// Usage: node scripts/import-areas.mjs <file.kml>
import { readFileSync, writeFileSync } from 'node:fs';

const OUTPUT_PATH = new URL('../src/data/circle-areas.json', import.meta.url);
const AREA_NAME = /^Area (\d+)$/;
const OUTER_CIRCLE_NAME = /full .*circle/i;
const CIRCLE_OUTLINE_NAME = /-mile circle$/;
const AREA_COLORS = ['#2563eb', '#16a34a', '#dc2626', '#9333ea', '#ea580c', '#0891b2', '#ca8a04', '#db2777'];

function readRing(coordinatesText) {
	return coordinatesText
		.trim()
		.split(/\s+/)
		.map((pair) => pair.split(',').slice(0, 2).map(Number));
}

function featureKind(name) {
	if (AREA_NAME.test(name)) return 'area';
	if (OUTER_CIRCLE_NAME.test(name)) return 'circle';
	return 'not-counted';
}

function readFeatures(kml) {
	const features = [];
	for (const [, body] of kml.matchAll(/<Placemark>(.*?)<\/Placemark>/gs)) {
		const polygon = /<Polygon>(.*?)<\/Polygon>/s.exec(body);
		const name = /<name>([^<]*)<\/name>/.exec(body)?.[1].trim();
		if (!polygon || !name || CIRCLE_OUTLINE_NAME.test(name)) continue;
		const rings = [...polygon[1].matchAll(/<coordinates>([^<]*)<\/coordinates>/g)].map(([, text]) => readRing(text));
		features.push({
			type: 'Feature',
			properties: { name, kind: featureKind(name), area: AREA_NAME.exec(name)?.[1] ?? null, color: null },
			geometry: { type: 'Polygon', coordinates: rings },
		});
	}
	return features;
}

function vertexKeys(feature) {
	return new Set(feature.geometry.coordinates.flat().map(([lng, lat]) => `${lng.toFixed(4)},${lat.toFixed(4)}`));
}

// Areas that share a corner get different colors, so neighbors never blend together.
function colorAreas(areas) {
	const keys = areas.map(vertexKeys);
	areas.forEach((area, i) => {
		const used = new Set(
			areas
				.slice(0, i)
				.filter((_, j) => [...keys[i]].some((key) => keys[j].has(key)))
				.map((neighbor) => neighbor.properties.color),
		);
		const color = AREA_COLORS.find((c) => !used.has(c));
		if (!color) throw new Error(`import-areas: ran out of colors at ${area.properties.name}`);
		area.properties.color = color;
	});
}

const [kmlPath] = process.argv.slice(2);
if (!kmlPath) throw new Error('import-areas: pass the KML file path');
const features = readFeatures(readFileSync(kmlPath, 'utf8'));
const areas = features.filter((f) => f.properties.kind === 'area');
if (areas.length === 0) throw new Error('import-areas: no "Area N" polygons found');
colorAreas(areas);
writeFileSync(OUTPUT_PATH, `${JSON.stringify({ type: 'FeatureCollection', features })}\n`);
console.log(`Wrote ${features.length} outlines (${areas.length} areas) to src/data/circle-areas.json`);
