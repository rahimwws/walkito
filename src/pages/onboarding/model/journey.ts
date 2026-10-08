/**
 * The rules behind the new questions: who someone is, how long it has hurt,
 * the safety check, what they have tried, and the reactions that answer each.
 *
 * Pure, and kept out of `steps.ts` for the reason `answers.ts` gives: the step
 * table imports icon components and cannot be loaded under `bun test`. These
 * decide what the flow says back to a person and what plan they start on, so
 * they are the part worth testing.
 */

import type { Key } from '@/shared/lib/i18n';

type Answers = Readonly<Record<string, unknown>>;

function first(answers: Answers, key: string): string | null {
  const value = answers[key];
  if (Array.isArray(value)) return typeof value[0] === 'string' ? value[0] : null;
  return typeof value === 'string' ? value : null;
}

function list(answers: Answers, key: string): string[] {
  const value = answers[key];
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

// ── Who they are ────────────────────────────────────────────────────────────

export type Role = 'running' | 'feet' | 'both' | 'walking';

export function roleOf(answers: Answers): Role | null {
  const role = first(answers, 'role');
  return role === 'running' || role === 'feet' || role === 'both' || role === 'walking' ? role : null;
}

/** Whether they run at all, which is what the runner level and kilometres ask about. */
export function runs(answers: Answers): boolean {
  const role = roleOf(answers);
  return role === 'running' || role === 'both';
}

/** Whether a working day keeps them standing, which is what hours on feet ask about. */
export function standsAtWork(answers: Answers): boolean {
  return roleOf(answers) === 'feet';
}

/**
 * The sport the rest of the app speaks in. Running for anybody who runs; null
 * otherwise, which every reader already treats as "no sport named".
 */
export function sportFor(answers: Answers): string | null {
  return runs(answers) ? 'running' : null;
}

/**
 * The goals offered, by who they are.
 *
 * Five at most: eleven was a list nobody reads to the end. Pain first, and
 * only when something hurts. The values are analytics identifiers and map to
 * outcomes in `entities/program` (`GOAL_ANSWER`): `comeback` and `allday`
 * keep their old values under new words, so nothing downstream moves.
 */
export function goalValuesFor(role: Role | null, painless: boolean): string[] {
  const pain = painless ? [] : ['mornings'];
  switch (role) {
    case 'running':
      return [...pain, 'comeback', 'race', 'flatfeet', 'injuryfree'];
    case 'feet':
      return [...pain, 'allday', 'flatfeet', 'injuryfree'];
    case 'both':
      return [...pain, 'comeback', 'allday', 'flatfeet', 'injuryfree'];
    case 'walking':
      return [...pain, 'steady', 'allday', 'flatfeet', 'injuryfree'];
    default:
      return [...pain, 'flatfeet', 'injuryfree'];
  }
}

// ── The safety check ────────────────────────────────────────────────────────

/** The answers that mean starting week one sitting down. */
const SEATED = ['calf', 'pop', 'diabetes', 'fall'];

export type SafetyPlan = {
  /** Week one seated, and one step lighter. */
  seated: boolean;
  /** Numbness: the ordinary plan, watched in the check-ins. */
  numb: boolean;
};

export function safetyPlan(answers: Answers): SafetyPlan {
  const picked = list(answers, 'safety');
  return {
    seated: picked.some((value) => SEATED.includes(value)),
    numb: picked.includes('numb'),
  };
}

// ── How long ────────────────────────────────────────────────────────────────

export type Duration = 'weeks' | 'months' | 'year' | 'longer';

export function durationOf(answers: Answers): Duration | null {
  const value = first(answers, 'duration');
  return value === 'weeks' || value === 'months' || value === 'year' || value === 'longer' ? value : null;
}

/** A recent start is the irritable one: the plan begins a step lighter. */
export function recentStart(answers: Answers): boolean {
  return durationOf(answers) === 'weeks';
}

// ── What they tried ─────────────────────────────────────────────────────────

/** Which tried answer the reaction speaks to when several were picked: the one
 * that says the most about why it has not settled. */
const TRIED_ORDER = ['insoles', 'rest', 'stretching', 'shoes', 'physio'] as const;
export type TriedKey = (typeof TRIED_ORDER)[number] | 'none';

export function triedKey(answers: Answers): TriedKey | null {
  const picked = list(answers, 'tried');
  if (picked.length === 0) return null;
  if (picked.includes('none')) return 'none';
  return TRIED_ORDER.find((key) => picked.includes(key)) ?? null;
}

// ── Morning pain ────────────────────────────────────────────────────────────

export const MORNING_PAIN_SEED = 5;

export function morningPainOf(answers: Answers): number | null {
  const value = answers.morningPain;
  if (typeof value !== 'string') return null;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) && n >= 0 && n <= 10 ? n : null;
}

export type PainBand = 'zero' | 'mild' | 'middle' | 'hard';

export function painBandOf(score: number): PainBand {
  if (score <= 0) return 'zero';
  if (score <= 3) return 'mild';
  if (score <= 6) return 'middle';
  return 'hard';
}

