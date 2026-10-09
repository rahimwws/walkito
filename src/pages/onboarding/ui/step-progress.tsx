import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { meterColors } from '@/shared/config';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';

/** The mascot mid-stride, cut out: 120 px for a 40 pt slot at 3x. */
const RUNNER = require('@assets/onboarding/mascot-run.webp');

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
const RUNNER_SIZE = 30;
const ART = 22;
const RUN_MS = 640;
const STRIDE_MS = 110;
const SHINE = 46;

export type StepProgressProps = {
  /** 0-based index of the current step. */
  index: number;
  count: number;
  /** Where each new part of the flow starts, as a share of the bar (0–1). */
  checkpoints: readonly number[];
};

/**
 * The flow's progress, as a run to the plan.
 *
 * One bar that creeps, never a segment per question (segments invite
 * counting). It fills in the brand gradient, and a glint runs along the fill
 * each time it grows. The mascot runs over it to wherever it has reached:
 * forward he hops a few strides leaning in; back, he turns and runs the other
 * way. At the start of each part waits a piece of 3D art, faint until he gets
 * there and then lit, with a tap; the star at the end is the plan.
 *
 * Every move plays once and ends still: no loop, no overshoot. With Reduce
 * Motion he moves without the hops and nothing glints.
 */
export function StepProgress({ index, count, checkpoints }: StepProgressProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const reduceMotion = useReducedMotion();

  const progress = Math.min(Math.max((index + 1) / count, 0), 1);
  const [width, setWidth] = useState(0);

  const fill = useSharedValue(progress);
  const x = useSharedValue(progress);
  const hop = useSharedValue(0);
  const lean = useSharedValue(0);
  const facing = useSharedValue(1);
  const shine = useSharedValue(-1);
  const last = useRef(progress);

  useEffect(() => {
    const forward = progress >= last.current;
    last.current = progress;
    fill.value = settle(progress, RUN_MS);
    x.value = settle(progress, RUN_MS);
    facing.value = forward ? 1 : -1;
    if (reduceMotion) return;
    if (forward) {
      shine.value = -1;
      shine.value = withDelay(RUN_MS - 120, withTiming(1, { duration: 620, easing: Easing.inOut(Easing.quad) }));
    }
    const strides = Math.max(2, Math.round(RUN_MS / (STRIDE_MS * 2)));
    hop.value = withRepeat(
      withSequence(
        withTiming(1, { duration: STRIDE_MS, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: STRIDE_MS, easing: Easing.in(Easing.quad) }),
      ),
      strides,
    );
    lean.value = withSequence(
      withTiming(1, { duration: 160, easing: Easing.out(Easing.quad) }),
      withTiming(1, { duration: RUN_MS - 320 }),
      settle(0, 260),
    );
  }, [progress, reduceMotion, fill, x, hop, lean, facing, shine]);

  const passed = checkpoints.filter((at) => progress >= at).length + (progress >= 1 ? 1 : 0);
  const lastPassed = useRef(passed);
  useEffect(() => {
    if (passed > lastPassed.current) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    lastPassed.current = passed;
  }, [passed]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: fill.value }] }));
  // The glint crosses the filled part only, from its start to its end.
  const shineStyle = useAnimatedStyle(() => ({
    opacity: shine.value <= -1 || shine.value >= 1 ? 0 : 1,
    transform: [{ translateX: -SHINE + ((shine.value + 1) / 2) * (fill.value * width + SHINE) }],
  }));
  const runnerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: x.value * width - RUNNER_SIZE / 2 },
      { translateY: -hop.value * 5 },
      { rotate: `${lean.value * 7 * facing.value}deg` },
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
          />
        ))}

      {width > 0 && <Checkpoint art={FINISH_ART} left={width - ART + 4} lit={progress >= 1} size={ART + 4} />}

      {width > 0 && (
        <Animated.View pointerEvents="none" style={[styles.runner, runnerStyle]}>
          <Image source={RUNNER} style={styles.fillImage} resizeMode="contain" accessibilityElementsHidden />
        </Animated.View>
      )}
    </View>
  );
}

/** One piece of art on the bar: faint and small ahead of the runner, then lit
 * and full size once he reaches it, on the settle curve. */
function Checkpoint({ art, left, lit, size = ART }: { art: ImageSourcePropType; left: number; lit: boolean; size?: number }) {
  const on = useSharedValue(lit ? 1 : 0);
  useEffect(() => {
    on.value = settle(lit ? 1 : 0, 420);
  }, [lit, on]);
  const style = useAnimatedStyle(() => ({
    opacity: 0.5 + on.value * 0.5,
    transform: [{ scale: 0.78 + on.value * 0.22 }],
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.checkpoint, { left, width: size, height: size, top: ROOT / 2 - size / 2 }, style]}>
      <Image source={art} style={styles.fillImage} resizeMode="contain" accessibilityElementsHidden />
    </Animated.View>
  );
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
