// Exercise media for the guide pages, cut from the app's own demonstration
// clips so the site shows exactly the exercise the app plays.
//
//   node scripts/exercise-media.mjs [clipsDir] [id ...]
//
// With ids after the directory, only those exercises are made.
//
// `clipsDir` holds the app's clips by their bucket names (the same files as
// the app's `assets/exercises/` and the `exercise-clips` Supabase bucket).
// Missing files are fetched from the public bucket. For each exercise it
// writes to public/exercises/:
//   <id>.mp4    H.264, muted, one clean repetition, looping
//   <id>.webm   VP9, same cut
//   <id>.webp   the still poster at 720 wide, and <id>@2x.webp (the source is
//               720 wide, so the 2x is the same frame kept at full quality)
// All crops are 4:5, 720 x 900, taken from the 720 x 1280 source at a per-clip
// height so the working part of the body stays in frame. No text, no audio.

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, stat, writeFile } from 'node:fs/promises';
import { homedir, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import ffmpeg from 'ffmpeg-static';

const here = fileURLToPath(new URL('.', import.meta.url));
const clipsDir = resolve(
  process.argv[2] ?? join(homedir(), 'Data/programming/WalkiTo/assets/exercises'),
);
const outDir = resolve(here, '../public/exercises');
const BUCKET = 'https://illpzsrzfpllovwslmdx.supabase.co/storage/v1/object/public/exercise-clips';

const W = 720;
const H = 900; // 4:5

/**
 * id: catalogue id in the app (src/entities/program/model/exercises.ts)
 * file: clip name in the bucket (src/shared/config/clip-manifest.ts)
 * start/dur: one clean repetition, in seconds
 * poster: the frame that shows the key position
 * y: top of the 900 px crop inside the 1280 px frame
 */
const EXERCISES = [
  { id: 'fascia_stretch', file: '01_plantar_stretch.mp4', start: 1.2, dur: 4.6, poster: 3.4, y: 330 },
  { id: 'calf_stretch_straight', file: '02_calf_stretch_knee_straight.mp4', start: 1.0, dur: 4.4, poster: 3.1, y: 380 },
  { id: 'calf_stretch_bent', file: '03_soleus_stretch_knee_bent.mp4', start: 0.6, dur: 4.0, poster: 2.2, y: 380 },
  { id: 'heel_raise_towel', file: '09_heel_raises_with_towel.mp4', start: 1.6, dur: 4.4, poster: 3.2, y: 380 },
  { id: 'short_foot_seated', file: '10_short_foot_seated.mp4', start: 0.6, dur: 4.8, poster: 2.6, y: 300 },
  { id: 'short_foot_double', file: '12_short_foot_standing.mp4', start: 0.6, dur: 4.4, poster: 2.4, y: 380 },
  { id: 'short_foot_single', file: '13_short_foot_one_leg.mp4', start: 0.6, dur: 4.0, poster: 2.6, y: 380 },
  { id: 'toe_spread', file: '04_toe_spread.mp4', start: 0.6, dur: 4.0, poster: 2.2, y: 380 },
  { id: 'single_leg_hold', file: '11_single_leg_hold.mp4', start: 1.0, dur: 4.0, poster: 3.0, y: 380 },
  { id: 'foot_roll', file: '07_foot_roll.mp4', start: 0.8, dur: 4.0, poster: 2.5, y: 380 },
  { id: 'heel_raise_seated', file: '20_seated_heel_raise.mp4', start: 0.3, dur: 3.2, poster: 2.1, y: 300 },
  { id: 'heel_raise_double', file: '19_double_leg_heel_raise.mp4', start: 1.0, dur: 4.4, poster: 2.9, y: 380 },
  { id: 'heel_raise_hold', file: '21_heel_raise_hold.mp4', start: 1.0, dur: 4.0, poster: 2.9, y: 380 },
  { id: 'towel_scrunch', file: '23_towel_scrunch.mp4', start: 1.0, dur: 4.4, poster: 2.2, y: 300 },
  { id: 'big_toe_lift', file: '22_big_toe_lift.mp4', start: 0.8, dur: 3.4, poster: 1.4, y: 300 },
  { id: 'band_inversion', file: '14_band_inversion.mp4', start: 0.8, dur: 4.0, poster: 1.5, y: 260 },
  { id: 'hip_abduction', file: '16_hip_abduction.mp4', start: 0.6, dur: 4.4, poster: 1.4, y: 380 },
  { id: 'ankle_rocks', file: '05_ankle_rocks.mp4', start: 0.6, dur: 4.4, poster: 2.4, y: 380 },
  { id: 'heel_drop_straight', file: '26_heel_drop_straight_knee.mp4', start: 1.0, dur: 4.4, poster: 2.6, y: 380 },
  { id: 'tibialis_raise', file: '29_tibialis_raise.mp4', start: 0.8, dur: 4.4, poster: 3.0, y: 380 },
];

function run(args) {
  const r = spawnSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${args.join(' ')}`);
}

async function source(file) {
  const local = join(clipsDir, file);
  if (existsSync(local)) return local;
  // Kept out of public/: these are the full source clips, not for the site.
  const cached = join(tmpdir(), 'walkito-exercise-clips', file);
  if (existsSync(cached)) return cached;
  const res = await fetch(`${BUCKET}/${file}`);
  if (!res.ok) throw new Error(`${file}: ${res.status}`);
  await mkdir(join(tmpdir(), 'walkito-exercise-clips'), { recursive: true });
  await writeFile(cached, Buffer.from(await res.arrayBuffer()));
  return cached;
}

const kb = async (f) => Math.round((await stat(f)).size / 1024);

await mkdir(outDir, { recursive: true });
const only = new Set(process.argv.slice(3));

for (const e of EXERCISES.filter((x) => only.size === 0 || only.has(x.id))) {
  const src = await source(e.file);
  const crop = `crop=${W}:${H}:0:${e.y}`;
  const out = (ext) => join(outDir, `${e.id}.${ext}`);
  const cut = ['-ss', String(e.start), '-t', String(e.dur), '-i', src, '-an', '-map_metadata', '-1'];

  run([...cut, '-vf', `${crop},fps=24,format=yuv420p`, '-c:v', 'libx264', '-profile:v', 'high',
    '-preset', 'veryslow', '-crf', '30', '-movflags', '+faststart', out('mp4')]);
  run([...cut, '-vf', `${crop},fps=24`, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '40',
    '-row-mt', '1', '-deadline', 'good', '-cpu-used', '1', out('webm')]);
  run(['-ss', String(e.poster), '-i', src, '-frames:v', '1', '-vf', crop,
    '-c:v', 'libwebp', '-quality', '72', '-compression_level', '6', out('webp')]);
  run(['-ss', String(e.poster), '-i', src, '-frames:v', '1', '-vf', crop,
    '-c:v', 'libwebp', '-quality', '82', '-compression_level', '6', join(outDir, `${e.id}@2x.webp`)]);

  console.log(
    `${e.id.padEnd(22)} mp4 ${await kb(out('mp4'))} KB  webm ${await kb(out('webm'))} KB  webp ${await kb(out('webp'))} KB`,
  );
}
