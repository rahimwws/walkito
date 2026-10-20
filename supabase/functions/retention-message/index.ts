/**
 * Apple's "Get Retention Message" endpoint: when somebody taps Cancel
 * Subscription in iOS Settings (outside the app, where our own cancel flow
 * never runs), Apple asks which message to show and waits at most 700 ms.
 *
 * The answer is the message in the device's language, from
 * `_shared/retention/messages.ts`, which also holds the defaults Apple falls
 * back to when this does not answer in time. Nothing is looked up: no
 * database, no RevenueCat, so the answer is fast and the same for everyone.
 *
 * The request is a JWS signed by Apple. The chain in its header is checked up
 * to Apple Root CA G3 and the app id must be ours; anything else gets no
 * answer, as Apple asks. Nothing is stored and nothing about the person is
 * read beyond their device locale.
 *
 * Apple calls it with no Supabase JWT (`verify_jwt = false` in config.toml).
 * Its URL is set with the API's `PUT /realtime/url`, never in App Store
 * Connect: `scripts/retention-messaging.ts realtime`.
 */

import { retentionMessageFor } from '../_shared/retention/messages.ts';
import { verified, type Payload } from '../_shared/retention/verify.ts';

const APP_APPLE_ID = 6813076846;

Deno.serve(async (req) => {
  if (req.method !== 'POST') return new Response(null, { status: 405 });

  let payload: Payload | null = null;
  try {
    const { signedPayload } = (await req.json()) as { signedPayload?: string };
    payload = typeof signedPayload === 'string' ? verified(signedPayload) : null;
  } catch {
    payload = null;
  }
  // Apple: if the app id does not match, don't respond.
  if (payload == null || payload.appAppleId !== APP_APPLE_ID) return new Response(null, { status: 400 });

  const message = retentionMessageFor(payload.userLocale);
  return new Response(JSON.stringify({ message: { messageIdentifier: message.id } }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
});
