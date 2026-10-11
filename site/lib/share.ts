import { OG_LOCALE, TRANSLATED, type Lang, type TranslatedPage } from '@/lib/i18n';
import { SITE_NAME } from '@/lib/site';

/**
 * The share card a page in this language points at (og:image, twitter:image).
 *
 * Drawn by lib/og-card.tsx and built to /share/<lang>.jpg by app/share. Russian
 * and Spanish have their own; every other language shares the English one.
 * Files with an extension, so nginx serves them as image/jpeg with no rule of
 * its own, and JPEG so each stays well under the 300 KB WhatsApp previews.
 */
export function shareCard(lang: Lang): string {
  return lang === 'ru' || lang === 'es' ? `/share/${lang}.jpg` : '/share/en.jpg';
}

/**
 * Open Graph for a translated page that has no card of its own (support,
 * privacy): the layout's site name, locale and share card, plus the page's own
 * og:url. A page-level `openGraph` replaces the layout's whole object, so a
 * page that set nothing inherited the home page's og:url instead of its own.
 */
export function ogPage(page: TranslatedPage, lang: Lang) {
  return { siteName: SITE_NAME, locale: OG_LOCALE[lang], images: [shareCard(lang)], url: TRANSLATED[page][lang], type: 'website' as const };
}
