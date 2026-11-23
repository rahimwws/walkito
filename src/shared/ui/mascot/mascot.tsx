import { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState, type Ref } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  Easing,
  runOnJS,
  useFrameCallback,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
  type EasingFunction,
  type FrameInfo,
  type SharedValue,
} from 'react-native-reanimated';

import { palette } from '@/shared/config';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';

import { MascotDrawing, type MascotColors } from './drawing';
import {
  FIDGET_CHANNELS,
  FIDGETS,
  keyed,
  restOf,
  useMotion,
  type FidgetChannel,
  type FidgetKind,
  type Loop,
  type Motion,
} from './motion';
import { offendedRig } from './rigs/offended';
import { playMascotSound, type MascotSound } from './sound';
import type { MascotMood, MascotRig, PartRole } from './types';

export type MascotState = 'idle' | 'wave' | 'happy' | 'sad' | 'celebrate' | 'thinking';
/** Everything the mascot can do once: the one-shot states, and the small
 * reactions a host plays as things happen. */
export type MascotShot = 'wave' | 'happy' | 'celebrate' | 'nod' | 'wince' | 'poke' | 'cheer' | 'present' | 'hop';
export type MascotHandle = { play: (shot: MascotShot) => void };

type Resting = 'idle' | 'thinking' | 'sad';

/**
 * How each held state breathes. A change of state animates toward the new
 * row rather than switching, so a mood shifts instead of snapping.
 */
const LOOPS: Record<Resting, Loop> = {
  // Sleepy-calm: a slow breath, the petals barely moving.
  idle: { tempo: 1, breath: 0.02, sway: 2.5, droop: 0, sink: 0, tilt: 0, rub: 1.2, throb: 0, eyes: 0 },
  // The head cocked, the foot let be.
  thinking: { tempo: 0.85, breath: 0.015, sway: 1.8, droop: 2, sink: 0, tilt: 6, rub: 0, throb: 0.25, eyes: 0 },
  // Heavier, slower, the petals hanging, a sore foot held and rubbed.
  sad: { tempo: 0.68, breath: 0.012, sway: 1, droop: 7, sink: 0.03, tilt: -3, rub: 2.2, throb: 1, eyes: 5 },
};

const restingOf = (state: MascotState): Resting => (state === 'sad' || state === 'thinking' ? state : 'idle');
const moodOf = (state: MascotState): MascotMood => (state === 'thinking' ? 'thinking' : state);

/** How big the fidgets are in each held state: thinking and sad fidget less, and only calmly. */
const CALM: Record<Resting, number> = { idle: 1, thinking: 0.6, sad: 0.45 };

/** Poses that are asleep: they stir (a shift of weight, the petals) at half the size, and never look round or bounce. */
const ASLEEP: ReadonlySet<string> = new Set(['sleeping']);

/**
 * Poses cut off at an edge of their box (peeking over or round it): a shift
 * of weight or a look round would turn the cut into view, so they only do
 * what keeps it on the edge.
 */
const AT_EDGE: Readonly<Record<string, readonly FidgetKind[]>> = {
  peekBottom: ['flex', 'ruffle'],
  peekSide: ['flex', 'ruffle', 'bounce'],
};

/**
 * The easter egg: this many taps on one mascot, all inside this long, and
 * the last of them is taken as an offence.
 */
const TEASE_TAPS = 7;
const TEASE_WINDOW_MS = 3000;
/** How long the offended drawing stays, from the cut in to the start of the cut back. */
const SULK_MS = 2200;
/** The squash a drawing is swapped at the bottom of, out of sight. */
const CUT_MS = 90;
/** The offended art's own face: brows down under the brows it draws. */
const SULK_FACE = offendedRig.moods.idle;

/** The fidgets a pose can do with the parts it has. A shift and a look need nothing but the body and the face. */
function fidgetsFor(rig: MascotRig): FidgetKind[] {
  const has = (...roles: PartRole[]) => rig.parts.some((part) => roles.includes(part.role));
  const petals = rig.petals.length > 0;
  const edge = AT_EDGE[rig.name];
  if (edge != null) return [...edge];
  if (ASLEEP.has(rig.name)) return petals ? ['shift', 'ruffle'] : ['shift'];
  const kinds: FidgetKind[] = ['shift', 'look'];
  if (has('leg')) kinds.push('tap');
  if (has('hand')) kinds.push('flex');
  if (has('arm', 'raise', 'wave')) kinds.push('shrug');
  if (petals) kinds.push('ruffle');
  // A bounce is for a pose at ease: not one in pain or in tears.
  if (!rig.marks.some((mark) => mark.role === 'ache')) kinds.push('bounce');
  return kinds;
}

/** The art's own colours (in the dark, the outline in the colour of what it stands on), or the tint asked for. */
function useMascotColors(surface?: string, paper?: string, ink?: string): MascotColors {
  const scheme = useColorScheme();
  const art: MascotColors =
    scheme === 'dark'
      ? { ink: surface ?? palette.dark.background, paper: palette.dark.foreground, shadow: palette.dark.foreground }
      : { ink: palette.light.foreground, paper: palette.light.background, shadow: palette.light.foreground };
  return { ink: ink ?? art.ink, paper: paper ?? art.paper, shadow: art.shadow };
}

const OUT = Easing.out(Easing.quad);
const IN = Easing.in(Easing.quad);
const SMOOTH = Easing.inOut(Easing.quad);

function to(value: number, duration: number, easing: EasingFunction = SMOOTH) {
  'worklet';
  return withTiming(value, { duration, easing });
}

