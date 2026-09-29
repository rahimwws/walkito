import { useEffect, useSyncExternalStore } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { useColorScheme } from '@/shared/lib/theme';

/**
 * How far down the screen the glow reaches before it is fully gone. Kept under
 * half: past that it stops reading as light falling into the screen and starts
 * reading as a coloured panel the content is sitting on.
 */
const REACH = 0.46;

/**
 * Bleed on every side, so a bloom drifting outwards never drags the edge of its
 * own gradient into view. Sized against the largest amplitude below.
 */
const OVERSCAN = 120;

/**
 * One turn of the master clock. Everything is a multiple of this, which is what
 * lets the loop close seamlessly: at the wrap the phase goes from 1 back to 0,
 * and `sin(2π) === sin(0)`, so every layer is exactly where it started with
 * exactly the velocity it had. There is no seam to see.
 */
const CYCLE_MS = 26000;

/**
 * The three blooms, and how each one moves.
 *
 * They are separate layers rather than three gradients in one string for one
 * reason: motion you can actually see. Sliding the whole wash as a single
 * object is nearly invisible — the shape is soft and roughly symmetrical, so
 * shifting it bodily by twenty points changes almost nothing about what is on
 * screen. Moving the blooms *against each other* is a different matter: where
 * they overlap the light swells and thins, and that is the part the eye picks
 * up.
 *
 * `rate` is how many times a bloom completes its swing per cycle, and it must
 * be a whole number or the loop would not close. `phase` is where it starts,
 * in turns — the numbers are irregular so the three never line up and set off
 * as a group.
 */
const BLOOMS = [
  {
    key: 'violet',
    shape: { rx: 1.3, ry: 0.75, cx: 0.18, cy: -0.05, rgb: '139,92,246', alpha: 0.55, stop: 62 },
    x: 64,
    y: 36,
    xRate: 1,
    yRate: 2,
    xPhase: 0,
    yPhase: 0.25,
    scale: 0.09,
    scaleRate: 1,
    scalePhase: 0.4,
  },
  {
    key: 'lilac',
    shape: { rx: 1.05, ry: 0.6, cx: 0.88, cy: 0.06, rgb: '167,139,250', alpha: 0.42, stop: 66 },
    x: 56,
    y: 44,
    xRate: 2,
    yRate: 1,
    xPhase: 0.35,
    yPhase: 0.7,
    scale: 0.12,
    scaleRate: 2,
    scalePhase: 0.15,
  },
  {
    key: 'indigo',
    shape: { rx: 1.5, ry: 0.85, cx: 0.55, cy: -0.18, rgb: '99,102,241', alpha: 0.34, stop: 72 },
    x: 46,
    y: 30,
    xRate: 1,
    yRate: 3,
    xPhase: 0.62,
    yPhase: 0.1,
    scale: 0.1,
    scaleRate: 1,
    scalePhase: 0.8,
  },
] as const;

type Shape = (typeof BLOOMS)[number]['shape'];

/**
 * How much taller the painted box is than the area the blooms are sized to.
 *
 * Each bloom's height and centre are divided through by it (see `gradientFor`),
 * so the extra height changes nothing about their shape — it only gives each
 * one room to fade all the way out. Sized to the box exactly, Android's
 * gradient ended a few shades above the background and drew a visible line
 * across the screen where the box stopped.
 */
const FADE_ROOM = 1.6;

/**
 * One bloom, as a gradient over a box `FADE_ROOM` times taller than the area it
 * is sized to. Percentages rather than points, divided through by the extra
 * height so the bloom keeps the shape it had in the shorter box: Android reads
 * percentages exactly as iOS does, and point positions — negative ones above
 * all — it does not.
 */
function gradientFor(shape: Shape, alpha: number): string {
  const pct = (n: number) => `${Math.round(n * 1000) / 10}%`;
  return (
    `radial-gradient(${pct(shape.rx)} ${pct(shape.ry / FADE_ROOM)} at ${pct(shape.cx)} ${pct(shape.cy / FADE_ROOM)}, ` +
    `rgba(${shape.rgb},${shape.alpha * alpha}) 0%, rgba(${shape.rgb},0) ${shape.stop}%)`
  );
}

export type GlowProps = {
  /** Drift, for screens the user sits on. The flow leaves it still: there,
   * something new arrives every few seconds already, and a second moving thing
   * behind it is noise. */
  animated?: boolean;
  /** Hold the drift where it is. For a screen that is mounted but not being
   * looked at — a tab in the background keeps its tree alive, and three
   * full-width layers re-composited every frame behind a session player were
   * a steady share of what made the phone warm. */
  paused?: boolean;
};

/**
 * Anything on screen that should stop the drift wherever a Glow is mounted.
 *
 * A count rather than a flag, so two holders cannot release each other. The
 * session player takes one for its whole life: it is presented over Home in a
 * page sheet, which leaves Home rendering — and animating — underneath it.
 */
