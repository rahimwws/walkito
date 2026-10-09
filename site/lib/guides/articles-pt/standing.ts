import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/standing.ts` (2026-10-08). Brazilian Portuguese,
 * informal «você». Figures, doses and qualifiers are identical to the English
 * page. Exercise names follow `lib/guides/pt.ts`.
 */

/** `3, 5 ou 7`: the plan's options as a Portuguese list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_PT: Guide = {
  lang: 'pt',
  page: 'standing',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor nos pés de ficar em pé o dia todo: o que ajuda',
  description:
    'Por que os pés doem de ficar em pé o dia todo, o que ajuda (alongar a panturrilha, treino de força, meias de compressão) e quando procurar um profissional.',
  h1: 'Por que meus pés doem depois de ficar em pé o dia todo?',
  lede:
    'Seus pés doem no fim de um turno longo. O arco dói, o calcanhar fica dolorido e as pernas parecem pesadas. Ficar horas em pé num chão duro põe carga nos mesmos tecidos o tempo todo, sem o bombeamento que a caminhada dá às panturrilhas e às veias. Alongar a panturrilha e a fáscia plantar, e ganhar um pouco de força na panturrilha, mira os tecidos que mais sofrem.',
  intro: [
    'Nem toda dor nos pés de ficar em pé é fascite plantar, mas as duas se sobrepõem. Um estudo caso-controle de 2003 com 50\u00A0pessoas com fascite plantar e 100\u00A0controles pareados encontrou que ficar em pé a maior parte do dia de trabalho multiplicava por 3,6 as chances de fascite plantar. A flexibilidade reduzida do tornozelo era um fator de risco ainda mais forte, com chances 23,3\u00A0vezes maiores. Os exercícios que ajudam nas duas situações são em grande parte os mesmos: alongamentos da panturrilha e da fáscia plantar, mais treino de força para a panturrilha.',
  ],
  toc: true,
  takeaways: [
    'Uma revisão de 2015 da literatura de saúde ocupacional associou ficar muito tempo em pé no trabalho a desconforto musculoesquelético, cansaço e dor nas pernas, e colocou tapetes antifadiga, meias de compressão e calçados com bom suporte entre as intervenções com alguma evidência (Waters e Dick, 2015).',
    'Ficar em pé a maior parte do dia de trabalho multiplicou por 3,6 as chances de fascite plantar em um estudo caso-controle com 50\u00A0casos e 100\u00A0controles. A flexibilidade reduzida do tornozelo multiplicou essas chances por 23,3 (Riddle e colegas, 2003).',
    'Em um ensaio de grupos paralelos com 40\u00A0seguranças sorteados para usar meias comuns ou um de dois grupos de meias de compressão, as meias de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento do desconforto nos pés e nas pernas visto com meias comuns durante turnos de 12\u00A0horas em pé (Garcia e colegas, 2023).',
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A, e ao treino de força um B.',
  ],
  sections: [
    {
      h2: 'Por que os pés doem depois de ficar em pé o dia todo?',
      keyFact: 'Em um estudo caso-controle de 2003, a flexibilidade reduzida do tornozelo multiplicou por 23,3 as chances de fascite plantar, o fator de risco mais forte encontrado, e ficar em pé a maior parte do dia de trabalho multiplicou as chances por 3,6 (Riddle e colegas, 2003).',
      paragraphs: [
        'Os pés doem de ficar em pé porque ficar parado põe carga na fáscia plantar, nos músculos da panturrilha e no calcanhar sem dar uma pausa a eles. Caminhar bombeia o sangue das pernas de volta para cima a cada passo. Ficar em pé tira essa bomba, então o sangue se acumula na parte de baixo das pernas e os tecidos embaixo do pé carregam a mesma carga parada por horas.',
        'Uma revisão de 2015 da pesquisa em saúde ocupacional associou ficar muito tempo em pé a dor lombar, dor nas pernas, desconforto e cansaço em muitas profissões que exigem ficar em pé. A revisão também observou que o esforço cardiovascular e o inchaço nas pernas aumentam com o tempo em pé. Os autores pediram definições mais claras de “ficar muito tempo em pé” em estudos futuros, já que o limite entre um tempo em pé seguro e um prejudicial varia entre pessoas e trabalhos.',
        'Sobre a panturrilha e a fáscia especificamente, um estudo caso-controle de 2003 encontrou dois fatores de risco que se destacaram acima dos outros. A flexibilidade reduzida do tornozelo, ou seja, uma panturrilha tensa, foi o preditor mais forte de fascite plantar, com chances 23,3\u00A0vezes maiores. Ficar em pé a maior parte do dia de trabalho multiplicou as chances por 3,6. Os dois estão ligados: uma panturrilha tensa mantém o calcanhar sob mais tensão em cada minuto em pé.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quais exercícios ajudam pés que doem de ficar em pé?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A, o mais alto, e ao treino de resistência e de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Estes exercícios miram a panturrilha, a fáscia plantar e os pequenos músculos que sustentam o arco. São as doses iniciais do Walkito, não uma prescrição. Se a sua dor fica perto do calcanhar e segue o padrão de dor matinal da fascite plantar, a lista completa de exercícios está em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/). [Como estes guias são escritos](/pt/sobre-walkito/).',
        'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A. Ao treino de resistência e de força, dá um B. Os dois graus são para fascite plantar especificamente, não para o cansaço geral de ficar em pé, mas os tecidos envolvidos são os mesmos. Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje.',
      ],
      table: {
        head: ['Exercício', 'Dose', 'Com que frequência', 'O que você deve sentir', 'Pare se'],
        rows: [
          ['Alongamento de panturrilha', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões', 'Um alongamento na panturrilha da perna de trás esticada', 'A dor chegar a 6/10'],
          ['Alongamento do sóleo', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões', 'Um alongamento na parte baixa da panturrilha, perto do calcanhar', 'A dor chegar a 6/10'],
          ['Alongamento da fáscia plantar', '2\u00A0vezes de 30\u00A0segundos, cada pé', 'Quase todas as sessões', 'Um alongamento ao longo do arco, não na panturrilha', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar com os dois pés', '3\u00A0séries de 10, os dois pés', 'Dias de força', 'As panturrilhas trabalhando, os dois pés dividindo a carga', 'A dor chegar a 6/10'],
          ['Pé curto, sentado', '3\u00A0séries de 10, segurando 5\u00A0segundos, cada pé', 'Dias de força', 'O arco subindo, dedos relaxados', 'A dor chegar a 6/10'],
          ['Equilíbrio em uma perna', '3\u00A0vezes de 30\u00A0segundos, cada perna', 'Dias de equilíbrio', 'O pé e o tornozelo fazendo pequenas correções', 'A dor chegar a 6/10'],
          ['Rolar o pé na bolinha', '2\u00A0minutos', 'Dias de recuperação', 'Pressão firme embaixo do pé, nunca uma careta', 'A dor chegar a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Alongamento de panturrilha',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha o grau A para fascite plantar. Uma panturrilha tensa foi o fator de risco mais forte em um estudo caso-controle de 2003.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar no chão e o quadril para a frente. Uma panturrilha tensa puxa o calcanhar o dia todo, então este alongamento mira o fator de risco mais forte que o estudo de 2003 encontrou.',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: {
            level: 'moderate',
            why: 'Mesmo mecanismo do alongamento de panturrilha: mira a flexibilidade do tornozelo, o fator de risco mais forte para fascite plantar no estudo de 2003.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição na parede e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura alongando na parede com o joelho de trás dobrado, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar o grau A para fascite plantar.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento ao longo do arco, não na panturrilha. Se o seu calcanhar fica pior logo de manhã, faça este antes de o pé tocar o chão.',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao treino de força o grau B para fascite plantar. Não foi testada especificamente para o cansaço de ficar em pé.',
          },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga enquanto a panturrilha ganha força. Segure em uma parede ou corrimão se precisar de equilíbrio.',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Pé curto, sentado',
          evidence: {
            level: 'early',
            why: 'Uma revisão de 2024 encontrou que o treino do pé curto mudou o formato do arco, mas não a dor. Em um ensaio de 2023, ele fez parte de um programa que melhorou as medidas do arco.',
          },
          dose: '3\u00A0séries de 10, segurando 5\u00A0segundos, cada pé',
          often: 'Dias de força',
          feel: 'O arco subindo, dedos relaxados',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, e segure. Não dobre os dedos. O pé curto treina o pequeno músculo dentro do arco que o sustenta durante um longo dia em pé.',
          image: 'Exercício: pé curto, sentado',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma perna sentada com o pé no chão, com o arco destacado enquanto sobe',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: {
            level: 'early',
            why: 'Não há estudo específico sobre ficar em pé. Trabalho geral de equilíbrio para o pé e o tornozelo.',
          },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          how: 'Fique em pé em um pé só e olhe para um ponto fixo. Deixe o pé balançar. Esse balanço é o pé fazendo o equilíbrio. Fique perto de uma parede se precisar de segurança.',
          image: 'Exercício: equilíbrio em uma perna',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: {
            level: 'early',
            why: 'Não foi testado nos estudos desta página. Uma medida de conforto entre as sessões.',
          },
          dose: '2\u00A0minutos',
          often: 'Dias de recuperação',
          feel: 'Pressão firme embaixo do pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se estiver fazendo careta, alivie. Rolar o pé depois de um turno longo acalma o tecido e traz algum alívio antes do dia seguinte.',
          image: 'Exercício: rolar o pé na bolinha',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Palmilhas ou calçados com suporte ajudam pés que doem de ficar em pé?',
      paragraphs: [
        'Calçados com bom suporte e palmilhas são muito recomendados para dor nos pés de ficar em pé, e há alguma base para isso, mas a evidência é mais fraca do que para o alongamento e o treino de força. A diretriz de 2023 para dor no calcanhar dá às órteses sozinhas um **B contra** para alívio da dor a curto prazo, o que significa que a evidência pende para não usá-las como opção isolada. Órteses junto com outros cuidados recebem um **C**.',
        'O que a revisão de saúde ocupacional apoia é mais amplo: tapetes antifadiga, calçados com bom suporte e a opção de alternar entre sentado e em pé aparecem todos na lista de intervenções com alguma evidência para reduzir o desconforto no trabalho em pé. Nenhum deles tem um único ensaio grande por trás, como o alongamento da panturrilha tem. Um caminho razoável é usar calçados com bom suporte e um tapete se o seu chão for duro, e fazer o alongamento e o treino de força para os próprios tecidos.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Meias de compressão ajudam na dor nos pés de ficar em pé?',
      keyFact: 'Em um ensaio com 40\u00A0seguranças em turnos de 12\u00A0horas em pé, as meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento do desconforto nos pés e nas pernas visto com meias comuns (Garcia e colegas, 2023).',
      paragraphs: [
        'As meias de compressão têm um dos estudos mais bem controlados por trás delas para o desconforto de ficar em pé especificamente. Em um ensaio randomizado com 40\u00A0seguranças que ficavam em pé em turnos de cerca de 12\u00A0horas, divididos em três grupos, os grupos das meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento significativo do desconforto, do cansaço e do inchaço nos pés e nas pernas visto no grupo que usou meias comuns. Os participantes muitas vezes disseram que a meia de pressão mais baixa era mais fácil de vestir.',
        'O ensaio foi pequeno, só com homens, e testou uma única profissão. Mas é uma das poucas intervenções para o desconforto de ficar em pé com desenho randomizado, e é por isso que aparece nesta página antes de alguns conselhos mais populares. Meias de compressão não substituem o alongamento nem o treino de força. Elas ajudam a controlar o inchaço e o cansaço, enquanto a panturrilha e a fáscia ainda precisam da sua própria atenção.',
      ],
      sourceNote:
        'Garcia e colegas (2023): desenho de grupos paralelos, 40\u00A0seguranças homens sorteados para um de três grupos (meias comuns, 15-20\u00A0mmHg ou 20-30\u00A0mmHg), cada condição usada durante um turno de trabalho completo por um subgrupo diferente de seguranças. Desconforto, cansaço e edema medidos antes e depois do turno.',
      cites: [CITE.garcia],
    },
    {
      h2: 'A dor nos pés de ficar em pé pode ser fascite plantar, pé chato ou outra coisa?',
      paragraphs: [
        'A dor nos pés de ficar em pé pode ser um cansaço geral que passa com descanso, ou pode ser o começo de um problema com nome. O mais comum é a fascite plantar: dor aguda perto do calcanhar, normalmente pior nos primeiros passos depois de descansar. Se o seu calcanhar dói mais de manhã e de novo depois de ficar sentado, esse padrão aponta para fascite plantar, e os exercícios em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) são o guia mais completo.',
        'Se os seus arcos parecem achatados ou caídos para dentro no fim do dia, os exercícios para o arco em [exercícios para pé chato](/pt/exercicios-pe-chato/) miram os músculos que sustentam o arco. Um pé chato rígido, que continua chato mesmo com o pé fora do chão, é estrutural e precisa de um profissional de saúde, não de exercício.',
        'Se a dor fica ao longo da canela e não embaixo do pé, isso aponta para canelite, e [exercícios para canelite](/pt/canelite-exercicios/) mostra o que a pesquisa diz sobre ela. Dor na parte de trás do calcanhar, no tendão de Aquiles, é outro problema. Dor na parte de dentro do tornozelo pode vir do tendão tibial posterior. Os dois são abordados do ponto de vista de quem corre em [dor no calcanhar na corrida](/heel-pain-runners/) (em inglês). Se a dor fica na parte de trás do calcanhar, no tendão de Aquiles, veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/); se você quer mais detalhes sobre o próprio exercício de elevação de calcanhar, veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/). Se você não tem certeza do que está causando a dor, procure um profissional de saúde antes de pôr carga com exercício.',
      ],
    },
    {
      h2: 'Quanto tempo até os pés melhorarem num turno longo?',
      paragraphs: [
        'Não há ensaio que responda isso diretamente para o cansaço nos pés de ficar em pé. A dor e o cansaço gerais de ficar em pé costumam passar em um ou dois dias de descanso. Se a dor já virou fascite plantar, o prazo é maior: uma revisão da evidência clínica relata que cerca de 90% das pessoas com fascite plantar melhoram com cuidados sem cirurgia, como alongamento e palmilhas, muitas vezes em 3 a 6\u00A0meses.',
        'O que você consegue medir antes é se os exercícios estão mudando alguma coisa. A flexibilidade da panturrilha pode começar a mudar em poucas semanas de alongamento diário. Testar de novo a resistência da panturrilha e o equilíbrio a cada poucas semanas dá um número para olhar, em vez de um palpite sobre se as coisas parecem diferentes. Os exercícios desta página e os de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) trabalham os mesmos tecidos, então fazê-los por causa do tempo em pé também cobre o caminho mais comum até a fascite plantar.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Por que meus pés doem mais no fim do turno em pé do que no começo?',
      a: 'A fáscia plantar, os músculos da panturrilha e as veias da parte de baixo da perna têm uma tolerância limitada a uma carga parada e contínua, e essa tolerância vai se esgotando ao longo de horas em pé. A gravidade acumula sangue nos pés e na parte de baixo das pernas quando você fica parado em pé, o que soma à dor e ao inchaço que crescem durante o turno. Pausas para caminhar ajudam porque a bomba da panturrilha leva o sangue de volta para cima.',
      cites: [CITE.waters],
    },
    {
      q: 'Dor nos pés de ficar em pé o dia todo é a mesma coisa que fascite plantar?',
      a: 'Nem sempre. Dor e cansaço gerais de ficar em pé são comuns e costumam passar com descanso. A fascite plantar é um problema específico, com dor aguda no calcanhar, muitas vezes pior nos primeiros passos depois de descansar. Ficar em pé a maior parte do dia de trabalho é um fator de risco independente para desenvolver fascite plantar, com chances 3,6\u00A0vezes maiores em um estudo caso-controle, então as duas coisas estão ligadas, mas não são iguais.',
      cites: [CITE.riddle],
    },
    {
      q: 'Meia de compressão ajuda na dor nos pés de ficar em pé?',
      a: 'Em um ensaio com 40\u00A0seguranças em turnos de 12\u00A0horas em pé, sorteados para meias comuns ou um de dois grupos de meias de compressão, as de 15-20\u00A0mmHg e as de 20-30\u00A0mmHg evitaram o aumento do desconforto, do cansaço e do inchaço nos pés e nas pernas visto com meias comuns. É uma das poucas intervenções específicas para quem fica em pé com um ensaio controlado por trás, embora o estudo tenha sido pequeno e só com homens.',
      cites: [CITE.garcia],
    },
    {
      q: 'É normal os pés doerem depois de um turno de 8 ou 12 horas em pé?',
      a: 'Algum cansaço e dor depois de um turno longo em pé é comum e combina com o que a pesquisa em saúde ocupacional relata. Uma revisão de 2015 associou ficar muito tempo em pé a desconforto musculoesquelético e cansaço em muitos trabalhos em pé. Comum não quer dizer que deva ser ignorado a longo prazo: a mesma revisão observa que tapetes antifadiga, meias de compressão e calçados melhores reduzem esses efeitos de forma mensurável.',
      cites: [CITE.waters],
    },
    {
      q: 'Qual a primeira coisa a tentar para dor nos pés de ficar em pé?',
      a: 'Entre as opções de autocuidado vistas nesta página, o alongamento da panturrilha e da fáscia plantar tem o grau de evidência mais alto (A) na diretriz de 2023 para dor no calcanhar, especificamente para dor no calcanhar, e as meias de compressão têm o ensaio controlado mais forte para o desconforto de ficar em pé. Começar com alongamentos diários da panturrilha e experimentar meias de compressão no seu próximo turno longo cobre as duas coisas.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Quanto tempo em pé é tempo demais?',
      a: 'Não existe um limite seguro único testado. A pesquisa em saúde ocupacional mostra que o desconforto, o cansaço e o inchaço aumentam quanto mais tempo do turno é em pé, com o aumento mais claro em turnos de 8 a 12\u00A0horas. O conforto depende mais de se movimentar do que de um número de horas: pausas curtas sentado ou caminhando mais ou menos a cada hora ajudam a compensar a carga parada que ficar em pé põe nos pés.',
      cites: [CITE.waters],
    },
    {
      q: 'Como ficar 10 horas em pé sem dor?',
      a: 'Nenhum truque sozinho tira a dor de um turno de 10\u00A0horas, mas juntar abordagens é o que mais ajuda: use calçados com amortecimento e bom suporte, coloque um tapete antifadiga em chão duro, faça pausas curtas para caminhar a cada hora para reativar a circulação e alongue a panturrilha e a fáscia plantar todos os dias. As meias de compressão reduziram o desconforto e o inchaço em um ensaio com seguranças em turnos longos.',
      cites: [CITE.garcia, CITE.waters],
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'ela vem com dormência, formigamento, queimação, inchaço ou calor',
      'o calcanhar ou o pé está vermelho, ou você tem febre ou se sente mal',
      'ela acorda você à noite',
      'ela é aguda, ou está piorando mesmo com menos carga',
      'a dor fica em um único ponto e piora com a atividade, o que pode ser o padrão de uma fratura por estresse e não o cansaço de ficar em pé',
      'uma perna ou um pé inchou de repente e está dolorido, vermelho ou quente',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
      'a dor não melhorou depois de várias semanas com menos carga, calçados melhores e os exercícios desta página',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: `Você não precisa descobrir a ordem, as doses nem quando passar para uma versão mais difícil. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Se a sua dor nos pés de ficar em pé é pior de manhã, a primeira meta é a mesma da dor no calcanhar: dor da manhã em 1/10 ou menos por ${PROGRAM.painFreeDays}\u00A0dias seguidos. Se os seus arcos também são baixos, o arco tem a sua própria meta e os seus próprios exercícios.`,
    more: [
      `Você escolhe ${DAYS} dias por semana e sessões de ${MINUTES}\u00A0minutos. A cada ${PROGRAM.testEveryDays}\u00A0dias (e depois a cada ${PROGRAM.testEveryDaysAfterGoal} quando a sua primeira meta for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver se o trabalho está fazendo efeito.`,
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor for aguda, estiver piorando ou não deixar você dormir, procure primeiro um profissional de saúde.',
    ],
    cta: `Comece com ${PROGRAM.sessionMinutes[0]}\u00A0minutos por dia.`,
  },
  crumb: 'Dor nos pés de ficar em pé',
  campaign: 'guide-standing-pt',
};
