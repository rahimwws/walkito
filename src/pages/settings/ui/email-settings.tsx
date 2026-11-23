import BulbIcon from '@hugeicons/core-free-icons/BulbIcon';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Switch } from 'react-native';

import { fetchEmailPrefs, setEmailPrefs, unsubscribeAllEmails, useProfileEmail, type EmailPrefs } from '@/entities/profile';
import { bitepal, bodyColors, colors } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';

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
    const before = prefs;
    setPrefs({ ...prefs, tips: false, weekly: false, unsubscribed: true });
    track('email_unsubscribed_all');
    void unsubscribeAllEmails().then((ok) => {
      if (!ok) setPrefs(before);
    });
  };

  const address = prefs != null && prefs !== 'loading' ? prefs.email : localEmail;
  const ready = prefs != null && prefs !== 'loading';

  return (
    <GroupedSection title={t('settings.email.section')}>
      <GroupedRow
        icon={Mail01Icon}
        tone={bodyColors.calf}
        label={address.length === 0 ? t('settings.email.none') : t('settings.email.address', { email: address })}
        hint={prefs !== 'loading' && prefs == null && address.length > 0 ? t('settings.email.unavailable') : undefined}
      />
      {ready && (
        <GroupedRow
          icon={BulbIcon}
          tone={bodyColors.toes}
          label={t('settings.email.tips')}
          accessory={
            <Switch
              value={prefs.tips}
              trackColor={{ true: bitepal.selected }}
              thumbColor="#FFFFFF"
              accessibilityLabel={t('settings.email.tips')}
              onValueChange={(on) => change({ tips: on })}
            />
          }
        />
      )}
      {ready && (
        <GroupedRow
          icon={Calendar03Icon}
          tone={bodyColors.arch}
          label={t('settings.email.weekly')}
          accessory={
            <Switch
              value={prefs.weekly}
              trackColor={{ true: bitepal.selected }}
              thumbColor="#FFFFFF"
              accessibilityLabel={t('settings.email.weekly')}
              onValueChange={(on) => change({ weekly: on })}
            />
          }
        />
      )}
      {ready &&
        (prefs.unsubscribed ? (
          <GroupedRow label={t('settings.email.unsubscribed')} />
        ) : (
          <GroupedRow label={t('settings.email.unsubscribeAll')} labelColor={colors.text2} onPress={leave} />
        ))}
    </GroupedSection>
  );
}
