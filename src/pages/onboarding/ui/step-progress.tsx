import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { colors } from '@/shared/config';
import { settle } from '@/shared/lib/motion';

const BAR = 8;
const ROOT = 30;
const DOT = 12;
const RUN_MS = 640;

export type StepProgressProps = {
  /** 0-based index of the current step. */
  index: number;
  count: number;
  /** Where each new part of the flow starts, as a share of the bar (0–1). */
  checkpoints: readonly number[];
};

/**
 * The flow's progress.
 *
 * One flat violet bar that creeps, never a segment per question (segments
 * invite counting). At the start of each part, and at the end, sits a small
 * dot: an outlined white one ahead, filled violet once the bar reaches it,
 * with a light tap.
 */
export function StepProgress({ index, count, checkpoints }: StepProgressProps) {
  const progress = Math.min(Math.max((index + 1) / count, 0), 1);
  const [width, setWidth] = useState(0);

  const fill = useSharedValue(progress);
  const last = useRef(progress);
  useEffect(() => {
    if (progress === last.current) return;
    last.current = progress;
    fill.value = settle(progress, RUN_MS);
  }, [progress, fill]);

  const passed = checkpoints.filter((at) => progress >= at).length + (progress >= 1 ? 1 : 0);
  const lastPassed = useRef(passed);
  useEffect(() => {
    if (passed > lastPassed.current) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    lastPassed.current = passed;
  }, [passed]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: fill.value }] }));

  return (
    <View style={styles.root} onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
      <View style={styles.track}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.fill, fillStyle]} />
      </View>

      {width > 0 &&
        [...checkpoints, 1].map((at) => (
          <View
            key={at}
            pointerEvents="none"
            style={[
              styles.dot,
              { left: Math.min(at * width, width - DOT / 2) - DOT / 2 },
              progress >= at ? styles.dotLit : null,
            ]}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // The height the header has always given the bar.
  root: {
    flex: 1,
    height: ROOT,
    justifyContent: 'center',
  },
  track: {
    height: BAR,
    borderRadius: BAR / 2,
    overflow: 'hidden',
    backgroundColor: colors.surface2,
  },
  fill: {
    borderRadius: BAR / 2,
    backgroundColor: colors.accent,
    transformOrigin: 'left center',
  },
  dot: {
    position: 'absolute',
    top: ROOT / 2 - DOT / 2,
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
    borderWidth: 2,
    borderColor: colors.separator,
    backgroundColor: colors.surface,
  },
  dotLit: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
});
