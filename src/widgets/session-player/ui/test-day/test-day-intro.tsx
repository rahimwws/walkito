import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  GOAL_SPECS,
  IN_SESSION_STOP_PAIN,
  RETEST_MINUTES,
  goals,
  logPain,
  painLatestOn,
  painOn,
  retestResults,
  settleOffset,
  todayDayNumber,
  ZONE_META,
} from '@/entities/program';
import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { TEST_PICTURES } from '../../config/test-pictures';
import { GOAL_OF_TEST, TEST_ORDER, goalValuesOf, type TestKind } from '../../model/test-day';
import { Capsule, SIDE, TITLE_SCALE, TextButton, cardStyle, ink, tint } from '../player/kit';
import { TEST_META } from './test-meta';

const PAIN_SCALE = Array.from({ length: 11 }, (_, i) => i);

export type TestDayIntroProps = {
  onStart: () => void;
  onTomorrow: () => void;
};

/**
 * Before the Foot Check, as Bend's routine screen: the title and how long it
 * takes, the three tests on a white card (each picture in a pastel circle of
 * its zone's accent, its name, where it stands against its goal), what to
 * have ready on a second card, and today's check-in on a third when it has
 * not been answered.
 * A high check-in offers the test tomorrow instead, in words under Start.
 * The check-in is saved on the way out however the screen is left.
 */
