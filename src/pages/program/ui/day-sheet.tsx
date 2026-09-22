import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  RETEST_MINUTES,
  RETEST_TESTS,
  blockName,
  dateFor,
  movePlanFor,
  type DayStatus,
  type ProgramDay,
  type SessionKind,
} from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT, type Key, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { RestButton } from './rest-button';

import { artFor } from '../config/kind-art';

/**
 * How big the mascot stands, and so how far it overhangs.
 *
 * Half of it is padding above the card and half hangs in the air, exactly as
 * the streak sheet hangs its badge — the effect is the figure sitting proud of
 * the surface rather than being framed by it.
 */
const ART = 200;
const RADIUS = 36;
const BLUR = 28;

/** Out is quicker than in. Arriving wants to be watched; leaving is the user
 * having already decided, and a slow exit reads as the app hesitating. */
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

/**
 * The day, placed but not spelled out.
 *
 * From `Intl` rather than from two tables of English abbreviations: it knows
 * every locale's weekday and month names, and it knows their order — Russian
 * and Spanish put the day first and lowercase both words. Same options as the
 * day sheet at `pages/day`, so the two screens that show one day now write its
 * date identically; before this they disagreed ("Tue 12 Aug" against
 * "Tue, Aug 12") purely because each had hand-rolled its own table.
 */
function shortDate(at: number, language: Language): string {
  return new Intl.DateTimeFormat(language, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(at));
}

/** What a day's work is called. The same keys the cards in the list read. */
const KIND_KEY = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
} as const satisfies Record<SessionKind, Key>;

export type DaySheetProps = {
  /** The day being read, or null when nothing is open. */
  day: ProgramDay | null;
  status: DayStatus;
  onClose: () => void;
  /** Only offered on the day it can actually be started. */
  onStart: () => void;
  /**
   * When this day opens, for the one that is next up. Null for every other day,
   * including today's — there is nothing to wait for on a day already open.
   */
  unlockAt?: number | null;
};

/**
 * One day of the plan, as an aside.
 *
 * A sheet rather than a screen, for the reason the streak sheet is one: this
 * answers "what is this day" and nothing has to be decided here. Tapping away
 * closes it.
 *
 * The figure is the day's own kind, which is what makes the sheet feel like it
 * belongs to the card that opened it rather than to the list in general. A rest
 * day has no figure and the sheet closes up around the gap — see `kind-art.ts`
 * for why recovery is deliberately unillustrated.
 */
export function DaySheet({ day, status, onClose, onStart, unlockAt }: DaySheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  // Subscribed: `movePlanFor` is counted below and its titles resolve through
  // the catalogue, so the sheet has to hear a language change to repaint.
  const t = useT();
  const language = useLanguage();

  /**
   * Mounted separately from the day, which is the whole trick.
   *
   * A `Modal` driven straight off the caller's flag is torn down the instant
   * the flag clears, so there is nothing left on screen for an exit animation
   * to play on. Owning the mount means the flag starts the transition and the
   * transition decides when the modal actually goes.
   */
  const [mounted, setMounted] = useState(false);
  /** Held past the close, so the card does not blank out mid-exit. */
  const [shown, setShown] = useState<{ day: ProgramDay; status: DayStatus } | null>(null);
  /** 0 away, 1 up. Named rather than `t`, which is the translator everywhere
   * else in this codebase. */
  const phase = useSharedValue(0);

  useEffect(() => {
    if (day != null) {
      setShown({ day, status });
      setMounted(true);
      // A frame late on purpose: the modal has to exist before the transition
      // starts, or the first frames play against nothing.
      const frame = requestAnimationFrame(() => {
        phase.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    phase.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [day, status, phase]);

  const backdrop = useAnimatedStyle(() => ({ opacity: phase.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: phase.value,
    transform: [{ translateY: (1 - phase.value) * RISE }],
  }));

  if (!mounted || shown == null) return null;

  const art = artFor(shown.day.kind);
  const retest = shown.day.checkpoint;
  const moves = retest ? RETEST_TESTS : movePlanFor(shown.day).length;
  const minutes = retest ? RETEST_MINUTES : shown.day.minutes;
  /** Only today can be begun. Every other card in the list carries a padlock,
   * and a sheet that offered to start a locked day would be contradicting the
   * one rule the list is built on. */
  const startable = shown.status === 'today';

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.fill}>
        {/* The page behind, pushed back rather than dimmed. A blur keeps it
            recognisable while making it unmistakably the background. */}
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.fill}
          onPress={onClose}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          {art != null && (
            <Image source={art} resizeMode="contain" accessible={false} style={styles.art} />
          )}

          <View
            style={[
              styles.card,
              { backgroundColor: colors.card },
              // No figure, no overhang to clear. A rest day's sheet is simply
              // shorter rather than carrying a hole where a mascot would be.
              art == null && styles.cardBare,
            ]}>
            <Text style={[styles.date, { color: meter.caption }]}>
              {shortDate(dateFor(shown.day.index, Date.now()), language)}
            </Text>

            <Text style={[styles.title, { color: colors.foreground }]}>
              {retest ? t('pages.program.retest') : t(KIND_KEY[shown.day.kind])}
            </Text>

            {/* Three figures, the way the reference reads: the number first and
                what it counts underneath it. Nothing here is derived from
                anything the user has not done — they are the day's own
                prescription. */}
            <View style={styles.stats}>
              <Stat
                value={t('session.minutes', { count: minutes })}
                label={t('pages.program.statSession')}
              />
              <Stat
                value={String(moves)}
                label={t(retest ? 'pages.program.statTests' : 'pages.program.statExercises')}
              />
              {/* The block's name is still English — `blockName()` in
                  `entities/program` reads a plain table, not the catalogue. */}
              <Stat
                value={t('session.day', { day: shown.day.day })}
                label={blockName(shown.day.block)}
              />
            </View>

            {startable && (
              <PrimaryButton label={t('pages.program.getStarted')} onPress={onStart} />
            )}
            {/* The same button the card carries, in the same state. A sheet
                that opened on a locked day and offered nothing would be a
                dead end — and one that offered "Get Started" on a day that is
                not open yet would be worse. */}
            {!startable && unlockAt != null && (
              <RestButton unlockAt={unlockAt} onStart={onStart} />
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, { color: colors.foreground }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: meter.caption }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  /** A trace of ink over the blur. Blur alone leaves a bright page bright, and
   * the card needs something to sit against on the light scheme. */
  wash: {
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    // The room the figure needs above the card.
    paddingTop: ART / 2,
  },
  art: {
    position: 'absolute',
    // Hung at the dock's top edge: with `paddingTop` above equal to half the
    // figure, the card's top edge cuts it exactly in half.
    top: 0,
    alignSelf: 'center',
    width: ART,
    height: ART,
    // Over the card, not under it — the whole effect is the figure sitting
    // proud of the surface.
    zIndex: 2,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingBottom: 18,
    // Clears the half of the figure that overhangs it.
    paddingTop: ART / 2 + 14,
    alignItems: 'stretch',
  },
  cardBare: {
    paddingTop: 24,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
    lineHeight: 46,
    fontFamily: fonts.heavy,
    letterSpacing: -1.2,
    textAlign: 'center',
    marginTop: 2,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 22,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  statValue: {
    fontSize: 19,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  statLabel: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
});
