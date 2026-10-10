import type { CSSProperties } from 'react';

import BodyPartLegIcon from '@hugeicons/core-free-icons/BodyPartLegIcon';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowUpRight';
import { ArticleIcon } from '@phosphor-icons/react/dist/ssr/Article';
import { BarbellIcon } from '@phosphor-icons/react/dist/ssr/Barbell';
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr/BookOpen';
import { ClockIcon } from '@phosphor-icons/react/dist/ssr/Clock';
import { FileTextIcon } from '@phosphor-icons/react/dist/ssr/FileText';
import { WavesIcon } from '@phosphor-icons/react/dist/ssr/Waves';

import { Icon } from '@/components/Icon';
import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import { typeset } from '@/components/Prose';
import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './guides.css';

const { testEveryDays } = PROGRAM;

export type GuideItem = { title: string; text: string; link: string; href: string; hrefLang?: string };

/** One count's wording, as the app's catalogue spells it per plural form. */
type Forms = { one: string; few?: string; many?: string; other?: string };

const NBSP = ' ';

/**
 * The app's plural rule for the seven languages (`src/shared/lib/i18n/plural.ts`):
 * Russian takes `few` for 2-4 and 22-24 and `many` for 11-14 whatever their last
 * digit; French and Portuguese count 0 and 1 as one; the rest only 1. The
 * number is joined to its word with a no-break space, so a narrow card never
 * strands it at the end of a line.
 */
function count(lang: Lang, n: number, forms: Forms): string {
  let form: string | undefined;
  if (lang === 'ru') {
    const d = n % 10;
    const dd = n % 100;
    form = d === 1 && dd !== 11 ? forms.one : d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? forms.few : forms.many;
  } else if (lang === 'fr' || lang === 'pt') {
    form = n < 2 ? forms.one : forms.other;
  } else {
    form = n === 1 ? forms.one : forms.other;
  }
  return (form ?? forms.one).replace('{count} ', `${n}${NBSP}`).replace('{count}', String(n));
}

/**
 * The app's own words for the drawings, copied from its catalogue
 * (`src/shared/lib/i18n/catalogue/<lang>/`): `pages.plan.*`, `pages.week.goal.*`,
 * `pages.program.kind*` and `session.minutes` (pages.ts, core.ts) for the plan;
 * `testday.results.*` (testday.ts) and `progress.*` (progress.ts) for the
 * tests. Capitals, arrows and the app's own «tu» in French are kept, so each
 * drawing reads as the screen it reproduces. Change them there first.
 */
type AppWords = {
  goalEyebrow: string;
  /** `pages.plan.outcome.all_day`: the bracketed word is the card's chip. */
  outcome: string;
  step: (n: number, total: number, goal: string) => string;
  goalCalves: string;
  goalNow: (value: string) => string;
  upcoming: string;
  strength: string;
  mobility: string;
  minutes: Forms;
  calf: string;
  unitRaises: Forms;
  moreRaises: Forms;
  goalRaises: Forms;
  toGoRaises: Forms;
  legs: (left: number, right: number) => string;
  strengthTitle: string;
  calfChange: (from: number, to: number) => string;
  balanceChange: (from: number, to: number) => string;
  archChange: (from: number, to: number) => string;
  strengthSince: string;
};

type GuidesCopy = {
  kicker: string;
  h2: string;
  lead: string;
  /** One or two chips per card, in the order of `items`: the plan, the tests, the evidence. */
  tags: [string[], string[], string[]];
  /** Neutral kinds of source on the evidence card, never a named study: guideline, trial, review. */
  papers: [string, string, string];
  app: AppWords;
};

/**
 * Section 05's frame, per language. The cards' own titles, texts and link
 * labels come from the home page (`Home.tsx` and `lib/home/<lang>.ts`, `how`),
 * so there is one source for them; this holds the heading, the chips and the
 * words inside the drawings.
 */
