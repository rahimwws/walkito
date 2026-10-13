import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

/** The sections arrive one after another, each rising into place. */
const SECTION_DELAY_MS = 260;
const SECTION_GAP_MS = 380;
const SECTION_MS = 380;

/** When section `i` has landed, from the screen's arrival: the coach nods at
 * each one then. The rise's ease-out has all but finished by four fifths. */
export function whySectionLandsMs(i: number): number {
  return SECTION_DELAY_MS + i * SECTION_GAP_MS + Math.round(SECTION_MS * 0.8);
}

export type WhySection = { head: string; text: string };

/**
 * Why it still hurts: the promise the intro makes ("let's find out why it
 * still hurts"), kept.
 *
 * Three short sections — the pattern, why it lingers, what helps — each a
 * sentence or two assembled from their own answers. It describes a pattern
 * and says so under it; it never names what this person has.
 */
export function WhyStep({
  title,
  sections,
  footer,
  speakerInset = 0,
}: {
  title: string;
  sections: readonly WhySection[];
  footer: string;
  /** Room the coach takes in the top-right corner, kept clear by the title. */
  speakerInset?: number;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const tint = accents[scheme].violet.fill;

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text
        entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
        style={[styles.title, { color: colors.foreground, paddingRight: speakerInset }]}>
        {title}
      </Animated.Text>
      {sections.map((section, i) => (
        <Animated.View
          key={section.head}
          entering={FadeInDown.delay(SECTION_DELAY_MS + i * SECTION_GAP_MS)
            .duration(SECTION_MS)
            .easing(EASE)
            .reduceMotion(ReduceMotion.System)}>
          {/* Glass on its lip, as every card in the flow. */}
          <Card3D contentStyle={styles.card}>
            <Text style={[styles.head, { color: tint }]}>{section.head}</Text>
            <Text style={[styles.text, { color: colors.foreground }]}>{section.text}</Text>
          </Card3D>
        </Animated.View>
      ))}
      <Animated.View
        entering={FadeIn.delay(SECTION_DELAY_MS + sections.length * SECTION_GAP_MS)
          .duration(320)
          .reduceMotion(ReduceMotion.System)}>
        <Text style={[styles.footer, { color: meter.caption }]}>{footer}</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { gap: 12, paddingBottom: 16 },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33, marginBottom: 8 },
  card: { gap: 6 },
  head: fonts.heavy(13, 0.3),
  text: { ...fonts.medium(16), lineHeight: 22 },
  footer: { ...fonts.medium(13), lineHeight: 18, marginTop: 4 },
});
