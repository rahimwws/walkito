#!/usr/bin/env node
/**
 * Puts the spoken exercise instructions in the clip bucket, under `voice/`,
 * and checks them against `src/shared/config/voice-manifest.ts`.
 *
 *   SUPABASE_SERVICE_KEY=… node scripts/upload-voice.mjs
 *   SUPABASE_SERVICE_KEY=… node scripts/upload-voice.mjs --check
 *
 * Sources are `assets-src/voice/<lang>-<exerciseId>.m4a`, kept out of the app
 * bundle. A new recording: put the file there, add its line to the manifest
 * (bytes, hash, ms — `--print` writes them), run this, publish an update.
 */
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = resolve(import.meta.dirname, '..');
const LOCAL_DIR = join(ROOT, 'assets-src/voice');
const BUCKET = 'exercise-clips';
const { values } = parseArgs({
  options: { check: { type: 'boolean', default: false }, print: { type: 'boolean', default: false } },
});

const hashOf = (path) => createHash('sha256').update(readFileSync(path)).digest('hex').slice(0, 16);

if (values.print) {
  for (const name of readdirSync(LOCAL_DIR).filter((f) => f.endsWith('.m4a')).sort()) {
    const path = join(LOCAL_DIR, name);
    const ms = Math.round(
      Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path]).toString()) * 1000,
    );
    const [lang, id] = [name.slice(0, name.indexOf('-')), name.slice(name.indexOf('-') + 1, -4)];
    console.log(`${lang}  ${id}: { file: 'voice/${name}', bytes: ${statSync(path).size}, hash: '${hashOf(path)}', ms: ${ms} },`);
  }
  process.exit(0);
}

function readEnv(name) {
  try {
    const line = readFileSync(join(ROOT, '.env'), 'utf8').split('\n').find((l) => l.startsWith(`${name}=`));
    return line?.slice(name.length + 1).trim();
  } catch {
    return undefined;
  }
}
const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? readEnv('EXPO_PUBLIC_SUPABASE_URL');
const serviceKey = process.env.SUPABASE_SERVICE_KEY;
if (!url || !serviceKey) {
  console.error('Needs EXPO_PUBLIC_SUPABASE_URL (or .env) and SUPABASE_SERVICE_KEY in the environment.');
  process.exit(1);
}

const source = readFileSync(join(ROOT, 'src/shared/config/voice-manifest.ts'), 'utf8');
const entries = [...source.matchAll(/file: '(voice\/[^']+)', bytes: (\d+), hash: '([0-9a-f]+)'/g)].map(
  ([, file, bytes, hash]) => ({ file, bytes: Number(bytes), hash }),
);
const drift = [];
for (const e of entries) {
  const path = join(LOCAL_DIR, e.file.slice('voice/'.length));
  try {
    if (statSync(path).size !== e.bytes || hashOf(path) !== e.hash) drift.push(`${e.file}: differs from the manifest`);
  } catch {
    drift.push(`${e.file}: missing in assets-src/voice`);
  }
}
if (drift.length > 0) {
  console.error(drift.join('\n'));
  process.exit(1);
}

const headers = { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` };
let uploaded = 0;
let present = 0;
for (const e of entries) {
  const info = await fetch(`${url}/storage/v1/object/info/public/${BUCKET}/${e.file}`, { headers });
  const size = info.ok ? (await info.json()).size : null;
  if (size === e.bytes) {
    present += 1;
    continue;
  }
  if (values.check) {
    console.log(`  MISSING  ${e.file}`);
    continue;
  }
  const res = await fetch(`${url}/storage/v1/object/${BUCKET}/${e.file}`, {
    method: 'POST',
    headers: { ...headers, // The bucket accepts video types only; an .m4a is the same MP4 container.
    'Content-Type': 'video/mp4', 'x-upsert': 'true' },
    body: readFileSync(join(LOCAL_DIR, e.file.slice('voice/'.length))),
  });
  if (!res.ok) {
    console.error(`  FAILED   ${e.file} — ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  uploaded += 1;
}
console.log(`${uploaded} uploaded, ${present} already present, ${entries.length} in the manifest.`);
if (values.check && present !== entries.length) process.exit(1);
