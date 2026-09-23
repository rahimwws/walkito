/**
 * What an owner earns when their code is used: free time on the programme.
 *
 * The discount alone did nothing for the people most likely to share a code —
 * the ones who have already paid. They would only ever see it at the renewal,
 * twelve weeks later. Weeks added to the access they already hold are a reward
 * that lands the day a friend joins.
 *
 * Pure and in its own file, for the reason `access.ts` is: `referral.ts` loads
 * storage and the network client, and this is the arithmetic a test should
 * reach.
 */

/** Free weeks per friend who joined with the code. */
export const REFERRAL_BONUS_WEEKS = 4;

/**
 * How many friends count towards it.
 *
 * Capped because the server cannot yet tell a real friend from a second
 * anonymous install of the owner's own phone: redeeming a code needs nothing
 * but a fresh sign-in, which a reinstall provides. Uncapped, one person with a
 * spare afternoon could stack a year of free access. Three friends is twelve
 * weeks — a whole second programme — which is generous for the honest case and
 * bounded for the other. Lift it once only paying friends are counted.
 */
export const REFERRAL_BONUS_MAX_INVITES = 3;

/** The extra days of programme access `invites` friends have earned. */
export function referralBonusDays(invites: number): number {
  // A count that is not a number is no count at all — never a reason to hand
  // `NaN` to the date arithmetic, which would turn every expiry into nonsense.
  if (!Number.isFinite(invites)) return 0;
  const counted = Math.max(0, Math.min(Math.floor(invites), REFERRAL_BONUS_MAX_INVITES));
  return counted * REFERRAL_BONUS_WEEKS * 7;
}
