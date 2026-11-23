import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, G } from 'react-native-svg';

import { WEEK_SHAPES, type DaysPerWeek, type SessionMinutes } from '@/entities/program';
import { accents, colors, fonts, meterColors, palette, themes } from '@/shared/config';
import { useLanguage, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

const EASE = Easing.bezier(0.23, 1, 0.32, 1);
/** A gauge mounts as its question swaps in, and starts once it has slid in. */
const ARRIVE_MS = 220;

// ── The week ────────────────────────────────────────────────────────────────

const DISC = 38;
/** Each lit day pops just after the one before it, so the week fills in. */
const STAGGER_MS = 55;

/** A Monday (1 January 2024, UTC): the plan's weeks start on one. */
const MONDAY = Date.UTC(2024, 0, 1);
const DAY_MS = 86_400_000;

/**
 * Weekday initials, Monday first, from the platform: `Intl` knows every
 * language's own ("L M X J V S D" in Spanish), which a catalogue would only
 * copy out. Keyed by index where drawn, since initials repeat.
 */
function weekdayInitials(language: Language): string[] {
  const narrow = new Intl.DateTimeFormat(language, { weekday: 'narrow', timeZone: 'UTC' });
  const short = new Intl.DateTimeFormat(language, { weekday: 'short', timeZone: 'UTC' });
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(MONDAY + i * DAY_MS);
    return narrow.format(day) || short.format(day).slice(0, 1);
  });
}

/**
 * The week the days answer makes: seven flat discs, Monday first, the session
 * days lit. Lit by the plan's own week (`WEEK_SHAPES`): three days are Monday,
 * Wednesday and Friday, five are the weekdays, seven are all of them.
 *
 * On arrival, and on every new answer, the lit days pop one after another,
 * left to right. Decorative: the card picked says the same in words, so the
 * strip is hidden from screen readers.
 */
export function WeekGauge({ days }: { days: DaysPerWeek | null }) {
  const scheme = useColorScheme();
  const language = useLanguage();
  const initials = useMemo(() => weekdayInitials(language), [language]);
  const shape = days == null ? null : WEEK_SHAPES[days];
  // interpolateColor needs the hex.
  const hex = themes[scheme].colors;
  const tone = { face: accents[scheme].orange.fill, label: hex.onTone };
  const off = {
    face: hex.surface,
    edge: hex.separator,
    ink: meterColors[scheme].caption,
  };

  let rank = 0;
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={styles.week}>
      {initials.map((initial, i) => {
        const lit = shape != null && shape[i] !== 'rest';
        const delay = (lit ? rank++ : 0) * STAGGER_MS;
        return (
          <DayDisc key={i} initial={initial} lit={lit} delay={delay} wave={days} tone={tone} off={off} />
        );
      })}
    </View>
  );
}

type DiscColours = { face: string; edge: string; ink: string };

/**
 * One day: an outlined white disc, or, lit, filled orange. `wave` is the
 * answer: every new one pops the lit days again, in turn, so the whole week
 * answers the tap and not only the days that changed.
 */
