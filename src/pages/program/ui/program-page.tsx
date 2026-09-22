import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  runOnJS,
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { blockName,
  PLAN_BLOCKS,
  PROGRAM,
  PROGRAM_LENGTH,
  TODAY_INDEX,
  clearRetestRequest,
  currentDay,
  exerciseById,
  firstNewExercise,
  logFor,
  nextSessionAt,
  planFor,
  statusFor,
  useLogsVersion,
  useRetestRequest,
  writeLog,
  type DayStatus,
  type ProgramDay,
} from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT, type Language } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';

import { SessionView } from '@/widgets/session-player';

import { DayCard } from './day-card';
import { BlockAhead, BlockFooter, BlockOpening, ProgramFinish } from './block-marks';
import { DayLink, StreakMilestone } from './day-link';
import { DaySheet } from './day-sheet';

/**
 * The day, worded exactly as Home words it.
 *
 * A function rather than a constant: read once at module scope it would be
 * fixed at the moment the bundle loaded, and a screen left open overnight would
 * insist it was still yesterday. The same note sits over Home's copy of this.
 *
 * Formatted for the app's language rather than pinned to `en-US`. The subtitle
 * is one `Intl` call rather than a month looked up and a date appended to it:
 * Russian needs "22 сентября" — the month in the genitive, after the day — and
 * asking for a month on its own gets "сентябрь", the nominative, which no
 * arrangement of the two pieces repairs.
 */
function todayLines(language: Language): { title: string; subtitle: string } {
  const now = new Date();
  return {
    title: new Intl.DateTimeFormat(language, { weekday: 'long' }).format(now),
    subtitle: new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(now),
  };
}

/** A marker every third day of the plan. */
const MILESTONE_EVERY = 3;

/** How far the list slides under the arriving session. A fraction of the
 * screen, not all of it: the two move together, one leaving slowly and one
 * arriving quickly, which is what reads as depth rather than as a swap. */
const PARALLAX = 0.3;

/**
 * The header, held out of the scroll — measured below the safe area.
 *
 * Three jobs now. It carries the way out, which on a full-height screen has to
 * be a visible control rather than a grabber. It keeps the user oriented — a
 * list of fourteen numbered days needs a header saying which block they belong
 * to, and one that scrolls away stops answering that after the second card. And
 * it is the drag handle: everything down to this line dismisses the screen,
 * whatever the list is doing underneath.
 *
 * A fixed number rather than whatever the type happens to measure, because the
 * overlay reads it to decide which touches are its own. It excludes the status
 * bar; the overlay adds the inset itself.
 */
export const PROGRAM_HEADER_HEIGHT = 58;

/**
 * The program: the block the user is in, day by day.
 *
 * A screen rather than a sheet, so it owns its own safe area and its own way
 * out. One block rather than the whole plan. A list that scrolls for four
 * minutes is not a plan, it is a calendar — and the next block cannot be
 * started early, so showing it would only offer something the screen has to
 * refuse.
 */
