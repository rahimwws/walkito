import {
  isHealthDataAvailable,
  queryStatisticsForQuantity,
  requestAuthorization,
} from '@kingstinct/react-native-healthkit';

import { WRITE_TYPES } from './write-back';

/**
 * The three figures the plan actually uses.
 *
 * Deliberately a short list. Every extra type is another switch the user has
 * to grant on Apple's sheet, and a permission screen asking for ten things
 * reads as a data grab — people decline the whole sheet rather than pick
 * through it. Steps and active energy say how much they move; resting heart
 * rate says how well they are recovering.
 */
export const READ_TYPES = [
  // What the gait signals are built from. Two mobility types, not four: step
  // length and double-support drive no signal, and an unused scope is a row on
  // Apple's sheet that costs a grant and buys nothing. Same for distance and
  // HRV — add them back with the signal that needs them, not before.
  //
  // These come from the iPhone itself,
  // not from a watch — which is why the watch question in onboarding does not
  // affect this feature at all.
  'HKQuantityTypeIdentifierWalkingAsymmetryPercentage',
  'HKQuantityTypeIdentifierWalkingSpeed',
  // Load.
  'HKQuantityTypeIdentifierStepCount',
  // Recovery. A watch supplies these; without one they stay null and every
  // signal that needs them independently declines to speak.
  'HKQuantityTypeIdentifierRestingHeartRate',
  'HKCategoryTypeIdentifierSleepAnalysis',
  'HKWorkoutTypeIdentifier',
  // The two the onboarding preview reads back to show the connection worked.
  // Not in the pipeline's own list, but they have to be in the request: a type
  // that is queried and not asked for returns nothing, and the screen would
  // report a successful connection as empty.
  'HKQuantityTypeIdentifierActiveEnergyBurned',
  'HKQuantityTypeIdentifierHeartRate',
] as const;

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

/** HealthKit is iOS-only, and absent on iPad and the simulator's older
 * runtimes. Everything below is written to degrade to nulls rather than throw,
 * because a permission screen that red-screens is worse than one that quietly
 * offers to skip. */
export function healthAvailable(): boolean {
  try {
    return isHealthDataAvailable();
  } catch {
    return false;
  }
}

/**
 * Opens Apple's permission sheet.
 *
 * Resolves true if the sheet was presented and dismissed — *not* if the user
 * granted anything. Apple deliberately does not tell an app which read
 * permissions were denied, so that the app cannot pressure the user about it.
 * Treat a `true` here as "we asked", never as "we have data", and let the
 * query below be the thing that finds out.
 */
export async function requestHealthAccess(): Promise<boolean> {
  if (!healthAvailable()) return false;
  try {
    // Read and write in one sheet, deliberately. Apple presents whatever is
    // asked for as a single list, and a second prompt raised later — after the
    // user has already decided how they feel about this app reading their
    // health data — converts far worse than one more row on a sheet they are
    // already reading.
    return await requestAuthorization({ toRead: READ_TYPES, toShare: WRITE_TYPES });
  } catch {
    return false;
  }
}

/**
 * Ask, then read, and say which of the four things happened.
 *
 * One call rather than the two the screen used to make, because the outcome is
 * a function of both halves and neither half can name it alone: the request
 * knows whether it was refused, and only the read knows whether anything came
 * back. Deciding that here keeps the rule in the entity that owns HealthKit
 * instead of in the screen that draws it.
 */
export async function connectHealth(now = Date.now()): Promise<HealthConnection> {
  if (!healthAvailable()) return { outcome: 'unavailable', summary: EMPTY_SUMMARY };

  const asked = await requestHealthAccess();
  if (!asked) return { outcome: 'declined', summary: EMPTY_SUMMARY };

  const summary = await readTodaySummary(now);
  const anything =
    summary.steps != null || summary.calories != null || summary.heartRate != null;
  return { outcome: anything ? 'ready' : 'empty', summary };
}

function startOfToday(now: number): Date {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Today's totals, or nulls where nothing is readable.
 *
 * Each type is queried independently and failures are swallowed per-type: a
 * user who shared steps but not heart rate should still see their steps, and
 * one rejected type must not blank the other two.
 */
export async function readTodaySummary(now = Date.now()): Promise<HealthSummary> {
  if (!healthAvailable()) return EMPTY_SUMMARY;

  const filter = { startDate: startOfToday(now), endDate: new Date(now) };

  const [steps, calories, heartRate] = await Promise.all([
    stat('HKQuantityTypeIdentifierStepCount', 'sum', filter),
    stat('HKQuantityTypeIdentifierActiveEnergyBurned', 'sum', filter),
    // An average, not a sum — totalling a day of heart-rate samples is
    // meaningless, and would read as a five-figure bpm.
    stat('HKQuantityTypeIdentifierHeartRate', 'average', filter),
  ]);

  return { steps, calories, heartRate };
}

async function stat(
  identifier: (typeof READ_TYPES)[number],
  option: 'sum' | 'average',
  filter: { startDate: Date; endDate: Date },
): Promise<number | null> {
  try {
    const result = await queryStatisticsForQuantity(
      identifier as never,
      [option] as never,
      filter as never,
    );
    const quantity =
      option === 'sum' ? result.sumQuantity?.quantity : result.averageQuantity?.quantity;
    return typeof quantity === 'number' && Number.isFinite(quantity)
      ? Math.round(quantity)
      : null;
  } catch {
    return null;
  }
}
