import { useRouter } from 'expo-router';
import { DiamondIcon } from 'phosphor-react-native/src/icons/Diamond';
import { FireIcon } from 'phosphor-react-native/src/icons/Fire';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  currentDay,
  goals as planGoals,
  painSeries,
  retestResults,
  todayKey,
  useLogsVersion,
  usePlanVersion,
  useStreak,
} from '@/entities/program';
import { accents, fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { useDockHeight } from '@/shared/ui/action-dock';
import { GiftSheet } from '@/shared/ui/gift-sheet';
import { StreakSheet } from '@/shared/ui/streak-sheet';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { IntroReveal } from '@/shared/ui/splash';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { rollingMean, strengthRows } from '../model/progress-data';
import { GoalsCard, PainLineCard, StrengthCard } from './progress-cards';
import { StreakTile } from './streak-tile';

const SIDE_PAD = 20;

// The two hand-written streak constants that used to sit here are gone. The
// note left with them said both would stay sample "until the program keeps real
// attendance, and then both come from the same place" — `useStreak` is that
// place, and it reads the same logs the rest of this screen does.

/** How far back the pain line reaches. */
const PAIN_DAYS = 90;

/**
 * The screen, in the order it is read: what the tests measured, how mornings
 * are trending, how far each goal has come, then turning up.
 */
export function ProgressPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const onScroll = useMinimizeOnScroll();
  const dockHeight = useDockHeight();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const program = useProgram();
  usePlanVersion();
  useLogsVersion();
  const t = useT();

  /** The reward sheet, opened from the capsule in the header. */
  const [giftOpen, setGiftOpen] = useState(false);
  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
  const streak = useStreak();

  const strength = strengthRows(retestResults());
  // First-step readings only, from the start of the plan or the last 90 days.
  const days = Math.max(1, Math.min(PAIN_DAYS, currentDay()));
  const daily = painSeries(todayKey(), days);
  const mean = rollingMean(daily);
  const goalList = planGoals();

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      {/* No wash here, unlike Home. Progress opens with a sentence carrying a
          coloured value — the trend, green or red — and a violet gradient
          behind it argues with the one colour on the screen that means
          something. Home's top is chrome, so the light lands on nothing that
          has to be read. */}
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.root}
        contentContainerStyle={{
          // Home's figure, not a smaller one. The header is shared furniture,
          // so it has to sit at the same height on both tabs or switching
          // between them nudges it.
          paddingTop: insets.top + 24,
          paddingHorizontal: SIDE_PAD,
          // Clears the whole bottom stack: the docked action, the tab pill
          // lifted over it, and a little air under the last card.
          paddingBottom: dockHeight + 110,
        }}>
        {/* The same chrome Home wears, in the same slots. Someone moving between
            the two tabs should not have to find the streak or the profile again
            — the header is the app's furniture, not the screen's. */}
        <IntroReveal order={0} fade={false}>
          <HeaderActions
            spread
            streak={streak.current}
            onStreakPress={() => setStreakOpen(true)}
            streakGlyph={<FireIcon size={22} color={accents[scheme].orange.fill} weight="fill" />}
            gift
            onGift={() => setGiftOpen(true)}
            swapProgress={program?.progress}
            onProfile={() => router.push('/profile')}
          />
        </IntroReveal>

        <IntroReveal order={1} style={styles.first}>
          <StrengthCard rows={strength} />
        </IntroReveal>

        <IntroReveal order={2} style={styles.next}>
          <PainLineCard daily={daily} mean={mean} />
        </IntroReveal>

        <IntroReveal order={3} style={styles.next}>
          <GoalsCard goals={goalList} />
        </IntroReveal>

        {/* Turning up, last. Every kind of day counts, and the line says so. */}
        <IntroReveal order={4} style={styles.streaks}>
          <StreakTile
            icon={FireIcon}
            tint={accents[scheme].orange.fill}
            days={streak.current}
            label={t('progress.currentStreak')}
          />
          <StreakTile
            icon={DiamondIcon}
            tint={accents[scheme].amber.fill}
            days={streak.longest}
            label={t('progress.longestStreak')}
          />
        </IntroReveal>
        <Text style={[styles.streakCaption, { color: meter.caption }]}>{t('progress.streakCaption')}</Text>

        <GiftSheet visible={giftOpen} onClose={() => setGiftOpen(false)} />

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
  screen: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  first: {
    marginTop: 22,
  },
  next: {
    marginTop: 14,
  },
  streaks: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 14,
  },
  streakCaption: {
    ...fonts.medium(13),
    lineHeight: 18,
    marginTop: 10,
    paddingHorizontal: 4,
  },
});
