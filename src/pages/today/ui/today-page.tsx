import UserIcon from '@hugeicons/core-free-icons/UserIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused, useRouter } from 'expo-router';
import { useRef, useState, type ComponentRef } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useHealthSignals } from '@/entities/health';
import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import { protocolById } from '@/entities/protocols';
import { toDateKey, todayKey, useNextSession, useProgramState, weekIndexFor } from '@/entities/program';
import { useAccessLapsed, useEntitled, usePaywallSkipped } from '@/entities/purchase';
import { useHomeTourState } from '@/entities/session';
import { FollowSheet, useFollowOffer } from '@/features/follow';
import { HomeTour, type DayOneRun } from '@/features/home-tour';
import { CHROME_MAX_FONT_SCALE, colors, fonts, space, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { requestProgram, usePlanOver, useProgram } from '@/shared/lib/program';
import { useSpotlightAnchor, useSpotlightScroller } from '@/shared/lib/spotlight';
import { useTabBarClearance } from '@/shared/lib/tab-bar';
import { useSplashRevealed } from '@/shared/ui/splash';

import { planKind } from '../model/plan-kind';
import { useTodayWork } from '../model/today-work';
import { useOpenRoutine } from '../model/use-open-routine';
import { CheckIn } from './check-in';
import { DayOneSession } from './day-one-session';
import { PassEndingRow } from './pass-ending-row';
import { PlainRow } from './plain-row';
import { RoutineGrid } from './routine-grid';
import { SessionCard } from './session-card';
import { cardStyle } from './today-card';
import { WeekCard } from './week-card';

/**
 * Today, copied from Bend's home with pliability's and Alan's today card: a
 * greeting with the profile as a round button and the week as a pill, the
 * week's days on a white card, today's session as a card with its photo, its
 * first moves and Start, the check-in on its own card, then Bend's grid of
 * quick routines.
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

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? t('home.greeting.morning') : hour < 18 ? t('home.greeting.afternoon') : t('home.greeting.evening');

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
          paddingBottom: clearance + space.gap,
          gap: 16,
        }}>
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting} accessibilityRole="header" maxFontSizeMultiplier={2}>
              {greeting}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityHint={t('home.today.weekHint')}
              onPress={() => {
                void Haptics.selectionAsync();
                program?.open();
              }}
              style={({ pressed }) => [styles.weekPill, pressed && styles.pressed]}>
              <Text style={styles.weekText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE} numberOfLines={1}>
                {t('home.today.week', { week: Math.min(week, weeks), total: weeks })}
              </Text>
            </Pressable>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('home.today.profile')}
            onPress={() => {
              void Haptics.selectionAsync();
              router.push('/profile');
            }}
            style={({ pressed }) => [styles.avatar, pressed && styles.pressed]}>
            <HugeiconsIcon icon={UserIcon} size={24} color={colors.text} strokeWidth={1.8} />
          </Pressable>
        </View>

        <WeekCard />

        <View ref={overviewAnchor} collapsable={false}>
          <SessionCard
            work={work}
            kind={kind}
            ranToday={ranToday}
            next={next}
            active={focused}
            startLabel={startLabel}
            onStart={onStart}
            onOpen={() => program?.open()}
            onWhy={() => router.push('/why')}
            startRef={startAnchor}
          />
        </View>

        <View ref={checkAnchor} collapsable={false}>
          <CheckIn />
        </View>

        {kind === 'runner' ? (
          <PlainRow
            emoji={ranToday ? 'shoe' : 'run'}
            accent="orange"
            title={ranToday ? t('home.today.run.doneTitle') : t('home.today.run.title')}
            detail={t('home.today.run.body', { minutes: t('quick.minutes', { count: protocolById('post_run').minutes }) })}
            onPress={() => openRoutine('post_run')}
          />
        ) : kind === 'feet' ? (
          <PlainRow
            emoji="briefcase"
            accent="amber"
            title={t('home.today.work.title', { count: protocolById('at_work').minutes })}
            detail={t('home.today.work.body')}
            onPress={() => openRoutine('at_work')}
          />
        ) : (
          <PlainRow
            emoji="sunrise"
            accent="amber"
            title={t('home.today.firstStep.title')}
            detail={t('home.today.firstStep.when', {
              time: wakeLabel(wakeMinutes(), language),
              minutes: t('quick.minutes', { count: protocolById('first_steps').minutes }),
            })}
            onPress={() => openRoutine('first_steps')}
            action={{ label: t('home.today.firstStep.change'), onPress: () => router.push('/first-step-time') }}
          />
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle} accessibilityRole="header">
            {t('home.today.quickTitle')}
          </Text>
          <RoutineGrid kind={kind} />
        </View>

        <PassEndingRow seen={focused && revealed} />
      </ScrollView>

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
  header: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginTop: 4 },
  headerText: { flex: 1, alignItems: 'flex-start', gap: 8 },
  greeting: { ...fonts.bold(30, -0.6), color: colors.text },
  weekPill: {
    minHeight: 36,
    justifyContent: 'center',
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
  },
  weekText: { ...fonts.semibold(17), color: colors.accent },
  avatar: {
    ...cardStyle,
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: { gap: 12, marginTop: 8 },
  sectionTitle: { ...fonts.bold(22, -0.3), color: colors.text },
  pressed: { opacity: 0.6 },
});
