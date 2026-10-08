import type { ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';

/**
 * "Evidence: Strong / Moderate / Early", with one line on why.
 *
 * The three levels are defined in the About page's "How we research" section:
 * Strong = a clinical guideline grades it highly or several good trials agree;
 * Moderate = at least one well-designed trial; Early = small or early studies,
 * worth trying, and the label may change. "Not supported" is for a popular
 * rule a trial tested and did not back.
 */
export type EvidenceLevel = 'strong' | 'moderate' | 'early' | 'unsupported';

const LABEL: Record<Lang, Record<EvidenceLevel, string>> = {
  en: { strong: 'Strong', moderate: 'Moderate', early: 'Early', unsupported: 'Not supported' },
  ru: { strong: 'Сильные', moderate: 'Умеренные', early: 'Ранние', unsupported: 'Не подтверждено' },
  es: { strong: 'Sólida', moderate: 'Moderada', early: 'Inicial', unsupported: 'Sin respaldo' },
  pt: { strong: 'Forte', moderate: 'Moderada', early: 'Inicial', unsupported: 'Sem respaldo' },
  fr: { strong: 'Solide', moderate: 'Modérée', early: 'Préliminaire', unsupported: 'Non étayé' },
  it: { strong: 'Solida', moderate: 'Moderata', early: 'Preliminare', unsupported: 'Non supportato' },
  de: { strong: 'Stark', moderate: 'Mittel', early: 'Vorläufig', unsupported: 'Nicht belegt' },
};
const WORD: Record<Lang, string> = { en: 'Evidence', ru: 'Доказательства', es: 'Evidencia', pt: 'Evidência', fr: 'Niveau de preuve', it: 'Evidenza', de: 'Evidenz' };

export function Evidence({ level, lang = 'en', children }: { level: EvidenceLevel; lang?: Lang; children?: ReactNode }) {
  return (
    <p className={`evidence evidence-${level}`}>
      <strong>
        {WORD[lang]}: {LABEL[lang][level]}.
      </strong>
      {children ? <> {children}</> : null}
    </p>
  );
}
