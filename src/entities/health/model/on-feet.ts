import { withOnFeetHours, type DailyMetric, type HealthSignals } from './metrics';

/**
 * Time on the feet, read back to the person: whether yesterday was a long
 * day, and the last seven days as one row.
 *
 * Pure arithmetic over the stored days, like `metrics.ts`. "Hours on your
 * feet" is an estimate: distinct hours that carried real walking, or the
 * watch's stand hours where there is a watch, whichever is larger. So every
 * sentence built on it says "about", and none of it is sent anywhere.
 */

/**
 * A day this far over the person's own usual is a long one: the ratio the
 * plan uses to swap a strength day for recovery (`HEAVY_DAY_RATIO`), so
 * Home's card and the plan agree on when a day became long.
 */
export const LONG_DAY_RATIO = 1.4;
/** With a usual day on file, never fewer hours than this: 1.4 times a quiet
 * three-hour usual is not a long day on anybody's feet. */
export const LONG_DAY_FLOOR_HOURS = 6;
/** With nothing learned about the person yet: a working day's worth. */
export const LONG_DAY_DEFAULT_HOURS = 8;

export type LongDayInput = {
  /** Yesterday's hours on foot, or null with no reading. */
  hours: number | null;
  /** The person's usual day, same measure (`hoursOnFeetBaseline`). */
  usual: number | null;
  /** The hour count past which their own next mornings got worse
   * (`onFeetThreshold`), when one has been learned. */
  learnedLimit: number | null;
};

/**
 * The hour count from which a day counts as long, from what is known about
 * this person, most personal first:
 *
 * 1. their own learned limit, the line "mornings are harder after N+ h" is
 *    drawn at;
 * 2. their usual day times `LONG_DAY_RATIO`, never under the floor;
 * 3. `LONG_DAY_DEFAULT_HOURS`, until there is a usual to compare with.
 */
export function longDayLimit({ usual, learnedLimit }: Omit<LongDayInput, 'hours'>): number {
  if (learnedLimit != null) return learnedLimit;
  if (usual != null && usual > 0) return Math.max(LONG_DAY_FLOOR_HOURS, usual * LONG_DAY_RATIO);
  return LONG_DAY_DEFAULT_HOURS;
}

/** Whether yesterday was a long day on the feet. Never without a reading. */
export function wasLongDay(input: LongDayInput): boolean {
  if (input.hours == null || !Number.isFinite(input.hours)) return false;
  return input.hours >= longDayLimit(input);
}

/**
 * Yesterday's hours on foot, rounded, when yesterday was a long day and the
 * signals are this morning's; otherwise null.
 *
 * Null without fresh data: the cache outlives midnight, and "yesterday" in
 * signals computed the day before is the wrong day. Null with no reading,
 * which is also what no permission looks like.
 */
export function longDayYesterday(
  signals: Pick<HealthSignals, 'asOf' | 'hoursOnFeetYesterday' | 'hoursOnFeetBaseline' | 'onFeetThreshold'>,
  today: string,
): number | null {
  if (signals.asOf !== today) return null;
  const hours = signals.hoursOnFeetYesterday;
  if (hours == null) return null;
  const long = wasLongDay({ hours, usual: signals.hoursOnFeetBaseline, learnedLimit: signals.onFeetThreshold });
  return long ? Math.round(hours) : null;
}

// ── The week ─────────────────────────────────────────────────────────────────

export const ON_FEET_WEEK_DAYS = 7;
/** Finished days with a reading before the week is drawn: one bar is not a
 * week, and its "busiest day" would be the only day. */
export const ON_FEET_WEEK_MIN_DAYS = 2;

export type OnFeetDay = {
  /** `YYYY-MM-DD`. */
  date: string;
  /** Hours on foot, or null with no reading for the day. */
  hours: number | null;
  /** The day still in progress: drawn, never averaged or ranked. */
  today: boolean;
};

export type OnFeetWeek = {
  /** Oldest first, today last. Always `ON_FEET_WEEK_DAYS` long. */
  days: OnFeetDay[];
  /** Finished days that carry a reading. */
  readings: number;
  /** Mean of the finished days with a reading, or null with none. */
  average: number | null;
  /** The finished day with the most hours (the latest of equals), or null
   * when no finished day had any. */
  busiest: OnFeetDay | null;
};

/** `YYYY-MM-DD` moved by whole days, in local time like every key here. */
function shift(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const date = new Date(y, m - 1, d + days);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${mm}-${dd}`;
}

/**
 * The seven days ending today, from the stored days.
 *
 * The average and the busiest day leave today out: a day still in progress
 * would pull the average down every morning and could never fairly be the
 * busiest. A missing day is a null, not a zero: nothing was read, which is
 * different from a day spent sitting.
 */
export function onFeetWeek(stored: readonly DailyMetric[], today: string): OnFeetWeek {
  const byDate = new Map(withOnFeetHours(stored).map((day) => [day.date, day]));
  const days: OnFeetDay[] = Array.from({ length: ON_FEET_WEEK_DAYS }, (_, i) => {
    const date = shift(today, i - ON_FEET_WEEK_DAYS + 1);
    const hours = byDate.get(date)?.hoursOnFeet ?? null;
    return { date, hours: hours != null && Number.isFinite(hours) ? hours : null, today: date === today };
  });
  const finished = days.filter((day): day is OnFeetDay & { hours: number } => !day.today && day.hours != null);
  const average = finished.length === 0 ? null : finished.reduce((sum, day) => sum + day.hours, 0) / finished.length;
  let busiest: OnFeetDay | null = null;
  for (const day of finished) {
    if (day.hours > 0 && (busiest == null || day.hours >= (busiest.hours ?? 0))) busiest = day;
  }
  return { days, readings: finished.length, average, busiest };
}
