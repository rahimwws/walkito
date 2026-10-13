import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { getLanguage, translatorFor } from '@/shared/lib/i18n';

import { prepareArt, releaseArt, scheduleWithArt, scheduleWithPreparedArt, type PreparedArt } from './attachment';
import type { Message } from './copy';
import { CHANNEL_ID, ensureNotificationChannel, notificationsAllowed } from './notifications';
import { offerPushesAllowed } from './offer-prefs';

/**
 * The local notifications around the offer screen after the paywall's "Not
 * now" (`features/home-offer`):
 * the comeback, sent as somebody leaves the one-time trial offer, and the
 * reminder before a free trial they started ends.
 *
 * Local, like the win-back and the expiry notice: every date here is known on
 * the device the moment it matters, so no server and no push token is needed.
 * Wording comes from `translatorFor(getLanguage())`, resolved when the request
 * is made (the first comeback push's when it is readied, ahead of the moment
 * it is for), because both are scheduled outside the React tree.
 *
 * **No price in the comeback's words.** The body names the deals the store has
 * on offer (a year for less, keeping it for good) without a figure: a price
 * typed into a push outlives the store answer it came from, and the offer
 * screen the tap opens prints the store's own. Only the deals the offering really holds
 * are named, so a store without a lifetime product never promises one.
 */

/** Marks both comeback pushes, so a tap can be told apart from the win-back
 * and the daily messages. Matched on the payload, as `WINBACK_KIND` is. */
export const COMEBACK_KIND = 'offer-comeback';

/** Marks the reminder before a free trial ends. Opening it needs nothing more
 * than the app. */
export const TRIAL_ENDING_KIND = 'trial-ending';

const LAST_CHANCE_ID = 'offer-comeback-last-chance';
const ENDS_SOON_ID = 'offer-comeback-ends-soon';
const TRIAL_ENDING_ID = 'trial-ending';

const HOUR_MS = 3_600_000;
const DAY_MS = 86_400_000;

/**
 * When the second comeback push lands: about three days after the first, but
 * never later than this long before the deadline. The comeback has a real end
 * (15 minutes from when it began), so "ends soon" has to arrive while it is still
 * true; with the deadline as it is today that means a few hours before it.
 */
const ENDS_SOON_AFTER_MS = 72 * HOUR_MS;
const ENDS_SOON_BEFORE_DEADLINE_MS = 6 * HOUR_MS;

/** Not worth a push: a deadline this close is better left to the countdown on
 * the overlay itself. */
const MIN_LEAD_MS = 10 * 60_000;

/** Which deals the comeback offering really holds. */
export type ComebackDeals = { year: boolean; lifetime: boolean };

/** The first comeback push, sent as somebody leaves the trial offer. */
export function lastChanceMessage(deals: ComebackDeals): Message {
  const t = translatorFor(getLanguage());
  return {
    title: t('homeOffer.push.lastChanceTitle'),
    body:
      deals.year && deals.lifetime
        ? t('homeOffer.push.lastChanceBoth')
        : deals.year
          ? t('homeOffer.push.lastChanceYear')
          : t('homeOffer.push.lastChanceLifetime'),
  };
}

/** The second one, while the deadline is still ahead. */
export function endsSoonMessage(): Message {
  const t = translatorFor(getLanguage());
  return { title: t('homeOffer.push.endsSoonTitle'), body: t('homeOffer.push.endsSoonBody') };
}

/**
 * The first comeback push, made ready while the trial offer is on screen.
 *
 * The person leaving the trial offer is the moment it is for, and they may be
 * on their way to deleting the app: the banner has to be on the home screen
 * they arrive at, not a second later. So everything that takes time is done
 * here, ahead of it (the permission check, the Android channel, the words, the
 * picture's copy), and leaving costs only the request (`sendComebackPush`).
 */
export type ReadyComeback = {
  readonly deals: ComebackDeals;
  readonly request: Notifications.NotificationRequestInput;
  readonly art: PreparedArt;
};

/**
 * Readies the first comeback push for `deals`. Null when there is nothing to
 * send: no deal to name, or no permission (a refused request is not worth a
 * warning, and the trial offer never asks).
 *
 * `trigger: null` (Android: the channel alone), as the win-back does: it is
 * delivered the moment it is added.
 */
export async function prepareComebackPush(deals: ComebackDeals): Promise<ReadyComeback | null> {
  if (!deals.year && !deals.lifetime) return null;
  // Offers turned off in Settings (guideline 4.5.4).
  if (!offerPushesAllowed()) return null;
  if (!(await notificationsAllowed())) return null;
  await ensureNotificationChannel();
  const message = lastChanceMessage(deals);
  // The gift on iPhone; see `attachment.ts`.
  const art = await prepareArt('offer');
  return {
    deals,
    art,
    request: {
      identifier: LAST_CHANCE_ID,
      content: { title: message.title, body: message.body, sound: true, data: { kind: COMEBACK_KIND } },
      trigger: Platform.OS === 'android' ? { channelId: CHANNEL_ID } : null,
    },
  };
}

/**
 * Sends a ready comeback push. The request is made before this returns, so
 * the caller leaving the app calls it first and does the rest after. Resolves
 * with whether the system took it. Spends `ready` (its picture is iOS's now),
 * whatever the answer: the next one is prepared afresh.
 *
 * Never checks access when it is delivered (a local notification cannot): a
 * purchase cancels it (`cancelComebackPushes`).
 */
export function sendComebackPush(ready: ReadyComeback): Promise<boolean> {
  return scheduleWithPreparedArt(ready.art, ready.request).then(
    () => true,
    (error: unknown) => {
      console.warn('[notifications] comeback did not schedule:', error);
      return false;
    },
  );
}

/** A ready comeback push that will not be sent: its picture's copy, deleted. */
export function releaseComebackPush(ready: ReadyComeback | null): void {
  if (ready != null) releaseArt(ready.art);
}

/**
 * The second comeback push, before the deadline: a date trigger, skipped when
 * the deadline is too close or already gone, so it never says "ends soon"
 * about something that has ended. Not urgent, so it takes the ordinary path.
 * Resolves with whether it was scheduled.
 */
export async function scheduleEndsSoonPush({
  endsAt,
  now = Date.now(),
}: {
  /** The comeback's deadline, ms since the epoch. */
  endsAt: number;
  now?: number;
}): Promise<boolean> {
  if (!offerPushesAllowed()) return false;
  const at = Math.min(now + ENDS_SOON_AFTER_MS, endsAt - ENDS_SOON_BEFORE_DEADLINE_MS);
  if (at - now < MIN_LEAD_MS || endsAt <= now) return false;
  await ensureNotificationChannel();
  const second = endsSoonMessage();
  try {
    await scheduleWithArt('offer', {
      identifier: ENDS_SOON_ID,
      content: { title: second.title, body: second.body, sound: true, data: { kind: COMEBACK_KIND } },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: new Date(at),
        channelId: CHANNEL_ID,
      },
    });
    return true;
  } catch (error) {
    console.warn('[notifications] comeback reminder did not schedule:', error);
    return false;
  }
}

/**
 * Takes the first comeback push out of Notification Centre, for somebody who
 * came back to the app on their own and is looking at the offer again. The
 * second one stays scheduled: its deadline has not moved.
 */
export async function dismissLastChance(): Promise<void> {
  try {
    await Notifications.dismissNotificationAsync(LAST_CHANCE_ID);
  } catch {
    // Nothing in the tray under that identifier.
  }
}

/** Both comeback pushes, cancelled and cleared: called once access is held,
 * since a push about a lower price is wrong for somebody who has bought. */
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
