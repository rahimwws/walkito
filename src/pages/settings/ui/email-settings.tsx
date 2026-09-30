import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { fetchEmailPrefs, setEmailPrefs, unsubscribeAllEmails, useProfileEmail, type EmailPrefs } from '@/entities/profile';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Settings → Email: the address, two switches, and a way out of everything.
 *
 * The server is the record here, not the phone — the footer's unsubscribe link
 * and a spam complaint both change it without the app — so the section reads
 * `email_contacts` when it opens and writes each change straight back. A switch
 * moves at once and moves back if the server refused, rather than waiting on a
 * round trip to show the user's own tap.
 *
 * "Tips & reminders" is every lifecycle email and the offers; "Weekly summary"
 * is the Sunday email, off until asked for. Turning either on again after
 * "Unsubscribe from all" is a fresh yes, and the server treats it as one.
 */
export function EmailSettings() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const localEmail = useProfileEmail();
  const [prefs, setPrefs] = useState<EmailPrefs | null | 'loading'>('loading');

  useEffect(() => {
    let live = true;
    void fetchEmailPrefs().then((p) => {
      if (live) setPrefs(p);
    });
    return () => {
      live = false;
    };
  }, [localEmail]);

  const change = (next: { tips?: boolean; weekly?: boolean }) => {
    if (prefs == null || prefs === 'loading') return;
    Haptics.selectionAsync();
    const before = prefs;
    const after: EmailPrefs = {
      ...prefs,
      tips: next.tips ?? prefs.tips,
      weekly: next.weekly ?? prefs.weekly,
      unsubscribed: prefs.unsubscribed && !(next.tips === true || next.weekly === true),
    };
    setPrefs(after);
    track('email_prefs_changed', { tips: after.tips, weekly: after.weekly });
    void setEmailPrefs(next).then((ok) => {
      if (!ok) setPrefs(before);
    });
  };

  const leave = () => {
    if (prefs == null || prefs === 'loading') return;
    Haptics.selectionAsync();
    const before = prefs;
    setPrefs({ ...prefs, tips: false, weekly: false, unsubscribed: true });
    track('email_unsubscribed_all');
    void unsubscribeAllEmails().then((ok) => {
      if (!ok) setPrefs(before);
    });
  };

  const address = prefs != null && prefs !== 'loading' ? prefs.email : localEmail;

  return (
    <View style={styles.root}>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('settings.email.section')}</Text>
      <View style={[styles.group, { backgroundColor: meter.track }]}>
        {address.length === 0 ? (
          <Text style={[styles.note, { color: meter.caption }]}>{t('settings.email.none')}</Text>
        ) : (
          <Text style={[styles.note, { color: meter.caption }]} numberOfLines={1}>
            {t('settings.email.address', { email: address })}
          </Text>
        )}

        {prefs !== 'loading' && prefs == null && address.length > 0 ? (
          <Text style={[styles.note, { color: meter.caption }]}>{t('settings.email.unavailable')}</Text>
        ) : null}

        {prefs != null && prefs !== 'loading' ? (
          <>
            <View style={styles.row}>
              <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.email.tips')}</Text>
              <Switch
                value={prefs.tips}
                trackColor={{ true: PRIMARY }}
                thumbColor="#FFFFFF"
                accessibilityLabel={t('settings.email.tips')}
                onValueChange={(on) => change({ tips: on })}
              />
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, { color: colors.foreground }]}>{t('settings.email.weekly')}</Text>
              <Switch
                value={prefs.weekly}
                trackColor={{ true: PRIMARY }}
                thumbColor="#FFFFFF"
                accessibilityLabel={t('settings.email.weekly')}
                onValueChange={(on) => change({ weekly: on })}
              />
            </View>
            {prefs.unsubscribed ? (
              <Text style={[styles.note, { color: meter.caption }]}>{t('settings.email.unsubscribed')}</Text>
            ) : (
              <Pressable
                accessibilityRole="button"
                onPress={leave}
                style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
                <Text style={[styles.label, { color: meter.caption }]}>{t('settings.email.unsubscribeAll')}</Text>
              </Pressable>
            )}
          </>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { marginTop: 24 },
  sectionTitle: {
    ...fonts.bold(12, 0.1),
    marginBottom: 8,
  },
  group: {
    borderRadius: 22,
    borderCurve: 'continuous',
    padding: 16,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    minHeight: 40,
  },
  label: fonts.semibold(16, -0.2),
  note: {
    ...fonts.medium(13),
    lineHeight: 18,
  },
});
