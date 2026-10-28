import type { ImageSourcePropType } from "react-native";

/**
 * A still of each exercise, cut from its clip, for wherever the move is named
 * before it plays: a row in today's moves, the frame a clip fades in over.
 *
 * Bundled, unlike the clips: fifteen small WebP stills are about 0.1 MB, and a
 * list of moves should show what each one is before a single clip has
 * downloaded. Only the wide clips have one; an upright clip's row keeps its
 * emoji.
 */
const POSTERS: Readonly<Record<string, ImageSourcePropType>> = {
  ankle_rocks: require("@assets/exercise-posters/ankle_rocks.webp"),
  band_inversion: require("@assets/exercise-posters/band_inversion.webp"),
  calf_stretch_straight: require("@assets/exercise-posters/calf_stretch_straight.webp"),
  eyes_closed_stand: require("@assets/exercise-posters/eyes_closed_stand.webp"),
  fascia_stretch: require("@assets/exercise-posters/fascia_stretch.webp"),
  foot_roll: require("@assets/exercise-posters/foot_roll.webp"),
  heel_raise_double: require("@assets/exercise-posters/heel_raise_double.webp"),
  heel_raise_hold: require("@assets/exercise-posters/heel_raise_hold.webp"),
  heel_raise_plain: require("@assets/exercise-posters/heel_raise_plain.webp"),
  heel_raise_towel: require("@assets/exercise-posters/heel_raise_towel.webp"),
  hip_abduction: require("@assets/exercise-posters/hip_abduction.webp"),
  knee_to_wall: require("@assets/exercise-posters/knee_to_wall.webp"),
  pogo_hops: require("@assets/exercise-posters/pogo_hops.webp"),
  single_leg_hold: require("@assets/exercise-posters/single_leg_hold.webp"),
  step_down: require("@assets/exercise-posters/step_down.webp"),
};

/** The still for an exercise, or null when it has none. */
export function posterFor(exerciseId: string): ImageSourcePropType | null {
  return POSTERS[exerciseId] ?? null;
}
