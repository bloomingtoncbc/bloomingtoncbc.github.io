// From the "Area Staffing & Mode Recommendations" sheet.

export interface Staffing {
	readonly people: string;
	readonly parties: string;
}

export interface AreaStaffing {
	readonly area: number;
	readonly squareMiles: number;
	readonly hotspots: number;
	readonly minimum: Staffing;
	readonly ideal: Staffing;
	readonly mode: string;
	readonly minimumNote: string;
	readonly idealNote: string;
}

export const CIRCLE_STAFFING = {
	minimum: { people: '39–43', parties: '28' },
	ideal: { people: '76–96', parties: '36–43' },
} as const;

export function staffingText({ people, parties }: Staffing): string {
	return `${people} (${parties} ${parties === '1' ? 'party' : 'parties'})`;
}

export const AREA_STAFFING: readonly AreaStaffing[] = [
	{
		area: 1,
		squareMiles: 6.75,
		hotspots: 10,
		minimum: { people: '3', parties: '2' },
		ideal: { people: '5–6', parties: '3' },
		mode: 'Walking (2) + Driving (1)',
		minimumNote: '2 walkers covering core Lebanon Hills lakes (Holland, Jensen, Schulze) + 1 driver for perimeter/Valleywood.',
		idealNote: 'Two walking pairs + 1–2 drivers.',
	},
	{
		area: 2,
		squareMiles: 10.01,
		hotspots: 10,
		minimum: { people: '2', parties: '2' },
		ideal: { people: '4–6', parties: '2–3' },
		mode: 'Mixed (1–2 walking, 1 driving)',
		minimumNote:
			'1 walker at West Lebanon Hills (Campground/Pilot Knob) + 1 driver hitting Thomas Lake, Rahn, Kettle, Long Lake, and MN Zoo.',
		idealNote: '1–2 walking pairs + driving pair.',
	},
	{
		area: 3,
		squareMiles: 8.09,
		hotspots: 7,
		minimum: { people: '2', parties: '1–2' },
		ideal: { people: '3–4', parties: '2' },
		mode: 'Mixed (1 walking, 1 driving)',
		minimumNote:
			'1 walker at Terrace Oaks Park + 1 driver sweeping Red Oak, Crosstown West, Slater Acres, and neighborhood parks.',
		idealNote: 'Walking pair + driving pair.',
	},
	{
		area: 4,
		squareMiles: 10.1,
		hotspots: 8,
		minimum: { people: '2', parties: '2' },
		ideal: { people: '4–5', parties: '2–3' },
		mode: 'Mixed (1–2 walking, 1 driving)',
		minimumNote:
			'1 walker for Savage Fen SNA/Hidden Valley + 1 driver for Sunset Pond, Earley Lake, Kelleher, and Rudy Kraemer.',
		idealNote: '1–2 walking pairs + driving pair.',
	},
	{
		area: 5,
		squareMiles: 5.45,
		hotspots: 4,
		minimum: { people: '2', parties: '1' },
		ideal: { people: '3–4', parties: '2' },
		mode: 'Walking (2 parties)',
		minimumNote: '1 walking pair working the Black Dog Lake/Power Plant/Cliff Fen river corridor end-to-end.',
		idealNote: 'Two walking pairs starting from opposite ends.',
	},
	{
		area: 6,
		squareMiles: 3.96,
		hotspots: 1,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Driving (with short stops)',
		minimumNote: '1 solo driver scanning Burnsville Landfill and industrial/river roads.',
		idealNote: '2 people in 1 vehicle for safer, faster gull and road scanning.',
	},
	{
		area: 7,
		squareMiles: 10.09,
		hotspots: 17,
		minimum: { people: '3–4', parties: '2' },
		ideal: { people: '6–8', parties: '3–4' },
		mode: 'Walking (2–3) + Driving (1)',
		minimumNote:
			'2–3 walkers covering Fort Snelling SP (Pike Island, Snelling/Gun Club Lakes) and Crosby Farm + 1 driver for Resurrection Cemetery, Acacia Park, and Rogers Lake.',
		idealNote: '2–3 walking pairs + driving pair.',
	},
	{
		area: 8,
		squareMiles: 11.06,
		hotspots: 4,
		minimum: { people: '2', parties: '1–2' },
		ideal: { people: '3–4', parties: '2' },
		mode: 'Mixed (1 walking, 1 driving)',
		minimumNote:
			'1 walker at Dodge Nature Center Lilly Preserve + 1 driver covering Copperfield/Friendly Hills, Ames Crossing, and Marianna Ranch.',
		idealNote: 'Walking pair + driving pair.',
	},
	{
		area: 9,
		squareMiles: 8.01,
		hotspots: 12,
		minimum: { people: '2–3', parties: '2' },
		ideal: { people: '4–6', parties: '2–3' },
		mode: 'Mixed (1–2 walking, 1 driving)',
		minimumNote:
			'1–2 walkers on Lake Nokomis, Lake Hiawatha, Minnehaha Creek/Falls, and Coldwater Spring + 1 driver for Diamond Lake, Oak Hill Cemetery, and grids.',
		idealNote: '1–2 walking pairs + driving pair.',
	},
	{
		area: 10,
		squareMiles: 2.84,
		hotspots: 2,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Walking',
		minimumNote: '1 solo walker covering Colman Lake Trail and Auto Club Park.',
		idealNote: '2-person walking pair for thorough brush and river coverage.',
	},
	{
		area: 11,
		squareMiles: 2.83,
		hotspots: 3,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2–3', parties: '1–2' },
		mode: 'Walking',
		minimumNote: '1 solo walker covering Wood Lake Nature Center boardwalks and Richfield Lake Park.',
		idealNote: 'Walking pair at Wood Lake plus an optional 3rd walker at Richfield Lake.',
	},
	{
		area: 12,
		squareMiles: 6.99,
		hotspots: 9,
		minimum: { people: '2', parties: '2' },
		ideal: { people: '4–5', parties: '2' },
		mode: 'Mixed (1 walking, 1 driving)',
		minimumNote:
			'1 walker for Hyland Lake Park Reserve + 1 driver for Mt. Normandale Lake, Normandale CC, Heritage Hills, Skriebakken, and Dog Park.',
		idealNote: 'Walking pair + driving pair.',
	},
	{
		area: 13,
		squareMiles: 3.06,
		hotspots: 3,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2–3', parties: '1–2' },
		mode: 'Walking (with brief road check)',
		minimumNote: '1 solo walker covering Nine Mile Creek, Central Park, and Harrison Picnic Ground.',
		idealNote: 'Walking pair (or two small walking groups) plus a brief road loop.',
	},
	{
		area: 14,
		squareMiles: 4.8,
		hotspots: 4,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Driving (with park walks)',
		minimumNote: '1 solo driver hitting Marsh Lake, Lake Girard, Penn Lake, and Haeg Park.',
		idealNote: '2-person driving/walking party.',
	},
	{
		area: 15,
		squareMiles: 6.81,
		hotspots: 3,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Driving (with park walks)',
		minimumNote: '1 solo driver covering Grass Lake, Fred Richards Park, and Centennial Lakes.',
		idealNote: '2-person party driving between sites and walking perimeters.',
	},
	{
		area: 16,
		squareMiles: 5.35,
		hotspots: 3,
		minimum: { people: '2', parties: '1–2' },
		ideal: { people: '3–4', parties: '2' },
		mode: 'Mixed (1 walking, 1 driving)',
		minimumNote:
			'1 walker for Pond Dakota Mission Park, Sorenson Landing, and Black Dog West Outflow + 1 driver for neighborhood streets.',
		idealNote: 'Walking pair + driving pair.',
	},
	{
		area: 17,
		squareMiles: 4.59,
		hotspots: 6,
		minimum: { people: '3', parties: '2' },
		ideal: { people: '4–6', parties: '3' },
		mode: 'Walking (2) + Driving (1)',
		minimumNote:
			'2 walkers covering Old Cedar Ave. Bridge, Bluffs Trail, Artesian Well, and Black Dog East Outlet + 1 solo driver for Mound Springs, Parker’s Picnic Grounds, and bluff roads.',
		idealNote: '2 walking parties + driving pair.',
	},
	{
		area: 18,
		squareMiles: 4.04,
		hotspots: 4,
		minimum: { people: '2', parties: '1–2' },
		ideal: { people: '4–5', parties: '2–3' },
		mode: 'Walking (2) + Driving (1)',
		minimumNote:
			'2 walkers covering Bass Ponds, MN Valley NWR HQ, and Long Meadow Lake Trail (with a quick upland drive).',
		idealNote: '2 walking parties + 1 driving party.',
	},
	{
		area: 19,
		squareMiles: 8.14,
		hotspots: 7,
		minimum: { people: '2', parties: '1' },
		ideal: { people: '2–4', parties: '1–2' },
		mode: 'Driving (with short walks)',
		minimumNote:
			'2 people in 1 vehicle (driver + spotter needed for MSP Airport/Cargo Rd) plus Fort Snelling Cemetery, Mother/Taft Lakes, and Veterans Park.',
		idealNote: '2 driving parties separating airport from lakes/cemetery.',
	},
	{
		area: 20,
		squareMiles: 9.66,
		hotspots: 4,
		minimum: { people: '2', parties: '1–2' },
		ideal: { people: '3–4', parties: '2' },
		mode: 'Mixed (1 walking, 1 driving)',
		minimumNote:
			'1 walker for Casperson Landing trails and Nicols Rd Marsh + 1 driver for Blackhawk Park, Eagan Community Center, and roads.',
		idealNote: 'Walking pair + driving pair.',
	},
	{
		area: 21,
		squareMiles: 8.05,
		hotspots: 4,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Driving (with short walks)',
		minimumNote: '1 solo driver covering Koch MN Trail, Meadows Park, and Southern Lakes Park.',
		idealNote: '2-person driving party.',
	},
	{
		area: 22,
		squareMiles: 13.41,
		hotspots: 16,
		minimum: { people: '2', parties: '1' },
		ideal: { people: '4', parties: '2' },
		mode: 'Driving (with park walks)',
		minimumNote:
			'2 people in 1 driving party hitting the largest parks (Schwarz Pond, Carroll’s Woods, Farquahar, Cobblestone Lake, Valley Lake).',
		idealNote: 'Two 2-person driving parties splitting north/south halves.',
	},
	{
		area: 23,
		squareMiles: 10.09,
		hotspots: 4,
		minimum: { people: '1–2', parties: '1' },
		ideal: { people: '2–4', parties: '1–2' },
		mode: 'Driving (with park walks)',
		minimumNote: '1–2 people in 1 driving party checking Alimagnet, Crystal, Keller, and Lac Lavon Lakes.',
		idealNote: '2 driving parties to walk all four lake shorelines thoroughly.',
	},
	{
		area: 24,
		squareMiles: 9.24,
		hotspots: 4,
		minimum: { people: '1', parties: '1' },
		ideal: { people: '2', parties: '1' },
		mode: 'Driving (with park walks)',
		minimumNote: '1 solo driver covering Patrick Eagan Park, Fish Lake Park, and Thresher Fields.',
		idealNote: '2-person driving party.',
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
		areas: [1, 5, 10, 11, 13],
		description:
			'Compact footprints (2.8–6.8 sq. mi.) where hotspots are contiguous trail networks. Areas 10, 11, and 13 can be covered by 1 solo walker at minimum. Areas 1 and 5 need at least 2–3 walkers, and ideally 2 independent walking pairs.',
	},
	{
		title: 'Driving with stop-and-walk areas',
		areas: [6, 14, 15, 19, 21, 22, 23, 24],
		description:
			'Large suburban or industrial areas (up to 13.4 sq. mi.) with isolated parks, lakes, or airport perimeter roads. Most can be covered by 1 solo driver at minimum (2 people in 1 vehicle for the Area 19 airport roads and Area 22’s 16 parks). 2-person parties and split north/south routes are ideal.',
	},
	{
		title: 'Multi-party mixed areas',
		areas: [2, 3, 4, 7, 8, 9, 12, 16, 17, 18, 20],
		description:
			'High-yield refuge, creek, and park corridors that need at least 1–2 walkers on the main trails plus 1 driver sweeping upland parks and residential grids. Areas 7 and 17 need at least 3 people to cover both trails and upland roads.',
	},
];
