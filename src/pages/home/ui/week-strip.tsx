import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import RunningShoesIcon from '@hugeicons/core-free-icons/RunningShoesIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fromDateKey, planSessionDone, todayKey, useStreak, weekPlan } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts, radius, space, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';

export type WeekStripProps = {
  /** `YYYY-MM-DD` of a day a run was recorded on (runner plan), if any. */
  runDate: string | null;
};

const CIRCLE = 40;

/**
 * Monday to Sunday (Runna #6): today circled black, a done day with a green
 * dot, a rest day in grey, a run day with a small shoe. Under it the streak,
 * which opens Progress.
 *
 * One narrow letter and the date per day, capped at the chrome scale, so the
 * row never wraps at the largest text size.
 */
export function WeekStrip({ runDate }: WeekStripProps) {
  const t = useT();
  const language = useLanguage();
  const router = useRouter();
  const streak = useStreak();
  const today = todayKey();
  const letter = new Intl.DateTimeFormat(language, { weekday: 'narrow' });
  const long = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {weekPlan().days.map((day) => {
          const date = fromDateKey(day.date);
          const isToday = day.date === today;
          const done = day.date <= today && planSessionDone(day.date);
          const rest = day.type === 'rest';
          const ran = runDate === day.date;
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
                <Text
                  style={[styles.date, rest && !isToday && styles.rest, isToday && styles.todayText]}
                  maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                  {date.getDate()}
                </Text>
              </View>
              <View style={styles.mark}>
                {ran ? (
                  <HugeiconsIcon icon={RunningShoesIcon} size={14} color={colors.text2} strokeWidth={2} />
                ) : done ? (
                  <View style={styles.dot} />
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
      {streak.current >= 1 && (
        <Pressable
          accessibilityRole="button"
          accessibilityHint={t('home.today.streakHint')}
          onPress={() => {
            void Haptics.selectionAsync();
            router.navigate('/progress');
          }}
          style={({ pressed }) => [styles.streak, pressed && styles.pressed]}>
          <Text style={styles.streakText}>{t('home.today.streak', { count: streak.current })}</Text>
          <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={colors.text2} strokeWidth={2} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    paddingTop: 14,
    paddingHorizontal: 8,
    paddingBottom: 6,
  },
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
  rest: { color: colors.text3 },
  mark: { height: 14, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.good },
  streak: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minHeight: target.min,
    marginTop: 4,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
    paddingHorizontal: space.gap,
  },
  streakText: { ...fonts.medium(17), color: colors.text, flexShrink: 1, textAlign: 'center' },
  pressed: { opacity: 0.6 },
});
