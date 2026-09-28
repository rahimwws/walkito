import type { ChainName, GoalTag } from './catalogue-meta';

/**
 * Goals: measurable body targets, one of which is the focus each week.
 *
 * There is no end to the plan. A goal that is reached moves to maintaining and
 * the next one takes its place, so "finished" is never a state the app is in.
 */
export type GoalType = 'pain_free_mornings' | 'arch_hold' | 'calf_raises' | 'balance' | 'symmetry';

export type GoalStatus = 'active' | 'achieved' | 'maintaining';

export type Goal = {
  type: GoalType;
  status: GoalStatus;
  /** The first measurement, which the bar starts from. Null until measured. */
  baseline: number | null;
  /** The latest measurement. Null until measured. */
  current: number | null;
  /** `YYYY-MM-DD` it became active. */
  since: string;
  /** `YYYY-MM-DD` it was reached. */
  achievedOn?: string;
};

type GoalSpec = {
  target: number;
  /** Lower is better for pain and for the left/right gap. */
  lowerIsBetter: boolean;
  tag: GoalTag;
  /** The chain whose climb this goal is measured by; pain leans on mobility. */
  chain: ChainName;
  /** For ties when choosing the focus, and the order new goals are offered in. */
  priority: number;
};

export const GOAL_SPECS: Readonly<Record<GoalType, GoalSpec>> = {
  // Morning pain, 0–10. Reached at ≤ 1 for 14 days running — see `painGoalReached`.
  pain_free_mornings: { target: 1, lowerIsBetter: true, tag: 'pain', chain: 'mobility', priority: 1 },
  arch_hold: { target: 60, lowerIsBetter: false, tag: 'arch', chain: 'arch', priority: 2 },
  calf_raises: { target: 25, lowerIsBetter: false, tag: 'calf', chain: 'calf', priority: 3 },
  balance: { target: 30, lowerIsBetter: false, tag: 'balance', chain: 'balance', priority: 4 },
  symmetry: { target: 10, lowerIsBetter: true, tag: 'symmetry', chain: 'hip', priority: 5 },
};

/** The order a next goal is offered in, skipping what is already achieved. */
export const GOAL_ORDER: readonly GoalType[] = ['pain_free_mornings', 'arch_hold', 'calf_raises', 'balance', 'symmetry'];

export const MAX_ACTIVE_GOALS = 3;

/** Days in a row at ≤ 1 that count as pain-free mornings. */
export const PAIN_FREE_DAYS = 14;

/** How far along a goal is, 0 to 1. Unmeasured goals count as not started. */
export function goalProgress(goal: Goal): number {
  const spec = GOAL_SPECS[goal.type];
  if (goal.current == null) return 0;
  if (spec.lowerIsBetter) {
    if (goal.current <= spec.target) return 1;
    const start = goal.baseline ?? goal.current;
    if (start <= spec.target) return 1;
    return clamp01((start - goal.current) / (start - spec.target));
  }
  return clamp01(goal.current / spec.target);
}

function clamp01(x: number): number {
  return Math.max(0, Math.min(1, x));
}

export type StartingFacts = {
  /** Anything marked on the leg map. */
  painReported: boolean;
  /** Flexible flat foot (the big-toe test shows an arch). `unknown` until asked. */
  footType: 'flexible' | 'rigid' | 'unknown';
  /** Pain in the heel or arch, which is what the arch work answers when the foot type is not known. */
  plantarPain: boolean;
  /** Runs, or is on their feet a lot. */
  loadsFeet: boolean;
  /** Left/right gap on the first test, as a percentage. Null before it. */
  firstGapPct: number | null;
};

/**
 * The goals a new user starts with, at most three, pain first.
 *
 * A rigid foot never gets the arch-hold goal: training the arch cannot change a
 * foot whose shape is structural, and the app says so elsewhere. With the foot
 * type not asked yet, heel or arch pain stands in for "flexible flat foot" —
 * see NEEDS_DESIGN_DECISION in the report.
 */
export function startingGoals(facts: StartingFacts, today: string): Goal[] {
  const types: GoalType[] = [];
  if (facts.painReported) types.push('pain_free_mornings');
  const archFits =
    facts.footType === 'flexible' || (facts.footType === 'unknown' && facts.plantarPain);
  if (facts.footType !== 'rigid' && archFits) types.push('arch_hold');
  if (facts.loadsFeet) types.push('calf_raises');
  if (facts.firstGapPct != null && facts.firstGapPct > 20) types.push('symmetry');
  // Nobody starts with nothing to work towards.
  if (types.length === 0) types.push('calf_raises');
  return types.slice(0, MAX_ACTIVE_GOALS).map((type) => ({
    type,
    status: 'active',
    baseline: null,
    current: null,
    since: today,
  }));
}

