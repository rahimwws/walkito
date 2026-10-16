import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
  ReduceMotion,
  runOnJS,
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useRouter } from 'expo-router';

import {
  addDays,
  attended,
  clearRetestRequest,
  completePlanSession,
  exerciseById,
  EXERCISES_BY_ID,
  currentDay,
  doseLabel,
  goals as readGoals,
  logFor,
  outcome as readOutcome,
  painOn,
  planSessionDone,
  planSettings,
  planWeekOf,
  RETEST_MINUTES,
  RETEST_TESTS,
  retestResults,
  sessions,
  storedWeeks,
  testDue,
  todayDayNumber,
  todayKey,
  todayPlan,
  twoMinuteVersion,
  useLogsVersion,
  useNextSession,
  usePlanVersion,
  useRetest,
  useRetestRequest,
  useStreak,
  weekPlan,
  type GoalType,
  type ProgramDay,
  type SessionMinutes,
  planReasonLine,
} from '@/entities/program';
import { useHealthSignals, todayHealthInputs } from '@/entities/health';
import { protocolById, recommendProtocol, requestProtocol } from '@/entities/protocols';
import { fonts, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { clearProgramRequest, PROGRAM_MS, useProgram, useProgramRequest } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D } from '@/shared/ui/card-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { StreakCapsule } from '@/shared/ui/header-actions';

import { SessionView, TestDayFlow, type PlaylistStep } from '@/widgets/session-player';

import {
  doneTitle,
  earnedToday,
  kindName,
  outcomeView,
  todayTitle,
  todayVariant,
  upcomingTitle,
  weekPath,
} from '../model/plan-view';
import { asProgramDay, playlistOf } from '../model/week-view';
import { ExerciseSheet } from './exercise-sheet';
import { FinishReward } from './finish-reward';
import { GoalStations } from './goal-stations';
import { moveLook } from './kind-tone';
import { TodayCard } from './today-card';
import { TodayDoneCard } from './today-done-card';
import { TodayMoves, type TodayMove } from './today-moves';
import { TomorrowCard } from './tomorrow-card';

/** How far the list slides under the arriving session. A fraction of the
 * screen, not all of it: the two move together, one leaving slowly and one
 * arriving quickly, which is what reads as depth rather than as a swap. */
const PARALLAX = 0.3;

/**
 * A finished day's cards arrive one after the other, rising a little into
 * place: the day and what it earned at the top, then tomorrow under the goal.
 * Mounted once the session pane is gone, so the rise is what the person sees
 * coming back. Reduce Motion lets them appear where they are.
 */
const DONE_STAGGER_MS = 110;
const DONE_RISE_MS = 360;
const DONE_EASING = Easing.bezier(0.23, 1, 0.32, 1).factory();
const rise = (index: number) =>
  FadeInDown.delay(DONE_STAGGER_MS * index)
    .duration(DONE_RISE_MS)
    .easing(DONE_EASING)
    .reduceMotion(ReduceMotion.System);
/**
 * The goal's stations make room rather than jump: when the finished day's card
 * arrives over them they glide down by its height, as it rises in. Reduce
 * Motion moves them at once.
 */
const SHIFT = LinearTransition.duration(DONE_RISE_MS).easing(DONE_EASING).reduceMotion(ReduceMotion.System);

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
 * What the session pane is running: a planned session in the player, or the
 * test day in its own flow — taken, or opened again read-only for its results.
 *
 * Two shapes because they finish two ways. A session ends in
 * `completePlanSession`, which this page calls; a test day ends in
 * `finishTestDay`, which the flow calls itself, since only it holds the
 * numbers.
 */
type Running =
  | {
      kind: 'session';
      day: ProgramDay;
      date: string;
      playlist: PlaylistStep[];
      exerciseIds: string[];
      minutes: number;
    }
  | { kind: 'test'; review: boolean };

/** The colour a goal's bar wears: the colour of the work that moves it. */
const GOAL_ACCENT: Readonly<Record<GoalType, AccentName>> = {
  pain_free_mornings: 'teal',
  arch_hold: 'violet',
  calf_raises: 'violet',
  balance: 'blue',
  symmetry: 'blue',
};

