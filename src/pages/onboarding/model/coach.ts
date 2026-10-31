/**
 * Walkito as the coach on every question: which pose he holds, where he
 * stands, what he does as a step arrives, and what he does when it is
 * answered.
 *
 * Pure, for the reason `answers.ts` gives: the step table and the rigs load
 * react-native, and the rules here are the ones a test has to walk. Every
 * path through the flow is walked in `coach.test.ts`, which is what keeps
 * these promises:
 *
 * - He never holds the same pose twice in a row, so every step reads as a
 *   new beat rather than the same picture again.
 * - He celebrates twice in a whole run, both times for the flow (halfway,
 *   the plan ready), never for an answer. Those are also the only two
 *   sounds he makes on his own; a tap's boing is the person's.
 * - An answer about the body (where, which side, how long, the safety check,
 *   what was tried) gets a nod and nothing louder. A reaction screen gives
 *   every answer the same pose and the same move: nobody learns which answer
 *   earns the jump.
 * - He runs only for somebody who runs.
 *
 * The names are page-local on purpose: poses, shots and sounds never travel
 * to analytics. The only id that can is a reaction's, through
 * `reactionAnalyticsId`.
 */

import type { AnalyticsEvents } from '@/shared/lib/analytics';
import type { MascotShot } from '@/shared/ui/mascot';

import { chose } from './answers';
import { habitOf, roleOf, runs } from './journey';
import type { Phrase } from './steps';

type Answers = Readonly<Record<string, unknown>>;

/**
 * The poses the coach may take. Sad, surprised, trophy and gift are left out
 * on purpose, so nothing here can reach them: sad belongs to the morning pain
 * scale alone (`mascot-reaction.ts`), and the others are for the app.
 */
export type CoachPose =
  | 'idle'
  | 'celebrate'
  | 'thinking'
  | 'sleeping'
  | 'pointing'
  | 'thumbsUp'
  | 'running'
  | 'pain'
  | 'handsUp'
  | 'walking'
  /** The alarm clock and the bell: the notification ask, drawn large there,
   * and the questions about when (the habit and the minutes), which ring it. */
  | 'reminder';

/**
 * Where he is as a step arrives.
 *
 * `speaker`: the small coach beside the question, mounted once outside the
 * sliding body. `hero`: the step draws him itself, large (a reaction screen,
 * halfway, the notification ask, the check, building, the first week), and
 * the speaker hides.
 * `none`: neither (the welcome gate, the contract's own ceremony).
 */
export type CoachMoment = {
  where: 'speaker' | 'hero' | 'none';
  pose: CoachPose;
  /** The move he plays once he is in place. */
  enter?: MascotShot;
  /** Drawn facing left. Pointing in the speaker always is, so the finger
   * points back at the question rather than off the edge of the screen. */
  mirrored?: boolean;
  /** One of the run's two sounds, played with `enter`. */
  sound?: 'cheer';
};

/** What an answer, or a step's own moment, makes him do. `pose` is a swap:
 * set only when the pose changes. */
export type CoachReply = {
  pose?: CoachPose;
  shot: MascotShot | null;
  /** One of the run's two sounds. */
  sound?: 'cheer';
};

/** Pointing in the speaker faces the question; anywhere else it faces the
 * way the art was drawn. A swap to `pointing` in the speaker mirrors too. */
export function coachMirrored(where: CoachMoment['where'], pose: CoachPose): boolean {
  return where === 'speaker' && pose === 'pointing';
}

function speaker(pose: CoachPose, enter?: MascotShot): CoachMoment {
  return { where: 'speaker', pose, enter, mirrored: coachMirrored('speaker', pose) };
}

function hero(pose: CoachPose, enter?: MascotShot): CoachMoment {
  return { where: 'hero', pose, enter, mirrored: false };
}

// ── What an answer makes him hold ───────────────────────────────────────────

/** "Nothing hurts right now" and nothing else: the sore-foot pose would be
 * wrong for somebody who has just said nothing is sore. Kept here rather than
 * read from `steps.ts`'s `hurts`, which this file cannot load. */