function DayDisc({
  initial,
  lit,
  delay,
  wave,
  tone,
  off,
}: {
  initial: string;
  lit: boolean;
  delay: number;
  wave: DaysPerWeek | null;
  tone: { face: string; label: string };
  off: DiscColours;
}) {
  const reduceMotion = useReducedMotion();
  const on = useSharedValue(0);
  const pop = useSharedValue(1);
  // The first lighting waits for the question to slide in; later ones are
  // answers, and start at once.
  const arrived = useRef(false);

  useEffect(() => {
    const lead = arrived.current ? 0 : ARRIVE_MS;
    arrived.current = true;
    const wait = lit ? lead + delay : 0;
    on.value = withDelay(
      wait,
      withTiming(lit ? 1 : 0, { duration: 140, easing: EASE, reduceMotion: ReduceMotion.System }),
    );
    if (lit && !reduceMotion) {
      pop.value = withDelay(
        wait,
        withSequence(
          withTiming(1.16, { duration: 120, easing: Easing.out(Easing.quad) }),
          withTiming(1, { duration: 220, easing: EASE }),
        ),
      );
    }
    // `delay` follows `wave`; keyed on the answer and the day's state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lit, wave, reduceMotion]);

  const popStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));
  const faceStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [off.face, tone.face]),
    borderColor: interpolateColor(on.value, [0, 1], [off.edge, tone.face]),
  }));
  const inkStyle = useAnimatedStyle(() => ({
    color: interpolateColor(on.value, [0, 1], [off.ink, tone.label]),
  }));

  return (
    <View style={styles.slot}>
      <Animated.View style={[styles.disc, faceStyle, popStyle]}>
        <Animated.Text style={[styles.initial, inkStyle]} maxFontSizeMultiplier={1.2} numberOfLines={1}>
          {initial}
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

// ── The timer ───────────────────────────────────────────────────────────────

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RING = 136;
const STROKE = 18;
const R = (RING - STROKE) / 2;
const C = 2 * Math.PI * R;
/** The longest session fills the ring. */
const FULL_MINUTES = 10;

/**
 * The minutes answer as a kitchen timer: a thick flat ring on a tinted track,
 * filled clockwise from twelve to the minutes picked (ten is the whole ring),
 * the number in the middle, popping as it changes. Fills from empty as it
 * arrives. Decorative, like the week: the card says it in words.
 */
export function TimerGauge({ minutes }: { minutes: SessionMinutes | null }) {
  const scheme = useColorScheme();
  const reduceMotion = useReducedMotion();
  const { fill, track } = accents[scheme].teal;
  const target = minutes == null ? 0 : Math.min(minutes / FULL_MINUTES, 1);

  const arrived = useRef(false);
  const progress = useSharedValue(0);
  const pop = useSharedValue(1);
  useEffect(() => {
    const lead = arrived.current ? 0 : ARRIVE_MS;
    arrived.current = true;
    progress.value = withDelay(
      lead,
      withTiming(target, { duration: 560, easing: EASE, reduceMotion: ReduceMotion.System }),
    );
    if (!reduceMotion && minutes != null) {
      pop.value = withDelay(
        lead,
        withSequence(
          withTiming(1.14, { duration: 110, easing: Easing.out(Easing.quad) }),
          withTiming(1, { duration: 220, easing: EASE }),
        ),
      );
    }
    // Keyed on the answer: a new one refills the ring and pops the number.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  // A dash of no length still draws its round caps as a dot: hidden at 0.
  const arcProps = useAnimatedProps(() => ({
    strokeDashoffset: C * (1 - progress.value),
    strokeOpacity: progress.value > 0.001 ? 1 : 0,
  }));
  const numberStyle = useAnimatedStyle(() => ({ transform: [{ scale: pop.value }] }));

  const cx = RING / 2;
  const cy = RING / 2;

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={styles.timer}>
      <Svg width={RING} height={RING}>
        {/* Turned a quarter back, so the arc starts at twelve and runs clockwise. */}
        <G rotation={-90} origin={`${cx}, ${cy}`}>
          <Circle cx={cx} cy={cy} r={R} stroke={track} strokeWidth={STROKE} fill="none" />
          <AnimatedCircle
            cx={cx}
            cy={cy}
            r={R}
            stroke={fill}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${C} ${C}`}
            fill="none"
            animatedProps={arcProps}
          />
        </G>
      </Svg>
      <View pointerEvents="none" style={styles.middle}>
        <Animated.Text
          style={[styles.number, { color: palette[scheme].foreground }, numberStyle]}
          maxFontSizeMultiplier={1.2}>
          {minutes ?? ''}
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  week: {
    flexDirection: 'row',
    marginBottom: 22,
  },
  slot: {
    flex: 1,
    alignItems: 'center',
  },
  disc: {
    width: DISC,
    height: DISC,
    borderRadius: DISC / 2,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: fonts.heavy(15),
  timer: {
    alignSelf: 'center',
    width: RING,
    height: RING,
    marginBottom: 22,
  },
  middle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: RING,
    height: RING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: fonts.heavy(44, -1.2),
});
