// Names shared by the Maps page, the print pages, and scripts/area-pdfs.mjs.

export const CIRCLE_MAP_NAME = 'circle';

/** @returns `area-7` for an area, or `circle` for the whole circle */
export function areaMapName(area: number | typeof CIRCLE_MAP_NAME): string {
	return area === CIRCLE_MAP_NAME ? CIRCLE_MAP_NAME : `area-${area}`;
}

/** @returns where the map's PDF is served, under `public/` */
export function areaMapPdfPath(name: string): string {
	return `/area-maps/${name}.pdf`;
}

/** @returns the page the PDF is printed from */
export function areaMapPrintPath(name: string): string {
	return `/print/${name}/`;
}
