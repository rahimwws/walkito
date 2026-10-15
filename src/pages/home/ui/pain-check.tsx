import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { useIsFocused, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, useWindowDimensions, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  PROGRAM,
  TODAY_INDEX,
  checkInOn,
  currentDay,
  isFirstStepTime,
  lastFlareOn,
  logFlare,
  painOn,
  logPain,
  useLogsVersion,
  settleOffset,
  type ProgramDay,
  exerciseById,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { PROGRAM_EASING, PROGRAM_MS, usePlanOver } from '@/shared/lib/program';
import { useSpotlightAnchor } from '@/shared/lib/spotlight';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import type { ConfettiOrigin } from '@/shared/ui/confetti';
import { Mascot, handsUpRig, painRig, type MascotHandle, type MascotProps } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { useSplashRevealed } from '@/shared/ui/splash';
import { useColorScheme } from '@/shared/lib/theme';

import { SessionView } from '@/widgets/session-player';

import { SafetySheet } from '@/features/safety-check';

import { LegMap, MAX_ZONES, ZONE_LABEL_KEYS, reliefIdsFor, toggleZone, type LegZone } from '@/entities/leg-zone';

import { PAIN_MAX, PAIN_MIN, PainScale, painBand, painColor } from './pain-scale';

/** Between the question (or the answer) and the "Something new?" row. */
export const CHECK_IN_GAP = 12;

const PRESS_MS = 90;
/** The view arriving, and the one leaving: one cross-dissolve. The arrival
 * eases out and runs longer, so it is the thing the eye ends on. */
const ENTER_MS = 440;
const ENTER_EASING = Easing.bezier(0.22, 1, 0.36, 1);
/** The lines under the answer card trail it by this much. */
const LINES_LAG_MS = 160;
const EXIT_MS = 260;
const EXIT_EASING = Easing.bezier(0.4, 0, 0.6, 1);
/** How far the arriving view rises into place. */
const RISE = 14;
/** How long a page sheet takes to go: an answer given in one is folded in
 * once it has gone, not behind it. */
const SHEET_GONE_MS = 380;
/** The block easing to the height of what it now holds. */
const HEIGHT_MS = 420;
const HEIGHT_EASING = Easing.bezier(0.33, 1, 0.68, 1);
/** His reaction (and the confetti) once the answer has risen in. */
const SUMMARY_SHOT_MS = 80;
/** The bleed of the block's clip into the page gutters, so the tipped cards'
 * corners are never cut. */
const CLIP_BLEED = 20;
/** And above and below it: the mascot's hop on the answer card rises past
 * the card's top. */
const CLIP_BLEED_Y = 24;
const SELECT_MS = 260;
const SELECT_EASING = Easing.bezier(0.23, 1, 0.32, 1);

/** The card's corner, and the tiles' — nested, so the inner radius is the
 * outer one less the padding between them. */
const CARD_RADIUS = 28;
const CARD_PAD = 18;
const TILE_RADIUS = CARD_RADIUS - CARD_PAD / 2;

/** The answer cards: glass, overlapping and tipped a few degrees apart, so the
 * pair reads as two cards dropped on the screen rather than two cells of a
 * grid. */
const GLASS_RADIUS = 36;
const GLASS_WIDTH = '62%';
const STAGGER = 34;
const TILT = 5;
const GLASS_HEIGHT = 182;
/** The mascot on each card. The card clips, so a hop stays inside it. */
const MASCOT_SIZE = 118;

/** The title is a key, resolved where the card is drawn — so the pair repaints
 * with the language rather than at next launch. */
const CARDS = [
  {
    key: 'pain',
    title: 'home.itHurts',
    rig: painRig,
    /** Leading card: sits high and left, tipped anticlockwise. */
    side: 'left',
  },
  {
    key: 'nopain',
    title: 'home.noPain',
    rig: handsUpRig,
    side: 'right',
  },
] as const satisfies readonly {
  key: string;
  title: Key;
  rig: unknown;
  side: 'left' | 'right';
}[];

type CardKey = (typeof CARDS)[number]['key'];

export type PainCheckProps = {
  /** Fired once the day's answer is in. `painless` is what the celebration and
   * the reordering above both key off — a good day is worth marking, and either
   * way the question is done and should stop holding the top of the screen. */
  onLogged?: (painless: boolean, origin?: ConfettiOrigin) => void;
  /** A sheet of Home's is over the cards (the streak, a milestone): the
   * mascots hold still under it. */
  covered?: boolean;
  /** The check-in's own sheets opened or closed, so Home can hold its other
   * mascots still under them. */
  onSheet?: (open: boolean) => void;
  /**
   * The block's two heights, which Home adds up (with `CHECK_IN_GAP`) for its
   * `DailyStack` to read on the UI thread: `views`, the question or the
   * answer, eased by the block itself; `row`, the "Something new?" row under
   * it. Shared rather than measured, so the list can never be a frame behind.
   */
  heights?: { views: SharedValue<number>; row: SharedValue<number> };
};

/**
 * Today's check-in: does it hurt, or not.
 *
 * Two cards rather than a toggle or a slider. The answer changes what the plan
 * does tomorrow, so it deserves to be the size of a decision — and having both
 * outcomes visible at once means neither is the default that gets tapped
 * without reading.
 *
 * One card holds the whole question: a kicker that says what this is and how
 * long it takes, the question itself, the two answers as tiles and the one
 * button that commits. It used to be grey centred text floating over two
 * tilted cards, with the button and the link drifting underneath — four
 * things that did not look like they belonged to each other.
 *
 * Picking a tile tints it violet. That is the app's colour for "selected",
 * the same for either answer: it says which one you chose, never whether it
 * was the good one.
 *
 * Choosing and confirming are separate. Each card used to carry its own Log
 * button, which asked the same question twice and put two loud primaries side
 * by side. Now a tap picks — the chosen card comes level and forward while the
 * other tips away — and one primary underneath commits it.
 */
export function PainCheck({ onLogged, covered = false, onSheet, heights }: PainCheckProps) {
  const cardsAnchor = useSpotlightAnchor('home.pain');
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const [selected, setSelected] = useState<CardKey | null>(null);
  const [open, setOpen] = useState(false);
  /** "It hurts right now": the same sheet, asked for relief rather than as
   * the day's answer. */
  const [flareOpen, setFlareOpen] = useState(false);
  // Re-read on every log write, so the answer shows the moment it is saved.
  useLogsVersion();
  const today = currentDay();
  /** The day's check-in, once answered: one a day, corrected in place. */
  const checkIn = checkInOn(today);
  const flare = lastFlareOn(today);
  /** "Edit" on the answered card: the question again, the answer picked. */
  const [editing, setEditing] = useState(false);
  const answered = checkIn != null && !editing;

  /**
   * The question and the day's answer, crossing over rather than taking turns.
   *
   * The answer used to replace the cards in one frame, mid-crossing; then it
   * faded out, left a blank beat and faded the other in, which read as a lag.
   * Now both are on screen for the change: the one arriving takes its place
   * in the flow (the block's height glides to it), the one leaving is laid
   * over that place and goes. The answer has no glass, so it fades and always
   * sits on top; the question's cards are liquid glass, which an animated
   * opacity on any ancestor kills for good (see `scrim` in `PainCard`), so it
   * sits underneath and a veil in the page colour comes over it or lifts off
   * it instead. Whichever way the change goes, it is one cross-dissolve.
   *
   * It happens where the block is: the answered card stays at the top of
   * Home, and the list under it rises as the block's height eases down. An
   * answer given in the sheet is folded in once the sheet has gone.
   */
  const target: 'question' | 'summary' = answered ? 'summary' : 'question';
  const [view, setView] = useState(target);
  const [leaving, setLeaving] = useState<'question' | 'summary' | null>(null);
  /**
   * How far each view is in, 0 to 1, one value per view rather than one for
   * "arriving" and one for "leaving": a view's style never changes role
   * mid-change, so it can never pick up the other's value for a frame.
   */
  const summaryP = useSharedValue(target === 'summary' ? 1 : 0);
  const questionP = useSharedValue(target === 'question' ? 1 : 0);
  /** When a sheet of the check-in's last went, so the change can wait for it. */
  const sheetGoneAt = useRef(0);
  /** Between the swap and the start of its cross-dissolve; the new height
   * measured in that window waits in `heldHeight`. */
  const swapping = useRef(false);
  const heldHeight = useRef<number | null>(null);
  const ownViews = useSharedValue(0);
  const ownRow = useSharedValue(0);
  const viewsHeight = heights?.views ?? ownViews;
  const rowHeight = heights?.row ?? ownRow;
  const sheetUp = open || flareOpen;
  const wasSheetUp = useRef(sheetUp);
  if (wasSheetUp.current && !sheetUp) sheetGoneAt.current = Date.now();
  wasSheetUp.current = sheetUp;
  /** Bumped by every answer and correction: the mascot reacts once to each,
   * never again for coming back to Home. */
  const [reaction, setReaction] = useState(0);
  /** A fresh answer waiting to be marked (confetti for a day with no pain)
   * once the answer has landed. */
  const celebrate = useRef<boolean | null>(null);
  const onLoggedRef = useRef(onLogged);
  onLoggedRef.current = onLogged;

  useEffect(() => {
    if (target === view || sheetUp) return undefined;
    const wait = Math.max(0, SHEET_GONE_MS - (Date.now() - sheetGoneAt.current));
    const timer = setTimeout(() => {
      // The arriving view is not mounted yet, so starting it from nothing has
      // nothing on screen to touch; the leaving one keeps its value.
      if (target === 'summary') summaryP.value = 0;
      else questionP.value = 0;
      // The new view's height is held until the cross-dissolve starts, so the
      // block does not begin to shrink (clipping the view still leaving)
      // before the arriving one has begun to show.
      swapping.current = true;
      setLeaving(view);
      setView(target);
    }, wait);
    return () => clearTimeout(timer);
  }, [target, view, sheetUp, summaryP, questionP]);

  useEffect(() => {
    if (leaving == null) return undefined;
    swapping.current = false;
    if (heldHeight.current != null) {
      viewsHeight.value = withTiming(heldHeight.current, {
        duration: HEIGHT_MS,
        easing: HEIGHT_EASING,
        reduceMotion: ReduceMotion.System,
      });
      heldHeight.current = null;
    }
    const arriving = view === 'summary' ? summaryP : questionP;
    const going = view === 'summary' ? questionP : summaryP;
    arriving.value = withTiming(1, { duration: ENTER_MS, easing: ENTER_EASING, reduceMotion: ReduceMotion.System });
    going.value = withTiming(0, { duration: EXIT_MS, easing: EXIT_EASING, reduceMotion: ReduceMotion.System });
    const done = setTimeout(() => setLeaving(null), Math.max(ENTER_MS, EXIT_MS) + 40);
    return () => clearTimeout(done);
  }, [leaving, view, summaryP, questionP, viewsHeight]);

  /** The mascot's reaction has played: the day's first answer is celebrated
   * on that beat, from where he is, rather than under the change. */
  const onReacted = (origin?: ConfettiOrigin) => {
    if (celebrate.current == null) return;
    const painless = celebrate.current;
    celebrate.current = null;
    onLoggedRef.current?.(painless, origin);
  };
  const transitioning = leaving != null;

  /**
   * The block's own height, eased to whatever its contents now measure.
   *
   * Without it, the question (tall) and the answer (short) traded places in
   * one frame and everything under the block jumped by the difference. Now
   * the contents are measured where they lie, the block's height glides to
   * them, and what does not fit yet is clipped (the clip reaches into the page
   * gutters, so the tipped glass cards keep their corners). Home's column
   * reads the same value, so the list and everything below move with it.
   */
  const [measured, setMeasured] = useState(false);
  const lastHeight = useRef(0);
  const onViews = (event: LayoutChangeEvent) => {
    const next = event.nativeEvent.layout.height;
    if (Math.abs(next - lastHeight.current) < 0.5) return;
    const initial = lastHeight.current === 0;
    lastHeight.current = next;
    if (!initial && swapping.current) {
      heldHeight.current = next;
      return;
    }
    viewsHeight.value = initial
      ? next
      : withTiming(next, { duration: HEIGHT_MS, easing: HEIGHT_EASING, reduceMotion: ReduceMotion.System });
    if (initial) setMeasured(true);
  };
  const onRow = (event: LayoutChangeEvent) => {
    rowHeight.value = event.nativeEvent.layout.height;
  };
  // The clip reaches past the views on every side by its bleed (the tipped
  // cards, his hop), so its own box is their height plus that.
  const heightStyle = useAnimatedStyle(() => ({ height: viewsHeight.value + CLIP_BLEED_Y * 2 }));
  // Every style of a layer carries the same properties, so a view that goes
  // from arriving to leaving (or back, interrupted) never keeps a value from
  // the style it had before.
  const summaryStyle = useAnimatedStyle(() => ({
    opacity: summaryP.value,
    transform: [{ translateY: (1 - summaryP.value) * RISE }, { scale: 0.98 + 0.02 * summaryP.value }],
  }));
  const questionStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: (1 - questionP.value) * RISE }, { scale: 0.98 + 0.02 * questionP.value }],
  }));
  const veil = useAnimatedStyle(() => ({ opacity: 1 - questionP.value }));
  // The lines under the answer card arrive a beat after it, on its clock.
  const ackStyle = useAnimatedStyle(() => ({
    opacity: interpolate(summaryP.value, [0.35, 0.85], [0, 1], 'clamp'),
  }));
  const flareRowStyle = useAnimatedStyle(() => ({
    opacity: interpolate(summaryP.value, [0.5, 1], [0, 1], 'clamp'),
    transform: [{ translateY: interpolate(summaryP.value, [0.5, 1], [10, 0], 'clamp') }],
  }));
  const buttonIn = useSharedValue(0);
  const hasPick = selected != null;
  useEffect(() => {
    buttonIn.value = withTiming(hasPick ? 1 : 0, {
      duration: 280,
      easing: SELECT_EASING,
      reduceMotion: ReduceMotion.System,
    });
  }, [hasPick, buttonIn]);
  // No glass in the button, so it may fade.
  const buttonStyle = useAnimatedStyle(() => ({
    opacity: buttonIn.value,
    transform: [{ translateY: (1 - buttonIn.value) * 10 }],
  }));
  const focused = useIsFocused();
  /** The red-flag check, behind "Something new?". */
  const [safety, setSafety] = useState(false);
  const sheetRef = useRef(onSheet);
  sheetRef.current = onSheet;
  useEffect(() => {
    sheetRef.current?.(open || flareOpen || safety);
  }, [open, flareOpen, safety]);
  /** Before noon the question is about the first steps out of bed; after it,
   * about the day. Read per render, so a screen left open across noon follows. */
  const morning = isFirstStepTime(Date.now());
  /**
   * Whether a check-in has been made since this screen was opened.
   *
   * It softens the question rather than closing it. The button used to read
   * "Logged for today" and stay disabled, which made a day one answer: somebody
   * whose foot hurt at seven, settled by noon and hurt again after a walk had
   * nowhere to say so. A day is not one answer, and the log now holds as many
   * as are given.
   *
   * What it still does is stop a second commit landing by accident — the block
   * does not go away once answered, it slides under the task list and stays on
   * screen, so without this, scrolling back to it would re-fire the confetti.
   * Picking a card again clears it.
   */
  const [logged, setLogged] = useState(false);
  /** The button's words, held from the moment the answer is in until the
   * question has gone: saving ends the edit, and the label flipped to "Log
   * today's check-in" on its way out. */
  const labelRef = useRef('');
  if (target === 'question') {
    labelRef.current = editing ? t('home.checkInUpdate') : logged ? t('home.checkInAgain') : t('home.logCheckIn');
  }
  const buttonLabel = labelRef.current;
  /**
   * What the app says back, once the answer is in.
   *
   * Held here rather than in the sheet because the sheet is not somewhere an
   * acknowledgement can be read: under the relief line it closes itself in the
   * same handler that saves, and over it the offload slides across the pane a
   * beat later. This block is the one place every path ends up looking at —
   * including "No pain today", which never opens the sheet at all.
   */
  const [ack, setAck] = useState<string | null>(null);

  /**
   * Say it after the swap, not during it.
   *
   * Logging is what sends this block under the task list, and that crossing is
   * measured off both blocks' heights — a line appearing here mid-flight would
   * change one of them and jolt the list arriving over it. By the time the
   * motion is paid off the height can grow freely.
   */
  const acknowledge = (score: number, text: string = t(acknowledgement(score))) => {
    // Set now, while the question is still up: it is drawn only by the answer,
    // which arrives after the crossing with it already in place, so it never
    // appears later under it and pushes the rows down.
    setAck(text);
  };

  /**
   * The answer, written down, then said back.
   *
   * Everything downstream of this screen reads the log rather than this
   * component: the streak counts the check-in, the morning line ranks off it,
   * and tomorrow's session is adapted from it. Held only in local state the
   * answer would survive exactly as long as the screen does, and the app would
   * spend the rest of the day acting as though nobody had been asked.
   *
   * The write goes first and the acknowledgement second, because the
   * acknowledgement is a timeout — an answer that only reached storage after
   * `PROGRAM_MS` would be lost by anyone who logged and immediately left.
   */
  const record = (score: number, zones: readonly LegZone[], said?: string) => {
    const correction = checkInOn(currentDay()) != null;
    setReaction((n) => n + 1);
    logPain(currentDay(), score, zones);
    // The morning's answer is what moves the plan a step back or lets it return.
    settleOffset(currentDay());
    acknowledge(score, said ?? (correction ? t('home.ackUpdated') : undefined));
    setEditing(false);
  };

  /** "Edit": back to the question with today's answer picked. */
  const edit = () => {
    Haptics.selectionAsync();
    // The reply line stays with the answer as it leaves: cleared here it took
    // its height with it, and the block shrank a beat before it grew.
    setSelected(checkIn != null && checkIn.score > 0 ? 'pain' : 'nopain');
    setLogged(false);
    setEditing(true);
  };

  /**
   * An answer started on the home-screen widget.
   *
   * The widget's two cards open the app on `?checkin=fine` or `?checkin=hurts`
   * rather than recording anything themselves — the app is where an answer is
   * taken and said back. "No pain" is recorded here, the same way the card and
   * button on this screen record it, and acknowledged in words that say it was
   * recorded. "It hurts" opens the sheet, because the number and the place are
   * the answer and neither can be given on the home screen.
   *
   * The parameter is cleared once read, so the same link tapped again later is
   * a new request rather than an unchanged one React never sees.
   *
   * Held until the launch splash has opened. A widget tap is usually a cold
   * start, and a sheet opened at mount sat above the splash while its zoom
   * played behind it; the acknowledgement for "no pain" was said to nobody.
   */
  const router = useRouter();
  const { checkin } = useLocalSearchParams<{ checkin?: string }>();
  const revealed = useSplashRevealed();
  useEffect(() => {
    if (checkin !== 'fine' && checkin !== 'hurts' && checkin !== 'open') return;
    if (!revealed) return;
    router.setParams({ checkin: undefined });
    // Answered already today: the widget does not answer twice. "Fine" shows
    // the day's answer; "it hurts" is then "it hurts right now".
    const answeredToday = checkInOn(currentDay()) != null;
    if (checkin === 'fine') {
      if (answeredToday) return;
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setSelected('nopain');
      celebrate.current = true;
      record(0, [], t('widget.ackNoPain'));
    } else if (checkin === 'hurts') {
      if (answeredToday) {
        setEditing(false);
        setFlareOpen(true);
        return;
      }
      setSelected('pain');
      setLogged(false);
      setOpen(true);
    }
    // `open` only lands here: the question is on screen, answered or not.
    // Keyed on the request alone. `record` and `onLogged` are fresh closures
    // every render, and re-running for them would record the answer twice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, revealed]);

  const summaryView =
    checkIn == null ? null : (
      <View {...REPLAY_MASK} style={styles.block}>
        <CheckInSummary
          score={checkIn.score}
          zones={(checkIn.zones ?? []) as LegZone[]}
          flareScore={flare?.score ?? null}
          paused={!focused || open || flareOpen || safety || covered || transitioning}
          reaction={reaction}
          onReacted={onReacted}
          onEdit={edit}
        />
        {ack != null && (
          <Animated.Text accessibilityLiveRegion="polite" style={[styles.ack, { color: meter.caption }, ackStyle]}>
            {ack}
          </Animated.Text>
        )}
        <Animated.View style={flareRowStyle}>
          <FlareRow onPress={() => setFlareOpen(true)} />
        </Animated.View>
      </View>
    );

  const questionView = (
    <View style={styles.block} {...REPLAY_MASK}>
      <View style={styles.head}>
        <Text style={[styles.kicker, { color: meter.label }]}>
          {morning ? t('home.checkInKickerMorning') : t('home.checkInKickerDay')}
        </Text>
        <Text accessibilityRole="header" style={[styles.question, { color: palette[scheme].foreground }]}>
          {morning ? t('home.checkInQuestionMorning') : t('home.checkInSubDay')}
        </Text>
      </View>

      {/* The Home tour's second stop lights the pair: lit alone, "It hurts"
          was half under "No pain today", whose edge the light cut through. */}
      <View ref={cardsAnchor} collapsable={false} style={glass.stage} accessibilityRole="radiogroup">
        {CARDS.map((card) => (
          <PainCard
            key={card.key}
            card={card}
            selected={selected === card.key}
            // Nothing is chosen when the screen arrives, so both sit at full
            // strength: dimming everything would read as disabled.
            dimmed={selected != null && selected !== card.key}
            // Not locked once answered. The cards stay live so a second
            // check-in can be started from the same place as the first.
            locked={false}
            visible={focused && !open && !safety && !covered && !transitioning}
            onPress={() => {
              Haptics.selectionAsync();
              setSelected(card.key);
              // Re-opens the question. Without this the button would still
              // read "Check in again" after a fresh choice had been made.
              setLogged(false);
            }}
          />
        ))}
      </View>

      {/* Its room is kept from the start and it fades up into it once a
              tile is picked: appearing, it used to push everything under it
              down. Disabled and visible, it was a big grey slab under two
              answers that already read as the thing to tap. */}
      <Animated.View style={buttonStyle} pointerEvents={selected != null ? 'auto' : 'none'}>
        <PrimaryButton
          pressHaptic={false}
          label={buttonLabel}
          onPress={() => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            // "No pain today" is already the whole answer. Opening a slider to
            // ask how much of the nothing there was would be the app refusing
            // to take yes for an answer.
            if (selected === 'nopain') {
              // Confetti once, for the day's first answer, as it lands: a
              // correction is not a second good morning.
              if (!editing) celebrate.current = true;
              // A real zero, not an absent reading. The engine treats null as
              // "they have not been asked yet" and would go on adapting today
              // off yesterday's number; "no pain today" is an answer and has to
              // be stored as one.
              // No zones: nothing hurts, so there is nowhere to point at.
              record(0, []);
              return;
            }
            setOpen(true);
          }}
        />
      </Animated.View>

      {editing && (
        <Pressable
          accessibilityRole="button"
          hitSlop={8}
          onPress={() => {
            Haptics.selectionAsync();
            setEditing(false);
          }}
          style={({ pressed }) => [styles.cancel, pressed && { opacity: 0.5 }]}>
          <Text style={[styles.cancelText, { color: meter.caption }]}>{t('common.cancel')}</Text>
        </Pressable>
      )}
    </View>
  );

  return (
    <>
      <View style={styles.wrap}>
        <Animated.View style={[styles.clip, measured && heightStyle]}>
          <View onLayout={onViews}>
            {/* Question first and answer second, each keyed by what it is, so a
                view keeps its instance when it turns from arriving to leaving. */}
            {(['question', 'summary'] as const).map((kind) => {
              if (kind !== view && kind !== leaving) return null;
              if (kind === 'summary' && checkIn == null) return null;
              const out = kind === leaving;
              if (kind === 'summary') {
                return (
                  <Animated.View
                    key="summary"
                    style={[styles.summaryLayer, out && styles.leaving, summaryStyle]}
                    pointerEvents={out ? 'none' : 'auto'}>
                    {summaryView}
                  </Animated.View>
                );
              }
              return (
                <Animated.View
                  key="question"
                  style={[out && styles.leaving, questionStyle]}
                  pointerEvents={out ? 'none' : 'auto'}>
                  {questionView}
                  {/* Reaches past the tipped cards' corners on every side. */}
                  <Animated.View
                    pointerEvents="none"
                    style={[styles.veil, { backgroundColor: palette[scheme].background }, veil]}
                  />
                </Animated.View>
              );
            })}
          </View>
        </Animated.View>

        {/* Outside the clip, so it rides on the views' eased height instead of
            jumping to wherever their new height puts it. */}
        <View onLayout={onRow}>
          <SomethingNewRow onPress={() => setSafety(true)} />
        </View>
      </View>

      <SafetySheet visible={safety} onClose={() => setSafety(false)} />

      <Modal animationType="slide" presentationStyle="pageSheet" visible={open} onRequestClose={() => setOpen(false)}>
        <Sheet
          onClose={() => setOpen(false)}
          initialScore={editing && checkIn != null && checkIn.score > 0 ? checkIn.score : undefined}
          initialZones={editing ? ((checkIn?.zones ?? []) as LegZone[]) : undefined}
          onSaved={(score, zones) => {
            if (!editing) celebrate.current = false;
            record(score, zones);
          }}
        />
      </Modal>

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={flareOpen}
        onRequestClose={() => setFlareOpen(false)}>
        <Sheet
          flare
          onClose={() => setFlareOpen(false)}
          onSaved={(score, zones) => {
            logFlare(currentDay(), score, zones);
          }}
        />
      </Modal>
    </>
  );
}

