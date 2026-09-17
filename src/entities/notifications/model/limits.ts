/**
 * How often this app is allowed to speak, and when it must stay quiet.
 *
 * Pure arithmetic over date keys. Nothing here reads a clock, a store or
 * HealthKit — every input arrives as an argument, because these are the rules
 * that decide whether a promise made during onboarding is kept, and rules that
 * cannot be exercised in a test are rules nobody can check.
 *
 * The promise, verbatim from the permission screen:
 *
 *   > A nudge on the days your plan has a session
 *   > A heads-up when it changes what you are doing
 *   > Nothing else. No streaks to guilt you back.
 *
 * Every limit below exists to keep that true on the worst day rather than the
 * average one. A user in this category has been dismissed by doctors and sold
 * £1,700 insoles; an app that nags is not a mild annoyance to them, it is one
 * more thing treating them badly.
 */

/** One per day. Not a target — a ceiling that nothing may raise. */
export const MAX_PER_DAY = 1;
/** One per week, ordinarily. */
export const MAX_PER_WEEK = 5;
/** What the week shrinks to once the user has stopped opening them. */
export const BACKOFF_PER_WEEK = 2;
/** Unopened in a row before the week shrinks. */
export const BACKOFF_AFTER = 3;
/** How long the shrunken week lasts. */
export const BACKOFF_DAYS = 14;
/** Unopened in a row before the app stops entirely. */
export const PAUSE_AFTER = 7;
/** How long silence lasts before a single re-entry message is allowed. */
export const PAUSE_DAYS = 30;

/**
 * The last priority that may speak in a full week.
 *
 * Rows 1–4 are flare support, load, gait and retest — the four that carry
 * information the user cannot get anywhere else. Everything below is a
 * reminder, and reminders are what a full week is full of.
 */
export const ESSENTIAL_THROUGH = 4;

/** Evening boundary. Nothing may be delivered after this, ever. */
export const QUIET_FROM_MINUTES = 21 * 60 + 30;

const DAY_MS = 86_400_000;

/** A `YYYY-MM-DD` key to local midnight. */
function fromKey(key: string): number {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1).getTime();
}

/** Whole days from `a` to `b`, both keys. Negative when `b` is earlier. */
export function daysApart(a: string, b: string): number {
  return Math.round((fromKey(b) - fromKey(a)) / DAY_MS);
}

/**
 * What the app remembers between launches.
 *
 * Dates rather than counters wherever a counter would go stale: "sent on these
 * days" survives a week rolling over, where "sent this week" needs someone to
 * remember to reset it and is wrong the moment nobody does.
 */
export type DeliveryState = {
  /** Date keys the app spoke on, newest last. Trimmed by `forget`. */
  sentOn: readonly string[];
  /** Date keys per kind, for the caps that are per-type rather than global. */
  sentByKind: Readonly<Record<string, readonly string[]>>;
  /** Delivered and never opened, in a row. Reset by any app open. */
  unopenedStreak: number;
  /** Set when the pause began, so re-entry can be offered exactly once. */
  pausedOn: string | null;
  /** True once the single re-entry message has been used. */
  reentrySent: boolean;
};

export const EMPTY_DELIVERY: DeliveryState = {
  sentOn: [],
  sentByKind: {},
  unopenedStreak: 0,
  pausedOn: null,
  reentrySent: false,
};

/** How many were sent in the seven days ending at `on`, inclusive. */
export function sentInWeek(state: DeliveryState, on: string): number {
  return state.sentOn.filter((key) => {
    const gap = daysApart(key, on);
    return gap >= 0 && gap < 7;
  }).length;
}

/** Whether anything at all was sent on `on`. */
export function sentOnDay(state: DeliveryState, on: string): boolean {
  return state.sentOn.includes(on);
}

/** How many of one kind were sent in the seven days ending at `on`. */
export function sentOfKindInWeek(state: DeliveryState, kind: string, on: string): number {
  return (state.sentByKind[kind] ?? []).filter((key) => {
    const gap = daysApart(key, on);
    return gap >= 0 && gap < 7;
  }).length;
}

/** Days since this kind last went out, or null if it never has. */
export function daysSinceKind(state: DeliveryState, kind: string, on: string): number | null {
  const keys = state.sentByKind[kind] ?? [];
  let best: number | null = null;
  for (const key of keys) {
    const gap = daysApart(key, on);
    if (gap < 0) continue;
    if (best == null || gap < best) best = gap;
  }
  return best;
}

