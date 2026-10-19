import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/foot-exercises-for-runners.ts
 * (2026-10-18), written around «exercícios para os pés corredores» and
 * «fortalecimento dos pés para corrida». Informal «você». Figures, doses,
 * hedges and sources are identical to the English page after its fact-check.
 * Same CITE keys and media ids. Exercise names follow lib/guides/pt.ts.
 * /heel-pain-runners/ has no Portuguese version, so those links are removed
 * and the words kept.
 */

export const RUNNERS_FOOT_EXERCISES_PT: Guide = {
  lang: 'pt',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Exercícios para os pés de corredores: rotina e evidências',
  description:
    'Exercícios para os pés de quem corre: rotina curta para arco, panturrilha, dedos e equilíbrio, com doses, referências e o que os estudos mostram.',
  h1: 'Exercícios para os pés de corredores: uma rotina curta e o que a pesquisa mostra',
  lede:
    'Uma boa rotina para os pés de quem corre treina quatro coisas: os pequenos músculos do arco (o exercício do pé curto), a resistência da panturrilha e do sóleo (elevação de calcanhar), a força dos dedos e o equilíbrio em uma perna. Leva cerca de 10\u00A0minutos, de duas a cinco vezes por semana, depois de uma corrida leve ou em um dia de descanso. Em um ensaio com 118\u00A0corredores amadores, quem não fez um programa para os músculos do pé teve 2,42\u00A0vezes mais chance de se lesionar correndo em 12\u00A0meses (Taddei e colegas, 2020). É um único ensaio, então leia como um resultado promissor, não como algo definido.',
  intro: [
    'Esta página é para corredores que não estão lesionados, ou que têm um incômodo que ainda permite continuar correndo. Se o seu calcanhar já dói quando você corre, cuide primeiro da dor no calcanhar. Para a progressão completa de cada exercício para os pés, de sentado até em uma perna, veja [exercícios para fortalecer os pés](/pt/exercicios-para-fortalecer-os-pes/).',
  ],
  toc: true,
  takeaways: [
    'Em um ensaio de 2020 com 118\u00A0corredores amadores de longa distância, o grupo sem treino dos músculos do pé teve 2,42\u00A0vezes mais chance de uma lesão de corrida em 12\u00A0meses. O efeito apareceu depois de cerca de quatro a oito meses de treino (Taddei e colegas, 2020).',
    'Em um ensaio de 2019 com 57\u00A0corredores, cerca de dois meses de exercícios para os pés feitos pelo menos cinco vezes por semana deixaram maiores e mais fortes todos os músculos do pé que foram medidos (Ridge e colegas, 2019).',
    'Adultos saudáveis fazem uma mediana de cerca de 23 a 24 elevações de calcanhar em uma perna para cada lado, e 25 já foi proposto como referência de normal (Hebert-Losier e colegas, 2017; Lunsford e Perry, 1995).',
    'Um programa de força feito por conta própria para quadril, coxas e core, em 720\u00A0pessoas correndo a primeira maratona, não reduziu as lesões por sobrecarga que impediram os corredores de terminar a prova: 7,1% contra 7,3% (Toresdahl e colegas, 2020). Nesse estudo, o trabalho de força sozinho não preveniu lesões.',
    'Nos estudos com corredores de longa distância, entre 19,4% e 79,3% tiveram uma lesão na perna, e uma lesão anterior foi um dos fatores de risco mais claros (van Gent e colegas, 2007).',
  ],
  sections: [
    {
      h2: 'Exercícios para os pés ajudam corredores a evitar lesões?',
      keyFact: 'Em um ensaio de 2020 com 118\u00A0corredores amadores, quem não treinou os músculos do pé teve 2,42\u00A0vezes mais chance de se lesionar em 12\u00A0meses (Taddei e colegas).',
      paragraphs: [
        '**Um bom ensaio diz que sim, e ainda é só um ensaio.** Em 2020, Taddei e colegas, no Brasil, dividiram por sorteio 118\u00A0corredores amadores de longa distância em um grupo com treino dos músculos do pé (57\u00A0corredores) e um grupo controle (61\u00A0corredores). O grupo do pé fez cerca de dois meses de treino supervisionado dos músculos do pé e do tornozelo e depois continuou com supervisão a distância. Todos registraram toda semana as corridas e qualquer lesão, durante um ano.',
        'Em 12\u00A0meses, o grupo controle teve 2,42\u00A0vezes mais chance de uma lesão de corrida. A diferença apareceu depois de quatro a oito meses de treino, não nas primeiras semanas. Os corredores cuja força do pé mais aumentou demoraram mais para ter uma lesão.',
        'Um ensaio anterior e menor da mesma equipe, com 28\u00A0corredores, encontrou que cerca de dois meses de treino dos pés aumentaram os pequenos músculos do pé e a força de impulsão durante a corrida (Taddei e colegas, 2020).',
        'O que isso não mostra: os dois ensaios vêm de um único grupo de pesquisa, com corredores amadores experientes que não estavam lesionados no início. Os ensaios não incluíram iniciantes nem corredores que já tinham dor, então não sabemos se os resultados valem para eles.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): grupo controle com 2,42\u00A0vezes mais chance de lesão relacionada à corrida (IC 95% de 1,98 a 3,62), p = 0,035, ensaio randomizado simples-cego, acompanhamento de 12\u00A0meses. Taddei 2020 (Phys Ther Sport): ensaio randomizado piloto simples-cego, 28\u00A0corredores, volume muscular por ressonância magnética, depois de cerca de dois meses.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'O que deve ter na rotina para os pés de um corredor?',
      paragraphs: [
        'Quatro partes, cada uma com um ou dois exercícios. As doses abaixo são as doses iniciais do Walkito. Faça descalço e, se a dor passar de 6/10, pare por hoje.',
        {
          list: [
            '**Músculos do pé:** o [pé curto](/pt/exercicios/pe-curto/), primeiro em pé e depois em uma perna. Ele treina os pequenos músculos que sustentam o arco.',
            '**Panturrilha e sóleo:** elevação de calcanhar com o joelho esticado para a panturrilha, e com o joelho dobrado para o sóleo, o músculo mais profundo da panturrilha.',
            '**Dedos:** elevação do dedão. O dedão é a última parte do pé a sair do chão quando você dá impulso.',
            '**Equilíbrio:** equilíbrio em uma perna, porque correr é uma sequência de aterrissagens em uma perna só.',
          ],
        },
        'Isso segue a ideia do programa de Taddei, que treinava primeiro os pequenos músculos do pé e depois os usava em pé e com carga. Não é uma cópia desse programa. Para mais trabalho com os dedos, veja [exercícios para fortalecer os dedos do pé](/pt/exercicios-para-fortalecer-os-dedos-do-pe/).',
      ],
      exercises: [
        {
          name: 'Pé curto, em pé',
          evidence: { level: 'moderate', why: 'Fez parte do programa para os músculos do pé nos ensaios com corredores (Taddei 2020). Não foi testado sozinho para lesões.' },
          dose: '3\u00A0séries de 10, segure 5\u00A0segundos, os dois pés',
          often: 'De 2 a 5\u00A0dias por semana',
          feel: 'Uma contração embaixo do arco, com os dedos relaxados',
          how: 'Fique em pé com o peso nos dois pés. Sem dobrar os dedos, puxe a parte da frente do pé em direção ao calcanhar para o arco subir um pouco. Segure e depois relaxe. Se os dedos agarrarem o chão, diminua o esforço.',
          stop: 'Câimbra que não passa, ou dor acima de 6/10',
          media: 'short_foot_double',
          caption: 'Pé curto, em pé: o arco sobe, os dedos ficam apoiados',
          alt: 'Dois pés descalços no chão com os arcos subindo e os dedos apoiados',
        },
        {
          name: 'Pé curto, em uma perna',
          evidence: { level: 'early', why: 'A etapa em uma perna da progressão do pé curto. Não foi testado sozinho em corredores.' },
          dose: '3\u00A0séries de 10, segure 5\u00A0segundos, cada pé',
          often: 'Quando a versão em pé ficar fácil',
          feel: 'O arco trabalhando enquanto você se equilibra',
          how: 'Fique em um pé só, com uma mão perto da parede. Suba o arco como acima e mantenha enquanto se equilibra. Isso fica mais perto do que o pé faz quando você aterrissa.',
          stop: 'Dor acima de 6/10, ou você perde o equilíbrio em todas as repetições',
          media: 'short_foot_single',
          caption: 'Pé curto em uma perna: mantenha o arco enquanto se equilibra',
          alt: 'Uma figura em pé sobre um pé descalço com o arco elevado',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'early', why: 'A resistência da panturrilha era menor em atletas com canelite (Madeley 2007). Não foi testada como prevenção de lesões em corredores.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'De 2 a 3\u00A0dias por semana, nunca dois dias seguidos',
          feel: 'Trabalho nas panturrilhas e na parte da frente da sola',
          how: 'Apoie-se na parede. Suba na ponta dos pés em cerca de 3\u00A0segundos, com o peso mais para o lado do dedão, e desça em 3\u00A0segundos. Quando ficar fácil, passe para uma perna. Mais na página de [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/).',
          stop: 'Dor no calcanhar ou no Aquiles acima de 6/10, ou pior na manhã seguinte',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar: suba devagar, desça devagar, peso sobre o dedão',
          alt: 'Uma figura apoiada na parede subindo na ponta dos dois pés',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'early', why: 'Trabalha o sóleo com o joelho dobrado. Não foi testada sozinha em corredores.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'De 2 a 3\u00A0dias por semana',
          feel: 'Trabalho na parte baixa da panturrilha',
          how: 'Sente-se com os pés apoiados e empurre para cima com a parte da frente dos pés. Com o joelho dobrado, o sóleo faz a maior parte do trabalho. Uma mochila ou pesos sobre os joelhos aumentam a carga quando ficar fácil.',
          stop: 'Dor acima de 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: joelho dobrado para trabalhar o sóleo',
          alt: 'Uma figura sentada levantando os dois calcanhares, com a parte baixa das panturrilhas destacada',
        },
        {
          name: 'Elevação do dedão',
          evidence: { level: 'early', why: 'Um estudo com ressonância magnética mostra que ativa os pequenos músculos do pé (Gooding 2016). Não foi testada sozinha em um ensaio de resultados.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'De 2 a 5\u00A0dias por semana',
          feel: 'Esforço no peito do pé e embaixo do arco',
          how: 'Mantenha os quatro dedos menores no chão e levante só o dedão. Depois tente o contrário: dedão no chão, dedos menores para cima. No começo, um movimento pequeno já basta.',
          stop: 'Dor na articulação do dedão',
          media: 'big_toe_lift',
          caption: 'Elevação do dedão: só o dedão sobe',
          alt: 'Um pé descalço com o dedão levantado e os outros dedos apoiados',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Faz parte da maioria dos programas para os pés. Não foi testado sozinho como prevenção de lesões em corredores.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada lado',
          often: 'De 2 a 5\u00A0dias por semana',
          feel: 'Pequenas correções no pé e no tornozelo',
          how: 'Fique em um pé só, joelho levemente dobrado, perto de uma parede. Quando 30\u00A0segundos ficarem fáceis, feche os olhos ou fique em cima de uma almofada. Mais na página de [equilíbrio em uma perna](/pt/exercicios/equilibrio-uma-perna/).',
          stop: 'Você não consegue se manter sem se segurar na parede',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: joelho levemente dobrado, parede ao alcance da mão',
          alt: 'Uma figura em pé em uma perna ao lado de uma parede',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: 'Por que corredores precisam de força na panturrilha e no sóleo?',
      keyFact: 'Até cerca de 7\u00A0metros por segundo, correr mais rápido vem principalmente de empurrar o chão com mais força, e o sóleo e o gastrocnêmio têm um papel central nesse impulso (Schache e colegas, 2014).',
      paragraphs: [
        '**Os músculos da panturrilha fazem boa parte do impulso na corrida.** Uma revisão de 2014 sobre como os músculos da perna trabalham na corrida encontrou que, em velocidades de até cerca de 7\u00A0metros por segundo, o que cobre quase toda a corrida amadora, os corredores ficam mais rápidos principalmente empurrando o chão com mais força para dar uma passada mais longa. Os dois músculos da panturrilha, o sóleo e o gastrocnêmio, têm um papel especialmente importante nesse impulso (Schache e colegas, 2014).',
        'O sóleo fica embaixo do gastrocnêmio e trabalha mais quando o joelho está dobrado, por isso a rotina tem uma elevação de calcanhar sentada, com o joelho dobrado, além da versão em pé. Se as suas panturrilhas costumam ficar tensas depois das corridas, [panturrilha tensa](/pt/panturrilha-tensa/) fala de alongamento e do [alongamento do sóleo](/pt/exercicios/alongamento-soleo/).',
        'A resistência da panturrilha também aparece na dor na canela. Em um estudo de caso-controle, atletas com canelite fizeram menos elevações de calcanhar até a fadiga do que atletas sem canelite (Madeley e colegas, 2007). Isso mostra uma associação, não que panturrilhas fracas causem canelite. Mais em [canelite: exercícios](/pt/canelite-exercicios/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: 'Quantas elevações de calcanhar um corredor deve conseguir fazer?',
      keyFact: 'Em 566\u00A0adultos de 20 a 81\u00A0anos, a mediana foi de 24\u00A0elevações de calcanhar em uma perna na direita e 23 na esquerda (Hebert-Losier e colegas, 2017).',
      paragraphs: [
        'Não existe uma referência específica para corredores, então use os números gerais de adultos como piso. Em um estudo com 566\u00A0adultos, a mediana foi de 24\u00A0elevações de calcanhar em uma perna na perna direita e 23 na esquerda, no ritmo de uma batida para subir e uma para descer a 60\u00A0batidas por minuto. Os números caem com a idade, e as pessoas mais ativas fizeram mais (Hebert-Losier e colegas, 2017). Um estudo mais antigo propôs 25 como referência de normal (Lunsford e Perry, 1995).',
        'Compare também as duas pernas. Uma diferença de mais de 10% entre os lados é o limite usual para uma diferença relevante na reabilitação dos membros inferiores (Silbernagel e colegas, 2010). O protocolo completo, uma versão para fazer em casa e uma calculadora estão na página do [teste de elevação de calcanhar](/pt/teste-elevacao-calcanhar/).',
      ],
      table: {
        caption: 'Mediana de elevações de calcanhar em uma perna por idade, atividade moderada (Hebert-Losier 2017)',
        head: ['Idade', 'Homens', 'Mulheres'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'São estimativas de um modelo para um adulto moderadamente ativo com índice de massa corporal de 24,2, não linhas de aprovado ou reprovado. Refaça o teste a cada poucas semanas e acompanhe a tendência e a diferença entre esquerda e direita.',
      ],
      sourceNote: 'Hebert-Losier 2017, Tabela 4: estimativas do modelo para IMC 24,2 e nível de atividade física 4, média das duas pernas, arredondadas. Lunsford e Perry 1995: 203\u00A0adultos de 20 a 59\u00A0anos.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Quando e com que frequência corredores devem fazer exercícios para os pés?',
      paragraphs: [
        '**Nenhum estudo comparou fazer exercícios para os pés depois de uma corrida com fazer em um dia de descanso,** então os horários abaixo são práticos, não testados.',
        {
          list: [
            '**Depois de uma corrida leve ou em um dia de descanso.** Os exercícios cansam os pequenos músculos do pé, então combinam mais com depois de uma corrida curta e leve do que com antes de um treino forte ou de um longão.',
            '**Não logo antes de um treino de velocidade ou de uma prova.** Nesses casos você quer as panturrilhas descansadas.',
            '**Elevação de calcanhar de 2 a 3\u00A0dias por semana,** com um dia de folga entre elas, como qualquer trabalho de força.',
            '**Músculos do pé, dedos e equilíbrio de 2 a 5\u00A0dias por semana.** No ensaio de 2019, os corredores fizeram exercícios para os pés pelo menos cinco vezes por semana e ganharam força em cerca de dois meses (Ridge e colegas, 2019).',
          ],
        },
        'Dê tempo ao tempo. O tamanho dos músculos mudou em cerca de dois meses nos ensaios, mas a queda nas lesões no ensaio de Taddei só apareceu depois de quatro a oito meses. Uma rotina que você mantém por meses vale mais do que uma rotina pesada que você abandona depois de três semanas.',
      ],
      table: {
        caption: 'Um exemplo de semana para um corredor',
        head: ['Dia', 'Corrida', 'Rotina para os pés'],
        rows: [
          ['Seg', 'Descanso', 'Rotina completa'],
          ['Ter', 'Velocidade', 'Nenhuma'],
          ['Qua', 'Leve', 'Músculos do pé, dedos, equilíbrio'],
          ['Qui', 'Descanso', 'Rotina completa'],
          ['Sex', 'Leve', 'Músculos do pé, equilíbrio'],
          ['Sáb', 'Longão', 'Nenhuma'],
          ['Dom', 'Leve ou descanso', 'Rotina completa'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: 'Dá para fazer exercícios para os pés com um incômodo?',
      paragraphs: [
        'Normalmente sim, se o incômodo for leve e estável, e se você fizer ajustes. Use a mesma regra do resto do site: algum desconforto não tem problema, mas pare por hoje se a dor passar de 6/10, e pegue mais leve se estiver pior na manhã seguinte.',
        'Alguns incômodos mudam o plano:',
        {
          list: [
            '**Dor no calcanhar nos primeiros passos da manhã** sugere fascite plantar. Nesse caso, a elevação de calcanhar e os alongamentos contam mais: veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
            '**Dor na parte de trás do calcanhar ou no tendão de Aquiles** pede um plano de panturrilha mais gradual, muitas vezes com descidas lentas do calcanhar: veja [tendinite de Aquiles: exercícios](/pt/tendinite-de-aquiles-exercicios/).',
            '**Dor ao longo da parte interna da canela** pode ser canelite: veja [canelite: exercícios](/pt/canelite-exercicios/).',
            '**Dor em um ponto específico de um osso** que aumenta a cada corrida é um sinal de alerta de fratura por estresse. Pare de correr e procure avaliação.',
          ],
        },
      ],
    },
    {
      h2: 'O que os exercícios para os pés não fazem',
      paragraphs: [
        '**Eles não substituem um treino bem planejado.** Nos estudos com corredores de longa distância, entre 19,4% e 79,3% tiveram uma lesão na perna, e uma quilometragem semanal alta nos homens e uma lesão anterior estavam entre os fatores de risco mais claros (van Gent e colegas, 2007). Em um estudo dinamarquês com 874\u00A0corredores iniciantes, quem aumentou a quilometragem semanal em mais de 30% pareceu mais propenso a algumas lesões por sobrecarga, embora o resultado tenha ficado um pouco abaixo da significância estatística (Nielsen e colegas, 2014).',
        '**Trabalho de força não é proteção automática.** Em um ensaio com 720\u00A0pessoas que iam correr a Maratona de Nova York pela primeira vez, um programa de 10\u00A0minutos feito por conta própria para quadril, coxas e core, três vezes por semana durante cerca de três meses, não reduziu as lesões por sobrecarga que impediram os corredores de terminar a maratona: 7,1% no grupo de força contra 7,3% nos demais (Toresdahl e colegas, 2020). Esse programa não treinava os pés, mas lembra que uma rotina no papel não é o mesmo que um resultado.',
        '**Eles mudam o formato do arco só um pouco.** Em um estudo pequeno com 21\u00A0pessoas e sem grupo controle, o arco afundou 1,8\u00A0mm a menos depois de um mês de treino do pé curto (Mulligan e Cook, 2013). Espere um pé mais forte e mais firme, não um arco novo. Tênis e corrida descalço são outra questão, tratada em [calçados barefoot](/pt/calcados-barefoot/).',
      ],
      sourceNote: 'Toresdahl 2020: randomizado, 720\u00A0participantes, risco relativo 0,97 (IC 95% de 0,57 a 1,63), p = 0,90. O programa focava quadríceps, abdutores do quadril e core, com instruções por escrito e em vídeo.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: 'Quais são os melhores exercícios para os pés de corredores?',
      cites: [CITE.taddeiRRI],
      a: 'Uma série curta que cubra quatro coisas: o pé curto para o arco, elevação de calcanhar com o joelho esticado e dobrado para a panturrilha e o sóleo, elevação do dedão para o impulso e equilíbrio em uma perna. Um programa para os músculos do pé baseado na mesma ideia reduziu as lesões de corrida em um ensaio com 118\u00A0corredores.',
    },
    {
      q: 'Exercícios para fortalecer os pés previnem lesões de corrida?',
      cites: [CITE.taddeiRRI],
      a: 'Podem prevenir. Em um ensaio de 2020 com 118\u00A0corredores amadores, o grupo sem treino dos músculos do pé teve 2,42\u00A0vezes mais chance de se lesionar em 12\u00A0meses, com o efeito aparecendo depois de quatro a oito meses. É um único ensaio de um único grupo de pesquisa, então a evidência é promissora, mas não definitiva.',
    },
    {
      q: 'Com que frequência corredores devem fazer exercícios para os pés?',
      cites: [CITE.ridgeMinimalist],
      a: 'De dois a cinco dias por semana para o trabalho de músculos do pé, dedos e equilíbrio, e de dois a três dias por semana para a elevação de calcanhar, com um dia de folga entre eles. Em um ensaio de 2019, corredores que fizeram exercícios para os pés pelo menos cinco vezes por semana ganharam força em cerca de dois meses.',
    },
    {
      q: 'É melhor fazer exercícios para os pés antes ou depois de correr?',
      a: 'Depois de uma corrida leve ou em um dia de descanso é a escolha prática, porque os exercícios cansam os pequenos músculos do pé. Nenhum estudo comparou os horários. Evite a rotina completa logo antes de um treino de velocidade, de um longão ou de uma prova, quando você quer pés e panturrilhas descansados.',
    },
    {
      q: 'Quantas elevações de calcanhar em uma perna um corredor deve fazer?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'Não existe um número específico para corredores. Adultos saudáveis fazem uma mediana de cerca de 23 a 24 por perna em um ritmo fixo, e 25 já foi proposto como normal. Muitos corredores ativos fazem mais. Uma diferença de mais de 10% entre as pernas vale a pena acompanhar. A página do teste de elevação de calcanhar tem o protocolo completo.',
    },
    {
      q: 'Quanto tempo leva para os exercícios para os pés fazerem diferença?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Os músculos do pé ficaram maiores e mais fortes em cerca de dois meses nos ensaios. A queda nas lesões no ensaio com corredores demorou mais, aparecendo depois de quatro a oito meses. Planeje manter uma rotina curta por meses, não por semanas.',
    },
    {
      q: 'Posso continuar correndo enquanto faço os exercícios para os pés?',
      a: 'Sim. A rotina foi pensada para andar junto com a sua corrida. Se você tem um incômodo, pare o exercício por hoje se a dor passar de 6/10, e faça só corridas leves se a dor estiver pior na manhã seguinte. Dor que aumenta a cada corrida, ou que fica em um ponto específico de um osso, precisa de avaliação de um profissional de saúde.',
    },
    {
      q: 'Correr descalço ou com tênis minimalista fortalece os pés?',
      cites: [CITE.ridgeMinimalist],
      a: 'Em um ensaio de 2019 com corredores, caminhar com calçados minimalistas, com um aumento lento e gradual, fortaleceu os pés mais ou menos tanto quanto os exercícios. Trocar o tênis de corrida de uma vez é outra história e tem seus próprios riscos, então, se for tentar, aumente aos poucos.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor fica em um ponto específico de um osso do pé ou da canela e piora a cada corrida, o que pode ser uma fratura por estresse',
      'você não consegue apoiar o peso no pé, ou manca ao andar',
      'a dor começou com um estalo, uma queda ou uma torção no tornozelo',
      'o pé ou o tornozelo está inchado, vermelho ou quente, ou você tem febre',
      'você sente dormência, formigamento ou queimação no pé',
      'o calcanhar ou o pé dói à noite ou em repouso',
      'a dor continua piorando por duas a três semanas mesmo com corridas mais leves',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para calcanhar e pés com os exercícios desta página: o pé curto de sentado até em uma perna, elevação de calcanhar, elevação do dedão, abrir os dedos e equilíbrio em uma perna. Ele não planeja as suas corridas, então mantenha o seu próprio plano de treino e encaixe as sessões nos dias leves.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você avalia como estão os seus pés, e o plano se ajusta. Um teste curto a cada 14\u00A0dias verifica elevação de calcanhar, sustentação do arco e equilíbrio, esquerda contra direita. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Exercícios para os pés de corredores',
  campaign: 'guide-foot-exercises-for-runners-pt',
};
