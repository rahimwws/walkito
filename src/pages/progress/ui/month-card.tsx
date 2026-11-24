import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { bitepal, colors, fonts } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { BigNumber, CardLabel } from '@/widgets/session-player';

import { CardHead, NUMBER_SCALE, ProgressCard } from './kit';

const DOT = 12;

/**
 * The days done this month as one of BitePal's number cards: the month's name
 * as the label, the count large, the longest run as the flame and its number
 * at the top right, and the month itself as a grid of dots, one per day,
 * violet where a session or a routine was finished. A day not done is the
 * same quiet grey as one still to come, so nothing marks a day missed. The
 * whole card opens the month sheet (#108).
 */
export function MonthCard({
  today,
  done,
  longest,
  onOpen,
}: {
  /** `YYYY-MM-DD`: which month, and which of its days are still to come. */
  today: string;
  /** The days of this month done, by day of the month. */
  done: ReadonlySet<number>;
  longest: number;
  onOpen: () => void;
}) {
  const t = useT();
  const language = useLanguage();
  const [year, month, date] = today.split('-').map(Number);
  const count = done.size;
  const name = new Intl.DateTimeFormat(language, { month: 'long' }).format(new Date(year, month - 1, 1));
  const label = name.charAt(0).toLocaleUpperCase(language) + name.slice(1);
  const lead = (new Date(year, month - 1, 1).getDay() + 6) % 7;
  const length = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
  const run = longest > 0 ? t('progress.month.longest', { days: t('streak.dayCount', { count: longest }) }) : null;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={run == null ? t('sessionDone.month.a11y', { count }) : `${t('sessionDone.month.a11y', { count })}. ${run}`}
      accessibilityHint={t('progress.month.hint')}
      onPress={() => {
        void Haptics.selectionAsync();
        onOpen();
      }}
      style={({ pressed }) => pressed && styles.pressed}>
      <ProgressCard>
        <CardHead
          aside={
            run != null && (
              <View style={styles.run}>
                <FluentIcon name="fire" size={24} />
                <Text style={styles.runValue} maxFontSizeMultiplier={NUMBER_SCALE}>
                  {longest}
                </Text>
              </View>
            )
          }>
          <CardLabel>{label}</CardLabel>
          <BigNumber value={count} unit={t('sessionDone.month.unit', { count })} size={48} maxScale={NUMBER_SCALE} />
        </CardHead>
        <View style={styles.grid} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {weeks.map((week, row) => (
            <View key={row} style={styles.week}>
              {week.map((day, column) => (
                <View key={column} style={styles.cell}>
                  {day != null && (
                    <View
                      style={[
                        styles.dot,
                        done.has(day) ? styles.done : day > date ? styles.ahead : styles.past,
                        day === date && !done.has(day) && styles.today,
                      ]}
                    />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ProgressCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
  run: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: 44,
    paddingLeft: 10,
    paddingRight: 14,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  runValue: { ...fonts.heavy(22, -0.4), color: colors.text, fontVariant: ['tabular-nums'] },
  grid: { gap: 8 },
  week: { flexDirection: 'row' },
  cell: { flex: 1, alignItems: 'center' },
  dot: { width: DOT, height: DOT, borderRadius: DOT / 2 },
  done: { backgroundColor: bitepal.selected },
  past: { backgroundColor: bitepal.track },
  ahead: { borderWidth: 1.5, borderColor: bitepal.track },
  today: { borderWidth: 2, borderColor: bitepal.selected, backgroundColor: 'transparent' },
});
