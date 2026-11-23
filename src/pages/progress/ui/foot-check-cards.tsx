import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { GOAL_SPECS, type GoalType } from '@/entities/program';
import { bitepal, bodyColors, colors, fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Key, type Translate } from '@/shared/lib/i18n';
import { requestProgram } from '@/shared/lib/program';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, thinkingRig } from '@/shared/ui/mascot';
import { Bar, BigNumber, CardLabel, RoundButton, TestRing } from '@/widgets/session-player';

import { formatDateKey, formatNumber, formatSigned } from '../model/format';
import type { StrengthKey, StrengthTrend } from '../model/progress-data';
import { CardFoot, CardHead, Chip, NUMBER_SCALE, ProgressCard, useLargeText } from './kit';

/** Each test's goal, words and colour: the part of the leg it works, as the
 * Foot Check's own cards colour it. The colour names the test, never the result. */
const META: Record<StrengthKey, { goal: GoalType; name: Key; explain: Key; reps: boolean; color: string }> = {
  calf: { goal: 'calf_raises', name: 'progress.calfName', explain: 'testday.results.explain.calf_raises', reps: true, color: bodyColors.calf },
  balance: { goal: 'balance', name: 'progress.balanceName', explain: 'testday.results.explain.balance', reps: false, color: bodyColors.ankle },
  arch: { goal: 'arch_hold', name: 'progress.archName', explain: 'testday.results.explain.arch_hold', reps: false, color: bodyColors.arch },
};

/** Tests drawn as bars when a card opens: the last four, as the results do. */
const SHOWN = 4;

function changeOf(trend: StrengthTrend, t: Translate, language: string): string {
  if (trend.latest == null) return t('progress.strengthNoTest');
  if (trend.delta == null) return t('progress.baseline');
  if (trend.delta === 0) return t('progress.noChange');
  const delta = formatSigned(trend.delta, language);
  return META[trend.key].reps
    ? t('progress.repsDelta', { count: Math.abs(trend.delta), delta })
    : t('progress.secondsDelta', { delta });
}

function daysUntil(from: string, to: string): number {
  const at = (key: string) => {
    const [y, m, d] = key.split('-').map(Number);
    return Date.UTC(y ?? 1970, (m ?? 1) - 1, d ?? 1);
  };
  return Math.round((at(to) - at(from)) / 86_400_000);
}

/**
 * The Foot Check over time, one BitePal card per test (#98): the test's name
 * as the label, the latest figure large, its picture in a ring filled to its
 * share of the goal, a thin bar toward the goal and what is left of it, and
 * the change since the first test. A card opens to every test so far as thin
 * bars toward the goal. Then the next test, with a round start on its day.
 * Before the first test, one card says what will appear, with the mascot.
 */
export function FootCheckCards({
  trends,
  nextTest,
  today,
}: {
  trends: readonly StrengthTrend[];
  nextTest: string | null;
  today: string;
}) {
  const t = useT();
  const [open, setOpen] = useState<StrengthKey | null>(null);
  const tested = trends.some((trend) => trend.latest != null);

  const toggle = (key: StrengthKey) => {
    void Haptics.selectionAsync();
    setOpen((current) => {
      if (current === key) return null;
      track('progress_strength_detail', { test: key });
      return key;
    });
  };

  if (!tested) {
    return (
      <ProgressCard>
        <CardHead
          aside={
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <Mascot rig={thinkingRig} state="thinking" size={88} easterEgg={false} />
            </View>
          }>
          <CardLabel>{t('progress.strengthTitle')}</CardLabel>
          <Text style={styles.empty}>{t('progress.strengthEmpty')}</Text>
        </CardHead>
        {nextTest != null && <NextTest nextTest={nextTest} today={today} />}
      </ProgressCard>
    );
  }

  return (
    <>
      {trends.map((trend) => (
        <TestCard key={trend.key} trend={trend} open={open === trend.key} onToggle={() => toggle(trend.key)} />
      ))}
      {nextTest != null && (
        <ProgressCard>
          <NextTest nextTest={nextTest} today={today} />
        </ProgressCard>
      )}
    </>
  );
}

