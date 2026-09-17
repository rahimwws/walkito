import {
  WorkoutActivityType,
  enableBackgroundDelivery,
  queryCategorySamplesWithAnchor,
  queryQuantitySamplesWithAnchor,
  queryWorkoutSamplesWithAnchor,
  subscribeToChanges,
} from '@kingstinct/react-native-healthkit';

import {
  anchorFor,
  forgetAnchor,
  mergeDays,
  recomputeSignals,
  rememberAnchor,
} from './cache';
import { healthAvailable } from './health';
import type { DailyMetric } from './metrics';

/**
 * Every type the pipeline reads, and how each one folds into a day.
 *
 * `reduce` is the difference between the metrics. Steps are a running total and
 * have to be summed; a gait percentage is an estimate taken several times a day
 * and has to be averaged, because summing it would produce a number in the
 * hundreds that looks like a catastrophic reading.
 */
type Fold = 'sum' | 'mean' | 'last' | 'max';

/**
 * The window a sleep sample has to end in to count as waking up.
 *
 * Generous on both sides — shift workers and bad nights are real — but bounded,
 * because everything outside it is a nap, and a nap read as a wake time moves
 * tomorrow's notification by hours.
 */
const WAKE_EARLIEST = 3 * 60;
const WAKE_LATEST = 12 * 60;

type Source = {
  type: string;
  field: keyof Omit<DailyMetric, 'date'>;
  unit: string;
  fold: Fold;
  /** How often iOS may wake the app for this type. Steps change all day;
   * everything else resolves once and is then settled. */
  frequency: 'hourly' | 'daily';
};

const SOURCES: readonly Source[] = [
  {
    type: 'HKQuantityTypeIdentifierStepCount',
    field: 'steps',
    unit: 'count',
    fold: 'sum',
    frequency: 'hourly',
  },
  {
    type: 'HKQuantityTypeIdentifierWalkingAsymmetryPercentage',
    field: 'asymmetryPct',
    // HealthKit stores this as a fraction; `%` asks for it as the number the
    // sentence prints.
    unit: '%',
    fold: 'mean',
    frequency: 'daily',
  },
  {
    type: 'HKQuantityTypeIdentifierWalkingSpeed',
    field: 'walkingSpeed',
    unit: 'm/s',
    fold: 'mean',
    frequency: 'daily',
  },
  {
    // Foot-specific in a way steps are not: stairs load the plantar fascia in
    // tension through a raised heel, and the iPhone counts them alone.
    type: 'HKQuantityTypeIdentifierFlightsClimbed',
    field: 'flights',
    unit: 'count',
    fold: 'sum',
    frequency: 'daily',
  },
  {
    type: 'HKQuantityTypeIdentifierRestingHeartRate',
    field: 'restingHR',
    unit: 'count/min',
    fold: 'mean',
    frequency: 'daily',
  },
];

/** Ninety days, once, on the first successful authorisation. Enough to seed a
 * 28-day baseline immediately rather than making the user wait a month to be
 * told anything. */
const BACKFILL_DAYS = 90;
/** After a query throws, the anchor is dropped and this much is re-read once —
 * shorter than the first backfill, because the history is already in the cache
 * and only the recent tail can be missing. */
const REPAIR_DAYS = 30;

/** `YYYY-MM-DD` in the device's own timezone, which is the only frame a user
 * means by "yesterday". */
