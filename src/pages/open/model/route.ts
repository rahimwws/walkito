import type { ProgramRequest } from '@/shared/lib/program';

/**
 * Where an email link goes, from its path and query.
 *
 * The emails link to `https://walkito.site/open/{path}/` (or the `walkito://open/…`
 * the site hands over to), and the paths are the ones listed in
 * `supabase/functions/_shared/email/content.ts` → `BUTTON_PATH`. Anything
 * unknown goes Home rather than nowhere: an old email for a screen that has
 * since moved should still open the app.
 */
export type LinkTarget =
  | { to: 'program'; request: ProgramRequest }
  | { to: 'progress' }
  | { to: 'library'; protocol: 'morning' }
  | { to: 'offer'; offering: string | null }
  | { to: 'settings' }
  /** A plan code from ChatGPT or Claude (`intent.ts` routes every shape of it here). */
  | { to: 'plan-code'; code: string }
  | { to: 'home' };

const MINUTES = new Set(['3', '5', '10']);

export function linkTarget(segments: readonly string[], params: { minutes?: string; offering?: string; code?: string }): LinkTarget {
  const path = segments.filter((s) => s.length > 0).join('/');
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
    case 'plan-code':
      return { to: 'plan-code', code: params.code ?? '' };
    default:
      return { to: 'home' };
  }
}
