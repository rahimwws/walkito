import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  FadeInDown,
  LinearTransition,
  ReduceMotion,
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIsFocused, useRouter } from 'expo-router';

import {
  addDays,
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
  type ProgramDay,
  type SessionMinutes,
  planReasonLine,
} from '@/entities/program';
import { useHealthSignals, todayHealthInputs } from '@/entities/health';
import { protocolById, recommendProtocol, requestProtocol } from '@/entities/protocols';
import { askForPlans, lookingAround, useLookingAround } from '@/entities/purchase';
import { answerLockedPlanTap, usePlanSessionsLocked } from '@/features/home-tour';
import { bitepal, colors as tokens, fonts, palette, space } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { clearProgramRequest, PROGRAM_MS, useProgram, useProgramRequest } from '@/shared/lib/program';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { RoundButton, SessionView, TITLE_SCALE, TestDayFlow, cardStyle, type PlaylistStep } from '@/widgets/session-player';

import {
  doneTitle,
  earnedToday,
  outcomeView,
  todayTitle,
  todayVariant,
  upcomingTitle,
  weekPath,
} from '../model/plan-view';
import { asProgramDay, playlistOf } from '../model/week-view';
import { DayCard } from './day-card';
import { HelpsCard } from './helps-card';
import { PlanPath } from './plan-path';
import { SessionDetail, detailMoves, type SessionDetailProps } from './session-detail';
import { TodayPlanCard, type TodayMove } from './today-plan-card';
import { WeekStrip } from './week-strip';

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
 * The goal makes room rather than jumping: when the finished day's card
 * arrives over it, it glides down by its height, as it rises in. Reduce
 * Motion moves it at once.
 */
const SHIFT = LinearTransition.duration(DONE_RISE_MS).easing(DONE_EASING).reduceMotion(ReduceMotion.System);

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
      /** Shown first, before the player: what the session holds and Start.
       * Null once Start is pressed, and for a start that skips it (an email
       * link, the short version). */
      detail: Pick<SessionDetailProps, 'title' | 'meta' | 'moves' | 'why' | 'startLabel'> | null;
    }
  | { kind: 'test'; review: boolean };

