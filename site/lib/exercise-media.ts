/**
 * The clips re-filmed close up on the legs and feet for app 1.0.8 (Oct 2026).
 * They are wide (16:9, 800 x 450, the whole 8-second loop) and each has the
 * app's drawing of the same move, `/exercises/<id>-drawing.webp` (+ `@2x`),
 * shown beside it. The rest are the older 4:5 cuts from
 * `scripts/exercise-media.mjs`.
 */
export const WIDE_MEDIA: ReadonlySet<string> = new Set([
  'fascia_stretch', 'calf_stretch_straight', 'calf_stretch_bent', 'heel_raise_towel',
  'short_foot_seated', 'short_foot_double', 'short_foot_single', 'single_leg_hold',
  'foot_roll', 'heel_raise_double', 'heel_raise_hold', 'big_toe_lift',
  'band_inversion', 'hip_abduction', 'ankle_rocks', 'heel_drop_straight',
]);
