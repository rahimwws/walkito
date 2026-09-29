import type { GoalType, RetestMeasurements, RetestResult } from '@/entities/program';

/**
 * The arithmetic of a test day: what each test measures, how long it may run,
 * the order it is taken in, and how its numbers read against the goals.
 *
 * Pure, and kept apart from the flow that draws it for the same reason
 * `count-in.ts` and `tempo.ts` are: a figure derived from elapsed time is
 * something a test can pin down, and the same figure worked out inside an
 * interval callback is something that can only be watched.
 *
 * Types only from the program entity. The goal targets are handed in rather
 * than imported, so this file stays loadable in a plain test run — and so the
 * windows below are always the targets the plan screen quotes, never a copy of
 * them that drifted.
 */

export type TestKind = 'calf' | 'arch' | 'balance';

/** The order the tests are taken in. Calf raises first, while the legs are
 * fresh: they are the test most changed by what came before them. */
export const TEST_ORDER: readonly TestKind[] = ['calf', 'arch', 'balance'];

export type Leg = 'left' | 'right';

/**
 * One raise every two seconds — up on the tick, down before the next.
 *
 * The old test was "calf raises to failure", counted by the person doing them,
 * which made the number a measure of how carefully somebody counts while their
 * calf is burning. A paced test counts for them, and a raise that cannot keep
 * the pace is where the set ends — the same standard every time it is taken.
 */
export const CALF_PACE_MS = 2000;

/** The goals a test day measures. Morning pain is the check-ins' business. */
export type MeasuredGoal = Extract<GoalType, 'arch_hold' | 'calf_raises' | 'balance' | 'symmetry'>;

/** The order results are read in: the three held or counted figures, then the
 * gap the two calf sets leave between them. Stable, so a second test day
 * reads in the same places as the first. */
export const RESULT_ORDER: readonly MeasuredGoal[] = ['arch_hold', 'calf_raises', 'balance', 'symmetry'];

/** What the program's `GOAL_SPECS` says about each goal, as far as a test day
 * needs it. `GOAL_SPECS` itself satisfies this. */
export type GoalTargets = Readonly<
  Record<MeasuredGoal, { readonly target: number; readonly lowerIsBetter: boolean }>
>;

/** Which goal each test's number moves. */
export const GOAL_OF_TEST: Readonly<Record<TestKind, MeasuredGoal>> = {
  calf: 'calf_raises',
  arch: 'arch_hold',
  balance: 'balance',
};

// ── Sides ───────────────────────────────────────────────────────────────────

/**
 * The legs in the order they are tested: the sore one first.
 *
 * First because it is the one being rehabilitated, and it deserves the fresher
 * attempt. With both sore, or no answer, it is simply left then right — the
 * same convention the stored results use, where the first column is the sore
 * side.
 */
export function legOrder(side: 'left' | 'right' | 'both' | null | undefined): readonly [Leg, Leg] {
  return side === 'right' ? ['right', 'left'] : ['left', 'right'];
}

/** The leg the balance test stands on: the sore one, as the calf test's first. */
export function balanceLeg(side: 'left' | 'right' | 'both' | null | undefined): Leg {
  return legOrder(side)[0];
}

// ── The clock ───────────────────────────────────────────────────────────────

/**
 * How long a test may run, in milliseconds: exactly as long as it takes to
 * reach the goal.
 *
 * A countdown rather than a stopwatch, because a countdown has an end — the
 * person holding an arch knows how much is left and is told when it is done,
 * where a stopwatch runs on for as long as anyone is willing to stand there.
 * Ending at the goal is what keeps the test short: a figure past the target
 * would change nothing the plan does with it.
 *
 * With one exception, which is why the second calf set is given the first
 * one's figure. The two sets are also the symmetry reading, and a second leg
 * stopped at the calf goal hides how far past it that leg could go: 23 raises
 * on the sore leg against a good leg cut off at 25 read as an 8% gap, under the
 * target, when the good leg had 40 in it. So the second set runs until the gap
 * would be shown at the target at least (`raisesToShowGap`) — a few raises past
 * the goal at most, and only when the first set came close to it. A good leg
 * that runs out that window reads a gap the symmetry goal is not reached by,
 * which is the truth, if not all of it.
 *
 * A first set that ran out the goal itself leaves the second at the goal. Past
 * it the test counts neither leg, so two legs that both reach it read as level:
 * neither is short of anything the plan asks of a calf.
 */
export function testWindowMs(kind: TestKind, targets: GoalTargets, firstSet?: number | null): number {
  switch (kind) {
    case 'calf': {
      const goal = targets.calf_raises.target;
      if (firstSet == null || firstSet >= goal) return goal * CALF_PACE_MS;
      return Math.max(goal, raisesToShowGap(firstSet, targets.symmetry.target)) * CALF_PACE_MS;
    }
    case 'arch':
      return targets.arch_hold.target * 1000;
    case 'balance':
      return targets.balance.target * 1000;
  }
}

