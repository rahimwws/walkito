import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useMemo, useRef } from 'react';
import { Image, StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Defs, Path, RadialGradient, Rect, Stop } from 'react-native-svg';

import {
  RETEST_TESTS,
  sessions,
  useLogsVersion,
  usePlanVersion,
  useStreak,
  type NextSession,
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { waitPhrase } from '@/shared/lib/wait';
import { useSplashRevealed } from '@/shared/ui/splash';

/**
 * The mascot laughing and waving: the same still the update handoff and the
 * splash draw, and the happiest pose the app owns. The check-in's own "no
 * pain" drawing is deliberately not reused here — both blocks are on Home at
 * once, and the same figure twice would read as one thing said twice.
 */
const MASCOT = require('@assets/update/mascot-handoff.png');

/** The artwork's box, and how far it stands up out of the card's top edge. */
const MASCOT_SIZE = 104;
const MASCOT_LIFT = 26;

const DOT = 30;
/** The check inside a dot, drawn on a 30pt grid, and its length for the dash. */
const CHECK_PATH = 'M9.5 15.5 L13.5 19.2 L20.8 11.2';
const CHECK_LENGTH = 17;

const AnimatedPath = Animated.createAnimatedComponent(Path);


export type DoneCardProps = {
  next: NextSession | null;
  /** Home is the focused tab. The countdown ticks, and the one-shot motion
   * plays, only while it is. */
  active: boolean;
  /** `YYYY-MM-DD` for today. */
  date: string;
  /** Today's planned minutes: what is said when no session record carries a
   * figure of its own (a day finished by ticks alone). */
  plannedMinutes: number;
  /** The moves ticked off today's list, for the same fallback. */
  tickedMoves: number;
  /** Today was a test day, so the work is counted in tests rather than moves. */
  retest: boolean;
};

/**
 * "Done for today", as the list's own card turned over.
 *
 * It is the one moment Home can say something warm without it being about a
 * number the person has no control over: they did the work. So it says what
 * they did (minutes, moves), what it adds up to (the week, the run of days)
 * and when the next one is — the three questions somebody opening the app on
 * the evening of a trained day is asking.
 *
 * Motion plays once, the first time the card is seen: the mascot hops, today's
 * dot springs in and its check draws. Nothing loops. Home stays mounted under
 * the other tabs, and the card waits for focus and for the splash so the one
 * time it plays is a time somebody is looking.
 */
export function DoneCard({ next, active, date, plannedMinutes, tickedMoves, retest }: DoneCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const violet = accents[scheme].violet;
  const t = useT();
  const streak = useStreak();
  const logsVersion = useLogsVersion();
  const planVersion = usePlanVersion();
  const revealed = useSplashRevealed();

  /**
   * What today's records say was done. Summed across every session filed for
   * today, because a day can be the plan plus a Library routine; moves are
   * counted once each. Falls back to the plan and the ticks for a day finished
   * without a session record.
   */
  const work = useMemo(() => {
    const today = sessions().filter((s) => s.date === date);
    const minutes = today.reduce((sum, s) => sum + s.minutes, 0);
    const moves = new Set(
      today.flatMap((s) => s.exercises.filter((e) => e.status === 'done').map((e) => e.id)),
    ).size;
    return {
      minutes: Math.max(1, Math.round(minutes > 0 ? minutes : plannedMinutes)),
      moves: moves > 0 ? moves : tickedMoves,
    };
    // The stores are mutated in place; the versions are what say they moved.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, plannedMinutes, tickedMoves, logsVersion, planVersion]);

  const summary = t('home.doneSummary', {
    minutes: t('home.chipMinutes', { count: work.minutes }),
    work: retest
      ? t('home.doneTests', { count: RETEST_TESTS })
      : t('home.doneMoves', { count: Math.max(1, work.moves) }),
  });

  // ── The one-shot ──────────────────────────────────────────────────────────
  const hop = useSharedValue(0);
  const pop = useSharedValue(0);
  const draw = useSharedValue(0);
  const played = useRef(false);

  useEffect(() => {
    if (played.current || !active || !revealed) return;
    played.current = true;
    hop.value = withDelay(
      120,
      withSequence(
        withTiming(-14, { duration: 190, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
        withSpring(0, { damping: 9, stiffness: 260, reduceMotion: ReduceMotion.System }),
      ),
    );
    pop.value = withDelay(260, withSpring(1, { damping: 11, stiffness: 240, reduceMotion: ReduceMotion.System }));
    draw.value = withDelay(
      380,
      withTiming(1, { duration: 350, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System }),
    );
  }, [active, revealed, hop, pop, draw]);

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: hop.value },
      // A touch of stretch at the top of the hop, paid back on landing.
      { scaleY: 1 - hop.value * 0.004 },
    ],
  }));
  const todayDotStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 0.6 + pop.value * 0.4 }],
    opacity: 0.4 + Math.min(pop.value, 1) * 0.6,
  }));
  const checkProps = useAnimatedProps(() => ({
    strokeDashoffset: CHECK_LENGTH * (1 - draw.value),
  }));

  return (
    <View style={styles.wrap}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        {/* The light behind him, clipped to the card. Its own layer so the
            card itself need not clip — the mascot stands out of its top. */}
        <View style={[StyleSheet.absoluteFill, styles.clip]} pointerEvents="none">
          <Svg width={260} height={220} style={styles.glow}>
            <Defs>
              <RadialGradient id="doneGlow" cx="50%" cy="50%" r="50%">
                <Stop offset="0" stopColor={violet.fill} stopOpacity={scheme === 'dark' ? 0.32 : 0.22} />
                <Stop offset="0.55" stopColor={violet.fill} stopOpacity={scheme === 'dark' ? 0.1 : 0.07} />
                <Stop offset="1" stopColor={violet.fill} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Rect x={0} y={0} width={260} height={220} fill="url(#doneGlow)" />
          </Svg>
        </View>

        <View style={styles.top}>
          <View style={styles.mascotSlot} />
          <View style={styles.copy} accessible accessibilityRole="summary">
            {/* The week is the strip under the header; this card says only
                that today is done, with the one check it draws. */}
            <View style={styles.titleRow}>
              <Animated.View style={[styles.badge, { backgroundColor: violet.fill }, todayDotStyle]}>
                <Svg width={DOT - 8} height={DOT - 8} viewBox={`4 4 ${DOT - 8} ${DOT - 8}`}>
                  <AnimatedPath
                    d={CHECK_PATH}
                    stroke={colors.card}
                    strokeWidth={2.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    strokeDasharray={`${CHECK_LENGTH} ${CHECK_LENGTH}`}
                    animatedProps={checkProps}
                  />
                </Svg>
              </Animated.View>
              <Text style={[styles.title, styles.titleText, { color: colors.foreground }]}>{t('home.allDoneTitle')}</Text>
            </View>
            <Text style={[styles.summary, { color: colors.foreground }]}>{summary}</Text>
            <NextSessionLine next={next} active={active} style={[styles.next, { color: meter.caption }]} />
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: meter.divider }]} />

        <View style={styles.streak}>
          <HugeiconsIcon icon={FireIcon} size={18} color={accents[scheme].orange.fill} strokeWidth={2} />
          <Text style={[styles.streakText, { color: colors.foreground }]}>
            {streak.current >= 2
              ? t('home.doneStreak', { count: streak.current })
              : t('home.doneStreakStart')}
          </Text>
        </View>
      </View>

      {/* Outside the card, so it can stand out of its top edge. Decoration:
          the words beside him say everything. */}
      <Animated.View
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={[styles.mascot, mascotStyle]}>
        <Image source={MASCOT} style={styles.mascotImage} resizeMode="contain" />
      </Animated.View>
    </View>
  );
}

