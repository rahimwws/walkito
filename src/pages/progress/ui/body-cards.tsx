import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import * as Haptics from 'expo-haptics';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { healthCache, useHealthSignals } from '@/entities/health';
import { addDays, dayNumberFor, painOn, programState, todayKey } from '@/entities/program';
import { bitepal, bodyColors, colors, fonts, target } from '@/shared/config';
import { useLanguage, useT, type Language } from '@/shared/lib/i18n';
import { type FluentName } from '@/shared/ui/fluent-icon';
import { ReplayMask } from '@/shared/ui/replay-mask';
import { BigNumber, CardLabel, RoundButton } from '@/widgets/session-player';

import { grouped } from '../lib/grouped';
import { PATTERN_LEARN_DAYS, patternsFrom, type Pattern } from '../model/patterns';
import { SHOE_AGES, SHOES_SOON_KM, clearShoes, setShoesAge, shoeKm, shoeState, useShoesSince } from '../model/shoes';
import { CardFoot, CardHead, IconDisc, NUMBER_SCALE, ProgressCard } from './kit';

/** A figure to one decimal place where it has one, in the language's mark. */
function decimal(value: number, language: Language): string {
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return language === 'en' ? text : text.replace('.', ',');
}

const morningPain = (date: string) => painOn(dayNumberFor(programState(), date));

// ── What your days say ────────────────────────────────────────────────────

const PATTERN_ICON: Record<Pattern['id'], { art: FluentName; tone: string }> = {
  'on-feet': { art: 'foot', tone: bodyColors.calf },
  'short-sleep': { art: 'moon', tone: bodyColors.ankle },
  workout: { art: 'run', tone: bodyColors.heel },
  'big-steps': { art: 'shoe', tone: bodyColors.arch },
};

/**
 * Patterns in this person's own days, as rows with BitePal's round colourful
 * icons: what tends to come before a harder morning. Learning until there are
 * two weeks of mornings to compare; then what stands out or, honestly, that
 * nothing does.
 */
export function PatternsCard() {
  const t = useT();
  const language = useLanguage();
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
      <ProgressCard>
        <CardLabel>{t('progress.patterns.title')}</CardLabel>
        {found.length > 0 ? (
          found.map((pattern) => (
            <View key={pattern.id} style={styles.item}>
              <IconDisc name={PATTERN_ICON[pattern.id].art} tone={PATTERN_ICON[pattern.id].tone} size={48} />
              <Text style={styles.itemText}>{line(pattern)}</Text>
            </View>
          ))
        ) : (
          <View style={styles.item}>
            <IconDisc name="bulb" tone={bodyColors.toes} size={48} />
            <Text style={styles.itemText}>
              {pairedDays < PATTERN_LEARN_DAYS
                ? t('progress.patterns.learning', { count: pairedDays, need: PATTERN_LEARN_DAYS })
                : t('progress.patterns.none')}
            </Text>
          </View>
        )}
        <CardFoot>{t('progress.patterns.note')}</CardFoot>
      </ProgressCard>
    </ReplayMask>
  );
}

// ── How you walk ──────────────────────────────────────────────────────────

const GAIT_DAYS = 14;
const GAIT_BARS = 56;

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
 * Step length over two weeks against the person's usual: this week's step as
 * the big number, two weeks of thin bars with the usual as a line, said in
 * words, and running form for a runner with a watch.
 */
