import { useMemo } from 'react';
import { useSharedValue, type SharedValue } from 'react-native-reanimated';

export type Mat = [number, number, number, number, number, number];

const TAU = Math.PI * 2;

/** Turn and scale about a point, then move: one SVG matrix. */
export function about(px: number, py: number, deg: number, sx = 1, sy = 1, tx = 0, ty = 0): Mat {
  'worklet';
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  const a = c * sx;
  const b = s * sx;
  const cc = -s * sy;
  const d = c * sy;
  return [a, b, cc, d, px + tx - (a * px + cc * py), py + ty - (b * px + d * py)];
}

/**
 * Turn about a point, and squeeze along one direction through it (`axis`,
 * radians, 0 pointing right, π/2 down) by `s`: a hand whose fingers curl in
 * toward the wrist, whichever way the hand points.
 */
export function squeezeAbout(px: number, py: number, deg: number, axis: number, s: number): Mat {
  'worklet';
  const r = (deg * Math.PI) / 180;
  const cr = Math.cos(r);
  const sr = Math.sin(r);
  const ux = Math.cos(axis);
  const uy = Math.sin(axis);
  const k = s - 1;
  // The squeeze is I + (s - 1)·u·uᵀ, then the turn.
  const a11 = 1 + k * ux * ux;
  const a12 = k * ux * uy;
  const a22 = 1 + k * uy * uy;
  const a = cr * a11 - sr * a12;
  const b = sr * a11 + cr * a12;
  const c = cr * a12 - sr * a22;
  const d = sr * a12 + cr * a22;
  return [a, b, c, d, px - (a * px + c * py), py - (b * px + d * py)];
}

/**
 * Every value the puppet is driven by, all on the UI thread.
 *
 * The loop's own (`clock`, `breath`, `sway`...) are blended from one held
 * state to the next; the one-shot channels (`hop`, `raise`, `lift`...) rest
 * at 0 or 1 and are keyframed by a move, or between moves by a fidget the
 * idle tick plays on them (`FIDGETS`). Nothing is per part: a part reads
 * the channels its role listens to, which is how one library of moves drives
 * every pose.
 *
 * A node's animated props capture only the values it reads, never this
 * whole object: Reanimated subscribes a mapper to every shared value its
 * closure holds, so capturing `Motion` would recompute every node whenever
 * any value moved.
 */
export type Motion = {
  clock: SharedValue<number>;
  wall: SharedValue<number>;
  tempo: SharedValue<number>;
  breath: SharedValue<number>;
  sway: SharedValue<number>;
  droop: SharedValue<number>;
  sink: SharedValue<number>;
  tilt: SharedValue<number>;
  rub: SharedValue<number>;
  throb: SharedValue<number>;
  ache: SharedValue<number>;
  balance: SharedValue<number>;
  eyeY: SharedValue<number>;
  hop: SharedValue<number>;
  sx: SharedValue<number>;
  sy: SharedValue<number>;
  lean: SharedValue<number>;
  shake: SharedValue<number>;
  /** Arms held up go higher. Degrees. */
  raise: SharedValue<number>;
  /** Raised arms swing side to side together. Degrees. */
  swing: SharedValue<number>;
  /** A waving arm, from the shoulder. Degrees. */
  wave: SharedValue<number>;
  /** A waving hand, from the wrist. Degrees. */
  hand: SharedValue<number>;
  /** Arms at rest swing up and out, away from the body. Degrees. */
  arm: SharedValue<number>;
  /** Fingers curl toward the wrist: 0 open, 1 closed. */
  flex: SharedValue<number>;
  /** One foot comes up: 1 the leg on the right, -1 the one on the left. */
  step: SharedValue<number>;
  /** Both feet come up together, the legs drawn in: 0 standing, 1 tucked. */
  tuck: SharedValue<number>;
  /** The head turns aside, on top of the mood's own tilt. Degrees. */
  look: SharedValue<number>;
  /** The eyes, and a little of the mouth, look aside. Units right. */
  eyeX: SharedValue<number>;
  /** What is held is lifted. Units up. */
  lift: SharedValue<number>;
  liftTilt: SharedValue<number>;
  kick: SharedValue<number>;
  spread: SharedValue<number>;
  flutter: SharedValue<number>;
  markPop: SharedValue<number>;
  markHide: SharedValue<number>;
  flick: SharedValue<number>;
  blink: SharedValue<number>;
  swap: SharedValue<number>;
  blinkable: SharedValue<number>;
};

