import FlashIcon from '@hugeicons/core-free-icons/FlashIcon';
import MoonIcon from '@hugeicons/core-free-icons/Moon02Icon';
import RunningShoesIcon from '@hugeicons/core-free-icons/RunningShoesIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import SunriseIcon from '@hugeicons/core-free-icons/Sun03Icon';
import WorkoutStretchingIcon from '@hugeicons/core-free-icons/WorkoutStretchingIcon';
import type { IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { currentDay, painOn, useProgramState } from '@/entities/program';
import { useEntitled } from '@/entities/purchase';
import {
  PROTOCOLS,
  protocolById,
  recommendProtocol,
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

/** One glyph per protocol, from the set already in the app. */
const ICONS: Readonly<Record<ProtocolId, IconSvgElement>> = {
  flare: WorkoutStretchingIcon,
  pre_run: FlashIcon,
  post_run: RunningShoesIcon,
  at_work: SunriseIcon,
  morning: MoonIcon,
};

/** The catalogue key for each position word. */
const POSITION_KEYS = {
  seated: 'quick.seated',
  standing: 'quick.standing',
  in_bed: 'quick.inBed',
} as const;

/** One fact, in a rounded slab. The app's pill shape at a smaller size. */
function Chip({ label, tone, background }: { label: string; tone: string; background: string }) {
  return (
    <View style={[styles.chip, { backgroundColor: background }]}>
      <Text style={[styles.chipLabel, { color: tone }]}>{label}</Text>
    </View>
  );
}

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

  /**
   * Which protocol leads, worked out from the clock and today's log.
   *
   * `lastRunEndedAt` is null until workout reads are wired up. The rule is
   * skipped silently for null, by design: this tab must never be the thing
   * that asks for a HealthKit permission.
   */
  const featuredId = useMemo(() => {
    const now = new Date();
    const day = currentDay();
    return recommendProtocol(
      {
        painToday: painOn(day),
        checkedInToday: painOn(day) != null,
        lastRunEndedAt: null,
        hour: now.getHours(),
        weekday: now.getDay(),
      },
      now.getTime(),
    );
    // Recomputed on every render of this screen rather than memoised on a
    // clock: the hour can turn while the tab is open, and a stale featured
    // card is worse than the work of picking one again.
  }, []);

  const featured = protocolById(featuredId);

  const locked = (protocol: Protocol) => !protocol.free && !entitled;

  const openProtocol = (protocol: Protocol) => {
    Haptics.selectionAsync();
    if (locked(protocol)) {
      // The standard paywall, from the standard offering. Tapping a locked
      // card is a clear intent to buy; it should not be answered with a shrug.
      router.push('/offer');
      return;
    }
    setOpen(protocol.id);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 24,
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
          icon={ICONS[featured.id]}
          accent={featured.accent}
          onPress={() => openProtocol(featured)}
          style={styles.featured}
        />
        {/* Chips, not a sentence. Three facts — why it is here, how long, where
            you will be — read faster as separate objects than as prose joined
            by dots. */}
        <View style={styles.chips}>
          <Chip label={t('quick.featured')} tone={meter.ink} background={meter.track} />
          <Chip
            label={t('quick.minutes', { count: featured.minutes })}
            tone={meter.caption}
            background={meter.track}
          />
          <Chip
            label={t(POSITION_KEYS[featured.position])}
            tone={meter.caption}
            background={meter.track}
          />
        </View>

        <View style={styles.grid}>
          {PROTOCOLS.map((protocol) => (
            <FeatureCard
              key={protocol.id}
              title={t(protocol.titleKey)}
              icon={locked(protocol) ? SquareLock02Icon : ICONS[protocol.id]}
              accent={protocol.accent}
              onPress={() => openProtocol(protocol)}
              style={styles.tile}
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
  title: { fontSize: 32, fontFamily: fonts.heavy, letterSpacing: -0.8 },
  subtitle: { marginTop: 4, fontSize: 16, fontFamily: fonts.medium, letterSpacing: -0.2 },
  /** Full width and banner-shaped. Overrides `FeatureCard`'s own near-square
   * ratio, which is sized for two cards abreast. */
  featured: { marginTop: 20, aspectRatio: 2.05 },
  chips: { marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    borderCurve: 'continuous',
  },
  chipLabel: { fontSize: 13, fontFamily: fonts.semibold, letterSpacing: -0.1 },
  grid: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  /** Two to a row, with the gap taken out of the width. */
  tile: { flexGrow: 1, flexBasis: '47%' },
});