/**
 * What this person's days normally look like.
 *
 * Their own last thirty entries, not a clinical norm. "Above usual" has to mean
 * above usual *for you* — a 4 is an ordinary Tuesday for one person and the
 * worst month of the year for another, and a fixed threshold would tell one of
 * them something false every single day.
 */
const USUAL_WINDOW = 30;
/** Fewer readings than this and there is no ordinary day to describe yet. */
const USUAL_MIN_READINGS = 3;

function usualRange(): { low: number; high: number } {
  const today = currentDay();
  const logged: number[] = [];
  for (let day = Math.max(1, today - USUAL_WINDOW); day < today; day += 1) {
    const pain = painOn(day);
    // Only real answers. A day nobody logged is not a quiet day, and counting
    // it as one is what dragged the range down to a flat zero on a fresh
    // install — the scale then hatched its whole length as "outside your
    // usual" and put both edge marks on the same pixel.
    if (pain != null) logged.push(pain);
  }
  if (logged.length < USUAL_MIN_READINGS) return { low: PAIN_MIN, high: PAIN_MAX };
  return { low: Math.min(...logged), high: Math.max(...logged) };
}

/**
 * Where a check-in stops being a note and becomes a decision.
 *
 * Seven, matching the first rung of the copy ladder: at seven and above the
 * plan stops asking for work and starts unloading. Below it the sheet has
 * nothing to add that the number did not already say.
 */
