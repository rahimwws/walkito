import { hasDays, mergeDays, recomputeSignals } from './cache';
import { healthAccess, healthAvailable, healthConnect, ensureHealthConnect } from './health.android';
import type { DailyMetric } from './metrics';
import { dayKey, foldSleep } from './sleep';

/**
 * The Health Connect side of the pipeline — the same days, cache and signals as
 * `pipeline.ts`, read from Android's store instead of HealthKit. Metro picks
 * this file on Android.
 *
 * Two differences from iOS, both Android's:
 * - No walking asymmetry or walking speed: Health Connect has no such types.
 *   Those fields stay null and the gait signals never speak.
 * - No background wakes: Health Connect has no observer queries. The app layer
 *   already refreshes on every return to the foreground, which is when the
 *   numbers are looked at anyway.
 */

type Field = keyof Omit<DailyMetric, 'date'>;

/** What the root registers for; on Android, the records it reads. */
export const OBSERVED_TYPES = ['Steps', 'FloorsClimbed', 'RestingHeartRate', 'SleepSession', 'ExerciseSession'] as const;

const BACKFILL_DAYS = 90;
const REFRESH_DAYS = 14;
/** As on iOS: an hour counts as on your feet past this many steps. */
const STEPS_PER_ACTIVE_HOUR = 250;
const DAY_MS = 86_400_000;

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

const BLANK_DAY = {
  steps: null,
  asymmetryPct: null,
  walkingSpeed: null,
  sleepMin: null,
  wakeMin: null,
  restingHR: null,
  flights: null,
  longestRunKm: null,
  lastRunEndAt: null,
  hoursOnFeet: null,
} satisfies Omit<DailyMetric, 'date'>;

function days(field: Field, values: ReadonlyMap<string, number>): DailyMetric[] {
  return [...values].map(([date, value]) => ({ ...BLANK_DAY, date, [field]: value }));
}

function range(from: Date, to: Date) {
  return { operator: 'between' as const, startTime: from.toISOString(), endTime: to.toISOString() };
}

/** Daily totals — Health Connect's aggregation already dedupes across apps. */
async function readDaily(from: Date, to: Date): Promise<DailyMetric[]> {
  const hc = healthConnect();
  if (hc == null) return [];
  const slicer = { period: 'DAYS' as const, length: 1 };
  const steps = new Map<string, number>();
  const flights = new Map<string, number>();
  const resting = new Map<string, number>();
  await Promise.all([
    hc
      .aggregateGroupByPeriod({ recordType: 'Steps', timeRangeFilter: range(from, to), timeRangeSlicer: slicer })
      .then((groups) => {
        for (const g of groups) if (g.result.COUNT_TOTAL > 0) steps.set(dayKey(new Date(g.startTime)), g.result.COUNT_TOTAL);
      })
      .catch(() => {}),
    hc
      .aggregateGroupByPeriod({ recordType: 'FloorsClimbed', timeRangeFilter: range(from, to), timeRangeSlicer: slicer })
      .then((groups) => {
        for (const g of groups) {
          if (g.result.FLOORS_CLIMBED_TOTAL > 0) flights.set(dayKey(new Date(g.startTime)), g.result.FLOORS_CLIMBED_TOTAL);
        }
      })
      .catch(() => {}),
    hc
      .aggregateGroupByPeriod({ recordType: 'RestingHeartRate', timeRangeFilter: range(from, to), timeRangeSlicer: slicer })
      .then((groups) => {
        for (const g of groups) if (g.result.BPM_AVG > 0) resting.set(dayKey(new Date(g.startTime)), g.result.BPM_AVG);
      })
      .catch(() => {}),
  ]);
  return [...days('steps', steps), ...days('flights', flights), ...days('restingHR', resting)];
}

/** Hours on foot per day, from hourly step totals — the iOS rule, unchanged. */
async function readHoursOnFeet(from: Date, to: Date): Promise<DailyMetric[]> {
  const hc = healthConnect();
  if (hc == null) return [];
  try {
    const groups = await hc.aggregateGroupByDuration({
      recordType: 'Steps',
      timeRangeFilter: range(from, to),
      timeRangeSlicer: { duration: 'HOURS', length: 1 },
    });
    const hours = new Map<string, number>();
    for (const g of groups) {
      const key = dayKey(new Date(g.startTime));
      hours.set(key, (hours.get(key) ?? 0) + (g.result.COUNT_TOTAL >= STEPS_PER_ACTIVE_HOUR ? 1 : 0));
    }
    return days('hoursOnFeet', hours);
  } catch {
    return [];
  }
}

