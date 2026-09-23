import {
  UpdateFrequency,
  WorkoutActivityType,
  configureBackgroundTypes,
  isProtectedDataAvailable,
  queryCategorySamples,
  queryStatisticsCollectionForQuantity,
  queryWorkoutSamples,
  subscribeToChanges,
} from '@kingstinct/react-native-healthkit';

import { hasDays, mergeDays, recomputeSignals } from './cache';
import { healthAccess, healthAvailable } from './health';
import type { DailyMetric } from './metrics';
import { dayKey, foldSleep } from './sleep';

/**
 * How the pipeline reads, and why it no longer reads samples.
 *
 * It used to walk raw samples forward from an anchor and fold each batch into a
 * day. That had three faults, each enough on its own to make the numbers wrong:
 *
 * - **A batch is not a day.** An hourly wake brings the last hour's samples;
 *   folding those into "today" and merging it over the stored day replaced a
 *   day's 6,000 steps with the last 300. Sleep, which arrives in stages, was cut
 *   the same way.
 * - **Samples are per source.** A phone and a watch both count the same steps,
 *   and summing raw samples counts them twice. Health's own totals choose one
 *   source per moment; a sum over samples cannot.
 * - **The date filter never applied.** It was passed as `{ startDate }` where the
 *   library wants `{ date: { startDate } }`, behind an `as never` that hid the
 *   mismatch — so every "last ninety days" read started at the beginning of the
 *   user's history, and the capped queries never reached this week.
 *
 * So every quantity is now read as a statistics collection — one bucket per
 * day, deduplicated across sources by HealthKit itself — and each run re-reads
 * a whole window and replaces those days outright. A bucket is always a
 * complete day, so replacing is correct, and there is no anchor to lose.
 */

type Field = keyof Omit<DailyMetric, 'date'>;

type QuantitySource = {
  type:
    | 'HKQuantityTypeIdentifierStepCount'
    | 'HKQuantityTypeIdentifierFlightsClimbed'
    | 'HKQuantityTypeIdentifierWalkingAsymmetryPercentage'
    | 'HKQuantityTypeIdentifierWalkingSpeed'
    | 'HKQuantityTypeIdentifierRestingHeartRate';
  field: Field;
  unit: string;
  /** `cumulativeSum` for running totals, `discreteAverage` for estimates taken
   * several times a day — summing a gait percentage would print a number in
   * the hundreds. */
  statistic: 'cumulativeSum' | 'discreteAverage';
  /** Multiplier from the unit HealthKit returns to the one the app stores. */
  scale?: number;
};

const QUANTITIES: readonly QuantitySource[] = [
  {
    type: 'HKQuantityTypeIdentifierStepCount',
    field: 'steps',
    unit: 'count',
    statistic: 'cumulativeSum',
  },
  {
    // Foot-specific in a way steps are not: stairs load the plantar fascia in
    // tension through a raised heel, and the iPhone counts them alone.
    type: 'HKQuantityTypeIdentifierFlightsClimbed',
    field: 'flights',
    unit: 'count',
    statistic: 'cumulativeSum',
  },
  {
    type: 'HKQuantityTypeIdentifierWalkingAsymmetryPercentage',
    field: 'asymmetryPct',
    // HealthKit's percent unit is a fraction — 1.0 is 100% — and every
    // threshold and sentence downstream is in percentage points.
    unit: '%',
    statistic: 'discreteAverage',
    scale: 100,
  },
  {
    type: 'HKQuantityTypeIdentifierWalkingSpeed',
    field: 'walkingSpeed',
    unit: 'm/s',
    statistic: 'discreteAverage',
  },
  {
    type: 'HKQuantityTypeIdentifierRestingHeartRate',
    field: 'restingHR',
    unit: 'count/min',
    statistic: 'discreteAverage',
  },
];

const SLEEP = 'HKCategoryTypeIdentifierSleepAnalysis' as const;
const WORKOUTS = 'HKWorkoutTypeIdentifier' as const;

/** Every type a background wake is registered for. */
export const OBSERVED_TYPES: readonly (QuantitySource['type'] | typeof SLEEP | typeof WORKOUTS)[] =
  [...QUANTITIES.map((source) => source.type), SLEEP, WORKOUTS];

/** Ninety days on the first run. Enough to seed a 28-day baseline immediately
 * rather than making the user wait a month to be told anything. */
