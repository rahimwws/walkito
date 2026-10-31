import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { accents, meterColors, type AccentName } from '@/shared/config';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { MascotStill, runningRig, walkingRig } from '@/shared/ui/mascot';

/**
 * What waits at the start of each part of the flow, and at the end: the same
 * holographic 3D art as the building screen, so the bar is the plan being
 * collected. The feet, then the safety check, then the week; the star is the
 * plan itself.
 */
const CHECKPOINT_ART: readonly ImageSourcePropType[] = [
  require('@assets/onboarding/building/foot.webp'),
  require('@assets/onboarding/building/shield.webp'),
  require('@assets/onboarding/building/calendar.webp'),
];
const FINISH_ART = require('@assets/onboarding/building/star.webp');

/** The fill: the brand violet warming to pink as it goes. */
const FILL = 'linear-gradient(90deg, #7C5CFF 0%, #A47BFF 55%, #E879F9 100%)';

const BAR = 8;
const ROOT = 30;
const RUNNER_SIZE = 28;
const ART = 22;
const RUN_MS = 640;
/** One hop as he sets off: up, and down again. */
const HOP_MS = 110;
const HOP = 6;
const SHINE = 46;

/** A part of the flow reached: the art swells and settles, and six dots fly
 * off it and fade. Half a second at most, and nothing waits for it. */
const POP_UP_MS = 120;
const POP_DOWN_MS = 200;
const BURST_MS = 420;
/** The dots, round the clock from the right: which accent, how far (pt). */
const DOTS: readonly { accent: AccentName; reach: number }[] = [
  { accent: 'violet', reach: 14 },
  { accent: 'teal', reach: 11 },
  { accent: 'amber', reach: 16 },
  { accent: 'orange', reach: 12 },
  { accent: 'blue', reach: 15 },
  { accent: 'teal', reach: 10 },
];
const DOT = 4;

export type StepProgressProps = {
  /** 0-based index of the current step. */
  index: number;
  count: number;
  /** Where each new part of the flow starts, as a share of the bar (0–1). */
  checkpoints: readonly number[];
  /** Somebody who runs: he runs along the bar. Everyone else, he walks. */
  runner: boolean;
};

/**
 * The flow's progress, as a run to the plan.
 *
 * One bar that creeps, never a segment per question (segments invite
 * counting). It fills in the brand gradient, and a glint runs along the fill
 * each time it grows. The mascot goes over it to wherever it has reached,
 * running for a runner and walking for everyone else: forward he hops once as
 * he sets off; back, he turns and goes the other way. At the start of each
 * part waits a piece of 3D art, faint until he gets there and then lit, with
 * a tap and a small burst of dots; the star at the end is the plan.
 *
 * He is the still drawing, not the live rig: the coach in the corner is the
 * one that moves, and two idle loops on one screen would be one too many.
 * Every move plays once and ends still: no loop. With Reduce Motion he moves
 * without the hop, nothing glints, and a part reached only flashes.
 */
export function StepProgress({ index, count, checkpoints, runner }: StepProgressProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const reduceMotion = useReducedMotion();

  const progress = Math.min(Math.max((index + 1) / count, 0), 1);
  const [width, setWidth] = useState(0);

  const fill = useSharedValue(progress);
  const x = useSharedValue(progress);
  const hop = useSharedValue(0);
  const facing = useSharedValue(1);
  const shine = useSharedValue(-1);
  const last = useRef(progress);

  useEffect(() => {
    if (progress === last.current) return;
    const forward = progress > last.current;
    last.current = progress;
    fill.value = settle(progress, RUN_MS);
    x.value = settle(progress, RUN_MS);
    facing.value = forward ? 1 : -1;
    if (reduceMotion || !forward) return;
    shine.value = -1;
    shine.value = withDelay(RUN_MS - 120, withTiming(1, { duration: 620, easing: Easing.inOut(Easing.quad) }));
    hop.value = withSequence(
      withTiming(1, { duration: HOP_MS, easing: Easing.out(Easing.quad) }),
      withTiming(0, { duration: HOP_MS, easing: Easing.in(Easing.quad) }),
    );
  }, [progress, reduceMotion, fill, x, hop, facing, shine]);

  const passed = checkpoints.filter((at) => progress >= at).length + (progress >= 1 ? 1 : 0);
  const lastPassed = useRef(passed);
  /** The part just reached, and a count that only grows, so reaching the same
   * one again (back, then forward) bursts again. The star at the end only
   * lights: it is the end of the questions, not the start of a part. */
  const [burst, setBurst] = useState<{ at: number; n: number } | null>(null);
  useEffect(() => {
    if (passed > lastPassed.current) {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      const at = passed - 1;
      if (at < checkpoints.length) setBurst((prev) => ({ at, n: (prev?.n ?? 0) + 1 }));
    }
    lastPassed.current = passed;
  }, [passed, checkpoints.length]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: fill.value }] }));
  // The glint crosses the filled part only, from its start to its end.
  const shineStyle = useAnimatedStyle(() => ({
    opacity: shine.value <= -1 || shine.value >= 1 ? 0 : 1,
    transform: [{ translateX: -SHINE + ((shine.value + 1) / 2) * (fill.value * width + SHINE) }],
  }));
  const runnerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value * width - RUNNER_SIZE / 2 },
      { translateY: -hop.value * HOP },
      { scaleX: facing.value },
    ],
  }));

  return (
    <View style={styles.root} onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
      <View style={[styles.track, { backgroundColor: meter.track }]}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.fill, { experimental_backgroundImage: FILL }, fillStyle]} />
        <Animated.View style={[styles.shine, shineStyle]} pointerEvents="none" />
      </View>

      {width > 0 &&
        checkpoints.map((at, i) => (
          <Checkpoint
            key={at}
            art={CHECKPOINT_ART[i] ?? CHECKPOINT_ART[CHECKPOINT_ART.length - 1]}
            left={at * width - ART / 2}
            lit={progress >= at}
            burst={burst?.at === i ? burst.n : 0}
          />
        ))}

      {width > 0 && <Checkpoint art={FINISH_ART} left={width - ART + 4} lit={progress >= 1} size={ART + 4} />}

      {width > 0 && (
        <Animated.View pointerEvents="none" accessibilityElementsHidden style={[styles.runner, runnerStyle]}>
          <MascotStill rig={runner ? runningRig : walkingRig} size={RUNNER_SIZE} />
        </Animated.View>
      )}
    </View>
  );
}

