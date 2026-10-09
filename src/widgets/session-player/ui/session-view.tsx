import ArrowExpandDiagonal01Icon from '@hugeicons/core-free-icons/ArrowExpandDiagonal01Icon';
import ArrowShrink01Icon from '@hugeicons/core-free-icons/ArrowShrink01Icon';
import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import Backpack03Icon from '@hugeicons/core-free-icons/Backpack03Icon';
import BandageIcon from '@hugeicons/core-free-icons/BandageIcon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import ReplayIcon from '@hugeicons/core-free-icons/ReplayIcon';
import PauseIcon from '@hugeicons/core-free-icons/PauseIcon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import VolumeHighIcon from '@hugeicons/core-free-icons/VolumeHighIcon';
import VolumeOffIcon from '@hugeicons/core-free-icons/VolumeOffIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import * as Haptics from 'expo-haptics';
import { useVideoPlayer, VideoView } from 'expo-video';
import { after, type LiveActivity } from 'expo-widgets';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { saveSessionToHealth } from '@/entities/health';
import {
  HEEL_RAISE_IDS,
  PLAN_BLOCKS,
  abandonSession,
  beginSession,
  inSessionPain,
  markCantDo,
  noteInSessionPain,
  planMeta,
  swapFor,
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
  type CantDoReason,
  type Tempo,
} from '@/entities/program';
import { useIntake } from '@/entities/profile';
import { clearBrowsingLapsed, useSessionsLocked } from '@/entities/purchase';
import { PRIMARY, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { setSoundPrefs, useSoundPrefs } from '@/shared/lib/sound';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { holdGlowStill } from '@/shared/ui/glow';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { clipFor } from '../config/exercise-clips';
import { mirroredFor } from '../model/mirror';
import { CountInOverlay } from './count-in-overlay';
import { SessionDoneSheet } from './session-done-sheet';
import { SessionPainSheet } from './session-pain-sheet';
import { CantDoSheet, PainRuleSheet } from './session-sheets';
import { playTempoCue, preloadTempoSounds } from '../model/tempo-sound';
import { hasInstruction, instructionSpeaking, playInstruction, stopInstruction } from '../model/exercise-voice';
import { clearResume, readResume, writeResume } from '../model/session-resume';
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
 * no prescription at all — the barefoot habit — still needs a number, and a
 * minute is the number it has always had.
 */
const SECONDS_PER_MOVE = 60;

/** The row the back arrow and the pain button sit in. Tall enough for the
 * centred two-line title: the day, then its length and its moves. */
const HEADER_HEIGHT = 48;

/** The side margin of the header and of everything text-shaped below it. */
const SIDE = 20;

/** One header control's box. A fixed square rather than whatever the glyph
 * measures, so the tap target is the same on every control and the title can
 * be inset by an exact amount. */
const HEADER_BUTTON = 36;

/** Three controls sit on the right: sound, the pain rule and "it hurts". */
const HEADER_ACTIONS = 3;

/**
 * How far the centred title keeps from each edge.
 *
 * The same on both sides, or it would not be centred: the right-hand group is
 * the wider of the two, so it sets the inset for the left as well. The back
 * arrow and the controls can therefore never run under the words.
 */
const TITLE_INSET = SIDE - 8 + HEADER_BUTTON * HEADER_ACTIONS + 4;

/** The segmented bar under the header: one segment per move. */
const SEGMENT_HEIGHT = 4;
const SEGMENT_GAP = 4;
/** The bar with the air above and below it. The count-in begins under it, so
 * where the session stands stays in view while it counts. */
const PROGRESS_BLOCK = 4 + SEGMENT_HEIGHT + 12;

/**
 * The stage: a full-width panel in the clips' own studio colour, with the
 * upright clip contained inside it.
 *
 * It used to be a 9:16 card floating in the middle of the page, which on a
 * phone is a narrow, rounded slab with a lot of dark either side of it — read
 * as an odd card rather than as the screen. The panel spans the width instead,
 * and the clip's backdrop is the panel's colour, so the bands either side of
 * the body are not bars but more of the same studio.
 */
const STAGE_MARGIN = 12;
const STAGE_RADIUS = 28;

/** The studio backdrop the clips are filmed on, so a clip fitted inside the
 * stage with room to spare blends into it rather than sitting on bars. */
const CLIP_BACKDROP = '#ECF0F1';

/** The clips are filmed upright, 9:16. */
const CLIP_SHAPE = 9 / 16;

/** How far into the clip its edge melts into the panel. */
const EDGE_FADE = 28;

/** One side of the clip, faded from the panel colour to nothing. */
function EdgeFade({ side }: { side: 'left' | 'right' }) {
  const id = `edge-${side}`;
  return (
    <View style={[styles.edgeFade, side === 'left' ? { left: 0 } : { right: 0 }]}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id={id} x1={side === 'left' ? '0' : '1'} y1="0" x2={side === 'left' ? '1' : '0'} y2="0">
            <Stop offset="0" stopColor={CLIP_BACKDROP} stopOpacity={1} />
            <Stop offset="1" stopColor={CLIP_BACKDROP} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}

/** Readable from where the phone actually is during a session — propped
 * against a wall a couple of metres away — and no longer the biggest thing on
 * the screen. The demonstration is. */
const CLOCK_SIZE = 64;
/** SwiftUI hosts do not self-size reliably inside flex, so the digits get a
 * fixed box to sit in — the same ratio `HeroStat` settled on. */
const CLOCK_BOX = CLOCK_SIZE * 1.14;
/** One second, minus room to land before the next tick arrives. A longer roll
 * would still be moving when the number it is animating to is already stale. */
const CLOCK_ROLL_SECONDS = 0.3;

/** The lane the button keeps for itself under the expanded stage. */
const CONTINUE_BLOCK = 92;

/** How long the finished session stays on the Lock Screen. Half a minute reads
 * as the end of something; the four hours the default policy gives reads as a
 * bug, which is what it looked like. */
const FINISHED_LINGER_MS = 30_000;

/** Corner radius the stage relaxes to once it is nearly the whole screen — the
 * same curve over 700pt reads tighter than it does over 400. */
const STAGE_RADIUS_OPEN = 34;

/** Long enough to follow the corner travelling, short enough that it never
 * feels like a screen transition. The curve is the app's own decelerate. */
const EXPAND_MS = 420;
const EXPAND_EASING = Easing.bezier(0.23, 1, 0.32, 1);

/** The chip the expand control sits in. White enough to guarantee the black
 * glyph reads over any frame the clip happens to be showing. */
const EXPAND_CHIP = 36;

/** The text chips on the stage — position, foot, and the time when expanded. */
const STAGE_CHIP = 28;
/** Over the studio backdrop, which is light in both schemes, so the chips are
 * drawn in the light scheme's colours whatever the app is in. */
const CHIP_FILL = 'rgba(255,255,255,0.92)';
const CHIP_INK = palette.light.foreground;

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
 * A title with no entry still resolves to nothing, and every read below is
 * written to survive that.
 *
 * The retest used to run through this player too, as three "moves" with no
 * catalogue entry and a numbers sheet at the end. It has a flow of its own now
 * — timers that fit a measurement, results that fit a test day — and this
 * player is sessions only.
 */

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
  /** Heel raises at the top of the calf chain: load with a backpack. */
  addWeight?: boolean;
};

/** Moves at least this long hear their instruction a second time, halfway. */
const REPEAT_FROM_SECONDS = 40;

/** Seen the pain rule once — the first session shows it before it starts. */
const PAIN_RULE_SEEN_KEY = 'player/pain-rule-seen';

/** How often the countdown is re-read off the wall clock. Four times a second
 * is finer than the whole-second readout needs, and nothing on screen follows
 * the playhead continuously any more. */
const TICK_MS = 250;

/**
 * How long one move runs, and whether it runs in phases.
 *
 * The dose comes from `prescriptionFor`, so a heel raise gets the block's own
 * sets and reps and walks back with the progression offset exactly as every
 * other surface that prints it does. Where there is no dose — the habit row —
 * the move falls back to the flat minute it has always had, because a made-up
 * length would be worse than an honest default.
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
  /**
   * Counted reps at a tempo, for the weekly plan's doses. A protocol leaves it
   * out — held time, not counted reps.
   */
  cadence?: Cadence;
  /** The plan's dose asks for weight on top — shown as the backpack line. */
  addWeight?: boolean;
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
  /** The header's name for the run, when it is not a plan day: a routine
   * from Quick is "After a run", not "Day 21". */
  title?: string;
  /**
   * A routine that stays free after access ends — the morning stretch, which
   * the paywall promises (`offer.freeLine`). It plays while the rest is locked.
   */
  free?: boolean;
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
  /**
   * Ask "Could you have done 2 more good reps?" in the closing sheet. On for
   * every session — Plan, Home's tasks, the Library — and never after a session
   * stopped on pain, which already said how it went.
   */
  feedback?: boolean;
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
 * The day's own facts — which day, how long, how many moves — are the
 * header's centred title, the way a title sits on any pushed screen, with a
 * segmented bar under it for where the session stands. They are orientation,
 * not content.
 *
 * Expanded, it becomes only the demonstration: the stage grows to the full
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
 * only ever closes for one person: somebody whose paid access ran out and who
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
  if (!locked || props.free === true) return <SessionRun {...props} />;
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
  title: { ...fonts.heavy(24, -0.6), textAlign: 'center' },
  body: {
    ...fonts.medium(15, -0.2),
    textAlign: 'center',
    lineHeight: 21,
  },
});

