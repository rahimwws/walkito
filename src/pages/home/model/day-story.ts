import type { HealthSignals } from '@/entities/health/model/metrics';

/**
 * What Walkito says about yesterday, from Health: the one thing worth
 * mentioning, first that applies wins.
 *
 * Load before recovery, recovery before gait, gait before a plain account of
 * the day. Each is something the plan acts on or a person would want to know,
 * never a number for its own sake. Null without fresh data: a line about
 * "yesterday" from a cache that last ran the day before would be about the
 * wrong day.
 *
 * Shown, never sent anywhere: it is made of steps, sleep and heart rate.
 */
export type DayStory =
  | { id: 'big-run'; km: number }
  | { id: 'big-sport'; minutes: number }
  | { id: 'on-feet'; hours: number; limit: number }
  | { id: 'big-day'; steps: number; usual: number }
  | { id: 'sleep-week'; hours: number }
  | { id: 'resting-hr'; bpm: number }
  | { id: 'stride-shorter' }
  | { id: 'stride-back' }
  | { id: 'yesterday'; steps: number; hours: number | null };

export type DayStoryId = DayStory['id'];

/** Yesterday's steps over the usual at or above this is a big day: the plan's
 * own `HEAVY_DAY_RATIO`. */
const BIG_DAY_RATIO = 1.4;
/** Fewer steps than this yesterday and the plain account says nothing. */
const MIN_STEPS = 500;

export function dayStory(signals: HealthSignals, today: string, strideWasShorter = false): DayStory | null {
  if (signals.asOf !== today) return null;

  if (signals.bigRunYesterday && signals.longestRunYesterdayKm != null) {
    return { id: 'big-run', km: signals.longestRunYesterdayKm };
  }
  if (signals.bigSportYesterday && signals.sportMinYesterday != null) {
    return { id: 'big-sport', minutes: signals.sportMinYesterday };
  }
  if (
    signals.hoursOnFeetYesterday != null &&
    signals.onFeetThreshold != null &&
    signals.hoursOnFeetYesterday >= signals.onFeetThreshold
  ) {
    return { id: 'on-feet', hours: signals.hoursOnFeetYesterday, limit: signals.onFeetThreshold };
  }
  if (
    signals.stepsYesterday != null &&
    signals.stepsBaseline != null &&
    signals.stepsBaseline > 0 &&
    signals.stepsYesterday / signals.stepsBaseline >= BIG_DAY_RATIO
  ) {
    return { id: 'big-day', steps: signals.stepsYesterday, usual: signals.stepsBaseline };
  }
  if (signals.sleepShort && signals.sleepMeanMin != null) {
    return { id: 'sleep-week', hours: signals.sleepMeanMin / 60 };
  }
  if (signals.restingHRElevated && signals.restingHRDelta != null) {
    return { id: 'resting-hr', bpm: signals.restingHRDelta };
  }
  if (signals.stepLengthTrend === 'shorter') return { id: 'stride-shorter' };
  if (strideWasShorter && signals.stepLengthTrend === 'stable') return { id: 'stride-back' };
  if (signals.stepsYesterday != null && signals.stepsYesterday >= MIN_STEPS) {
    return { id: 'yesterday', steps: signals.stepsYesterday, hours: signals.hoursOnFeetYesterday };
  }
  return null;
}

// ── The "why" sheet ─────────────────────────────────────────────────────────

/**
 * One row of "what today's plan was built from": yesterday's figure beside
 * the person's own usual. Only rows Health actually supplied; a row with no
 * value is not drawn rather than drawn empty.
 */
export type WhyRowId = 'onFeet' | 'steps' | 'distance' | 'sport' | 'sleep' | 'stride' | 'restingHr';

export type WhyRow = {
  id: WhyRowId;
  value: number;
  /** The person's usual, in the same unit, when there is enough history. */
  usual: number | null;
};

export function whyRows(signals: HealthSignals): WhyRow[] {
  const rows: WhyRow[] = [];
  const add = (id: WhyRowId, value: number | null, usual: number | null) => {
    if (value != null && Number.isFinite(value)) rows.push({ id, value, usual });
  };
  add('onFeet', signals.hoursOnFeetYesterday, signals.hoursOnFeetBaseline);
  add('steps', signals.stepsYesterday, signals.stepsBaseline);
  add('distance', signals.distanceYesterdayKm, signals.distanceBaselineKm);
  if (signals.sportMinYesterday != null && signals.sportMinYesterday > 0) add('sport', signals.sportMinYesterday, null);
  add('sleep', signals.sleepLastNightMin, signals.sleepMeanMin);
  add('stride', signals.stepLengthWeek, signals.stepLengthBaseline);
  if (signals.restingHRDelta != null && Math.abs(signals.restingHRDelta) >= 1) add('restingHr', signals.restingHRDelta, null);
  return rows;
}
