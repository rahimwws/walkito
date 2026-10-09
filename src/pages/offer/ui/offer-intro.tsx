import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { ExercisePreview } from '@/widgets/session-player';
import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

/**
 * The two screens before the first paywall.
 *
 * The first says how this person's plan starts — their own numbers across the
 * top, tomorrow morning's stretch, the gentle first week, the new week every
 * Sunday, the first progress check on its date — and the second shows the
 * product and what it rests on. Then the plans. Each fact is the
 * plan's own: the plan is open-ended, so nothing here names a length or an
 * end.
 */

const WAVE = require('@assets/update/mascot-handoff.png');
const MOBILITY = require('@assets/program/mascot-mobility.png');
const STRENGTH = require('@assets/program/mascot-strength.png');
const BALANCE = require('@assets/program/mascot-balance.png');

const STAGGER_MS = 80;

const rise = (i: number) =>
  FadeInDown.delay(STAGGER_MS * i)
    .duration(360)
    .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
    .reduceMotion(ReduceMotion.System);

/** Three segments across the top, filled up to the step on screen. */
export function StepBar({ step, total = 3 }: { step: number; total?: number }) {
  const scheme = useColorScheme();
  const t = useT();
  const done = palette[scheme].foreground;
  const todo = meterColors[scheme].track;
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={t('offer.stepA11y', { step, total })}
      style={styles.bar}>
      {Array.from({ length: total }, (_, i) => (
        <View key={i} style={[styles.segment, { backgroundColor: i < step ? done : todo }]} />
      ))}
    </View>
  );
}

export type IntroPlanProps = {
  /** First name, or empty. */
  name: string;
  /** Their own numbers, across the top: where, this morning, how long. */
  strip: readonly string[];
  /** "Your plan: …" for somebody with a plan code from an AI assistant. */
  planLine?: string | null;
  minutes: number;
  daysPerWeek: number;
  /** The first progress check, epoch ms. */
  checkOn: number;
};

