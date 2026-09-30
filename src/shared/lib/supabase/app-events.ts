import { currentUserId, supabase } from './supabase';

/**
 * The few app facts the email scheduler needs that no synced table holds.
 *
 * `paywall_viewed` is the one written today: the offer emails go four and
 * fourteen days after it, and carry the store prices it was shown with. The
 * names are checked by the table as well as here.
 *
 * Never awaited by a screen and never reported: a lost event costs one email,
 * and an error in front of somebody looking at a paywall costs more.
 */
export type AppEventName = 'paywall_viewed' | 'app_opened';

export async function recordAppEvent(name: AppEventName, props: Record<string, string | number | boolean | null> = {}): Promise<void> {
  const client = supabase;
  if (client == null) return;
  try {
    const uid = await currentUserId();
    if (uid == null) return;
    const { error } = await client.from('app_events').insert({ user_id: uid, name, props });
    if (error != null) console.warn('[app-events] not recorded', name, error.message);
  } catch (error) {
    console.warn('[app-events] not recorded', name, error);
  }
}
