import { useIsFocused, useRouter } from 'expo-router';
import { useRef, useState, type ComponentRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useHealthSignals } from '@/entities/health';
import { toDateKey, todayKey, useNextSession } from '@/entities/program';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { FollowSheet, useFollowOffer } from '@/features/follow';
import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { space } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { requestProgram, usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { Button } from '@/shared/ui/button';
import { StartButton } from '@/shared/ui/glass';
import { useSplashRevealed } from '@/shared/ui/splash';

import { planKind } from '../model/plan-kind';
import { useTodayWork } from '../model/today-work';
import { useOpenRoutine } from '../model/use-open-routine';
import { DayOneSession } from './day-one-session';
import { MorningCheck } from './morning-check';
import { PassEndingCard } from './pass-ending-card';
import { QuickRow } from './quick-row';
import { FirstStepCard, PlanKindCard } from './side-cards';
import { TodayCard } from './today-card';
import { TopBar } from './top-bar';
import { WeekStrip } from './week-strip';

/** The floating Start's own height, and the air above and under it. */
const START_ROOM = 56 + 24;

/**
 * Today (spec §7.1; Runna #6/#8, NRC #1, NTC #2): the week, today's session
 * as one card with one Start, then at most three small cards and the quick
 * sessions.
 *
 * Start opens today's session where it always ran, on the Plan tab: the same
 * request an email link makes (`requestProgram`), so the player, the done
 * screen and the records are the Plan's own.
 */
export function HomePage() {
  const t = useT();
  const router = useRouter();
  const focused = useIsFocused();
  const insets = useSafeAreaInsets();
  const clearance = useTabBarClearance();
  const program = useProgram();
  const planOver = usePlanOver();
  const revealed = useSplashRevealed();
  const scroll = useRef<ComponentRef<typeof ScrollView>>(null);
  useSpotlightScroller((y) => scroll.current?.scrollTo({ y, animated: true }));
  const overviewAnchor = useSpotlightAnchor('home.overview');
  const checkAnchor = useSpotlightAnchor('home.pain');
  const startAnchor = useSpotlightAnchor('dock.start');

  const work = useTodayWork();
  const next = useNextSession();
  const health = useHealthSignals();
  const openRoutine = useOpenRoutine();
  const kind = planKind();
  const runDate =
    kind === 'runner' && health.lastRunEndedAt != null ? toDateKey(new Date(health.lastRunEndedAt)) : null;
  const ranToday = runDate === todayKey();

  /** The day-one session the "Day 1" card started, playing in its sheet. */
  const [dayOne, setDayOne] = useState<DayOneRun | null>(null);
  const tourState = useHomeTourState();
  /** Skipped the paywall and not bought since: looking around, Home not
   * theirs yet, so nothing of a customer's rises on it. */
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  const walled = skipped && !entitled && !lapsed;
  const homeClear = focused && revealed && !planOver && !walled && tourState !== 'armed' && dayOne == null;
  const follow = useFollowOffer(homeClear && !lapsed);

  const extra = work.done || work.type === 'rest';
  const start = () => {
    requestProgram({ kind: work.type === 'test' ? 'test' : 'today' });
    program?.open();
  };
  const startLabel = extra
    ? t('home.today.extra', { minutes: t('quick.minutes', { count: 2 }) })
    : work.type === 'test'
      ? t('home.today.startTests')
      : t('home.today.start', { minutes: t('quick.minutes', { count: work.minutes }) });
  const onStart = extra ? () => openRoutine(kind === 'runner' ? 'pre_run' : 'at_work') : start;

  return (
    <View style={styles.screen}>
      <ScrollView
        ref={scroll}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 8,
          paddingHorizontal: space.screen,
          paddingBottom: clearance + START_ROOM + space.gap,
        }}>
        <TopBar />

        <View style={styles.week}>
          <WeekStrip runDate={runDate} />
        </View>

        <View ref={overviewAnchor} collapsable={false} style={styles.hero}>
          <TodayCard
            work={work}
            kind={kind}
            ranToday={ranToday}
            next={next}
            active={focused}
            onPress={() => program?.open()}
          />
        </View>
        <Button
          variant="ghost"
          size="md"
          align="start"
          label={t('home.why.title')}
          onPress={() => router.push('/why')}
          style={styles.why}
        />

        <View style={styles.cards}>
          <View ref={checkAnchor} collapsable={false}>
            <MorningCheck />
          </View>
          <PlanKindCard kind={kind} ranToday={ranToday} restDay={work.type === 'rest'} />
          <FirstStepCard />
        </View>

        <QuickRow />

        <PassEndingCard seen={focused && revealed} />
      </ScrollView>

      <View
        ref={startAnchor}
        collapsable={false}
        pointerEvents="box-none"
        style={[styles.start, { bottom: clearance + 8 }]}>
        <StartButton label={startLabel} onPress={onStart} />
      </View>

      {/* The first run, after the purchase or the skip: the "Day 1" card and
          then the tour, over Home while it is in front. */}
      <HomeTour visible={focused && revealed && !planOver} sessionOpen={dayOne != null} onStartDayOne={setDayOne} />
      <DayOneSession run={dayOne} onClose={() => setDayOne(null)} />

      <FollowSheet visible={follow.visible} from="auto" onClose={follow.close} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  week: { marginTop: 16 },
  hero: { marginTop: space.gap },
  why: { marginTop: 4 },
  cards: { gap: space.gap, marginTop: 12 },
  start: { position: 'absolute', left: space.screen, right: space.screen },
});