const RELIEF_ABOVE = 6;

/** How far the check-in slides under the arriving session — the same fraction
 * the program's own push uses. */
const PUSH_PARALLAX = 0.3;

/**
 * One line back, for the answer that was just given.
 *
 * Three registers, and the ladder only ever goes one way: a quiet "good" for a
 * day with nothing in it, a plain receipt in the middle, and above the relief
 * line the one thing worth saying — what the app has already done about it.
 * Nothing here congratulates a number, because a 7 is not an achievement and
 * being met with warmth for reporting one teaches people to stop reporting.
 *
 * The second sentence is pinned to `RELIEF_ABOVE` rather than to a copy band,
 * because it is a claim about the day's session and it has to be true: at six
 * and below nothing about today changes, so nothing about today is promised.
 */
function acknowledgement(score: number): Key {
  if (score <= 2) return 'home.ackGood';
  if (score <= RELIEF_ABOVE) return 'home.ackLogged';
  return 'home.ackLoggedShorter';
}

/**
 * What a sore day gets instead of the programme.
 *
 * Today's slot, rewritten as recovery. Not the session that was scheduled: the
 * whole point of asking is that the answer can change the day, and handing
 * someone at eight out of ten the strength work they were down for would make
 * the question decorative.
 */
function reliefDay(): ProgramDay {
  return {
    ...PROGRAM[TODAY_INDEX],
    kind: 'recovery',
    minutes: 3,
    checkpoint: false,
  };
}

