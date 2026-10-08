import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import BedIcon from '@hugeicons/core-free-icons/BedIcon';
import Chair01Icon from '@hugeicons/core-free-icons/Chair01Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import LeftToRightListNumberIcon from '@hugeicons/core-free-icons/LeftToRightListNumberIcon';
import ManIcon from '@hugeicons/core-free-icons/ManIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { exerciseById } from '@/entities/program';
import {
  PROTOCOL_ART,
  PROTOCOLS_BY_ID,
  type Protocol,
  type ProtocolId,
  type ProtocolPosition,
} from '@/entities/protocols';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PRIMARY_BUTTON_HEIGHT, PrimaryButton } from '@/shared/ui/primary-button';

import { POSITION_KEYS, WHY_KEYS } from '../config/copy';
import { useStartRoutine } from '../model/use-start-routine';
import { RoutinePlayer } from './routine-player';

/**
 * One routine, as a page of its own: what it is, why it helps, the moves in
 * order, and one button.
 *
 * It used to be a small bottom sheet with three figures and Start, which never
 * listed the moves and could not fit a longer title. A routine is something you
 * look at before you commit two minutes to it, so it gets the shape the best
 * workout apps give a workout: a full-bleed picture with the title on it, the
 * facts as chips, the list, and Start pinned where the thumb is.
 */

/** Share of the window the picture takes before the page starts. */
const HERO_SHARE = 0.46;
/** The band at the foot of the picture that melts it into the page. */
const BLEND = 48;
const SIDE_PAD = 20;
const BACK_SIZE = 40;
const TILE = 52;

/** Over the photograph the text is always light, whatever the scheme. */
const ON_PHOTO = '#FFFFFF';
const ON_PHOTO_MUTED = 'rgba(255,255,255,0.78)';

const POSITION_ICONS: Readonly<Record<ProtocolPosition, IconSvgElement>> = {
  seated: Chair01Icon,
  standing: ManIcon,
  in_bed: BedIcon,
};

/** `#RRGGBB` at zero alpha, so a gradient fades into the page's own colour
 * rather than through grey, which is what `transparent` (black at zero) does. */
