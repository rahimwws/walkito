import * as Notifications from 'expo-notifications';

import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';

import { scheduleWithArt } from './attachment';
import type { Message } from './copy';
import {
  DAY_ONE_REMINDERS,
  NO_DAY_ONE,
  dayOneMessage,
  dayOneTimes,
  settleDayOne,
  withoutFirstStepMorning,
  type DayOneState,
} from './day-one';
import { firstStepPendingAt } from './first-step-push';
import { CHANNEL_ID, ensureNotificationChannel, notificationsAllowed } from './notifications';
import { offerPushesAllowed } from './offer-prefs';

/**
 * The local notifications around the paywall: the reminder before a free
 * trial somebody started ends, the morning after the first session, and the
 * Day 1 reminder for somebody who left before doing it.
 *
 * Local, like the win-back and the expiry notice: every date here is known on
 * the device the moment it matters, so no server and no push token is needed.
 * Wording comes from `translatorFor(getLanguage())`, resolved when the request
 * is made, because both are scheduled outside the React tree.
 */

/** Marks the reminder before a free trial ends. Opening it needs nothing more
 * than the app. */
export const TRIAL_ENDING_KIND = 'trial-ending';

const LAST_CHANCE_ID = 'offer-comeback-last-chance';
const ENDS_SOON_ID = 'offer-comeback-ends-soon';
const TRIAL_ENDING_ID = 'trial-ending';

/** Marks the morning after the first session. Opening it needs nothing more
 * than the app: the paywall is where somebody who has not bought lands. */
export const NEXT_DAY_KIND = 'next-day';
const NEXT_DAY_ID = 'next-day';

const DAY_MS = 86_400_000;

/** Not worth a push: a reminder this close to its moment says nothing new. */
const MIN_LEAD_MS = 10 * 60_000;

/** The two pushes of the timed comeback price, which earlier builds
 * laid: cancelled and cleared at every launch, since that offer is gone and
 * a push about it would promise a price nobody can buy. */
export async function cancelComebackPushes(): Promise<void> {
  for (const id of [LAST_CHANCE_ID, ENDS_SOON_ID]) {
    try {
      await Notifications.cancelScheduledNotificationAsync(id);
    } catch {
      // Never scheduled, or already delivered.
    }
    try {
      await Notifications.dismissNotificationAsync(id);
    } catch {
      // Not in the tray.
    }
  }
}

/** What the trial reminder says. `price` is the store's yearly price, as the
 * plan reported it when the trial was bought. */
export function trialEndingMessage(price: string, daysBefore: number): Message {
  const t = translatorFor(getLanguage());
  return {
    title: t('homeOffer.push.trialEndsTitle', { count: daysBefore }),
    body: t('homeOffer.push.trialEndsBody', { price }),
  };
}

/**
 * The reminder the trial offer promises: `daysBefore` days before the free
 * trial ends, at the time of day it was started.
 *
 * Replaces any earlier one (one identifier). Skipped, and reported as not
 * scheduled, when that moment is already past: a trial too short to be
 * reminded about is not one this app sells, and a date trigger in the past
 * would fire the instant it was laid.
 */
export async function scheduleTrialReminder({
  trialEndsAt,
  price,
  daysBefore,
  now = Date.now(),
}: {
  /** When the free trial ends, ms since the epoch. */
  trialEndsAt: number;
  price: string;
  daysBefore: number;
  now?: number;
}): Promise<boolean> {
  const at = trialEndsAt - daysBefore * DAY_MS;
  if (at - now < MIN_LEAD_MS) return false;
  await ensureNotificationChannel();
  const message = trialEndingMessage(price, daysBefore);
  try {
    await Notifications.cancelScheduledNotificationAsync(TRIAL_ENDING_ID).catch(() => undefined);
    // The crown and key on iPhone, the expiry notice's picture.
    await scheduleWithArt('expiry', {
      identifier: TRIAL_ENDING_ID,
      content: { title: message.title, body: message.body, sound: true, data: { kind: TRIAL_ENDING_KIND } },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: new Date(at),
        channelId: CHANNEL_ID,
      },
    });
    return true;
  } catch (error) {
    console.warn('[notifications] trial reminder did not schedule:', error);
    return false;
  }
}