/**
 * Today's number.
 *
 * One question, one gesture, and the whole sheet answers to it: the digits, the
 * words under them, the colour of the wedge and the colour of the button that
 * commits it are all the same value said five ways. That redundancy is the
 * point — the answer decides what tomorrow's session is, and it should be
 * impossible to log a 7 while thinking you logged a 3.
 */
/**
 * "Something new?" on Home: the way to the red-flag check, as a row of its own.
 *
 * It was an underlined line of grey text, which read as a footnote — and the
 * thing it opens is the one screen in the app that can say "see a doctor".
 * A tile, a title, the examples on a line of their own and a chevron make it
 * read as somewhere you can go, without making it loud. The plaster is calm
 * on purpose: the row asks a question, it does not raise an alarm. Not a face
 * (the answer cards above already have Walkito in them) and not the
 * stethoscope, whose navy outline the dark card swallows.
 */
function SomethingNewRow({ onPress }: { onPress: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('home.somethingNew')}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.newRow, { backgroundColor: colors.card }, pressed && { opacity: 0.7 }]}>
      <View style={[styles.newTile, { backgroundColor: meter.iconTile }]}>
        <FluentIcon name="bandage" size={26} />
      </View>
      <View style={styles.newCopy}>
        <Text numberOfLines={1} style={[styles.newTitle, { color: colors.foreground }]}>
          {t('home.somethingNewTitle')}
        </Text>
        <Text numberOfLines={1} style={[styles.newSub, { color: meter.caption }]}>
          {t('home.somethingNewSub')}
        </Text>
      </View>
      <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={meter.caption} strokeWidth={2} />
    </Pressable>
  );
}

