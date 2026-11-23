import { Platform } from 'react-native';

import { colors } from '@/shared/config';

/**
 * A native form sheet (spec §4): half height first, drag up for the whole
 * screen, the system grabber, solid `surface` behind the content. Glass is
 * the system's own, on the sheet's edge, never on what is in it.
 */
export const FORM_SHEET = {
  presentation: 'formSheet' as const,
  headerShown: false,
  sheetAllowedDetents: [0.5, 1],
  sheetGrabberVisible: true,
  contentStyle: { backgroundColor: colors.surface },
};

/** The `/sheet/<name>` sheets that rise only as high as their content: a
 * short question that would leave half a screen empty at half height, and
 * still scrolls at the largest text sizes. iOS only: Android's sheet sized to
 * its content stops at the screen edge and never scrolls (see Settings). */
const FITTED_SHEETS: readonly string[] = ['widget-nudge', 'plan-month'];

export function sheetRouteOptions({ route }: { route: { params?: object } }) {
  const name = (route.params as { name?: string } | undefined)?.name;
  if (Platform.OS !== 'ios' || name == null || !FITTED_SHEETS.includes(name)) return FORM_SHEET;
  return { ...FORM_SHEET, sheetAllowedDetents: 'fitToContents' as const };
}
