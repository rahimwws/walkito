import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useCallback, useEffect, useRef, useState, type Ref } from 'react';
import { AccessibilityInfo, AppState, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  ReduceMotion,
  cancelAnimation,
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import type { ExercisePreviewHandle } from '@/widgets/session-player';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import {
  Mascot,
  playMascotSound,
  pointingRig,
  thumbsUpRig,
  type MascotHandle,
  type MascotShot,
} from '@/shared/ui/mascot';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { QUESTION_LINE_MS, TypedText } from '@/shared/ui/typed-text';

import { CLIP_SHAPE, MoveCard, type DeckCard } from './move-card';

const EASE = Easing.bezier(0.23, 1, 0.32, 1);

/** The page's side padding (`SIDE_PAD` in the onboarding page). The deck
 * breaks out of it to run edge to edge, so the next card can peek. */
const PAGE_SIDE = 24;
/** Left of the front card: the coach's room. */
const GUTTER = 96;
const GAP = 12;
/** The least of the next card that shows, so there is visibly a next one. */
const MIN_PEEK = 40;
const MIN_CARD = 280;
const MAX_CARD = 460;
const SEGMENT = 4;
const SEGMENTS_TOP = 12;
/** What the deck needs under its cards. */
const SEGMENTS_ROOM = SEGMENTS_TOP + SEGMENT;

const COACH = 88;
/** On a screen too narrow for the gutter, beside the bubble instead. */
const COACH_COMPACT = 56;
/** The pointing hand's tip and the standing feet in the traced art, as shares
 * of its square: the hand reaches x 1884 of 2048, the ground is at y 1912 of
 * a box that starts at 40. */
const FINGERTIP_X = 0.92;
const FEET_Y = (pointingRig.ground[1] - pointingRig.box.y) / pointingRig.box.size;
/** Between his fingertip and the card's edge. */
const POINT_GAP = 4;

/** A card stands in front for one pass of its clip, and never longer than
 * this: `big_toe_lift` runs twenty seconds. */
const DWELL_MAX_S = 10.5;
/** Until the clip has said how long it is. Most run eight seconds. */
const DWELL_FALLBACK_S = 8;
/** How close to a whole card the scroll has to be to count as settled. */
const SETTLE_EPS = 0.02;

/** The arrival, in order (ms): the card rises, the next one slides in, the
 * coach steps up and waves, then speaks, and the segments come last. */
const CARD_IN_MS = 120;
const PEEK_IN_MS = 260;
const COACH_IN_MS = 380;
const WAVE_AFTER_MS = 200;
const BUBBLE_IN_MS = 460;
const SEGMENTS_IN_MS = 520;

/** The button's dip when the last card is reached: the intro's, once. */
const DIP_MS = 70;
const RISE_MS = 150;

const BUBBLE_PAD_X = 14;
const BUBBLE_PAD_Y = 12;
const TAIL = 12;
/** How far the tail's tip stands above the bubble. */
const TAIL_RISE = Math.ceil((TAIL * Math.SQRT2) / 2);
/** Under the coach's head: his square's middle, measured from the bubble's
 * left edge, less half the tail. */
const TAIL_LEFT = GUTTER - PAGE_SIDE - FINGERTIP_X * COACH - POINT_GAP + COACH / 2 - TAIL / 2;
/** The bubble's text grows with Dynamic Type up to here; past it the card
 * would be squeezed under its floor. */
const BUBBLE_SCALE = 1.5;
const HAIRLINE = StyleSheet.hairlineWidth;

type Geometry = {
  /** The deck's own width: the screen's, since it runs edge to edge. */
  width: number;
  /** Where the front card starts. */
  gutter: number;
  cardW: number;
  cardH: number;
  /** One card and its gap: the snap. */
  interval: number;
  /** No gutter: the coach stands beside the bubble. */
  compact: boolean;
};

/**
 * The card's size from the room the deck has: as tall as the height allows,
 * clip-shaped, and narrow enough that the gutter and a peek of the next card
 * still fit beside it. A screen too narrow for that gives up the gutter
 * before the card goes under its floor.
 */
function geometryFor(width: number, height: number): Geometry {
  const room = Math.max(0, height - SEGMENTS_ROOM);
  const byWidth = (gutter: number) => (width - gutter - GAP - MIN_PEEK) / CLIP_SHAPE;
  const compact = byWidth(GUTTER) < Math.min(room, MIN_CARD);
  const gutter = compact ? PAGE_SIDE : GUTTER;
  const tall = Math.max(0, Math.min(room, MAX_CARD, byWidth(gutter)));
  // Whole points across, and the height from the width, so the active card's
  // player and the covers either side are exactly the same shape.
  const cardW = Math.floor(tall * CLIP_SHAPE);
  return { width, gutter, cardW, cardH: cardW / CLIP_SHAPE, interval: cardW + GAP, compact };
}

export type WeekDeckProps = {
  /** The moves, in order. Three: `first-week-deck.ts`. */
  cards: readonly DeckCard[];
  daysPerWeek: number;
  minutes: number;
  /** The clips flipped for a left foot. */
  mirrored: boolean;
  /** The page's button squash. */
  squash: SharedValue<number>;
  onViewerChange?: (open: boolean) => void;
};

/**
 * The first week as a deck of its moves: tall clip cards with the next one
 * peeking, the coach in the gutter pointing at the one in front, and what it
 * is and why in his bubble underneath.
 *
 * Stories-style: the segment under the front card fills while its clip plays
 * once, then the deck moves on by itself, until the first touch, which hands
 * it over for good. It never wraps, and never runs for a screen reader, under
 * Reduce Motion, or behind the full-screen clip.
 *
 * A fixed body, not a scroll view: a horizontal pager inside a vertical
 * scroller is a gesture fight. The card takes whatever height is left, so the
 * button underneath is never covered.
 */
export function WeekDeck({ cards, daysPerWeek, minutes, mirrored, squash, onViewerChange }: WeekDeckProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const reduceMotion = useReducedMotion();
  const focused = useIsFocused();
  const appActive = useAppActive();
  const screenReader = useScreenReader();

  const count = cards.length;
  const last = count - 1;

  const [stage, setStage] = useState<{ width: number; height: number } | null>(null);
  const [heights, setHeights] = useState<readonly (number | undefined)[]>([]);
  /** The cadence line given up for the card, on a short screen. */
  const [tight, setTight] = useState(false);
  /** The card in front: the one with a player. */
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  /** The front card's clip has shown its first frame. */
  const [started, setStarted] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [coachShown, setCoachShown] = useState(false);
  const [bubbleShown, setBubbleShown] = useState(false);
  /** The first line types itself in; every later one crossfades. */
  const [typed, setTyped] = useState(true);

  const geometry = stage == null ? null : geometryFor(stage.width, stage.height);
  /** The tallest bubble any card needs, so the bubble, and the card above it,
   * hold their size from card to card. */
  const measured = Array.from({ length: count }, (_, i) => heights[i]);
  const reserve = measured.every((h) => h != null && h > 0) ? Math.max(...(measured as number[])) : null;
  const bubbleHeight = reserve == null ? 0 : reserve + BUBBLE_PAD_Y * 2 + HAIRLINE * 2;
  const needsTight = stage != null && stage.height > 0 && stage.height - SEGMENTS_ROOM < MIN_CARD;
  useEffect(() => {
    if (needsTight && !tight && reserve != null) setTight(true);
  }, [needsTight, tight, reserve]);
  /** The layout is final: the bubble measured, the cadence line kept or given
   * up. The arrival waits for it, so nothing is seen changing size. */
  const ready = geometry != null && geometry.cardW > 0 && reserve != null && (!needsTight || tight);

  const playing = focused && appActive;
  const autoOn = auto && !reduceMotion && !screenReader;
  const autoOnRef = useRef(autoOn);
  autoOnRef.current = autoOn;

  const position = useSharedValue(0);
  const step = useSharedValue(1);
  const fill = useSharedValue(0);
  const enter = useSharedValue(0);
  const peekIn = useSharedValue(0);

  const interval = geometry?.interval ?? 0;
  useEffect(() => {
    if (interval > 0) step.value = interval;
  }, [interval, step]);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const previewRef = useRef<ExercisePreviewHandle>(null);
  const coach = useRef<MascotHandle>(null);
  const activeRef = useRef(0);
  const settledRef = useRef(0);
  /** The scroll in flight is the deck's own, not the user's. */
  const autoStep = useRef(false);
  const completed = useRef(false);
  const duration = useRef<number | null>(null);
  const viewerRef = useRef(onViewerChange);
  viewerRef.current = onViewerChange;

  const stopAuto = () => {
    autoStep.current = false;
    setAuto(false);
  };

  const goTo = (index: number, byDeck = false) => {
    if (geometry == null) return;
    const target = Math.min(Math.max(index, 0), last);
    if (target === activeRef.current) return;
    autoStep.current = byDeck;
    scrollRef.current?.scrollTo({ x: target * geometry.interval, animated: !reduceMotion });
  };

  // ── the coach ─────────────────────────────────────────────────────────
  const lastShot = useRef<MascotShot | null>(null);
  const waveDone = useRef(false);
  const pokeAfterWave = useRef(false);
  const firstFrameSeen = useRef(false);
  const playCoach = (shot: MascotShot) => {
    lastShot.current = shot;
    coach.current?.play(shot);
  };
  const onCoachShotEnd = () => {
    if (lastShot.current !== 'wave') return;
    waveDone.current = true;
    if (pokeAfterWave.current) {
      pokeAfterWave.current = false;
      playCoach('poke');
    }
  };
  /** Thumbs up on the last card: the week has been seen, which is the only
   * thing rewarded here. Swiping back brings the pointing back. */
  const pose: DeckPose = active === last ? 'thumbsUp' : 'pointing';

  // ── the front card ────────────────────────────────────────────────────
  // Changes as the scroll passes halfway, so the next player starts loading
  // while the card is still travelling.
  const onFront = useRef((_: number) => {});
  onFront.current = (index: number) => {
    if (index === activeRef.current) return;
    activeRef.current = index;
    setActive(index);
    setStarted(false);
    setTyped(false);
    duration.current = null;
    fill.value = autoOnRef.current ? 0 : 1;
  };
  const handleFront = useCallback((index: number) => onFront.current(index), []);
  useAnimatedReaction(
    () => Math.min(Math.max(Math.round(position.value), 0), last),
    (index, previous) => {
      if (previous != null && index !== previous) runOnJS(handleFront)(index);
    },
    [last, handleFront],
  );

  // ── a card arriving ───────────────────────────────────────────────────
  // Counted once the scroll has settled on it, so a swipe begun and taken
  // back is not a view, and the haptic lands with the snap.
  const onSettle = useRef((_: number) => {});
  onSettle.current = (index: number) => {
    if (index === settledRef.current) return;
    settledRef.current = index;
    const byDeck = autoStep.current;
    autoStep.current = false;
    track('first_week_move_viewed', { index, auto: byDeck });
    playCoach(index === last ? 'nod' : 'poke');
    if (index === last && !completed.current) {
      completed.current = true;
      track('first_week_deck_completed', { auto: byDeck });
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      squash.value = withSequence(
        withTiming(1, { duration: DIP_MS, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
        withTiming(0, { duration: RISE_MS, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
      );
    } else if (!byDeck) {
      void Haptics.selectionAsync();
    }
  };
  const handleSettle = useCallback((index: number) => onSettle.current(index), []);
  useAnimatedReaction(
    () => {
      const nearest = Math.round(position.value);
      return Math.abs(position.value - nearest) < SETTLE_EPS ? Math.min(Math.max(nearest, 0), last) : -1;
    },
    (index, previous) => {
      if (index >= 0 && index !== previous) runOnJS(handleSettle)(index);
    },
    [last, handleSettle],
  );

  const onScroll = useAnimatedScrollHandler((event) => {
    position.value = event.contentOffset.x / step.value;
  });

  // ── auto-advance ──────────────────────────────────────────────────────
  // The last card's segment fills too, so the bar reads as finished; there
  // is nowhere to go from it.
  const onAdvance = useRef(() => {});
  onAdvance.current = () => {
    if (activeRef.current < last) goTo(activeRef.current + 1, true);
  };
  const handleAdvance = useCallback(() => onAdvance.current(), []);

  /** The segment fills while the clip plays, and only then: from its first
   * frame, never through a load, a background or the viewer. */
  const running = ready && autoOn && started && playing && !viewerOpen;
  useEffect(() => {
    if (!running) {
      cancelAnimation(fill);
      return;
    }
    const total = Math.min(duration.current ?? DWELL_FALLBACK_S, DWELL_MAX_S) * 1000;
    fill.value = withTiming(
      1,
      { duration: Math.max(0, 1 - fill.value) * total, easing: Easing.linear, reduceMotion: ReduceMotion.Never },
      (finished) => {
        'worklet';
        if (finished) runOnJS(handleAdvance)();
      },
    );
  }, [running, active, fill, handleAdvance]);

  // Handed over: the segment in front reads as reached, and the segments are
  // a plain pager from here on. After the effect above, which cancels first.
  useEffect(() => {
    if (!autoOn) fill.value = withTiming(1, { duration: 220, reduceMotion: ReduceMotion.System });
  }, [autoOn, fill]);

  // ── the arrival ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!ready) return undefined;
    // Never reduced: under Reduce Motion the card still fades in, it only
    // stops rising and growing (see `deckIn`).
    enter.value = withDelay(
      CARD_IN_MS,
      withTiming(1, { duration: 420, easing: EASE, reduceMotion: ReduceMotion.Never }),
      ReduceMotion.Never,
    );
    peekIn.value = withDelay(
      PEEK_IN_MS,
      withTiming(1, { duration: 380, easing: EASE, reduceMotion: ReduceMotion.Never }),
      ReduceMotion.Never,
    );
    const timers = [
      setTimeout(() => setCoachShown(true), COACH_IN_MS),
      setTimeout(() => setBubbleShown(true), BUBBLE_IN_MS),
    ];
    return () => timers.forEach(clearTimeout);
  }, [ready, enter, peekIn]);

  // A wave once he is up, unless the deck has already moved on.
  useEffect(() => {
    if (!coachShown) return undefined;
    const id = setTimeout(() => {
      if (activeRef.current === 0) playCoach('wave');
      else waveDone.current = true;
    }, WAVE_AFTER_MS);
    return () => clearTimeout(id);
    // `playCoach` reads refs only; this is the trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coachShown]);

  const deckIn = useAnimatedStyle(
    () => ({
      opacity: enter.value,
      transform: [
        { translateY: reduceMotion ? 0 : (1 - enter.value) * 28 },
        { scale: reduceMotion ? 1 : 0.96 + 0.04 * enter.value },
      ],
    }),
    [reduceMotion],
  );

  // ── the clip in front ─────────────────────────────────────────────────
  const onFirstFrame = () => {
    setStarted(true);
    if (firstFrameSeen.current) return;
    firstFrameSeen.current = true;
    // "Look": once, as the first clip starts. After the wave, never through it.
    if (waveDone.current) playCoach('poke');
    else pokeAfterWave.current = true;
  };
  const onDuration = (seconds: number) => {
    duration.current = seconds;
  };
  const onViewer = (open: boolean) => {
    setViewerOpen(open);
    viewerRef.current?.(open);
    if (!open) return;
    stopAuto();
    track('first_week_expanded', { index: activeRef.current });
  };

  const current = cards[active];
  const sentence = (() => {
    if (current == null) return '';
    const params = { index: active + 1, total: count, title: current.title, dose: current.dose, cue: current.cue };
    // Two whole sentences rather than one with "every morning" dropped into
    // it: the phrase moves, and takes a capital, from language to language.
    return current.when === 'morning'
      ? t('onboarding.week.moveA11yMorning', params)
      : t('onboarding.week.moveA11ySession', params);
  })();

  const fadeIn = (delay: number) => FadeIn.delay(delay).duration(300).easing(EASE.factory()).reduceMotion(ReduceMotion.Never);
  const bubbleIn = reduceMotion
    ? FadeIn.duration(150).reduceMotion(ReduceMotion.Never)
    : FadeInDown.duration(300)
        .easing(EASE.factory())
        .withInitialValues({ transform: [{ translateY: 12 }] })
        .reduceMotion(ReduceMotion.Never);

  const coachArt = (size: number) =>
    coachShown && (
      <Coach
        pose={pose}
        size={size}
        coachRef={coach}
        paused={!playing || viewerOpen}
        surface={colors.background}
        onShotEnd={onCoachShotEnd}
      />
    );

  return (
    // Masked whole: which moves appear says what hurts and how the toes moved.
    <View style={styles.fill} {...REPLAY_MASK} onTouchStart={auto ? stopAuto : undefined}>
      <Animated.Text
        accessibilityRole="header"
        entering={fadeIn(0)}
        style={[styles.title, { color: colors.foreground }]}>
        {t('onboarding.week.title')}
      </Animated.Text>
      {!tight && (
        <Animated.Text entering={fadeIn(60)} style={[styles.cadence, { color: meter.caption }]}>
          {t('onboarding.week.cadence', { count: daysPerWeek, minutes })}
        </Animated.Text>
      )}

      <View
        style={styles.stage}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setStage((prev) => (prev != null && prev.width === width && prev.height === height ? prev : { width, height }));
        }}>
        {geometry != null && geometry.cardW > 0 && (
          <>
            <View style={{ height: geometry.cardH }}>
              {/* One element for a screen reader: swiped up or down it moves
                  through the week, double-tapped it plays the move full
                  screen. The value is the move, so it is what is read out on
                  every change. */}
              <View
                accessible
                accessibilityRole="adjustable"
                accessibilityLabel={t('onboarding.week.title')}
                accessibilityValue={{ text: sentence }}
                accessibilityHint={t('onboarding.week.deckHint')}
                accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }, { name: 'activate' }]}
                onAccessibilityAction={(event) => {
                  stopAuto();
                  const action = event.nativeEvent.actionName;
                  if (action === 'increment') goTo(activeRef.current + 1);
                  else if (action === 'decrement') goTo(activeRef.current - 1);
                  else if (action === 'activate') previewRef.current?.expand();
                }}
                style={styles.fill}>
                <Animated.View
                  style={[
                    styles.fill,
                    // Grows about the front card, not the middle of the row.
                    { transformOrigin: [geometry.gutter + geometry.cardW / 2, geometry.cardH / 2, 0] },
                    deckIn,
                  ]}>
                  <Animated.ScrollView
                    ref={scrollRef}
                    horizontal
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={geometry.interval}
                    snapToAlignment="start"
                    decelerationRate="fast"
                    disableIntervalMomentum
                    onScrollBeginDrag={stopAuto}
                    accessibilityElementsHidden
                    importantForAccessibility="no-hide-descendants"
                    style={styles.fill}
                    contentContainerStyle={[
                      styles.row,
                      { paddingLeft: geometry.gutter, paddingRight: geometry.width - geometry.gutter - geometry.cardW },
                    ]}>
                    {cards.map((card, i) => (
                      <MoveCard
                        key={card.id}
                        card={card}
                        index={i}
                        width={geometry.cardW}
                        height={geometry.cardH}
                        gap={i < last ? GAP : 0}
                        active={i === active}
                        position={position}
                        peekIn={peekIn}
                        reduceMotion={reduceMotion}
                        playing={playing}
                        mirrored={mirrored}
                        previewRef={i === active ? previewRef : undefined}
                        onPress={
                          i > active
                            ? () => {
                                stopAuto();
                                goTo(i);
                              }
                            : undefined
                        }
                        onFirstFrame={onFirstFrame}
                        onDuration={onDuration}
                        onViewerChange={onViewer}
                      />
                    ))}
                  </Animated.ScrollView>
                </Animated.View>
              </View>

              {/* Beside the deck, not in it, so he stays put as it moves.
                  Feet on the card's baseline, fingertip at its edge, by the
                  feet in the clip. */}
              {!geometry.compact && (
                <View
                  pointerEvents="box-none"
                  accessibilityElementsHidden
                  importantForAccessibility="no-hide-descendants"
                  style={[
                    styles.coach,
                    {
                      left: geometry.gutter - FINGERTIP_X * COACH - POINT_GAP,
                      top: geometry.cardH - FEET_Y * COACH,
                      width: COACH,
                      height: COACH,
                    },
                  ]}>
                  {coachArt(COACH)}
                </View>
              )}
            </View>

            <View
              accessibilityElementsHidden
              importantForAccessibility="no-hide-descendants"
              style={[styles.segments, { marginLeft: geometry.gutter, width: geometry.cardW }]}>
              {ready && (
                <Animated.View entering={fadeIn(SEGMENTS_IN_MS)} style={styles.segmentRow}>
                  {cards.map((card, i) => (
                    <Segment
                      key={card.id}
                      index={i}
                      active={active}
                      fill={fill}
                      color={colors.foreground}
                      track={meter.track}
                    />
                  ))}
                </Animated.View>
              )}
            </View>
          </>
        )}
      </View>

      <View style={[styles.slot, geometry?.compact === true && styles.slotRow]}>
        {geometry?.compact === true && (
          <View
            pointerEvents="box-none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={styles.coachCompact}>
            {coachArt(COACH_COMPACT)}
          </View>
        )}
        <View style={styles.bubbleColumn}>
          {/* Every card's bubble, laid out unseen, so the one shown can take
              the tallest one's height and never change size. */}
          <View
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={styles.ghosts}>
            {cards.map((card, i) => (
              <View
                key={card.id}
                onLayout={(event) => {
                  const { height } = event.nativeEvent.layout;
                  setHeights((prev) => {
                    if (prev[i] === height) return prev;
                    const next = [...prev];
                    next[i] = height;
                    return next;
                  });
                }}>
                <BubbleCopy card={card} typed={false} />
              </View>
            ))}
          </View>

          {bubbleShown && current != null ? (
            <Animated.View
              entering={bubbleIn}
              style={[
                styles.bubble,
                { height: bubbleHeight, backgroundColor: colors.card, borderColor: meter.track },
              ]}>
              {/* Up at the coach in the gutter, or sideways at him beside it. */}
              <View
                style={[
                  geometry?.compact === true ? styles.tailSide : styles.tail,
                  { backgroundColor: colors.card, borderColor: meter.track },
                ]}
              />
              <Animated.View
                key={active}
                entering={FadeIn.duration(200).reduceMotion(ReduceMotion.Never)}
                exiting={FadeOut.duration(120).reduceMotion(ReduceMotion.Never)}>
                <BubbleCopy card={current} typed={typed && active === 0} />
              </Animated.View>
            </Animated.View>
          ) : (
            <View style={{ height: bubbleHeight }} />
          )}
        </View>
      </View>
    </View>
  );
}