export type MascotProps = {
  rig: MascotRig;
  /**
   * `idle`, `thinking` and `sad` hold until the state changes; `wave`,
   * `happy` and `celebrate` play once and settle into idle.
   */
  state?: MascotState;
  /** The side of the square the character is fitted to. */
  size: number;
  /** How hard `sad` is, 0 to 1. */
  intensity?: number;
  /** The face worn at idle, when it is not the rig's own idle face: the
   * sore-foot pose on an "It hurts" card wears the art's pained face. */
  restFace?: string;
  /** Keep the ache marks showing at idle too, as the sore-foot art has them. */
  ache?: boolean;
  /**
   * What the mascot stands on. In the dark the outline is drawn in it, so the
   * white figure reads the way the art was drawn: cut out of the page.
   */
  surface?: string;
  /** The body's fill, for a tinted mascot (a coloured one peeking into a card). The art's own by default. */
  paper?: string;
  /** The outline and the face, for a tinted mascot. By default the art's ink, or `surface` in the dark. */
  ink?: string;
  /** Moves play their own sounds. Off by default: a host that knows why
   * something happened chooses the sound itself. */
  sounds?: boolean;
  /** Stops the loop, e.g. while a sheet covers the mascot or its screen is hidden. */
  paused?: boolean;
  /** Drawn facing the other way: a pointing pose at the right of the screen
   * points back at what is beside it. A flip of the whole drawing, so every
   * move still works; the moves' left and right swap with it. */
  mirrored?: boolean;
  /** Fires when a one-shot state or move has played out. */
  onAnimationEnd?: () => void;
  /** Makes the mascot tappable: it boings, then this runs. The seventh
   * quick tap in a row is taken as an offence instead (see `easterEgg`);
   * this runs on that one too, and on every tap while it sulks. */
  onPress?: () => void;
  /**
   * Seven taps inside three seconds and a tappable mascot takes offence:
   * arms crossed and a huff for a couple of seconds, then a giggle. On by
   * default; off for a mascot where a huff could be read as being about the
   * person rather than the poking.
   */
  easterEgg?: boolean;
  ref?: Ref<MascotHandle>;
};

/**
 * A traced mascot, alive: breathing, blinking, petals swaying, its mood
 * following the app, and a library of moves (hop, celebrate, wave, cheer,
 * present, one-leg hops, nod, wince) that work on every pose, because they
 * drive parts by role rather than by name.
 *
 * All of it runs on the UI thread. The idle is small, since it is seen every
 * time, but never quite still: every few seconds the mascot fidgets the way
 * a person standing about does, with what its pose has (taps a foot, moves
 * its weight, stretches its fingers, looks round, shrugs, bounces, shakes
 * its petals out), never the same thing twice running, and less and more
 * calmly when it is thinking or sad. The moves are where it acts. Joy is a
 * person's joy: a crouch, a jump with the arms flung up and the feet
 * tucked, a springy landing and a couple of happy bounces from foot to
 * foot. It never turns over. The landings overshoot on purpose: this is a
 * character landing, the one place a bounce belongs, so they are keyframed
 * rather than left to the app's settle curve.
 *
 * With Reduce Motion it is the still art wearing the face of its state, and
 * nothing fidgets.
 *
 * Poked seven times inside three seconds, a tappable mascot takes offence:
 * squashed, it is swapped at the bottom of the squash for the offended art
 * (arms crossed, brows down, the puff off its head), says "hmph" with a
 * shake, turns its nose up and taps a foot, then is squashed back into
 * itself and giggles. Only ever for the poking: never on its own, never on
 * a still, never with Reduce Motion, and never for a mascot in pain or
 * tears, an aching one, or one peeking from an edge. Only the drawing is
 * swapped: the moves, faces and idle loop stay the mascot's own, so nothing
 * above the drawing remounts and the idle tick is never re-registered.
 */
