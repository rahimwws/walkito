import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const HEIGHT = 4;
const FILL_MS = 380;

export type StepProgressProps = {
  /** 0-based index of the current step. */
  index: number;
  count: number;
};

/**
 * One thin bar, sitting between the back and close controls.
 *
 * Copied from how the top running apps do it (Runna, Campus Coach): a single
 * continuous track about half the header's width, not a segment per question.
 * Segments invite counting, and a flow that announces "step 4 of 15" reads as
 * a form; one bar that creeps says "nearly there" without ever naming a
 * number.
 */
export function StepProgress({ index, count }: StepProgressProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const progress = Math.min(Math.max((index + 1) / count, 0), 1);

  const value = useDerivedValue(
    () =>
      withTiming(progress, {
        duration: FILL_MS,
        // The reference curve from the design skill — the built-in easings are
        // too weak to read as a deliberate advance.
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [progress],
  );

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: value.value }] }));

  return (
    <View style={[styles.track, { backgroundColor: meter.track }]}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          styles.fill,
          { backgroundColor: colors.foreground },
          fillStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flex: 1,
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: HEIGHT / 2,
    transformOrigin: 'left center',
  },
});