/** Every page of a record type, oldest first. */
async function readAll<T extends 'SleepSession' | 'ExerciseSession'>(recordType: T, from: Date, to: Date) {
  const hc = healthConnect();
  if (hc == null) return [];
  const out: Awaited<ReturnType<HealthConnectRead<T>>>['records'] = [];
  let pageToken: string | undefined;
  do {
    const page = await hc.readRecords(recordType, { timeRangeFilter: range(from, to), ascendingOrder: true, pageToken });
    out.push(...page.records);
    pageToken = page.pageToken;
  } while (pageToken != null && pageToken.length > 0);
  return out;
}

type HealthConnectRead<T extends 'SleepSession' | 'ExerciseSession'> = (
  recordType: T,
  options: object,
) => ReturnType<typeof import('react-native-health-connect').readRecords<T>>;

/** Asleep stages; awake and out-of-bed are not sleep. */
const ASLEEP_STAGES = new Set([0, 2, 4, 5, 6]);

async function readSleep(from: Date, to: Date): Promise<DailyMetric[]> {
  try {
    const sessions = await readAll('SleepSession', new Date(from.getTime() - DAY_MS), to);
    // Folded by the iOS code: each asleep stretch as a sample with value 1
    // (HealthKit's "asleep"), so the two platforms count nights the same way.
    const samples = sessions.flatMap((session) => {
      const stages = session.stages ?? [];
      if (stages.length === 0) {
        return [{ value: 1, startDate: new Date(session.startTime), endDate: new Date(session.endTime) }];
      }
      return stages
        .filter((stage) => ASLEEP_STAGES.has(stage.stage))
        .map((stage) => ({ value: 1, startDate: new Date(stage.startTime), endDate: new Date(stage.endTime) }));
    });
    const { sleep, wake } = foldSleep(samples, dayKey(from));
    return [...days('sleepMin', sleep), ...days('wakeMin', wake)];
  } catch {
    return [];
  }
}

const RUNNING = new Set([56, 57]);

/** Runs: the longest per day and when the last one ended, as on iOS. */
async function readRuns(from: Date, to: Date): Promise<DailyMetric[]> {
  const hc = healthConnect();
  if (hc == null) return [];
  try {
    const sessions = (await readAll('ExerciseSession', from, to)).filter((s) => RUNNING.has(s.exerciseType));
    const longest = new Map<string, number>();
    const lastEnd = new Map<string, number>();
    for (const session of sessions) {
      const key = dayKey(new Date(session.startTime));
      const ended = new Date(session.endTime).getTime();
      if (Number.isFinite(ended)) lastEnd.set(key, Math.max(lastEnd.get(key) ?? 0, ended));
      const distance = await hc
        .aggregateRecord({ recordType: 'Distance', timeRangeFilter: range(new Date(session.startTime), new Date(session.endTime)) })
        .then((r) => r.DISTANCE?.inKilometers ?? null)
        .catch(() => null);
      if (distance != null && distance > 0) longest.set(key, Math.max(longest.get(key) ?? 0, distance));
    }
    return [...days('longestRunKm', longest), ...days('lastRunEndAt', lastEnd)];
  } catch {
    return [];
  }
}

export type RefreshOptions = {
  painNextMorning?: (date: string) => number | null;
  onRefreshed?: () => void | Promise<void>;
};

let running: Promise<void> | null = null;
let again = false;

/** One pass over every type, then one recompute. Coalesced, as on iOS. */
export function refreshHealth(now = new Date(), options: RefreshOptions = {}): Promise<void> {
  if (running != null) {
    again = true;
    return running;
  }
  running = (async () => {
    try {
      let at = now;
      do {
        again = false;
        await refreshOnce(at, options);
        at = new Date();
      } while (again);
    } finally {
      running = null;
    }
  })();
  return running;
}

async function refreshOnce(now: Date, options: RefreshOptions): Promise<void> {
  if (!healthAvailable() || !(await ensureHealthConnect())) return;
  if ((await healthAccess()) === 'never') return;
  const from = startOfDay(new Date(now.getTime() - (hasDays() ? REFRESH_DAYS : BACKFILL_DAYS) * DAY_MS));
  const results = await Promise.all([readDaily(from, now), readSleep(from, now), readRuns(from, now), readHoursOnFeet(from, now)]);
  mergeDays(results.flat());
  recomputeSignals(dayKey(now), options.painNextMorning);
  await options.onRefreshed?.();
}

/**
 * Starts the pipeline: one refresh now. There is nothing to subscribe to on
 * Android — the app layer refreshes on every foreground.
 */
export function startHealthPipeline(options: RefreshOptions = {}): () => void {
  if (!healthAvailable()) return () => {};
  void refreshHealth(new Date(), options);
  return () => {};
}
