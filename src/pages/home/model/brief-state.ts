import { PLAN_BLOCKS, PROGRAM, painFor, type ProgramDay } from '@/entities/program';
import {
  ELEVATED_DAYS,
  NO_SIGNALS,
  STEP_SPIKE_RATIO,
  FLIGHTS_SPIKE_RATIO,
  type HealthSignals,
  // Straight at the pure module, not the barrel: that re-exports the
  // HealthKit-backed half, and importing it here would drag the native module
  // into a file whose whole point is that it can be tested without one.
} from '@/entities/health/model/metrics';

/**
 * Which state today is in, and nothing about how it is worded.
 *
 * Split from the copy so this half can be tested without a renderer, and
 * because the ordering is the part that has to be right — it is the difference
 * between telling someone in a flare to sit down and telling them about their
 * streak.
 *
 * The vocabulary is deliberately large. Five states meant most users saw the
 * same sentence for months, which is not a weak feature but an absent one: a
 * line that never changes stops being read by the third day. Breadth comes
 * from three places, in order of how much they contribute — the morning pain
 * score (which every user has), walking speed (which every iPhone has), and
 * only then the watch-only signals.
 */
export const BRIEF_STATES = [
  // Pain, the user's own report. Always outranks any sensor.
  'flare',
  'pain-spike',
  // Structure of the programme.
  'retest',
  'checkpoint-recap',
  'first-week',
  // Load, from what actually happened.
  'big-run',
  'stairs',
  'on-feet',
  // Recovery, watch-only.
  'poor-sleep',
  'resting-hr',
  // Gait, demoted.
  'slower-walk',
  'gait-change',
  // Good news, gated behind a quiet pain day.
  'done',
  'returning',
  'pain-down',
  'walk-back',
  'gait-recovered',
  // Honest emptiness.
  'no-data',
  'learning',
  // Everything else, which is most days.
  //
  // One state per topic rather than a single `quiet` that the copy layer then
  // re-dispatched on. The rotation and the one live condition inside it — was
  // yesterday a big day on foot? — are decisions about *which* sentence, and
  // this file is where those are made; downstream there is a flat lookup and
  // no branching left.
  'quiet-session',
  'quiet-progress',
  'quiet-load-big',
  'quiet-load-light',
  'quiet-shoes',
  'quiet-cadence',
  'quiet-horizon',
] as const;

export type BriefState = (typeof BRIEF_STATES)[number];

/** Pain at or above this is a flare: today becomes three minutes, sitting. */
const FLARE = 7;

/**
 * What counts as a real change in someone's morning pain.
 *
 * Two points, not three, and not a percentage. First-step pain has a published
 * minimal clinically important difference of about 19mm on a 100mm scale —
 * roughly two points out of ten. Below that the movement is noise, and a
 * sentence about it is the app inventing news.
 */
export const PAIN_MID = 2;

/**
 * At or above this, nothing upbeat may be said.
 *
 * The hard rule of this file. If a user reports pain and the app answers with
 * congratulation, it has called them a liar about their own body — so every
 * cheerful branch is gated behind this, not merely ordered after it. There is
 * a mechanism behind the manners, too: psychological variables carry real
 * prognostic weight in this condition.
 */
export const NO_CHEER_AT = 5;

/** The first week is its own state: nothing has happened yet to trend. */
const EARLY_DAYS = 8;
/** How far back "this month" reaches. */
export const MONTH = 30;
/** Fewest real days either half of a comparison may rest on. Single-day pain
 * deltas are noise; seven days is the minimum honest unit. */
const HALF_MIN = 7;
/** Away this long and the next open is a return, not a normal morning. */
const AWAY_DAYS = 4;

export type BriefInput = {
  name: string;
  /** Where the user stands in the programme, 0-based. */
  cursor: number;
  /** Today's logged pain, 0–10, or null if they have not checked in yet. */
  todayPain: number | null;
  /** Whether today's session is already behind them. */
  doneToday: boolean;
  /** Consecutive days with a session. */
  streak: number;
  /**
   * What the phone has noticed, or nothing at all.
   *
   * Optional and defaulted, because the whole feature is an enhancement: a user
   * who declined Health, or whose phone rides in a bag, must get a complete and
   * correct morning line. Every health rung independently null-checks the one
   * field it needs — partial grants are the normal case, not an edge one.
   */
  health?: HealthSignals;
  /** Days the programme has been running, for the rung that will not admit to
   * having no data until it has had a fair chance to gather some. */
  daysInstalled?: number;
  /** Days since the app was last opened. */
  daysAway?: number;
  /** Hours on foot so far today, when the day is far enough along to say. */
  hoursOnFeet?: number | null;
  /** The hour at which this person's own history turns sour. */
  onFeetThreshold?: number | null;
};

