import { StyleSheet, Text, View, type ColorValue } from 'react-native';

import { bodyColors, colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { BigNumber, Ring } from '@/widgets/session-player';

import type { WeekRecap } from '../model/week-recap';
import { CardHead, IconDisc, NUMBER_SCALE, ProgressCard, useLargeText } from './kit';

/**
 * Sessions as BitePal's calories card (#102): every session so far as the big
 * number with its unit beside a closed ring with the trophy, then this week in
 * three tiles, each a round icon over a count and its unit ("5 days", "4
 * sessions", "5 check-ins"). The numbers carry their own nouns, so no label
 * restates them. Counts only: nothing here says how many days were missed,
 * and a quiet week is a number like any other.
 */
export function SessionsCard({ total, recap }: { total: number; recap: WeekRecap }) {
  const t = useT();
  const large = useLargeText();
  const tiles: { key: string; unit: string; a11y: string; value: number; art: FluentName; tone: ColorValue }[] = [
    {
      key: 'showedUp',
      unit: t('sessionDone.month.unit', { count: recap.showedUp }),
      a11y: t('weekRecap.showedUpA11y', { count: recap.showedUp }),
      value: recap.showedUp,
      art: 'seedling',
      tone: bodyColors.calf,
    },
    {
      key: 'sessions',
      unit: t('progress.unit.sessions', { count: recap.sessions }),
      a11y: t('weekRecap.sessionsA11y', { count: recap.sessions }),
      value: recap.sessions,
      art: 'strength',
      tone: bodyColors.heel,
    },
    {
      key: 'checkins',
      unit: t('progress.unit.checkins', { count: recap.checkins }),
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
          <BigNumber
            value={total}
            unit={t('progress.unit.sessions', { count: total })}
            size={48}
            maxScale={NUMBER_SCALE}
          />
        </CardHead>
      </View>
      <Text style={styles.week} accessibilityRole="header">
        {t('weekRecap.eyebrow')}
      </Text>
      <View style={[styles.tiles, large && styles.rows]}>
        {tiles.map((tile) => (
          <View key={tile.key} style={large ? styles.row : styles.tile} accessible accessibilityLabel={tile.a11y}>
            <IconDisc name={tile.art} tone={tile.tone} size={44} />
            <BigNumber value={tile.value} unit={tile.unit} size={28} maxScale={NUMBER_SCALE} style={large && styles.rowText} />
          </View>
        ))}
      </View>
    </ProgressCard>
  );
}

const styles = StyleSheet.create({
  week: { ...fonts.bold(19), color: colors.text },
  tiles: { flexDirection: 'row', gap: 12 },
  rows: { flexDirection: 'column' },
  tile: { flex: 1, gap: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  rowText: { flex: 1 },
});
