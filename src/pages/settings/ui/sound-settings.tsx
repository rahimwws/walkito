import * as Haptics from 'expo-haptics';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { setSoundPrefs, useSoundPrefs } from '@/shared/lib/sound';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * The session's sounds. Tempo sounds are the beat a tempo move is done to; the
 * voice counts it out ("up · 2 · 3 · hold"). The player has the same tempo
 * switch in its header, so it can be turned off mid-set without coming here.
 */
export function SoundSettings() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const sound = useSoundPrefs();

  return (
    <>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('settings.sound.title')}</Text>
      <View style={[styles.group, { backgroundColor: meter.track }]}>
        <View style={styles.row}>
          <View style={styles.text}>
            <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.sound.tempo')}</Text>
            <Text style={[styles.hint, { color: meter.caption }]}>{t('settings.sound.tempoHint')}</Text>
          </View>
          <Switch
            value={sound.tempo}
            trackColor={{ true: PRIMARY }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.sound.tempo')}
            onValueChange={(on) => {
              Haptics.selectionAsync();
              setSoundPrefs({ tempo: on });
            }}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.text}>
            <Text style={[styles.label, { color: sound.tempo ? colors.foreground : meter.unit }]}>
              {t('settings.sound.voice')}
            </Text>
            <Text style={[styles.hint, { color: meter.caption }]}>{t('settings.sound.voiceHint')}</Text>
          </View>
          <Switch
            value={sound.voice}
            disabled={!sound.tempo}
            trackColor={{ true: PRIMARY }}
            thumbColor="#FFFFFF"
            accessibilityLabel={t('settings.sound.voice')}
            onValueChange={(on) => {
              Haptics.selectionAsync();
              setSoundPrefs({ voice: on });
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