/**
 * Mean logged pain over a span of elapsed days.
 *
 * Null unless the span holds at least `HALF_MIN` real days. Both halves of a
 * comparison have to be real windows — without the floor, a programme sixteen
 * days old compares one day against fifteen and calls the result a trend.
 */
export function meanPain(from: number, to: number, cursor: number): number | null {
  const start = Math.max(0, from);
  const end = Math.min(cursor, to);
  if (end - start < HALF_MIN) return null;
  let sum = 0;
  for (let i = start; i < end; i += 1) sum += painFor(i);
  return sum / (end - start);
}

/**
 * Today's state, and the two figures the sentences about it quote.
 *
 * The figures live here because this is where they are already computed. The
 * copy layer used to call `meanPain` a second time to derive them, which is one
 * comparison window defined in two files — so a change to `HALF_MIN` or to
 * `MONTH` could move the state without moving the number the state's own
 * sentence prints.
 */
export type BriefReading = {
  state: BriefState;
  /**
   * Points today's pain sits above the last seven days' mean, rounded.
   *
   * Only meaningful under `pain-spike`; `PAIN_MID` when there is no honest
   * week to compare against, which is the smallest jump the app will call a
   * jump at all.
   */
  jump: number;
  /** Points the last fortnight sits below the fortnight before it, rounded.
   * Only meaningful under `pain-down`, and defaulted the same way. */
  drop: number;
};

/**
 * Which state today is in. First match wins.
 *
 * The ordering encodes one rule above all others: the person outranks the
 * sensor. Every pain rung sits above every health rung, because a metric Apple
 * itself labels *estimated* may never speak over someone's own report of their
 * own body.
 */
export function readBrief({
  cursor,
  todayPain,
  doneToday,
  health = NO_SIGNALS,
  daysInstalled = cursor,
  daysAway = 0,
  hoursOnFeet = null,
  onFeetThreshold = null,
}: BriefInput): BriefReading {
  const day: ProgramDay | undefined = PROGRAM[cursor];
  const pain = todayPain ?? painFor(cursor);
  const week = meanPain(cursor - 7, cursor, cursor);
  // Both halves of the month, computed once whether or not today's state ends
  // up quoting them. Thirty iterations of an array read is cheaper than the
  // class of bug that comes from computing a window twice.
  const month = meanPain(cursor - MONTH, cursor - MONTH / 2, cursor);
  const recent = meanPain(cursor - MONTH / 2, cursor, cursor);

  const jump = week != null ? Math.round(pain - week) : PAIN_MID;
  const drop = month != null && recent != null ? Math.round(month - recent) : PAIN_MID;
  const reading = (state: BriefState): BriefReading => ({ state, jump, drop });

  // --- 1-2. The user's own report ----------------------------------------
  if (pain >= FLARE) return reading('flare');
  if (week != null && pain - week >= PAIN_MID) return reading('pain-spike');

  // --- 3-4. The programme's own structure --------------------------------
  // Week 4 and week 8 are the evidence-based reassessment points for a
  // programme this length, not arbitrary ones, so they get to interrupt.
  if (day?.checkpoint === true) return reading('retest');

  // --- 5-7. Load, from what actually happened ----------------------------
  // A single run longer than anything in the past month. Per-session, because
  // daily step count is not running load and no study here treats it as one.
  if (health.bigRunYesterday) return reading('big-run');
  if (health.flightsRatio != null && health.flightsRatio > FLIGHTS_SPIKE_RATIO) {
    return reading('stairs');
  }
  // The predictive line: still inside today, before it has gone wrong.
  if (hoursOnFeet != null && onFeetThreshold != null && hoursOnFeet >= onFeetThreshold - 1) {
    return reading('on-feet');
  }

  // --- 8-9. Recovery, watch only -----------------------------------------
  if (health.sleepShort) return reading('poor-sleep');
  if (health.restingHRElevated) return reading('resting-hr');

  // --- 10-11. Gait, demoted ----------------------------------------------
  // Walking speed first: it is the best-measured mobility metric Apple ships,
  // the one an iPhone-only user is most likely to have, and it works for a
  // bilateral user, which asymmetry cannot.
  if (health.walkingSpeedTrend === 'slower') return reading('slower-walk');
  if (health.asymmetryElevatedDays >= ELEVATED_DAYS && health.asymmetryDeltaPP != null) {
    return reading('gait-change');
  }

  // --- 12-13. Done, and coming back --------------------------------------
  if (doneToday) return reading('done');
  if (daysAway >= AWAY_DAYS) return reading('returning');

  // --- Everything below is upbeat and gated on a quiet morning. ----------
  // Ordering alone would not be enough: a pain of 6 clears the flare check,
  // and "your pain went down" over someone's bad morning is the exact failure
  // this guards against.
  const quiet = pain < NO_CHEER_AT;

  if (quiet) {
    if (month != null && recent != null && month - recent >= PAIN_MID) return reading('pain-down');
    if (health.walkingSpeedJustRecovered) return reading('walk-back');
    if (health.asymmetryJustNormalised) return reading('gait-recovered');
  }

  if (cursor < EARLY_DAYS) return reading('first-week');
  // A block boundary is a real change of character in the plan. Asked of the
  // blocks themselves rather than of the day number modulo a length, because
  // that arithmetic only agrees while every block is the same size.
  if (quiet && day != null && PLAN_BLOCKS.some((block) => block.startDay === day.day)) {
    return reading('checkpoint-recap');
  }

  // --- Honest emptiness, held back a week --------------------------------
  // Telling someone on day two that we cannot read their walk is true and
  // useless: we have not had time to try.
  if (daysInstalled >= EARLY_DAYS) {
    if (health.availability === 'none') return reading('no-data');
    if (health.availability === 'learning') return reading('learning');
  }

  // Most days land here, which is why this is a rotation of six topics rather
  // than one sentence.
  return reading(quietState(cursor, health));
}

