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

import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { useRouter } from 'expo-router';

import {
  addDays,
  clearRetestRequest,
  exerciseById,
  currentDay,
  doseLabel,
  goals as readGoals,
  nextWeekPreview,
  outcome as readOutcome,
  painOn,
  planDayOn,
  planSessionDone,
  planSettings,
  rebuildRestOfWeek,
  recordSession,
  refreshGoals,
  RETEST_MINUTES,
  RETEST_TESTS,
  todayKey,
  todayPlan,
  twoMinuteVersion,
  useLogsVersion,
  usePlanVersion,
  useRetestRequest,
  useStreak,
  weekPlan,
  type DayStatus,
  type GoalType,
  type PlanDay,
  type ProgramDay,
  type SessionMinutes,
} from '@/entities/program';
import { useHealthSignals } from '@/entities/health';
import { protocolById, recommendProtocol, requestProtocol } from '@/entities/protocols';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { StreakCapsule } from '@/shared/ui/header-actions';

import { SessionView, type PlaylistStep } from '@/widgets/session-player';

import { kindName, outcomeView, rationaleLine, todayTitle, todayVariant } from '../model/plan-view';
import { asProgramDay, playlistOf } from '../model/week-view';
import { KIND_STICKER } from './kind-tone';
import { DayCard } from './day-card';
import { DayLink } from './day-link';
import { DaySheet } from './day-sheet';
import { ExerciseSheet } from './exercise-sheet';
import { GoalCard } from './goal-card';
import { NextWeekCard } from './next-week-card';
import { PlanChip } from './plan-chip';
import { TodayCard } from './today-card';

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

/** What the session pane is running. */
type Running = {
  day: ProgramDay;
  date: string;
  source: 'plan' | 'test';
  /** Null for a test, which the player runs as its own measurement. */
  playlist: PlaylistStep[] | null;
  exerciseIds: string[];
  minutes: number;
};

/** The colour a goal's bar wears: the colour of the work that moves it. */
const GOAL_ACCENT: Readonly<Record<GoalType, AccentName>> = {
  pain_free_mornings: 'teal',
  arch_hold: 'violet',
  calf_raises: 'violet',
  balance: 'blue',
  symmetry: 'blue',
};

function accentFor(type: PlanDay['type']): AccentName | null {
  if (type === 'test') return 'amber';
  if (type === 'rest') return null;
  return KIND_STICKER[type].accent;
}

/**
 * The plan screen: the goal, this week, today, and what comes next.
 *
 * A schedule, not a path. The old screen drew a trail of arrows and dots
 * through day cards, said the goal three times and called itself "Week 5" of
 * nothing in particular. Now the goal is one card, the week is one strip of
 * seven circles, today is the only big card, and the rest of the week is a
 * short list. Everything comes from local storage — the weekly plan, adjusted
 * to this morning — so nothing on it ever waits on a network.
 */
