import BrickWallIcon from '@hugeicons/core-free-icons/BrickWallIcon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import SmartPhone01Icon from '@hugeicons/core-free-icons/SmartPhone01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  GOAL_SPECS,
  IN_SESSION_STOP_PAIN,
  RETEST_MINUTES,
  ZONE_META,
  goals,
  logPain,
  painLatestOn,
  painOn,
  retestResults,
  settleOffset,
  todayDayNumber,
} from '@/entities/program';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { GOAL_OF_TEST, TEST_ORDER, goalValuesOf, type TestKind } from '../../model/test-day';
import { TEST_META } from './test-meta';

/** The 0–10 scale every check-in in the app is out of. */
const PAIN_SCALE = Array.from({ length: 11 }, (_, i) => i);

export type TestDayIntroProps = {
  onStart: () => void;
  /** "Test tomorrow": nothing measured, and the host moves the test a day on. */
  onTomorrow: () => void;
};

/**
 * What the next four minutes are, before any of them start.
 *
 * The old test day opened on a twenty-second timer with no word of what was
 * being measured or why, and ended on four numbers to fill in. This says it up
 * front: three tests, what each one reads, where the last test left it against
 * the goal, and what to have ready — so the first thing the clock times is the
 * test, not somebody working out what the test is.
 *
 * When today's check-in has not been answered it is asked here, in the same
 * 0–10 the check-in uses and recorded as the check-in. Two reasons. The test
 * reads the foot, and the foot on a bad day reads low — somebody at a seven is
 * better off testing tomorrow, and this is the one moment to say so. And a
 * test day that finished with Home still asking how the foot was that morning
 * was one of the ways the app disagreed with itself.
 */