/** Today's state alone, for the callers that do not quote a figure. */
export function briefState(input: BriefInput): BriefState {
  return readBrief(input).state;
}

/** A neutral observation, not a warning: yesterday was a big day on foot. Used
 * by the copy to colour the quiet rotation, never to fire a state of its own —
 * the step ratio is not defensible as a risk claim. */
export function bigStepDay(health: HealthSignals): boolean {
  return health.stepsRatio != null && health.stepsRatio > STEP_SPIKE_RATIO;
}

/**
 * Which phrasing of a state today gets.
 *
 * Keyed off the programme day, so it is stable within a day — the line cannot
 * change under someone mid-read — and different across days. This is the
 * cheapest of the anti-repetition mechanisms and the one that does the most
 * work: a state seen three times in a fortnight reads as three sentences rather
 * than as the app looping.
 */
export function pick<T>(options: readonly T[], cursor: number): T {
  return options[((cursor % options.length) + options.length) % options.length];
}

/**
 * The six things there are to say on a day with no signal at all.
 *
 * This is where most days land, and it is the whole answer to "a large share of
 * users see the same line forever". None of these needs a watch, a permission,
 * or even a gait sample — they are built from the programme, the calendar and
 * the user's own answers, which every user has.
 *
 * Pure, and here rather than beside the copy, so the variety itself can be
 * asserted without a renderer.
 */
export const QUIET_TOPICS = ['session', 'progress', 'load', 'shoes', 'cadence', 'horizon'] as const;

export type QuietTopic = (typeof QUIET_TOPICS)[number];

export function quietTopic(cursor: number): QuietTopic {
  return pick(QUIET_TOPICS, cursor);
}

/**
 * The quiet topic today, resolved to a state.
 *
 * Six topics, seven states: `load` is the one that still has a question to
 * answer once it has been chosen — was yesterday heavy on foot or light? That
 * used to be asked in the copy file, which meant a sentence was selected by a
 * `switch` in one module and a live health reading in another. It is one
 * decision and it belongs to one file.
 */
function quietState(cursor: number, health: HealthSignals): BriefState {
  switch (quietTopic(cursor)) {
    case 'session':
      return 'quiet-session';
    case 'progress':
      return 'quiet-progress';
    case 'load':
      return bigStepDay(health) ? 'quiet-load-big' : 'quiet-load-light';
    case 'shoes':
      return 'quiet-shoes';
    case 'cadence':
      return 'quiet-cadence';
    case 'horizon':
    default:
      return 'quiet-horizon';
  }
}
