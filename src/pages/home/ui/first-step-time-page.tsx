import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scheduleFirstStep, setWakeMinutes, wakeMinutes } from '@/entities/notifications';
import { colors, fonts, space } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { TimePicker } from '@/shared/ui/time-picker';

/**
 * "When do you get up?", a form sheet over Today: her wake time, which is
 * when the first-step routine is ready (and its reminder rings, when
 * notifications are on). Saved as her own answer, which wins over Health.
 */
export function FirstStepTimePage() {
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
      <Button label={t('home.today.firstStep.save')} onPress={save} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.surface },
  content: { padding: space.screen, paddingTop: 28, gap: space.gap },
  title: { ...fonts.bold(28, -0.4), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text2 },
  picker: { alignItems: 'center', marginVertical: 8 },
});
