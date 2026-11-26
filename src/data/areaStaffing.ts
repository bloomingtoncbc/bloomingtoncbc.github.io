// From the "Area Staffing & Mode Recommendations" sheet.

export interface AreaStaffing {
	readonly area: number;
	readonly squareMiles: number;
	readonly hotspots: number;
	readonly counters: string;
	readonly parties: string;
	readonly mode: string;
	readonly rationale: string;
}

export const STAFFING_SUMMARY = {
	counters: '53–65',
	parties: '26–32',
} as const;

export const AREA_STAFFING: readonly AreaStaffing[] = [
	{
		area: 1,
		squareMiles: 6.75,
		hotspots: 10,
		counters: '3–4',
		parties: '2 parties',
		mode: 'Walking (1 driving loop)',
		rationale:
			'High hotspot density inside Lebanon Hills Regional Park (Holland, Jensen, Schulze, McDonough, Marsh Lakes); requires two separate trail parties plus a quick road check of Valleywood Golf Course.',
	},
	{
		area: 2,
		squareMiles: 10.01,
		hotspots: 10,
		counters: '3–4',
		parties: '2 parties',
		mode: 'Mixed (1 walking, 1 driving)',
		rationale:
			'Large footprint; one party walking West Lebanon Hills (Campground, Camp Sacajawea, West Trailhead) and one driving between Thomas Lake, Rahn, Kettle, Long Lake, and MN Zoo.',
	},
	{
		area: 3,
		squareMiles: 8.09,
		hotspots: 7,
		counters: '2–3',
		parties: '1–2 parties',
		mode: 'Mixed (walking + driving)',
		rationale:
			'Broad suburban footprint with 7 dispersed parks; walk Terrace Oaks Park and drive between Red Oak, Crosstown West, Slater Acres, Belmont, Chaparral, and South River Hills.',
	},
	{
		area: 4,
		squareMiles: 10.1,
		hotspots: 8,
		counters: '3',
		parties: '2 parties',
		mode: 'Mixed (1 walking, 1 driving)',
		rationale:
			'Large southern territory; one party walking Savage Fen SNA / Hidden Valley / Rudy Kraemer, and one driving Sunset Pond, Earley Lake, Kelleher, Hollows, and Buck Hill.',
	},
	{
		area: 5,
		squareMiles: 5.45,
		hotspots: 4,
		counters: '2–3',
		parties: '1–2 parties',
		mode: 'Walking',
		rationale:
			'Linear river-bottom corridor along Black Dog Lake, Black Dog Park, Power Plant, and Cliff Fen; best covered on foot in 1–2 trail groups.',
	},
	{
		area: 6,
		squareMiles: 3.96,
		hotspots: 1,
		counters: '1–2',
		parties: '1 party',
		mode: 'Driving (with short stops)',
		rationale:
			'Smallest hotspot count (Burnsville Landfill only) and industrial/river corridor; easily covered by one driving party scanning the landfill and roads.',
	},
	{
		area: 7,
		squareMiles: 10.09,
		hotspots: 17,
		counters: '4–5',
		parties: '2–3 parties',
		mode: 'Walking (2) + Driving (1)',
		rationale:
			'Highest hotspot concentration (17) across Fort Snelling SP (Pike Island, Picnic Island, Snelling Lake, Gun Club Lake), Crosby Farm, and Pilot Knob; needs two dedicated walking parties plus one driving Resurrection Cemetery, Acacia Park, and Rogers Lake.',
	},
	{
		area: 8,
		squareMiles: 11.06,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with short walks)',
		rationale:
			'Second-largest area by square mileage (11.06 sq. mi.) with widely spaced parks (Dodge Nature Center Lilly Preserve, Copperfield/Friendly Hills, Ames Crossing, Marianna Ranch); driving between stops is essential.',
	},
	{
		area: 9,
		squareMiles: 8.01,
		hotspots: 12,
		counters: '3–4',
		parties: '2 parties',
		mode: 'Mixed (1 walking, 1 driving)',
		rationale:
			'Dense urban parks and creek corridors (Lake Nokomis, Lake Hiawatha, Minnehaha Creek/Falls, Coldwater Spring, Diamond Lake); split into one walking party for the lakes/creek and one driving party for neighborhoods and Oak Hill Cemetery.',
	},
	{
		area: 10,
		squareMiles: 2.84,
		hotspots: 2,
		counters: '1–2',
		parties: '1 party',
		mode: 'Walking',
		rationale:
			'Compact river-valley unit (2.84 sq. mi.) anchored by Colman Lake Trail and Auto Club Park; ideal for a single walking party.',
	},
	{
		area: 11,
		squareMiles: 2.83,
		hotspots: 3,
		counters: '2',
		parties: '1 party',
		mode: 'Walking',
		rationale:
			'Smallest polygon (2.83 sq. mi.) centered on Wood Lake Nature Center and Richfield Lake Park; best covered thoroughly on foot.',
	},
	{
		area: 12,
		squareMiles: 6.99,
		hotspots: 9,
		counters: '3',
		parties: '2 parties',
		mode: 'Mixed (1 walking, 1 driving)',
		rationale:
			'One walking party for Hyland Lake Park Reserve (3 hotspots), plus one driving party covering Mt. Normandale Lake, Normandale CC, Heritage Hills, Skriebakken Lake, Pauly’s Pond, and the Dog Park.',
	},
	{
		area: 13,
		squareMiles: 3.06,
		hotspots: 3,
		counters: '2',
		parties: '1 party',
		mode: 'Walking (with brief road check)',
		rationale:
			'Compact 3.06 sq. mi. corridor along Nine Mile Creek, Central Park, and Harrison Picnic Ground; primarily walking trails plus a quick residential road loop.',
	},
	{
		area: 14,
		squareMiles: 4.8,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with park walks)',
		rationale:
			'Moderate suburban grid with 4 distinct lake/park nodes (Marsh Lake, Lake Girard, Penn Lake, Haeg Park); best covered by driving between parks and walking perimeters.',
	},
	{
		area: 15,
		squareMiles: 6.81,
		hotspots: 3,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with park walks)',
		rationale:
			'Moderate size (6.81 sq. mi.) with 3 separated hotspots (Grass Lake, Fred Richards Park, Centennial Lakes); driving between sites with short walks at each.',
	},
	{
		area: 16,
		squareMiles: 5.35,
		hotspots: 3,
		counters: '2',
		parties: '1 party',
		mode: 'Mixed (walking + driving)',
		rationale:
			'Covers Pond Dakota Mission Park, Sorenson Landing, and Black Dog West Outflow plus surrounding Bloomington neighborhoods; walk the refuge/park trails and drive the residential grid.',
	},
	{
		area: 17,
		squareMiles: 4.59,
		hotspots: 6,
		counters: '2',
		parties: '1 walking, 1 driving',
		mode: 'Mixed (1 walking, 1 driving)',
		rationale:
			'High hotspot density (6) along the river bluff and valley (Old Cedar Ave. Bridge, Bluffs Trail, Artesian Well, Black Dog East Outlet, Mound Springs, Parker’s Picnic Grounds); split cleanly into one walking party and one driving route.',
	},
	{
		area: 18,
		squareMiles: 4.04,
		hotspots: 4,
		counters: '2–3',
		parties: '1–2 parties',
		mode: 'Walking (primary) + Driving (quick loop)',
		rationale:
			'Compact refuge core (Bass Ponds, Long Meadow Lake Trail, MN Valley NWR HQ); primarily a walking route with a brief drive through the commercial/residential upland.',
	},
	{
		area: 19,
		squareMiles: 8.14,
		hotspots: 7,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with short walks)',
		rationale:
			'Dominated by MSP Airport perimeter, Cargo Rd, and Fort Snelling National Cemetery alongside Mother Lake, Taft Lake, and Veterans Memorial Park; requires a vehicle to cover airport perimeter roads and lakes.',
	},
	{
		area: 20,
		squareMiles: 9.66,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Mixed (walking + driving)',
		rationale:
			'Large 9.66 sq. mi. Eagan/river unit; walk Casperson Landing trails and Nicols Rd Marsh, and drive between Blackhawk Park, Eagan Community Center, and residential roads.',
	},
	{
		area: 21,
		squareMiles: 8.05,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with short walks)',
		rationale:
			'Large eastern Eagan territory (8.05 sq. mi.) with 4 scattered hotspots (Koch MN Trail, Meadows Park, Southern Lakes Park); requires driving between sites.',
	},
	{
		area: 22,
		squareMiles: 13.41,
		hotspots: 16,
		counters: '4',
		parties: '2 parties',
		mode: 'Driving (with park walks)',
		rationale:
			'Largest area in the circle (13.41 sq. mi.) with 16 scattered neighborhood parks and ponds (Schwarz Pond, Carroll’s Woods, Farquahar, Cobblestone Lake, Valley Lake); requires two driving parties splitting north/south halves.',
	},
	{
		area: 23,
		squareMiles: 10.09,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with park walks)',
		rationale:
			'Large southern Burnsville/Apple Valley area (10.09 sq. mi.) with 4 major lakes (Alimagnet, Crystal, Keller, Lac Lavon); best covered by driving between lake parks and walking shorelines.',
	},
	{
		area: 24,
		squareMiles: 9.24,
		hotspots: 4,
		counters: '2',
		parties: '1 party',
		mode: 'Driving (with park walks)',
		rationale:
			'Large central Eagan polygon (9.24 sq. mi.) with 4 dispersed locations (Patrick Eagan Park, Fish Lake Park, Thresher Fields); driving between parks and residential feeders is most efficient.',
	},
];

export interface CoverageGroup {
	readonly title: string;
	readonly areas: readonly number[];
	readonly description: string;
}

export const COVERAGE_GROUPS: readonly CoverageGroup[] = [
	{
		title: 'Walking areas',
		areas: [1, 5, 10, 11, 13, 18],
		description:
			'Compact footprints (2.8–6.8 sq. mi.) where hotspots are contiguous trail networks (Lebanon Hills, Black Dog, Colman Lake, Wood Lake, Nine Mile Creek, Bass Ponds).',
	},
	{
		title: 'Driving with stop-and-walk areas',
		areas: [6, 8, 14, 15, 19, 21, 22, 23, 24],
		description:
			'Large suburban or industrial areas (up to 13.4 sq. mi.) where hotspots are isolated municipal parks, lakes, or airport perimeter roads separated by residential and commercial grids.',
	},
	{
		title: 'Split walking and driving areas',
		areas: [2, 3, 4, 7, 9, 12, 16, 17, 20],
		description:
			'Best served by pairing a walking party on the main refuge or park trail system with a driving party sweeping secondary parks and neighborhood feeders.',
	},
];
