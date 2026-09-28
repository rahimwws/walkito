import {
  GOAL_SPECS,
  goalProgress,
  outcomeProgress,
  type Outcome,
  type AdjustedDay,
  type Goal,
  type GoalType,
  type PlanDay,
  type Rationale,
} from '@/entities/program';
import type { Translate } from '@/shared/lib/i18n';

/**
 * The plan screen, worked out before it is drawn — pure apart from the
 * translator, so every rule in the rework spec can be tested without rendering.
 */

// ── The goal block ───────────────────────────────────────────────────────────

const UNIT: Readonly<Record<GoalType, 'pages.plan.unitPain' | 'pages.plan.unitSeconds' | 'pages.plan.unitReps' | 'pages.plan.unitPercent'>> = {
  pain_free_mornings: 'pages.plan.unitPain',
  arch_hold: 'pages.plan.unitSeconds',
  calf_raises: 'pages.plan.unitReps',
  balance: 'pages.plan.unitSeconds',
  symmetry: 'pages.plan.unitPercent',
};

function figure(type: GoalType, value: number): number {
  // A pain average keeps one decimal; everything else is a whole count.
  return type === 'pain_free_mornings' ? Math.round(value * 10) / 10 : Math.round(value);
}

export type GoalView = {
  title: string;
  explainer: string;
  /** "Rahim, let's make your arch [stronger]." — the bracketed word is a chip. */
  headline: { before: string; lead: string; after: string };
  /** The goal in the user's own numbers: where they are, where it goes, what builds it. */
  detail: string;
  /** "Now 24s" — a label and a value, never an arrow. */
  now: string;
  /** "Goal 60s". */
  target: string;
  /** 0–1. For "lower is better" goals it fills as the number drops. */
  fill: number;
};

export function goalView(t: Translate, goal: Goal, testToday: boolean, name = ''): GoalView {
  const spec = GOAL_SPECS[goal.type];
  const unit = (n: number) => t(UNIT[goal.type], { n: figure(goal.type, n) });
  const named = name.trim().length > 0;
  const nowValue = goal.current == null ? null : unit(goal.current);
  return {
    headline: {
      before: named
        ? t(`pages.plan.headline.${goal.type}.beforeNamed`, { name: name.trim() })
        : t(`pages.plan.headline.${goal.type}.before`),
      lead: t(`pages.plan.headline.${goal.type}.lead`),
      after: t(`pages.plan.headline.${goal.type}.after`),
    },
    detail: testToday
      ? t('pages.plan.goalTestToday')
      : nowValue == null
        ? t('pages.plan.detailFirst', { target: unit(spec.target) })
        : t(`pages.plan.detail.${goal.type}`, { now: nowValue, target: unit(spec.target) }),
    title: t(`pages.week.goal.${goal.type}`),
    explainer: testToday ? t('pages.plan.goalTestToday') : t(`pages.plan.explain.${goal.type}`),
    now: t('pages.plan.goalNow', { value: goal.current == null ? t('pages.plan.unmeasured') : unit(goal.current) }),
    target: t('pages.plan.goalTarget', { value: unit(spec.target) }),
    fill: goalProgress(goal),
  };
}

// ── The big goal ─────────────────────────────────────────────────────────────

export type OutcomeView = {
  /** "Tennis [pain-free]" — the lead is the chip. Either side may be empty. */
  headline: { before: string; lead: string; after: string };
  /** "Step 2 of 4 · Stronger calves", or the all-done line. */
  step: string;
  /** The current step in the user's numbers, or what happens once it is all done. */
  detail: string;
  /** "Now 18" for the current step; empty once done. */
  now: string;
  /** 0–1 across every step. */
  fill: number;
  /** How many steps, for the marks along the line. */
  total: number;
  /** The goal being worked, for the colour. Null once done. */
  current: GoalType | null;
};

/**
 * "{sport} [без боли]" → the words around the bracketed lead, which the card
 * sets as a chip. Where the lead sits is each language's call, so the catalogue
 * marks it inside one whole sentence rather than splitting it into fragments.
 */
export function splitLead(sentence: string): { before: string; lead: string; after: string } {
  const match = /^(.*?)\[(.+?)\](.*)$/.exec(sentence);
  if (match == null) return { before: sentence.trim(), lead: '', after: '' };
  return { before: match[1].trim(), lead: match[2].trim(), after: match[3].trim() };
}

