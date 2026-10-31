import type { Language } from '@/shared/lib/i18n';

/** Thousands grouped the language's way: "1,514", "1 514", "1.514". */
const GROUP: Record<Language, string> = { en: ',', ru: ' ', es: '.', pt: '.', fr: ' ', de: '.', it: '.' };

export function grouped(value: number, language: Language): string {
  const digits = String(Math.abs(Math.round(value)));
  let out = '';
  for (let i = 0; i < digits.length; i += 1) {
    if (i > 0 && (digits.length - i) % 3 === 0) out += GROUP[language];
    out += digits[i];
  }
  return value < 0 ? `-${out}` : out;
}
