import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-towel-heel-raise.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Uses only existing CITE keys. Figures, doses
 * and citations are identical to the English page.
 */

export const EX_TOWEL_HEEL_RAISE_PT: Guide = {
  lang: 'pt',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Elevação de calcanhar com toalha: protocolo de Rathleff',
  description:
    'Como fazer a elevação de calcanhar com toalha do protocolo de Rathleff para fascite plantar: séries, repetições, ritmo, a toalha, erros e versões.',
  h1: 'Elevação de calcanhar com toalha: o protocolo de carga alta de Rathleff, passo a passo',
  lede:
    'A elevação de calcanhar com toalha é uma elevação de panturrilha em uma perna, em um degrau, com uma toalha enrolada embaixo dos dedos. Ela vem de um ensaio de 2015 com 48\u00A0pessoas com fascite plantar, em que esse exercício aliviou a dor no calcanhar mais rápido do que só alongar ao longo de três meses. A toalha é o que a diferencia de uma elevação de panturrilha comum: ela ativa a fáscia plantar pelo mecanismo de molinete (windlass).',
  takeaways: [
    'Em um ensaio com 48\u00A0pessoas, as elevações de calcanhar com toalha e carga tiveram 29\u00A0pontos a mais de melhora no Foot Function Index do que só alongar aos três meses, embora os dois grupos tenham se igualado aos doze meses (Rathleff e colegas, 2015).',
    'A diretriz de 2023 para dor no calcanhar dá ao treino de força o grau B, um degrau abaixo do alongamento, com A, e recomenda os dois (Koc e colegas, 2023).',
    'A toalha embaixo dos dedos os dobra para cima, ativando o mecanismo de molinete para que a fáscia plantar divida a carga com a panturrilha.',
    'O Walkito começa com 3\u00A0séries de 12, cada perna, no ritmo de 3\u00A0segundos para subir, 2\u00A0segundos parado e 3\u00A0segundos para descer.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que a elevação de calcanhar com toalha trabalha?',
      paragraphs: [
        'A elevação de calcanhar com toalha trabalha o gastrocnêmio e o sóleo (os dois músculos da panturrilha), o tendão de Aquiles e a fáscia plantar. A toalha enrolada dobra os dedos para cima no alto da elevação, o que puxa a fáscia plantar pelo mecanismo de molinete. Sem a toalha, o exercício treina principalmente a panturrilha. Com ela, a fáscia recebe parte da carga.',
        'É por isso que o ensaio de Rathleff usou a toalha especificamente para fascite plantar, em vez de uma elevação de calcanhar simples. O objetivo é colocar carga em toda a cadeia panturrilha-Aquiles-fáscia ao mesmo tempo. Se a sua dor é no tendão de Aquiles e não embaixo do pé, uma [descida excêntrica do calcanhar](/exercises/eccentric-heel-drops/) (em inglês), sem a toalha, é um ponto de partida melhor.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Como fazer a elevação de calcanhar com toalha?',
      paragraphs: [
        'Enrole uma toalha de mão pequena até formar um rolo da largura do seu punho, mais ou menos. Coloque-a na beira de um degrau. Fique em um pé só com os cinco dedos sobre a toalha e a parte da frente do pé no degrau. Segure em uma parede ou corrimão para se equilibrar.',
        'Suba em três segundos, empurrando pelo dedão. Segure lá em cima por dois segundos. Desça em três segundos, deixando o calcanhar descer um pouco abaixo do degrau. Esse ritmo lento faz parte do protocolo. Repetições rápidas diminuem a carga no tendão e na fáscia.',
        'No ensaio de Rathleff, os participantes acrescentavam peso com uma mochila quando o peso do corpo sozinho já não deixava a última repetição difícil. “12RM” quer dizer a carga mais pesada que você consegue levantar em exatamente 12\u00A0repetições controladas.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: {
            level: 'strong',
            why: 'O exercício do único ensaio randomizado de elevação de calcanhar na fascite plantar (Rathleff 2015). Grau B na diretriz.',
          },
          dose: 'O Walkito começa com 3 x 12, cada perna. Protocolo da pesquisa: 3 x 12RM, progredindo para 5 x 8RM',
          how: 'Fique em um pé só em um degrau, com uma toalha enrolada embaixo dos dedos. Três segundos para subir, dois segundos parado, três segundos para descer. Acrescente peso quando a última repetição não for mais difícil.',
          often: 'Dia sim, dia não no ensaio. O Walkito coloca nos dias de força.',
          feel: 'Trabalho pesado na panturrilha e um puxão embaixo do arco',
          stop: 'A dor chegar a 6/10 ou mais',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos para subir, parado, três segundos para descer',
          alt: 'Uma figura em um degrau subindo na ponta do pé com uma toalha enrolada embaixo do pé, com a panturrilha e o arco destacados',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Séries, repetições e a progressão de Rathleff',
      paragraphs: [
        'O ensaio aumentou a carga ao longo de cerca de três meses. O ritmo foi o mesmo do começo ao fim: três segundos para subir, dois segundos parado, três segundos para descer.',
      ],
      table: {
        caption: 'Progressão da elevação de calcanhar com toalha de Rathleff 2015',
        head: ['Semanas', 'Séries x repetições', 'Ritmo', 'Frequência'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s subindo / 2\u00A0s parado / 3\u00A0s descendo', 'Dia sim, dia não'],
          ['3-4', '4 x 10RM', '3\u00A0s subindo / 2\u00A0s parado / 3\u00A0s descendo', 'Dia sim, dia não'],
          ['5 em diante', '5 x 8RM', '3\u00A0s subindo / 2\u00A0s parado / 3\u00A0s descendo', 'Dia sim, dia não'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Quais são os erros comuns na elevação de calcanhar com toalha?',
      paragraphs: [
        'Ir rápido demais é o erro mais comum. Uma descida de três segundos mantém a panturrilha sob tensão por tempo suficiente para ganhar força. Subir e descer quicando transforma o exercício em aeróbico, não em força.',
        'Deixar a toalha escorregar, de modo que só um ou dois dedos fiquem sobre ela, diminui a carga na fáscia. Os cinco dedos devem ficar sobre a toalha. Se a toalha continua escorregando, dobre mais grosso ou use uma toalha de mão em vez de uma toalha de banho.',
        'Começar em uma perna quando a elevação com os dois pés ainda é difícil leva a uma técnica ruim e a compensações. Se a elevação em uma perna no degrau é demais agora, comece com a [elevação de calcanhar com os dois pés](/exercises/calf-raises/) (em inglês) no chão e vá subindo.',
      ],
    },
    {
      h2: 'Versões mais fáceis e mais difíceis',
      paragraphs: [
        'Se a elevação de calcanhar com toalha completa no degrau é difícil demais, volte pela cadeia da panturrilha. A [elevação de calcanhar sentado](/exercises/calf-raises/) (em inglês) é a de menor carga. A elevação em pé com os dois pés vem depois. Depois, a elevação de calcanhar sustentada lá em cima. Depois, a elevação em uma perna com toalha no degrau. Cada degrau deve parecer tranquilo por duas sessões antes de você subir.',
        'Se o peso do corpo em uma perna for fácil demais, acrescente carga. O ensaio de Rathleff usou uma mochila com livros ou garrafas de água. Quem tem acesso a academia pode usar uma máquina de panturrilha ou um colete com peso. O objetivo é que a última repetição de cada série seja de verdade a última que você consegue fazer com boa técnica.',
      ],
    },
    {
      h2: 'O que a pesquisa diz sobre a elevação de calcanhar com toalha?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas com fascite plantar confirmada, as elevações de calcanhar com toalha tiveram resultados melhores no Foot Function Index aos três meses, mas os resultados ficaram parecidos com os de só alongar aos doze meses (Rathleff e colegas, 2015).',
      paragraphs: [
        'O ensaio de Rathleff de 2015 é o único ensaio randomizado que testou a elevação de calcanhar com toalha especificamente na fascite plantar. Em 48\u00A0pessoas com fascite plantar confirmada por ultrassom, o grupo da elevação teve 29\u00A0pontos a mais de melhora no Foot Function Index aos três meses do que o grupo que só alongava. Aos doze meses, os dois grupos tinham se igualado.',
        'A diretriz de 2023 para dor no calcanhar revisou essa e outras evidências e deu ao treino de força o grau **B** e ao alongamento o grau **A**. Os dois são recomendados. A diretriz não destaca a variante com toalha, mas ela é o único exercício de força testado em um ensaio próprio de fascite plantar.',
        'Nada na evidência diz que esse exercício deve substituir o alongamento. A abordagem mais forte são os dois: um [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) para a rigidez da manhã e a elevação com carga para construir capacidade. Para a lista completa de exercícios e como eles se encaixam, veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      sourceNote:
        'Rathleff 2015: diferença de 29\u00A0pontos no FFI aos 3\u00A0meses (IC 95%: 6-52, p = 0,016). Aos 12\u00A0meses: 22 contra 16, sem diferença significativa.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Para quem é a elevação de calcanhar com toalha?',
      paragraphs: [
        'Para qualquer pessoa com fascite plantar que tenha força de panturrilha suficiente para fazer uma elevação em uma perna em um degrau. O ensaio incluiu adultos com dor havia pelo menos três meses e que toleravam carga.',
        'Se a sua dor é recente e você não consegue ficar em uma perna com conforto, comece mais embaixo na escada: elevação sentado ou com os dois pés primeiro. Se a sua dor é no tendão de Aquiles e não na fáscia plantar, a lógica de carga é parecida, mas a toalha não é usada e o protocolo é outro. Veja [descidas excêntricas do calcanhar](/exercises/eccentric-heel-drops/) (em inglês) ou [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/) para esse caminho.',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Para que serve a toalha na elevação de calcanhar?',
      cites: [CITE.rathleff],
      a: 'A toalha fica enrolada embaixo dos cinco dedos para que eles dobrem para cima no alto da elevação. Isso ativa o mecanismo de molinete (windlass): quando o dedão dobra para cima, a fáscia plantar fica tensa. Sem a toalha, o exercício põe carga principalmente na panturrilha. Com ela, a fáscia divide a carga, e é por isso que o ensaio de Rathleff a usou na fascite plantar.',
    },
    {
      q: 'Quantas elevações de calcanhar com toalha devo fazer?',
      cites: [CITE.rathleff],
      a: 'O ensaio de Rathleff começou com 3\u00A0séries de 12\u00A0repetições (com a carga mais pesada possível para 12\u00A0repetições), progredindo para 5\u00A0séries de 8\u00A0repetições mais pesadas até mais ou menos a semana 5, dia sim, dia não. O Walkito começa com 3\u00A0séries de 12 em cada perna e sobe quando duas sessões nesse nível parecem fáceis.',
    },
    {
      q: 'Posso fazer a elevação de calcanhar com toalha no chão em vez de no degrau?',
      a: 'Pode, mas você perde a amplitude extra embaixo, quando o calcanhar desce abaixo do degrau. A versão no chão ainda põe carga na panturrilha e na fáscia. É um ponto de partida razoável se o degrau parecer instável ou intenso demais, e você pode passar para o degrau depois.',
    },
    {
      q: 'A elevação de calcanhar com toalha deve doer?',
      cites: [CITE.guideline],
      a: 'Trabalho pesado na panturrilha e um puxão embaixo do arco são esperados. Pare por hoje se a dor chegar a 6 de 10 ou mais, ou se a manhã seguinte estiver claramente pior que o normal. Uma dor muscular leve que passa em um dia é normal, principalmente nas duas primeiras semanas.',
    },
    {
      q: 'A elevação de calcanhar com toalha é a mesma coisa que a descida excêntrica do calcanhar?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'Não. A elevação de calcanhar com toalha inclui a subida e a descida e usa uma toalha embaixo dos dedos para colocar carga na fáscia plantar. A descida excêntrica do calcanhar foca só na fase de descida, sem toalha, e foi criada para a tendinopatia de Aquiles. Elas miram problemas diferentes, com protocolos diferentes.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de um estalo repentino ou de uma lesão, em vez de aparecer aos poucos',
      'você não consegue apoiar o pé ou está mancando',
      'o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'a dor acorda você à noite ou aparece mesmo quando você não está em pé',
      'não melhorou depois de várias semanas de carga constante',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'A elevação de calcanhar com toalha é um degrau de uma cadeia da panturrilha que o Walkito coloca em um plano semanal. A cadeia vai da elevação de calcanhar sentado, passando pela elevação com os dois pés, a sustentada, a elevação com toalha e as descidas excêntricas do calcanhar, até chegar aos saltitos curtos na ponta dos pés. Cada degrau se abre quando duas sessões no nível atual pareceram fáceis.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha e o equilíbrio. O Walkito é um programa de exercícios, não uma ferramenta de diagnóstico.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Elevação de calcanhar com toalha',
  campaign: 'ex-towel-heel-raise-pt',
};
