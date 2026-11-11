import {
  RETEST_MINUTES,
  addDays,
  nextSession,
  planSessionDone,
  todayDayNumber,
  todayKey,
} from '@/entities/program';

/**
 * The day that comes after the first session, as the paywall shows it and as
 * the morning push names it: one reading of the plan for both, so the screen
 * and the message cannot disagree about which day is next.
 */
export type NextDay = {
  /** Its number in the plan: 2, the morning after day one. */
  day: number;
  /** Days from today: 0 when it has already opened. */
  ahead: number;
  /** Epoch ms of the local midnight it opens at. */
  at: number;
  /** The first test, which the day after the first session is. */
  test: boolean;
  /** The clip that stands for it: its first move, or the balance hold for a
   * test day. Never sent anywhere. */
  clip: string;
  minutes: number;
  /** How many moves, or 0 for a test day, which counts tests instead. */
  moves: number;
};

/** The clip for a test day: its balance hold, filmed with a person. */
const TEST_CLIP = 'single_leg_hold';
const DAY_MS = 86_400_000;

export function nextDay(now: number = Date.now()): NextDay | null {
  return nextDayOf(nextSession(now), todayDayNumber(now), now);
}

/** The reading itself: `next` is the plan's next session and `today` the plan
 * day `now` falls on. */
export function nextDayOf(next: ReturnType<typeof nextSession>, today: number, now: number): NextDay | null {
  if (next == null) return null;
  const date = new Date(now);
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const ahead = Math.max(0, Math.round((next.at - midnight) / DAY_MS));
  const test = next.day.type === 'test';
  const first = next.day.exercises[0]?.id;
  return {
    day: today + ahead,
    ahead,
    at: next.at,
    test,
    clip: test || first == null ? TEST_CLIP : first,
    minutes: test ? RETEST_MINUTES : next.day.minutes,
    moves: test ? 0 : next.day.exercises.length,
  };
}

/** One day of the strip under it. */
export type StripDay = { day: number; done: boolean; next: boolean };

const STRIP = 7;

/**
 * The first week by days, for the strip: day one to day seven while today is
 * inside it (so the day already done stays in view on a return), and a week
 * from yesterday after that.
 */
export function weekStrip(next: NextDay, now: number = Date.now()): StripDay[] {
  const key = todayKey(now);
  return weekStripOf(next, todayDayNumber(now), (back) => planSessionDone(addDays(key, -back)));
}

/** The strip itself: `doneAgo` says whether the plan session of the day that
 * many days back was done (0 is today). */
export function weekStripOf(next: NextDay, today: number, doneAgo: (back: number) => boolean): StripDay[] {
  const start = today <= STRIP ? 1 : today - 1;
  return Array.from({ length: STRIP }, (_, i) => {
    const day = start + i;
    // Only ever asked about today and the days behind it.
    return { day, done: day <= today && doneAgo(today - day), next: day === next.day };
  });
}
