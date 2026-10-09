import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-foot-roll.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Uses existing key: CITE.guideline
 *
 * Note: no RCT has tested foot rolling (ball or frozen bottle) as an isolated
 * intervention for plantar fasciitis. Evidence level is 'early'. The page says
 * this honestly.
 */

export const EX_FOOT_ROLL_PT: Guide = {
  lang: 'pt',
  page: 'exFootRoll',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Bolinha no pé para fascite plantar: como fazer',
  description:
    'Como rolar o pé na bolinha ou na garrafa congelada para fascite plantar: técnica, quanto tempo rolar, e o que isso faz e o que não faz.',
  h1: 'Rolar o pé na bolinha para fascite plantar: bolinha, garrafa e técnica',
  lede:
    'Rolar a sola do pé sobre uma bolinha ou uma garrafa é um dos cuidados caseiros mais comuns para fascite plantar. É gostoso, e profissionais de saúde recomendam como forma de acalmar o tecido entre as sessões. Mas nenhum ensaio randomizado testou o rolamento sozinho na fascite plantar. Esta página explica o que rolar o pé faz, o que não faz, e onde a garrafa congelada entra, com honestidade.',
  takeaways: [
    'Nenhum ensaio randomizado testou rolar o pé como intervenção isolada para fascite plantar. É muito recomendado como medida de conforto e recuperação, não como intervenção principal.',
    'A diretriz de 2023 para dor no calcanhar recomenda alongamento (grau A) e treino de força (grau B) como os pilares de exercício. Rolar o pé não recebe um grau próprio.',
    'Uma garrafa de água congelada acrescenta frio ao rolamento. O frio pode reduzir o desconforto depois de uma crise, mas nenhum ensaio mostra que ele acelera a recuperação da fascite plantar além do que o rolamento sozinho faz.',
    'O Walkito usa o rolamento do pé como exercício de recuperação no fim da sessão, por 2\u00A0minutos.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Como rolar o pé na bolinha?',
      paragraphs: [
        'Sente-se em uma cadeira com um pé sobre uma bolinha. Bolinha de tênis, bola de lacrosse ou bolinha de massagem, todas servem. Coloque a bolinha embaixo do arco e role devagar da parte da frente do pé até o calcanhar e de volta.',
        'Use pressão firme, não leve. A bolinha deve afundar no tecido o bastante para você sentir uma pressão profunda e constante.',
        'Role por cerca de 2\u00A0minutos em cada pé. Mantenha a pressão constante e evite pontos que doem de forma aguda. Se um ponto faz você fazer careta, alivie ou passe direto por ele. O objetivo é uma massagem firme, não dor.',
      ],
      exercises: [
        {
          name: 'Rolar o pé na bolinha',
          evidence: {
            level: 'early',
            why: 'Muito recomendado, mas não foi testado como intervenção isolada em um ensaio de fascite plantar.',
          },
          dose: 'O Walkito começa com 2\u00A0minutos',
          how: 'Sente-se com uma bolinha embaixo do arco. Role devagar da parte da frente do pé até o calcanhar, com pressão firme. Se fizer careta, alivie.',
          often: 'Dias de recuperação, ou depois de qualquer sessão para desacelerar',
          feel: 'Pressão firme e constante embaixo do pé',
          stop: 'A dor chegar a 6/10',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
    },
    {
      h2: 'Rolar uma bolinha embaixo do pé ajuda na fascite plantar?',
      paragraphs: [
        'Fisioterapeutas e podólogos recomendam muito o rolamento como parte do cuidado da fascite plantar. A ideia é que ele funciona como uma automassagem: aplica pressão ao longo da fáscia, pode aumentar o fluxo de sangue no local e pode diminuir a sensação de tensão. É comum os pacientes contarem alívio de curto prazo depois de rolar o pé.',
        'Dito isso, **nenhum ensaio randomizado testou o rolamento como intervenção isolada para fascite plantar.** Ele aparece em protocolos junto com alongamento e fortalecimento, mas nunca é a variável medida. A diretriz de 2023 não dá a ele um grau próprio. Quem carrega a evidência são o alongamento e o treino de força.',
        'Rolar o pé fica na categoria de recuperação. Ajuda depois de um dia longo em pé, depois de uma sessão de elevação de calcanhar, ou sempre que a sola parecer tensa e dolorida. Não substitui o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/), o [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) ou a [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/), que têm os graus da diretriz.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Vale usar uma garrafa de água congelada?',
      paragraphs: [
        'A garrafa de água congelada é um dos remédios caseiros mais populares para fascite plantar. O formato deixa você rolar a sola inteira, e o frio adormece a região ao mesmo tempo. Profissionais de saúde costumam recomendar, e é gostoso mesmo.',
        'Veja o que a evidência diz de fato. A terapia com frio (gelo, garrafa congelada) é uma ferramenta geral para controlar dor. Ela reduz o desconforto adormecendo as terminações nervosas e pode reduzir o inchaço por um tempo.',
        'Mas nenhum ensaio randomizado comparou uma garrafa congelada com uma garrafa em temperatura ambiente na fascite plantar. O alívio que você sente provavelmente é uma mistura do rolamento (pressão na fáscia) com o adormecimento (frio nas terminações nervosas). Se o frio acelera a recuperação além do que o rolamento sozinho faz é uma pergunta em aberto.',
        'Se a garrafa congelada dá alívio, use. **Só não conte com o frio para substituir o alongamento e o trabalho de força.** E evite gelo por mais de 15 a 20\u00A0minutos de cada vez. Frio prolongado pode irritar a pele.',
      ],
    },
    {
      h2: 'Que tipo de bolinha usar?',
      paragraphs: [
        {
          list: [
            'A bolinha de tênis é o ponto de partida mais comum. Ela é macia o bastante para afundar no arco sem machucar.',
            'A bola de lacrosse é mais firme e dá mais pressão.',
            'A bolinha de golfe é pequena e muito dura, e pode ser demais para um calcanhar dolorido.',
          ],
        },
        'Comece com o que você tiver. Se a bolinha de tênis parecer macia demais depois de algumas sessões, tente uma bola de lacrosse. Se você faz careta com qualquer bolinha, ela está dura demais ou você está apertando demais. O exercício deve parecer uma massagem profunda, nunca como se você estivesse esfregando uma lesão.',
        'Uma garrafa de água congelada funciona no lugar da bolinha e acrescenta frio. Um rolo de espuma embaixo do pé é ainda mais suave. Um rolinho próprio para os pés, de loja de esportes, faz o mesmo trabalho. Nenhum deles tem prova de funcionar melhor que os outros.',
      ],
    },
    {
      h2: 'Quais são os erros comuns ao rolar o pé?',
      paragraphs: [
        {
          list: [
            '**Apertar demais.** Mais forte não é melhor. Se você aperta até a dor chegar a 6/10 ou até fazer careta, pode estar irritando a fáscia em vez de acalmá-la. Volte para uma pressão firme e constante.',
            '**Rolar rápido demais.** O vaivém rápido passa por cima do tecido. Role devagar, mais ou menos uma passada completa por segundo, para cada ponto receber uma pressão sustentada.',
            '**Usar como único exercício.** Rolar o pé dá sensação de produtividade, e é fácil de fazer na mesa de trabalho. Mas não fortalece a panturrilha nem alonga a fáscia como os exercícios com grau na diretriz. Junte com o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) e a [elevação de calcanhar](/pt/elevacao-de-calcanhar-fascite-plantar/) para o quadro completo.',
          ],
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quando rolar o pé, e quando pular?',
      paragraphs: [
        'Role depois de um dia longo em pé, depois de uma sessão de elevação de calcanhar, ou sempre que a sola estiver tensa. No Walkito, o rolamento do pé aparece nos dias de recuperação e no fim das sessões, para desacelerar.',
        '**Pule o rolamento se o calcanhar estiver inchado, vermelho ou quente em uma crise aguda.** Esses sinais podem indicar algo diferente de fascite plantar, e apertar uma área inflamada pode piorar. Procure um profissional de saúde primeiro. Para o conjunto completo de exercícios que a diretriz recomenda, veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) ou [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Rolar garrafa de água congelada no pé ajuda na fascite plantar?',
      a: 'A garrafa congelada junta o rolamento (pressão na fáscia) e o frio (adormece as terminações nervosas). Os dois podem reduzir o desconforto no curto prazo. Nenhum ensaio comparou uma garrafa congelada com uma em temperatura ambiente na fascite plantar, então não se sabe se o frio traz um benefício extra de recuperação além do próprio rolamento. É seguro testar, e muita gente acha calmante.',
    },
    {
      q: 'Quanto tempo rolar o pé na bolinha?',
      a: 'Cerca de 2\u00A0minutos em cada pé é uma dose inicial razoável. É o que o Walkito usa. Você pode repetir algumas vezes por dia se trouxer alívio. Não existe uma dose específica de pesquisa, porque o rolamento não foi testado como intervenção isolada.',
    },
    {
      q: 'Bolinha de tênis ou bola de lacrosse: qual é melhor para fascite plantar?',
      a: 'Comece com a bolinha de tênis. Ela é mais macia e tem menos chance de causar dor aguda em um calcanhar dolorido. A bola de lacrosse dá uma pressão mais firme e pode ser melhor depois que a dor aguda acalmar. Nenhuma tem prova de ser superior. Use a que der pressão firme sem fazer você fazer careta.',
    },
    {
      q: 'Rolar o pé pode piorar a fascite plantar?',
      a: 'Sim, se você apertar demais. Esfregar com força em uma fáscia dolorida pode aumentar a inflamação em vez de acalmá-la. A pressão deve parecer uma massagem profunda, firme mas sem dor aguda. Se a dor chegar a 6/10 ou a sola estiver mais dolorida na manhã seguinte, alivie.',
    },
    {
      q: 'Rolar o pé substitui o alongamento?',
      cites: [CITE.guideline],
      a: 'Não. A diretriz de 2023 dá ao alongamento o grau A e ao treino de força o grau B. O rolamento não recebe grau nenhum. Ele funciona como etapa de recuperação junto com os exercícios que têm a evidência, como o alongamento da fáscia plantar e a elevação de calcanhar. Só rolar o pé não dá o mesmo benefício.',
    },
  ],
  redFlags: {
    h2: 'Pare e procure um profissional de saúde se',
    bullets: [
      'a sola ficou inchada, vermelha ou quente de forma aguda',
      'rolar o pé sempre piora a dor na manhã seguinte',
      'a dor é aguda e fica em um ponto só, e piora com a pressão',
      'você sente dormência, formigamento ou queimação embaixo do pé',
      'a dor começou depois de uma lesão, de uma queda ou de um estalo repentino no arco',
      'não melhorou depois de várias semanas, mesmo com o programa completo de exercícios',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito coloca o rolamento do pé no fim das sessões e nos dias de recuperação. O app cuida do horário e da ordem, para você não ter que lembrar em quais dias rolar o pé e em quais alongar ou fortalecer.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Rolar o pé na bolinha',
  campaign: 'ex-foot-roll-pt',
};
