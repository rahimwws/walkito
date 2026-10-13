'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import { calfMedian, compareToMedian, limbSymmetry, type Sex } from '@/lib/tools/calf-norms';
import { CALF_COPY as COPY, toInt } from '@/lib/tools/calf-copy';

type Result =
  | { kind: 'error'; text: string }
  | {
      kind: 'ok';
      age: number;
      sex: Sex;
      median: number;
      clamped: boolean;
      left: number;
      right: number;
      sym: { lsi: number; gap: number; meets: boolean } | null;
    };


/**
 * Calf raise test calculator: each leg against the Hebert-Losier 2017 median
 * for the person's age and sex, and the left-right balance against the 90%
 * rehabilitation benchmark. All in the browser, nothing is sent anywhere.
 * The form is in the static HTML; only the result needs script.
 */
export function CalfRaiseCalculator({ lang, children }: { lang: Lang; children?: ReactNode }) {
  const c = COPY[lang] ?? COPY.en!;
  const [age, setAge] = useState('');
  const [sex, setSex] = useState<Sex>('female');
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  function check(e: FormEvent) {
    e.preventDefault();
    const a = toInt(age);
    const l = toInt(left);
    const r = toInt(right);
    if (a == null || l == null || r == null || a > 110 || l > 200 || r > 200) {
      setResult({ kind: 'error', text: c.invalid });
      return;
    }
    if (a < 18) {
      setResult({ kind: 'error', text: c.tooYoung });
      return;
    }
    const { median, clamped } = calfMedian(a, sex);
    setResult({ kind: 'ok', age: a, sex, median, clamped, left: l, right: r, sym: limbSymmetry(l, r) });
  }

  const ageUsed = result?.kind === 'ok' ? (result.age < 20 ? 20 : 80) : 0;

  return (
    <div className="tool calf-calc" data-tool="calf-calc" data-lang={lang}>
      <p className="tool-heading">{c.heading}</p>
      <p className="tool-intro">{c.intro}</p>
      <form onSubmit={check} noValidate>
        <div className="tool-grid">
          <label>
            <span>{c.age}</span>
            <input name="age" inputMode="numeric" pattern="[0-9]*" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <fieldset>
            <legend>{c.sex}</legend>
            <div className="tool-segment">
              {(['female', 'male'] as const).map((s) => (
                <label key={s} className={sex === s ? 'on' : undefined}>
                  <input type="radio" name="sex" value={s} checked={sex === s} onChange={() => setSex(s)} />
                  {s === 'male' ? c.male : c.female}
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            <span>{c.left}</span>
            <input name="left" inputMode="numeric" pattern="[0-9]*" value={left} onChange={(e) => setLeft(e.target.value)} />
          </label>
          <label>
            <span>{c.right}</span>
            <input name="right" inputMode="numeric" pattern="[0-9]*" value={right} onChange={(e) => setRight(e.target.value)} />
          </label>
        </div>
        <button type="submit">{c.submit}</button>
      </form>

      <div aria-live="polite" data-tool-result="">
        {result?.kind === 'error' && <p className="tool-error">{result.text}</p>}
        {result?.kind === 'ok' && (
          <div className="tool-result">
            <p className="tool-result-lead">{c.typical(result.sex, result.clamped ? ageUsed : result.age, result.median)}</p>
            {result.clamped && <p className="tool-note">{c.clamped(ageUsed)}</p>}
            <ul>
              {(['left', 'right'] as const).map((side) => {
                const n = side === 'left' ? result.left : result.right;
                const v = compareToMedian(n, result.median);
                return (
                  <li key={side} className={`tool-verdict tool-${v}`}>
                    <b>
                      {side === 'left' ? c.left : c.right}: {n}
                    </b>
                    , {c.verdict[v]}
                  </li>
                );
              })}
            </ul>
            <p className="tool-note">{c.aroundNote}</p>
            {result.sym != null && (
              <p className={result.sym.meets ? 'tool-balance' : 'tool-balance tool-below'}>
                <b>{c.balance(result.sym.lsi)}</b>{' '}
                {result.sym.meets
                  ? c.balanceOk
                  : c.balanceLow(result.left < result.right ? 'left' : 'right', result.sym.gap)}
              </p>
            )}
            <p className="tool-note">{c.disclaimer}</p>
            <p className="tool-cta">{c.cta}</p>
            {children}
          </div>
        )}
      </div>
      {/* The same children, inert, for the plain version (lib/vanilla/tools.ts):
          on pages served without React it copies them under its result. */}
      {children != null && <template data-tool-children="">{children}</template>}
    </div>
  );
}
