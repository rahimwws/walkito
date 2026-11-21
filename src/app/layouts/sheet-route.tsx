import { useLocalSearchParams } from 'expo-router';

import { FollowSheetScreen } from '@/features/follow';
import { LanguageSheetScreen } from '@/features/language-switch';
import { EmailSignInSheetScreen, SignInSheetScreen } from '@/features/sign-in';
import { CancelQuestionScreen } from '@/pages/offer';
import { DeleteAccountSheetScreen } from '@/pages/profile';
import { WidgetNudgeSheetScreen } from '@/pages/setup';
import { NoteSheetScreen } from '@/shared/ui/note-sheet';

/**
 * The native form sheets (language, follow, delete account, sign-in and its
 * email door, the paywall's cancel question, the setup's widget nudge and
 * the founders' note), as one dynamic route: `/sheet/<name>`.
 *
 * One dynamic route rather than a static route each, because of how the root
 * stack's guards fall back: when the URL names no available screen (a launch
 * on "/" before the tabs are reachable), expo-router takes the first
 * unguarded route in its sorted order, and static routes sort before dynamic
 * ones. A static `/note` sorted ahead of `/onboarding` and opened the app on
 * the founders' note. A dynamic route can never take the door's place.
 */
const SHEETS = {
  language: LanguageSheetScreen,
  follow: FollowSheetScreen,
  'delete-account': DeleteAccountSheetScreen,
  'sign-in': SignInSheetScreen,
  'email-sign-in': EmailSignInSheetScreen,
  'cancel-question': CancelQuestionScreen,
  'widget-nudge': WidgetNudgeSheetScreen,
  note: NoteSheetScreen,
} as const;

export function SheetRoute() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const Screen = SHEETS[name as keyof typeof SHEETS];
  return Screen == null ? null : <Screen />;
}
