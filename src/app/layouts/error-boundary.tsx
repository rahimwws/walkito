import type { ErrorBoundaryProps } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * What a user sees if a screen throws, instead of a white screen or a stack
 * trace: one plain sentence, and a way to try again.
 *
 * Exported as the root route's `ErrorBoundary`, so it stands in for the whole
 * navigator when anything below it fails to render. That is also why it paints
 * its own background — the navigation theme that normally paints every screen
 * is part of what just failed — and why it reaches for nothing a provider
 * would give it: no safe-area insets, no program, no router state.
 *
 * `retry` renders the tree again, which is the right answer to almost every
 * error a user can cause by tapping. The error is reported, never shown.
 */
export function AppErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  const t = useT();

  useEffect(() => {
    console.error('[app] screen failed', error);
    track('app_error_shown', { name: error?.name ?? 'Error' });
  }, [error]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{t('error.title')}</Text>
      <Text style={styles.body}>{t('error.body')}</Text>
      <View style={styles.button}>
        <PrimaryButton label={t('error.retry')} onPress={() => void retry()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    gap: 12,
    backgroundColor: colors.bg,
  },
  title: { ...fonts.bold(28), color: colors.text, textAlign: 'center' },
  body: { ...fonts.regular(19), lineHeight: 26, color: colors.text2, textAlign: 'center' },
  button: { alignSelf: 'stretch', marginTop: 16 },
});