/** Step one: how the plan starts. */
export function IntroPlan({ name, strip, planLine, minutes, daysPerWeek, checkOn }: IntroPlanProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const date = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(checkOn));

  const rows = [
    // Tomorrow morning first: nearer and more real than a test, and the one
    // thing that helps most, before the first step.
    {
      when: t('offer.introTomorrowWhen'),
      title: t('quick.morning.title'),
      body: t('offer.introTomorrowBody'),
    },
    {
      when: t('offer.introWeekWhen'),
      title: t('offer.introWeekTitle'),
      body: t('offer.introWeekBody', { count: daysPerWeek, minutes }),
    },
    {
      when: t('offer.introSundayWhen'),
      title: t('offer.introSundayTitle'),
      body: t('offer.introSundayBody'),
    },
    { when: date, title: t('offer.introCheckTitle'), body: t('offer.introCheckBody') },
  ];

  return (
    <View style={styles.page}>
      {strip.length > 0 && (
        <Animated.View
          {...REPLAY_MASK}
          entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
          style={styles.strip}>
          {strip.map((item) => (
            <View key={item} style={[styles.stripChip, { backgroundColor: colors.card }]}>
              <Text style={[styles.stripText, { color: colors.foreground }]}>{item}</Text>
            </View>
          ))}
        </Animated.View>
      )}
      {planLine != null && (
        <Animated.Text
          entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
          style={[styles.planLine, { color: accents[scheme].violet.fill }]}>
          {planLine}
        </Animated.Text>
      )}
      <Animated.View entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)} style={styles.heading}>
        <Image source={WAVE} style={styles.wave} resizeMode="contain" />
        <Text style={[styles.title, styles.headingTitle, { color: colors.foreground }]}>
          {name !== '' ? t('offer.introTitleNamed', { name }) : t('offer.introTitle')}
        </Text>
      </Animated.View>

      <View>
        {rows.map((row, i) => {
          const first = i === 0;
          const last = i === rows.length - 1;
          return (
            <Animated.View key={row.title} entering={rise(i + 1)} style={styles.row}>
              <View style={styles.rail}>
                <View
                  style={
                    first
                      ? [styles.dotNow, { backgroundColor: PRIMARY, shadowColor: PRIMARY }]
                      : [styles.dot, { borderColor: meter.unit, backgroundColor: colors.background }]
                  }
                />
                {!last && <View style={[styles.line, { backgroundColor: meter.track }]} />}
              </View>
              <View style={styles.rowCopy}>
                <Text style={[styles.when, { color: accents[scheme].violet.fill }]}>{row.when}</Text>
                <Text style={[styles.rowTitle, { color: colors.foreground }]}>{row.title}</Text>
                <Text style={[styles.rowBody, { color: meter.caption }]}>{row.body}</Text>
              </View>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

/**
 * Step two: the product itself, playing, and what it rests on.
 *
 * A looping clip of the morning stretch rather than a description of one, two
 * lines on how a day works, and an honest card on the evidence: the moves come
 * from published research and the guideline; the app itself has not been
 * trialled, and it says so. The founders' line stays, under it.
 */
export function IntroHow() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const rows = [
    { art: MOBILITY, title: t('offer.howCheckinShort') },
    { art: STRENGTH, title: t('offer.howSessionShort') },
    { art: BALANCE, title: t('offer.howRetestShort') },
  ];

  return (
    <View style={styles.page}>
      <Animated.View entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}>
        <ExercisePreview exerciseId="fascia_stretch" style={styles.clip} expandable />
      </Animated.View>
      <Animated.Text
        entering={FadeIn.delay(80).duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground }]}>
        {t('offer.howTitleShort')}
      </Animated.Text>

      <View style={styles.cards}>
        {rows.map((row, i) => (
          <Animated.View key={row.title} entering={rise(i + 1)} style={[styles.howRow, { backgroundColor: colors.card }]}>
            <Image source={row.art} style={styles.howArt} resizeMode="contain" />
            <Text style={[styles.cardTitle, styles.cardCopy, { color: colors.foreground }]}>{row.title}</Text>
          </Animated.View>
        ))}
      </View>

      <Animated.View entering={rise(4)} style={[styles.built, { backgroundColor: colors.card }]}>
        <Text style={[styles.when, { color: accents[scheme].violet.fill }]}>{t('offer.builtTitle')}</Text>
        <Text style={[styles.rowBody, { color: colors.foreground }]}>{t('offer.builtBody')}</Text>
      </Animated.View>

      <Animated.View entering={rise(5)} style={styles.quote}>
        <Text style={[styles.quoteText, { color: colors.foreground }]}>{t('offer.howQuote')}</Text>
        <Text style={[styles.quoteBy, { color: meter.caption }]}>{t('offer.howQuoteBy')}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    gap: 6,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  page: {
    gap: 22,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  wave: { width: 78, height: 78 },
  title: {
    ...fonts.heavy(28, -0.7),
    lineHeight: 32,
  },
  headingTitle: { flex: 1 },
  row: {
    flexDirection: 'row',
    gap: 14,
  },
  rail: {
    width: 22,
    alignItems: 'center',
  },
  dotNow: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginTop: 3,
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    marginTop: 4,
  },
  line: {
    flex: 1,
    width: 2,
    marginTop: 4,
  },
  rowCopy: {
    flex: 1,
    gap: 2,
    paddingBottom: 20,
  },
  when: fonts.heavy(13),
  rowTitle: fonts.heavy(17, -0.2),
  rowBody: {
    ...fonts.semibold(14),
    lineHeight: 19,
  },
  cards: { gap: 10 },
  cardCopy: { flex: 1, gap: 2 },
  cardTitle: fonts.heavy(16, -0.2),
  strip: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  stripChip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderCurve: 'continuous',
  },
  stripText: fonts.bold(14),
  planLine: {
    ...fonts.bold(15, -0.2),
    lineHeight: 20,
  },
  clip: { aspectRatio: 16 / 10 },
  howRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
    paddingLeft: 6,
    paddingRight: 16,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  howArt: { width: 52, height: 52 },
  built: {
    gap: 6,
    padding: 16,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  quote: {
    gap: 8,
    paddingHorizontal: 4,
  },
  quoteText: {
    ...fonts.semibold(15),
    lineHeight: 22,
    opacity: 0.85,
  },
  quoteBy: fonts.bold(13),
});
