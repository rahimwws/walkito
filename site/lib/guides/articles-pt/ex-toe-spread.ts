import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-toe-spread.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the site name «abrir os
 * dedos» (`lib/guides/pt.ts`); percentages use decimal commas. Uses existing
 * keys, including CITE.gooding and CITE.mcKeon.
 */

export const EX_TOE_SPREAD_PT: Guide = {
  lang: 'pt',
  page: 'exToeSpread',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercício de abrir os dedos do pé: como fazer',
  description:
    'Como fazer o exercício de abrir os dedos do pé: técnica, séries e repetições, músculos trabalhados, para quem serve e o que a ressonância magnética mostra.',
  h1: 'Abrir os dedos do pé: como afastar os dedos para fortalecer o pé',
  lede:
    'O exercício de abrir os dedos treina os músculos que afastam os dedos do pé um do outro. Você abre os cinco dedos o máximo que der, segura e solta. Ele trabalha o abdutor do hálux, na parte de dentro, e o abdutor do dedo mínimo, na parte de fora, os mesmos músculos que sustentam as duas bordas do arco. Aparece em programas para pé chato, joanete e força geral do pé.',
  takeaways: [
    'Um estudo de ressonância magnética de 2016 mostrou que abrir os dedos produziu a maior ativação média (35,2%) no abdutor do dedo mínimo, o músculo que sustenta o arco do lado de fora, entre quatro exercícios para os músculos intrínsecos do pé testados (Gooding e colegas, 2016).',
    'Um estudo de ressonância magnética de 2016 mostrou que abrir os dedos produziu a segunda maior ativação média (31,5%) no adutor do hálux oblíquo, um músculo do lado de dentro da articulação do dedão (Gooding e colegas, 2016).',
    'Abrir os dedos faz parte do modelo mais amplo de treino dos músculos intrínsecos do pé descrito em uma revisão narrativa de 2015, junto com o exercício do pé curto e a extensão do dedão (McKeon e colegas, 2015).',
    'A maioria das pessoas não consegue abrir bem os dedos no começo. A capacidade melhora com a prática ao longo de algumas semanas.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é o exercício de abrir os dedos?',
      paragraphs: [
        'O exercício de abrir os dedos, também chamado de afastar os dedos ou espalhar os dedos, é um movimento ativo em que você abre os cinco dedos em leque o máximo que der, segura a abertura e depois junta os dedos de novo. Ele trabalha os músculos que fazem a abdução dos dedos, ou seja, os músculos que puxam os dedos para os lados, para longe uns dos outros.',
        'É diferente do [exercício do pé curto](/pt/exercicios/pe-curto/), que levanta o arco sem mexer os dedos, e diferente de [puxar a toalha com os dedos](/pt/exercicios/puxar-toalha-dedos/), que dobra os dedos. Abrir os dedos movimenta os dedos para os lados, no plano horizontal. O movimento parece simples, mas muita gente acha surpreendentemente difícil de controlar.',
      ],
    },
    {
      h2: 'Como fazer o exercício de abrir os dedos?',
      paragraphs: [
        'Sente-se descalço com os pés apoiados no chão. Abra os cinco dedos o máximo que conseguir, como se estivesse tentando colocar espaço entre cada dedo. Segure na posição mais aberta e relaxe. Isso é uma repetição.',
        'Levantar os dedos não é o objetivo. Mantenha os dedos no chão e foque em abrir para os lados. Não aperte os dedos contra o chão nem dobre. Se só alguns dedos se mexem, é normal no começo. O dedão e o dedo mínimo costumam se mexer primeiro. Os três do meio muitas vezes vêm depois, quando os músculos ficam mais fortes.',
      ],
      exercises: [
        {
          name: 'Abrir os dedos',
          evidence: { level: 'early', why: 'A ressonância magnética mostra que ativa os músculos intrínsecos do pé (Gooding 2016). Não foi testado como tratamento isolado em um ensaio controlado com desfechos.' },
          dose: 'O Walkito começa com 3\u00A0séries de 10, segure 5\u00A0segundos, os dois pés',
          how: 'Sente-se com os pés apoiados no chão. Abra os cinco dedos o máximo que der. Segure cinco segundos e relaxe. Os dedos ficam no chão.',
          often: 'Dias de força, revezando com outros exercícios para o pé',
          feel: 'Esforço nos músculos pequenos das bordas de dentro e de fora do pé',
          stop: 'A dor chegar a 6/10',
          media: 'toe_spread',
          caption: 'Abrir os dedos: abra os dedos o máximo que der, e segure',
          alt: 'Uma figura sentada abrindo os cinco dedos com o pé apoiado no chão',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Quais músculos o exercício de abrir os dedos trabalha?',
      keyFact: 'Um estudo de ressonância magnética de 2016 mostrou que abrir os dedos ativou o abdutor do hálux em só 18,9\u00A0por cento, contra 29,7\u00A0por cento no exercício do pé curto, no mesmo pequeno grupo de atletas (Gooding e colegas, 2016).',
      paragraphs: [
        'Abrir os dedos trabalha dois músculos em especial. O abdutor do hálux passa ao longo da borda de dentro do pé e puxa o dedão para dentro (em direção ao meio do corpo). Ele também é um dos principais músculos que sustentam o arco longitudinal medial. O abdutor do dedo mínimo passa ao longo da borda de fora e puxa o dedo mínimo para fora.',
        'Um estudo de ressonância magnética de 2016 de Gooding e colegas testou quatro exercícios para os músculos intrínsecos do pé e mediu a ativação de cada músculo. Abrir os dedos produziu a maior ativação no abdutor do dedo mínimo (35,2%), seguido do adutor do hálux oblíquo (31,5%) e do flexor do dedo mínimo (30,2%). A ativação do abdutor do hálux ao abrir os dedos (18,9%) foi menor que no exercício do pé curto (29,7%).',
        'Isso quer dizer que abrir os dedos e o [exercício do pé curto](/pt/exercicios/pe-curto/) se complementam. O pé curto trabalha os músculos que ficam ao longo do arco. Abrir os dedos trabalha os músculos das bordas. Juntos, eles cobrem uma parte maior do grupo de músculos intrínsecos do pé.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Quem se beneficia do exercício de abrir os dedos?',
      paragraphs: [
        'Quem tem pé chato se beneficia porque abrir os dedos ativa vários dos músculos pequenos que dividem com o abdutor do hálux o trabalho de sustentar o arco. Quem tem joanete (hálux valgo) pode se beneficiar porque o exercício treina músculos que afastam o dedão dos outros dedos, o contrário do desvio para dentro do joanete. Um outro estudo de eletromiografia em pessoas com joanete leve encontrou mais atividade do abdutor do hálux ao abrir os dedos do que no pé curto, embora esse estudo ainda não faça parte da lista de referências deste site.',
        'Corredores e pessoas que passam muitas horas em pé podem usar o exercício de abrir os dedos como parte de uma rotina de fortalecimento do pé. Dedos que conseguem se abrir dividem a carga de forma mais igual pela parte da frente do pé no impulso. Se os seus dedos estão apertados por sapatos estreitos, o exercício ajuda a recuperar a amplitude de movimento.',
        'Para um programa mais amplo, veja [exercícios para pé chato](/pt/exercicios-pe-chato/) ou [dor na planta do pé](/pt/metatarsalgia-dor-na-planta-do-pe/).',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Quais são os erros comuns ao abrir os dedos?',
      paragraphs: [
        'Levantar os dedos do chão em vez de abri-los para os lados é o erro mais comum. O objetivo é abrir na horizontal, não levantar na vertical. Mantenha os dedos encostando de leve no chão.',
        'Outro erro é dobrar os dedos enquanto tenta abri-los. Isso acontece quando o cérebro ainda não consegue separar o movimento de abrir do movimento de dobrar. Melhora com a prática. Tente abrir os dedos olhando para eles, para ver o que realmente está acontecendo.',
        'Algumas pessoas percebem que no começo só o dedão e o dedo mínimo se mexem, enquanto os três do meio ficam grudados. É normal. Os dedos do meio têm menos controle muscular independente. Ao longo de algumas semanas de prática, a abertura fica maior.',
        'Não force a abertura até dar cãibra. Se o pé tiver cãibra, pare, massageie a região um pouco e tente de novo com menos repetições.',
      ],
    },
    {
      h2: 'O que a pesquisa diz sobre abrir os dedos?',
      paragraphs: [
        'O exercício de abrir os dedos foi estudado principalmente com ressonância magnética e eletromiografia, que medem a ativação muscular durante o exercício. Um estudo de ressonância magnética de 2016 de Gooding e colegas confirmou que ele ativa os quatro músculos intrínsecos plantares testados. O nível de ativação foi comparável ao do pé curto na maioria dos músculos e maior no abdutor do dedo mínimo.',
        'O que a pesquisa ainda não fez foi testar abrir os dedos como tratamento isolado em um ensaio randomizado que medisse desfechos do paciente, como dor ou altura do arco, ao longo de semanas ou meses. O exercício aparece como parte de programas combinados em ensaios de pé chato, mas a contribuição de abrir os dedos não pode ser separada dos outros exercícios nesses estudos.',
        'A evidência apoia o exercício como útil para ativar os músculos intrínsecos do pé. Se ele muda a estrutura do pé sozinho ainda não se sabe. Páginas de exercícios relacionados: [exercício do pé curto](/pt/exercicios/pe-curto/), [elevação do dedão](/pt/exercicios/elevacao-do-dedao/), [puxar a toalha com os dedos](/pt/exercicios/puxar-toalha-dedos/).',
      ],
      cites: [CITE.gooding, CITE.brijwasi],
    },
  ],
  faq: [
    {
      q: 'Quantas repetições de abrir os dedos devo fazer?',
      a: 'O Walkito começa com 3\u00A0séries de 10\u00A0repetições, segurando 5\u00A0segundos. Isso basta para cansar os músculos sem dar cãibra. Se o pé tiver cãibra antes de terminar uma série, diminua o tempo segurando ou o número de repetições e vá aumentando ao longo de algumas sessões.',
    },
    {
      q: 'Abrir os dedos do pé ajuda no joanete?',
      a: 'Abrir os dedos treina músculos que afastam o dedão dos outros dedos, a direção oposta ao desvio do joanete. A ressonância magnética confirma que o exercício ativa esses músculos (Gooding e colegas, 2016). Nenhum ensaio testou se abrir os dedos impede o joanete de avançar, mas fortalecer os músculos é uma parte razoável de uma abordagem mais ampla.',
    },
    {
      q: 'Por que não consigo abrir os dedos do pé?',
      a: 'Anos usando sapatos estreitos e sem usar os músculos que abrem os dedos levam a um controle nervoso fraco. Os músculos continuam lá, mas o cérebro perdeu o hábito de ativá-los de forma independente. A prática regular, mesmo alguns minutos por dia, costuma devolver alguma abertura em poucas semanas.',
    },
    {
      q: 'Separador de dedos é a mesma coisa que o exercício de abrir os dedos?',
      a: 'Não. O separador de dedos mantém os dedos afastados de forma passiva. O exercício de abrir os dedos faz você contrair ativamente os músculos que afastam os dedos. É a contração muscular ativa que desenvolve força. Separadores podem ajudar no conforto e no alinhamento, mas não fortalecem os músculos sozinhos.',
    },
    {
      q: 'Devo fazer abrir os dedos ou o exercício do pé curto?',
      cites: [CITE.gooding],
      a: 'Os dois, de preferência. A ressonância magnética mostra que eles ativam os músculos pequenos do pé de formas um pouco diferentes: abrir os dedos trabalha mais o abdutor do dedo mínimo, na borda de fora, enquanto o pé curto trabalha mais o abdutor do hálux, ao longo do arco por dentro (Gooding 2016). Juntos, cobrem uma parte maior dos músculos intrínsecos do pé.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'uma articulação de um dedo está vermelha, inchada ou quente',
      'você tem dormência ou formigamento nos dedos',
      'o dedão se desviou bastante em direção ao segundo dedo e dói ao andar',
      'a dor no pé está piorando apesar de exercícios regulares por várias semanas',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito coloca o exercício de abrir os dedos nos dias de força, junto com outros exercícios para os músculos intrínsecos do pé. O plano reveza com o pé curto e a inversão com faixa, para os músculos do pé terem um trabalho variado sem sobrecarregar um movimento só. Você escolhe sessões de 3, 5 ou 10\u00A0minutos.',
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Abrir os dedos do pé',
  campaign: 'ex-toe-spread-pt',
};
