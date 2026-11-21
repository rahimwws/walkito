import { StyleSheet, Text, View } from 'react-native';

import { fromDateKey, planSessionDone, todayKey, usePlanVersion, weekPlan } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';

import { TodayCard } from './today-card';

/**
 * The week as pliability's "Weekly Progress": Monday to Sunday as rounded
 * columns, a finished day filled in the brand violet, today outlined, and
 * "This week: 2 of 5 sessions" under them. The letters and dates stop at the
 * chrome scale, so seven columns always fit.
 */
export function WeekCard() {
  const t = useT();
  const language = useLanguage();
  usePlanVersion();
  const today = todayKey();
  const letter = new Intl.DateTimeFormat(language, { weekday: 'narrow' });
  const long = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' });
  const days = weekPlan().days;
  const finished = (date: string) => date <= today && planSessionDone(date);
  // A day already done counts even where the plan has since rested it.
  const planned = days.filter((day) => day.type !== 'rest' || finished(day.date)).length;
  const done = days.filter((day) => finished(day.date)).length;

  return (
    <TodayCard style={styles.card}>
      <View style={styles.row}>
        {days.map((day) => {
          const date = fromDateKey(day.date);
          const isToday = day.date === today;
          const isDone = finished(day.date);
          return (
            <View
              key={day.date}
              style={[styles.day, isDone && styles.dayDone, isToday && !isDone && styles.dayToday]}
              accessible
              accessibilityLabel={long.format(date)}
              accessibilityState={{ selected: isToday, checked: isDone }}>
              <Text style={[styles.letter, isDone && styles.textDone]} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {letter.format(date)}
              </Text>
              <Text style={[styles.date, isDone && styles.textDone]} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {date.getDate()}
              </Text>
            </View>
          );
        })}
      </View>
      {planned > 0 && <Text style={styles.count}>{t('home.today.weekSessions', { done, count: planned })}</Text>}
    </TodayCard>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, gap: 14 },
  row: { flexDirection: 'row', gap: 6 },
  day: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: colors.surface2,
  },
  dayDone: { backgroundColor: colors.accent, borderColor: colors.accent },
  dayToday: { borderColor: colors.accent, backgroundColor: colors.surface },
  letter: { ...fonts.medium(17), color: colors.text2 },
  date: { ...fonts.bold(17), color: colors.text, fontVariant: ['tabular-nums'] },
  textDone: { color: colors.onInk },
  count: { ...fonts.semibold(17), color: colors.text2, textAlign: 'center' },
});
