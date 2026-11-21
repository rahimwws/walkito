import { Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { useHealthSignals } from '@/entities/health';
import { libraryFavourites, painSeries, todayKey, usePlanVersion } from '@/entities/program';
import { PROTOCOL_ART, PROTOCOLS, protocolById, type ProtocolId, type ProtocolPosition } from '@/entities/protocols';
import { colors, fonts, radius, space } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';

import { libraryOrder } from '../model/library-order';
import { useOpenRoutine } from '../model/use-open-routine';

const CARD_WIDTH = 200;

const WHERE: Record<ProtocolPosition, Key> = {
  seated: 'quick.seated',
  standing: 'quick.standing',
  in_bed: 'quick.inBed',
};

/**
 * "Quick sessions": the routines as photo cards in one row (NTC #2), the one
 * that suits this moment first, then favourites, then the rest. A tap opens
 * the routine's page.
 */
export function QuickRow() {
  const t = useT();
  const health = useHealthSignals();
  const open = useOpenRoutine();
  const { width, fontScale } = useWindowDimensions();
  // At large text a card takes most of the screen, so words never break.
  const cardWidth = fontScale > 1.35 ? width - space.screen * 2 - 40 : CARD_WIDTH;
  usePlanVersion();
  const pain = painSeries(todayKey(), 1)[0];
  const order = libraryOrder({
    painToday: pain,
    lastRunEndedAt: health.lastRunEndedAt,
    now: Date.now(),
    checkedInToday: pain != null,
    stepsToday: health.stepsToday,
    favourites: libraryFavourites() as ProtocolId[],
    all: PROTOCOLS.map((protocol) => protocol.id),
  });

  return (
    <View style={styles.root}>
      <Text style={styles.heading} accessibilityRole="header">
        {t('home.today.quickTitle')}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
        style={styles.scroller}>
        {order.map((id) => {
          const protocol = protocolById(id);
          const meta = t('home.today.quickMeta', {
            minutes: t('quick.minutes', { count: protocol.minutes }),
            where: t(WHERE[protocol.position]),
          });
          return (
            <Pressable
              key={id}
              accessibilityRole="button"
              accessibilityLabel={`${t(protocol.titleKey)}, ${meta}`}
              onPress={() => open(id)}
              style={({ pressed }) => [styles.card, { width: cardWidth }, pressed && styles.pressed]}>
              <Image source={PROTOCOL_ART[id]} style={[styles.photo, { width: cardWidth, height: (cardWidth * 3) / 4 }]} resizeMode="cover" />
              <View style={styles.text}>
                <Text style={styles.title}>{t(protocol.titleKey)}</Text>
                <Text style={styles.meta}>{meta}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { gap: space.gap, marginTop: space.section },
  heading: { ...fonts.semibold(20), color: colors.text },
  scroller: { marginHorizontal: -space.screen },
  row: { gap: space.gap, paddingHorizontal: space.screen },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  photo: { backgroundColor: colors.surface2 },
  text: { padding: 14, gap: 2 },
  title: { ...fonts.semibold(17), color: colors.text },
  meta: { ...fonts.regular(17), color: colors.text2 },
  pressed: { opacity: 0.7 },
});
