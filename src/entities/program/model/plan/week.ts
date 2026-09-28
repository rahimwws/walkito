import { RETEST_MINUTES } from '../day-templates';
import { daysBetween, fromDateKey, toDateKey } from '../state';

import {
  CHAINS,
  PLAN_META,
  planMeta,
  type ChainName,
  type PlanKind,
} from './catalogue-meta';
import { doseFor, doseSeconds, type PlanDose } from './dose';
import { allowed, atOrBelow, nextAbove, type EligibilityContext } from './eligibility';
import { GOAL_SPECS, pickFocus, type Goal, type GoalType } from './goals';

/**
 * The week: built once, from the focus goal and everything the last week said.
 *
 * Pure. Every input is passed in — pain, feedback, levels, equipment — so the
 * same inputs always make the same week and the rules can be tested one at a
 * time. `store.ts` gathers the inputs and keeps the result.
 */

export type DayType = PlanKind | 'test' | 'rest';

export type PlannedExercise = {
  id: string;
  /** The level the dose was read at — the exercise's own, or lower when stepped back. */
  level: number;
  dose: PlanDose;
  /** Serves the week's focus goal. Never dropped when a day shrinks. */
  focus: boolean;
  /** Keeps a reached goal ticking over, at a lower dose. */
  maintaining?: boolean;
};

export type PlanDay = {
  /** `YYYY-MM-DD`. */
  date: string;
  /** 0 = Monday … 6 = Sunday. */
  weekday: number;
  type: DayType;
  exercises: PlannedExercise[];
  minutes: number;
};

export type RationaleKind = 'first' | 'painUp' | 'hard' | 'easy' | 'painLow' | 'newFocus' | 'default';

export type Rationale = { kind: RationaleKind; /** The pain figure for `painLow`. */ n?: number };

export type ChainLevels = Record<ChainName, number>;

export type WeekPlan = {
  /** Monday, `YYYY-MM-DD`. */
  weekStart: string;
  /** 1-based, weeks since the plan began. */
  weekIndex: number;
  focus: GoalType | null;
  days: PlanDay[];
  rationale: Rationale;
  /** Exercise ids that appear this week and in no week before it. */
  newThisWeek: string[];
  /** Where each chain stood when the week was built — the next week starts here. */
  levels: ChainLevels;
};

export type SessionFeedback = {
  date: string;
  feedback: 'easy' | 'ok' | 'hard' | null;
  exerciseIds: readonly string[];
};

export type DaysPerWeek = 3 | 5 | 7;
export type SessionMinutes = 3 | 5 | 10;

export type WeekInput = {
  weekStart: string;
  weekIndex: number;
  /** Today, so a test is never put on a day that has already gone. */
  today: string;
  /** The plan's first day; days before it are not part of the plan. */
  planStart: string;
  goals: readonly Goal[];
  /** The outcome's steps, in order — the focus's tiebreak. Empty without one. */
  steps?: readonly GoalType[];
  daysPerWeek: DaysPerWeek;
  defaultMinutes: SessionMinutes;
  /** Everything except `settling`, which the builder sets from the week index. */
  eligibility: Omit<EligibilityContext, 'settling'>;
  levels: ChainLevels;
  /** Last week's sessions with how they felt. */
  lastWeekFeedback: readonly SessionFeedback[];
  /** Morning pain, last seven days and the seven before, oldest first. */
  painLastWeek: readonly (number | null)[];
  painWeekBefore: readonly (number | null)[];
  /** Average morning pain across the first week, for the pain-to-strength switch. */
  painStart: number | null;
  previousFocus: GoalType | null;
  /**
   * Every exercise id that appeared in an earlier week — null when no earlier
   * week was planned, in which case nothing can honestly be called new.
   */
  seenBefore: ReadonlySet<string> | null;
  /** When the next test is due, `YYYY-MM-DD`, or null. */
  testDue: string | null;
};

/** The shape of the week by how many days the user wants. Strength days never touch. */
export const WEEK_SHAPES: Readonly<Record<DaysPerWeek, readonly DayType[]>> = {
  3: ['strength', 'rest', 'strength', 'rest', 'strength', 'rest', 'rest'],
  5: ['strength', 'mobility', 'strength', 'balance', 'strength', 'rest', 'rest'],
  7: ['strength', 'mobility', 'strength', 'balance', 'strength', 'mobility', 'recovery'],
};

export const MIN_EXERCISES = 2;
export const MAX_EXERCISES = 4;

export const DEFAULT_LEVELS: ChainLevels = { calf: 0, arch: 0, balance: 0, hip: 0, mobility: 0, recovery: 0 };

