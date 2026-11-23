import UserIcon from '@hugeicons/core-free-icons/UserIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { colors, fonts, space, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { NavGlass } from '@/shared/ui/glass';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { IntroReveal } from '@/shared/ui/splash';
import { TITLE_SCALE } from '@/widgets/session-player';

import { doneDaysIn, monthOf } from '../model/month-days';
import { useDevOnFeetWeek } from '../model/on-feet-dev';
import {
  RANGES,
  RANGE_ORDER,
  countReadings,
  painBars,
  painCounts,
  painStart,
  painSummary,
  strengthTrends,
} from '../model/progress-data';
import { useSeedDemoTrigger } from '../model/seed-demo';
import { weekRecap } from '../model/week-recap';
import { AnkleCard } from './ankle-card';
import { GaitCard, PatternsCard, ShoesCard, hasGaitData } from './body-cards';
import { FootCheckCards } from './foot-check-cards';
import { GoalsCard } from './goals-card';
import { MonthCard } from './month-card';
import { MonthSheet } from './month-sheet';
import { MorningsCard } from './mornings-card';
import { OnFeetCard } from './on-feet-card';
import { SessionsCard } from './sessions-card';

/** How far back "mornings logged so far" looks, for the empty chart. */
const HISTORY_DAYS = 730;

/**
 * Progress as BitePal's home cards (#99, #98, #102): a big "Progress" over a
 * stack of white cards on the grey, each a grey label, a big number, a ring
 * or a round action and thin bars. Sessions first, then the days done this
 * month (which opens the month as BitePal's streak sheet, #108), mornings,
 * what the days say and the time on foot, the Foot Check tests, the ankles,
 * the goals, and the walk and the shoes.
 */
export function ProgressPage() {
  const t = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const clearance = useTabBarClearance();
  usePlanVersion();
  useLogsVersion();
  useSeedDemoTrigger();
  const devOnFeet = useDevOnFeetWeek();
  const streak = useStreak();

  const [rangeIndex, setRangeIndex] = useState(0);
  const [monthOpen, setMonthOpen] = useState(false);

  const now = Date.now();
  const today = todayKey(now);
  const range = RANGE_ORDER[rangeIndex];
  const { days } = RANGES[range];

  const twice = painSeries(today, days * 2);
  const summary = painSummary(twice, days);
  const bars = painBars(twice.slice(-days), today, range);
  const counts = painCounts(twice.slice(-days), currentDay(now));
  const total = countReadings(painSeries(today, Math.max(1, Math.min(HISTORY_DAYS, currentDay(now)))));
  const start = painStart(painSeries(addDays(programState().startDate, 6), 7));

  const results = retestResults();
  const trends = strengthTrends(results);
  const nextTest = results.length > 0 ? testDue() : null;
  const recap = weekRecap(weekAttendance(now, 1, now));
  const [year, month] = monthOf(today);
  const monthCount = doneDaysIn(year, month, today).size;

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingTop: (Platform.OS === 'ios' ? 0 : insets.top) + 12, paddingBottom: clearance + 40 }]}>
        <IntroReveal order={0} fade={false}>
          <View style={styles.header}>
            <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_SCALE}>
              {t('tabs.progress')}
            </Text>
            <NavGlass interactive style={styles.avatar}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('home.today.profile')}
                onPress={() => {
                  void Haptics.selectionAsync();
                  router.push('/profile');
                }}
                style={({ pressed }) => [styles.avatarHit, pressed && styles.pressed]}>
                <HugeiconsIcon icon={UserIcon} size={24} color={colors.text} strokeWidth={1.8} />
              </Pressable>
            </NavGlass>
          </View>
        </IntroReveal>

        <IntroReveal order={1} style={styles.stack}>
          <SessionsCard total={streak.total} recap={recap} />
          <MonthCard count={monthCount} longest={streak.longest} onOpen={() => setMonthOpen(true)} />
        </IntroReveal>

        <IntroReveal order={2} style={styles.stack}>
          <MorningsCard
            range={range}
            onNextRange={() => setRangeIndex((index) => (index + 1) % RANGE_ORDER.length)}
            bars={bars}
            summary={summary}
            start={start}
            total={total}
            counts={counts}
          />
          <PatternsCard />
          {(healthAvailable() || (__DEV__ && devOnFeet != null)) && <OnFeetCard />}
        </IntroReveal>

        <IntroReveal order={3} style={styles.stack}>
          <Text style={styles.section} accessibilityRole="header" maxFontSizeMultiplier={TITLE_SCALE}>
            {t('footCheck.metaOne')}
          </Text>
          <FootCheckCards trends={trends} nextTest={nextTest} today={today} />
          <AnkleCard nextTestAt={nextTest != null ? fromDateKey(nextTest).getTime() : null} />
          <GoalsCard goals={planGoals()} />
        </IntroReveal>

        <IntroReveal order={4} style={styles.stack}>
          {hasGaitData() && <GaitCard />}
          <ShoesCard />
        </IntroReveal>
      </ScrollView>

      <MonthSheet
        visible={monthOpen}
        current={streak.current}
        longest={streak.longest}
        onClose={() => setMonthOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  content: { paddingHorizontal: space.screen - 4, gap: 12 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 4, marginBottom: 4 },
  title: { ...fonts.heavy(34, -0.8), color: colors.text, flex: 1 },
  avatar: { width: target.min, height: target.min, borderRadius: target.min / 2, overflow: 'hidden' },
  avatarHit: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  pressed: { opacity: 0.7 },
  stack: { gap: 12 },
  section: { ...fonts.heavy(24, -0.4), color: colors.text, marginTop: 12, paddingHorizontal: 4 },
});
