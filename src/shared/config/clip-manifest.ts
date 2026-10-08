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
  fascia_stretch: { file: '01_plantar_stretch.mp4', bytes: 1108109, hash: '2844273f9d31d0d7' },
  calf_stretch_straight: { file: '02_calf_stretch_straight.mp4', bytes: 1272504, hash: 'a5dcfa071680b817' },
  calf_stretch_bent: { file: '03_calf_stretch_bent.mp4', bytes: 1187711, hash: 'c93448d72b7f1f59' },
  toe_spread: { file: '04_toe_spread_out.mp4', bytes: 1327532, hash: 'a6c33f76ef91670e' },
  ankle_rocks: { file: '05_ankle_rocks.mp4', bytes: 1310746, hash: '1ded039134d189da' },
  eyes_closed_stand: { file: '06_eyes_closed_stand_v2.mp4', bytes: 1229970, hash: '46b1253d66ec9450' },
  foot_roll: { file: '07_foot_roll_v2.mp4', bytes: 1378933, hash: 'b0cf6f839867ccb7' },
  heel_raise_towel: { file: '09_heel_raise_towel.mp4', bytes: 1200991, hash: '7a20c30b506aa39a' },
  short_foot_seated: { file: '10_short_foot_seated_v2.mp4', bytes: 1320165, hash: 'ec62cd29c34f84ad' },
  single_leg_hold: { file: '11_single_leg_hold_v2.mp4', bytes: 1241420, hash: '16ba7582d6e51eff' },
  short_foot_double: { file: '12_short_foot_double.mp4', bytes: 2054568, hash: 'b16644165a11edd0' },
  band_inversion: { file: '14_band_inversion_v2.mp4', bytes: 1310680, hash: '8bd639a8945f5be3' },
  short_foot_single: { file: '13_short_foot_single.mp4', bytes: 1720622, hash: '510bebb44e272d01' },
  hip_abduction: { file: '16_hip_abduction_side.mp4', bytes: 1263493, hash: '7febfaec60dc0ad8' },
  heel_raise_double: { file: '19_heel_raise_double.mp4', bytes: 1197636, hash: '915862b8623a6f4a' },
  heel_raise_seated: { file: '20_heel_raise_seated.mp4', bytes: 1297827, hash: 'e0134cfea989da5c' },
  heel_raise_hold: { file: '21_heel_raise_hold_v2.mp4', bytes: 1174374, hash: 'b63fb1b510615d81' },
  big_toe_lift: { file: '22_big_toe_lift_v2.mp4', bytes: 3370064, hash: 'bf52a09cb6dff491' },
  towel_scrunch: { file: '23_towel_scrunch.mp4', bytes: 1111534, hash: 'f54b8db6d2d9330f' },
  knee_to_wall: { file: '24_knee_to_wall.mp4', bytes: 1569937, hash: '100801e1ef20241e' },
  balance_pillow: { file: '25_balance_pillow.mp4', bytes: 1232604, hash: '2f1ee5a48d1c3cea' },
  heel_drop_straight: { file: '26_heel_drop_straight_knee.mp4', bytes: 1152648, hash: '37aa3bfe4ee3b43a' },
  tibialis_raise: { file: '29_tibialis_raise_v2.mp4', bytes: 1308769, hash: 'ede69a94bd0ae0fa' },
  step_down: { file: '34_step_down_v2.mp4', bytes: 1269606, hash: '2b372a4dc392809f' },
  sole_massage: { file: '36_sole_massage_v2.mp4', bytes: 1344096, hash: '2edd7b9113774803' },
  pogo_hops: { file: '37_pogo_hops_v2.mp4', bytes: 1095797, hash: '626d188022e076b6' },
  heel_raise_plain: { file: '17_heel_raise_plain.mp4', bytes: 1260793, hash: '8372f105a3176b18' },
  heel_raise_bent_knee: { file: '28_heel_raise_bent_knee.mp4', bytes: 1301451, hash: '6ccd09f9d5aa7ad3' },
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
export const CLIPS_TOTAL_BYTES = 39608071;

/**
 * An exercise with no entry resolves to nothing rather than to another
 * exercise's footage — somebody copying the wrong movement is worse than
 * somebody reading the instruction. The plan engine never schedules such an
 * exercise in the first place; it substitutes a fallback that has a clip.
 */
export function clipEntry(exerciseId: string): ClipEntry | null {
  return CLIPS[exerciseId] ?? null;
}
