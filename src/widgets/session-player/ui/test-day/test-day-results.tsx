import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import { GOAL_SPECS, ZONE_META, fromDateKey, retestResults, type TestDayOutcome } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { goalValuesOf, legsOf, resultRows, type ResultRow } from '../../model/test-day';
import { GOAL_ZONE } from './test-meta';

const NAME_KEY = {
  arch_hold: 'testday.results.name.arch_hold',
  calf_raises: 'testday.results.name.calf_raises',
  balance: 'testday.results.name.balance',
  symmetry: 'testday.results.name.symmetry',
} as const;

/**
 * What they came for, said back to them under the numbers.
 *
 * Carried over from the old result screen: the one moment the numbers mean
 * most is the moment to connect them to the reason the person started, in
 * their words from onboarding. A reminder of the goal, never a verdict on
 * whether they are on track for it.
 */
const GOAL_LINE = {
  painfree: 'widgets.retestGoal.painfree',
  race: 'widgets.retestGoal.race',
  consistent: 'widgets.retestGoal.consistent',
  stronger: 'widgets.retestGoal.stronger',
  injuryfree: 'widgets.retestGoal.injuryfree',
  flatfeet: 'widgets.retestGoal.flatfeet',
  ankles: 'widgets.retestGoal.ankles',
  jump: 'widgets.retestGoal.jump',
  allday: 'widgets.retestGoal.allday',
  comeback: 'widgets.retestGoal.comeback',
  steady: 'widgets.retestGoal.steady',
} as const;

function goalLineKey(goal: string | null | undefined): (typeof GOAL_LINE)[keyof typeof GOAL_LINE] | null {
  return goal != null && Object.hasOwn(GOAL_LINE, goal) ? GOAL_LINE[goal as keyof typeof GOAL_LINE] : null;
}

const BAR = 10;
const BAR_MS = 800;

export type TestDayResultsProps = {
  outcome: TestDayOutcome;
  side: 'left' | 'right' | 'both' | null;
  onDone: () => void;
};

/**
 * What the test found, one goal to a card.
 *
 * Each card answers the three things a person looks for, in the order they
 * look: the figure, whether it moved since last time, and how far is left to
 * the goal. The figure is ink at every value and the bar keeps the goal's own
 * accent at every length — only a change for the better is coloured, because
 * that is the one thing colour is allowed to say in this app. A dip reads in
 * words, in grey: information, not a verdict.
 *
 * Read from the stored results rather than from what was just typed, so the
 * same screen serves "See results" on a later day and says exactly what the
 * plan was built from.
 */
export function TestDayResults({ outcome, side, onDone }: TestDayResultsProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const language = useLanguage();
  const t = useT();
  const goalLine = goalLineKey(useIntake()?.goal);

  const read = useMemo(() => {
    const results = retestResults();
    const last = results[results.length - 1];
    if (last == null) return null;
    const previous = results[results.length - 2];
    return {
      rows: resultRows(
        goalValuesOf(last),
        previous == null ? null : goalValuesOf(previous),
        outcome.reached,
        GOAL_SPECS,
      ),
      legs: legsOf(last, side),
      first: previous == null,
    };
  }, [outcome, side]);

  // "Monday, 13 October" in the language the app is in, from `Intl` rather
  // than from a table of English names.
  const nextTest = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(fromDateKey(outcome.nextTestOn));

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
          {t('testday.results.title')}
        </Text>
        <Text style={[styles.blurb, { color: meter.caption }]}>
          {read?.first === false ? t('testday.results.blurb') : t('testday.results.firstBlurb')}
        </Text>

        {read?.rows.map((row) => (
          <ResultCard
            key={row.type}
            row={row}
            legs={row.type === 'calf_raises' ? read.legs : null}
          />
        ))}

        {goalLine != null && (
          <View style={[styles.why, { backgroundColor: meter.iconTile }]}>
            <Text style={[styles.whyEyebrow, { color: meter.label }]}>{t('widgets.retestYourGoal')}</Text>
            <Text style={[styles.whyText, { color: colors.foreground }]}>{t(goalLine)}</Text>
          </View>
        )}

        <View style={[styles.next, { backgroundColor: colors.card }]}>
          <View style={[styles.tile, { backgroundColor: meter.iconTile }]}>
            <HugeiconsIcon icon={Calendar03Icon} size={20} color={colors.foreground} strokeWidth={2} />
          </View>
          <View style={styles.nextCopy}>
            <Text style={[styles.nextTitle, { color: colors.foreground }]}>
              {t('testday.results.nextTest', { date: nextTest })}
            </Text>
            <Text style={[styles.nextBody, { color: meter.caption }]}>{t('testday.results.planUpdated')}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <PrimaryButton label={t('testday.results.done')} onPress={onDone} />
      </View>
    </View>
  );
}

