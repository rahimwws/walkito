import type { AccentName } from '@/shared/config';
import type { Translate } from '@/shared/lib/i18n';

/**
 * The sticker album: twenty stickers, each a mascot pose earned for showing up.
 * PURE: no storage, no clock, no React, so the rules can be read and tested as
 * they are.
 *
 * What earns one is only ever something the person did: a check-in, a session,
 * a test day whatever it measured, a rest day the plan gave and they kept, a
 * run of days, a week on the plan, coming back. Never a pain number, never a
 * test result, never more than the plan's dose: a second session on a day or a
 * session on a rest day counts for nothing here. That is not left to the
 * rules' good manners: `StickerHistory` has no field a pain score or a
 * measurement could travel in, so a morning of 0 and a morning of 10 are the
 * same history and earn the same album.
 */

/** What the album reads: what was done and when, never how it felt. */
export type StickerHistory = {
  /** Plan days (1-based) with a check-in, oldest first. That one was made, never its answer. */
  checkInDays: readonly number[];
  /** Plan days with a finished plan session or test day, oldest first, one per day. */
  sessionDays: readonly number[];
  /** Plan days with anything of the person's own on them (a check-in, a
   * session, a Library routine), oldest first. A rest day nobody opened the
   * app on is not one: it counts for the streak, not for coming back. */
  ownDays: readonly number[];
  /** Rest days the plan gave that had a check-in and no session: rest, kept. */
  restDaysKept: number;
  /** Test days finished, whatever they measured. */
  testsDone: number;
  /** When each plan session began, minutes past local midnight, one per day. */
  sessionStarts: readonly number[];
  /** The best run of counted days, as the streak counts them. */
  longestStreak: number;
  /** Every counted day since the plan began: the streak sheet's "days so far". */
  daysOfCare: number;
};

/** A history with nothing in it yet: the first launch. */
export const EMPTY_HISTORY: StickerHistory = {
  checkInDays: [],
  sessionDays: [],
  ownDays: [],
  restDaysKept: 0,
  testsDone: 0,
  sessionStarts: [],
  longestStreak: 0,
  daysOfCare: 0,
};

export type StickerId =
  | 'first-checkin'
  | 'first-session'
  | 'streak-3'
  | 'first-rest'
  | 'sessions-5'
  | 'first-week'
  | 'streak-7'
  | 'first-test'
  | 'checkins-10'
  | 'streak-10'
  | 'sessions-10'
  | 'own-time'
  | 'comeback'
  | 'rest-5'
  | 'sessions-25'
  | 'care-30'
  | 'checkins-30'
  | 'streak-30'
  | 'sessions-50'
  | 'streak-100';

export type Sticker = {
  id: StickerId;
  /** The sticker's tint. Names a kind of sticker, never how well anything went. */
  accent: AccentName;
  /** Its short name, under it in the album. */
  label: (t: Translate) => string;
  earnedBy: (history: StickerHistory) => boolean;
};

/** Rest days the album ever asks for. Counting stops here. */
export const REST_DAYS_WANTED = 5;

/** How close to their usual start a session has to begin to count as at it. */
const USUAL_TIME_WINDOW_MIN = 45;
/** Sessions at the usual time that make it "your own time". */
const USUAL_TIME_SESSIONS = 5;

/** Days with nothing of their own that make a pause. */
const PAUSE_DAYS = 4;

/**
 * Sessions begun near the person's usual time: the median of their starts,
 * give or take three quarters of an hour. Nothing until five sessions exist,
 * since a habit read off fewer is a coincidence.
 */
export function sessionsAtUsualTime(starts: readonly number[]): number {
  if (starts.length < USUAL_TIME_SESSIONS) return 0;
  const sorted = [...starts].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const usual = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  return starts.filter((minute) => Math.abs(minute - usual) <= USUAL_TIME_WINDOW_MIN).length;
}

/**
 * Back after a pause: four days or more with nothing of their own, then two of
 * the next three days with something. Never named for the pause: the sticker
 * says it is good to see them, not that they were gone.
 */
export function cameBack(ownDays: readonly number[]): boolean {
  const days = [...new Set(ownDays)].sort((a, b) => a - b);
  for (let i = 1; i < days.length; i += 1) {
    if (days[i] - days[i - 1] - 1 < PAUSE_DAYS) continue;
    const back = days[i];
    const within = days.filter((day) => day >= back && day <= back + 2).length;
    if (within >= 2) return true;
  }
  return false;
}

/**
 * The album, in the order it fills for most people: the firsts, then the runs
 * and the counts. The grid reads left to right in this order.
 */