// ── The 30-second check ─────────────────────────────────────────────────────

/** The PostHog flag the check is rolled out behind. */
export const MINI_TEST_FLAG = 'onboarding_mini_test';

/** The most a balance hold is counted for; past it, it is not a test any more. */
export const BALANCE_CAP_SECONDS = 30;

/**
 * Who the check is for: a goal about the arch, or nothing hurting. A sore foot
 * is not asked to stand on one leg to be measured.
 */
export function miniTestEligible(answers: Answers, painless: boolean): boolean {
  return painless || first(answers, 'goal') === 'flatfeet';
}

/** Balance on one leg only with little pain this morning. */
export function balanceAllowed(answers: Answers, painless: boolean): boolean {
  if (painless) return true;
  const score = morningPainOf(answers);
  return score != null && score <= 3;
}

/** The arch answer as the plan's foot type. */
export function footTypeFor(arch: string | null): 'flexible' | 'rigid' | 'unknown' {
  if (arch === 'yes') return 'flexible';
  if (arch === 'no') return 'rigid';
  return 'unknown';
}

// ── The habit ───────────────────────────────────────────────────────────────

export type Habit = 'wake' | 'coffee' | 'shift' | 'bed';

/**
 * The reminder time for the moment they tied the session to, minutes past
 * midnight. Waking is the phone's own wake time; coffee half an hour after it;
 * the end of a shift and bedtime are ordinary times, there to be changed.
 */
export function reminderFor(habit: Habit, wake: number): number {
  switch (habit) {
    case 'wake':
      return wake;
    case 'coffee':
      return (wake + 30) % 1440;
    case 'shift':
      return 18 * 60;
    case 'bed':
      return 21 * 60 + 30;
  }
}

export function habitOf(answers: Answers): Habit | null {
  const value = first(answers, 'habit');
  return value === 'wake' || value === 'coffee' || value === 'shift' || value === 'bed' ? value : null;
}

// ── Reactions ───────────────────────────────────────────────────────────────

/** A full-screen reaction: a heading and a line, both whole sentences. */
export type Reaction = { key: string; title: Key; body: Key };

export function roleReaction(role: Role | null): Reaction | null {
  switch (role) {
    case 'running':
      return { key: 'role_running', title: 'onboarding.react.runningTitle', body: 'onboarding.react.runningBody' };
    case 'feet':
      return { key: 'role_feet', title: 'onboarding.react.feetTitle', body: 'onboarding.react.feetBody' };
    case 'both':
      return { key: 'role_both', title: 'onboarding.react.bothTitle', body: 'onboarding.react.bothBody' };
    case 'walking':
      return { key: 'role_walking', title: 'onboarding.react.walkingTitle', body: 'onboarding.react.walkingBody' };
    default:
      return null;
  }
}

export function durationReaction(duration: Duration | null): Reaction | null {
  switch (duration) {
    case 'weeks':
      return { key: 'duration_weeks', title: 'onboarding.react.weeksTitle', body: 'onboarding.react.weeksBody' };
    case 'months':
      return { key: 'duration_months', title: 'onboarding.react.monthsTitle', body: 'onboarding.react.monthsBody' };
    case 'year':
      return { key: 'duration_year', title: 'onboarding.react.yearTitle', body: 'onboarding.react.yearBody' };
    case 'longer':
      return { key: 'duration_longer', title: 'onboarding.react.longerTitle', body: 'onboarding.react.longerBody' };
    default:
      return null;
  }
}

export function triedReaction(key: TriedKey | null): Reaction | null {
  switch (key) {
    case 'insoles':
      return { key: 'tried_insoles', title: 'onboarding.react.insolesTitle', body: 'onboarding.react.insolesBody' };
    case 'rest':
      return { key: 'tried_rest', title: 'onboarding.react.restTitle', body: 'onboarding.react.restBody' };
    case 'stretching':
      return { key: 'tried_stretching', title: 'onboarding.react.stretchingTitle', body: 'onboarding.react.stretchingBody' };
    case 'shoes':
      return { key: 'tried_shoes', title: 'onboarding.react.shoesTitle', body: 'onboarding.react.shoesBody' };
    case 'physio':
      return { key: 'tried_physio', title: 'onboarding.react.physioTitle', body: 'onboarding.react.physioBody' };
    case 'none':
      return { key: 'tried_none', title: 'onboarding.react.nothingTitle', body: 'onboarding.react.nothingBody' };
    default:
      return null;
  }
}

/** A line under the options: which one, by which question it answers. */
export type InlineReaction = { key: string; text: Key };

export function painBandReaction(score: number): InlineReaction {
  const band = painBandOf(score);
  const text: Record<PainBand, Key> = {
    zero: 'onboarding.react.painZero',
    mild: 'onboarding.react.painMild',
    middle: 'onboarding.react.painMiddle',
    hard: 'onboarding.react.painHard',
  };
  return { key: `pain_${band}`, text: text[band] };
}

