import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { BackHandler, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { storyOf } from '@/entities/profile';
import { colors, fonts, space } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { requestProgram } from '@/shared/lib/program';
import { Button } from '@/shared/ui/button';

/**
 * "You're in": once, after a purchase or a restore, as the app opens up.
 *
 * A one-way door (gestures and Android's back off): a tick, the plan's name,
 * one line, and one button that goes to Today with today's session started
 * (`requestProgram`, which the tabs act on). Nothing to celebrate with: no
 * confetti, no character, no numbers.
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
        <View style={styles.tick} accessible={false}>
          <HugeiconsIcon icon={CheckmarkCircle02Icon} size={64} color={colors.good} strokeWidth={1.8} />
        </View>
        <Text style={styles.title} accessibilityRole="header">
          {t('offer.welcome.title')}
        </Text>
        {story != null && <Text style={styles.plan}>{t(`story.plan.${story.kind}`)}</Text>}
        <Text style={styles.line}>{t('offer.welcome.line')}</Text>
      </ScrollView>
      <View style={styles.bar}>
        <Button label={t('offer.welcome.cta')} onPress={start} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  content: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: space.screen, gap: 12 },
  tick: {
    width: 104,
    height: 104,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    marginBottom: 12,
  },
  title: { ...fonts.bold(34, -0.4), color: colors.text, textAlign: 'center' },
  plan: { ...fonts.semibold(20), color: colors.accent, textAlign: 'center' },
  line: { ...fonts.regular(19), color: colors.text2, textAlign: 'center', maxWidth: 420 },
  bar: { paddingHorizontal: space.screen, paddingTop: 12 },
});
