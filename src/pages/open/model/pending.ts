import { kv } from '@/shared/lib/storage';

/**
 * A link that arrived before the person could follow it.
 *
 * Someone installing from a OneLink, or tapping an email button before the
 * onboarding is done, must still go through the onboarding: it is what builds
 * the plan the link points into. The link is kept here instead of dropped, and
 * opened once the app proper is reachable (`usePendingLink`). One link at a
 * time — the latest wins — and a stale one is forgotten, so a link tapped last
 * week does not fire on the day the person finally finishes.
 */

const KEY = 'open/pending-link';
const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;

/** `href` is an `/open/…` path with its query, as the router takes it. */
export function savePendingLink(href: string): void {
  kv.set(KEY, JSON.stringify({ href, at: Date.now() }));
}

/** The kept link, removed as it is read; null when there is none or it went stale. */
export function takePendingLink(): string | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  kv.remove(KEY);
  try {
    const { href, at } = JSON.parse(raw) as { href?: unknown; at?: unknown };
    if (typeof href !== 'string' || !href.startsWith('/open/')) return null;
    if (typeof at !== 'number' || Date.now() - at > MAX_AGE_MS) return null;
    return href;
  } catch {
    return null;
  }
}

/** Whether a link is waiting, without taking it. */
export function hasPendingLink(): boolean {
  return kv.getString(KEY) != null;
}
