import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { bitepal, colors, fonts, target } from '@/shared/config';

/**
 * A choice of a few answers as pills, the selected one in the brand violet:
 * BitePal's option chips, wrapping onto a second line rather than squeezing
 * the words at large text.
 */
export function Choice<T extends string | number>({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  selected: T | null;
  onSelect: (value: T) => void;
}) {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pills} accessibilityRole="radiogroup" accessibilityLabel={label}>
        {options.map((option) => {
          const on = option.value === selected;
          return (
            <Pressable
              key={String(option.value)}
              accessibilityRole="radio"
              accessibilityState={{ selected: on }}
              onPress={() => {
                if (on) return;
                void Haptics.selectionAsync();
                onSelect(option.value);
              }}
              style={({ pressed }) => [styles.pill, on && styles.pillOn, pressed && styles.pressed]}>
              <Text style={[styles.pillText, on && styles.pillTextOn]}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { paddingHorizontal: 16, paddingVertical: 14, gap: 10 },
  label: { ...fonts.semibold(19), color: colors.text },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    minHeight: target.min,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: bitepal.well,
    borderWidth: 2,
    borderColor: bitepal.well,
  },
  pillOn: { backgroundColor: bitepal.selectedSoft, borderColor: bitepal.selected },
  pillText: { ...fonts.semibold(17), color: colors.text },
  pillTextOn: { color: bitepal.selected },
  pressed: { opacity: 0.6 },
});
