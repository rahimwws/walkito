import ArrowExpandDiagonal01Icon from '@hugeicons/core-free-icons/ArrowExpandDiagonal01Icon';
import ArrowShrink01Icon from '@hugeicons/core-free-icons/ArrowShrink01Icon';
import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import BandageIcon from '@hugeicons/core-free-icons/BandageIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { after, type LiveActivity } from 'expo-widgets';
import { ClockIcon } from 'phosphor-react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { saveSessionToHealth } from '@/entities/health';
import {
  HEEL_RAISE_IDS,
  PLAN_BLOCKS,
  inSessionPain,
  stepBackAfterSession,
  writeLog,
  exerciseById,
  exerciseByTitle,
  kindFor,
  loadNoteFor,
  movesFor,
  prescriptionFor,
  useProgramState,
  useStreak,
  type Exercise,
  type ProgramDay,
  type Tempo,
} from '@/entities/program';
import { clearBrowsingLapsed, useSessionsLocked } from '@/entities/purchase';
import { fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { clipFor } from '../config/exercise-clips';
import { SessionDoneSheet } from './session-done-sheet';
import { SessionPainSheet } from './session-pain-sheet';
import {
  doseSeconds,
  phaseAt,
  sideAt,
  type Phase,
  type PhaseReading,
  type Side,
  type SideReading,
} from '../model/tempo';
import { SessionTimerActivity, type SessionActivityProps } from './session-activity';

/**
 * What a move gets when the program has nothing to say about how long it takes.
 *
 * It used to be what every move got. The dose belongs to the program and the
 * program now has one, so this is the floor rather than the rule: a move with
 * no prescription at all — the three retest measurements, the barefoot habit —
 * still needs a number, and a minute is the number it has always had.
 */
const SECONDS_PER_MOVE = 60;


/** The demonstration is the screen. It takes as much width as the margins
 * allow, then gives way on short displays so the readout and the transport
 * below it are never the things that get squeezed. */
const CARD_MARGIN = 20;
const CARD_MAX_HEIGHT_FRACTION = 0.44;
const CARD_RADIUS = 32;

/** Big enough to read from where the phone actually is during a session:
 * propped against a wall, several feet away, by someone balancing on one foot
 * who cannot lean in. That is the whole brief for this block of the screen. */
const CLOCK_SIZE = 84;
/** SwiftUI hosts do not self-size reliably inside flex, so the digits get a
 * fixed box to sit in — the same ratio `HeroStat` settled on. */
const CLOCK_BOX = CLOCK_SIZE * 1.14;
/** One second, minus room to land before the next tick arrives. A longer roll
 * would still be moving when the number it is animating to is already stale. */
const CLOCK_ROLL_SECONDS = 0.3;

/** The lane the Continue button keeps for itself under the expanded card. */
const CONTINUE_BLOCK = 92;

/** How long the finished session stays on the Lock Screen. Half a minute reads
 * as the end of something; the four hours the default policy gives reads as a
 * bug, which is what it looked like. */
const FINISHED_LINGER_MS = 30_000;

/** Corner radius the card relaxes to once it is nearly the whole screen — the
 * same curve at 350pt reads far rounder than it does at 150. */
const CARD_RADIUS_OPEN = 40;

/** Long enough to follow the corner travelling, short enough that it never
 * feels like a screen transition. The curve is the app's own decelerate. */
const EXPAND_MS = 420;
const EXPAND_EASING = Easing.bezier(0.23, 1, 0.32, 1);

/** The chip the expand control sits in. White enough to guarantee the black
 * glyph reads over any frame the clip happens to be showing. */
const EXPAND_CHIP = 36;

/** "01:00", counting down. Padded on both halves so the digits never reflow. */
function clock(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * Getting from the name this screen holds back to the catalogue entry behind
 * it is `exerciseByTitle`, in the program entity.
 *
 * Everything reaching the player is a title: `movesFor` returns titles, Home
 * hands over its own task titles, and the clip is keyed by title too. Going
 * back the other way is what lets the player read the dose, the rationale and
 * the cue off the exercise instead of keeping local copies that go stale — the
 * map this replaced still described a "Towel stretch" the program dropped.
 *
 * It used to be a map built here, at module scope, from `exercise.title`. That
 * was correct exactly as long as there was one language: titles are catalogue
 * keys now, resolved when they are read, so a map built at import held English
 * and was being searched with whatever the user had chosen. The entity indexes
 * all three languages instead, which also survives a title that was computed
 * before a language change and handed over afterwards.
 *
 * A title with no entry — the three retest measurements, which are tests and
 * not exercises — still resolves to nothing, and every read below is written
 * to survive that.
 */

/**
 * The three retest measurements, as catalogue keys.
 *
 * They are tests rather than exercises, so the program's own catalogue has no
 * entry for them and `exerciseByTitle` resolves them to nothing — which every
 * read below is already written to survive. The names still have to be read by
 * a person, so they are translated here, the same as any other label this
 * player draws.
 *
 * Held at module scope so the list a checkpoint day plays keeps its identity
 * across renders, like every other list here; resolving it is a `useMemo` on
 * the translator rather than work done on every frame of the countdown.
 */
const RETEST_MOVE_KEYS = [
  'widgets.retestCalfRaises',
  'widgets.retestArchHold',
  'widgets.retestBalance',
] as const satisfies readonly Key[];

/** What the counter line calls each part of a rep. One word each: it is read at
 * two metres by someone already moving, and it changes every three seconds. */
const PHASE_KEY = {
  up: 'widgets.phaseUp',
  hold: 'widgets.phaseHold',
  down: 'widgets.phaseDown',
} as const satisfies Record<Phase, Key>;

/** Which foot, said the way you would say it out loud while balancing. */
const SIDE_KEY = {
  right: 'widgets.sideRight',
  left: 'widgets.sideLeft',
} as const satisfies Record<Side, Key>;

/** The tempo a move runs at, with the reps and sets it runs for. The three
 * travel together because none of them times anything on its own. */
type Cadence = { tempo: Tempo; reps: number; sets: number };

type MovePlan = {
  /** The catalogue entry behind the title, where the title is one. */
  exercise: Exercise | null;
  /** The whole move, in seconds. Always positive. */
  seconds: number;
  /** Set only for a move the program gives a per-rep tempo — in this catalogue,
   * the two heel-raise variants and nothing else. */
  cadence: Cadence | null;
  /**
   * Worked one foot at a time — eleven of the eighteen.
   *
   * The prescribed dose covers both feet together, so the move runs half on one
   * and half on the other. Read from the catalogue, which has carried this flag
   * since the start and had nothing reading it: the player ran the full dose
   * with no mention of feet, which left the user either doing one foot for
   * twice as long as prescribed or splitting it by eye.
   */
  perSide: boolean;
};

/**
 * How long one move runs, and whether it runs in phases.
 *
 * The dose comes from `prescriptionFor`, so a heel raise gets the block's own
 * sets and reps and walks back with the progression offset exactly as every
 * other surface that prints it does. Where there is no dose — the habit row,
 * the retest measurements — the move falls back to the flat minute it has
 * always had, because a made-up length would be worse than an honest default.
 */
function planMove(title: string, blockIndex: number, progressionOffset: number): MovePlan {
  const exercise = exerciseByTitle(title);
  const dose = exercise == null ? null : prescriptionFor(exercise, blockIndex, progressionOffset);
  const seconds = doseSeconds(dose);
  // Gated on the length as well as on the tempo, so the two can never disagree:
  // a dose whose phases add to nothing has no length either, and running it as
  // a tempo move would put a readout at zero over a minute-long countdown.
  const cadence =
    seconds != null && dose?.tempo != null && dose.reps != null
      ? { tempo: dose.tempo, reps: dose.reps, sets: dose.sets }
      : null;
  return {
    exercise,
    // Clamped above zero rather than trusted: the frame callback divides by
    // this, and a move of length nothing would take the playhead to infinity.
    // Whole seconds, because the readout is formatted as two pairs of digits.
    seconds: Math.max(1, Math.round(seconds ?? SECONDS_PER_MOVE)),
    cadence,
    perSide: exercise?.perSide === true,
  };
}

/**
 * The day a block announces its load change on: its first Strength day.
 *
 * The program writes the change into the block table and says it out loud once,
 * on the first day it applies. Searched here rather than imported because the
 * program's own helper for it is internal to that folder; the week is fixed, so
 * the search is fourteen comparisons and never wrong.
 */
function firstStrengthDay(blockIndex: number): number | null {
  const block = PLAN_BLOCKS.find((candidate) => candidate.index === blockIndex);
  if (block == null) return null;
  for (let day = block.startDay; day <= block.endDay; day += 1) {
    if (kindFor(day) === 'strength') return day;
  }
  return null;
}

type Frame = { x: number; y: number; width: number; height: number };

/**
 * One step of a playlist: an exercise and how long to hold it.
 *
 * The seam protocols run through. A protocol is not a prescription — it sets
 * its own dose, so a single-leg hold is forty-five seconds there and whatever
 * the block says in the plan — which is why the length comes in rather than
 * being looked up, and why `perSide` is stated rather than read from the
 * catalogue.
 */
export type PlaylistStep = {
  exerciseId: string;
  seconds: number;
  perSide?: boolean;
};

export type SessionViewProps = {
  day: ProgramDay;
  onBack: () => void;
  /**
   * Run this exact list instead of deriving one from the day.
   *
   * Takes precedence over `moves`. Everything downstream — the countdown, the
   * clip, the foot-switch, the transitions — is the same code the programme
   * uses; only where the list comes from differs.
   */
  playlist?: readonly PlaylistStep[];
  /** One line under the title, set by whatever assembled the playlist. */
  cue?: string;
  /**
   * The moves to run, when they are not the day's own.
   *
   * Home opens this player for a single task off its list, and that task is one
   * exercise rather than a whole session. Overriding the list is the smallest
   * way to say so — the alternative was inventing a fake `ProgramDay` whose
   * kind happened to hold the right three names, which would have made the
   * programme's own data the wrong shape for the sake of one caller.
   */
  moves?: readonly string[];
  /** The last move ran out. Fires once, and not on the way back — leaving early
   * is not finishing. */
  onFinish?: () => void;
};

/**
 * One session, playing.
 *
 * Not a list of what you are about to do — a thing you do. The screen holds one
 * loop of the movement, the time left on it, and the bar that moves you through
 * it, and nothing else: mid-session the user is standing on one foot looking at
 * a phone propped against a wall, and every element that is not the demo or the
 * clock is an element read at two metres and misread.
 *
 * The day's own facts — which day, how long, how many moves — sit in the header
 * next to the back arrow, the way a title does on any pushed screen. They are
 * orientation, not content, and they were already written; they only moved.
 *
 * Expanded, it becomes only the demonstration: the card grows to the full
 * screen and every reading it was sharing space with goes away, leaving one way
 * out at the top and one way on at the bottom. That is the state for the move
 * you have not done before — the one where you need to see the shape of it, not
 * how many seconds are left.
 */

/**
 * The one gate on starting a session.
 *
 * Here rather than at the three screens that open a session, because there is
 * no fourth entry point to forget and no way for two of them to disagree. It
 * only ever closes for one person: somebody whose twelve weeks ran out and who
 * answered the expiry screen with "Not now". They keep every screen that reads
 * their history; this is the single thing that costs something to provide.
 *
 * A wrapper rather than an early return inside the player. The player is a few
 * dozen hooks deep, and returning before them on some renders and after them on
 * others is a hook-order violation — two components is the boring fix.
 *
 * `clearBrowsingLapsed` is the way back. It drops the read-only flag, which
 * flips the guard in the root layout, which mounts the expiry screen with both
 * prices on it — so this panel does not have to duplicate the paywall to lead
 * somewhere.
 */
export function SessionView(props: SessionViewProps) {
  const locked = useSessionsLocked();
  if (!locked) return <SessionRun {...props} />;
  return <SessionLocked onBack={props.onBack} />;
}

function SessionLocked({ onBack }: { onBack: () => void }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const reopen = () => {
    Haptics.selectionAsync();
    // Not a navigation call. Clearing the flag is what makes the expiry screen
    // available again, and the router follows the guard.
    clearBrowsingLapsed();
  };

  return (
    <View style={[lockedStyles.host, { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.back')}
        onPress={onBack}
        hitSlop={12}>
        <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color={meter.ink} strokeWidth={1.8} />
      </Pressable>

      <View style={lockedStyles.middle}>
        <HugeiconsIcon icon={SquareLock02Icon} size={40} color={meter.caption} strokeWidth={1.6} />
        <Text style={[lockedStyles.title, { color: meter.ink }]}>
          {t('widgets.sessionLockedTitle')}
        </Text>
        <Text style={[lockedStyles.body, { color: meter.caption }]}>
          {t('widgets.sessionLockedBody')}
        </Text>
      </View>

      <PrimaryButton label={t('widgets.sessionLockedCta')} onPress={reopen} />
    </View>
  );
}

const lockedStyles = StyleSheet.create({
  host: { flex: 1, paddingHorizontal: 24, gap: 24 },
  middle: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6, textAlign: 'center' },
  body: {
    fontSize: 15,
    fontFamily: fonts.medium,
    letterSpacing: -0.2,
    textAlign: 'center',
    lineHeight: 21,
  },
});

function SessionRun({ day, onBack, moves: override, playlist, cue, onFinish }: SessionViewProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const t = useT();

  /** The offset a flare walked the plan back by. Read through the store rather
   * than once, so a session opened straight off a pain check gets the dose that
   * check just decided on. */
  const { progressionOffset } = useProgramState();

  /** Memoised on the translator, which is itself memoised on the language — so
   * the checkpoint list keeps one identity for the life of a session, which is
   * what `advance` and the reaction keyed on it depend on. */
  const retestMoves = useMemo(() => RETEST_MOVE_KEYS.map((key) => t(key)), [t]);

  const moves = override ?? (day.checkpoint ? retestMoves : movesFor(day));

  /**
   * The whole session, timed.
   *
   * Worked out for every move up front rather than for the one playing, because
   * the frame callback needs the *next* move's length at the instant the
   * current one ends — see `goTo`. Cheap enough to do on any render that
   * changes the list: it is a lookup and some multiplication per move.
   */
  const plan: readonly MovePlan[] = playlist != null
    ? playlist.map((step) => ({
        exercise: exerciseById(step.exerciseId) ?? null,
        // The playlist's own length, clamped for the same reason `planMove`
        // clamps its own: the frame callback divides by this.
        seconds: Math.max(1, Math.round(step.seconds)),
        // No tempo. A protocol is held time, not counted reps, and a readout
        // counting reps over a stretch would be inventing a dose.
        cadence: null,
        perSide: step.perSide === true,
      }))
    : moves.map((title) => planMove(title, day.block, progressionOffset));

  /** When this player mounted, which is when the session began. A ref rather
   * than state: nothing renders from it, and it must survive every re-render
   * the clock causes without becoming one of them. */
  const startedAt = useRef(new Date());

  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  /**
   * Whole seconds into the current move.
   *
   * The one thing sampled off the playhead, and everything the readout shows is
   * derived from it on this thread. Phases are arithmetic over elapsed time, so
   * sampling elapsed time keeps that arithmetic in a pure function that can be
   * tested, rather than in a worklet that can only be watched.
   */
  const [elapsed, setElapsed] = useState(0);
  /**
   * The last move ran out and there is nothing after it.
   *
   * Its own flag rather than `remaining <= 0 && step === moves.length - 1`,
   * which is also true for the moment a finger holds the scrubber at the end
   * of the final move — the session is not over until the reaction that ends
   * it has actually run.
   */
  const [finished, setFinished] = useState(false);

  /** The playhead, 0–1 through the current move. A shared value because the
   * scrubber writes it from a finger at 120Hz and the fill reads it on the same
   * thread; pushing it through state would re-render the video card on every
   * frame of a drag. */
  const progress = useSharedValue(0);

  /** 0 collapsed, 1 full-screen. Drives the card's frame and both sets of
   * chrome off one number, so nothing can arrive out of step with the corner
   * it is supposed to be following. */
  const open = useSharedValue(0);
  const [expanded, setExpanded] = useState(false);
  /** Where the stage sits inside the root, measured — the collapsed card is
   * centred in it, and the animation needs that rect in the same coordinates
   * as the full-screen one. */
  const [stage, setStage] = useState<Frame | null>(null);
  /** This view's own box. See the note where the rects are built. */
  const [box, setBox] = useState<Frame | null>(null);

  const move = moves[step];
  const moveCount = moves.length;
  /** The press that ends the session, which both the label and the colour of
   * the button answer to. */
  const last = step === moves.length - 1;
  const current: MovePlan | null = plan[step] ?? null;
  /** How long the move playing now runs for. */
  const moveSeconds = current?.seconds ?? SECONDS_PER_MOVE;

  /**
   * The plan, reachable from a callback that must not be rebuilt when it
   * changes.
   *
   * `goTo` is the identity the auto-advance reaction is keyed on, and rebuilding
   * that reaction mid-move is how a session skips one. Holding the plan behind a
   * ref keeps `goTo` as stable as it was when every move was a flat minute,
   * while still letting it read the length of the move it is moving to.
   */
  const planRef = useRef(plan);
  planRef.current = plan;

  /**
   * Whether the clip for this move failed to load.
   *
   * Worth saying out loud rather than leaving a blank card: the demonstration
   * is the screen, and a card that silently stays empty reads as the app being
   * broken when the session behind it is perfectly runnable. Reset per move,
   * because the next clip is a different file.
   */
  /** Whether the end-of-session sheet is up. Separate from `finished`, which
   * is about the transport: the clock can be at zero while the sheet has been
   * dismissed, and re-showing it every render would trap the user behind it. */
  const [celebrating, setCelebrating] = useState(false);
  const streak = useStreak();

  const [clipFailed, setClipFailed] = useState(false);
  useEffect(() => setClipFailed(false), [move]);

  /** By catalogue id, never by title: a title is copy and will be reworded,
   * and a renamed exercise quietly losing its demonstration is a bug that looks
   * like nothing at all. Null for the six moves that have no clip yet, which
   * the card below states rather than showing another exercise's video. */
  const clip = clipFor(current?.exercise?.id ?? '');

  const player = useVideoPlayer(clip, (instance) => {
    instance.loop = true;
    // Silent by design: the clip is a diagram that moves. Sound would take the
    // audio session from whatever the user is actually listening to.
    instance.muted = true;
    instance.play();
  });

  /**
   * When the current move runs out, in wall-clock milliseconds. `0` means the
   * deadline is unknown and the next frame must work it out from wherever the
   * playhead is standing.
   */
  const deadline = useSharedValue(0);

  /**
   * The current move's length, in milliseconds, where the UI thread can see it.
   *
   * A shared value rather than a captured number because the frame callback is
   * registered once and reads this every frame: a plain closure over the JS
   * value would still be holding the previous move's length at the instant the
   * new one starts. Seeded from the first move rather than corrected by an
   * effect, for the same reason — the first frame arrives before effects have
   * had a chance to say anything.
   */
  const moveMs = useSharedValue(moveSeconds * 1000);
  useEffect(() => {
    // The length can also change without the step changing — a pain check that
    // walks the progression back re-doses the move that is playing.
    moveMs.value = moveSeconds * 1000;
    // And the deadline standing against the old length has to go with it, or
    // the next frame would measure the time left on a minute against a move
    // that is now four, and land the playhead somewhere it has never been. Set
    // to nothing, it is recomputed from wherever the playhead is standing, so
    // the user keeps the fraction of the move they had got through.
    deadline.value = 0;
  }, [moveMs, moveSeconds, deadline]);

  /**
   * The clock, read off the wall rather than accumulated.
   *
   * This used to add up `timeSincePreviousFrame`, which is correct only while
   * frames keep arriving — and they stop the moment the screen locks. A minute
   * spent doing the exercise with the phone face down advanced the timer by
   * nothing at all, and it picked up where it froze. That was survivable while
   * the session lived only on this screen. It stops being survivable the moment
   * the Lock Screen is showing the same countdown, because ActivityKit is
   * counting against real time and would silently disagree.
   *
   * Deriving from a stored deadline fixes it by construction: however long the
   * app was away, the first frame back computes the truth instead of resuming a
   * stale total. It is also exactly the pair of dates the Live Activity needs,
   * so there is one clock here, not two that have to be kept in step.
   */
  const tick = useFrameCallback(() => {
    'worklet';
    // Nothing to count against. A move of length zero would divide the playhead
    // by nothing; holding still is the one safe thing to do with it.
    if (moveMs.value <= 0) return;
    if (deadline.value === 0) {
      deadline.value = Date.now() + (1 - progress.value) * moveMs.value;
      return;
    }
    progress.value = Math.min(
      Math.max(1 - (deadline.value - Date.now()) / moveMs.value, 0),
      1,
    );
  }, false);

  useEffect(() => {
    // Invalidated on the way down. A deadline that sat still through a pause is
    // a deadline in the past, and resuming on it would snap the move to zero.
    if (!playing) deadline.value = 0;
    tick.setActive(playing);
  }, [tick, playing, deadline]);

  // A listener, not a read of `player.status`: the player is a native object
  // and its status is not React state, so a failure arriving after mount would
  // never re-render anything.
  useEffect(() => {
    const subscription = player.addListener('statusChange', ({ status }) => {
      setClipFailed(status === 'error');
    });
    return () => subscription.remove();
  }, [player]);

  /**
   * The transport, re-asserted on every clip rather than only on the first.
   *
   * `useVideoPlayer`'s setup callback runs once, when the player is created.
   * The session then replaces the source in place as it moves from one exercise
   * to the next, and a replaced item does not carry the state that callback set
   * — so the loop held for the first demonstration and every one after it
   * played through once and froze on its last frame.
   *
   * Cheap to repeat and safe to repeat: all three are idempotent, and keying
   * the effect on the clip is what makes them run at the only moment they
   * matter.
   */
  useEffect(() => {
    player.loop = true;
    // Silent by design: the clip is a diagram that moves. Sound would take the
    // audio session from whatever the user is actually listening to.
    player.muted = true;
    if (playing) player.play();
    else player.pause();
  }, [player, playing, clip]);

  /**
   * Whole seconds only. The playhead moves every frame; the readout must not,
   * or the digits shimmer.
   *
   * Elapsed rather than remaining, now that what is remaining depends on which
   * phase of which rep the second belongs to. Both lengths come off shared
   * values, so this stays one worklet for the life of the session however often
   * the move — and the length of it — changes underneath.
   */
  useAnimatedReaction(
    () => Math.floor(Math.min(Math.max(progress.value, 0), 1) * (moveMs.value / 1000)),
    (seconds, previous) => {
      if (seconds !== previous) runOnJS(setElapsed)(seconds);
    },
  );

  /**
   * Which phase of which rep the move is in, or null where it has no tempo.
   *
   * Derived, not stored: it is a pure function of a second and a dose, and
   * anything derived that is also stored is a second copy that can be wrong.
   */
  const phase: PhaseReading | null =
    current?.cadence != null
      ? phaseAt(elapsed, current.cadence.tempo, current.cadence.reps, current.cadence.sets)
      : null;

  /**
   * Which foot, and how long is left on it.
   *
   * Null for a move done on both feet at once, which is the honest absence: a
   * third "both" reading would put the question into every render path instead
   * of at the one place that knows.
   */
  const side: SideReading | null =
    current?.perSide === true
      ? sideAt(elapsed, moveSeconds, current.cadence?.tempo ?? null)
      : null;

  /** What is left of the move itself, whatever the big number happens to be
   * counting. This is what "the move is over" means, and the only thing that
   * gates Continue. */
  const moveLeft = Math.max(0, moveSeconds - elapsed);

  /**
   * The handover, announced.
   *
   * A label that quietly changes from "Right foot" to "Left foot" is a label
   * nobody reads: the user is balancing with the phone against a wall, looking
   * at the demonstration rather than at the caption. The haptic is what makes
   * the switch an event, and it is the same success notification the end of a
   * session uses, because it means the same thing — that part is finished.
   *
   * Keyed on the side rather than fired from the clock, so it happens exactly
   * once per change however many frames land on the boundary. `undefined` on
   * the first run means a move that starts on the right does not buzz for
   * starting where it was always going to start.
   */
  const announcedSide = useRef<Side | undefined>(undefined);
  useEffect(() => {
    const now = side?.side;
    if (now == null) {
      announcedSide.current = undefined;
      return;
    }
    if (announcedSide.current != null && announcedSide.current !== now) {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    announcedSide.current = now;
  }, [side?.side]);

  /**
   * The big number.
   *
   * Seconds left in the current phase where there is one — three up, two held,
   * three down is a rhythm to move to, and a number counting down 288 would be
   * a number nobody is following. Seconds left in the move where there is not,
   * which is exactly what this readout has always shown.
   */
  const remaining = phase != null ? phase.secondsLeft : moveLeft;

  /**
   * The Lock Screen's copy of this session, if it has one.
   *
   * A ref rather than state: nothing renders off it, and re-rendering the video
   * card because a Live Activity started would be a re-render for nothing.
   */
  const activity = useRef<LiveActivity<SessionActivityProps> | null>(null);
  /** Whether the Lock Screen actually took it. Drives the hint below the
   * transport, which must not promise something the device refused. */
  const [onLockScreen, setOnLockScreen] = useState(false);

  /**
   * The session as two dates and some finished text.
   *
   * Read from `progress` rather than from the once-a-second `remaining`, so the
   * Lock Screen and the screen in your hand start the same move on the same
   * millisecond instead of up to a second apart.
   */
  const activitySnapshot = useCallback(
    (paused: boolean): SessionActivityProps => {
      const now = Date.now();
      // The move, not the phase. `timerInterval` is drawn by the render server
      // from these two dates and nothing pushes it a new pair three seconds
      // later, so a Lock Screen counting reps would spend most of a set wrong.
      const span = moveSeconds * 1000;
      const left = Math.min(Math.max(1 - progress.value, 0), 1) * span;
      return {
        move,
        // Resolved here, on the JS side. The widget body is compiled to a
        // serialized string and reaches iOS with no scope of its own — it
        // cannot import, cannot close over `t`, and could not translate this
        // even if it had the catalogue. Every string it draws has to arrive as
        // a prop, already in the user's language.
        position: t('widgets.sessionPositionLong', { index: step + 1, total: moveCount }),
        // Anchored a whole move behind the end, never after it: SwiftUI traps
        // on an inverted range, and it would do it inside a process we cannot
        // attach a debugger to.
        startedAtMs: now - (span - left),
        endsAtMs: now + left,
        paused,
        frozen: clock(Math.max(0, Math.ceil(left / 1000))),
      };
    },
    // The move's name and the count rather than the list they came from: Home
    // hands over a fresh array literal on every render, and depending on its
    // identity had this callback — and the effect that pushes it to the Lock
    // Screen — turning over on every frame of the countdown.
    [move, moveCount, step, moveSeconds, progress, t],
  );

  /**
   * Take the session off the Lock Screen.
   *
   * With no final state, immediately — walking out of a session is the one case
   * where a countdown left up would be counting toward something abandoned.
   * With one, after `lingerMs`, so the last frame is readable without the pill
   * outliving the interest in it.
   */
  const endActivity = useCallback((final?: SessionActivityProps, lingerMs?: number) => {
    if (final != null && lingerMs != null) {
      activity.current?.end(after(new Date(Date.now() + lingerMs)), final);
    } else {
      activity.current?.end('immediate', final);
    }
    activity.current = null;
    setOnLockScreen(false);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = planRef.current[index];
      if (next == null) return false;
      setStep(index);
      // Stepping back out of the end un-finishes the session, or the readout
      // would keep saying Done over a move that is running again.
      setFinished(false);
      // Written here rather than left to the effect that watches `moveSeconds`:
      // the frame callback reads this on the UI thread and would otherwise
      // measure the new move against the old one's length for as long as it
      // takes React to re-render. The two writes below are what tell it to
      // start measuring, so the length has to be true before them.
      moveMs.value = next.seconds * 1000;
      progress.value = 0;
      deadline.value = 0;
      // The readout opens the next move on its first phase, rather than holding
      // the last one's final number until a frame arrives to correct it.
      setElapsed(0);
      // The loop starts over with the move it is illustrating, rather than
      // being picked up wherever the previous minute happened to leave it.
      player.currentTime = 0;
      return true;
    },
    [player, progress, deadline, moveMs],
  );

  /**
   * The session is over — because the last move ran out, or because it hurt.
   *
   * One path for both, so a session stopped on pain is finished in every sense
   * the app counts: the Live Activity comes down, Health gets its workout, the
   * day is marked done by whoever opened the player. Stopping early is not
   * failing; the only difference is what the closing sheet says.
   */
  const complete = useCallback((early: boolean) => {
    setEndedEarly(early);
    // Nothing after the last move. The clock holds at zero instead of wrapping:
    // a session that quietly restarts is a session you can never finish.
    progress.value = 1;
    deadline.value = 0;
    setPlaying(false);
    setFinished(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // A countdown that reaches zero does not take itself off the Lock Screen —
    // ActivityKit has no idea the session is over.
    //
    // It used to end on the `'default'` policy, which is a four-hour window: a
    // pill frozen at 0:00 sat in the Dynamic Island all afternoon, and the only
    // thing it could tell anyone was that the app had failed to tidy up. A
    // short window instead — long enough that somebody who finished with the
    // phone face-down still sees it, short enough that it is gone before it
    // becomes furniture. The in-app celebration is the acknowledgement now;
    // this is only the echo of it.
    endActivity(activitySnapshot(true), FINISHED_LINGER_MS);
    // Filed in Health here and nowhere else: this is the only branch that means
    // the last move actually ran out. Opening the player writes nothing, and
    // leaving by the back arrow writes nothing — a workout logged for a session
    // somebody walked away from is a lie in the one app they did not choose to
    // be lied to in.
    // The celebration rides the same branch as the Health write and for the
    // same reason: this is the only place that means the last move actually ran
    // out. Leaving by the arrow gets no confetti, which is correct — nothing
    // was finished.
    setCelebrating(true);
    void saveSessionToHealth({
      dayNumber: day.day,
      moves,
      recovery: day.kind === 'recovery',
      startedAt: startedAt.current,
      endedAt: new Date(),
    });
    // Deliberately NOT calling `onFinish` here. Home unmounts this player when
    // it fires, and doing that at the instant the clock hits zero would take
    // the celebration off screen before it was drawn. The sheet calls it on the
    // way out instead.
  }, [progress, deadline, endActivity, activitySnapshot, day, moves]);

  const advance = useCallback(() => {
    if (goTo(step + 1)) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      return;
    }
    complete(false);
  }, [goTo, step, complete]);

  /** The mid-session "it hurts". Paused while the question is open — nobody
   * should be counting reps while deciding how much something hurts. */
  const [askingPain, setAskingPain] = useState(false);
  const [endedEarly, setEndedEarly] = useState(false);
  /** Shown for a moment under the header after a report below the stop line. */
  const [carryOn, setCarryOn] = useState(false);
  const wasPlaying = useRef(false);

  const reportPain = useCallback(
    (score: number) => {
      setAskingPain(false);
      const outcome = inSessionPain(score, progressionOffset);
      if (!outcome.stop) {
        // Discomfort is allowed to be part of this. Back to where they were.
        setCarryOn(true);
        if (wasPlaying.current) setPlaying(true);
        return;
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      // Tomorrow really is a step back: the offset is stored, not just said.
      stepBackAfterSession();
      writeLog(day.day, { sessionEndedEarly: true });
      complete(true);
    },
    [progressionOffset, day.day, complete],
  );

  /**
   * The move running out, from either direction.
   *
   * Scrubbing to the end and letting the minute elapse are the same event, so
   * they are one reaction rather than two code paths that have to agree. It
   * waits for the finger to leave — advancing mid-drag would pull the screen
   * out from under a gesture that is still going.
   */
  useAnimatedReaction(
    () => progress.value >= 1 && open.value < 0.5,
    (done, was) => {
      if (done && !was) runOnJS(advance)();
    },
    [advance],
  );

  const leave = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Left running, a muted loop and a frame callback would keep burning
    // through a screen nobody is looking at.
    setPlaying(false);
    // Immediately, not on the default policy: walking out of a session is the
    // one case where a countdown left on the Lock Screen would be counting
    // toward something the user has already abandoned. This view stays mounted
    // behind the departing pane, so nothing else would have ended it.
    endActivity();
    onBack();
  }, [onBack, endActivity]);

  /**
   * The session, handed to the Lock Screen for the length of its run.
   *
   * Mount and unmount only. The pane is keyed on the run counter, so every
   * "Start" is a fresh mount and every activity belongs to exactly one session.
   */
  useEffect(() => {
    // The Lock Screen outlives the process. A crash or a force-quit mid-session
    // leaves a countdown running against a session that no longer exists, so
    // the first thing a new one does is clear the field.
    for (const orphan of SessionTimerActivity.getInstances()) orphan.end('immediate');

    try {
      activity.current = SessionTimerActivity.start(activitySnapshot(false));
      setOnLockScreen(true);
    } catch (error) {
      // Turned off for this app in Settings, or the device is already at its
      // limit. The session itself is unaffected — only the Lock Screen misses
      // out, and the hint that promises it stays hidden.
      //
      // Reported rather than swallowed. A silent catch here cost real debugging
      // time: with the Lock Screen blank there is no way to tell a refused
      // activity from one that started and then failed to draw, and those have
      // nothing in common as fixes.
      console.warn('[session] Live Activity did not start:', error);
      activity.current = null;
      setOnLockScreen(false);
    }

    return () => {
      activity.current?.end('immediate');
      activity.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Pause, resume, and the change of move.
   *
   * Three updates for a whole session, because the seconds are not pushed —
   * `timerInterval` is drawn from a pair of dates by the render server, so the
   * only things worth sending are the facts that change which dates apply.
   */
  useEffect(() => {
    if (activity.current == null) return;
    activity.current.update(activitySnapshot(!playing));
  }, [step, playing, activitySnapshot]);

  const setOpen = useCallback(
    (next: boolean) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setExpanded(next);
      open.value = withTiming(next ? 1 : 0, {
        duration: EXPAND_MS,
        easing: EXPAND_EASING,
        reduceMotion: ReduceMotion.System,
      });
    },
    [open],
  );

  // The overlay this view sits inside already pads for the notch, so every
  // rect below is measured against *this* view rather than the window. Reading
  // the screen's height here is what put the expanded card a safe area too low
  // and ran its bottom edge underneath the Continue button.
  const boxWidth = box?.width ?? width;
  const boxHeight = box?.height ?? height;

  const cardSize = Math.min(boxWidth - CARD_MARGIN * 2, boxHeight * CARD_MAX_HEIGHT_FRACTION);
  const floor = Math.max(insets.bottom, CARD_MARGIN);

  /**
   * The full-screen rect: from the very top down to the Continue button.
   *
   * It used to stop short at the top as well, to leave a lane for a collapse
   * chip that sat above it. The chip is on the video now, so that lane was an
   * empty band of background — and a "full screen" that begins an inch down
   * reads as a card that failed to finish opening. The bottom still stops
   * short, because the button below it is a real object in the layout rather
   * than an overlay.
   */
  const full: Frame = {
    x: CARD_MARGIN,
    y: 0,
    width: boxWidth - CARD_MARGIN * 2,
    height: Math.max(boxHeight - floor - CONTINUE_BLOCK, cardSize),
  };

  /** The resting rect, centred in whatever the flex layout left the stage. */
  const rest: Frame | null =
    stage == null
      ? null
      : {
          x: stage.x + (stage.width - cardSize) / 2,
          y: stage.y + (stage.height - cardSize) / 2,
          width: cardSize,
          height: cardSize,
        };

  const cardStyle = useAnimatedStyle(() => {
    if (rest == null) return { opacity: 0 };
    // Named `openness` rather than `t`, which is the translator in every file
    // now. `progress` — the name the same rename took elsewhere — is already
    // the playhead in this component, so the two would have shadowed.
    const openness = open.value;
    return {
      opacity: 1,
      left: interpolate(openness, [0, 1], [rest.x, full.x]),
      top: interpolate(openness, [0, 1], [rest.y, full.y]),
      width: interpolate(openness, [0, 1], [rest.width, full.width]),
      height: interpolate(openness, [0, 1], [rest.height, full.height]),
      borderRadius: interpolate(openness, [0, 1], [CARD_RADIUS, CARD_RADIUS_OPEN]),
    };
  });

  /**
   * The move is done and Continue can be pressed. Expanded, nothing advances
   * on its own — the reaction above stands down — so this is the only way on.
   *
   * Gated on what is left of the *move*, not on the big number: on a tempo move
   * the big number is a three-second phase, and it reaching one would open the
   * button thirty-five reps early.
   */
  const ready = moveLeft <= 0;

  /**
   * The line under the move's name: where you are, or that you are done.
   *
   * On a tempo move it is which part of which rep — the phase and the rep
   * counter on one line, joined rather than stacked, because a second line here
   * is a second element and this slot is one. Uppercased by the style it
   * already had, which is why the words are one syllable each.
   *
   * Otherwise it is the position in the session, and null for a single-move run
   * that is still going. Home opens this player for one task off its list, and
   * "Exercise 1/1" is a counter counting itself — it answers a question nobody
   * asked and reads as a bug in the numbering. The end of the session still
   * earns the slot, because "Done." is the one thing that line has to say that
   * the rest of the screen does not.
   *
   * Dropping the row hands its height back to the stage above, which grows and
   * re-centres the demonstration in it. That is the same slack the Live
   * Activity hint below already takes and gives back depending on whether the
   * device accepted it, so it is behaviour this column is built for rather
   * than a new way for the layout to move.
   */
  /**
   * The foot, translated once, because every shape of the line below either
   * leads with it or leaves it out.
   *
   * The line used to be assembled from pieces here and joined with middots. It
   * is whole templates in the catalogue now: the foot leads in English, and
   * nothing about that order is a fact other languages have to inherit.
   */
  const sideText = side == null ? null : t(SIDE_KEY[side.side]);
  const index = step + 1;

  const position: { text: string; spoken: string } | null = finished
    ? { text: t('widgets.sessionDone'), spoken: t('widgets.sessionDoneSpoken') }
    : phase != null && current?.cadence != null
      ? {
          // The foot leads. It is an instruction — something to act on — where
          // the rep counter is only context, and on a per-side move getting the
          // foot wrong wastes the whole set.
          text:
            sideText == null
              ? t('widgets.sessionRepLine', {
                  phase: t(PHASE_KEY[phase.phase]),
                  rep: phase.rep,
                  reps: current.cadence.reps,
                })
              : t('widgets.sessionRepLineSided', {
                  side: sideText,
                  phase: t(PHASE_KEY[phase.phase]),
                  rep: phase.rep,
                  reps: current.cadence.reps,
                }),
          // Spoken as a sentence rather than as the line: a middot is read out
          // as nothing at all, which leaves "up rep four of twelve".
          spoken:
            sideText == null
              ? t('widgets.sessionRepSpoken', {
                  phase: t(PHASE_KEY[phase.phase]),
                  rep: phase.rep,
                  reps: current.cadence.reps,
                })
              : t('widgets.sessionRepSpokenSided', {
                  side: sideText,
                  phase: t(PHASE_KEY[phase.phase]),
                  rep: phase.rep,
                  reps: current.cadence.reps,
                }),
        }
      : sideText != null
        ? {
            // A per-side move with no tempo — a stretch, a hold. The foot
            // leads, and the position in the session follows it where there is
            // one. Showing the foot *instead* of the counter dropped it from
            // eleven of the eighteen exercises, which is most of a session
            // spent unable to tell how much of it is left.
            text:
              moveCount > 1
                ? t('widgets.sessionPositionShortSided', { side: sideText, index, total: moveCount })
                : sideText,
            spoken:
              moveCount > 1
                ? t('widgets.sessionPositionLongSided', { side: sideText, index, total: moveCount })
                : sideText,
          }
        : moveCount > 1
          ? {
              text: t('widgets.sessionPositionShort', { index, total: moveCount }),
              spoken: t('widgets.sessionPositionLong', { index, total: moveCount }),
            }
          : null;

  /**
   * Whether this is the day the program announces a change of load.
   *
   * The note belongs to the heel raise and to the first Strength day of a block
   * that re-doses it — say it on the recovery day three days later and it is
   * advice about an exercise the user is not doing.
   */
  const loadNote =
    current?.exercise != null &&
    (HEEL_RAISE_IDS as readonly string[]).includes(current.exercise.id) &&
    day.kind === 'strength' &&
    day.day === firstStrengthDay(day.block)
      ? loadNoteFor(day.block)
      : null;

  /**
   * The move, said in full.
   *
   * Why it is in the session and the one thing most often got wrong, both taken
   * from the catalogue entry rather than from a copy kept here — a local copy is
   * how this screen ended up describing exercises the program had already
   * dropped. Spoken only: see the note where it is attached.
   */
  // `cue` first when a playlist set one: it is the intent for the whole run —
  // "this is relief, not training" — and belongs in front of the reason for
  // the individual move rather than trailing it.
  const spokenMove = [cue, move, current?.exercise?.rationale, current?.exercise?.cue, loadNote]
    .filter((line): line is string => line != null && line.length > 0)
    // The catalogue writes its lines as finished sentences and the title is not
    // one, so each piece is given the full stop it is missing rather than a
    // separator being wedged between them all.
    .map((line) => (line.endsWith('.') ? line : `${line}.`))
    .join(' ');

  /**
   * The one control at the bottom of this screen, in both states.
   *
   * Defined once rather than written twice. Collapsed it sits in the column;
   * expanded it sits on the video — but it is the same button doing the same
   * job, and two copies of it is how the collapsed state ended up still showing
   * the old three-icon transport long after the button had replaced it
   * everywhere else.
   */
  const ctaButton = (
    <PrimaryButton
      // Green only on the last one. The single colour change in the whole
      // screen, spent on the press that ends the session — a button that looks
      // the same for move one and move five gives no sense of arriving
      // anywhere.
      tint={last ? { fill: meter.positive, label: primaryButton.dark.label } : undefined}
      // The clock lives in the button rather than somewhere else on the screen.
      // Reading the time off the thing you are waiting to press is the plainest
      // way to say why it cannot be pressed yet — which is why it counts the
      // move down and not the phase. A number that restarts at three every
      // three seconds says nothing about when the button opens.
      //
      // "Finish" on the last one: pressing Continue for the final time and
      // having the session simply stop is the moment this screen most needs to
      // not feel like a bug.
      label={
        ready
          ? last
            ? t('widgets.sessionFinish')
            : t('widgets.sessionContinue')
          : clock(moveLeft)
      }
      disabled={!ready}
      onPress={() => {
        setPlaying(true);
        advance();
      }}
    />
  );

  /** The readings, which the expanded state exists to get rid of. */
  const chromeStyle = useAnimatedStyle(() => ({ opacity: 1 - open.value }));
  /** Exit and Continue, which only the expanded state has. */
  const fullStyle = useAnimatedStyle(() => ({ opacity: open.value }));
  /** The expand control itself goes with the chrome — expanded, Exit is the
   * way out and a second control pointing the other way is just clutter. */
  const expandStyle = useAnimatedStyle(() => ({ opacity: 1 - open.value }));

  return (
    <View style={styles.root} onLayout={(event) => setBox(event.nativeEvent.layout)}>
      <Animated.View
        style={[styles.column, { paddingBottom: floor }, chromeStyle]}
        pointerEvents={expanded ? 'none' : 'auto'}>
        <View style={styles.header}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            onPress={leave}
            hitSlop={12}
            style={({ pressed }) => pressed && { opacity: 0.5 }}>
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={26}
              color={colors.foreground}
              strokeWidth={2}
            />
          </Pressable>

          {/* The way to say it hurts, opposite the way out. Always there rather
              than behind a menu: the moment it is needed is the moment nobody
              goes looking for it. Not on a finished session. */}
          {!finished && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('widgets.painButton')}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                wasPlaying.current = playing;
                setPlaying(false);
                setCarryOn(false);
                setAskingPain(true);
              }}
              hitSlop={12}
              style={({ pressed }) => [styles.painButton, pressed && { opacity: 0.5 }]}>
              <HugeiconsIcon icon={BandageIcon} size={24} color={colors.foreground} strokeWidth={1.8} />
            </Pressable>
          )}

          {/* Centred on the screen rather than in what the arrow leaves over, so
              it lands where a navigation title lands. Inert: it is a label. */}
          <View pointerEvents="none" style={styles.headerTitle}>
            <Text style={[styles.meta, { color: meter.caption }]}>
              {t('session.day', { day: day.day })}
            </Text>
            <View style={[styles.dot, { backgroundColor: meter.unit }]} />
            <ClockIcon size={16} weight="fill" color={meter.unit} />
            <Text style={[styles.meta, { color: meter.caption }]}>
              {t('session.minutes', { count: day.minutes })}
            </Text>
            <View style={[styles.dot, { backgroundColor: meter.unit }]} />
            <Text style={[styles.meta, { color: meter.caption }]}>
              {t('session.moveCount', { count: moves.length })}
            </Text>
          </View>
        </View>

        {carryOn && (
          <Text style={[styles.carryOn, { color: meter.caption }]}>{t('widgets.painCarryOn')}</Text>
        )}

        {/* The card is drawn over this, not in it — it has to travel to a rect
            this column does not contain. What stays here is the space it
            occupies at rest, which is also how its resting rect is measured. */}
        <View
          style={styles.stage}
          onLayout={(event) => setStage(event.nativeEvent.layout)}
        />

        <View style={styles.readout}>
          {/* The rolling treatment the rest of the app uses for a figure that
              changes. It earns it here more than anywhere: the digits are the
              one thing on screen that is moving, and a number that swaps
              silently reads as a redraw rather than as time passing.

              That host offers nothing to read, either, which is why the label
              is on the wrapper. The `timer` role is what tells VoiceOver this
              is a value that keeps moving and has to be polled, not read once. */}
          <View
            accessible
            accessibilityRole="timer"
            accessibilityLabel={t('session.secondsLeftA11y', { count: remaining })}
            style={styles.clockBox}>
            <AnimatedNumber
              text={clock(remaining)}
              value={remaining}
              color={colors.foreground}
              fontSize={CLOCK_SIZE}
              fontFamily={fonts.heavy}
              weight="heavy"
              duration={CLOCK_ROLL_SECONDS}
            />
          </View>
          {/* The name is all the screen has room to show. Why this move is in
              the session, the cue for it, and the load note on the day the load
              changes all ride along with it here, because there is nowhere
              visible to put any of them that is not a new element — see the
              note on `spokenMove`. */}
          <Text
            accessibilityLabel={spokenMove}
            style={[styles.move, { color: colors.foreground }]}
            numberOfLines={1}>
            {move}
          </Text>
          {/* "Up · Rep 4 of 12" while a tempo move is running, "Exercise 3/3"
              where there is no tempo to report, and once the session is over
              the same slot says so — the same words, not a second element that
              appears at the end. Spoken, both are said as sentences rather than
              read as "one slash three" or as a floating dot. See `position`. */}
          {position != null && (
            <Text
              accessibilityLabel={position.spoken}
              style={[styles.counter, { color: meter.label }]}>
              {position.text}
            </Text>
          )}
        </View>

        {/* The whole point of the Live Activity, said once where it is
            actionable. Gated on the activity having actually started: an
            unconditional line here would be telling someone who has Live
            Activities switched off to go and stare at a Lock Screen that will
            stay blank. */}
        {onLockScreen && (
          <View style={styles.hint}>
            <HugeiconsIcon
              icon={SquareLock02Icon}
              size={15}
              color={meter.unit}
              strokeWidth={2}
            />
            <Text style={[styles.hintText, { color: meter.unit }]}>
              {t('widgets.lockScreenHint')}
            </Text>
          </View>
        )}

        {/* Where the three-icon transport used to be. A scrubber offers four
            answers — back, pause, forward, drag — to a screen that only ever
            has one thing to do next, and the icon that meant "next" was doing
            the work of a Continue button while looking like a skip. */}
        <View style={styles.transport}>{ctaButton}</View>
      </Animated.View>

      {/* Absolute, so one interpolation carries it from the stage to the whole
          screen. Positioned rather than scaled: a scaled video is a stretched
          video, and a scaled corner radius is the wrong radius all the way. */}
      <Animated.View
        style={[styles.card, { backgroundColor: colors.card }, cardStyle]}>
        <VideoView
          style={styles.video}
          player={player}
          nativeControls={false}
          // Cover, not contain: the clip is 16:9 and the card is square, and
          // a letterboxed demo inside a rounded card reads as a bug. The
          // subject is centred in frame, so the crop takes only backdrop.
          contentFit="cover"
        />

        {/* Over the player, not instead of it: the card keeps its size and its
            corner, and the line sits in the space the clip would have filled. */}
        {clipFailed && (
          <View style={styles.clipFallback} pointerEvents="none">
            <Text style={[styles.clipFallbackText, { color: meter.caption }]}>
              {t('widgets.clipFailed')}
            </Text>
          </View>
        )}

        {/* Black on white, because the clip behind it is a pale studio render
            and a white glyph would vanish into it. The chip is what makes that
            safe on the frames where it is not — it carries its own background
            rather than trusting the video. */}
        <Animated.View style={[styles.expand, expandStyle]} pointerEvents={expanded ? 'none' : 'auto'}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('widgets.expandDemo')}
            onPress={() => setOpen(true)}
            hitSlop={10}
            style={({ pressed }) => [styles.chip, pressed && { opacity: 0.7 }]}>
            <HugeiconsIcon
              icon={ArrowExpandDiagonal01Icon}
              size={19}
              color="#111114"
              strokeWidth={2.2}
            />
          </Pressable>
        </Animated.View>

        {/* The upsize control's pair, in the same chip, the same weight and —
            deliberately — the same seat. One takes the demonstration
            full-screen and this one gives it back, so they are the same button
            reversed; moving the return trip to a different corner made it read
            as a way out of the session rather than out of the size. They
            crossfade in place. */}
        <Animated.View
          style={[styles.expand, fullStyle]}
          pointerEvents={expanded ? 'auto' : 'none'}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('widgets.collapseDemo')}
            onPress={() => setOpen(false)}
            hitSlop={10}
            style={({ pressed }) => [styles.chip, pressed && { opacity: 0.7 }]}>
            <HugeiconsIcon
              icon={ArrowShrink01Icon}
              size={19}
              color="#111114"
              strokeWidth={2.2}
            />
          </Pressable>
        </Animated.View>
      </Animated.View>

      {/* Under the card, in the same seat it holds collapsed, at the same size.
          Laid over the video instead it became part of the demonstration —
          something to look at rather than the one thing to press — and it
          covered the feet, which on half of these exercises is the part being
          demonstrated. */}
      <Animated.View
        style={[styles.continueRow, { bottom: floor }, fullStyle]}
        pointerEvents={expanded ? 'auto' : 'none'}>
        {ctaButton}
      </Animated.View>

      <SessionPainSheet
        visible={askingPain}
        onPick={reportPain}
        onCancel={() => {
          setAskingPain(false);
          if (wasPlaying.current) setPlaying(true);
        }}
      />

      <SessionDoneSheet
        visible={celebrating}
        early={endedEarly}
        streak={streak.current}
        moves={moveCount}
        onClose={() => {
          setCelebrating(false);
          onFinish?.();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  column: {
    flex: 1,
  },
  header: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: CARD_MARGIN,
  },
  painButton: {
    position: 'absolute',
    right: CARD_MARGIN,
    zIndex: 1,
  },
  carryOn: {
    fontSize: 14,
    fontFamily: fonts.regular,
    textAlign: 'center',
    paddingHorizontal: CARD_MARGIN,
  },
  headerTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  meta: {
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
  },
  stage: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    borderCurve: 'continuous',
    // The player is a native view. Nothing clips it but an ancestor that says
    // so — a radius on the VideoView alone leaves square corners on iOS.
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
  clipFallback: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  clipFallbackText: {
    fontSize: 15,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
  expand: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  chip: {
    width: EXPAND_CHIP,
    height: EXPAND_CHIP,
    borderRadius: EXPAND_CHIP / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
  readout: {
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: 22,
  },
  clockBox: {
    height: CLOCK_BOX,
    justifyContent: 'center',
    // Wraps the host rather than stretching it, so the digits stay hard left
    // against the margin the name and the counter below them also use.
    alignItems: 'flex-start',
  },
  move: {
    fontSize: 24,
    fontFamily: fonts.semibold,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  counter: {
    fontSize: 15,
    fontFamily: fonts.semibold,
    letterSpacing: 0.7,
    textTransform: 'uppercase',
    marginTop: 6,
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: CARD_MARGIN,
    paddingBottom: 12,
  },
  hintText: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  transport: {
    paddingHorizontal: CARD_MARGIN,
  },
  continueRow: {
    position: 'absolute',
    left: CARD_MARGIN,
    right: CARD_MARGIN,
  },
});
