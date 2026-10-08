import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-calf-stretch.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Figures, doses and citations are identical to
 * the English page; «about two feet» is given in centimetres.
 */

export const EX_CALF_STRETCH_PT: Guide = {
  lang: 'pt',
  page: 'exCalfStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Alongamento de panturrilha para fascite plantar: como fazer',
  description:
    'Como fazer o alongamento de panturrilha (joelho esticado) para fascite plantar e panturrilha tensa: técnica, séries, tempo de cada alongamento e evidência.',
  h1: 'Alongamento de panturrilha para fascite plantar: técnica, séries e tempo',
  lede:
    'O alongamento de panturrilha com o joelho esticado trabalha o gastrocnêmio, o músculo grande e mais externo da panturrilha. Um gastrocnêmio tenso limita o quanto o tornozelo dobra, e em um estudo caso-controle com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a dorsiflexão reduzida do tornozelo foi o fator de risco independente mais forte. A diretriz de 2023 para dor no calcanhar dá ao alongamento de panturrilha o grau máximo, A.',
  takeaways: [
    'A dorsiflexão reduzida do tornozelo foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle pareado, com uma chance 23,3\u00A0vezes maior (Riddle e colegas, 2003).',
    'Em uma série de 254\u00A0pessoas com fascite plantar, 52 a 60\u00A0por cento tinham uma contratura só do gastrocnêmio (Patel e DiGiovanni, 2011).',
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A, o mais alto (Koc e colegas, 2023).',
    'Uma metanálise de 2020 encontrou um efeito grande do alongamento da panturrilha e da fáscia plantar, embora a qualidade da evidência fosse de moderada a muito baixa (Siriphorn e Eksakulkla, 2020).',
    'O Walkito começa com 3\u00A0vezes de 30\u00A0segundos, cada perna.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Como fazer o alongamento de panturrilha com o joelho esticado?',
      paragraphs: [
        'Fique de frente para uma parede com as mãos apoiadas nela, mais ou menos na altura dos ombros. Leve um pé para trás, cerca de 60\u00A0cm. Mantenha a perna de trás esticada, o calcanhar pressionando o chão e os dedos apontando para a frente. Incline o quadril em direção à parede até sentir um alongamento na parte de cima da panturrilha de trás. Segure por 30\u00A0segundos e troque de perna.',
        'O segredo é manter o joelho de trás travado e esticado. Isso isola o gastrocnêmio, que cruza o joelho e o tornozelo. Se você dobra o joelho, o alongamento passa para o sóleo, o músculo mais profundo da panturrilha, e esse é outro exercício. Veja [alongamento do sóleo](/exercises/soleus-stretch/) (em inglês) para essa versão.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: {
            level: 'strong',
            why: 'A diretriz de 2023 dá ao alongamento de panturrilha o grau A. A panturrilha tensa foi o fator de risco mais forte para fascite plantar em um estudo caso-controle de 2003.',
          },
          dose: 'O Walkito começa com 3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Leve um pé para trás, mantenha esse joelho esticado e o calcanhar no chão. Incline o quadril para a frente até sentir um alongamento na parte de cima da panturrilha. Segure 30\u00A0segundos.',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na parte de cima da panturrilha da perna de trás',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Por que a panturrilha tensa causa dor no calcanhar?',
      keyFact: 'Em uma revisão de 254\u00A0pessoas com fascite plantar, pouco mais da metade tinha uma contratura só do gastrocnêmio, e 23 a 30\u00A0por cento tinham os dois músculos da panturrilha tensos (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'O gastrocnêmio vai de trás do joelho até o calcanhar, pelo tendão de Aquiles. A fáscia plantar começa onde o Aquiles termina, passando por baixo do osso do calcanhar e indo para a frente até os dedos. Quando o gastrocnêmio está tenso, ele limita o quanto o tornozelo consegue dobrar para cima. Isso obriga a fáscia plantar a absorver mais tensão a cada passo.',
        'Em um estudo caso-controle pareado com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a dorsiflexão reduzida do tornozelo aumentou em 23,3\u00A0vezes a chance de fascite plantar. Foi mais forte que o IMC, o tempo em pé ou qualquer outra variável do estudo.',
        'Em outro trabalho, uma revisão de 254\u00A0pessoas com fascite plantar encontrou que 52 a 60\u00A0por cento tinham uma contratura só do gastrocnêmio, e outros 23 a 30\u00A0por cento tinham uma contratura combinada de gastrocnêmio e sóleo. Ou seja, a panturrilha tensa não é um detalhe. Ela está presente na maioria das pessoas com esse problema.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'O alongamento de panturrilha ajuda na fascite plantar?',
      paragraphs: [
        'A diretriz de 2023 para dor no calcanhar revisou os estudos de alongamento disponíveis e deu ao alongamento da fáscia plantar e da panturrilha o grau **A**, o mais alto. Esse grau cobre o alongamento da fáscia plantar e o de panturrilha juntos, porque a maioria dos protocolos inclui os dois.',
        'Uma revisão sistemática com metanálise de 2020 juntou os ensaios de alongamento e encontrou um efeito grande tanto do alongamento de panturrilha quanto do alongamento da fáscia plantar. Os autores classificaram a qualidade da evidência como de moderada a muito baixa e pediram ensaios de melhor qualidade. Mesmo assim, o tamanho do efeito foi grande e comparável ao de outros tratamentos.',
        'Nenhum ensaio isola o alongamento de panturrilha com o joelho esticado sozinho na fascite plantar. Ele sempre é testado como parte de um programa. A diretriz o recomenda junto com o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) e o trabalho de força, como a [elevação de calcanhar](/exercises/calf-raises/) (em inglês).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Quais são os erros comuns no alongamento de panturrilha?',
      paragraphs: [
        'Dobrar o joelho de trás. No momento em que o joelho dobra, o gastrocnêmio relaxa e o alongamento passa para o sóleo. Mantenha o joelho de trás travado e esticado durante todo o tempo.',
        'Deixar o calcanhar de trás levantar. Se o calcanhar sai do chão, a panturrilha não está sendo alongada. Primeiro pressione o calcanhar no chão, depois incline para a frente até o alongamento aparecer.',
        'Virar o pé de trás para fora. Quando o pé gira para fora, o alongamento pega a parte de fora da panturrilha em vez do músculo inteiro. Mantenha os dedos apontando reto para a parede.',
        'Segurar pouco tempo. Um alongamento de 10\u00A0segundos não é longo o bastante para ter efeito no comprimento do tecido. Segure pelo menos 30\u00A0segundos de cada vez.',
      ],
    },
    {
      h2: 'Quem deve fazer este alongamento e quem deve pular?',
      paragraphs: [
        'Este alongamento serve para quem tem dor no calcanhar, fascite plantar, ou panturrilha tensa de ficar em pé o dia todo ou de um esporte que carrega a panturrilha, como a corrida. Ele aparece nas listas de exercícios de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/), [pés doendo de ficar em pé](/feet-hurt-standing-all-day/) (em inglês) e [dor no calcanhar ao correr](/heel-pain-runners/) (em inglês).',
        'Pule ou adapte se você tem um problema no tendão de Aquiles que dói durante o alongamento. Nesse caso, a dor vem de outra estrutura, e carregar o Aquiles com um alongamento na parede pode não ser o melhor ponto de partida. Veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/) para a abordagem específica do Aquiles.',
        'Se você não alcança a parede ou não fica em pé com conforto, um alongamento sentado com toalha dá um puxão parecido na panturrilha. Passe uma toalha em volta da parte da frente do pé, mantenha o joelho esticado e puxe os dedos em sua direção.',
      ],
    },
    {
      h2: 'Como o alongamento de panturrilha se encaixa com o alongamento do sóleo',
      paragraphs: [
        'O gastrocnêmio e o sóleo juntos formam a panturrilha. A versão com o joelho esticado alonga o gastrocnêmio. A versão com o joelho dobrado alonga o sóleo. São dois exercícios, não duas versões do mesmo.',
        'A maioria dos programas para fascite plantar inclui os dois, porque a panturrilha pode estar tensa em um dos músculos ou nos dois. A diretriz não os separa. O Walkito coloca os dois na mesma sessão quando há alongamento no plano. A página do [alongamento do sóleo](/exercises/soleus-stretch/) (em inglês) explica a versão com o joelho dobrado. Para o programa completo de alongamento e força, veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo segurar o alongamento de panturrilha para fascite plantar?',
      cites: [CITE.guideline],
      a: 'A maioria dos protocolos usa 30\u00A0segundos de cada vez, e é com isso que o Walkito começa. A diretriz de 2023 recomenda alongar a panturrilha sem definir um tempo único, mas a maior parte dos ensaios em que ela se baseia usou 30\u00A0segundos por vez, repetidos 2 a 3\u00A0vezes em cada perna.',
    },
    {
      q: 'Devo alongar a panturrilha todo dia com fascite plantar?',
      cites: [CITE.guideline],
      a: 'A diretriz de 2023 recomenda o alongamento da panturrilha e da fáscia plantar como parte do autocuidado diário na fascite plantar. O Walkito coloca alongamentos de panturrilha na maioria das sessões. O alongamento tem pouca carga e pouco risco, então fazer todo dia é razoável, desde que a dor fique abaixo de 6/10.',
    },
    {
      q: 'Qual a diferença entre o alongamento de panturrilha e o alongamento do sóleo?',
      cites: [CITE.patelGastrocnemius],
      a: 'O alongamento de panturrilha com o joelho esticado trabalha o gastrocnêmio, o músculo grande e mais externo da panturrilha. O alongamento do sóleo dobra o joelho de trás, o que deixa o gastrocnêmio relaxar e isola o sóleo, mais profundo. Os dois músculos estavam tensos na maioria das pessoas com fascite plantar (Patel e DiGiovanni, 2011).',
    },
    {
      q: 'Panturrilha tensa pode causar fascite plantar?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'Uma panturrilha tensa limita a dorsiflexão do tornozelo, e esse foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle (chance 23,3\u00A0vezes maior). Em outro trabalho, 52 a 60\u00A0por cento de 254\u00A0pessoas com fascite plantar tinham uma contratura só do gastrocnêmio. Uma panturrilha tensa não garante fascite plantar, mas aumenta bastante a chance.',
    },
  ],
  redFlags: {
    h2: 'Pare e procure um profissional de saúde se',
    bullets: [
      'a dor é no próprio tendão de Aquiles, não no músculo da panturrilha',
      'você sente um estalo repentino ou a sensação de algo rasgando durante o alongamento',
      'a panturrilha está inchada, vermelha ou quente de um lado só',
      'a dor começou depois de uma lesão ou de uma queda',
      'dormência, formigamento ou queimação acompanham a tensão na panturrilha',
      'não melhorou depois de várias semanas de alongamento diário',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito coloca o alongamento de panturrilha junto com o alongamento do sóleo e o alongamento da fáscia plantar na maioria das sessões. Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. O app passa do alongamento para o trabalho de força no seu ritmo.',
    more: [
      'A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. Uma panturrilha tensa que solta ao longo das semanas aparece como mais amplitude no tornozelo no teste. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Alongamento de panturrilha (gastrocnêmio, joelho esticado)',
  campaign: 'ex-calf-stretch-pt',
};
