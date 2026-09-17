import {
  CategoryValueNotApplicable,
  WorkoutActivityType,
  saveCategorySample,
  saveWorkoutSample,
} from '@kingstinct/react-native-healthkit';

import { kv } from '@/shared/lib/storage';

import { healthAvailable } from './health';

/**
 * The two things Walkito puts back into Health.
 *
 * Deliberately short, and deliberately not the interesting data. Pain scores
 * and retest results are *not* written: HealthKit has no type that means "how
 * much your foot hurt this morning", and forcing them into one that nearly fits
 * would put a wrong number into the one place a user might later show a
 * clinician.
 */
export const WRITE_TYPES = [
  'HKWorkoutTypeIdentifier',
  'HKCategoryTypeIdentifierMindfulSession',
] as const;

/**
 * Sessions already written, so completing one twice writes one workout.
 *
 * A flat set of keys in local storage rather than a query against HealthKit.
 * Asking Health "did I already save this?" needs read permission on workouts,
 * which the user may well have denied while granting write — and a duplicate
 * workout is a worse outcome than a missed one.
 */
const LEDGER_KEY = 'health.sessions.written';

function written(): Set<string> {
  const raw = kv.getString(LEDGER_KEY);
  if (raw == null) return new Set();
  try {
    const parsed: unknown = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []);
  } catch {
    // A corrupt ledger must not stop sessions being written. Losing it means
    // at worst one duplicate workout, where throwing here would mean none ever
    // again.
    return new Set();
  }
}

function remember(key: string): void {
  const all = written();
  all.add(key);
  kv.set(LEDGER_KEY, JSON.stringify([...all]));
}

export type SessionRecord = {
  /** Program day the session belongs to. */
  dayNumber: number;
  /** The moves that were actually run — part of the identity, because a single
   * task off the home list and the full programmed session are two different
   * sessions on the same day. */
  moves: readonly string[];
  /** True for an unloaded day. Recovery goes in as mindful minutes rather than
   * as a workout: three minutes of sitting on the floor rolling a foot is not
   * exercise, and filing it as one would inflate the Move ring with work the
   * user did not do. */
  recovery: boolean;
  startedAt: Date;
  endedAt: Date;
};

/** Stable, and stable across app versions: a day plus what was done in it. */
function keyFor(session: SessionRecord): string {
  return `${session.dayNumber}:${[...session.moves].sort().join('|')}`;
}

/**
 * Files a finished session in Health.
 *
 * Call only on genuine completion — never on open, never on skip. A workout
 * written when someone pressed play and walked away is a lie in the one app
 * they did not choose to be lied to in.
 *
 * Never throws and never reports. If Health is unavailable, the write scope was
 * denied, or the save fails, the user is told nothing: they finished their
 * session, which is the thing they actually did, and a red banner about a
 * background sync would make a success look like a failure.
 */
export async function saveSessionToHealth(session: SessionRecord): Promise<boolean> {
  if (!healthAvailable()) return false;

  const key = keyFor(session);
  if (written().has(key)) return false;

  try {
    if (session.recovery) {
      await saveCategorySample(
        'HKCategoryTypeIdentifierMindfulSession',
        // A mindful session carries no value of its own — the enum's single
        // member is literally "not applicable". Re-exported under this longer
        // name at the package root; the bare `CategoryValue` is a type there,
        // not a value.
        CategoryValueNotApplicable.notApplicable,
        session.startedAt,
        session.endedAt,
      );
    } else {
      await saveWorkoutSample(
        // `other`, and an enum member rather than the string the spec sketched:
        // this argument is `HKWorkoutActivityType`, which is numeric. There is
        // no HealthKit activity type for foot rehab, and picking a nearby one
        // ("flexibility", "strength") would tell Health something we do not
        // know.
        WorkoutActivityType.other,
        [],
        session.startedAt,
        session.endedAt,
        undefined,
        // What makes it show up as Walkito rather than as an anonymous "Other".
        { HKWorkoutBrandName: 'Walkito' },
      );
    }
    // Only after the save resolves. Recorded first, a failed write would be
    // remembered as done and the session could never be filed again.
    remember(key);
    return true;
  } catch {
    return false;
  }
}

/** Forgets every written session. For sign-out, where the next account must not
 * inherit this one's ledger and silently skip its first sessions. */
export function resetHealthWrites(): void {
  kv.remove(LEDGER_KEY);
}
