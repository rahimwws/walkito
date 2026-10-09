import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-towel-scrunch.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the site name «puxar a
 * toalha com os dedos» (`lib/guides/pt.ts`). Uses existing keys, including
 * CITE.lynn, CITE.jung and CITE.mcKeon.
 */

export const EX_TOWEL_SCRUNCH_PT: Guide = {
  lang: 'pt',
  page: 'exTowelScrunch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Puxar a toalha com os dedos: exercício para os pés',
  description:
    'Como fazer o exercício de puxar a toalha com os dedos para fortalecer os pés: técnica, séries, o que trabalha, erros e a comparação com o pé curto.',
  h1: 'Puxar a toalha com os dedos: como fazer para fortalecer o pé',
  lede:
    'Puxar a toalha com os dedos é um exercício em que você traz uma toalha para perto usando só os dedos do pé. Ele trabalha os músculos pequenos embaixo do arco e os flexores dos dedos. É um dos exercícios de fortalecimento do pé mais antigos e simples da reabilitação, e aparece em programas para pé chato, fascite plantar e dor na planta do pé.',
  takeaways: [
    'Puxar a toalha ativa os músculos intrínsecos do pé, mas estudos de eletromiografia (EMG) mostram que o exercício também recruta os flexores longos dos dedos (músculos extrínsecos) mais do que o exercício do pé curto (Jung e colegas, 2011).',
    'Em um ensaio randomizado de 2012 com adultos saudáveis, o grupo que puxou a toalha por quatro semanas melhorou menos o equilíbrio que um grupo de pé curto, embora os dois tenham melhorado em relação ao início (Lynn e colegas, 2012).',
    'Um estudo de 2020 com 41\u00A0pessoas (56\u00A0pés) com metatarsalgia primária encontrou que, depois de um programa de oito semanas de exercícios para os dedos com toalha e bolinhas de gude, houve menos dor e mais força de preensão dos dedos. O estudo não teve grupo controle, então a melhora não pode ser atribuída só aos exercícios (Amaha e colegas, 2020).',
    'Puxar a toalha é mais fácil de aprender que o pé curto, porque a toalha dá aos dedos um alvo claro para agarrar.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é o exercício de puxar a toalha com os dedos?',
      paragraphs: [
        'Puxar a toalha com os dedos, também chamado de enrolar a toalha, é um exercício sentado em que você coloca uma toalha esticada no chão embaixo do pé e usa os dedos para agarrá-la e trazê-la para perto. O calcanhar fica no chão. O movimento trabalha os músculos flexores dos dedos e os músculos intrínsecos embaixo do arco.',
        'Ele é usado na fisioterapia há décadas e aparece em programas para [pé chato](/pt/exercicios-pe-chato/), [fascite plantar](/pt/exercicios-fascite-plantar/) e [dor na planta do pé](/pt/metatarsalgia-dor-na-planta-do-pe/). Como o movimento é simples e só precisa de uma toalha, muitas vezes é o primeiro exercício de fortalecimento do pé que as pessoas experimentam.',
      ],
    },
    {
      h2: 'Como fazer o exercício de puxar a toalha?',
      paragraphs: [
        'Sente-se em uma cadeira com os pés apoiados no chão, descalço. Estenda uma toalha de mão no chão embaixo de um pé. Mantenha o calcanhar firme no chão. Use os dedos para agarrar a toalha e puxá-la para perto, juntando-a embaixo do arco. Depois abra os dedos para soltar e repita.',
        'Cada puxada é uma repetição. Puxe de forma constante, não com um tranco rápido. O calcanhar não levanta. Se a toalha escorregar demais, tente uma toalha um pouco mais pesada ou coloque um peso pequeno na ponta mais distante.',
      ],
      exercises: [
        {
          name: 'Puxar a toalha com os dedos',
          evidence: { level: 'early', why: 'Fez parte de um estudo antes e depois, com um grupo só, na metatarsalgia (Amaha 2020) e de programas para pé chato, mas não foi isolado em um ensaio controlado.' },
          dose: 'O Walkito começa com 3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          how: 'Sente-se com uma toalha esticada no chão embaixo do pé. Puxe a toalha com os dedos. Mantenha o calcanhar no chão. Segure cinco segundos, solte e repita.',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'Os músculos pequenos embaixo do arco trabalhando',
          stop: 'A dor chegar a 6/10',
          media: 'towel_scrunch',
          caption: 'Puxar a toalha: puxe a toalha com os dedos, o calcanhar fica no chão',
          alt: 'Uma figura sentada puxando uma toalha em direção ao calcanhar com os dedos, com os músculos do arco destacados',
        },
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'Quais músculos o exercício de puxar a toalha trabalha?',
      paragraphs: [
        'Puxar a toalha trabalha os músculos flexores dos dedos: o flexor curto dos dedos (dentro do pé), o flexor curto do hálux (o flexor curto do dedão) e o quadrado plantar. Esses são músculos intrínsecos. Mas o exercício também recruta os flexores extrínsecos dos dedos: o flexor longo dos dedos e o flexor longo do hálux, que vão da canela, passam pelo tornozelo e chegam aos dedos.',
        'Um estudo de EMG de Jung e colegas (2011) comparou a atividade muscular ao puxar a toalha e no exercício do pé curto. Eles encontraram que o abdutor do hálux, o músculo que mais sustenta o arco, ficou mais de quatro vezes mais ativo no pé curto do que ao puxar a toalha. Puxar a toalha gerou mais atividade nos flexores extrínsecos dos dedos.',
        'Isso quer dizer que puxar a toalha é um bom exercício para a força de preensão dos dedos, mas é menos específico para os músculos intrínsecos do arco que o [exercício do pé curto](/pt/exercicios/pe-curto/).',
      ],
      cites: [CITE.jung],
    },
    {
      h2: 'Puxar a toalha ou pé curto: qual é melhor?',
      paragraphs: [
        'Cada exercício tem um ponto forte diferente. Puxar a toalha é mais fácil de aprender, porque a toalha dá aos dedos um alvo claro. Muita gente tem dificuldade para sentir a contração do pé curto no começo. Puxar a toalha desenvolve a força de preensão dos dedos, que importa para o equilíbrio e para o impulso ao andar.',
        'O exercício do pé curto é melhor para isolar os músculos intrínsecos do arco. Uma revisão de 2015 de McKeon e colegas observou que o abdutor do hálux foi ativado mais de quatro vezes mais no pé curto do que ao puxar a toalha, e recomendou o pé curto como o principal exercício de treino dos músculos intrínsecos do pé.',
        'Na prática, programas que usam os dois aproveitam o melhor de cada um. O Walkito usa puxar a toalha como um exercício inicial, que apresenta a ideia de trabalhar os músculos do pé. O [exercício do pé curto](/pt/exercicios/pe-curto/) vem depois e acrescenta um treino mais específico do arco. Um não substitui o outro.',
      ],
      cites: [CITE.mcKeon, CITE.jung],
    },
    {
      h2: 'Quem mais se beneficia de puxar a toalha com os dedos?',
      keyFact: 'Em um estudo de 2020 com 41\u00A0pessoas (56\u00A0pés) com metatarsalgia, um programa de oito semanas de exercícios para os dedos com toalha e bolinhas de gude foi seguido de menos dor e melhor preensão dos dedos, sem grupo controle (Amaha e colegas, 2020).',
      paragraphs: [
        'Puxar a toalha serve para quem está começando com exercícios para os pés e quer um ponto de partida simples. Também serve para quem tem pouca força de preensão nos dedos, porque o exercício treina diretamente a capacidade de dobrar os dedos com carga.',
        'Um estudo de 2020 de Amaha e colegas acompanhou 41\u00A0pessoas (56\u00A0pés) com metatarsalgia primária, dor embaixo da parte da frente do pé, durante um programa de oito semanas de exercícios para os dedos que incluía puxar a toalha e pegar bolinhas de gude. A força de preensão dos dedos e a dor melhoraram do início ao fim do programa. Não houve grupo controle, então parte dessa mudança pode refletir o tempo ou a atenção recebida, e não os exercícios em si. A força de preensão dos dedos também pode importar para idosos com risco de queda, já que os dedos ajudam no equilíbrio em pé e ao andar.',
        'Se o seu objetivo principal é levantar um arco caído, o [exercício do pé curto](/pt/exercicios/pe-curto/) e o [programa de exercícios para pé chato](/pt/exercicios-pe-chato/) são mais direcionados. Se o seu objetivo principal é a preensão dos dedos e a ativação geral dos músculos do pé, puxar a toalha é uma boa escolha.',
      ],
      cites: [CITE.amaha],
    },
    {
      h2: 'Quais são os erros comuns ao puxar a toalha com os dedos?',
      paragraphs: [
        'O erro mais comum é tirar o calcanhar do chão. Quando o calcanhar levanta, a panturrilha assume e os músculos do pé trabalham menos. Pressione o calcanhar no chão durante cada repetição.',
        'Outro erro é puxar rápido demais. Um puxão rápido na toalha usa o embalo em vez da contração muscular. Puxe devagar e segure a toalha juntada pelos cinco segundos inteiros antes de soltar.',
        'Algumas pessoas agarram só com o dedão e esquecem os dedos menores. Tente usar os cinco dedos juntos. Se os dedos menores não colaborarem no começo, é normal. A coordenação melhora com a prática.',
        'Por fim, não deixe o pé deslizar de lado sobre a toalha. A puxada deve ser reta para trás, dos dedos em direção ao calcanhar. Se a toalha for para um lado, reposicione e foque em usar os dedos por igual.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quantas repetições de puxar a toalha com os dedos devo fazer?',
      a: 'O Walkito começa com 3\u00A0séries de 8\u00A0repetições por pé, segurando cada puxada por 5\u00A0segundos. Isso basta para cansar os músculos pequenos do pé sem sobrecarregá-los. Para aumentar a dificuldade, coloque um peso pequeno na ponta mais distante da toalha em vez de fazer mais repetições.',
    },
    {
      q: 'Puxar a toalha com os dedos ajuda na fascite plantar?',
      cites: [CITE.guideline],
      a: 'Puxar a toalha não faz parte da diretriz principal para fascite plantar, que foca em alongamentos de panturrilha e elevação de calcanhar com carga. O exercício pode ajudar a desenvolver a força geral dos músculos do pé como parte de um programa mais amplo. Veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) para os exercícios apoiados pela diretriz.',
    },
    {
      q: 'Puxar a toalha com os dedos é bom para pé chato?',
      cites: [CITE.brijwasi],
      a: 'Puxar a toalha aparece em programas de exercícios para pé chato junto com o pé curto, o fortalecimento do quadril e o alongamento. Um ensaio de 2023 com 52\u00A0pessoas encontrou que um programa combinado melhorou as medidas do arco em seis semanas (Brijwasi 2023). Puxar a toalha sozinho não foi testado para pé chato em um ensaio controlado.',
    },
    {
      q: 'Posso usar uma meia em vez de uma toalha?',
      a: 'Uma meia fina funciona, mas uma toalha de mão dá mais resistência e uma superfície melhor para agarrar. A toalha deve ficar esticada e ser comprida o bastante para você puxar várias repetições antes de acabar o tecido. Um pano de prato ou uma toalha de rosto é o ideal.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'a dor no dedo ou no pé começou depois de uma lesão ou de um estalo repentino',
      'você tem dormência, formigamento ou queimação nos dedos ou na planta do pé',
      'uma articulação de um dedo está vermelha, inchada ou quente, o que pode indicar gota ou infecção',
      'os dedos travam dobrados e não esticam',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito usa puxar a toalha com os dedos como um exercício inicial de fortalecimento do pé. Quando ele parece fácil por duas sessões seguidas, o plano passa você para o exercício do pé curto e a progressão dele, de sentado para em pé. Você escolhe sessões de 3, 5 ou 10\u00A0minutos, e um teste a cada 14\u00A0dias acompanha o tempo de sustentação do arco e a resistência da panturrilha.',
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Puxar a toalha com os dedos',
  campaign: 'ex-towel-scrunch-pt',
};
