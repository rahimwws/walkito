import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { StyleSheet, View } from 'react-native';

import { useT } from '@/shared/lib/i18n';
import { Chip } from '@/shared/ui/chip';
import { StatTile } from '@/shared/ui/stat-tile';

/** The run, with the streak's flame. A count, never a verdict. */
export function StreakChip({ count }: { count: number }) {
  const t = useT();
  return <Chip icon={FireIcon} label={t('widgets.sessionDoneStreak', { count })} style={styles.chip} />;
}

/**
 * What was done, in three tiles: the session's minutes, its moves, and every
 * day of care so far. Showing up and effort only, never a pain figure, and
 * the minutes are the plan's dose rather than the clock, so nothing here can
 * be raised by doing more than was asked.
 */
export function DoneTiles({ minutes, moves, care }: { minutes: number; moves: number; care: number }) {
  const t = useT();
  return (
    <View style={styles.tiles}>
      <StatTile
        label={t('sessionDone.tileSession')}
        value={minutes}
        format={(value) => t('sessionDone.minutes', { count: Math.round(value) })}
        emoji="timer"
        accessibilityLabel={t('sessionDone.tileSessionA11y', { count: minutes })}
      />
      <StatTile
        label={t('sessionDone.tileMoves')}
        value={moves}
        emoji="strength"
        accessibilityLabel={t('sessionDone.tileMovesA11y', { count: moves })}
      />
      <StatTile
        label={t('sessionDone.tileShowedUp')}
        value={care}
        emoji="seedling"
        accessibilityLabel={t('sessionDone.tileShowedUpA11y', { count: care })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'center',
    marginTop: 10,
  },
  tiles: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },
});
