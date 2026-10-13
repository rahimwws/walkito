#!/usr/bin/env node
/**
 * Ready-made compressed copies of every text file in `out/`: `file.br` and
 * `file.gz` beside `file`.
 *
 * The walkito.site server serves these as they are (`brotli_static on` and
 * `gzip_static on`, since 2026-10-13) instead of compressing each request on
 * the fly. Compression here is paid once per build, not once per visitor, so it
 * is the strongest each format has: Brotli 11 (the server's own on-the-fly
 * level is 5) and gzip 9. A copy that would not come out smaller is not
 * written, and neither is one for a file under 1 KB, the server's own
 * `gzip_min_length`.
 *
 * Both are byte-for-byte deterministic, so with the deploy's `rsync --checksum`
 * an unchanged page's copies are skipped and keep their dates (and so their
 * ETag), the same as the page.
 *
 *   node scripts/precompress.mjs [dir]   (default: out)
 */
import { availableParallelism } from 'node:os';
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { brotliCompress, constants, gzip } from 'node:zlib';

const brotli = promisify(brotliCompress);
const gz = promisify(gzip);

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIR = process.argv[2] ?? join(ROOT, 'out');

/** What nginx compresses for this site (its `brotli_types`, plus HTML), and
 * the study data files in downloads/: the AI answers CSV is 400 KB of text. */
const TEXT = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.xml', '.txt', '.webmanifest', '.csv']);
const MIN_BYTES = 1024;

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else if (entry.isFile()) yield path;
  }
}

async function compress(path) {
  const body = await readFile(path);
  const out = { br: 0, gz: 0, raw: body.length };
  if (body.length < MIN_BYTES) return out;
  const [br, gzipped] = await Promise.all([
    brotli(body, {
      params: {
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY,
        [constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
        [constants.BROTLI_PARAM_SIZE_HINT]: body.length,
      },
    }),
    gz(body, { level: 9 }),
  ]);
  // Never a copy bigger than the file: nginx would serve it anyway.
  if (br.length < body.length) {
    await writeFile(`${path}.br`, br);
    out.br = br.length;
  } else await rm(`${path}.br`, { force: true });
  if (gzipped.length < body.length) {
    await writeFile(`${path}.gz`, gzipped);
    out.gz = gzipped.length;
  } else await rm(`${path}.gz`, { force: true });
  return out;
}

const started = Date.now();
const queue = [];
for await (const path of files(DIR)) {
  if (TEXT.has(extname(path).toLowerCase())) queue.push(path);
}

let raw = 0;
let br = 0;
let written = 0;
let next = 0;
await Promise.all(
  Array.from({ length: Math.max(1, availableParallelism() - 1) }, async () => {
    while (next < queue.length) {
      const path = queue[next++];
      const result = await compress(path);
      if (result.br > 0) {
        raw += result.raw;
        br += result.br;
        written += 1;
      }
    }
  }),
);

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(
  `precompress: ${written} of ${queue.length} text files, ${mb(raw)} MB -> ${mb(br)} MB as .br, in ${((Date.now() - started) / 1000).toFixed(1)} s`,
);
