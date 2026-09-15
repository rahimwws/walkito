import { useRouter } from 'expo-router';
import { DiamondIcon, FireIcon } from 'phosphor-react-native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  CONSISTENCY_WINDOW,
  MAX_LEVEL,
  PROGRAM,
  TODAY_INDEX,
  blockName,
  completedThrough,
  computeScore,
  currentLevels,
  latestRetest,
  painFor,
  painOn,
  useStreak,
  type RetestRow,
} from '@/entities/program';
import { accents } from '@/shared/config';
import { plural } from '@/shared/lib/format';
import { useProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { useDockHeight } from '@/shared/ui/action-dock';
import { DailyBrief, frame, metric, type BriefToken } from '@/shared/ui/daily-brief';
import { GiftSheet } from '@/shared/ui/gift-sheet';
import { StreakSheet } from '@/shared/ui/streak-sheet';
import { useMinimizeOnScroll } from '@/shared/ui/glass-tabs';
import { HeaderActions } from '@/shared/ui/header-actions';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { IntroReveal } from '@/shared/ui/splash';

import { useCountUp } from '../model/use-count-up';
import { PerformanceCard } from './performance-card';
import { ScoreCard } from './score-card';
import { StreakTile } from './streak-tile';

const SIDE_PAD = 20;

// The two hand-written streak constants that used to sit here are gone. The
// note left with them said both would stay sample "until the program keeps real
// attendance, and then both come from the same place" — `useStreak` is that
// place, and it reads the same logs the rest of this screen does.

/** The ruler's vocabulary, lowest first. Four words for four levels. */
const BANDS = ['Very Low', 'Low', 'Medium', 'High'] as const;

/**
 * The three windows.
 *
 * Only the window is declared here now. `score`, `ability` and `abilityDelta`
 * used to be written into this table as stand-ins; they are measured below —
 * the score from the published formula, and the ability from the last two
 * retests. A number on this screen is either something the user did or
 * something derived from it, and nothing in between.
 */
const RANGES = [
  { label: '7 days', window: '7 days', days: 7 },
  { label: '1 month', window: 'month', days: 30 },
  { label: '3 months', window: '3 months', days: 90 },
] as const;

/**
 * Ninety days, not seven.
 *
 * Pain fluctuates day to day, so a week-long window shows a worsening trend
 * roughly half the time from noise alone — and a screen that tells someone
 * their pain is up when nothing has actually changed is worse than a screen
 * that says nothing. Three months is long enough for the signal to clear the
 * noise, so it is what the tab opens on.
 */
const DEFAULT_RANGE = 2;

/** Both halves of a window need enough days to average, or the comparison is
 * one noisy reading against another. */
const MIN_WINDOW_DAYS = 14;

const RANGE_LABELS = RANGES.map((range) => range.label);

/**
 * The headline sentence, in Home's voice.
 *
 * Grey carries the grammar and the emphasis carries the fact, so the line can
 * be skimmed for the coloured words alone and still be read correctly — which
 * is the whole reason this block is shared between the two screens rather than
 * restyled per page.
 */
function trendTokens(window: string, from: number, to: number): readonly BriefToken[] {
  // Falling pain is the good direction, so the arrow and the colour both come
  // off the same comparison. Getting this backwards would paint an improving
  // month red — or worse, a worsening one green.
  const better = to <= from;
  return [
    frame('Over the last'),
    metric('window', window),
    frame('your morning pain went'),
    metric(better ? 'down' : 'up', `from ${from} to ${to}`, {
      tail: '.',
      tone: better ? 'good' : 'warn',
    }),
  ];
}

/**
 * The 7-day tab counts; it never trends.
 *
 * A week is too short to say anything about direction, but it is exactly the
 * right length to say how much of it the user turned up for — which is a fact
 * rather than an inference, and the one number on this screen they control
 * directly.
 */
function weekTokens(logged: number): readonly BriefToken[] {
  return [metric('window', `${logged} of 7 days`), frame('logged this week.')];
}

/** Not enough history to compare two halves of the window honestly. */
function tooEarlyTokens(elapsed: number): readonly BriefToken[] {
  return [
    metric('window', `${plural(elapsed, 'day')} in`, { tail: '.' }),
    frame('Too early to call a trend.'),
  ];
}

/**
 * Mean logged pain across a span of program days, or null if it is empty.
 *
 * Clamped to the days that have actually happened — asking for ninety days of
 * history from a programme that is sixteen days old has to come back empty
 * rather than wrapping around the sample log and inventing a past.
 */
function meanPain(from: number, to: number): number | null {
  const start = Math.max(0, from);
  const end = Math.min(TODAY_INDEX, to);
  if (end <= start) return null;
  let sum = 0;
  for (let i = start; i < end; i += 1) sum += painFor(i);
  return sum / (end - start);
}

/**
 * Mornings actually logged in the last `window` days.
 *
 * Counts entries, not sessions — the consistency term of the score is about
 * turning up, and answering "it hurts today" is turning up. Clamped to days
 * that have happened so a fortnight-old programme is not marked down for the
 * days it has not lived through.
 */
function checkInsIn(cursor: number, window: number): number {
  let count = 0;
  for (let index = Math.max(0, cursor - window); index < cursor; index += 1) {
    if (painOn(index + 1) != null) count += 1;
  }
  return count;
}

/** The screen: how the window moved, then where the user stands in it. */
export function ProgressPage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const onScroll = useMinimizeOnScroll();
  const dockHeight = useDockHeight();
  const scheme = useColorScheme();
  const program = useProgram();
  const today = PROGRAM[TODAY_INDEX];

  /** The reward sheet, opened from the capsule in the header. */
  const [giftOpen, setGiftOpen] = useState(false);
  /** What the streak means, opened from the capsule that shows it. */
  const [streakOpen, setStreakOpen] = useState(false);
  const streak = useStreak();
  const [rangeIndex, setRangeIndex] = useState(DEFAULT_RANGE);
  const range = RANGES[rangeIndex];

  /**
   * Ability, and how far it moved at the last retest.
   *
   * Neither figure follows the range control, and that is deliberate: a level
   * is a measurement taken on a particular morning, not a statistic over a
   * window. Re-averaging it per tab would let the same performance read as two
   * different abilities depending on which segment happened to be selected,
   * which is exactly the drift the levels rule exists to prevent. The delta is
   * this retest against the one before it — the two figures the rows already
   * carry — so the card and the retest sheet can never disagree.
   */
  const levels = currentLevels(TODAY_INDEX);
  const latest = latestRetest(TODAY_INDEX);

  const average = (pick: (row: RetestRow) => number) =>
    latest == null
      ? null
      : latest.retest.rows.reduce((sum, row) => sum + pick(row), 0) / latest.retest.rows.length;

  const ability = average((row) => row.level) ?? 0;
  const wasAbility = average((row) => row.wasLevel) ?? 0;
  // Guarded: before the first retest there is nothing to divide by, and a
  // level cannot fall to zero, so this can only be zero when unmeasured.
  const abilityDelta =
    wasAbility > 0 ? Math.round(((ability - wasAbility) / wasAbility) * 100) : 0;

  /**
   * The score, as the formula publishes it.
   *
   * Levels carry half of it, the pain trend thirty and turning up twenty. The
   * pain term is the one thing here that follows the range control, because it
   * is the only one of the three that is a statistic over a window — which is
   * also what makes switching tabs worth doing.
   */
  const score = computeScore({
    levels,
    painEarlier: meanPain(TODAY_INDEX - range.days, TODAY_INDEX - Math.floor(range.days / 2)),
    painRecent: meanPain(TODAY_INDEX - Math.floor(range.days / 2), TODAY_INDEX),
    checkInsLast14: checkInsIn(TODAY_INDEX, CONSISTENCY_WINDOW),
  });

  /**
   * What the sentence says for this window.
   *
   * Three shapes, and which one appears is decided by the data rather than by
   * the tab: a week counts, a long enough window compares its two halves, and
   * a window the programme has not lived through yet says so instead of
   * manufacturing a trend out of one reading.
   */
  const brief = (() => {
    if (range.days === 7) {
      const logged = completedThrough(TODAY_INDEX) - completedThrough(Math.max(TODAY_INDEX - 7, 0));
      return weekTokens(logged);
    }
    const half = Math.floor(range.days / 2);
    const recent = meanPain(TODAY_INDEX - half, TODAY_INDEX);
    const earlier = meanPain(TODAY_INDEX - range.days, TODAY_INDEX - half);
    if (recent == null || earlier == null || TODAY_INDEX < MIN_WINDOW_DAYS) {
      return tooEarlyTokens(TODAY_INDEX);
    }
    return trendTokens(range.window, Math.round(earlier), Math.round(recent));
  })();

  return (
    <View style={styles.screen}>
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
            onSettings={() => router.push('/settings')}
          />
        </IntroReveal>

        <IntroReveal order={1} style={styles.control}>
          <SegmentedControl
            segments={RANGE_LABELS}
            selectedIndex={rangeIndex}
            onChange={setRangeIndex}
          />
        </IntroReveal>

        <IntroReveal order={2} style={styles.brief}>
          <DailyBrief tokens={brief} />
        </IntroReveal>

        <IntroReveal order={3}>
          <ScoreCard
            score={score}
            title="You’re doing great!"
            headline={`${streak.current} day streak!`}
            note={`Keep it up to finish the ${blockName(today.block)} block.`}
          />
        </IntroReveal>

        <IntroReveal order={4} style={styles.performance}>
          <PerformanceCard
            value={ability}
            max={MAX_LEVEL}
            delta={abilityDelta}
            bands={BANDS}
          />
        </IntroReveal>

        {/* Attendance, under the card about ability. The two streaks do not
            move with the range control on purpose: a current streak is a fact
            about today, and "3 days" would be a lie if it quietly became "3
            days, measured over 3 months". */}
        <IntroReveal order={5} style={styles.streaks}>
          <StreakTile
            icon={FireIcon}
            tint={accents[scheme].orange.fill}
            days={streak.current}
            label="Current Streak"
          />
          <StreakTile
            icon={DiamondIcon}
            tint={accents[scheme].amber.fill}
            days={streak.longest}
            label="Longest Streak"
          />
        </IntroReveal>

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
  control: {
    marginTop: 22,
  },
  brief: {
    marginTop: 20,
    marginBottom: 22,
  },
  performance: {
    marginTop: 14,
  },
  streaks: {
    flexDirection: 'row',
    // The gap between the two tiles reads as the same air as the gap above
    // them, so the three cards sit on one grid rather than in two clusters.
    gap: 14,
    marginTop: 14,
  },
});