type DeckPose = 'pointing' | 'thumbsUp';

/**
 * The coach, in the pose the deck asks for. A new pose is a new rig, so it
 * crossfades rather than switching: the old one fades out over the new.
 */
function Coach({
  pose,
  size,
  coachRef,
  paused,
  surface,
  onShotEnd,
}: {
  pose: DeckPose;
  size: number;
  coachRef: Ref<MascotHandle>;
  paused: boolean;
  surface: string;
  onShotEnd: () => void;
}) {
  return (
    <Animated.View
      key={pose}
      entering={FadeIn.duration(180).reduceMotion(ReduceMotion.Never)}
      exiting={FadeOut.duration(180).reduceMotion(ReduceMotion.Never)}
      style={StyleSheet.absoluteFill}>
      <Mascot
        ref={coachRef}
        rig={pose === 'thumbsUp' ? thumbsUpRig : pointingRig}
        size={size}
        paused={paused}
        surface={surface}
        onAnimationEnd={onShotEnd}
        // He boings by himself; the sound is the host's, and the only one a
        // tap on him makes.
        onPress={() => playMascotSound('boing')}
      />
    </Animated.View>
  );
}

/** What the coach says about a card: its name and dose, then why. */
function BubbleCopy({ card, typed }: { card: DeckCard; typed: boolean }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View>
      {/* The deck's own value already reads the name and the dose out. */}
      <View style={styles.head} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <Text style={[styles.headTitle, { color: colors.foreground }]} maxFontSizeMultiplier={BUBBLE_SCALE}>
          {card.title}
        </Text>
        <Text style={[styles.headDose, { color: meter.caption }]} maxFontSizeMultiplier={BUBBLE_SCALE}>
          {card.dose}
        </Text>
      </View>
      {typed ? (
        <View accessible accessibilityRole="text" accessibilityLabel={card.rationale} style={styles.line}>
          <TypedText
            text={card.rationale}
            style={[styles.text, { color: colors.foreground }]}
            maxDuration={QUESTION_LINE_MS}
          />
        </View>
      ) : (
        <Text style={[styles.text, styles.line, { color: colors.foreground }]} maxFontSizeMultiplier={BUBBLE_SCALE}>
          {card.rationale}
        </Text>
      )}
    </View>
  );
}

