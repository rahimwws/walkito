/**
 * The calf raise calculator's words and input parsing, shared by the React
 * component (components/tools/CalfRaiseCalculator.tsx) and the plain version
 * for pages served without React (lib/vanilla/tools.ts). One source, so the
 * two cannot drift apart.
 */
import type { Lang } from '@/lib/i18n';
import { CALF_ERROR_REPS, LSI_BENCHMARK, type Sex } from '@/lib/tools/calf-norms';

export type Verdict = 'above' | 'around' | 'below';
export type Side = 'left' | 'right';

export type CalfCopy = {
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

export const CALF_COPY: Partial<Record<Lang, CalfCopy>> = {
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
      'Укажите возраст, пол и сколько подъёмов на носки на одной ноге вы сделали каждой ногой. Калькулятор сравнит каждую ногу с типичным результатом для вашего возраста и пола из исследования 2017 года и покажет баланс между левой и правой ногой.',
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

export function toInt(v: string): number | null {
  if (!/^\s*\d{1,3}\s*$/.test(v)) return null;
  return Number(v);
}