export function ProgramPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const program = useProgram();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  // Subscribed: `begins` below is an exercise title resolved through the
  // catalogue, and the header's date is formatted for the active language.
  const t = useT();
  const language = useLanguage();

  /**
   * The day whose session is open.
   *
   * Never cleared on the way back. Blanking it as the pane leaves would empty
   * the screen the user is still looking at; leaving it mounted costs one
   * inert subtree and keeps the exit readable.
   */
  const [session, setSession] = useState<ProgramDay | null>(null);
  /**
   * How many times a session has been started.
   *
   * Keying the pane on it remounts the player on every open, which is what
   * makes "Start" mean start: the day alone is not enough, because re-opening
   * the same day would otherwise resume a clock the user left paused halfway
   * through a move.
   */
  const [run, setRun] = useState(0);
  /** The day whose sheet is up, with the status the list was showing for it. */
  const [reading, setReading] = useState<{ day: ProgramDay; status: DayStatus } | null>(null);

  const today = PROGRAM[TODAY_INDEX];
  /**
   * Whether today's session is behind the user.
   *
   * `statusFor` takes this and nothing here was passing it, so a day finished
   * an hour ago still rendered as "today": highlighted, unlocked, and offering
   * to be started again. The list said the day was open while Home said it was
   * done, and the log — which both read — already knew.
   *
   * Recomputed whenever the log moves; `useLogsVersion` below is what moves it.
   */
  useLogsVersion();
  const doneToday = logFor(currentDay())?.sessionCompleted === true;

  /**
   * When the next session opens, or null while today's is still to do.
   *
   * The instant, not a formatted string and not a tick. `RestButton` owns the
   * second hand — counting here would re-render every card in the block once a
   * second to move one digit.
   */
  const unlockAt = nextSessionAt(currentDay());
  const lines = todayLines(language);
  const days = PROGRAM.filter((day) => day.block === today.block);

  /**
   * How the block closes, and what is on the other side of it.
   *
   * `done` counts the days actually behind the user rather than the block's
   * length, so the seam cannot congratulate anyone for a fortnight they have
   * not lived. The next block is read out of the plan, and what it introduces
   * off its own exercise table — see `firstNewExercise`.
   */
  const block = PLAN_BLOCKS[today.block - 1];
  const doneInBlock = days.filter((day) => {
    const status = statusFor(day, TODAY_INDEX, doneToday);
    return status === 'done' || status === 'rest';
  }).length;
  const nextBlock = PLAN_BLOCKS[today.block] ?? null;
  const beginsId = nextBlock == null ? null : firstNewExercise(nextBlock.index);
  // The title, never the id. `firstNewExercise` answers in ids because that is
  // what the tables are keyed by, and handing one straight to a caption put
  // "heel_raise_towel begin here" on screen.
  const begins = beginsId == null ? null : exerciseById(beginsId).title;

  /** Opening a day's session: the card's own button, and the retest the day
   * sheet hands over below, are the same act and go through one path. */
  const start = useCallback(
    (day: ProgramDay) => {
      setSession(day);
      setRun((n) => n + 1);
      program?.openDetail();
    },
    [program],
  );

  /**
   * A retest asked for from the day sheet.
   *
   * The sheet is a form sheet sized to its contents and the tests run in the
   * player, which is a screen — so the sheet records the ask, dismisses itself,
   * and this page, already mounted underneath, opens the player the same way
   * today's card does. Cleared as it is taken: a request left standing would
   * start a session nobody asked for the next time the program opened.
   */
  const requested = useRetestRequest();
  useEffect(() => {
    if (requested == null) return;
    clearRetestRequest();
    const day = PROGRAM[requested - 1];
    if (day == null || !day.checkpoint) return;
    start(day);
  }, [requested, start]);

  /** The sheet may only be dragged away from the top of the list — otherwise
   * flicking back up to re-read the first day would dismiss the program. */
  const onScroll = useAnimatedScrollHandler((event) => {
    if (program != null) program.scrollTop.value = event.contentOffset.y;
  });

  /**
   * Back to the top whenever the program closes.
   *
   * The list is never unmounted, so without this it reopens wherever it was
   * left — and today's card is third of fourteen, so anyone who had scrolled to
   * day 26 would reopen with the only actionable card off screen, on the screen
   * whose entire job is to say what to do today.
   *
   * The offset is written in the same worklet that does the scrolling, not in
   * the context's `close()`. That is the whole point: the shared value may only
   * be set by something that actually moved the list, or the pan's "are we at
   * the top" test is reading a number nobody kept honest.
   */
  const listRef = useAnimatedRef<Animated.ScrollView>();
  useAnimatedReaction(
    () => (program?.progress.value ?? 0) < 0.01,
    (closed, was) => {
      if (!closed || was !== false || program == null) return;
      scrollTo(listRef, 0, 0, false);
      program.scrollTop.value = 0;
    },
  );

  /**
   * Today's sheet, up as soon as the screen is.
   *
   * The list is the context and the sheet is the ask, so the ask arrives first
   * and the list is what is left when it is dismissed. Driven off the arrival
   * rather than off mount: the page stays mounted behind Home for the whole
   * session, and opening on mount would have fired once, at launch, for a
   * screen nobody had asked for yet.
   */
  const openToday = useCallback(() => {
    setReading({ day: today, status: statusFor(today, TODAY_INDEX, doneToday) });
  }, [today]);

  useAnimatedReaction(
    () => (program?.progress.value ?? 0) > 0.99,
    (arrived, was) => {
      if (arrived && was === false) runOnJS(openToday)();
    },
  );

  const listPane = useAnimatedStyle(() => ({
    transform: [{ translateX: -(program?.detail.value ?? 0) * width * PARALLAX }],
  }));

  /**
   * The session, arriving from the right.
   *
   * It carries the page colour itself. Everywhere else in the app a screen
   * leaves its background to the navigation theme, but this one has to *cover*
   * the list sliding underneath it — and it is the same colour the sheet face
   * is already painting, so there is no seam to see and nothing to flash.
   *
   * Its top padding is fixed now. It used to be animated, because the sheet was
   * growing towards the status bar at the same time and a pinned inset would
   * have started the back arrow a hundred points too low; the page already
   * covers the display, so there is nothing left to grow into.
   */
  const sessionPane = useAnimatedStyle(() => ({
    transform: [{ translateX: (1 - (program?.detail.value ?? 0)) * width }],
  }));

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.pane, listPane]}>
        {/* Pinned, and sitting straight under the status bar rather than
            centred in a tall box — a title floating in the middle of its own
            empty header reads as a mistake. The arrow travels with it, so the
            way out never scrolls away. */}
        <View style={[styles.header, { paddingTop: insets.top + 4 }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('pages.program.closeA11y')}
            onPress={() => program?.close()}
            hitSlop={12}
            style={({ pressed }) => [styles.back, pressed && { opacity: 0.5 }]}>
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={26}
              color={colors.foreground}
              strokeWidth={2}
            />
          </Pressable>

          {/* The date, not the block's name. Home already titles the day this
              way, and two screens about the same day should not name it two
              different things — the block is stated beside it, where it answers
              "how far in am I" rather than "what day is this". */}
          <View>
            <Text style={[styles.section, { color: colors.foreground }]}>{lines.title}</Text>
            <Text style={[styles.blurb, { color: meter.caption }]}>
              {t('pages.program.headerMeta', {
                date: lines.subtitle,
                block: today.block,
                total: PLAN_BLOCKS.length,
              })}
            </Text>
          </View>
        </View>

        <Animated.ScrollView
          ref={listRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          // No rubber band. At the top of the list a downward pull is the
          // sheet's, not the list's — and a few points of bounce before the
          // sheet takes over is exactly the stutter that makes a handoff feel
          // like two components arguing.
          bounces={false}
          contentContainerStyle={[
            styles.list,
            { paddingTop: 10, paddingBottom: insets.bottom + 120 },
          ]}>
          {days.map((day, i) => {
            const status = statusFor(day, TODAY_INDEX, doneToday);
            // Only the very next one. Every locked day after it opens on its
            // own date too, and a column of countdowns would read as a queue
            // rather than as a plan.
            const nextUp = day.index === TODAY_INDEX + 1 ? unlockAt : null;
            const last = i === days.length - 1;
            // Every third day the run pauses on a marker. Counted off the day
            // number rather than off the loop index, so it lands on days 3, 6
            // and 9 whatever slice of the plan is on screen.
            const milestone = !last && day.day % MILESTONE_EVERY === 0;

            return (
              <View key={day.index}>
                <DayCard
                  day={day}
                  status={status}
                  unlockAt={nextUp}
                  onStart={() => start(day)}
                  // The status travels with the tap rather than being worked
                  // out again inside the sheet: the list has already decided
                  // what it is showing, and a sheet that re-derived it could
                  // disagree with the card the user just pressed.
                  onOpen={() => setReading({ day, status })}
                />

                {!last && (
                  <View style={styles.gap}>
                    <DayLink ahead={status === 'upcoming'} />
                    {milestone && (
                      <>
                        <StreakMilestone days={day.day} />
                        <DayLink ahead={status === 'upcoming'} />
                      </>
                    )}
                  </View>
                )}
              </View>
            );
          })}

          {/* What is past the retest. The seam closes the block, and either the
              next one is named or — on the final block — the plan's own finish
              line is, which is the only place it can honestly be drawn. */}
          <View style={styles.tail}>
            <DayLink />
            <BlockFooter
              index={block.index}
              name={blockName(block.index, t)}
              done={doneInBlock}
              length={days.length}
            />

            {nextBlock != null ? (
              <>
                <DayLink ahead />
                {/* Between the two markers: the block that closed above it and
                    the one named below. It is the hinge of the run, which is
                    the one place a greeting belongs. */}
                <BlockOpening />
                <DayLink ahead />
                <BlockAhead index={nextBlock.index} name={blockName(nextBlock.index, t)} begins={begins} />
              </>
            ) : (
              <>
                <DayLink ahead />
                <ProgramFinish day={PROGRAM_LENGTH} />
              </>
            )}
          </View>
        </Animated.ScrollView>
      </Animated.View>

      <DaySheet
        day={reading?.day ?? null}
        status={reading?.status ?? 'upcoming'}
        // Only when the sheet is open on the day that is next up.
        unlockAt={reading?.day?.index === TODAY_INDEX + 1 ? unlockAt : null}
        onClose={() => setReading(null)}
        onStart={() => {
          const opened = reading?.day;
          setReading(null);
          if (opened != null) start(opened);
        }}
      />

      <Animated.View
        style={[
          styles.pane,
          { backgroundColor: colors.background, paddingTop: insets.top },
          sessionPane,
        ]}>
        {session != null && (
          <SessionView
            key={run}
            day={session}
            onBack={() => program?.closeDetail()}
            // Finishing is the only thing that marks a day done. Without this
            // the program could not move: the path stayed grey, the streak
            // never counted, and the score had no attendance to read. A retest
            // day is excluded — it is measured, not trained, and its record is
            // the retest itself.
            onFinish={
              session.checkpoint
                ? undefined
                : () =>
                    writeLog(session.day, {
                      sessionCompleted: true,
                      exercisesDone: [...planFor(session.block, session.kind)],
                      // Stamped here rather than derived from the date, so the
                      // rest before the next session is measured from when the
                      // work actually ended.
                      completedAt: Date.now(),
                    })
            }
          />
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pane: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  back: {
    paddingVertical: 4,
  },
  section: {
    fontSize: 20,
    fontFamily: fonts.heavy,
    letterSpacing: -0.6,
  },
  blurb: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    marginTop: 2,
  },
  /** The air between two cards, and what the connector is drawn in. The list
   * itself carries no `gap` any more — the run between cards is a thing now,
   * not a space. */
  gap: {
    paddingVertical: 5,
    gap: 7,
  },
  /** The run past the last card. Roomier than the gaps between days: this is
   * the end of something, and an end that is spaced like a row does not read as
   * one. */
  tail: {
    paddingTop: 5,
    gap: 12,
  },
  list: {
    paddingHorizontal: 20,
  },
});
