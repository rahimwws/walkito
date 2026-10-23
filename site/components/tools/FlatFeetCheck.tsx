'use client';

import { Fragment, useState, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import { FLAT_AS, FLAT_COPY as COPY, FLAT_QS, flatResult, flatWarnings, marks, type FlatA, type FlatAnswers, type FlatQ } from '@/lib/tools/flat-check';

/**
 * "Your self-check" on /flat-feet-test/: five questions about the checks on the
 * page and a plain result. It names which of the page's lists the answers fall
 * on; it does not diagnose. Words and logic: lib/tools/flat-check.ts. The plain
 * version for pages without React is in lib/vanilla/tools.ts.
 */
export function FlatFeetCheck({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const c = COPY[lang];
  const [answers, setAnswers] = useState<FlatAnswers>({});
  if (!c) return null;
  const result = flatResult(answers);
  const warnings = flatWarnings(answers);
  const set = (q: FlatQ, a: FlatA) => setAnswers((prev) => ({ ...prev, [q]: a }));

  return (
    <div className="flat-check" id="flat-check" data-tool="flat-feet-check" data-lang={lang}>
      <h3>{c.heading}</h3>
      <p className="flat-check-intro">{c.intro}</p>
      {FLAT_QS.map((q) => (
        <fieldset key={q} className="flat-check-q" data-q={q}>
          <legend>{c.questions[q]}</legend>
          <div className="flat-check-answers">
            {FLAT_AS.map((a) => (
              <button key={a} type="button" className="flat-check-a" data-a={a} aria-pressed={answers[q] === a} onClick={() => set(q, a)}>
                {c.answers[a]}
              </button>
            ))}
          </div>
        </fieldset>
      ))}

      <div aria-live="polite" data-tool-result="">
        <div className={`flat-check-result is-${result}`}>
          {c.results[result].map((p) => (
            <p key={p}>
              {marks(p).map((m, i) =>
                m.kind === 'bold' ? <b key={i}>{m.text}</b> : m.kind === 'link' ? <a key={i} href={m.href}>{m.text}</a> : <Fragment key={i}>{m.text}</Fragment>,
              )}
            </p>
          ))}
          {result === 'checked' && (
            <ul>
              {warnings.map((q) => (
                <li key={q}>{c.reasons[q]}</li>
              ))}
            </ul>
          )}
          {result !== 'incomplete' && <p className="flat-check-note">{c.notDiagnosis}</p>}
        </div>
      </div>

      <div className="flat-check-cta">
        <p>{c.cta}</p>
        {children}
      </div>
    </div>
  );
}
