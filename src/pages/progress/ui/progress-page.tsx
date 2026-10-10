import { useRouter } from 'expo-router';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
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
import { accents } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { useDockHeight } from '@/shared/ui/action-dock';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { IntroReveal } from '@/shared/ui/splash';
import { StreakSheet } from '@/shared/ui/streak-sheet';

import {
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
import { ConsistencyCard } from './consistency-card';
import { GoalsCard } from './goals-card';
import { PainCard } from './pain-card';
import { StrengthCard } from './strength-card';

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
 * The screen, in the order it is read: how mornings are going, what the
 * tests measured, how close each goal is, and turning up.
 */
export function ProgressPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const onScroll = useMinimizeOnScroll();
  const dockHeight = useDockHeight();
  const scheme = useColorScheme();
  const program = useProgram();
  usePlanVersion();
  useLogsVersion();
  useSeedDemoTrigger();
  const t = useT();

  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
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
  const nextTest = results.length > 0 ? testDue() : null;
  const goalList = planGoals();
  const weeks = lastFourWeeks(now);

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
            streakGlyph={<FireIcon size={22} color={accents[scheme].orange.fill} weight="fill" />}
            swapProgress={program?.progress}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        {/* The range drives the pain chart, the one card whose span is a
            choice. Tests and goals are read across everything on file. */}
        <IntroReveal order={1} style={styles.first}>
          <SegmentedControl
            segments={RANGE_ORDER.map((key) => t(RANGE_LABEL[key]))}
            selectedIndex={rangeIndex}
            onChange={setRangeIndex}
          />
        </IntroReveal>

        <IntroReveal order={2} style={styles.gap}>
          <PainCard range={range} bars={bars} summary={summary} start={start} total={total} />
        </IntroReveal>

        <IntroReveal order={3} style={styles.next}>
          <StrengthCard trends={trends} nextTest={nextTest} today={today} />
        </IntroReveal>

        <IntroReveal order={4} style={styles.next}>
          <GoalsCard goals={goalList} />
        </IntroReveal>

        <IntroReveal order={5} style={styles.next}>
          <ConsistencyCard weeks={weeks} current={streak.current} longest={streak.longest} />
        </IntroReveal>

        <StreakSheet
          visible={streakOpen}
          onClose={() => setStreakOpen(false)}
          current={streak.current}
          total={streak.total}
          week={streak.strip}
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
