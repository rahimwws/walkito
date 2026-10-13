import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  addDays,
  currentDay,
  goals as planGoals,
  painSeries,
  programState,
  retestResults,
  testDue,
  todayKey,
  useLogsVersion,
  usePlanVersion,
  useStreak,
  weekAttendance,
} from '@/entities/program';
import { StickersCard } from '@/features/stickers';
import { useT, type Key } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useDockHeight } from '@/shared/ui/action-dock';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { IntroReveal } from '@/shared/ui/splash';
import { StreakSheet } from '@/shared/ui/streak-sheet';

import {
  CHART_MIN_READINGS,
  RANGES,
  RANGE_ORDER,
  countReadings,
  painBars,
  painStart,
  painSummary,
  strengthTrends,
  type RangeKey,
} from '../model/progress-data';
import { useSeedDemoTrigger } from '../model/seed-demo';
import { weekRecap } from '../model/week-recap';
import { ConsistencyCard } from './consistency-card';
import { GoalsCard } from './goals-card';
import { PainCard } from './pain-card';
import { StrengthCard } from './strength-card';
import { WeekRecapCard } from './week-recap-card';

const SIDE_PAD = 20;

/** How far back "mornings logged so far" looks, for the empty chart. */
const HISTORY_DAYS = 730;

const RANGE_LABEL = {
  week: 'progress.range7Days',
  month: 'progress.rangeMonth',
  quarter: 'progress.range3Months',
} as const satisfies Record<RangeKey, Key>;

/** Four Monday-first weeks, oldest first, this one last. Noon, so a DST
 * change between two Mondays cannot land a step in the wrong week. */
function lastFourWeeks(now: number) {
  const d = new Date(now);
  return [3, 2, 1, 0].map((back) =>
    weekAttendance(new Date(d.getFullYear(), d.getMonth(), d.getDate() - back * 7, 12).getTime(), 1, now),
  );
}

/**
 * The screen, in the order it is read: this week, how mornings are going,
 * what the tests measured, how close each goal is, turning up, and the
 * stickers.
 */
export function ProgressPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const onScroll = useMinimizeOnScroll();
  const dockHeight = useDockHeight();
  const program = useProgram();
  usePlanVersion();
  useLogsVersion();
  useSeedDemoTrigger();
  const t = useT();

  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
  /** The sticker album's page sheet is up over the page. */
  const [albumOpen, setAlbumOpen] = useState(false);
  /** A sheet covers the page: its mascots hold still under it. */
  const covered = streakOpen || albumOpen;
  const [rangeIndex, setRangeIndex] = useState(0);
  const streak = useStreak();

  const now = Date.now();
  const today = todayKey(now);
  const range = RANGE_ORDER[rangeIndex];
  const { days } = RANGES[range];

  // This range and the one before it, back to back, for the delta.
  const twice = painSeries(today, days * 2);
  const summary = painSummary(twice, days);
  const bars = painBars(twice.slice(-days), today, range);
  const total = countReadings(painSeries(today, Math.max(1, Math.min(HISTORY_DAYS, currentDay(now)))));
  const start = painStart(painSeries(addDays(programState().startDate, 6), 7));

  const results = retestResults();
  const trends = strengthTrends(results);
  /**
   * One character on screen at a time. While the pain card waits for its
   * third morning its own mascot peeks up out of it; past that, before the
   * first test, the strength card's leans in from its edge; only once neither
   * is there does this week's card give its thumbs up.
   */
  const painWaiting = total < CHART_MIN_READINGS;
  const tested = trends.some((trend) => trend.latest != null);
  const nextTest = results.length > 0 ? testDue() : null;
  const goalList = planGoals();
  const weeks = lastFourWeeks(now);
  // This Monday-to-Sunday, the last of the four the grid draws.
  const recap = weekRecap(weeks[weeks.length - 1] ?? []);

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.root}
        contentContainerStyle={{
          // Home's figure, so the shared header sits at the same height on
          // both tabs and switching between them does not nudge it.
          paddingTop: insets.top + 24,
          paddingHorizontal: SIDE_PAD,
          // Clears the docked action, the tab pill over it, and some air.
          paddingBottom: dockHeight + 110,
        }}>
        <IntroReveal order={0} fade={false}>
          <HeaderActions
            spread
            streak={streak.current}
            onStreakPress={() => setStreakOpen(true)}
            streakGlyph={<FluentIcon name="fire" size={22} />}
            swapProgress={program?.progress}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* This week first, above the range: the range is the pain chart's,
            and sits straight on top of the card it drives. The thumbs up
            stands down while the pain card's or the strength card's own
            mascot is waiting under it: one character on screen at a time. */}
        <IntroReveal order={1} style={styles.first}>
          <WeekRecapCard recap={recap} mascot={!painWaiting && tested} paused={covered} />
        </IntroReveal>

        {/* The range drives the pain chart, the one card whose span is a
            choice. Tests and goals are read across everything on file. */}
        <IntroReveal order={2} style={styles.gap}>
          <SegmentedControl
            segments={RANGE_ORDER.map((key) => t(RANGE_LABEL[key]))}
            selectedIndex={rangeIndex}
            onChange={setRangeIndex}
          />
        </IntroReveal>

        <IntroReveal order={3} style={styles.gap}>
          <PainCard range={range} bars={bars} summary={summary} start={start} total={total} paused={covered} />
        </IntroReveal>

        <IntroReveal order={4} style={styles.next}>
          <StrengthCard trends={trends} nextTest={nextTest} today={today} mascot={!painWaiting} paused={covered} />
        </IntroReveal>

        <IntroReveal order={5} style={styles.next}>
          <GoalsCard goals={goalList} />
        </IntroReveal>

        <IntroReveal order={6} style={styles.next}>
          <ConsistencyCard weeks={weeks} current={streak.current} longest={streak.longest} />
        </IntroReveal>

        <IntroReveal order={7} style={styles.next}>
          <StickersCard onOpenChange={setAlbumOpen} />
        </IntroReveal>

        <StreakSheet
          visible={streakOpen}
          onClose={() => setStreakOpen(false)}
          current={streak.current}
          total={streak.total}
          week={streak.strip}
          longest={streak.longest}
          rest={weekAttendance(now, 0).map((day) => day.rest)}
        />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  root: { flex: 1 },
  first: { marginTop: 22 },
  gap: { marginTop: 14 },
  next: { marginTop: 14 },
});