const COPY: Record<Lang, GuidesCopy> = {
  en: {
    kicker: 'Guides',
    h2: 'Read the method.',
    lead: 'How the plan is built, what the tests measure and where the exercises come from, in plain words.',
    tags: [['Plan', 'Weekly goal'], ['Tests', `Every ${testEveryDays} days`], ['Evidence', 'Guidelines']],
    papers: ['Guideline', 'Trial', 'Review'],
    app: {
      goalEyebrow: 'Your goal',
      outcome: 'On your feet [all day]',
      step: (n, total, goal) => `Step ${n} of ${total} · ${goal}`,
      goalCalves: 'Stronger calves',
      goalNow: (v) => `Now ${v}`,
      upcoming: 'Coming up',
      strength: 'Strength',
      mobility: 'Mobility',
      minutes: { one: '{count} min', other: '{count} min' },
      calf: 'Calf raises',
      unitRaises: { one: 'raise', other: 'raises' },
      moreRaises: { one: '{count} more raise than last time', other: '{count} more raises than last time' },
      goalRaises: { one: 'Goal {count} raise', other: 'Goal {count} raises' },
      toGoRaises: { one: '{count} raise to go', other: '{count} raises to go' },
      legs: (l, r) => `Left ${l} · right ${r}`,
      strengthTitle: 'Strength and balance',
      calfChange: (f, t) => `Calf raises ${f} → ${t}`,
      balanceChange: (f, t) => `Balance ${f}s → ${t}s`,
      archChange: (f, t) => `Arch hold ${f}s → ${t}s`,
      strengthSince: 'Your first test against your latest.',
    },
  },
  ru: {
    kicker: 'Гайды',
    h2: 'Как устроен метод.',
    lead: 'Как строится план, что измеряют тесты и откуда взяты упражнения, простыми словами.',
    tags: [['План', 'Цель недели'], ['Тесты', `Каждые ${testEveryDays} дней`], ['Исследования', 'Рекомендации']],
    papers: ['Рекомендации', 'Испытание', 'Обзор'],
    app: {
      goalEyebrow: 'Ваша цель',
      outcome: 'На ногах [весь день]',
      step: (n, total, goal) => `Шаг ${n} из${NBSP}${total} · ${goal}`,
      goalCalves: 'Сильные икры',
      goalNow: (v) => `Сейчас ${v}`,
      upcoming: 'Дальше',
      strength: 'Сила',
      mobility: 'Подвижность',
      minutes: { one: '{count} мин', few: '{count} мин', many: '{count} мин' },
      calf: 'Подъёмы на носки',
      unitRaises: { one: 'подъём', few: 'подъёма', many: 'подъёмов' },
      moreRaises: {
        one: 'На {count} подъём больше, чем в прошлый раз',
        few: 'На {count} подъёма больше, чем в прошлый раз',
        many: 'На {count} подъёмов больше, чем в прошлый раз',
      },
      goalRaises: { one: 'Цель {count} подъём', few: 'Цель {count} подъёма', many: 'Цель {count} подъёмов' },
      toGoRaises: { one: 'Ещё {count} подъём', few: 'Ещё {count} подъёма', many: 'Ещё {count} подъёмов' },
      legs: (l, r) => `Левая ${l} · правая ${r}`,
      strengthTitle: 'Сила и баланс',
      calfChange: (f, t) => `Подъёмы на носки ${f} → ${t}`,
      balanceChange: (f, t) => `Баланс ${f}${NBSP}с → ${t}${NBSP}с`,
      archChange: (f, t) => `Удержание свода ${f}${NBSP}с → ${t}${NBSP}с`,
      strengthSince: 'Первый тест и последний.',
    },
  },
  es: {
    kicker: 'Guías',
    h2: 'Conoce el método.',
    lead: 'Cómo se arma el plan, qué miden las pruebas y de dónde salen los ejercicios, en palabras sencillas.',
    tags: [['Plan', 'Meta semanal'], ['Pruebas', `Cada ${testEveryDays} días`], ['Evidencia', 'Guías clínicas']],
    papers: ['Guía', 'Ensayo', 'Revisión'],
    app: {
      goalEyebrow: 'Tu objetivo',
      outcome: 'De pie [todo el día]',
      step: (n, total, goal) => `Paso ${n} de ${total} · ${goal}`,
      goalCalves: 'Pantorrillas más fuertes',
      goalNow: (v) => `Ahora ${v}`,
      upcoming: 'Lo siguiente',
      strength: 'Fuerza',
      mobility: 'Movilidad',
      minutes: { one: '{count} min', other: '{count} min' },
      calf: 'Elevaciones de talón',
      unitRaises: { one: 'elevación', other: 'elevaciones' },
      moreRaises: {
        one: '{count} elevación más que la última vez',
        other: '{count} elevaciones más que la última vez',
      },
      goalRaises: { one: 'Meta {count} elevación', other: 'Meta {count} elevaciones' },
      toGoRaises: { one: 'Falta {count} elevación', other: 'Faltan {count} elevaciones' },
      legs: (l, r) => `Izquierda ${l} · derecha ${r}`,
      strengthTitle: 'Fuerza y equilibrio',
      calfChange: (f, t) => `Elevaciones de talón ${f} → ${t}`,
      balanceChange: (f, t) => `Equilibrio ${f}${NBSP}s → ${t}${NBSP}s`,
      archChange: (f, t) => `Arco sostenido ${f}${NBSP}s → ${t}${NBSP}s`,
      strengthSince: 'Tu primera prueba frente a la última.',
    },
  },
  pt: {
    kicker: 'Guias',
    h2: 'Conheça o método.',
    lead: 'Como o plano é montado, o que os testes medem e de onde vêm os exercícios, em palavras simples.',
    tags: [['Plano', 'Meta da semana'], ['Testes', `A cada ${testEveryDays} dias`], ['Evidências', 'Diretrizes']],
    papers: ['Diretriz', 'Ensaio', 'Revisão'],
    app: {
      goalEyebrow: 'Seu objetivo',
      outcome: 'De pé [o dia todo]',
      step: (n, total, goal) => `Etapa ${n} de ${total} · ${goal}`,
      goalCalves: 'Panturrilhas mais fortes',
      goalNow: (v) => `Agora ${v}`,
      upcoming: 'Em seguida',
      strength: 'Força',
      mobility: 'Mobilidade',
      minutes: { one: '{count} min', other: '{count} min' },
      calf: 'Elevação de calcanhar',
      unitRaises: { one: 'elevação', other: 'elevações' },
      moreRaises: {
        one: '{count} elevação a mais que da última vez',
        other: '{count} elevações a mais que da última vez',
      },
      goalRaises: { one: 'Meta {count} elevação', other: 'Meta {count} elevações' },
      toGoRaises: { one: 'Falta {count} elevação', other: 'Faltam {count} elevações' },
      legs: (l, r) => `Esquerda ${l} · direita ${r}`,
      strengthTitle: 'Força e equilíbrio',
      calfChange: (f, t) => `Elevações de calcanhar ${f} → ${t}`,
      balanceChange: (f, t) => `Equilíbrio ${f}${NBSP}s → ${t}${NBSP}s`,
      archChange: (f, t) => `Arco sustentado ${f}${NBSP}s → ${t}${NBSP}s`,
      strengthSince: 'Seu primeiro teste comparado com o mais recente.',
    },
  },
  fr: {
    kicker: 'Guides',
    h2: 'Découvrez la méthode.',
    lead: 'Comment le plan est construit, ce que mesurent les tests et d’où viennent les exercices, en termes simples.',
    tags: [['Plan', 'Objectif de la semaine'], ['Tests', `Tous les ${testEveryDays}${NBSP}jours`], ['Études', 'Recommandations']],
    papers: ['Recommandation', 'Essai', 'Revue'],
    app: {
      goalEyebrow: 'Ton objectif',
      outcome: 'Debout [toute la journée]',
      step: (n, total, goal) => `Étape ${n} sur ${total} · ${goal}`,
      goalCalves: 'Des mollets plus forts',
      goalNow: (v) => `Maintenant ${v}`,
      upcoming: 'À venir',
      strength: 'Force',
      mobility: 'Mobilité',
      minutes: { one: '{count} min', other: '{count} min' },
      calf: 'Montées sur pointes',
      unitRaises: { one: 'montée', other: 'montées' },
      moreRaises: {
        one: '{count} montée de plus que la dernière fois',
        other: '{count} montées de plus que la dernière fois',
      },
      goalRaises: { one: 'Objectif {count} montée', other: 'Objectif {count} montées' },
      toGoRaises: { one: 'Encore {count} montée', other: 'Encore {count} montées' },
      legs: (l, r) => `Gauche ${l} · droite ${r}`,
      strengthTitle: 'Force et équilibre',
      calfChange: (f, t) => `Montées sur pointes ${f} → ${t}`,
      balanceChange: (f, t) => `Équilibre ${f}${NBSP}s → ${t}${NBSP}s`,
      archChange: (f, t) => `Maintien de la voûte ${f}${NBSP}s → ${t}${NBSP}s`,
      strengthSince: 'Ton premier test face au plus récent.',
    },
  },
  it: {
    kicker: 'Guide',
    h2: 'Scopri il metodo.',
    lead: 'Come è costruito il piano, cosa misurano i test e da dove vengono gli esercizi, in parole semplici.',
    tags: [['Piano', 'Obiettivo della settimana'], ['Test', `Ogni ${testEveryDays}${NBSP}giorni`], ['Evidenze', 'Linee guida']],
    papers: ['Linea guida', 'Studio', 'Revisione'],
    app: {
      goalEyebrow: 'Il tuo obiettivo',
      outcome: 'In piedi [tutto il giorno]',
      step: (n, total, goal) => `Passo ${n} di ${total} · ${goal}`,
      goalCalves: 'Polpacci più forti',
      goalNow: (v) => `Ora ${v}`,
      upcoming: 'In arrivo',
      strength: 'Forza',
      mobility: 'Mobilità',
      minutes: { one: '{count} min', other: '{count} min' },
      calf: 'Sollevamenti sulle punte',
      unitRaises: { one: 'sollevamento', other: 'sollevamenti' },
      moreRaises: {
        one: '{count} sollevamento in più dell’ultima volta',
        other: '{count} sollevamenti in più dell’ultima volta',
      },
      goalRaises: { one: 'Obiettivo {count} sollevamento', other: 'Obiettivo {count} sollevamenti' },
      toGoRaises: { one: 'Manca {count} sollevamento', other: 'Mancano {count} sollevamenti' },
      legs: (l, r) => `Sinistra ${l} · destra ${r}`,
      strengthTitle: 'Forza ed equilibrio',
      calfChange: (f, t) => `Sollevamenti sulle punte ${f} → ${t}`,
      balanceChange: (f, t) => `Equilibrio ${f}${NBSP}s → ${t}${NBSP}s`,
      archChange: (f, t) => `Tenuta dell’arco ${f}${NBSP}s → ${t}${NBSP}s`,
      strengthSince: 'Il tuo primo test confrontato con l’ultimo.',
    },
  },
  de: {
    kicker: 'Ratgeber',
    h2: 'So funktioniert die Methode.',
    lead: 'Wie der Plan aufgebaut ist, was die Tests messen und woher die Übungen kommen, in einfachen Worten.',
    tags: [['Plan', 'Wochenziel'], ['Tests', `Alle ${testEveryDays}${NBSP}Tage`], ['Studienlage', 'Leitlinien']],
    papers: ['Leitlinie', 'Studie', 'Übersicht'],
    app: {
      goalEyebrow: 'Dein Ziel',
      outcome: '[Den ganzen Tag] auf den Beinen',
      step: (n, total, goal) => `Schritt ${n} von ${total} · ${goal}`,
      goalCalves: 'Kräftigere Waden',
      goalNow: (v) => `Jetzt ${v}`,
      upcoming: 'Als Nächstes',
      strength: 'Kraft',
      mobility: 'Beweglichkeit',
      minutes: { one: '{count} Min.', other: '{count} Min.' },
      calf: 'Fersenheben',
      unitRaises: { one: 'Wiederholung', other: 'Wiederholungen' },
      moreRaises: {
        one: '{count} Wiederholung mehr als beim letzten Mal',
        other: '{count} Wiederholungen mehr als beim letzten Mal',
      },
      goalRaises: { one: 'Ziel {count} Wiederholung', other: 'Ziel {count} Wiederholungen' },
      toGoRaises: { one: 'Noch {count} Wiederholung', other: 'Noch {count} Wiederholungen' },
      legs: (l, r) => `Links ${l} · rechts ${r}`,
      strengthTitle: 'Kraft und Balance',
      calfChange: (f, t) => `Fersenheben ${f} → ${t}`,
      balanceChange: (f, t) => `Balance ${f}${NBSP}s → ${t}${NBSP}s`,
      archChange: (f, t) => `Gewölbe halten ${f}${NBSP}s → ${t}${NBSP}s`,
      strengthSince: 'Dein erster Test im Vergleich zu deinem letzten.',
    },
  },
};

