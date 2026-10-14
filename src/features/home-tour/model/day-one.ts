import { reliefIdsFor, type LegZone } from '@/entities/leg-zone';
import {
  PROGRAM,
  TODAY_INDEX,
  checkInOn,
  completePlanSession,
  currentDay,
  exerciseById,
  keepTestOffToday,
  planMeta,
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
 * they have had time to wonder whether this is for them.
 *
 * It used to be the test (calves, arch and balance, four minutes of being
 * measured), which is the right second day and the wrong first one: the
 * first thing the app asked of a person who had just paid, or had just said
 * "Not now" and come in anyway, was to find out how weak their foot was. Now
 * it is three gentle moves picked for where they said it hurts, and the
 * test is tomorrow.
 */

/** Three moves of forty seconds: two minutes, the figure on the card. A move
 * done one foot at a time switches feet halfway, as the player does for any
 * held move marked per side. */
export const DAY_ONE_MINUTES = 2;
const MOVES = 3;
const MOVE_SECONDS = (DAY_ONE_MINUTES * 60) / MOVES;

/**
 * What it falls back to, and tops up from: the stretch for the sole, the one
 * for the calf, and the toes, then the arch held seated. Nothing loaded,
 * nothing that needs a thing from the cupboard.
 */
const GENTLE_DEFAULT: readonly string[] = ['fascia_stretch', 'calf_stretch_straight', 'toe_spread', 'short_foot_seated'];

/**
 * Whether a move belongs on a first day. Off the relief table, which also
 * holds a towel heel raise for the Achilles, a band and a ball: the first two
 * minutes need nothing to hand and put no load through the fascia. Seated
 * only for somebody whose safety answers start week one sitting down
 * (`PlanSettings.seatedStart`), the same rule the plan follows that week.
 */
function gentle(id: string, seatedOnly: boolean): boolean {
  const meta = planMeta(id);
  if (meta == null || meta.equipment.length > 0 || meta.fascia) return false;
  return !seatedOnly || meta.position === 'seated';
}

/**
 * The moves, as ids: the relief table's picks for the zones marked on the
 * leg map (round-robin, the most direct first), kept only if they are gentle,
 * then the default until there are three.
 */
export function dayOneIds(zones: readonly LegZone[], seatedOnly: boolean): string[] {
  const matched = zones.length > 0 ? reliefIdsFor(zones) : [];
  const picked: string[] = [];
  for (const id of [...matched, ...GENTLE_DEFAULT]) {
    if (picked.length >= MOVES) break;
    if (!picked.includes(id) && gentle(id, seatedOnly)) picked.push(id);
  }
  return picked;
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
 * The session as it opens: today's zones, read now, since the day's check-in
 * (onboarding's leg map, for nearly everyone) can be edited until the moment
 * Start is pressed. Fixed for the run once it is handed over.
 */
export function dayOneRun(): DayOneRun {
  const zones = (checkInOn(currentDay())?.zones ?? []) as LegZone[];
  const ids = dayOneIds(zones, planSettings().seatedStart === true);
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