export function TestDayIntro({ onStart, onTomorrow }: TestDayIntroProps) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const stacked = useWindowDimensions().fontScale > 1.6;

  const [day] = useState(() => todayDayNumber());
  const [ask] = useState(() => painOn(day) == null);
  const [logged] = useState(() => painLatestOn(day));
  const [score, setScore] = useState<number | null>(null);
  const pain = ask ? score : logged;
  const sore = pain != null && pain >= IN_SESSION_STOP_PAIN;

  const rows = useMemo(() => {
    const results = retestResults();
    const last = results[results.length - 1];
    const measured = last == null ? null : goalValuesOf(last);
    const current = goals();
    return TEST_ORDER.map((kind) => {
      const type = GOAL_OF_TEST[kind];
      const now = measured?.[type] ?? current.find((goal) => goal.type === type)?.current ?? null;
      return { kind, now, target: GOAL_SPECS[type].target };
    });
  }, []);

  const saved = useRef(false);
  const pressed = useRef(false);
  const scoreRef = useRef(score);
  scoreRef.current = score;
  /** Today's check-in, once, only when it was asked here and answered. */
  const save = () => {
    const answer = scoreRef.current;
    if (saved.current || !ask || answer == null) return;
    saved.current = true;
    logPain(day, answer, []);
    settleOffset(day);
  };
  const commit = (then: () => void) => {
    if (pressed.current) return;
    pressed.current = true;
    save();
    then();
  };
  // Closed by the header instead: the answer still counts.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => save(), []);

  const goalLine = (kind: TestKind, now: number | null, target: number): string => {
    if (kind === 'calf') {
      return now == null
        ? t('testday.intro.firstRaises', { count: target })
        : t('testday.intro.nowRaises', { now, count: target });
    }
    return now == null
      ? t('testday.intro.firstSeconds', { goal: target })
      : t('testday.intro.nowSeconds', { now, goal: target });
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
          {t('testday.intro.title')}
        </Text>
        <Text style={styles.lead}>{t('testday.intro.body', { count: RETEST_MINUTES })}</Text>

        <View style={styles.card}>
          {rows.map((row, index) => (
            <View key={row.kind}>
              {index > 0 && <View style={[styles.rule, stacked && styles.ruleFull]} />}
              <View style={[styles.row, stacked && styles.rowStacked]} accessible>
                <View style={[styles.thumb, { backgroundColor: tint(ZONE_META[TEST_META[row.kind].zone].accent) }]}>
                  <Image source={TEST_PICTURES[row.kind].thumb} style={styles.fill} resizeMode="cover" accessibilityIgnoresInvertColors />
                </View>
                <View style={[styles.rowText, stacked && styles.rowTextStacked]}>
                  <Text style={styles.name}>{t(TEST_META[row.kind].name)}</Text>
                  <Text style={styles.goal}>{goalLine(row.kind, row.now, row.target)}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <Text accessibilityRole="header" style={styles.section}>
          {t('testday.intro.need')}
        </Text>
        <View style={[styles.card, styles.padded]}>
          {[t('testday.intro.needBarefoot'), t('testday.intro.needWall'), t('testday.intro.needPhone')].map((line) => (
            <View key={line} style={styles.needRow}>
              <View style={styles.needTick}>
                <HugeiconsIcon icon={Tick02Icon} size={14} color={colors.accent} strokeWidth={2.8} />
              </View>
              <Text style={styles.need}>{line}</Text>
            </View>
          ))}
        </View>

        {ask && (
          <View style={[styles.card, styles.padded, styles.checkin]}>
            <Text accessibilityRole="header" style={styles.checkinTitle}>
              {t('testday.intro.checkin')}
            </Text>
            <Text style={styles.hint}>{t('testday.intro.checkinHint')}</Text>
            <View style={styles.scale} accessibilityRole="radiogroup" accessibilityLabel={t('testday.intro.checkin')}>
              {PAIN_SCALE.map((value) => {
                const on = value === score;
                return (
                  <Pressable
                    key={value}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: on }}
                    accessibilityLabel={t('testday.intro.painA11y', { score: value })}
                    onPress={() => {
                      void Haptics.selectionAsync();
                      setScore(value);
                    }}
                    style={({ pressed: down }) => [styles.cell, on && styles.cellOn, down && styles.pressed]}>
                    <Text style={[styles.cellText, on && styles.cellTextOn]} maxFontSizeMultiplier={1.4}>
                      {value}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={styles.ends}>
              <Text style={styles.end}>{t('testday.intro.painNone')}</Text>
              <Text style={styles.end}>{t('testday.intro.painWorst')}</Text>
            </View>
          </View>
        )}

        {sore && (
          <Text style={styles.sore} accessibilityLiveRegion="polite">
            {t('testday.intro.sore')}
          </Text>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={sore ? t('testday.intro.anyway') : t('testday.intro.start')} onPress={() => commit(onStart)} />
        {sore && <TextButton label={t('testday.intro.tomorrow')} onPress={() => commit(onTomorrow)} />}
      </View>
    </View>
  );
}

const THUMB = 64;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: ink.canvas },
  content: { paddingHorizontal: SIDE - 4, paddingTop: 12, paddingBottom: 24 },
  title: { ...fonts.bold(32, -0.6), color: ink.text },
  lead: { ...fonts.medium(19), color: ink.grey, marginTop: 6, marginBottom: 24 },
  card: cardStyle,
  padded: { padding: 18 },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, marginLeft: 16 + THUMB + 14 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 12, paddingHorizontal: 16 },
  rowStacked: { flexDirection: 'column', alignItems: 'flex-start', paddingVertical: 16 },
  ruleFull: { marginLeft: 0 },
  thumb: { width: THUMB, height: THUMB, borderRadius: THUMB / 2, overflow: 'hidden' },
  fill: { width: '100%', height: '100%' },
  rowText: { flex: 1, gap: 2 },
  rowTextStacked: { flex: 0, alignSelf: 'stretch' },
  name: { ...fonts.semibold(19), color: ink.text },
  goal: { ...fonts.regular(17), color: ink.grey, fontVariant: ['tabular-nums'] },
  section: { ...fonts.bold(22, -0.3), color: ink.text, marginTop: 28, marginBottom: 12 },
  needRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, paddingVertical: 4 },
  needTick: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  need: { flex: 1, ...fonts.regular(19), color: ink.text },
  checkin: { marginTop: 28 },
  checkinTitle: { ...fonts.semibold(19), color: ink.text, marginBottom: 4 },
  hint: { ...fonts.regular(17), color: ink.grey },
  scale: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 14 },
  cell: {
    flexGrow: 1,
    flexBasis: 26,
    minHeight: 44,
    borderRadius: 999,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellOn: { backgroundColor: colors.accent },
  cellText: { ...fonts.semibold(17), color: ink.text, fontVariant: ['tabular-nums'] },
  cellTextOn: { color: colors.onInk },
  ends: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, gap: 12 },
  end: { ...fonts.regular(17), color: ink.grey, flexShrink: 1 },
  sore: { ...fonts.regular(19), color: ink.text, marginTop: 24 },
  pressed: { opacity: 0.55 },
  dock: { paddingHorizontal: SIDE, paddingTop: 8, gap: 4, backgroundColor: ink.canvas },
});
