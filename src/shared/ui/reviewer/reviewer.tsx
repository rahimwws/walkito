import CheckmarkBadge01Icon from '@hugeicons/core-free-icons/CheckmarkBadge01Icon';
import Linkedin01Icon from '@hugeicons/core-free-icons/Linkedin01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Image, Linking, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The physical therapist who reviewed our exercises, as walkito.site/about/
 * shows her. Her name and letters are never translated; everything said about
 * her is in `catalogue/*\/reviewer.ts`, which also says what may not be said.
 * The photograph is the site's, 16 KB of WebP.
 */
export const REVIEWER = {
  name: 'Dr. Carla Shayman, PT, DPT, OCS',
  photo: require('@assets/team/carla-shayman.webp'),
  linkedin: 'https://www.linkedin.com/in/carla-shayman-pt-dpt-ocs-cscs-6170a0197',
} as const;

/** Her photo and "Exercises reviewed by …", on one small card. */
export function ReviewerByline({ style }: { style?: StyleProp<ViewStyle> }) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View style={[styles.byline, { backgroundColor: colors.card, borderColor: meter.track }, style]}>
      <Image source={REVIEWER.photo} style={styles.bylinePhoto} accessibilityIgnoresInvertColors />
      <Text style={[styles.bylineText, { color: colors.foreground }]} numberOfLines={2}>
        {t('reviewer.byline', { name: REVIEWER.name })}
      </Text>
    </View>
  );
}

/** One quiet line with a badge: "Reviewed by a physical therapist", or the
 * paywall's longer form. */
export function ReviewerLine({
  long,
  color,
  style,
}: {
  long?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const t = useT();
  const scheme = useColorScheme();
  const tint = color ?? meterColors[scheme].caption;
  return (
    <View style={[styles.line, style]}>
      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={16} color={tint} strokeWidth={2} />
      <Text style={[styles.lineText, { color: tint }]} numberOfLines={1}>
        {t(long ? 'reviewer.paywall' : 'reviewer.short')}
      </Text>
    </View>
  );
}

/** Settings' "Who reviews our exercises": photo, name with letters, what she
 * is, when she reviewed them, and her LinkedIn. */
export function ReviewerCard({ style }: { style?: StyleProp<ViewStyle> }) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const open = () => {
    Haptics.selectionAsync();
    Linking.openURL(REVIEWER.linkedin).catch(() => {});
  };
  return (
    <View style={style}>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('reviewer.title')}</Text>
      <View style={[styles.card, { backgroundColor: meter.track }]}>
        <View style={styles.head}>
          <Image source={REVIEWER.photo} style={styles.cardPhoto} accessibilityIgnoresInvertColors />
          <Text style={[styles.name, { color: colors.foreground }]}>{REVIEWER.name}</Text>
        </View>
        <Text style={[styles.body, { color: colors.foreground }]}>{t('reviewer.role')}</Text>
        <Text style={[styles.body, { color: meter.caption }]}>{t('reviewer.date')}</Text>
        <Pressable
          accessibilityRole="link"
          onPress={open}
          hitSlop={8}
          style={({ pressed }) => [styles.link, pressed && { opacity: 0.6 }]}>
          <HugeiconsIcon icon={Linkedin01Icon} size={18} color={meter.label} strokeWidth={2} />
          <Text style={[styles.linkText, { color: meter.label }]}>{t('reviewer.linkedin')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  byline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 16,
    borderRadius: 22,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
  },
  bylinePhoto: { width: 40, height: 40, borderRadius: 20 },
  bylineText: { ...fonts.semibold(14, -0.1), lineHeight: 19, flex: 1 },
  line: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  lineText: fonts.semibold(14),
  sectionTitle: { ...fonts.bold(12, 0.1), marginBottom: 8 },
  card: { borderRadius: 22, borderCurve: 'continuous', padding: 16, gap: 8 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 4 },
  cardPhoto: { width: 56, height: 56, borderRadius: 28 },
  name: { ...fonts.bold(17, -0.2), flex: 1 },
  body: fonts.medium(15),
  link: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start', marginTop: 4 },
  linkText: fonts.semibold(15),
});
