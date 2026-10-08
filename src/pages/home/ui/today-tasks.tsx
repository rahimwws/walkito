import ChartLineData02Icon from '@hugeicons/core-free-icons/ChartLineData02Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import RulerIcon from '@hugeicons/core-free-icons/RulerIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import Yoga01Icon from '@hugeicons/core-free-icons/Yoga01Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { LinearTransition, ReduceMotion } from 'react-native-reanimated';

import { useHealthSignals, type HealthSignals } from '@/entities/health';
import {
  PROGRAM,
  RETEST_MINUTES,
  RETEST_TESTS,
  TODAY_INDEX,
  completePlanSession,
  doseLabel,
  doseSeconds as planDoseSeconds,
  exerciseById,
  exerciseCategoryLabel,
  logFor,
  planSessionDone,
  todayDayNumber,
  todayKey,
  todayPlan,
  twoMinuteVersion,
  useLogsVersion,
  useNextSession,
  usePlanVersion,
  useRetest,
  writeLog,
  type DayType,
  type ExerciseCategory,
  type PlannedExercise,
  type ProgramDay,
  type TodayReason,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { PROGRAM_MS } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { SessionView, TestDayFlow, type PlaylistStep } from '@/widgets/session-player';

import { DoneCard } from './done-card';

/** The mascot, mid-stride. It belongs to this block rather than to the screen:
 * the list is the one place on Home that asks for work, and a character running
 * off the end of its title is the cheapest way to make that read as a start
 * rather than as a chore. */
const MASCOT = require('@assets/home/mascot-tasks.png');

/** The heading's line box and the artwork's, both pinned: the mascot is centred
 * on the title by arithmetic, and arithmetic needs two known numbers. */
const HEADING_LINE = 28;
const MASCOT_SIZE = 64;

/**
 * How each of the four kinds of day presents itself here.
 *
 * A category is not a folder, it is a promise about effort: Fitness asks
 * something of you, Mobility asks less, Recovery asks nothing and Habit asks
 * only that you remember. The colour is what lets that be read down the column
 * without reading a word — and it names the kind, never rates it.
 *
 * Colour and glyph only. The *word* comes from `exerciseCategoryLabel`, which
 * is the catalogue's own translation of the same four categories — a second
 * copy of them under `home.` would be two places to change and one place to
 * forget.
 */
const CATEGORIES = {
  fitness: { accent: 'violet' as AccentName, icon: Dumbbell01Icon },
  mobility: { accent: 'teal' as AccentName, icon: Yoga01Icon },
  recovery: { accent: 'amber' as AccentName, icon: Moon02Icon },
  habit: { accent: 'blue' as AccentName, icon: RepeatIcon },
} satisfies Record<string, { accent: AccentName; icon: IconSvgElement }>;

/** The glyphs on a row's second line. Heavier than the set's default stroke:
 * at 13pt a 1.5 line thins to nothing against the tinted text beside it. */
const GLYPH_STROKE = 2.2;

type CategoryKey = keyof typeof CATEGORIES;

/**
 * The catalogue's categories in this list's own key.
 *
 * Written out rather than lower-cased with a cast. A fifth category added to
 * the catalogue should be a type error here, not a row that renders with no
 * colour and no glyph because a string arrived that `CATEGORIES` has no entry
 * for.
 */
const CATEGORY_KEYS: Readonly<Record<ExerciseCategory, CategoryKey>> = {
  Fitness: 'fitness',
  Mobility: 'mobility',
  Recovery: 'recovery',
  Habit: 'habit',
};

export type Task = {
  id: string;
  title: string;
  /**
   * The catalogue's own category, not this list's key for it.
   *
   * Kept in the entity's vocabulary so the word on the row can be asked of the
   * entity that owns it, at render time and therefore in the current language.
   * `CATEGORY_KEYS` turns it into the colour and the glyph.
   */
  category: ExerciseCategory;
  /**
   * A duration or a time, shown as a chip.
   *
   * Its presence is what decides the row's trailing control, and that is the
   * whole grammar of the list: a task that says how long it takes is something
   * you start, so it shows the cost; a task with nothing to say about time is
   * something you simply did or did not do, so it shows a box.
   */
  chip?: string;
  /**
   * The dose, as the program wrote it: "3 × 12".
   *
   * Absent on anything the program prescribes no dose for — the habit row,
   * mainly, and the two exercises that are a length of time rather than a
   * count. Those are the same rows that carry no chip, because "no dose" and
   * "nothing to say about time" turn out to be the same set.
   */
  dose?: string;
  /** What the player runs for this task: the plan's own dose, timed. */
  step: PlaylistStep;
};

type TodayWork = {
  tasks: readonly Task[];
  retest: boolean;
  /** The day's kind and planned minutes: what the player says it is running,
   * and what the session is recorded as when the list finishes it. */
  kind: DayType;
  minutes: number;
  /** Why today differs from the plan, when it does. */
  reason: TodayReason;
  /** "Not up for it?": the focus exercise alone, two sets. */
  short: PlaylistStep[];
};

/**
 * Today's list: this week's plan for today, adjusted to this morning.
 *
 * Not the day as planned on Sunday — the day after the user's own morning has
 * been taken into account. Log a seven and this list is three minutes of
 * seated work by the time the check-in has slid out of the way. The Workout
 * page shows the same day from the same call, so the two cannot disagree.
 */
function tasksForToday(t: Translate, health: HealthSignals): TodayWork {
  const day = todayPlan(
    {
      stepsYesterday: health.stepsYesterday,
      steps28Avg: health.stepsBaseline,
      sleepHours: health.sleepLastNightMin == null ? null : health.sleepLastNightMin / 60,
    },
    null,
  );
  if (day.type === 'test') {
    return {
      tasks: [],
      retest: true,
      kind: day.type,
      minutes: RETEST_MINUTES,
      reason: null,
      short: [],
    };
  }
  return {
    retest: false,
    kind: day.type,
    minutes: day.minutes,
    reason: day.reason,
    short: twoMinuteVersion(day).exercises.map(stepOf),
    tasks: day.exercises.map((planned): Task => {
      const exercise = exerciseById(planned.id);
      const seconds = planDoseSeconds(planned.dose);
      return {
        id: planned.id,
        title: exercise.title,
        category: exercise.category,
        chip: chipFor(seconds, t),
        dose: doseLabel(planned.dose.sets, planned.dose.reps, planned.dose.holdSec, planned.dose.perSide),
        step: stepOf(planned),
      };
    }),
  };
}

/**
 * The day the player runs a task against.
 *
 * Today as the weekly plan has it — its kind, its minutes, today's day number —
 * over the fixed program's day for the block, which only the load notes still
 * read. Never a checkpoint: a task off this list is one exercise, and a day
 * that said "checkpoint" once put the player into its measuring mode instead.
 *
 * Built at the moment the player opens, not memoised at mount. The memo it
 * replaced held the day the list first rendered on, so a list left open past
 * midnight played yesterday's day.
 */
function playerDay(kind: DayType, minutes: number): ProgramDay {
  const n = todayDayNumber();
  return {
    ...PROGRAM[TODAY_INDEX],
    index: n - 1,
    day: n,
    kind: kind === 'rest' || kind === 'test' ? 'recovery' : kind,
    minutes,
    checkpoint: false,
  };
}

function stepOf(planned: PlannedExercise): PlaylistStep {
  const { dose } = planned;
  return {
    exerciseId: planned.id,
    seconds: planDoseSeconds(dose),
    perSide: dose.perSide,
    ...(dose.tempo != null && dose.reps != null
      ? { cadence: { tempo: dose.tempo, reps: dose.reps, sets: dose.sets } }
      : {}),
    ...(dose.addWeight === true ? { addWeight: true } : {}),
  };
}

/**
 * How long one exercise takes, as the chip prints it.
 *
 * Its own length, and only its own. The chip used to carry the whole session's
 * minutes on every row, so three exercises adding up to seven minutes each
 * claimed seven — twenty-one between them, against a session the same screen
 * called seven.
 *
 * The seconds are the plan dose's own, the same figure the player times the
 * move by, so the chip and the countdown cannot disagree.
 */
function chipFor(seconds: number, t: Translate): string | undefined {
  if (seconds <= 0) return undefined;
  if (seconds < 60) return t('home.chipSeconds', { count: Math.round(seconds) });
  return t('home.chipMinutes', { count: Math.round(seconds / 60) });
}

/**
 * Today's list.
 *
 * Two lines per row and no card around any of them. The title is what to do and
 * the coloured line under it is what kind of thing it is, which means the list
 * can be skimmed twice — once down the white titles for the work, once down the
 * colours for how hard the day is going to be.
 */
export function TodayTasks() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  /** Home stays mounted under the other tabs; the countdown in the finished
   * banner has no reason to tick there. */
  const focused = useIsFocused();
  /** Which task's player is up, and the day it runs against — fixed when it
   * opens, so a write while it plays cannot hand the player a new day. */
  const [open, setOpen] = useState<{ task: Task; day: ProgramDay } | null>(null);
  /** The day's tests, taken or read back. Separate from `open` because it is
   * the whole test day rather than one task off the list. */
  const [testing, setTesting] = useState<'take' | 'review' | null>(null);
  /** The 2-minute version, playing. */
  const [short, setShort] = useState<ProgramDay | null>(null);

  /**
   * Today's work, recomputed whenever the record behind it moves.
   *
   * Both subscriptions are load-bearing and neither is redundant. The log is
   * what the morning check-in writes, and a flare has to reach this list in the
   * same beat it reaches the rest of the screen; the program state carries the
   * progression offset, which decides the dose printed on every row. Neither
   * value is read directly — they are versions, and the work is in the memo.
   */
  const logsVersion = useLogsVersion();
  const planVersion = usePlanVersion();
  const health = useHealthSignals();
  /**
   * When the next session opens. Read here, not only in the banner that counts
   * down to it, because the hook wakes at midnight — and midnight is when
   * "today" moves on. The memos below list the date for the same reason: keyed
   * on versions alone they kept yesterday's list, ticked, until something
   * unrelated happened to write.
   */
  const next = useNextSession();
  const date = todayKey();

  const {
    tasks,
    retest,
    kind,
    minutes,
    reason,
    short: shortSteps,
  } = useMemo(() => {
    return tasksForToday(t, health);
    // The first two are versions rather than inputs — the plan reads the log
    // and its own store, and both are mutated in place, so they are the only
    // things that can tell React the answer has moved. `t` and the health
    // facts are real inputs, and so is the date.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsVersion, planVersion, health, t, date]);

  /**
   * Whether today's plan session is finished — the one answer Plan, the widget
   * and the streak read too, so the four cannot disagree.
   *
   * Ahead of the ticks, not derived from them. A test day ticks nothing, and a
   * session finished on the Plan tab ticks nothing here either; reading the
   * ticks alone is how Home once offered a test that had just been saved.
   */
  const dayDone = useMemo(
    () => planSessionDone(date),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logsVersion, planVersion, date],
  );

  /**
   * Which tasks are ticked, read from the day log rather than held here alone.
   *
   * It used to be `useState([])`, which made the writes one-way: `record` wrote
   * every tick through to the log, and nothing ever read it back. Leaving Home
   * and returning — or finishing a session in the player — emptied the ticks on
   * screen while the streak, the path and the score all counted the day as
   * done.
   */
  const ticked = useMemo<readonly string[]>(
    () => logFor(todayDayNumber())?.exercisesDone ?? [],
    // The log map is mutated in place, so the version is the only thing that
    // can say it moved.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logsVersion, date],
  );
  /** A finished day shows every row finished, however it was finished. */
  const isDone = (id: string) => dayDone || ticked.includes(id);

  /**
   * Unfinished first, in their original order; finished sink to the bottom.
   *
   * A stable sort, so ticking one task never reshuffles the others around it —
   * only the ticked row moves, and it moves to the end. What is left at the top
   * is always exactly what is left to do, which is the only question this list
   * exists to answer.
   */
  const ordered = useMemo(
    () => (dayDone ? tasks : [...tasks].sort((a, b) => Number(ticked.includes(a.id)) - Number(ticked.includes(b.id)))),
    [tasks, ticked, dayDone],
  );

  /** Today's test results are on file — what "See results" opens. */
  const tested = useRetest(todayDayNumber()) != null;

  /**
   * Ticking a task, from the list or by finishing its player.
   *
   * Written through to the day log, so the same act feeds the streak, the path
   * and the score. The tick that finishes the list finishes the day, and it
   * does so the way every other screen does: `completePlanSession` writes the
   * session, the log and the sync in one go, so Plan, the widget and the
   * server hear about it in the same beat Home does.
   *
   * The day counts as trained once every exercise on it is ticked. Anything
   * less is progress, not a session, and claiming otherwise would let a day be
   * completed by opening it. The converse holds too: a day already finished is
   * never un-finished by a tick — a later write of the ticks used to set
   * `sessionCompleted: false` over a session recorded elsewhere.
   */
  const record = (ids: readonly string[]) => {
    const today = todayKey();
    const wasComplete = planSessionDone(today);
    const complete = tasks.length > 0 && tasks.every((task) => ids.includes(task.id));
    if (complete && !wasComplete) {
      completePlanSession({
        date: today,
        source: 'plan',
        minutes,
        exerciseIds: ids.filter((id) => tasks.some((task) => task.id === id)),
      });
      return;
    }
    writeLog(todayDayNumber(), {
      exercisesDone: [...ids],
      sessionCompleted: complete || wasComplete,
    });
  };

  const finish = (id: string) => record(ticked.includes(id) ? ticked : [...ticked, id]);

  /**
   * Everything on today's list is done — or the day is, which on a test day
   * with no list is the same thing.
   *
   * Worth a line of its own. Without one the finished list is a column of
   * struck-through text that looks the same as a list nobody has started —
   * every row greyed, nothing saying which of the two it is. It is also the
   * only place the app can answer "am I done?", which is the question somebody
   * opens it to ask on the evening of a day they already trained — and the
   * question after it, "when is the next one?".
   */
  const allDone = dayDone || (tasks.length > 0 && tasks.every((task) => ticked.includes(task.id)));

  return (
    <View style={styles.root}>
      <View style={styles.headingRow}>
        {/* A real apostrophe, from the catalogue. This read `Today&apos;s
            Tasks`: React Native does not decode HTML entities, so the heading
            was literally printing "Today&apos;s Tasks" on the screen. */}
        <Text style={[styles.heading, { color: colors.foreground }]}>{t('home.tasksTitle')}</Text>
        {/* Decoration, and only decoration — it says nothing the list does not
            already say, so it is hidden from anyone listening rather than read
            out as an unnamed image between a heading and its rows. */}
        {/* Not when the day is done: the done card brings its own mascot, and
            two on one heading read as a sticker sheet. */}
        {!allDone && (
          <Image
            source={MASCOT}
            accessibilityElementsHidden
            importantForAccessibility="no"
            style={styles.mascot}
            resizeMode="contain"
          />
        )}
      </View>

      {/* Why today is not the day as planned — said, rather than done silently. */}
      {!allDone && (reason === 'heavy-day' || reason === 'short-sleep') && (
        <Text style={[styles.reason, { color: meter.caption }]}>
          {reason === 'heavy-day' ? t('pages.plan.reasonHeavyDay') : t('pages.plan.reasonShortSleep')}
        </Text>
      )}

      {/* Above the list, not instead of it. The rows stay readable — somebody
          checking what they did today should be able to see it, and hiding the
          work behind a tick would make the screen forget the session the
          moment it ended. */}
      {allDone && (
        <DoneCard
          next={next}
          active={focused}
          date={date}
          plannedMinutes={minutes}
          tickedMoves={dayDone ? tasks.length : ticked.length}
          retest={retest}
        />
      )}

      <View style={styles.list}>
        {/* A day with nothing on it is a real answer, not a failure to load.
            The row style and the caption colour, so the line sits exactly where
            the first task would and reads as quietly as a finished one. */}
        {ordered.length === 0 && !retest && (
          <Text style={[styles.title, { color: meter.caption }]}>{t('home.nothingScheduled')}</Text>
        )}
        {/* A retest day's work is the tests, drawn as one more row of the list
            rather than as a second primary button. Until the morning check-in
            is answered the check-in's own button is already on screen, and two
            full-width primaries stacked one above the other asked the user to
            pick between them. A row opens the tests the same way a task opens
            its player, which is the grammar the rest of this list already
            taught. */}
        {ordered.length === 0 && retest && (
          <RetestRow
            done={dayDone}
            onOpen={() => {
              Haptics.selectionAsync();
              setTesting('take');
            }}
            onResults={
              tested
                ? () => {
                    Haptics.selectionAsync();
                    setTesting('review');
                  }
                : null
            }
          />
        )}
        {ordered.map((task) => (
          // `layout`, never `entering`. A layout transition animates a row
          // between two measured positions, so the worst it can do is not run;
          // an entering animation seeds the row at opacity zero and has left
          // content permanently invisible in this project three times.
          <Animated.View key={task.id} layout={LinearTransition.duration(PROGRAM_MS).reduceMotion(ReduceMotion.System)}>
            <TaskRow
              task={task}
              done={isDone(task.id)}
              onOpen={() => {
                Haptics.selectionAsync();
                setOpen({ task, day: playerDay(kind, minutes) });
              }}
              // Nothing to untick on a finished day: every row reads done
              // because the day is, and a box that let go of one would be a
              // control that changes nothing.
              onToggle={
                dayDone
                  ? undefined
                  : () => {
                      Haptics.selectionAsync();
                      record(ticked.includes(task.id) ? ticked.filter((id) => id !== task.id) : [...ticked, task.id]);
                    }
              }
            />
          </Animated.View>
        ))}
      </View>

      {/* "Not up for it?": the focus exercise alone. It finishes the day the
          way the full list does, so it counts for the streak. */}
      {!allDone && !retest && shortSteps.length > 0 && (
        <Pressable
          accessibilityRole="button"
          onPress={() => {
            Haptics.selectionAsync();
            setShort(playerDay(kind, 2));
          }}
          hitSlop={8}
          style={({ pressed }) => [styles.notUp, pressed && { opacity: 0.5 }]}
        >
          <Text style={[styles.notUpText, { color: meter.caption }]}>{t('pages.plan.notUpForIt')}</Text>
        </Pressable>
      )}

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={open != null || testing != null || short != null}
        onRequestClose={() => {
          setOpen(null);
          setTesting(null);
          setShort(null);
        }}
      >
        {short != null && (
          <View style={[styles.player, { backgroundColor: colors.background }]}>
            <SessionView
              day={short}
              playlist={shortSteps}
              onBack={() => setShort(null)}
              onFinish={() => {
                if (!planSessionDone(todayKey())) {
                  completePlanSession({
                    date: todayKey(),
                    source: 'plan',
                    minutes: 2,
                    exerciseIds: shortSteps.map((step) => step.exerciseId),
                  });
                }
                setShort(null);
              }}
            />
          </View>
        )}
        {/* The test day paints its own page and keeps its own insets, and it
            finishes the day itself (`finishTestDay`): the numbers, the session,
            the goals and the sync. This used to be the session player on the
            fixed program's day, which saved nothing the plan could read — so
            Home went on offering a test Plan called done. */}
        {testing != null && <TestDayFlow review={testing === 'review'} onClose={() => setTesting(null)} />}
        {/* The sheet paints its own page colour. `SessionView` deliberately has
            none — inside the program it sits on the sheet face, which supplies
            it — so dropped straight into a bare Modal it showed iOS's default
            white behind a dark app. Every other sheet here does the same thing
            at its call site. */}
        {open != null && (
          <View style={[styles.player, { backgroundColor: colors.background }]}>
            <SessionView
              day={open.day}
              // One task, one move, at the plan's dose. The player's own
              // transport still works — it simply has nowhere to go next, which
              // is what makes the end of the move the end of the task.
              playlist={[open.task.step]}
              // Asks "2 more good reps?" like every other session. The answer
              // is filed on the day's plan session.
              feedback
              onBack={() => setOpen(null)}
              onFinish={() => {
                finish(open.task.id);
                setOpen(null);
              }}
            />
          </View>
        )}
      </Modal>
    </View>
  );
}

/**
 * The day's retest, as a row of the list.
 *
 * The same two lines and the same trailing chip as a task, tinted with the
 * accent the program uses for checkpoints. Once today's tests are on record it
 * is struck through and never opens the tests again: a second run would file
 * a second set of numbers over the first. What it opens instead is the
 * results, read-only — the reason the four minutes were worth it.
 */
function RetestRow({
  done,
  onOpen,
  onResults,
}: {
  done: boolean;
  onOpen: () => void;
  /** Opens today's results. Null when there are none on file to open — a day
   * finished before results were kept — and the row is then only a tick. */
  onResults: (() => void) | null;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const tone = accents[scheme].orange;
  const title = t('home.retestTask');
  const subtitle = t('home.retestTaskSub', {
    tests: t('home.tests', { count: RETEST_TESTS }),
  });

  const inert = done && onResults == null;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: done, disabled: inert }}
      accessibilityLabel={t('home.taskA11y', { title, subtitle })}
      accessibilityHint={done && onResults != null ? t('home.seeResults') : undefined}
      disabled={inert}
      onPress={done ? (onResults ?? undefined) : onOpen}
      style={({ pressed }) => [styles.retestCard, { backgroundColor: colors.card }, pressed && { opacity: 0.7 }]}
    >
      {/* The tile carries the kind of work the way a task row's tinted line
          does, so the one row on a test day still reads at a glance. */}
      <View style={[styles.iconTile, { backgroundColor: tone.track }]}>
        <HugeiconsIcon icon={RulerIcon} size={22} color={tone.fill} strokeWidth={2} />
      </View>
      <View style={styles.copy}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            { color: colors.foreground },
            done && {
              textDecorationLine: 'line-through',
              color: meter.caption,
            },
          ]}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={[styles.categoryText, { color: tone.fill }]}>
          {subtitle}
        </Text>
      </View>

      {done && onResults != null ? (
        <View style={[styles.chip, { backgroundColor: tone.track }]}>
          <HugeiconsIcon icon={ChartLineData02Icon} size={13} color={tone.fill} strokeWidth={GLYPH_STROKE} />
          <Text style={[styles.chipText, { color: tone.fill }]}>{t('home.seeResults')}</Text>
        </View>
      ) : done ? (
        <View style={[styles.box, { borderColor: tone.fill, backgroundColor: tone.fill }]}>
          <HugeiconsIcon icon={Tick02Icon} size={16} color={colors.background} strokeWidth={2.5} />
        </View>
      ) : (
        <View style={[styles.chip, { backgroundColor: tone.track }]}>
          <HugeiconsIcon icon={Clock01Icon} size={13} color={tone.fill} strokeWidth={GLYPH_STROKE} />
          <Text style={[styles.chipText, { color: tone.fill }]}>
            {t('home.chipMinutes', { count: RETEST_MINUTES })}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

function TaskRow({
  task,
  done,
  onOpen,
  onToggle,
}: {
  task: Task;
  done: boolean;
  /** The row opens the exercise. */
  onOpen: () => void;
  /** The box marks it done without opening anything — for the task you have
   * already done today and only need to record. Absent once the day is
   * finished, when the box is a readout rather than a control. */
  onToggle?: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const category = CATEGORIES[CATEGORY_KEYS[task.category]];
  const tone = accents[scheme][category.accent];

  /**
   * The second line: what kind of thing this is, and how much of it.
   *
   * The dose shares the category's line rather than taking one of its own. It
   * is the one number the user has to carry from this screen into the exercise,
   * and a row that says "Heel raises / Fitness" sends them off to guess at it —
   * but a third line would turn a two-line row into a three-line one and cost
   * the list its rhythm. The separator is what lets one line hold both.
   */
  const label = exerciseCategoryLabel(task.category);
  const subtitle = task.dose != null ? t('home.taskSubtitle', { category: label, dose: task.dose }) : label;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: done }}
      // The dose is read out with the rest of the line. Stopping at the
      // category would leave a screen reader user the only person on this row
      // who cannot hear how many.
      accessibilityLabel={t('home.taskA11y', { title: task.title, subtitle })}
      onPress={onOpen}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}
    >
      <View style={styles.copy}>
        <Text
          style={[
            styles.title,
            { color: colors.foreground },
            // Struck through rather than hidden. A list that removes what you
            // finished takes the evidence away with it, and on a bad week the
            // evidence is the point.
            done && {
              textDecorationLine: 'line-through',
              color: meter.caption,
            },
          ]}
        >
          {task.title}
        </Text>
        <View style={styles.category}>
          <HugeiconsIcon icon={category.icon} size={13} color={tone.fill} strokeWidth={GLYPH_STROKE} />
          <Text style={[styles.categoryText, { color: tone.fill }]}>{subtitle}</Text>
        </View>
      </View>

      {task.chip != null && !done ? (
        <View style={[styles.chip, { backgroundColor: tone.track }]}>
          <HugeiconsIcon icon={Clock01Icon} size={13} color={tone.fill} strokeWidth={GLYPH_STROKE} />
          <Text style={[styles.chipText, { color: tone.fill }]}>{task.chip}</Text>
        </View>
      ) : (
        // Its own target, so the box can record something already done without
        // making the user sit through a player for it. Dashed while empty,
        // solid once filled — the border style does the same job as the tick,
        // which is what makes the state read from across the room.
        <Pressable
          accessibilityRole="checkbox"
          accessibilityState={{ checked: done, disabled: onToggle == null }}
          accessibilityLabel={done ? t('home.markNotDone') : t('home.markDone')}
          disabled={onToggle == null}
          onPress={onToggle}
          hitSlop={8}
          style={({ pressed }) => [
            styles.box,
            done
              ? {
                  borderColor: tone.fill,
                  backgroundColor: tone.fill,
                  borderStyle: 'solid',
                }
              : { borderColor: meter.track, borderStyle: 'dashed' },
            pressed && { opacity: 0.6 },
          ]}
        >
          {done && <HugeiconsIcon icon={Tick02Icon} size={16} color={colors.background} strokeWidth={2.5} />}
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  player: { flex: 1 },
  reason: {
    ...fonts.medium(15),
    lineHeight: 21,
    marginTop: 6,
  },
  notUp: { alignSelf: 'center', paddingVertical: 10, marginTop: 4 },
  notUpText: {
    ...fonts.semibold(15),
    textDecorationLine: 'underline',
  },
  root: {
    alignSelf: 'stretch',
  },
  /** Nothing but the heading's own line. The row is the mascot's frame of
   * reference and contributes no height of its own beyond the text. */
  headingRow: {
    height: HEADING_LINE,
    justifyContent: 'center',
  },
  /**
   * Absolute, so the artwork costs the layout nothing.
   *
   * Laid out in the flow it was a 64pt row where a 28pt line used to be, and
   * everything under it — the whole task list — sat thirty-six points lower
   * than before. A decoration must not be able to move the content it decorates.
   *
   * Centred on the heading by arithmetic rather than by `alignItems`, which is
   * why the line height above is pinned: half the difference between the two
   * boxes, lifted.
   */
  mascot: {
    position: 'absolute',
    // A style rather than a prop: `Image` does not take `pointerEvents`. It
    // overhangs the first task row, and on Android that overhang would be
    // hit-testable — iOS clips touches to the parent's bounds, Android does
    // not.
    pointerEvents: 'none',
    // Nudged into the gutter: the drawing carries its own transparent margin,
    // so aligning the file's edge to the text leaves the character looking
    // short of it.
    right: -6,
    top: (HEADING_LINE - MASCOT_SIZE) / 2,
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
  },
  heading: {
    ...fonts.heavy(22, -0.6),
    lineHeight: HEADING_LINE,
  },
  list: {
    marginTop: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 13,
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  title: fonts.bold(17, -0.3),
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  categoryText: fonts.semibold(14, -0.1),
  /** The retest on a day with nothing else on it: one row, given a surface of
   * its own so it does not float alone under the heading. */
  retestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  iconTile: {
    width: 46,
    height: 46,
    borderRadius: 15,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  chipText: fonts.bold(14, -0.1),
  box: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderCurve: 'continuous',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
