import type { CSSProperties, ReactNode } from 'react';

import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowUpRight';
import { ArticleIcon } from '@phosphor-icons/react/dist/ssr/Article';
import { BarbellIcon } from '@phosphor-icons/react/dist/ssr/Barbell';
import { BookOpenIcon } from '@phosphor-icons/react/dist/ssr/BookOpen';
import { CalendarDotsIcon } from '@phosphor-icons/react/dist/ssr/CalendarDots';
import { FileTextIcon } from '@phosphor-icons/react/dist/ssr/FileText';
import { FootprintsIcon } from '@phosphor-icons/react/dist/ssr/Footprints';
import { ScalesIcon } from '@phosphor-icons/react/dist/ssr/Scales';
import { TargetIcon } from '@phosphor-icons/react/dist/ssr/Target';

import { InView } from '@/components/InView';
import { Kicker } from '@/components/Kicker';
import { typeset } from '@/components/Prose';
import type { Lang } from '@/lib/i18n';
import { PROGRAM } from '@/lib/site';

import './guides.css';

const { testEveryDays } = PROGRAM;

export type GuideItem = { title: string; text: string; link: string; href: string; hrefLang?: string };

type GuidesCopy = {
  kicker: string;
  h2: string;
  lead: string;
  /** One or two chips per card, in the order of `items`: the plan, the tests, the evidence. */
  tags: [string[], string[], string[]];
  /** Words inside the drawings. Everything here is decoration and hidden from screen readers. */
  art: {
    week: string;
    calf: string;
    /** The unit after "18", agreeing with it. */
    raises: string;
    arch: string;
    /** The unit after "41", agreeing with it. */
    seconds: string;
    next: string;
    /** Neutral kinds of source, never a named study: guideline, trial, review. */
    papers: [string, string, string];
  };
};

/**
 * Section 05's frame, per language. The cards' own titles, texts and link
 * labels come from the home page (`Home.tsx`, `how`), so there is one source
 * for them; this holds the heading and the words inside the drawings.
 *
 * The test names and units are the app's own (`testday.test.*.name`,
 * `testday.results.unit*`). Russian forms agree with the numbers the drawings
 * show (18 подъёмов, 41 секунда, через 3 дня, каждые 14 дней), so reread them
 * if a number or `PROGRAM.testEveryDays` changes.
 */
const COPY: Record<Lang, GuidesCopy> = {
  en: {
    kicker: 'Guides',
    h2: 'Read the method.',
    lead: 'How the plan is built, what the tests measure and where the exercises come from, in plain words.',
    tags: [['Plan', 'Weekly goal'], ['Tests', `Every ${testEveryDays} days`], ['Evidence', 'Guidelines']],
    art: {
      week: 'Week 3',
      calf: 'Calf raises',
      raises: 'raises',
      arch: 'Arch hold',
      seconds: 'seconds',
      next: 'Next test in 3 days',
      papers: ['Guideline', 'Trial', 'Review'],
    },
  },
  ru: {
    kicker: 'Гайды',
    h2: 'Как устроен метод.',
    lead: 'Как строится план, что измеряют тесты и откуда взяты упражнения, простыми словами.',
    tags: [['План', 'Цель недели'], ['Тесты', `Каждые ${testEveryDays} дней`], ['Исследования', 'Рекомендации']],
    art: {
      week: 'Неделя 3',
      calf: 'Подъёмы на носок',
      raises: 'подъёмов',
      arch: 'Удержание свода',
      seconds: 'секунда',
      next: 'Следующий тест через 3 дня',
      papers: ['Рекомендации', 'Испытание', 'Обзор'],
    },
  },
  es: {
    kicker: 'Guías',
    h2: 'Conoce el método.',
    lead: 'Cómo se arma el plan, qué miden las pruebas y de dónde salen los ejercicios, en palabras sencillas.',
    tags: [['Plan', 'Meta semanal'], ['Pruebas', `Cada ${testEveryDays} días`], ['Evidencia', 'Guías clínicas']],
    art: {
      week: 'Semana 3',
      calf: 'Elevaciones de talón',
      raises: 'elevaciones',
      arch: 'Mantener el arco',
      seconds: 'segundos',
      next: 'Próxima prueba en 3 días',
      papers: ['Guía', 'Ensayo', 'Revisión'],
    },
  },
};

