import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/standing-desk.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». «Mesa em pé» is used throughout, with the
 * English «standing desk» given once in the title and lede because many
 * Brazilian searches use it. Figures, doses and qualifiers are identical to
 * the English page. Exercise names follow `lib/guides/pt.ts`.
 */

export const STANDING_DESK_PT: Guide = {
  lang: 'pt',
  page: 'standingDesk',
  mainSource: CITE.buckley,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor nos pés com mesa em pé (standing desk): o que ajuda',
  description:
    'Por que os pés doem com a mesa em pé, quanto tempo ficar em pé antes de sentar, tapete antifadiga e exercícios para fazer na própria mesa.',
  h1: 'Dor nos pés com mesa em pé: por que acontece e o que ajuda',
  lede:
    'Trocar para uma mesa em pé (standing desk) deveria fazer bem, mas os seus pés e pernas podem discordar nas primeiras semanas. A dor nos pés com mesa em pé normalmente vem de ficar tempo demais na mesma posição, não da mesa em si. A pesquisa aponta para períodos mais curtos em pé, um tapete, o calçado certo e alguns exercícios que você faz sem sair da mesa.',
  intro: [
    'Uma revisão sistemática de 2017 de estudos de laboratório encontrou que sintomas clinicamente relevantes na lombar e nas pernas aparecem depois de cerca de 40\u00A0minutos em pé sem interrupção. Uma declaração de especialistas de 2015 recomenda chegar aos poucos a 2\u00A0horas em pé e em atividade leve por dia de trabalho, e com o tempo progredir para 4\u00A0horas, divididas em períodos mais curtos em vez de um bloco longo. Esta página mostra a pesquisa e os passos práticos.',
  ],
  toc: true,
  takeaways: [
    'Uma revisão sistemática de 2017 de 25\u00A0estudos de laboratório encontrou que sintomas musculoesqueléticos clinicamente relevantes apareciam depois de cerca de 40\u00A0minutos em pé sem interrupção, ou 42\u00A0minutos em pessoas com tendência a dor nas costas. Os autores recomendaram não ficar em pé sem parar por mais de 40\u00A0minutos (Coenen e colegas, 2017).',
    'Uma declaração de especialistas de 2015 encomendada pela Public Health England recomenda acumular no início 2\u00A0horas por dia em pé e em atividade leve durante o trabalho, e com o tempo progredir para 4\u00A0horas por dia, divididas em períodos mais curtos (Buckley e colegas, 2015).',
    'Uma revisão sistemática de 2014 de 14\u00A0estudos encontrou evidência suficiente de que as estações de trabalho que alternam sentado e em pé reduzem o desconforto lombar, sem queda de produtividade, mas não encontrou uma proporção ideal entre tempo sentado e em pé (Karakolis e Callaghan, 2014).',
    'Uma revisão de 2015 da pesquisa em saúde ocupacional associou ficar muito tempo em pé a desconforto musculoesquelético, cansaço e dor nas pernas, e colocou tapetes antifadiga, meias de compressão e calçados com bom suporte entre as intervenções com alguma evidência (Waters e Dick, 2015).',
    'A flexibilidade reduzida do tornozelo, ou seja, uma panturrilha tensa, foi o preditor mais forte de fascite plantar em um estudo caso-controle de 2003, com 23,3\u00A0vezes a chance. Ficar em pé a maior parte do dia de trabalho aumentou a chance em 3,6\u00A0vezes (Riddle e colegas, 2003).',
  ],
  sections: [
    {
      h2: 'Por que os pés doem com a mesa em pé?',
      keyFact: 'Uma revisão sistemática de 2017 de 25\u00A0estudos encontrou que os sintomas lombares ficavam clinicamente relevantes depois de cerca de 71\u00A0minutos em pé na população em geral, mas só 42\u00A0minutos em pessoas com tendência a dor em pé (Coenen e colegas, 2017).',
      paragraphs: [
        'A dor nos pés com mesa em pé acontece pelo mesmo motivo que qualquer tempo longo em pé dói: os pés, as panturrilhas e a parte de baixo das pernas carregam uma carga parada sem o alívio que caminhar ou sentar dá. Quando você fica parado em pé, a gravidade acumula sangue na parte de baixo das pernas, os músculos da panturrilha ficam na mesma posição sem contrair e relaxar, e a fáscia plantar embaixo do arco absorve uma carga constante.',
        'Uma revisão sistemática de 2017 de 25\u00A0estudos de laboratório juntou os dados de 591\u00A0participantes e encontrou que níveis clinicamente relevantes de sintomas lombares apareciam depois de cerca de 71\u00A0minutos em pé sem interrupção na população em geral, mas só 42\u00A0minutos em pessoas que costumam sentir dor em pé. Para os sintomas nas pernas, o quadro foi parecido. Os autores recomendaram um limite de 40\u00A0minutos como teto prático antes de interromper o tempo em pé.',
        'Uma revisão de 2015 da literatura de saúde ocupacional confirmou a associação entre ficar muito tempo em pé e desconforto musculoesquelético, cansaço e dor nas pernas em muitos tipos de trabalho em pé. A revisão também encontrou que o esforço cardiovascular e o inchaço nas pernas aumentam com o tempo em pé.',
      ],
      cites: [CITE.coenen, CITE.waters],
    },
    {
      h2: 'Quanto tempo ficar em pé na mesa antes de sentar?',
      keyFact: 'Uma declaração de especialistas de 2015 recomenda chegar aos poucos a 2\u00A0horas por dia em pé e em atividade leve, e com o tempo progredir para 4\u00A0horas, divididas em períodos mais curtos (Buckley e colegas, 2015).',
      paragraphs: [
        'Não existe uma resposta única que sirva para todo mundo, mas a pesquisa estreita as opções. Uma declaração de especialistas de 2015 encomendada pela Public Health England e pela Active Working Community Interest Company recomendou que quem trabalha sentado comece acumulando 2\u00A0horas por dia em pé e em atividade leve no horário de trabalho, e com o tempo progrida para 4\u00A0horas por dia. A declaração especificou que o tempo em pé deve ser dividido em períodos mais curtos, não feito num bloco só.',
        'A revisão de 2017 de estudos de laboratório sugere que 40\u00A0minutos em pé sem parar é o ponto em que os sintomas começam a ficar clinicamente relevantes. Juntando as duas coisas, um ponto de partida prático é ficar 20 a 30\u00A0minutos em pé, 20 a 30\u00A0minutos sentado, e repetir ao longo do dia, ajustando conforme o corpo se adapta.',
        'Uma revisão sistemática de 2014 de 14\u00A0estudos sobre estações de trabalho que alternam sentado e em pé encontrou evidência suficiente de que elas reduzem o desconforto lombar, sem queda de produtividade. A revisão não encontrou uma proporção ideal entre sentado e em pé, e os autores observaram que a melhor proporção provavelmente varia de pessoa para pessoa e de trabalho para trabalho. O que a evidência apoia é alternar, não uma regra fixa.',
      ],
      sourceNote:
        'Buckley e colegas (2015): consenso de um painel internacional de especialistas, encomendado pela Public Health England. Coenen e colegas (2017): revisão sistemática de 25\u00A0estudos de laboratório, 591\u00A0participantes, análise combinada de dose-resposta. Karakolis e Callaghan (2014): revisão sistemática de 14\u00A0estudos sobre estações de trabalho que alternam sentado e em pé.',
      cites: [CITE.buckley, CITE.coenen, CITE.karakolis],
    },
    {
      h2: 'Tapete antifadiga ajuda na dor nos pés com mesa em pé?',
      paragraphs: [
        'Os tapetes antifadiga têm alguma evidência por trás. A revisão de saúde ocupacional de 2015 coloca os tapetes entre as intervenções com evidência para reduzir o desconforto quando se fica muito tempo em pé. Um estudo cruzado com 38\u00A0membros de equipes cirúrgicas encontrou que ficar em pé sobre um tapete antifadiga de borracha de 15\u00A0mm durante os procedimentos resultou em notas de dor e de cansaço significativamente menores do que ficar em pé no piso comum.',
        'O mecanismo é simples: uma superfície mais macia deixa os pés fazerem pequenos ajustes e tira um pouco da carga que um chão duro concentra no calcanhar e na parte da frente do pé. Uma revisão sistemática de 2018 sobre materiais de amortecimento para quem fica muito tempo em pé observou resultados consistentes de menos desconforto, embora os estudos fossem pequenos e o benefício fosse de conforto, não de prevenção de um problema específico.',
        'Um tapete sozinho não vai resolver a dor nos pés, mas é uma das coisas mais simples de experimentar. Se você já tem uma mesa em pé e os seus pés doem, um tapete junto com períodos mais curtos em pé e os exercícios desta página cobre o principal.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Que calçado usar na mesa em pé?',
      paragraphs: [
        'Se você trabalha em casa, talvez fique em pé na mesa de meia ou de chinelo. São muitas horas sem nenhum amortecimento ou apoio para o arco. A diretriz de 2023 para dor no calcanhar dá às órteses sozinhas um B contra para fascite plantar, o que significa que a evidência pende para não usá-las como opção isolada, mas isso fala de palmilhas isoladas, não de se qualquer calçado é melhor do que nenhum.',
        'Um caminho razoável: use um calçado com algum amortecimento e uma palmilha com suporte enquanto estiver em pé, mesmo em casa. Você não precisa de um calçado especial para mesa em pé. Se você alterna entre ficar em pé e sentado, pode tirar o calçado nos períodos sentado. Os exercícios desta página miram os tecidos diretamente. Calçados e tapetes ajudam no conforto em pé, mas não substituem o alongamento e o treino de força.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Que exercícios fazer na mesa para a dor nos pés de ficar em pé?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A, o mais alto, e ao treino de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Estes exercícios miram a panturrilha, a fáscia plantar e os pequenos músculos do pé. Alguns dá para fazer na mesa durante uma pausa sentado. Outros ficam melhores longe da mesa, em outro momento. Se algum exercício levar a sua dor a 6 de 10 ou mais, pare por hoje.',
        'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau máximo, A, e ao treino de força um B. Os dois são para fascite plantar especificamente, mas os mesmos tecidos recebem a carga no trabalho com mesa em pé. Para a lista completa de exercícios para fascite plantar, veja [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha o grau A. Uma panturrilha tensa foi o fator de risco mais forte para fascite plantar em um estudo caso-controle de 2003.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Dê um passo para trás da mesa, apoie as mãos na borda da mesa ou numa parede e mantenha a perna de trás esticada, com o calcanhar no chão. Isso mira o gastrocnêmio, o músculo maior e mais superficial da panturrilha. Dá para fazer na hora de passar de em pé para sentado.',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, mãos na mesa ou na parede',
          alt: 'Uma figura apoiada numa mesa com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: {
            level: 'moderate',
            why: 'Mesmo apoio da diretriz. Mira o sóleo, o músculo mais profundo da panturrilha, que só solta com o joelho dobrado.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição, mas dobre o joelho de trás até sentir o alongamento mais embaixo, mais perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura alongando na mesa com o joelho de trás dobrado, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar sentado',
          evidence: {
            level: 'early',
            why: 'A elevação de calcanhar sentado põe carga no sóleo com menos exigência geral do que as versões em pé. Não foi testada especificamente para a dor com mesa em pé.',
          },
          dose: '3\u00A0séries de 15, os dois pés',
          how: 'Sente-se à mesa com os pés apoiados no chão. Levante os dois calcanhares o mais alto que conseguir, segure um segundo e desça devagar. Isso trabalha o sóleo, o músculo mais profundo da panturrilha, e dá para fazer em qualquer pausa sentado sem sair da cadeira.',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentado: levante os dois calcanhares, segure e desça devagar',
          alt: 'Uma figura sentada levantando os dois calcanhares do chão, com as panturrilhas destacadas',
        },
        {
          name: 'Abrir os dedos',
          evidence: {
            level: 'early',
            why: 'Mira os músculos intrínsecos do pé. Não faz parte dos programas testados nesta página.',
          },
          dose: '3\u00A0séries de 10, segurando 5\u00A0segundos',
          how: 'Sente-se à mesa e abra os cinco dedos o máximo que conseguir, depois segure. Isso ativa os pequenos músculos entre os dedos, que ficam apertados dentro do calçado enquanto você está em pé. Dá para fazer sem o calçado durante uma pausa sentado.',
          media: 'toe_spread',
          caption: 'Abrir os dedos: afaste os cinco dedos e segure',
          alt: 'Um pé visto de cima com os dedos bem abertos',
        },
        {
          name: 'Pé curto, sentado',
          evidence: {
            level: 'early',
            why: 'Uma revisão de 2024 encontrou que o treino do pé curto mudou o formato do arco, mas não a dor. O Walkito o inclui como parte de um programa mais amplo.',
          },
          dose: '3\u00A0séries de 10, segurando 5\u00A0segundos, cada pé',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, sem dobrar os dedos. Isso treina os pequenos músculos dentro do arco que o sustentam quando você está em pé.',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma perna sentada com o pé no chão, com o arco destacado enquanto sobe',
        },
        {
          name: 'Elevação de calcanhar com os dois pés (em pé)',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 para dor no calcanhar dá ao treino de força o grau B para fascite plantar. Constrói a força da panturrilha que absorve a carga de ficar em pé.',
          },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé na mesa, suba reto por cima dos dedões em cerca de três segundos e desça devagar. Segure na borda da mesa para se equilibrar. A progressão detalhada, incluindo a versão com toalha, está em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar em pé: suba por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
      ],
      table: {
        caption: 'Doses iniciais para dor nos pés com mesa em pé',
        head: ['Exercício', 'Dose', 'Onde', 'O que você deve sentir'],
        rows: [
          ['Alongamento de panturrilha (joelho esticado)', '2 x 30\u00A0segundos, cada perna', 'Na mesa ou na parede', 'Um alongamento na parte de cima da panturrilha'],
          ['Alongamento do sóleo (joelho dobrado)', '2 x 30\u00A0segundos, cada perna', 'Na mesa ou na parede', 'Um alongamento na parte baixa da panturrilha, perto do calcanhar'],
          ['Elevação de calcanhar sentado', '3 x 15, os dois pés', 'Na mesa, sentado', 'As panturrilhas trabalhando de leve'],
          ['Abrir os dedos', '3 x 10 (segurando 5\u00A0segundos)', 'Na mesa, sentado, sem calçado', 'Os dedos se abrindo, sem dor'],
          ['Pé curto', '3 x 10 (segurando 5\u00A0segundos), cada pé', 'Na mesa, sentado', 'O arco subindo, dedos relaxados'],
          ['Elevação de calcanhar em pé', '3 x 10, os dois pés', 'Na mesa, em pé', 'As panturrilhas trabalhando, sem dor aguda'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Mudar o peso de pé, usar um apoio para os pés ou só se mexer mais?',
      paragraphs: [
        'Os três ajudam, e os três são variações da mesma ideia: quebrar a postura parada em pé. A declaração de especialistas de 2015 destaca que o trabalho sentado deve ser interrompido com frequência por períodos em pé, e que o próprio tempo em pé deve incluir atividade leve. Até passar o peso de um pé para o outro muda quais músculos recebem carga e favorece a circulação na parte de baixo das pernas.',
        'Um pequeno apoio para os pés ou uma barra baixa embaixo da mesa deixa você apoiar um pé e alternar a carga entre os lados. É uma estratégia antiga do chão de fábrica, e é uma das intervenções que a revisão de saúde ocupacional lista. Você não precisa de um produto especial para isso. Uma caixa firme ou uma prateleira baixa resolve.',
        'Pausas curtas para se mexer durante o tempo sentado são igualmente importantes. Levante, vá até a cozinha e volte, ou faça uma série da elevação de calcanhar sentado ou de abrir os dedos da tabela acima. O objetivo não é treinar. É evitar a postura parada que causa o problema.',
      ],
      cites: [CITE.buckley, CITE.waters],
    },
    {
      h2: 'Como começar a usar a mesa em pé sem dor nos pés?',
      paragraphs: [
        'Comece com menos tempo em pé do que você acha que precisa. A declaração de especialistas de 2015 recomenda chegar aos poucos a 2\u00A0horas em pé e em atividade leve por dia, não começar por aí. Se ficar em pé é novidade para você, comece com 15 a 20\u00A0minutos em pé por hora e aumente aos poucos ao longo de algumas semanas.',
        'Uma primeira semana prática: 15\u00A0minutos em pé, 45\u00A0minutos sentado, repetindo ao longo do dia. Na segunda semana, passe para 20\u00A0minutos em pé e 40 sentado. Na terceira ou quarta semana, experimente 30 e 30. Preste atenção nos pés e na lombar. Se o desconforto estiver aumentando, sente antes, em vez de insistir.',
        'Use um tapete desde o começo, se tiver. Use calçados com algum amortecimento, mesmo em casa. Faça os alongamentos da panturrilha da tabela acima pelo menos uma vez por dia. Se você já tem dor nos pés de ficar em pé e quer o guia mais amplo, [por que os pés doem depois de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) mostra onde a dor da mesa em pé e problemas como a fascite plantar se sobrepõem. Para a versão da enfermagem, veja [dor nos pés na enfermagem](/pt/dor-nos-pes-enfermagem/).',
      ],
      cites: [CITE.buckley],
    },
    {
      h2: 'A dor nos pés com mesa em pé pode ser fascite plantar ou outra coisa?',
      paragraphs: [
        'A dor nos pés com mesa em pé normalmente é um desconforto geral de ficar muito tempo parado em pé. Mas se a dor é aguda, concentrada perto do calcanhar e pior nos primeiros passos depois de ficar um tempo sentado, esse padrão aponta para fascite plantar. Ficar em pé a maior parte do dia de trabalho aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo caso-controle, então a mesa em pé pode, sim, contribuir.',
        'Os exercícios que ajudam nos dois casos se sobrepõem muito. Se a sua dor segue o padrão da fascite plantar, [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) é o guia mais completo. Se os seus arcos parecem baixos, veja [exercícios para pé chato](/pt/exercicios-pe-chato/). Se você não tem certeza, procure um profissional de saúde antes de pôr carga no pé com exercício.',
      ],
      cites: [CITE.riddle],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo devo ficar em pé na mesa em pé?',
      a: 'Uma declaração de especialistas de 2015 recomenda chegar aos poucos a 2\u00A0horas em pé e em atividade leve por dia de trabalho, e com o tempo progredir para 4\u00A0horas, divididas em períodos mais curtos. Uma revisão sistemática de 2017 encontrou que os sintomas musculoesqueléticos ficavam clinicamente relevantes depois de cerca de 40\u00A0minutos em pé sem parar. Um ponto de partida prático é ficar 20 a 30\u00A0minutos em pé, seguidos de 20 a 30\u00A0minutos sentado.',
      cites: [CITE.buckley, CITE.coenen],
    },
    {
      q: 'Tapete antifadiga funciona mesmo na mesa em pé?',
      a: 'Uma revisão de saúde ocupacional de 2015 coloca os tapetes entre as intervenções com evidência para reduzir o desconforto quando se fica muito tempo em pé. Um estudo cruzado com membros de equipes cirúrgicas encontrou notas menores de dor e de cansaço com um tapete de borracha de 15\u00A0mm em comparação com o piso comum. O benefício é de conforto e cansaço, não de prevenção de um problema específico. Um tapete junto com períodos mais curtos em pé e alongamentos da panturrilha cobre mais do que o tapete sozinho.',
      cites: [CITE.waters],
    },
    {
      q: 'Mesa em pé pode causar fascite plantar?',
      a: 'Ficar em pé a maior parte do dia de trabalho aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo caso-controle com 50\u00A0casos e 100\u00A0controles. A mesa em pé aumenta as suas horas diárias em pé, então ela pode contribuir se a sua panturrilha já for tensa, o que foi o fator de risco independente mais forte, com 23,3\u00A0vezes a chance. Os alongamentos da panturrilha são o jeito mais direto de cuidar dos dois fatores de risco.',
      cites: [CITE.riddle],
    },
    {
      q: 'É melhor ficar sentado ou em pé o dia todo?',
      a: 'Nenhum dos dois. A revisão de 2014 de Karakolis e Callaghan encontrou evidência suficiente de que as estações que alternam sentado e em pé reduzem o desconforto lombar, sem queda de produtividade, mas não encontrou uma proporção ideal entre os dois. A revisão de 2017 de Coenen encontrou que ficar em pé sem interrupção causa sintomas depois de cerca de 40\u00A0minutos. Alternar entre sentado e em pé é o que a evidência apoia, não escolher um ou outro.',
      cites: [CITE.karakolis, CITE.coenen],
    },
    {
      q: 'Que exercícios dá para fazer na mesa em pé?',
      a: 'Em pé: alongamentos da panturrilha apoiado na borda da mesa (2\u00A0vezes de 30\u00A0segundos de cada lado) e elevação de calcanhar em pé (3\u00A0séries de 10). Nas pausas sentado: elevação de calcanhar sentado (3\u00A0séries de 15), abrir os dedos e o exercício do pé curto. Eles miram a panturrilha, a fáscia plantar e os músculos intrínsecos do pé, que carregam a carga de ficar em pé. Se algum exercício levar a sua dor a 6 de 10 ou mais, pare por hoje.',
      cites: [CITE.guideline],
    },
    {
      q: 'Por que meus pés doem mais parado em pé do que andando?',
      a: 'Andar ativa a bomba da panturrilha, que empurra o sangue de volta para cima a cada passo. Ficar parado em pé tira essa bomba, então o sangue se acumula nos pés e na parte de baixo das pernas, e os músculos ficam na mesma posição parada em vez de contrair e relaxar. Uma revisão sistemática de 2017 confirmou esse mecanismo e encontrou que os sintomas nas pernas aparecem de forma consistente quando se fica parado em pé em laboratório.',
      cites: [CITE.coenen],
    },
    {
      q: 'O que é a regra 20-8-2 da mesa em pé?',
      a: 'A regra 20-8-2 é uma orientação de ergonomia: divida cada bloco de 30\u00A0minutos em 20\u00A0minutos sentado, 8\u00A0minutos em pé e 2\u00A0minutos se mexendo. É uma convenção geral, não uma fórmula testada, mas combina com o ponto principal desta página: nenhuma posição única por horas é ideal, e mudanças curtas e frequentes de postura reduzem a carga parada que causa o cansaço nos pés.',
    },
    {
      q: 'Ficar em pé piora a fascite plantar?',
      a: 'Pode piorar. Ficar em pé mantém a fáscia plantar e a panturrilha sob carga contínua, sem as pausas para caminhar que bombeiam o sangue e aliviam a tensão. Ficar em pé a maior parte do dia de trabalho é um fator de risco independente para fascite plantar na pesquisa sobre tempo prolongado em pé. Se você já tem fascite plantar, uma mesa em pé num chão duro, sem pausas nem alongamento, pode piorar os sintomas.',
      cites: [CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'o pé está dormente, formigando, queimando, inchado ou quente',
      'o calcanhar ou o pé está vermelho, ou você tem febre ou se sente mal',
      'a dor acorda você à noite',
      'a dor é aguda, ou está piorando mesmo ficando mais tempo sentado',
      'a dor fica em um único ponto e piora com a atividade, o que pode ser o padrão de uma fratura por estresse e não o desconforto de ficar em pé',
      'uma perna ou um pé inchou de repente e está dolorido, vermelho ou quente',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
      'a dor não melhorou depois de várias semanas com períodos mais curtos em pé, um tapete e os exercícios desta página',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text:
      'Você não precisa descobrir a ordem, as doses nem quando progredir. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Se a sua dor com a mesa em pé segue o padrão de dor matinal da fascite plantar, a primeira meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a sua primeira meta for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver se o trabalho está fazendo efeito.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor for aguda, estiver piorando ou não deixar você dormir, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor nos pés com mesa em pé',
  campaign: 'guide-standing-desk-pt',
};
