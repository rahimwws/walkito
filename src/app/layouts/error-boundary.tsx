import type { ErrorBoundaryProps } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { MascotStill, noInternetRig } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * What a user sees if a screen throws, instead of a white screen or a stack
 * trace: the mascot, one plain sentence, and a way to try again.
 *
 * Exported as the root route's `ErrorBoundary`, so it stands in for the whole
 * navigator when anything below it fails to render. That is also why it paints
 * its own background — the navigation theme that normally paints every screen
 * is part of what just failed — and why it reaches for nothing a provider
 * would give it: no safe-area insets, no program, no router state.
 *
 * `retry` renders the tree again, which is the right answer to almost every
 * error a user can cause by tapping. The error is reported, never shown.
 *
 * The mascot is the still drawing, the one with the unplugged cable: nothing
 * here loops, since whatever failed may still be failing underneath.
 */
export function AppErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  useEffect(() => {
    console.error('[app] screen failed', error);
    track('app_error_shown', { name: error?.name ?? 'Error' });
  }, [error]);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={styles.mascot} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <MascotStill rig={noInternetRig} size={MASCOT_SIZE} surface={colors.background} />
      </View>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('error.title')}</Text>
      <Text style={[styles.body, { color: meter.caption }]}>{t('error.body')}</Text>
      <View style={styles.button}>
        <PrimaryButton label={t('error.retry')} onPress={() => void retry()} />
      </View>
    </View>
  );
}

const MASCOT_SIZE = 120;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 12,
  },
  mascot: { width: MASCOT_SIZE, height: MASCOT_SIZE, marginBottom: 8 },
  title: { ...fonts.heavy(24, -0.6), textAlign: 'center' },
  body: { ...fonts.medium(16), lineHeight: 22, textAlign: 'center' },
  button: { alignSelf: 'stretch', marginTop: 16 },
});
