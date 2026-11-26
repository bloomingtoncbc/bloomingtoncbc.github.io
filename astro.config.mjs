// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://bloomingtoncbc.org',
	// The print pages exist only to make the area map PDFs.
	integrations: [sitemap({ filter: (page) => !page.includes('/print/') })],
	// Google Sites served the home page at /home; keep old links working.
	redirects: {
		'/home': '/',
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Open Sans',
			cssVariable: '--font-body',
			weights: [400, 700],
			styles: ['normal', 'italic'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Roboto Condensed',
			cssVariable: '--font-heading',
			weights: [400, 700],
			styles: ['normal'],
			fallbacks: ['Arial Narrow', 'sans-serif'],
		},
	],
});
