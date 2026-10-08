import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { GOAL_SPECS, ZONE_META, goalProgress, type Goal } from '@/entities/program';
import { accents, fonts, meterColors, palette, type Accent } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { formatNumber } from '../model/format';
import { Card, DeltaChip, useGrowIn } from './card';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RING = 58;
const STROKE = 7;

const LINE_KEY = {
  pain_free_mornings: 'pages.week.line.pain_free_mornings',
  arch_hold: 'pages.week.line.arch_hold',
  calf_raises: 'pages.week.line.calf_raises',
  balance: 'pages.week.line.balance',
  symmetry: 'pages.week.line.symmetry',
} as const satisfies Record<Goal['type'], Key>;

/** The same accent each goal's test wears in the card above. */
const GOAL_TONE = {
  pain_free_mornings: 'orange',
  arch_hold: ZONE_META.arch.accent,
  calf_raises: ZONE_META.calf.accent,
  balance: ZONE_META.balance.accent,
  symmetry: ZONE_META.symmetry.accent,
} as const;

/**
 * Each goal as a ring that closes as it nears its target, in its metric's own
 * colour at every value. The percentage sits inside; the figures beside it.
 */
export function GoalsCard({ goals }: { goals: readonly Goal[] }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Card title={t('progress.goalsTitle')}>
      {goals.length === 0 ? (
        <Text style={[styles.empty, { color: meter.caption }]}>{t('progress.goalsEmpty')}</Text>
      ) : (
        <View style={styles.list}>
          {goals.map((goal, i) => (
            <GoalRow key={goal.type} goal={goal} first={i === 0} />
          ))}
        </View>
      )}
    </Card>
  );
}

function GoalRow({ goal, first }: { goal: Goal; first: boolean }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const colors = palette[scheme];
  const t = useT();
  const language = useLanguage();
  const accent = accents[scheme][GOAL_TONE[goal.type]];
  const reached = goal.status !== 'active';
  const measured = goal.current != null;
  const pct = Math.round(goalProgress(goal) * 100);
  const name = t(`pages.week.goal.${goal.type}`);
  const digits = goal.type === 'pain_free_mornings' ? 1 : 0;

  const line = measured
    ? t(LINE_KEY[goal.type], {
        current: formatNumber(goal.current ?? 0, language, digits),
        target: formatNumber(GOAL_SPECS[goal.type].target, language, 0),
      })
    : t('pages.week.lineUnmeasured', { goal: name });

  return (
    <View
      accessible
      accessibilityLabel={`${t('progress.goalA11y', { goal: name, pct })}. ${line}`}
      style={[styles.row, !first && { borderTopColor: meter.divider, borderTopWidth: StyleSheet.hairlineWidth }]}>
      <GoalRing fraction={pct / 100} accent={accent} label={measured ? t('progress.goalPercent', { pct }) : '–'} />
      <View style={styles.copy}>
        <View style={styles.nameRow}>
          <Text style={[styles.name, { color: colors.foreground }]} numberOfLines={1}>
            {name}
          </Text>
          {reached && <DeltaChip label={t('progress.goalReached')} improving />}
        </View>
        <Text style={[styles.line, { color: meter.caption }]} numberOfLines={2}>
          {line}
        </Text>
      </View>
    </View>
  );
}

function GoalRing({ fraction, accent, label }: { fraction: number; accent: Accent; label: string }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const grow = useGrowIn(800);
  const r = (RING - STROKE) / 2;
  const circumference = 2 * Math.PI * r;
  const settled = Math.max(0, Math.min(1, fraction));

  const arc = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - settled * grow.value),
  }));

  return (
    <View style={styles.ring}>
      <Svg width={RING} height={RING}>
        <Circle cx={RING / 2} cy={RING / 2} r={r} stroke={accent.track} strokeWidth={STROKE} fill="none" />
        {settled > 0 && (
          <AnimatedCircle
            cx={RING / 2}
            cy={RING / 2}
            r={r}
            stroke={accent.fill}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circumference}
            animatedProps={arc}
            fill="none"
            originX={RING / 2}
            originY={RING / 2}
            rotation={-90}
          />
        )}
      </Svg>
      <View style={styles.hollow} pointerEvents="none">
        <Text style={[styles.pct, { color: meter.ink }]} numberOfLines={1} adjustsFontSizeToFit>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: { ...fonts.medium(15), lineHeight: 21, marginTop: 8 },
  list: { marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 12 },
  ring: { width: RING, height: RING },
  hollow: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 9 },
  pct: { ...fonts.bold(14, -0.3), fontVariant: ['tabular-nums'] },
  copy: { flex: 1, gap: 3 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  name: { ...fonts.semibold(16, -0.2), flexShrink: 1 },
  line: { ...fonts.medium(14), lineHeight: 19 },
});
