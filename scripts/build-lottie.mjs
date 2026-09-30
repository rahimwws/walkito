#!/usr/bin/env node
/**
 * Builds the contract ceremony's Lottie from its full export, keeping only the
 * frames the app ever shows.
 *
 *   node scripts/build-lottie.mjs           write assets/lottie/contract.json
 *   node scripts/build-lottie.mjs --check   fail if the committed file is stale
 *
 * The ceremony is not a vector animation. The export is a flipbook: 121 frames
 * of 720×720 WebP, one image layer per frame, each embedded in the JSON as a
 * base64 data URI. Required as JSON, Metro inlines every byte of that into the
 * Hermes bundle. The contract step holds the export's frame 60 and plays on
 * from there, so frames 0-59 were 1.6 MB of bundle that never reached the
 * screen. This drops them and renumbers the rest from 0.
 *
 * Nothing is re-encoded: the kept frames are the export's data URIs, string
 * for string, and every layer and asset keeps its fields. Only the frame
 * numbers move.
 *
 * Why it stays JSON rather than a `.lottie` (a zip with the frames as separate
 * files, which Metro would ship as an asset instead of bytecode): lottie-ios
 * decodes a JSON source synchronously while the view mounts, but reads a
 * `.lottie` off the main thread and lands its decode 50-250 ms later, in the
 * middle of whatever is animating. On this step that was the 240 ms slide-in,
 * which hitched while the figure popped in. For the same reason the mascot
 * (`assets/lottie/mascot.json`) is shipped as exported and is not built here.
 *
 * The full export in `assets-src/lottie/` is the source, and it stays: the
 * trim is lossy, and whatever changes next (where the ceremony starts, a lower
 * frame rate) has to be cut from it again. It lives outside `assets/` so that
 * nothing can require it by accident: Metro blocks the folder (see
 * `metro.config.js`) and `.easignore` keeps it off the build servers, where
 * `--check` therefore has nothing to compare and skips.
 *
 * Output is deterministic, so `--check` compares bytes exactly.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const SOURCE = 'assets-src/lottie/contract.json';
const OUT = 'assets/lottie/contract.json';

/**
 * The first frame kept. Frames 1-60 of the export barely move (a couple of
 * units of change per frame against 25-31 later on), and the step always held
 * frame 60 before signing. The code that plays the file counts in *output*
 * frames, so changing this means changing `CEREMONY_FRAMES` and the held frame
 * in `src/pages/onboarding/ui/contract-step.tsx` too.
 */
const FROM = 60;

const DATA_URI = /^data:image\/webp;base64,/;

/**
 * The export's shape, checked rather than assumed: one image layer per frame,
 * layer k showing asset k on frame k only. Trimming renumbers frames by
 * shifting every layer, which is only correct for exactly this shape; a real
 * vector animation with keyframes would need its keyframes shifted too.
 */
function assertFlipbook(json) {
  const fail = (why) => {
    throw new Error(`${SOURCE}: not a one-image-per-frame flipbook (${why})`);
  };
  if (json.ip !== 0) fail(`starts on frame ${json.ip}`);
  if (json.layers.length !== json.op) fail(`${json.layers.length} layers for ${json.op} frames`);
  if (json.markers?.length) fail('it has markers, which count in frames too');
  const assets = new Map(json.assets.map((asset) => [asset.id, asset]));
  json.layers.forEach((layer, k) => {
    if (layer.ty !== 2) fail(`layer ${k} is type ${layer.ty}, not an image`);
    if (layer.ip !== k || layer.op !== k + 1 || layer.st !== k) {
      fail(`layer ${k} spans ${layer.ip}-${layer.op} from ${layer.st}`);
    }
    const asset = assets.get(layer.refId);
    if (asset == null) fail(`layer ${k} points at missing asset ${layer.refId}`);
    if (!DATA_URI.test(asset.p)) fail(`asset ${asset.id} is not an embedded WebP`);
  });
}

function trim(json) {
  assertFlipbook(json);
  if (!(FROM >= 0 && FROM < json.op)) throw new Error(`FROM ${FROM} is outside 0-${json.op - 1}`);

  const layers = json.layers.slice(FROM).map((layer, k) => ({
    ...layer,
    ind: k + 1,
    ip: layer.ip - FROM,
    op: layer.op - FROM,
    st: layer.st - FROM,
  }));
  const kept = new Set(layers.map((layer) => layer.refId));
  const assets = json.assets.filter((asset) => kept.has(asset.id));

  // Spread in place so the root keys keep the export's order.
  return { ...json, op: json.op - FROM, layers, assets };
}

const check = process.argv.includes('--check');

// `.easignore` leaves `assets-src/` out of every EAS upload, and the EAS
// workflows (release.yml, preview-build.yml) open with `bun run verify`, which
// runs this check. Without the source there is nothing to compare against, so
// the check stands aside rather than failing the job with an ENOENT: staleness
// is caught on the machine the trimmed file is committed from, and by
// checks.yml, which has the whole repository. Building still needs the source,
// so only `--check` skips.
if (check && !existsSync(join(ROOT, SOURCE))) {
  console.log(`skip   ${SOURCE} is not here (an EAS upload leaves it out); ${OUT} not compared`);
  process.exit(0);
}

const source = JSON.parse(readFileSync(join(ROOT, SOURCE), 'utf8'));
const trimmed = trim(source);
// Minified, as the export is.
const bytes = Buffer.from(JSON.stringify(trimmed));
const mb = (n) => `${(n / 1e6).toFixed(2)} MB`;
const summary =
  `${OUT}: frames ${FROM}-${source.op - 1} of ${source.op} → 0-${trimmed.op - 1}, ` +
  `${mb(bytes.length)} (the export is ${mb(readFileSync(join(ROOT, SOURCE)).length)})`;

if (check) {
  let current = null;
  try {
    current = readFileSync(join(ROOT, OUT));
  } catch {
    // Missing counts as stale.
  }
  if (current == null || !current.equals(bytes)) {
    console.error(`stale: ${OUT} does not match ${SOURCE}`);
    console.error('Run `bun run build:lottie` and commit the result.');
    process.exit(1);
  }
  console.log(`ok     ${summary}`);
} else {
  writeFileSync(join(ROOT, OUT), bytes);
  console.log(`wrote  ${summary}`);
}
