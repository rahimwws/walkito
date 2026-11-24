import * as Haptics from 'expo-haptics';
import { useVideoPlayer } from 'expo-video';
import { after, type LiveActivity } from 'expo-widgets';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Alert, AppState, Platform } from 'react-native';
import { runOnJS, useAnimatedReaction, useSharedValue } from 'react-native-reanimated';

import { saveSessionToHealth } from '@/entities/health';
import {
  HEEL_RAISE_IDS,
  PLAN_BLOCKS,
  abandonSession,
  beginSession,
  inSessionPain,
  markCantDo,
  noteInSessionPain,
  swapFor,
  stepBackAfterSession,
  writeLog,
  exerciseById,
  exerciseByTitle,
  doseTimeline,
  timelineAt,
  timelineSeconds,
  kindFor,
  loadNoteFor,
  movesFor,
  prescriptionFor,
  useProgramState,
  type Exercise,
  type ProgramDay,
  type CantDoReason,
  type PlanDose,
  type Segment,
  type Tempo,
  type TimelineReading,
} from '@/entities/program';
import { useIntake } from '@/entities/profile';
import { WIDE_CLIPS } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { useSoundPrefs } from '@/shared/lib/sound';
import { kv } from '@/shared/lib/storage';

import { clipFor } from '../config/exercise-clips';
import { illustrationFor, thumbFor } from '../config/exercise-posters';
import { SessionTimerActivity, type SessionActivityProps } from '../ui/session-activity';
import { playCountInCue } from './count-in-sound';
import { hasInstruction, instructionSpeaking, playInstruction, stopInstruction } from './exercise-voice';
import { mirroredFor } from './mirror';
import { clearResume, readResume, writeResume } from './session-resume';
import { playTempoCue, preloadTempoSounds } from './tempo-sound';
import {
  doseSeconds,
  phaseAt,
  sideAt,
  type Phase,
  type PhaseReading,
  type Side,
  type SideReading,
} from './tempo';

/**
 * What a move gets when the program has nothing to say about how long it takes.
 *
 * It used to be what every move got. The dose belongs to the program and the
 * program now has one, so this is the floor rather than the rule: a move with
 * no prescription at all — the barefoot habit — still needs a number, and a
 * minute is the number it has always had.
 */
const SECONDS_PER_MOVE = 60;

/** How long the finished session stays on the Lock Screen. Half a minute reads
 * as the end of something; the four hours the default policy gives reads as a
 * bug, which is what it looked like. */
const FINISHED_LINGER_MS = 30_000;

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
  /**
   * The planned dose, laid out set by set (`doseTimeline`): work on each foot,
   * the rests and the changes of foot. Present for the weekly plan's moves;
   * null for a protocol's held time, a swapped-in move, and the old program's
   * days, which keep the single countdown.
   */
  timeline?: readonly Segment[] | null;
};

/** Moves at least this long hear their instruction a second time, halfway. */
const REPEAT_FROM_SECONDS = 40;

/** Seen the pain rule once — the first session shows it before it starts. */
const PAIN_RULE_SEEN_KEY = 'player/pain-rule-seen';

/** How often the countdown is re-read off the wall clock. Four times a second
 * is finer than the whole-second readout needs, and nothing on screen follows
 * the playhead continuously any more. */
const TICK_MS = 250;
/** How long a note under the move ("Swapped for …", "Skipped for today …")
 * stays once the move is back on screen. */
const NOTE_MS = 4_000;

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

/**
 * The line under the move's name while a set of a planned move runs: which set
 * of how many. Left out of a one-set move, where "Set 1 of 1" only says nothing
 * twice. The rep is the big number itself (see `repCount`), and rests and
 * changes of foot have a screen of their own (`BreakOverlay`).
 */
function workLine(reading: TimelineReading, t: ReturnType<typeof useT>): string | null {
  const segment = reading.segment;
  if (segment.kind !== 'work' || segment.sets <= 1) return null;
  return t('player.line.set', { set: segment.set, sets: segment.sets });
}

/**
 * The word over the big number while a set runs: what to do right now. "Hold"
 * and "Relax" on a held rep, "Up", "Hold", "Down" on a tempo rep, in a filled
 * pill, violet while working and plain while letting go. Plain reps at a steady
 * pace have no phase, and a single hold says "Hold".
 */
