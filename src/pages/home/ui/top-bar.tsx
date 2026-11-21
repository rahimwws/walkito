import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useProfileName } from '@/entities/profile';
import { todayKey, usePlanVersion, useProgramState, weekIndexFor } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useProgram } from '@/shared/lib/program';

/**
 * Today's top bar (Runna #6): the avatar on the leading edge opens Profile,
 * "Week 2 of 12" on the trailing edge opens the Plan tab.
 */
export function TopBar() {
  const t = useT();
  const router = useRouter();
  const program = useProgram();
  const name = useProfileName();
  usePlanVersion();
  const state = useProgramState();
  const week = weekIndexFor(state.startDate, todayKey());
  const total = state.planLength / 7;
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <View style={styles.bar}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('home.today.profile')}
        hitSlop={4}
        onPress={() => {
          void Haptics.selectionAsync();
          router.push('/profile');
        }}
        style={({ pressed }) => [styles.avatar, pressed && styles.pressed]}>
        <Text style={styles.initial} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
          {initial === '' ? 'W' : initial}
        </Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityHint={t('home.today.weekHint')}
        onPress={() => {
          void Haptics.selectionAsync();
          program?.open();
        }}
        style={({ pressed }) => [styles.pill, pressed && styles.pressed]}>
        <Text style={styles.pillText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE} numberOfLines={1}>
          {t('home.today.week', { week: Math.min(week, total), total })}
        </Text>
        <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={colors.text2} strokeWidth={2} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  avatar: {
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: { ...fonts.semibold(20), color: colors.accent },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: target.min,
    paddingLeft: 16,
    paddingRight: 12,
    borderRadius: 999,
    backgroundColor: colors.surface,
    flexShrink: 1,
  },
  pillText: { ...fonts.semibold(17), color: colors.text, flexShrink: 1 },
  pressed: { opacity: 0.6 },
});
