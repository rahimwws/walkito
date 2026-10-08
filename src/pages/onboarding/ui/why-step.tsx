import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

export type WhySection = { head: string; text: string };

/**
 * Why it still hurts: the promise the intro makes ("let's find out why it
 * still hurts"), kept.
 *
 * Three short sections — the pattern, why it lingers, what helps — each a
 * sentence or two assembled from their own answers. It describes a pattern
 * and says so under it; it never names what this person has.
 */
export function WhyStep({ title, sections, footer }: { title: string; sections: readonly WhySection[]; footer: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const tint = accents[scheme].violet.fill;

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text
        entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground }]}>
        {title}
      </Animated.Text>
      {sections.map((section, i) => (
        <Animated.View
          key={section.head}
          entering={FadeInDown.delay(260 + i * 380).duration(380).easing(EASE).reduceMotion(ReduceMotion.System)}
          style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.head, { color: tint }]}>{section.head}</Text>
          <Text style={[styles.text, { color: colors.foreground }]}>{section.text}</Text>
        </Animated.View>
      ))}
      <Animated.View entering={FadeIn.delay(260 + sections.length * 380).duration(320).reduceMotion(ReduceMotion.System)}>
        <Text style={[styles.footer, { color: meter.caption }]}>{footer}</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { gap: 12, paddingBottom: 16 },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33, marginBottom: 8 },
  card: { borderRadius: 20, borderCurve: 'continuous', padding: 16, gap: 6 },
  head: fonts.heavy(13, 0.3),
  text: { ...fonts.medium(16), lineHeight: 22 },
  footer: { ...fonts.medium(13), lineHeight: 18, marginTop: 4 },
});