/**
 * The day's check-in, answered: what was said, where, and a way to change it.
 *
 * The question used to stay on screen after it was answered, cards live and
 * looking unanswered, so tapping "No pain today" again and again seemed to do
 * nothing (it wrote another zero each time). Answered, it is the day's answer,
 * the way the pain apps show it, with "Edit" to correct it in place. The
 * mascot wears the answer: hands up for no pain, holding the sore foot
 * otherwise, never cheering a number.
 */
function CheckInSummary({
  score,
  zones,
  flareScore,
  paused,
  reaction,
  onReacted,
  onEdit,
}: {
  score: number;
  zones: readonly LegZone[];
  flareScore: number | null;
  paused: boolean;
  /** Bumped by each answer: he reacts once to each, not to Home reopening. */
  reaction: number;
  /** He has reacted, from here on the screen (for the confetti). */
  onReacted: (origin?: ConfettiOrigin) => void;
  onEdit: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const where = zones.map((zone) => t(ZONE_LABEL_KEYS[zone])).join(t('home.zoneJoin'));
  // He answers the answer once it has landed: a hop for a day with no pain, a
  // small nod for a sore one (never a cheer at a number). Once per answer or
  // correction; Home reopening, a sheet closing or a cold start play nothing.
  const mascot = useRef<MascotHandle>(null);
  const art = useRef<View>(null);
  const played = useRef(reaction);
  const reactedRef = useRef(onReacted);
  reactedRef.current = onReacted;
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (paused || reaction === played.current) return undefined;
    const timer = setTimeout(() => {
      played.current = reaction;
      mascot.current?.play(score === 0 ? 'happy' : 'nod');
      const node = art.current;
      if (node == null) {
        reactedRef.current();
        return;
      }
      node.measureInWindow((x, y, w, h) => {
        reactedRef.current(w > 0 ? { x: (x + w / 2) / width, y: (y + h / 3) / height } : undefined);
      });
    }, SUMMARY_SHOT_MS);
    return () => clearTimeout(timer);
  }, [reaction, paused, score, width, height]);
  return (
    <View style={[styles.summary, { backgroundColor: colors.card }]}>
      <View
        ref={art}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={styles.summaryArt}>
        <CardMascot
          ref={mascot}
          rig={score === 0 ? handsUpRig : painRig}
          size={76}
          surface={colors.card}
          paused={paused}
        />
      </View>
      <View style={styles.summaryCopy}>
        <Text style={[styles.summaryTitle, { color: colors.foreground }]}>
          {score === 0 ? t('home.todayNoPain') : t('home.todayPain', { score })}
        </Text>
        {where !== '' && (
          <Text numberOfLines={2} style={[styles.summaryLine, { color: meter.caption }]}>
            {t('home.todayWhere', { zones: where })}
          </Text>
        )}
        {flareScore != null && (
          <Text style={[styles.summaryLine, { color: meter.caption }]}>{t('home.flareLast', { score: flareScore })}</Text>
        )}
      </View>
      <Pressable
        accessibilityRole="button"
        hitSlop={10}
        onPress={onEdit}
        style={({ pressed }) => [styles.editChip, { backgroundColor: meter.iconTile }, pressed && { opacity: 0.6 }]}>
        <Text style={[styles.editText, { color: colors.foreground }]}>{t('home.checkInEdit')}</Text>
      </Pressable>
    </View>
  );
}

