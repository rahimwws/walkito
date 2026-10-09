import { holdPlanCode, markPlanCodeRedeemed } from '@/entities/plan-code';
import { recordAssistantSource } from '@/entities/purchase';
import { track } from '@/shared/lib/analytics';
import { decodePlanCode, type PlanCodeParams } from '@/shared/lib/plan-code';

/**
 * A plan code from ChatGPT or Claude, taken in.
 *
 * Two ways in, one way through. A link (`pages/open`) only holds the code:
 * onboarding may not be on screen yet. Onboarding then redeems it, or a code
 * typed on its first screen is redeemed directly. Redeeming is what prefills
 * the answers, tags the RevenueCat customer and is counted.
 */

export type PlanCodeLinkResult = 'held' | 'already-onboarded' | 'invalid';

/**
 * A plan-code link arrived. Somebody still onboarding gets the code held for
 * onboarding to take up; somebody with a plan keeps theirs untouched, and the
 * code is only counted.
 */
export function openPlanCodeLink(code: string, onboarded: boolean): PlanCodeLinkResult {
  const params = decodePlanCode(code);
  if (params == null) {
    track('ai_code_invalid');
    return 'invalid';
  }
  track('ai_code_opened', { source: params.source });
  if (onboarded) return 'already-onboarded';
  holdPlanCode(code);
  return 'held';
}

/**
 * Onboarding is being prefilled from this code. Its parameters, or null for a
 * code that is not one (counted as invalid).
 */
export function redeemPlanCode(code: string): PlanCodeParams | null {
  const params = markPlanCodeRedeemed(code);
  if (params == null) {
    track('ai_code_invalid');
    return null;
  }
  track('ai_code_redeemed', { source: params.source, area: params.area, minutes: params.minutes });
  recordAssistantSource(params.source);
  return params;
}
