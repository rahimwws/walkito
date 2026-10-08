'use client';

import { useState, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import { HANSEN_POINTS, type HansenYear } from '@/lib/tools/pf-timeline';

/**
 * "Where are you on the timeline?" The reader picks how long the heel has
 * hurt and gets what the studies on this page report for that stretch.
 * Group numbers only: the Hansen 2018 cohort at the four time points the
 * paper reports (no curve is drawn between them, because the paper does not
 * give one we could copy), and the Latt 2020 review's three to six month
 * window. Nothing here is a forecast for the reader.
 */

type Stage = 'early' | 'window' | 'past' | 'years' | 'long';
const STAGES: readonly Stage[] = ['early', 'window', 'past', 'years', 'long'];

/** Which Hansen bars to highlight for each stage. */
const HIGHLIGHT: Record<Stage, readonly HansenYear[]> = {
  early: [],
  window: [],
  past: [1],
  years: [1, 5],
  long: [5, 10, 15],
};

type Copy = {
  heading: string;
  question: string;
  stages: Record<Stage, string>;
  chartTitle: string;
  year: (y: HansenYear) => string;
  pct: (n: number) => string;
  chartNote: string;
  latt: string;
  text: Record<Stage, readonly string[]>;
  notForecast: string;
  cta: string;
};

const NBSP = '\u00A0';

const COPY: Partial<Record<Lang, Copy>> = {
  en: {
    heading: 'Where are you on the timeline?',
    question: 'How long have you had heel pain?',
    stages: {
      early: 'Under 3 months',
      window: '3 to 6 months',
      past: '6 months to a year',
      years: '1 to 5 years',
      long: 'Over 5 years',
    },
    chartTitle: 'Share of 174 people still with symptoms, by time since the pain started (Hansen 2018)',
    year: (y) => (y === 1 ? '1 year' : `${y} years`),
    pct: (n) => `${n.toFixed(1)}%`,
    chartNote:
      'A hard-case group: 93 percent had received a cortisone injection. Those still with symptoms at follow-up reported mild pain on average, about 2 to 3 out of 10 when walking.',
    latt: 'About 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020 review).',
    text: {
      early: [
        'You are early. The 2020 review reports that about 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020).',
        'Do not expect much change in the first weeks. In the Rathleff trial, the clear difference between the exercise groups showed up at three months (Rathleff 2015). The number to watch is your morning pain, month against month.',
      ],
      window: [
        'You are in the window the 2020 review names: about 90 percent of people improve with non-surgical care, usually within three to six months (Latt 2020).',
        'If your morning pain is lower than it was a month ago, that trend is the milestone. If it is flat or getting worse, see the sections below on what to do next.',
      ],
      past: [
        'You are past the three to six month window from the 2020 review. The 2023 guideline suggests considering other options when several months of stretching, strengthening and footwear changes have not helped enough. This is a reasonable point to see a clinician and check the diagnosis.',
        'Slower recovery is common. In the Hansen cohort, 80.5 percent still had symptoms at one year, and those who became symptom-free had symptoms for about 725 days on average (Hansen 2018).',
      ],
      years: [
        'In the Hansen cohort, the share still with symptoms fell from 80.5 percent at one year to 50.0 percent at five years (Hansen 2018). Recovery after the first year was common.',
        'If you have not seen a clinician yet, now is a good time to check the diagnosis and go over the options in the table below. In that cohort, women and people with pain in both heels recovered more slowly.',
      ],
      long: [
        'In the Hansen cohort, the share still with symptoms went from 50.0 percent at five years to 45.6 percent at ten and 44.0 percent at fifteen (Hansen 2018). Some people still became symptom-free, but more slowly.',
        'Pain this long is worth a clinician visit to confirm the diagnosis, especially if both heels hurt or other joints are stiff or swollen.',
      ],
    },
    notForecast: 'These are numbers for groups of people in studies, not a forecast for you.',
    cta: 'Walkito asks for a morning pain score before every session, so you can see your own trend month to month.',
  },
  es: {
    heading: '¿En qué punto estás?',
    question: '¿Cuánto tiempo llevas con dolor de talón?',
    stages: {
      early: 'Menos de 3 meses',
      window: 'De 3 a 6 meses',
      past: 'De 6 meses a un año',
      years: 'De 1 a 5 años',
      long: 'Más de 5 años',
    },
    chartTitle: 'Porcentaje de 174 personas que seguían con síntomas, según el tiempo desde que empezó el dolor (Hansen 2018)',
    year: (y) => (y === 1 ? '1 año' : `${y} años`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Un grupo de casos difíciles: el 93\u00A0% había recibido una inyección de cortisona. Quienes seguían con síntomas al final del seguimiento tenían de media un dolor leve, de 2 a 3 sobre 10 al caminar.',
    latt: 'Cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (revisión de Latt 2020).',
    text: {
      early: [
        'Estás al principio. La revisión de 2020 dice que cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (Latt 2020).',
        'No esperes grandes cambios en las primeras semanas. En el ensayo de Rathleff, la diferencia clara entre los grupos de ejercicio apareció a los tres meses (Rathleff 2015). El dato que hay que mirar es tu dolor de la mañana, mes contra mes.',
      ],
      window: [
        'Estás en el plazo que menciona la revisión de 2020: cerca del 90\u00A0% de las personas mejora con métodos sin cirugía, casi siempre en un plazo de tres a seis meses (Latt 2020).',
        'Si tu dolor de la mañana es más bajo que hace un mes, esa tendencia es el avance. Si sigue igual o va a peor, mira más abajo las secciones sobre qué hacer.',
      ],
      past: [
        'Ya pasaste el plazo de tres a seis meses de la revisión de 2020. La guía de 2023 sugiere considerar otras opciones cuando varios meses de estiramientos, fortalecimiento y cambios de calzado no han ayudado lo suficiente. Es un buen momento para ir con un profesional y confirmar el diagnóstico.',
        'Mejorar más despacio es frecuente. En la cohorte de Hansen, el 80,5\u00A0% seguía con síntomas al año, y quienes dejaron de tenerlos los habían tenido unos 725\u00A0días de media (Hansen 2018).',
      ],
      years: [
        'En la cohorte de Hansen, el porcentaje de personas con síntomas bajó del 80,5\u00A0% al año al 50,0\u00A0% a los cinco años (Hansen 2018). Mejorar después del primer año fue frecuente.',
        'Si todavía no has ido con un profesional, ahora es un buen momento para confirmar el diagnóstico y repasar las opciones de la tabla de abajo. En esa cohorte, las mujeres y las personas con dolor en los dos talones mejoraron más despacio.',
      ],
      long: [
        'En la cohorte de Hansen, el porcentaje de personas con síntomas pasó del 50,0\u00A0% a los cinco años al 45,6\u00A0% a los diez y al 44,0\u00A0% a los quince (Hansen 2018). Algunas personas siguieron quedándose sin síntomas, pero más despacio.',
        'Un dolor tan largo merece una visita a un profesional para confirmar el diagnóstico, sobre todo si te duelen los dos talones o tienes otras articulaciones rígidas o hinchadas.',
      ],
    },
    notForecast: 'Son datos de grupos de personas en estudios, no un pronóstico para ti.',
    cta: 'Walkito te pide una puntuación del dolor de la mañana antes de cada sesión, para que veas tu propia tendencia mes a mes.',
  },
  ru: {
    heading: 'Где вы сейчас на этой шкале?',
    question: 'Как давно у вас болит пятка?',
    stages: {
      early: 'Меньше 3 месяцев',
      window: 'От 3 до 6 месяцев',
      past: 'От полугода до года',
      years: 'От 1 года до 5 лет',
      long: 'Больше 5 лет',
    },
    chartTitle: 'Доля из 174 человек, у которых ещё были симптомы, по времени с начала боли (Hansen 2018)',
    year: (y) => (y === 1 ? '1 год' : y === 5 || y === 10 || y === 15 ? `${y} лет` : `${y} года`),
    pct: (n) => `${n.toFixed(1).replace('.', ',')}${NBSP}%`,
    chartNote:
      'Это группа сложных случаев: 93\u00A0% получали инъекцию кортикостероида. У тех, у кого симптомы сохранились к концу наблюдения, боль была в среднем слабой, от 2 до 3 из 10 при ходьбе.',
    latt: 'Около 90\u00A0% людей становится лучше без операции, обычно в срок от трёх до шести месяцев (обзор Latt 2020).',
    text: {
      early: [
        'Вы в самом начале. Обзор 2020\u00A0года сообщает, что около 90\u00A0% людей становится лучше без операции, обычно в срок от трёх до шести месяцев (Latt 2020).',
        'В первые недели больших перемен ждать не стоит. В исследовании Rathleff заметная разница между группами упражнений появилась через три месяца (Rathleff 2015). Главное, за чем стоит следить, это утренняя боль: сравнивайте месяц с месяцем.',
      ],
      window: [
        'Вы как раз в том промежутке, который называет обзор 2020\u00A0года: около 90\u00A0% людей становится лучше без операции, обычно в срок от трёх до шести месяцев (Latt 2020).',
        'Если утренняя боль сейчас слабее, чем месяц назад, эта динамика и есть прогресс. Если она не меняется или усиливается, ниже есть разделы о том, что делать дальше.',
      ],
      past: [
        'Вы уже за пределами срока от трёх до шести месяцев из обзора 2020\u00A0года. Рекомендации 2023\u00A0года предлагают рассмотреть другие варианты, если несколько месяцев растяжки, укрепления и смены обуви помогли недостаточно. Сейчас разумно сходить к врачу и проверить диагноз.',
        'Медленное восстановление встречается часто. В когорте Hansen через год симптомы сохранялись у 80,5\u00A0%, а у тех, кто от них избавился, они длились в среднем около 725\u00A0дней (Hansen 2018).',
      ],
      years: [
        'В когорте Hansen доля людей с симптомами снизилась с 80,5\u00A0% через год до 50,0\u00A0% через пять лет (Hansen 2018). Улучшение после первого года было обычным делом.',
        'Если вы ещё не были у врача, сейчас хорошее время проверить диагноз и обсудить варианты из таблицы ниже. В этой когорте женщины и люди с болью в обеих пятках восстанавливались медленнее.',
      ],
      long: [
        'В когорте Hansen доля людей с симптомами снизилась с 50,0\u00A0% через пять лет до 45,6\u00A0% через десять и 44,0\u00A0% через пятнадцать лет (Hansen 2018). Часть людей всё ещё избавлялась от симптомов, но медленнее.',
        'Если боль длится так долго, стоит показаться врачу и подтвердить диагноз, особенно если болят обе пятки или другие суставы скованы или опухают.',
      ],
    },
    notForecast: 'Это данные о группах людей в исследованиях, а не прогноз для вас.',
    cta: 'Walkito спрашивает оценку утренней боли перед каждой тренировкой, чтобы вы видели свою динамику от месяца к месяцу.',
  },
};

export function PfTimeline({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const c = COPY[lang];
  const [stage, setStage] = useState<Stage | null>(null);
  if (!c) return null;
  const lit = stage ? HIGHLIGHT[stage] : [];

  return (
    <div className="pf-timeline" id="pf-timeline">
      <h3>{c.heading}</h3>
      <p className="pf-timeline-q" id="pf-timeline-q">
        {c.question}
      </p>
      <div className="pf-timeline-stages" role="group" aria-labelledby="pf-timeline-q">
        {STAGES.map((s) => (
          <button
            key={s}
            type="button"
            className="pf-timeline-stage"
            aria-pressed={stage === s}
            onClick={() => setStage(s)}
          >
            {c.stages[s]}
          </button>
        ))}
      </div>

      <div aria-live="polite">
        {stage && (
          <div className="pf-timeline-result">
            {c.text[stage].map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="pf-timeline-forecast">{c.notForecast}</p>
          </div>
        )}
      </div>

      <figure className="pf-timeline-chart">
        <figcaption>{c.chartTitle}</figcaption>
        <ul>
          {HANSEN_POINTS.map(({ year, pct }) => (
            <li key={year} className={lit.includes(year) ? 'is-lit' : undefined}>
              <span className="pf-timeline-year">{c.year(year)}</span>
              <span className="pf-timeline-bar">
                <span style={{ width: `${pct}%` }} />
              </span>
              <span className="pf-timeline-pct">{c.pct(pct)}</span>
            </li>
          ))}
        </ul>
        <p className="pf-timeline-note">{c.chartNote}</p>
      </figure>
      <p className={`pf-timeline-latt${stage === 'early' || stage === 'window' ? ' is-lit' : ''}`}>{c.latt}</p>

      <div className="pf-timeline-cta">
        <p>{c.cta}</p>
        {children}
      </div>
    </div>
  );
}
