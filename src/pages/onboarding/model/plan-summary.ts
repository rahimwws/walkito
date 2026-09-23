import { BLOCK_LENGTH, WEEK, blocksFor, type PlanLength } from '@/entities/program';
import type { Translate } from '@/shared/lib/i18n';

import type { SportKey } from './personalise';
import { PLANS, recommendedIndex } from './plans';
import { PAIN_NOUN, primaryPain, volumeLine } from './reflection';
import type { Phrase } from './steps';

/** One stretch of the plan, as a row. */
export type PlanPhase = {
  /** "Weeks 1–2". */
  weeks: string;
  /** What happens in them. */
  label: string;
};

export type PlanSummary = {
  /** The plan's own name, set large. */
  wordmark: string;
  weeks: number;
  /** Loaded days a week — the three the protocol is built on. */
  strengthDays: number;
  /**
   * Their answers, read back, or null when they answered neither question.
   *
   * Null rather than a generic sentence: a screen whose whole claim is that it
   * was built from your answers should say nothing at all rather than say
   * something that would be true of anyone.
   */
  reflection: string | null;
  phases: readonly PlanPhase[];
};

export type PlanSummaryInput = {
  t: Translate;
  runner: string | null;
  sport: SportKey | null;
  pain: readonly string[];
  load: readonly string[];
};

/** What each stretch of the plan is for. Three, because the programme has three
 * shapes to it however many blocks that takes: calm it, build it, load it. */
const PHASE_LABELS: readonly Phrase[] = [
  (t) => t('onboarding.plan.phaseSettle'),
  (t) => t('onboarding.plan.phaseBuild'),
  (t) => t('onboarding.plan.phaseLoad'),
];

const WEEKS_PER_BLOCK = BLOCK_LENGTH / 7;

/** "Weeks 1–2", or "Week 3" where a stretch is a single week. Two templates
 * because the plural noun is not the singular with an s in every language. */
function weekRange(t: Translate, fromBlock: number, toBlock: number): string {
  const first = (fromBlock - 1) * WEEKS_PER_BLOCK + 1;
  const last = toBlock * WEEKS_PER_BLOCK;
  return first === last
    ? t('onboarding.plan.week', { n: first })
    : t('onboarding.plan.weeks', { from: first, to: last });
}

/**
 * The plan's three phases, grouped from its blocks.
 *
 * The first block on its own, the last two together, everything between them in
 * the middle — which on the twelve-week plan falls out as 1–2, 3–8 and 9–12,
 * and on the six-week one as 1–2, 3–4 and 5–6. Derived rather than written down
 * so the rows cannot describe a shape the programme no longer has.
 */
function phasesFor(t: Translate, planLength: PlanLength): readonly PlanPhase[] {
  const blocks = blocksFor(planLength);
  const total = blocks.length;
  const tailSize = total > 3 ? 2 : 1;

  const bounds: [number, number][] = [
    [1, 1],
    [2, total - tailSize],
    [total - tailSize + 1, total],
  ];

  return bounds
    .map(([from, to], i) => ({
      weeks: weekRange(t, from, to),
      label: PHASE_LABELS[i](t),
      empty: from > to,
    }))
    // A plan short enough that the middle stretch is empty drops it rather than
    // printing a range that runs backwards. Filtered after the labels are
    // attached, so a dropped middle cannot shift "back to full load" onto the
    // row before it.
    .filter((phase) => !phase.empty)
    .map(({ empty: _empty, ...phase }) => phase);
}

/**
 * Their answers, and what the plan does about them.
 *
 * Only the two facts the flow actually collects — where it hurts, and how much
 * they are doing. How long it has been going on is deliberately absent for the
 * reason `reflection.ts` gives about its own line: no step asks for it, and
 * inventing a duration on the one screen whose job is to prove the app was
 * listening would undo exactly what the screen is for.
 *
 * The closing clause is not copy either. Block one prescribes no loaded work at
 * all — see `FIRST_LOADED_BLOCK` — so "before any loading" is a description of
 * the table rather than a promise about it.
 *
 * Three whole sentences rather than one assembled from an opening, a settling
 * clause and a spelled-out number. The number is spelled inside each template
 * because a digit in the middle of a sentence reads as data and this clause is
 * prose; `WEEKS_PER_BLOCK` has been two for as long as the programme has had
 * blocks, and moving it means rewriting these three lines in all three
 * languages rather than changing a constant.
 */
function reflectionFor(
  t: Translate,
  sport: SportKey | null,
  pain: readonly string[],
  load: readonly string[],
): string | null {
  const key = primaryPain(pain);
  const noun = key != null ? PAIN_NOUN[key] : null;
  const volume = volumeLine(t, sport, load);

  if (noun != null && volume != null) {
    return t('onboarding.plan.reflectionBoth', { pain: noun(t), volume });
  }
  if (noun != null) return t('onboarding.plan.reflectionPain', { pain: noun(t) });
  if (volume != null) return t('onboarding.plan.reflectionVolume', { volume });
  return null;
}

/**
 * The one plan, built from the answers.
 *
 * There is no choice any more. The flow spends fifteen screens learning enough
 * to make a recommendation, and then asking "which of these two?" hands that
 * work straight back to the user — who has no way to answer it and every reason
 * to suspect the question is really about price. The length is still decided by
 * what they said about themselves; it is simply decided rather than offered.
 */
export function planSummary({ t, runner, sport, pain, load }: PlanSummaryInput): PlanSummary {
  const plan = PLANS[recommendedIndex(runner)];
  const planLength: PlanLength = plan.weeks >= 12 ? 84 : 42;

  return {
    wordmark: plan.wordmark,
    weeks: plan.weeks,
    strengthDays: WEEK.filter((day) => day.kind === 'strength').length,
    reflection: reflectionFor(t, sport, pain, load),
    phases: phasesFor(t, planLength),
  };
}