/**
 * "Hurts right now?": any time after the day's answer, straight to help. The
 * same sheet as the check-in, then always the relief session, because the
 * point is getting through the next few minutes, not filling in a log.
 */
function FlareRow({ onPress }: { onPress: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  // Once the day is answered the "It hurts" card is gone, and this is where
  // the Home tour's second stop points instead.
  const tourAnchor = useSpotlightAnchor('home.pain');
  return (
    <Pressable
      ref={tourAnchor}
      accessibilityRole="button"
      accessibilityLabel={t('home.flareTitle')}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.newRow, { backgroundColor: colors.card }, pressed && { opacity: 0.7 }]}>
      <View style={[styles.newTile, { backgroundColor: meter.iconTile }]}>
        <FluentIcon name="relief" size={26} />
      </View>
      <View style={styles.newCopy}>
        <Text numberOfLines={1} style={[styles.newTitle, { color: colors.foreground }]}>
          {t('home.flareTitle')}
        </Text>
        <Text numberOfLines={2} style={[styles.newSub, { color: meter.caption }]}>
          {t('home.flareBody')}
        </Text>
      </View>
      <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={meter.caption} strokeWidth={2} />
    </Pressable>
  );
}

/** The same way in, inside the check-in sheet, where the height is spoken for
 * and a line of text is all there is room for. */
function SomethingNew({ onPress }: { onPress: () => void }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      hitSlop={8}
      style={({ pressed }) => [styles.somethingNew, pressed && { opacity: 0.5 }]}>
      <Text style={[styles.somethingNewText, { color: meter.caption }]}>{t('home.somethingNew')}</Text>
    </Pressable>
  );
}

function Sheet({
  onClose,
  onSaved,
  flare = false,
  initialScore,
  initialZones,
}: {
  onClose: () => void;
  /** "It hurts right now": its own words, and relief always follows the save,
   * whatever the number, because getting help is what it was opened for. */
  flare?: boolean;
  /** A correction of the day's answer opens on that answer. */
  initialScore?: number;
  initialZones?: readonly LegZone[];
  /** Carries the number up with it: the block above owns what gets said back,
   * and it cannot say the right thing without knowing what was logged. The
   * zones travel the same way, so the write stays in one place. */
  onSaved: (score: number, zones: readonly LegZone[]) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();

  /**
   * Where it hurts, if they said. Optional on purpose — the number is the
   * question this sheet exists to ask, and making the map compulsory would put
   * a second obligation in front of a check-in whose whole value is that it
   * takes a moment.
   */
  const [zones, setZones] = useState<readonly LegZone[]>(initialZones ?? []);
  /** Set when a fourth zone is refused, cleared by the next accepted tap. The
   * map has to answer every tap — see `toggleZone`. */
  const [zonesFull, setZonesFull] = useState(false);
  const [safety, setSafety] = useState(false);
  const morning = isFirstStepTime(Date.now());
  const onZoneTap = (zone: LegZone) => {
    const next = toggleZone(zones, zone);
    if (next == null) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setZonesFull(true);
      return;
    }
    Haptics.selectionAsync();
    setZonesFull(false);
    setZones(next);
  };

  /**
   * The exercises that match where it hurts, as titles.
   *
   * Titles rather than ids because that is what the player takes — see the note
   * on `moves` in `SessionView`. Recomputed as the map changes, so the session
   * waiting behind the button is always the one for what is currently marked.
   *
   * `t` is in the dependencies because `exercise.title` resolves against the
   * active language on read. Without it a language change would leave this memo
   * holding titles in the language the sheet was opened in.
   */
  const reliefMoves = useMemo(() => reliefIdsFor(zones).map((id) => exerciseById(id).title), [zones, t]);

  const usual = useMemo(usualRange, []);
  /** Held steady across renders: a fresh object every frame would hand the
   * player a new `day` on each one. */
  const relief = useMemo(reliefDay, []);
  /** Opens on the middle of their usual range rather than on zero. Zero is a
   * claim, and a slider that starts on one collects a lot of accidental zeros
   * from people who only meant to close the sheet. */
  const [score, setScore] = useState(() => initialScore ?? Math.round((usual.low + usual.high) / 2));
  const [logged, setLogged] = useState(false);
  /** Mounted only once the offload is actually on its way in — the player owns
   * a video and a frame callback, and neither should be running behind a screen
   * most check-ins never leave. */
  const [relieving, setRelieving] = useState(false);

  /** 0 the check-in, 1 the session it opened. Same two-pane push the program
   * uses, on the same duration and curve, so the app only has one way of
   * getting from a list to the thing on it. */
  const push = useSharedValue(0);

  const band = painBand(score);
  const tone = painColor(score, scheme);

  const checkPane = useAnimatedStyle(() => ({
    transform: [{ translateX: -push.value * width * PUSH_PARALLAX }],
  }));
  const reliefPane = useAnimatedStyle(() => ({
    transform: [{ translateX: (1 - push.value) * width }],
  }));

  const save = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setLogged(true);
    onSaved(score, zones);
    /**
     * Under the line and with nothing marked, the answer is filed and the
     * sheet's job is done.
     *
     * Marking a zone overrides the number. Someone who took the trouble to
     * point at their achilles has asked a question, and closing on them would
     * make the map a survey — it would collect the answer and do nothing with
     * it. The score still decides whether the *programme* changes; this only
     * decides whether we show them the thing that helps.
     */
    if (!flare && score <= RELIEF_ABOVE && zones.length === 0) {
      onClose();
      return;
    }
    // Over it, closing would be the wrong answer to what was just said. A day
    // this sore is exactly the day the app has something to do about it, and
    // making the user find that thing themselves — back on Home, in a list, two
    // taps away — is how a check-in becomes a form nobody fills in twice.
    setRelieving(true);
    push.value = withTiming(1, {
      duration: PROGRAM_MS,
      easing: PROGRAM_EASING,
      reduceMotion: ReduceMotion.System,
    });
  };

  return (
    <View style={[styles.sheetRoot, { backgroundColor: colors.background }]} {...REPLAY_MASK}>
      <Animated.View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }, checkPane]}>
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />

        <Text style={[styles.sheetTitle, { color: colors.foreground }]}>
          {flare ? t('home.flareSheetTitle') : t('home.checkInTitle')}
        </Text>
        <Text style={[styles.sheetSub, { color: meter.caption }]}>
          {flare ? t('home.flareSheetSub') : morning ? t('home.checkInSubMorning') : t('home.checkInSubDay')}
        </Text>

        <View style={styles.readout}>
          <AnimatedNumber
            text={String(score)}
            value={score}
            color={colors.foreground}
            fontSize={104}
            weight="heavy"
            duration={0.25}
          />
        </View>

        <Text style={[styles.bandLabel, { color: colors.foreground }]}>{t(band.label)}</Text>

        {/* Where first, then how much.
          The place is the part the user has to look at the drawing to answer,
          and the scale is the part their thumb already knows — putting the
          drawing directly under the readout means the eye finishes one question
          before the hand starts the other. It also takes the leftover height,
          so the scale and the button keep theirs on a short screen. */}
        <View style={styles.legStage}>
          <LegMap selected={zones} onToggle={onZoneTap} />
        </View>
        <Text style={[styles.zoneLine, { color: meter.caption }]}>
          {zonesFull
            ? t('home.zonesFull', { count: MAX_ZONES })
            : zones.length === 0
              ? t('home.zonesEmpty', { count: MAX_ZONES })
              : t('home.zonesPicked', {
                  zones: zones.map((zone) => t(ZONE_LABEL_KEYS[zone])).join(t('home.zoneJoin')),
                  move: reliefMoves[0],
                })}
        </Text>

        <View style={styles.scale}>
          <PainScale score={score} onChange={setScore} usual={usual} />
        </View>

        <SomethingNew onPress={() => setSafety(true)} />
        <SafetySheet visible={safety} onClose={() => setSafety(false)} />

        <PrimaryButton
          label={logged ? t('home.saved') : flare ? t('home.flareSave') : t('home.save')}
          // The button is the colour of the answer it is about to commit. It is
          // the last thing under the thumb before the number is written down, and
          // carrying the same colour as the wedge is what makes it read as "save
          // *this*" rather than as a generic confirm.
          // Ink, not white. The fill sweeps the whole ramp, and every stop on
          // it is a light hue: white reads at roughly 1.9:1 through the amber
          // middle and never better than 3:1 at the red end, while ink clears 6:1
          // everywhere. This is exactly the pairing `tint`'s own doc asks the
          // caller to make rather than assume.
          tint={{ fill: tone, label: primaryButton.dark.label }}
          style={styles.save}
          onPress={save}
        />
      </Animated.View>

      {/* The offload, arriving from the right. It paints the page colour itself
          because it has to cover the check-in sliding underneath it, and it is
          the same colour the sheet is already painting, so there is no seam. */}
      <Animated.View style={[styles.pane, { backgroundColor: colors.background }, reliefPane]}>
        {relieving && <SessionView day={relief} moves={reliefMoves} onBack={onClose} />}
      </Animated.View>
    </View>
  );
}

