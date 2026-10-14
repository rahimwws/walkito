import * as Application from 'expo-application';
import { Linking, Platform } from 'react-native';

import { SUPPORT_EMAIL } from '@/shared/config';
import type { Translate } from '@/shared/lib/i18n';
import { currentUserId } from '@/shared/lib/supabase';

/**
 * A new email to the founders, with the two facts every support reply needs
 * written into it already: which build, and which user. The id is the
 * anonymous Supabase one — enough to find the plan, nothing that names them.
 *
 * Settings' "Write to Rahim" and the cancel flow's "Write to us" both open it.
 */
export function writeToUs(t: Translate): void {
  void currentUserId().then((id) => {
    const version = `${Application.nativeApplicationVersion ?? '?'} (${Application.nativeBuildVersion ?? '?'})`;
    const body = t('settings.writeBody', { version, platform: Platform.OS, id: id ?? '-' });
    const url = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(t('settings.writeSubject'))}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch(() => {});
  });
}
