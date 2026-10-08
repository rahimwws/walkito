'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import type { Lang } from '@/lib/i18n';
import {
  CALF_ERROR_REPS,
  LSI_BENCHMARK,
  calfMedian,
  compareToMedian,
  limbSymmetry,
  type Sex,
} from '@/lib/tools/calf-norms';

type Verdict = 'above' | 'around' | 'below';
type Side = 'left' | 'right';

type Copy = {
  heading: string;
  intro: string;
  age: string;
  sex: string;
  male: string;
  female: string;
  left: string;
  right: string;
  submit: string;
  invalid: string;
  tooYoung: string;
  typical: (sex: Sex, age: number, median: number) => string;
  verdict: Record<Verdict, string>;
  aroundNote: string;
  balance: (lsi: number) => string;
  balanceOk: string;
  balanceLow: (weaker: Side, gap: number) => string;
  clamped: (ageUsed: number) => string;
  disclaimer: string;
  cta: string;
};

const NBSP = '\u00A0';

/** Russian noun form for a count: 1 подъём, 2 подъёма, 5 подъёмов. */
function ruRaises(n: number): string {
  const d = n % 10;
  const dd = n % 100;
  if (d === 1 && dd !== 11) return 'подъём';
  if (d >= 2 && d <= 4 && (dd < 12 || dd > 14)) return 'подъёма';
  return 'подъёмов';
}

