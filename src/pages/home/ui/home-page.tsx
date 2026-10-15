import SnowIcon from '@hugeicons/core-free-icons/SnowIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useIsFocused, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { runOnJS, useAnimatedReaction, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BIG_MILESTONE,
  currentDay,
  markMilestoneSeen,
  milestoneFor,
  milestoneSeen,
  painOn,
  useStreak,
  useWeeklyGoal,
} from '@/entities/program';

import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { useHealthSignals } from '@/entities/health';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useDockHeight } from '@/shared/ui/action-dock';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Glow } from '@/shared/ui/glow';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { IntroReveal, useSplashRevealed } from '@/shared/ui/splash';

import { StreakSheet } from '@/shared/ui/streak-sheet';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { holdReview } from '@/shared/lib/review';
import { StreakWeek } from '@/shared/ui/streak-week';
import { Confetti, type ConfettiOrigin } from '@/shared/ui/confetti';
import { OverlayPortal } from '@/shared/ui/overlay-host';
import { DailyStack } from './daily-stack';
import { DayOneSession } from './day-one-session';
import { MilestoneMascot } from './milestone-mascot';
import { CHECK_IN_GAP, PainCheck } from './pain-check';
import { TodayTasks } from './today-tasks';
import { LibraryRow } from './library-row';
import { PassEndingCard } from './pass-ending-card';
import { legState, readinessParts, readinessScore } from '../model/readiness';
import { useDevReadiness } from '../model/readiness-dev';
import { ReadinessGauge } from './readiness-gauge';
import { WeekGoalLine } from './week-goal-line';
import {
  ACCESSORY_ART,
  ACCESSORY_KEYS,
  accessoriesFor,
  accessoryAt,
  useAccessoryUnlocks,
  type AccessoryId,
} from '../model/accessories';

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
/** How long after the streak reaches a milestone its sheet rises: past the
 * check-in's own fold. */
const MILESTONE_AFTER_MS = 1100;
/** The milestone's sheet stays in the overlay this long after it is closed:
 * its leaving (220 ms) and a margin, so the tour's modal does not present
 * over it while it still shows. */
const MILESTONE_GONE_MS = 320;

