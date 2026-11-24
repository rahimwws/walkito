import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { planSessionDone, todayKey, usePlanVersion, useLogsVersion, weekPlan } from '@/entities/program';
import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FactChip } from '@/shared/ui/fact-chip';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { PART_ORDER, partsThisWeek } from '../model/parts';
import { PartIcon } from '@/shared/ui/part-icon';
import { RoundAction } from './round-action';
import { TodayCard } from './today-card';

/** The week's sessions: done ones, and the days that have one. */
function useWeekCount() {
  usePlanVersion();
  useLogsVersion();
  const today = todayKey();
  const days = weekPlan().days;
  const finished = (date: string) => date <= today && planSessionDone(date);
  // A day already done counts even where the plan has since rested it.
  const planned = days.filter((day) => day.type !== 'rest' || finished(day.date)).length;
  const done = days.filter((day) => finished(day.date)).length;
  return { days, today, finished, planned, done };
}

const RING = 72;
const RING_STROKE = 7;

/** A number in a ring, BitePal's score ring (#100, #102). */
function Ring({ done, total }: { done: number; total: number }) {
  const r = (RING - RING_STROKE) / 2;
  const c = 2 * Math.PI * r;
  const share = total > 0 ? Math.min(1, done / total) : 0;
  return (
    <View style={styles.ring}>
      <Svg width={RING} height={RING} style={StyleSheet.absoluteFill}>
        <Circle cx={RING / 2} cy={RING / 2} r={r} stroke={colors.surface2} strokeWidth={RING_STROKE} fill="none" />
        {share > 0 && (
          <Circle
            cx={RING / 2}
            cy={RING / 2}
            r={r}
            stroke={colors.accent}
            strokeWidth={RING_STROKE}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c * (1 - share)}
            transform={`rotate(-90 ${RING / 2} ${RING / 2})`}
          />
        )}
      </Svg>
      <Text style={styles.ringText} maxFontSizeMultiplier={1.2}>
        {done}
      </Text>
    </View>
  );
}

/**
 * "Your week" as BitePal's nutrition score card (#102): a word for where the
 * week stands, the sessions done in a ring, a tile per part of the foot with
 * the moves done for it this week, and their sum as a chip. The word says how
 * far along, never how good.
 */
export function YourWeekCard() {
  const t = useT();
  const { planned, done } = useWeekCount();
  const counts = partsThisWeek();
  const moves = PART_ORDER.reduce((sum, part) => sum + counts[part], 0);
  const word =
    done === 0 ? t('home.today.weekWord.start') : done >= planned ? t('home.today.weekWord.done') : t('home.today.weekWord.going');
  const large = useWindowDimensions().fontScale >= 1.35;

  return (
    <TodayCard style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <Text style={styles.label}>{t('home.today.yourWeek')}</Text>
          <Text style={styles.word} accessibilityRole="header">
            {word}
          </Text>
        </View>
        <View accessible accessibilityLabel={t('home.today.weekSessions', { done, count: Math.max(planned, 1) })}>
          <Ring done={done} total={planned} />
        </View>
      </View>
      <View style={styles.tiles}>
        {PART_ORDER.map((part) => (
          <View
            key={part}
            style={styles.tile}
            accessible
            accessibilityLabel={t('home.today.partMoves', { part: t(`home.today.part.${part}`), count: counts[part] })}>
            <View style={counts[part] === 0 && styles.tileIdle}>
              <PartIcon part={part} size={46} />
            </View>
            {counts[part] > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText} maxFontSizeMultiplier={1}>
                  {counts[part]}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
      <FactChip icon={Tick02Icon} label={t('quick.moves', { count: moves })} />
    </TodayCard>
  );
}

/**
 * "This week" as BitePal's water card (#20): the sessions done as the big
 * number and a foot per day that fills once its session is done. A rest day
 * stays faint; nothing here is a streak. The sentence the number stands for is
 * what VoiceOver reads.
 */
export function ThisWeekCard({ onOpenPlan }: { onOpenPlan: () => void }) {
  const t = useT();
  const { days, today, finished, planned, done } = useWeekCount();

  return (
    <TodayCard style={styles.card}>
      <View style={styles.head}>
        <View style={styles.headText}>
          <Text style={styles.label}>{t('home.today.thisWeek')}</Text>
          <Text
            style={styles.big}
            maxFontSizeMultiplier={1.7}
            accessibilityLabel={t('home.today.weekSessions', { done, count: Math.max(planned, 1) })}>
            {done}/{planned}
          </Text>
        </View>
        <RoundAction icon={Calendar03Icon} label={t('home.today.weekHint')} onPress={onOpenPlan} />
      </View>
      <View style={styles.feet}>
        {days.map((day) => {
          const isDone = finished(day.date);
          const rest = day.type === 'rest' && !isDone;
          return (
            <View
              key={day.date}
              style={[styles.foot7, isDone && styles.foot7Done, day.date === today && !isDone && styles.foot7Today]}>
              <View style={!isDone && (rest ? styles.footRest : styles.footIdle)}>
                <FluentIcon name="foot" size={24} />
              </View>
            </View>
          );
        })}
      </View>
    </TodayCard>
  );
}

const styles = StyleSheet.create({
  card: { gap: 14 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headLarge: { flexDirection: 'column-reverse' },
  headText: { flexShrink: 1, flexGrow: 1, gap: 2 },
  label: { ...fonts.medium(17), color: colors.text3 },
  word: { ...fonts.heavy(30, -0.6), color: colors.text },
  big: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'] },
  ring: { width: RING, height: RING, alignItems: 'center', justifyContent: 'center' },
  ringText: { ...fonts.heavy(24), color: colors.text, fontVariant: ['tabular-nums'] },
  tiles: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tile: { width: 54, height: 56, justifyContent: 'flex-end' },
  tileIdle: { opacity: 0.45 },
  badge: {
    position: 'absolute',
    top: -6,
    right: -4,
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.bg,
  },
  badgeText: { ...fonts.heavy(17), color: colors.text2, fontVariant: ['tabular-nums'] },
  feet: { flexDirection: 'row', gap: 6 },
  foot7: {
    flex: 1,
    aspectRatio: 0.8,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface2,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  foot7Done: { backgroundColor: colors.accentSoft },
  foot7Today: { borderColor: colors.accent, backgroundColor: colors.surface },
  footIdle: { opacity: 0.35 },
  footRest: { opacity: 0.12 },
});
