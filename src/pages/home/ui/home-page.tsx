import { useIsFocused, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { runOnJS, useAnimatedReaction, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BIG_MILESTONE,
  TODAY_INDEX,
  currentDay,
  markMilestoneSeen,
  milestoneFor,
  milestoneSeen,
  painOn,
  planSessionDone,
  toDateKey,
  todayKey,
  useStreak,
  weekAttendance,
} from '@/entities/program';

import { weekFacts } from '../model/week-facts';
import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { useHealthSignals } from '@/entities/health';
import { firstName, useIntake, useProfileName } from '@/entities/profile';
import { accents } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useDockHeight } from '@/shared/ui/action-dock';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Glow } from '@/shared/ui/glow';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { IntroReveal, useSplashRevealed } from '@/shared/ui/splash';

import { briefTokens } from '../model/brief';
import { StreakSheet } from '@/shared/ui/streak-sheet';
import { CelebrationSheet } from '@/shared/ui/celebration-sheet';
import { holdReview } from '@/shared/lib/review';
import { StreakWeek } from '@/shared/ui/streak-week';
import { Confetti, type ConfettiOrigin } from '@/shared/ui/confetti';
import { OverlayPortal } from '@/shared/ui/overlay-host';
import { DailyStack } from './daily-stack';
import { DayOneSession } from './day-one-session';
import { GlideHeight } from './glide-height';
import { MilestoneMascot } from './milestone-mascot';
import { CHECK_IN_GAP, PainCheck } from './pain-check';
import { TodayTasks } from './today-tasks';
import { LibraryRow } from './library-row';
import { PassEndingCard } from './pass-ending-card';
import { DailyBrief } from '@/shared/ui/daily-brief';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

/**
 * Attendance re-ordered for `StreakWeek`, which counts from Sunday.
 *
 * The model hands back a Monday-first week, because that is how the sheet and
 * the rest of the app read one. Rotating here rather than teaching the model
 * two conventions keeps the reordering visible at the one place it happens —
 * an off-by-one in a week strip is the kind of bug that looks like correct
 * output right up until the weekend.
 */
/**
 * The week the strip below the header draws.
 *
 * Asked for Sunday-first rather than rotated out of the Monday-first one the
 * model keeps. A rotation looks right and is not: the Sunday sitting at the end
 * of a Monday-first week is the Sunday still to come, so moving it to the front
 * put a future day in the slot that belongs to the Sunday just gone — which
 * then rendered as a day the user had missed.
 */
function stripWeek(now: number): boolean[] {
  return weekAttendance(now, 0).map((day) => day.attended);
}

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
  const name = useProfileName();
  const signals = useHealthSignals();
  /** What they told us in onboarding — the goal and sport the brief can speak
   * to. Null for anyone who installed before the answers were kept. */
  const intake = useIntake();
  /** The cache outlives midnight. Until the first refresh of the day lands,
   * its "today" figures are yesterday's, and quoting them as today's would be
   * wrong by a whole day of walking. */
  const signalsAreToday = signals.asOf === toDateKey(new Date());
  /** Subscribed to, not read once: the sentence is rebuilt in the same commit
   * as the switch is flipped, rather than on next launch. */
  const language = useLanguage();
  /** What this week's plan has to say to the morning line. */
  const planHealth = useHealthSignals();
  const plan = weekFacts(language, {
    stepsYesterday: planHealth.stepsYesterday,
    steps28Avg: planHealth.stepsBaseline,
    sleepHours: planHealth.sleepLastNightMin == null ? null : planHealth.sleepLastNightMin / 60,
  });

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
            swapProgress={program?.progress}
            centre={todayLines()}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* The week, right under the header: it is what tells the user which
            day this screen is about now that the date has gone. */}
        {/* The week and the morning line are the tour's first stop: what
            Home says about the feet. One view around both, for it to light. */}
        <View ref={overviewAnchor} collapsable={false}>
          <IntroReveal order={1} style={styles.week}>
            <StreakWeek done={stripWeek(Date.now())} />
          </IntroReveal>

          {/* Under the week: one says which day, the other says how that day is
            going. */}
          {/* Masked in session recordings: it says the user's name, their pain
            and their Apple Health numbers. */}
          <IntroReveal order={2} style={styles.brief} {...REPLAY_MASK}>
            {/* Its sentence can change with the answer below it (two lines become
                three): the change of height eases rather than jumping the page. */}
            <GlideHeight>
            <DailyBrief
              tokens={briefTokens(
                {
                  name: firstName(name),
                  // Read at render: Home re-renders on focus and on every log
                  // write, which is often enough for the greeting to keep up.
                  hour: new Date().getHours(),
                  cursor: TODAY_INDEX,
                  // Null until they have actually answered, and never zero. The
                  // ladder reads null as "not asked yet" and falls through to the
                  // day's own state; a zero would be the app deciding on their
                  // behalf that nothing hurts this morning. Read on every render
                  // rather than held — the check-in writes the log, and this
                  // component is already re-rendered by `useStreak` when it does.
                  todayPain: painOn(currentDay()),
                  // Today's session, not today's check-in. This was the check-in,
                  // so answering it switched the line to "done for today" before
                  // any work was done - and, once a test day's line learned to
                  // stop asking for tests that are done, it would have stopped
                  // asking the moment the question below was answered. The same
                  // answer Plan and the list underneath read.
                  doneToday: planSessionDone(todayKey()),
                  // The same figure the header shows. Two hand-written sevens is
                  // what this replaces: a streak that disagreed with itself
                  // between the capsule and the sentence directly under it.
                  streak: streak.current,
                  // Read from the local cache, never from HealthKit. The pipeline
                  // fills that cache in the background; a morning line that
                  // awaited a Health query would leave the screen blank on every
                  // cold start, and would be blank forever for the users who
                  // granted nothing.
                  health: signals,
                  // Both learned from the person's own history rather than set:
                  // the hours are derived from when their steps actually
                  // happened, and the limit is the hour past which their own next
                  // mornings got worse. Null until there is enough history to
                  // say, which is the honest answer and the one that keeps the
                  // line silent.
                  hoursOnFeet: signalsAreToday ? signals.hoursOnFeetToday : null,
                  // Only past the mark does this say anything, and then it asks
                  // how the heel is — the check-in card sits right below.
                  stepsToday: signalsAreToday ? signals.stepsToday : null,
                  onFeetThreshold: signals.onFeetThreshold,
                  goal: intake?.goal ?? null,
                  sport: intake?.sport ?? null,
                  ...plan,
                },
                language,
              )}
            />
            </GlideHeight>
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
            onClose={closeMilestone}
          />
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
        rest={weekAttendance(Date.now(), 0).map((day) => day.rest)}
      />
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
  /** Close under the week. With no card around the sentence the only thing
   * separating it from its neighbours is space — but it is the first thing the
   * screen has to say, and pushed down it started reading as a footnote to the
   * strip above rather than as the opening line. */
  brief: {
    marginTop: 18,
  },
  check: {
    marginTop: 40,
  },
});
