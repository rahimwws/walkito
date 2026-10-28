/**
 * Every demonstration clip, by catalogue id, with where it lives and how big it
 * is.
 *
 * The clips are not in the app any more. Bundling them put 14 MB into the App
 * Store download that every user paid for whether or not their programme ever
 * prescribed the exercise — and a catalogue that grows makes that worse
 * linearly, for footage most people never see.
 *
 * `bytes` is here so the prefetch can report honest progress before a single
 * request has come back, and `hash` so a cached file can be recognised as stale
 * when a clip is re-recorded. Both come from the files themselves; see
 * `scripts/upload-clips.mjs`, which is what puts them in the bucket.
 *
 * In `shared/config` rather than beside the player because the plan engine
 * reads it too: an exercise without a clip is never scheduled.
 *
 * The toe spread, seated heel raise, towel scrunch, shin raise, sole massage
 * and bent-knee raise left the plan on 28 October 2026 and their clips left
 * the manifest; their files stay in the bucket for builds already installed.
 */
export type ClipEntry = {
  /** Object name inside the bucket, and the filename on disk when cached. */
  file: string;
  bytes: number;
  /** First sixteen hex characters of the file's SHA-256. */
  hash: string;
};

/** The Supabase Storage bucket. Public-read: a demonstration of a calf stretch
 * is not a secret, and signing every request would add a round trip before the
 * first frame of a video somebody is waiting on. */
export const CLIP_BUCKET = 'exercise-clips';

export const CLIPS: Readonly<Record<string, ClipEntry>> = {
  fascia_stretch: { file: 'w_fascia_stretch.mp4', bytes: 734254, hash: '3c923eaa12ecbba2' },
  calf_stretch_straight: { file: 'w_calf_stretch_straight.mp4', bytes: 480322, hash: 'ceb10e90014054fe' },
  calf_stretch_bent: { file: '03_calf_stretch_bent.mp4', bytes: 1187711, hash: 'c93448d72b7f1f59' },
  ankle_rocks: { file: 'w_ankle_rocks.mp4', bytes: 630600, hash: 'fb8a595781d1d198' },
  eyes_closed_stand: { file: 'w_eyes_closed_stand.mp4', bytes: 453073, hash: '3d6553b470b82411' },
  foot_roll: { file: 'w_foot_roll.mp4', bytes: 494204, hash: 'df42d17e26c93785' },
  heel_raise_towel: { file: 'w_heel_raise_towel.mp4', bytes: 573086, hash: '13c1b1bdbe1f8b2c' },
  short_foot_seated: { file: '10_short_foot_seated_v2.mp4', bytes: 1320165, hash: 'ec62cd29c34f84ad' },
  single_leg_hold: { file: 'w_single_leg_hold.mp4', bytes: 496772, hash: 'f1a6498a750b9682' },
  short_foot_double: { file: '12_short_foot_double.mp4', bytes: 2054568, hash: 'b16644165a11edd0' },
  band_inversion: { file: 'w_band_inversion.mp4', bytes: 700722, hash: '43c0545d186b99b6' },
  short_foot_single: { file: '13_short_foot_single.mp4', bytes: 1720622, hash: '510bebb44e272d01' },
  hip_abduction: { file: 'w_hip_abduction.mp4', bytes: 446293, hash: '290dcc6bf458f505' },
  heel_raise_double: { file: 'w_heel_raise_double.mp4', bytes: 447994, hash: '9f5cacb7ad7e6ba9' },
  heel_raise_hold: { file: 'w_heel_raise_hold.mp4', bytes: 578266, hash: '4aba8cfcec26af5d' },
  big_toe_lift: { file: '22_big_toe_lift_v2.mp4', bytes: 3370064, hash: 'bf52a09cb6dff491' },
  knee_to_wall: { file: 'w_knee_to_wall.mp4', bytes: 561525, hash: 'de06265b82b296e4' },
  balance_pillow: { file: '25_balance_pillow.mp4', bytes: 1232604, hash: '2f1ee5a48d1c3cea' },
  heel_drop_straight: { file: '26_heel_drop_straight_knee.mp4', bytes: 1152648, hash: '37aa3bfe4ee3b43a' },
  step_down: { file: 'w_step_down.mp4', bytes: 563405, hash: '8f86a3f53745c42e' },
  pogo_hops: { file: 'w_pogo_hops.mp4', bytes: 677193, hash: '2ce3583f52a63c20' },
  heel_raise_plain: { file: 'w_heel_raise_plain.mp4', bytes: 627122, hash: '30ec39fd2c2a441a' },
  // Not a catalogue exercise: the single-leg calf raise the retest measures,
  // facing the viewer so the lifted leg and the heel rise both read.
  //
  // `_v2`: re-encoded from 1080p to 720p like every other clip (half the size,
  // and a lighter decode during the session). A new object name rather than an
  // overwrite, so the CDN cannot serve the old file against the new size, and
  // builds already installed keep fetching `retest.mp4`.
  retest_calf_raise: { file: 'retest_v2.mp4', bytes: 993491, hash: '9cd0221e0e59b0f3' },
};

/** What a full prefetch will cost, in bytes. Printed before it starts, because
 * "downloading…" with no figure is the kind of progress nobody trusts. */
export const CLIPS_TOTAL_BYTES = 21496704;

/**
 * Clips filmed wide, 16:9, framed on the legs and feet. The rest are upright,
 * 9:16, and show the whole body. The `w_` files replaced upright ones from
 * 28 October 2026: new object names, so builds already installed keep
 * fetching the old files.
 */
export const WIDE_CLIPS: ReadonlySet<string> = new Set([
  'ankle_rocks',
  'band_inversion',
  'calf_stretch_straight',
  'eyes_closed_stand',
  'fascia_stretch',
  'foot_roll',
  'heel_raise_double',
  'heel_raise_hold',
  'heel_raise_plain',
  'heel_raise_towel',
  'hip_abduction',
  'knee_to_wall',
  'pogo_hops',
  'single_leg_hold',
  'step_down',
]);

/** A clip's shape, width over height. */
export function clipShape(exerciseId: string): number {
  return WIDE_CLIPS.has(exerciseId) ? 16 / 9 : 9 / 16;
}

/**
 * An exercise with no entry resolves to nothing rather than to another
 * exercise's footage — somebody copying the wrong movement is worse than
 * somebody reading the instruction. The plan engine never schedules such an
 * exercise in the first place; it substitutes a fallback that has a clip.
 */
export function clipEntry(exerciseId: string): ClipEntry | null {
  return CLIPS[exerciseId] ?? null;
}
