import {
  PROGRAM,
  TODAY_INDEX,
  completePlanSession,
  exerciseById,
  keepTestOffToday,
  planSessionDone,
  retestResults,
  planSettings,
  todayDayNumber,
  todayKey,
  type ProgramDay,
} from '@/entities/program';
import { homeTourState, setHomeTourStage } from '@/entities/session';
import { track } from '@/shared/lib/analytics';

/**
 * The first session somebody does in the app: two easy minutes, over before
 * they have had time to wonder whether this is for them, and the best footage
 * the app has.
 *
 * It used to be the test (calves, arch and balance, four minutes of being
 * measured), which is the right second day and the wrong first one: the
 * first thing the app asked of a person who had just paid, or had just said
 * "Not now" and come in anyway, was to find out how weak their foot was. Now
 * it is two gentle moves anybody can do, and the test is tomorrow.
 */

/** Two moves of a minute: two minutes, the figure on the card. A move done
 * one foot at a time switches feet halfway, as the player does for any held
 * move marked per side. */
export const DAY_ONE_MINUTES = 2;
const MOVES = 2;
const MOVE_SECONDS = (DAY_ONE_MINUTES * 60) / MOVES;

/**
 * The first thing the app shows in motion, and both moves are done sitting
 * on a chair, by everybody: the first two minutes ask nobody to stand at a
 * wall, get down on the floor or balance, least of all somebody of sixty
 * with a sore heel who has not decided yet whether this is for them. Nothing
 * on one leg or with the eyes shut, no jumping.
 *
 * The plantar stretch first, the one the plan gives every morning. Then
 * rolling the sole on a ball, the one that feels best, to end on; for
 * somebody who said in the onboarding there is no ball at home
 * (`equipmentMissing`), the big toe lift instead, which needs only the chair.
 *
 * It used to open standing (ankle rocks) and, without a ball, end lying on
 * the floor (the side leg raise), with the chair kept for a `seatedStart`.
 *
 * Two rather than three: a first session short enough to be finished is the
 * one that gets finished.
 */
const OPENER = 'fascia_stretch';
const CLOSER = 'foot_roll';
/** The closer without a ball. */
const CLOSER_NO_BALL = 'big_toe_lift';

/** Every clip a day-one session can play, for the prefetch to fetch first. */
export const DAY_ONE_CLIPS: readonly string[] = [OPENER, CLOSER, CLOSER_NO_BALL];

/** The moves, as ids: the opener, then the closer (the ball, or the toe lift
 * without one). Not picked by where it hurts: the first two minutes are for
 * everybody, and the plan from tomorrow is the part fitted to them. */
export function dayOneIds(hasBall: boolean): string[] {
  return [OPENER, hasBall ? CLOSER : CLOSER_NO_BALL];
}

/**
 * One move of it: the shape the session player's playlist takes
 * (`PlaylistStep`), spelt out here because a feature cannot reach a widget's
 * types. Held time, no counted reps: a first stretch is not a dose.
 */
export type DayOneStep = { exerciseId: string; seconds: number; perSide: boolean };

export type DayOneRun = {
  /** The day the player runs against: today's, as a gentle one. */
  day: ProgramDay;
  steps: readonly DayOneStep[];
  minutes: number;
};

/**
 * The session as it opens: whether there is a ball is read now, and the run
 * is fixed once it is handed over.
 */
export function dayOneRun(): DayOneRun {
  const ids = dayOneIds(!planSettings().equipmentMissing.includes('ball'));
  const n = todayDayNumber();
  return {
    day: {
      ...PROGRAM[TODAY_INDEX],
      index: n - 1,
      day: n,
      // The kind of the plan's own stretching days, so Health files it as
      // one of those is filed: a workout, not a mindful minute.
      kind: 'mobility',
      minutes: DAY_ONE_MINUTES,
      checkpoint: false,
    },
    // A foot at a time where the catalogue says so, the way the player
    // treats a move it swaps in: the foot changes halfway.
    steps: ids.map((id) => ({ exerciseId: id, seconds: MOVE_SECONDS, perSide: exerciseById(id).perSide === true })),
    minutes: DAY_ONE_MINUTES,
  };
}

/**
 * Finished: the day's plan session, and on to the tour.
 *
 * Filed the way Home's own two-minute version is (`completePlanSession`,
 * source `plan`, two minutes, the moves done), so the streak, Plan, the widget
 * and the server all hear that today is done. The test is kept off today
 * first (`keepTestOffToday`), while today is still open, so the week is
 * planned again with the test on tomorrow. Once only: a day whose session is
 * already on record is left alone, and the stage moves on either way.
 */
export function finishDayOne(run: DayOneRun, now: number = Date.now()): void {
  const today = todayKey(now);
  if (!planSessionDone(today)) {
    // Only the very first test moves to tomorrow: a returning user's due
    // retest stays where the plan put it.
    if (retestResults().length === 0) keepTestOffToday(now);
    completePlanSession({
      date: today,
      source: 'plan',
      minutes: run.minutes,
      exerciseIds: run.steps.map((step) => step.exerciseId),
      now,
    });
  }
  track('day1_session_completed');
  if (homeTourState() === 'armed') setHomeTourStage('tour');
}
