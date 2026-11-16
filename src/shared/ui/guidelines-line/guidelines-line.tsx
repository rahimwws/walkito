import CheckmarkBadge01Icon from '@hugeicons/core-free-icons/CheckmarkBadge01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { fonts, meterColors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/** One quiet line with a badge: "Exercises built on physical therapy guidelines". */
export function GuidelinesLine({ color, style }: { color?: string; style?: StyleProp<ViewStyle> }) {
  const t = useT();
  const scheme = useColorScheme();
  const tint = color ?? meterColors[scheme].caption;
  return (
    <View style={[styles.line, style]}>
      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={16} color={tint} strokeWidth={2} />
      <Text style={[styles.text, { color: tint }]} numberOfLines={2}>
        {t('trust.guidelines')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  text: { ...fonts.semibold(14), flexShrink: 1, textAlign: 'center' },
});
