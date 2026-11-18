import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, ReduceMotion, ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Plan } from '@/entities/purchase';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';

/**
 * "A gift just for you" (the web funnel's L), once, after the store's sheet
 * was closed: a box to open, then the first year of the annual for less.
 *
 * The amount billed today is the largest figure on it (guideline 3.1.2), with
 * what it renews at under it, and the terms over the button. "No, thanks"
 * closes it, and tapping away is the same answer.
 */
export function ExitGift({
  plan,
  visible,
  busy,
  onBuy,
  onDecline,
}: {
  plan: Plan;
  visible: boolean;
  busy: boolean;
  onBuy: () => void;
  onDecline: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const insets = useSafeAreaInsets();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);
  const intro = plan.intro?.kind === 'pay-up-front' ? plan.intro.priceString : plan.priceString;
  const values = { intro, price: plan.priceString };
  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onDecline}>
      <Pressable accessibilityRole="button" accessibilityLabel={t('story.gift.decline')} style={styles.scrim} onPress={busy ? undefined : onDecline} />
      <View style={[styles.sheet, { backgroundColor: colors.background, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
        {!open ? (
          <Animated.View key="box" entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)} style={styles.stage}>
            <Animated.View entering={ZoomIn.springify().damping(12).reduceMotion(ReduceMotion.System)} style={styles.box}>
              <FluentIcon name="gift" size={120} />
            </Animated.View>
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
              {t('story.gift.title')}
            </Text>
            <Text style={[styles.line, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
              {t('story.gift.blurb')}
            </Text>
            <View style={styles.cta}>
              <Button3D
                label={t('story.gift.open')}
                onPress={() => {
                  void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  setOpen(true);
                }}
                size="xl"
                docked
              />
            </View>
          </Animated.View>
        ) : (
          <Animated.View key="offer" entering={FadeInDown.duration(320).reduceMotion(ReduceMotion.System)} style={styles.stage}>
            <FluentIcon name="gift" size={64} />
            <Text accessibilityRole="header" style={[styles.price, { color: colors.foreground }]} maxFontSizeMultiplier={1.25}>
              {t('story.gift.offerTitle', values)}
            </Text>
            <Text style={[styles.line, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
              {t('story.gift.offerLine', values)}
            </Text>
            <View style={styles.cta}>
              {busy ? (
                <ActivityIndicator color={PRIMARY} style={styles.busy} />
              ) : (
                <Button3D label={t('story.gift.buy', values)} onPress={onBuy} size="xl" docked />
              )}
            </View>
            <Text style={[styles.terms, { color: meter.caption }]} maxFontSizeMultiplier={1.4}>
              {t('story.gift.terms', values)}
            </Text>
          </Animated.View>
        )}
        <Pressable accessibilityRole="button" onPress={onDecline} disabled={busy} hitSlop={8} style={({ pressed }) => [styles.quiet, pressed && { opacity: 0.6 }]}>
          <Text style={[styles.quietText, { color: meter.label }]}>{t('story.gift.decline')}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: { flex: 1, backgroundColor: 'rgba(0,0,0,0.55)' },
  sheet: { borderTopLeftRadius: 32, borderTopRightRadius: 32, borderCurve: 'continuous', paddingHorizontal: 24, paddingTop: 28 },
  stage: { alignItems: 'center', gap: 12 },
  box: { marginBottom: 6 },
  title: { ...fonts.heavy(28, -0.8), lineHeight: 33, textAlign: 'center' },
  price: { ...fonts.heavy(32, -0.9), lineHeight: 37, textAlign: 'center' },
  line: { ...fonts.medium(17, -0.2), lineHeight: 23, textAlign: 'center' },
  cta: { alignSelf: 'stretch', marginTop: 10 },
  busy: { height: 58 },
  terms: { ...fonts.medium(12), lineHeight: 16, textAlign: 'center' },
  quiet: { alignSelf: 'center', paddingVertical: 10 },
  quietText: fonts.semibold(15),
});
