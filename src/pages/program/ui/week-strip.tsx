import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fromDateKey, type PlanDay } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, bitepal, colors, fonts } from '@/shared/config';
import { useLanguage } from '@/shared/lib/i18n';

export type WeekStripProps = {
  days: readonly PlanDay[];
  today: string;
  /** The day on the white tile: today, or the one tapped last. */
  selected: string;
  done: (date: string) => boolean;
  onSelect: (date: string) => void;
};

/**
 * BitePal's week strip (#99, #102): Monday to Sunday, the chosen day on a
 * white rounded tile, a violet dot under each day whose session is done. A
 * tap brings that day's card up. Letters and dates stop at the chrome scale,
 * so the seven always fit.
 */
export function WeekStrip({ days, today, selected, done, onSelect }: WeekStripProps) {
  const language = useLanguage();
  const letter = new Intl.DateTimeFormat(language, { weekday: 'narrow' });
  const long = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <View style={styles.row}>
      {days.map((day) => {
        const date = fromDateKey(day.date);
        const isSelected = day.date === selected;
        const isDone = day.date <= today && done(day.date);
        return (
          <Pressable
            key={day.date}
            accessibilityRole="button"
            accessibilityLabel={long.format(date)}
            accessibilityState={{ selected: isSelected, checked: isDone }}
            onPress={() => {
              void Haptics.selectionAsync();
              onSelect(day.date);
            }}
            style={({ pressed }) => [styles.day, isSelected && styles.selected, pressed && styles.pressed]}>
            <Text
              style={[styles.letter, (isSelected || day.date === today) && styles.strong]}
              maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {letter.format(date)}
            </Text>
            <Text
              style={[styles.date, day.date > today && !isSelected && styles.future]}
              maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {date.getDate()}
            </Text>
            <View style={[styles.dot, isDone && styles.dotDone]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4 },
  day: {
    flex: 1,
    minHeight: 76,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingVertical: 8,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  selected: { backgroundColor: bitepal.card },
  letter: { ...fonts.semibold(17), color: colors.text3 },
  strong: { color: colors.text },
  date: {
    ...fonts.heavy(20),
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  future: { color: colors.text3 },
  dot: { width: 7, height: 7, borderRadius: 3.5, marginTop: 4 },
  dotDone: { backgroundColor: bitepal.selected },
  pressed: { opacity: 0.6 },
});