/**
 * The gap between two counts, in whole percent of the larger — the program's
 * own `symmetryPct`, repeated here because this file takes nothing but types
 * from the program entity. The tests hold the two to the same answers.
 */
export function gapPct(a: number, b: number): number {
  const strong = Math.max(a, b);
  const weak = Math.min(a, b);
  return strong === 0 ? 0 : Math.round(((strong - weak) / strong) * 100);
}

/**
 * The fewest raises a second leg needs for the gap to `first` to read at
 * `gapTarget` or more — the point past which counting that leg further cannot
 * move the symmetry goal.
 */
export function raisesToShowGap(first: number, gapTarget: number): number {
  const base = Math.max(1, Math.ceil(first));
  // Bounded for a target no gap can reach (100% needs a first set of nothing).
  for (let raises = base; raises < base * 100; raises += 1) {
    if (gapPct(first, raises) >= gapTarget) return raises;
  }
  return base * 100;
}

function clampElapsed(elapsedMs: number, windowMs: number): number {
  if (!Number.isFinite(elapsedMs) || elapsedMs <= 0) return 0;
  return Math.min(elapsedMs, windowMs);
}

/**
 * What the test has measured `elapsedMs` in: whole raises for the calf test,
 * whole seconds for the holds.
 *
 * Whole, and rounded down. A raise is counted once it is complete and a second
 * once it has been held all the way through; crediting the one in progress
 * would round somebody up into a figure they did not reach, which is the one
 * direction a measurement must never fail in (see `levels.ts`).
 */
export function measuredAt(kind: TestKind, elapsedMs: number, windowMs: number): number {
  const elapsed = clampElapsed(elapsedMs, windowMs);
  return Math.floor(elapsed / (kind === 'calf' ? CALF_PACE_MS : 1000));
}

/** The figure a test that ran to its end reports: the goal itself. */
export function fullMeasure(kind: TestKind, windowMs: number): number {
  return measuredAt(kind, windowMs, windowMs);
}

/**
 * The whole seconds still on the countdown.
 *
 * Rounded up, the way every countdown reads: it shows 30 for the whole of the
 * first second and reaches 0 only at the end, never a second early.
 */
export function secondsLeftAt(elapsedMs: number, windowMs: number): number {
  return Math.max(0, Math.ceil((windowMs - clampElapsed(elapsedMs, windowMs)) / 1000));
}

/** A countdown as a clock face, "0:42". Digits only, so it needs no language. */
export function clockLabel(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
}

/** Which half of a paced raise `elapsedMs` falls in: up on the tick, then down. */
export function repPhaseAt(elapsedMs: number): 'up' | 'down' {
  const within = ((elapsedMs % CALF_PACE_MS) + CALF_PACE_MS) % CALF_PACE_MS;
  return within < CALF_PACE_MS / 2 ? 'up' : 'down';
}

/** How much of the window is left, 1 at the start and 0 at the end — the ring. */
export function remainingFraction(elapsedMs: number, windowMs: number): number {
  if (windowMs <= 0) return 0;
  return 1 - clampElapsed(elapsedMs, windowMs) / windowMs;
}

/** A corrected figure, kept inside what the test could have measured. */
export function clampEntry(value: number, max: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(max, Math.round(value)));
}

// ── The order of the day ────────────────────────────────────────────────────

/**
 * One stop on the way through: a test, and for the calf test which of its two
 * legs. The holds have one leg only.
 */
export type Station = { kind: TestKind; leg: 0 | 1 };

export const STATIONS: readonly Station[] = [
  { kind: 'calf', leg: 0 },
  { kind: 'calf', leg: 1 },
  { kind: 'arch', leg: 0 },
  { kind: 'balance', leg: 0 },
];

/** The stop after this one, or null after the last test. */
export function nextStation(station: Station): Station | null {
  const at = STATIONS.findIndex((s) => s.kind === station.kind && s.leg === station.leg);
  return at < 0 ? null : (STATIONS[at + 1] ?? null);
}

/** 0-based position of a test among the three — the progress bar's segment. */
export function testIndex(kind: TestKind): number {
  return TEST_ORDER.indexOf(kind);
}

export type SegmentState = 'todo' | 'active' | 'done';

/**
 * The progress bar across the top: one segment per test.
 *
 * `null` is the intro, where nothing has begun; `'results'` is the end, where
 * everything has. A test is done once its figures are confirmed — both legs,
 * for the calf test — not once its clock stops.
 */
export function segmentsFor(position: TestKind | 'results' | null): SegmentState[] {
  if (position === 'results') return TEST_ORDER.map(() => 'done');
  const current = position == null ? -1 : testIndex(position);
  return TEST_ORDER.map((_, i) => (current < 0 ? 'todo' : i < current ? 'done' : i === current ? 'active' : 'todo'));
}

