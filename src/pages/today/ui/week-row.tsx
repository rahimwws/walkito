import { StyleSheet, Text, View } from 'react-native';

import { fromDateKey, planSessionDone, todayKey, usePlanVersion, weekPlan } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';
import { useLanguage } from '@/shared/lib/i18n';

const CIRCLE = 40;

/**
 * Monday to Sunday in one quiet row: today in a black circle, a black dot
 * under a day that is done. No colour. One narrow letter and the date,
 * capped at the chrome scale, so it never wraps.
 */
export function WeekRow() {
  const language = useLanguage();
  usePlanVersion();
  const today = todayKey();
  const letter = new Intl.DateTimeFormat(language, { weekday: 'narrow' });
  const long = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <View style={styles.row}>
      {weekPlan().days.map((day) => {
        const date = fromDateKey(day.date);
        const isToday = day.date === today;
        const done = day.date <= today && planSessionDone(day.date);
        return (
          <View
            key={day.date}
            style={styles.day}
            accessible
            accessibilityLabel={long.format(date)}
            accessibilityState={{ selected: isToday, checked: done }}>
            <Text style={styles.letter} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {letter.format(date)}
            </Text>
            <View style={[styles.circle, isToday && styles.today]}>
              <Text style={[styles.date, isToday && styles.todayText]} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {date.getDate()}
              </Text>
            </View>
            <View style={[styles.dot, done && styles.dotDone]} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  day: { flex: 1, alignItems: 'center', gap: 6 },
  letter: { ...fonts.medium(15), color: colors.text2 },
  circle: {
    minWidth: CIRCLE,
    height: CIRCLE,
    borderRadius: CIRCLE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  today: { backgroundColor: colors.ink },
  date: { ...fonts.semibold(17), color: colors.text, fontVariant: ['tabular-nums'] },
  todayText: { color: colors.onInk },
  dot: { width: 6, height: 6, borderRadius: 3 },
  dotDone: { backgroundColor: colors.ink },
});
