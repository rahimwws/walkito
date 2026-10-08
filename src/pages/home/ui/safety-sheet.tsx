import CheckmarkSquare02Icon from '@hugeicons/core-free-icons/CheckmarkSquare02Icon';
import SquareIcon from '@hugeicons/core-free-icons/SquareIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

/**
 * "Something new? (swelling, numbness, a pop)" — the red-flag check, reachable
 * from the morning check-in at any time.
 *
 * Three tiers, the same as the onboarding safety screen: A needs a doctor now,
 * B1 soon, B2 when convenient. Nothing here is recorded or sent anywhere; it is
 * a question the user asks themselves, answered in plain words.
 */
type Tier = 'A' | 'B1' | 'B2';

const ITEMS: readonly { key: Key; tier: Tier }[] = [
  { key: 'safety.a1', tier: 'A' },
  { key: 'safety.a2', tier: 'A' },
  { key: 'safety.a3', tier: 'A' },
  { key: 'safety.b1', tier: 'B1' },
  { key: 'safety.b2', tier: 'B1' },
  { key: 'safety.b3', tier: 'B1' },
  { key: 'safety.b4', tier: 'B1' },
  { key: 'safety.c1', tier: 'B2' },
  { key: 'safety.c2', tier: 'B2' },
  { key: 'safety.c3', tier: 'B2' },
  { key: 'safety.c4', tier: 'B2' },
  { key: 'safety.c5', tier: 'B2' },
];

const RESULT: Record<Tier | 'none', Key> = {
  A: 'safety.resultA',
  B1: 'safety.resultB1',
  B2: 'safety.resultB2',
  none: 'safety.resultNone',
};

/** The worst tier among the picked items. */
function tierOf(picked: ReadonlySet<Key>): Tier | 'none' {
  const tiers = ITEMS.filter((item) => picked.has(item.key)).map((item) => item.tier);
  if (tiers.includes('A')) return 'A';
  if (tiers.includes('B1')) return 'B1';
  if (tiers.includes('B2')) return 'B2';
  return 'none';
}

export function SafetySheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const [picked, setPicked] = useState<ReadonlySet<Key>>(new Set());
  const [result, setResult] = useState<Tier | 'none' | null>(null);

  useEffect(() => {
    if (!visible) return;
    setPicked(new Set());
    setResult(null);
  }, [visible]);

  const toggle = (key: Key) => {
    Haptics.selectionAsync();
    setPicked((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <Modal animationType="slide" presentationStyle="pageSheet" visible={visible} onRequestClose={onClose}>
      <View style={[styles.root, { backgroundColor: colors.background }]} {...REPLAY_MASK}>
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('safety.title')}</Text>
          <Text style={[styles.sub, { color: meter.caption }]}>{t('safety.sub')}</Text>

          {result == null ? (
            <View style={styles.list}>
              {ITEMS.map((item) => {
                const on = picked.has(item.key);
                return (
                  <Pressable
                    key={item.key}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: on }}
                    onPress={() => toggle(item.key)}
                    style={({ pressed }) => [
                      styles.item,
                      { backgroundColor: meter.track },
                      pressed && { opacity: 0.6 },
                    ]}>
                    <HugeiconsIcon
                      icon={on ? CheckmarkSquare02Icon : SquareIcon}
                      size={22}
                      color={on ? colors.foreground : meter.unit}
                      strokeWidth={1.8}
                    />
                    <Text style={[styles.itemText, { color: colors.foreground }]}>{t(item.key)}</Text>
                  </Pressable>
                );
              })}
              <Text style={[styles.common, { color: meter.caption }]}>{t('safety.common')}</Text>
            </View>
          ) : (
            <View style={[styles.result, { backgroundColor: meter.iconTile }]} accessibilityLiveRegion="polite">
              <Text style={[styles.resultText, { color: colors.foreground }]}>{t(RESULT[result])}</Text>
            </View>
          )}
        </ScrollView>

        <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
          {result == null ? (
            <PrimaryButton
              label={picked.size === 0 ? t('safety.none') : t('safety.check')}
              onPress={() => {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                setResult(tierOf(picked));
              }}
            />
          ) : (
            <PrimaryButton label={t('safety.close')} onPress={onClose} />
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, marginTop: 8 },
  content: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 24 },
  title: { ...fonts.heavy(28, -0.7) },
  sub: { ...fonts.medium(16), marginTop: 6 },
  list: { gap: 8, marginTop: 20 },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderRadius: 18,
    borderCurve: 'continuous',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  itemText: { ...fonts.medium(16), lineHeight: 22, flex: 1 },
  common: { ...fonts.medium(14), lineHeight: 20, marginTop: 10, paddingHorizontal: 4 },
  result: { borderRadius: 22, borderCurve: 'continuous', padding: 20, marginTop: 24 },
  resultText: { ...fonts.semibold(19, -0.3), lineHeight: 27 },
  footer: { paddingHorizontal: 20, paddingTop: 8 },
});
