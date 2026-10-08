import type { Lang } from '@/lib/i18n';

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
