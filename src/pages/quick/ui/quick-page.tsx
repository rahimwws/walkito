import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { currentDay, painOn, useProgramState } from '@/entities/program';
import { useHealthSignals } from '@/entities/health';
import { browsingLapsed, clearBrowsingLapsed, useEntitled } from '@/entities/purchase';
import {
  PROTOCOLS,
  protocolById,
  PROTOCOL_ART,
  PROTOCOL_ICONS,
  clearProtocolRequest,
  recommendProtocol,
  useProtocolRequest,
  type Protocol,
  type ProtocolId,
} from '@/entities/protocols';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FeatureCard } from '@/shared/ui/feature-card';

import { ProtocolSheet } from './protocol-sheet';

/**
 * The third tab: five short protocols, runnable any day.
 *
 * The app was useful on scheduled days only, and pain does not keep to the
 * schedule. This screen answers the question a user has most often — what do I
 * do right now — and is the reason to open the app on a day the plan asks for
 * nothing.
 *
 * Everything on it is assembled from parts that already existed: the cards are
 * `FeatureCard`, the sheet is the same bottom sheet the rest of the app uses,
 * the player is the session player with a playlist handed to it, and every
 * colour is the accent already used for the day type that means the same
 * thing. Nothing here is a new component.
 */

/** One glyph per protocol, shared with the small cards on Today. */
const ICONS = PROTOCOL_ICONS;

export function QuickPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const router = useRouter();
  const entitled = useEntitled();

  // Subscribed rather than read once: logging pain on Home while this tab is
  // mounted has to change what is featured here.
  useProgramState();

  const [open, setOpen] = useState<ProtocolId | null>(null);
  const health = useHealthSignals();

  /**
   * Which protocol leads, worked out from the clock and today's log.
   *
   * `lastRunEndedAt` comes from the health cache, which the pipeline fills
   * from workouts — never from a query here: this tab must never be the thing
   * that asks for a HealthKit permission. Null (no Health, no run) skips the
   * rule silently.
   */
  const featuredId = useMemo(() => {
    const now = new Date();
    const day = currentDay();
    return recommendProtocol(
      {
        painToday: painOn(day),
        checkedInToday: painOn(day) != null,
        lastRunEndedAt: health.lastRunEndedAt,
        hour: now.getHours(),
        weekday: now.getDay(),
      },
      now.getTime(),
    );
    // Recomputed on every render of this screen rather than memoised on a
    // clock: the hour can turn while the tab is open, and a stale featured
    // card is worse than the work of picking one again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [health.lastRunEndedAt]);

  const featured = protocolById(featuredId);

  const locked = (protocol: Protocol) => !protocol.free && !entitled;

  const openProtocol = (protocol: Protocol) => {
    Haptics.selectionAsync();
    if (locked(protocol)) {
      // The standard paywall, from the standard offering. Tapping a locked
      // card is a clear intent to buy; it should not be answered with a shrug.
      //
      // Except for somebody whose subscription ended and who is browsing
      // read-only: `/offer` is not a route for them (the root guard keeps it
      // for a first purchase), so a push would do nothing. Clearing the flag
      // brings the expiry screen back, which sells the same plans — the way the
      // session player's locked state does it.
      if (browsingLapsed()) clearBrowsingLapsed();
      else router.push('/offer');
      return;
    }
    setOpen(protocol.id);
  };

  /**
   * A routine asked for from elsewhere — the small cards on Today — opened the
   * same way a tap on its card here opens it, lock included.
   */
  const asked = useProtocolRequest();
  useEffect(() => {
    if (asked == null) return;
    clearProtocolRequest();
    openProtocol(protocolById(asked));
    // Only the request: `openProtocol` is recreated every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asked]);

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 24,
          // One gutter for the whole screen, as the other two tabs have. The
          // card fills what is left of the width; an earlier version moved this
          // onto each block so the card could run edge to edge, which left it
          // pinned to x=0 with a gap down the right.
          paddingHorizontal: SIDE_PAD,
          paddingBottom: insets.bottom + 140,
        }}>
        <Text style={[styles.title, { color: colors.foreground }]}>{t('quick.title')}</Text>
        <Text style={[styles.subtitle, { color: meter.caption }]}>{t('quick.subtitle')}</Text>

        {/* The one that suits right now. It stays in the grid below as well —
            people look for a protocol where it usually is, and moving it when
            it happens to be featured would hide it exactly when it matters.

            A banner rather than the card's own near-square aspect. `FeatureCard`
            is sized for a pair sitting side by side; at full width that shape
            becomes a panel taller than the phone, and everything under it falls
            off the screen. */}
        <FeatureCard
          title={t(featured.titleKey)}
          image={PROTOCOL_ART[featured.id]}
          icon={ICONS[featured.id]}
          accent={featured.accent}
          onPress={() => openProtocol(featured)}
          style={styles.featured}
        />
        <View style={styles.grid}>
          {PROTOCOLS.map((protocol, i) => (
            <FeatureCard
              key={protocol.id}
              title={t(protocol.titleKey)}
              image={PROTOCOL_ART[protocol.id]}
              icon={locked(protocol) ? SquareLock02Icon : ICONS[protocol.id]}
              accent={protocol.accent}
              onPress={() => openProtocol(protocol)}
              // An odd one out is alone on its row and stretches to the full
              // width, where the tile's near-square shape made it the tallest
              // thing on the screen. It takes the banner shape instead.
              style={
                i === PROTOCOLS.length - 1 && PROTOCOLS.length % 2 === 1
                  ? styles.wide
                  : styles.tile
              }
            />
          ))}
        </View>
      </ScrollView>

      <ProtocolSheet
        protocol={open == null ? null : protocolById(open)}
        onClose={() => setOpen(null)}
      />
    </View>
  );
}

/** Home's gutter, so the three tabs line up. */
const SIDE_PAD = 20;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  title: fonts.heavy(32, -0.8),
  subtitle: { marginTop: 4, ...fonts.medium(16, -0.2) },
  /**
   * The full width inside the gutter, and banner-shaped.
   *
   * `alignSelf: 'stretch'` is stated rather than left to the default: with an
   * `aspectRatio` set and no width, a stray `alignItems` anywhere above would
   * let the card size to its content and sit against one edge, which is exactly
   * what it did. Overrides `FeatureCard`'s own near-square ratio, which is
   * sized for two cards abreast.
   */
  featured: { marginTop: 20, alignSelf: 'stretch', width: '100%', aspectRatio: 2.05 },
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  /** Two to a row, with the gap taken out of the width. */
  tile: { flexGrow: 1, flexBasis: '47%' },
  /** The last tile when it has no partner: full width, banner-shaped. */
  wide: { flexBasis: '100%', aspectRatio: 2.05 },
});
