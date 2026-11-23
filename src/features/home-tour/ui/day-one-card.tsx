import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Chip } from '@/shared/ui/chip';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { DAY_ONE_MINUTES, dayOneRun, type DayOneRun } from '../model/day-one';

import { Shade } from './shade';

/** A beat after Home appears before it is covered, so what the card stands
 * over is seen to be their Home first. */
const IN_DELAY_MS = 260;
const IN_MS = 420;
const OUT_MS = 220;
/** How far the card rises into place. */
const RISE = 28;
/** The session's sheet is asked for once this card's own modal is down: one
 * modal presenting while another dismisses does not show on iOS. */
const LAUNCH_AFTER_MS = 300;
/** A sheet that never opened gives the card back rather than leaving Home
 * with nothing over it and nothing to do. */
const LAUNCH_GIVE_UP_MS = 2500;

const RADIUS = 34;

const EASE = Easing.bezier(0.22, 1, 0.36, 1);

export type DayOneCardProps = {
  /** Home is in front, the tour is at its first half, and no sheet is up or
   * leaving. */
  visible: boolean;
  /** The session's sheet is up: the card stays down until it has gone. */
  sessionOpen: boolean;
  onStart: (run: DayOneRun) => void;
  /** "Later": the card goes down without the session. Day 1 stays free and
   * is offered again from the plan's session or a task. */
  onLater: () => void;
};

/**
 * "Day 1": the card over the dimmed Home that the first session starts from.
 *
 * The day, one line on what it is,
 * how long, its button, and "Later" under it: nobody is held in front of two
 * minutes they do not want right now. Home under it is dimmed in the same
 * dark the tour after it uses, so the card and the tour read as one surface.
 *
 * Rises in once Home has appeared (a fade and a short rise, or the fade alone
 * with Reduce Motion), and goes down before the session's sheet comes up.
 * Comes back if the session is closed before its end.
 */
export function DayOneCard({ visible, sessionOpen, onStart, onLater }: DayOneCardProps) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const [launching, setLaunching] = useState(false);
  const shown = visible && !sessionOpen && !launching;
  const launch = useRef<ReturnType<typeof setTimeout> | null>(null);

  // The sheet is up: the card's part in the launch is over.
  useEffect(() => {
    if (sessionOpen) setLaunching(false);
  }, [sessionOpen]);

  useEffect(() => {
    if (!launching) return undefined;
    const timer = setTimeout(() => setLaunching(false), LAUNCH_GIVE_UP_MS);
    return () => clearTimeout(timer);
  }, [launching]);

  useEffect(
    () => () => {
      if (launch.current != null) clearTimeout(launch.current);
    },
    [],
  );

  // Mounted apart from `shown`, so the fade out can play.
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);
  useEffect(() => {
    if (shown) {
      setMounted(true);
      const timer = setTimeout(() => {
        progress.value = withTiming(1, { duration: IN_MS, easing: EASE, reduceMotion: ReduceMotion.System });
      }, IN_DELAY_MS);
      return () => clearTimeout(timer);
    }
    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [shown, progress]);

  const start = () => {
    if (launching) return;
    track('day1_session_started');
    setLaunching(true);
    // Read now, not when the card mounted: the check-in can be edited until
    // the moment Start is pressed.
    const run = dayOneRun();
    launch.current = setTimeout(() => {
      launch.current = null;
      onStart(run);
    }, LAUNCH_AFTER_MS);
  };

  // The tour's stops are a modal too, and they would not show if asked for
  // while this one is still going down: the same wait as Start's.
  const later = () => {
    if (launching) return;
    setLaunching(true);
    launch.current = setTimeout(() => {
      launch.current = null;
      onLater();
    }, LAUNCH_AFTER_MS);
  };

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const rise = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => undefined}>
      <Animated.View style={[StyleSheet.absoluteFill, backdrop]}>
        <Shade />
      </Animated.View>

      <View style={styles.centre} pointerEvents="box-none">
        <Animated.View style={[styles.column, rise]}>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {t('home.day1.title')}
            </Text>
            <Text style={[styles.body, { color: meter.caption }]}>{t('home.day1.body')}</Text>
            <Chip icon={Clock01Icon} label={t('session.minutes', { count: DAY_ONE_MINUTES })} style={styles.chip} />
            <PrimaryButton label={t('home.day1.start')} onPress={start} disabled={launching} style={styles.cta} />
            <Pressable
              accessibilityRole="button"
              hitSlop={8}
              disabled={launching}
              onPress={later}
              style={({ pressed }) => [styles.later, pressed && styles.pressed]}>
              <Text style={[styles.laterText, { color: meter.caption }]}>{t('home.day1.later')}</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centre: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  column: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 380,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 18,
  },
  title: { ...fonts.heavy(30, -0.9), textAlign: 'center' },
  body: {
    ...fonts.regular(17),
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 6,
    paddingHorizontal: 4,
  },
  chip: { alignSelf: 'center', marginTop: 14 },
  cta: { alignSelf: 'stretch', marginTop: 20 },
  later: { marginTop: 12, paddingVertical: 6, paddingHorizontal: 16 },
  laterText: fonts.semibold(17),
  pressed: { opacity: 0.5 },
});
