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
  calf_stretch_straight: { file: '02_calf_stretch_knee_straight.mp4', bytes: 1495488, hash: 'f58b590701cf039f' },
  calf_stretch_bent: { file: '03_soleus_stretch_knee_bent.mp4', bytes: 1247854, hash: 'd811fab9355debb6' },
  toe_spread: { file: '04_toe_spread.mp4', bytes: 1098612, hash: '2dd3fe8af38cf88c' },
  ankle_rocks: { file: '05_ankle_rocks.mp4', bytes: 1310746, hash: '1ded039134d189da' },
  eyes_closed_stand: { file: '06_eyes_closed_stand.mp4', bytes: 1201140, hash: '40677a17abef9bfb' },
  foot_roll: { file: '07_foot_roll.mp4', bytes: 1186598, hash: '9dfc8d99d16915de' },
  heel_raise_towel: { file: '09_heel_raises_with_towel.mp4', bytes: 1259127, hash: '157d198e02d1d17b' },
  short_foot_seated: { file: '10_short_foot_seated.mp4', bytes: 1171334, hash: '6c2c45fb329e5503' },
  single_leg_hold: { file: '11_single_leg_hold.mp4', bytes: 1122401, hash: '508357915ea4f126' },
  short_foot_double: { file: '12_short_foot_standing.mp4', bytes: 1495364, hash: '75ec9f70be35e749' },
  band_inversion: { file: '14_band_inversion.mp4', bytes: 1199592, hash: 'b9c2c7255df74174' },
  short_foot_single: { file: '13_short_foot_one_leg.mp4', bytes: 938277, hash: '071f8796cc369ff1' },
  hip_abduction: { file: '16_hip_abduction.mp4', bytes: 1465012, hash: '14b258634bd23c65' },
  heel_raise_double: { file: '19_double_leg_heel_raise.mp4', bytes: 1154382, hash: 'ca1729733382af65' },
  heel_raise_seated: { file: '20_seated_heel_raise.mp4', bytes: 546040, hash: '7df4a58fd60f253f' },
  heel_raise_hold: { file: '21_heel_raise_hold.mp4', bytes: 1160943, hash: '505f8b5f1d49b002' },
  big_toe_lift: { file: '22_big_toe_lift.mp4', bytes: 1134881, hash: '5358e0521d998639' },
  towel_scrunch: { file: '23_towel_scrunch.mp4', bytes: 1111534, hash: 'f54b8db6d2d9330f' },
  knee_to_wall: { file: '24_knee_to_wall.mp4', bytes: 1569937, hash: '100801e1ef20241e' },
  balance_pillow: { file: '25_balance_on_pillow.mp4', bytes: 1037450, hash: 'd877b69bfc783ac8' },
  heel_drop_straight: { file: '26_heel_drop_straight_knee.mp4', bytes: 1152648, hash: '37aa3bfe4ee3b43a' },
  tibialis_raise: { file: '29_tibialis_raise.mp4', bytes: 1280503, hash: 'cfc2bc2ac00dfd0a' },
  step_down: { file: '34_step_down.mp4', bytes: 462515, hash: '05154c48e2d64f82' },
  sole_massage: { file: '36_sole_massage.mp4', bytes: 1123203, hash: '2109de4f41dc5e5b' },
  pogo_hops: { file: '37_pogo_hops.mp4', bytes: 1167534, hash: 'daa7d7462a82ddb5' },
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
export const CLIPS_TOTAL_BYTES = 31194715;

/**
 * An exercise with no entry resolves to nothing rather than to another
 * exercise's footage — somebody copying the wrong movement is worse than
 * somebody reading the instruction. The plan engine never schedules such an
 * exercise in the first place; it substitutes a fallback that has a clip.
 */
export function clipEntry(exerciseId: string): ClipEntry | null {
  return CLIPS[exerciseId] ?? null;
}