/** Inside the 14 days that follow three unopened messages. */
export function inBackoff(state: DeliveryState): boolean {
  return state.unopenedStreak >= BACKOFF_AFTER && state.unopenedStreak < PAUSE_AFTER;
}

/**
 * Silenced, and whether the one re-entry message is owed.
 *
 * Past the thirtieth day the app may speak exactly once more. After that it is
 * quiet permanently unless the user comes back on their own — which is the
 * whole point: someone who has ignored seven in a row has answered the
 * question, and continuing to ask is not persistence, it is harassment.
 */
export function pauseStatus(
  state: DeliveryState,
  on: string,
): 'running' | 'paused' | 'reentry' | 'silent' {
  if (state.unopenedStreak < PAUSE_AFTER) return 'running';
  if (state.pausedOn == null) return 'paused';
  if (daysApart(state.pausedOn, on) < PAUSE_DAYS) return 'paused';
  return state.reentrySent ? 'silent' : 'reentry';
}

/** The week's ceiling, given how the user has been responding. */
export function weeklyAllowance(state: DeliveryState): number {
  return inBackoff(state) ? BACKOFF_PER_WEEK : MAX_PER_WEEK;
}

export type Blocked =
  | 'already-sent-today'
  | 'week-full'
  | 'week-full-for-reminders'
  | 'paused'
  | 'silent'
  | 'quiet-hours';

/**
 * Whether a candidate of this priority may be delivered on this day and minute.
 *
 * Returns the reason rather than a bare boolean. Callers log it, and a
 * scheduler that can say *why* it stayed quiet is the difference between
 * diagnosing a missing notification in a minute and guessing for an afternoon.
 */
export function blockedReason(
  state: DeliveryState,
  on: string,
  priority: number,
  minuteOfDay: number,
): Blocked | null {
  const pause = pauseStatus(state, on);
  // Re-entry is the one message allowed to ignore a full week — it is the only
  // thing the app will say for a month either side of it.
  if (pause === 'silent') return 'silent';
  if (pause === 'paused') return 'paused';
  if (pause === 'reentry') {
    return minuteOfDay >= QUIET_FROM_MINUTES ? 'quiet-hours' : null;
  }

  if (minuteOfDay >= QUIET_FROM_MINUTES) return 'quiet-hours';
  if (sentOnDay(state, on)) return 'already-sent-today';

  const used = sentInWeek(state, on);
  if (used >= weeklyAllowance(state)) {
    // A full week still lets the four irreplaceable ones through. This is the
    // one place the ceiling bends, and only for messages no other app could
    // send: a flare, a load spike, a gait change, a retest.
    return priority <= ESSENTIAL_THROUGH ? null : 'week-full-for-reminders';
  }

  return null;
}

/** The state after a message goes out. */
export function recordSent(state: DeliveryState, kind: string, on: string): DeliveryState {
  const forKind = state.sentByKind[kind] ?? [];
  return {
    ...state,
    sentOn: [...state.sentOn, on],
    sentByKind: { ...state.sentByKind, [kind]: [...forKind, on] },
    unopenedStreak: state.unopenedStreak + 1,
    pausedOn:
      state.unopenedStreak + 1 >= PAUSE_AFTER && state.pausedOn == null ? on : state.pausedOn,
    reentrySent: pauseStatus(state, on) === 'reentry' ? true : state.reentrySent,
  };
}

/**
 * The state after the user opens the app.
 *
 * Any open, not only a tap on a notification. Someone who opens the app of
 * their own accord has not been ignoring it, and counting that as another
 * unopened message is how a perfectly engaged user gets silenced.
 */
export function recordOpened(state: DeliveryState): DeliveryState {
  if (state.unopenedStreak === 0 && state.pausedOn == null) return state;
  return { ...state, unopenedStreak: 0, pausedOn: null, reentrySent: false };
}

/** Drops history older than `keep` days, so the record cannot grow forever. */
export function forget(state: DeliveryState, on: string, keep = 45): DeliveryState {
  const fresh = (keys: readonly string[]) => keys.filter((key) => daysApart(key, on) < keep);
  const byKind: Record<string, readonly string[]> = {};
  for (const [kind, keys] of Object.entries(state.sentByKind)) {
    const kept = fresh(keys);
    if (kept.length > 0) byKind[kind] = kept;
  }
  return { ...state, sentOn: fresh(state.sentOn), sentByKind: byKind };
}
