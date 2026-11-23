import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { programState, todayKey, useLogsVersion } from '@/entities/program';
import { bitepal, colors, fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, idleRig } from '@/shared/ui/mascot';
import { CardLabel, RoundButton, cardStyle } from '@/widgets/session-player';

import { doneDaysIn, monthOf } from '../model/month-days';
import { NUMBER_SCALE, SLOT_SCALE, useLargeText } from './kit';

const CELL = 100 / 7 + '%';

/**
 * BitePal's streak sheet (#108) for the days done this month: the count very
 * large with its words under it and the mascot beside it where BitePal has
 * its flame, a white calendar with a dot on each day a session or a routine
 * was finished (a month back at a time, to the plan's first), and the current
 * and longest runs on a card under it. No flame, and nothing that marks a
 * day missed.
 */
export function MonthSheet({
  visible,
  current,
  longest,
  onClose,
}: {
  visible: boolean;
  current: number;
  longest: number;
  onClose: () => void;
}) {
  const t = useT();
  const language = useLanguage();
  const insets = useSafeAreaInsets();
  const large = useLargeText();
  useLogsVersion();
  const today = todayKey();
  const [thisYear, thisMonth] = monthOf(today);
  const [shown, setShown] = useState<[number, number]>([thisYear, thisMonth]);
  const [year, month] = shown;
  const [firstYear, firstMonth] = monthOf(programState().startDate);
  const canBack = year * 12 + month > firstYear * 12 + firstMonth;
  const canForward = year * 12 + month < thisYear * 12 + thisMonth;

  const count = doneDaysIn(thisYear, thisMonth, today).size;
  const done = doneDaysIn(year, month, today);
  const todayDate = Number(today.slice(8, 10));
  const isThisMonth = year === thisYear && month === thisMonth;
  const firstWeekday = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const length = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length }, (_, i) => i + 1),
  ];
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(language, { weekday: 'narrow' }).format(new Date(2024, 0, 1 + i)),
  );
  const monthName = new Intl.DateTimeFormat(language, { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1));

  const move = (by: number) => {
    const index = year * 12 + (month - 1) + by;
    setShown([Math.floor(index / 12), (index % 12) + 1]);
  };
  const close = () => {
    setShown([thisYear, thisMonth]);
    onClose();
  };

  return (
    <Modal animationType="slide" presentationStyle="pageSheet" visible={visible} onRequestClose={close}>
      <View style={styles.sheet}>
        <ScrollView
          contentContainerStyle={[styles.body, { paddingBottom: Math.max(insets.bottom, 20) + 12 }]}
          showsVerticalScrollIndicator={false}>
          <RoundButton icon={Cancel01Icon} label={t('common.close')} onPress={close} size={48} />

          <View style={styles.head}>
            <View style={styles.headText} accessible accessibilityLabel={t('sessionDone.month.a11y', { count })}>
              <Text style={styles.count} maxFontSizeMultiplier={NUMBER_SCALE}>
                {count}
              </Text>
              <Text style={styles.title} accessibilityRole="header">
                {t('progress.month.sheetTitle', { count })}
              </Text>
            </View>
            {!large && (
              <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
                <Mascot rig={idleRig} size={132} paused={!visible} easterEgg={false} />
              </View>
            )}
          </View>

          <View style={styles.card}>
            <View style={styles.monthRow}>
              <Text style={styles.monthName} maxFontSizeMultiplier={SLOT_SCALE} accessibilityRole="header">
                {monthName}
              </Text>
              <RoundButton
                icon={ArrowLeft01Icon}
                label={t('progress.month.prev')}
                onPress={() => move(-1)}
                disabled={!canBack}
                size={48}
                tone="well"
              />
              <RoundButton
                icon={ArrowRight01Icon}
                label={t('progress.month.next')}
                onPress={() => move(1)}
                disabled={!canForward}
                size={48}
                tone="well"
              />
            </View>
            <View
              style={styles.grid}
              accessible
              accessibilityLabel={t('progress.month.gridA11y', { month: monthName, count: done.size })}>
              {weekdays.map((day, i) => (
                <Text key={'w' + i} style={[styles.cell, styles.weekday]} maxFontSizeMultiplier={SLOT_SCALE}>
                  {day}
                </Text>
              ))}
              {cells.map((date, i) => {
                const isToday = isThisMonth && date === todayDate;
                const isDone = date != null && done.has(date);
                const ahead = isThisMonth && date != null && date > todayDate;
                return (
                  <View key={i} style={styles.cellBox}>
                    {date != null && (
                      <View style={[styles.day, isDone && styles.dayDone, isToday && styles.dayToday]}>
                        <Text
                          style={[styles.dayText, ahead && styles.dayAhead, isDone && styles.dayTextDone, isToday && styles.dayTextToday]}
                          maxFontSizeMultiplier={SLOT_SCALE}>
                          {date}
                        </Text>
                        <View style={[styles.dot, isDone && { backgroundColor: isToday ? colors.onInk : bitepal.selected }]} />
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>

          <View style={[styles.card, styles.runs]}>
            {[
              { label: t('progress.currentStreak'), count: current, art: 'seedling' as const },
              { label: t('progress.longestStreak'), count: longest, art: 'trophy' as const },
            ].map((run) => (
              <View
                key={run.label}
                style={styles.run}
                accessible
                accessibilityLabel={t('streak.tileA11y', { label: run.label, days: t('streak.dayCount', { count: run.count }) })}>
                <View style={styles.runText}>
                  <CardLabel>{run.label}</CardLabel>
                  <Text style={styles.runValue} maxFontSizeMultiplier={NUMBER_SCALE}>
                    {t('streak.dayCount', { count: run.count })}
                  </Text>
                </View>
                <View style={styles.runIcon}>
                  <FluentIcon name={run.art} size={30} />
                </View>
              </View>
            ))}
            <Text style={styles.caption}>{t('progress.streakCaption')}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: bitepal.page },
  body: { paddingHorizontal: 16, paddingTop: 20, gap: 16 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 4 },
  headText: { flex: 1 },
  count: { ...fonts.heavy(88, -2), color: colors.text, fontVariant: ['tabular-nums'] },
  title: { ...fonts.heavy(28, -0.6), color: colors.text },
  card: { ...cardStyle, padding: 16 },
  monthRow: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 4, paddingBottom: 12 },
  monthName: { ...fonts.heavy(24, -0.4), color: colors.text, flex: 1 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: CELL, textAlign: 'center' },
  cellBox: { width: CELL, alignItems: 'center', paddingVertical: 4 },
  weekday: { ...fonts.semibold(17), color: colors.text3, paddingBottom: 8 },
  day: { minWidth: 42, paddingVertical: 5, borderRadius: 14, borderCurve: 'continuous', alignItems: 'center' },
  dayDone: { backgroundColor: bitepal.selectedSoft },
  dayToday: { backgroundColor: bitepal.primary },
  dayText: { ...fonts.semibold(17), color: colors.text, fontVariant: ['tabular-nums'] },
  dayAhead: { color: colors.text3 },
  dayTextDone: { ...fonts.heavy(17), color: bitepal.selected },
  dayTextToday: { color: colors.onInk },
  dot: { width: 6, height: 6, borderRadius: 3, marginTop: 2 },
  runs: { padding: 20, gap: 16 },
  run: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  runText: { flex: 1 },
  runValue: { ...fonts.heavy(28, -0.4), color: colors.text },
  runIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: { ...fonts.medium(17), color: colors.text3 },
});
