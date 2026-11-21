import type { HealthSignals } from '@/entities/health';

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
