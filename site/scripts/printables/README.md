# Printable exercise sheets (public/downloads/*.pdf)

Made from the guides' own exercise data, so the paper and the page agree.
Regenerate when a guide's exercises, doses or red flags change:

1. `bun run scripts/printables/export-data.ts > /tmp/pdfdata.json` (run from /site)
2. `node scripts/printables/build-html.mjs` writes one HTML page per sheet
   (US Letter, print CSS). Images: small JPEGs of the exercise stills in `img/`
   (260 px wide, made with ffmpeg from public/exercises/<id>@2x.webp).
3. Open each HTML in Chrome and print to PDF (Letter, background graphics on),
   or use Playwright `page.pdf({ format: 'Letter', printBackground: true })`.
4. Save as `public/downloads/walkito-<slug>.pdf` and a page-one preview as
   `walkito-<slug>.webp` (420 px wide). Keep each PDF around 250 KB.
