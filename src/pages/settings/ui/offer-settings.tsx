import * as Haptics from 'expo-haptics';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { cancelComebackPushes, cancelWinback, setOfferPushes, useOfferPushes } from '@/entities/notifications';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Notifications about offers, on or off: the way out Apple asks for beside a
 * promotional notification (guideline 4.5.4). Turning it off also takes back
 * any offer notification already laid. Reminders and progress stay as they are.
 */
export function OfferSettings() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const on = useOfferPushes();

  return (
    <>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('settings.notifications.title')}</Text>
      <View style={[styles.group, { backgroundColor: meter.track }]}>
        <View style={styles.row}>
          <View style={styles.text}>
            <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.notifications.offers')}</Text>
            <Text style={[styles.hint, { color: meter.caption }]}>{t('settings.notifications.offersHint')}</Text>
          </View>
          <Switch
            value={on}
            trackColor={{ true: PRIMARY }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.notifications.offers')}
            onValueChange={(next) => {
              Haptics.selectionAsync();
              setOfferPushes(next);
              if (!next) {
                void cancelComebackPushes();
                void cancelWinback();
              }
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { ...fonts.bold(12, 0.1), marginBottom: 8, marginTop: 24 },
  group: { borderRadius: 22, borderCurve: 'continuous', padding: 16, gap: 14 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  text: { flex: 1 },
  label: fonts.semibold(16, -0.2),
  hint: { ...fonts.medium(13), marginTop: 1 },
});
