import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LEGAL, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The documents, and nothing else.
 *
 * It used to be the appearance picker. That went when the app became dark-only:
 * a settings screen whose single control is a choice between one option is
 * worse than no screen at all, because the user reads three rows before
 * discovering there is nothing to decide.
 *
 * What is left is what Apple requires to be reachable from a subscribing app.
 * More settings will land here; the list shape is already the one that scales.
 */
const LINKS: { label: string; hint: string; url: string }[] = [
  { label: 'Terms of Use', hint: 'The subscription agreement', url: LEGAL.terms },
  { label: 'Privacy Policy', hint: 'What we store, and where', url: LEGAL.privacy },
];

export function SettingsPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();

  /** Rows with no URL yet are shown greyed rather than hidden. A settings
   * screen that silently omits the privacy policy looks finished; one that
   * shows it unavailable is a reminder that it is not. */
  const open = (url: string) => {
    if (url.length === 0) return;
    Haptics.selectionAsync();
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
      <Text style={[styles.title, { color: colors.foreground }]}>Settings</Text>

      <View style={[styles.list, { backgroundColor: meter.track }]}>
        {LINKS.map((link, index) => {
          const ready = link.url.length > 0;
          return (
            <Pressable
              key={link.label}
              accessibilityRole="link"
              accessibilityLabel={link.label}
              accessibilityState={{ disabled: !ready }}
              disabled={!ready}
              onPress={() => open(link.url)}
              style={({ pressed }) => [
                styles.row,
                index > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: meter.track },
                pressed && { opacity: 0.6 },
              ]}>
              <View style={styles.rowText}>
                <Text
                  style={[
                    styles.rowLabel,
                    { color: ready ? colors.foreground : meter.unit },
                  ]}>
                  {link.label}
                </Text>
                <Text style={[styles.rowHint, { color: meter.caption }]}>
                  {ready ? link.hint : 'Not published yet'}
                </Text>
              </View>
              {ready && (
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  color={meter.unit}
                  strokeWidth={2}
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: { paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6, marginBottom: 16 },
  list: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowText: { flex: 1 },
  rowLabel: { fontSize: 16, fontFamily: fonts.semibold, letterSpacing: -0.2 },
  rowHint: { fontSize: 13, fontFamily: fonts.medium, marginTop: 1 },
});
