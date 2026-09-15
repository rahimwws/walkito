/**
 * Where each level begins.
 *
 * A config file rather than numbers inline, because these thresholds are the
 * app's only claim that cannot be gamed. A level moves when a measurement earns
 * it and at no other time — not on a streak, not on elapsed days, not on
 * finishing a session. If the thresholds were scattered through the code that
 * renders them, one of those copies would eventually drift and the claim would
 * quietly become false.
 */

/** The four things a retest reports. Three are measured; symmetry is derived. */
export type ZoneKey = 'calf' | 'arch' | 'balance' | 'symmetry';

/** The order every surface reports them in. */
export const ZONES: readonly ZoneKey[] = ['calf', 'arch', 'balance', 'symmetry'];

/** Levels run 1–5. Sitting at one for months is a normal outcome. */
export const MAX_LEVEL = 5;

type ZoneScale = {
  /** What the figure is written with — reps have no suffix. */
  unit: string;
  /**
   * The lowest figure reaching Lv2, Lv3, Lv4 and Lv5 in turn.
   *
   * For `descending` zones this reads the other way: the highest figure still
   * good enough for that level.
   */
  steps: readonly [number, number, number, number];
  /** Symmetry is a gap between sides, so a smaller figure is further on. */
  descending?: boolean;
};

/**
 * The scale, per zone.
 *
 * Boundaries are closed at the bottom for the ascending zones — 15 calf raises
 * is Lv3, not the top of Lv2. Symmetry is the exception and is closed at the
 * top: the published bands overlap at 20, 12 and 6, and a figure landing exactly
 * on one is read as the lower level. Rounding a user *up* into a level they did
 * not clear is the one direction this must never fail in.
 */
const ZONE_SCALE: Readonly<Record<ZoneKey, ZoneScale>> = {
  calf: { unit: '', steps: [8, 15, 22, 29] },
  balance: { unit: 's', steps: [5, 11, 21, 31] },
  arch: { unit: 's', steps: [10, 21, 36, 51] },
  symmetry: { unit: '%', steps: [30, 20, 12, 6], descending: true },
};

/**
 * The level a raw measurement lands in, 1–`MAX_LEVEL`.
 *
 * Ascending zones advance when the figure reaches a step. Symmetry advances
 * when the gap falls below one — strictly below, so 20% stays Lv2 rather than
 * being promoted on the boundary.
 */
export function levelFor(zone: ZoneKey, value: number): number {
  const { steps, descending } = ZONE_SCALE[zone];
  let level = 1;
  for (const step of steps) {
    if (descending ? value < step : value >= step) level += 1;
    else break;
  }
  return Math.min(level, MAX_LEVEL);
}

/** A measurement as a row prints it: "19", "24s", "21%". */
export function measureLabel(zone: ZoneKey, value: number): string {
  return `${Math.round(value)}${ZONE_SCALE[zone].unit}`;
}

/** The unit a zone's figures carry, for callers building their own string. */
export function zoneUnit(zone: ZoneKey): string {
  return ZONE_SCALE[zone].unit;
}

/**
 * How far the weaker side sits behind the stronger one, as a percentage.
 *
 * Derived, never asked for. Symmetry is not a fourth test — it is the calf
 * raise counted on the other side, which keeps the retest to the three things
 * the user is actually asked to do.
 */
export function symmetryPct(left: number, right: number): number {
  const strong = Math.max(left, right);
  const weak = Math.min(left, right);
  // No reps at all on either side means there is no gap to state, rather than a
  // division by zero reported as perfect symmetry.
  return strong === 0 ? 0 : Math.round(((strong - weak) / strong) * 100);
}
