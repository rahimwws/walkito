import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import type { SegmentState } from '../../model/test-day';

/** The row the close button and the progress sit in. Named because the flow
 * lays the count-in out beneath it. */
export const TEST_DAY_HEADER_HEIGHT = 56;

const CLOSE = 36;
const BAR = 5;
const FILL_MS = 380;

export type TestDayHeaderProps = {
  segments: readonly SegmentState[];
  onClose: () => void;
};

/**
 * The way out, and how far through the three tests this is.
 *
 * Three segments rather than the one creeping bar onboarding uses. Onboarding
 * hides its count because fifteen questions read as a form; three tests is a
 * number worth showing, and it is the same number the eyebrow below says in
 * words — "Test 2 of 3".
 *
 * The test under way is drawn faint and a finished one solid. A test is only
 * finished once its figures are confirmed, so the bar never runs ahead of what
 * has actually been written down.
 */
export function TestDayHeader({ segments, onClose }: TestDayHeaderProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const done = segments.filter((state) => state === 'done').length;

  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('testday.close')}
        onPress={onClose}
        hitSlop={10}
        style={({ pressed }) => [styles.close, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
        <HugeiconsIcon icon={Cancel01Icon} size={18} color={colors.foreground} strokeWidth={2.2} />
      </Pressable>

      <View
        style={styles.segments}
        accessible
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: segments.length, now: done }}>
        {segments.map((state, index) => (
          <Segment key={index} state={state} ink={colors.foreground} track={meter.track} />
        ))}
      </View>

      {/* The close button's width again, so the bar sits in the middle of the
          screen rather than in the middle of what the button leaves. */}
      <View style={styles.balance} />
    </View>
  );
}

function Segment({ state, ink, track }: { state: SegmentState; ink: string; track: string }) {
  const fill = useDerivedValue(
    () =>
      withTiming(state === 'todo' ? 0 : 1, {
        duration: FILL_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [state],
  );
  const shade = useDerivedValue(
    () => withTiming(state === 'active' ? 0.35 : 1, { duration: FILL_MS, reduceMotion: ReduceMotion.System }),
    [state],
  );
  const fillStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: fill.value }],
    opacity: shade.value,
  }));

  return (
    <View style={[styles.segment, { backgroundColor: track }]}>
      <Animated.View style={[StyleSheet.absoluteFill, styles.fill, { backgroundColor: ink }, fillStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: TEST_DAY_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  close: {
    width: CLOSE,
    height: CLOSE,
    borderRadius: CLOSE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
  segments: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
  },
  segment: {
    flex: 1,
    height: BAR,
    borderRadius: BAR / 2,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: BAR / 2,
    transformOrigin: 'left center',
  },
  balance: {
    width: CLOSE,
  },
});
