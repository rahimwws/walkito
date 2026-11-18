import { getLanguage, translatorFor, type Language } from '@/shared/lib/i18n';

import type { Message } from './copy';

/**
 * The first-step routine's morning: one local notification at the time she
 * said she gets up, the morning after the onboarding, and the same routine
 * on her first open that morning when notifications are off.
 *
 * A plan reminder, never an offer (guideline 4.5.4): it names the routine and
 * nothing else, no price and no deadline, so offers being turned off in
 * Settings does not hold it. Its tap opens the two-minute session for a
 * subscriber, and the plans with "Your first-step routine is ready" for
 * anybody else, which is what the app opens on for them anyway.
 *
 * Her own wake time, not a quarter of an hour before it: the web funnel says
 * the same time, and the routine is done in bed, as she wakes.
 *
 * This file is the arithmetic and the words, with no notification module in
 * it, so both can be tested. `first-step-push.ts` does the scheduling.
 */

export const FIRST_STEP_KIND = 'first-step';

const MINUTES_IN_DAY = 24 * 60;

/** Minutes past midnight, whole, inside one day. */
export function clampWake(minutes: number): number {
  if (!Number.isFinite(minutes)) return 7 * 60;
  const whole = Math.round(minutes);
  return ((whole % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_DAY;
}

/**
 * When the routine is due: tomorrow at her wake time, counted from the day
 * the onboarding ended (`from`), in local time. Always tomorrow, never later
 * today: every screen says "tomorrow".
 */
export function firstStepAt(from: number, wakeMinutes: number): number {
  const at = new Date(from);
  at.setHours(0, 0, 0, 0);
  at.setDate(at.getDate() + 1);
  at.setMinutes(clampWake(wakeMinutes));
  return at.getTime();
}

/** How early an open still counts as that morning's: she may wake before her alarm. */
export const EARLY_MS = 2 * 60 * 60_000;
/** The latest an open still counts as that morning: noon, or six hours after
 * her wake time for somebody who gets up late. */
const LATE_HOURS = 6;

function sameDay(a: number, b: number): boolean {
  const x = new Date(a);
  const y = new Date(b);
  return x.getFullYear() === y.getFullYear() && x.getMonth() === y.getMonth() && x.getDate() === y.getDate();
}

/**
 * Whether an open of the app now is her first that morning, for somebody who
 * has not had the routine yet: the day it is due, from two hours before her
 * wake time to noon (or six hours after it, whichever is later). Once only:
 * `handled` is set by the first open that shows it, or by the notification's
 * tap.
 */
export function firstStepDueInApp(now: number, at: number | null, handled: boolean): boolean {
  if (at == null || handled || !sameDay(now, at)) return false;
  const noon = new Date(at);
  noon.setHours(12, 0, 0, 0);
  const latest = Math.max(noon.getTime(), at + LATE_HOURS * 60 * 60_000);
  return now >= at - EARLY_MS && now < latest;
}

/** What the notification says: the same for everybody, a reminder of the routine. */
export function firstStepMessage(language: Language = getLanguage()): Message {
  const t = translatorFor(language);
  return { title: t('story.notify.title'), body: t('story.notify.body') };
}

/** "7:00", "07:00" or "7:00 AM", as the language writes a time of day. */
export function wakeLabel(minutes: number, language: string): string {
  const at = new Date(2000, 0, 1, 0, 0, 0, 0);
  at.setMinutes(clampWake(minutes));
  return new Intl.DateTimeFormat(language, { hour: 'numeric', minute: '2-digit' }).format(at);
}
