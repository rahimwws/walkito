/**
 * Signing in to an account: the platform's own (Apple, Google) and an emailed
 * code, with a password stage, from the intro only, for the review account.
 *
 * Here because two pages offer it — the intro, for somebody coming back to an
 * account they already have, and the screen after the first purchase that
 * saves a new plan to one.
 */
export { EmailSignInSheet, type EmailSheetPreview } from './ui/email-sign-in-sheet';
export { SIGN_IN_METHOD, useAccountSignIn, type SignInOutcome } from './model/use-account-sign-in';
export { SignInOptions, SignInSheet } from './ui/sign-in-options';
