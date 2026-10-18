import type { Lang } from '@/lib/i18n';

const CITE: Record<Lang, { label: string; free: string; open: string; close: string; locale: string }> = {
  en: { label: 'Cite this page', free: 'Free to share with a link to this page.', open: '“', close: '”', locale: 'en-US' },
  es: { label: 'Cita esta página', free: 'Puedes compartirla libremente con un enlace a esta página.', open: '«', close: '»', locale: 'es' },
  ru: { label: 'Как сослаться на эту страницу', free: 'Можно свободно использовать со ссылкой на эту страницу.', open: '«', close: '»', locale: 'ru' },
  pt: { label: 'Cite esta página', free: 'Uso livre com um link para esta página.', open: '“', close: '”', locale: 'pt-BR' },
  fr: { label: 'Citer cette page', free: 'Libre de partage avec un lien vers cette page.', open: '«\u00A0', close: '\u00A0»', locale: 'fr' },
  it: { label: 'Cita questa pagina', free: 'Uso libero con un link a questa pagina.', open: '“', close: '”', locale: 'it' },
  de: { label: 'Diese Seite zitieren', free: 'Frei teilbar mit einem Link auf diese Seite.', open: '„', close: '“', locale: 'de' },
};

/** A ready-made citation (plan A.12): author, title, date, link. */
export function CiteBox({ lang, title, updated, url }: { lang: Lang; title: string; updated: string; url: string }) {
  const t = CITE[lang];
  // No trailing period of its own ("7 октября 2026 г."): the sentence adds one.
  const date = new Date(`${updated}T00:00:00Z`).toLocaleDateString(t.locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).replace(/\.$/, '');
  return (
    <p className="printable-box cite-box">
      <strong>{t.label}{lang === 'fr' ? '\u00A0:' : ':'}</strong> Walkito. {t.open}{title}{t.close}. {date}. <a href={url}>{url}</a>. {t.free}
    </p>
  );
}
