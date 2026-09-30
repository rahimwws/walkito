import { getCalendars } from 'expo-localization';

import { getLanguage } from '@/shared/lib/i18n';
import { currentUserId, supabase } from '@/shared/lib/supabase';

/**
 * The server side of the address: consent, language and time zone.
 *
 * The emails are decided on the server (`supabase/functions/email-scheduler`),
 * which has to know three things the phone knows best: the language to write
 * in, the time zone that makes "08:00" mean the user's morning, and the name
 * the welcome greets. They travel with the address, through the
 * `save_email_contact` function, whenever any of them changes.
 */

export type EmailSource = 'apple' | 'google' | 'onboarding';

/** The device's IANA zone, e.g. `Europe/Madrid`. Null only if the platform will not say. */
export function deviceTimeZone(): string | null {
  try {
    const zone = getCalendars()[0]?.timeZone;
    if (zone) return zone;
  } catch {
    // Fall through to Intl.
  }
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  } catch {
    return null;
  }
}

/**
 * Stores the address with its context. A blank address refreshes only the
 * context on a row that already exists. True when the server took it.
 */
export async function saveEmailContact(input: { email: string; source: EmailSource | null; firstName: string }): Promise<boolean> {
  const client = supabase;
  if (client == null) return false;
  try {
    if ((await currentUserId()) == null) return false;
    const { error } = await client.rpc('save_email_contact', {
      p_email: input.email,
      p_source: input.source ?? 'apple',
      p_locale: getLanguage(),
      p_timezone: deviceTimeZone() ?? '',
      p_first_name: input.firstName,
    });
    if (error != null) {
      console.warn('[email] contact not saved', error.message);
      return false;
    }
    return true;
  } catch (error) {
    console.warn('[email] contact not saved', error);
    return false;
  }
}

// ── Settings → Email ────────────────────────────────────────────────────────

export type EmailPrefs = {
  email: string;
  /** Tips & reminders: the lifecycle emails and the offers. */
  tips: boolean;
  /** The Sunday summary. Off until asked for. */
  weekly: boolean;
  unsubscribed: boolean;
};

/** What the server has, or null when there is no address on file (or no network). */
export async function fetchEmailPrefs(): Promise<EmailPrefs | null> {
  const client = supabase;
  if (client == null) return null;
  try {
    const uid = await currentUserId();
    if (uid == null) return null;
    const { data, error } = await client
      .from('email_contacts')
      .select('email, lifecycle_opt_in, weekly_opt_in, unsubscribed_at')
      .eq('user_id', uid)
      .maybeSingle();
    if (error != null || data == null) return null;
    return {
      email: String(data.email),
      tips: data.lifecycle_opt_in === true && data.unsubscribed_at == null,
      weekly: data.weekly_opt_in === true && data.unsubscribed_at == null,
      unsubscribed: data.unsubscribed_at != null,
    };
  } catch {
    return null;
  }
}

export async function setEmailPrefs(prefs: { tips?: boolean; weekly?: boolean }): Promise<boolean> {
  const client = supabase;
  if (client == null) return false;
  try {
    if ((await currentUserId()) == null) return false;
    const { error } = await client.rpc('set_email_prefs', { p_lifecycle: prefs.tips ?? null, p_weekly: prefs.weekly ?? null });
    return error == null;
  } catch {
    return false;
  }
}

export async function unsubscribeAllEmails(): Promise<boolean> {
  const client = supabase;
  if (client == null) return false;
  try {
    if ((await currentUserId()) == null) return false;
    const { error } = await client.rpc('unsubscribe_all_emails');
    return error == null;
  } catch {
    return false;
  }
}

/** An email button opened the app: logged against that send as its click. */
export async function recordEmailLinkOpened(emailKey: string, path: string): Promise<void> {
  const client = supabase;
  if (client == null) return;
  try {
    if ((await currentUserId()) == null) return;
    await client.rpc('email_link_opened', { p_email_key: emailKey, p_path: path });
  } catch {
    // A lost click costs one data point, never a screen.
  }
}