function clear(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},0)`;
}

export function RoutinePage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const protocol: Protocol | null =
    id != null && id in PROTOCOLS_BY_ID ? PROTOCOLS_BY_ID[id as ProtocolId] : null;

  // A link to a routine that does not exist lands on the list of the ones
  // that do, rather than on a blank page.
  if (protocol == null) return <Redirect href="/quick" />;
  return <Routine protocol={protocol} />;
}

function Routine({ protocol }: { protocol: Protocol }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const tone = accents[scheme][protocol.accent];
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const router = useRouter();
  const t = useT();

  const { locked, running, start, stop } = useStartRoutine(protocol);

  const heroHeight = Math.round(height * HERO_SHARE);

  const leave = () => {
    if (router.canGoBack()) router.back();
    else router.replace('/quick');
  };

  /**
   * Scrolled past the picture, the status bar goes back to following the
   * scheme and a wash of the page rises behind it. Over the photo it stays
   * light, which is the only colour that reads on it.
   */
  const scrollY = useSharedValue(0);
  const [pastHero, setPastHero] = useState(false);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  const threshold = heroHeight - insets.top - BLEND;
  useAnimatedReaction(
    () => scrollY.value > threshold,
    (past, before) => {
      if (past !== before) runOnJS(setPastHero)(past);
    },
    [threshold],
  );
  const topWash = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [threshold - 40, threshold], [0, 1], 'clamp'),
  }));

  const page = colors.background;
  const glass = isLiquidGlassAvailable();

  return (
    <View style={styles.screen}>
      <StatusBar style={pastHero ? 'auto' : 'light'} />

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: PRIMARY_BUTTON_HEIGHT + Math.max(insets.bottom, 16) + 48,
        }}>
        <View style={[styles.hero, { height: heroHeight }]}>
          {/* In a pinned frame, stretched to fill it: a bundled image's own
              pixel size would otherwise leak into the layout (see
              `FeatureCard`). */}
          <View style={StyleSheet.absoluteFill}>
            <Image source={PROTOCOL_ART[protocol.id]} style={styles.art} resizeMode="cover" />
          </View>
          {/* Keeps the light status bar readable at the top, and the title at
              the bottom. */}
          <View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                experimental_backgroundImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.72) 100%)',
              },
            ]}
          />
          <View
            pointerEvents="none"
            style={[
              styles.blend,
              {
                experimental_backgroundImage: `linear-gradient(to top, ${page} 0%, ${clear(page)} 100%)`,
              },
            ]}
          />

          <View style={styles.heroText}>
            <Text style={styles.kicker}>{t('quick.kicker')}</Text>
            <Text style={styles.title} accessibilityRole="header">
              {t(protocol.titleKey)}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.chips}>
            <Chip
              icon={Clock01Icon}
              label={t('quick.minutes', { count: protocol.minutes })}
              tint={tone.fill}
              surface={colors.card}
              ink={colors.foreground}
            />
            <Chip
              icon={LeftToRightListNumberIcon}
              label={t('quick.moves', { count: protocol.steps.length })}
              tint={tone.fill}
              surface={colors.card}
              ink={colors.foreground}
            />
            <Chip
              icon={POSITION_ICONS[protocol.position]}
              label={t(POSITION_KEYS[protocol.position])}
              tint={tone.fill}
              surface={colors.card}
              ink={colors.foreground}
            />
          </View>

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            {t('quick.whyTitle')}
          </Text>
          <Text style={[styles.why, { color: colors.foreground }]}>{t(WHY_KEYS[protocol.id])}</Text>

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            {t('quick.stepsLabel')}
          </Text>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            {protocol.steps.map((step, i) => (
              <View key={`${step.exerciseId}-${i}`}>
                {i > 0 && <View style={[styles.separator, { backgroundColor: meter.track }]} />}
                <View style={styles.row}>
                  <View style={[styles.tile, { backgroundColor: tone.track }]}>
                    <Text style={[styles.tileNumber, { color: tone.fill }]}>{i + 1}</Text>
                  </View>
                  <View style={styles.rowText}>
                    <Text style={[styles.moveName, { color: colors.foreground }]} numberOfLines={2}>
                      {t(exerciseById(step.exerciseId).titleKey)}
                    </Text>
                    <Text style={[styles.moveDose, { color: meter.caption }]}>
                      {step.switchAtHalf === true
                        ? t('quick.stepSwitch', { count: step.seconds })
                        : t('quick.stepSeconds', { count: step.seconds })}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>

      {/* The page's own colour rising behind the status bar once the picture
          has scrolled away, so the list never runs under the clock. */}
      <Animated.View
        pointerEvents="none"
        style={[
          styles.topWash,
          {
            height: insets.top + BACK_SIZE + 16,
            experimental_backgroundImage: `linear-gradient(to bottom, ${page} 0%, ${page} 60%, ${clear(page)} 100%)`,
          },
          topWash,
        ]}
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.back')}
        onPress={leave}
        hitSlop={8}
        style={({ pressed }) => [
          styles.back,
          { top: insets.top + 8 },
          pressed && { opacity: 0.7 },
        ]}>
        {glass ? (
          <GlassView
            glassEffectStyle="regular"
            tintColor="rgba(17,17,19,0.28)"
            style={styles.backFace}>
            <HugeiconsIcon icon={ArrowLeft02Icon} size={22} color={ON_PHOTO} strokeWidth={2} />
          </GlassView>
        ) : (
          <View style={[styles.backFace, styles.backSolid]}>
            <HugeiconsIcon icon={ArrowLeft02Icon} size={22} color={ON_PHOTO} strokeWidth={2} />
          </View>
        )}
      </Pressable>

      {/* Start, pinned over a fade of the page so the last row shows through
          on its way under. */}
      <View
        pointerEvents="box-none"
        style={[
          styles.dock,
          {
            paddingBottom: Math.max(insets.bottom, 16),
            experimental_backgroundImage: `linear-gradient(to top, ${page} 0%, ${page} 55%, ${clear(page)} 100%)`,
          },
        ]}>
        <PrimaryButton
          label={t('quick.startMinutes', { count: protocol.minutes })}
          icon={locked ? SquareLock02Icon : undefined}
          onPress={start}
        />
        {locked && (
          <Text style={[styles.lockedHint, { color: meter.caption }]}>{t('quick.lockedHint')}</Text>
        )}
      </View>

      {running && (
        <RoutinePlayer
          protocol={protocol}
          onClose={stop}
          onFinished={() => {
            stop();
            leave();
          }}
        />
      )}
    </View>
  );
}

function Chip({
  icon,
  label,
  tint,
  surface,
  ink,
}: {
  icon: IconSvgElement;
  label: string;
  tint: string;
  surface: string;
  ink: string;
}) {
  return (
    <View style={[styles.chip, { backgroundColor: surface }]}>
      <HugeiconsIcon icon={icon} size={16} color={tint} strokeWidth={2} />
      <Text style={[styles.chipLabel, { color: ink }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  hero: {
    width: '100%',
    backgroundColor: palette.dark.background,
    overflow: 'hidden',
  },
  art: { flex: 1, width: undefined, height: undefined },
  blend: { position: 'absolute', left: 0, right: 0, bottom: 0, height: BLEND },
  heroText: {
    position: 'absolute',
    left: SIDE_PAD,
    right: SIDE_PAD,
    bottom: BLEND + 4,
    gap: 4,
  },
  kicker: { ...fonts.semibold(14), color: ON_PHOTO_MUTED },
  title: { ...fonts.heavy(34, -1), lineHeight: 40, color: ON_PHOTO },
  body: { paddingHorizontal: SIDE_PAD, gap: 12 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    height: 34,
    paddingHorizontal: 12,
    borderRadius: 17,
    borderCurve: 'continuous',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chipLabel: fonts.semibold(14),
  sectionTitle: { ...fonts.heavy(20, -0.4), marginTop: 16 },
  why: { ...fonts.medium(16, -0.2), lineHeight: 23, opacity: 0.72 },
  card: {
    borderRadius: 24,
    borderCurve: 'continuous',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  separator: { height: StyleSheet.hairlineWidth, marginLeft: TILE + 14 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 12,
  },
  tile: {
    width: TILE,
    height: TILE,
    borderRadius: 16,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileNumber: fonts.heavy(20, -0.4),
  rowText: { flex: 1, gap: 2 },
  moveName: fonts.semibold(16),
  moveDose: fonts.medium(14),
  topWash: { position: 'absolute', top: 0, left: 0, right: 0 },
  back: { position: 'absolute', left: 16 },
  backFace: {
    width: BACK_SIZE,
    height: BACK_SIZE,
    borderRadius: BACK_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  backSolid: { backgroundColor: 'rgba(17,17,19,0.55)' },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: SIDE_PAD,
    paddingTop: 36,
    gap: 8,
  },
  lockedHint: { ...fonts.medium(13), textAlign: 'center' },
});
