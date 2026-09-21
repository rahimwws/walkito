export {
  completeOnboarding,
  resetOnboarding,
  useOnboarded,
} from './model/onboarding';
export { signInWithApple, type AppleSignIn } from './model/apple-auth';
export { deleteAccount, type DeleteResult } from './model/delete-account';
export {
  authState,
  claimWithEmail,
  sendPasswordReset,
  signInWithAppleToSupabase,
  signInWithEmail,
  signOut,
  startAuth,
  useAuth,
  type AuthResult,
  type AuthState,
} from './model/auth';
