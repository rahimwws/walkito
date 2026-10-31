import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import { useEffect, useRef, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
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
import { Chip3D } from '@/shared/ui/chip-3d';
import { Mascot, waveRig, type MascotHandle, type MascotRig } from '@/shared/ui/mascot';
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
/** He waves once the card has landed, not while it is still moving. */
const WAVE_AFTER_MS = 120;
/** The session's sheet is asked for once this card's own modal is down: one
 * modal presenting while another dismisses does not show on iOS. */
const LAUNCH_AFTER_MS = 300;
/** A sheet that never opened gives the card back rather than leaving Home
 * with nothing over it and nothing to do. */
const LAUNCH_GIVE_UP_MS = 2500;

const MASCOT_SIZE = 132;
/** How far the feet press into the card's edge, as a share of him: on the
 * card, not hovering a hair above it (as on a milestone's card). */
const FOOT_SINK = 0.035;
const RADIUS = 34;

const EASE = Easing.bezier(0.22, 1, 0.36, 1);

/** Where the feet are in the mascot's square, from the top: the rig's ground
 * line in its own units. */
function feetAt(rig: MascotRig): number {
  return (rig.ground[1] - rig.box.y) / rig.box.size;
}

export type DayOneCardProps = {
  /** Home is in front, the tour is at its first half, and no sheet is up or
   * leaving. */
  visible: boolean;
  /** The session's sheet is up: the card stays down until it has gone. */
  sessionOpen: boolean;
  onStart: (run: DayOneRun) => void;
};

/**
 * "Day 1": the card over the blurred Home that the first session starts from.
 *
 * Walkito standing on its edge and waving, the day, one line on what it is,
 * how long, and one button. No close: it is the one thing on the screen, and
 * it asks for two minutes. Home under it is blurred in the same dark the tour
 * after it uses, so the card and the tour read as one surface.
 *
 * Rises in once Home has appeared (a fade and a short rise, or the fade alone
 * with Reduce Motion), and goes down before the session's sheet comes up.
 * Comes back if the session is closed before its end.
 */
export function DayOneCard({ visible, sessionOpen, onStart }: DayOneCardProps) {
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
  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    if (shown) {
      setMounted(true);
      const timer = setTimeout(() => {
        progress.value = withTiming(1, { duration: IN_MS, easing: EASE, reduceMotion: ReduceMotion.System });
      }, IN_DELAY_MS);
      // Every time it lands, including after a session closed early: he is
      // saying hello again.
      const wave = setTimeout(() => mascot.current?.play('wave'), IN_DELAY_MS + IN_MS + WAVE_AFTER_MS);
      return () => {
        clearTimeout(timer);
        clearTimeout(wave);
      };
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

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const rise = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => undefined}>
      <Animated.View style={[StyleSheet.absoluteFill, backdrop]}>
        <Shade scheme={scheme} />
      </Animated.View>

      <View style={styles.centre} pointerEvents="box-none">
        <Animated.View style={[styles.column, rise]}>
          {/* Above the card in the stack, so the feet set onto its edge stand
              on it. Hidden from VoiceOver: he is the card's greeting, and the
              title says what it is. */}
          <View
            style={[styles.mascot, { marginBottom: -Math.round((1 - feetAt(waveRig) + FOOT_SINK) * MASCOT_SIZE) }]}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants">
            <Mascot ref={mascot} rig={waveRig} size={MASCOT_SIZE} surface={colors.card} paused={!shown} />
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {t('home.day1.title')}
            </Text>
            <Text style={[styles.body, { color: meter.caption }]}>{t('home.day1.body')}</Text>
            <Chip3D icon={Clock01Icon} accent="blue" label={t('session.minutes', { count: DAY_ONE_MINUTES })} style={styles.chip} />
            <PrimaryButton label={t('home.day1.start')} onPress={start} disabled={launching} style={styles.cta} />
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
  mascot: {
    alignSelf: 'center',
    zIndex: 2,
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
  chip: { marginTop: 14 },
  cta: { alignSelf: 'stretch', marginTop: 20 },
});