export function ProgramPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const program = useProgram();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();
  const language = useLanguage();
  const health = useHealthSignals();
  const streak = useStreak();

  useLogsVersion();
  usePlanVersion();

  const now = Date.now();
  const today = todayKey(now);
  const plan = weekPlan(now);
  const goals = readGoals();
  const focusGoal = goals.find((goal) => goal.type === plan.focus);

  const [minutes, setMinutes] = useState<SessionMinutes>(() => planSettings().defaultMinutes);
  const adjusted = todayPlan(
    {
      stepsYesterday: health.stepsYesterday,
      steps28Avg: health.stepsBaseline,
      sleepHours: health.sleepLastNightMin == null ? null : health.sleepLastNightMin / 60,
    },
    minutes,
    now,
  );
  const doneToday = planSessionDone(today);
  const variant = todayVariant(adjusted, doneToday);

  const [session, setSession] = useState<Running | null>(null);
  const [run, setRun] = useState(0);
  const [reading, setReading] = useState<{ day: PlanDay; status: DayStatus } | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const weekday = (date: string, style: 'short' | 'long' = 'short') => {
    const [y, m, d] = date.split('-').map(Number);
    return new Intl.DateTimeFormat(language, { weekday: style }).format(new Date(y, m - 1, d));
  };

  const start = useCallback(
    (running: Running) => {
      setSession(running);
      setRun((n) => n + 1);
      program?.openDetail();
    },
    [program],
  );

  const startToday = useCallback(
    (short = false) => {
      if (adjusted.type === 'test') {
        start({ day: asProgramDay(adjusted), date: today, source: 'test', playlist: null, exerciseIds: [], minutes: RETEST_MINUTES });
        return;
      }
      const planned = short ? twoMinuteVersion(adjusted) : adjusted;
      start({
        day: asProgramDay(planned),
        date: today,
        source: 'plan',
        playlist: playlistOf(planned.exercises),
        exerciseIds: planned.exercises.map((e) => e.id),
        minutes: planned.minutes,
      });
    },
    [adjusted, start, today],
  );

  /** A retest asked for from the day page: today's test, if today has one. */
  const requested = useRetestRequest();
  useEffect(() => {
    if (requested == null) return;
    clearRetestRequest();
    if (adjusted.type === 'test') startToday();
  }, [requested, adjusted.type, startToday]);

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

  const listPane = useAnimatedStyle(() => ({
    transform: [{ translateX: -(program?.detail.value ?? 0) * width * PARALLAX }],
  }));
  const sessionPane = useAnimatedStyle(() => ({
    transform: [{ translateX: (1 - (program?.detail.value ?? 0)) * width }],
  }));

  // ── What the screen says ─────────────────────────────────────────────────
  const testToday = plan.days.some((day) => day.date === today && day.type === 'test');
  const outcome = readOutcome();
  const goal = outcome != null ? outcomeView(t, outcome, goals, plan.focus, testToday) : null;
  const goalTone = accents[scheme][GOAL_ACCENT[goal?.current ?? plan.focus ?? 'calf_raises']];

  const newTitle = plan.newThisWeek.length > 0 ? exerciseById(plan.newThisWeek[0]).title : null;
  const rationale = rationaleLine(t, plan.rationale, newTitle);

  const title = todayTitle(t, adjusted, plan.focus, variant);
  const tomorrowDay = planDayOn(addDays(today, 1));
  const tomorrow =
    tomorrowDay == null || tomorrowDay.type === 'rest'
      ? t('pages.plan.tomorrowRest')
      : t('pages.plan.tomorrow', {
          kind: kindName(t, tomorrowDay.type).toLocaleLowerCase(language),
          minutes: t('session.minutes', { count: tomorrowDay.minutes }),
        });

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

  // The rest of the week, rest days included: a week is seven days, and the
  // two with nothing to do are part of the plan, not gaps in it.
  const upcoming = plan.days.filter((day) => day.date > today);

  const next = nextWeekPreview(now);
  const nextSessions = next.days.filter((day) => day.type !== 'rest');
  const nextSummary = t('pages.plan.nextWeekSummary', {
    sessions: t('pages.plan.sessionCount', { count: nextSessions.length }),
    goal: next.focus != null ? t(`pages.week.goal.${next.focus}`).toLocaleLowerCase(language) : '-',
  });
  const nextDays = nextSessions.map((day) => ({
    date: day.date,
    label: t('pages.plan.row', { day: weekday(day.date), kind: kindName(t, day.type) }),
    accent: accentFor(day.type) ?? 'amber',
  }));

  const reached = goals.find((g) => g.achievedOn != null && g.achievedOn >= plan.weekStart && g.type === plan.focus);
  const nextGoal = goals.find((g) => g.status === 'active' && g.type !== reached?.type);


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
          <StreakCapsule
            streak={streak.current}
            glyph={<FireIcon size={22} color={accents[scheme].orange.fill} weight="fill" />}
          />
        </View>

        <Animated.ScrollView
          ref={listRef}
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={[styles.list, { paddingTop: 10, paddingBottom: insets.bottom + 120 }]}>
          {goal != null && <GoalCard view={goal} tone={goalTone} />}

          {rationale != null && <Text style={[styles.rationale, { color: meter.caption }]}>{rationale}</Text>}

          {/* The run from the goal to today, and from today on. */}
          <DayLink />

          <TodayCard
            variant={variant}
            kind={adjusted.type === 'rest' ? 'rest' : adjusted.type}
            title={title}
            moves={adjusted.exercises.map((e) => {
              const exercise = exerciseById(e.id);
              return {
                id: e.id,
                title: exercise.title,
                dose: doseLabel(e.dose.sets, e.dose.reps, e.dose.holdSec, e.dose.perSide),
                category: exercise.category,
              };
            })}
            minutes={minutes}
            onMinutes={setMinutes}
            onStart={() => startToday()}
            onPreview={setPreview}
            tests={{
              chips: [t('pages.program.zoneCalf'), t('pages.program.zoneArch'), t('pages.program.zoneBalance')],
              body: t('pages.plan.testBody', { count: RETEST_TESTS, minutes: RETEST_MINUTES }),
            }}
            tomorrow={tomorrow}
            restRoutine={{
              label: t(routine.titleKey),
              onPress: () => {
                requestProtocol(routine.id);
                program?.close();
                router.navigate('/quick');
              },
            }}
          />

          {/* Only today's link moves — see `DayLink.animated`. */}
          <DayLink animated={variant !== 'done'} ahead />

          <Text style={[styles.sectionLabel, { color: meter.caption }]}>{t('pages.plan.upcoming')}</Text>
          {upcoming.length === 0 ? (
            <Text style={[styles.rationale, { color: meter.caption }]}>{t('pages.plan.upcomingEnd')}</Text>
          ) : (
            <View>
              {upcoming.map((row, i) => (
                <View key={row.date}>
                  <DayCard
                    day={asProgramDay(row)}
                    status="upcoming"
                    label={weekday(row.date, 'long')}
                    locks={false}
                    rest={row.type === 'rest'}
                    onOpen={() => setReading({ day: row, status: 'upcoming' })}
                  />
                  {i < upcoming.length - 1 && (
                    <View style={styles.gap}>
                      <DayLink ahead />
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}

          <Text style={[styles.sectionLabel, { color: meter.caption }]}>{t('pages.plan.nextWeek')}</Text>
          <NextWeekCard summary={nextSummary} days={nextDays} how={t('pages.plan.nextWeekHow')} />

          {reached != null && nextGoal != null && (
            <View style={[styles.reached, { backgroundColor: colors.card }]}>
              <Text style={[styles.reachedText, { color: colors.foreground }]}>
                {t('pages.plan.reached', {
                  goal: t(`pages.week.goal.${reached.type}`),
                  next: t(`pages.week.goal.${nextGoal.type}`).toLocaleLowerCase(language),
                })}
              </Text>
              <PlanChip
                label={t('pages.plan.seeNextGoal')}
                tone={accents[scheme].violet}
                onPress={() => scrollTo(listRef, 0, 0, true)}
              />
            </View>
          )}
        </Animated.ScrollView>
      </Animated.View>

      <DaySheet
        day={reading == null ? null : asProgramDay(reading.day)}
        status={reading?.status ?? 'upcoming'}
        onClose={() => setReading(null)}
        onStart={() => {
          const opened = reading?.day;
          setReading(null);
          if (opened?.date === today) startToday();
        }}
        week={
          reading == null
            ? undefined
            : {
                moves: reading.day.exercises.length,
                stat: weekday(reading.day.date, 'long'),
                statLabel: focusGoal != null ? t(`pages.week.goal.${focusGoal.type}`) : '',
                note: reading.day.date > today ? t('pages.week.adjusts') : undefined,
              }
        }
      />

      <ExerciseSheet exerciseId={preview} onClose={() => setPreview(null)} />

      <Animated.View style={[styles.pane, { backgroundColor: colors.background, paddingTop: insets.top }, sessionPane]}>
        {session != null && (
          <SessionView
            key={run}
            day={session.day}
            playlist={session.playlist ?? undefined}
            onBack={() => program?.closeDetail()}
            onFinish={() => {
              recordSession({
                date: session.date,
                source: session.source,
                minutes: session.minutes,
                exercises: session.exerciseIds.map((id) => ({ id, status: 'done' as const })),
                feedback: null,
                inSessionPain: null,
                completedAt: Date.now(),
              });
              if (session.source === 'test') {
                refreshGoals();
                rebuildRestOfWeek();
              }
              program?.closeDetail();
            }}
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
    fontSize: 24,
    fontFamily: fonts.heavy,
    letterSpacing: -0.6,
  },
  list: {
    paddingHorizontal: 20,
    gap: 18,
  },
  rationale: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.medium,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  sectionLabel: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
    marginTop: 6,
    marginBottom: -8,
  },
  rows: {
    gap: 8,
  },
  gap: {
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  rowLabel: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  rowMinutes: {
    fontSize: 15,
    fontFamily: fonts.bold,
  },
  reached: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 14,
    alignItems: 'flex-start',
  },
  reachedText: {
    fontSize: 17,
    lineHeight: 23,
    fontFamily: fonts.semibold,
  },
});
