import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-tibialis-raises.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the site name «elevação dos
 * dedos» (`articles-pt/shin-splints.ts`); «elevação do tibial» is given as the
 * other name people search. No new citations; uses only existing CITE keys.
 */

export const EX_TIBIALIS_RAISES_PT: Guide = {
  lang: 'pt',
  page: 'exTibialisRaises',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Elevação dos dedos (tibial anterior): como fazer',
  description:
    'Como fazer a elevação dos dedos na parede (elevação do tibial): técnica, séries, músculos, evidência para canelite e versões mais fáceis ou difíceis.',
  h1: 'Elevação dos dedos (tibial anterior): como fazer, o que trabalha e o que a evidência diz',
  lede:
    'A elevação dos dedos é um exercício apoiado na parede em que você levanta os dedos em direção à canela enquanto os calcanhares ficam no chão. Ela fortalece o tibial anterior, o músculo que desce pela frente da canela e ajuda a levantar o pé a cada passo. O exercício é simples e não precisa de nada além de uma parede.',
  takeaways: [
    'O tibial anterior controla a dorsiflexão, levantando a parte da frente do pé para ele passar sem raspar no chão ao andar e correr.',
    'Atletas com síndrome do estresse tibial medial (canelite) tinham menos resistência na elevação de calcanhar que controles pareados, o que aponta para um déficit geral de força na perna (Madeley e colegas, 2007).',
    'Nenhum ensaio randomizado testou a elevação dos dedos sozinha para um problema específico de pé ou tornozelo. O exercício entra nos programas por raciocínio biomecânico, não por evidência direta de ensaios.',
    'O Walkito começa com 3\u00A0séries de 10, os dois pés, com as costas na parede.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Quais músculos a elevação dos dedos trabalha?',
      paragraphs: [
        'A elevação dos dedos trabalha principalmente o tibial anterior, o músculo da frente da canela. Ele é responsável pela dorsiflexão, ou seja, levantar o pé em direção à canela. Toda vez que você dá um passo, o tibial anterior levanta os dedos para o pé passar sem raspar no chão. Quando ele está fraco, o pé pode bater no chão depois que o calcanhar encosta ou enganchar em superfícies irregulares.',
        'O exercício também trabalha os músculos menores que esticam os dedos, ao longo da frente da perna. Ele não coloca carga nos músculos da panturrilha, na parte de trás da perna, e por isso faz par com a [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/) para cobrir os dois lados da perna.',
      ],
    },
    {
      h2: 'Como fazer a elevação dos dedos?',
      paragraphs: [
        'Fique em pé com as costas apoiadas em uma parede. Leve os pés para a frente, uns 30\u00A0cm (mais ou menos o comprimento de um pé) longe da parede. Mantenha os calcanhares no chão.',
        'Levante a parte da frente dos dois pés o mais alto que conseguir, puxando os dedos em direção à canela. Segure um instante lá em cima. Desça devagar.',
        'A parede sustenta o seu peso para você se concentrar na contração da canela. Se você escorregar para longe da parede, os pés estão longe demais.',
      ],
      exercises: [
        {
          name: 'Elevação dos dedos (apoiado na parede)',
          evidence: {
            level: 'early',
            why: 'Nenhum ensaio randomizado testou a elevação dos dedos sozinha para um problema de pé ou de canela. Está aqui pelo equilíbrio biomecânico com o trabalho de panturrilha.',
          },
          dose: 'O Walkito começa com 3\u00A0séries de 10, os dois pés',
          how: 'Costas na parede, pés um pouco à frente. Levante os dedos em direção à canela, calcanhares no chão. Desça devagar.',
          often: 'Dias de força',
          feel: 'Uma queimação ao longo da frente das canelas',
          stop: 'Dor aguda no osso da canela, não só cansaço muscular',
          media: 'tibialis_raise',
          caption: 'Elevação dos dedos: levante os dedos, calcanhares no chão',
          alt: 'Uma figura apoiada na parede levantando os dedos dos dois pés em direção à canela, com a frente das pernas destacada',
        },
      ],
    },
    {
      h2: 'A elevação dos dedos ajuda na canelite?',
      keyFact: 'Em um estudo caso-controle de 2007, atletas com canelite tinham menos resistência na elevação de calcanhar que controles pareados, o que aponta para um déficit geral de força na perna, não para um músculo específico (Madeley e colegas, 2007).',
      paragraphs: [
        'A canelite, cujo nome clínico é síndrome do estresse tibial medial (SETM), é dor ao longo da borda de dentro do osso da canela. O tibial anterior fica na frente e para fora da canela, não no lugar onde a SETM costuma doer, então a ligação é indireta. A ideia é que um tibial anterior mais forte ajuda a absorver o impacto ao correr e andar, diminuindo o esforço na canela como um todo.',
        'Um estudo caso-controle de 2007 mostrou que atletas com SETM tinham menos resistência na elevação de calcanhar que controles pareados, o que aponta para um déficit geral de força na perna, não para fraqueza em um músculo específico.',
        'Uma revisão sistemática de 2013 olhou para o tratamento da SETM já instalada, não para a prevenção, e não encontrou nenhum ensaio mostrando que alongamento ou fortalecimento fossem eficazes, embora a evidência por trás desse achado fosse de baixa qualidade no geral.',
        'Sendo honesto: não temos um ensaio que testou a elevação dos dedos sozinha na canelite e mostrou que ela reduziu os sintomas ou a volta da dor. **O exercício está nos programas porque faz sentido biomecânico, não porque um ensaio provou.** Por isso o rótulo de evidência dele diz “inicial”. Para a página completa sobre canelite, veja [exercícios para canelite](/pt/canelite-exercicios/).',
      ],
      cites: [CITE.madeley, CITE.winters],
    },
    {
      h2: 'Séries, repetições e como progredir',
      paragraphs: [
        'O Walkito começa com 3\u00A0séries de 10, os dois pés, na parede. É um ponto de partida confortável para a maioria das pessoas. Se 10\u00A0repetições parecerem fáceis, sem cansaço nenhum, aumente para 15 ou acrescente uma pausa de 2\u00A0segundos lá em cima.',
        'Para deixar o exercício mais difícil:',
        {
          list: [
            'Tente a elevação dos dedos em uma perna: mesma posição na parede, um pé de cada vez.',
            'Uma faixa elástica passada por cima do pé acrescenta carga.',
            'Segurar um halter leve em cima do pé é outra opção, embora desajeitada.',
          ],
        },
        'A progressão mais simples é só fazer mais repetições, com ritmo controlado.',
        'Em inglês, o exercício também é chamado de “tibialis raise”. No app Walkito ele aparece como “Elevação dos dedos”. O movimento é o mesmo: levante os dedos, os calcanhares ficam no chão.',
      ],
    },
    {
      h2: 'Elevação dos dedos ou elevação de calcanhar',
      paragraphs: [
        'A elevação dos dedos e a [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/) são movimentos opostos. A elevação de calcanhar aponta o pé para baixo (flexão plantar). A elevação dos dedos levanta o pé (dorsiflexão). Os músculos da panturrilha e o tibial anterior trabalham juntos para controlar cada passo, absorvendo o impacto na aterrissagem e empurrando na saída dos dedos.',
        'Fortalecer um lado sem o outro pode criar um desequilíbrio. Corredores que só fazem elevação de calcanhar ainda podem ter dor na canela, porque o tibial anterior não acompanha a panturrilha quando a quilometragem é alta. **Um programa equilibrado inclui os dois.**',
      ],
    },
    {
      h2: 'Quais são os erros comuns na elevação dos dedos?',
      paragraphs: [
        {
          list: [
            '**Pés longe demais da parede.** Se os calcanhares escorregam para a frente, você perde o apoio da parede e o exercício vira um desafio de equilíbrio em vez de fortalecer a canela. Mais ou menos um pé de distância da parede é o certo para a maioria das pessoas.',
            '**Correr com as repetições.** Subir e descer devagar e com controle dá mais trabalho muscular que repetições rápidas. Dois segundos para subir, um segundo parado, dois segundos para descer é um bom ritmo.',
            '**Confundir a queimação do músculo com dor no osso.** Uma queimação ao longo dos músculos da frente da canela é normal durante a série. Uma dor aguda e localizada no próprio osso da canela não é, e pode indicar uma reação de estresse no osso. Pare e peça uma avaliação.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: 'Para que serve a elevação dos dedos?',
      a: 'A elevação dos dedos fortalece o músculo que levanta a parte da frente do pé. Ela costuma entrar em programas para a perna junto com a elevação de calcanhar, para a estabilidade geral da canela e do tornozelo. Pode ajudar quem sente a canela cansada ao correr ou andar, embora nenhum ensaio a tenha testado sozinha para um problema específico.',
    },
    {
      q: 'Elevação dos dedos previne canelite?',
      cites: [CITE.madeley, CITE.winters],
      a: 'Ela costuma entrar em programas para canelite pelo raciocínio biomecânico, não por evidência de ensaios. Uma revisão sistemática de 2013 olhou para o tratamento da SETM, não para a prevenção, e não encontrou nenhum ensaio mostrando que fortalecimento funcionasse, embora a evidência fosse de baixa qualidade. A elevação dos dedos sozinha também não foi testada para prevenir canelite.',
    },
    {
      q: 'Com que frequência fazer a elevação dos dedos?',
      a: 'Duas a quatro vezes por semana é uma faixa comum. O Walkito coloca o exercício nos dias de força, junto com o trabalho de panturrilha. Como a carga é relativamente baixa comparada a elevações de calcanhar pesadas ou descidas do calcanhar, a recuperação costuma ser rápida e dá para fazer em dias seguidos se não causar dor.',
    },
    {
      q: 'Elevação do tibial e elevação dos dedos são a mesma coisa?',
      a: 'Sim. “Elevação dos dedos” e “elevação do tibial” descrevem o mesmo movimento: levantar a parte da frente do pé enquanto o calcanhar fica no chão. O app Walkito chama de “Elevação dos dedos”. Em inglês, também aparece como “tibialis raise”, “tib raise” ou “toe raise”. Todos se referem ao mesmo exercício.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você tem uma dor aguda e concentrada no osso da canela, em vez de uma dor muscular espalhada',
      'a dor aumenta durante a corrida depois que você aumentou a quilometragem há pouco tempo, o que pode indicar uma fratura por estresse em vez de cansaço muscular',
      'há inchaço, vermelhidão ou calor sobre a canela',
      'você tem dificuldade para levantar a parte da frente do pé (pé caído)',
      'aparece dormência ou formigamento no pé ou na perna',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito junta a elevação dos dedos com a elevação de calcanhar, o trabalho de equilíbrio e os exercícios para o pé em um plano montado no seu nível atual. Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos.',
    more: [
      'A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, o equilíbrio e a sustentação do arco. A elevação dos dedos faz parte dos dias de força. O Walkito é um programa de exercícios. Ele não faz diagnóstico.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Elevação dos dedos (tibial anterior)',
  campaign: 'ex-tibialis-raises-pt',
};
