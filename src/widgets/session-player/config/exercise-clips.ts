import type { VideoSource } from 'expo-video';

/**
 * The demonstration loop for each exercise, keyed by catalogue id.
 *
 * Bundled rather than streamed, and that is a decision about the moment rather
 * than about bytes: mid-session the user is standing on one foot with the phone
 * propped against a wall, and a first frame that arrives late turns the card
 * into an empty square at exactly the point it has to explain what to do.
 *
 * Encoded at the source resolution (720×1280) at CRF 18, which measures SSIM
 * 0.995+ against the masters — visually the same footage. An earlier pass
 * downscaled to 540p and landed at 68kbit/s, a fifteenth of the source
 * bitrate; it was a sixteenth of the size and looked it. 14MB for the set is
 * the price of the demonstration being legible, and the demonstration is the
 * screen.
 *
 * Keyed by id, not by title. A title is copy and will be reworded; an id is the
 * contract, and a renamed exercise silently losing its clip is the kind of bug
 * that looks like nothing at all.
 */
const CLIPS: Readonly<Record<string, VideoSource>> = {
  fascia_stretch: require('@assets/exercises/01_plantar_stretch.mp4'),
  calf_stretch_straight: require('@assets/exercises/02_calf_stretch_knee_straight.mp4'),
  calf_stretch_bent: require('@assets/exercises/03_soleus_stretch_knee_bent.mp4'),
  toe_spread: require('@assets/exercises/04_toe_spread.mp4'),
  ankle_rocks: require('@assets/exercises/05_ankle_rocks.mp4'),
  eyes_closed_stand: require('@assets/exercises/06_eyes_closed_stand.mp4'),
  foot_roll: require('@assets/exercises/07_foot_roll.mp4'),
  heel_raise_towel: require('@assets/exercises/09_heel_raises_with_towel.mp4'),
  short_foot_seated: require('@assets/exercises/10_short_foot_seated.mp4'),
  single_leg_hold: require('@assets/exercises/11_single_leg_hold.mp4'),
  short_foot_double: require('@assets/exercises/12_short_foot_standing.mp4'),
  band_inversion: require('@assets/exercises/14_band_inversion.mp4'),
};

/**
 * Six of the eighteen have no clip yet: `heel_raise_plain`, `short_foot_single`,
 * `hip_abduction`, `heel_toe_walk`, `barefoot_home`, `breathing_reset`.
 *
 * They return null rather than falling back to another exercise's loop, which
 * is what the placeholder used to do. A person copying a movement from the
 * wrong video is a worse outcome than a person reading the instruction — the
 * fallback was not a graceful degradation, it was silently teaching the wrong
 * thing to eleven exercises out of twelve.
 */
export function clipFor(exerciseId: string): VideoSource | null {
  return CLIPS[exerciseId] ?? null;
}

/** Whether this exercise can be demonstrated at all, for callers that need to
 * lay out differently rather than leave a black rectangle. */
export function hasClip(exerciseId: string): boolean {
  return exerciseId in CLIPS;
}