export type FocusContext = {
  /** 1-based. */
  weekIndex: number;
  /** Average morning pain in the first week, and over the last seven days. */
  painStart: number | null;
  painRecent: number | null;
  /** The outcome's steps, which break ties ahead of the fixed priority. */
  order?: readonly GoalType[];
};

/**
 * The week's focus: the active goal furthest from its target, ties to priority.
 *
 * The pain-to-strength switch: from week 3, once morning pain has come down by
 * two points from where it started, the focus moves off pain to the next goal —
 * so a strength number starts climbing while the pain is still finishing.
 */
export function pickFocus(goals: readonly Goal[], ctx: FocusContext): GoalType | null {
  let active = goals.filter((goal) => goal.status === 'active');
  if (active.length === 0) return null;
  const painDropped =
    ctx.weekIndex >= 3 &&
    ctx.painStart != null &&
    ctx.painRecent != null &&
    ctx.painStart - ctx.painRecent >= 2;
  if (painDropped && active.some((goal) => goal.type !== 'pain_free_mornings')) {
    active = active.filter((goal) => goal.type !== 'pain_free_mornings');
  }
  const ranked = [...active].sort((a, b) => {
    const gap = goalProgress(a) - goalProgress(b);
    if (gap !== 0) return gap;
    const ia = ctx.order?.indexOf(a.type) ?? -1;
    const ib = ctx.order?.indexOf(b.type) ?? -1;
    if (ia !== ib && ia >= 0 && ib >= 0) return ia - ib;
    return GOAL_SPECS[a.type].priority - GOAL_SPECS[b.type].priority;
  });
  return ranked[0].type;
}

/** Whether morning pain has been at 1 or under for the last 14 days in a row. */
export function painGoalReached(painByDay: readonly (number | null)[]): boolean {
  const last = painByDay.slice(-PAIN_FREE_DAYS);
  return last.length === PAIN_FREE_DAYS && last.every((p) => p != null && p <= 1);
}

/**
 * Whether a measured goal has hit its target. The left/right gap has to be
 * under 10%, not at it; the pain goal is judged by `painGoalReached` instead,
 * because it is a run of days rather than one reading.
 */
export function measuredGoalReached(goal: Goal): boolean {
  if (goal.current == null || goal.type === 'pain_free_mornings') return false;
  const spec = GOAL_SPECS[goal.type];
  return spec.lowerIsBetter ? goal.current < spec.target : goal.current >= spec.target;
}

/**
 * Moves reached goals on and offers the next one.
 *
 * Reached → `maintaining` (the celebration is the caller's, keyed on the
 * returned `reached`); then the first goal in `order` (the outcome's steps,
 * then `GOAL_ORDER`) the user does not
 * already have joins, while there is room under the three-goal cap.
 */
export function advanceGoals(
  goals: readonly Goal[],
  reachedTypes: readonly GoalType[],
  today: string,
  excluded: readonly GoalType[] = [],
  order: readonly GoalType[] = GOAL_ORDER,
): { goals: Goal[]; reached: GoalType[]; added: GoalType[] } {
  const reached: GoalType[] = [];
  const next: Goal[] = goals.map((goal) => {
    if (goal.status === 'active' && reachedTypes.includes(goal.type)) {
      reached.push(goal.type);
      return { ...goal, status: 'maintaining', achievedOn: today };
    }
    return goal;
  });
  const added: GoalType[] = [];
  // The outcome's own steps first; past them, the rest of the list, so a
  // finished outcome keeps a next thing to work on.
  const offered = [...new Set([...order, ...GOAL_ORDER])];
  for (const type of offered) {
    if (next.filter((goal) => goal.status === 'active').length >= MAX_ACTIVE_GOALS) break;
    if (reached.length === 0) break;
    if (excluded.includes(type) || next.some((goal) => goal.type === type)) continue;
    next.push({ type, status: 'active', baseline: null, current: null, since: today });
    added.push(type);
    // One new goal per goal reached.
    if (added.length >= reached.length) break;
  }
  return { goals: next, reached, added };
}
