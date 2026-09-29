/**
 * The numbers behind the launch reveal, kept apart from the component that
 * draws it so a test can pin them down.
 *
 * Every function here is a worklet: the reveal evaluates them on the UI thread
 * once a frame, from shared values, and the tests call them as plain functions.
 */

export type Point = { x: number; y: number };
export type Box = { x: number; y: number; size: number };

/**
 * The mascot's square, in points, at the exact centre of the window.
 *
 * One number for three pictures that must be the same picture: the native
 * splash (`imageWidth` of the expo-splash-screen plugin in app.json), the
 * first frame of the JS reveal, and the reload screen expo-updates draws
 * between two bundles (`HANDOFF_SIZE` in `features/app-update`, which is this
 * constant). 200 × 3 is the @3x still's 600 px, so on a 3x screen none of them
 * resamples it.
 */
export const SPLASH_MASCOT_SIZE = 200;

/**
 * The centre of the mascot's largest solid region, as a fraction of his
 * square: the middle of the flower-shaped body, a little left of and well above
 * the square's own centre (his legs and raised arm pull that down and right).
 *
 * The zoom is centred here rather than on the square, because this is the one
 * point whose surroundings stay opaque the longest as he grows, so it is where
 * the window onto the app keeps opening outwards evenly instead of splitting
 * between his legs.
 *
 * Measured from the still's alpha channel (assets/update/mascot-handoff*.png):
 * pixels at alpha ≥ 222 counted as solid (the threshold `SOLID_ALPHA_GAIN`
 * lifts to fully opaque), an exact Euclidean distance transform over that mask,
 * and the maximum taken. At @3x the largest inscribed circle has radius 91.2 px
 * of 600 at (294, 237); @2x and @1x agree to within a pixel. Checked back at
 * the rounded centre below, the clear radius is 0.1507 / 0.1500 / 0.1507 of the
 * square at @3x / @2x / @1x.
 *
 * Re-measure both numbers if the still is ever redrawn.
 */
export const MASCOT_FOCUS: Point = { x: 0.49, y: 0.39 };

/**
 * The radius around `MASCOT_FOCUS` that is solid body, as a fraction of the
 * square's side. The measured 0.150, less a little for linear filtering, which
 * blends each sample with its neighbours once the image is magnified.
 */
export const MASCOT_FOCUS_RADIUS = 0.145;

/**
 * How far the hole's alpha is multiplied before it is used.
 *
 * The still's body is drawn at alpha 254 and its inner line work (eyes, mouth,
 * the arm's outline) at 234–253, so a hole cut with the raw alpha would leave a
 * faint ghost of his face over the app, twenty times life size. Everything
 * inside him is at least 234; ×1.15 takes all of it to 1 and barely moves the
 * anti-aliased outer edge.
 */
export const SOLID_ALPHA_GAIN = 1.15;

/** Headroom on the scale that just covers the farthest corner, so the soft,
 * magnified edge of the silhouette is past the corner too. */
export const COVER_MARGIN = 1.06;

/** The anticipation: he crouches to this scale before he leaps. */
export const CROUCH_SCALE = 0.9;
export const CROUCH_MS = 180;
/** A small lean into the crouch, radians. Straightened out during the leap. */
export const CROUCH_TILT = -0.045;

/** The leap: from the crouch to past the screen's corners. */
export const ZOOM_MS = 560;
/**
 * The zoom's ease-in, as a power of its progress.
 *
 * Scale is interpolated in log space — a doubling always looks like the same
 * amount of zoom — so this power is the perceived speed curve: 2 starts from
 * rest, where the crouch left off, and accelerates steadily to the end.
 */
export const ZOOM_EASE_POWER = 2;

/** The whole reveal, from the start of the crouch to the overlay unmounting. */
export const REVEAL_MS = CROUCH_MS + ZOOM_MS;

/** Reduce Motion: no zoom at all, the splash fades off the app. */
export const REDUCED_FADE_MS = 250;

/**
 * The reveal starts by this long after the overlay mounts, whatever it is
 * still waiting for, so a font that never resolves or an image that never
 * decodes can delay the app but never shut it away.
 */
export const REVEAL_BY_MS = 2500;

/** Past the reveal's own length, the overlay is removed even if the
 * animation's completion never arrives. */
export const UNMOUNT_GRACE_MS = 500;

/**
 * Once the app is ready, how long the zoom may wait for Skia to have drawn
 * its first picture. Past this the splash fades instead, so the time added
 * after the app is ready stays under 0.9 s either way: two frames, this, and
 * the reveal. In practice Skia is ready first; it starts a frame after the
 * cover, while the fonts are still loading.
 */
