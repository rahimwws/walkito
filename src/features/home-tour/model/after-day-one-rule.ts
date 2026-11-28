import { kv } from '@/shared/lib/storage';

const KEY = 'offer/after-day1-shown';

export type AfterDayOneReading = { looking: boolean; dayOneDone: boolean; tourDone: boolean };

/**
 * When the plans rise on their own after Day 1 (`after_day1`): for somebody
 * looking around (she said "Not now"), once Day 1 is done (the onboarding's
 * first move or Home's "Day 1" card) and the Home tour is over, so she has
 * seen the app before she is asked again. Once per person: after a second
 * "Not now", only a tap on something locked raises the plans.
 */
export function afterDayOneDue(reading: AfterDayOneReading & { shown: boolean }): boolean {
  return reading.looking && reading.dayOneDone && reading.tourDone && !reading.shown;
}

/** Asks (`ask`) when it is due, and records on the phone that it has. */
export function takeAfterDayOne(reading: AfterDayOneReading, ask: () => void): boolean {
  if (!afterDayOneDue({ ...reading, shown: kv.getBoolean(KEY) === true })) return false;
  kv.set(KEY, true);
  ask();
  return true;
}

/** Development only (`?previewAfterDay1`): it can rise again. */
export function devForgetAfterDayOne(): void {
  if (!__DEV__) return;
  kv.remove(KEY);
}
