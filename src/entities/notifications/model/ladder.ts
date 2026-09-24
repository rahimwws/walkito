/**
 * Which one thing the app says on a given day, if it says anything.
 *
 * Pure. Every signal arrives as an argument and nothing here reads a clock, a
 * log or HealthKit — the impure half lives in `signals.ts`, which assembles
 * these from the program and the health cache.
 *
 * The ladder is evaluated top down and the first match wins. That ordering is
 * the whole design: rows 1–3 carry information no other app on the phone has,
 * and everything from row 7 down is a reminder. When two land on the same date
 * the higher one is *dropped*, never queued — a reminder that arrives a day
 * late is a reminder about the wrong day.
 */

import {
  QUIET_FROM_MINUTES,
  BACKOFF_AFTER,
  ESSENTIAL_THROUGH,
  blockedReason,
  daysSinceKind,
  sentOfKindInWeek,
  type Blocked,
  type DeliveryState,
} from './limits';

export type NotificationKind =
  | 'flare'
  | 'load'
  | 'gait'
  | 'retest'
  | 'block'
  | 'plan'
  | 'session'
  | 'checkin'
  | 'streak'
  | 'winback';

/** Position on the ladder. Lower speaks first, and `ESSENTIAL_THROUGH` is the
 * line below which a full week goes quiet. */
export const PRIORITY: Readonly<Record<NotificationKind, number>> = {
  flare: 1,
  load: 2,
  gait: 3,
  retest: 4,
  block: 5,
  plan: 6,
  session: 7,
  checkin: 8,
  streak: 9,
  winback: 10,
};

/** Pain at or above this yesterday makes today a flare day. Matches the
 * adaptation engine's own `FLARE_PAIN`, deliberately — a notification that
 * announced a lighter day the engine had not actually made would be a lie. */
export const FLARE_PAIN = 7;
/** Steps over this multiple of the 28-day baseline count as a big day. */
export const STEP_SPIKE_RATIO = 1.4;
/** Consecutive days of raised asymmetry before it is worth mentioning. */
export const GAIT_DAYS = 3;
/** And how long the app then leaves the subject alone. */
export const GAIT_COOLDOWN_DAYS = 14;
/** Pain this high in the last three days is half of what unlocks the gait
 * message; a step spike is the other half. */
export const GAIT_PAIN_GATE = 3;
export const CHECKIN_PER_WEEK = 3;
export const STREAK_PER_WEEK = 2;
/** Below this there is nothing worth protecting, and saying so would be
 * inventing a stake the user has not got yet. */
export const STREAK_FLOOR = 5;
/** The three, and only three, win-back days. */
export const WINBACK_DAYS = [3, 10, 30] as const;

/**
 * The retest follow-up, and the one rule it breaks.
 *
 * The spec asks for a second message six hours after the retest nudge when the
 * tests are still untouched — and its own NEVER SEND table forbids exactly that
 * twice over: "Two in one day — Full stop" and "A second reminder for the same
 * event — One ask, then let it go". The two cannot both be honoured.
 *
 * Settled in favour of sending, narrowly. It is the one event in the program
 * the user is provably waiting on an answer from — "let's find out if it's
 * working" — it recurs once a fortnight rather than daily, and it is dropped
 * the moment the tests are opened, because any app open rebuilds the window.
 * Nothing else in the app gets a second message, and turning this off again
 * costs one constant.
 *
 * Kept here rather than with the scheduler because it is a rule about what may
 * be said, not a detail of how it is delivered — and because everything in this
 * file can be tested without dragging React Native in behind it.
 */
export const RETEST_FOLLOW_UP = true;
export const FOLLOW_UP_HOURS = 6;

/** The reminder lands this long before they usually finish — roughly when they
 * usually start, since the sessions are five to ten minutes long. */
export const SESSION_LEAD_MINUTES = 20;
/** And never later than this: an hour's margin before the evening boundary. */
const LATEST_SESSION_AT = QUIET_FROM_MINUTES - 60;

/**
 * When the session reminder should land.
 *
 * Their habit, when there is one, clamped so it never lands before they are
 * awake or inside the evening quiet. Read once from the days before today, so
 * the whole planned week uses the same time.
 */
export function sessionAtFor(wakeAt: number, habit: number | null): number {
  if (habit == null) return wakeAt;
  return Math.min(Math.max(habit - SESSION_LEAD_MINUTES, wakeAt), LATEST_SESSION_AT);
}

/** Minutes past midnight, for the rows that do not ride the wake time. */
export const GAIT_AT = 18 * 60;
export const CHECKIN_AT = 20 * 60;
export const STREAK_AT = 21 * 60;

/**
 * Everything the ladder is allowed to know about one day.
 *
 * Deliberately flat and free of app types. A scheduler that had to be handed a
 * `ResolvedDay` could not be tested without standing up the adaptation engine,
 * and these are the rules that decide whether a promise is kept.
 */