/**
 * The Plan tab, in BitePal's cards (#99, #98, #102, #103): "Your plan" with
 * the month's calendar behind a round button, the week strip with a dot on
 * each day done, today's card first (the minutes big, the ring of moves done,
 * the minutes to choose, the moves on their parts' colours, Start), then a
 * card for each other day of the week, a test day on its own card. Then the
 * goal and the weeks that work towards it as cards (`PlanPath`): this week
 * and next, and the test days where they fall.
 *
 * Once today is done its card says so and what the day earned (its minutes,
 * its moves or tests, the run of days), "See results" on a test day, and when
 * the next session opens.
 *
 * Two weeks on the path, because two are what the engine can say truthfully
 * (`weekPath`); past them one line says how the weeks after are made. Never
 * a plan length, "week N of M" or an end date.
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
  const clearance = useTabBarClearance();
  const focused = useIsFocused();
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
  const adjusted = todayPlan(todayHealthInputs(health), minutes, now);
  const doneToday = planSessionDone(today);
  const variant = todayVariant(adjusted, doneToday);
  /** Looking around without buying: every session ahead is locked, and says
   * so with a lock. Today's waits for Day 1 to be behind her (Day 1 is free);
   * a test is locked from the start, as `start` treats it. */
  const looking = useLookingAround();
  const sessionLocked = usePlanSessionsLocked();
  const locked = variant === 'test' ? looking : sessionLocked;
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
  /** A move's sheet, as a native form sheet over the tabs. */
  const openMove = useCallback((id: string) => router.push({ pathname: '/move/[id]', params: { id } }), [router]);

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
  /** Where each day's card sits in the list, for a tap on the week strip. */
  const dayTops = useRef<Record<string, number>>({});
  const [picked, setPicked] = useState(today);
  useEffect(() => setPicked(today), [today]);

  const start = useCallback(
    (running: Running) => {
      // Looking around without buying, a session is locked. Day 1 is free
      // while it is ahead: the plan goes down and Home's "Day 1" card comes
      // up. Past it, the plans rise over the plan. A test's results stay
      // readable.
      if (lookingAround() && !(running.kind === 'test' && running.review)) {
        if (running.kind === 'test') {
          askForPlans('test');
          return;
        }
        if (sessions().length === 0) program?.close();
        answerLockedPlanTap('session');
        return;
      }
      startedAt.current = Date.now();
      setSession(running);
      setRun((n) => n + 1);
      program?.openDetail();
    },
    [program],
  );

  const startToday = useCallback(
    (short = false, withDetail = false) => {
      if (adjusted.type === 'test') {
        start({ kind: 'test', review: false });
        return;
      }
      const planned = short ? twoMinuteVersion(adjusted) : adjusted;
      const minutesLabel = t('session.minutes', { count: planned.minutes });
      const day = weekday(today, 'long');
      const moves = withDetail
        ? detailMoves(
            t,
            planned.exercises,
            logFor(todayDayNumber(Date.now()))?.exercisesDone ?? [],
            (id) => exerciseById(id).title,
          )
        : null;
      start({
        kind: 'session',
        day: asProgramDay(planned),
        date: today,
        playlist: playlistOf(planned.exercises),
        exerciseIds: planned.exercises.map((e) => e.id),
        minutes: planned.minutes,
        detail:
          moves == null
            ? null
            : {
                title: day.charAt(0).toLocaleUpperCase(language) + day.slice(1),
                meta: t('player.header.meta', {
                  minutes: minutesLabel,
                  moves: t('session.moveCount', { count: moves.length }),
                }),
                moves,
                why: planReasonLine(t, adjusted.reason),
                startLabel: t('player.detail.start', { minutes: minutesLabel }),
              },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [adjusted, start, today, t, language],
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
      if (EXERCISES_BY_ID[linkRequest.id] != null) openMove(linkRequest.id);
      return;
    }
    if (linkRequest.kind === 'test') {
      if (adjusted.type === 'test' && !doneToday) setPendingStart(true);
      return;
    }
    if (doneToday) return;
    if (linkRequest.minutes != null && adjusted.type !== 'test') setMinutes(linkRequest.minutes);
    setPendingStart(true);
  }, [linkRequest, program, adjusted.type, doneToday, openMove]);
  useEffect(() => {
    if (!pendingStart) return;
    setPendingStart(false);
    startToday();
  }, [pendingStart, startToday]);

  const onScroll = useAnimatedScrollHandler((event) => {
    if (program != null) program.scrollTop.value = event.contentOffset.y;
  });

  const listRef = useAnimatedRef<Animated.ScrollView>();
  /**
   * To a place in the list, through the ref's own instance: Reanimated's
   * `scrollTo` is a worklet and does nothing called from the JS thread.
   */
  const scrollList = (y: number, animated = true) => listRef.current?.scrollTo({ y, animated });

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
  const tomorrowKey = addDays(today, 1);
  /**
   * The next test's day, for the weeks: the day this week's plan has it on
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
          return {
            id: e.id,
            title: exercise.title,
            dose: doseLabel(e.dose.sets, e.dose.reps, e.dose.holdSec, e.dose.perSide),
            timed: e.dose.reps == null,
            done: ticked.includes(e.id),
          };
        })
      : [];

  const title = todayTitle(t, adjusted, plan.focus, variant);

  // ── A finished day: what it earned ───────────────────────────────────────
  // Read only while the card is up. Never a pain figure: the records' pain
  // is not read, and the streak counts days, not how they felt.
  const finished = variant === 'done' && doneShown;
  const earned = finished
    ? earnedToday(sessions(), today, {
        minutes: adjusted.minutes,
        moves: new Set(ticked).size,
      })
    : null;

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
   * The goal and its weeks, under the week. A move tapped on a week opens its
   * preview, as today's moves do.
   */
  const goalBlock =
    goal != null ? (
      <Animated.View
        layout={SHIFT}
        onLayout={(event) => {
          goalTop.current = event.nativeEvent.layout.y;
        }}>
        <PlanPath view={goal} nodes={path} today={today} onPreview={openMove} />
      </Animated.View>
    ) : null;

  const testBody = t('pages.plan.testBody', {
    count: RETEST_TESTS,
    minutes: RETEST_MINUTES,
  });
  const otherDays = plan.days.filter((day) => day.date !== today);

  return (
    <View style={styles.root}>
      <Animated.View style={[styles.pane, listPane]}>
        <Animated.ScrollView
          contentInsetAdjustmentBehavior="never"
          ref={listRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.list, { paddingTop: insets.top + 8, paddingBottom: clearance + 28 }]}>
          <View style={styles.header}>
            <Text
              style={[styles.title, { color: colors.foreground }]}
              accessibilityRole="header"
              maxFontSizeMultiplier={2}>
              {t('pages.plan.title')}
            </Text>
            <RoundButton
              icon={Calendar03Icon}
              label={t('pages.plan.monthA11y')}
              size={52}
              onPress={() => router.push('/sheet/plan-month')}
            />
          </View>

          <WeekStrip
            days={plan.days}
            today={today}
            selected={picked}
            done={planSessionDone}
            onSelect={(date) => {
              setPicked(date);
              const y = dayTops.current[date];
              if (y != null) scrollList(y - 12);
            }}
          />

          {/* Today first, whatever the day. A finished day's card waits for the
              session pane to be gone, then rises in with what it earned. */}
          {(variant !== 'done' || finished) && (
            <Animated.View
              key={finished ? 'done' : 'todo'}
              entering={finished ? rise(0) : undefined}
              onLayout={(event) => {
                dayTops.current[today] = event.nativeEvent.layout.y;
              }}>
              <TodayPlanCard
                variant={variant}
                title={variant === 'done' ? doneTitle(t, adjusted, plan.focus) : title}
                minutes={adjusted.minutes}
                choice={minutes}
                onChoice={setMinutes}
                moves={checklist}
                onStart={() => startToday(false, true)}
                onShort={() => startToday(true)}
                shortMinutes={twoMinuteVersion(adjusted).minutes}
                note={planReasonLine(t, adjusted.reason)}
                testBody={testBody}
                restRoutine={{
                  label: t(routine.titleKey),
                  onPress: () => {
                    requestProtocol(routine.id);
                    router.navigate('/exercises');
                  },
                }}
                nextAt={nextUp != null && !nextUp.open ? nextUp.at : null}
                earned={
                  earned == null
                    ? null
                    : {
                        minutes: earned.minutes,
                        count: adjusted.type === 'test' ? RETEST_TESTS : earned.moves,
                        test: adjusted.type === 'test',
                        streak: streak.current,
                      }
                }
                onResults={adjusted.type === 'test' && tested ? () => start({ kind: 'test', review: true }) : undefined}
                onPreview={openMove}
                active={focused && session == null}
                locked={locked}
              />
            </Animated.View>
          )}

          <Text style={styles.section} accessibilityRole="header" maxFontSizeMultiplier={TITLE_SCALE}>
            {t('pages.plan.weeks.this')}
          </Text>
          {otherDays.map((day) => (
            <View
              key={day.date}
              onLayout={(event) => {
                dayTops.current[day.date] = event.nativeEvent.layout.y;
              }}>
              <DayCard
                day={day}
                title={upcomingTitle(t, day.type, plan.focus)}
                today={today}
                done={day.date < today && planSessionDone(day.date)}
                testBody={testBody}
                onPreview={openMove}
                locked={looking}
              />
            </View>
          ))}

          {goalBlock}

          {/* What the moves cannot do on their own: shoes, load, time. */}
          <HelpsCard goals={goals} />

          {reached != null && nextGoal != null && (
            <View style={styles.reached}>
              <View style={styles.reachedRow}>
                {/* The goal's own target, not a trophy: a reached goal may be
                    a pain figure, and a pain figure is never celebrated. */}
                <View style={styles.well}>
                  <FluentIcon name="target" size={28} />
                </View>
                <Text style={styles.reachedText}>
                  {t('pages.plan.reached', {
                    goal: t(`pages.week.goal.${reached.type}`),
                    next: t(`pages.week.goal.${nextGoal.type}`).toLocaleLowerCase(language),
                  })}
                </Text>
              </View>
              <Pressable
                accessibilityRole="button"
                onPress={() => scrollList(goalTop.current - 10)}
                style={({ pressed }) => [styles.pill, pressed && { opacity: 0.55 }]}>
                <Text style={styles.pillText}>{t('pages.plan.seeNextGoal')}</Text>
              </Pressable>
            </View>
          )}
        </Animated.ScrollView>
      </Animated.View>

      {/* The player sits under the status bar on the pane's inset; the test
          day keeps its own insets and paints its own page, so it gets the
          pane bare. */}
      <Animated.View
        style={[
          styles.pane,
          {
            backgroundColor: session?.kind === 'session' ? tokens.surface : colors.background,
            paddingTop:
              session?.kind === 'test' || (session?.kind === 'session' && session.detail != null) ? 0 : insets.top,
          },
          sessionPane,
        ]}>
        {session?.kind === 'session' && session.detail != null && (
          <SessionDetail
            {...session.detail}
            minutes={session.minutes}
            onBack={() => program?.closeDetail()}
            onPreview={openMove}
            onStart={() => {
              setSession({ ...session, detail: null });
              setRun((n) => n + 1);
            }}
          />
        )}
        {session?.kind === 'session' && session.detail == null && (
          <SessionView
            key={run}
            day={session.day}
            playlist={session.playlist}
            // A plan session is what the next ones are tuned from, so it is
            // the one that asks how it went.
            feedback
            // Under the day's date, not its list of moves: a pain check or
            // "Can't do this" plans today again, and the place she left is
            // still hers.
            resumeKey={`plan:${session.date}`}
            onBack={() => program?.closeDetail()}
            onFinish={({ skipped }) => {
              // The one way a plan session ends: the session list, the day
              // log and the sync, together. It never re-plans today — this
              // page used to rebuild the week here, and that is what turned a
              // finished test into "Recovery · Done".
              completePlanSession({
                date: session.date,
                source: 'plan',
                minutes: session.minutes,
                exerciseIds: session.exerciseIds,
                skippedIds: skipped,
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
            // way out.
            onSaved={() => scrollList(0, false)}
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
  list: {
    paddingHorizontal: space.screen,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 2,
  },
  title: {
    flex: 1,
    ...fonts.heavy(34, -0.8),
  },
  section: {
    ...fonts.heavy(24, -0.4),
    color: tokens.text,
    marginTop: 12,
  },
  reached: {
    ...cardStyle,
    padding: 20,
    gap: 14,
  },
  reachedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  well: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reachedText: {
    flex: 1,
    ...fonts.semibold(19),
    color: tokens.text,
  },
  pill: {
    alignSelf: 'flex-start',
    minHeight: 48,
    paddingHorizontal: 18,
    borderRadius: 999,
    justifyContent: 'center',
    backgroundColor: bitepal.well,
  },
  pillText: {
    ...fonts.semibold(17),
    color: tokens.text,
  },
});