const COPY: Partial<Record<Lang, Copy>> = {
  en: {
    heading: 'Check your result',
    intro:
      'Enter your age, sex and how many single-leg raises you did on each leg. You get each leg compared with the typical count for your age and sex in the 2017 study, and your left-right balance.',
    age: 'Age',
    sex: 'Sex',
    male: 'Male',
    female: 'Female',
    left: 'Left leg',
    right: 'Right leg',
    submit: 'Check my result',
    invalid: 'Enter your age and a count for each leg.',
    tooYoung: 'The study only included adults, so the calculator starts at age 18.',
    typical: (sex, age, m) =>
      `Typical count for a moderately active ${sex === 'male' ? 'man' : 'woman'} aged ${age}: about ${m} raises per leg.`,
    verdict: { above: 'above the typical count', around: 'around the typical count', below: 'below the typical count' },
    aroundNote: `A count within ${CALF_ERROR_REPS} raises of the typical one counts as “around”, because that is the test’s usual measurement error.`,
    balance: (lsi) => `Left-right balance: ${lsi}%.`,
    balanceOk: `That meets the ${LSI_BENCHMARK}% benchmark used in rehabilitation.`,
    balanceLow: (weaker, gap) =>
      `That is under the ${LSI_BENCHMARK}% benchmark used in rehabilitation: your ${weaker} leg did ${gap}% fewer raises.`,
    clamped: (a) => `The study tested adults aged 20 to 81, so this uses the value for age ${a}.`,
    disclaimer:
      'This compares your count with study averages. It is not a diagnosis: a count below the typical one does not mean something is wrong, and your trend over several weeks says more than one test.',
    cta: 'Walkito runs this test every 14 days and tracks both legs, so you can see the trend.',
  },
  es: {
    heading: 'Comprueba tu resultado',
    intro:
      'Escribe tu edad, tu sexo y cuántas elevaciones a una pierna hiciste con cada pierna. Verás cada pierna comparada con la cifra típica para tu edad y sexo del estudio de 2017, y el equilibrio entre izquierda y derecha.',
    age: 'Edad',
    sex: 'Sexo',
    male: 'Hombre',
    female: 'Mujer',
    left: 'Pierna izquierda',
    right: 'Pierna derecha',
    submit: 'Ver mi resultado',
    invalid: 'Escribe tu edad y una cifra para cada pierna.',
    tooYoung: 'El estudio solo incluyó adultos, así que la calculadora empieza a los 18 años.',
    typical: (sex, age, m) =>
      `Cifra típica para ${sex === 'male' ? 'un hombre' : 'una mujer'} de ${age} años con actividad moderada: unas ${m} elevaciones por pierna.`,
    verdict: {
      above: 'por encima de la cifra típica',
      around: 'cerca de la cifra típica',
      below: 'por debajo de la cifra típica',
    },
    aroundNote: `Una diferencia de hasta ${CALF_ERROR_REPS} elevaciones cuenta como «cerca», porque ese es el error de medición habitual de la prueba.`,
    balance: (lsi) => `Equilibrio entre izquierda y derecha: ${lsi}${NBSP}%.`,
    balanceOk: `Cumple la referencia del ${LSI_BENCHMARK}${NBSP}% que se usa en rehabilitación.`,
    balanceLow: (weaker, gap) =>
      `Está por debajo de la referencia del ${LSI_BENCHMARK}${NBSP}% que se usa en rehabilitación: tu pierna ${weaker === 'left' ? 'izquierda' : 'derecha'} hizo un ${gap}${NBSP}% menos de elevaciones.`,
    clamped: (a) => `El estudio evaluó a adultos de 20 a 81 años, así que se usa el valor de ${a} años.`,
    disclaimer:
      'Esto compara tu cifra con promedios de un estudio. No es un diagnóstico: una cifra por debajo de la típica no significa que algo vaya mal, y tu tendencia a lo largo de varias semanas dice más que una sola prueba.',
    cta: 'Walkito hace esta prueba cada 14 días y sigue las dos piernas, para que veas la tendencia.',
  },
  ru: {
    heading: 'Проверьте свой результат',
    intro:
      'Укажите возраст, пол и сколько подъёмов на носок на одной ноге вы сделали каждой ногой. Калькулятор сравнит каждую ногу с типичным результатом для вашего возраста и пола из исследования 2017 года и покажет баланс между левой и правой ногой.',
    age: 'Возраст',
    sex: 'Пол',
    male: 'Мужской',
    female: 'Женский',
    left: 'Левая нога',
    right: 'Правая нога',
    submit: 'Показать результат',
    invalid: 'Укажите возраст и число подъёмов для каждой ноги.',
    tooYoung: 'В исследовании участвовали только взрослые, поэтому калькулятор работает с 18 лет.',
    typical: (sex, age, m) =>
      `Типичный результат для ${sex === 'male' ? 'умеренно активного мужчины' : 'умеренно активной женщины'}, возраст ${age}: ${m} ${ruRaises(m)} на каждую ногу.`,
    verdict: {
      above: 'выше типичного результата',
      around: 'примерно на уровне типичного результата',
      below: 'ниже типичного результата',
    },
    aroundNote: `Разница до ${CALF_ERROR_REPS} подъёмов считается «примерно на уровне», потому что это обычная погрешность теста.`,
    balance: (lsi) => `Баланс левой и правой ноги: ${lsi}${NBSP}%.`,
    balanceOk: `Это соответствует ориентиру ${LSI_BENCHMARK}${NBSP}%, который используют в реабилитации.`,
    balanceLow: (weaker, gap) =>
      `Это ниже ориентира ${LSI_BENCHMARK}${NBSP}%, который используют в реабилитации: ${weaker === 'left' ? 'левая' : 'правая'} нога сделала на ${gap}${NBSP}% меньше подъёмов.`,
    clamped: (a) => `В исследовании были взрослые от 20 до 81 года, поэтому используется значение для возраста ${a}.`,
    disclaimer:
      'Это сравнение с усреднёнными данными исследования, а не диагноз. Результат ниже типичного не значит, что что-то не так, а динамика за несколько недель говорит больше, чем один тест.',
    cta: 'Walkito проводит этот тест каждые 14 дней и следит за обеими ногами, чтобы вы видели динамику.',
  },
};

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

function toInt(v: string): number | null {
  if (!/^\s*\d{1,3}\s*$/.test(v)) return null;
  return Number(v);
}

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
    <div className="tool calf-calc">
      <p className="tool-heading">{c.heading}</p>
      <p className="tool-intro">{c.intro}</p>
      <form onSubmit={check} noValidate>
        <div className="tool-grid">
          <label>
            <span>{c.age}</span>
            <input inputMode="numeric" pattern="[0-9]*" value={age} onChange={(e) => setAge(e.target.value)} />
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
            <input inputMode="numeric" pattern="[0-9]*" value={left} onChange={(e) => setLeft(e.target.value)} />
          </label>
          <label>
            <span>{c.right}</span>
            <input inputMode="numeric" pattern="[0-9]*" value={right} onChange={(e) => setRight(e.target.value)} />
          </label>
        </div>
        <button type="submit">{c.submit}</button>
      </form>

      <div aria-live="polite">
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
    </div>
  );
}
