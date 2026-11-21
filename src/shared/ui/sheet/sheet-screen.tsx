import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CHROME_MAX_FONT_SCALE, colors, fonts, space, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

export type SheetScreenProps = {
  title?: string;
  /** A short line over the title, e.g. an account handle. */
  eyebrow?: string;
  /** Shows a "Close" button beside the title: a swipe down is never the only
   * way out (spec §5). */
  onClose?: () => void;
  children?: ReactNode;
  /** The sheet's one primary action and anything under it, after the content. */
  footer?: ReactNode;
  /** Centres the title and the eyebrow, for a short message sheet. */
  centered?: boolean;
};

/**
 * The body of a native form sheet route (`presentation: 'formSheet'`): solid
 * `surface`, the system grabber above it, a title with a visible Close, the
 * content, and the primary action last. It scrolls, so the half-height detent
 * and the largest text sizes both fit; dragging up opens it to full height.
 */
export function SheetScreen({ title, eyebrow, onClose, children, footer, centered = false }: SheetScreenProps) {
  const insets = useSafeAreaInsets();
  const t = useT();

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets>
      {(title != null || onClose != null) && (
        <View style={styles.head}>
          <View style={[styles.titles, centered && styles.centered]}>
            {eyebrow != null && <Text style={[styles.eyebrow, centered && styles.center]}>{eyebrow}</Text>}
            {title != null && (
              <Text style={[styles.title, centered && styles.center]} accessibilityRole="header">
                {title}
              </Text>
            )}
          </View>
          {onClose != null && (
            <Pressable
              accessibilityRole="button"
              onPress={onClose}
              hitSlop={8}
              style={({ pressed }) => [styles.close, pressed && styles.pressed]}>
              <Text style={styles.closeLabel} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {t('common.close')}
              </Text>
            </Pressable>
          )}
        </View>
      )}
      {children}
      {footer != null && <View style={styles.footer}>{footer}</View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.surface },
  content: { paddingHorizontal: space.screen, paddingTop: 28, gap: 16 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  titles: { flex: 1, gap: 4 },
  centered: { alignItems: 'center' },
  center: { textAlign: 'center' },
  eyebrow: { ...fonts.medium(17), color: colors.text2 },
  title: { ...fonts.bold(28, -0.4), color: colors.text },
  close: { minHeight: target.min, minWidth: target.min, justifyContent: 'center', alignItems: 'flex-end', marginTop: -10 },
  closeLabel: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.6 },
  footer: { gap: 4, marginTop: 8 },
});