/** Test cadence: every two weeks until the first goal is reached, then every four. */
export const TEST_EVERY_DAYS = 14;
export const TEST_EVERY_DAYS_AFTER_GOAL = 28;

/** Monday of the week `dateKey` falls in. */
export function weekStartOf(dateKey: string): string {
  const date = fromDateKey(dateKey);
  const offset = (date.getDay() + 6) % 7;
  return toDateKey(new Date(date.getFullYear(), date.getMonth(), date.getDate() - offset));
}

export function addDays(dateKey: string, days: number): string {
  const date = fromDateKey(dateKey);
  return toDateKey(new Date(date.getFullYear(), date.getMonth(), date.getDate() + days));
}

/** 1-based week number of `dateKey` in a plan that began on `planStart`. */
export function weekIndexFor(planStart: string, dateKey: string): number {
  return Math.floor(daysBetween(weekStartOf(planStart), weekStartOf(dateKey)) / 7) + 1;
}

function mean(values: readonly (number | null)[]): number | null {
  const logged = values.filter((v): v is number => v != null);
  if (logged.length === 0) return null;
  return logged.reduce((sum, v) => sum + v, 0) / logged.length;
}

/** The chain a goal's focus exercise climbs on strength days. */
function focusChainOf(goal: GoalType): ChainName {
  // Pain is worked by mobility and low calf work; on a strength day that means
  // the calf chain, held to its first two levels.
  return goal === 'pain_free_mornings' ? 'calf' : GOAL_SPECS[goal].chain;
}

/** The highest index on the calf chain the pain goal allows (level ≤ 2). */
function capFor(goal: GoalType | null, chain: ChainName): number {
  if (goal !== 'pain_free_mornings' || chain !== 'calf') return CHAINS[chain].length - 1;
  let cap = 0;
  CHAINS.calf.forEach((id, i) => {
    if ((planMeta(id)?.level ?? 5) <= 2) cap = i;
  });
  return cap;
}

/**
 * Rule 9: move the focus chain one step.
 *
 * Up when the last two sessions with that exercise were both "easy" and pain
 * did not rise over the week; down when pain rose by two or any session last
 * week was "hard". Otherwise it stays.
 */
export function progress(
  levels: ChainLevels,
  chain: ChainName,
  input: Pick<WeekInput, 'lastWeekFeedback' | 'painLastWeek' | 'painWeekBefore'>,
  ctx: EligibilityContext,
  cap: number,
): ChainLevels {
  const at = levels[chain];
  const current = CHAINS[chain][at];
  const recent = mean(input.painLastWeek);
  const before = mean(input.painWeekBefore);
  const rise = recent != null && before != null ? recent - before : 0;
  const anyHard = input.lastWeekFeedback.some((s) => s.feedback === 'hard');
  if (rise >= 2 || anyHard) {
    const down = atOrBelow(chain, at - 1, ctx);
    return down == null ? levels : { ...levels, [chain]: down.index };
  }
  const withIt = input.lastWeekFeedback.filter((s) => s.exerciseIds.includes(current));
  const lastTwo = withIt.slice(-2);
  if (lastTwo.length === 2 && lastTwo.every((s) => s.feedback === 'easy') && rise <= 0) {
    const up = nextAbove(chain, at, ctx);
    if (up != null && up.index <= cap) return { ...levels, [chain]: up.index };
  }
  return levels;
}

function planned(id: string, focus: boolean, hasStep: boolean, level?: number, maintaining = false): PlannedExercise {
  const at = level ?? planMeta(id)?.level ?? 1;
  return { id, level: at, dose: doseFor(id, at, hasStep), focus, ...(maintaining ? { maintaining } : {}) };
}

/** The exercise a chain is at, clamped to what is allowed. Null when nothing on it is. */
function chainExercise(chain: ChainName, levels: ChainLevels, ctx: EligibilityContext, cap?: number): string | null {
  const at = Math.min(levels[chain], cap ?? CHAINS[chain].length - 1);
  return atOrBelow(chain, at, ctx)?.id ?? null;
}

/** A rotating pick from a pool, so consecutive days and weeks differ. */
function rotate(pool: readonly string[], seed: number, count: number, ctx: EligibilityContext, exclude: readonly string[] = []): string[] {
  const usable = pool.filter((id) => allowed(id, ctx) && !exclude.includes(id));
  if (usable.length === 0) return [];
  const out: string[] = [];
  for (let i = 0; i < usable.length && out.length < count; i += 1) {
    out.push(usable[(seed + i) % usable.length]);
  }
  return out;
}