let holders = 0;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

/** Stops every drifting Glow until the returned release is called. */
export function holdGlowStill(): () => void {
  holders += 1;
  emit();
  let released = false;
  return () => {
    if (released) return;
    released = true;
    holders -= 1;
    emit();
  };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const heldStill = () => holders > 0;

/**
 * The violet wash behind the app.
 *
 * Three overlapping radial gradients rather than one: a single gradient reads
 * as a lamp pointed at the screen, while several offset blooms of different
 * sizes read as light — which is the whole trick in the reference. They are
 * intentionally lopsided (left-heavy, one high on the right) so the shape never
 * resolves into something symmetrical enough to look like a graphic.
 *
 * Drawn with `experimental_backgroundImage` rather than a blurred stack of
 * circles: the gradients *are* the blur, so there is no blur pass, no extra
 * dependency, and nothing to composite every frame.
 *
 * Still, the three are flattened into one layer — one view, one paint. Only the
 * drifting version pays for three, and even then the movement is a transform
 * per layer: a gradient string is not an animatable property, so animating the
 * light by rewriting it would mean re-parsing three gradients on the JS thread
 * every frame, where translating the views they are painted on costs nothing
 * and keeps running while a list is scrolling.
 */
export function Glow({ animated = false, paused = false }: GlowProps) {
  const scheme = useColorScheme();
  const held = useSyncExternalStore(subscribe, heldStill, heldStill);
  const still = paused || held;
  const { height } = useWindowDimensions();

  // Light mode gets roughly half the strength. The same alphas that read as a
  // glow on near-black turn into a bruise on near-white.
  const a = scheme === 'dark' ? 1 : 0.45;

  // The still one needs no overscan: it never drifts, so there is no edge to
  // swing into view. It does get the fade room below.
  if (!animated) {
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.still,
          {
            height: height * REACH * FADE_ROOM,
            experimental_backgroundImage: BLOOMS.map((b) => gradientFor(b.shape, a)).join(', '),
          },
        ]}
      />
    );
  }

  return (
    <>
      {BLOOMS.map((bloom) => (
        <Bloom
          key={bloom.key}
          bloom={bloom}
          alpha={a}
          size={height * REACH + OVERSCAN}
          paused={still}
        />
      ))}
    </>
  );
}

function Bloom({
  bloom,
  alpha,
  size,
  paused,
}: {
  bloom: (typeof BLOOMS)[number];
  alpha: number;
  size: number;
  paused: boolean;
}) {
  /**
   * A clock, not a position.
   *
   * The previous version animated the coordinates directly, as a repeating
   * `withSequence` of eased timings, and that is what made the movement snap:
   * the first leg travelled from 0 to +A while every leg after it travelled
   * from −A to +A, so the bloom doubled its speed a few seconds in and then
   * paused dead at each end of every swing.
   *
   * Here one value winds evenly from 0 to 1 forever and the position is read
   * off it as a sine. Velocity is continuous everywhere — there are no
   * endpoints to stop at, because the path never ends.
   */
  const phase = useSharedValue(0);
  /**
   * Where the clock stood when it was last stopped. A pause cancels the loop,
   * and restarting `withTiming` from part-way through would run the first lap
   * at a different speed; restarting from zero and carrying the offset keeps
   * the drift continuous across the stop.
   */
  const offset = useSharedValue(0);

  useEffect(() => {
    if (paused) {
      cancelAnimation(phase);
      return undefined;
    }
    offset.value = (offset.value + phase.value) % 1;
    phase.value = 0;
    phase.value = withRepeat(
      withTiming(1, {
        duration: CYCLE_MS,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      }),
      -1,
      false,
    );
    return () => cancelAnimation(phase);
  }, [phase, offset, paused]);

  const drift = useAnimatedStyle(() => {
    const clock = (phase.value + offset.value) % 1;
    const turn = (rate: number, start: number) =>
      Math.sin((clock * rate + start) * 2 * Math.PI);
    return {
      transform: [
        { translateX: turn(bloom.xRate, bloom.xPhase) * bloom.x },
        { translateY: turn(bloom.yRate, bloom.yPhase) * bloom.y },
        // Mapped to 0–1 rather than −1–1, so the bloom only ever grows from
        // its resting size instead of shrinking below it.
        {
          scale:
            1 + (turn(bloom.scaleRate, bloom.scalePhase) * 0.5 + 0.5) * bloom.scale,
        },
      ],
    };
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.drifting,
        { height: size * FADE_ROOM, experimental_backgroundImage: gradientFor(bloom.shape, alpha) },
        drift,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  still: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  drifting: {
    position: 'absolute',
    top: -OVERSCAN,
    left: -OVERSCAN,
    right: -OVERSCAN,
  },
});
