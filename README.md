# bloomingtoncbc.org

Website for the Bloomington MN Christmas Bird Count. Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Local development

```
npm install
npm run dev
```

## Editing pages

Each page is a file under `src/pages/`. The URL matches the file path, so `src/pages/count-info/maps.astro` is `/count-info/maps/`.

- Most pages are Markdown (`.md`). Edit the text directly. The `title` in the frontmatter is the banner heading.
- Google embeds (Docs, Sheets, Forms, My Maps, NOAA) are `<iframe>` tags inside the Markdown.
- The navigation menu lives in `src/consts.ts`.

## Count circle map

The Maps page draws the circle and its areas with MapLibre on an OpenFreeMap street map. Clicking an area on the map shows that area and its details, and `#area-7` in the address opens it directly. The map code is shared with the print pages in `src/scripts/areaMap.ts`.

- **Area outlines** are in `src/data/circle-areas.json`. To change them, export the map from CBC Circle Manager with **Export Map as KML**, then run `node scripts/import-areas.mjs <file.kml>`. It keeps the polygons named `Area N`, the `Full ... Circle` outline, and any other polygon as a not-counted area, and gives neighboring areas different colors.
- **Area details** (size, hotspots, minimum and ideal staffing, mode, and notes) are in `src/data/areaStaffing.ts`.
- **CBC Scout links** are in `src/data/areaScoutLinks.ts`, one per area. Each area's panel and print page shows the link as a QR code, made at build time with `qrcode-generator` at medium error correction. The link carries any area leaders' names and emails, and the area's **Note for counters**, so anyone who sees the page can read them. Make the links again after you change area leaders or a note in CBC Circle Manager:
  1. Open https://lizstanley.com/birdspotter/cbc/manager/. If the circle isn't in this browser, use **Restore Backup** with your latest backup file.
  2. For each area, open it, click **Share Area**, tick **Leave out phone numbers** if it shows, click **Copy Link**, and paste the link over that area's link in `src/data/areaScoutLinks.ts`.
  3. Make the area map PDFs again (next item), since they carry the QR codes.
- **Area map PDFs** are in `public/area-maps/`, one per area plus `circle.pdf`, each made from a print page at `/print/area-7/` or `/print/circle/`. After changing outlines, details, or CBC Scout links, make them again: run `npm run build`, then `npm run preview`, then in another terminal `node scripts/area-pdfs.mjs http://localhost:4321`, then `npm run build` again and commit the PDFs. It needs Google Chrome; set `CHROME` to its path if `google-chrome` isn't on the PATH.

## Each year

1. Update `COUNT_NUMBER` and `COUNT_DATE` in `src/consts.ts`. The announcement bar and the home page countdown read from them.
2. Add a results page: copy `src/pages/results/2025.md` to the new year, update the text and the Sheets embed link.
3. Add the new year to the `Results` menu in `src/consts.ts`.
4. Update the count sheet link and embed in `src/pages/count-info/count-sheet.md`.
