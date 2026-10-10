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
 * - A plan code from ChatGPT or Claude, in any of the shapes it arrives in:
 *   `walkito://plan?code=WK-…`, `walkito:///plan?code=WK-…`, and the universal
 *   link `https://walkito.site/p/WK-…/` (or `/p/WK-…` alone) → `/open/plan-code?code=WK-…`.
 *   The code is passed on as it came; the page decodes it and says whether it
 *   is one.
 *
 * Anything else passes through untouched, and anything that fails to parse is
 * returned as it came: this must never be the reason a link does nothing.
 */
export function rewriteIncomingPath(path: string): string {
  try {
    const url = new URL(path, 'walkito:///');
    const params = new URLSearchParams(url.search);
    const code = planCodeIn(url, params);
    if (code != null) return `/open/plan-code?code=${encodeURIComponent(code)}`;
    const open = params.get('open');
    if (open != null && open.length > 0) {
      params.delete('open');
      const rest = params.toString();
      const route = open.replace(/^\/+|\/+$/g, '');
      return `/open/${route}${rest ? `?${rest}` : ''}`;
    }
    if (ours(url.protocol) && url.host === 'open') {
      const route = url.pathname.replace(/^\/+|\/+$/g, '');
      return `/open/${route}${url.search}`;
    }
    return path;
  } catch {
    return path;
  }
}

/** Whether the scheme is ours: `walkito:`, or a variant's `walkito.dev:`. */
function ours(protocol: string): boolean {
  return /^walkito(\.[a-z]+)?:$/.test(protocol);
}

/**
 * The plan code a link carries, or null when it is not a plan-code link.
 *
 * `walkito://plan?code=` has `plan` as its host; `walkito:///plan?code=` has it
 * as its path. `/p/<code>` is the site's page for the code, which the
 * universal link opens straight in the app.
 */
function planCodeIn(url: URL, params: URLSearchParams): string | null {
  const route = ours(url.protocol) && url.host.length > 0 ? `/${url.host}${url.pathname}` : url.pathname;
  const clean = route.replace(/\/+$/, '');
  if (clean === '/plan') {
    const code = params.get('code');
    return code != null && code.trim().length > 0 ? code.trim() : null;
  }
  const match = /^\/p\/([^/]+)$/.exec(clean);
  return match != null ? decodeURIComponent(match[1]) : null;
}
