// Screenshots, from the raw simulator captures to what the site and social
// posts use.
//
//   node scripts/export-screenshots.mjs [rawDir] [framedDir] [webSubdir]
//
// `webSubdir` (e.g. `ru`) writes the WebPs to public/app/<webSubdir>/ under the
// same names, for screenshots taken with the app in another language.
//
// 1. Web: every raw PNG becomes a WebP at 660 px wide and a 2x copy at 1320
//    (capped at the source width), written to public/app/. The phone frame is
//    drawn in CSS by ScreenshotSlot, so these stay unframed.
// 2. Social: the same screen composited into an iPhone 17 Pro-shaped frame on a
//    transparent background, written as PNG to the framed directory. The frame
//    is drawn here as SVG. No Apple artwork is used.
//
// Raw captures are expected at the iPhone 17 Pro's native 1206 x 2622.

import { mkdir, readdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const here = fileURLToPath(new URL('.', import.meta.url));
const rawDir = resolve(process.argv[2] ?? join(homedir(), 'Desktop/walkito-screenshots/raw/en'));
const framedDir = resolve(process.argv[3] ?? join(homedir(), 'Desktop/walkito-screenshots/framed/en'));
const webDir = resolve(here, '../public/app', process.argv[4] ?? '');

const WEB_WIDTH = 660;

// Frame geometry, in source pixels. The display keeps its own aspect ratio;
// the bezel and outer body are added around it.
const BEZEL = 44; // black glass border between display and body
const EDGE = 14; // titanium band around the outside
const SCREEN_RADIUS = 168; // iPhone 17 Pro display corners, at 3x
const SHADOW = 120; // room for the soft drop shadow on the transparent canvas

function frameSvg(screenW, screenH) {
  const bodyW = screenW + (BEZEL + EDGE) * 2;
  const bodyH = screenH + (BEZEL + EDGE) * 2;
  const W = bodyW + SHADOW * 2;
  const H = bodyH + SHADOW * 2;
  const x = SHADOW;
  const y = SHADOW;
  const outerR = SCREEN_RADIUS + BEZEL + EDGE;
  const innerR = SCREEN_RADIUS + BEZEL;
  // Matched to the island the simulator draws into the capture (376 x 110 at
  // 42 px from the top of a 1206 px screen), so the two sit exactly on top of
  // each other and nothing peeks out around the edge.
  const islandW = Math.round(screenW * (376 / 1206));
  const islandH = Math.round(screenW * (110 / 1206));
  const islandX = x + EDGE + BEZEL + (screenW - islandW) / 2;
  const islandY = y + EDGE + BEZEL + Math.round(screenW * (42 / 1206));

  return {
    W,
    H,
    // Everything behind the screenshot: shadow, metal band, black bezel.
    back: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6b6b72"/>
      <stop offset="0.35" stop-color="#2c2c31"/>
      <stop offset="0.65" stop-color="#3a3a40"/>
      <stop offset="1" stop-color="#5c5c63"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${SHADOW / 2.6}"/>
    </filter>
  </defs>
  <rect x="${x + 20}" y="${y + 60}" width="${bodyW - 40}" height="${bodyH - 40}" rx="${outerR}"
        fill="rgba(0,0,0,0.38)" filter="url(#shadow)"/>
  <rect x="${x}" y="${y}" width="${bodyW}" height="${bodyH}" rx="${outerR}" fill="url(#metal)"/>
  <rect x="${x + 3}" y="${y + 3}" width="${bodyW - 6}" height="${bodyH - 6}" rx="${outerR - 3}"
        fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="3"/>
  <rect x="${x + EDGE}" y="${y + EDGE}" width="${bodyW - EDGE * 2}" height="${bodyH - EDGE * 2}"
        rx="${innerR}" fill="#050506"/>
</svg>`),
    // Rounded mask for the display itself.
    mask: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${screenW}" height="${screenH}">
  <rect width="${screenW}" height="${screenH}" rx="${SCREEN_RADIUS}" fill="#fff"/>
</svg>`),
    // On top of the screenshot: the Dynamic Island.
    front: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="${islandX}" y="${islandY}" width="${islandW}" height="${islandH}" rx="${islandH / 2}" fill="#000"/>
</svg>`),
    screenX: x + EDGE + BEZEL,
    screenY: y + EDGE + BEZEL,
  };
}

async function exportWeb(file) {
  const name = basename(file, '.png');
  const src = sharp(file);
  const { width } = await src.metadata();
  const twice = Math.min(WEB_WIDTH * 2, width);
  await sharp(file).resize({ width: WEB_WIDTH }).webp({ quality: 86 }).toFile(join(webDir, `${name}.webp`));
  await sharp(file).resize({ width: twice }).webp({ quality: 82 }).toFile(join(webDir, `${name}@2x.webp`));
}

async function exportFramed(file) {
  const name = basename(file, '.png');
  const { width, height } = await sharp(file).metadata();
  const f = frameSvg(width, height);
  const screen = await sharp(file)
    .composite([{ input: f.mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  await sharp(f.back)
    .composite([
      { input: screen, left: f.screenX, top: f.screenY },
      { input: f.front, left: 0, top: 0 },
    ])
    .png()
    .toFile(join(framedDir, `${name}.png`));
}

await mkdir(webDir, { recursive: true });
await mkdir(framedDir, { recursive: true });
const files = (await readdir(rawDir)).filter((f) => f.endsWith('.png')).sort();
for (const f of files) {
  const file = join(rawDir, f);
  await exportWeb(file);
  await exportFramed(file);
  console.log(`exported ${f}`);
}
