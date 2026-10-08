import { MinusIcon } from '@phosphor-icons/react/dist/ssr/Minus';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import { typeset } from '@/components/Prose';
import { TRANSLATED, type Lang } from '@/lib/i18n';

import './faq.css';

type FaqCopy = {
  kicker: string;
  /** Two whole lines, each its own clause, so no language has to split one. */
  h2: [string, string];
  moreTitle: string;
  /** The support sentence around its link. Kept as three parts, not two
   * fragments joined at the call site, so each language puts the link where
   * its own word order wants it. */
  more: { before: string; link: string; after: string };
};

/**
 * Section 06's own words. The questions and answers come from the home page
 * (Home.tsx `faq`), so there is one source for them; this holds only the frame.
 * "A person replies" is what the support pages already promise.
 */
const COPY: Record<Lang, FaqCopy> = {
  en: {
    kicker: 'FAQ',
    h2: ['Got questions?', 'Here are straight answers.'],
    moreTitle: 'Still have questions?',
    more: { before: '', link: 'Write to us', after: ' and a person replies.' },
  },
  ru: {
    kicker: 'Вопросы',
    h2: ['Есть вопросы?', 'Отвечаем прямо.'],
    moreTitle: 'Остались вопросы?',
    more: { before: '', link: 'Напишите нам', after: ', и вам ответит человек.' },
  },
  es: {
    kicker: 'Preguntas',
    h2: ['¿Tienes preguntas?', 'Respuestas sin rodeos.'],
    moreTitle: '¿Te queda alguna duda?',
    more: { before: '', link: 'Escríbenos', after: ' y te responde una persona.' },
  },
  pt: {
    kicker: 'Perguntas',
    h2: ['Alguma pergunta?', 'Respostas sem rodeios.'],
    moreTitle: 'Ainda ficou alguma dúvida?',
    more: { before: '', link: 'Escreva para a gente', after: ' e uma pessoa responde.' },
  },
  fr: {
    kicker: 'Questions',
    h2: ['Des questions ?', 'Voici des réponses claires.'],
    moreTitle: 'Encore une question ?',
    more: { before: '', link: 'Écrivez-nous', after: ', une vraie personne vous répond.' },
  },
  it: {
    kicker: 'Domande',
    h2: ['Hai domande?', 'Ecco risposte chiare.'],
    moreTitle: 'Hai ancora qualche dubbio?',
    more: { before: '', link: 'Scrivici', after: ' e ti risponde una persona.' },
  },
  de: {
    kicker: 'Fragen',
    h2: ['Du hast Fragen?', 'Hier sind klare Antworten.'],
    moreTitle: 'Noch etwas offen?',
    more: { before: '', link: 'Schreib uns', after: ', ein Mensch antwortet dir.' },
  },
};

/**
 * Section 06: the questions, on a dark band the white page closes over.
 *
 * Native `<details>` sharing one `name`, so it is an exclusive accordion with
 * no JavaScript: the answers stay in the HTML for search engines and
 * assistants, the browser handles keyboard and screen readers, and opening one
 * closes the last. The first starts open so the section shows what it is
 * before anyone taps.
 */
export function Faq({ lang, items }: { lang: Lang; items: { q: string; a: string }[] }) {
  const copy = COPY[lang];

  return (
    <InView className="hfaq">
      <div className="hfaq-panel">
        <div className="hfaq-head">
          <Kicker num="06" label={copy.kicker} />
          <h2 className="hfaq-title">
            <span className="hfaq-line">
              <span>{copy.h2[0]}</span>
            </span>{' '}
            <span className="hfaq-line hfaq-line-2">
              <span>{copy.h2[1]}</span>
            </span>
          </h2>
        </div>

        <div className="hfaq-list">
          {items.map((item, k) => (
            <details
              key={item.q}
              name="home-faq"
              className="hfaq-item"
              open={k === 0}
              style={{ '--i': k } as React.CSSProperties}
            >
              <summary className="hfaq-q">
                {/* The number and the button are drawing; the summary reads
                    as the question alone. */}
                <span className="hfaq-num" aria-hidden>
                  {k + 1}
                </span>
                <h3 className="hfaq-qtext">{typeset(item.q)}</h3>
                <span className="hfaq-toggle" aria-hidden>
                  <PlusIcon className="hfaq-plus" size={22} weight="bold" />
                  <MinusIcon className="hfaq-minus" size={22} weight="bold" />
                </span>
              </summary>
              <div className="hfaq-a">
                <p>{typeset(item.a)}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="hfaq-more">
          <img className="hfaq-mascot" src="/hero/mascot-tasks.webp" alt="" width={240} height={240} />
          <div className="hfaq-more-copy">
            <p className="hfaq-more-title">{copy.moreTitle}</p>
            <p className="hfaq-more-text">
              {copy.more.before}
              <a href={TRANSLATED.support[lang]}>{copy.more.link}</a>
              {copy.more.after}
            </p>
          </div>
        </div>
      </div>
    </InView>
  );
}
