import * as Notifications from 'expo-notifications';

import { getLanguage, translatorFor } from '@/shared/lib/i18n';

import { scheduleWithArt } from './attachment';
import type { Message } from './copy';
import { CHANNEL_ID, ensureNotificationChannel, notificationsAllowed } from './notifications';
import { offerPushesAllowed } from './offer-prefs';

/**
 * The local notifications around the paywall: the reminder before a free
 * trial somebody started ends, and the morning after the first session.
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
