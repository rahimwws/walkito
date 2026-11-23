import { attendedLevel, dayNumberFor, programState } from '@/entities/program';

/** `YYYY-MM-DD` for a day of a month, `month` 1-12. */
function keyOf(year: number, month: number, date: number): string {
  return year + '-' + String(month).padStart(2, '0') + '-' + String(date).padStart(2, '0');
}

/**
 * Which days of a month a plan session or a routine was finished, by day of
 * the month, up to `today`: the rule the done screen's calendar counts by,
 * so the two never disagree.
 */
export function doneDaysIn(year: number, month: number, today: string): Set<number> {
  const state = programState();
  const done = new Set<number>();
  const length = new Date(year, month, 0).getDate();
  for (let date = 1; date <= length; date++) {
    const key = keyOf(year, month, date);
    if (key > today) break;
    const number = dayNumberFor(state, key);
    if (number >= 1 && attendedLevel(number) === 'full') done.add(date);
  }
  return done;
}

/** The month a `YYYY-MM-DD` falls in, as [year, month 1-12]. */
export function monthOf(key: string): [number, number] {
  const [year, month] = key.split('-').map(Number);
  return [year, month];
}
