# Landing page photography

Every image on the homepage is declared in `src/landing/photos.ts`. Until a real
photo exists for an id, the page renders an art-directed placeholder that shows
the brief and the minimum source width.

## Adding a photo

1. Save the original as `photos/originals/<id>.jpg` (or .png / .tif / .webp),
   where `<id>` is the key in `src/landing/photos.ts`, e.g. `hero.jpg`,
   `person-meera.jpg`.
2. Run `npm run images`.
3. Commit the generated files in `public/img/p/` and
   `src/landing/photos.generated.json`.

The script writes AVIF + WebP at 480–4800px (never above the original's width),
a dominant colour and a tiny blurred preview for loading. In dev, the browser
console warns when an original is narrower than the id's `minWidth`.

## Direction

Real people, candid, natural light, warm highlights, editorial crops. No
AI-generated faces, no corporate stock. Mobile crops (`*-mobile` ids) should be
re-framed for portrait, not the desktop image shrunk.
