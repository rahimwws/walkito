import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { BackHandler, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { storyOf } from '@/entities/profile';
import { colors, fonts, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { requestProgram } from '@/shared/lib/program';

/**
 * "You're in": once, after a purchase or a restore, as the app opens up.
 *
 * Nike-minimal (addendum v2): white, a big black tick, the title, the plan's
 * name, one line, and one black capsule that goes to Today with today's
 * session started (`requestProgram`, which the tabs act on). A one-way door:
 * gestures and Android's back are off. Nothing celebrates.
 */
export function YoureInPage() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const t = useT();
  const [story] = useState(storyOf);

  useEffect(() => {
    track('purchase_welcome_viewed');
    const back = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => back.remove();
  }, []);

  const start = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    track('purchase_welcome_started');
    requestProgram({ kind: 'today' });
    navigation.goBack();
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
      <ScrollView contentContainerStyle={styles.content} bounces={false}>
        <HugeiconsIcon icon={Tick02Icon} size={96} color={colors.text} strokeWidth={2.4} />
        <Text style={styles.title} accessibilityRole="header">
          {t('offer.welcome.title')}
        </Text>
        {story != null && <Text style={styles.plan}>{t(`story.plan.${story.kind}`)}</Text>}
        <Text style={styles.line}>{t('offer.welcome.line')}</Text>
      </ScrollView>
      <Pressable
        accessibilityRole="button"
        onPress={start}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonLabel}>{t('offer.welcome.cta')}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.surface, paddingHorizontal: 24 },
  content: { flexGrow: 1, justifyContent: 'center', gap: 16 },
  title: { ...fonts.bold(34, -0.4), color: colors.text, marginTop: 16 },
  plan: { ...fonts.semibold(20), color: colors.text },
  line: { ...fonts.regular(19), color: colors.text2 },
  button: {
    minHeight: target.primary,
    borderRadius: 999,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 12,
  },
  pressed: { opacity: 0.8 },
  buttonLabel: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center' },
});