const BACKFILL_DAYS = 90;
/**
 * Every later run re-reads this much.
 *
 * Not one day: a Garmin that has not been near its phone for a week syncs a
 * week at once, and those days have to land where they belong. A statistics
 * collection of fourteen buckets costs HealthKit next to nothing.
 */
const REFRESH_DAYS = 14;

/**
 * Hours the day was spent upright, estimated from when the steps happened.
 *
 * Time on foot is the exposure that matters for plantar heel pain — the
 * literature says so directly, and it is why steps are never praised here. But
 * HealthKit has no such type outside Apple Watch stand hours, so it is derived:
 * count the distinct hours that carried real walking. A threshold rather than
 * any movement at all, because a handful of steps to the kettle is not an hour
 * on your feet.
 */
const STEPS_PER_ACTIVE_HOUR = 250;

const DAY_MS = 86_400_000;

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Every field null. Spread rather than repeated: a new metric added to
 * `DailyMetric` should be a type error in one place, not a silent null in
 * three. */
const BLANK_DAY = {
  steps: null,
  asymmetryPct: null,
  walkingSpeed: null,
  sleepMin: null,
  wakeMin: null,
  restingHR: null,
  flights: null,
  longestRunKm: null,
  hoursOnFeet: null,
} satisfies Omit<DailyMetric, 'date'>;

function days(field: Field, values: ReadonlyMap<string, number>): DailyMetric[] {
  return [...values].map(([date, value]) => ({ ...BLANK_DAY, date, [field]: value }));
}

/** One quantity, one bucket per local day, deduplicated across sources. */
async function readQuantity(source: QuantitySource, from: Date, to: Date): Promise<DailyMetric[]> {
  try {
    const buckets = await queryStatisticsCollectionForQuantity(
      source.type,
      [source.statistic],
      from,
      { day: 1 },
      { unit: source.unit as never, filter: { date: { startDate: from, endDate: to } } },
    );
    const out = new Map<string, number>();
    for (const bucket of buckets) {
      const quantity =
        source.statistic === 'cumulativeSum'
          ? bucket.sumQuantity?.quantity
          : bucket.averageQuantity?.quantity;
      if (bucket.startDate == null || quantity == null || !Number.isFinite(quantity)) continue;
      out.set(dayKey(new Date(bucket.startDate)), quantity * (source.scale ?? 1));
    }
    return days(source.field, out);
  } catch {
    // Not granted, no data, or the phone is locked. Whatever was stored for
    // these days stays, and the next wake tries again.
    return [];
  }
}

/**
 * Hours on foot per day, from hourly step totals.
 *
 * Hourly *statistics* rather than raw samples, for the same two reasons as the
 * daily totals: a phone and a watch in the same pocket must not turn one hour
 * of walking into two hours' worth of steps, and there is no sample cap to
 * silently cut off the most recent days.
 */
async function readHoursOnFeet(from: Date, to: Date): Promise<DailyMetric[]> {
  try {
    const buckets = await queryStatisticsCollectionForQuantity(
      'HKQuantityTypeIdentifierStepCount',
      ['cumulativeSum'],
      from,
      { hour: 1 },
      { unit: 'count', filter: { date: { startDate: from, endDate: to } } },
    );
    const hours = new Map<string, number>();
    for (const bucket of buckets) {
      const steps = bucket.sumQuantity?.quantity;
      if (bucket.startDate == null || steps == null) continue;
      const key = dayKey(new Date(bucket.startDate));
      hours.set(key, (hours.get(key) ?? 0) + (steps >= STEPS_PER_ACTIVE_HOUR ? 1 : 0));
    }
    return days('hoursOnFeet', hours);
  } catch {
    return [];
  }
}

async function readSleep(from: Date, to: Date): Promise<DailyMetric[]> {
  try {
    const samples = await queryCategorySamples(SLEEP, {
      // All of them. A night from a watch is dozens of stage samples, and a cap
      // here is what would quietly cut the most recent nights off.
      limit: 0,
      ascending: true,
      // From the evening before the window, so its first night is whole.
      filter: { date: { startDate: new Date(from.getTime() - DAY_MS), endDate: to } },
    });
    const { sleep, wake } = foldSleep(samples, dayKey(from));
    return [...days('sleepMin', sleep), ...days('wakeMin', wake)];
  } catch {
    return [];
  }
}

/**
 * Runs, as sessions rather than as a daily total.
 *
 * Only the longest one per day is kept, because that is what the evidence is
 * about: one outing further than anything in the past month, not accumulated
 * mileage. The same run synced from two apps is still one maximum.
 */