export const MASK_GRACE_MS = 120;

/**
 * Stretches of the zoom's linear progress (0–1) over which the three layers
 * change. The hole is fully open before the drawn mascot starts to fade, so
 * what shows through him as he fades is the app, never the background.
 *
 * The drawn mascot stays whole until he has visibly grown (about 1.2×), is
 * half faded near 1.8× and gone past 3× (on a phone-sized window). He has to
 * be seen growing: once he is only a hole, his edge is invisible wherever the
 * app shows its own background, which is the splash's colour. Faded any
 * earlier, he would dissolve in place and the content would pop in where the
 * unseen edge crossed it.
 */
export const HOLE_OPEN_TO = 0.08;
export const ART_FADE_FROM = 0.3;
export const ART_FADE_TO = 0.65;
/** Insurance at the very end: what is left of the background fades as the
 * corners are pushed out, so unmounting the overlay can never show as a cut. */
export const VEIL_FADE_FROM = 0.85;

function clamp01(value: number): number {
  'worklet';
  if (!(value > 0)) return 0;
  return value > 1 ? 1 : value;
}

/** 0 at `from`, 1 at `to`, eased at both ends. */
export function smoothstep(from: number, to: number, value: number): number {
  'worklet';
  const t = clamp01((value - from) / (to - from));
  return t * t * (3 - 2 * t);
}

/**
 * The mascot's square for a window, centred and snapped to the pixel grid.
 *
 * Snapped because the first frame is drawn twice — by a React Native `Image`,
 * whose frame Yoga rounds to whole device pixels, and then by Skia, which does
 * not round. Both are handed this box, so both land on the same pixels and the
 * swap between them cannot shimmer.
 */
export function mascotBox(width: number, height: number, pixelRatio: number): Box {
  'worklet';
  const size = SPLASH_MASCOT_SIZE;
  const ratio = pixelRatio > 0 ? pixelRatio : 1;
  const snap = (value: number) => Math.round(value * ratio) / ratio;
  return { x: snap((width - size) / 2), y: snap((height - size) / 2), size };
}

/** `MASCOT_FOCUS` in window points, for a given square. */
export function focusPoint(box: Box): Point {
  'worklet';
  return { x: box.x + MASCOT_FOCUS.x * box.size, y: box.y + MASCOT_FOCUS.y * box.size };
}

/** The solid radius around the focus at scale 1, in points. */
export function focusRadius(box: Box): number {
  'worklet';
  return MASCOT_FOCUS_RADIUS * box.size;
}

/**
 * The scale, about `focus`, at which a solid circle of `radius` covers the
 * whole `width × height` window: the distance to the farthest corner over the
 * radius, with `COVER_MARGIN` on top. Since the circle and the scaling share a
 * centre, a rotation about that centre cannot uncover a corner either.
 */
export function coverScale(width: number, height: number, focus: Point, radius: number): number {
  'worklet';
  const dx = Math.max(focus.x, width - focus.x);
  const dy = Math.max(focus.y, height - focus.y);
  return (Math.hypot(dx, dy) / radius) * COVER_MARGIN;
}

/**
 * The mascot's scale at a moment of the reveal.
 *
 * `crouch` is the crouch's eased progress, `zoom` the leap's linear progress,
 * both 0–1. The crouch takes 1 to `CROUCH_SCALE`; the leap then grows
 * geometrically from there to `endScale`, eased in by `ZOOM_EASE_POWER`.
 */
export function revealScale(crouch: number, zoom: number, endScale: number): number {
  'worklet';
  const crouched = 1 + (CROUCH_SCALE - 1) * clamp01(crouch);
  const eased = Math.pow(clamp01(zoom), ZOOM_EASE_POWER);
  return crouched * Math.pow(endScale / CROUCH_SCALE, eased);
}

/** His lean, radians: into the crouch, then straightened out by mid-leap. */
export function revealTilt(crouch: number, zoom: number): number {
  'worklet';
  return CROUCH_TILT * clamp01(crouch) * (1 - smoothstep(0, 0.5, zoom));
}

/** How strongly the hole is cut, 0–1. */
export function holeOpacity(zoom: number): number {
  'worklet';
  return smoothstep(0, HOLE_OPEN_TO, zoom);
}

/** The drawn mascot on top of the hole, 0–1. */
export function artOpacity(zoom: number): number {
  'worklet';
  return 1 - smoothstep(ART_FADE_FROM, ART_FADE_TO, zoom);
}

/** The whole overlay, 0–1. */
export function veilOpacity(zoom: number): number {
  'worklet';
  return 1 - smoothstep(VEIL_FADE_FROM, 1, zoom);
}