export const STICKERS: readonly Sticker[] = [
  {
    id: 'first-checkin',
    accent: 'amber',
    label: (t) => t('stickers.firstCheckin'),
    earnedBy: (h) => h.checkInDays.length >= 1,
  },
  {
    id: 'first-session',
    accent: 'violet',
    // Any finished session: one stopped early because it hurt is finished too.
    label: (t) => t('stickers.firstSession'),
    earnedBy: (h) => h.sessionDays.length >= 1,
  },
  {
    id: 'streak-3',
    accent: 'orange',
    label: (t) => t('stickers.streak', { count: 3 }),
    earnedBy: (h) => h.longestStreak >= 3,
  },
  {
    id: 'first-rest',
    accent: 'blue',
    label: (t) => t('stickers.firstRest'),
    earnedBy: (h) => h.restDaysKept >= 1,
  },
  {
    id: 'sessions-5',
    accent: 'violet',
    label: (t) => t('stickers.sessions', { count: 5 }),
    earnedBy: (h) => h.sessionDays.length >= 5,
  },
  {
    id: 'first-week',
    accent: 'teal',
    // Still here on the seventh day: not a weekly quota, just a week in.
    label: (t) => t('stickers.firstWeek'),
    earnedBy: (h) => h.ownDays.some((day) => day >= 7),
  },
  {
    id: 'streak-7',
    accent: 'orange',
    label: (t) => t('stickers.streak', { count: 7 }),
    earnedBy: (h) => h.longestStreak >= 7,
  },
  {
    id: 'first-test',
    accent: 'teal',
    // Whatever it measured. The same sticker for every result.
    label: (t) => t('stickers.firstTest'),
    earnedBy: (h) => h.testsDone >= 1,
  },
  {
    id: 'checkins-10',
    accent: 'amber',
    label: (t) => t('stickers.checkins', { count: 10 }),
    earnedBy: (h) => h.checkInDays.length >= 10,
  },
  {
    id: 'streak-10',
    accent: 'orange',
    label: (t) => t('stickers.streak', { count: 10 }),
    earnedBy: (h) => h.longestStreak >= 10,
  },
  {
    id: 'sessions-10',
    accent: 'violet',
    label: (t) => t('stickers.sessions', { count: 10 }),
    earnedBy: (h) => h.sessionDays.length >= 10,
  },
  {
    id: 'own-time',
    accent: 'amber',
    label: (t) => t('stickers.ownTime'),
    earnedBy: (h) => sessionsAtUsualTime(h.sessionStarts) >= USUAL_TIME_SESSIONS,
  },
  {
    id: 'comeback',
    accent: 'blue',
    label: (t) => t('stickers.comeback'),
    earnedBy: (h) => cameBack(h.ownDays),
  },
  {
    id: 'rest-5',
    accent: 'blue',
    label: (t) => t('stickers.restDays', { count: REST_DAYS_WANTED }),
    earnedBy: (h) => h.restDaysKept >= REST_DAYS_WANTED,
  },
  {
    id: 'sessions-25',
    accent: 'teal',
    label: (t) => t('stickers.sessions', { count: 25 }),
    earnedBy: (h) => h.sessionDays.length >= 25,
  },
  {
    id: 'care-30',
    accent: 'orange',
    label: (t) => t('stickers.care', { count: 30 }),
    earnedBy: (h) => h.daysOfCare >= 30,
  },
  {
    id: 'checkins-30',
    accent: 'blue',
    label: (t) => t('stickers.checkins', { count: 30 }),
    earnedBy: (h) => h.checkInDays.length >= 30,
  },
  {
    id: 'streak-30',
    accent: 'amber',
    label: (t) => t('stickers.streak', { count: 30 }),
    earnedBy: (h) => h.longestStreak >= 30,
  },
  {
    id: 'sessions-50',
    accent: 'violet',
    label: (t) => t('stickers.sessions', { count: 50 }),
    earnedBy: (h) => h.sessionDays.length >= 50,
  },
  {
    id: 'streak-100',
    accent: 'violet',
    label: (t) => t('stickers.streak', { count: 100 }),
    earnedBy: (h) => h.longestStreak >= 100,
  },
];

export const STICKER_COUNT = STICKERS.length;

/**
 * The session stickers in the order they come, with the session days each asks
 * for. The same thresholds as their `earnedBy` above, kept beside them.
 */
const SESSION_LINE: readonly { id: StickerId; need: number }[] = [
  { id: 'first-session', need: 1 },
  { id: 'sessions-5', need: 5 },
  { id: 'sessions-10', need: 10 },
  { id: 'sessions-25', need: 25 },
  { id: 'sessions-50', need: 50 },
];

/** The next sticker sessions lead to, and how far along it is. */
export type NextSticker = { sticker: Sticker; have: number; need: number };

/**
 * The next session sticker not yet in the album, with the session days so
 * far: what the plan screen shows finishing today moves toward. Session days
 * count once a day, so nothing beyond the plan's dose can move it. Null once
 * all five are in.
 */
export function nextSessionSticker(history: StickerHistory, earned: ReadonlySet<StickerId>): NextSticker | null {
  for (const step of SESSION_LINE) {
    if (earned.has(step.id)) continue;
    const sticker = STICKERS.find((entry) => entry.id === step.id);
    if (sticker == null) return null;
    return { sticker, have: Math.min(history.sessionDays.length, step.need), need: step.need };
  }
  return null;
}

const KNOWN: ReadonlySet<string> = new Set(STICKERS.map((sticker) => sticker.id));

/** Whether a stored string is still one of the album's ids. */
export function isStickerId(value: unknown): value is StickerId {
  return typeof value === 'string' && KNOWN.has(value);
}

/** The stickers a history has earned, in album order. */
export function stickersEarned(history: StickerHistory): StickerId[] {
  return STICKERS.filter((sticker) => sticker.earnedBy(history)).map((sticker) => sticker.id);
}

/**
 * The one sticker that arrives with a pop as the album opens: the latest one
 * earned and not yet seen there. One a day at most: anything else earned meanwhile
 * goes into the album as it is, without a fuss, and so does everything once
 * today already had its arrival.
 */
export function arrivalFor(
  earned: readonly StickerId[],
  seen: ReadonlySet<StickerId>,
  arrivedOn: string | null,
  today: string,
): StickerId | null {
  if (arrivedOn === today) return null;
  const unseen = STICKERS.filter((sticker) => earned.includes(sticker.id) && !seen.has(sticker.id));
  return unseen[unseen.length - 1]?.id ?? null;
}
