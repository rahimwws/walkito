import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Modal, Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  cancelAnimation,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { finishHomeTour, setHomeTourStep, useHomeTourState, useHomeTourStep } from '@/entities/session';
import { fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import {
  measureSpotlight,
  scrollSpotlightBy,
  scrollSpotlightTop,
  type SpotlightRect,
} from '@/shared/lib/spotlight';
import { useColorScheme } from '@/shared/lib/theme';
import { useDockHeight } from '@/shared/ui/action-dock';

import { requestFirstTest, useFirstTestOpen, useTourFirstTested } from '../model/first-test';

import { HandNote, type Point } from './hand-note';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/** `padX`/`padY`: the room left round the place inside the ring. */
type Stop = { anchor: string; note: Key; padX: number; padY: number; radius: number };

/** The three stops: what Home says about the feet, "It hurts", and the start
 * button, which opens the first test. */
const STOPS: readonly Stop[] = [
  { anchor: 'home.overview', note: 'home.tour.overview', padX: 14, padY: 4, radius: 28 },
  { anchor: 'home.pain', note: 'home.tour.pain', padX: 8, padY: 8, radius: 34 },
  { anchor: 'dock.start', note: 'home.tour.test', padX: 4, padY: 4, radius: 30 },
];
const LAST = STOPS.length - 1;

const IN_MS = 380;
const OUT_MS = 220;
/** The light travelling from one stop to the next. */
const MOVE_MS = 560;
/** How far the words sit from the place, the arrow's room. */
const ARROW_GAP = 86;
const NOTE_WIDTH = 290;
const EDGE = 26;
/** How close the ring may come to the screen's edges. */
const SCREEN_INSET = 8;
const BLUR = 22;
/** The room the tab pill and the start button take at the foot: a place
 * below it is scrolled up first. */
const FOOT_CLEARANCE = 92;
/** The test sheet is asked for once the tour's own modal is down: one modal
 * presenting while another dismisses does not show on iOS. */
const LAUNCH_AFTER_MS = 300;
const LAUNCH_GIVE_UP_MS = 2500;

const EASE = Easing.bezier(0.33, 1, 0.68, 1);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Hole = { x: number; y: number; w: number; h: number };

export type HomeTourProps = {
  /** Home is in front with nothing else over it: the tour may show. */
  visible: boolean;
};

/**
 * The tour over Home after the purchase, or after the paywall was skipped.
 *
 * Home is blurred and dimmed except for one place at a time, lit and ringed,
 * with a handwritten line and an arrow pointing at it: what Home says about
 * their feet, "It hurts", and the start button. The light travels from one
 * place to the next. The first two stops go on with a tap anywhere; the last
 * holds until it is tapped, and it opens the first test, which is the one
 * thing open until it is on record (it sets the starting point everything
 * after is read against). The tour ends when the test is saved. A test
 * closed unfinished brings the last stop back.
 */
export function HomeTour({ visible }: HomeTourProps) {
  const t = useT();
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { width: W, height: H } = useWindowDimensions();
  const dockHeight = useDockHeight();
  const program = useProgram();

  const state = useHomeTourState();
  const step = Math.min(useHomeTourStep(), LAST);
  const tested = useTourFirstTested();
  const testOpen = useFirstTestOpen();
  const armed = state === 'armed';

  // Somebody with a test already on record (a reinstall that brought it back)
  // is shown the start button for what it is, and the tour ends on the tap.
  const testedBefore = useRef(tested);
  if (!armed) testedBefore.current = tested;

  const [launching, setLaunching] = useState(false);
  const shown = visible && armed && !testOpen && !launching;

  // The first test saved ends the tour, whichever way it was reached.
  useEffect(() => {
    if (!armed || !tested || testedBefore.current) return;
    finishHomeTour();
    track('home_tour_completed', { tested: true });
  }, [armed, tested]);

  useEffect(() => {
    if (testOpen) setLaunching(false);
  }, [testOpen]);

  useEffect(() => {
    if (!launching) return undefined;
    const timer = setTimeout(() => setLaunching(false), LAUNCH_GIVE_UP_MS);
    return () => clearTimeout(timer);
  }, [launching]);

  // Mounted apart from `shown`, so the fade out can play.
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);
  useEffect(() => {
    if (shown) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, { duration: IN_MS, easing: EASE, reduceMotion: ReduceMotion.System });
      });
      return () => cancelAnimationFrame(frame);
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

  // The lit place, as numbers the light glides between.
  const hx = useSharedValue(W / 2);
  const hy = useSharedValue(H / 2);
  const hw = useSharedValue(0);
  const hh = useSharedValue(0);
  const hr = useSharedValue(20);
  const placed = useRef(false);
  const pulse = useSharedValue(0);
  const nudge = useSharedValue(0);
  const [note, setNote] = useState<{ hole: Hole; step: number } | null>(null);

  useEffect(() => {
    if (!shown) {
      placed.current = false;
      setNote(null);
      return undefined;
    }
    let live = true;
    setNote(null);
    void (async () => {
      const stop = STOPS[step];
      if (step === 0) {
        scrollSpotlightTop();
        await wait(420);
      } else {
        await wait(60);
      }
      let rect: SpotlightRect | null = await measureSpotlight(stop.anchor);
      if (rect != null && stop.anchor !== 'dock.start') {
        const over = rect.y + rect.height + stop.padY - (H - dockHeight - FOOT_CLEARANCE);
        if (over > 0 && scrollSpotlightBy(over)) {
          await wait(420);
          rect = await measureSpotlight(stop.anchor);
        }
      }
      if (rect == null) {
        // Not on screen yet (Home still laying out): once more, then on.
        await wait(400);
        rect = await measureSpotlight(stop.anchor);
      }
      if (!live) return;
      if (rect == null) {
        // A stop that is not there is skipped rather than held on a dimmed
        // screen with nothing lit; the last one is always there (the dock).
        if (step < LAST) setHomeTourStep(step + 1);
        return;
      }
      // Kept inside the screen, so the ring is whole round a place that runs
      // to its edges (the start button runs under both sides and the foot).
      const x = Math.max(SCREEN_INSET, rect.x - stop.padX);
      const y = Math.max(SCREEN_INSET, rect.y - stop.padY);
      const hole = {
        x,
        y,
        w: Math.min(W - SCREEN_INSET, rect.x + rect.width + stop.padX) - x,
        h: Math.min(H - SCREEN_INSET, rect.y + rect.height + stop.padY) - y,
      };
      const first = !placed.current;
      placed.current = true;
      const timing = { duration: first ? 0 : MOVE_MS, easing: EASE, reduceMotion: ReduceMotion.System };
      hx.value = withTiming(hole.x, timing);
      hy.value = withTiming(hole.y, timing);
      hw.value = withTiming(hole.w, timing);
      hh.value = withTiming(hole.h, timing);
      hr.value = withTiming(Math.min(stop.radius, hole.h / 2), timing);
      await wait(first ? 140 : MOVE_MS - 40);
      if (live) setNote({ hole, step });
    })();
    return () => {
      live = false;
    };
  }, [shown, step, W, H, dockHeight, hx, hy, hw, hh, hr]);

  useEffect(() => {
    if (shown) track('home_tour_step_viewed', { step });
  }, [shown, step]);

  // The start button breathes on the last stop: that is the one to tap.
  useEffect(() => {
    if (!shown || step !== LAST) {
      cancelAnimation(pulse);
      pulse.value = 0;
      return undefined;
    }
    pulse.value = withRepeat(withTiming(1, { duration: 1400, easing: Easing.out(Easing.quad) }), -1, false);
    return () => cancelAnimation(pulse);
  }, [shown, step, pulse]);

  const next = () => {
    Haptics.selectionAsync();
    setHomeTourStep(step + 1);
  };

  const start = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (testedBefore.current) {
      finishHomeTour();
      track('home_tour_completed', { tested: false });
      program?.open();
      return;
    }
    track('home_tour_test_opened');
    setLaunching(true);
    setTimeout(requestFirstTest, LAUNCH_AFTER_MS);
  };

  /** A tap anywhere: on with the first stops, a nod at the button on the last. */
  const onBackdrop = () => {
    if (step < LAST) {
      next();
      return;
    }
    Haptics.selectionAsync();
    nudge.value = withSequence(
      withTiming(1, { duration: 90 }),
      withTiming(-1, { duration: 90 }),
      withTiming(0.6, { duration: 80 }),
      withTiming(0, { duration: 120 }),
    );
  };

  const fade = useAnimatedStyle(() => ({ opacity: progress.value }));
  const top = useAnimatedStyle(() => ({ height: Math.max(0, hy.value) }));
  const bottom = useAnimatedStyle(() => ({ top: hy.value + hh.value }));
  const left = useAnimatedStyle(() => ({ top: hy.value, height: hh.value, width: Math.max(0, hx.value) }));
  const right = useAnimatedStyle(() => ({ top: hy.value, height: hh.value, left: hx.value + hw.value }));
  const ring = useAnimatedStyle(() => ({
    left: hx.value,
    top: hy.value,
    width: hw.value,
    height: hh.value,
    borderRadius: hr.value,
    transform: [{ translateX: nudge.value * 6 }],
  }));
  const halo = useAnimatedStyle(() => ({
    left: hx.value,
    top: hy.value,
    width: hw.value,
    height: hh.value,
    borderRadius: hr.value,
    opacity: pulse.value === 0 ? 0 : 0.7 * (1 - pulse.value),
    transform: [{ scaleX: 1 + (pulse.value * 18) / Math.max(hw.value, 1) }, { scaleY: 1 + (pulse.value * 18) / Math.max(hh.value, 1) }],
  }));
  const target = useAnimatedStyle(() => ({ left: hx.value, top: hy.value, width: hw.value, height: hh.value }));
  // The corners between the square hole and its rounded ring, filled in the dim.
  const corners = useAnimatedProps(() => {
    const x = hx.value;
    const y = hy.value;
    const w = hw.value;
    const h = hh.value;
    const r = Math.min(hr.value, w / 2, h / 2);
    return {
      d:
        `M ${x} ${y} L ${x + r} ${y} A ${r} ${r} 0 0 0 ${x} ${y + r} Z ` +
        `M ${x + w} ${y} L ${x + w} ${y + r} A ${r} ${r} 0 0 0 ${x + w - r} ${y} Z ` +
        `M ${x + w} ${y + h} L ${x + w - r} ${y + h} A ${r} ${r} 0 0 0 ${x + w} ${y + h - r} Z ` +
        `M ${x} ${y + h} L ${x} ${y + h - r} A ${r} ${r} 0 0 0 ${x + r} ${y + h} Z`,
    };
  });

  if (!mounted) return null;

  const dim = scheme === 'dark' ? 'rgba(6,6,10,0.62)' : 'rgba(10,10,20,0.55)';
  const blur = Platform.OS === 'ios';
  const shade = (
    <>
      {blur && <BlurView tint="dark" intensity={BLUR} style={StyleSheet.absoluteFill} />}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: blur ? dim : 'rgba(6,6,10,0.74)' }]} />
    </>
  );

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => undefined}>
      <Animated.View style={[StyleSheet.absoluteFill, fade]}>
        {/* Four panes around the lit place, so the place itself is the real
            Home, untouched: a blur cannot have a hole cut in it. */}
        <Animated.View style={[styles.pane, { top: 0, left: 0, right: 0 }, top]}>{shade}</Animated.View>
        <Animated.View style={[styles.pane, { left: 0, right: 0, bottom: 0 }, bottom]}>{shade}</Animated.View>
        <Animated.View style={[styles.pane, { left: 0 }, left]}>{shade}</Animated.View>
        <Animated.View style={[styles.pane, { right: 0 }, right]}>{shade}</Animated.View>
        <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
          <AnimatedPath animatedProps={corners} fill={blur ? dim : 'rgba(6,6,10,0.74)'} />
        </Svg>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={step < LAST ? t('home.tour.next') : t('home.tour.startTest')}
          style={StyleSheet.absoluteFill}
          onPress={onBackdrop}
        />

        <Animated.View pointerEvents="none" style={[styles.halo, halo]} />
        <Animated.View pointerEvents="none" style={[styles.ring, ring]} />
        <Animated.View style={[styles.target, target]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={step < LAST ? t('home.tour.next') : t('home.tour.startTest')}
            style={StyleSheet.absoluteFill}
            onPress={step < LAST ? next : start}
          />
        </Animated.View>

        <View
          style={[styles.dots, { top: insets.top + 14 }]}
          accessibilityLabel={t('home.tour.stepOf', { n: step + 1, total: STOPS.length })}>
          {STOPS.map((stop, index) => (
            <View key={stop.anchor} style={[styles.dot, index === step && styles.dotOn]} />
          ))}
        </View>

        {note != null && note.step === step && (
          <Note
            key={step}
            hole={note.hole}
            text={t(step === LAST && testedBefore.current ? 'home.tour.session' : STOPS[step].note)}
            width={W}
            height={H}
            nextLabel={step < LAST ? t('home.tour.next') : null}
            onNext={next}
          />
        )}
      </Animated.View>
    </Modal>
  );
}

