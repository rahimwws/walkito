import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useEffect, type ReactNode } from 'react';

import * as SystemUI from 'expo-system-ui';

import { fonts, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Single source of truth for the native route background.
 *
 * The navigator paints every screen's container with the navigation theme's
 * `background`, so setting it here themes all nested navigators at once and
 * paints the container before JS content mounts — the surface behind a
 * tab-switch fade always matches the screen color, so there is no flash. This
 * is also why screens must not set their own `backgroundColor`.
 */
export function NavThemeProvider({ children }: { children: ReactNode }) {
  const dark = useColorScheme() === 'dark';
  const base = dark ? DarkTheme : DefaultTheme;
  const colors = dark ? palette.dark : palette.light;

  const navTheme = {
    ...base,
    colors: {
      ...base.colors,
      background: colors.background,
      card: colors.background,
      text: colors.foreground,
    },
    // Navigator-rendered text (headers, back labels) uses Inter too.
    fonts: {
      regular: { fontFamily: fonts.regular, fontWeight: '400' },
      medium: { fontFamily: fonts.medium, fontWeight: '500' },
      bold: { fontFamily: fonts.semibold, fontWeight: '600' },
      heavy: { fontFamily: fonts.bold, fontWeight: '700' },
    },
  } as const;

  // Keep the native root view / window (behind the routes: launch, overscroll
  // bounce, transparent sheets) in sync with the theme too.
  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  return <ThemeProvider value={navTheme}>{children}</ThemeProvider>;
}
