/**
 * Sleep, from stages to a night.
 *
 * Pure and apart from the pipeline, which imports the native HealthKit module
 * and so cannot be loaded by the test runner. This is the part with arithmetic
 * in it worth testing.
 */

/** `YYYY-MM-DD` in the device's own timezone, which is the only frame a user
 * means by "yesterday". */
export function dayKey(date: Date): string {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

/**
 * Asleep stages, by `HKCategoryValueSleepAnalysis`.
 *
 * 1 is "asleep, unspecified" — the only value older watches, Whoop and Garmin
 * write. The old filter skipped everything below 3, which dropped every night
 * those devices recorded. 0 (in bed) and 2 (awake) are the two that are not
 * sleep.
 */
const ASLEEP = new Set([1, 3, 4, 5]);

/**
 * The window a sleep sample has to end in to count as waking up.
 *
 * Generous on both sides — shift workers and bad nights are real — but bounded,
 * because everything outside it is a nap, and a nap read as a wake time moves
 * tomorrow's notification by hours.
 */
const WAKE_EARLIEST = 3 * 60;
const WAKE_LATEST = 12 * 60;

type Interval = { start: number; end: number };

/** Overlapping intervals collapsed into one. Two sources recording the same
 * night is one night, not two. */
export function unionOf(intervals: readonly Interval[]): Interval[] {
  const sorted = [...intervals].sort((a, b) => a.start - b.start);
  const out: Interval[] = [];
  for (const next of sorted) {
    const last = out[out.length - 1];
    if (last != null && next.start <= last.end) {
      last.end = Math.max(last.end, next.end);
    } else {
      out.push({ ...next });
    }
  }
  return out;
}

/**
 * Minutes asleep and the wake time, per morning, from sleep stages.
 *
 * Pure, so the arithmetic can be tested without HealthKit. Each night is filed
 * under the morning it ended: "you slept 5h 20m" is a statement about last
 * night, said today.
 */
export function foldSleep(
  samples: readonly { value: number; startDate: Date; endDate: Date }[],
  from: string,
): { sleep: Map<string, number>; wake: Map<string, number> } {
  const asleep = samples
    .filter((sample) => ASLEEP.has(Number(sample.value)))
    .map((sample) => ({
      start: new Date(sample.startDate).getTime(),
      end: new Date(sample.endDate).getTime(),
    }))
    .filter((interval) => interval.end > interval.start);

  const sleep = new Map<string, number>();
  const wake = new Map<string, number>();
  for (const interval of unionOf(asleep)) {
    const end = new Date(interval.end);
    const key = dayKey(end);
    // The window's first morning may be missing the evening it began in.
    if (key < from) continue;
    sleep.set(key, (sleep.get(key) ?? 0) + (interval.end - interval.start) / 60_000);

    // Only ends that land in a plausible morning count as getting up — an
    // afternoon nap is a real asleep stretch and a nonsense wake time. The
    // latest one wins: someone who surfaces, dozes and gets up an hour later
    // got up an hour later.
    const minutes = end.getHours() * 60 + end.getMinutes();
    if (minutes >= WAKE_EARLIEST && minutes <= WAKE_LATEST) {
      wake.set(key, Math.max(wake.get(key) ?? 0, minutes));
    }
  }
  return { sleep, wake };
}