function PainCard({
  card,
  selected,
  dimmed,
  visible,
  locked,
  onPress,
}: {
  card: (typeof CARDS)[number];
  selected: boolean;
  dimmed: boolean;
  /** The cards are on screen and nothing covers them. */
  visible: boolean;
  /** The day's answer is already in. The cards stay legible — they are the
   * record of what was chosen — but they stop taking a new one. */
  locked: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const hasGlass = isLiquidGlassAvailable();
  const t = useT();
  const title = t(card.title);

  const left = card.side === 'left';
  const pressed = useSharedValue(0);

  // The mascot answers the pick: "It hurts" winces and stays with you,
  // "No pain" gives a small hop. Both stand still until one is picked, and
  // only the picked one breathes, so the screen opened every morning is not
  // two loops running. No sound: this is a daily screen.
  const mascot = useRef<MascotHandle>(null);
  const picked = useRef(selected);
  useEffect(() => {
    if (selected && !picked.current) mascot.current?.play(card.key === 'pain' ? 'wince' : 'happy');
    picked.current = selected;
  }, [selected, card.key]);

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );
  const faded = useDerivedValue(
    () =>
      withTiming(dimmed ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [dimmed],
  );

  /**
   * Picking a card straightens it and brings it forward; the other tips a
   * little further away and drops back. The tilt is what makes this read as a
   * choice rather than a checkbox — the chosen card is the one that has come
   * level with the screen.
   */
  const style = useAnimatedStyle(() => {
    const rest = left ? -TILT : TILT;
    const angle = interpolate(chosen.value, [0, 1], [rest, 0]) + interpolate(faded.value, [0, 1], [0, left ? -2 : 2]);
    return {
      transform: [
        { rotate: `${angle}deg` },
        { translateY: interpolate(chosen.value, [0, 1], [0, -6]) },
        {
          scale: 1 + chosen.value * 0.04 - faded.value * 0.04 - pressed.value * 0.02,
        },
      ],
    };
  });

  const ring = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], ['transparent', colors.foreground]),
  }));

  /**
   * The dim, as a scrim over the card rather than alpha around it.
   *
   * This used to be `opacity` on the wrapper above, which is an animated,
   * non-unit alpha on an ancestor of a GlassView — the one thing this project
   * has learned not to do (expo/expo#41024; see the note in
   * `app/layouts/program-overlay.tsx`). The glass does not recover when the
   * alpha returns to 1, so the first tap on either card permanently killed the
   * material on the other one. A veil in the page's own colour dims the card
   * just as well and leaves every ancestor at full alpha.
   */
  const scrim = useAnimatedStyle(() => ({ opacity: faded.value * 0.45 }));

  return (
    <Animated.View
      collapsable={false}
      style={[
        glass.slot,
        left ? glass.slotLeft : glass.slotRight,
        // The chosen card has to be the one on top, or straightening it would
        // slide it under its neighbour.
        { zIndex: selected ? 2 : 1 },
        style,
      ]}>
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled: locked }}
        accessibilityLabel={title}
        disabled={locked}
        onPress={onPress}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: PRESS_MS });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, {
            duration: PRESS_MS * 2,
            easing: Easing.bezier(0.23, 1, 0.32, 1),
            reduceMotion: ReduceMotion.System,
          });
        }}
        style={glass.face}>
        {/* The glass is an absolute sibling under the content, never a parent
            of it: a GlassView nested inside another glass effect renders empty
            on iOS 26. Where liquid glass is unavailable the card falls back to
            the flat surface. */}
        {hasGlass ? (
          <GlassView glassEffectStyle="regular" style={[StyleSheet.absoluteFill, glass.shape]} />
        ) : (
          <View style={[StyleSheet.absoluteFill, glass.shape, { backgroundColor: colors.card }]} />
        )}
        <Animated.View style={[StyleSheet.absoluteFill, glass.shape, glass.ring, ring]} />

        <View style={glass.body}>
          <View style={glass.art}>
            <CardMascot
              ref={mascot}
              rig={card.rig}
              size={MASCOT_SIZE}
              state={card.key === 'pain' && selected ? 'sad' : 'idle'}
              // The sore-foot art as drawn: its pained face and ache marks.
              restFace={card.key === 'pain' ? 'pain' : undefined}
              ache={card.key === 'pain'}
              surface={colors.card}
              paused={!selected || !visible}
            />
          </View>
          <Text style={[glass.title, { color: colors.foreground }]}>{title}</Text>
        </View>

        {/* Last child, so it veils the artwork and the label as well as the
            glass. See `scrim` above for why this is not an opacity. */}
        <Animated.View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, glass.shape, { backgroundColor: colors.background }, scrim]}
        />
      </Pressable>
    </Animated.View>
  );
}

