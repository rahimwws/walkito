import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useHealthSignals } from '@/entities/health';
import { libraryFavourites, painSeries, todayKey, usePlanVersion } from '@/entities/program';
import {
  PROTOCOL_ART,
  PROTOCOL_ICONS,
  PROTOCOLS,
  protocolById,
  requestProtocol,
  type ProtocolId,
} from '@/entities/protocols';
import { fonts, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FeatureCard } from '@/shared/ui/feature-card';

import { libraryOrder } from '../model/library-order';

/** The Library's own tile, at the width two of them take side by side there. */
const CARD_WIDTH = 150;

/**
 * Library routines under Today, as small cards — section 5.2 of the plan spec.
 *
 * The card that suits this moment first, then favourites, then the rest. A tap
 * opens the routine on the Library tab, where it lives, so there is one place
 * that starts a routine and one place that decides whether it is locked.
 */
export function LibraryRow() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const router = useRouter();
  const health = useHealthSignals();
  usePlanVersion();

  const today = todayKey();
  const pain = painSeries(today, 1)[0];
  const order = libraryOrder({
    painToday: pain,
    // From the health cache: the last run's end, today or yesterday.
    lastRunEndedAt: health.lastRunEndedAt,
    now: Date.now(),
    checkedInToday: pain != null,
    stepsToday: health.stepsToday,
    favourites: libraryFavourites() as ProtocolId[],
    all: PROTOCOLS.map((protocol) => protocol.id),
  });

  return (
    <View style={styles.root}>
      <Text style={[styles.heading, { color: colors.foreground }]}>{t('home.libraryTitle')}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
        {order.map((id) => {
          const protocol = protocolById(id);
          return (
            <FeatureCard
              key={id}
              title={t(protocol.titleKey)}
              image={PROTOCOL_ART[id]}
              icon={PROTOCOL_ICONS[id]}
              accent={protocol.accent}
              style={styles.card}
              onPress={() => {
                Haptics.selectionAsync();
                requestProtocol(id);
                router.navigate('/quick');
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 12,
    marginTop: 28,
  },
  heading: {
    fontSize: 22,
    fontFamily: fonts.heavy,
    letterSpacing: -0.6,
  },
  row: {
    gap: 10,
  },
  card: {
    width: CARD_WIDTH,
  },
});
