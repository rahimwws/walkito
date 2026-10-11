/**
 * Makes the build ID depend on the code, not on the clock.
 *
 * Next stamps a random build ID into every page (`"b":"..."` in the RSC
 * payload, plus the `_next/static/<id>/` folder), so two builds of the same
 * code differ in every HTML and .txt file. The upload compares files by
 * content (`rsync --checksum`), so every page was re-uploaded on every deploy:
 * the server gave all 490 pages a new Last-Modified and ETag each time, and
 * crawlers re-downloaded the whole site after a one-line change.
 *
 * After the build, this swaps the random ID for a hash of the shipped
 * JavaScript and CSS (everything under `_next/static/` except the ID's own
 * folder). Same code -> same ID -> a page whose content did not change is
 * byte-identical and is not uploaded. Changed code -> new ID, as Next intends
 * (the ID tells an open tab that the deployment changed).
 *
 * Runs as `postbuild`, so every `bun run build` (local or in GitHub Actions)
 * produces stable output.
 */
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'out');
const oldId = readFileSync(join(ROOT, '.next', 'BUILD_ID'), 'utf8').trim();
if (!/^[A-Za-z0-9_-]{8,64}$/.test(oldId)) throw new Error(`stable-build-id: unexpected BUILD_ID "${oldId}"`);

const walk = (dir, files = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
};

// The new ID: a hash of every shipped JS/CSS file (path + content), minus the
// folder named after the old ID.
const staticDir = join(OUT, '_next', 'static');
const hash = createHash('sha256');
for (const file of walk(staticDir).sort()) {
  const rel = relative(staticDir, file);
  if (rel.split('/')[0] === oldId) continue;
  hash.update(rel).update('\0').update(readFileSync(file)).update('\0');
}
const newId = hash.digest('base64url').slice(0, 21);

if (newId === oldId) {
  console.log(`stable-build-id: already ${newId}`);
  process.exit(0);
}

// Replace the ID in every text file that carries it.
const TEXT = new Set(['.html', '.txt', '.js', '.json', '.xml', '.css', '.map', '.rsc']);
let changed = 0;
for (const file of walk(OUT)) {
  if (!TEXT.has(extname(file))) continue;
  const s = readFileSync(file, 'utf8');
  if (!s.includes(oldId)) continue;
  writeFileSync(file, s.split(oldId).join(newId));
  changed++;
}

// And the folders named after it.
for (const dir of [join(staticDir, oldId), join(OUT, '_next', oldId)]) {
  if (existsSync(dir)) renameSync(dir, dir.slice(0, -oldId.length) + newId);
}

console.log(`stable-build-id: ${oldId} -> ${newId} in ${changed} files`);
