import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/nurses.ts` (2026-10-08). Brazilian Portuguese,
 * informal «você». «Plantão» is the everyday Brazilian word for a nursing
 * shift. Figures, doses and qualifiers are identical to the English page.
 * Exercise names follow `lib/guides/pt.ts`.
 */

export const NURSES_PT: Guide = {
  lang: 'pt',
  page: 'nurses',
  mainSource: CITE.reedNurse,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor nos pés na enfermagem: plantão de 12 horas',
  description:
    'Por que quem trabalha na enfermagem sente dor nos pés no plantão de 12 horas: calçados, meias de compressão, exercícios e como encaixar tudo nos turnos.',
  h1: 'Dor nos pés na enfermagem: o que ajuda no plantão de 12 horas',
  lede:
    'Quem trabalha na enfermagem anda mais em um único plantão do que a maioria das pessoas anda em um dia, e faz isso em chão duro, com calçados que nem sempre servem bem. Problemas nos pés e nos tornozelos estão entre as queixas musculoesqueléticas mais comuns na enfermagem, relatados por mais da metade das enfermeiras de hospital em um período de 12\u00A0meses em uma pesquisa. A maior parte do que ajuda, como alongar a panturrilha, exercícios para o arco e meias de compressão, cabe em poucos minutos antes ou depois do plantão.',
  intro: [
    'Esta página trata da dor nos pés que vem das exigências do trabalho na enfermagem: ficar muito tempo em pé, andar longas distâncias e turnos que mudam. Se a sua dor é aguda e pior nos primeiros passos depois de descansar, esse padrão aponta para fascite plantar, e os exercícios em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) são o guia mais completo.',
    'Se você não tem certeza, [por que os pés doem depois de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) mostra onde a dor geral de ficar em pé e os problemas com nome se sobrepõem.',
  ],
  toc: true,
  takeaways: [
    'Em uma pesquisa com 312\u00A0enfermeiras de um hospital pediátrico na Austrália, 55,3% relataram problemas nos pés ou nos tornozelos nos últimos 12\u00A0meses, e a taxa era maior entre quem fazia plantões de 12\u00A0horas na terapia intensiva (Reed e colegas, 2014).',
    'As enfermeiras andaram em média 9.360\u00A0passos por plantão em um estudo com rastreadores, cerca de 5,8\u00A0km em um turno de 9,4\u00A0horas, uma carga bem acima da média dos adultos em geral (Chang e Cho, 2022).',
    'Em um estudo transversal com 636\u00A0enfermeiras de hospital no Japão, 51% relataram dor ou incapacidade nos pés no último mês, e 17% tinham dor que atrapalhava as atividades do dia a dia (Tojo e colegas, 2018).',
    'A flexibilidade reduzida do tornozelo, ou seja, uma panturrilha tensa, foi o preditor mais forte de fascite plantar em um estudo caso-controle com 50\u00A0casos e 100\u00A0controles, com chances 23,3\u00A0vezes maiores. Ficar em pé a maior parte do dia de trabalho multiplicou as chances por 3,6 (Riddle e colegas, 2003).',
    'Em um ensaio com 40\u00A0seguranças em turnos de 12\u00A0horas em pé, as meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento do desconforto e do inchaço visto com meias comuns (Garcia e colegas, 2023).',
  ],
  sections: [
    {
      h2: 'Dor nos pés é comum na enfermagem?',
      paragraphs: [
        '**A dor nos pés e nos tornozelos está entre as três queixas musculoesqueléticas mais comuns na enfermagem**, junto com a dor lombar e a dor no pescoço. Em uma pesquisa com 312\u00A0enfermeiras de um hospital pediátrico, 55,3% relataram problemas musculoesqueléticos nos pés ou nos tornozelos nos últimos 12\u00A0meses, e 43,8% tiveram sintomas só nos últimos sete dias.',
        'Uma em cada seis disse que a dor limitava a sua atividade física. Fazer plantões de 12\u00A0horas na UTI foi o único fator do trabalho que aumentou de forma independente as chances de problemas nos pés que incapacitam.',
        'Outro estudo, com 636\u00A0enfermeiras de hospital no Japão, encontrou que 51% relataram dor ou incapacidade nos pés no último mês, avaliadas com um questionário validado. A prevalência de dor que impedia o trabalho normal foi de 17%. Um estudo com rastreadores em enfermeiras coreanas encontrou uma média de 5,8\u00A0km andados por plantão, uma exigência física bem acima da população em geral.',
        'Um estudo transversal com 411\u00A0enfermeiras finlandesas encontrou que pele ressecada, dor nos pés e calos eram as queixas mais comuns nos pés, e que os problemas nos pés estavam associados a uma menor capacidade para o trabalho. Os autores pediram que a prevenção de problemas nos pés na enfermagem fosse uma prioridade.',
      ],
      cites: [CITE.changCho, CITE.reedNurse, CITE.tojo, CITE.stoltNurse],
    },
    {
      h2: 'Por que a enfermagem sente dor nos pés no plantão de 12 horas?',
      paragraphs: [
        'Três coisas se somam em um plantão: ficar muito tempo em pé, andar longas distâncias e chão duro. Ficar parado em pé põe carga na fáscia plantar, nos músculos da panturrilha e no coxim do calcanhar sem o bombeamento que a caminhada dá. Caminhar ajuda o sangue a voltar das pernas, mas na enfermagem você alterna sem previsão entre ficar parado ao lado de um leito e andar por corredores longos, então a bomba da panturrilha nunca entra num ritmo constante.',
        'Uma revisão de 2015 da literatura de saúde ocupacional associou ficar muito tempo em pé no trabalho a desconforto musculoesquelético, cansaço e dor nas pernas em muitas profissões em pé, e citou a enfermagem como um dos grupos de maior risco. A revisão observou que o esforço cardiovascular e o inchaço nas pernas aumentam com o tempo em pé.',
        'No nível dos tecidos, uma panturrilha tensa é uma peça-chave. Um estudo caso-controle com 50\u00A0pessoas com fascite plantar e 100\u00A0controles pareados encontrou que a flexibilidade reduzida do tornozelo, ou seja, o tornozelo não consegue dobrar para cima tanto quanto deveria porque a panturrilha está tensa, foi o fator de risco independente mais forte para fascite plantar, com chances 23,3\u00A0vezes maiores. Ficar em pé a maior parte do dia de trabalho multiplicou as chances por 3,6. **Na enfermagem, os dois fatores de risco aparecem juntos.**',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Quais exercícios ajudam a dor nos pés na enfermagem?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A, o mais alto, e ao treino de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios que ajudam são os mesmos que miram a fascite plantar e a dor nos pés de ficar em pé: alongamentos da panturrilha, um alongamento da fáscia plantar, elevação de calcanhar para a força da panturrilha e um exercício para o arco chamado pé curto. A diferença na enfermagem é encaixar tudo em volta dos turnos que mudam, não durante o plantão. **Alguns minutos antes ou depois do plantão bastam para cobrir os mais importantes.**',
        'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau máximo, A, e ao treino de força um B. Os dois graus são para fascite plantar especificamente, mas os tecidos envolvidos são os mesmos que recebem a carga durante um plantão. Se algum exercício levar a sua dor a 6 de 10 ou mais, pare por hoje.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha o grau A para fascite plantar. Uma panturrilha tensa foi o fator de risco mais forte em um estudo caso-controle de 2003.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar no chão e o quadril para a frente. Isso mira o gastrocnêmio, o músculo maior e mais superficial da panturrilha. Dá para fazer no repouso ou em qualquer parede.',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: {
            level: 'moderate',
            why: 'Mesmo apoio da diretriz que a versão com o joelho esticado. Mira o sóleo, o músculo mais profundo da panturrilha.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede, mas dobre o joelho de trás até sentir o alongamento mais embaixo, mais perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura alongando na parede com o joelho de trás dobrado, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar o grau A.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          how: 'Sente-se e cruze um pé sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Se o seu calcanhar fica pior nos primeiros passos do dia, faça este antes de os pés tocarem o chão de manhã.',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado até sentir no arco',
          alt: 'Uma figura sentada puxando para trás os dedos de um pé, com o arco destacado',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao treino de força o grau B para fascite plantar. Constrói a força da panturrilha que absorve o impacto durante o plantão.',
          },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões em cerca de três segundos e desça devagar em três segundos. Segure em uma parede ou corrimão para se equilibrar. Os detalhes deste exercício, incluindo como progredir e a versão com toalha, estão em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar: suba por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Pé curto, sentado',
          evidence: {
            level: 'early',
            why: 'Uma revisão de 2024 encontrou que o treino do pé curto mudou o formato do arco, mas não a dor. O Walkito o inclui como parte de um programa mais amplo.',
          },
          dose: '3\u00A0séries de 10, segurando 5\u00A0segundos, cada pé',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, sem dobrar os dedos. Isso treina os pequenos músculos dentro do arco que o sustentam durante um longo dia em pé.',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma perna sentada com o pé no chão, com o arco destacado enquanto sobe',
        },
        {
          name: 'Abrir os dedos',
          evidence: {
            level: 'early',
            why: 'Não faz parte dos programas testados nesta página. Mira os músculos intrínsecos do pé, que ficam apertados dentro do calçado de trabalho.',
          },
          dose: '3\u00A0séries de 10, segurando 5\u00A0segundos',
          how: 'Sente-se ou fique em pé e abra os cinco dedos o máximo que conseguir, depois segure. Depois de um plantão com um calçado justo, isso acorda os pequenos músculos entre os dedos.',
          media: 'toe_spread',
          caption: 'Abrir os dedos: afaste os cinco dedos e segure',
          alt: 'Um pé visto de cima com os dedos bem abertos',
        },
      ],
      table: {
        caption: 'Doses iniciais para dor nos pés na enfermagem',
        head: ['Exercício', 'Dose', 'Quando', 'O que você deve sentir'],
        rows: [
          ['Alongamento de panturrilha (joelho esticado)', '2 x 30\u00A0segundos, cada perna', 'Antes ou depois do plantão', 'Um alongamento na parte de cima da panturrilha'],
          ['Alongamento do sóleo (joelho dobrado)', '2 x 30\u00A0segundos, cada perna', 'Antes ou depois do plantão', 'Um alongamento na parte baixa da panturrilha, perto do calcanhar'],
          ['Alongamento da fáscia plantar', '2 x 30\u00A0segundos, cada pé', 'Antes do plantão ou ao acordar', 'Um alongamento ao longo do arco'],
          ['Elevação de calcanhar', '3 x 10, os dois pés', 'Na folga ou depois do plantão', 'As panturrilhas trabalhando, sem dor aguda'],
          ['Pé curto', '3 x 10 (segurando 5\u00A0segundos), cada pé', 'Na folga ou depois do plantão', 'O arco subindo, dedos relaxados'],
          ['Abrir os dedos', '3 x 10 (segurando 5\u00A0segundos)', 'Depois do plantão', 'Os dedos se abrindo, sem dor'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Como encaixar os exercícios em turnos que mudam?',
      paragraphs: [
        'Um plantão de 12\u00A0horas deixa pouco tempo para uma rotina de exercícios à parte, e alternar entre plantão diurno e noturno deixa a organização ainda mais difícil. Os alongamentos desta página levam cerca de 3\u00A0minutos, então o caminho mais simples é fazê-los logo antes ou logo depois do plantão, no mesmo ponto da sua rotina toda vez. Por exemplo, faça depois de calçar ou tirar o calçado de trabalho.',
        'Nas folgas, acrescente os exercícios de força: elevação de calcanhar e pé curto. Eles levam cerca de 5 a 10\u00A0minutos. Fazer o treino de força nas folgas, e não depois de um plantão puxado, dá à panturrilha e ao arco tempo de recuperação antes do próximo período em pé.',
        'Três sessões por semana é um bom ponto de partida. Se você faz três plantões de 12\u00A0horas com quatro dias de folga, dá para encaixar o treino de força em cada folga. Se você alterna entre plantão diurno e noturno, a hora do dia não importa. **O que importa é a regularidade, não o relógio.**',
      ],
    },
    {
      h2: 'O calçado da enfermagem faz diferença: tamanco, tênis ou outra coisa?',
      paragraphs: [
        'Calçado é um dos assuntos mais discutidos na enfermagem, mas a evidência a favor de um tipo em vez de outro é limitada. Uma avaliação de 2007 de três marcas de calçados profissionais para enfermagem encontrou que o calçado com palmilha mais amortecida e melhor apoio do arco reduziu o esforço muscular das pernas em comparação com os outros dois, mas o estudo era pequeno e específico dessas marcas.',
        'O que a pesquisa apoia de forma mais ampla é que o conforto do calçado importa. Em uma pesquisa com 125\u00A0enfermeiras de pronto-socorro e ambulatório, 72% das que relatavam pouco conforto no calçado também relatavam dor nos pés e no calcanhar, contra 28% das que relatavam muito conforto. A diretriz de 2023 para dor no calcanhar dá às órteses sozinhas um B contra para alívio da fascite plantar a curto prazo, o que significa que a evidência pende para não usá-las como opção isolada.',
        'Um caminho prático: escolha um calçado que sirva bem, tenha algum amortecimento e não aperte os dedos. Se você já tem dor no calcanhar ou no arco, os exercícios desta página miram os tecidos diretamente. **Calçados e palmilhas podem ajudar no conforto durante o plantão, mas não substituem o alongamento e o treino de força.**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Meias de compressão ajudam na dor nos pés e nas pernas na enfermagem?',
      keyFact: 'Em um ensaio com 40\u00A0seguranças em turnos de cerca de 12\u00A0horas em pé, as meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento do desconforto nos pés e nas pernas visto com meias comuns (Garcia e colegas, 2023).',
      paragraphs: [
        'As meias de compressão têm um dos estudos mais bem controlados por trás delas para o desconforto de ficar em pé. Em um ensaio randomizado com 40\u00A0seguranças em turnos de cerca de 12\u00A0horas em pé, os grupos das meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento significativo do desconforto, do cansaço e do inchaço nos pés e nas pernas visto no grupo que usou meias comuns. Os participantes muitas vezes disseram que a meia de pressão mais baixa era mais fácil de vestir.',
        'Um ensaio randomizado piloto com 20\u00A0estudantes de enfermagem comparou meias de compressão até o joelho e até a coxa, usadas em turnos de estágio clínico de 9\u00A0horas. Os dois grupos relataram alta satisfação, mas a amostra era pequena demais para mostrar diferenças claras de resultado entre os dois comprimentos.',
        'O ensaio de Garcia foi feito só com seguranças homens, não com profissionais de enfermagem, e nenhum dos dois estudos era grande. Mas as meias de compressão são uma das poucas intervenções específicas para quem fica em pé com evidência randomizada por trás.',
        'Uma revisão de saúde ocupacional de 2015 as coloca ao lado dos tapetes antifadiga e dos calçados com bom suporte como intervenções com alguma evidência para reduzir o desconforto no trabalho em pé prolongado. **Elas não substituem o alongamento nem o treino de força.** Elas controlam o inchaço e o cansaço, enquanto a panturrilha e a fáscia ainda precisam da sua própria atenção.',
      ],
      sourceNote:
        'Garcia e colegas (2023): desenho de grupos paralelos, 40\u00A0seguranças homens sorteados para três grupos (meias comuns, 15-20\u00A0mmHg, 20-30\u00A0mmHg), cada uma usada durante um turno de trabalho completo. Desconforto, cansaço e edema medidos antes e depois do turno.',
      cites: [CITE.garcia, CITE.waters],
    },
    {
      h2: 'O que fazer antes e depois do plantão em 3, 5 ou 10 minutos?',
      paragraphs: [
        {
          list: [
            '**Se você tem 3\u00A0minutos:** faça os dois alongamentos da panturrilha (joelho esticado e joelho dobrado, 30\u00A0segundos de cada lado). Isso cobre o fator de risco modificável mais forte, uma panturrilha tensa, e leva o mesmo tempo que amarrar o tênis.',
            '**Se você tem 5\u00A0minutos:** acrescente o alongamento da fáscia plantar (30\u00A0segundos em cada pé). Essa é a combinação que a diretriz de 2023 classifica com grau A para fascite plantar. Se o seu calcanhar fica pior nos primeiros passos do dia, faça o alongamento da fáscia antes de os pés tocarem o chão.',
            '**Se você tem 10\u00A0minutos:** acrescente a elevação de calcanhar (3\u00A0séries de 10) e o pé curto (3\u00A0séries de 10, segurando 5\u00A0segundos). Isso cobre o lado da força, com grau B na diretriz. Nas folgas, 10\u00A0minutos cobrem tudo o que está nesta página.',
          ],
        },
        '**A regularidade importa mais do que a duração.** Três minutos de alongamento da panturrilha em todo dia de plantão, sempre no mesmo ponto da rotina, são mais úteis do que uma sessão mais longa que você pula quando a escala muda.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'A dor nos pés depois do plantão pode ser fascite plantar ou outra coisa?',
      paragraphs: [
        'Dor e cansaço gerais depois de um plantão longo são comuns e costumam passar com descanso. A fascite plantar é um problema específico: dor aguda perto do calcanhar, pior nos primeiros passos depois de descansar (ao sair da cama, ao levantar depois de ficar muito tempo sentado). Se a sua dor segue esse padrão, os exercícios em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) são o guia mais completo, e os detalhes da elevação de calcanhar estão em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
        'Se os seus arcos parecem achatados ou caídos para dentro no fim do plantão, os exercícios para o arco em [exercícios para pé chato](/pt/exercicios-pe-chato/) miram os músculos que sustentam o arco. Dor ao longo da canela pode ser canelite. Dor no tendão de Aquiles, na parte de trás do calcanhar, é outro problema.',
        'Se a dor de ficar em pé é a sua principal dúvida e você não trabalha na enfermagem, [por que os pés doem depois de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) traz os mesmos exercícios para um público mais amplo. Para a versão deste problema com mesa em pé, veja [dor nos pés com mesa em pé](/pt/mesa-em-pe-dor-nos-pes/). **Se você não tem certeza do que está causando a dor, procure um profissional de saúde antes de pôr carga com exercício.**',
      ],
    },
  ],
  faq: [
    {
      q: 'Quantos passos a enfermagem anda em um plantão de 12 horas?',
      a: 'Em um estudo com rastreadores em enfermeiras de hospital na Coreia, a média foi de cerca de 9.360\u00A0passos por plantão, o que dá cerca de 5,8\u00A0km em 9,4\u00A0horas. Isso fica bem acima da média diária de passos dos adultos em geral, e andar o tempo todo em chão duro contribui muito para a dor nos pés na enfermagem.',
      cites: [CITE.changCho, CITE.tojo],
    },
    {
      q: 'Plantão de 12 horas é pior para os pés do que turno de 8 horas?',
      a: 'Em uma pesquisa com enfermeiras de um hospital pediátrico, fazer plantões de 12\u00A0horas na UTI foi o único fator do trabalho que aumentou de forma independente as chances de problemas nos pés e nos tornozelos que incapacitam. A carga total no pé aumenta com a duração do turno, e o tempo de recuperação entre os turnos é menor quando os próprios turnos são mais longos. Mesmo assim, o tipo de trabalho e o tipo de chão também importam, não só as horas.',
      cites: [CITE.reedNurse],
    },
    {
      q: 'Tamanco ou tênis: o que é melhor para dor nos pés na enfermagem?',
      a: 'Não existe um ensaio grande comparando tamancos de enfermagem com tênis em relação aos pés. O que a evidência apoia é que o conforto do calçado está muito ligado à dor nos pés: em uma pesquisa, 72% das enfermeiras que relatavam pouco conforto no calçado também relatavam dor nos pés e no calcanhar. Escolha um calçado que sirva bem, tenha algum amortecimento e não aperte os dedos. Só o calçado não substitui o alongamento e o treino de força desta página.',
    },
    {
      q: 'Meia de compressão ajuda no plantão longo?',
      a: 'Em um ensaio randomizado com 40\u00A0seguranças em turnos de 12\u00A0horas em pé, as meias de compressão de 15-20\u00A0mmHg e de 20-30\u00A0mmHg evitaram o aumento do desconforto e do inchaço visto com meias comuns. O ensaio não foi feito com profissionais de enfermagem, mas o mecanismo é o mesmo: a compressão ajuda o sangue a voltar da parte de baixo das pernas durante longos períodos em pé. A maioria dos participantes achou a meia de pressão mais baixa mais fácil de vestir.',
      cites: [CITE.garcia],
    },
    {
      q: 'Dor nos pés na enfermagem é algo com que você tem que conviver?',
      a: 'A dor nos pés de ficar em pé e andar é comum na enfermagem, mas “comum” não quer dizer inevitável. A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia o grau A e ao treino de força o grau B. As meias de compressão têm evidência randomizada para o desconforto de ficar em pé. Alguns minutos de alongamento da panturrilha antes ou depois de cada plantão, junto com treino de força nas folgas, miram os tecidos que mais sofrem.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'O trabalho na enfermagem pode causar fascite plantar?',
      a: 'Ficar em pé a maior parte do dia de trabalho multiplicou por 3,6 as chances de fascite plantar em um estudo caso-controle pareado com 50\u00A0casos e 100\u00A0controles. A flexibilidade reduzida do tornozelo multiplicou essas chances por 23,3. Na enfermagem, os dois fatores de risco aparecem, muito tempo em pé e pouco tempo de pausa para alongar, e é por isso que os exercícios desta página se sobrepõem tanto aos do guia de fascite plantar.',
      cites: [CITE.riddle],
    },
    {
      q: 'Qual a primeira coisa que quem trabalha na enfermagem deve fazer para dor nos pés?',
      a: 'Entre as opções vistas nesta página, alongar a panturrilha todos os dias tem o apoio mais forte da diretriz (grau A para fascite plantar) e mira o fator de risco modificável mais forte, uma panturrilha tensa. Leva cerca de 2\u00A0minutos, não precisa de equipamento e dá para fazer no repouso ou em casa. Acrescentar meias de compressão nos dias de plantão cobre o lado do inchaço e do cansaço.',
      cites: [CITE.guideline, CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão específica ou de uma queda no trabalho',
      'você não consegue apoiar o pé, ou está mancando',
      'o pé está dormente, formigando, queimando, inchado ou quente',
      'o calcanhar ou o pé está vermelho, ou você tem febre ou se sente mal',
      'a dor acorda você à noite',
      'a dor é aguda, ou está piorando mesmo com menos carga',
      'a dor fica em um único ponto e piora com a atividade, o que pode ser o padrão de uma fratura por estresse e não o cansaço de ficar em pé',
      'uma perna ou um pé inchou de repente e está dolorido, vermelho ou quente',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
      'a dor não melhorou depois de várias semanas com plantões mais leves, calçados melhores e os exercícios desta página',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text:
      'Você não precisa descobrir a ordem, as doses nem quando passar para uma versão mais difícil. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Se a sua dor nos pés segue o padrão de dor matinal da fascite plantar, a primeira meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a sua primeira meta for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver se o trabalho está fazendo efeito. Em turnos que mudam, a hora do dia não importa. O que importa é fazer as sessões com regularidade.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor for aguda, estiver piorando ou não deixar você dormir, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor nos pés na enfermagem',
  campaign: 'guide-nurses-pt',
};