/** Any allowed exercise carrying the focus goal's tag, from a pool. */
function focusFromPool(pool: readonly string[], goal: GoalType, ctx: EligibilityContext, seed: number): string | null {
  const tag = GOAL_SPECS[goal].tag;
  const tagged = pool.filter((id) => planMeta(id)?.tags.includes(tag) && allowed(id, ctx));
  return tagged.length === 0 ? null : tagged[seed % tagged.length];
}

/**
 * Rule 8: two to four exercises that fit the minutes. The focus exercise goes
 * first and is never cut; the rest are added in order while there is time.
 */
function fit(candidates: PlannedExercise[], minutes: number): PlannedExercise[] {
  const unique: PlannedExercise[] = [];
  for (const c of candidates) if (!unique.some((u) => u.id === c.id)) unique.push(c);
  const budget = minutes * 60;
  const out: PlannedExercise[] = [];
  let used = 0;
  for (const c of unique) {
    if (out.length >= MAX_EXERCISES) break;
    const cost = doseSeconds(c.dose);
    if (c.focus || out.length < MIN_EXERCISES || used + cost <= budget) {
      out.push(c);
      used += cost;
    }
  }
  return out;
}

const MOBILITY_POOL = CHAINS.mobility;
const RECOVERY_POOL = CHAINS.recovery;

export function buildWeek(input: WeekInput): WeekPlan {
  const settling = input.weekIndex === 1;
  const ctx: EligibilityContext = { ...input.eligibility, settling };
  const hasStep = !input.eligibility.equipmentMissing.includes('step');

  const focus = pickFocus(input.goals, {
    weekIndex: input.weekIndex,
    painStart: input.painStart,
    painRecent: mean(input.painLastWeek),
    order: input.steps,
  });

  // Progression on the focus chain, then every chain clamped to what is allowed
  // this week — week one and missing equipment can both pull a chain back.
  let levels = { ...input.levels };
  if (focus != null && input.weekIndex > 1) {
    const chain = focusChainOf(focus);
    levels = progress(levels, chain, input, ctx, capFor(focus, chain));
  }
  for (const chain of Object.keys(CHAINS) as ChainName[]) {
    const clamped = atOrBelow(chain, levels[chain], ctx);
    if (clamped != null) levels[chain] = clamped.index;
  }

  const secondary = input.goals.filter((g) => g.status === 'active' && g.type !== focus).map((g) => g.type);
  const maintaining = input.goals.filter((g) => g.status === 'maintaining').map((g) => g.type);

  const shape = WEEK_SHAPES[input.daysPerWeek];
  const testDay = testDateIn(input);
  let strengthCount = 0;

  const days: PlanDay[] = shape.map((slot, weekday) => {
    const date = addDays(input.weekStart, weekday);
    if (daysBetween(input.planStart, date) < 0) {
      return { date, weekday, type: 'rest', exercises: [], minutes: 0 };
    }
    if (date === testDay) {
      return { date, weekday, type: 'test', exercises: [], minutes: RETEST_MINUTES };
    }
    if (slot === 'rest' || slot === 'test') {
      return { date, weekday, type: 'rest', exercises: [], minutes: 0 };
    }
    const seed = input.weekIndex * 7 + weekday;
    const candidates: PlannedExercise[] = [];

    // Rule 3: every session carries the focus goal.
    const focusExercise = focus == null ? null : focusFor(slot, focus, levels, ctx, seed);
    if (focusExercise != null) candidates.push(planned(focusExercise, true, hasStep));

    if (slot === 'strength') {
      strengthCount += 1;
      // Rule 4: secondary goals rotate across the other slots.
      if (secondary.length > 0) {
        const goal = secondary[(strengthCount - 1) % secondary.length];
        const id = secondaryFor(goal, levels, ctx, seed);
        if (id != null) candidates.push(planned(id, false, hasStep));
      }
      // Rule 5: a maintained goal, on the first and third strength day, one level down.
      if (maintaining.length > 0 && (strengthCount === 1 || strengthCount === 3)) {
        const goal = maintaining[(strengthCount - 1) % maintaining.length];
        const id = secondaryFor(goal, levels, ctx, seed);
        if (id != null) {
          const level = Math.max(1, (planMeta(id)?.level ?? 1) - 1);
          candidates.push(planned(id, false, hasStep, level, true));
        }
      }
      if (focus === 'arch_hold') {
        for (const id of rotate(['toe_spread', 'band_inversion'], seed, 1, ctx)) candidates.push(planned(id, false, hasStep));
      }
      for (const id of rotate(MOBILITY_POOL, seed, 1, ctx)) candidates.push(planned(id, false, hasStep));
    } else if (slot === 'mobility') {
      for (const id of rotate(MOBILITY_POOL, seed, 3, ctx)) candidates.push(planned(id, false, hasStep));
    } else if (slot === 'balance') {
      const id = chainExercise('balance', levels, ctx);
      if (id != null) candidates.push(planned(id, false, hasStep));
      for (const acc of rotate(['tibialis_raise', 'ankle_rocks'], seed, 1, ctx)) candidates.push(planned(acc, false, hasStep));
    } else if (slot === 'recovery') {
      for (const id of rotate(RECOVERY_POOL, seed, 1, ctx)) candidates.push(planned(id, false, hasStep));
      for (const id of rotate(MOBILITY_POOL, seed, 1, ctx)) candidates.push(planned(id, false, hasStep));
    }

    return { date, weekday, type: slot, exercises: fit(candidates, input.defaultMinutes), minutes: input.defaultMinutes };
  });

  const inWeek = new Set(days.flatMap((d) => d.exercises.map((e) => e.id)));
  const seen = input.seenBefore;
  const newThisWeek = input.weekIndex === 1 || seen == null ? [] : [...inWeek].filter((id) => !seen.has(id));

  return {
    weekStart: input.weekStart,
    weekIndex: input.weekIndex,
    focus,
    days,
    rationale: rationaleFor(input, focus),
    newThisWeek,
    levels,
  };
}

