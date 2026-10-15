/**
 * "Legs ready today": one 0-100 figure from what the morning already knows.
 *
 * Three inputs, each turned into its own 0-100 part, then averaged by weight:
 *
 * - **This morning's pain** (the check-in, 0-10), weight 0.5: `100 - pain * 10`.
 * - **Last night's sleep**, weight 0.25: 4 h or less is 0, 8 h or more is 100,
 *   a straight line between.
 * - **Yesterday's steps against their usual** (the 28-day mean), weight 0.25:
 *   up to 1.1x usual is 100, falling in a straight line to 40 at 2x and
 *   staying there. A quiet day is rest, never a penalty; a big one only takes
 *   some of the room away.
 *
 * A missing input drops out and the others share its weight. Nothing known is
 * null: the gauge then asks for the check-in instead of guessing.
 *
 * Never sent to analytics: it is made of pain, sleep and steps.
 */

export type ReadinessInput = {
  /** Today's check-in, 0-10, or null when not answered yet. */
  pain: number | null;
  sleepHours: number | null;
  stepsYesterday: number | null;
  /** Their usual day of steps; null or 0 while there is no history. */
  stepsUsual: number | null;
};

export type ReadinessBand = 'easy' | 'steady' | 'ready' | 'push';

export const READINESS_WEIGHTS = { pain: 0.5, sleep: 0.25, steps: 0.25 } as const;

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

export function painPart(pain: number): number {
  return clamp(100 - pain * 10, 0, 100);
}

export function sleepPart(hours: number): number {
  return clamp(((hours - 4) / 4) * 100, 0, 100);
}

export function stepsPart(yesterday: number, usual: number): number {
  const ratio = yesterday / usual;
  if (ratio <= 1.1) return 100;
  return clamp(100 - ((ratio - 1.1) / 0.9) * 60, 40, 100);
}

/** Each input as its own 0-100 part, or null where it is not known. What
 * the score is made of, for a screen that shows the pieces. */
export type ReadinessParts = { pain: number | null; sleep: number | null; steps: number | null };

export const READINESS_PART_KEYS = ['pain', 'sleep', 'steps'] as const;
export type ReadinessPartKey = (typeof READINESS_PART_KEYS)[number];

export const isReadinessPartKey = (id: string): id is ReadinessPartKey =>
  (READINESS_PART_KEYS as readonly string[]).includes(id);

/** What a sheet over the gauge is about: one part, or the score itself. */
export type ReadinessFocus = ReadinessPartKey | 'score';

export const isReadinessFocus = (id: string): id is ReadinessFocus => id === 'score' || isReadinessPartKey(id);

/**
 * What each part was made from, in the units a person reads: the check-in,
 * last night's sleep in minutes, yesterday's steps and their usual day. For
 * the sheet that explains the score; never sent anywhere.
 */
export type ReadinessDetails = {
  pain: number | null;
  sleepMinutes: number | null;
  stepsYesterday: number | null;
  stepsUsual: number | null;
};

export function readinessParts(input: ReadinessInput): ReadinessParts {
  return {
    pain: input.pain != null && Number.isFinite(input.pain) ? Math.round(painPart(input.pain)) : null,
    sleep:
      input.sleepHours != null && Number.isFinite(input.sleepHours) && input.sleepHours > 0
        ? Math.round(sleepPart(input.sleepHours))
        : null,
    steps:
      input.stepsYesterday != null && input.stepsUsual != null && input.stepsUsual > 0
        ? Math.round(stepsPart(input.stepsYesterday, input.stepsUsual))
        : null,
  };
}

export function readinessScore(input: ReadinessInput): number | null {
  const parts: Array<[number, number]> = [];
  if (input.pain != null && Number.isFinite(input.pain)) parts.push([painPart(input.pain), READINESS_WEIGHTS.pain]);
  if (input.sleepHours != null && Number.isFinite(input.sleepHours) && input.sleepHours > 0) {
    parts.push([sleepPart(input.sleepHours), READINESS_WEIGHTS.sleep]);
  }
  if (input.stepsYesterday != null && input.stepsUsual != null && input.stepsUsual > 0) {
    parts.push([stepsPart(input.stepsYesterday, input.stepsUsual), READINESS_WEIGHTS.steps]);
  }
  if (parts.length === 0) return null;
  const weight = parts.reduce((sum, [, w]) => sum + w, 0);
  const score = parts.reduce((sum, [part, w]) => sum + part * w, 0) / weight;
  return Math.round(clamp(score, 0, 100));
}

