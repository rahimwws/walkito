import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { NUMERAL_SCALE, ink } from '../player/kit';

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
  const t = useT();

  const bump = (direction: 1 | -1) => {
    const next = Math.max(0, Math.min(max, value + direction));
    if (next === value) return;
    Haptics.selectionAsync();
    onChange(next);
  };

  const button = (direction: 1 | -1) => {
    const spent = direction === 1 ? value >= max : value <= 0;
    return (
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t(direction === 1 ? 'testday.confirm.more' : 'testday.confirm.less')}
        disabled={spent}
        onPress={() => bump(direction)}
        hitSlop={6}
        style={({ pressed }) => [styles.button, spent && styles.spent, pressed && styles.pressed]}>
        <Text style={styles.sign} maxFontSizeMultiplier={1}>
          {direction === 1 ? '+' : '\u2212'}
        </Text>
      </Pressable>
    );
  };

  return (
    <View
      style={styles.row}
      accessible
      accessibilityRole="adjustable"
      accessibilityValue={{ min: 0, max, now: value }}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      onAccessibilityAction={(event) => bump(event.nativeEvent.actionName === 'increment' ? 1 : -1)}>
      {button(-1)}
      <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={styles.value} numberOfLines={1}>
        {value}
      </Text>
      {button(1)}
    </View>
  );
}

const BUTTON = 56;

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24 },
  button: {
    width: BUTTON,
    height: BUTTON,
    borderRadius: BUTTON / 2,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sign: { ...fonts.regular(30), lineHeight: 34, color: ink.text },
  spent: { opacity: 0.3 },
  pressed: { opacity: 0.55 },
  value: {
    minWidth: 120,
    textAlign: 'center',
    ...fonts.bold(80, -2),
    lineHeight: 88,
    color: ink.text,
    fontVariant: ['tabular-nums'],
  },
});