/**
 * A card's mascot, still under the plan as well: the overlay is not a route,
 * so Home stays the focused tab under it. Its own component, so the plan's
 * coming and going re-renders the mascot and not the card.
 */
function CardMascot({ paused = false, ...props }: MascotProps) {
  const planOver = usePlanOver();
  return <Mascot {...props} paused={paused || planOver} />;
}

const styles = StyleSheet.create({
  wrap: { gap: CHECK_IN_GAP },
  clip: {
    overflow: 'hidden',
    marginHorizontal: -CLIP_BLEED,
    paddingHorizontal: CLIP_BLEED,
    marginVertical: -CLIP_BLEED_Y,
    paddingVertical: CLIP_BLEED_Y,
  },
  /** The answer over the question while they cross: it is the one that fades. */
  summaryLayer: { zIndex: 2 },
  /** The view on its way out, laid over the place of the one arriving. */
  leaving: { position: 'absolute', top: 0, left: 0, right: 0 },
  veil: {
    position: 'absolute',
    top: -12,
    bottom: -12,
    left: -CLIP_BLEED,
    right: -CLIP_BLEED,
  },
  block: { gap: 16 },
  card: {
    borderRadius: CARD_RADIUS,
    borderCurve: 'continuous',
    padding: CARD_PAD,
    paddingTop: 20,
    gap: 16,
  },
  head: { gap: 6, paddingHorizontal: 2 },
  kicker: fonts.semibold(13, -0.1),
  question: { ...fonts.heavy(22, -0.6), lineHeight: 27 },
  tiles: { flexDirection: 'row', gap: 10 },
  tile: {
    flex: 1,
    borderRadius: TILE_RADIUS,
    borderCurve: 'continuous',
    borderWidth: 2,
  },
  tileBody: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 14,
    paddingHorizontal: 10,
    gap: 4,
  },
  art: { width: 92, height: 92 },
  tileLabel: {
    ...fonts.bold(16, -0.3),
    lineHeight: 20,
    textAlign: 'center',
  },
  /** Top-right, out of the drawing's way. */
  radio: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ack: {
    ...fonts.medium(15),
    lineHeight: 21,
    marginTop: -4,
    paddingHorizontal: 2,
  },
  newRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 12,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  newTile: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newCopy: { flex: 1, gap: 2 },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: CARD_RADIUS,
    borderCurve: 'continuous',
    paddingVertical: 14,
    paddingLeft: 10,
    paddingRight: 16,
  },
  summaryArt: { width: 76, height: 76 },
  summaryCopy: { flex: 1, gap: 3 },
  summaryTitle: fonts.heavy(19, -0.4),
  summaryLine: { ...fonts.medium(14, -0.1), lineHeight: 18 },
  editChip: {
    height: 34,
    paddingHorizontal: 14,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editText: fonts.bold(14, -0.2),
  cancel: { alignSelf: 'center', paddingVertical: 4 },
  cancelText: fonts.semibold(15, -0.2),
  newTitle: fonts.bold(16, -0.3),
  newSub: fonts.medium(14, -0.1),
  sheetRoot: { flex: 1 },
  /** Both panes fill the sheet and are moved by transform alone, so neither can
   * push the other around mid-transition. */
  pane: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 22,
  },
  grabber: { width: 40, height: 5, borderRadius: 3 },
  sheetTitle: {
    ...fonts.heavy(28, -0.7),
    marginTop: 18,
  },
  sheetSub: { ...fonts.regular(16), marginTop: 2 },
  /** Fixed height, because the digits are a SwiftUI host that does not
   * self-size reliably in flex — and because a readout that changed height
   * between "9" and "10" would nudge every word under it. */
  readout: {
    height: 124,
    justifyContent: 'center',
    marginTop: 8,
  },
  bandLabel: fonts.bold(22, -0.4),
  somethingNew: { alignSelf: 'center', paddingVertical: 6 },
  somethingNewText: {
    ...fonts.semibold(14),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  /** Takes the slack, so the wedge sits against the button on a tall phone and
   * gives way before anything else on a short one. */
  scale: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  /** Claims what is left after the readout and the scale, and hands it to the
   * drawing — the same measure-don't-guess the watch-sync step needed. */
  legStage: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 6,
  },
  zoneLine: {
    marginTop: 6,
    ...fonts.medium(13, -0.1),
    textAlign: 'center',
    marginBottom: 12,
  },
  save: { alignSelf: 'stretch' },
});

/** The answer cards, kept as they were before the check-in got its header. */
const glass = StyleSheet.create({
  stage: { height: GLASS_HEIGHT + STAGGER },
  slot: {
    position: 'absolute',
    width: GLASS_WIDTH,
    height: GLASS_HEIGHT,
  },
  slotLeft: { left: 0, top: 0 },
  slotRight: { right: 0, top: STAGGER },
  face: {
    borderRadius: GLASS_RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  /** The glass layer's own shape, matching the card's. */
  shape: {
    borderRadius: GLASS_RADIUS,
    borderCurve: 'continuous',
  },
  ring: {
    borderWidth: 2.5,
  },
  body: {
    height: GLASS_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 6,
  },
  art: { width: MASCOT_SIZE, height: MASCOT_SIZE },
  title: {
    ...fonts.bold(19, -0.3),
    textAlign: 'center',
  },
});