function nothingHurts(answers: Answers): boolean {
  const pain = answers.pain;
  return Array.isArray(pain) && pain.length > 0 && pain.every((value) => value === 'none');
}

/** The pain question: the sore-foot pose, or at ease once nothing hurts. */
function painStance(answers: Answers): CoachPose {
  return nothingHurts(answers) ? 'idle' : 'pain';
}

/**
 * The alarm clock ringing.
 *
 * On the reminder rig the bell is the arm that waves (`armRight`, its hand
 * with it) and the ringing lines are `flicker` marks, which only a wave and a
 * hop set going. So the wave is the ring: the bell swung three times from the
 * shoulder, the clock's own bells rocking, the lines flickering. `present`
 * (the notification ask's arrival) lifts the clock forward and swings the
 * bell twice with the lines still; `cheer` rings it with a jump and the
 * celebrating face, which he keeps for the flow, not for an answer. Silent,
 * like every move in the corner.
 */
export const RING: MascotShot = 'wave';

/** The habit question: at ease until a moment is picked, then the alarm
 * clock, since picking one sets the reminder. Read from the answers, as the
 * pain question's stance is, so coming back to it shows the clock again. */
function habitStance(answers: Answers): CoachPose {
  return habitOf(answers) != null ? 'reminder' : 'idle';
}

/** Nothing at home is good news, not a gap: the plan needs none of it. */
function kitNone(answers: Answers): boolean {
  return chose(answers, 'equipment', 'none');
}

function kitStance(answers: Answers): CoachPose {
  return kitNone(answers) ? 'thumbsUp' : 'pointing';
}

/** The name line lands for the same names the page writes it for. */
function named(answers: Answers): boolean {
  return typeof answers.name === 'string' && answers.name.trim().length > 1;
}

/** A swap only when the stance actually changed: changing one answer for
 * another that means the same pose is a nod. */
function swap(now: CoachPose, was: CoachPose, shot: MascotShot): CoachReply {
  return now !== was ? { pose: now, shot } : { shot };
}

// ── Arriving ────────────────────────────────────────────────────────────────

/**
 * Who they are, as a whole screen. The one reaction allowed to differ by
 * answer, because the answer is a way of life rather than a body: a runner
 * runs, a walker walks, both gets the thumbs up. Running only for a runner.
 */
function roleArrival(answers: Answers): CoachMoment {
  switch (roleOf(answers)) {
    case 'running':
      return hero('running', 'hop');
    case 'both':
      return hero('thumbsUp', 'happy');
    case 'walking':
      return hero('walking', 'hop');
    default:
      // On their feet at work, and the fallback.
      return hero('idle', 'nod');
  }
}

/**
 * Where he is and what he holds as `stepKey` arrives (the keys of `STEPS`).
 *
 * The pose is the step's own, from before anything on it is answered, so a
 * step reads the same on every visit; an answer then swaps it (`coachAnswer`).
 * The pain and habit questions are the exceptions: back on the pain question
 * after "nothing hurts", he stays at ease rather than holding a sore foot, and
 * back on the habit with a moment picked, he holds the alarm clock it set. A
 * swap that lands on the pose already showing is no swap: the speaker keeps
 * the pose and plays the move alone.
 *
 * The alarm clock is the notification ask's, large, and then the questions
 * about when: the habit (once a moment is picked) and the minutes. Never two
 * in a row: the days question between them points at its week, and the habit
 * arrives at ease after the ask.
 *
 * `again`: the step was already shown in this run. Halfway celebrates once;
 * coming back to it from an edit is a nod, in silence.
 */
export function coachEnter(stepKey: string, answers: Answers, again = false): CoachMoment {
  const moment = tableEnter(stepKey, answers, again);
  // A question he speaks himself draws him centred, above its bubble, so the
  // corner stays empty: the same pose and move, as a hero.
  return SPEAKING_STEPS.has(stepKey) && moment.where === 'speaker' ? hero(moment.pose, moment.enter) : moment;
}