/**
 * The handwritten line for a stop, over the place when it sits in the lower
 * half of the screen and under it otherwise, its arrow bending into the
 * place's edge.
 */
function Note({
  hole,
  text,
  width: W,
  height: H,
  nextLabel,
  onNext,
}: {
  hole: Hole;
  text: string;
  width: number;
  height: number;
  nextLabel: string | null;
  onNext: () => void;
}) {
  const noteWidth = Math.min(W - EDGE * 2, NOTE_WIDTH);
  const cx = hole.x + hole.w / 2;
  const above = hole.y + hole.h / 2 > H * 0.5;
  const left = Math.max(EDGE, Math.min(cx - noteWidth * 0.78, W - EDGE - noteWidth));
  const from: Point = above
    ? { x: left + noteWidth * 0.42, y: hole.y - ARROW_GAP + 10 }
    : { x: left + noteWidth * 0.42, y: hole.y + hole.h + ARROW_GAP - 10 };
  const to: Point = {
    x: Math.max(from.x + 36, Math.min(cx + 18, hole.x + hole.w - 30)),
    y: above ? hole.y - 12 : hole.y + hole.h + 12,
  };
  return (
    <HandNote
      text={text}
      left={left}
      width={noteWidth}
      top={above ? undefined : hole.y + hole.h + ARROW_GAP}
      bottom={above ? H - (hole.y - ARROW_GAP) : undefined}
      from={from}
      to={to}>
      {nextLabel != null && (
        <Pressable
          accessibilityRole="button"
          onPress={onNext}
          hitSlop={10}
          style={({ pressed }) => [styles.next, pressed && { opacity: 0.7 }]}>
          <Text style={styles.nextLabel}>{nextLabel}</Text>
        </Pressable>
      )}
    </HandNote>
  );
}

const styles = StyleSheet.create({
  pane: { position: 'absolute', overflow: 'hidden' },
  ring: { position: 'absolute', borderWidth: 3, borderColor: '#FFFFFF', borderCurve: 'continuous' },
  halo: { position: 'absolute', borderWidth: 2, borderColor: '#FFFFFF', borderCurve: 'continuous' },
  target: { position: 'absolute' },
  dots: { position: 'absolute', left: 0, right: 0, flexDirection: 'row', justifyContent: 'center', gap: 6 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.35)' },
  dotOn: { width: 20, backgroundColor: '#FFFFFF' },
  next: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextLabel: { ...fonts.bold(16, -0.2), color: '#111113' },
});
