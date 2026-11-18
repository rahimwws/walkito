import { getLanguage, translatorFor, type Language } from '@/shared/lib/i18n';

import type { Message } from './copy';
import { QUIET_FROM_MINUTES } from './limits';

/**
 * The Day 1 reminder: two notifications at most, ever, for somebody who
 * finished the onboarding, met the paywall and left without buying and
 * without doing the two free minutes.
 *
 * It points at the session, never at a price: the tap opens the app on Day 1
 * (the invitation before the plans, or Home's "Day 1" card after "Not now").
 * So it says nothing about plans, prices or time running out, promises
 * nothing about her feet, and stops by itself: the morning after she left,
 * once more two days on, then nothing, whatever she does.
 *
 * Laid as the app goes to the background and taken back the moment it is
 * opened again, so nobody looking at the app has one waiting. What has gone
 * out is counted (`sent`): somebody who opens the app between the two and
 * leaves again gets the one that is left, not two more.
 *
 * This file is the arithmetic and the words, with no notification module in
 * it, so both can be tested. `offer-pushes.ts` does the scheduling.
 */

/** How many go out, in the life of the install. */
export const DAY_ONE_REMINDERS = 2;

/** Whole days after she left: the next morning, then two days on. The second
 * one left over after the first went out takes the later place. */
export const DAY_ONE_AFTER_DAYS = [1, 3] as const;

/** The latest a reminder lands: half an hour before the app's quiet hours. */
const LATEST_MINUTES = QUIET_FROM_MINUTES - 30;

export type DayOneState = {
  /** How many have reached her. */
  sent: number;
  /** When the ones still waiting are due, ms since the epoch. */
  pending: readonly number[];
};

export const NO_DAY_ONE: DayOneState = { sent: 0, pending: [] };

/**
 * The state once nothing is waiting any more: she is back in the app, or is
 * leaving it again. One whose moment has passed went out and is counted; the
 * rest are being taken back by the caller and are not.
 */
export function settleDayOne(state: DayOneState, now: number): DayOneState {
  const gone = state.pending.filter((at) => at <= now).length;
  return { sent: Math.min(DAY_ONE_REMINDERS, state.sent + gone), pending: [] };
}

/**
 * When the reminders still owed are due, for somebody leaving at `now`.
 * `minutes` is the time of day her own reminder is set for (minutes past
 * midnight, local), held before the quiet hours. Never the day she leaves:
 * the first is always a morning away.
 */
export function dayOneTimes(sent: number, now: number, minutes: number): number[] {
  const minuteOfDay = Math.max(0, Math.min(LATEST_MINUTES, Math.round(minutes)));
  return DAY_ONE_AFTER_DAYS.slice(Math.max(0, sent)).map((days) => {
    const at = new Date(now);
    at.setHours(0, 0, 0, 0);
    at.setDate(at.getDate() + days);
    at.setMinutes(minuteOfDay);
    return at.getTime();
  });
}

/**
 * The reminder times without the first-step routine's morning: on the day
 * the first-step notification is laid for (`firstStepAt`), that one speaks
 * and the Day 1 reminder that would land the same morning is not laid at
 * all, never moved. With no first-step notification waiting (never laid,
 * failed, or taken back) the times are as they were.
 */
export function withoutFirstStepMorning(times: readonly number[], firstStepAt: number | null): number[] {
  if (firstStepAt == null) return [...times];
  const day = new Date(firstStepAt).toDateString();
  return times.filter((at) => new Date(at).toDateString() !== day);
}

/** What each of the two says. `name` is her first name, or nothing. */
export function dayOneMessage(which: 1 | 2, name?: string | null, language: Language = getLanguage()): Message {
  const t = translatorFor(language);
  const who = name != null && name.trim().length > 0 ? name.trim() : null;
  if (which === 1) {
    return {
      title: who != null ? t('notifications.dayOneReadyNamed', { name: who }) : t('notifications.dayOneReady'),
      body: t('notifications.dayOneReadyBody'),
    };
  }
  return {
    title: who != null ? t('notifications.dayOneStillNamed', { name: who }) : t('notifications.dayOneStill'),
    body: t('notifications.dayOneStillBody'),
  };
}
