import { StyleSheet, Text, View } from 'react-native';

import { bodyColors, colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { BigNumber, CardLabel, Ring } from '@/widgets/session-player';

import type { WeekRecap } from '../model/week-recap';
import { CardHead, IconDisc, NUMBER_SCALE, ProgressCard, useLargeText } from './kit';

/**
 * Sessions as BitePal's calories card (#102): every session so far as the big
 * number in a closed ring, then this week in three columns, each a round
 * icon, a count and its word. Counts only: nothing here says how many days
 * were missed, and a quiet week is a number like any other.
 */
export function SessionsCard({ total, recap }: { total: number; recap: WeekRecap }) {
  const t = useT();
  const large = useLargeText();
  const columns: { label: string; a11y: string; value: number; art: FluentName; tone: string }[] = [
    {
      label: t('weekRecap.showedUp'),
      a11y: t('weekRecap.showedUpA11y', { count: recap.showedUp }),
      value: recap.showedUp,
      art: 'seedling',
      tone: bodyColors.calf,
    },
    {
      label: t('weekRecap.sessions'),
      a11y: t('weekRecap.sessionsA11y', { count: recap.sessions }),
      value: recap.sessions,
      art: 'strength',
      tone: bodyColors.heel,
    },
    {
      label: t('weekRecap.checkins'),
      a11y: t('weekRecap.checkinsA11y', { count: recap.checkins }),
      value: recap.checkins,
      art: 'sun',
      tone: bodyColors.toes,
    },
  ];

  return (
    <ProgressCard>
      <View accessible accessibilityLabel={t('progress.sessionsA11y', { count: total })}>
        <CardHead
          aside={
            <Ring size={72} stroke={7} value={1} color={bodyColors.arch}>
              <FluentIcon name="trophy" size={30} />
            </Ring>
          }>
          <CardLabel>{t('progress.sessionsTotal')}</CardLabel>
          <BigNumber value={total} size={48} maxScale={NUMBER_SCALE} />
        </CardHead>
      </View>
      <Text style={styles.week} accessibilityRole="header">
        {t('weekRecap.eyebrow')}
      </Text>
      <View style={[styles.columns, large && styles.rows]}>
        {columns.map((column) => (
          <View key={column.label} style={large ? styles.row : styles.column} accessible accessibilityLabel={column.a11y}>
            <IconDisc name={column.art} tone={column.tone} size={48} />
            <View style={large ? styles.rowText : undefined}>
              <Text style={styles.value} maxFontSizeMultiplier={NUMBER_SCALE}>
                {column.value}
              </Text>
              <Text style={styles.label}>{column.label}</Text>
            </View>
          </View>
        ))}
      </View>
    </ProgressCard>
  );
}

const styles = StyleSheet.create({
  week: { ...fonts.bold(19), color: colors.text },
  columns: { flexDirection: 'row', gap: 12 },
  rows: { flexDirection: 'column' },
  column: { flex: 1, gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  rowText: { flex: 1 },
  value: { ...fonts.heavy(28, -0.4), color: colors.text, fontVariant: ['tabular-nums'] },
  label: { ...fonts.medium(17), color: colors.text3 },
});