/** The outcome's sentence. Three kinds name the sport; the rest stand alone. */
function sentenceFor(t: Translate, kind: Outcome['kind'], sportName: string, sportFor: string): string {
  switch (kind) {
    case 'painfree':
      return t('pages.plan.outcome.painfree', { sport: sportName });
    case 'stronger':
    case 'injury_free':
      return t(`pages.plan.outcome.${kind}`, { sport: sportFor });
    default:
      return t(`pages.plan.outcome.${kind}`);
  }
}

/**
 * The outcome card: what the person came for, and where they are on the way.
 * The steps are measured goals; the line spans all of them, one share each.
 */
export function outcomeView(
  t: Translate,
  outcome: Outcome,
  goals: readonly Goal[],
  focus: GoalType | null,
  testToday: boolean,
): OutcomeView {
  const progress = outcomeProgress(outcome, goals, focus);
  // "for running" needs its own form in Russian (для бега) and Spanish (para correr).
  const sportFor = t(`pages.plan.outcome.sportFor.${outcome.sport ?? 'none'}`);
  const sportName = t(`pages.plan.outcome.sport.${outcome.sport ?? 'none'}`);
  const headline = splitLead(sentenceFor(t, outcome.kind, sportName, sportFor));
  if (progress.current == null) {
    return {
      headline,
      step: t('pages.plan.outcome.done'),
      detail: t('pages.plan.outcome.doneDetail'),
      now: '',
      fill: 1,
      total: progress.total,
      current: null,
    };
  }
  const goal: Goal =
    goals.find((g) => g.type === progress.current) ??
    { type: progress.current, status: 'active', baseline: null, current: null, since: '' };
  const step = goalView(t, goal, testToday);
  return {
    headline,
    step: t('pages.plan.outcome.step', {
      n: progress.step,
      total: progress.total,
      goal: t(`pages.week.goal.${progress.current}`),
    }),
    detail: step.detail,
    now: step.now,
    fill: progress.fill,
    total: progress.total,
    current: progress.current,
  };
}

// ── The line under the goal ──────────────────────────────────────────────────

/**
 * The rationale, only when it says something the goal block does not. The
 * default line and the new-focus line only restate the goal, so they are
 * dropped; "new this week" stands in when nothing else qualifies.
 */
export function rationaleLine(t: Translate, rationale: Rationale, newExercise: string | null): string | null {
  switch (rationale.kind) {
    case 'first':
    case 'painUp':
    case 'hard':
    case 'easy':
      return t(`pages.week.rationale.${rationale.kind}`);
    case 'painLow':
      return t('pages.week.rationale.painLow', { n: rationale.n ?? 0 });
    case 'default':
    case 'newFocus':
      return newExercise == null ? null : t('pages.week.newThisWeek', { exercise: newExercise });
  }
}

// ── The today card ───────────────────────────────────────────────────────────

const KIND_KEY = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
} as const;

export type TodayVariant = 'session' | 'easy' | 'test' | 'rest' | 'done';

export function todayVariant(day: AdjustedDay, done: boolean): TodayVariant {
  if (done) return 'done';
  if (day.type === 'rest') return 'rest';
  if (day.type === 'test') return 'test';
  return day.reason === 'flare' ? 'easy' : 'session';
}

export function kindName(t: Translate, type: PlanDay['type']): string {
  if (type === 'test') return t('pages.plan.testTitle');
  if (type === 'rest') return t('pages.plan.stripRest');
  return t(KIND_KEY[type]);
}

/** "Strength · arch", "Easy day · seated", "Test day". */
export function todayTitle(t: Translate, day: AdjustedDay, focus: GoalType | null, variant: TodayVariant): string {
  if (variant === 'easy') return t('pages.plan.easyDay');
  if (variant === 'test') return t('pages.plan.testTitle');
  if (day.type === 'rest' || day.type === 'test') return kindName(t, day.type);
  if (focus == null) return kindName(t, day.type);
  return t('pages.plan.todayTitle', { kind: kindName(t, day.type), goal: t(`pages.plan.short.${focus}`) });
}
