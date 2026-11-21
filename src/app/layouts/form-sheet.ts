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