function workPill(
  reading: TimelineReading,
  t: ReturnType<typeof useT>,
): { label: string; easing: boolean } | null {
  const rep = reading.rep;
  if (reading.segment.kind !== 'work' || rep == null) return null;
  if (rep.phase === 'relax') return { label: t('player.phase.relax'), easing: true };
  if (rep.phase === 'rep') return null;
  return { label: t(PHASE_KEY[rep.phase]), easing: false };
}


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
  /**
   * The weekly plan's dose itself. With it the move runs set by set — the
   * line under the name says which set, which rep and which foot, rests and
   * changes of foot get their own countdown, and "Done" ends a set early — and
   * its length is the dose's own (`timelineSeconds`), the same seconds the
   * plan fitted the day with.
   */
  dose?: PlanDose;
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
   * Day 1's two minutes: the one session open to somebody looking around
   * without buying (`lookingAround`), who has every other one locked, the
   * free routines included.
   */
  dayOne?: boolean;
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
  onFinish?: (outcome: SessionOutcome) => void;
  /**
   * The last move ran out, at that instant: before the closing sheet, so a
   * host can tell a session that was finished from one that was left, when
   * its sheet is swiped away over the closing sheet and `onFinish` never
   * comes. Fires once.
   */
  onComplete?: (outcome: SessionOutcome) => void;
  /**
   * Ask "Could you have done 2 more good reps?" in the closing sheet. On for
   * every session — Plan, Home's tasks, the Library — and never after a session
   * stopped on pain, which already said how it went.
   */
  feedback?: boolean;
  /**
   * What the place this session was left at is kept under, for coming back to
   * it (`session-resume.ts`). The plan's session passes its day's date, which
   * stays the same when today is planned again; without one the session is
   * known by its list of moves.
   */
  resumeKey?: string;
};

/** How a finished run went, for the host that files it. */
export type SessionOutcome = {
  /** Exercises passed over with Skip, by id: for today only, still in the
   * plan. Filed as skipped rather than done. */
  skipped: readonly string[];
};

/**
 * Everything a session does while it plays: the clock off the wall, the
 * count-ins, the doses set by set, resume, voice and tempo cues, haptics, the
 * Lock Screen, Health, the pain and "Can't do this" answers. The view draws
 * what this returns and owns nothing of it.
 */
