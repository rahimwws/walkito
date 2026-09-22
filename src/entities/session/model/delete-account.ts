import { kv } from '@/shared/lib/storage';
import { getLanguage, translatorFor } from '@/shared/lib/i18n';
import { hasBackend, supabase } from '@/shared/lib/supabase';

/** What a deletion attempt can come back as. */
export type DeleteResult =
  /** Gone, locally and on the server. */
  | { status: 'deleted' }
  /** Gone locally; the server said no. The distinction matters — see below. */
  | { status: 'local-only'; message: string };

/**
 * Deletes the account, in the order that cannot strand the user.
 *
 * Server first. Local storage holds the only handle on the anonymous identity,
 * so wiping it first would leave a row on the server that nothing can ever
 * reach again — deletion that deletes the evidence rather than the data, which
 * is the opposite of what Apple asks for.
 *
 * Local second, and unconditionally. If the server call fails the device is
 * still cleared and the result says so: refusing to clear anything because the
 * network was down would leave someone who asked to be forgotten looking at
 * their own streak.
 */
export async function deleteAccount(): Promise<DeleteResult> {
  let serverMessage: string | null = null;

  if (hasBackend) {
    const client = supabase;
    if (client != null) {
      try {
        const { error } = await client.rpc('delete_account');
        if (error != null) serverMessage = error.message;
        // Sign out regardless. The session's token outlives the row it points
        // at, and a stale token is how the next launch ends up half-signed-in.
        await client.auth.signOut().catch(() => {});
      } catch (error) {
        serverMessage =
          error instanceof Error
            ? error.message
            : translatorFor(getLanguage())('auth.unreachable');
      }
    }
  }

  // Everything: the programme, the pain log, the streak, the name, the
  // onboarding flag, the health cache, the notification state. Cleared as one
  // call rather than by asking each store to reset itself — a per-store list is
  // a list that goes out of date, and the store added next week is exactly the
  // one that would survive a deletion.
  kv.clearAll();

  // The cached exercise clips are files rather than keys, so `clearAll` does
  // not touch them — and this module may not reach into the widget that owns
  // them. The sheet that calls this clears them; see `delete-account-sheet`.

  return serverMessage == null
    ? { status: 'deleted' }
    : { status: 'local-only', message: serverMessage };
}
