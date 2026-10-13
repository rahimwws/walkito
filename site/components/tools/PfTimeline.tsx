'use client';

import { useState, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import { HANSEN_POINTS } from '@/lib/tools/pf-timeline';
import { HIGHLIGHT, STAGES, TIMELINE_COPY as COPY, type Stage } from '@/lib/tools/pf-timeline-copy';

/**
 * "Where are you on the timeline?" The reader picks how long the heel has
 * hurt and gets what the studies on this page report for that stretch.
 * Group numbers only: the Hansen 2018 cohort at the four time points the
 * paper reports (no curve is drawn between them, because the paper does not
 * give one we could copy), and the Latt 2020 review's three to six month
 * window. Nothing here is a forecast for the reader.
 */

export function PfTimeline({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const c = COPY[lang];
  const [stage, setStage] = useState<Stage | null>(null);
  if (!c) return null;
  const lit = stage ? HIGHLIGHT[stage] : [];

  return (
    <div className="pf-timeline" id="pf-timeline" data-tool="pf-timeline" data-lang={lang}>
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
            data-stage={s}
            aria-pressed={stage === s}
            onClick={() => setStage(s)}
          >
            {c.stages[s]}
          </button>
        ))}
      </div>

      <div aria-live="polite" data-tool-result="">
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
