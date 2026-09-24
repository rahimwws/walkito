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
  // Not a catalogue exercise: the single-leg calf raise the retest measures,
  // facing the viewer so the lifted leg and the heel rise both read.
  retest_calf_raise: { file: 'retest.mp4', bytes: 2019794, hash: 'cdf781b4ad0a2133' },
};

/** What a full prefetch will cost, in bytes. Printed before it starts, because
 * "downloading…" with no figure is the kind of progress nobody trusts. */
export const CLIPS_TOTAL_BYTES = 16916159;

/**
 * Six of the eighteen exercises have no clip: `heel_raise_plain`,
 * `short_foot_single`, `hip_abduction`, `heel_toe_walk`, `barefoot_home`,
 * `breathing_reset`. They resolve to nothing rather than to another exercise's
 * footage — somebody copying the wrong movement is worse than somebody reading
 * the instruction.
 */
export function clipEntry(exerciseId: string): ClipEntry | null {
  return CLIPS[exerciseId] ?? null;
}
