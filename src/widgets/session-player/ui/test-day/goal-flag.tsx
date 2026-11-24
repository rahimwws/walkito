import Flag02Icon from '@hugeicons/core-free-icons/Flag02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { ink } from '../player/kit';

/** A test's goal at the end of its bar: a flag and the figure, "30 s" or "25". */
export function GoalFlag({ target, seconds }: { target: number; seconds: boolean }) {
  const t = useT();
  return (
    <View style={styles.flag} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <HugeiconsIcon icon={Flag02Icon} size={18} color={ink.grey} strokeWidth={2.2} />
      <Text style={styles.text} maxFontSizeMultiplier={1.4}>
        {seconds ? t('testday.results.valueSeconds', { n: target }) : target}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flag: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  text: { ...fonts.bold(17), color: ink.grey, fontVariant: ['tabular-nums'] },
});
