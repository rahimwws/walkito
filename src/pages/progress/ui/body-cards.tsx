import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { healthCache, useHealthSignals } from '@/entities/health';
import { addDays, dayNumberFor, painOn, programState, todayKey } from '@/entities/program';
import { accents, fonts, meterColors } from '@/shared/config';
import { useLanguage, useT, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { ReplayMask } from '@/shared/ui/replay-mask';

import { grouped } from '../lib/grouped';
import { PATTERN_LEARN_DAYS, patternsFrom, type Pattern } from '../model/patterns';
import { SHOE_AGES, SHOES_SOON_KM, clearShoes, setShoesAge, shoeKm, shoeState, useShoesSince } from '../model/shoes';
import { Card } from './card';

/** A figure to one decimal place where it has one, in the language's mark. */
function decimal(value: number, language: Language): string {
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return language === 'en' ? text : text.replace('.', ',');
}

const morningPain = (date: string) => painOn(dayNumberFor(programState(), date));

// ── What your days say ────────────────────────────────────────────────────

const PATTERN_ICON: Record<Pattern['id'], FluentName> = {
  'on-feet': 'foot',
  'short-sleep': 'moon',
  workout: 'run',
  'big-steps': 'shoe',
};

/**
 * Patterns in this person's own days: what tends to come before a harder
 * morning. Learning until there are two weeks of mornings to compare; then
 * either what stands out or, honestly, that nothing does.
 */
export function PatternsCard() {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const signals = useHealthSignals();
  const { found, pairedDays } = patternsFrom({
    days: healthCache().days,
    painOn: morningPain,
    nextDate: (date) => addDays(date, 1),
    onFeetThreshold: signals.onFeetThreshold,
  });

  const line = (pattern: Pattern): string => {
    switch (pattern.id) {
      case 'on-feet':
        return t('progress.patterns.onFeet', { limit: decimal(pattern.limit, language) });
      case 'short-sleep':
        return t('progress.patterns.shortSleep', { gap: decimal(pattern.gap, language) });
      case 'workout':
        return pattern.gap > 0
          ? t('progress.patterns.workoutHarder', { gap: decimal(pattern.gap, language) })
          : t('progress.patterns.workoutEasier', { gap: decimal(-pattern.gap, language) });
      case 'big-steps':
        return t('progress.patterns.bigSteps', { gap: decimal(pattern.gap, language) });
    }
  };

  return (
    <ReplayMask>
      <Card title={t('progress.patterns.title')}>
        {found.length > 0 ? (
          <View style={styles.list}>
            {found.map((pattern) => (
              <View key={pattern.id} style={styles.item}>
                <View style={[styles.itemIcon, { backgroundColor: meter.iconTile }]}>
                  <FluentIcon name={PATTERN_ICON[pattern.id]} size={18} />
                </View>
                <Text style={[styles.itemText, { color: meter.ink }]}>{line(pattern)}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={[styles.body, { color: meter.label }]}>
            {pairedDays < PATTERN_LEARN_DAYS
              ? t('progress.patterns.learning', { count: pairedDays, need: PATTERN_LEARN_DAYS })
              : t('progress.patterns.none')}
          </Text>
        )}
        <Text style={[styles.note, { color: meter.caption }]}>{t('progress.patterns.note')}</Text>
      </Card>
    </ReplayMask>
  );
}

// ── How you walk ──────────────────────────────────────────────────────────

const GAIT_DAYS = 14;

/** The last two weeks of step length, oldest first. */
function stepLengths(): (number | null)[] {
  const byDate = new Map(healthCache().days.map((d) => [d.date, d]));
  const today = todayKey();
  return Array.from({ length: GAIT_DAYS }, (_, i) => byDate.get(addDays(today, i - GAIT_DAYS + 1))?.stepLengthCm ?? null);
}

/** Whether the gait card has anything to draw: three days of step length. */
export function hasGaitData(): boolean {
  return stepLengths().filter((v) => v != null).length >= 3;
}

/**
 * Step length over two weeks against the person's usual, said in words, with
 * running form for a runner with a watch. Only once there is something to
 * show: an iPhone measures step length on steady flat walking, so a few days
 * can pass without one.
 */
export function GaitCard() {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const signals = useHealthSignals();
  const values = stepLengths();
  const known = values.filter((v): v is number => v != null);
  if (known.length < 3) return null;

  const baseline = signals.stepLengthBaseline;
  const top = Math.max(...known, baseline ?? 0) * 1.05;
  const bottom = Math.min(...known, baseline ?? Infinity) * 0.85;
  const word =
    signals.stepLengthTrend === 'shorter'
      ? t('progress.gait.shorter')
      : signals.stepLengthTrend === 'longer'
        ? t('progress.gait.longer')
        : signals.stepLengthTrend === 'stable'
          ? t('progress.gait.stable')
          : t('progress.gait.learning');
  const tint = accents[scheme].amber;

  return (
    <ReplayMask>
      <Card
        title={t('progress.gait.title')}
        aside={
          signals.stepLengthWeek != null ? (
            <Text style={[styles.aside, { color: meter.label }]}>
              {t('progress.gait.cm', { value: Math.round(signals.stepLengthWeek) })}
            </Text>
          ) : undefined
        }>
        <View style={styles.bars} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {baseline != null && (
            <View
              style={[
                styles.guide,
                { bottom: ((baseline - bottom) / (top - bottom)) * BARS_H, backgroundColor: meter.track },
              ]}
            />
          )}
          {values.map((value, i) => (
            <View key={i} style={styles.barColumn}>
              {value == null ? (
                <View style={[styles.stub, { backgroundColor: meter.track }]} />
              ) : (
                <View
                  style={[
                    styles.bar,
                    {
                      height: Math.max(4, ((value - bottom) / (top - bottom)) * BARS_H),
                      backgroundColor: i === values.length - 1 ? tint.fill : tint.track,
                    },
                  ]}
                />
              )}
            </View>
          ))}
        </View>
        <Text style={[styles.body, { color: meter.ink }]}>{word}</Text>
        {(signals.runContactMsWeek != null || signals.runStrideMWeek != null) && (
          <View style={[styles.runRow, { borderColor: meter.divider }]}>
            {signals.runContactMsWeek != null && (
              <Text style={[styles.runText, { color: meter.label }]}>
                {t('progress.gait.contact', { value: Math.round(signals.runContactMsWeek) })}
              </Text>
            )}
            {signals.runStrideMWeek != null && (
              <Text style={[styles.runText, { color: meter.label }]}>
                {t('progress.gait.stride', { value: decimal(signals.runStrideMWeek, language) })}
              </Text>
            )}
          </View>
        )}
        <Text style={[styles.note, { color: meter.caption }]}>{t('progress.gait.note')}</Text>
      </Card>
    </ReplayMask>
  );
}

// ── Your shoes ────────────────────────────────────────────────────────────

/**
 * The current pair's kilometres, from Health's walking and running distance
 * since the person said they got them. Asked once, changeable any time.
 */
export function ShoesCard() {
  const t = useT();
  const language = useLanguage();
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const since = useShoesSince();
  useHealthSignals();
  const today = todayKey();
  const km = since == null ? null : shoeKm(healthCache().days, since, today);

  if (since == null) {
    return (
      <Card title={t('progress.shoes.title')}>
        <Text style={[styles.body, { color: meter.ink }]}>{t('progress.shoes.ask')}</Text>
        <View style={styles.ages}>
          {SHOE_AGES.map((age) => (
            <Pressable
              key={age}
              accessibilityRole="button"
              onPress={() => {
                Haptics.selectionAsync();
                setShoesAge(age);
              }}
              style={({ pressed }) => [styles.age, { backgroundColor: meter.iconTile }, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.ageText, { color: meter.ink }]}>
                {age === 0
                  ? t('progress.shoes.thisMonth')
                  : age === 12
                    ? t('progress.shoes.yearPlus')
                    : t('progress.shoes.monthsAgo', { count: age })}
              </Text>
            </Pressable>
          ))}
        </View>
      </Card>
    );
  }

  const state = km == null ? null : shoeState(km);
  return (
    <Card
      title={t('progress.shoes.title')}
      aside={
        <Pressable accessibilityRole="button" onPress={clearShoes} hitSlop={8}>
          <Text style={[styles.aside, { color: accents[scheme].violet.fill }]}>{t('progress.shoes.change')}</Text>
        </Pressable>
      }>
      {km == null ? (
        <Text style={[styles.body, { color: meter.label }]}>
          {Platform.OS === 'android' ? t('progress.shoes.noDistanceAndroid') : t('progress.shoes.noDistanceIos')}
        </Text>
      ) : (
        <>
          <View style={styles.kmRow}>
            <FluentIcon name="shoe" size={28} />
            <Text style={[styles.km, { color: meter.ink }]}>
              {t('progress.shoes.km', { value: grouped(Math.round(km), language) })}
            </Text>
          </View>
          <Text style={[styles.body, { color: meter.label }]}>
            {state === 'due'
              ? t('progress.shoes.due')
              : state === 'soon'
                ? t('progress.shoes.soon')
                : t('progress.shoes.fresh', { value: Math.round(Math.max(0, SHOES_SOON_KM - km)) })}
          </Text>
        </>
      )}
    </Card>
  );
}

const BARS_H = 56;

const styles = StyleSheet.create({
  list: { gap: 10, marginTop: 12 },
  item: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  itemIcon: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  itemText: { ...fonts.semibold(15), lineHeight: 20, flex: 1 },
  body: { ...fonts.medium(15), lineHeight: 21, marginTop: 10 },
  note: { ...fonts.medium(12), lineHeight: 16, marginTop: 12 },
  aside: fonts.semibold(14),
  bars: { flexDirection: 'row', alignItems: 'flex-end', height: BARS_H, marginTop: 14, gap: 4 },
  barColumn: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  bar: { width: '100%', maxWidth: 16, borderRadius: 4 },
  stub: { width: 5, height: 4, borderRadius: 2 },
  guide: { position: 'absolute', left: 0, right: 0, height: 1 },
  runRow: { flexDirection: 'row', gap: 16, marginTop: 10, paddingTop: 10, borderTopWidth: StyleSheet.hairlineWidth },
  runText: fonts.semibold(13),
  ages: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 },
  age: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 14 },
  ageText: fonts.semibold(14),
  kmRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 },
  km: fonts.heavy(30, -0.8),
});

