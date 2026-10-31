import type { MascotRig } from '@/shared/ui/mascot';

/** Where the figure is inside the square it is fitted to, in points. */
export type PeekFigure = { left: number; top: number; right: number; bottom: number };

type Bounds = { left: number; top: number; right: number; bottom: number };
const BOUNDS = new Map<string, Bounds>();

/**
 * The figure's extent in the rig's own units, from its traced silhouettes.
 *
 * A peeking pose is cut off at one edge of its box, and that cut has to lie
 * exactly along the card's edge whatever room the box leaves around the art,
 * so the figure is placed by its silhouette rather than by its square. Paths
 * are absolute `M`/`L`/`C` pairs, so the numbers alternate x and y. Read once
 * per rig. (The onboarding answer cards place their peeking figure the same
 * way; if a third place needs it, it belongs in `shared/ui/mascot`.)
 */
function boundsOf(rig: MascotRig): Bounds {
  const known = BOUNDS.get(rig.name);
  if (known != null) return known;
  const found = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
  for (const d of rig.bodies) {
    const numbers = d.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
    for (let i = 0; i + 1 < numbers.length; i += 2) {
      const x = Number(numbers[i]);
      const y = Number(numbers[i + 1]);
      found.left = Math.min(found.left, x);
      found.right = Math.max(found.right, x);
      found.top = Math.min(found.top, y);
      found.bottom = Math.max(found.bottom, y);
    }
  }
  const bounds = Number.isFinite(found.left)
    ? found
    : { left: rig.box.x, top: rig.box.y, right: rig.box.x + rig.box.size, bottom: rig.box.y + rig.box.size };
  BOUNDS.set(rig.name, bounds);
  return bounds;
}

/** The figure's edges inside a `size` square, measured from its top-left corner. */
export function peekFigure(rig: MascotRig, size: number): PeekFigure {
  const bounds = boundsOf(rig);
  const k = size / rig.box.size;
  return {
    left: (bounds.left - rig.box.x) * k,
    top: (bounds.top - rig.box.y) * k,
    right: (bounds.right - rig.box.x) * k,
    bottom: (bounds.bottom - rig.box.y) * k,
  };
}
