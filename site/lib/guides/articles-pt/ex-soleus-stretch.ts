import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-soleus-stretch.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Figures, doses and citations are identical to
 * the English page. Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius, CITE.rathleff
 */

export const EX_SOLEUS_STRETCH_PT: Guide = {
  lang: 'pt',
  page: 'exSoleusStretch',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Alongamento do sóleo (joelho dobrado): como fazer certo',
  description:
    'Como fazer o alongamento do sóleo (joelho dobrado) para fascite plantar e panturrilha tensa: técnica, por que é um alongamento à parte, séries e tempo.',
  h1: 'Alongamento do sóleo (joelho dobrado): técnica, séries e por que importa',
  lede:
    'O sóleo é o músculo mais profundo da panturrilha, que fica embaixo do gastrocnêmio. Ele só alonga com o joelho dobrado, porque dobrar o joelho tira o gastrocnêmio da jogada. Em uma série de 254\u00A0pessoas com fascite plantar, 23 a 30\u00A0por cento tinham uma contratura combinada de gastrocnêmio e sóleo. Se você só faz o alongamento com o joelho esticado, está deixando esse músculo totalmente de fora.',
  takeaways: [
    'O sóleo cruza só o tornozelo. O gastrocnêmio cruza o joelho e o tornozelo. Dobrar o joelho deixa o gastrocnêmio frouxo, e o sóleo recebe o alongamento.',
    'Em 254\u00A0pessoas com fascite plantar, 23 a 30\u00A0por cento tinham uma contratura no gastrocnêmio e no sóleo ao mesmo tempo (Patel e DiGiovanni, 2011).',
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento de panturrilha o grau A, o mais alto, sem separar os dois músculos da panturrilha (Koc e colegas, 2023).',
    'O Walkito começa com 3\u00A0vezes de 30\u00A0segundos, cada perna, com o joelho de trás dobrado.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Como fazer o alongamento do sóleo?',
      paragraphs: [
        'Comece na mesma posição na parede do [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/): mãos na parede, um pé para trás, calcanhar no chão. Depois dobre o joelho de trás. Continue dobrando até sentir o alongamento descer na panturrilha, lá embaixo perto do tendão de Aquiles e do calcanhar. Esse puxão mais embaixo é o sóleo.',
        'O calcanhar fica no chão o tempo todo. Se o calcanhar levantar, o alongamento some. Você não vai sentir este tão em cima na panturrilha quanto a versão com o joelho esticado. A sensação fica mais perto do calcanhar, às vezes logo acima da parte de trás do tornozelo. Segure por 30\u00A0segundos e troque de perna.',
      ],
      exercises: [
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: {
            level: 'strong',
            why: 'A diretriz de 2023 dá ao alongamento de panturrilha o grau A. Trabalha o músculo mais profundo que o alongamento com o joelho esticado não alcança.',
          },
          dose: 'O Walkito começa com 3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede, um pé para trás, calcanhar no chão. Dobre o joelho de trás até sentir um alongamento embaixo na panturrilha, perto do calcanhar. Segure 30\u00A0segundos.',
          often: 'Quase todas as sessões, junto com o alongamento de panturrilha com o joelho esticado',
          feel: 'Um alongamento embaixo na panturrilha, perto do tendão de Aquiles',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra, apoiada na parede com o joelho de trás dobrado, com a parte baixa da panturrilha destacada',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Por que o sóleo precisa de um alongamento próprio?',
      keyFact: 'Em uma revisão de 254\u00A0pessoas com fascite plantar, cerca de um quarto tinha os dois músculos da panturrilha tensos, o gastrocnêmio e o sóleo (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'O gastrocnêmio, o músculo mais superficial da panturrilha, cruza o joelho e o tornozelo. Quando você estica o joelho e inclina para a frente, é ele que recebe o alongamento. O sóleo fica mais fundo e cruza só o tornozelo. Com o joelho esticado, o gastrocnêmio faz todo o trabalho e o sóleo quase não se mexe.',
        'Dobrar o joelho deixa o gastrocnêmio frouxo, e ele para de resistir. Agora a dorsiflexão do tornozelo puxa o sóleo. Esse é todo o sentido da versão com o joelho dobrado. Não é uma adaptação. É um exercício separado para um músculo separado.',
        'Em uma revisão de 254\u00A0pessoas com fascite plantar, cerca de um quarto tinha os dois músculos tensos. Só o alongamento com o joelho esticado não teria alcançado a parte dessa tensão que estava no sóleo.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Como saber se o alongamento está no lugar certo?',
      paragraphs: [
        'Se você sente o alongamento em cima na panturrilha, atrás do joelho, o joelho está esticado demais e o gastrocnêmio está assumindo. Dobre mais o joelho. O alongamento deve descer para o terço de baixo da panturrilha ou logo acima do calcanhar.',
        'Se você não sente nada, tente aproximar o pé de trás da parede e dobrar mais o joelho. Algumas pessoas precisam de uma passada menor para colocar carga no sóleo.',
        'Se o alongamento fica no próprio tendão de Aquiles e parece uma dor aguda em vez de um puxão, alivie. Um alongamento deve ser firme e constante, não dolorido. Dor no tendão durante o alongamento é diferente de panturrilha tensa e pode indicar [tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
      ],
    },
    {
      h2: 'Quais são os erros comuns no alongamento do sóleo?',
      paragraphs: [
        'Não dobrar o joelho o bastante. Uma dobra leve não basta para soltar o gastrocnêmio. Você precisa de uma dobra de verdade, o suficiente para ver o joelho de trás indo para a frente por cima dos dedos.',
        'Deixar o calcanhar levantar. No momento em que o calcanhar sai do chão, o alongamento some. Pressione o calcanhar para baixo e deixe o joelho ir para a frente por cima do pé.',
        'Fazer com pressa. Segurar 5\u00A0segundos é pouco para um alongamento sustentado ter efeito no comprimento do tecido. Segure por 30\u00A0segundos e tente relaxar no alongamento em vez de empurrar mais.',
        'Pular porque o alongamento com o joelho esticado pareceu suficiente. São músculos diferentes. Se os dois estão tensos, você precisa dos dois alongamentos.',
      ],
    },
    {
      h2: 'Como o alongamento do sóleo se encaixa em um programa',
      paragraphs: [
        'O Walkito junta o alongamento do sóleo com o [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) e o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) na maioria das sessões. Juntos, os três alongamentos cobrem as principais estruturas que puxam o calcanhar. A ordem não importa muito, mas fazer o alongamento da fáscia plantar primeiro, antes do primeiro passo do dia, é a instrução mais repetida.',
        'Para o lado da força da panturrilha, veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) ou a página da [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/). A diretriz de 2023 recomenda força e alongamento juntos.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Como é a sensação do alongamento do sóleo?',
      a: 'Um puxão embaixo na panturrilha, perto do tendão de Aquiles, às vezes logo acima da parte de trás do tornozelo. É diferente do alongamento de panturrilha com o joelho esticado, que fica mais em cima. Se o alongamento está lá em cima, o joelho não está dobrado o bastante e o gastrocnêmio ainda está fazendo o trabalho.',
    },
    {
      q: 'Alongamento do sóleo é o mesmo que alongar a panturrilha com o joelho dobrado?',
      a: 'Sim. «Alongamento do sóleo» e «alongamento de panturrilha com o joelho dobrado» são dois nomes para o mesmo exercício. Dobrar o joelho tira o gastrocnêmio do alongamento, e o sóleo, o músculo mais profundo da panturrilha, recebe a carga. A técnica é a mesma.',
    },
    {
      q: 'Preciso alongar os dois músculos da panturrilha na fascite plantar?',
      cites: [CITE.patelGastrocnemius, CITE.guideline],
      a: 'Em 254\u00A0pessoas com fascite plantar, um quarto tinha os dois músculos da panturrilha tensos (Patel e DiGiovanni, 2011). A diretriz dá ao alongamento de panturrilha o grau A sem separar os dois. A maioria dos programas para fascite plantar inclui as versões com o joelho esticado e dobrado, porque pular uma deixa metade da panturrilha de fora.',
    },
    {
      q: 'Com que frequência fazer o alongamento do sóleo?',
      cites: [CITE.guideline],
      a: 'O Walkito coloca o alongamento na maioria das sessões, junto com o alongamento de panturrilha. A diretriz de 2023 recomenda alongar a panturrilha como parte do autocuidado diário na fascite plantar. Três vezes de 30\u00A0segundos por perna levam cerca de três minutos. Tem pouca carga e é seguro repetir todo dia.',
    },
  ],
  redFlags: {
    h2: 'Pare e procure um profissional de saúde se',
    bullets: [
      'a dor é aguda e localizada no tendão de Aquiles, não um puxão no músculo',
      'você sente um estalo repentino ou a sensação de algo rasgando durante o alongamento',
      'a panturrilha ou o tornozelo está inchado, vermelho ou quente de um lado só',
      'a dor começou depois de uma lesão ou de um aumento repentino de atividade',
      'dormência ou formigamento descem pela parte de trás da perna',
      'não melhorou depois de várias semanas de alongamento diário',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito coloca o alongamento do sóleo junto com o alongamento de panturrilha e o alongamento da fáscia plantar na maioria das sessões. Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. O app passa do alongamento para o trabalho de força no seu ritmo, não em um calendário fixo.',
    more: [
      'A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. Uma amplitude do tornozelo que melhora ao longo das semanas mostra que o alongamento está fazendo efeito. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Alongamento do sóleo (joelho dobrado)',
  campaign: 'ex-soleus-stretch-pt',
};
