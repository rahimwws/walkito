/**
 * The mascot on the update sheet, and the geometry it hands to the native
 * reload screen.
 *
 * The sheet ends by covering the screen in the app's background with the
 * mascot in the middle, and then expo-updates draws its own reload screen over
 * the top. Those two pictures have to be the same picture, pixel for pixel, or
 * the restart shows as a jump. Everything that decides the second one is here
 * so the first one is drawn from the same numbers.
 */

import { SPLASH_MASCOT_SIZE } from '@/shared/ui/splash';

/**
 * The welcome screen's character. Required directly rather than through
 * `pages/onboarding` (a feature may not import a page); Metro resolves both
 * requires to the same module, so it is in the bundle once.
 *
 * A raster sequence in a JSON wrapper — 121 WebP frames at 720×720, 24fps. See
 * `pages/onboarding/config/mascot.ts` for what that costs to mount.
 */
export const MASCOT_LOTTIE = require('@assets/lottie/mascot.json');

/**
 * One frame of that animation as a still: frame 84, the top of his first hop,
 * mouth open. Rendered straight out of the Lottie's own WebP (720px, resampled
 * to 200/400/600 for @1x/@2x/@3x), so where the two are drawn at the same size
 * they are the same pixels.
 *
 * This is what the native reload screen shows, what the sheet crossfades to
 * before it starts moving him, and the face on the "updated" note after.
 */
export const MASCOT_STILL = require('@assets/update/mascot-handoff.png');

/** The frames of that hop: take-off, and the landing the still is two frames
 * short of. Played as he jumps so the crossfade lands on a matching pose. */
export const HOP_FROM_FRAME = 81;
export const HOP_TO_FRAME = 87;
/** How long frame 81 → 84 takes at 24fps: when the crossfade should peak. */
export const HOP_PEAK_MS = ((84 - HOP_FROM_FRAME) / 24) * 1000;

/**
 * The square the reload screen draws the still into, in points (dp on
 * Android), centred on the screen.
 *
 * Passed to expo-updates as `{ width, height, scale: 1 }`. Both platforms size
 * the image view as `width × scale` by `height × scale` and centre it — iOS
 * with Auto Layout in the full-screen overlay window
 * (`ReloadScreenView.swift`, `addImageView`), Android with `FrameLayout`
 * gravity `CENTER` in the activity's content view (`ReloadScreenView.kt`,
 * `addImageView`, `dpToPx`). With `contain` a square image fills a square box
 * exactly, so the picture is this square at the centre of the screen, nothing
 * else. 200 × 3 = 600 is the @3x file's size, so on a 3x screen neither side
 * resamples at all.
 *
 * It is the launch splash's square, not merely equal to it: the relaunched
 * bundle opens on `SplashReveal`, which draws the same still in this square,
 * so the reload screen fades onto an identical picture and the restart plays
 * out like a cold start.
 */
export const HANDOFF_SIZE = SPLASH_MASCOT_SIZE;

/** The mascot's box while he stands on the sheet. Drawn as `HANDOFF_SIZE`
 * scaled down, so the glide to the middle is a transform and never a relayout
 * of a Lottie or a re-decode of an image. */
export const SHEET_MASCOT_SIZE = 150;

/** Where his feet are, as a fraction of the box from the top — frame 0 stands
 * on row 635 of 720. The sheet plants this line just inside the card's edge. */
export const MASCOT_FEET = 0.88;