export type DaySignals = {
  /** `YYYY-MM-DD`, local. */
  dateKey: string;
  dayNumber: number;
  /** Minutes past midnight the morning message should land. Wake + 15. */
  wakeAt: number;

  /** Pain logged for the day before, or null when nothing was. */
  painYesterday: number | null;
  /** Pain at or above `GAIT_PAIN_GATE` logged in the last three days. */
  painRecently: boolean;
  /** Yesterday's steps over the 28-day mean, or null when unknown. */
  stepRatio: number | null;
  /** Yesterday's steps, for the copy. */
  stepsYesterday: number | null;
  /** Consecutive days walking asymmetry has been above baseline. */
  asymmetryDays: number;

  /** The engine changed today because of the load, not just noticed it. */
  loadAdjusted: boolean;
  /** The engine altered today from the template at all. */
  planChanged: boolean;
  /** Why, when it did. Drives which line the plan message uses. */
  planReason: string | null;

  isRetest: boolean;
  /** The retest was still untouched when the follow-up window came round. */
  retestUnstarted: boolean;
  /** Today is the first day of a block, and its name. */
  opensBlock: string | null;

  /** There is training today. Rest days get nothing. */
  hasSession: boolean;
  /**
   * Minutes past midnight the session reminder should land, when this person
   * has a habit of training at a particular time. Absent means the wake time.
   */
  sessionAt?: number;
  /** Days to their race on this date, when they gave one. */
  raceDaysLeft?: number | null;
  /** Their sport, for the one session line that names it. */
  sport?: string | null;
  minutes: number;
  kind: string | null;
  maintenance: boolean;

  painLoggedToday: boolean;
  openedAppToday: boolean;
  /** Consecutive days attended, for the one row that may mention it. */
  streak: number;
  freezeUsedThisWeek: boolean;
  /** Days since the app was last opened. Drives win-back. */
  daysAway: number;
};

export type Candidate = {
  kind: NotificationKind;
  priority: number;
  /** Minutes past midnight. */
  at: number;
};

/**
 * Every row whose trigger fires today, in ladder order.
 *
 * Separated from the delivery caps so the two can be reasoned about apart:
 * this answers "what is true today", `blockedReason` answers "may we say it".
 * Conflating them produced a scheduler that could not explain its own silence.
 */
export function candidates(signals: DaySignals, state: DeliveryState): Candidate[] {
  const found: Candidate[] = [];
  const add = (kind: NotificationKind, at: number) =>
    found.push({ kind, priority: PRIORITY[kind], at });

  // 1. The morning after a bad day. The single most important message in the
  //    app: this is the day rehab apps get deleted, and arriving with *less*
  //    work rather than the usual demand is what stops it.
  if (signals.painYesterday != null && signals.painYesterday >= FLARE_PAIN) {
    add('flare', signals.wakeAt);
  }

  // 2. Only when the engine actually backed off. A warning with no consequence
  //    is noise, and worse, it is the app telling someone their walk hurt them
  //    and then asking for the same session anyway.
  if (
    signals.stepRatio != null &&
    signals.stepRatio > STEP_SPIKE_RATIO &&
    signals.loadAdjusted
  ) {
    add('load', signals.wakeAt);
  }

  // 3. Gated three ways, because asymmetry alone is noise — one day carrying a
  //    bag on one shoulder must never fire this. Evening, not morning: it is
  //    information, not an instruction.
  const gaitGap = daysSinceKind(state, 'gait', signals.dateKey);
  if (
    signals.asymmetryDays >= GAIT_DAYS &&
    (signals.painRecently || (signals.stepRatio != null && signals.stepRatio > STEP_SPIKE_RATIO)) &&
    (gaitGap == null || gaitGap >= GAIT_COOLDOWN_DAYS)
  ) {
    add('gait', GAIT_AT);
  }

  if (signals.isRetest) add('retest', signals.wakeAt);
  if (signals.opensBlock != null) add('block', signals.wakeAt);
  if (signals.planChanged) add('plan', signals.wakeAt);

  // 7. The default, and only on days with work. Rest days get nothing at all.
  // At the time they usually train, once there is a habit to read; until then,
  // just after waking. The reminder is about doing the session, and a nudge at
  // 7:15 for somebody who always trains at lunch is a nudge they swipe away.
  if (signals.hasSession) add('session', signals.sessionAt ?? signals.wakeAt);

  // 8. Never on a day the user already came in — they have answered the
  //    question the check-in exists to ask.
  if (
    !signals.painLoggedToday &&
    !signals.openedAppToday &&
    sentOfKindInWeek(state, 'checkin', signals.dateKey) < CHECKIN_PER_WEEK
  ) {
    add('checkin', CHECKIN_AT);
  }

  // 9. The one row that may name the streak, and the one nearest the line the
  //    onboarding promise draws. Every condition here is a guard against it
  //    becoming the nagging the permission screen swore off.
  if (
    signals.streak >= STREAK_FLOOR &&
    !signals.painLoggedToday &&
    !signals.freezeUsedThisWeek &&
    sentOfKindInWeek(state, 'streak', signals.dateKey) < STREAK_PER_WEEK
  ) {
    add('streak', STREAK_AT);
  }

  // 10. Three, then silence for good.
  if ((WINBACK_DAYS as readonly number[]).includes(signals.daysAway)) {
    add('winback', signals.wakeAt);
  }

  return found.sort((a, b) => a.priority - b.priority);
}

export type Decision =
  | { send: true; candidate: Candidate }
  | { send: false; reason: Blocked | 'nothing-to-say' };

/**
 * The one message for a day, or the reason there is none.
 *
 * Walks the ladder and takes the first candidate the caps will let through,
 * rather than testing only the top one. A flare on a day whose quiet hours have
 * passed should not silence the whole day — but a flare that is merely *later*
 * than a reminder still outranks it, which is why the order is priority and not
 * time of day.
 */
export function decide(signals: DaySignals, state: DeliveryState): Decision {
  const rows = candidates(signals, state);
  if (rows.length === 0) return { send: false, reason: 'nothing-to-say' };

  let firstReason: Blocked | null = null;
  for (const candidate of rows) {
    const blocked = blockedReason(state, signals.dateKey, candidate.priority, candidate.at);
    if (blocked == null) return { send: true, candidate };
    firstReason ??= blocked;
  }
  return { send: false, reason: firstReason ?? 'nothing-to-say' };
}

/** Whether the app is in the shrunken week. Re-exported so the scheduler can
 * log it without reaching past this module. */
export { BACKOFF_AFTER, ESSENTIAL_THROUGH };