/**
 * The plan screen: today, and the goal with the weeks that work towards it.
 *
 * While today has something to do, it leads: the one big card (the day's
 * emoji, its chips, the one mascot and Start), its moves as a checklist ticked
 * from the day log, and what finishing earns under them: the streak's next day
 * and the next sticker, from the real counts. Then the goal (`GoalStations`)
 * and, on a thin rail under it, this week and next week as cards (what each
 * works on, what changes in it, its days, minutes and moves), the test days
 * as discs where they fall.
 *
 * Once today is done, the day leads as one card (`TodayDoneCard`): "Today"
 * over its title with a tick, "See results" on a test day, the mascot, and
 * what the day earned (its minutes, its moves or tests, the run of days, the
 * next sticker's bar). Then the goal and its weeks as before, then tomorrow:
 * what it is, how long, and the countdown to it. No card says the day is done
 * twice.
 *
 * Two weeks, because two are what the engine can say truthfully (`weekPath`);
 * past them the rail fades beside one line on how the weeks after are made.
 * No week strip and no list of days: Home already shows the week. Never a
 * plan length, "week N of M" or an end date.
 *
 * Everything comes from local storage — the weekly plan, adjusted to this
 * morning — so nothing on it ever waits on a network.
 */
export function ProgramPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const program = useProgram();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();
  const language = useLanguage();
  const health = useHealthSignals();
  const streak = useStreak();

  const logsVersion = useLogsVersion();
  const planVersion = usePlanVersion();

  const now = Date.now();
  const today = todayKey(now);
  const plan = weekPlan(now);
  const goals = readGoals();

  const [minutes, setMinutes] = useState<SessionMinutes>(() => planSettings().defaultMinutes);
  const adjusted = todayPlan(
    todayHealthInputs(health),
    minutes,
    now,
  );
  const doneToday = planSessionDone(today);
  const variant = todayVariant(adjusted, doneToday);
  /**
   * When the next session opens — the one answer the dock and Home read too.
   *
   * Subscribed here, on the page, and not only in the button that counts down
   * to it: the hook wakes at midnight, and midnight is when "today" itself
   * moves on. Without it the page sat on yesterday's finished card, whose
   * Start would have started yesterday's session.
   */
  const nextUp = useNextSession();
  /** Today's test results are on file — what "See results" reopens. */
  const tested = useRetest(todayDayNumber(now)) != null;

  const [session, setSession] = useState<Running | null>(null);
  const [run, setRun] = useState(0);
  const [preview, setPreview] = useState<string | null>(null);

  /**
   * A finished day's cards wait, the first time, for the session pane to be
   * gone: a session is filed as its slide away begins, and a test while its
   * results are still up, so cards mounted then would rise behind the pane,
   * unseen. `session` is dropped once the pane is fully out (`dropHidden`).
   * After that they stay, through a look back at the results, until the day
   * turns over.
   */
  const [doneShown, setDoneShown] = useState(variant === 'done');
  useEffect(() => {
    if (variant !== 'done') setDoneShown(false);
    else if (session == null) setDoneShown(true);
  }, [variant, session]);

  const weekday = (date: string, style: 'short' | 'long' = 'short') => {
    const [y, m, d] = date.split('-').map(Number);
    return new Intl.DateTimeFormat(language, { weekday: style }).format(new Date(y, m - 1, d));
  };

  /** When the last session or test was started — see `dropHidden`. */
  const startedAt = useRef(0);
  /** Where the goal sits in the list, for "See next goal": under the card for
   * today, whether the day is still to do or done. */
  const goalTop = useRef(0);

  const start = useCallback(
    (running: Running) => {
      startedAt.current = Date.now();
      setSession(running);
      setRun((n) => n + 1);
      program?.openDetail();
    },
    [program],
  );

  const startToday = useCallback(
    (short = false) => {
      if (adjusted.type === 'test') {
        start({ kind: 'test', review: false });
        return;
      }
      const planned = short ? twoMinuteVersion(adjusted) : adjusted;
      start({
        kind: 'session',
        day: asProgramDay(planned),
        date: today,
        playlist: playlistOf(planned.exercises),
        exerciseIds: planned.exercises.map((e) => e.id),
        minutes: planned.minutes,
      });
    },
    [adjusted, start, today],
  );

  /** A retest asked for from the day page: today's test, if today has one and
   * it has not been taken — a second run would file a second set of numbers
   * over the first. */
  const requested = useRetestRequest();
  useEffect(() => {
    if (requested == null) return;
    clearRetestRequest();
    if (adjusted.type === 'test' && !doneToday) startToday();
  }, [requested, adjusted.type, doneToday, startToday]);

  /**
   * An email button: open the plan and, for "today", start today's session.
   *
   * A shorter session is two renders, not one: the minutes are set first, and
   * `pendingStart` starts the session on the render that has already rebuilt
   * today's plan at that length — starting in the same pass would start the
   * plan built for the old minutes. A finished day starts nothing; the plan
   * opens on its done card. "test" starts today's test only when today is the
   * test day, the same rule as a retest request.
   */
  const linkRequest = useProgramRequest();
  const [pendingStart, setPendingStart] = useState(false);
  useEffect(() => {
    if (linkRequest == null || program == null) return;
    clearProgramRequest();
    program.open();
    if (linkRequest.kind === 'plan') return;
    // An id the catalogue does not have (a link made for a later build, or a
    // typo in a campaign) still opens the plan, just without a card.
    if (linkRequest.kind === 'exercise') {
      if (EXERCISES_BY_ID[linkRequest.id] != null) setPreview(linkRequest.id);
      return;
    }
    if (linkRequest.kind === 'test') {
      if (adjusted.type === 'test' && !doneToday) setPendingStart(true);
      return;
    }
    if (doneToday) return;
    if (linkRequest.minutes != null && adjusted.type !== 'test') setMinutes(linkRequest.minutes);
    setPendingStart(true);
  }, [linkRequest, program, adjusted.type, doneToday]);
  useEffect(() => {
    if (!pendingStart) return;
    setPendingStart(false);
    startToday();
  }, [pendingStart, startToday]);

  const onScroll = useAnimatedScrollHandler((event) => {
    if (program != null) program.scrollTop.value = event.contentOffset.y;
  });

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
   * Whatever the pane holds leaves when the pane does — a session or a test.
   *
   * Both stop their own clips and clocks when they are left through their own
   * way out (the player's back arrow, the flow's `onClose`), but the pane can
   * close without asking them: Android's back button closes it straight from
   * the provider, and closing the plan zeroes the detail axis outright. Left
   * mounted there, the test clock ran on behind a closed sheet, and a session
   * kept playing: its clock, its clip, and at every change of move a count-in
   * ticking and buzzing from a screen nobody could see, saving each new move
   * as the place to resume from. Unmounted, the player saves where it really
   * stopped and ends its Lock Screen activity on the way out.
   *
   * Dropped once the pane is fully out rather than as it starts to move, so the
   * slide never shows it blank. Nothing is lost by it — a session is recorded
   * by its own finish and resumes from where it was left, a test saves only
   * when its last figure is confirmed, and every opening mounts a fresh one.
   * Not in the moment after a start, when the pane may be on its way in
   * rather than gone — a start can land just as the last close reaches the
   * bottom. Then it looks again once the pane has had time to arrive.
   */
  const dropHidden = useCallback(() => {
    const wait = startedAt.current + PROGRAM_MS - Date.now();
    if (wait <= 0) {
      setSession(null);
      return;
    }
    setTimeout(() => {
      if ((program?.detail.value ?? 0) < 0.01) setSession(null);
    }, wait);
  }, [program]);
  useAnimatedReaction(
    () => (program?.detail.value ?? 0) < 0.01,
    (gone, was) => {
      if (!gone || was !== false) return;
      runOnJS(dropHidden)();
    },
  );

  const listPane = useAnimatedStyle(() => ({
    transform: [{ translateX: -(program?.detail.value ?? 0) * width * PARALLAX }],
  }));
  const sessionPane = useAnimatedStyle(() => ({
    transform: [{ translateX: (1 - (program?.detail.value ?? 0)) * width }],
  }));

  // ── What the screen says ─────────────────────────────────────────────────
  const outcome = readOutcome();
  const goal = outcome != null ? outcomeView(t, outcome, goals, plan.focus) : null;
  const goalAccent = GOAL_ACCENT[goal?.current ?? plan.focus ?? 'calf_raises'];
  const tomorrowKey = addDays(today, 1);
  /**
   * The next test's day, for the rail: the day this week's plan has it on
   * (today's, until it is taken), and past this week the day it falls due,
   * never before the first day it may go: tomorrow once today is done.
   */
  const plannedTest = plan.days.find(
    (day) => day.type === 'test' && (day.date > today || (day.date === today && !doneToday)),
  );
  const testFrom = doneToday ? tomorrowKey : today;
  const due = testDue();
  const nextTest = plannedTest?.date ?? (due > testFrom ? due : testFrom);
  /**
   * The weeks around this one, for the path. The week before only as stored:
   * a week nobody planned is not rebuilt after the fact. Next week as stored
   * from Sunday evening, and until then as it would be built today, never
   * stored (`planWeekOf`). Keyed on the stores' versions, which are what say
   * they moved, and on the day.
   */
  const lastWeek = useMemo(
    () => storedWeeks()[addDays(plan.weekStart, -7)] ?? null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plan.weekStart, planVersion],
  );
  const nextWeek = useMemo(
    () => planWeekOf(addDays(plan.weekStart, 7)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [plan.weekStart, today, planVersion, logsVersion],
  );
  const results = retestResults();
  const path = weekPath({
    thisWeek: plan,
    lastWeek,
    nextWeek,
    today,
    lastTest: results.length > 0 ? results[results.length - 1].date : null,
    nextTest,
    seatedStart: planSettings().seatedStart === true,
  });
  /** A sheet is over the list: the mascot holds still under it. */
  const sheetOver = preview != null;

  /**
   * Today's moves as the checklist draws them, ticked from the day log: the
   * ids Home's list ticks and a finished session fills, so the two lists can
   * never disagree about a move. What the session will run, each ticked once
   * done. Only before the session: once the day is done its moves are counted
   * in the tiles on the card that leads it, and listing them again was a
   * second thing to read. A test day has no moves, and a rest day nothing to do.
   */
  const ticked = logFor(todayDayNumber(now))?.exercisesDone ?? [];
  const checklist: TodayMove[] =
    variant === 'session' || variant === 'easy'
      ? adjusted.exercises.map((e) => {
          const exercise = exerciseById(e.id);
          const look = moveLook(e.id, exercise.category);
          return {
            id: e.id,
            title: exercise.title,
            dose: doseLabel(e.dose.sets, e.dose.reps, e.dose.holdSec, e.dose.perSide),
            art: look.art,
            accent: look.accent,
            done: ticked.includes(e.id),
          };
        })
      : [];

  /**
   * The streak as it stands, when finishing today adds today to it: null once
   * today already counts (a morning check-in counts it), so the reward never
   * promises a day that is already in. Never before the plan's first day,
   * which no session can count.
   */
  const dayNumber = currentDay(now);
  const streakReward = dayNumber >= 1 && !attended(dayNumber) ? streak.current : null;
  const rewarded = variant === 'session' || variant === 'easy' || variant === 'test';

  const title = todayTitle(t, adjusted, plan.focus, variant);

  // ── A finished day: what it earned, and tomorrow ─────────────────────────
  // Read only while the cards are up. Never a pain figure: the records' pain
  // is not read, and the streak and the sticker count days, not how they felt.
  const finished = variant === 'done' && doneShown;
  const earned = finished
    ? earnedToday(sessions(), today, { minutes: adjusted.minutes, moves: new Set(ticked).size })
    : null;
  // Through its own week, so a Sunday reads next week's Monday and its focus.
  const tomorrowWeek = finished ? planWeekOf(tomorrowKey, now) : null;
  const tomorrowDay = tomorrowWeek?.days.find((day) => day.date === tomorrowKey) ?? null;
  // Nothing planned tomorrow is nothing to do tomorrow: a rest day.
  const tomorrowKind = tomorrowDay?.type ?? 'rest';
  // A rest day tomorrow leaves the question it raises — so when do I train
  // next? — and the screen has no list of days to work it out from, so the
  // card answers it. A day with work says when it opens instead, from the
  // same answer the dock and Home count down to.
  const nextLine =
    finished && tomorrowKind === 'rest' && nextUp != null
      ? t('pages.plan.nextSessionOn', {
          day: weekday(nextUp.date, 'long'),
          kind: kindName(t, nextUp.day.type).toLocaleLowerCase(language),
        })
      : null;
  const opensAt = tomorrowKind !== 'rest' && nextUp != null && nextUp.date === tomorrowKey ? nextUp.at : null;

  const routine = protocolById(
    recommendProtocol(
      {
        painToday: painOn(currentDay()),
        checkedInToday: painOn(currentDay()) != null,
        lastRunEndedAt: health.lastRunEndedAt,
        hour: new Date(now).getHours(),
        weekday: new Date(now).getDay(),
      },
      now,
    ),
  );

  const reached = goals.find((g) => g.achievedOn != null && g.achievedOn >= plan.weekStart && g.type === plan.focus);
  const nextGoal = goals.find((g) => g.status === 'active' && g.type !== reached?.type);

  /**
   * The goal and its weeks. One place in the list whatever the day: under the
   * card for today, so a day turning done never mounts it again, and it glides
   * down as the finished day's card arrives over it (`SHIFT`). It shows this
   * week and next, what changes in each and where the tests fall, and nothing
   * about today: today's card above has the start, the earnings and the way
   * back to a test's results. A move tapped on a week opens its preview, as
   * today's checklist does.
   */
  const goalBlock =
    goal != null ? (
      <Animated.View
        layout={SHIFT}
        onLayout={(event) => {
          goalTop.current = event.nativeEvent.layout.y;
        }}>
        <GoalStations view={goal} nodes={path} today={today} accent={goalAccent} onPreview={setPreview} />
      </Animated.View>
    ) : null;

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.pane, listPane]}>
        <View style={[styles.header, { paddingTop: insets.top + 4 }]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('pages.program.closeA11y')}
            onPress={() => program?.close()}
            hitSlop={12}
            style={({ pressed }) => [styles.back, pressed && { opacity: 0.5 }]}>
            <HugeiconsIcon icon={ArrowLeft02Icon} size={26} color={colors.foreground} strokeWidth={2} />
          </Pressable>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('pages.plan.title')}</Text>
          <StreakCapsule streak={streak.current} glyph={<FluentIcon name="fire" size={22} />} />
        </View>

        <Animated.ScrollView
          ref={listRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={[styles.list, { paddingTop: 10, paddingBottom: insets.bottom + 120 }]}>
          {/* A finished day: the day and what it earned lead, in one card. */}
          {finished && earned != null && (
            <Animated.View entering={rise(0)}>
              <TodayDoneCard
                title={doneTitle(t, adjusted, plan.focus)}
                earned={{
                  minutes: earned.minutes,
                  count: adjusted.type === 'test' ? RETEST_TESTS : earned.moves,
                  test: adjusted.type === 'test',
                  streak: streak.current,
                  delayMs: DONE_RISE_MS / 2,
                }}
                calm={adjusted.reason === 'flare'}
                onResults={adjusted.type === 'test' && tested ? () => start({ kind: 'test', review: true }) : undefined}
                covered={sheetOver}
              />
            </Animated.View>
          )}

          {variant !== 'done' && (
            <TodayCard
              variant={variant}
              kind={adjusted.type}
              title={title}
              moveCount={adjusted.exercises.length}
              minutes={minutes}
              onMinutes={setMinutes}
              onStart={() => startToday()}
              onShort={() => startToday(true)}
              note={planReasonLine(t, adjusted.reason)}
              covered={sheetOver}
              tests={{
                chips: [t('pages.program.zoneCalf'), t('pages.program.zoneArch'), t('pages.program.zoneBalance')],
                body: t('pages.plan.testBody', { count: RETEST_TESTS, minutes: RETEST_MINUTES }),
              }}
              nextAt={nextUp?.at ?? null}
              restRoutine={{
                label: t(routine.titleKey),
                onPress: () => {
                  requestProtocol(routine.id);
                  program?.close();
                  router.navigate('/quick');
                },
              }}
            />
          )}

          {/* What the level is made of: a tap previews a move, as the chips
              on the old card did. */}
          {checklist.length > 0 && <TodayMoves moves={checklist} onPreview={setPreview} />}

          {/* What finishing earns. Only while there is something to finish. */}
          {rewarded && <FinishReward streak={streakReward} />}

          {/* Today first, whatever the day; then where it leads. */}
          {goalBlock}

          {/* Under the goal on a finished day: tomorrow, the other question an
              evening visit asks. */}
          {finished && (
            <Animated.View entering={rise(1)}>
              <TomorrowCard
                kind={tomorrowKind}
                title={upcomingTitle(t, tomorrowKind, tomorrowWeek?.focus ?? null)}
                minutes={tomorrowDay?.minutes ?? 0}
                count={tomorrowKind === 'test' ? RETEST_TESTS : (tomorrowDay?.exercises.length ?? 0)}
                opensAt={opensAt}
                nextLine={nextLine}
              />
            </Animated.View>
          )}

          {reached != null && nextGoal != null && (
            <Card3D size="lg" material="solid" tone="violet" padding={18} contentStyle={styles.reached}>
              <View style={styles.reachedRow}>
                {/* The goal's own target, not a trophy: a reached goal may be
                    a pain figure, and a pain figure is never celebrated. */}
                <FluentIcon name="target" size={32} />
                <Text style={[styles.reachedText, { color: colors.foreground }]}>
                  {t('pages.plan.reached', {
                    goal: t(`pages.week.goal.${reached.type}`),
                    next: t(`pages.week.goal.${nextGoal.type}`).toLocaleLowerCase(language),
                  })}
                </Text>
              </View>
              <Button3D
                label={t('pages.plan.seeNextGoal')}
                variant="secondary"
                size="sm"
                align="start"
                // The ref's own instance, not Reanimated's worklet `scrollTo`,
                // which does nothing when called from a press on the JS thread.
                // To the goal's stations, under the card for today.
                onPress={() => listRef.current?.scrollTo({ y: Math.max(0, goalTop.current - 10), animated: true })}
              />
            </Card3D>
          )}
        </Animated.ScrollView>
      </Animated.View>

      <ExerciseSheet exerciseId={preview} onClose={() => setPreview(null)} />

      {/* The player sits under the status bar on the pane's inset; the test
          day keeps its own insets and paints its own page, so it gets the
          pane bare. */}
      <Animated.View
        style={[
          styles.pane,
          { backgroundColor: colors.background, paddingTop: session?.kind === 'test' ? 0 : insets.top },
          sessionPane,
        ]}>
        {session?.kind === 'session' && (
          <SessionView
            key={run}
            day={session.day}
            playlist={session.playlist}
            // A plan session is what the next ones are tuned from, so it is
            // the one that asks how it went.
            feedback
            onBack={() => program?.closeDetail()}
            onFinish={() => {
              // The one way a plan session ends: the session list, the day
              // log and the sync, together. It never re-plans today — this
              // page used to rebuild the week here, and that is what turned a
              // finished test into "Recovery · Done".
              completePlanSession({
                date: session.date,
                source: 'plan',
                minutes: session.minutes,
                exerciseIds: session.exerciseIds,
              });
              program?.closeDetail();
            }}
          />
        )}
        {session?.kind === 'test' && (
          // The flow finishes the test day itself (`finishTestDay`) and paints
          // its own page, so the pane only has to hold it.
          <TestDayFlow
            key={run}
            review={session.review}
            onClose={() => program?.closeDetail()}
            // Back to the top underneath, where the finished day's card now has
            // the test taken and what it earned: the first thing to see on the
            // way out. Through the ref's own instance: Reanimated's `scrollTo` is a
            // worklet, and called from a JS callback like this one it silently
            // does nothing.
            onSaved={() => listRef.current?.scrollTo({ y: 0, animated: false })}
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
  title: {
    flex: 1,
    ...fonts.heavy(24, -0.6),
  },
  list: {
    paddingHorizontal: 20,
    gap: 18,
  },
  reached: {
    gap: 14,
  },
  reachedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  reachedText: {
    flex: 1,
    ...fonts.semibold(17),
    lineHeight: 23,
  },
});
