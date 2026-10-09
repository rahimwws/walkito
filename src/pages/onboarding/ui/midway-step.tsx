import type { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { fonts, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Halfway: the Foot Passport, open.
 *
 * Here because a run of questions with nothing said back reads as a form.
 * Everything so far is on one card, in their own answers, and any of it can
 * be tapped to change: the screen proves it was listening and lets them put
 * it right before the plan is built on it.
 */
export function MidwayStep({ title, children }: { title: string; children: ReactNode }) {
  const colors = palette[useColorScheme()];
  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text
        entering={FadeIn.duration(300).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Animated.Text>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { flexGrow: 1, justifyContent: 'center', paddingBottom: 16, gap: 18 },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33 },
});