/** What the morning after the first session says. `day` is the plan day it
 * is the morning of. */
export function nextDayMessage(day: number, name?: string): Message {
  const t = translatorFor(getLanguage());
  const who = name != null && name.trim().length > 0 ? name.trim() : null;
  return {
    title: who != null ? t('notifications.nextDayNamed', { name: who, day }) : t('notifications.nextDay', { day }),
    body: t('notifications.nextDayBody'),
  };
}

/**
 * "Day 2 is ready": one message on the morning after somebody did the first
 * session before the paywall and left without buying.
 *
 * The session was real and so is the day after it; the tap opens the app,
 * which for them is the paywall that carries on from that session. An offer
 * all the same, since what it leads to is a price: held when offers are
 * turned off in Settings (guideline 4.5.4) and without permission. One
 * identifier, so laying it again moves it rather than adding a second.
 */
export async function scheduleNextDayPush({ at, day, name }: { at: number; day: number; name?: string }): Promise<boolean> {
  if (!offerPushesAllowed() || !(await notificationsAllowed())) return false;
  await ensureNotificationChannel();
  const message = nextDayMessage(day, name);
  try {
    await Notifications.cancelScheduledNotificationAsync(NEXT_DAY_ID).catch(() => undefined);
    await scheduleWithArt('session', {
      identifier: NEXT_DAY_ID,
      content: { title: message.title, body: message.body, sound: true, data: { kind: NEXT_DAY_KIND } },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: new Date(at),
        channelId: CHANNEL_ID,
      },
    });
    return true;
  } catch (error) {
    console.warn('[notifications] next-day push did not schedule:', error);
    return false;
  }
}

/** Bought, so the plan's own reminders speak from here on. */
export async function cancelNextDayPush(): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync(NEXT_DAY_ID).catch(() => undefined);
}

/** Marks the Day 1 reminder. Its tap opens Day 1 (`takeDayOneTap`,
 * `onDayOneTap`), never a price. `reminder` in its data says which of the
 * two it was. */
export const DAY_ONE_KIND = 'day-one';
const DAY_ONE_IDS = ['day-one-1', 'day-one-2'] as const;
const DAY_ONE_KEY = 'notifications/day-one';
const DAY_ONE_TAP_KEY = 'notifications/day-one-tap';

function readDayOne(): DayOneState {
  try {
    const raw = JSON.parse(kv.getString(DAY_ONE_KEY) ?? 'null') as Partial<DayOneState> | null;
    if (raw == null || typeof raw.sent !== 'number' || !Array.isArray(raw.pending)) return NO_DAY_ONE;
    return { sent: raw.sent, pending: raw.pending.filter((at): at is number => typeof at === 'number') };
  } catch {
    return NO_DAY_ONE;
  }
}

/** One at a time: laid as the app leaves and taken back as it returns, and a
 * quick return must not overtake the laying it follows. */
let dayOneQueue: Promise<unknown> = Promise.resolve();
function dayOneNext<T>(job: () => Promise<T>): Promise<T> {
  const run = dayOneQueue.then(job, job);
  dayOneQueue = run.catch(() => undefined);
  return run;
}

/**
 * The Day 1 reminder (`day-one.ts`), laid as somebody who has not bought and
 * has not done Day 1 leaves the app: what is still owed of the two, at
 * `minutes` past midnight on the days that file names.
 *
 * Only with permission already given: this never asks. Held too when offers
 * are turned off in Settings (guideline 4.5.4): it points at the free session
 * and names no price, but it goes to somebody who has not bought, and the
 * switch is their way to say no to that. Fixed identifiers, so laying again
 * moves the two rather than adding to them. Returns how many were laid.
 */
