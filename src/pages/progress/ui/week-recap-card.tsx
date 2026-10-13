import { useIsFocused } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { usePlanOver } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { GlassCard } from '@/shared/ui/card-3d';
import { Mascot, thumbsUpRig, type MascotProps } from '@/shared/ui/mascot';
import { STAT_TILE_STAGGER_MS, StatTile } from '@/shared/ui/stat-tile';

import type { WeekRecap } from '../model/week-recap';

const MASCOT_SIZE = 118;

/** A tap only boings him. */
const boing = () => undefined;

/**
 * This week at the top of Progress: how many days counted, said as a headline,
 * with the mascot's thumbs up, then the three counts behind it.
 *
 * Counts of showing up and nothing else. No denominators, no pain, no days
 * missed: a week of rest the plan set reads the same as a week of sessions,
 * and a week with nothing yet in it is a welcome rather than a zero.
 */
export function WeekRecapCard({
  recap,
  mascot = true,
  paused = false,
}: {
  recap: WeekRecap;
  /** Off while another mascot shares the screen: one character at a time. */
  mascot?: boolean;
  /** A sheet is over the page. The tab being hidden pauses it by itself. */
  paused?: boolean;
}) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  // The tabs stay mounted: he only moves while Progress is in front, and his
  // thumbs up plays the first time it is, rather than unseen at mount.
  const focused = useIsFocused();
  const [seen, setSeen] = useState(focused);
  useEffect(() => {
    if (focused) setSeen(true);
  }, [focused]);

  const { showedUp, sessions, checkins } = recap;
  const title = showedUp > 0 ? t('weekRecap.title', { count: showedUp }) : t('weekRecap.titleNone');

  return (
    <GlassCard padding={16}>
      <View style={styles.top}>
        <View style={styles.headline}>
          <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('weekRecap.eyebrow')}</Text>
          <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
            {title}
          </Text>
        </View>
        {mascot && (
          <RecapMascot
            rig={thumbsUpRig}
            size={MASCOT_SIZE}
            state={seen && showedUp > 0 ? 'happy' : 'idle'}
            paused={paused || !focused}
            surface={colors.background}
            onPress={boing}
          />
        )}
      </View>
      <View style={styles.tiles}>
        <StatTile
          label={t('weekRecap.showedUp')}
          value={showedUp}
          emoji="seedling"
          accent="teal"
          accessibilityLabel={t('weekRecap.showedUpA11y', { count: showedUp })}
          style={styles.tile}
        />
        <StatTile
          label={t('weekRecap.sessions')}
          value={sessions}
          emoji="strength"
          accent="violet"
          delayMs={STAT_TILE_STAGGER_MS}
          accessibilityLabel={t('weekRecap.sessionsA11y', { count: sessions })}
          style={styles.tile}
        />
        <StatTile
          label={t('weekRecap.checkins')}
          value={checkins}
          emoji="sun"
          accent="amber"
          delayMs={STAT_TILE_STAGGER_MS * 2}
          accessibilityLabel={t('weekRecap.checkinsA11y', { count: checkins })}
          style={styles.tile}
        />
      </View>
    </GlassCard>
  );
}

/**
 * The thumbs up, still under the plan as well: the overlay is not a route, so
 * Progress stays the focused tab under it. Its own component, so the plan's
 * coming and going re-renders the mascot and not the card.
 */
function RecapMascot({ paused = false, ...props }: MascotProps) {
  const planOver = usePlanOver();
  return <Mascot {...props} paused={paused || planOver} />;
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headline: {
    flex: 1,
    gap: 4,
  },
  eyebrow: fonts.semibold(14),
  title: fonts.heavy(26, -0.7),
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
