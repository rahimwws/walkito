import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ReduceMotion, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { fonts } from '@/shared/config';
import { Raised } from '@/shared/ui/raised';

import type { PlanCopy } from '../model/plans';
import { PLUS, SHEET } from './plans-theme';

/** Colours cross over as fast as the kit's answer cards do. */
const SELECT_MS = 120;
const RADIUS = 20;
const LIP = 4;
const RADIO = 22;

export type PlanCardProps = {
  copy: PlanCopy;
  /** The pill at the card's top: "Most popular", "Comeback price". */
  badge?: string | null;
  selected: boolean;
  /** A radio by the title, once there is more than one plan to choose from:
   * the choice is then said by more than the colour. */
  radio: boolean;
  /** The store answered and has no such plan: shown, never chosen. */
  disabled?: boolean;
  onPress: () => void;
};

/**
 * One plan, as BitePal draws it: a rounded card, the chosen one outlined and
 * washed in the Plus colour, the title and a line under it on the left, the
 * billed amount large on the right with what it is for under it. Raised on
 * the kit's lip, so it presses like every other choice in the app.
 *
 * Until the store answers there is no figure: a quiet bar holds its place,
 * so nothing is quoted that the store has not said.
 */
export function PlanCard({ copy, badge, selected, radio, disabled = false, onPress }: PlanCardProps) {
  const on = useSharedValue(selected ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(selected ? 1 : 0, { duration: SELECT_MS, reduceMotion: ReduceMotion.System });
  }, [selected, on]);

  const face = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [SHEET.surface, PLUS.wash]),
    borderColor: interpolateColor(on.value, [0, 1], [SHEET.edge, PLUS.accent]),
  }));
  const lip = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [SHEET.edge, PLUS.accent]),
  }));
  const ring = useAnimatedStyle(() => ({
    borderColor: interpolateColor(on.value, [0, 1], [SHEET.edge, PLUS.accent]),
  }));
  const dot = useAnimatedStyle(() => ({ opacity: on.value, transform: [{ scale: 0.5 + 0.5 * on.value }] }));

  const spoken = [copy.title, copy.price != null ? `${copy.price} ${copy.caption}` : null, copy.note, badge]
    .filter((part): part is string => part != null && part !== '')
    .join(', ');

  return (
    <Raised
      face={SHEET.surface}
      edge={SHEET.edge}
      lip={SHEET.edge}
      depth={LIP}
      radius={RADIUS}
      haptic="none"
      disabled={disabled}
      onPress={onPress}
      faceAnimatedStyle={disabled ? undefined : face}
      lipAnimatedStyle={lip}
      accessibilityRole="radio"
      accessibilityLabel={spoken}
      accessibilityState={{ checked: selected, selected }}
      contentStyle={[styles.face, disabled && styles.dimmed]}>
      {badge != null && badge !== '' && (
        <View style={[styles.badge, { backgroundColor: PLUS.accent }]}>
          <Text style={styles.badgeText} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {badge}
          </Text>
        </View>
      )}
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.titleRow}>
            {radio && (
              <Animated.View style={[styles.radio, ring]}>
                <Animated.View style={[styles.radioDot, { backgroundColor: PLUS.accent }, dot]} />
              </Animated.View>
            )}
            <Text style={[styles.title, { color: SHEET.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.4}>
              {copy.title}
            </Text>
          </View>
          {copy.note != null && (
            <Text style={[styles.note, { color: SHEET.label }]} maxFontSizeMultiplier={1.4}>
              {copy.note}
            </Text>
          )}
        </View>
        <View style={styles.right}>
          {copy.price != null ? (
            <Text style={[styles.price, { color: SHEET.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
              {copy.price}
            </Text>
          ) : (
            <View style={[styles.pricePending, { backgroundColor: SHEET.edge }]} />
          )}
          <Text style={[styles.caption, { color: SHEET.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {copy.caption}
          </Text>
        </View>
      </View>
    </Raised>
  );
}

/** The "Plus" pill by the wordmark: the Plus colour, raised on its lip. */
export function PlusPill({ label }: { label: string }) {
  return (
    <Raised
      face={PLUS.accent}
      lip={PLUS.accentLip}
      depth={3}
      radius={10}
      accessibilityRole="text"
      accessibilityLabel={label}
      contentStyle={styles.pill}>
      <Text style={styles.pillText} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {label}
      </Text>
    </Raised>
  );
}

const styles = StyleSheet.create({
  face: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 14,
    gap: 8,
  },
  dimmed: { opacity: 0.5 },
  badge: {
    alignSelf: 'flex-start',
    height: 24,
    paddingHorizontal: 10,
    borderRadius: 12,
    borderCurve: 'continuous',
    justifyContent: 'center',
  },
  badgeText: { ...fonts.heavy(13, 0.1), color: PLUS.onAccent },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  left: { flex: 1, gap: 3 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: fonts.heavy(21, -0.4),
  note: { ...fonts.semibold(14), lineHeight: 18 },
  right: { alignItems: 'flex-end', gap: 1 },
  price: fonts.heavy(23, -0.4),
  pricePending: { width: 72, height: 22, borderRadius: 8, marginVertical: 3 },
  caption: fonts.semibold(13),
  radio: {
    width: RADIO,
    height: RADIO,
    borderRadius: RADIO / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: { width: 10, height: 10, borderRadius: 5 },
  pill: {
    height: 26,
    paddingHorizontal: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillText: { ...fonts.heavy(16, -0.1), color: PLUS.onAccent },
});
