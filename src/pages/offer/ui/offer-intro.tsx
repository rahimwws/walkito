import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { readableOn } from '@/shared/lib/color';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D, cardColours } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { FootCheckResult } from './foot-check-result';
import { IntroRail, type IntroRailStep } from './intro-rail';

/**
 * The screen before the first paywall's plans, for somebody they offer no
 * free week: how this person's plan starts — their own numbers across the
 * top, her Foot Check, tomorrow morning's stretch, the gentle first week, the
 * first progress check on its date. Then the plans. Each fact is the plan's
 * own: the plan is open-ended, so nothing here names a length or an end.
 *
 * Drawn in the onboarding's 3D kit, solid rather than glass. No mascot: the
 * paywall shows her feet and her answers, not a cartoon. The second screen
 * that used to follow (how a day works, over a picture of Home) is gone; the
 * plans come next.
 */

/** The Foot Passport's emoji. */
const PASSPORT_ART = 44;

const STAGGER_MS = 80;

const rise = (i: number) =>
  FadeInDown.delay(STAGGER_MS * i)
    .duration(360)
    .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
    .reduceMotion(ReduceMotion.System);

/**
 * Two segments across the top, filled up to the step on screen. A segment
 * already passed is a way back to it.
 */
export function StepBar({
  step,
  total = 2,
  onSelect,
}: {
  step: number;
  total?: number;
  onSelect?: (step: number) => void;
}) {
  const scheme = useColorScheme();
  const t = useT();
  const done = palette[scheme].foreground;
  const todo = meterColors[scheme].track;
  return (
    <View accessibilityRole="progressbar" accessibilityLabel={t('offer.stepA11y', { step, total })} style={styles.bar}>
      {Array.from({ length: total }, (_, i) => {
        const target = i + 1;
        const back = onSelect != null && target < step;
        return (
          <Pressable
            key={i}
            disabled={!back}
            accessibilityRole="button"
            accessibilityLabel={t('offer.stepA11y', { step: target, total })}
            onPress={() => onSelect?.(target)}
            hitSlop={{ top: 14, bottom: 14 }}
            style={styles.segmentHit}>
            <View style={[styles.segment, { backgroundColor: i < step ? done : todo }]} />
          </Pressable>
        );
      })}
    </View>
  );
}

/**
 * The button at the foot of steps one and two: the onboarding's own call to
 * action, the filled violet 3D button at `xl`, in a fixed dock.
 */
export function IntroNext({ onPress }: { onPress: () => void }) {
  const t = useT();
  return <Button3D label={t('offer.next')} onPress={onPress} size="xl" docked />;
}

export type IntroPlanProps = {
  /** First name, or empty. */
  name: string;
  /** Their own numbers, across the top: where, this morning, how long. */
  strip: readonly string[];
  /** What they came for, in their words from onboarding. */
  why: string | null;
  minutes: number;
  daysPerWeek: number;
  /** The first progress check, epoch ms. */
  checkOn: number;
};

/** Step one: how the plan starts. */
export function IntroPlan({ name, strip, why, minutes, checkOn }: IntroPlanProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const language = useLanguage();
  const date = new Intl.DateTimeFormat(language, { month: 'long', day: 'numeric' }).format(new Date(checkOn));

  // Short on purpose: when, what, and a few words. The detail belongs to the
  // plan itself, not to the screen that sells it. The emoji are the app's
  // own for each: the morning stretch's sunrise, the herb of a settling,
  // recovery week, and the ruler every test is measured with.
  const steps: IntroRailStep[] = [
    {
      art: 'morning',
      tone: 'orange',
      when: t('offer.tomorrowWhen'),
      title: t('quick.morning.title'),
      body: t('offer.tomorrowBody'),
    },
    {
      art: 'relief',
      tone: 'teal',
      when: t('offer.introWeekWhen'),
      title: t('offer.introWeekTitle'),
      body: t('offer.weekBody', { minutes }),
    },
    { art: 'test', tone: 'amber', when: date, title: t('offer.introCheckTitle'), body: t('offer.checkBody') },
  ];

  return (
    <View style={styles.page}>
      <Animated.View entering={FadeIn.delay(60).duration(320).reduceMotion(ReduceMotion.System)}>
        <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
          {name !== '' ? t('offer.introTitleNamed', { name }) : t('offer.introTitle')}
        </Text>
      </Animated.View>

      {why != null && (
        <Animated.View
          entering={FadeIn.delay(120).duration(320).reduceMotion(ReduceMotion.System)}
          style={[styles.why, { borderLeftColor: accents[scheme].violet.fill }]}>
          <Text style={[styles.quoteWhy, { color: colors.foreground }]}>{t('offer.introWhy', { why })}</Text>
        </Animated.View>
      )}

      {/* The passport they built in onboarding: what the plan is for, before
          anything about the plan. */}
      {strip.length > 0 && <Passport strip={strip} />}

      {/* Her own Foot Check, read back: what she saw, not a count of it. */}
      <Animated.View entering={rise(1)}>
        <FootCheckResult />
      </Animated.View>

      <Animated.View entering={rise(2)}>
        <IntroRail title={t('offer.goldPlan')} steps={steps} />
      </Animated.View>
    </View>
  );
}

/**
 * The Foot Passport, as a raised violet card: its name, their own numbers as
 * chips, and the foot. Masked from recordings: it shows where it hurts and
 * this morning's score.
 */
function Passport({ strip }: { strip: readonly string[] }) {
  const scheme = useColorScheme();
  const t = useT();
  const ink = readableOn(accents[scheme].violet.fill, cardColours(scheme, 'violet').face);
  return (
    <Animated.View {...REPLAY_MASK} entering={FadeIn.delay(160).duration(320).reduceMotion(ReduceMotion.System)}>
      <Card3D material="solid" tone="violet" padding={14} contentStyle={styles.passport}>
        <View style={styles.passportCopy}>
          <Text style={[styles.passportEyebrow, { color: ink }]} numberOfLines={1}>
            {t('onboarding.passport.title')}
          </Text>
          <View style={styles.passportChips}>
            {strip.map((item, i) => (
              <Chip3D key={i} label={item} accent="violet" style={styles.passportChip} />
            ))}
          </View>
        </View>
        <FluentIcon name="foot" size={PASSPORT_ART} />
      </Card3D>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    gap: 6,
  },
  segmentHit: { flex: 1, paddingVertical: 4 },
  segment: {
    height: 4,
    borderRadius: 2,
  },
  page: {
    gap: 20,
  },
  title: {
    ...fonts.heavy(28, -0.7),
    lineHeight: 32,
  },
  why: {
    marginTop: -6,
    borderLeftWidth: 3,
    paddingLeft: 12,
    paddingVertical: 2,
  },
  quoteWhy: { ...fonts.semibold(17, -0.2), lineHeight: 23 },
  passport: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  passportCopy: { flex: 1, gap: 8 },
  passportEyebrow: { ...fonts.heavy(11, 1.4), textTransform: 'uppercase' },
  passportChips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  passportChip: { maxWidth: '100%' },
});