/**
 * Sample figures, the same person as the Progress visual in "How it works"
 * (`components/home/ProgressVisual.tsx`): calf raises from 11 at the first
 * test to 18 now, 15 the time before; balance 14 to 26 s; arch hold 22 to
 * 41 s. The plan is on step 2 of 3 of its goal. Every sentence that quotes a
 * number takes its plural from the number, so changing one stays grammatical.
 */
const SAMPLE = {
  calf: { first: 11, before: 15, now: 18, left: 18, right: 21 },
  balance: [14, 26],
  arch: [22, 41],
  step: { n: 2, total: 3 },
  minutes: PROGRAM.defaultMinutes,
} as const;
const CALF_GOAL = PROGRAM.goals.calfRaises;

/** The tests card is the big coloured one in the middle. */
const FEATURED = 1;
const AREAS = ['gd-a', 'gd-f', 'gd-b'];

const vars = (v: Record<string, string | number>) => v as CSSProperties;
const glyph = { weight: 'fill', 'aria-hidden': true, focusable: false } as const;

/**
 * Section 05: three guides, the middle one large. Each card is a link to the
 * page that explains it, with a piece of the app in place of a photo: the plan
 * screen's goal card and the days coming up, the test results with the
 * Progress screen's strength card, and the kinds of source the exercises are
 * chosen from.
 *
 * Expects the home page's three `how` items in their order (plan, tests,
 * evidence). The drawings move once, when the section first comes into view;
 * the only loop is the top paper's float, while the section is on screen.
 */