/**
 * The plain choice questions Walkito asks himself (`SpeakingQuestion`): he
 * stands centred, the question comes out of his bubble, and his answers to
 * the picks play on him there rather than in the corner. Left out: the photo
 * questions (the picture is the hero), who they are and the goal (Walkito
 * already peeks over every answer card), the pain map, the habit, and every
 * step that draws its own.
 */
export const SPEAKING_STEPS: ReadonlySet<string> = new Set([
  'runner',
  'side',
  'duration',
  'safety',
  'tried',
  'load',
  'source',
  'planDays',
  'planMinutes',
  'equipment',
]);

function tableEnter(stepKey: string, answers: Answers, again: boolean): CoachMoment {
  switch (stepKey) {
    case 'intro':
      return hero('idle', 'wave');
    case 'name':
      // The name step draws him itself, waving, with the question in his
      // speech bubble (`NameStep`).
      return hero('idle', 'wave');
    case 'side':
    case 'planDays':
    case 'equipment':
    case 'test-toe':
      return speaker('pointing');
    case 'planMinutes':
      // The clock rings as the question arrives, and at every pick.
      return speaker('reminder', RING);
    case 'toe':
      // "Try it now": he pokes the question as it arrives.
      return speaker('pointing', 'poke');
    case 'notify':
      // Large on the ask, under the mock banner, holding up his clock and
      // bell; the step plays his moves itself, timed to the banner.
      return hero('reminder', 'present');
    case 'role':
    case 'runner':
    case 'bunion':
    case 'duration':
    case 'tried':
    case 'goal':
    case 'why':
      return speaker('thinking');
    case 'safety':
    case 'source':
    case 'test-balance':
      return speaker('idle');
    case 'pain':
      return speaker(painStance(answers));
    case 'habit':
      return speaker(habitStance(answers));
    case 'load':
      return runs(answers) ? speaker('running', 'hop') : speaker('walking');
    case 'outlook':
      return speaker('walking');
    case 'role-reaction':
      return roleArrival(answers);
    case 'duration-reaction':
      // The same for every answer: how long it has hurt earns nothing louder
      // than a nod, and none of it earns less.
      return hero('idle', 'nod');
    case 'tried-reaction':
      // The same for every answer: a physio is not a better answer than rest.
      return hero('thumbsUp', 'nod');
    case 'morningPain':
      // The step draws the sore-foot rig itself and answers the scale with
      // `mascotCue`; nothing here plays over it.
      return hero('pain');
    case 'midway':
      return again ? hero('celebrate', 'nod') : { ...hero('celebrate', 'celebrate'), sound: 'cheer' };
    case 'test-intro':
      return hero('handsUp', 'present');
    case 'building':
      return hero('thinking');
    case 'first-week':
      // In the deck's gutter, facing the card as drawn.
      return hero('pointing', 'wave');
    default:
      // The welcome gate and the contract, which has its own ceremony.
      return { where: 'none', pose: 'idle' };
  }
}

// ── Answering ───────────────────────────────────────────────────────────────

/**
 * What changing this step's answer from `prev` to `answers` makes him do.
 *
 * Called on every change, a multi-select's every tap included (the speaker
 * throttles the nods to one every 600 ms). A body answer is a nod, a swap
 * with a nod at most. The steps that draw him themselves answer nothing here.
 *
 * - `name`: once it is a name, the thumbs up and his happy jump. Typing on
 *   is nothing, and the page plays it at most once a visit, as the line lands.
 * - `pain`: a zone, a nod; "nothing hurts", at ease with a nod; a zone after
 *   that, the sore foot again.
 * - `habit`: the first moment picked brings out the alarm clock, and every
 *   pick rings it (`RING`).
 * - `planMinutes`: every pick rings the clock he arrived holding.
 * - `equipment`: nothing at home, the thumbs up and his happy jump; some
 *   kit, pointing again, with a nod.
 * - `planDays`, like every other question: a nod.
 * - `goal`: a hop, the same for every goal.
 * - `test-balance`: a hop as each side's timer starts.
 */