export function TestDayIntro({ onStart, onTomorrow }: TestDayIntroProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  // Read once, on arrival. Answering below must not make the question vanish
  // from under the finger that just answered it.
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
      // The last test's figure; a goal restored without its tests still has
      // the figure it was last moved by.
      const now = measured?.[type] ?? current.find((goal) => goal.type === type)?.current ?? null;
      return { kind, now, target: GOAL_SPECS[type].target };
    });
  }, []);

  /** One write per opening: the answer is a check-in, and a double tap must
   * not file it twice. */
  const saved = useRef(false);
  /** One press: Start and Test tomorrow each lead somewhere once. */
  const pressed = useRef(false);
  /** The answer as it stands, for the write on the way out. */
  const scoreRef = useRef(score);
  scoreRef.current = score;
  const save = () => {
    const answer = scoreRef.current;
    if (saved.current || !ask || answer == null) return;
    saved.current = true;
    logPain(day, answer, []);
    // The same step Home takes after a check-in: the morning's answer is
    // what moves the plan back or lets it return.
    settleOffset(day);
  };
  const commit = (then: () => void) => {
    if (pressed.current) return;
    pressed.current = true;
    save();
    then();
  };

  /**
   * An answer is kept however the screen is left — the X, a swipe down, the
   * plan closing under it — not only by the two buttons. The hint under the
   * scale says it counts as today's check-in, and it used to count only if one
   * of them was pressed: answered and closed, Home went on asking. Written as
   * the screen goes rather than on every tap, so a finger that lands on 3 and
   * moves to 5 files one check-in, not two, and the morning figure is the 5.
   */
  useEffect(
    () => () => save(),
    // Once, at unmount. `save` reads everything it needs through refs and the
    // values fixed at mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

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
        <Text style={[styles.eyebrow, { color: meter.label }]}>{t('testday.intro.eyebrow')}</Text>
        <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
          {t('testday.intro.title')}
        </Text>
        <Text style={[styles.body, { color: meter.caption }]}>
          {t('testday.intro.body', { count: RETEST_MINUTES })}
        </Text>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          {rows.map((row, index) => {
            const meta = TEST_META[row.kind];
            const zone = ZONE_META[meta.zone];
            const tone = accents[scheme][zone.accent];
            return (
              <View key={row.kind}>
                {index > 0 && <View style={[styles.divider, { backgroundColor: meter.divider }]} />}
                <View style={styles.test}>
                  <View style={[styles.tile, { backgroundColor: tone.track }]}>
                    <HugeiconsIcon icon={zone.icon} size={22} color={tone.fill} strokeWidth={2} />
                  </View>
                  <View style={styles.testCopy}>
                    <Text style={[styles.testName, { color: colors.foreground }]}>{t(meta.name)}</Text>
                    <Text style={[styles.testMeasures, { color: meter.caption }]}>{t(meta.measures)}</Text>
                    <Text style={[styles.testGoal, { color: meter.label }]}>
                      {goalLine(row.kind, row.now, row.target)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <Text style={[styles.section, { color: meter.label }]}>{t('testday.intro.need')}</Text>
        <View style={[styles.card, styles.needs, { backgroundColor: colors.card }]}>
          {(
            [
              [FootprintsIcon, t('testday.intro.needBarefoot')],
              [BrickWallIcon, t('testday.intro.needWall')],
              [SmartPhone01Icon, t('testday.intro.needPhone')],
            ] as const
          ).map(([icon, label]) => (
            <View key={label} style={styles.need}>
              <HugeiconsIcon icon={icon} size={20} color={colors.foreground} strokeWidth={1.8} />
              <Text style={[styles.needText, { color: colors.foreground }]}>{label}</Text>
            </View>
          ))}
        </View>

        {ask && (
          <View style={[styles.card, styles.checkin, { backgroundColor: colors.card }]}>
            <Text style={[styles.checkinTitle, { color: colors.foreground }]}>{t('testday.intro.checkin')}</Text>
            <Text style={[styles.checkinHint, { color: meter.caption }]}>{t('testday.intro.checkinHint')}</Text>
            <View style={styles.scale} accessibilityRole="radiogroup" accessibilityLabel={t('testday.intro.checkin')}>
              {PAIN_SCALE.map((value) => {
                const selected = value === score;
                return (
                  <Pressable
                    key={value}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    accessibilityLabel={t('testday.intro.painA11y', { score: value })}
                    onPress={() => {
                      Haptics.selectionAsync();
                      setScore(value);
                    }}
                    style={({ pressed }) => [
                      styles.cell,
                      // Selection is ink, as everywhere else. No score is
                      // coloured by how much it hurts.
                      { backgroundColor: selected ? colors.foreground : meter.iconTile },
                      pressed && styles.pressed,
                    ]}>
                    <Text style={[styles.cellText, { color: selected ? colors.background : colors.foreground }]}>
                      {value}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View style={styles.ends}>
              <Text style={[styles.end, { color: meter.caption }]}>{t('testday.intro.painNone')}</Text>
              <Text style={[styles.end, { color: meter.caption }]}>{t('testday.intro.painWorst')}</Text>
            </View>
          </View>
        )}

        {sore && (
          <View style={[styles.card, styles.note, { backgroundColor: meter.iconTile }]} accessibilityLiveRegion="polite">
            <HugeiconsIcon icon={InformationCircleIcon} size={20} color={meter.label} strokeWidth={2} />
            <Text style={[styles.noteText, { color: colors.foreground }]}>{t('testday.intro.sore')}</Text>
          </View>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {sore ? (
          <>
            <PrimaryButton label={t('testday.intro.anyway')} onPress={() => commit(onStart)} />
            <Pressable
              accessibilityRole="button"
              onPress={() => commit(onTomorrow)}
              hitSlop={8}
              style={({ pressed }) => [styles.secondary, pressed && styles.pressed]}>
              <Text style={[styles.secondaryText, { color: colors.foreground }]}>{t('testday.intro.tomorrow')}</Text>
            </Pressable>
          </>
        ) : (
          <PrimaryButton label={t('testday.intro.start')} onPress={() => commit(onStart)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  eyebrow: fonts.bold(13, 0.4),
  title: {
    ...fonts.heavy(32, -0.8),
    lineHeight: 38,
    marginTop: 4,
  },
  body: {
    ...fonts.medium(16),
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 20,
  },
  card: {
    borderRadius: 24,
    borderCurve: 'continuous',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 60,
  },
  test: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    paddingVertical: 12,
  },
  tile: {
    width: 46,
    height: 46,
    borderRadius: 15,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testCopy: {
    flex: 1,
    gap: 2,
  },
  testName: fonts.bold(17, -0.2),
  testMeasures: {
    ...fonts.medium(14),
    lineHeight: 19,
  },
  testGoal: {
    ...fonts.semibold(13),
    marginTop: 4,
    fontVariant: ['tabular-nums'],
  },
  section: {
    ...fonts.bold(13, 0.4),
    marginTop: 24,
    marginBottom: 8,
    marginLeft: 4,
  },
  needs: {
    paddingVertical: 14,
    gap: 12,
  },
  need: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  needText: {
    flex: 1,
    ...fonts.medium(15),
  },
  checkin: {
    marginTop: 16,
    paddingVertical: 16,
  },
  checkinTitle: fonts.bold(17, -0.2),
  checkinHint: {
    ...fonts.medium(14),
    marginTop: 2,
  },
  scale: {
    flexDirection: 'row',
    gap: 4,
    marginTop: 14,
  },
  cell: {
    flex: 1,
    height: 40,
    borderRadius: 12,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    ...fonts.bold(15),
    fontVariant: ['tabular-nums'],
  },
  ends: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  end: fonts.medium(12),
  note: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 12,
    paddingVertical: 14,
  },
  noteText: {
    flex: 1,
    ...fonts.medium(15),
    lineHeight: 21,
  },
  pressed: { opacity: 0.6 },
  dock: {
    paddingHorizontal: 20,
    paddingTop: 8,
    gap: 4,
  },
  secondary: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: fonts.semibold(16),
});
