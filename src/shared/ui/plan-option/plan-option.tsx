import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

export type PlanOptionProps = {
  title: string;
  /** "Best value", or the discount on a returning visit. */
  badge?: string;
  /** Draws the badge in the screen's own finish; a small capsule in `accent`
   * otherwise. */
  renderBadge?: (label: string) => ReactNode;
  /**
   * The billed amount — "$44.99 per year". The most prominent price on the
   * row, always.
   *
   * App Review Guideline 3.1.2: the amount actually charged, with its period,
   * must be the clearest price a subscription screen shows. Any computed
   * per-week figure goes in `note`, which is drawn at less than two thirds of
   * this size; the gap between the two styles below is what enforces it.
   */
  price: string;
  /** The price this one replaced, struck through beside it. Present only on a
   * discounted row: a permanent "was" next to a permanent price is the oldest
   * trick in the shop window. */
  was?: string;
  /** The secondary line: a per-week equivalent, or how billing works. */
  note?: string;
  /** Not for sale right now. The row still shows, but cannot be picked —
   * selecting it would arm a buy button with nothing behind it. */
  disabled?: boolean;
  selected: boolean;
  /** The colour a chosen row is outlined and lit in. The app's violet by
   * default; the paywall passes its own blue. */
  accent?: string;
  onPress: () => void;
};

/**
 * One plan on a subscription screen, as a radio row.
 *
 * Shared by the paywall and the expiry screen, which sell the same two plans
 * and must describe them identically: two screens drawing their own rows is
 * two places for the billed price to stop being the most prominent one.
 *
 * The selected row fills; the other is bare on the screen. Two filled cards
 * with a tick between them would make the unselected one look disabled.
 */
export function PlanOption({
  title,
  badge,
  renderBadge,
  price,
  was,
  note,
  disabled = false,
  selected,
  accent = PRIMARY,
  onPress,
}: PlanOptionProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: 180,
        easing: Easing.out(Easing.cubic),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );

  const rowStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(chosen.value, [0, 1], [colors.card, colors.card]),
    borderColor: interpolateColor(chosen.value, [0, 1], [meter.track, accent]),
  }));
  const dotStyle = useAnimatedStyle(() => ({ transform: [{ scale: chosen.value }] }));

  return (
    <Animated.View style={[styles.row, rowStyle, disabled && styles.disabled]}>
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled }}
        disabled={disabled}
        onPress={onPress}
        style={styles.press}>
        <View style={styles.head}>
          <View style={[styles.radio, { borderColor: selected ? accent : meter.unit }]}>
            <Animated.View style={[styles.radioDot, { backgroundColor: accent }, dotStyle]} />
          </View>
          <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
          {/* Inside the row, over the price, a small chip. */}
          {badge != null &&
            (renderBadge != null ? (
              renderBadge(badge)
            ) : (
              <View style={[styles.badge, { backgroundColor: accent }]}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            ))}
        </View>

        {/* The billed amount, and the struck-through one beside it. Keyed on
            the figure so a changing price crossfades in place rather than
            silently swapping while the eye is elsewhere. */}
        <View style={styles.priceRow}>
          <Animated.Text
            key={price}
            entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
            style={[styles.price, { color: colors.foreground }]}>
            {price}
          </Animated.Text>
          {was != null && (
            <Animated.Text
              entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
              exiting={FadeOut.duration(160).reduceMotion(ReduceMotion.System)}
              style={[styles.was, { color: meter.unit }]}>
              {was}
            </Animated.Text>
          )}
        </View>

        {note != null && <Text style={[styles.note, { color: meter.caption }]}>{note}</Text>}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderRadius: 26,
    borderCurve: 'continuous',
    borderWidth: 2,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: { width: 10, height: 10, borderRadius: 5 },
  disabled: { opacity: 0.45 },
  press: {
    // A column, not a row. The billed price has to sit under the title at
    // display size, and a price pinned to the right edge cannot be larger than
    // the title without unbalancing the row.
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 2,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flex: 1,
    ...fonts.bold(17, -0.3),
  },
  badge: {
    borderRadius: 8,
    borderCurve: 'continuous',
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  badgeText: { ...fonts.heavy(11, 0.2), color: '#FFFFFF' },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    columnGap: 8,
    marginTop: 4,
  },
  /** The billed amount, and the largest price on the row by a clear margin:
   * 22 against the note's 13. */
  price: fonts.heavy(22, -0.6),
  was: {
    ...fonts.medium(15),
    textDecorationLine: 'line-through',
  },
  /** The per-week figure or billing note. Secondary, and sized to stay that
   * way. */
  note: fonts.medium(13),
});