function dayKey(date: Date): string {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
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

function foldInto(
  buckets: Map<string, number[]>,
  field: keyof Omit<DailyMetric, 'date'>,
  fold: Fold,
): DailyMetric[] {
  const out: DailyMetric[] = [];
  for (const [date, values] of buckets) {
    if (values.length === 0) continue;
    const value =
      fold === 'sum'
        ? values.reduce((a, b) => a + b, 0)
        : fold === 'mean'
          ? values.reduce((a, b) => a + b, 0) / values.length
          : fold === 'max'
            ? // Order is not guaranteed by the anchored query, so the latest
              // instant has to be taken rather than the last one that arrived.
              values.reduce((a, b) => (b > a ? b : a), values[0])
            : values[values.length - 1];
    out.push({ ...BLANK_DAY, date, [field]: value });
  }
  return out;
}

/**
 * Reads one type forward from wherever it last stopped.
 *
 * Anchored rather than windowed: each wake reads only what is new, which is the
 * difference between a background refresh that costs nothing and one that
 * re-reads three months of step samples every hour.
 */
async function pull(source: Source, from: Date): Promise<void> {
  const anchor = anchorFor(source.type);
  try {
    const response = await queryQuantitySamplesWithAnchor(source.type as never, {
      anchor,
      limit: 2000,
      unit: source.unit as never,
      ...(anchor == null ? { filter: { startDate: from } } : {}),
    } as never);

    const buckets = new Map<string, number[]>();
    for (const sample of response.samples) {
      const key = dayKey(new Date(sample.startDate));
      const list = buckets.get(key) ?? [];
      list.push(sample.quantity);
      buckets.set(key, list);
    }
    mergeDays(foldInto(buckets, source.field, source.fold));
    if (response.newAnchor != null) rememberAnchor(source.type, response.newAnchor);
  } catch {
    // A rejected anchor is the common cause and the only one worth acting on:
    // dropping it makes the next run a bounded re-read rather than a permanent
    // dead type. Silent to the user either way.
    forgetAnchor(source.type);
  }
}

/**
 * Sleep, which is a category rather than a quantity.
 *
 * Counted as minutes actually asleep, so the awake and in-bed stages are
 * skipped — in-bed is a measure of how long someone lay there, and using it
 * would tell a person who read for an hour that they slept nine.
 */
async function pullSleep(from: Date): Promise<void> {
  const type = 'HKCategoryTypeIdentifierSleepAnalysis';
  const anchor = anchorFor(type);
  try {
    const response = await queryCategorySamplesWithAnchor(type, {
      anchor,
      limit: 2000,
      ...(anchor == null ? { filter: { startDate: from } } : {}),
    } as never);

    const buckets = new Map<string, number[]>();
    /** End instants, for the wake time. The same samples, a different question:
     * how long you slept is a total, when you got up is a moment. */
    const wake = new Map<string, number[]>();
    for (const sample of response.samples) {
      // 0 is "in bed"; every asleep stage is 3 or above.
      if (Number(sample.value) < 3) continue;
      const start = new Date(sample.startDate);
      const end = new Date(sample.endDate);
      const minutes = (end.getTime() - start.getTime()) / 60_000;
      // Filed under the morning it ended, not the evening it began: "you slept
      // 5h 20m" is a statement about last night, said today.
      const key = dayKey(end);
      const list = buckets.get(key) ?? [];
      list.push(minutes);
      buckets.set(key, list);

      // Only ends that land in a plausible morning count as getting up. An
      // afternoon nap is a real asleep sample and a nonsense wake time, and
      // letting one in is how the morning nudge drifts towards lunchtime.
      const endMinutes = end.getHours() * 60 + end.getMinutes();
      if (endMinutes >= WAKE_EARLIEST && endMinutes <= WAKE_LATEST) {
        const ends = wake.get(key) ?? [];
        ends.push(endMinutes);
        wake.set(key, ends);
      }
    }
    mergeDays(foldInto(buckets, 'sleepMin', 'sum'));
    // The latest end of the night, not the first: someone who surfaces, dozes,
    // and gets up an hour later got up an hour later.
    mergeDays(foldInto(wake, 'wakeMin', 'max'));
    if (response.newAnchor != null) rememberAnchor(type, response.newAnchor);
  } catch {
    forgetAnchor(type);
  }
}

/**
 * Runs, as sessions rather than as a daily total.
 *
 * Only the longest one per day is kept, because that is what the evidence is
 * about: one outing further than anything in the past month, not accumulated
 * mileage. Walking workouts are skipped — a long walk is not the exposure this
 * signal was built on.
 */
async function pullRuns(from: Date): Promise<void> {
  const type = 'HKWorkoutTypeIdentifier';
  const anchor = anchorFor(type);
  try {
    const response = await queryWorkoutSamplesWithAnchor({
      anchor,
      limit: 500,
      energyUnit: 'kcal',
      distanceUnit: 'km',
      ...(anchor == null ? { filter: { startDate: from } } : {}),
    } as never);

    const longest = new Map<string, number>();
    for (const workout of response.workouts) {
      if (workout.workoutActivityType !== WorkoutActivityType.running) continue;
      const distance = workout.totalDistance?.quantity;
      if (distance == null || !Number.isFinite(distance)) continue;
      const key = dayKey(new Date(workout.startDate));
      longest.set(key, Math.max(longest.get(key) ?? 0, distance));
    }

    mergeDays(
      [...longest].map(([date, value]) => ({
        ...BLANK_DAY,
        date,
        longestRunKm: value,
      })),
    );
    if (response.newAnchor != null) rememberAnchor(type, response.newAnchor);
  } catch {
    forgetAnchor(type);
  }
}

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

async function pullHoursOnFeet(from: Date): Promise<void> {
  const type = 'HKQuantityTypeIdentifierStepCount';
  try {
    // Deliberately unanchored and deliberately separate from the step totals
    // above: this needs the samples positioned within the day, which an anchor
    // walking forward from last time cannot guarantee for today.
    const response = await queryQuantitySamplesWithAnchor(type as never, {
      limit: 5000,
      unit: 'count' as never,
      filter: { startDate: from },
    } as never);

    /** date -> hour -> steps */
    const grid = new Map<string, Map<number, number>>();
    for (const sample of response.samples) {
      const at = new Date(sample.startDate);
      const date = dayKey(at);
      const hours = grid.get(date) ?? new Map<number, number>();
      const hour = at.getHours();
      hours.set(hour, (hours.get(hour) ?? 0) + sample.quantity);
      grid.set(date, hours);
    }

    mergeDays(
      [...grid].map(([date, hours]) => ({
        ...BLANK_DAY,
        date,
        hoursOnFeet: [...hours.values()].filter((n) => n >= STEPS_PER_ACTIVE_HOUR).length,
      })),
    );
  } catch {
    // Nothing to reset — this query holds no anchor of its own.
  }
}

/**
 * One pass over every type, then one recompute.
 *
 * The recompute is deliberately outside the loop and deliberately once a day:
 * baselines are a 28-day fold and the thresholds are runs of consecutive days,
 * so nothing either can say changes between two reads an hour apart.
 */
export type RefreshOptions = {
  /**
   * Pain reported the morning after the day at `index` in the stored history.
   *
   * Passed in rather than read here, and that is a layering rule rather than a
   * preference: pain lives in `entities/program`, this file lives in
   * `entities/health`, and one entity reaching sideways into another is the
   * import the architecture forbids. The app layer owns both and does the
   * introduction — see `useHealthPipeline`.
   */
  painNextMorning?: (index: number) => number | null;
};

export async function refreshHealth(
  now = new Date(),
  options: RefreshOptions = {},
): Promise<void> {
  if (!healthAvailable()) return;
  const first = anchorFor('HKQuantityTypeIdentifierStepCount') == null;
  const from = new Date(now.getTime() - (first ? BACKFILL_DAYS : REPAIR_DAYS) * 86_400_000);

  await Promise.all([
    ...SOURCES.map((source) => pull(source, from)),
    pullSleep(from),
    pullRuns(from),
    // Only ever the recent tail: an hour-resolution scan of ninety days of step
    // samples is tens of thousands of rows for a number that only matters for
    // the last few weeks.
    pullHoursOnFeet(new Date(now.getTime() - 30 * 86_400_000)),
  ]);
  recomputeSignals(dayKey(now), false, options.painNextMorning);
}

/**
 * Registers for background wakes, once, after authorisation.
 *
 * Returns a teardown. Failure to register is logged nowhere and changes
 * nothing the user can see: the app still refreshes when it is opened, which is
 * the fallback the whole pipeline is written to tolerate.
 */
export function startHealthPipeline(options: RefreshOptions = {}): () => void {
  if (!healthAvailable()) return () => {};

  const subs: { remove: () => void }[] = [];
  for (const source of [...SOURCES, { type: 'HKCategoryTypeIdentifierSleepAnalysis' } as Source]) {
    try {
      void enableBackgroundDelivery(
        source.type as never,
        (source.frequency === 'hourly' ? 'hourly' : 'daily') as never,
      ).catch(() => {});
      subs.push(
        subscribeToChanges(source.type as never, () => {
          void refreshHealth(new Date(), options);
        }),
      );
    } catch {
      // One type failing to register must not stop the others.
    }
  }

  // And once now, because a phone that has been asleep has no wake to give us.
  void refreshHealth(new Date(), options);

  return () => {
    for (const sub of subs) {
      try {
        sub.remove();
      } catch {
        // Nothing to do about a subscription that will not detach.
      }
    }
  };
}