export function GaitCard() {
  const t = useT();
  const language = useLanguage();
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
  const tone = bodyColors.toes;

  return (
    <ReplayMask>
      <ProgressCard>
        <CardHead aside={<IconDisc name="run" tone={tone} size={64} />}>
          <CardLabel>{t('progress.gait.title')}</CardLabel>
          {signals.stepLengthWeek != null && (
            <BigNumber value={t('progress.gait.cm', { value: Math.round(signals.stepLengthWeek) })} size={36} maxScale={NUMBER_SCALE} />
          )}
        </CardHead>
        <View style={styles.bars} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {baseline != null && (
            <View style={[styles.guide, { bottom: ((baseline - bottom) / (top - bottom)) * GAIT_BARS }]} />
          )}
          {values.map((value, i) => (
            <View key={i} style={styles.barColumn}>
              <View
                style={[
                  styles.bar,
                  value == null
                    ? styles.stub
                    : {
                        height: Math.max(4, ((value - bottom) / (top - bottom)) * GAIT_BARS),
                        backgroundColor: i === values.length - 1 ? tone : colors.text3,
                        opacity: i === values.length - 1 ? 1 : 0.55,
                      },
                ]}
              />
            </View>
          ))}
        </View>
        <Text style={styles.sentence}>{word}</Text>
        {(signals.runContactMsWeek != null || signals.runStrideMWeek != null) && (
          <View style={styles.run}>
            {signals.runContactMsWeek != null && (
              <Text style={styles.runText}>{t('progress.gait.contact', { value: Math.round(signals.runContactMsWeek) })}</Text>
            )}
            {signals.runStrideMWeek != null && (
              <Text style={styles.runText}>{t('progress.gait.stride', { value: decimal(signals.runStrideMWeek, language) })}</Text>
            )}
          </View>
        )}
        <CardFoot>{t('progress.gait.note')}</CardFoot>
      </ProgressCard>
    </ReplayMask>
  );
}

// ── Your shoes ────────────────────────────────────────────────────────────

/**
 * The current pair's kilometres, from Health's walking and running distance
 * since the person said they got them: the distance as the big number with
 * the round pencil that asks again. Asked once, changeable any time.
 */
export function ShoesCard() {
  const t = useT();
  const language = useLanguage();
  const since = useShoesSince();
  useHealthSignals();
  const km = since == null ? null : shoeKm(healthCache().days, since, todayKey());

  if (since == null) {
    return (
      <ProgressCard>
        <CardHead aside={<IconDisc name="shoe" tone={bodyColors.heel} size={64} />}>
          <CardLabel>{t('progress.shoes.title')}</CardLabel>
          <Text style={styles.question}>{t('progress.shoes.ask')}</Text>
        </CardHead>
        <View style={styles.ages}>
          {SHOE_AGES.map((age) => (
            <Pressable
              key={age}
              accessibilityRole="button"
              onPress={() => {
                void Haptics.selectionAsync();
                setShoesAge(age);
              }}
              style={({ pressed }) => [styles.age, pressed && styles.pressed]}>
              <Text style={styles.ageText}>
                {age === 0
                  ? t('progress.shoes.thisMonth')
                  : age === 12
                    ? t('progress.shoes.yearPlus')
                    : t('progress.shoes.monthsAgo', { count: age })}
              </Text>
            </Pressable>
          ))}
        </View>
      </ProgressCard>
    );
  }

  const state = km == null ? null : shoeState(km);
  return (
    <ProgressCard>
      <CardHead
        aside={<RoundButton icon={PencilEdit02Icon} label={t('progress.shoes.change')} onPress={clearShoes} size={64} tone="well" />}>
        <CardLabel>{t('progress.shoes.title')}</CardLabel>
        {km != null && (
          <BigNumber value={t('progress.shoes.km', { value: grouped(Math.round(km), language) })} size={40} maxScale={NUMBER_SCALE} />
        )}
      </CardHead>
      <Text style={styles.sentence}>
        {km == null
          ? Platform.OS === 'android'
            ? t('progress.shoes.noDistanceAndroid')
            : t('progress.shoes.noDistanceIos')
          : state === 'due'
            ? t('progress.shoes.due')
            : state === 'soon'
              ? t('progress.shoes.soon')
              : t('progress.shoes.fresh', { value: Math.round(Math.max(0, SHOES_SOON_KM - km)) })}
      </Text>
    </ProgressCard>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  itemText: { ...fonts.medium(19), color: colors.text, flex: 1 },
  bars: { flexDirection: 'row', alignItems: 'flex-end', height: GAIT_BARS, gap: 4 },
  barColumn: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  bar: { width: '100%', maxWidth: 10, borderRadius: 5 },
  stub: { height: 4, backgroundColor: bitepal.track },
  guide: { position: 'absolute', left: 0, right: 0, height: 1.5, backgroundColor: colors.separator },
  sentence: { ...fonts.medium(19), color: colors.text },
  run: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  runText: { ...fonts.semibold(17), color: colors.text2 },
  question: { ...fonts.bold(22, -0.3), color: colors.text, marginTop: 4 },
  ages: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  age: {
    minHeight: target.min,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  ageText: { ...fonts.semibold(17), color: colors.text },
  pressed: { opacity: 0.6 },
});
