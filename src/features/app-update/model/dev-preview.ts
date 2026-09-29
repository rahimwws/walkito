import { useEffect, useRef } from 'react';
import { DevSettings, Linking } from 'react-native';

/**
 * The development menu's entry. Developer-facing only — it never renders in a
 * build a user can install — so it is not in the catalogue.
 */
const MENU_TITLE = 'Preview update sheet';

/** `walkito://…?previewUpdate` (any path, any scheme variant) opens it too, for
 * `xcrun simctl openurl` from a terminal. */
const PREVIEW_PARAM = /[?&]previewUpdate\b/;

/**
 * Registers "Preview update sheet" in development builds.
 *
 * An over-the-air update cannot be tested without publishing one, and the
 * whole point of this sheet is how it moves. This raises it with a fake, ready
 * offer; accepting it plays the full choreography, holds the real native reload
 * screen up for a moment instead of restarting, then shows the "updated" note —
 * see `useAppUpdates().preview`.
 *
 * Both menus: React Native's `DevSettings` list, and the expo-dev-client menu
 * this project actually opens, which does not show `DevSettings` items. Its
 * `registerDevMenuItems` replaces the custom list outright; nothing else in the
 * app registers one.
 */
export function useDevPreviewMenu(open: () => void): void {
  const latest = useRef(open);
  latest.current = open;

  useEffect(() => {
    // The whole body sits inside the branch, not after an early return, so a
    // release bundle folds it away — dev-client's `require` included.
    if (__DEV__) {
      const run = () => latest.current();

      try {
        DevSettings.addMenuItem(MENU_TITLE, run);
      } catch {
        // Not in this runtime.
      }
      try {
        const devClient = require('expo-dev-client') as typeof import('expo-dev-client');
        void devClient
          .registerDevMenuItems([{ name: MENU_TITLE, callback: run }])
          .catch(() => undefined);
      } catch {
        // A binary without the dev client.
      }

      const onUrl = (url: string | null) => {
        if (url != null && PREVIEW_PARAM.test(url)) run();
      };
      void Linking.getInitialURL()
        .then(onUrl)
        .catch(() => undefined);
      const subscription = Linking.addEventListener('url', ({ url }) => onUrl(url));
      return () => subscription.remove();
    }
    return undefined;
  }, []);
}
