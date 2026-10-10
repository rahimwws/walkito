import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const INSOLES_VS_EXERCISES_PT: Guide = {
  lang: 'pt',
  page: 'insolesVsExercises',
  mainSource: CITE.whittakerOrthoses,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Palmilhas ou exercícios: você precisa de palmilha?',
  description:
    'Palmilhas ou exercícios? O que os ensaios mostram sobre palmilhas para dor no calcanhar e pé chato, sob medida ou prontas, e como combinar as duas coisas.',
  h1: 'Palmilhas ou exercícios: você precisa de palmilha ortopédica para a dor no pé?',
  lede:
    'A maioria das pessoas com dor no calcanhar ou pé chato não precisa de palmilha ortopédica sob medida. Nos ensaios, as palmilhas dão uma queda pequena e passageira na dor, e as prontas funcionam mais ou menos tão bem quanto as sob medida. O exercício aumenta a capacidade do pé e da panturrilha, e a diretriz para dor no calcanhar dá a ele um grau mais alto. A palmilha é um complemento razoável, não um substituto.',
  takeaways: [
    'Uma revisão de 19\u00A0ensaios (1.660\u00A0pessoas) encontrou que as palmilhas aliviaram a dor no calcanhar mais que uma palmilha falsa só no médio prazo, e pouco, sem diferença entre palmilhas sob medida e pré-fabricadas (Whittaker e colegas, 2018).',
    'Em um ensaio com 185\u00A0pessoas com dor no calcanhar, as palmilhas sob medida não foram melhores que palmilhas falsas aos três meses, e o acompanhamento com o médico de família foi um pouco melhor que as palmilhas sob medida (Rasenberg e colegas, 2021).',
    'A diretriz de 2023 para dor no calcanhar recomenda **contra** o uso de palmilhas ortopédicas sozinhas para alívio de curto prazo (grau B) e aceita o uso junto com outros cuidados (grau C). O alongamento recebe um **A**, o treino de força um **B** (Koc e colegas, 2023).',
    'Em um estudo pequeno com 18\u00A0jovens adultos com pé chato, três meses de palmilhas ortopédicas sob medida foram seguidos de uma redução de 9,6 a 17,4% no tamanho de pequenos músculos do pé (Protopapas e Perry, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qual a diferença entre palmilha, palmilha ortopédica e exercício?',
      paragraphs: [
        '**Palmilha** é qualquer coisa que você coloca dentro do calçado. A **palmilha ortopédica** (órtese plantar) é uma palmilha moldada para sustentar o arco e tirar carga do calcanhar. As **pré-fabricadas** são compradas prontas. As **sob medida** são feitas a partir de um escaneamento ou de um molde do seu pé, normalmente por um podólogo ou ortopedista, e custam bem mais.',
        'As duas mudam a carga sobre o pé enquanto você as usa. O exercício muda o próprio tecido, para que o pé e a panturrilha aguentem mais carga, com ou sem palmilha.',
      ],
    },
    {
      h2: 'Palmilha ajuda na fascite plantar?',
      keyFact: 'Em uma revisão de 19\u00A0ensaios com 1.660\u00A0pessoas, as palmilhas aliviaram a dor no calcanhar mais que palmilhas falsas só no médio prazo, e as sob medida e as pré-fabricadas não diferiram em nenhum momento (Whittaker e colegas, 2018).',
      paragraphs: [
        'Um pouco, por um tempo. A fascite plantar é uma irritação da fáscia plantar, a faixa de tecido embaixo do arco. O teste justo compara uma palmilha de verdade com uma **palmilha falsa**: uma palmilha lisa e macia que parece real, mas não dá nenhum suporte.',
        'Em um ensaio com 135\u00A0pessoas, tanto uma palmilha pré-fabricada quanto uma sob medida melhoraram a função em cerca de 8\u00A0pontos numa escala de 0 a 100 em relação à palmilha falsa aos três meses (Landorf e colegas, 2006). A diferença na dor teve tamanho parecido, mas não foi estatisticamente clara. Aos doze meses, nenhum grupo se diferenciou.',
        'Uma revisão sistemática juntou 19\u00A0ensaios randomizados com 1.660\u00A0pessoas (Whittaker e colegas, 2018). No médio prazo, mais ou menos o segundo e o terceiro mês, as palmilhas aliviaram a dor mais que uma palmilha falsa, com evidência de qualidade moderada. O efeito foi pequeno, e os autores disseram que é “incerto se essa é uma mudança clinicamente importante”. No curto e no longo prazo, não houve benefício claro.',
        'A diretriz de 2023 para dor no calcanhar vai na mesma linha: palmilhas ortopédicas **não** devem ser usadas sozinhas para alívio de curto prazo (grau B contra), mas **podem** ser usadas junto com outros cuidados (grau C).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'A fáscia plantar vai do calcanhar até os dedos. A palmilha tira um pouco da carga sobre ela; o exercício muda quanta carga ela aguenta.',
        alt: 'A sola de um pé com a fáscia plantar destacada do calcanhar até os dedos',
      },
      cites: [CITE.landorf2006, CITE.whittakerOrthoses, CITE.guideline],
    },
    {
      h2: 'Vale a pena fazer palmilha sob medida?',
      keyFact: 'Em um ensaio com 185\u00A0pessoas com dor no calcanhar, as palmilhas sob medida não foram melhores que palmilhas falsas aos três meses, e quem foi acompanhado pelo médico de família relatou dor nos primeiros passos 1,48\u00A0ponto menor que quem usou palmilha sob medida (Rasenberg e colegas, 2021).',
      paragraphs: [
        'Para a dor no calcanhar comum, a pesquisa diz que normalmente não. A revisão de Whittaker **não encontrou diferença entre palmilhas sob medida e pré-fabricadas em nenhum momento**, e a diretriz de 2023 observa “uma semelhança nos resultados entre órteses sob medida e pré-fabricadas”.',
        'O ensaio holandês STAP sorteou 185\u00A0adultos com dor no calcanhar (Rasenberg e colegas, 2021) entre:',
        {
          list: [
            'Acompanhamento com o médico de família (clínico geral).',
            'Uma palmilha sob medida feita por podólogo.',
            'Uma palmilha falsa.',
          ],
        },
        '**Todos os grupos também receberam um livreto com exercícios.** Aos três meses, as palmilhas sob medida não foram melhores que a falsa. O grupo do médico de família foi melhor que o da palmilha sob medida: cerca de 1\u00A0ponto a menos de dor durante a atividade e 1,5\u00A0ponto a menos de dor nos primeiros passos, numa escala de 0 a 10. Uma análise de custos do mesmo ensaio, ao longo de cerca de seis meses, concluiu que as palmilhas sob medida “não são custo-efetivas” em comparação com o acompanhamento do médico de família.',
        'Palmilhas ortopédicas sob medida ainda podem ajudar algumas pessoas (veja abaixo). Mas se você quer uma palmilha para dor no calcanhar, um suporte de arco pronto, que sirva bem no calçado, é a primeira tentativa razoável.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.rasenbergStap, CITE.rasenbergCost],
    },
    {
      h2: 'O que o exercício faz que a palmilha não faz?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas que usavam palmilha, o grupo que acrescentou elevações de calcanhar pesadas teve 29\u00A0pontos a mais de melhora no Foot Function Index aos três meses que o grupo que acrescentou alongamento (Rathleff e colegas, 2015).',
      paragraphs: [
        'O exercício muda o tecido, então a mudança continua depois da sessão. A diretriz de 2023 dá ao alongamento da fáscia plantar e da panturrilha o grau **A** e ao treino de força o grau **B**.',
        'Em um ensaio, todas as 48\u00A0pessoas com fascite plantar receberam uma palmilha (Rathleff e colegas, 2015). Metade acrescentou alongamento diário; a outra metade acrescentou uma elevação de calcanhar pesada com uma toalha embaixo dos dedos, dia sim, dia não.',
        'Aos três meses, o grupo da elevação de calcanhar teve 29\u00A0pontos a mais de melhora no Foot Function Index (uma pontuação de 0 a 100 de dor e incapacidade no pé). Aos seis e aos doze meses, os grupos estavam iguais. A palmilha era a mesma nos dois grupos; foi o exercício que fez a diferença no início. A rotina completa está em [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'Grau A na diretriz para o alongamento da fáscia plantar e da panturrilha.' },
          dose: 'O Walkito começa com 2\u00A0vezes de 30\u00A0segundos, cada pé',
          how: 'Sente-se e cruze um tornozelo sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Segure e solte. É mais útil antes dos primeiros passos da manhã.',
          often: 'Todos os dias',
          feel: 'Um puxão ao longo do arco, não uma dor aguda',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado',
          alt: 'Uma figura sentada puxando para trás os dedos de um pé, com o arco destacado',
        },
        {
          name: 'Elevação de calcanhar com toalha embaixo dos dedos',
          evidence: { level: 'strong', why: 'O exercício do ensaio de Rathleff de 2015. Grau B na diretriz para treino de força.' },
          dose: 'No ensaio, as pessoas foram de 3\u00A0séries de 12 repetições pesadas até 5\u00A0séries de 8. No Walkito, ele vem depois de elevações de calcanhar mais fáceis, com 4\u00A0séries de 10, cada perna, no mesmo ritmo de 3-2-3 e com peso extra, como uma mochila, quando você tem um degrau',
          how: 'Fique em um pé só num degrau, com uma toalha enrolada embaixo dos dedos. Suba em três segundos, segure por dois, desça em três. Segure num corrimão. A toalha dobra os dedos para cima e põe carga na fáscia plantar junto com a panturrilha.',
          often: 'Dia sim, dia não',
          feel: 'Trabalho pesado na panturrilha e um puxão embaixo do arco',
          stop: 'A dor chegar a 6/10, ou a manhã seguinte estiver claramente pior',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos para subir, dois segundos parado, três segundos para descer',
          alt: 'Uma figura num degrau subindo na ponta de um pé, com uma toalha enrolada embaixo dos dedos',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Palmilha ajuda no pé chato?',
      paragraphs: [
        '**A evidência é fraca para os dois lados.** O pé chato (arco baixo) muitas vezes não causa dor nenhuma, e aí não há nada para corrigir. Veja [pé chato](/pt/pe-chato/).',
        'Para adultos com pé chato flexível, uma revisão encontrou 13\u00A0estudos, só dois randomizados (Banwell e colegas, 2014). Ela não encontrou “nenhuma evidência de alto nível” para palmilhas ortopédicas e só evidência de baixo nível de que elas aliviam a dor.',
        'Do lado do exercício, em um ensaio com 45\u00A0adultos, cerca de um mês e meio de exercícios para os pés melhorou a postura do pé mais que palmilhas de arco sob medida, e exercício mais palmilha também foi melhor que só palmilha (Kirmizi e colegas, 2024). Em outro ensaio com 52\u00A0pessoas, um programa de exercícios mudou o formato do arco mais que um grupo de controle (Brijwasi e Borkar, 2023). Nenhum dos dois teve a dor como resultado principal.',
        'Para crianças, uma revisão Cochrane de 16\u00A0ensaios (1.058\u00A0crianças) encontrou evidência de certeza baixa a muito baixa e concluiu que palmilhas ortopédicas sob medida caras para crianças com pé chato flexível sem dor não têm evidência que as apoie (Evans e colegas, 2022). Veja [pé chato infantil](/pt/pe-chato-infantil/). Os exercícios desta página e o app Walkito são para adultos.',
      ],
      exercises: [
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'early', why: 'Mudou o formato do arco em ensaios pequenos, incluindo um em que exercícios para os pés foram melhores que palmilhas sob medida na postura. A dor não foi o resultado principal.' },
          dose: 'O Walkito começa com 3\u00A0séries de 8, segurando 5\u00A0segundos, cada pé',
          how: 'Sente-se com o pé apoiado no chão. Sem dobrar os dedos, puxe a parte da frente do pé em direção ao calcanhar para o arco subir um pouco. Segure e relaxe. Se os dedos agarrarem o chão, você está usando os músculos errados.',
          often: 'Quase todos os dias',
          feel: 'O arco subindo, com os dedos relaxados',
          stop: 'Uma câimbra que não passa, ou a dor chegar a 6/10',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar',
          alt: 'Uma pessoa sentada com o pé no chão, com o arco destacado enquanto sobe',
        },
      ],
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot, CITE.brijwasi, CITE.evansCochrane2022],
    },
    {
      h2: 'Palmilha ortopédica enfraquece o pé?',
      paragraphs: [
        '**Talvez um pouco.** Em um estudo com 18\u00A0jovens adultos com pé chato, três pequenos músculos de dentro do pé diminuíram de 9,6 a 17,4% depois de três meses usando palmilhas ortopédicas sob medida (Protopapas e Perry, 2020). Os grupos não foram randomizados e o estudo era pequeno, então veja isso como um sinal, não como um fato estabelecido.',
        'O exercício parece compensar. Em um ensaio randomizado com 28\u00A0pessoas com pé chato, todos usaram palmilhas ortopédicas por dois meses e metade também fez o exercício de pé curto (Jung e colegas, 2011). O músculo ao longo do arco interno cresceu nos dois grupos, mas mais com o exercício, e a força do dedão também aumentou mais. Se você usa palmilha o dia todo, mantenha o pé trabalhando com alguns minutos de [exercícios para fortalecer os pés](/pt/exercicios-para-fortalecer-os-pes/).',
      ],
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
    },
    {
      h2: 'Palmilhas ou exercícios: resumo',
      table: {
        caption: 'Palmilhas e exercícios comparados, a partir dos estudos desta página',
        head: ['', 'Palmilhas e palmilhas ortopédicas', 'Exercícios'],
        rows: [
          ['Como funcionam', 'Mudam a carga sobre o pé enquanto estão no calçado', 'Mudam o tecido, para ele aguentar mais carga'],
          ['Evidência na dor no calcanhar', 'Pequeno benefício no médio prazo contra a palmilha falsa; nenhum aos doze meses', 'Alongamento grau **A**, força grau **B**'],
          ['Grau na diretriz para dor no calcanhar', '**B contra** sozinhas; **C** junto com outros cuidados', 'Base da primeira linha de cuidados'],
          ['Sob medida ou pronta', 'Nenhuma diferença nos ensaios', 'Não precisa de equipamento'],
          ['Evidência no pé chato', 'Evidência de baixo nível para a dor', 'Ensaios pequenos mostram mudança no arco; poucos dados sobre dor'],
          ['Custo', 'Baixo para as pré-fabricadas, bem mais alto para as sob medida', 'Grátis'],
          ['Desvantagem', 'Podem diminuir pequenos músculos do pé se usadas sozinhas', 'Podem provocar uma crise de dor se você aumentar rápido demais'],
        ],
      },
      cites: [CITE.whittakerOrthoses, CITE.landorf2006, CITE.guideline, CITE.banwellPlanus, CITE.protopapasOrthotic],
    },
    {
      h2: 'Quando a palmilha faz sentido?',
      bullets: [
        '**Jornadas longas em pé.** Um suporte de arco firme pode deixar o dia mais fácil enquanto o exercício aumenta a capacidade do pé. Veja [dor nos pés por ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/).',
        '**Uma crise.** Uma palmilha ou uma taloneira pode aliviar enquanto os primeiros passos estão doendo muito. A [bandagem](/pt/bandagem-fascite-plantar/) é outra opção de curto prazo, com um grau mais alto na diretriz.',
        '**Pé cavo com dor.** Em um ensaio com 154\u00A0adultos com pé cavo (arco alto) doloroso, palmilhas ortopédicas sob medida aliviaram a dor mais que uma palmilha falsa aos três meses (Burns e colegas, 2006). Veja [exercícios para pé cavo](/pt/pe-cavo-exercicios/).',
        '**Disfunção do tendão tibial posterior**, quando o tendão que sustenta o arco enfraquece. Os ensaios combinam uma palmilha ortopédica com exercício (Houck e colegas, 2015). Veja [exercícios para disfunção do tendão tibial posterior](/pt/disfuncao-tendao-tibial-posterior/).',
        '**Diabetes ou menos sensibilidade nos pés.** Palmilhas que distribuem a pressão costumam fazer parte dos cuidados com os pés nesses casos, ajustadas por um profissional de saúde.',
      ],
      cites: [CITE.guideline, CITE.burnsCavus, CITE.houckPTTD],
    },
    {
      h2: 'Como combinar palmilhas e exercícios?',
      paragraphs: [
        '**Use a palmilha para o conforto e os exercícios para a mudança.** Tanto no ensaio de Rathleff quanto no STAP, todo mundo recebeu orientação de exercícios junto com o que quer que estivesse no calçado. Use um suporte de arco pronto nos dias em que doer e comece os alongamentos e as elevações de calcanhar ao mesmo tempo. Conforme a dor da manhã acalma, experimente ficar períodos curtos sem a palmilha, depois períodos mais longos.',
        'O Walkito pode organizar o lado dos exercícios como um plano semanal: uma vez por semana, ele sobe o seu exercício principal um degrau quando você avaliou as duas últimas sessões com ele como fáceis e a dor da manhã não aumentou.',
        'Se alguns meses de alongamento e fortalecimento diários não ajudaram, procure um profissional de saúde. É aí que vale discutir uma palmilha ortopédica sob medida, entre outras opções, com alguém que examinou o seu pé.',
      ],
      cites: [CITE.rathleff, CITE.rasenbergStap],
    },
  ],
  faq: [
    {
      q: 'Preciso de palmilha ortopédica para fascite plantar?',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
      a: 'A maioria das pessoas não precisa. A diretriz de 2023 para dor no calcanhar recomenda contra o uso de palmilhas ortopédicas sozinhas para alívio de curto prazo (grau B) e aceita o uso junto com outros cuidados (grau C). Uma revisão de 19\u00A0ensaios encontrou só um pequeno benefício no médio prazo em relação a palmilhas falsas. O alongamento (grau A) e o fortalecimento da panturrilha (grau B) são a base, e a palmilha pode ser um complemento de conforto.',
    },
    {
      q: 'Palmilha sob medida é melhor que palmilha pronta?',
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap],
      a: 'Para dor no calcanhar, os ensaios não encontraram diferença. Uma revisão de 19\u00A0ensaios não encontrou diferença entre palmilhas sob medida e pré-fabricadas em nenhum momento (Whittaker e colegas, 2018). Em um ensaio com 185\u00A0adultos, as palmilhas sob medida não foram melhores que palmilhas falsas aos três meses (Rasenberg e colegas, 2021). Um suporte de arco pronto, que sirva bem, é a primeira tentativa razoável.',
    },
    {
      q: 'Palmilha ortopédica deixa o pé mais fraco?',
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
      a: 'Há um pequeno sinal de que pode deixar. Em um estudo não randomizado com 18\u00A0jovens adultos com pé chato, três meses de palmilhas ortopédicas sob medida foram seguidos de uma redução de 9,6 a 17,4% no tamanho de três pequenos músculos do pé. Em um ensaio com 28\u00A0pessoas, somar o exercício de pé curto às palmilhas ortopédicas aumentou mais o músculo e a força do dedão que só as palmilhas.',
    },
    {
      q: 'Palmilha ajuda no pé chato?',
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot],
      a: 'A evidência é fraca. Uma revisão de 13\u00A0estudos não encontrou evidência de alto nível de que palmilhas ortopédicas ajudem adultos com pé chato flexível, e só evidência de baixo nível para a dor (Banwell e colegas, 2014). Em um ensaio com 45\u00A0adultos, exercícios para os pés melhoraram a postura do pé mais que palmilhas de arco sob medida (Kirmizi e colegas, 2024). Pé chato que não dói não precisa de nada.',
    },
    {
      q: 'Meu filho com pé chato precisa de palmilha ortopédica?',
      cites: [CITE.evansCochrane2022],
      a: 'Normalmente não, se os pés não doem. Uma revisão Cochrane de 16\u00A0ensaios com 1.058\u00A0crianças encontrou evidência de certeza baixa a muito baixa para palmilhas ortopédicas e concluiu que palmilhas sob medida caras para crianças com pé chato flexível sem dor não têm evidência que as apoie (Evans e colegas, 2022). Uma criança com dor no pé, rigidez ou que manca deve ser vista por um profissional de saúde.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda, ou você não consegue apoiar o pé',
      'apertar as laterais do calcanhar dói muito, o que pode indicar uma fratura por estresse',
      'há dormência, formigamento ou queimação no pé',
      'o pé está vermelho, quente ou inchado, ou você tem febre',
      'um dos arcos caiu recentemente, ou você não consegue subir na ponta desse pé',
      'você tem diabetes, má circulação ou menos sensibilidade nos pés',
      'uma criança tem pé chato com dor, rigidez ou mancando',
      'a dor não melhorou depois de alguns meses de alongamento e fortalecimento diários',
    ],
  },
  program: {
    h2: 'Fazendo os exercícios como um plano',
    text: 'A palmilha vai para dentro do calçado uma vez só. O exercício só funciona se você continuar fazendo. O Walkito monta um plano uma semana de cada vez para dor no calcanhar ou pé chato, começando com alongamentos como o alongamento da fáscia plantar (2\u00A0vezes de 30\u00A0segundos) e trabalho de arco como o pé curto (3\u00A0séries de 8 segurando 5\u00A0segundos), e depois sobe o seu exercício principal um degrau quando você o avalia como fácil duas vezes seguidas e a dor da manhã se mantém estável.',
    more: [
      'Você escolhe sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias no início (a cada 28 quando você alcança uma meta), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito é um programa de exercícios para adultos. Ele não faz diagnóstico, não substitui um profissional de saúde e funciona bem junto com uma palmilha.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Palmilhas ou exercícios',
  campaign: 'guide-insoles-vs-exercises-pt',
};
