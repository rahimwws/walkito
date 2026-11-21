import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { PassportFirstStamp } from './foot-passport';

/** The stamp's width: most of a narrow phone, never a poster on a wide one. */
const STAMP_MIN = 200;
const STAMP_MAX = 250;
const STAMP_SHARE = 0.62;

export type MidwayStepProps = {
  title: string;
  /** Printed on the stamp: `onboarding.coach.midway`, the name already in. */
  line: string;
  /** The facts so far (`PassportCard`), under the stamp. */
  children: ReactNode;
};

/**
 * Halfway: the Foot Passport, open on its first stamp.
 *
 * Here because a run of questions with nothing said back reads as a form. The
 * stamp marks the halfway point ("Halfway there" and No. 001), and under it
 * is everything so far, in their own answers, any of it a tap away from being
 * changed: the screen proves it was listening and lets them put it right
 * before the plan is built on it.
 */
export function MidwayStep({ title, line, children }: MidwayStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { width } = useWindowDimensions();
  const stampWidth = Math.round(Math.min(Math.max(width * STAMP_SHARE, STAMP_MIN), STAMP_MAX));

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text
        entering={FadeIn.duration(300).reduceMotion(ReduceMotion.System)}
        accessibilityRole="header"
        style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Animated.Text>
      <PassportFirstStamp
        width={stampWidth}
        title={line}
        number={1}
      />
      <Text style={[styles.firstStamp, { color: meter.label }]}>{t('onboarding.passport.firstStamp')}</Text>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingTop: 8, paddingBottom: 16, gap: 16 },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33 },
  /** Under the stamp, as the line under a stamp in an album is. */
  firstStamp: { ...fonts.bold(15, -0.1), textAlign: 'center', marginTop: -4 },
});
