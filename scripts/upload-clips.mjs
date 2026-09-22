#!/usr/bin/env node
/**
 * Puts the exercise clips in the bucket, and checks the manifest still matches.
 *
 * Run from a machine, never from the app: it needs the service key, which
 * bypasses row-level security and is the only thing that can write to a bucket
 * the clients can only read.
 *
 *   SUPABASE_SERVICE_KEY=… node scripts/upload-clips.mjs
 *   SUPABASE_SERVICE_KEY=… node scripts/upload-clips.mjs --check
 *
 * `--check` uploads nothing. It reports what is missing or stale in the bucket
 * against `clip-manifest.ts`, which is the state worth knowing before a release
 * — a manifest that names a file the bucket does not have is a black rectangle
 * mid-session for every user at once.
 */

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = resolve(import.meta.dirname, '..');
const LOCAL_DIR = join(ROOT, 'assets/exercises');
const BUCKET = 'exercise-clips';

const { values } = parseArgs({ options: { check: { type: 'boolean', default: false } } });

const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? readEnv('EXPO_PUBLIC_SUPABASE_URL');
const serviceKey = process.env.SUPABASE_SERVICE_KEY;

/** Falls back to `.env`, so the URL does not have to be passed by hand. The
 * service key deliberately does not: it is not in `.env` and must not be. */
function readEnv(name) {
  try {
    const line = readFileSync(join(ROOT, '.env'), 'utf8')
      .split('\n')
      .find((l) => l.startsWith(`${name}=`));
    return line?.slice(name.length + 1).trim();
  } catch {
    return undefined;
  }
}

if (url == null || url.length === 0) {
  console.error('No EXPO_PUBLIC_SUPABASE_URL. Set it or put it in .env.');
  process.exit(1);
}
if (serviceKey == null || serviceKey.length === 0) {
  console.error(
    'No SUPABASE_SERVICE_KEY in the environment.\n' +
      'Supabase dashboard → Project Settings → API → service_role.\n' +
      'Pass it on the command line; do not put it in .env, which ships.',
  );
  process.exit(1);
}

/** What the app expects to find, read from the module the app itself uses. */
function manifest() {
  const source = readFileSync(
    join(ROOT, 'src/widgets/session-player/config/clip-manifest.ts'),
    'utf8',
  );
  const rows = [
    ...source.matchAll(
      /^\s{2}([a-z_]+): \{ file: '([^']+)', bytes: (\d+), hash: '([0-9a-f]+)' \},/gm,
    ),
  ];
  return rows.map(([, id, file, bytes, hash]) => ({ id, file, bytes: Number(bytes), hash }));
}

function hashOf(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex').slice(0, 16);
}

const entries = manifest();
if (entries.length === 0) {
  console.error('The manifest parsed to nothing — its shape must have changed.');
  process.exit(1);
}

// ── The manifest against what is actually on disk ───────────────────────────

const onDisk = new Set(readdirSync(LOCAL_DIR).filter((f) => f.endsWith('.mp4')));
const drift = [];

for (const entry of entries) {
  const path = join(LOCAL_DIR, entry.file);
  if (!onDisk.has(entry.file)) {
    drift.push(`${entry.id}: ${entry.file} is in the manifest but not in assets/exercises`);
    continue;
  }
  const size = statSync(path).size;
  if (size !== entry.bytes) drift.push(`${entry.id}: ${size} bytes on disk, manifest says ${entry.bytes}`);
  const hash = hashOf(path);
  if (hash !== entry.hash) drift.push(`${entry.id}: content changed — manifest hash ${entry.hash}, file ${hash}`);
}

for (const file of onDisk) {
  if (!entries.some((e) => e.file === file)) drift.push(`${file} is on disk but not in the manifest`);
}

if (drift.length > 0) {
  console.error(`\nManifest and files disagree:\n`);
  for (const line of drift) console.error(`  ${line}`);
  console.error('\nRegenerate the manifest before uploading — the app verifies');
  console.error('downloads against those sizes and will delete anything that differs.\n');
  process.exit(1);
}
console.log(`Manifest matches all ${entries.length} files on disk.`);

// ── The bucket ──────────────────────────────────────────────────────────────

const headers = { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` };

async function remoteSize(file) {
  const res = await fetch(`${url}/storage/v1/object/info/public/${BUCKET}/${file}`, { headers });
  if (!res.ok) return null;
  const info = await res.json();
  return typeof info.size === 'number' ? info.size : null;
}

let uploaded = 0;
let already = 0;

for (const entry of entries) {
  const size = await remoteSize(entry.file);
  if (size === entry.bytes) {
    already += 1;
    continue;
  }

  if (values.check) {
    console.log(`  MISSING  ${entry.file}${size == null ? '' : ` (bucket has ${size} bytes)`}`);
    continue;
  }

  // `upsert` so a re-record replaces rather than erroring, and so the script is
  // safe to run again after a partial failure.
  const res = await fetch(`${url}/storage/v1/object/${BUCKET}/${entry.file}`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'video/mp4', 'x-upsert': 'true' },
    body: readFileSync(join(LOCAL_DIR, entry.file)),
  });
  if (!res.ok) {
    console.error(`  FAILED   ${entry.file} — ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`  uploaded ${entry.file}  ${(entry.bytes / 1048576).toFixed(2)} MB`);
  uploaded += 1;
}

if (values.check) {
  console.log(`\n${already}/${entries.length} present in the bucket.`);
  process.exit(already === entries.length ? 0 : 1);
}
console.log(`\n${uploaded} uploaded, ${already} already present.`);