/**
 * When the next session opens.
 *
 * Its own component so the countdown's tick re-renders one line of text, not
 * the card. Counted within a day, named beyond it — "Next session in 5h 3m",
 * "Next session: Monday". With three weeks of rest ahead there is nothing to
 * count to, and it says so plainly.
 */
function NextSessionLine({
  next,
  active,
  style,
}: {
  next: NextSession | null;
  active: boolean;
  style: StyleProp<TextStyle>;
}) {
  const t = useT();
  const language = useLanguage();
  const waiting = next != null && !next.open;
  const left = useCountdown(waiting ? next.at : null, active);
  if (next == null || !waiting || left == null || left <= 0) {
    return <Text style={style}>{t('home.allDoneBlurb')}</Text>;
  }
  const phrase = waitPhrase(t, language, next.at, left);
  return (
    <Text style={style}>
      {phrase.kind === 'in' ? t('nextSession.in', { time: phrase.time }) : t('nextSession.on', { day: phrase.day })}
    </Text>
  );
}

const styles = StyleSheet.create({
  /** Room above the card for the part of the mascot that stands out of it. */
  wrap: { paddingTop: MASCOT_LIFT + 4, marginBottom: 6 },
  card: {
    borderRadius: 28,
    borderCurve: 'continuous',
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 18,
  },
  clip: { borderRadius: 28, borderCurve: 'continuous', overflow: 'hidden' },
  glow: { position: 'absolute', left: -70, top: -90 },
  top: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  /** Holds the mascot's place in the row; the artwork itself is drawn above. */
  mascotSlot: { width: MASCOT_SIZE - 22, height: MASCOT_SIZE - MASCOT_LIFT - 18 },
  copy: { flex: 1, gap: 3 },
  title: { ...fonts.heavy(24, -0.6), lineHeight: 29 },
  summary: { ...fonts.semibold(15, -0.1), lineHeight: 20 },
  next: { ...fonts.medium(14), lineHeight: 19 },
  mascot: {
    position: 'absolute',
    top: 0,
    left: 2,
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
  },
  mascotImage: { width: MASCOT_SIZE, height: MASCOT_SIZE },
  /** Today: a ring with air between it and the filled dot inside. */
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  titleText: { flexShrink: 1 },
  badge: { width: DOT - 8, height: DOT - 8, borderRadius: (DOT - 8) / 2, alignItems: 'center', justifyContent: 'center' },
  divider: { height: StyleSheet.hairlineWidth, marginTop: 16 },
  streak: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 14 },
  streakText: fonts.bold(15, -0.2),
});