export function Guides({ lang, items }: { lang: Lang; items: GuideItem[] }) {
  const copy = COPY[lang];

  return (
    <InView className="gd">
      <div className="gd-inner">
        <div className="gd-head">
          <Kicker num="05" label={copy.kicker} />
          {/* Each word rises out of its own line box, one after another. */}
          <h2 aria-label={copy.h2}>
            {copy.h2.split(' ').map((word, w) => (
              <span key={w} className="gd-word" aria-hidden>
                <span style={vars({ '--w': w })}>{word}</span>
              </span>
            ))}
          </h2>
          <p className="gd-lead">{copy.lead}</p>
        </div>

        <div className="gd-grid">
          {items.slice(0, 3).map((item, i) =>
            i === FEATURED ? (
              <a
                key={item.href + i}
                href={item.href}
                hrefLang={item.hrefLang}
                className={`gd-card gd-feature ${AREAS[i]}`}
                style={vars({ '--i': i })}
              >
                <span className="gd-feature-art" aria-hidden>
                  <TestsArt lang={lang} words={copy.app} />
                </span>
                <div className="gd-feature-body">
                  <Tags tags={copy.tags[i]} />
                  <h3>{typeset(item.title)}</h3>
                  <p>{typeset(item.text)}</p>
                  <span className="gd-read">
                    {item.link}
                    <span className="gd-read-arrow">
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </span>
                  </span>
                </div>
              </a>
            ) : (
              <a
                key={item.href + i}
                href={item.href}
                hrefLang={item.hrefLang}
                className={`gd-card gd-side ${AREAS[i]}`}
                style={vars({ '--i': i })}
              >
                <span className={`gd-art ${i === 0 ? 'gd-art-week' : 'gd-art-papers'}`} aria-hidden>
                  {i === 0 ? <PlanArt lang={lang} words={copy.app} /> : <PapersArt labels={copy.papers} />}
                  <span className="gd-go">
                    <ArrowUpRightIcon size={20} weight="bold" />
                  </span>
                </span>
                <div className="gd-body">
                  <Tags tags={copy.tags[i]} />
                  <h3>{typeset(item.title)}</h3>
                  <p>{typeset(item.text)}</p>
                  <span className="gd-more">
                    {item.link}
                    <ArrowRightIcon size={16} weight="bold" />
                  </span>
                </div>
              </a>
            ),
          )}
        </div>
      </div>
    </InView>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <span className="gd-tags">
      {tags.map((tag) => (
        <span key={tag} className="gd-tag">
          {tag}
        </span>
      ))}
    </span>
  );
}

