import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import { protocolById, type ProtocolId } from '@/entities/protocols';
import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { thumbFor } from '@/widgets/session-player';

import { useOpenRoutine } from '../model/use-open-routine';
import { RoundArt } from './round-art';
import { cardStyle } from './today-card';

/** The routines Today offers, the plan's own first. */
const ROUTINES: Readonly<Record<PlanKind, readonly ProtocolId[]>> = {
  desk: ['first_steps', 'at_work', 'pre_run', 'post_run'],
  feet: ['at_work', 'first_steps', 'pre_run', 'post_run'],
  runner: ['pre_run', 'post_run', 'at_work', 'first_steps'],
};

const ART = 64;

/**
 * Bend's routine grid: two columns of white tiles, each a coloured circle
 * holding the routine's first move, its name in bold and "2 MINUTES" under
 * it. One column at large text sizes. A tile opens the routine's page.
 */
export function RoutineGrid({ kind }: { kind: PlanKind }) {
  const t = useT();
  const openRoutine = useOpenRoutine();
  const single = useWindowDimensions().fontScale >= 1.35;

  return (
    <View style={styles.grid}>
      {ROUTINES[kind].map((id) => {
        const protocol = protocolById(id);
        return (
          <Pressable
            key={id}
            accessibilityRole="button"
            onPress={() => openRoutine(id)}
            style={({ pressed }) => [styles.tile, single && styles.tileSingle, pressed && styles.pressed]}>
            <RoundArt source={thumbFor(protocol.steps[0].exerciseId)} accent={protocol.accent} size={ART} />
            <View style={styles.text}>
              <Text style={styles.title}>{t(protocol.titleKey)}</Text>
              <Text style={styles.minutes}>{t('home.today.tileMinutes', { count: protocol.minutes })}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tile: { ...cardStyle, flexBasis: '45%', flexGrow: 1, padding: 16, gap: 14 },
  tileSingle: { flexBasis: '100%' },
  text: { flexShrink: 1, gap: 2 },
  title: { ...fonts.bold(19, -0.2), color: colors.text },
  minutes: { ...fonts.semibold(17, 0.4), color: colors.text3, textTransform: 'uppercase' },
  pressed: { opacity: 0.7 },
});
