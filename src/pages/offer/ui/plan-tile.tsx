import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { ReduceMotion, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { fonts } from '@/shared/config';

import type { PlanCopy } from '../model/plans';
import { usePlansTheme } from './plans-theme';

const SELECT_MS = 120;
const RADIUS = 20;
const RADIO = 20;

export type PlanTileProps = {
  copy: PlanCopy;
  selected: boolean;
  /** The store answered and has no such plan: shown, never chosen. */
  disabled?: boolean;
  onPress: () => void;
};

/**
 * One of the two plans that stand side by side at the top of the page, at
 * the same size and weight whichever is chosen: the title with its radio,
 * the pill (free days, or what the year saves), the billed amount as the
 * largest figure with what it is for under it, then the renewal and the
 * year over a month in smaller type, as Apple wants the billed amount to be
 * the most prominent price.
 *
 * Until the store answers there is no figure: a quiet bar holds its place.
 */
export function PlanTile({ copy, selected, disabled = false, onPress }: PlanTileProps) {
  const { PLUS, SHEET } = usePlansTheme();
  const on = useSharedValue(selected ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(selected ? 1 : 0, { duration: SELECT_MS, reduceMotion: ReduceMotion.System });
  }, [selected, on]);

  const face = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [SHEET.card, PLUS.wash]),
    borderColor: interpolateColor(on.value, [0, 1], [SHEET.edge, PLUS.accent]),
  }));
  const ring = useAnimatedStyle(() => ({
    borderColor: interpolateColor(on.value, [0, 1], [SHEET.edge, PLUS.accent]),
  }));
  const dot = useAnimatedStyle(() => ({ opacity: on.value, transform: [{ scale: 0.5 + 0.5 * on.value }] }));

  const spoken = [copy.title, copy.price != null ? `${copy.price} ${copy.caption}` : null, copy.badge, copy.note, copy.perMonth]
    .filter((part): part is string => part != null && part !== '')
    .join(', ');

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityLabel={spoken}
      accessibilityState={{ checked: selected, selected, disabled }}
      style={({ pressed }) => [styles.press, pressed && styles.pressed]}>
      <Animated.View
        style={[styles.face, { backgroundColor: SHEET.card, borderColor: SHEET.edge }, !disabled && face, disabled && styles.dimmed]}>
        <View style={styles.titleRow}>
          <Animated.View style={[styles.radio, ring]}>
            <Animated.View style={[styles.radioDot, { backgroundColor: PLUS.accent }, dot]} />
          </Animated.View>
          <Text style={[styles.title, { color: SHEET.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {copy.title}
          </Text>
        </View>
        <View style={styles.badgeSlot}>
          {copy.badge != null && copy.badge !== '' && (
            <View style={[styles.badge, { backgroundColor: PLUS.accent }]}>
              <Text style={[styles.badgeText, { color: PLUS.onAccent }]} numberOfLines={1} maxFontSizeMultiplier={1.2}>
                {copy.badge}
              </Text>
            </View>
          )}
        </View>
        {copy.price != null ? (
          <Text
            style={[styles.price, { color: SHEET.ink }]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.6}
            maxFontSizeMultiplier={1.2}>
            {copy.price}
          </Text>
        ) : (
          <View style={[styles.pricePending, { backgroundColor: SHEET.edge }]} />
        )}
        <Text style={[styles.caption, { color: SHEET.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
          {copy.caption}
        </Text>
        {copy.note != null && (
          <Text style={[styles.note, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
            {copy.note}
          </Text>
        )}
        {copy.perMonth != null && (
          <Text style={[styles.perMonth, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
            {copy.perMonth}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { flex: 1 },
  pressed: { opacity: 0.8 },
  face: {
    flex: 1,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    borderWidth: 2,
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 4,
  },
  dimmed: { opacity: 0.5 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: fonts.heavy(19, -0.3),
  badgeSlot: { minHeight: 24, justifyContent: 'center', marginTop: 2 },
  badge: {
    alignSelf: 'flex-start',
    height: 24,
    paddingHorizontal: 9,
    borderRadius: 12,
    borderCurve: 'continuous',
    justifyContent: 'center',
  },
  badgeText: fonts.heavy(12, 0.1),
  price: { ...fonts.heavy(26, -0.5), marginTop: 2 },
  pricePending: { width: 80, height: 26, borderRadius: 8, marginVertical: 4 },
  caption: fonts.semibold(13),
  note: { ...fonts.medium(13), lineHeight: 17, marginTop: 4 },
  perMonth: { ...fonts.bold(13), lineHeight: 17 },
  radio: {
    width: RADIO,
    height: RADIO,
    borderRadius: RADIO / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: { width: 9, height: 9, borderRadius: 4.5 },
});
