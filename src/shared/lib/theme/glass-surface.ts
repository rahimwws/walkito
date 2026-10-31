/**
 * Which material a glass surface draws. PURE, so the rule can be tested.
 *
 * - `liquid-glass`: the system's material, iOS 26 and later.
 * - `blur`: a blur with a thin sheen, on older iOS.
 * - `solid`: a flat fill.
 *
 * Reduce Transparency wins over both materials: the user asked for surfaces
 * they can see through to stop being see-through. Android always draws the
 * fill. It has no Liquid Glass, and `BlurView` there is an experimental
 * render-to-bitmap that tears under a moving face, so the honest version of
 * glass on Android is a solid one.
 */
export type GlassSurface = 'liquid-glass' | 'blur' | 'solid';

export function surfaceFor(
  glassAvailable: boolean,
  reduceTransparency: boolean,
  os: string,
): GlassSurface {
  if (os !== 'ios' || reduceTransparency) return 'solid';
  return glassAvailable ? 'liquid-glass' : 'blur';
}
