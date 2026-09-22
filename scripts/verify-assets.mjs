#!/usr/bin/env node
/**
 * Every `require('@assets/…')` in the source points at a file that exists.
 *
 * This exists because TypeScript cannot check it. An asset `require` resolves
 * through Metro at bundle time, so a path to a deleted file type-checks
 * cleanly, builds cleanly, and fails at runtime with a red screen — which is
 * exactly how this project shipped a reference to a video that had been
 * deleted. `tsc` passed; the app did not start.
 *
 * Also reports assets on disk that nothing references, as a warning rather than
 * a failure. Unused files are a size problem, not a correctness one, and the
 * app icon and splash are referenced from app.json rather than from source.
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const ASSETS = join(ROOT, 'assets');

/** Everything under a directory, recursively, as repo-relative paths. */
function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name !== '.DS_Store') out.push(full);
  }
  return out;
}

const sources = [join(ROOT, 'src'), join(ROOT, 'app')]
  .filter((dir) => {
    try {
      return statSync(dir).isDirectory();
    } catch {
      return false;
    }
  })
  .flatMap((dir) => walk(dir))
  .filter((file) => /\.(ts|tsx|js|jsx)$/.test(file));

const referenced = new Set();
const missing = [];

for (const file of sources) {
  const text = readFileSync(file, 'utf8');
  // Only the alias form. A relative `require('./thing.png')` would need Metro's
  // own resolution rules to check honestly, and this project does not use one.
  for (const match of text.matchAll(/require\(\s*'(@assets\/[^']+)'\s*\)/g)) {
    const target = join(ASSETS, match[1].slice('@assets/'.length));
    referenced.add(target);
    try {
      statSync(target);
    } catch {
      missing.push({ file: relative(ROOT, file), spec: match[1] });
    }
  }
}

if (missing.length > 0) {
  console.error(`\n${missing.length} asset reference(s) point at nothing:\n`);
  for (const { file, spec } of missing) console.error(`  ${file}\n    → ${spec}`);
  console.error('\nEither restore the file or remove the reference. Metro resolves');
  console.error('these at bundle time, so this is a crash on launch, not a warning.\n');
  process.exit(1);
}

// Config-referenced assets never appear in a `require`. Listing them as unused
// would train the reader to ignore this section, which is the whole value of it.
const CONFIG_OWNED = readFileSync(join(ROOT, 'app.json'), 'utf8');
/**
 * Deliberately unreferenced, and not worth reporting.
 *
 * The exercise clips are served from Supabase Storage and cached on the device;
 * they stay in the repo as the upload source and as what the manifest's hashes
 * are checked against. Listing twelve of them under "nothing references this"
 * every run is how a warning section stops being read.
 */
const SERVED_REMOTELY = 'assets/exercises/';

const unused = walk(ASSETS).filter((file) => {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  if (rel.startsWith(SERVED_REMOTELY)) return false;
  return !referenced.has(file) && !CONFIG_OWNED.includes(rel);
});

console.log(`${referenced.size} asset reference(s) checked, all resolve.`);
if (unused.length > 0) {
  const bytes = unused.reduce((sum, file) => sum + statSync(file).size, 0);
  console.log(
    `\n${unused.length} file(s) in assets/ are referenced by neither source nor app.json ` +
      `(${(bytes / 1048576).toFixed(1)} MB):`,
  );
  for (const file of unused) console.log(`  ${relative(ROOT, file)}`);
  console.log('\nNot a failure — some may be referenced from native config.');
}