export function Mascot({
  rig,
  state = 'idle',
  size,
  intensity = 0,
  restFace: idleFace,
  ache = false,
  surface,
  paper,
  ink,
  sounds = false,
  paused = false,
  mirrored = false,
  onAnimationEnd,
  onPress,
  easterEgg = true,
  ref,
}: MascotProps) {
  const reduceMotion = useReducedMotion();
  const colors = useMascotColors(surface, paper, ink);

  const resting = restingOf(state);
  const restingFace = resting === 'idle' && idleFace != null ? idleFace : rig.moods[moodOf(resting)];

  const m = useMotion(LOOPS[resting], rig.blinks.includes(restingFace));
  const nextBlink = useSharedValue(2);
  const nextGlance = useSharedValue(6);
  const busy = useSharedValue(0);
  const canGlance = useSharedValue(rig.glance != null && resting === 'idle' ? 1 : 0);

  // ── faces ──────────────────────────────────────────────────────────────
  // A face changes the way a cartoon's does: a squeeze, and the new one
  // opens. The swap happens at the bottom of the squeeze, out of sight.
  // Only the worn face is drawn, so the swap is a React update, timed to
  // land while the eyes are squeezed shut.
  const face = useRef(restingFace);
  const [worn, setWorn] = useState(restingFace);
  const faceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showFace = (next: string) => {
    if (next === face.current || rig.faces[next] == null) return;
    face.current = next;
    m.swap.value = withSequence(to(1, 90, IN), to(0, 140, OUT));
    if (faceTimer.current != null) clearTimeout(faceTimer.current);
    faceTimer.current = setTimeout(() => setWorn(next), 90);
    m.blinkable.value = rig.blinks.includes(next) ? 1 : 0;
  };
  /** A face put on at once, with no squeeze of its own: for a cut already hidden in one. */
  const wear = (next: string) => {
    if (faceTimer.current != null) clearTimeout(faceTimer.current);
    face.current = next;
    setWorn(next);
    m.blinkable.value = rig.blinks.includes(next) ? 1 : 0;
  };

  // Now and then a happy, eyes-shut pose looks up at you, blinks, and
  // smiles again.
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const later = (ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const restFace = useRef(restingFace);
  restFace.current = restingFace;
  const glance = () => {
    if (rig.glance == null || face.current !== restFace.current) return;
    showFace(rig.glance);
    later(800, () => {
      m.blink.value = withSequence(to(1, 60, IN), to(0, 90, OUT));
    });
    later(1900, () => {
      if (face.current === rig.glance) showFace(restFace.current);
    });
  };

  const glanceRef = useRef(glance);
  glanceRef.current = glance;
  const callGlance = useCallback(() => glanceRef.current(), []);

  // ── fidgets ────────────────────────────────────────────────────────────
  // Chosen and played by the idle tick itself, on the UI thread: no timers,
  // nothing left running when it is paused or gone, and drawn at the tick's
  // 30 fps, so a fidget costs no more redraws than the breathing already
  // does. Each mascot keeps its own pace, so two on a screen never fidget
  // in step.
  const kinds = useMemo(() => fidgetsFor(rig), [rig]);
  const channels = useMemo(
    () =>
      Object.fromEntries(FIDGET_CHANNELS.map((channel) => [channel, m[channel]] as const)) as Record<
        FidgetChannel,
        SharedValue<number>
      >,
    [m],
  );
  const hopUnit = rig.hop;
  const glanceUnit = rig.box.size * 0.016;
  const [seed] = useState(Math.random);
  const pace = 0.85 + 0.3 * seed;
  /** The fidget playing, as an index into `kinds`: -1 none. */
  const fidget = useSharedValue(-1);
  const lastFidget = useSharedValue(-1);
  const fidgetAt = useSharedValue(0);
  const fidgetSign = useSharedValue(1);
  const fidgetSize = useSharedValue(1);
  const nextFidget = useSharedValue(1.5 + 2.5 * seed);
  const calm = useSharedValue(CALM[resting] * (ASLEEP.has(rig.name) ? 0.5 : 1));

  const pending = useSharedValue(0);
  const { clock, wall, tempo, blinkable, blink } = m;
  // The idle loop steps at 30 fps: it is slow and small, and every step
  // redraws the whole drawing. Moves animate their own channels at full rate.
  const tick = useCallback(
    (info: FrameInfo) => {
      'worklet';
      pending.value += Math.min(info.timeSincePreviousFrame ?? 16, 64) / 1000;
      if (pending.value < 0.032) return;
      const dt = pending.value;
      pending.value = 0;
      clock.value += dt * tempo.value;
      wall.value += dt;
      const now = wall.value;
      if (now > nextBlink.value) {
        nextBlink.value = now + 3 + Math.random() * 2;
        if (blinkable.value > 0.5 && busy.value === 0) blink.value = withSequence(to(1, 60, IN), to(0, 90, OUT));
      }
      if (now > nextGlance.value) {
        nextGlance.value = now + 7 + Math.random() * 4;
        if (canGlance.value > 0.5 && busy.value === 0) runOnJS(callGlance)();
      }

      // A move has the channels; the next fidget waits until it has settled.
      if (busy.value !== 0) {
        nextFidget.value = Math.max(nextFidget.value, now + 1.5);
        return;
      }
      const doing = fidget.value;
      if (doing >= kinds.length) {
        fidget.value = -1;
        return;
      }
      if (doing >= 0) {
        const { length, tracks } = FIDGETS[kinds[doing]];
        const t = now - fidgetAt.value;
        for (let i = 0; i < tracks.length; i += 1) {
          const track = tracks[i];
          const unit = track.channel === 'hop' ? hopUnit : track.channel === 'eyeX' ? glanceUnit : 1;
          const sign = track.signed === true ? fidgetSign.value : 1;
          channels[track.channel].value = restOf(track.channel) + keyed(t, track.keys) * fidgetSize.value * sign * unit;
        }
        // Every track is back at rest by its last keyframe.
        if (t >= length) fidget.value = -1;
        return;
      }
      if (now < nextFidget.value) return;

      // Something it can do, and not what it did last.
      const amount = calm.value;
      const lively = amount >= 1;
      let count = 0;
      for (let i = 0; i < kinds.length; i += 1) {
        if (i !== lastFidget.value && (lively || FIDGETS[kinds[i]].calm)) count += 1;
      }
      let choice = -1;
      let skip = Math.floor(Math.random() * count);
      for (let i = 0; i < kinds.length && choice < 0; i += 1) {
        if (i !== lastFidget.value && (lively || FIDGETS[kinds[i]].calm)) {
          if (skip === 0) choice = i;
          else skip -= 1;
        }
      }
      const wait = (2.5 + 3.5 * Math.random()) * pace * (lively ? 1 : 1.6);
      if (choice < 0) {
        lastFidget.value = -1;
        nextFidget.value = now + wait;
        return;
      }
      fidget.value = choice;
      lastFidget.value = choice;
      fidgetAt.value = now;
      fidgetSign.value = Math.random() < 0.5 ? -1 : 1;
      fidgetSize.value = amount;
      nextFidget.value = now + Math.max(wait, FIDGETS[kinds[choice]].length + 0.6);
      // People blink as their eyes sweep across.
      if (kinds[choice] === 'look' && blinkable.value > 0.5) {
        blink.value = withDelay(1050, withSequence(to(1, 60, IN), to(0, 90, OUT)));
      }
    },
    [
      pending,
      clock,
      wall,
      tempo,
      blinkable,
      blink,
      nextBlink,
      nextGlance,
      busy,
      canGlance,
      callGlance,
      kinds,
      channels,
      hopUnit,
      glanceUnit,
      pace,
      fidget,
      lastFidget,
      fidgetAt,
      fidgetSign,
      fidgetSize,
      nextFidget,
      calm,
    ],
  );
  const frame = useFrameCallback(tick, false);
  useEffect(() => {
    frame.setActive(!paused && !reduceMotion);
  }, [frame, paused, reduceMotion]);

  // ── moves ──────────────────────────────────────────────────────────────
  // The shot in flight (0: none), and a serial that only grows, so a late
  // end from an interrupted shot can never match a newer one.
  const playing = useRef(0);
  const serial = useRef(0);
  const [wincing, setWincing] = useState(false);
  const ended = useRef(onAnimationEnd);
  ended.current = onAnimationEnd;
  const finish = (id: number) => {
    if (id !== playing.current) return;
    playing.current = 0;
    busy.value = 0;
    setWincing(false);
    showFace(restFace.current);
    ended.current?.();
  };
  const done = (id: number) => (finished?: boolean) => {
    'worklet';
    if (finished) runOnJS(finish)(id);
  };
  const soundOn = useRef(sounds);
  soundOn.current = sounds;
  const cue = (sound: MascotSound, at = 0) => {
    if (!soundOn.current) return;
    if (at === 0) playMascotSound(sound);
    else later(at, () => playMascotSound(sound));
  };
  const seq = (value: SharedValue<number>, steps: readonly (readonly [number, number, EasingFunction?])[], end?: (f?: boolean) => void) => {
    const parts = steps.map(([v, ms, ease], i) =>
      i === steps.length - 1 && end ? withTiming(v, { duration: ms, easing: ease ?? SMOOTH }, end) : to(v, ms, ease ?? SMOOTH),
    );
    value.value = parts.length === 1 ? parts[0] : withSequence(...parts);
  };
  const H = rig.hop;
  const S = rig.box.size;
  // The side the waving arm is on (1 right), so a wave leans into it.
  const waving = rig.parts.find((part) => part.role === 'wave' && (part.parent === 'head' || part.parent === 'root'));
  const side = waving != null && waving.pivot[0] < rig.bodyCentre[0] ? -1 : 1;

  // A move takes over from a fidget: whatever the fidget had moved goes back
  // to rest, and the move then sets the channels it uses on top of that.
  const stopFidget = () => {
    fidget.value = -1;
    for (const channel of FIDGET_CHANNELS) channels[channel].value = to(restOf(channel), 160);
  };

  // `arm` moves arms at rest, `step` one foot (1 the right, -1 the left),
  // `tuck` both feet, `flex` the fingers, `look` the head and `eyeX` the
  // eyes. A pose without legs or hands of its own just leaves those out: the
  // body still does the move.
  const play = (shot: MascotShot) => {
    if (reduceMotion) {
      later(0, () => ended.current?.());
      return;
    }
    timers.current.forEach(clearTimeout);
    timers.current = [];
    const id = ++serial.current;
    playing.current = id;
    setWincing(shot === 'wince');
    const end = done(id);
    busy.value = 1;
    stopFidget();
    switch (shot) {
      case 'nod': {
        // The shoulders and arms dip with the head, and come back up with it.
        seq(m.sy, [[0.95, 90, OUT], [1.025, 110], [1, 150]], end);
        seq(m.sx, [[1.03, 90, OUT], [0.99, 110], [1, 150]]);
        seq(m.arm, [[-3, 90, OUT], [2, 110], [0, 150]]);
        seq(m.raise, [[-3, 90, OUT], [2, 110], [0, 150]]);
        seq(m.wave, [[-2, 90, OUT], [1.5, 110], [0, 150]]);
        seq(m.flutter, [[0.6, 60], [0, 420]]);
        cue('pop');
        return;
      }
      case 'wince': {
        // A flinch: the arms pull in, the hands clench, the knees jerk up.
        seq(m.shake, [[-0.012 * S, 45], [0.011 * S, 60], [-0.008 * S, 60], [0.005 * S, 60], [0, 70]]);
        seq(m.sy, [[0.94, 70, OUT], [1, 260]], end);
        seq(m.sx, [[1.03, 70, OUT], [1, 260]]);
        seq(m.arm, [[-5, 70, OUT], [0, 260]]);
        seq(m.flex, [[0.9, 70, OUT], [0, 300]]);
        seq(m.tuck, [[0.25, 70, OUT], [0, 260]]);
        seq(m.blink, [[0.8, 60], [0, 220]]);
        seq(m.markPop, [[1, 70], [0, 380]]);
        return;
      }
      case 'poke': {
        // Startled: a squash and a little jump with the arms flung out, then
        // a giggle, wriggling from side to side as it settles.
        seq(m.sy, [[0.84, 90, OUT], [1.1, 120, OUT], [0.95, 110], [1.03, 100], [0.98, 90], [1.02, 90], [1, 120]], end);
        seq(m.sx, [[1.09, 90, OUT], [0.94, 120, OUT], [1.03, 110], [0.99, 100], [1.01, 90], [0.99, 90], [1, 120]]);
        m.hop.value = withSequence(withDelay(90, to(-H * 0.12, 110, OUT)), to(0, 110, IN));
        seq(m.tuck, [[0, 90], [0.5, 110, OUT], [0, 120]]);
        seq(m.flutter, [[1, 50], [0, 600]]);
        seq(m.raise, [[8, 140], [0, 300]]);
        seq(m.wave, [[6, 140], [0, 300]]);
        seq(m.arm, [[10, 120, OUT], [3, 200], [0, 250]]);
        seq(m.shake, [[0, 320], [0.006 * S, 70], [-0.006 * S, 70], [0.005 * S, 70], [-0.004 * S, 70], [0, 90]]);
        seq(m.look, [[0, 320], [3, 80], [-3, 80], [2, 80], [0, 110]]);
        seq(m.step, [[0, 320], [0.4, 90], [-0.4, 90], [0.3, 90], [0, 110]]);
        seq(m.flex, [[0, 320], [0.7, 80], [0, 80], [0.6, 80], [0, 110]]);
        cue('boing');
        return;
      }
      case 'happy': {
        // Crouch, spring up stretched with the arms going up and swinging,
        // the feet tucked and kicking one then the other, fall, land
        // squashed, settle. The bounce marks leave the ground with him and
        // pop back as he lands.
        showFace(rig.moods.happy);
        seq(m.sy, [[0.92, 120, OUT], [1.07, 140, OUT], [1, 220], [0.92, 80, OUT], [1.03, 120], [1, 160]], end);
        seq(m.sx, [[1.05, 120, OUT], [0.95, 140, OUT], [1, 220], [1.06, 80, OUT], [0.98, 120], [1, 160]]);
        m.hop.value = withSequence(withDelay(120, to(-H, 250, OUT)), to(0, 230, IN));
        seq(m.raise, [[-3, 120], [12, 200, OUT], [12, 150], [0, 300]]);
        seq(m.wave, [[-2, 120], [10, 200, OUT], [0, 400]]);
        seq(m.arm, [[-3, 120], [14, 200, OUT], [4, 200], [0, 300]]);
        seq(m.swing, [[0, 260], [5, 140], [-5, 140], [0, 200]]);
        seq(m.hand, [[0, 120], [14, 160], [2, 160], [0, 200]]);
        seq(m.tuck, [[0, 150], [0.75, 180, OUT], [0.15, 180], [0, 90]]);
        seq(m.step, [[0, 250], [0.9, 100, OUT], [-0.9, 140], [0, 110]]);
        seq(m.lift, [[-0.01 * S, 120], [0.025 * S, 250, OUT], [0, 350]]);
        seq(m.markHide, [[0, 120], [1, 80], [1, 400], [0, 1]]);
        m.markPop.value = withDelay(600, withSequence(to(1, 60), to(0, 380)));
        m.flutter.value = withDelay(600, withSequence(to(1, 60), to(0, 520)));
        seq(m.kick, [[0, 120], [-3, 200], [0, 260]]);
        cue('happy', 110);
        cue('step', 600);
        return;
      }
      case 'celebrate': {
        // A real jump: crouch with the arms dropping, leap with them flung
        // up, the feet tucked under and the flower opening, a springy
        // landing, then two little bounces rocking from foot to foot with
        // the fists pumping.
        showFace(rig.moods.celebrate);
        const big = H * 1.7;
        seq(m.sy, [[0.86, 150, OUT], [1.1, 140, OUT], [1, 450], [0.88, 80, OUT], [1.03, 120], [0.97, 60], [1.02, 100], [0.96, 60], [1.02, 110], [1, 160]], end);
        seq(m.sx, [[1.07, 150, OUT], [0.93, 140, OUT], [1, 450], [1.08, 80, OUT], [0.98, 120], [1.02, 60], [0.99, 100], [1.03, 60], [0.99, 110], [1, 160]]);
        m.hop.value = withSequence(
          withDelay(150, to(-big, 300, OUT)),
          to(0, 290, IN),
          withDelay(200, to(-H * 0.35, 120, OUT)),
          to(0, 110, IN),
          withDelay(30, to(-H * 0.28, 110, OUT)),
          to(0, 110, IN),
        );
        seq(m.lean, [[0, 900], [4, 120], [-4, 230], [3, 220], [0, 260]]);
        seq(m.raise, [[-5, 150], [24, 220, OUT], [24, 300], [14, 300], [16, 200], [0, 420]]);
        seq(m.wave, [[-4, 150], [16, 220, OUT], [6, 160], [16, 160], [6, 160], [0, 400]]);
        seq(m.arm, [[-5, 150], [24, 220, OUT], [24, 300], [10, 170], [22, 130], [8, 120], [20, 120], [0, 400]]);
        seq(m.hand, [[0, 150], [16, 140], [0, 140], [16, 140], [0, 140], [14, 140], [0, 300]]);
        seq(m.flex, [[0, 740], [0.8, 120], [0, 120], [0.8, 120], [0, 120], [0.6, 120], [0, 300]]);
        seq(m.swing, [[0, 900], [5, 120], [-5, 230], [4, 220], [0, 260]]);
        // Tucked from the take-off, straight again for the landing.
        seq(m.tuck, [[0, 150], [1.1, 220, OUT], [1.1, 180], [0, 190, IN]]);
        // Leaning onto one foot lifts the other: left on the first bounce, right on the second.
        seq(m.step, [[0, 940], [-0.6, 120, OUT], [0, 110, IN], [0, 30], [0.6, 110, OUT], [0, 110, IN]]);
        seq(m.lift, [[-0.012 * S, 150], [0.05 * S, 300, OUT], [0.04 * S, 500], [0, 500]]);
        seq(m.liftTilt, [[0, 150], [-6, 300, OUT], [-4, 500], [0, 500]]);
        seq(m.spread, [[1, 150], [1.09, 220, OUT], [1.09, 360], [1, 500]]);
        seq(m.markHide, [[0, 150], [1, 80], [1, 510], [0, 1]]);
        m.markPop.value = withDelay(740, withSequence(to(1, 70), to(0, 420)));
        m.flutter.value = withDelay(740, withSequence(to(1, 60), to(0, 600)));
        seq(m.kick, [[0, 150], [-5, 220], [0, 300]]);
        // One thump for the real landing; the little bounces after it are silent.
        cue('cheer', 140);
        cue('step', 740);
        return;
      }
      case 'wave': {
        // Hi! From the shoulder and the wrist, three times, the fingers
        // wiggling, leaning into it with the weight on that foot and a
        // little bob at the knees on every beat.
        showFace(rig.moods.wave);
        seq(m.wave, [[16, 200, OUT], [4, 150], [16, 150], [4, 150], [16, 150], [0, 300]]);
        seq(m.hand, [[16, 180, OUT], [-4, 150], [16, 150], [-4, 150], [16, 150], [0, 300]]);
        seq(m.flex, [[0.7, 100], [0.1, 100], [0.7, 100], [0.1, 100], [0.7, 100], [0.1, 100], [0.7, 100], [0.1, 100], [0, 200]]);
        seq(m.swing, [[7, 200, OUT], [-7, 300], [7, 300], [0, 300]]);
        seq(m.lean, [[3 * side, 250], [3 * side, 550], [0, 300]]);
        seq(m.step, [[-0.35 * side, 250], [-0.35 * side, 550], [0, 300]]);
        seq(m.arm, [[3, 250], [3, 550], [0, 300]]);
        seq(m.flick, [[1, 100], [1, 900], [0, 200]]);
        seq(m.flutter, [[0.4, 100], [0, 900]]);
        seq(m.sy, [[0.985, 150], [1.008, 150], [0.985, 150], [1.008, 150], [0.985, 150], [1.008, 150], [1, 200]], end);
        seq(m.sx, [[1.008, 150], [0.996, 150], [1.008, 150], [0.996, 150], [1.008, 150], [0.996, 150], [1, 200]]);
        cue('pop');
        return;
      }
      case 'cheer': {
        // "Yay!": the arms pump three times, fists clenching, with a bounce
        // and the feet tucking on every beat.
        showFace(rig.moods.celebrate);
        seq(m.raise, [[22, 160, OUT], [6, 150], [22, 150], [6, 150], [22, 150], [0, 320]]);
        seq(m.wave, [[16, 160, OUT], [4, 150], [16, 150], [4, 150], [16, 150], [0, 320]]);
        seq(m.arm, [[14, 160, OUT], [5, 150], [14, 150], [5, 150], [14, 150], [0, 320]]);
        seq(m.hand, [[14, 160], [0, 150], [14, 150], [0, 150], [14, 150], [0, 320]]);
        seq(m.flex, [[0.7, 160], [0, 150], [0.7, 150], [0, 150], [0.7, 150], [0, 320]]);
        seq(m.tuck, [[0.35, 160, OUT], [0, 150], [0.35, 150], [0, 150], [0.35, 150], [0, 320]]);
        seq(m.sy, [[1.04, 160], [0.95, 150], [1.04, 150], [0.95, 150], [1.04, 150], [1, 320]], end);
        seq(m.sx, [[0.97, 160], [1.04, 150], [0.97, 150], [1.04, 150], [0.97, 150], [1, 320]]);
        m.hop.value = withSequence(
          to(-H * 0.2, 160, OUT),
          to(0, 150, IN),
          to(-H * 0.2, 150, OUT),
          to(0, 150, IN),
          to(-H * 0.2, 150, OUT),
          to(0, 150, IN),
        );
        seq(m.spread, [[1.06, 160], [1, 600], [1, 300]]);
        seq(m.flutter, [[0.8, 100], [0, 900]]);
        cue('cheer');
        return;
      }
      case 'present': {
        // Look what I've got: the gift comes up and forward, the arms with
        // it, the head leans to it, one foot pops up behind, the flower
        // opens, and it sparkles.
        showFace(rig.moods.happy);
        seq(m.lift, [[0.07 * S, 350, OUT], [0.07 * S, 600], [0, 450]]);
        seq(m.liftTilt, [[-8, 350, OUT], [-6, 600], [0, 450]]);
        seq(m.lean, [[-3, 350], [-3, 600], [0, 450]]);
        seq(m.spread, [[1.05, 350], [1.05, 600], [1, 450]]);
        seq(m.wave, [[10, 300], [4, 200], [10, 200], [0, 400]]);
        seq(m.arm, [[6, 350, OUT], [6, 600], [0, 450]]);
        seq(m.hand, [[14, 300], [0, 200], [14, 200], [0, 400]]);
        // Leaning left, the weight is on the left foot: the right one pops up.
        seq(m.step, [[0, 250], [0.7, 200, OUT], [0.7, 550], [0, 400]]);
        seq(m.sy, [[0.95, 100], [1.03, 250], [1, 1050]], end);
        m.flutter.value = withDelay(300, withSequence(to(0.8, 60), to(0, 600)));
        cue('gift', 250);
        return;
      }
      case 'hop': {
        // Two little hops, from one foot to the other, wobbling for balance;
        // a pose standing on one leg hops on it twice.
        showFace(rig.moods.happy);
        m.hop.value = withSequence(
          to(-H * 0.32, 150, OUT),
          to(0, 140, IN),
          withDelay(60, to(-H * 0.32, 150, OUT)),
          to(0, 140, IN),
        );
        seq(m.sy, [[1.05, 150], [0.92, 140], [1.05, 210], [0.92, 140], [1.03, 120], [1, 160]], end);
        seq(m.sx, [[0.97, 150], [1.06, 140], [0.97, 210], [1.06, 140], [0.99, 120], [1, 160]]);
        seq(m.lean, [[3, 150], [-2, 140], [-3, 210], [2, 140], [0, 280]]);
        seq(m.raise, [[10, 150], [4, 140], [10, 210], [0, 300]]);
        seq(m.wave, [[10, 150], [4, 140], [10, 210], [0, 300]]);
        seq(m.arm, [[8, 150], [3, 140], [8, 210], [0, 300]]);
        // Leaning right lifts the left foot, then leaning left the right one.
        seq(m.step, [[-0.9, 150, OUT], [0, 140, IN], [0, 60], [0.9, 150, OUT], [0, 140, IN]]);
        seq(m.kick, [[-4, 150], [0, 140], [-4, 210], [0, 300]]);
        seq(m.flick, [[1, 100], [1, 600], [0, 200]]);
        m.markPop.value = withDelay(290, withSequence(to(1, 60), to(0, 200), withDelay(140, withSequence(to(1, 60), to(0, 300)))));
        cue('step', 290);
        cue('step', 640);
        return;
      }
    }
  };

  // ── the easter egg ─────────────────────────────────────────────────────
  // Seven quick pokes and it is offended. Only the drawing changes: every
  // move, face and fidget stays this mascot's own, so the idle tick and its
  // frame callback carry on untouched, and only the drawing is remounted,
  // keyed, never anything above it. The moment runs on its own timers,
  // which `play` never clears; `sulky` covers it from the seventh tap until
  // the giggle starts, and while it is set a tap is only the host's.
  const [sulking, setSulking] = useState(false);
  const sulky = useRef(false);
  const giggle = useRef(false);
  const sulkTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const sulkLater = (ms: number, fn: () => void) => {
    sulkTimers.current.push(setTimeout(fn, ms));
  };
  // Calm on anything about pain: never the sore-foot or tearful art, an
  // aching mascot or a sad one. Never one cut off at an edge either, which
  // a whole standing figure would break out of. Never when it cannot be
  // seen moving.
  const teasable =
    easterEgg &&
    onPress != null &&
    !reduceMotion &&
    !paused &&
    !ache &&
    resting !== 'sad' &&
    AT_EDGE[rig.name] == null &&
    !rig.marks.some((mark) => mark.role === 'ache');

  /** Squashed, the eyes squeezed shut: a drawing is swapped at the bottom of it. */
  const cut = () => {
    seq(m.sy, [[0.9, CUT_MS, IN]]);
    seq(m.sx, [[1.05, CUT_MS, IN]]);
    m.swap.value = to(1, CUT_MS, IN);
  };

  const startSulk = () => {
    sulky.current = true;
    timers.current.forEach(clearTimeout);
    timers.current = [];
    // Whatever was playing is over: its end can no longer match, and
    // nothing fidgets, glances or blinks by itself until the giggle is done.
    playing.current = ++serial.current;
    busy.value = 1;
    setWincing(false);
    stopFidget();
    m.shake.value = to(0, CUT_MS);
    cut();
    sulkLater(CUT_MS, () => setSulking(true));
  };

  // Played once the offended drawing is in (from the effect below, so it
  // starts on the new drawing rather than ahead of it).
  const huff = () => {
    const S = offendedRig.box.size;
    m.blinkable.value = offendedRig.blinks.includes(SULK_FACE) ? 1 : 0;
    m.swap.value = to(0, 140, OUT);
    // "Hmph!": drawn up tall with the petals bristling, then a sharp breath
    // out, a little shake, and the puff popping off the head.
    seq(m.sy, [[1.07, 150, OUT], [0.95, 90, IN], [1.02, 110], [1, 160]]);
    seq(m.sx, [[0.96, 150, OUT], [1.04, 90, IN], [0.99, 110], [1, 160]]);
    seq(m.spread, [[1.08, 150, OUT], [1.08, 90], [1, 400]]);
    seq(m.flutter, [[0, 240], [0.8, 50], [0, 500]]);
    seq(m.shake, [[0, 240], [-0.008 * S, 50], [0.007 * S, 60], [-0.004 * S, 60], [0, 70]]);
    // The nose goes up, and stays up: not looking at you.
    seq(m.look, [[0, 150], [-5, 140, OUT], [-3, 260]]);
    // The weight onto the left foot, and the right one taps, three times,
    // the marks by it popping on each landing.
    seq(m.lean, [[0, 600], [-1.5, 200]]);
    seq(m.step, [
      [0, 750],
      [0.8, 110, OUT],
      [0, 100, IN],
      [0, 270],
      [0.8, 110, OUT],
      [0, 100, IN],
      [0, 270],
      [0.8, 110, OUT],
      [0, 100, IN],
    ]);
    seq(m.markPop, [
      [0, 240],
      [1, 60],
      [0, 380],
      [0, 280],
      [0.4, 50],
      [0, 200],
      [0, 230],
      [0.4, 50],
      [0, 200],
      [0, 230],
      [0.4, 50],
      [0, 200],
    ]);
    // One slow, unimpressed blink.
    seq(m.blink, [[0, 1350], [1, 120, IN], [1, 100], [0, 160, OUT]]);
    if (soundOn.current) sulkLater(240, () => playMascotSound('pop'));
    sulkLater(SULK_MS, () => {
      // Squashed again, the head straightening, and its own drawing comes
      // back at the bottom of it, wearing its own resting face.
      cut();
      m.look.value = to(0, CUT_MS);
      m.lean.value = to(0, CUT_MS);
      sulkLater(CUT_MS, () => {
        sulkTimers.current = [];
        giggle.current = true;
        setSulking(false);
        wear(restFace.current);
      });
    });
  };

  /** Cut short, with no giggle: back to its own drawing and at rest at once. */
  const endSulk = () => {
    if (!sulky.current) return;
    sulky.current = false;
    giggle.current = false;
    sulkTimers.current.forEach(clearTimeout);
    sulkTimers.current = [];
    setSulking(false);
    wear(restFace.current);
    playing.current = 0;
    busy.value = 0;
    stopFidget();
    for (const value of [m.shake, m.markPop, m.blink, m.swap]) value.value = to(0, 160);
  };

  useEffect(() => {
    if (sulking) {
      if (sulky.current) huff();
      return;
    }
    if (!giggle.current) return;
    giggle.current = false;
    sulky.current = false;
    m.swap.value = to(0, 140, OUT);
    play('poke');
    // `huff` and `play` close over shared values and refs only; this is the trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sulking]);

  // Covered, hidden, Reduce Motion turned on, or now about pain: it stops sulking at once.
  useEffect(() => {
    if (!teasable) endSulk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teasable]);

  /** A tap: a poke, or on the seventh quick one an offence; while it sulks, nothing of its own. */
  const taps = useRef<number[]>([]);
  const tapped = () => {
    if (sulky.current) return;
    const now = Date.now();
    taps.current = taps.current.filter((at) => now - at < TEASE_WINDOW_MS);
    taps.current.push(now);
    if (teasable && taps.current.length >= TEASE_TAPS) {
      taps.current = [];
      startSulk();
    } else {
      play('poke');
    }
  };

  /** A shot the host asks for ends a sulk at once, then plays on the mascot's own drawing. */
  const act = (shot: MascotShot) => {
    endSulk();
    play(shot);
  };

  useImperativeHandle(ref, () => ({ play: act }));

  // A held state is blended in; a one-shot state plays when it arrives.
  const previous = useRef<MascotState | null>(null);
  useEffect(() => {
    const target = LOOPS[restingOf(state)];
    const blend = 520;
    m.tempo.value = settle(target.tempo, blend);
    m.breath.value = settle(target.breath, blend);
    m.sway.value = settle(target.sway, blend);
    m.droop.value = settle(target.droop, blend);
    m.sink.value = settle(target.sink, blend);
    m.tilt.value = settle(target.tilt, blend);
    m.rub.value = settle(target.rub, blend);
    m.throb.value = settle(Math.max(target.throb, ache ? 0.7 : 0), blend);
    m.eyeY.value = settle(target.eyes * (rig.box.size / 1100), blend);
    m.balance.value = settle(rig.parts.some((part) => part.role === 'stand') && restingOf(state) !== 'sad' ? 0.8 : 0, blend);
    canGlance.value = rig.glance != null && restingOf(state) === 'idle' ? 1 : 0;
    calm.value = CALM[restingOf(state)] * (ASLEEP.has(rig.name) ? 0.5 : 1);
    const changed = previous.current !== state;
    previous.current = state;
    if (changed && (state === 'wave' || state === 'happy' || state === 'celebrate')) act(state);
    else if (playing.current === 0) showFace(restingFace);
    // `play` and `showFace` close over shared values only; these are the triggers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, restingFace, ache]);

  useEffect(() => {
    m.ache.value = settle(Math.min(Math.max(intensity, 0), 1), 400);
  }, [intensity, m.ache]);

  // The ache marks are mounted only while they can show; they leave after
  // the mood's blend has faded them.
  const wantsAche = resting !== 'idle' || wincing || ache;
  const [aching, setAching] = useState(wantsAche);
  useEffect(() => {
    if (wantsAche) {
      setAching(true);
      return undefined;
    }
    const timer = setTimeout(() => setAching(false), 600);
    return () => clearTimeout(timer);
  }, [wantsAche]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
      sulkTimers.current.forEach(clearTimeout);
      if (faceTimer.current != null) clearTimeout(faceTimer.current);
    },
    [],
  );

  const art = reduceMotion ? (
    <MascotStill
      rig={rig}
      size={size}
      face={restingFace}
      surface={surface}
      paper={paper}
      ink={ink}
      aching={resting === 'sad' || ache}
      mirrored={mirrored}
    />
  ) : (
    <View pointerEvents="none" style={[{ width: size, height: size }, mirrored && styles.mirror]}>
      {/* Keyed on the sulk, so the offended art comes in as a fresh drawing
          rather than one rig reshaped into another; a host's own change of
          rig is drawn as it always was. */}
      <MascotDrawing
        key={sulking ? 'sulk' : 'own'}
        rig={sulking ? offendedRig : rig}
        size={size}
        colors={colors}
        motion={m}
        face={sulking ? SULK_FACE : worn}
        aching={aching}
      />
    </View>
  );
  if (onPress == null) return art;
  return (
    <Pressable
      accessible={false}
      importantForAccessibility="no-hide-descendants"
      hitSlop={8}
      onPress={() => {
        tapped();
        onPress();
      }}>
      {art}
    </Pressable>
  );
}

/**
 * The traced art standing still: exactly the drawing, wearing `face` (the
 * art's own unless asked). What Reduce Motion shows, and a cheap stand-in
 * wherever nothing needs to move.
 */
export function MascotStill({
  rig,
  size,
  face,
  surface,
  paper,
  ink,
  aching = false,
  mirrored = false,
}: {
  rig: MascotRig;
  size: number;
  face?: string;
  surface?: string;
  /** The body's fill, as `Mascot`'s `paper`. */
  paper?: string;
  /** The outline and the face, as `Mascot`'s `ink`. */
  ink?: string;
  /** Show the ache marks, as the art of a sore foot has them. */
  aching?: boolean;
  /** Drawn facing the other way, as `Mascot`'s `mirrored`. */
  mirrored?: boolean;
}) {
  const colors = useMascotColors(surface, paper, ink);
  const m: Motion = useMotion(aching ? ACHING : STILL, false);
  // Props change while the still is mounted (Reduce Motion follows the
  // mood with it), and shared values only take their first value.
  useEffect(() => {
    m.throb.value = aching ? 1 : 0;
  }, [aching, m.throb]);
  return (
    <View pointerEvents="none" style={[{ width: size, height: size }, mirrored && styles.mirror]}>
      <MascotDrawing
        rig={rig}
        size={size}
        colors={colors}
        motion={m}
        face={face ?? Object.keys(rig.faces)[0]}
        aching={aching}
        shadow={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /** A horizontal flip about the square's centre, the transform's default origin. */
  mirror: { transform: [{ scaleX: -1 }] },
});

const STILL: Loop = { tempo: 0, breath: 0, sway: 0, droop: 0, sink: 0, tilt: 0, rub: 0, throb: 0, eyes: 0 };
const ACHING: Loop = { ...STILL, throb: 1 };