/** The tests card is the big coloured one in the middle. */
const FEATURED = 1;
const AREAS = ['gd-a', 'gd-f', 'gd-b'];

const vars = (v: Record<string, string | number>) => v as CSSProperties;

/**
 * Section 05: three guides, the middle one large. Each card is a link to the
 * page that explains it, with a drawing made of the app's own pieces in place
 * of a photo: the week's goal ring, a test result rising, the kinds of source
 * the exercises are chosen from.
 *
 * Expects the home page's three `how` items in their order (plan, tests,
 * evidence). The drawings move once, when the section first comes into view;
 * the only loops are small floats that run while it is on screen.
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
                  <TestsArt copy={copy.art} />
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
                  {i === 0 ? <WeekArt week={copy.art.week} /> : <PapersArt labels={copy.art.papers} />}
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

/** A ring drawn the way the app draws its goal rings: a track, a round-capped fill from twelve o'clock. */
function Ring({ className, children }: { className: string; children?: ReactNode }) {
  return (
    <span className={`gd-ring ${className}`}>
      <svg viewBox="0 0 120 120">
        <circle className="gd-ring-track" cx="60" cy="60" r="52" />
        <circle className="gd-ring-fill" cx="60" cy="60" r="52" pathLength={100} />
      </svg>
      {children}
    </span>
  );
}

/**
 * The plan: this week's goal as a ring filling, five of seven days done, and
 * the mascot with his list. The week number is only an example.
 */
function WeekArt({ week }: { week: string }) {
  return (
    <span className="gd-stage gd-stage-week">
      <span className="gd-glass gd-week-chip">
        <CalendarDotsIcon size="1.2em" weight="fill" />
        {week}
      </span>
      <Ring className="gd-ring-goal">
        <span className="gd-goal-core">
          <TargetIcon size="100%" weight="fill" />
        </span>
      </Ring>
      <span className="gd-days">
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <span key={k} className={k < 5 ? 'gd-day-done' : undefined} style={vars({ '--k': k })} />
        ))}
      </span>
      <img className="gd-mascot gd-loop" src="/hero/mascot-tasks.webp" alt="" width={240} height={240} />
    </span>
  );
}

/**
 * The tests, as the app's result card shows them: the calf-raise count with
 * the last few tests as bars (each a test, the newest the tallest), the arch
 * hold as a ring towards its 60-second goal, and the date of the next one.
 * The figures are an example. Only the improving delta is green, the one thing
 * colour is allowed to say in the app.
 */
function TestsArt({ copy }: { copy: GuidesCopy['art'] }) {
  // 7, 10, 12, 15, 18 raises over five tests, as a share of the latest.
  const history = [39, 56, 67, 83, 100];

  return (
    <span className="gd-stage gd-stage-tests">
      <span className="gd-panel">
        <span className="gd-panel-head">
          <span className="gd-tile">
            <BarbellIcon size="100%" weight="fill" />
          </span>
          <span className="gd-panel-name">{copy.calf}</span>
        </span>
        <span className="gd-figure">
          <span className="gd-count" style={vars({ '--to': 18 })} />
          <span className="gd-unit">{copy.raises}</span>
          <span className="gd-delta">+3</span>
        </span>
        <span className="gd-bars">
          {history.map((h, k) => (
            <span key={k} style={vars({ '--h': `${h}%`, '--k': k })} />
          ))}
        </span>
      </span>

      <span className="gd-hold">
        <Ring className="gd-ring-hold">
          <span className="gd-hold-num">
            <span className="gd-count" style={vars({ '--to': 41 })} />
          </span>
        </Ring>
        <span className="gd-hold-unit">{copy.seconds}</span>
        <span className="gd-hold-name">
          <FootprintsIcon size="1.2em" weight="fill" />
          {copy.arch}
        </span>
      </span>

      <span className="gd-next">
        <CalendarDotsIcon size="1.25em" weight="fill" />
        {copy.next}
      </span>

      <span className="gd-bubble">
        <span className="gd-bubble-in gd-loop">
          <ScalesIcon size="100%" weight="fill" />
        </span>
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
