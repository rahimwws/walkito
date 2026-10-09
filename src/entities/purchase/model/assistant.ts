import { kv } from '@/shared/lib/storage';

/**
 * Which AI assistant sent this person, when one did: the `acq_source`
 * subscriber attribute in RevenueCat, and the reason the paywall asks for the
 * `ai_assistant` offering.
 *
 * Only ChatGPT and Claude are recorded. A plan code marked `other` says nothing
 * a revenue chart could split by, so it leaves the attribute unset.
 *
 * Kept on disk because the code is usually redeemed before RevenueCat has
 * finished starting on a cold launch; `startRevenueCat` sends it again once
 * the SDK is configured, and an attribute set twice is the same attribute.
 */

export type AssistantSource = 'chatgpt' | 'claude';

const KEY = 'purchase/acq-source';

export function isAssistantSource(value: string): value is AssistantSource {
  return value === 'chatgpt' || value === 'claude';
}

export function assistantSource(): AssistantSource | null {
  const value = kv.getString(KEY);
  return value != null && isAssistantSource(value) ? value : null;
}

export function storeAssistantSource(source: AssistantSource): void {
  kv.set(KEY, source);
}
