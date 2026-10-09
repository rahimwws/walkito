/**
 * Every link the system hands the app, rewritten to a path the app has.
 *
 * Runs before routing (`app/+native-intent.tsx`), on universal links, the
 * `walkito://` scheme and the widget's links alike. Two shapes are rewritten:
 *
 * - `walkito:///?open=today&minutes=3&src=email&e=…` → `/open/today?minutes=3&src=email&e=…`.
 *   The site's `/open/` page hands over in this shape on purpose: a build from
 *   before the `/open` route opens it as Home with a query it ignores, instead
 *   of Expo Router's "Unmatched Route" screen.
 * - `walkito://open/today` → `/open/today`. With two slashes the scheme's
 *   "host" is `open`, and it is folded back into the path.
 *
 * A OneLink (`https://walkito.onelink.me/2L97/…`) is not routed at all. It
 * opens the app through the universal link / App Link, and the AppsFlyer SDK
 * resolves it to its `deep_link_value` and hands that to `useOneLinks`; the
 * path itself (`/2L97/xyz`) is not a screen, and routing it would land on
 * "Unmatched Route". A launch from one starts on Home (`initial`), and one
 * arriving while the app is open leaves it where it is (null) until the SDK's
 * answer moves it.
 *
 * Anything else passes through untouched, and anything that fails to parse is
 * returned as it came: this must never be the reason a link does nothing.
 */
export function rewriteIncomingPath(path: string, initial = true): string | null {
  try {
    const url = new URL(path, 'walkito:///');
    if (url.protocol === 'https:' && /(^|\.)onelink\.me$/.test(url.hostname)) {
      return initial ? '/' : null;
    }
    const params = new URLSearchParams(url.search);
    const open = params.get('open');
    if (open != null && open.length > 0) {
      params.delete('open');
      const rest = params.toString();
      const route = open.replace(/^\/+|\/+$/g, '');
      return `/open/${route}${rest ? `?${rest}` : ''}`;
    }
    if (/^walkito(\.[a-z]+)?:$/.test(url.protocol) && url.host === 'open') {
      const route = url.pathname.replace(/^\/+|\/+$/g, '');
      return `/open/${route}${url.search}`;
    }
    return path;
  } catch {
    return path;
  }
}
