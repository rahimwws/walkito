import { BLOCK_LENGTH, WEEK, blocksFor, type PlanLength } from '@/entities/program';

import type { SportKey } from './personalise';
import { PLANS, recommendedIndex } from './plans';
import { PAIN_NOUN, cadence, loadLabel, primaryPain } from './reflection';

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
  runner: string | null;
  sport: SportKey | null;
  pain: readonly string[];
  load: readonly string[];
};

/** What each stretch of the plan is for. Three, because the programme has three
 * shapes to it however many blocks that takes: calm it, build it, load it. */
const PHASE_LABELS = [
  'settle the irritation',
  'build the arch',
  'back to full load',
] as const;

const WEEKS_PER_BLOCK = BLOCK_LENGTH / 7;

/** "Weeks 1–2", or "Week 3" where a stretch is a single week. */
function weekRange(fromBlock: number, toBlock: number): string {
  const first = (fromBlock - 1) * WEEKS_PER_BLOCK + 1;
  const last = toBlock * WEEKS_PER_BLOCK;
  return first === last ? `Week ${first}` : `Weeks ${first}–${last}`;
}

/**
 * The plan's three phases, grouped from its blocks.
 *
 * The first block on its own, the last two together, everything between them in
 * the middle — which on the twelve-week plan falls out as 1–2, 3–8 and 9–12,
 * and on the six-week one as 1–2, 3–4 and 5–6. Derived rather than written down
 * so the rows cannot describe a shape the programme no longer has.
 */
function phasesFor(planLength: PlanLength): readonly PlanPhase[] {
  const blocks = blocksFor(planLength);
  const total = blocks.length;
  const tailSize = total > 3 ? 2 : 1;

  const bounds: [number, number][] = [
    [1, 1],
    [2, total - tailSize],
    [total - tailSize + 1, total],
  ];

  return bounds
    // A plan short enough that the middle stretch is empty drops it rather than
    // printing a range that runs backwards.
    .filter(([from, to]) => from <= to)
    .map(([from, to], i) => ({ weeks: weekRange(from, to), label: PHASE_LABELS[i] }));
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
 */
function reflectionFor(
  sport: SportKey | null,
  pain: readonly string[],
  load: readonly string[],
): string | null {
  const key = primaryPain(pain);
  const noun = key != null ? PAIN_NOUN[key] : null;
  const band = loadLabel(sport, load);
  const volume = band != null ? `${band} ${cadence(sport)}` : null;

  const facts = [noun, volume].filter((part): part is string => part != null);
  if (facts.length === 0) return null;

  const opening = facts.join(', and ');
  const settling = noun != null ? 'calm things down' : 'build a base';
  // Spelled, not figured. A digit in the middle of a sentence reads as data,
  // and this clause is prose — the numbers on this screen belong in the rows.
  const spelled = WEEKS_PER_BLOCK === 2 ? 'two' : String(WEEKS_PER_BLOCK);
  return `${opening}. The first ${spelled} weeks ${settling} before any loading.`;
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
export function planSummary({ runner, sport, pain, load }: PlanSummaryInput): PlanSummary {
  const plan = PLANS[recommendedIndex(runner)];
  const planLength: PlanLength = plan.weeks >= 12 ? 84 : 42;

  return {
    wordmark: plan.wordmark,
    weeks: plan.weeks,
    strengthDays: WEEK.filter((day) => day.kind === 'strength').length,
    reflection: reflectionFor(sport, pain, load),
    phases: phasesFor(planLength),
  };
}
