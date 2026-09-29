import { CHROME, TRANSLATED, type Lang } from '@/lib/i18n';
import { formatDate } from '@/lib/schema';

/**
 * "Written by the Walkito team · Updated <date>", near the top of every
 * article. The team links to the About page in the same language, which says
 * who writes the pages and how. The JSON-LD author stays the Organization
 * "Walkito" (`authorFor` in `lib/schema.ts`).
 *
 * A whole phrase per language, split only around the link.
 */
const WRITTEN_BY: Record<Lang, [string, string]> = {
  en: ['Written by ', 'the Walkito team'],
  ru: ['Автор: ', 'команда Walkito'],
  es: ['Escrito por ', 'el equipo de Walkito'],
};

export function Byline({ lang, updated }: { lang: Lang; updated: string }) {
  const c = CHROME[lang];
  const [before, team] = WRITTEN_BY[lang];
  return (
    <p className="byline">
      {before}
      <a href={TRANSLATED.about[lang]}>{team}</a>
      {' · '}
      {c.updated} <time dateTime={updated}>{formatDate(updated, lang)}</time>
    </p>
  );
}
