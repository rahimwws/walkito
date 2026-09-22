import * as Haptics from 'expo-haptics';
import {
  ArrowsClockwiseIcon,
  BarbellIcon,
  CheckIcon,
  ClockIcon,
  MoonIcon,
  WavesIcon,
  type Icon,
} from 'phosphor-react-native';
import { useMemo, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { LinearTransition, ReduceMotion } from 'react-native-reanimated';

import {
  PROGRAM,
  RETEST_MINUTES,
  RETEST_TESTS,
  TODAY_INDEX,
  blockFor,
  currentDay,
  daysSinceLastSession,
  exerciseCategoryLabel,
  hoursBaseline,
  hoursOnFeetOn,
  kindFor,
  logFor,
  painAverage,
  painOn,
  programState,
  resolveDay,
  useLogsVersion,
  writeLog,
  useProgramState,
  type Prescription,
  type ExerciseCategory,
  type ProgramDay,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { PROGRAM_MS } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { doseSeconds } from '@/widgets/session-player';
import { SessionView } from '@/widgets/session-player';

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
  fitness: { accent: 'violet' as AccentName, icon: BarbellIcon },
  mobility: { accent: 'teal' as AccentName, icon: WavesIcon },
  recovery: { accent: 'amber' as AccentName, icon: MoonIcon },
  habit: { accent: 'blue' as AccentName, icon: ArrowsClockwiseIcon },
} satisfies Record<string, { accent: AccentName; icon: Icon }>;

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
};

/**
 * Today's list, as the engine resolves it.
 *
 * Not the day's template — the day *after* the user's own morning has been
 * taken into account. That distinction is the point of asking: log a seven and
 * this list is three minutes of unloaded work by the time the check-in has
 * finished sliding out of the way, without the screen having to know why.
 *
 * The chip carries the session's length rather than a per-exercise one. There
 * is no per-exercise figure to carry — the program doses in sets and reps, and
 * the player gives every move the same minute — so quoting anything else here
 * would be inventing a second source of truth next to the one the session
 * header already prints.
 */