function SessionRun({
  day,
  onBack,
  moves: override,
  playlist,
  cue,
  title,
  onFinish,
  feedback = true,
}: SessionViewProps) {
  // A fresh record for this run: nothing the last session said carries over.
  const [sessionToken] = useState(() => beginSession());
  // And nothing this run says outlives it. A host that records the session
  // has done so by the time the player goes; one that did not — the back
  // arrow, a task that did not finish Home's list, the relief moves — leaves
  // notes the next record written would otherwise take as its own.
  useEffect(() => () => abandonSession(sessionToken), [sessionToken]);
  // Left sore foot: the clips flipped to match. See `mirroredFor`.
  const mirrored = mirroredFor(useIntake()?.side);
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const t = useT();

  /**
   * The session was opened. Only the programme's own days: a single task run
   * off Home's list, or a Quick protocol, is not a session of the plan and
   * would make "started but not completed" meaningless.
   */
  useEffect(() => {
    if (override != null || playlist != null) return;
    track('session_started', {
      day: day.day,
      block: day.block,
      kind: day.kind,
      checkpoint: day.checkpoint,
    });
    // Once per mount; the caller remounts the player for every start.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** The offset a flare walked the plan back by. Read through the store rather
   * than once, so a session opened straight off a pain check gets the dose that
   * check just decided on. */
  const { progressionOffset } = useProgramState();

  // A playlist names its own moves. Reading the day's here put the day's
  // titles over a routine's clips, and ran out before the routine did.
  const moves =
    playlist != null
      ? playlist.map((entry) => exerciseById(entry.exerciseId).title)
      : (override ?? movesFor(day));

  /**
   * The whole session, timed.
   *
   * Worked out for every move up front rather than for the one playing, because
   * the frame callback needs the *next* move's length at the instant the
   * current one ends — see `goTo`. Cheap enough to do on any render that
   * changes the list: it is a lookup and some multiplication per move.
   */
  /**
   * Moves swapped mid-session by "Can't do this", by position. The replacement
   * keeps the slot's length; it runs as held time, not as counted reps, since
   * the dose it brings belonged to the move it replaced.
   */
  const [swaps, setSwaps] = useState<Readonly<Record<number, string>>>({});

  const basePlan: readonly MovePlan[] = playlist != null
    ? playlist.map((step) => ({
        exercise: exerciseById(step.exerciseId) ?? null,
        // The playlist's own length, clamped for the same reason `planMove`
        // clamps its own: the frame callback divides by this.
        seconds: Math.max(1, Math.round(step.seconds)),
        // No tempo unless the step brings one. A protocol is held time, not
        // counted reps, and a readout counting reps over a stretch would be
        // inventing a dose; the weekly plan's heel raises do bring theirs.
        cadence: step.cadence ?? null,
        perSide: step.perSide === true,
        addWeight: step.addWeight === true,
      }))
    : moves.map((title) => planMove(title, day.block, progressionOffset));

  const plan: readonly MovePlan[] = basePlan.map((entry, index) => {
    const swapped = swaps[index];
    if (swapped == null) return entry;
    const exercise = exerciseById(swapped) ?? null;
    return { exercise, seconds: entry.seconds, cadence: null, perSide: exercise?.perSide === true };
  });

  /** What this session is called for the purpose of coming back to it. */
  const resumeId =
    playlist != null
      ? `playlist:${playlist.map((step) => step.exerciseId).join(',')}`
      : override != null
        ? `moves:${day.day}:${override.join('|')}`
        : `day:${day.day}`;
  /** Read once, at mount. The player is keyed per run by its hosts, so this is
   * the place the run starts from, not something to follow afterwards. */
  const [resume] = useState(() => readResume(resumeId, plan.length));

  /** When this player mounted, which is when the session began. A ref rather
   * than state: nothing renders from it, and it must survive every re-render
   * the clock causes without becoming one of them. */
  const startedAt = useRef(new Date());

  const [step, setStep] = useState(() => resume?.step ?? 0);
  // Held still behind the pain rule the first time it is shown.
  const [playing, setPlaying] = useState(() => kv.getString(PAIN_RULE_SEEN_KEY) != null);

  /**
   * The count-in: when the three-two-one in front of the current move began,
   * or null once it has said go.
   *
   * Every move starts on one — the first, a resumed one, each one after, and
   * the one picked up again after the pain question. The clock used to start on
   * the press, and the press is made standing at the phone: the first seconds
   * of every move were spent walking back to the wall to do it.
   *
   * Seeded at mount rather than set by an effect, so the first frame already
   * holds the clock, the clip and the Lock Screen still. An effect would let
   * the move run for a frame before being told not to.
   */
  /**
   * The pain rule, shown once before the first session ever starts and after
   * that behind the info button. While it is up the count-in waits.
   */
  const [ruleOpen, setRuleOpen] = useState(() => kv.getString(PAIN_RULE_SEEN_KEY) == null);
  const [countFrom, setCountFrom] = useState<number | null>(() => (ruleOpen ? null : Date.now()));
  /** "Next up" rather than "Get ready": the count is the handover from one
   * move to the next inside a sitting, not the start of one. */
  const [countNext, setCountNext] = useState(false);
  const counting = countFrom != null;
  /**
   * The move's clock is actually running: not paused for the pain question,
   * not over, and not waiting on the count. Everything that moves with the
   * session — the countdown, the clip, the Lock Screen — follows this rather
   * than `playing`, so the count holds all three still in one place.
   */
  const running = playing && !counting;

  /** Start a count now. */
  const countIn = useCallback((next: boolean) => {
    setCountNext(next);
    setCountFrom(Date.now());
  }, []);
  /**
   * Whole seconds into the current move.
   *
   * The one thing sampled off the playhead, and everything the readout shows is
   * derived from it on this thread. Phases are arithmetic over elapsed time, so
   * sampling elapsed time keeps that arithmetic in a pure function that can be
   * tested, rather than in a worklet that can only be watched.
   */
  const [elapsed, setElapsed] = useState(() =>
    resume == null ? 0 : Math.floor(resume.fraction * (plan[resume.step]?.seconds ?? 0)),
  );
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
  const progress = useSharedValue(resume?.fraction ?? 0);

  /** 0 collapsed, 1 full-screen. Drives the card's frame and both sets of
   * chrome off one number, so nothing can arrive out of step with the corner
   * it is supposed to be following. */
  const open = useSharedValue(0);
  const [expanded, setExpanded] = useState(false);
  /** Where the stage sits inside the root, measured — the collapsed panel is
   * exactly this rect, and the animation needs it in the same coordinates as
   * the full-screen one. */
  const [stage, setStage] = useState<Frame | null>(null);
  /** This view's own box. See the note where the rects are built. */
  const [box, setBox] = useState<Frame | null>(null);

  const move = swaps[step] != null ? (plan[step]?.exercise?.title ?? moves[step]) : moves[step];
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
  /** The celebration has been closed, and the host told. See its `onClose`. */
  const closedDone = useRef(false);
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
    // And said to the audio session as well as to the player. expo-video
    // settles the session from every player that is playing, and the default
    // mode on iOS does not mix — so a muted clip was still enough to stop the
    // user's music, and enough to override the count-in's own sounds, which
    // are set to mix. See `count-in-sound.ts`.
    instance.audioMixingMode = 'mixWithOthers';
    // Not played here: every session opens on the count-in, and the effect
    // below starts the clip when it says go.
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
  /*
   * Driven off a timer on the JS thread rather than a frame callback. The
   * callback ran a worklet on every display frame — 120 a second on a ProMotion
   * screen — for the whole session, to feed a readout that changes once a
   * second. With a video decoding underneath it, that was a large part of why
   * the phone warmed up during a session. The arithmetic is the same.
   */
  useEffect(() => {
    if (!running) {
      // Invalidated on the way down. A deadline that sat still through a pause
      // — or through a count-in — is a deadline in the past, and resuming on it
      // would snap the move to zero.
      deadline.value = 0;
      return undefined;
    }
    const read = () => {
      // Nothing to count against. A move of length zero would divide the
      // playhead by nothing; holding still is the one safe thing to do.
      if (moveMs.value <= 0) return;
      if (deadline.value === 0) {
        deadline.value = Date.now() + (1 - progress.value) * moveMs.value;
        return;
      }
      progress.value = Math.min(
        Math.max(1 - (deadline.value - Date.now()) / moveMs.value, 0),
        1,
      );
    };
    read();
    const id = setInterval(read, TICK_MS);
    return () => clearInterval(id);
  }, [running, deadline, moveMs, progress]);

  /**
   * The drift on Home, held still for as long as a session is up. The player
   * is presented over Home in a page sheet, which leaves Home underneath it
   * rendering and animating the whole time.
   */
  useEffect(() => holdGlowStill(), []);

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
   * Cheap to repeat and safe to repeat: all of it is idempotent, and keying
   * the effect on the clip is what makes it run at the only moment it matters.
   *
   * Held on its first frame for the count-in. The demonstration begins with
   * the move rather than three seconds into it, so the loop the user follows
   * and the clock they are timed on start together.
   */
  useEffect(() => {
    player.loop = true;
    // Silent by design: the clip is a diagram that moves. Sound would take the
    // audio session from whatever the user is actually listening to.
    player.muted = true;
    player.audioMixingMode = 'mixWithOthers';
    if (running) {
      player.play();
      return;
    }
    player.pause();
    if (counting) player.currentTime = 0;
  }, [player, running, counting, clip]);

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
    // The end is a promise from ActivityKit. One the system already took down
    // rejects, and that is nothing the session has to care about.
    const ending =
      final != null && lingerMs != null
        ? activity.current?.end(after(new Date(Date.now() + lingerMs)), final)
        : activity.current?.end('immediate', final);
    ending?.catch(() => undefined);
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
      // And the move itself waits for three-two-one. Its tick is also the
      // buzz that used to mark the change of move — one signal, not two.
      countIn(true);
      return true;
    },
    [player, progress, deadline, moveMs, countIn],
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
    // Over, in either sense: there is no place left to come back to.
    if (resumeId != null) clearResume(resumeId);
    // Nothing after the last move. The clock holds at zero instead of wrapping:
    // a session that quietly restarts is a session you can never finish.
    progress.value = 1;
    deadline.value = 0;
    setPlaying(false);
    // A count that was still running — a pain stop mid-count — has nothing
    // left to count into.
    setCountFrom(null);
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
  }, [progress, deadline, endActivity, activitySnapshot, day, moves, resumeId]);

  /** On to the next move, or the end. No haptic of its own: the count-in's
   * first tick lands on the same instant and says the same thing. */
  const advance = useCallback(() => {
    if (goTo(step + 1)) return;
    complete(false);
  }, [goTo, step, complete]);

  /** The mid-session "it hurts". Paused while the question is open — nobody
   * should be counting reps while deciding how much something hurts. */
  const [askingPain, setAskingPain] = useState(false);
  const [endedEarly, setEndedEarly] = useState(false);
  /** Shown for a moment under the header after a report below the stop line. */
  const [carryOn, setCarryOn] = useState(false);
  const wasPlaying = useRef(false);

  /**
   * Back to the move after the pain question, through a fresh count.
   *
   * "Get ready" rather than "Next up" — it is the same move — and a count at
   * all because the answer was given with the phone in hand: the three seconds
   * are what it takes to put it down and find the position again.
   */
  const resumeAfterPain = useCallback(() => {
    if (!wasPlaying.current) return;
    countIn(false);
    setPlaying(true);
  }, [countIn]);

  const reportPain = useCallback(
    (score: number) => {
      setAskingPain(false);
      // Kept for the session record — the plan reads it, analytics never does.
      noteInSessionPain(score);
      const outcome = inSessionPain(score, progressionOffset);
      if (!outcome.stop) {
        // Discomfort is allowed to be part of this. Back to where they were.
        setCarryOn(true);
        resumeAfterPain();
        return;
      }
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      // Tomorrow really is a step back: the offset is stored, not just said.
      stepBackAfterSession();
      writeLog(day.day, { sessionEndedEarly: true });
      complete(true);
    },
    [progressionOffset, day.day, complete, resumeAfterPain],
  );

  /** "Can't do this": paused while the reason is asked, like the pain question. */
  const [askingCantDo, setAskingCantDo] = useState(false);
  /** Said for a moment under the header once a move has been swapped. */
  const [swapNote, setSwapNote] = useState<string | null>(null);

  const pauseForQuestion = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    wasPlaying.current = playing;
    setPlaying(false);
    setCountFrom(null);
    setCarryOn(false);
    setSwapNote(null);
  }, [playing]);

  const reportCantDo = useCallback(
    (reason: CantDoReason) => {
      setAskingCantDo(false);
      const id = current?.exercise?.id;
      if (id == null) {
        resumeAfterPain();
        return;
      }
      // Stored first, so the replacement is chosen with the missing kit
      // already out of the picture, and the rest of the plan follows.
      markCantDo(id, reason);
      track('exercise_cant_do', { exercise: id, reason: reason === 'hurts' ? 'other' : reason });
      const replacement = swapFor(id);
      if (replacement == null) {
        setSwapNote(t('player.cantDo.skipped'));
        setPlaying(true);
        advance();
        return;
      }
      setSwaps((previous) => ({ ...previous, [step]: replacement }));
      setSwapNote(t('player.cantDo.swapped', { name: exerciseById(replacement).title }));
      // The slot starts over with the new move, through a fresh count.
      progress.value = 0;
      deadline.value = 0;
      setElapsed(0);
      player.currentTime = 0;
      countIn(false);
      setPlaying(true);
    },
    [current, step, t, advance, resumeAfterPain, progress, deadline, player, countIn],
  );

  const closeRule = useCallback(() => {
    const first = kv.getString(PAIN_RULE_SEEN_KEY) == null;
    kv.set(PAIN_RULE_SEEN_KEY, '1');
    setRuleOpen(false);
    // The first time it stood in front of the session's own count; after that
    // it was opened mid-move and the move picks up where it was.
    if (first) {
      countIn(false);
      setPlaying(true);
      return;
    }
    resumeAfterPain();
  }, [countIn, resumeAfterPain]);

  /**
   * The tempo, out loud: "up · 2 · 3 · hold · 2 · down · 2 · 3".
   *
   * One sound per second of a tempo move, keyed on the second so a re-render
   * never plays it twice. Silent on moves without a tempo, during the count-in
   * and while paused.
   */
  const sound = useSoundPrefs();
  const language = useLanguage();
  useEffect(() => {
    if (sound.tempo) preloadTempoSounds(language, sound.voice);
  }, [sound.tempo, sound.voice, language]);
  const cueKey = useRef<string | null>(null);

  /**
   * The spoken instruction: as a move starts, once more halfway through a long
   * one, and whenever the replay chip on the video is pressed.
   *
   * Halfway is where attention drifts and, on a per-side move, where the foot
   * changes — the same moment the switch buzzes. Only moves of at least
   * `REPEAT_FROM_SECONDS`, and never on a tempo move, where it would talk over
   * the count. Nothing loops: a ten-second explanation every ten seconds is
   * the app talking at someone who already knows what to do.
   *
   * The spoken instruction, once per move, as it starts — after the count-in's
   * "go", not over it. Paused or interrupted, it stops; a move resumed after
   * the pain question is not explained twice. The speaker button in the header
   * turns it off along with the tempo.
   */
  const spokenFor = useRef<string | null>(null);
  const repeatedFor = useRef<string | null>(null);
  const exerciseId = current?.exercise?.id ?? null;
  useEffect(() => {
    if (!sound.tempo) {
      stopInstruction();
      return;
    }
    if (!running || exerciseId == null) return;
    const key = `${step}:${exerciseId}`;
    if (spokenFor.current === key) return;
    spokenFor.current = key;
    // A move picked up past its middle has already had its second telling.
    if (elapsed >= Math.floor(moveSeconds / 2)) repeatedFor.current = key;
    playInstruction(exerciseId, language);
  }, [sound.tempo, running, step, exerciseId, language]);
  useEffect(() => {
    if (!sound.tempo || !running || exerciseId == null || current?.cadence != null) return;
    if (moveSeconds < REPEAT_FROM_SECONDS || elapsed < Math.floor(moveSeconds / 2)) return;
    const key = `${step}:${exerciseId}`;
    if (repeatedFor.current === key) return;
    repeatedFor.current = key;
    playInstruction(exerciseId, language);
  }, [sound.tempo, running, exerciseId, current?.cadence, moveSeconds, elapsed, step, language]);
  const canReplay = sound.tempo && exerciseId != null && hasInstruction(exerciseId, language) && !finished;
  const replayInstruction = useCallback(() => {
    if (exerciseId == null) return;
    Haptics.selectionAsync();
    playInstruction(exerciseId, language);
  }, [exerciseId, language]);
  // A new move, a pause for a question, or leaving: whatever was being said stops.
  useEffect(() => {
    if (!running) stopInstruction();
  }, [running]);
  useEffect(() => stopInstruction, [step]);
  useEffect(() => {
    if (!sound.tempo || !running || phase == null || phase.done || current?.cadence == null) {
      cueKey.current = null;
      return;
    }
    const key = `${step}:${elapsed}`;
    if (cueKey.current === key) return;
    cueKey.current = key;
    // Quiet under the spoken instruction: one voice at a time.
    if (instructionSpeaking()) return;
    const length = current.cadence.tempo[phase.phase];
    const second = Math.max(1, Math.round(length) - phase.secondsLeft + 1);
    playTempoCue(phase.phase, second, language, sound.voice);
  }, [sound.tempo, sound.voice, running, phase, current, step, elapsed, language]);

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

  /**
   * Write down where this session stands, for the next time it is opened.
   *
   * Not once it is finished — `complete` clears the record, and a finished run
   * re-saving itself on the way out would bring it back.
   */
  const finishedRef = useRef(false);
  finishedRef.current = finished;
  const stepRef = useRef(step);
  stepRef.current = step;
  const saveResume = useCallback(() => {
    if (resumeId == null || finishedRef.current) return;
    writeResume(resumeId, planRef.current.length, {
      step: stepRef.current,
      fraction: progress.value,
    });
  }, [resumeId, progress]);

  // On every move change, and whenever the app goes to the background — the
  // process may not come back, and a force-quit gives no warning.
  useEffect(() => {
    saveResume();
  }, [step, saveResume]);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => {
      if (next !== 'active') saveResume();
    });
    return () => {
      subscription.remove();
      // The host unmounting the player — a sheet swiped away, the program
      // closed — is leaving too.
      saveResume();
    };
  }, [saveResume]);

  /**
   * The back arrow. Leaves on the first press, always: there is no confirm,
   * because nothing is lost — the place is saved and the session resumes from
   * it — and the tidying below is wrapped so that a storage write or a native
   * call that throws can never be the reason the press did nothing.
   */
  const leave = useCallback(() => {
    try {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      saveResume();
      // Left running, a muted loop and a frame callback would keep burning
      // through a screen nobody is looking at.
      setPlaying(false);
      // Nor should a count still going tick at a screen that is sliding away.
      setCountFrom(null);
      // Immediately, not on the default policy: walking out of a session is
      // the one case where a countdown left on the Lock Screen would be
      // counting toward something the user has already abandoned. This view
      // stays mounted behind the departing pane, so nothing else would have
      // ended it.
      endActivity();
    } catch (error) {
      console.warn('[session] tidying up on the way out failed:', error);
    } finally {
      onBack();
    }
  }, [onBack, endActivity, saveResume]);

  /**
   * The session, handed to the Lock Screen for the length of its run.
   *
   * Mount and unmount only. The pane is keyed on the run counter, so every
   * "Start" is a fresh mount and every activity belongs to exactly one session.
   */
  useEffect(() => {
    // Live Activities are an iOS feature; Android has no Lock Screen countdown.
    if (Platform.OS !== 'ios') return;
    // The Lock Screen outlives the process. A crash or a force-quit mid-session
    // leaves a countdown running against a session that no longer exists, so
    // the first thing a new one does is clear the field.
    for (const orphan of SessionTimerActivity.getInstances()) orphan.end('immediate');

    try {
      // Paused: every session opens on the count-in, and a Lock Screen that
      // started counting down a move that has not begun would be three seconds
      // ahead of the phone for the rest of it. Go un-pauses it, through the
      // update below.
      activity.current = SessionTimerActivity.start(activitySnapshot(true));
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
   * A handful of updates for a whole session, because the seconds are not
   * pushed — `timerInterval` is drawn from a pair of dates by the render
   * server, so the only things worth sending are the facts that change which
   * dates apply. The count-in is one of them: held, then released on go.
   */
  useEffect(() => {
    if (activity.current == null) return;
    activity.current.update(activitySnapshot(!running));
  }, [step, running, activitySnapshot]);

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

  const floor = Math.max(insets.bottom, SIDE);

  /**
   * The full-screen rect: from the very top down to the button.
   *
   * Edge to edge and from the very top: open has to read as the whole screen,
   * not as the same panel a little taller, which at rest already spans the
   * width. The bottom stops short, because the button below it is a real
   * object in the layout rather than an overlay.
   */
  const full: Frame = {
    x: 0,
    y: 0,
    width: boxWidth,
    height: Math.max(boxHeight - floor - CONTINUE_BLOCK, stage?.height ?? 0),
  };

  /**
   * The resting rect is the stage itself, exactly as the column measured it.
   * The clip is contained inside it, so an upright clip on a wide panel sits
   * in the middle of its own backdrop with nothing to mark where it ends.
   */
  const rest: Frame | null = stage;

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
      borderRadius: interpolate(openness, [0, 1], [STAGE_RADIUS, STAGE_RADIUS_OPEN]),
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
   * The foot, translated once. It rides on the stage as a chip now, where the
   * eye already is, rather than leading the line under the name.
   */
  const sideText = side == null ? null : t(SIDE_KEY[side.side]);
  const index = step + 1;

  /**
   * The line under the move's name: which part of which rep, or that the
   * session is done.
   *
   * Only those two. Where the session stands ("2 of 3") and which foot are
   * chips on the stage, and the segmented bar under the header draws the same
   * position again as a shape — a third copy in this line would be the
   * duplicate the old layout was full of. A move with no tempo therefore has no
   * line at all, and the stage takes the height back.
   *
   * Spoken as a sentence rather than read as the line: a middot is read out as
   * nothing at all, which leaves "up rep four of twelve". The spoken form keeps
   * the foot, which the chips also say, because VoiceOver reaches this line on
   * its own.
   */
  const counter: { text: string; spoken: string } | null = finished
    ? { text: t('widgets.sessionDone'), spoken: t('widgets.sessionDoneSpoken') }
    : phase != null && current?.cadence != null
      ? {
          text: t('widgets.sessionRepLine', {
            phase: t(PHASE_KEY[phase.phase]),
            rep: phase.rep,
            reps: current.cadence.reps,
          }),
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
   * What the one button under the readout does right now.
   *
   * It used to show the move's time, greyed out, until the move ran out — the
   * same number the clock above it was already showing, in a button that could
   * not be pressed. It is an action in every state now:
   *
   *   • running (and through the count-in): Pause;
   *   • paused by hand: Resume, through a fresh count, because the press is
   *     made with the phone in hand and the three seconds are what it takes to
   *     put it down again;
   *   • the move is over: Continue, or Finish on the last one. Collapsed this
   *     is a flash — the move advances by itself — but expanded nothing
   *     advances on its own, so it is the way on;
   *   • the session is over: Done, which brings back the closing sheet.
   *
   * A question opened mid-move (the pain check, "Can't do this", the pain rule)
   * also stops `playing`, and the button would say Resume under it — but each
   * of those covers the screen and picks the move up itself when answered.
   */
  const ctaState: 'finished' | 'ready' | 'running' | 'paused' = finished
    ? 'finished'
    : ready
      ? 'ready'
      : playing
        ? 'running'
        : 'paused';

  const pauseByHand = useCallback(() => {
    // Not a question, so nothing comes back by itself: the move waits for
    // Resume. Cleared here so a question opened while paused does not restart
    // the move when it is answered.
    wasPlaying.current = false;
    setPlaying(false);
    setCountFrom(null);
  }, []);

  const resumeByHand = useCallback(() => {
    countIn(false);
    setPlaying(true);
  }, [countIn]);

  /**
   * The one control at the bottom of this screen, in both states.
   *
   * Defined once rather than written twice. Collapsed it sits in the column;
   * expanded it sits under the video — but it is the same button doing the
   * same job, and two copies of it is how the collapsed state ended up still
   * showing the old three-icon transport long after the button had replaced it
   * everywhere else.
   */
  const ctaButton = (
    <PrimaryButton
      // Green only on Finish. The single colour change in the whole screen,
      // spent on the press that ends the session.
      tint={
        ctaState === 'ready' && last
          ? { fill: meter.positive, label: primaryButton.dark.label }
          : undefined
      }
      label={
        ctaState === 'finished'
          ? t('player.cta.done')
          : ctaState === 'ready'
            ? last
              ? t('widgets.sessionFinish')
              : t('widgets.sessionContinue')
            : ctaState === 'running'
              ? t('player.cta.pause')
              : t('player.cta.resume')
      }
      icon={ctaState === 'running' ? PauseIcon : ctaState === 'paused' ? PlayIcon : undefined}
      onPress={() => {
        switch (ctaState) {
          case 'running':
            pauseByHand();
            return;
          case 'paused':
            resumeByHand();
            return;
          case 'ready':
            setPlaying(true);
            advance();
            return;
          case 'finished':
            // The sheet is what closes a finished session and tells the host.
            if (!closedDone.current) setCelebrating(true);
            return;
        }
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
  /** The current segment of the bar under the header, filling with the move.
   * Off the same playhead the clock reads, on the UI thread. */
  const segmentFill = useAnimatedStyle(() => ({
    width: `${Math.min(Math.max(progress.value, 0), 1) * 100}%`,
  }));

  return (
    <View style={styles.root} onLayout={(event) => setBox(event.nativeEvent.layout)}>
      <Animated.View
        style={[styles.column, { paddingBottom: floor }, chromeStyle]}
        pointerEvents={expanded ? 'none' : 'auto'}>
        <View style={styles.header}>
          {/* Centred over the whole row, inset by the same amount from both
              edges so the controls either side can never run under it. Two
              short lines rather than one long one: the day, then its length
              and its moves. Drawn first so the buttons sit on top of it. */}
          <View pointerEvents="none" style={styles.headerTitle}>
            <Text
              accessibilityRole="header"
              style={[styles.title, { color: colors.foreground }]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}>
              {title ?? t('session.day', { day: day.day })}
            </Text>
            <Text
              style={[styles.meta, { color: meter.caption }]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}>
              {t('player.header.meta', {
                minutes: t('session.minutes', { count: day.minutes }),
                moves: t('session.moveCount', { count: moves.length }),
              })}
            </Text>
          </View>

          {/* A fixed box, not the stretched row it used to be: the arrow's
              target is exactly the square around it, and nothing else in the
              header shares it. */}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.back')}
            onPress={leave}
            hitSlop={8}
            style={({ pressed }) => [styles.headerButton, pressed && { opacity: 0.5 }]}>
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={25}
              color={colors.foreground}
              strokeWidth={2}
            />
          </Pressable>

          {/* The way to say it hurts, opposite the way out. Always there rather
              than behind a menu: the moment it is needed is the moment nobody
              goes looking for it. Not on a finished session. */}
          {!finished && (
            <View style={styles.headerActions}>
              {/* The tempo out loud, on or off. The same switch as Settings. */}
              <Pressable
                accessibilityRole="switch"
                accessibilityState={{ checked: sound.tempo }}
                accessibilityLabel={sound.tempo ? t('player.tempo.on') : t('player.tempo.off')}
                onPress={() => {
                  Haptics.selectionAsync();
                  setSoundPrefs({ tempo: !sound.tempo });
                }}
                hitSlop={4}
                style={({ pressed }) => [styles.headerButton, pressed && { opacity: 0.5 }]}>
                <HugeiconsIcon
                  icon={sound.tempo ? VolumeHighIcon : VolumeOffIcon}
                  size={22}
                  color={colors.foreground}
                  strokeWidth={1.8}
                />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('player.painRule.a11y')}
                onPress={() => {
                  pauseForQuestion();
                  setRuleOpen(true);
                }}
                hitSlop={4}
                style={({ pressed }) => [styles.headerButton, pressed && { opacity: 0.5 }]}>
                <HugeiconsIcon icon={InformationCircleIcon} size={22} color={colors.foreground} strokeWidth={1.8} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('widgets.painButton')}
                onPress={() => {
                  // A count under way is dropped, not paused: the move is picked
                  // up again through a fresh one when the question is answered.
                  pauseForQuestion();
                  setAskingPain(true);
                }}
                hitSlop={4}
                style={({ pressed }) => [styles.headerButton, pressed && { opacity: 0.5 }]}>
                <HugeiconsIcon icon={BandageIcon} size={23} color={colors.foreground} strokeWidth={1.8} />
              </Pressable>
            </View>
          )}
        </View>

        {/* One segment per move: done in the brand violet, the current one
            filling with the move, the rest empty track. The shape of the whole
            session at a glance, which the header's "3 moves" only states. */}
        <View
          accessible
          accessibilityRole="progressbar"
          accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
          accessibilityValue={{ min: 0, max: moveCount, now: finished ? moveCount : step }}
          style={styles.segments}>
          {moves.map((_, at) => (
            <View key={at} style={[styles.segment, { backgroundColor: meter.track }]}>
              {at < step || finished ? (
                <View style={[styles.segmentFill, styles.segmentDone]} />
              ) : at === step ? (
                <Animated.View style={[styles.segmentFill, segmentFill]} />
              ) : null}
            </View>
          ))}
        </View>

        {carryOn && (
          <Text style={[styles.carryOn, { color: meter.caption }]}>{t('widgets.painCarryOn')}</Text>
        )}
        {swapNote != null && !carryOn && (
          <Text style={[styles.carryOn, { color: meter.caption }]}>{swapNote}</Text>
        )}

        {/* The stage is drawn over this, not in it — it has to travel to a rect
            this column does not contain. What stays here is the space it
            occupies at rest, which is also how its resting rect is measured:
            the panel at rest is exactly this box. */}
        <View
          style={styles.stage}
          onLayout={(event) => setStage(event.nativeEvent.layout)}
        />

        <View style={styles.readout}>
          {/* The rolling treatment the rest of the app uses for a figure that
              changes. Dimmed while paused, so a clock that has stopped looks
              stopped from across the room.

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
              color={ctaState === 'paused' ? meter.caption : colors.foreground}
              fontSize={CLOCK_SIZE}
              weight="heavy"
              duration={CLOCK_ROLL_SECONDS}
            />
          </View>
          {/* The name is all the screen has room to show. Why this move is in
              the session, the cue for it, and the load note on the day the load
              changes all ride along with it for VoiceOver — see the note on
              `spokenMove`. Shrunk to fit rather than wrapped, so a long name
              does not take height from the stage on one move and give it back
              on the next. */}
          <Text
            accessibilityLabel={spokenMove}
            style={[styles.move, { color: colors.foreground }]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}>
            {move}
          </Text>
          {/* "Up · Rep 4 of 12" while a tempo move is running, and once the
              session is over the same slot says so. See `counter`. */}
          {counter != null && (
            <Text
              accessibilityLabel={counter.spoken}
              style={[styles.counter, { color: meter.label }]}>
              {counter.text}
            </Text>
          )}
          {/* The weight, said where it can be read: on the move it belongs to,
              on the days the dose asks for it. */}
          {!finished && (current?.addWeight === true || loadNote != null) && (
            <View style={styles.load}>
              <HugeiconsIcon icon={Backpack03Icon} size={17} color={meter.label} strokeWidth={1.8} />
              <Text style={[styles.loadText, { color: meter.label }]}>
                {current?.addWeight === true ? t('player.load.backpack') : loadNote}
              </Text>
            </View>
          )}
          {!finished && current?.exercise != null && (
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                pauseForQuestion();
                setAskingCantDo(true);
              }}
              hitSlop={8}
              style={({ pressed }) => [styles.cantDo, pressed && { opacity: 0.5 }]}>
              <Text style={[styles.cantDoText, { color: meter.caption }]}>{t('player.cantDo.button')}</Text>
            </Pressable>
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
            has one thing to do next. */}
        <View style={styles.transport}>{ctaButton}</View>
      </Animated.View>

      {/* Absolute, so one interpolation carries it from the stage to the whole
          screen. Positioned rather than scaled: a scaled video is a stretched
          video, and a scaled corner radius is the wrong radius all the way. */}
      <Animated.View
        style={[styles.card, { backgroundColor: CLIP_BACKDROP }, cardStyle]}>
        <VideoView
          style={[styles.video, mirrored && styles.mirrored]}
          player={player}
          nativeControls={false}
          // Contain, never cover: the whole body stays in frame. The panel is
          // wider than the clip, and the clip's backdrop is the panel's colour,
          // so the room either side reads as more of the studio, not as bars.
          contentFit="contain"
        />

        {/* The clips are not all filmed on the same grey — one is bluer, one
            warmer — so no single panel colour meets every clip's edge without a
            seam. Each side of the clip melts into the panel instead. */}
        <View pointerEvents="none" style={styles.edgeRow}>
          <View style={styles.edgeSpacer} />
          <View style={styles.edgeBox}>
            <EdgeFade side="left" />
            <EdgeFade side="right" />
          </View>
          <View style={styles.edgeSpacer} />
        </View>

        {/* Over the player, not instead of it: the stage keeps its size and its
            corner, and the line sits in the space the clip would have filled. */}
        {clipFailed && (
          <View style={styles.clipFallback} pointerEvents="none">
            <Text style={[styles.clipFallbackText, { color: CHIP_INK }]}>
              {t('widgets.clipFailed')}
            </Text>
          </View>
        )}

        {/* Facts about the move, on the move: where it sits in the session and
            which foot. Expanded, the readout under the stage is gone, so the
            time left on the move joins them — the one place it is shown then. */}
        <View style={styles.chips} pointerEvents="none">
          {moveCount > 1 && (
            <View
              accessible
              accessibilityLabel={t('widgets.sessionPositionLong', { index, total: moveCount })}
              style={styles.textChip}>
              <Text style={styles.textChipLabel}>
                {t('player.chip.position', { index, total: moveCount })}
              </Text>
            </View>
          )}
          {sideText != null && !finished && (
            <View style={styles.textChip}>
              <Text style={styles.textChipLabel}>{sideText}</Text>
            </View>
          )}
          <Animated.View
            accessibilityElementsHidden={!expanded}
            importantForAccessibility={expanded ? 'auto' : 'no-hide-descendants'}
            style={[styles.textChip, fullStyle]}>
            <Text
              accessibilityLabel={t('session.secondsLeftA11y', { count: moveLeft })}
              style={[styles.textChipLabel, styles.tabular]}>
              {clock(moveLeft)}
            </Text>
          </Animated.View>
        </View>

        {/* Say it again: the instruction, replayed on demand. Bottom-left,
            clear of the position chips and of the expand control. */}
        {canReplay && (
          <Animated.View style={[styles.replay, expandStyle]} pointerEvents={expanded ? 'none' : 'auto'}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('player.voice.replay')}
              onPress={replayInstruction}
              hitSlop={10}
              style={({ pressed }) => [styles.chip, pressed && { opacity: 0.7 }]}>
              <HugeiconsIcon icon={ReplayIcon} size={19} color={CHIP_INK} strokeWidth={2.2} />
            </Pressable>
          </Animated.View>
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
              color={CHIP_INK}
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
              color={CHIP_INK}
              strokeWidth={2.2}
            />
          </Pressable>
        </Animated.View>
      </Animated.View>

      {/* Under the stage, in the same seat it holds collapsed, at the same
          size. Laid over the video instead it became part of the
          demonstration — something to look at rather than the one thing to
          press — and it covered the feet, which on half of these exercises is
          the part being demonstrated. */}
      <Animated.View
        style={[styles.continueRow, { bottom: floor }, fullStyle]}
        pointerEvents={expanded ? 'auto' : 'none'}>
        {ctaButton}
      </Animated.View>

      {/* Over everything the move is made of — the stage, the readout, the
          button — and under the header and the bar, so Back and the pain
          button stay where they always are and the session's position stays
          in view. Expanded there is no header to keep clear: the stage runs
          to the top and the count covers it all. */}
      <CountInOverlay
        from={finished ? null : countFrom}
        eyebrow={countNext ? t('player.countIn.nextUp') : t('player.countIn.getReady')}
        title={move ?? ''}
        top={expanded ? 0 : HEADER_HEIGHT + PROGRESS_BLOCK}
        onDone={() => setCountFrom(null)}
      />

      <SessionPainSheet
        visible={askingPain}
        onPick={reportPain}
        onCancel={() => {
          setAskingPain(false);
          resumeAfterPain();
        }}
      />

      <CantDoSheet
        visible={askingCantDo}
        equipment={planMeta(current?.exercise?.id ?? '')?.equipment ?? []}
        onPick={reportCantDo}
        onCancel={() => {
          setAskingCantDo(false);
          resumeAfterPain();
        }}
      />

      <PainRuleSheet visible={ruleOpen} onClose={closeRule} />

      <SessionDoneSheet
        visible={celebrating}
        early={endedEarly}
        streak={streak.current}
        moves={moveCount}
        feedback={feedback}
        startedAt={startedAt.current.getTime()}
        onClose={() => {
          // Once. The sheet takes a moment to fade and stays pressable while
          // it does, so Done — or the scrim behind it — can land twice, and
          // each landing used to finish the session again: two records, two
          // rows on the server, one answer counted twice.
          if (closedDone.current) return;
          closedDone.current = true;
          setCelebrating(false);
          // A host with nothing to do on finishing still has to be left: the
          // pain check's relief session passed no `onFinish`, and closing its
          // celebration left the finished player on screen.
          if (onFinish != null) onFinish();
          else onBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /** A left sore foot: the demonstration flipped to match. */
  mirrored: {
    transform: [{ scaleX: -1 }],
  },
  root: {
    flex: 1,
  },
  column: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // The glyphs sit centred in their boxes, so the row's edge is pulled in
    // by the slack around them and the arrow still lands on the side margin.
    paddingHorizontal: SIDE - 8,
  },
  headerButton: {
    width: HEADER_BUTTON,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: TITLE_INSET,
    right: TITLE_INSET,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: fonts.bold(16, -0.2),
  meta: {
    ...fonts.semibold(12),
    marginTop: 1,
  },
  segments: {
    flexDirection: 'row',
    gap: SEGMENT_GAP,
    marginTop: 4,
    marginBottom: 12,
    paddingHorizontal: STAGE_MARGIN + 4,
  },
  segment: {
    flex: 1,
    height: SEGMENT_HEIGHT,
    borderRadius: SEGMENT_HEIGHT / 2,
    overflow: 'hidden',
  },
  segmentFill: {
    height: SEGMENT_HEIGHT,
    borderRadius: SEGMENT_HEIGHT / 2,
    backgroundColor: PRIMARY,
  },
  segmentDone: {
    width: '100%',
  },
  carryOn: {
    ...fonts.regular(14),
    textAlign: 'center',
    paddingHorizontal: SIDE,
    paddingBottom: 8,
  },
  stage: {
    flex: 1,
    marginHorizontal: STAGE_MARGIN,
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
  edgeRow: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, flexDirection: 'row' },
  edgeSpacer: { flex: 1 },
  edgeBox: { height: '100%', aspectRatio: CLIP_SHAPE },
  edgeFade: { position: 'absolute', top: 0, bottom: 0, width: EDGE_FADE },
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
    ...fonts.medium(15),
    textAlign: 'center',
  },
  chips: {
    position: 'absolute',
    top: 12,
    left: 12,
    // Clear of the expand chip in the opposite corner.
    right: 12 + EXPAND_CHIP + 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  textChip: {
    height: STAGE_CHIP,
    paddingHorizontal: 11,
    borderRadius: STAGE_CHIP / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CHIP_FILL,
  },
  textChipLabel: {
    ...fonts.semibold(13),
    color: CHIP_INK,
  },
  tabular: {
    fontVariant: ['tabular-nums'],
  },
  expand: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  replay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  chip: {
    width: EXPAND_CHIP,
    height: EXPAND_CHIP,
    borderRadius: EXPAND_CHIP / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CHIP_FILL,
  },
  readout: {
    alignItems: 'center',
    paddingHorizontal: SIDE,
    paddingTop: 10,
    paddingBottom: 16,
  },
  clockBox: {
    height: CLOCK_BOX,
    justifyContent: 'center',
    alignItems: 'center',
  },
  move: {
    ...fonts.bold(22, -0.4),
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  counter: {
    ...fonts.semibold(15, 0.1),
    textAlign: 'center',
    marginTop: 4,
  },
  load: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 8,
  },
  loadText: {
    ...fonts.medium(14),
    lineHeight: 19,
    flexShrink: 1,
  },
  cantDo: {
    alignSelf: 'center',
    marginTop: 8,
  },
  cantDoText: fonts.semibold(15),
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: SIDE,
    paddingBottom: 12,
  },
  hintText: fonts.medium(13),
  transport: {
    paddingHorizontal: SIDE,
  },
  continueRow: {
    position: 'absolute',
    left: SIDE,
    right: SIDE,
  },
});
