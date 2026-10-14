import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  cancelAnimation,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { planSessionDone, retestResults, todayKey } from '@/entities/program';
import { useReviewMode, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import {
  homeTourState,
  finishHomeTour,
  setHomeTourStage,
  setHomeTourStep,
  useHomeTourStage,
  useHomeTourState,
  useHomeTourStep,
} from '@/entities/session';
import { fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import {
  measureSpotlight,
  scrollSpotlightBy,
  scrollSpotlightTop,
  type SpotlightRect,
} from '@/shared/lib/spotlight';
import { useColorScheme } from '@/shared/lib/theme';
import { useDockHeight } from '@/shared/ui/action-dock';

import type { DayOneRun } from '../model/day-one';

import { askForPlans } from '../model/plans-asked';

import { DayOneCard } from './day-one-card';
import { HandNote, type Point } from './hand-note';
import { Shade, shadeDim } from './shade';

const AnimatedPath = Animated.createAnimatedComponent(Path);

/** `padX`/`padY`: the room left round the place inside the ring. */
type Stop = { anchor: string; note: Key; padX: number; padY: number; radius: number };

/** The three stops: what Home says about the feet, "It hurts", and the start
 * button, where every session after the first one begins. */
const STOPS: readonly Stop[] = [
  { anchor: 'home.overview', note: 'home.tour.overview', padX: 14, padY: 4, radius: 28 },
  { anchor: 'home.pain', note: 'home.tour.pain', padX: 8, padY: 8, radius: 34 },
  { anchor: 'dock.start', note: 'home.tour.session', padX: 4, padY: 4, radius: 30 },
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
/** The room the tab pill and the start button take at the foot: a place
 * below it is scrolled up first. */
const FOOT_CLEARANCE = 92;
/** How long the day-one session's page sheet takes to slide away. The card
 * or the tour comes back only after it: one modal presenting while another
 * dismisses does not show on iOS. */
const SHEET_GONE_MS = 480;

const EASE = Easing.bezier(0.33, 1, 0.68, 1);

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Hole = { x: number; y: number; w: number; h: number };

export type HomeTourProps = {
  /** Home is in front with nothing else over it: the card or the tour may show. */
  visible: boolean;
  /** The day-one session's page sheet is up (Home holds it, because the
   * player is a widget, a layer above this one): the card and the tour wait
   * until it has gone. */
  sessionOpen: boolean;
  /** "Start" on the card, once the card is down: Home opens the session. */
  onStartDayOne: (run: DayOneRun) => void;
};

/**
 * The first minutes on Home for somebody new, after the purchase's setup or
 * the paywall's "Not now".
 *
 * Two halves, one after the other (`HomeTourStage`). First the "Day 1" card
 * over the blurred Home: two easy minutes, started from its one button and
 * played in Home's own sheet, so the first thing done in the app is a win
 * rather than a measurement. Its session finished, the tour: three stops, the
 * last of which ends it. For somebody who skipped the paywall the offer
 * follows (`OfferWall` in the root layout); a buyer is left on Home.
 *
 * A session closed before its end brings the card back. Neither half has a
 * close: the card's button and the tour's taps are the way through.
 */
export function HomeTour({ visible, sessionOpen, onStartDayOne }: HomeTourProps) {
  const state = useHomeTourState();
  const stage = useHomeTourStage();
  /** Skipped the paywall and has not bought since: the card offers the plans. */
  const skipper = usePaywallSkipped() && !useEntitled();
  const armed = state === 'armed';

  // A tour armed by the build before the day-one session stored no stage.
  // Somebody whose session today is already on record goes on to the tour;
  // anybody else gets the two minutes first.
  // The App Review account goes straight to the app: the reviewer is there to
  // find the purchases (Settings), and a two-minute session and a tour in front
  // of them is in the way.
  const reviewMode = useReviewMode();
  useEffect(() => {
    if (armed && reviewMode) finishHomeTour();
  }, [armed, reviewMode]);
  useEffect(() => {
    if (!armed || reviewMode) return;
    // Somebody with history (an account signed into on a new phone, its plan
    // restored) skips the first session: it would push their due test off
    // today and file two minutes over their real day.
    const returning = retestResults().length > 0 || planSessionDone(todayKey());
    if (stage == null || (stage === 'day1' && returning)) setHomeTourStage(returning ? 'tour' : 'day1');
  }, [armed, stage, reviewMode]);

  const gone = useGoneAfter(sessionOpen, SHEET_GONE_MS);
  const clear = visible && armed && gone;

  return (
    <>
      <DayOneCard
        visible={clear && stage === 'day1'}
        sessionOpen={sessionOpen}
        onStart={onStartDayOne}
        onSeePlans={skipper ? askForPlans : undefined}
      />
      <TourStops visible={clear && stage === 'tour'} />
    </>
  );
}

/**
 * False while `open`, and for `ms` after it closes: what slides away takes
 * that long, and nothing may present over it until it has.
 */
function useGoneAfter(open: boolean, ms: number): boolean {
  const [gone, setGone] = useState(!open);
  useEffect(() => {
    if (open) {
      setGone(false);
      return undefined;
    }
    const timer = setTimeout(() => setGone(true), ms);
    return () => clearTimeout(timer);
  }, [open, ms]);
  return gone;
}

/**
 * The tour after the day-one session.
 *
 * Home is blurred and dimmed except for one place at a time, lit and ringed,
 * with a handwritten line and an arrow pointing at it: what Home says about
 * their feet, "It hurts", and the start button. The light travels from one
 * place to the next. Every stop goes on with a tap anywhere or on its pill;
 * on the last, the same tap ends the tour. It holds nothing back any more:
 * the first test is tomorrow's, and the start button is only pointed at.
 */
function TourStops({ visible: shown }: { visible: boolean }) {
  const t = useT();
  const scheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const { width: W, height: H } = useWindowDimensions();
  const dockHeight = useDockHeight();

  const step = Math.min(useHomeTourStep(), LAST);

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
        // screen with nothing lit. The last is the dock, which is always
        // drawn; were it ever missing, the tour ends rather than leaving Home
        // under a dim with nothing to tap through to.
        if (step < LAST) setHomeTourStep(step + 1);
        else endTour();
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

  // The start button breathes on the last stop: that is the one it points at.
  // Only while the tour is up, and the tour is only up while Home is in front.
  useEffect(() => {
    if (!shown || step !== LAST) {
      cancelAnimation(pulse);
      pulse.value = 0;
      return undefined;
    }
    pulse.value = withRepeat(withTiming(1, { duration: 1400, easing: Easing.out(Easing.quad) }), -1, false);
    return () => cancelAnimation(pulse);
  }, [shown, step, pulse]);

  /** A tap anywhere, on the lit place or on the pill: the next stop, or, on
   * the last, the end of the first run. */
  const onTap = () => {
    if (step < LAST) {
      Haptics.selectionAsync();
      setHomeTourStep(step + 1);
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    endTour();
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

  const shade = <Shade scheme={scheme} />;
  const label = step < LAST ? t('home.tour.next') : t('common.done');

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
          <AnimatedPath animatedProps={corners} fill={shadeDim(scheme)} />
        </Svg>

        <Pressable accessibilityRole="button" accessibilityLabel={label} style={StyleSheet.absoluteFill} onPress={onTap} />

        <Animated.View pointerEvents="none" style={[styles.halo, halo]} />
        <Animated.View pointerEvents="none" style={[styles.ring, ring]} />
        <Animated.View style={[styles.target, target]}>
          <Pressable accessibilityRole="button" accessibilityLabel={label} style={StyleSheet.absoluteFill} onPress={onTap} />
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
            text={t(STOPS[step].note)}
            width={W}
            height={H}
            nextLabel={label}
            onNext={onTap}
          />
        )}
      </Animated.View>
    </Modal>
  );
}

/** The tour is over: Home is theirs, or the offer rises over it. */
function endTour(): void {
  // The last stop stays pressable through its fade: a second tap must not
  // count the tour twice.
  if (homeTourState() !== 'armed') return;
  finishHomeTour();
  track('home_tour_completed');
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
  nextLabel: string;
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
      <Pressable
        accessibilityRole="button"
        onPress={onNext}
        hitSlop={10}
        style={({ pressed }) => [styles.next, pressed && { opacity: 0.7 }]}>
        <Text style={styles.nextLabel}>{nextLabel}</Text>
      </Pressable>
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
