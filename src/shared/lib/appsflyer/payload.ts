/**
 * What AppsFlyer hands the app, read into plain shapes. Pure, so the tests can
 * reach it without the native module.
 */

/** The install's conversion data, as AppsFlyer sends it: string keys, loosely typed values. */
export type ConversionData = Record<string, unknown>;

/** A OneLink the app was opened from. */
export type IncomingDeepLink = {
  /** The link's `deep_link_value`, or null when it has none. */
  value: string | null;
  /** True when the app was installed from the link and this is its first open. */
  deferred: boolean;
};

function text(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function flag(value: unknown): boolean {
  return value === true || value === 'true';
}

/**
 * The deep link inside a deep-link callback, or null when nothing was found.
 *
 * The SDK normalises the envelope (`status`, `deepLink`), but the payload's
 * keys are each platform's own: Android sends the snake_case click event,
 * iOS has been seen with camelCase properties too. Both are read.
 */
export function deepLinkFrom(data: unknown): IncomingDeepLink | null {
  if (data == null || typeof data !== 'object') return null;
  const envelope = data as { status?: unknown; deepLink?: unknown };
  if (envelope.status !== 'FOUND') return null;
  const link = (envelope.deepLink ?? {}) as Record<string, unknown>;
  return {
    value: text(link.deep_link_value) ?? text(link.deepLinkValue),
    deferred: flag(link.is_deferred) || flag(link.isDeferred),
  };
}
