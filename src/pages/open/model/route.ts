import type { ProgramRequest } from '@/shared/lib/program';

/**
 * Where an email link or a OneLink goes, from its path and query.
 *
 * The emails link to `https://walkito.site/open/{path}/` (or the `walkito://open/…`
 * the site hands over to), and the paths are the ones listed in
 * `supabase/functions/_shared/email/content.ts` → `BUTTON_PATH`. A OneLink's
 * `deep_link_value` is turned into one of these paths by `deepLinkPath`, which
 * adds `exercise/<id>` and `guide/<slug>`. Anything unknown goes Home rather
 * than nowhere: an old email for a screen that has since moved should still
 * open the app.
 */
export type LinkTarget =
  | { to: 'program'; request: ProgramRequest }
  | { to: 'progress' }
  | { to: 'library'; protocol: 'morning' }
  | { to: 'offer'; offering: string | null }
  | { to: 'settings' }
  | { to: 'guide'; url: string }
  | { to: 'home' };

const MINUTES = new Set(['3', '5', '10']);

/** An exercise id as the catalogue writes them: `heel_raise_towel`. */
const EXERCISE_ID = /^[a-z0-9_]+$/;
/** A walkito.site page: lowercase words, hyphens, an optional folder. No dots,
 * so a link cannot climb out of the site. */
const GUIDE_SLUG = /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/;

/** The paths an email link already uses, which a OneLink may name as they are. */
const PASSTHROUGH = new Set(['today', 'plan', 'test', 'progress', 'settings', 'library/morning']);

/**
 * A OneLink's `deep_link_value`, as an `/open/…` path ('' for Home).
 *
 * The campaign side writes one flat word per link, because AppsFlyer's link
 * builder takes a single value: `paywall`, `exercise_<id>`, `guide_<slug>`.
 * Anything this build does not know — a link made for a later version, a typo
 * in the dashboard — is Home, never nothing.
 */
export function deepLinkPath(value: string | null): string {
  const v = value?.trim().toLowerCase() ?? '';
  if (v === 'paywall') return 'paywall';
  if (v.startsWith('exercise_')) {
    const id = v.slice('exercise_'.length);
    return EXERCISE_ID.test(id) ? `exercise/${id}` : 'plan';
  }
  if (v.startsWith('guide_')) {
    const slug = v.slice('guide_'.length);
    return GUIDE_SLUG.test(slug) ? `guide/${slug}` : '';
  }
  return PASSTHROUGH.has(v) ? v : '';
}

export function linkTarget(segments: readonly string[], params: { minutes?: string; offering?: string }): LinkTarget {
  const path = segments.filter((s) => s.length > 0).join('/');
  if (path.startsWith('exercise/')) {
    const id = path.slice('exercise/'.length);
    return { to: 'program', request: EXERCISE_ID.test(id) ? { kind: 'exercise', id } : { kind: 'plan' } };
  }
  if (path.startsWith('guide/')) {
    const slug = path.slice('guide/'.length);
    // With the trailing slash the site serves its pages at; without it
    // walkito.site answers with a redirect to the same place.
    return GUIDE_SLUG.test(slug) ? { to: 'guide', url: `https://walkito.site/${slug}/` } : { to: 'home' };
  }
  switch (path) {
    case 'today': {
      const m = params.minutes != null && MINUTES.has(params.minutes) ? (Number(params.minutes) as 3 | 5 | 10) : undefined;
      return { to: 'program', request: m != null ? { kind: 'today', minutes: m } : { kind: 'today' } };
    }
    case 'plan':
      return { to: 'program', request: { kind: 'plan' } };
    case 'test':
      return { to: 'program', request: { kind: 'test' } };
    case 'progress':
      return { to: 'progress' };
    case 'library/morning':
      return { to: 'library', protocol: 'morning' };
    case 'paywall':
      return { to: 'offer', offering: params.offering ?? null };
    case 'settings':
      return { to: 'settings' };
    default:
      return { to: 'home' };
  }
}