/** One piece of art on the bar: faint and small ahead of the runner, then lit
 * and full size once he reaches it, on the settle curve. `burst` counts the
 * times he has reached it going forward; each new count swells it and throws
 * the dots. */
function Checkpoint({
  art,
  left,
  lit,
  size = ART,
  burst = 0,
}: {
  art: ImageSourcePropType;
  left: number;
  lit: boolean;
  size?: number;
  burst?: number;
}) {
  const reduceMotion = useReducedMotion();
  const on = useSharedValue(lit ? 1 : 0);
  const pop = useSharedValue(1);
  const flash = useSharedValue(1);
  useEffect(() => {
    on.value = settle(lit ? 1 : 0, 420);
  }, [lit, on]);
  useEffect(() => {
    if (burst === 0) return;
    if (reduceMotion) {
      // A flash, and nothing that moves.
      flash.value = withSequence(
        withTiming(0.35, { duration: 100, reduceMotion: ReduceMotion.Never }),
        withTiming(1, { duration: 220, reduceMotion: ReduceMotion.Never }),
      );
      return;
    }
    pop.value = withSequence(
      withTiming(1.3, { duration: POP_UP_MS, easing: Easing.out(Easing.quad) }),
      settle(1, POP_DOWN_MS),
    );
  }, [burst, reduceMotion, pop, flash]);
  const style = useAnimatedStyle(() => ({
    opacity: (0.5 + on.value * 0.5) * flash.value,
    transform: [{ scale: (0.78 + on.value * 0.22) * pop.value }],
  }));
  return (
    <View
      pointerEvents="none"
      style={[styles.checkpoint, { left, width: size, height: size, top: ROOT / 2 - size / 2 }]}>
      <Animated.View style={[styles.fillImage, style]}>
        <Image source={art} style={styles.fillImage} resizeMode="contain" accessibilityElementsHidden />
      </Animated.View>
      {burst > 0 && !reduceMotion && <Burst key={burst} />}
    </View>
  );
}

/** Six dots thrown off a part reached. Played once on mount, then gone to
 * nothing; the next burst is a fresh one (keyed by its count). */
function Burst() {
  const scheme = useColorScheme();
  const t = useSharedValue(0);
  useEffect(() => {
    t.value = withTiming(1, { duration: BURST_MS, easing: Easing.out(Easing.quad) });
  }, [t]);
  return (
    <View style={styles.burst}>
      {DOTS.map((dot, i) => (
        <BurstDot
          key={i}
          t={t}
          angle={(i / DOTS.length) * Math.PI * 2}
          reach={dot.reach}
          color={accents[scheme][dot.accent].fill}
        />
      ))}
    </View>
  );
}

function BurstDot({ t, angle, reach, color }: { t: SharedValue<number>; angle: number; reach: number; color: string }) {
  const style = useAnimatedStyle(() => ({
    opacity: 1 - t.value,
    transform: [{ translateX: Math.cos(angle) * reach * t.value }, { translateY: Math.sin(angle) * reach * t.value }],
  }));
  return <Animated.View style={[styles.dot, { backgroundColor: color }, style]} />;
}

const styles = StyleSheet.create({
  // Tall enough to carry the art on the bar without the header growing.
  root: {
    flex: 1,
    height: ROOT,
    justifyContent: 'center',
  },
  track: {
    height: BAR,
    borderRadius: BAR / 2,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: BAR / 2,
    transformOrigin: 'left center',
  },
  shine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: SHINE,
    experimental_backgroundImage:
      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)',
  },
  checkpoint: {
    position: 'absolute',
  },
  /** The dots start at the art's centre. */
  burst: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  dot: {
    position: 'absolute',
    left: -DOT / 2,
    top: -DOT / 2,
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
  },
  runner: {
    position: 'absolute',
    left: 0,
    bottom: ROOT / 2 + BAR / 2 - 3,
    width: RUNNER_SIZE,
    height: RUNNER_SIZE,
  },
  fillImage: {
    width: '100%',
    height: '100%',
  },
});