/** The word under the number. Every band is a way to spend the day, none of
 * them a warning. */
export function readinessBand(score: number): ReadinessBand {
  if (score < 40) return 'easy';
  if (score < 60) return 'steady';
  if (score < 80) return 'ready';
  return 'push';
}

export const BAND_KEYS = {
  easy: 'home.readiness.bandEasy',
  steady: 'home.readiness.bandSteady',
  ready: 'home.readiness.bandReady',
  push: 'home.readiness.bandPush',
} as const;

// ── What Walkito says: the legs right now ──────────────────────────────────

/**
 * How the legs and feet are this morning, in one word Walkito can say. Only
 * the body's state, never the plan or a test. The first that applies wins:
 * no check-in asks for one; a sore morning (7+) comes before any trend; then a
 * change of 2 or more against yesterday's morning; then a big day yesterday
 * (1.4x their usual steps or more); then a short night (under 6 h); then the
 * morning's own reading.
 *
 * Never sent to analytics: it is made of pain, sleep and steps.
 */
export const LEG_STATES = ['unknown', 'sore', 'calmer', 'tender', 'worked', 'tired', 'achy', 'fine', 'fresh'] as const;
export type LegStateId = (typeof LEG_STATES)[number];

export type LegStateInput = {
  /** This morning's check-in, 0-10, or null before it is answered. */
  pain: number | null;
  /** Yesterday morning's check-in, or null when there was none. */
  painYesterday: number | null;
  stepsYesterday: number | null;
  /** Their usual day of steps; null or 0 while there is no history. */
  stepsUsual: number | null;
  sleepMinutes: number | null;
};

export type LegState = {
  id: LegStateId;
  pain: number | null;
  /** Today's pain minus yesterday's, when both are known. */
  painChange: number | null;
  /** Yesterday's steps over their usual, when both are known. */
  stepsRatio: number | null;
  sleepMinutes: number | null;
};

export const LEG_KEYS = {
  unknown: 'home.legState.unknown',
  sore: 'home.legState.sore',
  calmer: 'home.legState.calmer',
  tender: 'home.legState.tender',
  worked: 'home.legState.worked',
  tired: 'home.legState.tired',
  achy: 'home.legState.achy',
  fine: 'home.legState.fine',
  fresh: 'home.legState.fresh',
} as const satisfies Record<LegStateId, string>;

export const isLegStateId = (id: string): id is LegStateId => (LEG_STATES as readonly string[]).includes(id);

const known = (n: number | null): n is number => n != null && Number.isFinite(n);

export function legState(input: LegStateInput): LegState {
  const pain = known(input.pain) ? input.pain : null;
  const painChange = pain != null && known(input.painYesterday) ? pain - input.painYesterday : null;
  const stepsRatio =
    known(input.stepsYesterday) && known(input.stepsUsual) && input.stepsUsual > 0
      ? input.stepsYesterday / input.stepsUsual
      : null;
  const sleepMinutes = known(input.sleepMinutes) && input.sleepMinutes > 0 ? input.sleepMinutes : null;
  const of = (id: LegStateId): LegState => ({ id, pain, painChange, stepsRatio, sleepMinutes });

  if (pain == null) return of('unknown');
  if (pain >= 7) return of('sore');
  if (painChange != null && painChange <= -2) return of('calmer');
  if (painChange != null && painChange >= 2) return of('tender');
  if (stepsRatio != null && stepsRatio >= 1.4) return of('worked');
  if (sleepMinutes != null && sleepMinutes < 6 * 60) return of('tired');
  if (pain >= 4) return of('achy');
  if (pain >= 1) return of('fine');
  return of('fresh');
}
