import { goalProgress, type Goal, type GoalType } from './goals';

/**
 * The big goal: what the person came for, in their terms.
 *
 * Worded as something to build, never as a promise: "sturdy legs for
 * basketball", not "basketball without injuries", which no plan can guarantee.
 *
 * Nobody opens a rehab app to hold an arch for 60 seconds. They come to play
 * tennis again without the Achilles, to fix flat feet, to get legs that last
 * the season. That is the outcome. The five measured goals are the steps to it,
 * in an order chosen for that outcome, and the plan works one step at a time.
 *
 * One outcome per person — onboarding asks for "the one that matters most",
 * and a plan that chases two ends at once explains neither.
 */
export type OutcomeKind =
  | 'painfree'
  | 'flat_feet'
  | 'stronger'
  | 'injury_free'
  | 'stable_ankles'
  | 'jump_higher'
  | 'race_ready'
  | 'all_day'
  | 'comeback'
  | 'steady';

export const OUTCOME_KINDS: readonly OutcomeKind[] = [
  'painfree',
  'flat_feet',
  'stronger',
  'injury_free',
  'stable_ankles',
  'jump_higher',
  'race_ready',
  'all_day',
  'comeback',
  'steady',
];

/** The outcome kinds whose sentence names the sport. */
export const SPORT_OUTCOMES: readonly OutcomeKind[] = ['painfree', 'stronger', 'injury_free'];

export type OutcomeSport = 'running' | 'tennis' | 'gym' | 'football' | 'basketball' | 'cycling' | 'hiking';

export const OUTCOME_SPORTS: readonly OutcomeSport[] = [
  'running',
  'tennis',
  'gym',
  'football',
  'basketball',
  'cycling',
  'hiking',
];

/** Where it hurts, as the intake groups it. */
export type OutcomeArea = 'heel' | 'foot' | 'achilles' | 'calf' | 'shin';

export type Outcome = {
  kind: OutcomeKind;
  sport: OutcomeSport | null;
  /** The first place marked on the leg map. Null when nothing hurts. */
  area: OutcomeArea | null;
  /** The measured goals that lead to it, in the order they are worked. */
  steps: GoalType[];
  /** `YYYY-MM-DD` it was set. */
  since: string;
};

export type OutcomeFacts = {
  /** Onboarding's goal answer — see `GOAL_ANSWER` for the values. */
  goal: string | null;
  sport: string | null;
  /** Grouped pain areas from the intake, first one first. */
  areas: readonly string[];
  /** A rigid flat foot cannot be trained into an arch, so it never gets that step. */
  rigidFoot: boolean;
};

const AREAS: readonly OutcomeArea[] = ['heel', 'foot', 'achilles', 'calf', 'shin'];

/**
 * Onboarding's goal answers that name an outcome outright. The values are
 * analytics identifiers and are never renamed.
 */
const GOAL_ANSWER: Readonly<Record<string, OutcomeKind>> = {
  flatfeet: 'flat_feet',
  stronger: 'stronger',
  ankles: 'stable_ankles',
  jump: 'jump_higher',
  race: 'race_ready',
  allday: 'all_day',
  comeback: 'comeback',
  steady: 'steady',
};

/** Which outcome the onboarding answers point at. */
export function outcomeKindFor(goal: string | null, painReported: boolean): OutcomeKind {
  const named = goal == null ? undefined : GOAL_ANSWER[goal];
  if (named != null) return named;
  // "Pain-free", "consistent", "injury-free" or no answer: pain, when there is
  // any, is what the person needs gone before anything else.
  if (painReported) return 'painfree';
  return 'injury_free';
}

/**
 * The steps to an outcome, in the order they are worked.
 *
 * - Pain always goes first when there is pain: nothing else lands while it hurts.
 * - Heel and arch pain lean on the arch; Achilles, calf and shin on the calf.
 * - Court and field sports cut and land, so balance comes before the left/right gap.
 * - A rigid foot never gets the arch step (see `startingGoals`).
 */
