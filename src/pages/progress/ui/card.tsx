import { useEffect } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { Easing, ReduceMotion, useSharedValue, withTiming, type SharedValue } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/** One corner for every card on the screen, so the column reads as one set. */
export const CARD_RADIUS = 28;

/**
 * A card: surface, corner and the title row. `aside` sits on the right of the
 * title — a delta chip, a caption.
 */
export function Card({
  title,
  aside,
  children,
  style,
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  return (
    <View style={[styles.card, { backgroundColor: colors.card }, style]}>
      <View style={styles.head}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} numberOfLines={1}>
          {title}
        </Text>
        {aside}
      </View>
      {children}
    </View>
  );
}

/**
 * A change, as a small capsule.
 *
 * Green only when the change is an improvement — and then only the chip, never
 * the number. Anything else, a dip included, is the neutral tile: a worse week
 * is information, not an error.
 */
export function DeltaChip({ label, improving }: { label: string; improving: boolean }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return (
    <View style={[styles.chip, { backgroundColor: improving ? meter.positiveBg : meter.iconTile }]}>
      <Text style={[styles.chipText, { color: improving ? meter.positive : meter.label }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

/**
 * 0 → 1 once, when the card first mounts. Charts grow in on it; a range change
 * or a new reading redraws without replaying it. Reduce Motion lands at 1.
 */
export function useGrowIn(duration = 650): SharedValue<number> {
  const grow = useSharedValue(0);
  useEffect(() => {
    grow.value = withTiming(1, {
      duration,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
    // Mount only, on purpose.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return grow;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: CARD_RADIUS,
    borderCurve: 'continuous',
    padding: 18,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    minHeight: 28,
  },
  title: { ...fonts.bold(19, -0.4), flexShrink: 1 },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexShrink: 1,
  },
  chipText: fonts.semibold(13),
});