/** What has been measured so far, in the order it was taken. */
export type Taken = {
  /** The two calf sets, sore leg first. */
  calf: readonly [number | null, number | null];
  arch: number | null;
  balance: number | null;
};

export const NOTHING_TAKEN: Taken = { calf: [null, null], arch: null, balance: null };

/** Records one confirmed figure. */
export function withTaken(taken: Taken, station: Station, value: number): Taken {
  switch (station.kind) {
    case 'calf':
      return {
        ...taken,
        calf: station.leg === 0 ? [value, taken.calf[1]] : [taken.calf[0], value],
      };
    case 'arch':
      return { ...taken, arch: value };
    case 'balance':
      return { ...taken, balance: value };
  }
}

/**
 * The numbers as the program stores them, or null while any is missing.
 *
 * `calf` is the sore leg — the first set — and `otherCalf` the second, which
 * is the column convention every stored result already follows.
 */
export function toMeasurements(taken: Taken): RetestMeasurements | null {
  const [first, second] = taken.calf;
  if (first == null || second == null || taken.arch == null || taken.balance == null) return null;
  return { calf: first, otherCalf: second, arch: taken.arch, balance: taken.balance };
}

// ── Reading the results ─────────────────────────────────────────────────────

export type GoalValues = Readonly<Record<MeasuredGoal, number>>;

/**
 * A stored result, as the goals read it.
 *
 * The same mapping the plan applies when it moves goals on (`measurementsFrom`
 * in the plan store): the arch and balance figures as measured, calf raises as
 * the weaker leg, and symmetry as the gap between the two. Read the same way
 * here so the results screen and the plan screen quote one number, not two.
 */
export function goalValuesOf(result: Pick<RetestResult, 'calf' | 'arch' | 'balance' | 'symmetryPct'>): GoalValues {
  return {
    arch_hold: result.arch.left,
    calf_raises: Math.min(result.calf.left, result.calf.right),
    balance: result.balance.left,
    symmetry: result.symmetryPct,
  };
}

/**
 * Each leg's calf figure by its real name, from a result stored sore-side
 * first. Someone whose right leg is the sore one has it in the left column.
 */
export function legsOf(
  result: Pick<RetestResult, 'calf'>,
  side: 'left' | 'right' | 'both' | null | undefined,
): { left: number; right: number } {
  return side === 'right'
    ? { left: result.calf.right, right: result.calf.left }
    : { left: result.calf.left, right: result.calf.right };
}

/** Whether a figure has reached its goal. The gap has to be under its target,
 * not at it — the program's own rule (`measuredGoalReached`). */
export function meetsTarget(type: MeasuredGoal, value: number, targets: GoalTargets): boolean {
  const { target, lowerIsBetter } = targets[type];
  return lowerIsBetter ? value < target : value >= target;
}

/** A bar that is not at its goal never draws as full, however close: a bar
 * that looks finished beside "1 to go" reads as a contradiction. */
const OPEN_FILL_MAX = 0.96;

export type ResultRow = {
  type: MeasuredGoal;
  value: number;
  target: number;
  lowerIsBetter: boolean;
  /**
   * The change since the last test, signed so positive is always better —
   * for the gap, a smaller figure. Null on a first test, which has nothing to
   * change from.
   */
  change: number | null;
  /** How far along the bar is drawn, 0–1. */
  fill: number;
  reached: boolean;
  /** How far is still left, in the goal's own unit. 0 once reached. For the
   * gap, the points it has to come down to be under the target. */
  toGo: number;
};

/**
 * The results, one row per measured goal, in `RESULT_ORDER`.
 *
 * `reached` is what the test day itself reached (`TestDayOutcome.reached`); a
 * figure already past its target from an earlier test reads as reached too,
 * so a goal met a month ago does not say "0 to go".
 */
export function resultRows(
  latest: GoalValues,
  previous: GoalValues | null,
  reached: readonly GoalType[],
  targets: GoalTargets,
): ResultRow[] {
  return RESULT_ORDER.map((type): ResultRow => {
    const { target, lowerIsBetter } = targets[type];
    const value = latest[type];
    const before = previous?.[type];
    const change = before == null ? null : lowerIsBetter ? before - value : value - before;
    const done = reached.includes(type) || meetsTarget(type, value, targets);
    // The gap is closer the smaller it is; everything else, the larger.
    const ratio = lowerIsBetter ? (value <= 0 ? 1 : target / value) : target <= 0 ? 1 : value / target;
    const fill = done ? 1 : Math.max(0, Math.min(OPEN_FILL_MAX, ratio));
    const toGo = done ? 0 : lowerIsBetter ? Math.max(0, value - target + 1) : Math.max(0, target - value);
    return { type, value, target, lowerIsBetter, change, fill, reached: done, toGo };
  });
}
