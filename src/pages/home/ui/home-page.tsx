import { FireIcon } from 'phosphor-react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  TODAY_INDEX,
  currentDay,
  painOn,
  toDateKey,
  useStreak,
  weekAttendance,
} from '@/entities/program';
import { useHealthSignals } from '@/entities/health';
import { firstName, useProfileName } from '@/entities/profile';
import { accents } from '@/shared/config';
import { useLanguage } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { useProgram } from '@/shared/lib/program';
import { useDockHeight } from '@/shared/ui/action-dock';
import { Glow } from '@/shared/ui/glow';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { IntroReveal } from '@/shared/ui/splash';

import { briefTokens } from '../model/brief';
import { GiftSheet } from '@/shared/ui/gift-sheet';
import { StreakSheet } from '@/shared/ui/streak-sheet';
import { StreakWeek } from '@/shared/ui/streak-week';
import { Confetti } from '@/shared/ui/confetti';
import { DailyStack } from './daily-stack';
import { PainCheck } from './pain-check';
import { TodayTasks } from './today-tasks';
import { DailyBrief } from '@/shared/ui/daily-brief';


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
export function HomePage() {
  const router = useRouter();
  const onScroll = useMinimizeOnScroll();
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const dockHeight = useDockHeight();
  const program = useProgram();
  /** The reward sheet, opened from the capsule in the header. */
  const [giftOpen, setGiftOpen] = useState(false);
  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
  const streak = useStreak();
  /** Whether today's answer is in. Once it is, the check-in gives up the top of
   * the screen to the list of work it was asked about. */
  /**
   * Whether today's answer is in, read from the log rather than remembered.
   *
   * It was `useState(false)`, so leaving Home and coming back put the question
   * in front of somebody who had already answered it — and the sentence above,
   * which reads `painOn(currentDay())` two lines down, disagreed with the cards
   * underneath it on the same screen.
   */
  const checkedIn = painOn(currentDay()) != null;
  /** A counter, not a flag: remounting on a new value is what re-runs every
   * piece's flight, and a boolean could only ever fire the burst once. */
  const [burst, setBurst] = useState(0);
  const name = useProfileName();
  const signals = useHealthSignals();
  /** The cache outlives midnight. Until the first refresh of the day lands,
   * its "today" figures are yesterday's, and quoting them as today's would be
   * wrong by a whole day of walking. */
  const signalsAreToday = signals.asOf === toDateKey(new Date());
  /** Subscribed to, not read once: the sentence is rebuilt in the same commit
   * as the switch is flipped, rather than on next launch. */
  const language = useLanguage();

  return (
    <View style={styles.screen}>
      {/* Outside the scroller on purpose. Inside, it would scroll away with
          the content and read as a banner rather than as light falling on the
          screen. It drifts here — Home is a screen people sit on, and the slow
          movement is what keeps a still background from looking like a
          screenshot. */}
      <Glow animated />
      <Animated.ScrollView
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
            streakGlyph={<FireIcon size={22} color={accents[scheme].orange.fill} weight="fill" />}
            gift
            onGift={() => setGiftOpen(true)}
            swapProgress={program?.progress}
            centre={todayLines()}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* The week, right under the header: it is what tells the user which
            day this screen is about now that the date has gone. */}
        <IntroReveal order={1} style={styles.week}>
          <StreakWeek done={stripWeek(Date.now())} />
        </IntroReveal>

        {/* Under the week: one says which day, the other says how that day is
            going. */}
        <IntroReveal order={2} style={styles.brief}>
          <DailyBrief
            tokens={briefTokens(
              {
                name: firstName(name),
                cursor: TODAY_INDEX,
                // Null until they have actually answered, and never zero. The
                // ladder reads null as "not asked yet" and falls through to the
                // day's own state; a zero would be the app deciding on their
                // behalf that nothing hurts this morning. Read on every render
                // rather than held — the check-in writes the log, and this
                // component is already re-rendered by `useStreak` when it does.
                todayPain: painOn(currentDay()),
                doneToday: checkedIn,
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
              },
              language,
            )}
          />
        </IntroReveal>

        {/* The check-in and the list, in that order until the check-in is
            answered. It asks how the body took yesterday, and that answer is
            what changes today — so until it is given it outranks the work, and
            the moment it is given it stops outranking anything. */}
        <IntroReveal order={3} fade={false} style={styles.check}>
          <DailyStack
            swapped={checkedIn}
            first={
              <PainCheck
                onLogged={(painless) => {
                  // Only for a day with no pain in it. Confetti for logging a
                  // seven would be the app celebrating at someone who just told
                  // it they are hurting.
                  if (painless) setBurst((n) => n + 1);
                }}
              />
            }
            second={<TodayTasks />}
          />
        </IntroReveal>
      </Animated.ScrollView>

      {/* Over everything, outside the scroller, and untouchable. */}
      {burst > 0 && <Confetti key={burst} />}

      <GiftSheet visible={giftOpen} onClose={() => setGiftOpen(false)} />

      <StreakSheet
        visible={streakOpen}
        onClose={() => setStreakOpen(false)}
        current={streak.current}
        total={streak.total}
        week={streak.strip}
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
