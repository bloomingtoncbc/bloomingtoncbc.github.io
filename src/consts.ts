export const SITE_TITLE = 'Bloomington MN CBC';

// Update these each year.
export const COUNT_NUMBER = '61st';
export const COUNT_DATE = '2026-12-19';

export const COORDINATOR_NAME = 'Liz Stanley';
export const COORDINATOR_EMAIL = 'bloomingtonmncbc@gmail.com';
export const COORDINATOR_URL = 'https://lizstanley.com/';
export const AUDUBON_CBC_URL = 'https://www.audubon.org/community-science/christmas-bird-count';

export interface NavItem {
	readonly label: string;
	readonly href?: string;
	readonly children?: readonly NavItem[];
}

export const NAV: readonly NavItem[] = [
	{ label: 'Home', href: '/' },
	{
		label: 'Count Info',
		children: [
			{ label: 'Mailing List', href: '/count-info/mailing-list/' },
			{ label: 'Count Sheet', href: '/count-info/count-sheet/' },
			{ label: 'Maps', href: '/count-info/maps/' },
			{ label: 'Area Coverage', href: '/count-info/area-coverage/' },
			{ label: 'Submitting Results', href: '/count-info/submitting-results/' },
		],
	},
	{ label: 'New Counters', href: '/new-counters/' },
	{ label: 'Resources', href: '/resources/' },
	{ label: 'Weather Forecast', href: '/weather-forecast/' },
	{
		label: 'Results',
		children: [
			{ label: '2025', href: '/results/2025/' },
			{ label: '2024', href: '/results/2024/' },
			{ label: '2023', href: '/results/2023/' },
		],
	},
];
