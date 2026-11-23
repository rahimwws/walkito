import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { planSessionDone, programState, todayKey, useLogsVersion, usePlanVersion } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, bitepal, colors, fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { RoundButton } from '@/widgets/session-player';

/** `YYYY-MM` → its first day, and the month n months after it. */
function shift(year: number, month: number, by: number): { year: number; month: number } {
  const date = new Date(year, month + by, 1);
  return { year: date.getFullYear(), month: date.getMonth() };
}

const key = (year: number, month: number, day: number) =>
  `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

/**
 * The plan's month, as BitePal's calendar sheet (#103): the month large with
 * round arrows, the weekday letters from Monday, today on a black rounded
 * tile, and a violet dot under each day whose session is done. From the
 * month the plan began to this one; how many days were done under it.
 */
export function MonthSheetScreen() {
  const t = useT();
  const language = useLanguage();
  const insets = useSafeAreaInsets();
  usePlanVersion();
  const version = useLogsVersion();
  const today = todayKey();
  const [ty, tm] = today.split('-').map(Number);
  const [sy, sm] = programState().startDate.split('-').map(Number);
  const [shown, setShown] = useState({ year: ty, month: tm - 1 });
  const first = { year: sy, month: sm - 1 };
  const atStart = shown.year * 12 + shown.month <= first.year * 12 + first.month;
  const atNow = shown.year * 12 + shown.month >= ty * 12 + tm - 1;

  const days = new Date(shown.year, shown.month + 1, 0).getDate();
  // Monday first, as the plan's weeks run.
  const lead = (new Date(shown.year, shown.month, 1).getDay() + 6) % 7;
  const done = useMemo(() => {
    const set = new Set<number>();
    for (let day = 1; day <= days; day++) {
      const date = key(shown.year, shown.month, day);
      if (date <= today && planSessionDone(date)) set.add(day);
    }
    return set;
    // The stores are mutated in place; their versions are what move.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown.year, shown.month, days, today, version]);

  const title = new Intl.DateTimeFormat(language, {
    month: 'long',
    year: 'numeric',
  }).format(new Date(shown.year, shown.month, 1));
  const letter = new Intl.DateTimeFormat(language, { weekday: 'narrow' });
  const long = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  // 2 Nov 2026 is a Monday.
  const letters = Array.from({ length: 7 }, (_, i) => letter.format(new Date(2026, 10, 2 + i)));
  const cells: (number | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: days }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const rows = Array.from({ length: cells.length / 7 }, (_, r) => cells.slice(r * 7, r * 7 + 7));

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <View style={styles.head}>
        <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={1.7}>
          {title.charAt(0).toLocaleUpperCase(language) + title.slice(1)}
        </Text>
        <View style={styles.arrows}>
          <RoundButton
            icon={ArrowLeft01Icon}
            tone="well"
            size={48}
            label={t('pages.plan.month.prev')}
            disabled={atStart}
            onPress={() => setShown(shift(shown.year, shown.month, -1))}
          />
          <RoundButton
            icon={ArrowRight01Icon}
            tone="well"
            size={48}
            label={t('pages.plan.month.next')}
            disabled={atNow}
            onPress={() => setShown(shift(shown.year, shown.month, 1))}
          />
        </View>
      </View>

      <View style={styles.rule} />

      <View style={styles.week} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {letters.map((l, i) => (
          <Text key={i} style={styles.letter} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
            {l}
          </Text>
        ))}
      </View>

      {rows.map((row, r) => (
        <View key={r} style={styles.week}>
          {row.map((day, i) => {
            if (day == null) return <View key={i} style={styles.cell} />;
            const date = key(shown.year, shown.month, day);
            const isToday = date === today;
            const isDone = done.has(day);
            return (
              <View
                key={i}
                style={styles.cell}
                accessible
                accessibilityLabel={long.format(new Date(shown.year, shown.month, day))}
                accessibilityValue={isDone ? { text: t('pages.plan.path.done') } : undefined}>
                <View style={[styles.tile, isToday && styles.today]}>
                  <Text
                    style={[styles.date, date > today && styles.future, isToday && styles.todayText]}
                    maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                    {day}
                  </Text>
                  <View style={[styles.dot, isDone && styles.dotDone]} />
                </View>
              </View>
            );
          })}
        </View>
      ))}

      <Text style={styles.foot}>{t('pages.program.blockAllDone', { count: done.size })}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: bitepal.card },
  content: { paddingHorizontal: 20, paddingTop: 28, gap: 6 },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 8,
  },
  title: {
    ...fonts.heavy(28, -0.6),
    color: colors.text,
    flexGrow: 1,
    flexShrink: 1,
  },
  arrows: { flexDirection: 'row', gap: 10 },
  rule: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginBottom: 8,
  },
  week: { flexDirection: 'row' },
  letter: {
    flex: 1,
    textAlign: 'center',
    ...fonts.semibold(17),
    color: colors.text3,
    paddingVertical: 6,
  },
  cell: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  tile: {
    minWidth: 44,
    minHeight: 56,
    paddingHorizontal: 4,
    borderRadius: 14,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  today: { backgroundColor: bitepal.primary },
  date: {
    ...fonts.heavy(19),
    color: colors.text,
    fontVariant: ['tabular-nums'],
  },
  future: { color: colors.text3 },
  todayText: { color: bitepal.onPrimary },
  dot: { width: 7, height: 7, borderRadius: 3.5 },
  dotDone: { backgroundColor: bitepal.selected },
  foot: { ...fonts.semibold(19), color: colors.text, marginTop: 12 },
});