/** The focus goal's exercise for a day of this kind. */
function focusFor(slot: PlanKind, goal: GoalType, levels: ChainLevels, ctx: EligibilityContext, seed: number): string | null {
  const chain = focusChainOf(goal);
  if (slot === 'strength') {
    return chainExercise(chain, levels, ctx, capFor(goal, chain)) ?? focusFromPool(MOBILITY_POOL, goal, ctx, seed);
  }
  const pool = slot === 'mobility' ? MOBILITY_POOL : slot === 'recovery' ? [...RECOVERY_POOL, ...MOBILITY_POOL] : [...CHAINS.balance, 'ankle_rocks', 'tibialis_raise'];
  const tagged = focusFromPool(pool, goal, ctx, seed);
  if (tagged != null) return tagged;
  // Nothing of the day's own kind serves the goal: bring the goal's exercise,
  // at the bottom of its chain — a mobility day stays light.
  return atOrBelow(chain, 0, ctx)?.id ?? null;
}

/** A secondary or maintained goal's exercise on a strength day. */
function secondaryFor(goal: GoalType, levels: ChainLevels, ctx: EligibilityContext, seed: number): string | null {
  if (goal === 'pain_free_mornings') return focusFromPool(MOBILITY_POOL, goal, ctx, seed);
  const chain = GOAL_SPECS[goal].chain;
  return chainExercise(chain, levels, ctx);
}

/** The day the test goes on this week, if one is due. */
function testDateIn(input: WeekInput): string | null {
  if (input.testDue == null) return null;
  const weekEnd = addDays(input.weekStart, 6);
  if (daysBetween(input.testDue, weekEnd) < 0) return null; // due after this week
  // Due inside the week, or overdue: never on a day already gone.
  const earliest = daysBetween(input.weekStart, input.today) > 0 ? input.today : input.weekStart;
  const on = daysBetween(earliest, input.testDue) >= 0 ? input.testDue : earliest;
  return daysBetween(on, weekEnd) >= 0 ? on : null;
}

/** The first line that applies — section 4.4. */
export function rationaleFor(input: WeekInput, focus: GoalType | null): Rationale {
  if (input.weekIndex === 1) return { kind: 'first' };
  const recent = mean(input.painLastWeek);
  const before = mean(input.painWeekBefore);
  const rise = recent != null && before != null ? recent - before : 0;
  if (rise >= 2) return { kind: 'painUp' };
  const hard = input.lastWeekFeedback.filter((s) => s.feedback === 'hard').length;
  if (hard >= 2) return { kind: 'hard' };
  const easy = input.lastWeekFeedback.filter((s) => s.feedback === 'easy').length;
  if (easy >= 2 && Math.abs(rise) < 1) return { kind: 'easy' };
  const logged = input.painLastWeek.filter((p): p is number => p != null);
  if (logged.length >= 3 && logged.every((p) => p <= 2)) return { kind: 'painLow', n: Math.max(...logged) };
  if (focus != null && input.previousFocus != null && focus !== input.previousFocus) return { kind: 'newFocus' };
  return { kind: 'default' };
}

/** Every exercise the plan could ever schedule — for tests and the prefetch. */
export const PLANNABLE_IDS: readonly string[] = PLAN_META.map((row) => row.id);
