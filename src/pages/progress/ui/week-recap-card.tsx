import { StyleSheet, Text, View } from 'react-native';

import { fonts, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { StatTile } from '@/shared/ui/stat-tile';

import type { WeekRecap } from '../model/week-recap';
import { Card } from './card';

/**
 * This week at the top of Progress: how many days counted, said as a headline,
 * then the three counts behind it.
 *
 * Counts of showing up and nothing else. No denominators, no pain, no days
 * missed: a week of rest the plan set reads the same as a week of sessions,
 * and a week with nothing yet in it is a welcome rather than a zero.
 */
export function WeekRecapCard({ recap }: { recap: WeekRecap }) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];

  const { showedUp, sessions, checkins } = recap;
  const title = showedUp > 0 ? t('weekRecap.title', { count: showedUp }) : t('weekRecap.titleNone');

  return (
    <Card title={t('weekRecap.eyebrow')}>
      <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
      <View style={styles.tiles}>
        <StatTile
          label={t('weekRecap.showedUp')}
          value={showedUp}
          emoji="seedling"
          accessibilityLabel={t('weekRecap.showedUpA11y', { count: showedUp })}
          style={styles.tile}
        />
        <StatTile
          label={t('weekRecap.sessions')}
          value={sessions}
          emoji="strength"
          accessibilityLabel={t('weekRecap.sessionsA11y', { count: sessions })}
          style={styles.tile}
        />
        <StatTile
          label={t('weekRecap.checkins')}
          value={checkins}
          emoji="sun"
          accessibilityLabel={t('weekRecap.checkinsA11y', { count: checkins })}
          style={styles.tile}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: { ...fonts.bold(26, -0.5), marginTop: 6 },
  tiles: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  /** Three share the card's width on the narrowest phone too: the tile's own
   * 96pt floor would push the third past the edge at 375pt. */
  tile: {
    minWidth: 0,
  },
});