export function safetyReaction(answers: Answers): InlineReaction | null {
  const picked = list(answers, 'safety');
  if (picked.length === 0 || picked.includes('none')) return null;
  const plan = safetyPlan(answers);
  if (plan.seated) return { key: 'safety_seated', text: 'onboarding.react.safetySeated' };
  if (plan.numb) return { key: 'safety_numb', text: 'onboarding.react.safetyNumb' };
  return null;
}

export function areaReaction(area: string | null): InlineReaction | null {
  switch (area) {
    case 'heel':
      return { key: 'area_heel', text: 'onboarding.react.areaHeel' };
    case 'foot':
      return { key: 'area_foot', text: 'onboarding.react.areaFoot' };
    case 'achilles':
      return { key: 'area_achilles', text: 'onboarding.react.areaAchilles' };
    case 'calf':
      return { key: 'area_calf', text: 'onboarding.react.areaCalf' };
    case 'shin':
      return { key: 'area_shin', text: 'onboarding.react.areaShin' };
    case 'none':
      return { key: 'area_none', text: 'onboarding.react.areaNone' };
    default:
      return null;
  }
}

export function habitReaction(habit: Habit | null): InlineReaction | null {
  switch (habit) {
    case 'wake':
      return { key: 'habit_wake', text: 'onboarding.react.habitWake' };
    case 'coffee':
      return { key: 'habit_coffee', text: 'onboarding.react.habitCoffee' };
    case 'shift':
      return { key: 'habit_shift', text: 'onboarding.react.habitShift' };
    case 'bed':
      return { key: 'habit_bed', text: 'onboarding.react.habitBed' };
    default:
      return null;
  }
}

/** Said only when something is missing: a full kit needs no reassurance. */
export function equipmentReaction(answers: Answers): InlineReaction | null {
  const have = list(answers, 'equipment');
  if (have.length === 0) return null;
  if (have.includes('none')) return { key: 'equipment_none', text: 'onboarding.react.equipmentNone' };
  if (!have.includes('band') || !have.includes('step')) {
    return { key: 'equipment_some', text: 'onboarding.react.equipmentSome' };
  }
  return null;
}

// ── Why it still hurts ──────────────────────────────────────────────────────

export type WhyLines = { pattern: Key; lingers: Key | null; tried: Key | null; helps: Key };

const PATTERN: Record<string, Key> = {
  heel: 'onboarding.why.patternHeel',
  foot: 'onboarding.why.patternFoot',
  achilles: 'onboarding.why.patternAchilles',
  calf: 'onboarding.why.patternCalf',
  shin: 'onboarding.why.patternShin',
};

const HELPS: Record<string, Key> = {
  heel: 'onboarding.why.helpsFoot',
  foot: 'onboarding.why.helpsFoot',
  achilles: 'onboarding.why.helpsAchilles',
  calf: 'onboarding.why.helpsCalf',
  shin: 'onboarding.why.helpsShin',
};

const LINGERS: Record<Duration, Key> = {
  weeks: 'onboarding.why.lingersWeeks',
  months: 'onboarding.why.lingersMonths',
  year: 'onboarding.why.lingersYear',
  longer: 'onboarding.why.lingersLonger',
};

const TRIED: Record<TriedKey, Key> = {
  insoles: 'onboarding.why.triedInsoles',
  rest: 'onboarding.why.triedRest',
  stretching: 'onboarding.why.triedStretching',
  shoes: 'onboarding.why.triedShoes',
  physio: 'onboarding.why.triedPhysio',
  none: 'onboarding.why.triedNone',
};

/**
 * The screen that answers the intro's promise, from the first area marked,
 * how long, and what they tried. A description of a pattern, never a
 * diagnosis: every line says what is common and what helps, none says what
 * this person has. Null when nothing hurts — there is nothing to explain.
 */
export function whyLines(area: string | null, answers: Answers): WhyLines | null {
  if (area == null || PATTERN[area] == null) return null;
  const duration = durationOf(answers);
  const tried = triedKey(answers);
  return {
    pattern: PATTERN[area],
    lingers: duration != null ? LINGERS[duration] : null,
    tried: tried != null ? TRIED[tried] : null,
    helps: HELPS[area],
  };
}

// ── The first week ──────────────────────────────────────────────────────────

/** Which days a week of N sessions falls on, Monday first (0 = Monday). */
export function sessionDays(daysPerWeek: number): number[] {
  if (daysPerWeek >= 7) return [0, 1, 2, 3, 4, 5, 6];
  if (daysPerWeek <= 3) return [0, 2, 4];
  return [0, 1, 2, 3, 4];
}

/**
 * Week one's moves, as the plan builds it: seated, level one, nothing that
 * loads the fascia (`eligibility.ts`, `settling`). The plan picks among these
 * by its own rules, so the screen shows the kind of week it is, from the
 * exercises that week is allowed to hold.
 */
export function firstWeekMoves(area: string | null): string[] {
  switch (area) {
    case 'achilles':
    case 'calf':
      return ['heel_raise_seated', 'short_foot_seated'];
    case 'shin':
      return ['heel_raise_seated', 'toe_spread'];
    default:
      return ['heel_raise_seated', 'toe_spread'];
  }
}