export function stepsFor(
  kind: OutcomeKind,
  area: OutcomeArea | null,
  sport: OutcomeSport | null,
  rigidFoot: boolean,
): GoalType[] {
  const pain: GoalType[] = area == null ? [] : ['pain_free_mornings'];
  const plantar = area === 'heel' || area === 'foot';
  const court = sport === 'tennis' || sport === 'basketball' || sport === 'football';
  let steps: GoalType[];
  switch (kind) {
    case 'painfree':
      steps = plantar
        ? [...pain, 'arch_hold', 'calf_raises', court ? 'balance' : 'symmetry']
        : [...pain, 'calf_raises', 'balance', 'symmetry'];
      break;
    case 'flat_feet':
      steps = [...pain, 'arch_hold', 'balance', 'calf_raises'];
      break;
    case 'stronger':
      steps = [...pain, 'calf_raises', 'symmetry', 'balance'];
      break;
    case 'injury_free':
      steps = court ? [...pain, 'calf_raises', 'balance', 'symmetry'] : [...pain, 'calf_raises', 'symmetry', 'balance'];
      break;
    // After a sprain the ankle's own sense of position is what was lost.
    case 'stable_ankles':
      steps = [...pain, 'balance', 'calf_raises', 'symmetry'];
      break;
    // Take-off is the calf; landing is balance.
    case 'jump_higher':
      steps = [...pain, 'calf_raises', 'balance', 'symmetry'];
      break;
    case 'race_ready':
      steps = [...pain, 'calf_raises', 'symmetry', plantar ? 'arch_hold' : 'balance'];
      break;
    // Standing and walking all day is the arch holding up, hour after hour.
    case 'all_day':
      steps = [...pain, 'arch_hold', 'calf_raises', 'balance'];
      break;
    // Coming back from an injury is closing the gap to the other leg first.
    case 'comeback':
      steps = [...pain, 'symmetry', 'calf_raises', 'balance'];
      break;
    case 'steady':
      steps = [...pain, 'balance', 'arch_hold', 'calf_raises'];
      break;
  }
  const kept = rigidFoot ? steps.filter((step) => step !== 'arch_hold') : steps;
  return [...new Set(kept)];
}

export function outcomeFor(facts: OutcomeFacts, today: string): Outcome {
  const area = (facts.areas.find((a) => (AREAS as readonly string[]).includes(a)) ?? null) as OutcomeArea | null;
  const sport = (OUTCOME_SPORTS as readonly string[]).includes(facts.sport ?? '') ? (facts.sport as OutcomeSport) : null;
  const kind = outcomeKindFor(facts.goal, area != null);
  return { kind, sport, area, steps: stepsFor(kind, area, sport, facts.rigidFoot), since: today };
}

/**
 * The same outcome with the pain moved — the leg map in Settings. The kind
 * stays what the person chose; the steps follow where it hurts now, and a pain
 * step appears or goes with the pain.
 */
export function withAreas(outcome: Outcome, areas: readonly string[], rigidFoot: boolean): Outcome {
  const area = (areas.find((a) => (AREAS as readonly string[]).includes(a)) ?? null) as OutcomeArea | null;
  return { ...outcome, area, steps: stepsFor(outcome.kind, area, outcome.sport, rigidFoot) };
}

/** The same outcome with a different kind — the choice in Settings. */
export function withKind(outcome: Outcome, kind: OutcomeKind, rigidFoot: boolean, today: string): Outcome {
  return { ...outcome, kind, steps: stepsFor(kind, outcome.area, outcome.sport, rigidFoot), since: today };
}

export type OutcomeProgress = {
  /** 0–1 across all steps: every step before the current one a whole share, the current one its part. */
  fill: number;
  /** 1-based step being worked; `total` once every step is done. */
  step: number;
  total: number;
  /** The goal being worked now, or null once every step is done. */
  current: GoalType | null;
  done: boolean;
};

function finished(goal: Goal | undefined): boolean {
  return goal != null && goal.status !== 'active';
}

/**
 * How far along the outcome is.
 *
 * The step shown is the week's focus when the focus is one of the steps —
 * that is the work the week is doing — and otherwise the first unfinished one.
 */
export function outcomeProgress(outcome: Outcome, goals: readonly Goal[], focus: GoalType | null): OutcomeProgress {
  const byType = new Map(goals.map((goal) => [goal.type, goal]));
  const total = outcome.steps.length;
  const open = outcome.steps.filter((step) => !finished(byType.get(step)));
  const current = focus != null && open.includes(focus) ? focus : (open[0] ?? null);
  const part = current == null ? 0 : goalProgress(byType.get(current) ?? { type: current, status: 'active', baseline: null, current: null, since: '' });
  // Where on the path the current step sits — the pain step can still be
  // finishing while the week's focus has moved on to the arch, and that is step 2.
  const index = current == null ? total : outcome.steps.indexOf(current);
  const fill = total === 0 || current == null ? 1 : Math.min(1, (index + part) / total);
  return {
    fill,
    step: current == null ? total : index + 1,
    total,
    current,
    done: current == null,
  };
}

/**
 * The measured goals an outcome needs right now.
 *
 * Reached goals stay, whatever they were for — they are history, and they keep
 * being maintained. Active goals that are not a step of this outcome go. Then
 * the outcome's steps join in order, up to the three-at-once cap.
 */
export function goalsForOutcome(outcome: Outcome, goals: readonly Goal[], today: string, cap: number): Goal[] {
  const kept = goals.filter((goal) => goal.status !== 'active' || outcome.steps.includes(goal.type));
  const next = [...kept];
  for (const step of outcome.steps) {
    if (next.filter((goal) => goal.status === 'active').length >= cap) break;
    if (next.some((goal) => goal.type === step)) continue;
    next.push({ type: step, status: 'active', baseline: null, current: null, since: today });
  }
  return next;
}
