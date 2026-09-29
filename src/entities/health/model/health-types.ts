/**
 * The shapes the health entity speaks in, shared by the HealthKit side
 * (`health.ts`) and the Health Connect side (`health.android.ts`) so each
 * platform's file can stand alone.
 */
export type HealthSummary = {
  /** Steps today. */
  steps: number | null;
  /** Active kilocalories today. */
  calories: number | null;
  /** Average heart rate today, bpm. */
  heartRate: number | null;
};

export const EMPTY_SUMMARY: HealthSummary = { steps: null, calories: null, heartRate: null };

/**
 * How the connect attempt actually went.
 *
 * Four outcomes rather than a boolean, because the screen has to say four
 * different things and previously could only tell that it had "asked" —
 * a decline and a granted-but-quiet account both arrived as three nulls and
 * were reported identically.
 *
 * `declined` is the honest limit of what Apple will tell us. HealthKit
 * deliberately never reports which read scopes were refused, so a user who
 * denied everything is indistinguishable from one who granted everything and
 * has no data. What we *can* see is the request itself failing or being
 * refused outright, and that is the only thing this reports as declined —
 * never a silent inference from empty readings.
 */
export type HealthOutcome =
  /** No HealthKit on this device or runtime. */
  | 'unavailable'
  /** The authorisation request failed or was refused outright. */
  | 'declined'
  /** Asked and answered, but every type came back empty. */
  | 'empty'
  /** At least one figure came back. */
  | 'ready';

export type HealthConnection = {
  outcome: HealthOutcome;
  summary: HealthSummary;
};


/**
 * Where the permission question stands.
 *
 * - `never`: the system sheet has not been shown. Nothing may be read.
 * - `current`: asked, with the list as it is today.
 * - `outdated`: asked on an older build, and the list has grown since.
 *
 * Says nothing about what was *granted*.
 */
export type HealthAccess = 'never' | 'current' | 'outdated';
