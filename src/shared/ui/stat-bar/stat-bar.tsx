import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { useEffect } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { accents, fonts, palette, type Accent, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const BAR_HEIGHT = 6;
const FILL_DURATION_MS = 900;

export type StatBarProps = {
  icon: IconSvgElement;
  /** Reads as one string, e.g. "2.4 mi" or "230 kCal". */
  value: string;
  /** 0–1. Values outside the range are clamped. */
  fill: number;
  /** Which accent identifies this metric. Keep it stable across screens. */
  accent?: AccentName;
  style?: StyleProp<ViewStyle>;
};

/**
 * A secondary metric: tinted glyph, its value, and a continuous progress bar.
 *
 * The bar is continuous rather than ticked on purpose — `TickBar` reads as a
 * scored meter out of 100, while this is a plain fraction of a goal, and
 * mixing the two makes unrelated numbers look comparable.
 */
export function StatBar({ icon, value, fill, accent = 'blue', style }: StatBarProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const colors = palette[scheme];
  const tone: Accent = accents[scheme][accent];

  const clamped = Math.max(0, Math.min(fill, 1));
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(clamped, {
      duration: FILL_DURATION_MS,
      easing: Easing.out(Easing.cubic),
    });
  }, [clamped, progress]);

  // Scale rather than width: a width animation relayouts every frame, while a
  // transform stays on the UI thread.
  const fillStyle = useAnimatedStyle(() => ({
    transform: [{ scaleX: progress.value }],
  }));

  return (
    <View style={[styles.block, style]}>
      <View style={styles.header}>
        <HugeiconsIcon icon={icon} size={19} color={tone.fill} strokeWidth={2} />
        <Text style={[styles.value, { color: colors.foreground }]} numberOfLines={1}>
          {value}
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: tone.track }]}>
        <Animated.View
          style={[styles.fill, { backgroundColor: tone.fill }, fillStyle]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  value: {
    fontSize: 17,
    fontFamily: fonts.semibold,
    flexShrink: 1,
  },
  track: {
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
    overflow: 'hidden',
  },
  fill: {
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
    // Anchor the scale at the left edge so the bar grows rightward.
    transformOrigin: 'left',
    width: '100%',
  },
});
