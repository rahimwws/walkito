export {
  completeOnboarding,
  onboardingDone,
  resetOnboarding,
  useOnboarded,
} from './model/onboarding';
export { signInWithApple, type AppleSignIn } from './model/apple-auth';
export { signInWithGoogle, signInWithPlatform } from './model/google-auth';
export {
  EMAIL_CODE_LENGTH,
  confirmEmailCode,
  resendEmailCode,
  sendEmailCode,
  signInWithEmail,
  type AuthFailure,
  type EmailCodeMode,
  type EmailCodeSent,
  type EmailSignIn,
} from './model/email-auth';
export { deleteAccount, type DeleteResult } from './model/delete-account';
export {
  accountSaved,
  armSetup,
  deferAccount,
  finishSetup,
  settleAccount,
  useAccountOwed,
  useSetupFinishedAt,
  useSetupPending,
} from './model/setup';
export {
  armHomeTour,
  askForDayOne,
  dayOneAsked,
  dropDayOneAsk,
  useDayOneAsked,
  devRestartHomeTour,
  finishHomeTour,
  homeTourStage,
  homeTourState,
  homeTourForced,
  setHomeTourStage,
  setHomeTourStep,
  useHomeTourStage,
  useHomeTourState,
  useHomeTourStep,
  type HomeTourStage,
  type HomeTourState,
} from './model/home-tour';
/** The first session before the paywall: done (in the onboarding or there),
 * passed on, or asked for again by a Day 1 reminder. The onboarding marks it
 * when its first move ran; the paywall reads it. */
export {
  devSetFirstSession,
  firstSession,
  firstSessionAgain,
  firstSessionOfferedAgain,
  markFirstSession,
  offerFirstSessionAgain,
  useFirstSessionAgain,
  type FirstSession,
} from './model/first-session';
