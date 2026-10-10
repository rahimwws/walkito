/**
 * Taking in a plan code from ChatGPT or Claude.
 *
 * In `features` because two pages need it: `pages/open` receives the link and
 * `pages/onboarding` redeems it (from the link, or typed on its first screen).
 */
export { openPlanCodeLink, redeemPlanCode, type PlanCodeLinkResult } from './model/redeem';