function TestCard({ trend, open, onToggle }: { trend: StrengthTrend; open: boolean; onToggle: () => void }) {
  const t = useT();
  const language = useLanguage();
  const large = useLargeText();
  const meta = META[trend.key];
  const goal = GOAL_SPECS[meta.goal].target;
  const name = t(meta.name);
  const latest = trend.latest;
  const unit = meta.reps ? t('progress.repsUnit', { count: latest ?? 0 }) : t('progress.secondsUnit');
  const change = changeOf(trend, t, language);
  const share = (v: number) => v / Math.max(1, goal);
  const left = latest == null ? null : Math.max(0, Math.ceil(goal - latest));
  const canOpen = trend.values.length > 0;
  const improving = trend.delta != null && trend.delta > 0;

  return (
    <ProgressCard>
      <Pressable
        accessibilityRole={canOpen ? 'button' : undefined}
        accessibilityState={canOpen ? { expanded: open } : undefined}
        accessibilityHint={canOpen ? (open ? t('testday.results.hideDetails') : t('testday.results.showDetails')) : undefined}
        accessibilityLabel={t('progress.strengthRowA11y', {
          name,
          value: latest == null ? '–' : formatNumber(latest, language),
          unit,
          change,
        })}
        disabled={!canOpen}
        onPress={onToggle}
        style={({ pressed }) => [styles.body, pressed && styles.pressed]}>
        <CardHead
          aside={
            <TestRing
              kind={trend.key}
              from={trend.values.length > 1 ? share(trend.values[0] ?? 0) : 0}
              to={latest == null ? 0 : share(latest)}
              tone={{ fill: meta.color, track: bitepal.track }}
              size={72}
              stroke={6}
            />
          }>
          <CardLabel>{name}</CardLabel>
          <BigNumber value={latest == null ? '–' : formatNumber(latest, language)} unit={latest == null ? null : unit} size={44} maxScale={NUMBER_SCALE} />
        </CardHead>
        <Bar value={latest == null ? 0 : share(latest)} color={meta.color} />
        <View style={[styles.foot, large && styles.footStacked]}>
          <Text style={styles.footText}>
            {latest != null && latest >= goal
              ? t('testday.results.reached')
              : left == null
                ? t('progress.strengthNoTest')
                : meta.reps
                  ? t('testday.results.toGoRaises', { count: left })
                  : t('testday.results.toGoSeconds', { count: left })}
          </Text>
          <Chip label={change} improving={improving} />
          {canOpen && (
            <View style={open && styles.chevronOpen}>
              <HugeiconsIcon icon={ArrowDown01Icon} size={22} color={colors.text3} strokeWidth={2.2} />
            </View>
          )}
        </View>
      </Pressable>

      {open && (
        <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(140)} style={styles.details}>
          <Text style={styles.historyTitle}>{t('testday.results.history')}</Text>
          {trend.values.slice(-SHOWN).map((value, i, shown) => {
            const date = trend.dates.slice(-SHOWN)[i] ?? '';
            const last = i === shown.length - 1;
            return (
              <View key={date + i} style={[styles.history, large && styles.historyStacked]}>
                <Text style={styles.historyDate}>{formatDateKey(date, language, 'dayMonth')}</Text>
                <Bar value={share(value)} color={last ? meta.color : soften(meta.color)} style={large ? styles.historyBarStacked : styles.historyBar} />
                <Text style={[styles.historyValue, last && styles.historyLast]} maxFontSizeMultiplier={NUMBER_SCALE}>
                  {formatNumber(value, language)}
                </Text>
              </View>
            );
          })}
          <CardFoot>{t('progress.goalLine', { value: formatNumber(goal, language, 0), unit: meta.reps ? t('progress.repsUnit', { count: goal }) : t('progress.secondsUnit') })}</CardFoot>
          <View style={styles.explain}>
            <FluentIcon name="bulb" size={24} />
            <Text style={styles.explainText}>{t(meta.explain)}</Text>
          </View>
        </Animated.View>
      )}
    </ProgressCard>
  );
}

/** An older test's bar: the test's colour, lighter. */
function soften(hex: string): string {
  return hex + '66';
}

/** The next test: the date large, how far off it is, and on its day the round start. */
function NextTest({ nextTest, today }: { nextTest: string; today: string }) {
  const t = useT();
  const language = useLanguage();
  const due = nextTest <= today;
  const days = daysUntil(today, nextTest);
  const start = () => {
    track('progress_test_started');
    requestProgram({ kind: 'test' });
  };

  return (
    <CardHead
      aside={
        due ? (
          <RoundButton icon={PlayIcon} label={t('progress.startTest')} onPress={start} size={64} tone="ink" />
        ) : (
          <View style={styles.well} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <FluentIcon name="calendar" size={30} />
          </View>
        )
      }>
      <CardLabel>{t('progress.nextTestLabel')}</CardLabel>
      <Text style={styles.nextTitle} maxFontSizeMultiplier={NUMBER_SCALE}>
        {due ? t('progress.nextTestToday') : formatDateKey(nextTest, language, 'dayMonth')}
      </Text>
      {!due && days > 0 && <Text style={styles.footText}>{t('progress.nextTestIn', { count: days })}</Text>}
    </CardHead>
  );
}

const styles = StyleSheet.create({
  body: { gap: 14 },
  pressed: { opacity: 0.7 },
  empty: { ...fonts.bold(22, -0.3), color: colors.text, marginTop: 4 },
  foot: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  footStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  footText: { ...fonts.medium(17), color: colors.text3, flexShrink: 1, flexGrow: 1 },
  chevronOpen: { transform: [{ rotate: '180deg' }] },
  details: { gap: 12, paddingTop: 14, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator },
  historyTitle: { ...fonts.bold(19), color: colors.text },
  history: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  historyStacked: { flexDirection: 'column', alignItems: 'stretch', gap: 6 },
  historyDate: { ...fonts.medium(17), color: colors.text2, minWidth: 72 },
  historyBar: { flex: 1 },
  historyBarStacked: { alignSelf: 'stretch' },
  historyValue: { ...fonts.bold(19), color: colors.text2, minWidth: 40, textAlign: 'right', fontVariant: ['tabular-nums'] },
  historyLast: { color: colors.text },
  explain: { flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  explainText: { ...fonts.regular(17), color: colors.text2, flex: 1 },
  well: { width: 64, height: 64, borderRadius: 32, backgroundColor: bitepal.well, alignItems: 'center', justifyContent: 'center' },
  nextTitle: { ...fonts.heavy(30, -0.6), color: colors.text },
});