function tasksForToday(t: Translate): { tasks: readonly Task[]; retest: boolean } {
  const dayNumber = currentDay();
  const state = programState();
  const block = blockFor(dayNumber, state.planLength);
  // Past the final block there is no block to resolve against, and maintenance
  // supplies its own schedule. The list says nothing rather than guessing, and
  // its empty state is already the right thing to show.
  if (block == null) return { tasks: [], retest: false };

  const resolved = resolveDay({
    dayNumber,
    block,
    kind: kindFor(dayNumber),
    painToday: painOn(dayNumber),
    pain7dAvg: painAverage(dayNumber, 7),
    hoursOnFeetYesterday: hoursOnFeetOn(dayNumber - 1),
    hoursBaseline: hoursBaseline(dayNumber),
    daysSinceLastSession: daysSinceLastSession(dayNumber),
    progressionOffset: state.progressionOffset,
  });

  return {
    // A retest day resolves to no exercises, which is not the same fact as a
    // rest day resolving to none — so the caller is told which empty this is
    // rather than having to infer it from a zero.
    retest: resolved.retest,
    tasks: resolved.exercises.map(({ exercise, prescription }): Task => ({
      id: exercise.id,
      title: exercise.title,
      category: exercise.category,
      // This exercise's length, not the session's. It used to print
      // `resolved.minutes`, which is how long the whole list takes — so a
      // hundred-second stretch, a ninety-second one and a set of ten all
      // claimed seven minutes each, and the three of them together claimed
      // twenty-one.
      chip: chipFor(prescription, t),
      dose: prescription?.label,
    })),
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
 * `doseSeconds` is the arithmetic the player already uses for the same
 * question, so the chip and the countdown cannot disagree. A dose it cannot
 * measure — counted work with neither a tempo nor a hold, fifteen ankle rocks —
 * gets no chip rather than a guess, which is the same thing the player does
 * with it.
 */
function chipFor(
  prescription: Prescription | null | undefined,
  t: Translate,
): string | undefined {
  const seconds = doseSeconds(prescription ?? null);
  if (seconds == null || seconds <= 0) return undefined;
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
  /** Which task's player is up. The task itself is the state — there is nothing
   * to know about the sheet the task does not already say. */
  const [open, setOpen] = useState<Task | null>(null);

  /** The day the player runs against. Only its clip lookup and layout matter
   * here; the moves come from the task. */
  const today = useMemo<ProgramDay>(() => PROGRAM[TODAY_INDEX], []);

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
  const state = useProgramState();

  /**
   * Which tasks are ticked, read from the day log rather than held here alone.
   *
   * It used to be `useState([])`, which made the writes one-way: `record` wrote
   * every tick through to the log, and nothing ever read it back. Leaving Home
   * and returning — or finishing a session in the player — emptied the ticks on
   * screen while the streak, the path and the score all counted the day as
   * done. The list disagreed with every other surface about what had happened
   * today, and it was the only one anybody was looking at.
   *
   * Derived, so there is one answer. `useLogsVersion` below is what re-runs it.
   */
  const done = useMemo<readonly string[]>(
    () => logFor(currentDay())?.exercisesDone ?? [],
    // The log map is mutated in place, so the version is the only thing that
    // can say it moved.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [logsVersion],
  );
  const { tasks, retest } = useMemo(() => {
    return tasksForToday(t);
    // The first two are versions rather than inputs — the resolver reads the
    // log and the state itself, and the log map is mutated in place, so they
    // are the only things that can tell React the answer has moved. `t` is a
    // real input: the titles and the chips are both written in its language.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsVersion, state, t]);

  /**
   * Unfinished first, in their original order; finished sink to the bottom.
   *
   * A stable sort, so ticking one task never reshuffles the others around it —
   * only the ticked row moves, and it moves to the end. What is left at the top
   * is always exactly what is left to do, which is the only question this list
   * exists to answer.
   */
  const ordered = useMemo(
    () => [...tasks].sort((a, b) => Number(done.includes(a.id)) - Number(done.includes(b.id))),
    [tasks, done],
  );

  /**
   * Ticking a task, from the list or by finishing its player.
   *
   * Written through to the day log rather than held in component state alone.
   * The old list was decorative — the ticks vanished on unmount and nothing
   * downstream ever heard about them. Now the same act feeds the streak, the
   * path and the score, which is what makes them agree with each other.
   *
   * The day counts as trained once every exercise on it is ticked. Anything
   * less is progress, not a session, and claiming otherwise would let a day be
   * completed by opening it.
   */
  const record = (next: readonly string[]) => {
    const complete = tasks.length > 0 && next.length >= tasks.length;
    writeLog(currentDay(), {
      exercisesDone: [...next],
      sessionCompleted: complete,
      // Only on the tick that finishes the day, and only once: the rest period
      // runs from when the work ended, and restamping it on a later edit would
      // push the next session further away for changing one's mind about a
      // checkbox.
      ...(complete && logFor(currentDay())?.completedAt == null
        ? { completedAt: Date.now() }
        : {}),
    });
  };

  const finish = (id: string) =>
    record(done.includes(id) ? done : [...done, id]);

  /**
   * Everything on today's list is ticked.
   *
   * Worth a line of its own. Without one the finished list is a column of
   * struck-through text that looks the same as a list nobody has started —
   * every row greyed, nothing saying which of the two it is. It is also the
   * only place the app can answer "am I done?", which is the question somebody
   * opens it to ask on the evening of a day they already trained.
   */
  const allDone = tasks.length > 0 && done.length >= tasks.length;

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
        <Image
          source={MASCOT}
          accessibilityElementsHidden
          importantForAccessibility="no"
          style={styles.mascot}
          resizeMode="contain"
        />
      </View>

      {/* Above the list, not instead of it. The rows stay readable — somebody
          checking what they did today should be able to see it, and hiding the
          work behind a tick would make the screen forget the session the
          moment it ended. */}
      {allDone && (
        <View style={[styles.allDone, { backgroundColor: meter.track }]}>
          <View style={[styles.allDoneDot, { backgroundColor: meter.positive }]} />
          <View style={styles.allDoneText}>
            <Text style={[styles.allDoneTitle, { color: colors.foreground }]}>
              {t('home.allDoneTitle')}
            </Text>
            <Text style={[styles.allDoneBlurb, { color: meter.caption }]}>
              {t('home.allDoneBlurb')}
            </Text>
          </View>
        </View>
      )}

      <View style={styles.list}>
        {/* A day with nothing on it is a real answer, not a failure to load.
            The row style and the caption colour, so the line sits exactly where
            the first task would and reads as quietly as a finished one — the
            list says what it has to say and asks for nothing. */}
        {ordered.length === 0 && (
          <Text style={[styles.title, { color: meter.caption }]}>
            {retest
              ? t('home.retestDay', {
                  tests: t('home.tests', { count: RETEST_TESTS }),
                  minutes: t('home.minutes', { count: RETEST_MINUTES }),
                })
              : t('home.nothingScheduled')}
          </Text>
        )}
        {ordered.map((task) => (
          // `layout`, never `entering`. A layout transition animates a row
          // between two measured positions, so the worst it can do is not run;
          // an entering animation seeds the row at opacity zero and has left
          // content permanently invisible in this project three times.
          <Animated.View
            key={task.id}
            layout={LinearTransition.duration(PROGRAM_MS).reduceMotion(ReduceMotion.System)}>
            <TaskRow
              task={task}
              done={done.includes(task.id)}
              onOpen={() => {
                Haptics.selectionAsync();
                setOpen(task);
              }}
              onToggle={() => {
                Haptics.selectionAsync();
                record(
                  done.includes(task.id)
                    ? done.filter((id) => id !== task.id)
                    : [...done, task.id],
                );
              }}
            />
          </Animated.View>
        ))}
      </View>

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={open != null}
        onRequestClose={() => setOpen(null)}>
        {/* The sheet paints its own page colour. `SessionView` deliberately has
            none — inside the program it sits on the sheet face, which supplies
            it — so dropped straight into a bare Modal it showed iOS's default
            white behind a dark app. Every other sheet here does the same thing
            at its call site. */}
        {open != null && (
          <View style={[styles.player, { backgroundColor: colors.background }]}>
            <SessionView
              day={today}
              // One task, one move. The player's own transport still works — it
              // simply has nowhere to go next, which is what makes the end of the
              // move the end of the task.
              moves={[open.title]}
              onBack={() => setOpen(null)}
              onFinish={() => {
                finish(open.id);
                setOpen(null);
              }}
            />
          </View>
        )}
      </Modal>
    </View>
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
   * already done today and only need to record. */
  onToggle: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const category = CATEGORIES[CATEGORY_KEYS[task.category]];
  const tone = accents[scheme][category.accent];
  const Glyph = category.icon;

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
  const subtitle =
    task.dose != null ? t('home.taskSubtitle', { category: label, dose: task.dose }) : label;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: done }}
      // The dose is read out with the rest of the line. Stopping at the
      // category would leave a screen reader user the only person on this row
      // who cannot hear how many.
      accessibilityLabel={t('home.taskA11y', { title: task.title, subtitle })}
      onPress={onOpen}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
      <View style={styles.copy}>
        <Text
          style={[
            styles.title,
            { color: colors.foreground },
            // Struck through rather than hidden. A list that removes what you
            // finished takes the evidence away with it, and on a bad week the
            // evidence is the point.
            done && { textDecorationLine: 'line-through', color: meter.caption },
          ]}>
          {task.title}
        </Text>
        <View style={styles.category}>
          <Glyph size={13} weight="fill" color={tone.fill} />
          <Text style={[styles.categoryText, { color: tone.fill }]}>{subtitle}</Text>
        </View>
      </View>

      {task.chip != null && !done ? (
        <View style={[styles.chip, { backgroundColor: tone.track }]}>
          <ClockIcon size={13} weight="fill" color={tone.fill} />
          <Text style={[styles.chipText, { color: tone.fill }]}>{task.chip}</Text>
        </View>
      ) : (
        // Its own target, so the box can record something already done without
        // making the user sit through a player for it. Dashed while empty,
        // solid once filled — the border style does the same job as the tick,
        // which is what makes the state read from across the room.
        <Pressable
          accessibilityRole="checkbox"
          accessibilityState={{ checked: done }}
          accessibilityLabel={done ? t('home.markNotDone') : t('home.markDone')}
          onPress={onToggle}
          hitSlop={8}
          style={({ pressed }) => [
            styles.box,
            done
              ? { borderColor: tone.fill, backgroundColor: tone.fill, borderStyle: 'solid' }
              : { borderColor: meter.track, borderStyle: 'dashed' },
            pressed && { opacity: 0.6 },
          ]}>
          {done && <CheckIcon size={16} weight="bold" color={colors.background} />}
        </Pressable>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  player: { flex: 1 },
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
    fontSize: 22,
    lineHeight: HEADING_LINE,
    fontFamily: fonts.heavy,
    letterSpacing: -0.6,
  },
  allDone: {
    borderRadius: 22,
    borderCurve: 'continuous',
    paddingVertical: 16,
    paddingHorizontal: 18,
    // Clear of the heading above and of the first row below. It was pinned
    // straight under the title with 14 beneath it, which read as a subtitle
    // belonging to "Today's Tasks" rather than as a card of its own — and the
    // heading row is absolute-positioned artwork, so it contributes no margin
    // of its own for this to sit against.
    marginTop: 14,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  /** A filled dot rather than a tick glyph: the rows below already carry ticks,
   * and a second tick here would read as a fourth task. */
  allDoneDot: { width: 8, height: 8, borderRadius: 4, marginTop: 7 },
  allDoneText: { flex: 1 },
  allDoneTitle: { fontSize: 17, fontFamily: fonts.bold, letterSpacing: -0.3 },
  allDoneBlurb: { fontSize: 14, lineHeight: 19, fontFamily: fonts.regular, marginTop: 2 },
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
  title: {
    fontSize: 17,
    fontFamily: fonts.bold,
    letterSpacing: -0.3,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    letterSpacing: -0.1,
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
  chipText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: -0.1,
  },
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
