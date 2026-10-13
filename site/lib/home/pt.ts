import type { HomeCopy } from '@/components/Home';
import { PAIN_GOAL_MAX, PROGRAM } from '@/lib/site';

/*
 * Brazilian Portuguese home page, translated from the `en:` entry of `COPY` in
 * `components/Home.tsx` (2026-10-08). Informal «você». Every number is read
 * from `PROGRAM`, as in English. The program and evidence pages exist only in
 * English, so their links say «(em inglês)».
 */
const [MIN_A, MIN_B, MIN_C] = PROGRAM.sessionMinutes;
const { archHoldSeconds, calfRaises, balanceSeconds, gapPercent } = PROGRAM.goals;
const { testEveryDays, testEveryDaysAfterGoal, painFreeDays, retestTests, retestMinutes } = PROGRAM;

export const HOME_PT: HomeCopy = {
  meta: {
    title: 'Walkito: exercícios para dor no calcanhar e pé chato',
    description:
      'O Walkito é um plano de exercícios personalizado para dor no calcanhar, no pé e na perna que se ajusta todo dia a como seus pés estão.',
  },
  h1a: 'Já tentou de tudo?',
  h1b: 'Experimente um plano feito para os seus pés.',
  lead: 'O Walkito é um plano de exercícios personalizado para dor no calcanhar, no pé e na perna que se ajusta todo dia a como seus pés estão.',
  small: `${MIN_A}, ${MIN_B} ou ${MIN_C} minutos por dia, em casa.`,
  alt: {
    heroCenter: 'A tela de hoje do Walkito: uma saudação, o registro da manhã e a sessão do dia',
  },
  storyH2: 'A culpa não é sua.',
  storyP:
    'Palmilhas, tênis novo, cinquenta vídeos que dizem coisas diferentes. Nenhum deles treina o pé. O que falta é um plano claro, para os dias bons e para os ruins.',
  storyChipsAfter: ['diferentes.', 'pé.', 'claro,', 'ruins.'],
  storyAccent: 'um plano claro,',
  whoH2: 'Isso é para mim?',
  whoKicker: 'Para você',
  whoLead:
    'Escolha o que mais combina com você. O plano começa por aí e muda conforme seus pés estão a cada dia.',
  who: {
    heel: {
      title: 'Dor no calcanhar e fascite plantar',
      text: 'Dor forte nos primeiros passos da manhã, dor depois de ficar sentado ou de uma longa caminhada.',
      goal: 'Meta: manhãs sem dor',
    },
    flat: {
      title: 'Pé chato',
      text: 'Arcos cansados e doloridos, e pés que viram para dentro.',
      goal: `Meta: sustentar o arco por ${archHoldSeconds} segundos`,
    },
    allday: {
      title: 'Em pé o dia todo',
      text: 'Enfermagem, comércio, depósito, restaurantes. Pés que doem no fim do turno.',
      goal: null,
    },
    run: {
      title: 'Corredores e atletas',
      text: 'Dor no calcanhar, no tendão de Aquiles ou na canela que sempre volta quando você treina.',
      goal: `Meta: ${calfRaises} elevações de panturrilha em uma perna só`,
    },
  },
  whoMore: 'Ler o guia',
  whoMoreEn: 'Ler (em inglês)',
  how: [
    {
      title: 'Uma semana de cada vez, em torno de uma meta',
      text: `Cada semana gira em torno de uma meta que dá para medir: dor no calcanhar pela manhã de ${PAIN_GOAL_MAX}/10 ou menos por ${painFreeDays} dias seguidos, sustentar o arco por ${archHoldSeconds} segundos, ${calfRaises} elevações de panturrilha em uma perna só, ${balanceSeconds} segundos de equilíbrio em uma perna, ou uma diferença de até ${gapPercent}% entre o lado esquerdo e o direito. Quando você alcança uma, ela passa para manutenção e a próxima entra no lugar.`,
      link: 'Como o plano funciona (em inglês)',
    },
    {
      title: `Um teste a cada ${testEveryDays} dias, depois a cada ${testEveryDaysAfterGoal}`,
      text: `${retestTests} testes físicos em cerca de ${retestMinutes} minutos: elevações de panturrilha até a falha, sustentação do arco e equilíbrio em uma perna dos dois lados. A cada ${testEveryDays} dias até você alcançar a primeira meta, depois a cada ${testEveryDaysAfterGoal}. O progresso é medido, não adivinhado pela sensação da semana.`,
      link: 'O que os testes medem (em inglês)',
    },
    {
      title: 'Escolhidos a partir de pesquisas publicadas',
      text: 'Exercícios escolhidos a partir de pesquisas e diretrizes publicadas. O Walkito em si não foi testado em um ensaio clínico.',
      link: 'Ver as evidências (em inglês)',
    },
  ],
  faq: [
    {
      q: 'Em quanto tempo vou sentir diferença?',
      a: `Depende da pessoa e da dor. O plano é montado uma semana de cada vez em torno de uma meta que dá para medir, e um teste a cada ${testEveryDays} dias mostra o que está mudando de verdade.`,
    },
    {
      q: 'Preciso de equipamento?',
      a: 'Não. Alguns exercícios usam uma toalha, um degrau ou escada, uma faixa elástica, um travesseiro ou uma bolinha de massagem, e o Walkito pergunta o que você tem. O que precisar de algo que você não tem fica fora do seu plano.',
    },
    {
      q: 'Serve para pé chato?',
      a: 'Sim, para pé chato flexível. Se um arco caiu de repente na vida adulta, procure um profissional de saúde primeiro.',
    },
    {
      q: 'Isso é orientação médica?',
      a: 'Não. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    },
    { q: 'Em quais idiomas ele está?', a: 'Inglês, russo e espanhol.' },
  ],
};
