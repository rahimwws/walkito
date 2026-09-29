import { splitWait } from '@/shared/lib/clock';
import type { Language, Translate } from '@/shared/lib/i18n';

/**
 * A wait, in words — what a countdown says on a button, a banner or the dock.
 *
 * Pure apart from the translator, so the one rule every surface shares is
 * tested once: a wait inside a day is counted in hours and minutes, and one
 * further off names the day instead. "Next session in 52h 10m" is arithmetic
 * the reader has to do; "Next session: Monday" is the answer they wanted.
 *
 * Only the time itself lives here. The sentence around it — "Next session in
 * {time}", "Opens in {time}" — is the caller's, whole, in the catalogue.
 */

const MINUTE_MS = 60_000;

/** Up to a day away, a wait is counted; past it, the day is named. */
export const COUNT_WITHIN_MS = 24 * 60 * MINUTE_MS;

/**
 * "5h 3m", "45m", "<1m".
 *
 * Rounded up through `splitWait`, so it never reads "0m" while the wait is
 * still on. The last minute is its own phrase rather than a rounded-up "1m":
 * the seconds are ticking by then, and a figure that sits on 1 for sixty of
 * them looks stuck.
 */
export function waitTime(t: Translate, ms: number): string {
  if (ms > 0 && ms < MINUTE_MS) return t('time.underMinute');
  const { hours, minutes } = splitWait(ms);
  if (hours > 0) return t('time.hoursMinutes', { hours, minutes });
  return t('time.minutes', { count: minutes });
}

/**
 * The weekday a moment falls on, in the language's own long name for it —
 * "Monday", «понедельник», «lunes».
 *
 * Intl rather than a table of seven names per language: the app already asks
 * it for weekdays on the plan screen, and the names are a fact of the language
 * rather than copy anyone writes. Sentences put it after a colon, where every
 * language takes the dictionary form.
 */
export function weekdayName(at: number, language: Language): string {
  return new Intl.DateTimeFormat(language, { weekday: 'long' }).format(new Date(at));
}

export type WaitPhrase = { kind: 'in'; time: string } | { kind: 'on'; day: string };

/**
 * How to say a wait for something opening at `at`, with `left` of it to go.
 *
 * Counted within a day, the weekday beyond it. Split by kind rather than
 * returned as one string because the two go into different sentences — "in
 * {time}" and ": {day}" are not one template with a slot that takes either.
 */
export function waitPhrase(t: Translate, language: Language, at: number, left: number): WaitPhrase {
  if (left > COUNT_WITHIN_MS) return { kind: 'on', day: weekdayName(at, language) };
  return { kind: 'in', time: waitTime(t, left) };
}
