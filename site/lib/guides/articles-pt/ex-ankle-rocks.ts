import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-ankle-rocks.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the name already used on the
 * site, «balanço do tornozelo». Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius
 */

export const EX_ANKLE_ROCKS_PT: Guide = {
  lang: 'pt',
  page: 'exAnkleRocks',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Balanço do tornozelo: exercício de mobilidade',
  description:
    'Como fazer o balanço do tornozelo (joelho por cima dos dedos) para mobilidade: técnica, séries, por que a dobra do tornozelo importa e como testar.',
  h1: 'Balanço do tornozelo: como fazer e por que a mobilidade do tornozelo importa',
  lede:
    'O balanço do tornozelo é um exercício em pé em que o joelho vai para a frente por cima dos dedos enquanto o calcanhar fica apoiado no chão. Ele trabalha a dorsiflexão do tornozelo, o quanto o tornozelo dobra com o pé no chão. Em um estudo caso-controle com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a dorsiflexão reduzida foi o fator de risco mais forte de todos, com razão de chances de 23,3.',
  takeaways: [
    'A dorsiflexão reduzida do tornozelo foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle pareado, com razão de chances de 23,3 (Riddle e colegas, 2003).',
    'O balanço do tornozelo trabalha a dorsiflexão colocando carga no fim da amplitude com o peso do corpo, diferente de um alongamento parado na parede.',
    'O teste do joelho na parede mede o quanto o joelho passa dos dedos com o calcanhar no chão. O Walkito inclui um exercício de joelho na parede (2\u00A0vezes de 30\u00A0segundos, cada perna).',
    'O Walkito começa o balanço do tornozelo com 2\u00A0séries de 15, cada perna.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Como fazer o balanço do tornozelo?',
      paragraphs: [
        'Fique com uma perna à frente e a outra atrás, com as mãos em uma parede ou no batente da porta para se equilibrar. Com o calcanhar da frente apoiado no chão, leve devagar o joelho da frente para a frente, por cima dos dedos. Deixe o joelho ir o mais longe que conseguir enquanto o calcanhar fica no chão. Depois volte para o início. Isso é uma repetição.',
        'O movimento é lento e controlado. Você não está quicando. Cada balanço leva uns dois segundos para a frente e dois segundos para trás. A perna de trás serve só para o equilíbrio. Todo o trabalho do tornozelo acontece na perna da frente.',
        '**Mantenha o pé da frente apontando reto para a frente.** Se o pé gira para fora, o tornozelo acha um atalho e você perde a amplitude que está tentando ganhar.',
      ],
      exercises: [
        {
          name: 'Balanço do tornozelo',
          evidence: {
            level: 'moderate',
            why: 'Trabalha a dorsiflexão do tornozelo, o fator de risco independente mais forte para fascite plantar em um estudo caso-controle de 2003. Não foi testado como exercício isolado em um ensaio de fascite plantar.',
          },
          dose: 'O Walkito começa com 2\u00A0séries de 15, cada perna',
          how: 'Uma perna à frente da outra, mãos na parede. Leve o joelho da frente para a frente por cima dos dedos, com o calcanhar apoiado. Devagar, uns dois segundos para cada lado. Troque de perna depois de cada série.',
          often: 'Sessões de mobilidade',
          feel: 'Um alongamento na frente do tornozelo e um puxão na parte baixa da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: joelho por cima dos dedos, calcanhar no chão',
          alt: 'Uma figura com uma perna à frente da outra levando o joelho da frente por cima dos dedos, com o tornozelo destacado',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Por que a mobilidade do tornozelo importa para a dor no calcanhar?',
      keyFact: 'Em um estudo caso-controle com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a dorsiflexão limitada do tornozelo foi um fator de risco mais forte que o IMC ou o tempo em pé, com razão de chances de 23,3 (Riddle e colegas, 2003).',
      paragraphs: [
        'A dorsiflexão do tornozelo é o quanto o pé consegue dobrar para cima, em direção à canela, enquanto o calcanhar fica no chão. Todo passo que você dá precisa de um pouco de dorsiflexão. Quando o tornozelo não dobra o bastante, o corpo compensa:',
        {
          list: [
            'O pé pode girar para dentro.',
            'A panturrilha leva mais esforço.',
            'A fáscia plantar absorve forças para as quais não foi feita.',
          ],
        },
        'No estudo caso-controle de Riddle de 2003, **a dorsiflexão reduzida do tornozelo foi a variável com o maior efeito independente**, com razão de chances de 23,3 para fascite plantar. Foi mais forte que o IMC, o tempo em pé ou a distância corrida. Uma panturrilha tensa, especificamente o gastrocnêmio, estava presente em 52 a 60\u00A0por cento de 254\u00A0pessoas com fascite plantar em outra revisão.',
        'Alongar a panturrilha de forma passiva (como no [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) e no [alongamento do sóleo](/pt/exercicios/alongamento-soleo/)) atua sobre um lado do problema: o comprimento do músculo. O balanço do tornozelo atua sobre o outro lado: o controle ativo no fim da amplitude. Levar o joelho por cima dos dedos com o peso do corpo ensina o tornozelo a usar a amplitude que tem, e não só alcançá-la de forma passiva.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Balanço do tornozelo ou alongamento de panturrilha: qual é a diferença?',
      paragraphs: [
        'O [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) é uma posição parada. Você inclina para a parede e espera o músculo alongar. A perna de trás fica esticada, o que trabalha o gastrocnêmio. O [alongamento do sóleo](/pt/exercicios/alongamento-soleo/) faz o mesmo com o joelho dobrado.',
        'O balanço do tornozelo é um movimento ativo e repetido. Você leva o joelho para a frente, volta, leva de novo. Você coloca carga no tornozelo ao longo da amplitude em vez de ficar parado no fim dela. O balanço do tornozelo desenvolve a capacidade de usar a dorsiflexão com carga, que é o que andar e correr realmente exigem.',
        'Os dois são úteis. **O alongamento abre a amplitude. O balanço do tornozelo ensina você a usá-la.** A diretriz dá ao alongamento de panturrilha o grau A. O balanço do tornozelo faz parte do trabalho de mobilidade que o Walkito coloca junto com esses alongamentos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O teste do joelho na parede e como ele se conecta',
      paragraphs: [
        'O teste do joelho na parede, também chamado de teste de avanço com carga, é um jeito simples de medir a dorsiflexão do tornozelo.',
        'Você fica de frente para uma parede, com um pé alguns centímetros para trás, e leva o joelho para a frente até encostar na parede. Se o calcanhar levantar antes de o joelho chegar na parede, aproxime o pé. A distância do dedão até a parede no ponto em que o joelho mal encosta, com o calcanhar ainda apoiado, é o seu resultado.',
        'O Walkito inclui um exercício de joelho na parede no app (2\u00A0vezes de 30\u00A0segundos, cada perna). Acompanhar essa distância ao longo das semanas mostra se a amplitude do seu tornozelo está melhorando de verdade. Um aumento de um ou dois centímetros em algumas semanas é significativo.',
        'O balanço do tornozelo e o exercício de joelho na parede trabalham a mesma amplitude de ângulos diferentes. O balanço é repetição ao longo da amplitude. O joelho na parede é uma carga sustentada no fim da amplitude. Os dois ajudam. O Walkito coloca os dois nos dias de mobilidade.',
      ],
    },
    {
      h2: 'Quais são os erros comuns no balanço do tornozelo?',
      paragraphs: [
        {
          list: [
            '**Deixar o calcanhar levantar.** O calcanhar precisa ficar apoiado em todas as repetições. Se ele levanta, você passou do fim da sua amplitude e o exercício perde o sentido. Vá só até onde o calcanhar deixa.',
            '**Virar o pé para fora.** O pé deve apontar reto para a frente. Girar para fora deixa o tornozelo desviar do ponto tenso. Mantenha o segundo dedo apontado para a parede.',
            '**Ir rápido demais.** Quicar ou correr com as repetições não desenvolve uma amplitude controlada. Dois segundos para a frente, dois para trás. Deixe o tornozelo sentir o fim da amplitude em cada repetição.',
            '**Esquecer a perna de trás.** Algumas pessoas tentam fazer o balanço do tornozelo com as duas pernas ao mesmo tempo, só agachando. Isso divide a carga e diminui a amplitude que o tornozelo da frente precisa percorrer. Use uma perna à frente da outra para um tornozelo fazer o trabalho.',
          ],
        },
      ],
    },
    {
      h2: 'Versões mais fáceis e mais difíceis',
      paragraphs: [
        'Se o balanço do tornozelo em pé for pesado demais, tente sentado. Sente-se com o pé apoiado no chão e deslize o joelho para a frente por cima dos dedos. É o mesmo movimento com menos carga. Funciona bem depois de uma crise, quando os exercícios em pé são demais.',
        'Uma versão mais difícil é o balanço do tornozelo com peso. Segure um kettlebell ou um livro pesado junto ao peito enquanto vai para a frente. O peso extra empurra o joelho mais fundo na dorsiflexão. Só acrescente peso quando o balanço com o peso do corpo parecer fácil por duas sessões seguidas.',
        'Para outros exercícios de tornozelo e perna, veja a [elevação dos dedos](/pt/exercicios/elevacao-dos-dedos-parede/) (força da canela) e o [equilíbrio em uma perna](/pt/exercicios/equilibrio-uma-perna/) (estabilidade do tornozelo). O programa completo está em [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quantas repetições de balanço do tornozelo fazer?',
      a: 'O Walkito começa com 2\u00A0séries de 15 por perna. São 30\u00A0repetições por perna por sessão. Não existe um protocolo publicado de balanço do tornozelo especificamente para fascite plantar, então essa dose vem do app. Aumente as séries ou acrescente peso quando a dose atual parecer fácil por duas sessões.',
    },
    {
      q: 'Balanço do tornozelo ajuda na fascite plantar?',
      cites: [CITE.riddle],
      a: 'O balanço do tornozelo trabalha a dorsiflexão do tornozelo, que foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle (razão de chances de 23,3). Nenhum ensaio testou o balanço do tornozelo como exercício isolado para fascite plantar, mas melhorar a amplitude que ele trabalha mexe no maior fator de risco biomecânico que a pesquisa identificou.',
    },
    {
      q: 'O que é o teste do joelho na parede?',
      a: 'Uma medida simples da dorsiflexão do tornozelo. Fique de frente para uma parede e leve o joelho para a frente até encostar, com o calcanhar apoiado. A distância do dedão até a parede é o seu resultado. O Walkito inclui o teste como exercício (2\u00A0vezes de 30\u00A0segundos por perna) para desenvolver o controle no fim da amplitude.',
    },
    {
      q: 'Balanço do tornozelo é o mesmo que levar o joelho por cima dos dedos?',
      a: 'Sim. “Balanço do tornozelo”, “joelho por cima dos dedos” e “balanço de dorsiflexão” são nomes para o mesmo movimento. O joelho vai para a frente por cima dos dedos enquanto o calcanhar fica apoiado. O exercício desenvolve a amplitude do tornozelo de que você precisa para andar, agachar e correr.',
    },
    {
      q: 'O joelho pode passar da ponta do pé?',
      a: 'Sim. Esse é o objetivo do exercício. A ideia de que o joelho nunca deve passar dos dedos é um mito que não vale para a marcha normal nem para o trabalho de mobilidade do tornozelo. Todo passo que você dá leva o joelho além dos dedos. O balanço do tornozelo treina essa amplitude com controle. Mantenha o calcanhar apoiado e pare onde a amplitude termina naturalmente.',
    },
  ],
  redFlags: {
    h2: 'Pare e procure um profissional de saúde se',
    bullets: [
      'você sente uma pinçada aguda na frente do tornozelo que não passa entre as repetições',
      'o tornozelo trava ou engancha durante o movimento',
      'aparece inchaço na frente ou nas laterais do tornozelo depois do exercício',
      'a dor sobe pela canela ou desce para o pé',
      'o tornozelo falseou ou se machucou há pouco tempo',
      'não melhorou depois de várias semanas de trabalho de mobilidade constante',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito coloca o balanço do tornozelo nos dias de mobilidade, junto com os alongamentos de panturrilha e do sóleo. Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos.',
    more: [
      'Um centímetro de melhora no teste do joelho na parede em algumas semanas é significativo. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Balanço do tornozelo',
  campaign: 'ex-ankle-rocks-pt',
};
