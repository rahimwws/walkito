import { StyleSheet, Text, View } from 'react-native';

import { fromDateKey, planSessionDone, todayKey, usePlanVersion, weekPlan } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';
import { useLanguage } from '@/shared/lib/i18n';

/**
 * BitePal's week strip under "Today" (#99): Monday to Sunday, today on a
 * white rounded tile, a violet dot under each day whose session is done.
 * Letters and dates stop at the chrome scale, so the seven always fit.
 */
export function DateStrip() {
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
        const future = day.date > today;
        return (
          <View
            key={day.date}
            style={[styles.day, isToday && styles.today]}
            accessible
            accessibilityLabel={long.format(date)}
            accessibilityState={{ selected: isToday, checked: done }}>
            <Text style={[styles.letter, isToday && styles.todayText]} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {letter.format(date)}
            </Text>
            <Text
              style={[styles.date, future && styles.future, isToday && styles.todayText]}
              maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {date.getDate()}
            </Text>
            <View style={[styles.dot, done && styles.dotDone]} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 4 },
  day: { flex: 1, alignItems: 'center', gap: 2, paddingVertical: 10, borderRadius: 18, borderCurve: 'continuous' },
  today: { backgroundColor: colors.surface },
  letter: { ...fonts.semibold(17), color: colors.text3 },
  date: { ...fonts.heavy(20), color: colors.text, fontVariant: ['tabular-nums'] },
  future: { color: colors.text3 },
  todayText: { color: colors.text },
  dot: { width: 7, height: 7, borderRadius: 3.5, marginTop: 4 },
  dotDone: { backgroundColor: colors.accent },
});