async function readRuns(from: Date, to: Date): Promise<DailyMetric[]> {
  try {
    const workouts = await queryWorkoutSamples({
      limit: 0,
      filter: {
        workoutActivityType: WorkoutActivityType.running,
        date: { startDate: from, endDate: to },
      },
    });
    const longest = new Map<string, number>();
    for (const workout of workouts) {
      const meters = workout.totalDistance?.quantity;
      if (meters == null || !Number.isFinite(meters)) continue;
      const key = dayKey(new Date(workout.startDate));
      // The library reports distance in metres whatever was asked for.
      longest.set(key, Math.max(longest.get(key) ?? 0, meters / 1000));
    }
    return days('longestRunKm', longest);
  } catch {
    return [];
  }
}

export type RefreshOptions = {
  /**
   * Pain reported the morning after the day at `date`.
   *
   * Passed in rather than read here, and that is a layering rule rather than a
   * preference: pain lives in `entities/program`, this file lives in
   * `entities/health`, and one entity reaching sideways into another is the
   * import the architecture forbids. The app layer owns both and does the
   * introduction — see `useHealthPipeline`.
   */
  painNextMorning?: (date: string) => number | null;
  /** Runs after every completed refresh, in the foreground or from a
   * background wake — the app layer's hook for acting on fresh numbers. */
  onRefreshed?: () => void | Promise<void>;
};

let running: Promise<void> | null = null;
let again = false;

/**
 * One pass over every type, then one recompute.
 *
 * Coalesced: a background wake fires once per changed type, and six observers
 * waking together must not become six concurrent reads racing to write the same
 * cache. Calls that arrive mid-run collapse into one more run after it.
 */
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
  if (!healthAvailable()) return;
  // A locked phone keeps Health encrypted, and every query would fail. Nothing
  // is lost by waiting — the next unlock or wake reads the same window.
  try {
    if (!isProtectedDataAvailable()) return;
  } catch {
    // Older runtimes without the check just try the reads.
  }

  const from = startOfDay(
    new Date(now.getTime() - (hasDays() ? REFRESH_DAYS : BACKFILL_DAYS) * DAY_MS),
  );

  const results = await Promise.all([
    ...QUANTITIES.map((source) => readQuantity(source, from, now)),
    readSleep(from, now),
    readRuns(from, now),
    readHoursOnFeet(from, now),
  ]);
  mergeDays(results.flat());
  recomputeSignals(dayKey(now), options.painNextMorning);
  await options.onRefreshed?.();
}

/**
 * Registers for background wakes, once Health has been asked.
 *
 * Through `configureBackgroundTypes`, not `enableBackgroundDelivery`. The
 * difference is whether a wake survives the app being terminated: the native
 * side persists the list and re-registers the observers in
 * `didFinishLaunching` — the only place Apple honours them for a killed app —
 * and queues the event until this JS subscribes. The old per-type call from JS
 * registered too late in launch to ever be delivered to a terminated app.
 *
 * Hourly is the most HealthKit grants for steps whatever is asked for.
 *
 * Returns a teardown. Nothing here throws: the app still refreshes on every
 * foreground, which is the fallback the whole pipeline tolerates.
 */
export function startHealthPipeline(options: RefreshOptions = {}): () => void {
  if (!healthAvailable()) return () => {};

  let stopped = false;
  const subs: { remove: () => void }[] = [];

  void (async () => {
    // Before the sheet has been answered there is nothing to observe, and
    // observers registered against ungranted types are dead on arrival. The
    // root re-runs this once onboarding asks — see `onHealthAsked`.
    if ((await healthAccess()) === 'never' || stopped) return;

    try {
      await configureBackgroundTypes([...OBSERVED_TYPES], UpdateFrequency.hourly);
    } catch {
      // No background wakes, then. Foreground refreshes still run.
    }
    if (stopped) return;

    for (const type of OBSERVED_TYPES) {
      try {
        subs.push(
          subscribeToChanges(type, () => {
            void refreshHealth(new Date(), options);
          }),
        );
      } catch {
        // One type failing to register must not stop the others.
      }
    }

    // And once now, because a phone that has been asleep has no wake to give us.
    void refreshHealth(new Date(), options);
  })();

  return () => {
    stopped = true;
    for (const sub of subs) {
      try {
        sub.remove();
      } catch {
        // Nothing to do about a subscription that will not detach.
      }
    }
  };
}