/** "{sport} [без боли]" -> the words around the bracketed lead, as the app's `splitLead`. */
function splitLead(sentence: string) {
  const match = /^(.*?)\[(.+?)\](.*)$/.exec(sentence);
  if (match == null) return { before: sentence.trim(), lead: '', after: '' };
  return { before: match[1].trim(), lead: match[2].trim(), after: match[3].trim() };
}

const words = (text: string) => text.split(' ').filter((w) => w.length > 0);

/**
 * A weekday's full name from the platform, as the plan screen takes it
 * (`Intl`, in the page's language, lower case where the language writes it
 * so). 9 January 1970 was a Friday.
 */
function weekday(lang: Lang, offset: number) {
  return new Intl.DateTimeFormat(lang, { weekday: 'long', timeZone: 'UTC' }).format(
    new Date(Date.UTC(1970, 0, 9 + offset)),
  );
}

/**
 * The plan: the top of the app's Plan screen, on its dark page, cut off by
 * the card's edge. First the goal card (`pages/program/ui/goal-card.tsx`):
 * the eyebrow, the outcome sentence with its one word as a chip, the line
 * across the goal's steps with a mark where each ends, and the step with its
 * value. The app draws it on Liquid Glass; here it is the glass's dark
 * fallback. Then "Coming up" and the week's next days as the app's day cards
 * (`day-card.tsx`): tinted by kind, the weekday, the kind's sticker and the
 * minutes. The app puts a mascot pose at the left of each; this leaves it out,
 * as the app does on a rest day.
 */