/** One segment of the Stories bar: full once passed, filling while in front. */
function Segment({
  index,
  active,
  fill,
  color,
  track: trackColor,
}: {
  index: number;
  active: number;
  fill: SharedValue<number>;
  color: string;
  track: string;
}) {
  const style = useAnimatedStyle(
    () => ({ transform: [{ scaleX: index < active ? 1 : index > active ? 0 : fill.value }] }),
    [index, active],
  );
  return (
    <View style={[styles.segment, { backgroundColor: trackColor }]}>
      <Animated.View style={[styles.segmentFill, { backgroundColor: color }, style]} />
    </View>
  );
}

/** Whether the app is in front. The clip and the coach stop behind it. */
function useAppActive(): boolean {
  const [activeNow, setActiveNow] = useState(AppState.currentState !== 'background' && AppState.currentState !== 'inactive');
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => setActiveNow(next === 'active'));
    return () => subscription.remove();
  }, []);
  return activeNow;
}

/** Whether VoiceOver or TalkBack is on: nothing moves on by itself for them. */
function useScreenReader(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let alive = true;
    void AccessibilityInfo.isScreenReaderEnabled().then((enabled) => {
      if (alive) setOn(enabled);
    });
    const subscription = AccessibilityInfo.addEventListener('screenReaderChanged', setOn);
    return () => {
      alive = false;
      subscription.remove();
    };
  }, []);
  return on;
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  title: { ...fonts.heavy(30, -0.8), lineHeight: 36 },
  cadence: { ...fonts.medium(15), lineHeight: 20, marginTop: 4 },
  stage: {
    flex: 1,
    marginTop: 14,
    marginHorizontal: -PAGE_SIDE,
    justifyContent: 'center',
  },
  row: { alignItems: 'center' },
  coach: { position: 'absolute' },
  coachCompact: { width: COACH_COMPACT, height: COACH_COMPACT },
  segments: { marginTop: SEGMENTS_TOP, height: SEGMENT },
  segmentRow: { flex: 1, flexDirection: 'row', gap: 4 },
  segment: { flex: 1, height: SEGMENT, borderRadius: SEGMENT / 2, overflow: 'hidden' },
  segmentFill: { ...StyleSheet.absoluteFill, transformOrigin: 'left center' },
  slot: { marginTop: 10, paddingTop: TAIL_RISE },
  slotRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  bubbleColumn: { flexGrow: 1, flexShrink: 1 },
  ghosts: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: BUBBLE_PAD_X + HAIRLINE,
    opacity: 0,
  },
  bubble: {
    justifyContent: 'center',
    paddingHorizontal: BUBBLE_PAD_X,
    paddingVertical: BUBBLE_PAD_Y,
    borderRadius: 18,
    borderCurve: 'continuous',
    borderWidth: HAIRLINE,
  },
  /** A square turned to a point, half inside the bubble: its fill covers the
   * bubble's edge where they meet, and its two upper sides carry the edge on. */
  tail: {
    position: 'absolute',
    top: -TAIL / 2,
    left: TAIL_LEFT,
    width: TAIL,
    height: TAIL,
    borderTopWidth: HAIRLINE,
    borderLeftWidth: HAIRLINE,
    borderTopLeftRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  /** The same, turned to the left edge, level with the compact coach's head. */
  tailSide: {
    position: 'absolute',
    left: -TAIL / 2,
    bottom: COACH_COMPACT / 2 - TAIL / 2,
    width: TAIL,
    height: TAIL,
    borderLeftWidth: HAIRLINE,
    borderBottomWidth: HAIRLINE,
    borderBottomLeftRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  head: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 8 },
  headTitle: { ...fonts.heavy(16, -0.2), lineHeight: 21 },
  headDose: { ...fonts.bold(14), lineHeight: 21 },
  line: { marginTop: 2 },
  text: { ...fonts.semibold(16), lineHeight: 21 },
});
