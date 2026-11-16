import type { SourceEntry } from '../entry';

/**
 * The trust line under the paywall's headline and on the exercise sheet
 * (`shared/ui/guidelines-line`).
 *
 * **What may be said.** The exercises are built on physical therapy
 * guidelines. Never that a named person, a clinician or "doctors" reviewed,
 * approved or certified them, and never "medically approved" or "clinically
 * proven" as a claim about the product.
 */
export const TRUST_EN = {
  'trust.guidelines': 'Exercises built on physical therapy guidelines',
} as const satisfies Record<string, SourceEntry>;
