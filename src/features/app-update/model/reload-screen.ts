import type { ReloadScreenOptions } from 'expo-updates';

/**
 * What expo-updates draws between this bundle and the next: the colour the
 * sheet faded the screen to, with nothing on it, fading out once the new
 * bundle has drawn its first content (the launch splash's identical white).
 * No spinner: the restart takes a moment, and a spinner on a blank screen
 * reads as something going wrong.
 */
export function reloadScreenOptions(backgroundColor: string): ReloadScreenOptions {
  return {
    backgroundColor,
    fade: true,
    spinner: { enabled: false },
  };
}
