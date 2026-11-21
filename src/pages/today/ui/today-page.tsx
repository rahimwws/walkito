import UserCircleIcon from '@hugeicons/core-free-icons/UserCircleIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused, useRouter } from 'expo-router';
import { useRef, useState, type ComponentRef } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useHealthSignals } from '@/entities/health';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { protocolById } from '@/entities/protocols';
import {
  toDateKey,
  todayKey,
  useNextSession,
  useProgramState,
  weekIndexFor,
} from '@/entities/program';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { FollowSheet, useFollowOffer } from '@/features/follow';
import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { CHROME_MAX_FONT_SCALE, colors, fonts, space, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { requestProgram, usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { StartButton } from '@/shared/ui/glass';
import { useSplashRevealed } from '@/shared/ui/splash';

import { planKind } from '../model/plan-kind';
import { useTodayWork } from '../model/today-work';
import { useOpenRoutine } from '../model/use-open-routine';
import { CheckIn } from './check-in';
import { DayOneSession } from './day-one-session';
import { PassEndingRow } from './pass-ending-row';
import { PlainRow } from './plain-row';
import { TodayHero } from './today-hero';
import { WeekRow } from './week-row';

/** The floating Start's own height, and the air above and under it. */
const START_ROOM = 56 + 24;

/**
 * Today (spec §7.1 and the v2 addendum; NTC #2, NRC #1): one session and one
 * button. The week in one quiet row, today's session as a full-bleed photo
 * with its minutes in huge type, then at most two plain rows.
 *
 * Start opens today's session where it always ran, on the Plan tab: the same
 * request an email link makes (`requestProgram`), so the player, the done
 * screen and the records are the Plan's own.
 */
export function TodayPage() {
  const t = useT();
  const language = useLanguage();
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
  const state = useProgramState();
  const openRoutine = useOpenRoutine();
  const kind = planKind();
  const ranToday =
    kind === 'runner' && health.lastRunEndedAt != null && toDateKey(new Date(health.lastRunEndedAt)) === todayKey();
  const week = weekIndexFor(state.startDate, todayKey());
  const weeks = state.planLength / 7;

  /** The day-one session the "Day 1" card started, playing in its sheet. */
  const [dayOne, setDayOne] = useState<DayOneRun | null>(null);
  const tourState = useHomeTourState();
  const skipped = usePaywallSkipped();
  const entitled = useEntitled();
  const lapsed = useAccessLapsed();
  /** Looking around without buying: nothing of a customer's rises. */
  const walled = skipped && !entitled && !lapsed;
  const homeClear = focused && revealed && !planOver && !walled && tourState !== 'armed' && dayOne == null;
  const follow = useFollowOffer(homeClear && !lapsed);

  const extra = work.done || work.type === 'rest';
  const startLabel = extra
    ? t('home.today.extra', { minutes: t('quick.minutes', { count: 2 }) })
    : work.type === 'test'
      ? t('home.today.startTests')
      : t('home.today.start', { minutes: t('quick.minutes', { count: work.minutes }) });
  const onStart = extra
    ? () => openRoutine(kind === 'runner' ? 'pre_run' : 'at_work')
    : () => {
        requestProgram({ kind: work.type === 'test' ? 'test' : 'today' });
        program?.open();
      };

  const dateLine = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date());

  return (
    <View style={styles.screen}>
      <ScrollView
        ref={scroll}
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // iOS already lays the tab's content out under the status bar.
          paddingTop: Platform.OS === 'ios' ? 8 : insets.top + 8,
          paddingHorizontal: space.screen,
          paddingBottom: clearance + START_ROOM + space.gap,
        }}>
        <View style={styles.bar}>
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              void Haptics.selectionAsync();
              router.push('/profile');
            }}
            style={({ pressed }) => [styles.barButton, pressed && styles.pressed]}>
            <HugeiconsIcon icon={UserCircleIcon} size={24} color={colors.text} strokeWidth={1.8} />
            <Text style={styles.barText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {t('home.today.profile')}
            </Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityHint={t('home.today.weekHint')}
            onPress={() => {
              void Haptics.selectionAsync();
              program?.open();
            }}
            style={({ pressed }) => [styles.barButton, pressed && styles.pressed]}>
            <Text style={styles.barWeek} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE} numberOfLines={1}>
              {t('home.today.week', { week: Math.min(week, weeks), total: weeks })}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={2}>
          {t('tabs.today')}
        </Text>
        <Text style={styles.date}>{dateLine}</Text>

        <View style={styles.week}>
          <WeekRow />
        </View>

        <View ref={overviewAnchor} collapsable={false} style={styles.hero}>
          <TodayHero work={work} kind={kind} ranToday={ranToday} next={next} active={focused} onPress={() => program?.open()} />
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/why')}
          style={({ pressed }) => [styles.why, pressed && styles.pressed]}>
          <Text style={styles.whyText}>{t('home.why.title')}</Text>
        </Pressable>

        <View style={styles.rows}>
          <View ref={checkAnchor} collapsable={false}>
            <CheckIn />
          </View>
          {kind === 'runner' ? (
            <PlainRow
              title={ranToday ? t('home.today.run.doneTitle') : t('home.today.run.title')}
              detail={t('home.today.run.body', { minutes: t('quick.minutes', { count: protocolById('post_run').minutes }) })}
              onPress={() => openRoutine('post_run')}
            />
          ) : kind === 'feet' ? (
            <PlainRow
              title={t('home.today.work.title', { count: protocolById('at_work').minutes })}
              detail={t('home.today.work.body')}
              onPress={() => openRoutine('at_work')}
            />
          ) : (
            <PlainRow
              title={t('home.today.firstStep.title')}
              detail={t('home.today.firstStep.when', {
                time: wakeLabel(wakeMinutes(), language),
                minutes: t('quick.minutes', { count: protocolById('first_steps').minutes }),
              })}
              onPress={() => openRoutine('first_steps')}
              action={{ label: t('home.today.firstStep.change'), onPress: () => router.push('/first-step-time') }}
            />
          )}
          <PassEndingRow seen={focused && revealed} />
        </View>
      </ScrollView>

      <View
        ref={startAnchor}
        collapsable={false}
        pointerEvents="box-none"
        style={[styles.start, { bottom: clearance + 8 }]}>
        <StartButton label={startLabel} onPress={onStart} />
      </View>

      {/* The first run, after the purchase or the skip: the "Day 1" card and
          then the tour, over Today while it is in front. */}
      <HomeTour visible={focused && revealed && !planOver} sessionOpen={dayOne != null} onStartDayOne={setDayOne} />
      <DayOneSession run={dayOne} onClose={() => setDayOne(null)} />

      <FollowSheet visible={follow.visible} from="auto" onClose={follow.close} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  bar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  barButton: { flexDirection: 'row', alignItems: 'center', gap: 6, minHeight: target.min, flexShrink: 1 },
  barText: { ...fonts.medium(17), color: colors.text },
  barWeek: { ...fonts.medium(17), color: colors.text2, flexShrink: 1 },
  title: { ...fonts.bold(34, -0.6), color: colors.text, marginTop: 12 },
  date: { ...fonts.regular(19), color: colors.text2, marginTop: 2 },
  week: { marginTop: 24 },
  hero: { marginTop: 24 },
  why: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center', marginTop: 4 },
  whyText: { ...fonts.medium(17), color: colors.text2, textDecorationLine: 'underline' },
  rows: { marginTop: space.section - 8 },
  start: { position: 'absolute', left: space.screen, right: space.screen },
  pressed: { opacity: 0.5 },
});
