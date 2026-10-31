/**
 * The lip under a see-through face. PURE, so its geometry can be tested.
 *
 * An opaque face hides the ledge behind it, so the ledge can simply be the
 * face's own shape moved down. A glass face cannot: the ledge would show
 * through it as a grey slab. What is drawn instead is only the part of that
 * moved shape that sticks out below the face, a crescent.
 *
 * That part is the band between the face's bottom outline and the same outline
 * `depth` lower. Traced as one closed path: down the left side of the lower
 * shape, along its rounded bottom, up its right side, then back along the
 * face's own bottom corners. Arcs, not curves approximating them, so the band
 * meets the face's corners exactly.
 *
 * The radius is clamped to half the shorter side, as a view's `borderRadius`
 * is, so a capsule (radius >= height / 2) traces its true outline. On a capsule
 * the two outlines touch at the ends rather than running parallel, and the path
 * there leaves a sliver of `depth² / 2r` outside the lower shape: a quarter of
 * a point on a 36pt pill, below anything a screen can show.
 */
export function crescentPath(width: number, height: number, radius: number, depth: number): string {
  if (width <= 0 || height <= 0 || depth <= 0) return '';
  const r = Math.max(0, Math.min(radius, width / 2, height / 2));
  const w = width;
  const h = height;
  const d = depth;

  const n = (v: number) => Number(v.toFixed(3));

  return [
    `M 0 ${n(h - r)}`,
    // Down the lower shape's left side.
    `L 0 ${n(h + d - r)}`,
    // Its bottom-left corner: 9 o'clock to 6, counter-clockwise on screen.
    `A ${n(r)} ${n(r)} 0 0 0 ${n(r)} ${n(h + d)}`,
    `L ${n(w - r)} ${n(h + d)}`,
    // Bottom-right: 6 o'clock to 3.
    `A ${n(r)} ${n(r)} 0 0 0 ${n(w)} ${n(h + d - r)}`,
    // Up to where the face's own corner starts.
    `L ${n(w)} ${n(h - r)}`,
    // The face's bottom-right corner, traced back: 3 o'clock to 6, clockwise.
    `A ${n(r)} ${n(r)} 0 0 1 ${n(w - r)} ${n(h)}`,
    `L ${n(r)} ${n(h)}`,
    // And its bottom-left: 6 o'clock to 9.
    `A ${n(r)} ${n(r)} 0 0 1 0 ${n(h - r)}`,
    'Z',
  ].join(' ');
}
