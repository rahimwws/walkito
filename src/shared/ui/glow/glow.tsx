import { useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
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
    gradient: (a: number) =>
      `radial-gradient(130% 75% at 18% -5%, rgba(139,92,246,${0.55 * a}) 0%, rgba(139,92,246,0) 62%)`,
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
    gradient: (a: number) =>
      `radial-gradient(105% 60% at 88% 6%, rgba(167,139,250,${0.42 * a}) 0%, rgba(167,139,250,0) 66%)`,
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
    gradient: (a: number) =>
      `radial-gradient(150% 85% at 55% -18%, rgba(99,102,241,${0.34 * a}) 0%, rgba(99,102,241,0) 72%)`,
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

export type GlowProps = {
  /** Drift, for screens the user sits on. The flow leaves it still: there,
   * something new arrives every few seconds already, and a second moving thing
   * behind it is noise. */
  animated?: boolean;
};

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
export function Glow({ animated = false }: GlowProps) {
  const scheme = useColorScheme();
  const { height } = useWindowDimensions();

  // Light mode gets roughly half the strength. The same alphas that read as a
  // glow on near-black turn into a bruise on near-white.
  const a = scheme === 'dark' ? 1 : 0.45;

  // The still one keeps its exact box: the gradients are positioned in
  // percentages of the layer, so padding it out for overscan would move every
  // bloom and quietly restyle the flow.
  if (!animated) {
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.still,
          {
            height: height * REACH,
            experimental_backgroundImage: BLOOMS.map((b) => b.gradient(a)).join(', '),
          },
        ]}
      />
    );
  }

  return (
    <>
      {BLOOMS.map((bloom) => (
        <Bloom key={bloom.key} bloom={bloom} alpha={a} size={height * REACH + OVERSCAN} />
      ))}
    </>
  );
}

function Bloom({
  bloom,
  alpha,
  size,
}: {
  bloom: (typeof BLOOMS)[number];
  alpha: number;
  size: number;
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

  useEffect(() => {
    phase.value = withRepeat(
      withTiming(1, {
        duration: CYCLE_MS,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      }),
      -1,
      false,
    );
  }, [phase]);

  const drift = useAnimatedStyle(() => {
    const turn = (rate: number, offset: number) =>
      Math.sin((phase.value * rate + offset) * 2 * Math.PI);
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
        { height: size, experimental_backgroundImage: bloom.gradient(alpha) },
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