export function useSessionRun({
  day,
  onBack,
  moves: override,
  playlist,
  cue,
  onComplete,
  resumeKey,
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
    ? playlist.map((step) => {
        const timeline = step.dose != null ? doseTimeline(step.dose) : null;
        return {
        exercise: exerciseById(step.exerciseId) ?? null,
        // The playlist's own length, clamped for the same reason `planMove`
        // clamps its own: the frame callback divides by this. A planned dose
        // is timed by its timeline, which is what the plan fitted it with.
        seconds: Math.max(1, Math.round(timeline != null ? timelineSeconds(timeline) : step.seconds)),
        timeline,
        // No tempo unless the step brings one. A protocol is held time, not
        // counted reps, and a readout counting reps over a stretch would be
        // inventing a dose; the weekly plan's heel raises do bring theirs.
        cadence: step.cadence ?? null,
        perSide: step.perSide === true,
        addWeight: step.addWeight === true,
      };
      })
    : moves.map((title) => planMove(title, day.block, progressionOffset));

  const plan: readonly MovePlan[] = basePlan.map((entry, index) => {
    const swapped = swaps[index];
    if (swapped == null) return entry;
    const exercise = exerciseById(swapped) ?? null;
    return { exercise, seconds: entry.seconds, cadence: null, perSide: exercise?.perSide === true };
  });

  /** What this session is called for the purpose of coming back to it. */
  const resumeId =
    resumeKey ??
    (playlist != null
      ? `playlist:${playlist.map((step) => step.exerciseId).join(',')}`
      : override != null
        ? `moves:${day.day}:${override.join('|')}`
        : `day:${day.day}`);
  /** The moves as planned, by exercise id: what a saved place is matched
   * against, and what Skip files. A move swapped in by "Can't do this" stands
   * in its slot under the planned move's id, as the hosts file it. */
  const moveIds = basePlan.map((entry) => entry.exercise?.id ?? '');
  const moveIdsRef = useRef(moveIds);
  moveIdsRef.current = moveIds;
  /** Read once, at mount. The player is keyed per run by its hosts, so this is
   * the place the run starts from, not something to follow afterwards. */
  const [resume] = useState(() => readResume(resumeId, moveIds));
  /** Moves passed over with Skip, by exercise id. See `skipMove`. */
  const [skipped, setSkipped] = useState<readonly string[]>(() => resume?.skipped ?? []);
  const skippedRef = useRef(skipped);
  skippedRef.current = skipped;

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
  /** The session's length for the closing sheet: the dose the player timed,
   * every move at its own length, never the wall clock. Pauses, the count-ins
   * and the time spent reading the pain rule are not the session, and a tile
   * that grew with them would reward taking longer. */
  const doseMinutes = Math.max(1, Math.round(plan.reduce((sum, entry) => sum + entry.seconds, 0) / 60));

  const [clipFailed, setClipFailed] = useState(false);
  useEffect(() => setClipFailed(false), [move]);

  /** By catalogue id, never by title: a title is copy and will be reworded,
   * and a renamed exercise quietly losing its demonstration is a bug that looks
   * like nothing at all. Null for the six moves that have no clip yet, which
   * the card below states rather than showing another exercise's video. */
  const clip = clipFor(current?.exercise?.id ?? '');
  /** A wide clip, framed on the feet, is fitted whole on a dark panel rather
   * than on the grey studio the upright clips were filmed in. */
  const wideClip = WIDE_CLIPS.has(current?.exercise?.id ?? '');
  /** The move drawn: the shape to hold and where it is felt. */
  const drawing = illustrationFor(current?.exercise?.id ?? '');
  /**
   * What the stage shows: the clip of the motion, or the drawing of the
   * position. One picture of the move at a time. Both on screen at once, one
   * over the clock and one under it, split the eye between two pictures of the
   * same move. Null until somebody picks: then a clip that cannot load gives
   * way to the drawing, which is bundled and always there. Kept for the whole
   * session, so whoever prefers the drawing keeps it on the next move.
   */
  const [media, setMedia] = useState<'video' | 'pose' | null>(null);
  const showPose = wideClip && drawing != null && (media === 'pose' || (media == null && clipFailed));
  const nextMove = swaps[step + 1] != null ? (plan[step + 1]?.exercise?.title ?? moves[step + 1]) : moves[step + 1];
  const nextThumb = thumbFor(plan[step + 1]?.exercise?.id ?? '');

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
  /**
   * Where a planned move stands: which segment (a set on one foot, a rest, a
   * change of foot), and where the rep is inside a set. Null for a move with no
   * timeline, which keeps the single countdown.
   */
  const reading: TimelineReading | null =
    current?.timeline != null ? timelineAt(current.timeline, elapsed) : null;

  const phase: PhaseReading | null =
    reading != null
      ? reading.segment.kind === 'work' &&
        reading.segment.tempo != null &&
        reading.rep?.rep != null &&
        (reading.rep.phase === 'up' || reading.rep.phase === 'hold' || reading.rep.phase === 'down')
        ? { phase: reading.rep.phase, secondsLeft: reading.rep.secondsLeft, rep: reading.rep.rep, set: reading.segment.set, done: false }
        : null
      : current?.cadence != null
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
    reading != null
      ? reading.segment.kind === 'work' && reading.segment.side != null
        ? { side: reading.segment.side, secondsLeft: reading.secondsLeft, last: reading.segment.side === 'left' }
        : reading.segment.kind === 'switch'
          ? { side: reading.segment.to, secondsLeft: reading.secondsLeft, last: reading.segment.to === 'left' }
          : null
      : current?.perSide === true
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
  const remaining =
    reading != null ? (reading.rep?.secondsLeft ?? reading.secondsLeft) : phase != null ? phase.secondsLeft : moveLeft;

  /**
   * A tap when a set ends, and the count-in's own "go" when the next set begins
   * after a rest or a change of foot: the break counts its last three seconds
   * out loud (`BreakOverlay`), and this is the word that ends the count. Within
   * one move only: a new move starts on the count-in itself, and a change of
   * foot has its own buzz (see `announcedSide`).
   */
  const lastSegment = useRef<{ step: number; index: number } | null>(null);
  const segmentIndex = reading?.index ?? null;
  const segmentKind = reading?.segment.kind ?? null;
  useEffect(() => {
    const was = lastSegment.current;
    lastSegment.current = segmentIndex == null ? null : { step, index: segmentIndex };
    if (segmentIndex == null || was == null || was.step !== step || was.index === segmentIndex) return;
    if (segmentKind === 'rest') void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    else if (segmentKind === 'work') {
      playCountInCue('go');
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }
  }, [segmentIndex, segmentKind, step]);

  /**
   * "Done", "Skip", "Next": the rest of this segment, given up. A set finished
   * before the clock, a rest not wanted, the other foot already in place. The
   * playhead moves to where the segment ends; the last one ends the move, and
   * the reaction that advances on a move running out takes it from there. A
   * press while paused carries on: it is a way forward, not a step.
   */
  const skipSegment = useCallback(() => {
    if (reading == null) return;
    const total = moveMs.value / 1000;
    if (total <= 0) return;
    const end = Math.min(total, reading.segment.start + reading.segment.seconds);
    void Haptics.selectionAsync();
    progress.value = Math.min(1, end / total);
    deadline.value = 0;
    setElapsed(Math.floor(end));
    setPlaying(true);
  }, [reading, moveMs, progress, deadline]);

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
  // Read through a ref: the callback is a fresh closure on every host render.
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
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
    onCompleteRef.current?.({ skipped: skippedRef.current });
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
  /** Said for a moment under the header once a move has been swapped or
   * skipped. */
  const [swapNote, setSwapNote] = useState<string | null>(null);
  // Counted from the end of the count-in, which covers the move: the note is
  // read once the move is back on screen.
  useEffect(() => {
    if (swapNote == null || counting) return;
    const timer = setTimeout(() => setSwapNote(null), NOTE_MS);
    return () => clearTimeout(timer);
  }, [swapNote, counting]);

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
    () => progress.value >= 1,
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
  /** Ended by hand ("End session"), or every move skipped: nothing left to
   * come back to, so the place is not written again on the way out. */
  const endedRef = useRef(false);
  const saveResume = useCallback(() => {
    if (resumeId == null || finishedRef.current || endedRef.current) return;
    writeResume(resumeId, moveIdsRef.current, {
      step: stepRef.current,
      fraction: progress.value,
      skipped: skippedRef.current,
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
    : reading != null
      ? (() => {
          const text = workLine(reading, t);
          // Read aloud with commas: a middot is read as nothing at all.
          return text == null ? null : { text, spoken: text.replace(/ · /g, ', ') };
        })()
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

  /** The small button beside Pause during a set of a planned move: this set
   * is done before the clock. See `skipSegment`. A rest and a change of foot
   * have their own Skip, on their own screen. */
  const showSetDone = reading?.segment.kind === 'work' && !finished && !ready && !counting;

  /** The rest or change of foot under way, for `BreakOverlay`. */
  const breakSegment =
    !finished && reading != null && (reading.segment.kind === 'rest' || reading.segment.kind === 'switch')
      ? reading.segment
      : null;

  /** The pill over the clock. See `workPill`. */
  const pill = reading != null && !finished ? workPill(reading, t) : null;
  /** Whether this move ever shows a pill, so the row keeps its height for the
   * whole move and the stage does not jump when one comes and goes. */
  const hasPills =
    current?.timeline?.some(
      (segment) => segment.kind === 'work' && (segment.side != null || segment.holdSec != null || segment.tempo != null),
    ) === true;
  /**
   * During a set of counted reps the big number counts the reps, "4/10", not
   * seconds. A held rep is two seconds held and two let go, and a clock that
   * went 2, 1, 2, 1 under it told nobody anything. A timed hold (a stretch, a
   * balance) has no reps and keeps its countdown.
   */
  const repCount =
    !finished && reading?.segment.kind === 'work' && reading.rep?.rep != null && reading.rep.reps != null
      ? { rep: reading.rep.rep, reps: reading.rep.reps }
      : null;
  /** Which foot, in a pill beside it, during a one-foot set. */
  const pillSide =
    !finished && reading?.segment.kind === 'work' && reading.segment.side != null ? reading.segment.side : null;

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

  const sideNow = finished ? null : (pillSide ?? side?.side ?? null);

  /** Back a move, or to the start of the first one, through a fresh count. */
  const stepBack = useCallback(() => {
    void Haptics.selectionAsync();
    setPlaying(true);
    if (goTo(step - 1)) return;
    progress.value = 0;
    deadline.value = 0;
    setElapsed(0);
    player.currentTime = 0;
    countIn(false);
  }, [goTo, step, progress, deadline, player, countIn]);

  /** The move is done before its clock: on to the next one; past the last
   * one the session is over. Filed as done, like a move that ran out. */
  const finishMove = useCallback(() => {
    setPlaying(true);
    advance();
  }, [advance]);

  /**
   * Skip: on to the next move, at once, with no question. For everybody and
   * on every run (the trial, a subscriber, Day 1).
   *
   * For today only: the move stays in her plan. It is "Can't do this"'s
   * move-to-next step without its other half: nothing is marked, nothing
   * re-planned, and the move is filed as skipped for today
   * (`SessionOutcome.skipped`), which the plan's "three skips and it is
   * swapped out" rule does not count (`skippedForToday`, plan `store.ts`).
   *
   * The last move skipped finishes the run as a last move running out does.
   * A run with every move skipped, though, did nothing: it is left as by
   * "Pause", files nothing, and keeps no place to come back to.
   */
  const skipMove = useCallback(() => {
    const id = moveIdsRef.current[step];
    if (id == null || id === '') return;
    track('exercise_skipped', { exercise: id, day: day.day });
    const next = skippedRef.current.includes(id) ? skippedRef.current : [...skippedRef.current, id];
    skippedRef.current = next;
    setSkipped(next);
    const lastMove = step + 1 >= planRef.current.length;
    if (lastMove && moveIdsRef.current.every((move) => next.includes(move))) {
      endedRef.current = true;
      clearResume(resumeId);
      setPlaying(false);
      setCountFrom(null);
      endActivity();
      onBack();
      return;
    }
    setSwapNote(t('player.skip.note'));
    setPlaying(true);
    advance();
  }, [step, day, resumeId, endActivity, onBack, t, advance]);

  /**
   * The close button: "Pause or end?". Pausing is what leaving always was
   * (the place is kept and the next opening resumes it); ending also forgets
   * the place. The move holds still while the question is up.
   */
  const askClose = useCallback(() => {
    if (finished) {
      leave();
      return;
    }
    pauseForQuestion();
    Alert.alert(
      t('player.close.title'),
      t('player.close.body'),
      [
        { text: t('player.close.keepGoing'), style: 'cancel', onPress: resumeAfterPain },
        { text: t('player.close.pause'), onPress: leave },
        {
          text: t('player.close.end'),
          style: 'destructive',
          onPress: () => {
            endedRef.current = true;
            clearResume(resumeId);
            leave();
          },
        },
      ],
      { cancelable: true, onDismiss: resumeAfterPain },
    );
  }, [finished, leave, pauseForQuestion, resumeAfterPain, resumeId, t]);

  /** VoiceOver hears each move as it starts: its name, the time on it, and what is next. */
  const announcedFor = useRef<string | null>(null);
  useEffect(() => {
    if (!running || move == null) return;
    const key = `${step}:${move}`;
    if (announcedFor.current === key) return;
    announcedFor.current = key;
    const time = t('session.secondsLeftA11y', { count: moveLeft });
    AccessibilityInfo.announceForAccessibility(
      nextMove != null
        ? t('player.a11y.move', { name: move, time, next: nextMove })
        : t('player.a11y.moveLast', { name: move, time }),
    );
    // Once per move, when its clock starts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, step, move]);

  return {
    mirrored,
    moves,
    plan,
    step,
    moveCount,
    move,
    last,
    current,
    finished,
    counting,
    countFrom,
    countNext,
    setCountFrom,
    running,
    playing,
    setPlaying,
    progress,
    moveMs,
    player,
    clipFailed,
    wideClip,
    drawing,
    setMedia,
    showPose,
    nextMove,
    nextThumb,
    reading,
    remaining,
    moveLeft,
    side,
    counter,
    loadNote,
    spokenMove,
    ctaState,
    showSetDone,
    breakSegment,
    pill,
    repCount,
    sideNow,
    skipSegment,
    sound,
    canReplay,
    replayInstruction,
    askingPain,
    setAskingPain,
    reportPain,
    askingCantDo,
    setAskingCantDo,
    reportCantDo,
    ruleOpen,
    setRuleOpen,
    closeRule,
    pauseForQuestion,
    resumeAfterPain,
    carryOn,
    swapNote,
    celebrating,
    setCelebrating,
    closedDone,
    endedEarly,
    doseMinutes,
    startedAt,
    pauseByHand,
    resumeByHand,
    stepBack,
    finishMove,
    skipMove,
    skipped,
    askClose,
    advance,
  };
}