export function scheduleDayOneReminders({
  minutes,
  name,
  now = Date.now(),
}: {
  minutes: number;
  name?: string;
  now?: number;
}): Promise<number> {
  return dayOneNext(async () => {
    const state = settleDayOne(readDayOne(), now);
    kv.set(DAY_ONE_KEY, JSON.stringify(state));
    if (state.sent >= DAY_ONE_REMINDERS) return 0;
    if (!offerPushesAllowed() || !(await notificationsAllowed())) return 0;
    await ensureNotificationChannel();
    // The first-step routine's morning has its own notification: the Day 1
    // reminder that would land the same morning is left out.
    const times = withoutFirstStepMorning(dayOneTimes(state.sent, now, minutes), await firstStepPendingAt());
    // On record before they are laid: one that is laid and then lost from the
    // record (the app closed in between) would never be taken back or counted.
    kv.set(DAY_ONE_KEY, JSON.stringify({ sent: state.sent, pending: times }));
    const laid: number[] = [];
    for (const [i, at] of times.entries()) {
      const which = state.sent + i + 1;
      if (which !== 1 && which !== 2) break;
      const message = dayOneMessage(which, name);
      try {
        await scheduleWithArt('session', {
          identifier: DAY_ONE_IDS[which - 1],
          content: {
            title: message.title,
            body: message.body,
            sound: true,
            data: { kind: DAY_ONE_KIND, reminder: which },
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: new Date(at),
            channelId: CHANNEL_ID,
          },
        });
        laid.push(at);
      } catch (error) {
        console.warn('[notifications] day-one reminder did not schedule:', error);
      }
    }
    kv.set(DAY_ONE_KEY, JSON.stringify({ sent: state.sent, pending: laid }));
    return laid.length;
  });
}

/**
 * Takes back whatever Day 1 reminder is waiting, and clears one already in
 * the tray: she is in the app, so neither has anything left to say. One whose
 * moment has passed is counted as sent first. `forGood` when she has bought
 * or has done Day 1: nothing is owed after that, whatever was sent.
 */
export function cancelDayOneReminders({
  forGood = false,
  now = Date.now(),
}: { forGood?: boolean; now?: number } = {}): Promise<void> {
  return dayOneNext(async () => {
    const before = readDayOne();
    const state = settleDayOne(before, now);
    kv.set(DAY_ONE_KEY, JSON.stringify(forGood ? { sent: DAY_ONE_REMINDERS, pending: [] } : state));
    // Nothing was waiting or in the tray: every launch comes through here,
    // and for nearly everybody there is nothing to ask the system for.
    if (before.pending.length === 0) return;
    for (const id of DAY_ONE_IDS) {
      await Notifications.cancelScheduledNotificationAsync(id).catch(() => undefined);
      await Notifications.dismissNotificationAsync(id).catch(() => undefined);
    }
  });
}

/** Which Day 1 reminder a response is a tap on, or null for any other. Each
 * tap is answered once, across launches: the response that opened the app
 * stays readable for as long as the process lives, and on Android beyond it. */
function dayOneTapOf(response: Notifications.NotificationResponse | null): 1 | 2 | null {
  const request = response?.notification.request;
  const data = request?.content.data as { kind?: string; reminder?: number } | undefined;
  if (request == null || data?.kind !== DAY_ONE_KIND) return null;
  const tap = `${request.identifier}:${response?.notification.date ?? 0}`;
  if (kv.getString(DAY_ONE_TAP_KEY) === tap) return null;
  kv.set(DAY_ONE_TAP_KEY, tap);
  return data.reminder === 2 ? 2 : 1;
}

/**
 * The Day 1 reminder whose tap opened the app, read at launch, before the
 * first screen decides what to show. Null for any other launch, on a binary
 * whose notification module cannot answer at once, and the second time it is
 * asked about the same tap.
 */
export function takeDayOneTap(): 1 | 2 | null {
  try {
    return dayOneTapOf(Notifications.getLastNotificationResponse());
  } catch {
    return null;
  }
}

/** A Day 1 reminder tapped while the app was running. Returns the unsubscribe. */
export function onDayOneTap(listener: (reminder: 1 | 2) => void): () => void {
  const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
    const reminder = dayOneTapOf(response);
    if (reminder != null) listener(reminder);
  });
  return () => subscription.remove();
}

/**
 * Whether a reminder can reach this person: permission granted, or not asked
 * yet (the trial's purchase asks). False once it has been refused for good,
 * which is when a screen must not promise one.
 */
export async function notificationsPossible(): Promise<boolean> {
  try {
    const { granted, canAskAgain } = await Notifications.getPermissionsAsync();
    return granted || canAskAgain;
  } catch {
    return false;
  }
}
