import { StyleSheet, Text, View, type ColorValue } from 'react-native';

import { GOAL_SPECS, goalProgress, type Goal } from '@/entities/program';
import { bodyColors, colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Key } from '@/shared/lib/i18n';
import { CardLabel, Ring } from '@/widgets/session-player';

import { formatNumber } from '../model/format';
import { Chip, ProgressCard, SLOT_SCALE, useLargeText } from './kit';

const LINE_KEY = {
  pain_free_mornings: 'pages.week.line.pain_free_mornings',
  arch_hold: 'pages.week.line.arch_hold',
  calf_raises: 'pages.week.line.calf_raises',
  balance: 'pages.week.line.balance',
  symmetry: 'pages.week.line.symmetry',
} as const satisfies Record<Goal['type'], Key>;

/** The colour of what each goal measures, as its test's card wears it. */
const GOAL_COLOR: Record<Goal['type'], ColorValue> = {
  pain_free_mornings: bodyColors.heel,
  arch_hold: bodyColors.arch,
  calf_raises: bodyColors.calf,
  balance: bodyColors.ankle,
  symmetry: bodyColors.toes,
};

const RING = 76;

/**
 * The goals as BitePal's score rings (#100, #102): each a ring in its
 * metric's colour closing as it nears its target, the share inside, the name
 * and its figures beside it. The colour is the metric's at every value.
 */
export function GoalsCard({ goals }: { goals: readonly Goal[] }) {
  const t = useT();
  return (
    <ProgressCard>
      <CardLabel>{t('progress.goalsTitle')}</CardLabel>
      {goals.length === 0 ? (
        <Text style={styles.empty}>{t('progress.goalsEmpty')}</Text>
      ) : (
        goals.map((goal) => <GoalRow key={goal.type} goal={goal} />)
      )}
    </ProgressCard>
  );
}

function GoalRow({ goal }: { goal: Goal }) {
  const t = useT();
  const language = useLanguage();
  const large = useLargeText();
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
      accessibilityLabel={t('progress.goalA11y', { goal: name, pct }) + '. ' + line}
      style={[styles.row, large && styles.rowStacked]}>
      <Ring size={RING} stroke={7} value={pct / 100} color={GOAL_COLOR[goal.type]}>
        <Text style={styles.pct} maxFontSizeMultiplier={SLOT_SCALE} numberOfLines={1} adjustsFontSizeToFit>
          {measured ? t('progress.goalPercent', { pct }) : '–'}
        </Text>
      </Ring>
      <View style={styles.copy}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.line}>{line}</Text>
        {goal.status !== 'active' && <Chip label={t('progress.goalReached')} improving />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: { ...fonts.medium(19), color: colors.text2 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  rowStacked: { flexDirection: 'column', alignItems: 'flex-start', gap: 8 },
  pct: { ...fonts.heavy(17), color: colors.text, fontVariant: ['tabular-nums'], paddingHorizontal: 10 },
  copy: { flexGrow: 1, flexShrink: 1, gap: 4, alignSelf: 'stretch' },
  name: { ...fonts.bold(19), color: colors.text },
  line: { ...fonts.medium(17), color: colors.text2 },
});
