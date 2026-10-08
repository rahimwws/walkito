import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useHealthSignals } from '@/entities/health';
import { libraryFavourites, painSeries, todayKey, usePlanVersion } from '@/entities/program';
import { browsingLapsed, clearBrowsingLapsed, useEntitled } from '@/entities/purchase';
import {
  PROTOCOL_ART,
  PROTOCOL_ICONS,
  PROTOCOLS,
  protocolById,
  type Protocol,
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
 * pushes the routine's own page (`/routine/[id]`), the same page the Quick tab
 * opens, so there is one place that starts a routine. Back returns here.
 */
export function LibraryRow() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const router = useRouter();
  const health = useHealthSignals();
  const entitled = useEntitled();
  usePlanVersion();

  /**
   * A locked routine goes to the paywall, as it does from the Quick tab: the
   * standard offer, or for somebody browsing after their access ended, the
   * expiry screen (clearing the flag brings it back; `/offer` is not a route
   * for them).
   */
  const open = (protocol: Protocol) => {
    Haptics.selectionAsync();
    if (!protocol.free && !entitled) {
      if (browsingLapsed()) clearBrowsingLapsed();
      else router.push('/offer');
      return;
    }
    router.push({ pathname: '/routine/[id]', params: { id: protocol.id } });
  };

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
              onPress={() => open(protocol)}
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
  heading: fonts.heavy(22, -0.6),
  row: {
    gap: 10,
  },
  card: {
    width: CARD_WIDTH,
  },
});
