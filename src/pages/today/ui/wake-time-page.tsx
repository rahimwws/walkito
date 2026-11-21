import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scheduleFirstStep, setWakeMinutes, wakeMinutes } from '@/entities/notifications';
import { colors, fonts, space, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { TimePicker } from '@/shared/ui/time-picker';

/**
 * "When do you get up?", a form sheet over Today: her wake time, which is
 * when the first-step routine is ready (and its reminder rings, when
 * notifications are on). Saved as her own answer, which wins over Health.
 */
export function WakeTimePage() {
  const t = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [minutes, setMinutes] = useState(() => wakeMinutes());

  const save = () => {
    setWakeMinutes(minutes);
    void scheduleFirstStep(minutes);
    router.back();
  };

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, space.screen) }]}>
      <Text style={styles.title} accessibilityRole="header">
        {t('home.today.firstStep.sheetTitle')}
      </Text>
      <Text style={styles.body}>{t('home.today.firstStep.sheetBody')}</Text>
      <View style={styles.picker}>
        <TimePicker minutes={minutes} onChange={setMinutes} variant="wheel" />
      </View>
      <Pressable accessibilityRole="button" onPress={save} style={({ pressed }) => [styles.save, pressed && styles.pressed]}>
        <Text style={styles.saveText}>{t('home.today.firstStep.save')}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.surface },
  content: { padding: space.screen, paddingTop: 32, gap: space.gap },
  title: { ...fonts.bold(34, -0.6), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text2 },
  picker: { alignItems: 'center', marginVertical: 8 },
  save: {
    minHeight: target.primary,
    borderRadius: 999,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: { ...fonts.semibold(19), color: colors.onInk },
  pressed: { opacity: 0.7 },
});
