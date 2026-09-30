import MinusSignIcon from '@hugeicons/core-free-icons/MinusSignIcon';
import PlusSignIcon from '@hugeicons/core-free-icons/PlusSignIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

export type StepperProps = {
  value: number;
  /** The figure never goes below 0 or above this. */
  max: number;
  onChange: (next: number) => void;
};

/**
 * A number with a minus and a plus either side of it.
 *
 * Lifted from the old retest sheet, where four of these sat in a column at the
 * end of the test. It is one per measurement now, straight after it, and only
 * to correct a count — the timer already has the figure. Counters rather than a
 * keyboard for the reason the pain sheet gives: the person entering this has
 * just done calf raises to failure, and a keyboard is a small target for a
 * shaking hand.
 *
 * One at a time, for reps and seconds alike. The old sheet moved held seconds
 * in fives because they were being estimated by eye; these were timed, and the
 * correction is a second or two either way.
 */
export function Stepper({ value, max, onChange }: StepperProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const bump = (direction: 1 | -1) => {
    const next = Math.max(0, Math.min(max, value + direction));
    if (next === value) return;
    Haptics.selectionAsync();
    onChange(next);
  };

  return (
    <View
      style={styles.row}
      accessible
      accessibilityRole="adjustable"
      accessibilityValue={{ min: 0, max, now: value }}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      onAccessibilityAction={(event) => bump(event.nativeEvent.actionName === 'increment' ? 1 : -1)}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('testday.confirm.less')}
        disabled={value <= 0}
        onPress={() => bump(-1)}
        hitSlop={6}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: meter.iconTile },
          value <= 0 && styles.spent,
          pressed && styles.pressed,
        ]}>
        <HugeiconsIcon icon={MinusSignIcon} size={24} color={colors.foreground} strokeWidth={2.2} />
      </Pressable>
      <Text style={[styles.value, { color: meter.ink }]} numberOfLines={1}>
        {value}
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('testday.confirm.more')}
        disabled={value >= max}
        onPress={() => bump(1)}
        hitSlop={6}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: meter.iconTile },
          value >= max && styles.spent,
          pressed && styles.pressed,
        ]}>
        <HugeiconsIcon icon={PlusSignIcon} size={24} color={colors.foreground} strokeWidth={2.2} />
      </Pressable>
    </View>
  );
}

const BUTTON = 56;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },
  button: {
    width: BUTTON,
    height: BUTTON,
    borderRadius: BUTTON / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spent: { opacity: 0.35 },
  pressed: { opacity: 0.6 },
  value: {
    minWidth: 96,
    textAlign: 'center',
    ...fonts.heavy(56, -1.5),
    lineHeight: 64,
    fontVariant: ['tabular-nums'],
  },
});
