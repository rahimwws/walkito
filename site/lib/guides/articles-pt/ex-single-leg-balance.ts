import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-single-leg-balance.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Table figures use decimal commas. Uses existing
 * keys, including CITE.springer and CITE.bellows.
 */

export const EX_SINGLE_LEG_BALANCE_PT: Guide = {
  lang: 'pt',
  page: 'exSingleLegBalance',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Equilíbrio em uma perna: como fazer e por que importa',
  description:
    'Como fazer o equilíbrio em uma perna: técnica, tempo normal por idade, a progressão de olhos fechados, o que o teste mostra e os erros comuns.',
  h1: 'Equilíbrio em uma perna: como fazer, tempos normais e a progressão de olhos fechados',
  lede:
    'Ficar em pé em uma perna só é um dos testes mais simples de controle do tornozelo e do pé. Também é um exercício. A cada segundo que você segura a posição, os músculos pequenos do pé e do tornozelo trabalham para manter você de pé. Um estudo de 2007 com 549\u00A0adultos saudáveis encontrou que a capacidade de ficar em uma perna, com os olhos abertos e fechados, cai de forma constante com a idade, e uma metanálise de 2018 encontrou que o treino de equilíbrio reduziu em 46\u00A0por cento o risco de entorse de tornozelo em atletas.',
  takeaways: [
    'Adultos saudáveis de 18 a 39\u00A0anos ficaram em média 43,3\u00A0segundos em uma perna com os olhos abertos e 9,4\u00A0segundos com os olhos fechados. Entre 60 e 69\u00A0anos, a média de olhos abertos foi de 26,9\u00A0segundos, e a de olhos fechados tinha caído para 2,8\u00A0segundos (Springer e colegas, 2007).',
    'Uma metanálise com 3.577\u00A0atletas encontrou que o treino de equilíbrio reduziu o risco de entorse de tornozelo em 46\u00A0por cento comparado a nenhuma intervenção (Bellows e Wong, 2018).',
    'A meta de equilíbrio do Walkito é 30\u00A0segundos em uma perna. O teste acontece a cada 14\u00A0dias enquanto a meta de equilíbrio está ativa.',
    'Fechar os olhos tira a visão como fonte de equilíbrio e obriga o pé e o tornozelo a fazer mais do trabalho. O app inclui ficar em pé de olhos fechados como o passo seguinte depois do equilíbrio de olhos abertos.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Como fazer o equilíbrio em uma perna?',
      paragraphs: [
        'Fique perto de uma parede ou bancada. Tire um pé do chão dobrando um pouco o joelho. Olhe para um ponto fixo à sua frente. Deixe o pé de apoio balançar. Esse balanço é o objetivo: os músculos pequenos do pé e do tornozelo estão trabalhando para manter você de pé.',
        'Segure o quanto conseguir, até 30\u00A0segundos, e troque de lado. Três vezes de cada lado é uma dose comum. Se você não consegue segurar mais que alguns segundos, mantenha as pontas dos dedos na parede e vá aumentando aos poucos.',
      ],
      exercises: [
        {
          name: 'Equilíbrio em uma perna',
          evidence: {
            level: 'moderate',
            why: 'O treino de equilíbrio reduz o risco de entorse de tornozelo (metanálise de Bellows 2018). Ficar em uma perna é uma medida clínica padrão, com dados normativos (Springer 2007).',
          },
          dose: 'O Walkito começa com 3\u00A0vezes de 30\u00A0segundos, cada lado',
          how: 'Fique em um pé só perto de uma parede. Olhe para um ponto fixo. Deixe o tornozelo balançar. Segure até 30\u00A0segundos.',
          often: 'Quase todas as sessões',
          feel: 'O pé e o tornozelo trabalhando para ficar parados',
          stop: 'Dor aguda no pé ou no tornozelo, não só o balanço',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: deixe o pé balançar, esse é o exercício',
          alt: 'Uma figura em pé em uma perna perto de uma parede, com o pé e o tornozelo destacados',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: 'Quanto tempo você deveria conseguir ficar em uma perna só?',
      paragraphs: [
        'Um estudo de 2007 testou 549\u00A0adultos saudáveis de várias faixas de idade. Os resultados dão uma referência aproximada, não uma linha de aprovado ou reprovado.',
      ],
      table: {
        caption: 'Tempo médio em uma perna, olhos abertos e fechados (Springer 2007)',
        head: ['Faixa de idade', 'Olhos abertos (segundos)', 'Olhos fechados (segundos)'],
        rows: [
          ['18-39', '43,3', '9,4'],
          ['40-49', '40,3', '7,3'],
          ['50-59', '37,0', '4,8'],
          ['60-69', '26,9', '2,8'],
          ['70-79', '15,0', '2,0'],
          ['80-99', '6,2', '1,3'],
        ],
      },
      after: [
        'Os números caem bastante quando os olhos fecham, principalmente depois dos 50. Isso faz da versão de olhos fechados um teste muito mais sensível do controle do tornozelo e do pé. Também é por isso que o app Walkito inclui uma progressão de olhos fechados depois do equilíbrio de olhos abertos.',
        'Mais importante que bater com a tabela é ver se o seu tempo está melhorando ao longo das semanas e se os dois lados estão mais ou menos iguais. Uma diferença grande entre as pernas pode indicar um déficit de força ou de estabilidade de um lado.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'A progressão de olhos fechados',
      paragraphs: [
        'Fechar os olhos tira a informação visual que o cérebro normalmente usa para ajudar no equilíbrio. Isso obriga os proprioceptores do pé e do tornozelo, os sensores que percebem posição e movimento, a fazer mais do trabalho. É uma versão mais difícil do mesmo exercício, não um exercício diferente.',
        'Fique perto de uma parede por segurança. Feche os olhos e segure o quanto conseguir. A maioria das pessoas vê o tempo cair para uma fração do tempo de olhos abertos. Essa diferença diminui com a prática.',
        'O app Walkito inclui ficar em pé de olhos fechados como um exercício separado: 3\u00A0vezes de 20\u00A0segundos, os dois pés (alternando). Ele abre como progressão quando a meta de equilíbrio de olhos abertos está firme.',
      ],
    },
    {
      h2: 'Por que o equilíbrio importa para a dor no pé?',
      keyFact: 'Nas entorses de tornozelo, uma análise conjunta de 8\u00A0estudos e 3.577\u00A0atletas encontrou que o treino de equilíbrio reduziu o risco de entorse em 46\u00A0por cento comparado a nenhuma intervenção (Bellows e Wong, 2018).',
      paragraphs: [
        'O equilíbrio não é separado da força do pé. Quando você fica em uma perna, os músculos intrínsecos do pé (os músculos pequenos dentro do pé que sustentam o arco), os músculos da panturrilha, o tibial anterior e os estabilizadores do quadril trabalham juntos. Um déficit em qualquer ponto dessa cadeia faz o pé compensar.',
        'Na fascite plantar e no pé chato, o treino de equilíbrio aparece nos programas de exercício junto com alongamento e fortalecimento, porque treina a cadeia inteira de uma vez. Um ensaio de 2023 com 52\u00A0pessoas com pé chato flexível encontrou que um programa que juntava exercícios de pé curto, trabalho de tornozelo, fortalecimento de quadril, alongamento e equilíbrio mudou o formato do arco mais que um grupo controle. O equilíbrio não foi isolado nesse ensaio, mas fazia parte do programa que funcionou.',
        'Especificamente nas entorses de tornozelo, uma metanálise de 2018 com 8\u00A0estudos e 3.577\u00A0atletas encontrou que o treino de equilíbrio reduziu o risco de entorse de tornozelo em 46\u00A0por cento comparado a nenhuma intervenção. Esse é o achado isolado mais forte por trás de incluir equilíbrio em um programa para os pés.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: 'Quais são os erros comuns no equilíbrio em uma perna?',
      paragraphs: [
        'Olhar para o chão. Os olhos devem ficar em um ponto fixo na altura dos olhos. Olhar para baixo joga o peso para a frente e deixa o exercício mais fácil, o que tira o sentido dele.',
        'Travar o joelho de apoio. Uma leve dobra mantém os músculos ativos. Um joelho travado passa a carga para a articulação em vez dos músculos em volta dela.',
        'Tentar não balançar. O balanço é o exercício. As pequenas correções que o pé faz para ficar de pé são o que desenvolve a propriocepção e o controle do tornozelo. Agarrar o chão com os dedos dobrados ou ficar todo tenso para eliminar qualquer movimento diminui o efeito do treino.',
        'Ficar longe demais da parede. Você precisa estar perto o bastante para se segurar se perder o equilíbrio, principalmente na versão de olhos fechados. Segurança primeiro.',
      ],
    },
    {
      h2: 'Versões mais fáceis e mais difíceis',
      paragraphs: [
        'Se você não consegue ficar em uma perna por mais que alguns segundos, mantenha as pontas dos dedos em uma parede e vá subindo. Mesmo um toque leve dá ao cérebro uma informação extra de equilíbrio. Tire um dedo de cada vez conforme for melhorando.',
        'Se 30\u00A0segundos em um chão firme parecerem fáceis, tente ficar em cima de uma toalha dobrada ou de um travesseiro. A superfície macia faz o tornozelo trabalhar mais a cada balanço. O app inclui um exercício de equilíbrio no travesseiro como progressão seguinte.',
        'A progressão mais difícil é o equilíbrio em uma perna de olhos fechados em uma superfície macia. Isso tira a informação visual e o chão estável ao mesmo tempo, e deixa quase todo o trabalho para o pé e o tornozelo.',
        'Para exercícios relacionados que fortalecem a cadeia, veja a [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/), a [elevação dos dedos](/pt/exercicios/elevacao-dos-dedos-parede/) e o [exercício do pé curto](/pt/exercicios/pe-curto/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo uma pessoa deve conseguir ficar em uma perna só?',
      cites: [CITE.springer],
      a: 'Um estudo normativo de 2007 com 549\u00A0adultos saudáveis encontrou que pessoas de 18 a 39\u00A0anos ficaram em média 43,3\u00A0segundos com os olhos abertos e 9,4\u00A0segundos com os olhos fechados. Entre 60 e 69\u00A0anos, foram 26,9\u00A0segundos de olhos abertos e 2,8\u00A0segundos de olhos fechados (Springer 2007). A meta de equilíbrio do Walkito é 30\u00A0segundos de cada lado.',
    },
    {
      q: 'Equilíbrio em uma perna ajuda a evitar entorse de tornozelo?',
      cites: [CITE.bellows],
      a: 'Uma metanálise de 2018 com 8\u00A0estudos e 3.577\u00A0atletas encontrou que o treino de equilíbrio reduziu o risco de entorse de tornozelo em 46\u00A0por cento comparado a nenhuma intervenção (Bellows e Wong, 2018). A maioria dos programas estudados incluía exercícios de equilíbrio, como ficar em uma perna, junto com outros treinos.',
    },
    {
      q: 'Por que é mais difícil ficar em uma perna de olhos fechados?',
      cites: [CITE.springer],
      a: 'O cérebro usa a visão, os sinais do ouvido interno e a propriocepção (sensores no pé e no tornozelo) juntos para equilibrar o corpo. Fechar os olhos tira uma das três fontes e obriga as outras duas a carregar mais. Nos dados de Springer 2007, os tempos de olhos fechados eram uma fração dos tempos de olhos abertos em todas as idades.',
    },
    {
      q: 'Com que frequência treinar o equilíbrio em uma perna?',
      a: 'Treinar todo dia não tem problema, porque a carga é baixa. O Walkito coloca o exercício na maioria dos dias de sessão. Mesmo alguns minutos de prática por dia podem melhorar o tempo ao longo das semanas. O segredo é a constância, não a duração.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você perde o equilíbrio com frequência ou tem quedas que o piso ou o calçado não explicam',
      'um tornozelo falseia várias vezes, principalmente depois de uma entorse anterior',
      'há dormência, formigamento ou perda de sensibilidade no pé ou na perna',
      'você sente tontura ou a sensação de que tudo gira quando muda de posição',
      'há uma mudança repentina no equilíbrio que você não consegue explicar',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito inclui o equilíbrio em uma perna e ficar em pé de olhos fechados em um plano junto com elevação de calcanhar, alongamentos e exercícios para o pé. A meta de equilíbrio é 30\u00A0segundos em cada perna. A cada 14\u00A0dias, um teste curto mede quanto tempo você consegue segurar, e a diferença entre os dois lados também é acompanhada.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Quando a meta de equilíbrio é alcançada, o teste passa a ser a cada 28\u00A0dias e uma nova meta entra no lugar. O Walkito é um programa de exercícios. Ele não faz diagnóstico.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Equilíbrio em uma perna',
  campaign: 'ex-single-leg-balance-pt',
};