function PlanArt({ lang, words: w }: { lang: Lang; words: AppWords }) {
  const head = splitLead(w.outcome);
  const { n, total } = SAMPLE.step;
  // Steps done, and how far into this one: the calf goal at 18 of 25.
  const fill = (n - 1 + SAMPLE.calf.now / CALF_GOAL) / total;
  const ticks = Array.from({ length: total - 1 }, (_, k) => (k + 1) / total);
  const minutes = count(lang, SAMPLE.minutes, w.minutes);
  const days = [
    { key: 'strength', label: weekday(lang, 0), kind: w.strength, icon: <BarbellIcon {...glyph} /> },
    { key: 'mobility', label: weekday(lang, 1), kind: w.mobility, icon: <WavesIcon {...glyph} /> },
  ];

  return (
    <span className="gd-plan">
      <span className="gd-pg">
        <span className="gd-goal">
          <span className="gd-eyebrow">{w.goalEyebrow}</span>
          <span className="gd-goal-head">
            {words(head.before).map((word, k) => (
              <span key={`b${k}`}>{word}</span>
            ))}
            {head.lead.length > 0 && <span className="gd-goal-lead">{head.lead}</span>}
            {words(head.after).map((word, k) => (
              <span key={`a${k}`}>{word}</span>
            ))}
          </span>
          <span className="gd-prog" style={vars({ '--fill': fill })}>
            <span className="gd-prog-track">
              <span className="gd-prog-fill" />
              {ticks.map((at) => (
                <span key={at} className="gd-prog-tick" style={vars({ '--at': at })} />
              ))}
            </span>
            <span className="gd-prog-knob" />
          </span>
          <span className="gd-goal-values">
            <span className="gd-goal-step">{w.step(n, total, w.goalCalves)}</span>
            <span className="gd-goal-now">{w.goalNow(String(SAMPLE.calf.now))}</span>
          </span>
        </span>

        <span className="gd-section">{w.upcoming}</span>

        {days.map((day, k) => (
          <span key={day.key} className={`gd-day gd-day-${day.key}`} style={vars({ '--k': k })}>
            <span className="gd-day-label">{day.label}</span>
            <span className="gd-day-fact gd-day-kind">
              {day.icon}
              {day.kind}
            </span>
            <span className="gd-day-fact gd-day-min">
              <ClockIcon {...glyph} />
              {minutes}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * The tests: the app's result card for calf raises
 * (`widgets/session-player/ui/test-day/test-day-results.tsx`) and the Progress
 * screen's strength card (`pages/progress/ui/progress-cards.tsx`), in the dark
 * scheme. The result card is the test's own zone, leg glyph and violet: the
 * figure, the change since last time (green, the one thing colour is allowed
 * to say), the bar towards the goal in the goal's accent, what is left, and
 * each leg. The strength card is every test, first against latest. On a narrow
 * card only the result card is shown.
 */
function TestsArt({ lang, words: w }: { lang: Lang; words: AppWords }) {
  const { first, before, now, left, right } = SAMPLE.calf;
  const change = now - before;

  return (
    <span className="gd-results">
      <span className="gd-rc">
        <span className="gd-rc-head">
          <span className="gd-rc-tile">
            <Icon icon={BodyPartLegIcon} size={20} strokeWidth={2} />
          </span>
          <span className="gd-rc-name">{w.calf}</span>
        </span>
        <span className="gd-rc-figure">
          <span className="gd-rc-num gd-count" style={vars({ '--to': now })} />
          <span className="gd-rc-unit">{count(lang, now, w.unitRaises)}</span>
        </span>
        <span className="gd-rc-change">{count(lang, change, w.moreRaises)}</span>
        <span className="gd-rc-track" style={vars({ '--fill': now / CALF_GOAL })}>
          <span />
        </span>
        <span className="gd-rc-goal">
          <span>{count(lang, CALF_GOAL, w.goalRaises)}</span>
          <span>{count(lang, CALF_GOAL - now, w.toGoRaises)}</span>
        </span>
        <span className="gd-rc-legs">{w.legs(left, right)}</span>
      </span>

      <span className="gd-sc">
        <span className="gd-sc-title">{w.strengthTitle}</span>
        <span className="gd-sc-row" style={vars({ '--k': 0 })}>
          {w.calfChange(first, now)}
        </span>
        <span className="gd-sc-row" style={vars({ '--k': 1 })}>
          {w.balanceChange(SAMPLE.balance[0], SAMPLE.balance[1])}
        </span>
        <span className="gd-sc-row" style={vars({ '--k': 2 })}>
          {w.archChange(SAMPLE.arch[0], SAMPLE.arch[1])}
        </span>
        <span className="gd-sc-caption">{w.strengthSince}</span>
      </span>
    </span>
  );
}

/**
 * The evidence: three papers fanned out, each only a kind of source and a
 * few grey lines. No titles, years or findings, because none of those would
 * be true of a drawing.
 */
function PapersArt({ labels }: { labels: [string, string, string] }) {
  const [guideline, trial, review] = labels;
  // Back to front: the guideline lies on top.
  const papers = [
    { label: trial, icon: <ArticleIcon size="100%" weight="fill" /> },
    { label: review, icon: <FileTextIcon size="100%" weight="fill" /> },
    { label: guideline, icon: <BookOpenIcon size="100%" weight="fill" /> },
  ];

  return (
    <span className="gd-stage gd-stage-papers">
      {papers.map((paper, k) => (
        <span key={k} className="gd-paper" style={vars({ '--k': k })}>
          <span className="gd-paper-in">
            <span className="gd-paper-head">
              <span className="gd-paper-icon">{paper.icon}</span>
              <span className="gd-paper-tag">{paper.label}</span>
            </span>
            <span className="gd-line" />
            <span className="gd-line" />
            <span className="gd-line" />
            <span className="gd-line" />
          </span>
        </span>
      ))}
    </span>
  );
}
