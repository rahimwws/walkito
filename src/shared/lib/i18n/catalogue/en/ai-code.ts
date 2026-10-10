/** Plan codes from ChatGPT or Claude: the link on the intro, its sheet, the
 * note for somebody who already has a plan, and the paywall's one line about
 * the plan the code set up. Filled per domain; see `./core.ts` for the rules.
 *
 * Area names sit mid-sentence in `aiCode.paywallLine`, so they are lower
 * case wherever the language allows. */

import type { SourceEntry } from '../entry';

export const AI_CODE_EN = {
  'aiCode.introLink': 'Got a code from ChatGPT or Claude?',
  'aiCode.sheetTitle': 'Enter your plan code',
  'aiCode.sheetBlurb': 'The code your assistant gave you. We set up your plan from it.',
  'aiCode.placeholder': 'WK-XXXXXX',
  'aiCode.apply': 'Use code',
  'aiCode.invalid': 'Code not recognised',
  'aiCode.applied': 'Got it. Your plan is set up from the code.',
  'aiCode.onboardedTitle': 'You already have a plan',
  'aiCode.onboardedBody': 'Plan codes set up a new plan, so yours stays just as it is.',
  'aiCode.paywallLine': 'Your plan: {area}, {minutes} min, starts tomorrow morning',
  'aiCode.area.heelArch': 'heel and arch',
  'aiCode.area.achilles': 'Achilles',
  'aiCode.area.flatFeet': 'flat feet',
  'aiCode.area.shin': 'shins',
  'aiCode.area.general': 'stronger feet',
} as const satisfies Record<string, SourceEntry>;