export type Loop = {
  tempo: number;
  breath: number;
  sway: number;
  droop: number;
  sink: number;
  tilt: number;
  rub: number;
  throb: number;
  eyes: number;
};

/** The puppet's values, made once: the same object for the component's life, so nothing downstream restarts on a render. */
export function useMotion(loop: Loop, blinkable: boolean): Motion {
  const clock = useSharedValue(0);
  const wall = useSharedValue(0);
  const tempo = useSharedValue(loop.tempo);
  const breath = useSharedValue(loop.breath);
  const sway = useSharedValue(loop.sway);
  const droop = useSharedValue(loop.droop);
  const sink = useSharedValue(loop.sink);
  const tilt = useSharedValue(loop.tilt);
  const rub = useSharedValue(loop.rub);
  const throb = useSharedValue(loop.throb);
  const ache = useSharedValue(0);
  const balance = useSharedValue(0);
  const eyeY = useSharedValue(loop.eyes);
  const hop = useSharedValue(0);
  const sx = useSharedValue(1);
  const sy = useSharedValue(1);
  const lean = useSharedValue(0);
  const shake = useSharedValue(0);
  const raise = useSharedValue(0);
  const swing = useSharedValue(0);
  const wave = useSharedValue(0);
  const hand = useSharedValue(0);
  const arm = useSharedValue(0);
  const flex = useSharedValue(0);
  const step = useSharedValue(0);
  const tuck = useSharedValue(0);
  const look = useSharedValue(0);
  const eyeX = useSharedValue(0);
  const lift = useSharedValue(0);
  const liftTilt = useSharedValue(0);
  const kick = useSharedValue(0);
  const spread = useSharedValue(1);
  const flutter = useSharedValue(0);
  const markPop = useSharedValue(0);
  const markHide = useSharedValue(0);
  const flick = useSharedValue(0);
  const blink = useSharedValue(0);
  const swap = useSharedValue(0);
  const canBlink = useSharedValue(blinkable ? 1 : 0);
  return useMemo(
    () => ({
      clock,
      wall,
      tempo,
      breath,
      sway,
      droop,
      sink,
      tilt,
      rub,
      throb,
      ache,
      balance,
      eyeY,
      hop,
      sx,
      sy,
      lean,
      shake,
      raise,
      swing,
      wave,
      hand,
      arm,
      flex,
      step,
      tuck,
      look,
      eyeX,
      lift,
      liftTilt,
      kick,
      spread,
      flutter,
      markPop,
      markHide,
      flick,
      blink,
      swap,
      blinkable: canBlink,
    }),
    // Shared values are stable for the component's life.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
}

// ── the formulas, one per kind of node; each takes only what it reads ─────

/** The whole character: hops, squashes and leans from the ground under its foot. Never turns over. */
export function rootMatrix(
  gx: number,
  gy: number,
  clock: number,
  balance: number,
  lean: number,
  sx: number,
  sy: number,
  shake: number,
  hop: number,
): Mat {
  'worklet';
  return about(gx, gy, lean + balance * Math.sin((TAU * clock) / 3.1), sx, sy, shake, hop);
}

/** The flower breathes up from the waist, leans and tilts. */
export function headMatrix(px: number, py: number, clock: number, sink: number, breath: number, tilt: number): Mat {
  'worklet';
  const rise = 1 - sink + breath * (0.5 - 0.5 * Math.cos((TAU * clock) / 2.4));
  return about(px, py, tilt + 0.8 * Math.sin((TAU * clock) / 5), 1 + (1 - rise) * 0.4, rise);
}

/** Each petal sways on its own, hangs when the mood is low, opens for joy, flutters on a landing. */
export function petalDegrees(
  angle: number,
  index: number,
  clock: number,
  wall: number,
  sway: number,
  droop: number,
  ache: number,
  flutter: number,
): number {
  'worklet';
  return (
    sway * Math.sin((TAU * clock) / 3.2 + index * 0.9) +
    droop * (1 + 0.5 * ache) * Math.cos((angle * Math.PI) / 180) +
    flutter * 7 * Math.sin(TAU * 5 * wall + index * 1.3)
  );
}

/** An idle sway, offset per part so two arms never move in step. */
export function drift(clock: number, period: number, phase: number): number {
  'worklet';
  return Math.sin((TAU * clock) / period + phase);
}

/** How far into a breath the mascot is: 0 out, 1 in. */
export function inhale(clock: number): number {
  'worklet';
  return 0.5 - 0.5 * Math.cos((TAU * clock) / 2.4);
}

/** How much a held thing rises on a breath, as a share of the box. */
export function bob(clock: number, breath: number, size: number): number {
  'worklet';
  return breath * size * 0.12 * inhale(clock);
}

/**
 * One leg, from the hip. Its own step (`step` on its side) turns it out and
 * lifts the foot; a tuck lifts both feet and draws the legs in. The foot
 * comes up mostly by the leg shortening toward the hip, which reads as a
 * knee coming forward and leaves the hip where the body hides it, and a
 * little by the whole leg moving up under the body. `reach` is how far a
 * full step lifts the foot, `length` hip to ground.
 *
 * A tuck draws the legs in by 2° at most: in the poses whose shoes touch at
 * rest (idle, sad, thinking), any more and the shoes overlap, and with every
 * outline drawn under all the paper they merge into one.
 */
export function legMatrix(
  px: number,
  py: number,
  dir: number,
  length: number,
  reach: number,
  step: number,
  tuck: number,
): Mat {
  'worklet';
  const own = Math.max(step * dir, 0);
  const up = own + tuck;
  const out = 6 * own - 2 * tuck;
  const sy = Math.max(1 - (0.75 * up * reach) / length, 0.7);
  return about(px, py, -dir * out, 1, sy, 0, -0.25 * up * reach);
}

// ── fidgets: the small things a person does while standing about ──────────

/**
 * The one-shot channels a fidget may move. Each rests at 0, but for the
 * scales, which rest at 1.
 */
export const FIDGET_CHANNELS = [
  'lean',
  'sy',
  'sx',
  'hop',
  'raise',
  'wave',
  'arm',
  'hand',
  'flex',
  'step',
  'tuck',
  'flutter',
  'spread',
  'look',
  'eyeX',
  'swing',
] as const;
export type FidgetChannel = (typeof FIDGET_CHANNELS)[number];

export function restOf(channel: FidgetChannel): number {
  'worklet';
  return channel === 'sy' || channel === 'sx' || channel === 'spread' ? 1 : 0;
}

export type FidgetKind = 'tap' | 'shift' | 'flex' | 'look' | 'shrug' | 'bounce' | 'ruffle';

type FidgetTrack = {
  channel: FidgetChannel;
  /** Keyframes, `[seconds, value, seconds, value…]`, from 0 and back to 0 (the rest) by the end. */
  keys: readonly number[];
  /** Turned the other way half the time: which foot, which way to look. */
  signed?: boolean;
};

export type Fidget = {
  /** Seconds. */
  length: number;
  /** Small enough for a thinking or a sad mascot, at a smaller size. */
  calm: boolean;
  tracks: readonly FidgetTrack[];
};

/**
 * Every fidget, as keyframes on the one-shot channels. Offsets from rest:
 * degrees for turns, a share for the scales, `rig.hop` for `hop`, and a
 * glance's width for `eyeX`. The idle tick samples them at its own 30 fps,
 * so a fidget redraws the mascot no more often than its breathing does.
 */
export const FIDGETS: Record<FidgetKind, Fidget> = {
  // Taps a foot twice, the weight on the other one, the head bobbing along.
  tap: {
    length: 0.9,
    calm: true,
    tracks: [
      { channel: 'step', signed: true, keys: [0, 0, 0.13, 0.85, 0.25, 0, 0.4, 0.7, 0.53, 0, 0.9, 0] },
      { channel: 'lean', signed: true, keys: [0, 0, 0.18, -1.2, 0.6, -1.2, 0.9, 0] },
      { channel: 'look', signed: true, keys: [0, 0, 0.13, 1, 0.25, 0, 0.4, 1, 0.53, 0, 0.9, 0] },
    ],
  },
  // Moves the weight onto one leg and back: the other heel comes up, the head
  // stays level, the hanging arms stay hanging.
  shift: {
    length: 2,
    calm: true,
    tracks: [
      { channel: 'lean', signed: true, keys: [0, 0, 0.5, 2.2, 1.4, 2.2, 2, 0] },
      { channel: 'step', signed: true, keys: [0, 0, 0.5, -0.3, 1.4, -0.3, 2, 0] },
      { channel: 'look', signed: true, keys: [0, 0, 0.55, -1.5, 1.4, -1.5, 2, 0] },
      { channel: 'swing', signed: true, keys: [0, 0, 0.55, -1.5, 1.4, -1.5, 2, 0] },
    ],
  },
  // Stretches the fingers: closes and opens the hands, twice and a half.
  flex: {
    length: 1.15,
    calm: true,
    tracks: [
      { channel: 'flex', keys: [0, 0, 0.16, 1, 0.32, 0.15, 0.48, 0.9, 0.64, 0.1, 0.8, 0.55, 1.15, 0] },
      { channel: 'hand', keys: [0, 0, 0.16, 5, 0.32, -2, 0.48, 4, 0.64, -1, 1.15, 0] },
    ],
  },
  // Looks to one side, then the other, the head turning with the eyes; a
  // blink on the way across is added where it starts.
  look: {
    length: 2.4,
    calm: true,
    tracks: [
      { channel: 'eyeX', signed: true, keys: [0, 0, 0.2, 1, 0.95, 1, 1.2, -0.75, 1.9, -0.75, 2.4, 0] },
      { channel: 'look', signed: true, keys: [0, 0, 0.35, 3, 0.95, 3, 1.3, -2, 1.9, -2, 2.4, 0] },
    ],
  },
  // Shoulders up, arms out a little, head to one side: "eh". Sad, it is a sigh.
  shrug: {
    length: 1.1,
    calm: true,
    tracks: [
      { channel: 'raise', keys: [0, 0, 0.22, 9, 0.6, 9, 1, 0] },
      { channel: 'wave', keys: [0, 0, 0.22, 6, 0.6, 6, 1, 0] },
      { channel: 'arm', keys: [0, 0, 0.22, 9, 0.6, 9, 1, 0] },
      { channel: 'hand', keys: [0, 0, 0.22, 6, 0.6, 6, 1, 0] },
      { channel: 'sy', keys: [0, 0, 0.22, 0.015, 0.6, 0.015, 1, 0] },
      { channel: 'sx', keys: [0, 0, 0.22, -0.008, 0.6, -0.008, 1, 0] },
      { channel: 'look', signed: true, keys: [0, 0, 0.25, 2.5, 0.65, 2.5, 1.1, 0] },
    ],
  },
  // A happy little bounce on the spot, feet just leaving the ground.
  bounce: {
    length: 0.9,
    calm: false,
    tracks: [
      { channel: 'sy', keys: [0, 0, 0.1, -0.035, 0.22, 0.03, 0.36, 0, 0.45, -0.02, 0.58, 0.005, 0.9, 0] },
      { channel: 'sx', keys: [0, 0, 0.1, 0.025, 0.22, -0.02, 0.36, 0, 0.45, 0.014, 0.58, -0.003, 0.9, 0] },
      { channel: 'hop', keys: [0, 0, 0.1, 0, 0.23, -0.16, 0.36, 0, 0.9, 0] },
      { channel: 'tuck', keys: [0, 0, 0.12, 0, 0.23, 0.55, 0.35, 0, 0.9, 0] },
      { channel: 'arm', keys: [0, 0, 0.1, -2, 0.23, 6, 0.42, 0, 0.9, 0] },
      { channel: 'raise', keys: [0, 0, 0.1, -2, 0.23, 5, 0.42, 0, 0.9, 0] },
      { channel: 'wave', keys: [0, 0, 0.1, -1.5, 0.23, 4, 0.42, 0, 0.9, 0] },
      { channel: 'flutter', keys: [0, 0, 0.34, 0, 0.38, 0.55, 0.9, 0] },
    ],
  },
  // Shakes the petals out, like hair after a swim.
  ruffle: {
    length: 1,
    calm: true,
    tracks: [
      { channel: 'flutter', keys: [0, 0, 0.1, 0.6, 0.55, 0.4, 1, 0] },
      { channel: 'spread', keys: [0, 0, 0.15, 0.03, 0.5, 0.02, 1, 0] },
      { channel: 'look', signed: true, keys: [0, 0, 0.16, 2, 0.32, -2, 0.48, 1.4, 0.64, -0.8, 0.8, 0, 1, 0] },
    ],
  },
};

/** A fidget's value on one track at `t` seconds: eased in and out between its keyframes. */
export function keyed(t: number, keys: readonly number[]): number {
  'worklet';
  const n = keys.length;
  if (t <= keys[0]) return keys[1];
  for (let i = 2; i < n; i += 2) {
    const t1 = keys[i];
    if (t < t1) {
      const t0 = keys[i - 2];
      const v0 = keys[i - 1];
      const p = (t - t0) / (t1 - t0);
      return v0 + (keys[i + 1] - v0) * (0.5 - 0.5 * Math.cos(Math.PI * p));
    }
  }
  return keys[n - 1];
}

export function achePulse(wall: number, ache: number): number {
  'worklet';
  return Math.sin(TAU * (1.1 + 1.1 * ache) * wall);
}

export function flickerAt(wall: number): number {
  'worklet';
  return 0.5 + 0.5 * Math.sin(TAU * 7 * wall);
}