export function HomePage() {
  const router = useRouter();
  /** Home stays mounted under the other tabs; the drift has no reason to run
   * there. */
  const focused = useIsFocused();
  const onScroll = useMinimizeOnScroll();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const t = useT();
  const dockHeight = useDockHeight();
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
  const checkInHeight = useDerivedValue(() => checkInViews.value + CHECK_IN_GAP + checkInRow.value);
  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
  const streak = useStreak();
  /** This week's plan sessions against the plan's days, under the week. */
  const weekGoal = useWeeklyGoal();
  /** What Walkito wears, by the longest run: tracked the first time each is
   * shown, never for a pretend streak from a dev link. */
  const accessories = accessoriesFor(streak.longest);
  useAccessoryUnlocks(accessories, streak.preview !== true);
  /**
   * A streak milestone reached and not yet marked — section 6 of the plan
   * spec. Each is shown once, ever; ten gets the confetti.
   */
  const milestone = milestoneFor(streak.current);
  /** The milestone whose sheet is up, held as its own number: a streak that
   * moves while it is open cannot take the sheet away half shown. */
  const [shownMilestone, setShownMilestone] = useState<ReturnType<typeof milestoneFor>>(null);
  const milestoneOpen = shownMilestone != null;
  /** The last one shown, for the sheet's words while it leaves. */
  const [sheetMilestone, setSheetMilestone] = useState<ReturnType<typeof milestoneFor>>(null);
  /** The check-in's own sheet is up over Home: the list's mascot holds still. */
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
  /** Skipped the paywall and not bought since: the offer wall stands over Home
   * once the tour is done (the root's `tryingOut`). */
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const walled = skipped && !entitled && !lapsed;
  /** Home in front with nothing over it. The milestone's sheet is drawn over
   * the tab bar and the dock (below), so over the program too, where it would
   * cover the session's own celebration; it waits for that, for a session's
   * sheet, the first run's card and tour and the offer wall, and rises a beat
   * after they have gone. */
  const homeClear =
    focused &&
    revealed &&
    !planOver &&
    !walled &&
    tourState !== 'armed' &&
    !programUp &&
    !tasksSheet &&
    !checkSheet &&
    dayOne == null &&
    !streakOpen;
  useEffect(() => {
    if (milestone == null || milestoneSeen(milestone) || !homeClear || milestoneOpen) return undefined;
    // A beat late: the answer that reaches a milestone is still folding in,
    // and the sheet rising in the same frame was one motion too many. It also
    // lets a sheet that has just closed finish leaving.
    const timer = setTimeout(() => {
      setShownMilestone(milestone);
      setSheetMilestone(milestone);
    }, MILESTONE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [milestone, homeClear, milestoneOpen]);
  /** What the milestone on the sheet earns him, if anything (7, 30, 100). */
  const milestoneAccessory = sheetMilestone != null ? accessoryAt(sheetMilestone) : null;
  const closeMilestone = () => {
    if (shownMilestone != null) markMilestoneSeen(shownMilestone);
    setShownMilestone(null);
  };
  /** The sheet in the overlay: there while it is up, and while it leaves. */
  const [milestoneUp, setMilestoneUp] = useState(false);
  useEffect(() => {
    if (milestoneOpen) {
      setMilestoneUp(true);
      return undefined;
    }
    const timer = setTimeout(() => setMilestoneUp(false), MILESTONE_GONE_MS);
    return () => clearTimeout(timer);
  }, [milestoneOpen]);
  /** Apple's review prompt waits while a milestone is owed or on screen: the
   * third open and a streak of seven both ask for it, and either would land
   * on the sheet. */
  const milestoneOwed = (milestone != null && !milestoneSeen(milestone)) || milestoneUp;
  useEffect(() => (milestoneOwed ? holdReview() : undefined), [milestoneOwed]);
  /** A counter, not a flag: remounting on a new value is what re-runs every
   * piece's flight, and a boolean could only ever fire the burst once. */
  const [burst, setBurst] = useState(0);
  const [burstFrom, setBurstFrom] = useState<ConfettiOrigin | null>(null);
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
  /** What Walkito says: the legs right now, against yesterday's morning. */
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
      {/* Outside the scroller on purpose. Inside, it would scroll away with
          the content and read as a banner rather than as light falling on the
          screen. It drifts here — Home is a screen people sit on, and the slow
          movement is what keeps a still background from looking like a
          screenshot. */}
      <Glow animated paused={!focused} />
      <Animated.ScrollView
        ref={scroll}
        onScroll={onScroll}
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
            onStreakPress={() => setStreakOpen(true)}
            streakGlyph={<FluentIcon name="fire" size={22} />}
            // Banked freezes, beside the count, only while there is one.
            streakAccessory={
              streak.freezes > 0 ? (
                <View style={styles.freezes}>
                  <HugeiconsIcon icon={SnowIcon} size={16} color={accents[scheme].blue.fill} strokeWidth={2.2} />
                  <Text style={[styles.freezeCount, { color: palette[scheme].foreground }]}>{streak.freezes}</Text>
                </View>
              ) : undefined
            }
            streakAccessoryLabel={
              streak.freezes > 0 ? t('streakSheet.freezes', { count: streak.freezes }) : undefined
            }
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

          {/* Under the week, the morning's readiness with Walkito, who says
            how the legs are this morning in his speech bubble. Masked: it is made of pain,
            sleep, steps and Apple Health numbers. */}
          {/* Walkito and his bubble are the tour's first stop: how the
              feet are this morning, said by him. */}
          <IntroReveal order={2} style={styles.gauge} {...REPLAY_MASK}>
            <ReadinessGauge
              score={readiness}
              parts={readinessPieces}
              leg={leg}
              accessories={accessories}
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
              <PainCheck
                onLogged={(painless, origin) => {
                  // Only for a day with no pain in it. Confetti for logging a
                  // seven would be the app celebrating at someone who just told
                  // it they are hurting. Thrown from the mascot, on his hop.
                  if (!painless) return;
                  setBurstFrom(origin ?? null);
                  setBurst((n) => n + 1);
                }}
                covered={milestoneOpen || streakOpen || dayOne != null}
                onSheet={setCheckSheet}
                heights={{ views: checkInViews, row: checkInRow }}
              />
            }
            second={
              <TodayTasks
                covered={milestoneOpen || streakOpen || checkSheet || dayOne != null}
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

      {/* Over everything, outside the scroller, and untouchable. */}
      {burst > 0 && <Confetti key={burst} origins={burstFrom != null ? [burstFrom] : undefined} delay={120} />}

      {/* Over the tab bar and the dock, which sit above Home's own views and
          covered its button: drawn in the tabs' overlay, still in the tree,
          so every sheet still presents over it. */}
      {milestoneUp && sheetMilestone != null && (
        <OverlayPortal>
          <CelebrationSheet
            visible={milestoneOpen}
            title={t('streak.title', { count: sheetMilestone })}
            headlineColor={accents[scheme].orange.fill}
            blurb={sheetMilestone === BIG_MILESTONE ? t('streak.milestoneBigBlurb') : t('streak.milestoneBlurb')}
            confetti={sheetMilestone === BIG_MILESTONE}
            emblem={sheetMilestone >= BIG_MILESTONE}
            // Stands where the emblem was (the sheet drops the badge for him):
            // thumbs up for three and seven, the jump for ten, the trophy for a
            // month and a hundred. Paused while the sheet leaves.
            mascot={<MilestoneMascot days={sheetMilestone} paused={!milestoneOpen} />}
            onClose={closeMilestone}>
            {/* The accessory this milestone earns, when it earns one: what he
                will wear beside the gauge from now on. */}
            {milestoneAccessory != null && (
              <MilestoneAccessory id={milestoneAccessory} label={t(ACCESSORY_KEYS[milestoneAccessory])} />
            )}
          </CelebrationSheet>
        </OverlayPortal>
      )}

      {/* The first run, after the purchase or the skip: the "Day 1" card and
          then the tour, over Home while it is in front and nothing else is
          over it. The card's session plays in Home's own sheet below. */}
      <HomeTour
        visible={focused && revealed && !planOver && !milestoneUp && !streakOpen && !checkSheet}
        sessionOpen={dayOne != null}
        onStartDayOne={setDayOne}
      />
      <DayOneSession run={dayOne} onClose={() => setDayOne(null)} />

      <StreakSheet
        visible={streakOpen}
        onClose={() => setStreakOpen(false)}
        current={streak.current}
        total={streak.total}
        longest={streak.longest}
        week={streak.strip}
        rest={streak.rest}
        levels={streak.levels}
        freezes={streak.freezes}
        freezeSpentThisWeek={streak.freezeSpentThisWeek}
      />
    </View>
  );
}

/** The accessory a milestone earns, on its sheet: the drawing and one line. */
function MilestoneAccessory({ id, label }: { id: AccessoryId; label: string }) {
  const scheme = useColorScheme();
  return (
    <View style={[styles.accessoryRow, { backgroundColor: palette[scheme].background }]} accessible accessibilityRole="text">
      <FluentIcon name={ACCESSORY_ART[id]} size={28} />
      <Text style={[styles.accessoryText, { color: meterColors[scheme].ink }]}>{label}</Text>
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
  accessoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 18,
    borderCurve: 'continuous',
    marginTop: 12,
  },
  accessoryText: { ...fonts.semibold(15, -0.1), flex: 1 },
  gauge: {
    marginTop: 20,
  },
  check: {
    marginTop: 40,
  },
});
