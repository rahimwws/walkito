/**
 * The ankle bend, from the phone's accelerometer.
 *
 * The phone lies flat against the front of the shin, top edge up. Sitting with
 * the knee over the ankle the shin is upright; sliding the foot back with the
 * heel still on the floor tips it forward, and how far it tips before the
 * heel wants to lift is how far the ankle bends. A phone held still feels
 * gravity alone, so the tilt of its long axis from upright is the tilt of the
 * shin: the measurement a clinician takes with an inclinometer on the tibia.
 *
 * Pure, so the rules are tested without a sensor. Nothing here names a normal
 * range: the number is a starting point for this person, never a verdict.
 */

/** One accelerometer sample, in g. */
export type Vector = { x: number; y: number; z: number };

const DEGREES = 180 / Math.PI;

/**
 * How far the phone's long axis is from upright, in degrees: 0 standing on
 * its end, 90 lying flat. Null while the phone is being moved about, when
 * what it feels is no longer gravity alone.
 */
export function tiltOf({ x, y, z }: Vector): number | null {
  const norm = Math.hypot(x, y, z);
  if (norm < 0.7 || norm > 1.3) return null;
  return Math.acos(Math.min(1, Math.abs(y) / norm)) * DEGREES;
}

/** How long the shin has to stay put for the angle to be taken. */
export const STEADY_MS = 1200;
/** How much it may drift in that time and still count as still. */
const STEADY_RANGE = 2.5;
/** The least bend that is read as one: under it the shin has not moved. */
const LEAST = 10;
/** How far past the starting position it must have gone. Somebody who starts
 * with the foot already tucked back is not measured where they sat down. */
const RISE = 6;
/** Past this the phone is lying on a thigh or a table, not on a shin. */
const MOST = 65;
/** Each sample moves the shown angle this share of the way: enough to take
 * a hand's tremor out, not enough to lag behind the leg. */
const SMOOTH = 0.25;

export type Reading = {
  /** The angle to show now, smoothed. */
  readonly angle: number;
  /** The lowest angle seen: where the shin started from. */
  readonly low: number;
  /** The last `STEADY_MS` of samples. */
  readonly recent: readonly { at: number; angle: number }[];
  /** The bend, once the shin has stopped at it. Whole degrees. */
  readonly result: number | null;
};

export const NO_READING: Reading = { angle: 0, low: Number.POSITIVE_INFINITY, recent: [], result: null };

/**
 * One more sample. The reading is done (`result`) once the shin has moved
 * forward from where it started and then held still: the average of that
 * still second, which is steadier than any one sample of it.
 */
export function feed(reading: Reading, tilt: number | null, at: number): Reading {
  if (reading.result != null || tilt == null) return reading;
  const angle = reading.recent.length === 0 ? tilt : reading.angle + (tilt - reading.angle) * SMOOTH;
  const low = Math.min(reading.low, angle);
  const recent = [...reading.recent.filter((sample) => at - sample.at <= STEADY_MS), { at, angle }];
  const next: Reading = { angle, low, recent, result: null };

  // A full window, or nothing: half a second of stillness is a pause.
  if (at - recent[0].at < STEADY_MS * 0.9) return next;
  const angles = recent.map((sample) => sample.angle);
  if (Math.max(...angles) - Math.min(...angles) > STEADY_RANGE) return next;
  const mean = angles.reduce((sum, value) => sum + value, 0) / angles.length;
  if (mean < LEAST || mean > MOST || mean < low + RISE) return next;
  return { ...next, result: Math.round(mean) };
}

/** The gauge's full sweep, in degrees: more than an ankle bends. */
export const GAUGE_DEGREES = 50;

/** The gauge's fill for an angle, 0 to 1. */
export function gaugeFill(angle: number): number {
  'worklet';
  return Math.max(0, Math.min(1, angle / GAUGE_DEGREES));
}
