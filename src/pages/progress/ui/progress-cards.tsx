import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Line, Path } from 'react-native-svg';

import { GOAL_SPECS, goalProgress, type Goal } from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import type { StrengthRow } from '../model/progress-data';

/**
 * The cards of the Progress screen, in the order it reads them: what the tests
 * measured, how mornings are trending, how far each goal has come.
 */

const RADIUS = 28;

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
      {children}
    </View>
  );
}

const CHANGE_KEY = {
  calf: 'progress.calfChange',
  balance: 'progress.balanceChange',
  arch: 'progress.archChange',
} as const satisfies Record<StrengthRow['key'], Key>;

const ONCE_KEY = {
  calf: 'progress.calfOnce',
  balance: 'progress.balanceOnce',
  arch: 'progress.archOnce',
} as const satisfies Record<StrengthRow['key'], Key>;

/** "Calf raises 11 → 18": the first test against the latest. */
export function StrengthCard({ rows }: { rows: readonly StrengthRow[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Card title={t('progress.strengthTitle')}>
      {rows.length === 0 ? (
        <Text style={[styles.body, { color: meter.caption }]}>{t('progress.strengthEmpty')}</Text>
      ) : (
        <>
          {rows.map((row) => (
            <View key={row.key} style={[styles.row, { borderTopColor: meter.divider }]}>
              <Text style={[styles.rowText, { color: colors.foreground }]}>
                {row.to == null
                  ? t(ONCE_KEY[row.key], { value: String(row.from) })
                  : t(CHANGE_KEY[row.key], { from: String(row.from), to: String(row.to) })}
              </Text>
            </View>
          ))}
          <Text style={[styles.caption, { color: meter.caption }]}>
            {rows[0].to == null ? t('progress.strengthOnce') : t('progress.strengthSince')}
          </Text>
        </>
      )}
    </Card>
  );
}

const CHART_HEIGHT = 140;
const PAIN_MAX = 10;

/**
 * Morning pain as a 7-day rolling mean. The daily readings are faint dots
 * behind it; the line is what to watch.
 */
export function PainLineCard({
  daily,
  mean,
}: {
  daily: readonly (number | null)[];
  mean: readonly (number | null)[];
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const [width, setWidth] = useState(0);
  const tone = accents[scheme].violet.fill;
  const drawn = mean.some((value) => value != null);

  const x = (i: number) => (mean.length <= 1 ? width / 2 : (i / (mean.length - 1)) * width);
  const y = (value: number) => CHART_HEIGHT - (value / PAIN_MAX) * CHART_HEIGHT;

  let line = '';
  let pen = false;
  mean.forEach((value, i) => {
    if (value == null) {
      pen = false;
      return;
    }
    line += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(value).toFixed(1)} `;
    pen = true;
  });
  const latest = [...mean].reverse().find((value) => value != null);

  return (
    <Card title={t('progress.painTitle')}>
      {drawn && latest != null && (
        <Text style={[styles.figure, { color: meterColors[scheme].ink }]}>
          {t('progress.painNow', { value: latest.toFixed(1) })}
        </Text>
      )}
      <View style={styles.chart} onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
        {width > 0 && drawn && (
          <Svg width={width} height={CHART_HEIGHT}>
            {[0, 5, 10].map((level) => (
              <Line
                key={level}
                x1={0}
                x2={width}
                y1={y(level)}
                y2={y(level)}
                stroke={meter.divider}
                strokeWidth={1}
              />
            ))}
            {daily.map((value, i) =>
              value == null ? null : (
                <Path
                  key={i}
                  d={`M${x(i)},${y(value)} m-2,0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0`}
                  fill={accents[scheme].violet.track}
                />
              ),
            )}
            {line.length > 0 && (
              <Path d={line} stroke={tone} strokeWidth={3} fill="none" strokeLinejoin="round" strokeLinecap="round" />
            )}
          </Svg>
        )}
        {!drawn && (
          <View style={styles.chartEmpty}>
            <Text style={[styles.body, { color: meter.caption }]}>{t('progress.painEmpty')}</Text>
          </View>
        )}
      </View>
      <Text style={[styles.caption, { color: meter.caption }]}>{t('progress.painCaption')}</Text>
    </Card>
  );
}

const GOAL_KEY = {
  pain_free_mornings: 'pages.week.line.pain_free_mornings',
  arch_hold: 'pages.week.line.arch_hold',
  calf_raises: 'pages.week.line.calf_raises',
  balance: 'pages.week.line.balance',
  symmetry: 'pages.week.line.symmetry',
} as const satisfies Record<Goal['type'], Key>;

const GOAL_TONE = {
  pain_free_mornings: 'violet',
  arch_hold: 'teal',
  calf_raises: 'orange',
  balance: 'blue',
  symmetry: 'amber',
} as const;

/** One bar per goal, each in its metric's own colour. */
export function GoalsCard({ goals }: { goals: readonly Goal[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Card title={t('progress.goalsTitle')}>
      {goals.length === 0 ? (
        <Text style={[styles.body, { color: meter.caption }]}>{t('progress.goalsEmpty')}</Text>
      ) : (
        goals.map((goal) => {
          const tone = accents[scheme][GOAL_TONE[goal.type]];
          const value = goal.current == null ? '–' : String(Math.round(goal.current * 10) / 10);
          return (
            <View key={goal.type} style={styles.goal}>
              <View style={styles.goalHead}>
                <Text style={[styles.goalName, { color: colors.foreground }]}>{t(`pages.week.goal.${goal.type}`)}</Text>
                {goal.status !== 'active' && (
                  <Text style={[styles.goalDone, { color: meter.positive }]}>{t('progress.goalReached')}</Text>
                )}
              </View>
              <Text style={[styles.goalLine, { color: meter.caption }]}>
                {t(GOAL_KEY[goal.type], { current: value, target: String(GOAL_SPECS[goal.type].target) })}
              </Text>
              <View style={[styles.bar, { backgroundColor: tone.track }]}>
                <View style={[styles.fill, { backgroundColor: tone.fill, width: `${goalProgress(goal) * 100}%` }]} />
              </View>
            </View>
          );
        })
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: RADIUS, borderCurve: 'continuous', padding: 18, gap: 10 },
  title: fonts.bold(19, -0.4),
  body: { ...fonts.medium(15), lineHeight: 21 },
  caption: { ...fonts.medium(13), lineHeight: 18 },
  row: { borderTopWidth: StyleSheet.hairlineWidth, paddingTop: 10 },
  rowText: fonts.semibold(18, -0.3),
  figure: fonts.heavy(30, -0.8),
  chart: { height: CHART_HEIGHT, justifyContent: 'center' },
  chartEmpty: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12 },
  goal: { gap: 6, marginTop: 4 },
  goalHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  goalName: fonts.semibold(16, -0.2),
  goalDone: fonts.semibold(13),
  goalLine: fonts.medium(14),
  bar: { height: 10, borderRadius: 5, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 5 },
});
