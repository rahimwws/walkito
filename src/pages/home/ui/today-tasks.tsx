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
  hoursBaseline,
  hoursOnFeetOn,
  kindFor,
  painAverage,
  painOn,
  programState,
  resolveDay,
  useLogsVersion,
  writeLog,
  useProgramState,
  type ExerciseCategory,
  type ProgramDay,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { PROGRAM_MS } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
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
 * The four things a day here is made of.
 *
 * A category is not a folder, it is a promise about effort: Fitness asks
 * something of you, Mobility asks less, Recovery asks nothing and Habit asks
 * only that you remember. The colour is what lets that be read down the column
 * without reading a word — and it names the kind, never rates it.
 */
const CATEGORIES = {
  fitness: { label: 'Fitness', accent: 'violet' as AccentName, icon: BarbellIcon },
  mobility: { label: 'Mobility', accent: 'teal' as AccentName, icon: WavesIcon },
  recovery: { label: 'Recovery', accent: 'amber' as AccentName, icon: MoonIcon },
  habit: { label: 'Habit', accent: 'blue' as AccentName, icon: ArrowsClockwiseIcon },
} satisfies Record<string, { label: string; accent: AccentName; icon: Icon }>;

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
  category: CategoryKey;
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
function tasksForToday(): { tasks: readonly Task[]; retest: boolean } {
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
      category: CATEGORY_KEYS[exercise.category],
      chip: prescription != null ? `${resolved.minutes} min` : undefined,
      dose: prescription?.label,
    })),
  };
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
  const [done, setDone] = useState<readonly string[]>([]);
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
  const { tasks, retest } = useMemo(() => {
    return tasksForToday();
    // Both are versions rather than inputs — the resolver reads the log and the
    // state itself, and the log map is mutated in place, so these two are the
    // only things that can tell React the answer has moved.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsVersion, state]);

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
    setDone(next);
    writeLog(currentDay(), {
      exercisesDone: [...next],
      sessionCompleted: tasks.length > 0 && next.length >= tasks.length,
    });
  };

  const finish = (id: string) =>
    record(done.includes(id) ? done : [...done, id]);

  return (
    <View style={styles.root}>
      <View style={styles.headingRow}>
        <Text style={[styles.heading, { color: colors.foreground }]}>Today&apos;s Tasks</Text>
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

      <View style={styles.list}>
        {/* A day with nothing on it is a real answer, not a failure to load.
            The row style and the caption colour, so the line sits exactly where
            the first task would and reads as quietly as a finished one — the
            list says what it has to say and asks for nothing. */}
        {ordered.length === 0 && (
          <Text style={[styles.title, { color: meter.caption }]}>
            {retest
              ? `Retest day. ${RETEST_TESTS} tests, about ${RETEST_MINUTES} minutes.`
              : 'Nothing scheduled today. Rest counts.'}
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
  const category = CATEGORIES[task.category];
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
  const subtitle = task.dose != null ? `${category.label} · ${task.dose}` : category.label;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ checked: done }}
      // The dose is read out with the rest of the line. Stopping at the
      // category would leave a screen reader user the only person on this row
      // who cannot hear how many.
      accessibilityLabel={`${task.title}. ${subtitle}`}
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
          accessibilityLabel={done ? 'Mark not done' : 'Mark done'}
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
  list: {
    marginTop: 10,
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
