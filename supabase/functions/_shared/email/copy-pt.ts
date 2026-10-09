import type { Copy } from './copy.ts';
import { two } from './plural.ts';

/**
 * Brazilian Portuguese. «você» throughout and the app's own words: «panturrilha»,
 * «elevação de calcanhar», «reavaliação», «assinatura», «ajustes». The rules in
 * `copy.ts` hold here too: all lowercase, a plain hyphen, no pain figure in a
 * subject, no diagnosis words (tratar, curar, sarar and their kin).
 */

const minutesPt = (m: number) => `${m} ${two(m, 'minuto', 'minutos')}`;
const secondsPt = (n: number) => two(n, 'segundo', 'segundos');

export const PT: Copy = {
  greeting: (name) => (name ? `oi, ${name},` : 'oi,'),
  footer: {
    why: 'você está recebendo este e-mail porque usa o walkito.',
    unsubscribe: 'cancelar inscrição',
    settings: 'ajustes de e-mail',
  },
  goalTitle: {
    pain_free_mornings: 'manhãs mais leves',
    arch_hold: 'sustentação do arco',
    calf_raises: 'panturrilhas mais fortes',
    balance: 'mais equilíbrio',
    symmetry: 'pés por igual',
  },
  metricName: {
    calf: 'elevações de calcanhar',
    arch: 'sustentação do arco',
    balance: 'equilíbrio',
    symmetry: 'diferença entre as pernas',
  },
  resultName: {
    calf: 'suas elevações de calcanhar',
    arch: 'a sustentação do seu arco',
    balance: 'seu equilíbrio',
    symmetry: 'a diferença entre as suas pernas',
  },
  value: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `${n}%` : `${n} s`),
  target: (metric, n) => (metric === 'calf' ? n : metric === 'symmetry' ? `menos de ${n}%` : `${n} s`),

  welcome: {
    subject: 'boas-vindas ao walkito',
    intro: 'aqui é o rahim e o rahman. fizemos o walkito, só nós dois.',
    first: (m) => `sua primeira sessão leva ${minutesPt(m)}. comece hoje, é a mais fácil.`,
    firstRunner: (m) => `sua primeira sessão leva ${minutesPt(m)}, menos que o seu aquecimento.`,
    button: 'abrir o walkito',
    ps: 'p.s. responda a este e-mail. a gente lê todos.',
  },
  day2Morning: {
    subject: 'faça isto antes de sair da cama',
    lines: ['o primeiro passo da manhã é o que mais dói.', '60 segundos de alongamento na cama mudam isso. experimente amanhã.'],
    button: 'ver o alongamento de 60 segundos',
  },
  day2Focus: {
    subject: {
      pain_free_mornings: 'esta semana é sobre as suas manhãs',
      arch_hold: 'esta semana é sobre o seu arco',
      calf_raises: 'esta semana é sobre as suas panturrilhas',
      balance: 'esta semana é sobre o seu equilíbrio',
      symmetry: 'esta semana é sobre deixar as pernas por igual',
    },
    numbers: (name, current, target) => `${name}: ${current} agora. meta: ${target}.`,
    moves: 'cada sessão desta semana mexe nesse número.',
    noNumbers: (goal) => `cada sessão desta semana trabalha pela sua meta: ${goal}.`,
    button: 'ver esta semana',
  },
  day5Easy: {
    subject: 'fácil demais? que bom.',
    lines: [
      'a primeira semana é leve de propósito. primeiro a gente acalma as coisas, depois aumenta a carga.',
      'o trabalho de verdade começa na semana que vem.',
    ],
    button: 'ver a sua semana',
  },
  day5Start: {
    subject: (m) => `a primeira leva ${minutesPt(m)}`,
    line: 'sem academia, sem equipamento. dá para fazer sentado.',
    button: (m) => `começar com ${minutesPt(m)}`,
  },
  day10Keep: {
    subject: 'retome hoje',
    notBecause: 'este é o ponto em que é fácil parar. não pare.',
    painDrop: (s, l) => `suas manhãs foram de ${s} para ${l}. não pare agora.`,
    daysIn: (d) => (d === 1 ? 'já é 1 dia. continue.' : `já são ${d} dias. continue.`),
    button: (m) => (m === 1 ? 'fazer o minuto de hoje' : `fazer os ${m} minutos de hoje`),
  },
  day14Test: {
    subject: 'dia de reavaliação: veja o que mudou',
    before: (metric, n, shown) => {
      switch (metric) {
        case 'calf':
          return `duas semanas atrás você fez ${shown} ${two(n, 'elevação', 'elevações')} de calcanhar. vamos ver hoje.`;
        case 'arch':
          return `duas semanas atrás você sustentou o arco por ${shown} ${secondsPt(n)}. vamos ver hoje.`;
        case 'balance':
          return `duas semanas atrás você ficou ${shown} ${secondsPt(n)} em uma perna só. vamos ver hoje.`;
        case 'symmetry':
          return `duas semanas atrás a diferença entre as suas pernas era de ${shown}%. vamos ver hoje.`;
      }
    },
    generic: 'já se passaram duas semanas. vamos ver o que mudou.',
    tests: '3 testes rápidos, uns 4 minutos.',
    button: 'fazer a reavaliação',
  },
  testResult: {
    subject: (name, before, now) => `${name}: ${before} → ${now}`,
    work: (w) =>
      w <= 1
        ? 'é uma semana de trabalho, medida.'
        : w === 2
          ? 'são duas semanas de trabalho, medidas.'
          : `são ${w} semanas de trabalho, medidas.`,
    goal: (target) => `a meta é ${target}.`,
    button: 'ver o seu progresso',
  },
  goalReached: {
    subject: (goal) => `${goal}: conseguiu`,
    reached: (goal, t) => {
      switch (goal) {
        case 'calf_raises':
          return `você quis chegar a ${t} ${two(t, 'elevação', 'elevações')} de calcanhar. chegou.`;
        case 'arch_hold':
          return `você quis sustentar o arco por ${t} ${secondsPt(t)}. conseguiu.`;
        case 'balance':
          return `você quis ficar ${t} ${secondsPt(t)} em uma perna só. conseguiu.`;
        case 'symmetry':
          return `você quis deixar a diferença entre as suas pernas abaixo de ${t}%. conseguiu.`;
        case 'pain_free_mornings':
          return 'você quis ter manhãs mais leves. chegou lá.';
      }
    },
    next: (goal) => `próxima meta: ${goal}.`,
    buttonNext: 'começar a próxima meta',
    buttonPlan: 'ver o seu plano',
  },
  painUp: {
    subject: 'uma semana mais pesada. este é o plano',
    lines: [
      'a dor subiu um pouco esta semana. acontece. o seu plano já ficou mais leve.',
      'se notar inchaço, dormência ou dor à noite, procure um médico.',
    ],
    button: 'ver o plano mais leve da semana',
  },
  winback7: {
    subject: 'o seu plano continua aqui',
    lines: ['não precisa correr atrás do atraso. ele continua de onde você está.', '3 minutos hoje?'],
    button: 'começar com 3 minutos',
  },
  winback21: {
    subject: 'seguimos aqui se os seus pés precisarem',
    saved: (name, value) => `os seus números estão salvos: ${name}, ${value}.`,
    savedPlain: 'o seu plano e o seu progresso estão salvos.',
    button: 'abrir o walkito',
  },
  offer: {
    subject: (p) => (p != null ? `seu plano está salvo, ${p}% de desconto` : 'seu plano está salvo, agora por um preço menor'),
    ready: (goal, current, target) => `seu plano para ${goal} está pronto: ${current} agora, meta ${target}.`,
    readyPlain: (goal) => `seu plano para ${goal} está pronto e esperando por você.`,
    price: (price, standard) => `a assinatura anual sai por ${price} em vez de ${standard}.`,
    priceUnknown: 'agora a assinatura anual custa menos.',
    button: (p) => (p != null ? `garantir ${p}% de desconto` : 'ver a oferta'),
  },
  offerFinal: {
    subject: 'a nossa última oferta',
    price: (price) => `a assinatura anual por ${price}. depois disso, não haverá mais ofertas.`,
    priceUnknown: 'a assinatura anual pelo nosso menor preço. depois disso, não haverá mais ofertas.',
    button: (price) => (price != null ? `garantir por ${price}` : 'ver a oferta'),
  },
  weekly: {
    subject: (s) => `sua semana: ${s} ${two(s, 'sessão', 'sessões')}`,
    subjectWithMetric: (s, name, value) => `sua semana: ${s} ${two(s, 'sessão', 'sessões')}, ${name} ${value}`,
    mornings: (avg) => `suas manhãs ficaram em média em ${avg}/10.`,
    next: (goal) => `na semana que vem: ${goal}.`,
    button: 'ver a próxima semana',
  },
  unsubscribePage: {
    title: 'sua inscrição foi cancelada',
    done: 'o walkito não vai mais te enviar e-mails. você pode ativá-los de novo no app: ajustes → e-mail.',
    undo: 'voltar a receber e-mails',
    resubscribed: 'os e-mails estão ativos de novo.',
    invalid: 'este link não funciona mais.',
  },
};