function ResultCard({ row, legs }: { row: ResultRow; legs: { left: number; right: number } | null }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const zone = ZONE_META[GOAL_ZONE[row.type]];
  const tone = accents[scheme][zone.accent];

  const fill = useSharedValue(0);
  useEffect(() => {
    fill.value = withTiming(row.fill, {
      duration: BAR_MS,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [row.fill, fill]);
  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: fill.value }] }));

  const improving = row.change != null && row.change > 0;

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.head}>
        <View style={[styles.tile, { backgroundColor: tone.track }]}>
          <HugeiconsIcon icon={zone.icon} size={20} color={tone.fill} strokeWidth={2} />
        </View>
        <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={1}>
          {t(NAME_KEY[row.type])}
        </Text>
        {row.reached && (
          <View style={[styles.badge, { backgroundColor: tone.track }]}>
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} color={tone.fill} strokeWidth={2.2} />
            <Text style={[styles.badgeText, { color: colors.foreground }]}>{t('testday.results.reached')}</Text>
          </View>
        )}
      </View>

      <View style={styles.figureRow}>
        <Text style={[styles.figure, { color: meter.ink }]}>{figureOf(t, row)}</Text>
        <Text style={[styles.unit, { color: meter.unit }]}>{unitOf(t, row)}</Text>
      </View>
      <Text style={[styles.change, { color: improving ? meter.positive : meter.caption }]}>
        {changeOf(t, row)}
      </Text>

      <View
        style={[styles.track, { backgroundColor: tone.track }]}
        accessible
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: 100, now: Math.round(row.fill * 100) }}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.fill, { backgroundColor: tone.fill }, fillStyle]} />
      </View>

      <View style={styles.goalRow}>
        <Text style={[styles.goal, { color: meter.label }]}>{goalOf(t, row)}</Text>
        {!row.reached && <Text style={[styles.goal, { color: meter.label }]}>{toGoOf(t, row)}</Text>}
      </View>

      {legs != null && (
        <Text style={[styles.legs, { color: meter.caption }]}>{t('testday.results.legs', legs)}</Text>
      )}
    </View>
  );
}

/** The big figure. The gap carries its percent sign, placed as the language
 * places it ("17%", "17 %"). */
function figureOf(t: Translate, row: ResultRow): string {
  return row.type === 'symmetry' ? t('testday.results.percent', { n: row.value }) : String(row.value);
}

/** The word after it, agreeing with it. */
function unitOf(t: Translate, row: ResultRow): string {
  switch (row.type) {
    case 'calf_raises':
      return t('testday.results.unitRaises', { count: row.value });
    case 'symmetry':
      return t('testday.results.gapUnit');
    default:
      return t('testday.results.unitSeconds', { count: row.value });
  }
}

function changeOf(t: Translate, row: ResultRow): string {
  if (row.change == null) return t('testday.results.first');
  if (row.change === 0) return t('testday.results.same');
  const count = Math.abs(row.change);
  const better = row.change > 0;
  switch (row.type) {
    case 'calf_raises':
      return better ? t('testday.results.moreRaises', { count }) : t('testday.results.fewerRaises', { count });
    case 'symmetry':
      return better ? t('testday.results.gapSmaller', { count }) : t('testday.results.gapLarger', { count });
    default:
      return better ? t('testday.results.moreSeconds', { count }) : t('testday.results.fewerSeconds', { count });
  }
}

function goalOf(t: Translate, row: ResultRow): string {
  switch (row.type) {
    case 'calf_raises':
      return t('testday.results.goalRaises', { count: row.target });
    case 'symmetry':
      return t('testday.results.goalGap', { n: row.target });
    default:
      return t('testday.results.goalSeconds', { n: row.target });
  }
}

function toGoOf(t: Translate, row: ResultRow): string {
  switch (row.type) {
    case 'calf_raises':
      return t('testday.results.toGoRaises', { count: row.toGo });
    case 'symmetry':
      return t('testday.results.toGoGap', { count: row.toGo });
    default:
      return t('testday.results.toGoSeconds', { count: row.toGo });
  }
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
    gap: 12,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontFamily: fonts.heavy,
    letterSpacing: -0.8,
  },
  blurb: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.medium,
    marginTop: -4,
    marginBottom: 8,
  },
  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 6,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  tile: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    fontSize: 17,
    fontFamily: fonts.bold,
    letterSpacing: -0.2,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: fonts.bold,
  },
  figureRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
    marginTop: 8,
  },
  figure: {
    fontSize: 44,
    lineHeight: 50,
    fontFamily: fonts.heavy,
    letterSpacing: -1.2,
    fontVariant: ['tabular-nums'],
  },
  unit: {
    flexShrink: 1,
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  change: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    marginTop: -2,
  },
  track: {
    height: BAR,
    borderRadius: BAR / 2,
    overflow: 'hidden',
    marginTop: 10,
  },
  fill: {
    borderRadius: BAR / 2,
    transformOrigin: 'left center',
  },
  goalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 4,
  },
  goal: {
    fontSize: 13,
    fontFamily: fonts.semibold,
    fontVariant: ['tabular-nums'],
  },
  legs: {
    fontSize: 13,
    fontFamily: fonts.medium,
    fontVariant: ['tabular-nums'],
  },
  why: {
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    gap: 6,
    marginTop: 4,
  },
  whyEyebrow: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.4,
  },
  whyText: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: fonts.semibold,
  },
  next: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 26,
    borderCurve: 'continuous',
    padding: 18,
    marginTop: 4,
  },
  nextCopy: {
    flex: 1,
    gap: 2,
  },
  nextTitle: {
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  nextBody: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: fonts.medium,
  },
  dock: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
});
