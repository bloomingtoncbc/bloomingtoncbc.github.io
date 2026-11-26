import maplibregl, { type ExpressionSpecification, type LngLatBoundsLike } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import circleAreas from '../data/circle-areas.json';

// OpenFreeMap's style carries the attribution its terms require; MapLibre shows it.
const BASEMAP_STYLE_URL = 'https://tiles.openfreemap.org/styles/liberty';
export const ALL_AREAS = 'all';
const MUTED_COLOR = '#64748b';

type Ring = readonly (readonly number[])[];

function boundsOf(rings: readonly Ring[]): LngLatBoundsLike {
	const points = rings.flat();
	const lngs = points.map(([lng]) => lng);
	const lats = points.map(([, lat]) => lat);
	return [Math.min(...lngs), Math.min(...lats), Math.max(...lngs), Math.max(...lats)];
}

// Area-weighted centroid of the outer ring, where the area number label sits.
function labelPoint(ring: Ring): [number, number] {
	let twiceArea = 0;
	let x = 0;
	let y = 0;
	for (let i = 0; i < ring.length - 1; i += 1) {
		const [x0, y0] = ring[i];
		const [x1, y1] = ring[i + 1];
		const cross = x0 * y1 - x1 * y0;
		twiceArea += cross;
		x += (x0 + x1) * cross;
		y += (y0 + y1) * cross;
	}
	return [x / (3 * twiceArea), y / (3 * twiceArea)];
}

const outerCircle = circleAreas.features.find((f) => f.properties.kind === 'circle');
if (!outerCircle) throw new Error('areaMap: circle-areas.json has no outer circle');
const circleBounds = boundsOf(outerCircle.geometry.coordinates);
const areaRings = new Map(
	circleAreas.features.filter((f) => f.properties.area).map((f) => [f.properties.area as string, f.geometry.coordinates]),
);
const areaLabels: GeoJSON.FeatureCollection = {
	type: 'FeatureCollection',
	features: [...areaRings].map(([area, rings]) => ({
		type: 'Feature',
		properties: { area },
		geometry: { type: 'Point', coordinates: labelPoint(rings[0]) },
	})),
};

export function isArea(area: string): boolean {
	return areaRings.has(area);
}

type PaintValue = number | string | ExpressionSpecification;

/** @returns a paint value that gives the picked area one value and every other area another */
function byPick(selected: string, picked: PaintValue, others: PaintValue): PaintValue {
	if (selected === ALL_AREAS) return picked;
	return ['case', ['==', ['get', 'area'], selected], picked, others];
}

/** Highlights one area, or every area for ALL_AREAS, and zooms the map to it. */
export function showArea(map: maplibregl.Map, selected: string, padding = 40) {
	if (!map.getLayer('area-fill')) return;
	map.setPaintProperty('area-fill', 'fill-opacity', byPick(selected, 0.25, 0.04));
	map.setPaintProperty('area-line', 'line-color', byPick(selected, ['get', 'color'], MUTED_COLOR));
	map.setPaintProperty('area-line', 'line-width', byPick(selected, selected === ALL_AREAS ? 2.5 : 3.5, 1));
	map.setPaintProperty('area-label', 'text-opacity', byPick(selected, 1, 0.45));
	const visibility = selected === ALL_AREAS ? 'visible' : 'none';
	map.setLayoutProperty('not-counted-fill', 'visibility', visibility);
	map.setLayoutProperty('not-counted-line', 'visibility', visibility);
	const rings = areaRings.get(selected);
	map.fitBounds(rings ? boundsOf(rings) : circleBounds, { padding, maxZoom: 14, animate: false });
}

function addAreaLayers(map: maplibregl.Map) {
	map.addSource('areas', { type: 'geojson', data: circleAreas as GeoJSON.FeatureCollection });
	map.addSource('area-labels', { type: 'geojson', data: areaLabels });
	map.addLayer({
		id: 'not-counted-fill',
		type: 'fill',
		source: 'areas',
		filter: ['==', ['get', 'kind'], 'not-counted'],
		paint: { 'fill-color': MUTED_COLOR, 'fill-opacity': 0.3 },
	});
	map.addLayer({
		id: 'not-counted-line',
		type: 'line',
		source: 'areas',
		filter: ['==', ['get', 'kind'], 'not-counted'],
		paint: { 'line-color': '#475569', 'line-width': 2, 'line-dasharray': [2, 2] },
	});
	map.addLayer({
		id: 'area-fill',
		type: 'fill',
		source: 'areas',
		filter: ['==', ['get', 'kind'], 'area'],
		paint: { 'fill-color': ['get', 'color'], 'fill-opacity': 0.25 },
	});
	map.addLayer({
		id: 'area-line',
		type: 'line',
		source: 'areas',
		filter: ['==', ['get', 'kind'], 'area'],
		paint: { 'line-color': ['get', 'color'], 'line-width': 2.5 },
	});
	map.addLayer({
		id: 'circle-line',
		type: 'line',
		source: 'areas',
		filter: ['==', ['get', 'kind'], 'circle'],
		paint: { 'line-color': '#1e293b', 'line-width': 3 },
	});
	map.addLayer({
		id: 'area-label',
		type: 'symbol',
		source: 'area-labels',
		layout: {
			'text-field': ['get', 'area'],
			'text-font': ['Noto Sans Bold'],
			'text-size': 16,
			'text-allow-overlap': true,
		},
		paint: { 'text-color': '#212121', 'text-halo-color': '#ffffff', 'text-halo-width': 2 },
	});
}

interface AreaMapOptions {
	readonly container: HTMLElement;
	readonly initialArea: string;
	readonly isInteractive: boolean;
	readonly padding?: number;
}

/** @returns a map of the circle and its areas, showing `initialArea` once the base map loads */
export function createAreaMap({ container, initialArea, isInteractive, padding }: AreaMapOptions): maplibregl.Map {
	const map = new maplibregl.Map({
		container,
		style: BASEMAP_STYLE_URL,
		bounds: circleBounds,
		fitBoundsOptions: { padding: 20 },
		interactive: isInteractive,
		cooperativeGestures: isInteractive,
		canvasContextAttributes: { preserveDrawingBuffer: !isInteractive },
	});
	if (isInteractive) map.addControl(new maplibregl.NavigationControl({ showCompass: false }));
	map.on('load', () => {
		addAreaLayers(map);
		showArea(map, initialArea, padding);
	});
	return map;
}
