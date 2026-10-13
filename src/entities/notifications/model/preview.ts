import * as Notifications from 'expo-notifications';

import { STEP_CHECK_MARK, healthSignals } from '@/entities/health';
import { currentDay, planWeekOf, toDateKey } from '@/entities/program';
import { getLanguage } from '@/shared/lib/i18n';

import { isNotificationArt, type NotificationArt } from './art';
import { scheduleWithArt } from './attachment';
import { messageFor, stepsCheckMessage, type Message } from './copy';
import {
  GAIT_DAYS,
  STEP_SPIKE_RATIO,
  STREAK_FLOOR,
  WINBACK_DAYS,
  type DaySignals,
  type NotificationKind,
} from './ladder';
import {
  CHANNEL_ID,
  ensureNotificationChannel,
  expiryMessage,
  requestNotificationAccess,
  winbackMessage,
} from './notifications';
import { signalsFor } from './signals';

/**
 * Development only: any notification the app sends, on demand, with its
 * picture, a few seconds from now.
 *
 * Most of these arrive at most once a day, at a time the ladder picks, and
 * several only on a day something happened (a flare, a big day on foot, a
 * Monday). A preview is the same words the real one would have — the same
 * builders, fed this person's own signals for today — with sample values only
 * where today has none of the thing the message is about, so a picture can be
 * checked against its copy and screenshotted from the lock screen.
 *
 * Tagged with its own `kind`, so it is neither counted as delivered by the
 * plan's listener nor taken for the win-back by the offer's.
 */
export const PREVIEW_KIND = 'dev-preview';

/** Time to press Home and lock the phone. */
const PREVIEW_DELAY_SECONDS = 4;

/** Samples, used only when today has no reading of its own. */
const SAMPLE_STEPS_YESTERDAY = 14_200;
const SAMPLE_STEP_RATIO = 1.6;
const SAMPLE_STEPS_TODAY = STEP_CHECK_MARK + 1_240;
const SAMPLE_PERCENT = 50;
const SAMPLE_FOCUS = 'calf_raises';

/** A day to start from when the plan cannot be read: before onboarding, say. */
function sampleSignals(now: number): DaySignals {
  return {
    dateKey: toDateKey(new Date(now)),
    dayNumber: 1,
    wakeAt: 7 * 60 + 15,
    painYesterday: null,
    painRecently: false,
    stepRatio: null,
    stepsYesterday: null,
    asymmetryDays: 0,
    loadAdjusted: false,
    planChanged: false,
    planReason: null,
    isRetest: false,
    retestUnstarted: true,
    opensBlock: null,
    hasSession: true,
    sport: null,
    minutes: 8,
    kind: 'strength',
    maintenance: false,
    painLoggedToday: false,
    openedAppToday: false,
    streak: 0,
    freezeUsedThisWeek: false,
    daysAway: 0,
  };
}

function todaySignals(now: number): DaySignals {
  try {
    const today = currentDay(now);
    return signalsFor(today, now, today);
  } catch {
    return sampleSignals(now);
  }
}

/** This week's focus goal, which the real message names only on a Monday. */
function weekFocus(dateKey: string): string | null {
  try {
    return planWeekOf(dateKey).focus ?? null;
  } catch {
    return null;
  }
}

/**
 * Today's signals, with just enough filled in for `kind` to have its message.
 * Never a pain figure: no message prints one, and none is invented here.
 */
function signalsForPreview(kind: NotificationKind, now: number): DaySignals {
  const real = todaySignals(now);
  const day: DaySignals = { ...real, dayNumber: Math.max(real.dayNumber, 1) };
  switch (kind) {
    case 'load': {
      // Both real or both sampled: a real count beside a sampled ratio would
      // print a figure that never happened.
      const spiked = real.stepsYesterday != null && real.stepRatio != null && real.stepRatio > STEP_SPIKE_RATIO;
      return spiked
        ? day
        : { ...day, stepsYesterday: SAMPLE_STEPS_YESTERDAY, stepRatio: SAMPLE_STEP_RATIO, loadAdjusted: true };
    }
    case 'gait':
      return { ...day, asymmetryDays: Math.max(real.asymmetryDays, GAIT_DAYS) };
    case 'block':
      return { ...day, opensBlock: real.opensBlock ?? weekFocus(real.dateKey) ?? SAMPLE_FOCUS };
    case 'plan':
      return { ...day, planChanged: true, planReason: real.planReason ?? 'spike' };
    case 'session':
      return real.minutes > 0 ? day : { ...day, minutes: 8, kind: real.kind ?? 'strength' };
    case 'streak':
      return { ...day, streak: Math.max(real.streak, STREAK_FLOOR) };
    case 'winback':
      return (WINBACK_DAYS as readonly number[]).includes(real.daysAway)
        ? day
        : { ...day, daysAway: WINBACK_DAYS[0] };
    default:
      return day;
  }
}

/** Steps so far today, when Health has today's count and it is past the mark. */
function stepsForPreview(now: number): number {
  const signals = healthSignals();
  const today = toDateKey(new Date(now));
  const steps = signals.asOf === today ? signals.stepsToday : null;
  return steps != null && steps >= STEP_CHECK_MARK ? steps : SAMPLE_STEPS_TODAY;
}

export type PreviewOptions = {
  /** The win-back's name and percent, which the paywall knows and this
   * entity does not. */
  name?: string;
  percent?: number;
};

function messageForPreview(art: NotificationArt, options: PreviewOptions, now: number): Message | null {
  const language = getLanguage();
  switch (art) {
    case 'offer':
      return winbackMessage(options.percent ?? SAMPLE_PERCENT, options.name);
    case 'expiry':
      return expiryMessage();
    case 'steps':
      return stepsCheckMessage(stepsForPreview(now), language);
    default:
      return messageFor(art, signalsForPreview(art, now), language);
  }
}

/**
 * Schedules the notification `name` — a ladder kind, `offer`, `expiry` or
 * `steps` — to arrive in `PREVIEW_DELAY_SECONDS`, picture and all.
 *
 * Does nothing outside a development build, and nothing for a name it does not
 * know. Asks for notification permission if it has never been asked, which is
 * what a fresh simulator needs. Resolves true once it is on the calendar.
 */
export async function previewNotification(
  name: string,
  options: PreviewOptions = {},
  now: number = Date.now(),
): Promise<boolean> {
  if (!__DEV__) return false;
  if (!isNotificationArt(name)) {
    console.warn('[notify] no preview called', name);
    return false;
  }
  if (!(await requestNotificationAccess())) {
    console.warn('[notify] preview needs notification permission');
    return false;
  }
  const message = messageForPreview(name, options, now);
  if (message == null) {
    console.warn('[notify] nothing to say for', name);
    return false;
  }
  await ensureNotificationChannel();
  try {
    await scheduleWithArt(name, {
      identifier: `${PREVIEW_KIND}-${name}`,
      content: {
        title: message.title,
        body: message.body,
        sound: true,
        data: { kind: PREVIEW_KIND, notification: name },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: PREVIEW_DELAY_SECONDS,
        channelId: CHANNEL_ID,
      },
    });
    return true;
  } catch (error) {
    console.warn('[notify] preview did not schedule', name, error);
    return false;
  }
}
