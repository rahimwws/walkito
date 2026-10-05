import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The two screens before the first paywall.
 *
 * The first says how this person's plan starts — today's test, the gentle
 * first week, the new week every Sunday, the first progress check on its
 * date — and the second how a day works. Then the plans. Each fact is the
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
  /** Minutes the first test takes. */
  testMinutes: number;
  minutes: number;
  daysPerWeek: number;
  /** The first progress check, epoch ms. */
  checkOn: number;
};

/** Step one: how the plan starts. */
export function IntroPlan({ name, testMinutes, minutes, daysPerWeek, checkOn }: IntroPlanProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const date = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(checkOn));

  const rows = [
    {
      when: t('offer.introTodayWhen'),
      title: t('offer.introTodayTitle', { count: testMinutes }),
      body: t('offer.introTodayBody'),
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

/** Step two: how a day works, and why the app exists, in the founders' words. */
export function IntroHow() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const cards = [
    { art: MOBILITY, title: t('offer.howCheckinTitle'), body: t('offer.howCheckinBody') },
    { art: STRENGTH, title: t('offer.howSessionTitle'), body: t('offer.howSessionBody') },
    { art: BALANCE, title: t('offer.howTestTitle'), body: t('offer.howTestBody') },
  ];

  return (
    <View style={styles.page}>
      <Animated.Text
        entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground }]}>
        {t('offer.howTitle')}
      </Animated.Text>

      <View style={styles.cards}>
        {cards.map((card, i) => (
          <Animated.View
            key={card.title}
            entering={rise(i + 1)}
            style={[styles.card, { backgroundColor: colors.card }]}>
            <Image source={card.art} style={styles.cardArt} resizeMode="contain" />
            <View style={styles.cardCopy}>
              <Text style={[styles.cardTitle, { color: colors.foreground }]}>{card.title}</Text>
              <Text style={[styles.cardBody, { color: meter.caption }]}>{card.body}</Text>
            </View>
          </Animated.View>
        ))}
      </View>

      <Animated.View entering={rise(4)} style={styles.quote}>
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingLeft: 8,
    paddingRight: 16,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  cardArt: { width: 76, height: 76 },
  cardCopy: { flex: 1, gap: 2 },
  cardTitle: fonts.heavy(16, -0.2),
  cardBody: {
    ...fonts.semibold(14),
    lineHeight: 19,
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
