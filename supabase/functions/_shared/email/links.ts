import type { EmailKey, Locale } from './types.ts';

/**
 * Every URL an email carries.
 *
 * Buttons are universal links on the site's domain: `https://walkito.site/open/{path}/`.
 * With the app installed and the associated domain in its entitlements, iOS and
 * Android open the app straight on that path; without it, the site's `/open/`
 * page hands over to the `walkito://` scheme and falls back to the store. The
 * `src` and `e` parameters are how the app knows the open came from an email,
 * and which one, so the click can be written against that send.
 *
 * The unsubscribe token is the user id and an HMAC of it, so the link needs no
 * table and cannot be forged for somebody else. It never expires: a year-old
 * email must still be able to stop the next one.
 */

/** `today`, `today?minutes=3`, `paywall?offering=offer` … as a full button URL. */
export function buttonUrl(base: string, path: string, key: EmailKey): string {
  const [route, query] = path.split('?');
  const params = new URLSearchParams(query ?? '');
  params.set('src', 'email');
  params.set('e', key);
  return `${trim(base)}/open/${route}/?${params.toString()}`;
}

export function settingsUrl(base: string): string {
  return `${trim(base)}/open/settings/?src=email`;
}

/** The footer link: a page on the site, which shows the result in the right language. */
export function unsubscribePageUrl(base: string, token: string, locale: Locale): string {
  return `${trim(base)}/unsubscribe/?t=${encodeURIComponent(token)}&l=${locale}`;
}

/** The `List-Unsubscribe` target that mail apps POST to for one-click unsubscribe. */
export function oneClickUrl(functionsBase: string, token: string): string {
  return `${trim(functionsBase)}/email-unsubscribe?t=${encodeURIComponent(token)}`;
}

function trim(url: string): string {
  return url.replace(/\/+$/, '');
}

// ── Tokens ──────────────────────────────────────────────────────────────────

const encoder = new TextEncoder();

function b64url(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromB64url(text: string): Uint8Array {
  const padded = text.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((text.length + 3) % 4);
  const raw = atob(padded);
  return Uint8Array.from(raw, (c) => c.charCodeAt(0));
}

async function hmac(secret: string, message: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(message)));
}

export async function unsubscribeToken(userId: string, secret: string): Promise<string> {
  const sig = await hmac(secret, `unsubscribe:${userId}`);
  return `${b64url(encoder.encode(userId))}.${b64url(sig.slice(0, 18))}`;
}

/** The user id the token was made for, or null if it was not made with this secret. */
export async function verifyUnsubscribeToken(token: string, secret: string): Promise<string | null> {
  const [idPart, sigPart] = token.split('.');
  if (!idPart || !sigPart) return null;
  let userId: string;
  try {
    userId = new TextDecoder().decode(fromB64url(idPart));
  } catch {
    return null;
  }
  if (!/^[0-9a-f-]{36}$/i.test(userId)) return null;
  const expected = b64url((await hmac(secret, `unsubscribe:${userId}`)).slice(0, 18));
  // Constant-time compare: the lengths are fixed, so only the bytes can differ.
  if (expected.length !== sigPart.length) return null;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sigPart.charCodeAt(i);
  return diff === 0 ? userId : null;
}