export function coachAnswer(stepKey: string, answers: Answers, prev: Answers): CoachReply {
  switch (stepKey) {
    case 'name':
      return named(answers) && !named(prev) ? { pose: 'thumbsUp', shot: 'happy' } : { shot: null };
    case 'pain':
      return swap(painStance(answers), painStance(prev), 'nod');
    case 'habit':
      return swap(habitStance(answers), habitStance(prev), RING);
    case 'planMinutes':
      return { shot: RING };
    case 'equipment':
      return swap(kitStance(answers), kitStance(prev), kitNone(answers) && !kitNone(prev) ? 'happy' : 'nod');
    case 'goal':
    case 'test-balance':
      return { shot: 'hop' };
    case 'welcome':
    case 'intro':
    case 'role-reaction':
    case 'duration-reaction':
    case 'morningPain':
    case 'tried-reaction':
    case 'midway':
    case 'test-intro':
    case 'notify':
    case 'building':
    case 'first-week':
    case 'contract':
      return { shot: null };
    default:
      return { shot: 'nod' };
  }
}

/**
 * What a step's own moment makes him do, for the steps that have one:
 *
 * - `building`, the plan ready: the celebration and the run's second cheer,
 *   once a run (null when `again`).
 * - `first-week`, the last card reached: the thumbs up with a nod.
 * - `outlook`, Continue: a cheer of the arms, in silence, before Home.
 */
export function coachDone(stepKey: string, again = false): CoachReply | null {
  switch (stepKey) {
    case 'building':
      return again ? null : { pose: 'celebrate', shot: 'celebrate', sound: 'cheer' };
    case 'first-week':
      return { pose: 'thumbsUp', shot: 'nod' };
    case 'outlook':
      return { shot: 'cheer' };
    default:
      return null;
  }
}

// ── What he says ────────────────────────────────────────────────────────────

/** `steps.ts`'s `NAME_SLOT`, repeated: that file loads react-native. The
 * slot stays in the line for the page's `withName`, which drops it with its
 * comma for somebody who gave no name. */
const NAME_SLOT = { name: '{name}' } as const;

/**
 * The coach's own line on a step, in his bubble: a beat as a part of the flow
 * begins, the halfway line, and the plan ready. A closure
 * like the step table's `Phrase`, so each key keeps its own placeholders.
 * Resolve it with the page's `say`, so a missing name leaves no stray comma.
 *
 * Where the page has a line of its own for the answer (the `area_*` line on
 * the pain question), that line takes the bubble: the pain beat is for before
 * anything is marked, and is null after. On `building` the line is for once
 * the plan is ready; the step says it then.
 */
export function coachLine(stepKey: string, answers: Answers): Phrase | null {
  switch (stepKey) {
    case 'toe':
      return (t) => t('onboarding.coach.toeTry');
    case 'pain': {
      const pain = answers.pain;
      return Array.isArray(pain) && pain.length > 0 ? null : (t) => t('onboarding.coach.beatFeet');
    }
    case 'goal':
      return (t) => t('onboarding.coach.beatGoal');
    case 'midway':
      return (t) => t('onboarding.coach.midway', NAME_SLOT);
    case 'building':
      return (t) => t('onboarding.coach.planReady', NAME_SLOT);
    default:
      return null;
  }
}

// ── Analytics ───────────────────────────────────────────────────────────────

type ReactionId = AnalyticsEvents['onboarding_reaction_viewed']['reaction'];

/** The reactions whose keys say nothing about a body: the name, who they are,
 * the habit, the kit. */
const SHAREABLE = /^(name$|role_|habit_|equipment_)/;

/**
 * The id a reaction is counted under, or null when it must not be counted.
 *
 * A reaction's key names the answer that chose it: `area_heel` is where it
 * hurts, `duration_year` how long, `tried_physio` a treatment, `safety_seated`
 * a red flag. Counting those would be sending health data, so only the keys
 * that describe a person and not a body pass. On null, track nothing.
 */
export function reactionAnalyticsId(id: string): ReactionId | null {
  return SHAREABLE.test(id) ? (id as ReactionId) : null;
}
