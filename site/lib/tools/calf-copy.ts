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
  de: {
    heading: 'Prüfe dein Ergebnis',
    intro:
      'Gib dein Alter, dein Geschlecht und die Zahl der Wiederholungen ein, die du beim einbeinigen Fersenheben mit jedem Bein geschafft hast. Du siehst jedes Bein im Vergleich mit dem typischen Wert für dein Alter und Geschlecht aus der Studie von 2017, dazu das Verhältnis zwischen links und rechts.',
    age: 'Alter',
    sex: 'Geschlecht',
    male: 'Männlich',
    female: 'Weiblich',
    left: 'Linkes Bein',
    right: 'Rechtes Bein',
    submit: 'Ergebnis anzeigen',
    invalid: 'Gib dein Alter und für jedes Bein eine Zahl ein.',
    tooYoung: 'An der Studie nahmen nur Erwachsene teil, deshalb beginnt der Rechner bei 18\u00A0Jahren.',
    typical: (sex, age, m) =>
      `Typischer Wert für ${sex === 'male' ? 'einen mäßig aktiven Mann' : 'eine mäßig aktive Frau'} mit ${age}\u00A0Jahren: etwa ${m}\u00A0Wiederholungen pro Bein.`,
    verdict: { above: 'über dem typischen Wert', around: 'etwa beim typischen Wert', below: 'unter dem typischen Wert' },
    aroundNote: `Liegt deine Zahl höchstens ${CALF_ERROR_REPS}\u00A0Wiederholungen vom typischen Wert entfernt, gilt sie als „etwa beim typischen Wert“, denn so groß ist der übliche Messfehler des Tests.`,
    balance: (lsi) => `Verhältnis links zu rechts: ${lsi}\u00A0%.`,
    balanceOk: `Das erreicht den Richtwert von ${LSI_BENCHMARK}\u00A0%, der in der Reha üblich ist.`,
    balanceLow: (weaker, gap) =>
      `Das liegt unter dem Richtwert von ${LSI_BENCHMARK}\u00A0%, der in der Reha üblich ist: Dein ${weaker === 'left' ? 'linkes' : 'rechtes'} Bein hat ${gap}\u00A0% weniger Wiederholungen geschafft.`,
    clamped: (a) => `Die Studie hat Erwachsene von 20 bis 81\u00A0Jahren getestet, deshalb gilt hier der Wert für ${a}\u00A0Jahre.`,
    disclaimer:
      'Das vergleicht deine Zahl mit Durchschnittswerten aus einer Studie. Es ist keine Diagnose: Eine Zahl unter dem typischen Wert heißt nicht, dass etwas nicht stimmt, und dein Verlauf über mehrere Wochen sagt mehr als ein einzelner Test.',
    cta: 'Walkito macht diesen Test alle 14\u00A0Tage und verfolgt beide Beine, damit du den Verlauf siehst.',
  },
  fr: {
    heading: 'Vérifiez votre résultat',
    intro:
      'Indiquez votre âge, votre sexe et le nombre de montées sur pointes sur une seule jambe que vous avez réalisées de chaque côté. Chaque jambe est comparée au nombre habituel pour votre âge et votre sexe dans l’étude de 2017, et vous voyez l’équilibre entre gauche et droite.',
    age: 'Âge',
    sex: 'Sexe',
    male: 'Homme',
    female: 'Femme',
    left: 'Jambe gauche',
    right: 'Jambe droite',
    submit: 'Voir mon résultat',
    invalid: 'Indiquez votre âge et un nombre pour chaque jambe.',
    tooYoung: 'L’étude ne portait que sur des adultes, le calculateur commence donc à 18\u00A0ans.',
    typical: (sex, age, m) =>
      `Nombre habituel pour ${sex === 'male' ? 'un homme modérément actif' : 'une femme modérément active'} de ${age}\u00A0ans\u00A0: environ ${m}\u00A0montées par jambe.`,
    verdict: { above: 'au-dessus du nombre habituel', around: 'proche du nombre habituel', below: 'en dessous du nombre habituel' },
    aroundNote: `Un écart de ${CALF_ERROR_REPS}\u00A0montées ou moins compte comme «\u00A0proche\u00A0», car c’est l’erreur de mesure habituelle du test.`,
    balance: (lsi) => `Équilibre gauche-droite\u00A0: ${lsi}\u00A0%.`,
    balanceOk: `C’est au niveau du repère de ${LSI_BENCHMARK}\u00A0% utilisé en rééducation.`,
    balanceLow: (weaker, gap) =>
      `C’est en dessous du repère de ${LSI_BENCHMARK}\u00A0% utilisé en rééducation\u00A0: votre jambe ${weaker === 'left' ? 'gauche' : 'droite'} a fait ${gap}\u00A0% de montées en moins.`,
    clamped: (a) => `L’étude a testé des adultes de 20 à 81\u00A0ans, le calcul utilise donc la valeur pour ${a}\u00A0ans.`,
    disclaimer:
      'Ce calcul compare votre nombre à des moyennes d’étude. Ce n’est pas un diagnostic\u00A0: un nombre inférieur au nombre habituel ne veut pas dire que quelque chose ne va pas, et votre évolution sur plusieurs semaines en dit plus qu’un seul test.',
    cta: 'Walkito refait ce test tous les 14\u00A0jours et suit les deux jambes, pour que vous voyiez l’évolution.',
  },
  it: {
    heading: 'Controlla il tuo risultato',
    intro:
      'Inserisci età, sesso e quanti sollevamenti su una gamba sola hai fatto per ciascun lato. Vedrai ogni gamba confrontata con il valore tipico per la tua età e il tuo sesso nello studio del 2017, e l’equilibrio tra sinistra e destra.',
    age: 'Età',
    sex: 'Sesso',
    male: 'Uomo',
    female: 'Donna',
    left: 'Gamba sinistra',
    right: 'Gamba destra',
    submit: 'Vedi il risultato',
    invalid: 'Inserisci l’età e un numero per ciascuna gamba.',
    tooYoung: 'Lo studio includeva solo adulti, quindi il calcolatore parte dai 18\u00A0anni.',
    typical: (sex, age, m) =>
      `Valore tipico per ${sex === 'male' ? 'un uomo moderatamente attivo' : 'una donna moderatamente attiva'} di ${age}\u00A0anni: circa ${m}\u00A0sollevamenti per gamba.`,
    verdict: { above: 'sopra il valore tipico', around: 'vicino al valore tipico', below: 'sotto il valore tipico' },
    aroundNote: `Una differenza fino a ${CALF_ERROR_REPS}\u00A0sollevamenti conta come «vicino», perché è il normale errore di misura del test.`,
    balance: (lsi) => `Equilibrio sinistra-destra: ${lsi}%.`,
    balanceOk: `Raggiunge il riferimento del ${LSI_BENCHMARK}% usato in riabilitazione.`,
    balanceLow: (weaker, gap) =>
      `È sotto il riferimento del ${LSI_BENCHMARK}% usato in riabilitazione: la tua gamba ${weaker === 'left' ? 'sinistra' : 'destra'} ha fatto il ${gap}% di sollevamenti in meno.`,
    clamped: (a) => `Lo studio ha misurato adulti dai 20 agli 81\u00A0anni, quindi qui si usa il valore per ${a}\u00A0anni.`,
    disclaimer:
      'Questo confronta il tuo numero con le medie di uno studio. Non è una diagnosi: un numero sotto il valore tipico non vuol dire che qualcosa non va, e il tuo andamento nell’arco di alcune settimane dice più di un singolo test.',
    cta: 'Walkito ripete questo test ogni 14\u00A0giorni e segue entrambe le gambe, così vedi come cambia.',
  },
  pt: {
    heading: 'Veja o seu resultado',
    intro:
      'Informe sua idade, seu sexo e quantas elevações de calcanhar apoiado em uma perna só você fez de cada lado. Você verá cada perna comparada com o número típico para sua idade e seu sexo no estudo de 2017, e o equilíbrio entre esquerda e direita.',
    age: 'Idade',
    sex: 'Sexo',
    male: 'Masculino',
    female: 'Feminino',
    left: 'Perna esquerda',
    right: 'Perna direita',
    submit: 'Ver meu resultado',
    invalid: 'Informe sua idade e um número para cada perna.',
    tooYoung: 'O estudo incluiu só adultos, então a calculadora começa aos 18\u00A0anos.',
    typical: (sex, age, m) =>
      `Número típico para ${sex === 'male' ? 'um homem moderadamente ativo' : 'uma mulher moderadamente ativa'} de ${age}\u00A0anos: cerca de ${m}\u00A0elevações por perna.`,
    verdict: { above: 'acima do número típico', around: 'perto do número típico', below: 'abaixo do número típico' },
    aroundNote: `Uma diferença de até ${CALF_ERROR_REPS}\u00A0elevações conta como “perto”, porque esse é o erro de medida comum do teste.`,
    balance: (lsi) => `Equilíbrio entre esquerda e direita: ${lsi}%.`,
    balanceOk: `Isso atinge a referência de ${LSI_BENCHMARK}% usada na reabilitação.`,
    balanceLow: (weaker, gap) =>
      `Isso fica abaixo da referência de ${LSI_BENCHMARK}% usada na reabilitação: sua perna ${weaker === 'left' ? 'esquerda' : 'direita'} fez ${gap}% menos elevações.`,
    clamped: (a) => `O estudo avaliou adultos de 20 a 81\u00A0anos, então aqui vale o número para ${a}\u00A0anos.`,
    disclaimer:
      'Isso compara seu número com médias de um estudo. Não é um diagnóstico: um número abaixo do típico não quer dizer que algo está errado, e sua evolução ao longo de algumas semanas diz mais do que um teste só.',
    cta: 'O Walkito repete este teste a cada 14\u00A0dias e acompanha as duas pernas, para você ver a evolução.',
  },
};

export function toInt(v: string): number | null {
  if (!/^\s*\d{1,3}\s*$/.test(v)) return null;
  return Number(v);
}
