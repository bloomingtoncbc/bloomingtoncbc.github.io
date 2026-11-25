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

## Each year

1. Update `COUNT_NUMBER` and `COUNT_DATE` in `src/consts.ts`. The announcement bar and the home page countdown read from them.
2. Add a results page: copy `src/pages/results/2025.md` to the new year, update the text and the Sheets embed link.
3. Add the new year to the `Results` menu in `src/consts.ts`.
4. Update the count sheet link and embed in `src/pages/count-info/count-sheet.md`.
