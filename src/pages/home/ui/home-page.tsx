import SnowIcon from '@hugeicons/core-free-icons/SnowIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useIsFocused, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { runOnJS, useAnimatedReaction, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  currentDay,
  painOn,
  todayKey,
  todayPlan,
  useStreak,
  useWeeklyGoal,
} from '@/entities/program';

import { FollowSheet, useFollowOffer } from '@/features/follow';
import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { strideWasShorter, todayHealthInputs, useHealthSignals } from '@/entities/health';
import { accents, fonts, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { HeaderActions } from '@/shared/ui/header-actions';
import { IntroReveal, useSplashRevealed } from '@/shared/ui/splash';

import { StreakWeek } from '@/shared/ui/streak-week';
import { DailyStack } from './daily-stack';
import { DayOneSession } from './day-one-session';
import { CHECK_IN_GAP, PainCheck } from './pain-check';
import { TodayTasks } from './today-tasks';
import { LibraryRow } from './library-row';
import { LongDayCard } from './long-day-card';
import { PassEndingCard } from './pass-ending-card';
import { dayStory } from '../model/day-story';
import { legState, readinessParts, readinessScore } from '../model/readiness';
import { useDevReadiness } from '../model/readiness-dev';
import { ReadinessGauge } from './readiness-gauge';
import { WeekGoalLine } from './week-goal-line';
import { accessoriesFor, useAccessoryUnlocks } from '../model/accessories';

import { REPLAY_MASK } from '@/shared/ui/replay-mask';

/**
 * The title the header takes on while the program is up: the weekday over the
 * date, written the way the design does it.
 *
 * A function, not a constant. Read once at module scope it would be fixed at
 * the moment the bundle loaded, and an app left open overnight would insist it
 * was still yesterday.
 */
function todayLines(): { title: string; subtitle: string } {
  const now = new Date();
  return {
    title: now.toLocaleDateString('en-US', { weekday: 'long' }),
    subtitle: `${now.toLocaleDateString('en-US', { month: 'long' })}, ${now.getDate()}`,
  };
}

/**
 * Home: the week, the morning line, and today's check-in.
 *
 * Every figure on it is derived. The streak and the week come from the
 * attendance record, the sentence from today's logged pain, and the list from
 * the day the engine resolves — so the four things this screen says cannot
 * disagree with each other, which is the failure they were hard-coded into.
 */
export function HomePage() {
  const router = useRouter();
  const focused = useIsFocused();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const t = useT();
  const dockHeight = useTabBarClearance();
  const program = useProgram();
  const planOver = usePlanOver();
  const revealed = useSplashRevealed();
  /** The scroller, lent to the tour so a stop below the fold comes up. */
  const scroll = useRef<Animated.ScrollView>(null);
  useSpotlightScroller((y) => scroll.current?.scrollTo({ y, animated: true }));
  const overviewAnchor = useSpotlightAnchor('home.overview');
  /** The check-in's height, as its two parts: the question or the answer
   * (eased by the check-in) and the row under it. Added up on the UI thread
   * for the stack, so the list under it never lags a frame behind. */
  const checkInViews = useSharedValue(0);
  const checkInRow = useSharedValue(0);
  /** The room the long-day card takes under the check-in, nothing when it is
   * not there: part of the same block, so today's tasks follow it too. */
  const longDayRoom = useSharedValue(0);
  const checkInHeight = useDerivedValue(
    () => checkInViews.value + CHECK_IN_GAP + checkInRow.value + longDayRoom.value,
  );
  const streak = useStreak();
  /** This week's plan sessions against the plan's days, under the week. */
  const weekGoal = useWeeklyGoal();
  /** The longest run's rewards, tracked the first time each is reached, never
   * for a pretend streak from a dev link. */
  useAccessoryUnlocks(accessoriesFor(streak.longest), streak.preview !== true);
  /** The check-in's own sheet is up over Home. */
  const [checkSheet, setCheckSheet] = useState(false);
  /** A session from the list, playing in its sheet. */
  const [tasksSheet, setTasksSheet] = useState(false);
  /** The day-one session the "Day 1" card started, playing in its sheet. */
  const [dayOne, setDayOne] = useState<DayOneRun | null>(null);
  /** The program pulled up over Home (the plan, a session in it). */
  const [programUp, setProgramUp] = useState(false);
  useAnimatedReaction(
    () => (program?.progress.value ?? 0) > 0,
    (up, was) => {
      if (up !== was) runOnJS(setProgramUp)(up);
    },
    [program],
  );
  const tourState = useHomeTourState();
  /** Skipped the paywall and not bought since (the root's `tryingOut`):
   * looking around, with every session but Day 1 locked. Home is not theirs
   * yet, so nothing of a customer's rises on it (the follow offer, the
   * long-day card). */
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const walled = skipped && !entitled && !lapsed;
  /** Home in front with nothing over it: no program, session sheet, first
   * run's card or tour, or offer wall. */
  const homeClear =
    focused &&
    revealed &&
    !planOver &&
    !walled &&
    tourState !== 'armed' &&
    !programUp &&
    !tasksSheet &&
    !checkSheet &&
    dayOne == null;
  /** Walkito's Instagram, once, on the third day of use: only for somebody
   * whose app this is (not over the offer wall or the first run) and with
   * nothing else rising or up. */
  const follow = useFollowOffer(homeClear && !lapsed);
  const signals = useHealthSignals();
  /** "Legs ready today": this morning's pain, last night's sleep and
   * yesterday's steps against their usual. Shown, never sent anywhere. */
  const devReadiness = useDevReadiness();
  const readinessInput = {
    pain: painOn(currentDay()),
    sleepHours: signals.sleepLastNightMin == null ? null : signals.sleepLastNightMin / 60,
    stepsYesterday: signals.stepsYesterday,
    stepsUsual: signals.stepsBaseline,
  };
  const devForced = __DEV__ && devReadiness.score != null;
  const readiness = devForced ? devReadiness.score : readinessScore(readinessInput);
  const readinessPieces = readinessParts(readinessInput);
  /** The legs right now, against yesterday's morning. */
  const realLeg = legState({
    pain: readinessInput.pain,
    painYesterday: painOn(currentDay() - 1),
    stepsYesterday: signals.stepsYesterday,
    stepsUsual: signals.stepsBaseline,
    sleepMinutes: signals.sleepLastNightMin,
  });
  const leg = __DEV__ && devReadiness.leg != null ? { ...realLeg, id: devReadiness.leg } : realLeg;
  return (
    <View style={styles.screen}>
      <Animated.ScrollView
        ref={scroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 24,
          paddingHorizontal: 20,
          // Clears the whole bottom stack: the docked action, the tab pill
          // lifted over it, and a little air under the last card.
          paddingBottom: dockHeight + 110,
        }}>
        {/* Intro stagger: chrome (header, slot 0 with the tab bar) first, then
            the content cascades top-to-bottom. Anything holding a GlassView
            animates transform-only (fade: false) — glass breaks under animated
            opacity — and gets its fade-in from the splash overlay instead. */}
        {/* The streak takes the leading edge the date used to hold. The date
            is not missing information: the week strip directly below names
            today, in the place the eye already goes. */}
        <IntroReveal order={0} fade={false}>
          <HeaderActions
            spread
            streak={streak.current}
            streakGlyph={<FluentIcon name="fire" size={22} />}
            // Banked freezes, beside the count, always: a zero says freezes
            // exist and can be earned, which an empty capsule never did.
            streakAccessory={
              <View style={styles.freezes}>
                <HugeiconsIcon icon={SnowIcon} size={16} color={accents[scheme].blue.fill} strokeWidth={2.2} />
                <Text style={[styles.freezeCount, { color: palette[scheme].foreground }]}>{streak.freezes}</Text>
              </View>
            }
            streakAccessoryLabel={t('streakSheet.freezes', { count: streak.freezes })}
            swapProgress={program?.progress}
            centre={todayLines()}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* The week, right under the header: it is what tells the user which
            day this screen is about now that the date has gone. */}
        <View>
          <IntroReveal order={1} style={styles.week}>
            <StreakWeek done={streak.strip} levels={streak.levels} />
            {/* The week's plan sessions, a count and never a verdict. */}
            <View style={styles.weekGoal}>
              <WeekGoalLine goal={weekGoal} />
            </View>
          </IntroReveal>

          {/* Under the week, the morning's readiness: how the legs are this
            morning, and the score. Masked: it is made of pain, sleep, steps and
            Apple Health numbers. The tour's first stop. */}
          <IntroReveal order={2} style={styles.gauge} {...REPLAY_MASK}>
            <ReadinessGauge
              score={readiness}
              parts={readinessPieces}
              details={{
                pain: readinessInput.pain,
                sleepMinutes: signals.sleepLastNightMin,
                stepsYesterday: signals.stepsYesterday,
                stepsUsual: signals.stepsBaseline,
              }}
              leg={leg}
              story={dayStory(signals, todayKey(), strideWasShorter())}
              planReason={todayPlan(todayHealthInputs(signals), null).reason}
              stageRef={overviewAnchor}
            />
          </IntroReveal>

          {/* The check-in above the list. Until it is answered it is the big
            question, since the answer changes today; once answered it folds
            into a short card of the day's answer where it stands, and the list
            rises as it does. */}
        </View>

        <IntroReveal order={3} fade={false} style={styles.check}>
          <DailyStack
            firstHeight={checkInHeight}
            first={
              <>
                <PainCheck
                  onSheet={setCheckSheet}
                  heights={{ views: checkInViews, row: checkInRow }}
                />
                {/* The morning after a long day on the feet: what Health saw,
                    and three seated minutes. Not during the first run or
                    under the offer wall: Home is not theirs yet. */}
                <LongDayCard
                  allowed={!walled && !lapsed && tourState !== 'armed'}
                  seen={focused && revealed}
                  room={longDayRoom}
                />
              </>
            }
            second={
              <TodayTasks
                covered={checkSheet || dayOne != null}
                onSheet={setTasksSheet}
              />
            }
          />
        </IntroReveal>

        {/* A 3-month pass in its last week, with nothing renewing after it:
            the date it ends, and the plans to keep going with. */}
        <PassEndingCard seen={focused && revealed} />

        {/* Anything outside the plan lives in the Library; the one that fits
            this moment is offered here first. */}
        <LibraryRow />
      </Animated.ScrollView>

      {/* The first run, after the purchase or the skip: the "Day 1" card and
          then the tour, over Home while it is in front and nothing else is
          over it. The card's session plays in Home's own sheet below. */}
      <HomeTour
        visible={focused && revealed && !planOver && !checkSheet}
        sessionOpen={dayOne != null}
        onStartDayOne={setDayOne}
      />
      <DayOneSession run={dayOne} onClose={() => setDayOne(null)} />

      <FollowSheet visible={follow.visible} from="auto" onClose={follow.close} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  week: {
    marginTop: 20,
  },
  weekGoal: {
    marginTop: 12,
  },
  freezes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  freezeCount: fonts.semibold(16),
  gauge: {
    marginTop: 20,
  },
  check: {
    marginTop: 40,
  },
});
