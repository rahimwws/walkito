/**
 * The leg map's zones, and which one a tap means.
 *
 * Pure, and in its own file for the reason `answers.ts` and `access.ts` are:
 * `leg-map.tsx` imports react-native-svg and cannot load under `bun test`, and
 * this is the part with arithmetic in it. Hit testing is exactly the kind of
 * thing that fails quietly — the first version simply did nothing when a tap
 * missed a thin outline, which read as the map being broken.
 */

export type LegZone =
  | 'calf'
  | 'soleus'
  | 'tibia'
  | 'tib_ant'
  | 'ankle'
  | 'achilles'
  | 'heel'
  | 'dorsum'
  | 'arch'
  | 'ball'
  | 'toes'
  | 'inner_ankle';

/**
 * Every zone a user can report pain in — which is all of them.
 *
 * This started as the six the foot presents in, with the calf and shin drawn as
 * context only. That was wrong twice over: a runner with heel pain very often
 * hurts in the calf and the achilles too, and a drawing where some of what you
 * touch responds and some does not reads as broken rather than as deliberate.
 * If it is drawn, it answers.
 */
export const PAIN_ZONES: readonly LegZone[] = [
  'calf',
  'soleus',
  'tibia',
  'tib_ant',
  'achilles',
  'inner_ankle',
  'heel',
  'dorsum',
  'arch',
  'ball',
  'toes',
];

/** Human wording, for the line under the drawing. Plain names rather than
 * anatomical ones — the point is that the user recognises the place they just
 * touched. */
export const ZONE_LABELS: Readonly<Record<LegZone, string>> = {
  calf: 'Calf',
  soleus: 'Soleus',
  tibia: 'Shin',
  tib_ant: 'Front shin',
  ankle: 'Ankle',
  achilles: 'Achilles',
  heel: 'Heel',
  dorsum: 'Top of foot',
  arch: 'Arch',
  ball: 'Ball of foot',
  toes: 'Toes',
  inner_ankle: 'Inner ankle',
};

/**
 * Where each tappable zone lives, in viewBox units.
 *
 * Hit testing goes through these rather than through each path's own `onPress`,
 * and that is the difference between the map working and working "every other
 * time". A tap on an SVG path only counts when it lands inside the filled
 * outline, and these outlines are thin: the achilles is a sliver, the ball of
 * the foot is smaller than a fingertip. Missing by three points did nothing at
 * all, with no feedback to say why.
 *
 * Nearest-centre instead. Every tap in the foot picks the closest zone, so the
 * question becomes "which did they mean" rather than "did they hit it" — which
 * is the honest reading of a finger on a drawing this size.
 */
const ZONE_CENTRES: Readonly<Record<string, { x: number; y: number }>> = {
  calf: { x: 112, y: 120 },
  soleus: { x: 140, y: 260 },
  tibia: { x: 190, y: 200 },
  tib_ant: { x: 227, y: 175 },
  achilles: { x: 140, y: 395 },
  // No separate centre for `ankle`: its mass sits almost exactly on top of
  // `inner_ankle`, and two centres that close make the nearest-centre test a
  // coin flip. A tap on the ankle resolves to the inner one, which is the
  // reading that matters for this condition.
  inner_ankle: { x: 190, y: 415 },
  heel: { x: 138, y: 482 },
  arch: { x: 235, y: 492 },
  dorsum: { x: 298, y: 470 },
  ball: { x: 325, y: 510 },
  toes: { x: 368, y: 503 },
};

/**
 * How far off a centre a tap can land and still count, in viewBox units.
 *
 * Generous, because the alternative is the failure this replaced: nothing
 * happening, with no way to tell a miss from a bug. Wide enough that anywhere
 * on the leg resolves to the nearest part of it, tight enough that a tap in the
 * empty margin beside the calf still does nothing.
 */
const HIT_RADIUS = 120;

/** The viewBox, which the tap has to be converted into. */
const VIEW = { x: 44, y: -2, width: 356, height: 532 };

export function zoneAt(px: number, py: number, size: { width: number; height: number }): LegZone | null {
  if (size.width === 0 || size.height === 0) return null;
  const vx = VIEW.x + (px / size.width) * VIEW.width;
  const vy = VIEW.y + (py / size.height) * VIEW.height;

  let best: LegZone | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const zone of PAIN_ZONES) {
    const centre = ZONE_CENTRES[zone];
    if (centre == null) continue;
    const distance = Math.hypot(centre.x - vx, centre.y - vy);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = zone;
    }
  }
  return bestDistance <= HIT_RADIUS ? best : null;
}

/**
 * How many places can be marked at once.
 *
 * Three. The relief session runs to four exercises, so a fourth zone could only
 * be honoured by giving some zone nothing — and a list of five aches is not a
 * report the app can act on, it is a description of a bad week. Three is enough
 * to say "heel, and the calf and achilles with it", which is the common picture
 * for this condition.
 */
export const MAX_ZONES = 3;

/**
 * The new selection after tapping `zone`, or null when the tap is refused.
 *
 * Null rather than the unchanged list, so the caller can tell "nothing changed"
 * from "nothing happened" and say so. Silently ignoring the tap is the exact
 * failure the hit testing was just rewritten to remove — a map that does not
 * respond reads as broken, whatever the reason.
 *
 * Deselecting is never refused. Being at the cap is what stops a fourth going
 * in, and the way out of that has to stay open.
 */
export function toggleZone(
  current: readonly LegZone[],
  zone: LegZone,
): readonly LegZone[] | null {
  if (current.includes(zone)) return current.filter((z) => z !== zone);
  if (current.length >= MAX_ZONES) return null;
  return [...current, zone];
}
