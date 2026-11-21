import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { healthAvailable } from '@/entities/health';
import {
  addDays,
  currentDay,
  fromDateKey,
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
import { useT, type Key } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { HeaderActions } from '@/shared/ui/header-actions';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { IntroReveal } from '@/shared/ui/splash';

import {
  RANGES,
  RANGE_ORDER,
  countReadings,
  painBars,
  painCounts,
  painStart,
  painSummary,
  strengthTrends,
  type RangeKey,
} from '../model/progress-data';
import { useDevOnFeetWeek } from '../model/on-feet-dev';
import { useSeedDemoTrigger } from '../model/seed-demo';
import { weekRecap } from '../model/week-recap';
import { GaitCard, PatternsCard, ShoesCard, hasGaitData } from './body-cards';
import { AnkleCard } from './ankle-card';
import { ConsistencyCard } from './consistency-card';
import { GoalsCard } from './goals-card';
import { OnFeetWeekCard } from './on-feet-week-card';
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
 * what the tests measured, how close each goal is, and turning up.
 */
export function ProgressPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const dockHeight = useTabBarClearance();
  const program = useProgram();
  usePlanVersion();
  useLogsVersion();
  useSeedDemoTrigger();
  const devOnFeet = useDevOnFeetWeek();
  const t = useT();

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
  const counts = painCounts(twice.slice(-days), currentDay(now));
  const total = countReadings(painSeries(today, Math.max(1, Math.min(HISTORY_DAYS, currentDay(now)))));
  const start = painStart(painSeries(addDays(programState().startDate, 6), 7));

  const results = retestResults();
  const trends = strengthTrends(results);
  const nextTest = results.length > 0 ? testDue() : null;
  const goalList = planGoals();
  const weeks = lastFourWeeks(now);
  // This Monday-to-Sunday, the last of the four the grid draws.
  const recap = weekRecap(weeks[weeks.length - 1] ?? []);

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      <Animated.ScrollView
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
            streakGlyph={<FluentIcon name="fire" size={22} />}
            swapProgress={program?.progress}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* This week first, above the range: the range is the pain chart's,
            and sits straight on top of the card it drives. */}
        <IntroReveal order={1} style={styles.first}>
          <WeekRecapCard recap={recap} />
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
          <PainCard
            range={range}
            bars={bars}
            summary={summary}
            start={start}
            total={total}
            counts={counts}
          />
        </IntroReveal>

        {/* What their own days say about their mornings, under the chart
            of those mornings. */}
        <IntroReveal order={3} style={styles.next}>
          <PatternsCard />
        </IntroReveal>

        {/* The days themselves, under what they say about the mornings: the
            last seven on foot. Not where there is no Health to read. */}
        {(healthAvailable() || (__DEV__ && devOnFeet != null)) && (
          <IntroReveal order={4} style={styles.next}>
            <OnFeetWeekCard />
          </IntroReveal>
        )}

        <IntroReveal order={4} style={styles.next}>
          <StrengthCard trends={trends} nextTest={nextTest} today={today} />
        </IntroReveal>

        {/* The ankle bend the phone measures, beside the tests it is
            measured with. */}
        <IntroReveal order={4} style={styles.next}>
          <AnkleCard nextTestAt={nextTest != null ? fromDateKey(nextTest).getTime() : null} />
        </IntroReveal>

        <IntroReveal order={5} style={styles.next}>
          <GoalsCard goals={goalList} />
        </IntroReveal>

        <IntroReveal order={6} style={styles.next}>
          <ConsistencyCard weeks={weeks} current={streak.current} longest={streak.longest} />
        </IntroReveal>

        {hasGaitData() && (
          <IntroReveal order={6} style={styles.next}>
            <GaitCard />
          </IntroReveal>
        )}

        <IntroReveal order={6} style={styles.next}>
          <ShoesCard />
        </IntroReveal>
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
