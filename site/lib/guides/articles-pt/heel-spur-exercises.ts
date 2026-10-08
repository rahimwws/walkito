import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Exercícios para esporão (PT) ──────────────────────────────────────
 *
 * Translated from `articles/heel-spur-exercises.ts`, written around the
 * Brazilian Portuguese queries «esporão no calcanhar exercícios», «esporão
 * calcâneo alongamento», «exercícios para esporão». Informal «você». Figures,
 * doses, grades and qualifiers are identical to the English page. No new
 * citations (menzSpur and menzCoexistence are listed in pf-vs-heel-spur.ts).
 */

export const HEEL_SPUR_EXERCISES_PT: Guide = {
  lang: 'pt',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercícios para esporão no calcanhar: alongamento e força',
  description:
    'Exercícios e alongamentos para esporão no calcanhar, para a fáscia plantar e a panturrilha: a rotina, as doses e a progressão para aliviar a dor.',
  h1: 'Exercícios para esporão no calcanhar: alongamento e fortalecimento para a dor em volta do esporão',
  lede:
    'Exercício não dissolve um esporão no calcanhar. O esporão é osso, e osso não diminui com alongamento. Mas a dor que as pessoas sentem quando têm esporão quase sempre vem da fáscia plantar e da panturrilha em volta dele, não do osso em si. Os exercícios abaixo trabalham esses tecidos moles. São os mesmos que a diretriz de 2023 para dor no calcanhar recomenda para fascite plantar.',
  intro: [
    'Se você quer entender primeiro a diferença entre esporão e fascite plantar, veja [fascite plantar ou esporão](/pt/fascite-plantar-ou-esporao/). Esta página é a rotina prática: quais exercícios, quantas repetições, como progredir e quando parar.',
  ],
  takeaways: [
    'Os exercícios para esporão funcionam trabalhando a fáscia plantar e os músculos da panturrilha em volta do esporão, não mudando o esporão em si.',
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, **A**, e ao treino de força um **B** (Koc e colegas, 2023).',
    'Em um ensaio com 48\u00A0pessoas com fascite plantar, elevações de calcanhar pesadas com uma toalha embaixo dos dedos aliviaram a dor mais rápido que só alongar aos três meses, mas aos doze meses os dois grupos estavam iguais (Rathleff e colegas, 2015).',
    'Uma panturrilha tensa, medida como dorsiflexão do tornozelo reduzida, foi o fator de risco independente mais forte para fascite plantar em um estudo de caso-controle pareado com 50\u00A0casos e 100\u00A0controles (Riddle e colegas, 2003).',
    'Uma revisão sistemática com metanálise encontrou que tanto o alongamento de panturrilha quanto o alongamento da fáscia plantar reduziram a dor em comparação com não alongar (Siriphorn e Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Por que os exercícios ajudam no esporão?',
      keyFact: 'Em um estudo com 530\u00A0pessoas com dor no pé, o esporão apareceu sozinho em só 6% dos pés; na maioria das vezes vinha junto com uma fáscia plantar espessada (Menz e colegas, 2019).',
      paragraphs: [
        'O esporão no calcanhar é um crescimento de osso na parte de baixo do osso do calcanhar. Em um estudo com 530\u00A0pessoas de 50\u00A0anos ou mais com dor no pé, o esporão sozinho era raro (6% dos pés), e a dor no calcanhar estava ligada ao esporão junto com uma fáscia plantar espessada, a faixa de tecido embaixo do pé (Menz e colegas, 2019). A dor vem do tecido mole, e é ele que o exercício consegue alcançar.',
        'Alongar a fáscia plantar e a panturrilha diminui a tensão onde ela se prende no calcanhar. Fortalecer a panturrilha aumenta a capacidade da cadeia que absorve a carga toda vez que o calcanhar bate no chão. Juntos, eles diminuem o estresse diário no tecido em volta do esporão.',
        'Nenhum programa de exercícios vai fazer um esporão sumir do raio-X. Mas a maioria das pessoas com esporão não precisa que ele suma. Elas precisam que a dor diminua, e isso vem da fáscia e da panturrilha ficando mais fortes e mais flexíveis.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: 'Quais alongamentos ajudam na dor do esporão?',
      keyFact: 'Uma revisão sistemática encontrou que tanto o alongamento de panturrilha quanto o alongamento da fáscia plantar aliviaram a dor da fascite plantar em comparação com não alongar (Siriphorn e Eksakulkla, 2020).',
      paragraphs: [
        'O alongamento é o ponto de partida. A diretriz de 2023 dá ao alongamento da fáscia plantar e da panturrilha o grau **A**, o mais alto. Uma revisão sistemática com metanálise sobre alongamento para fascite plantar encontrou que tanto o alongamento de panturrilha quanto o alongamento da fáscia plantar reduziram a dor em comparação com não alongar (Siriphorn e Eksakulkla, 2020). Comece com estes três.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'Grau A na diretriz. Um ensaio de 2003 com 101\u00A0pessoas (82 concluíram o acompanhamento) encontrou este alongamento mais eficaz que só alongar a panturrilha em 8\u00A0semanas.' },
          dose: '10\u00A0vezes de 10\u00A0segundos, cada pé',
          how: 'Sente-se e cruze um tornozelo sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Segure e solte. Faça antes do primeiro passo de toda manhã e depois de ficar muito tempo sentado.',
          often: 'Toda manhã e depois de ficar sentado',
          feel: 'Um alongamento ao longo do arco, não uma dor aguda',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado antes de ficar em pé',
          alt: 'Uma figura sentada puxando os dedos para trás para alongar o arco, com a fáscia plantar destacada',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz. A dorsiflexão reduzida do tornozelo foi o fator de risco mais forte para fascite plantar em um estudo de caso-controle de 2003.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Segure até sentir o alongamento na parte de cima da panturrilha. O gastrocnêmio, o músculo maior e mais superficial da panturrilha, só alonga com o joelho esticado.',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, incline para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz. Trabalha o sóleo, o músculo mais profundo da panturrilha, que só solta com o joelho dobrado.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede do alongamento de panturrilha, depois dobre o joelho de trás até sentir o alongamento descer, perto do calcanhar. O sóleo fica embaixo do gastrocnêmio e se prende mais perto do calcanhar.',
          often: 'Quase todas as sessões, depois do alongamento com o joelho esticado',
          feel: 'Um alongamento mais embaixo na panturrilha, perto do calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: 'Quais exercícios de fortalecimento ajudam na dor do esporão?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas, o grupo das elevações de calcanhar teve 29\u00A0pontos a mais de melhora no Foot Function Index que o grupo que só alongava, aos três meses (Rathleff e colegas, 2015).',
      paragraphs: [
        'Só alongar muitas vezes basta nas primeiras semanas. Quando a dor da manhã começa a diminuir, acrescentar o fortalecimento da panturrilha aumenta a capacidade de que a cadeia do calcanhar precisa. A diretriz dá ao treino de força o grau **B**, o segundo mais alto. No único ensaio feito para testar elevações de calcanhar na fascite plantar, 48\u00A0pessoas foram divididas entre um grupo de elevações de calcanhar com carga e um grupo que só alongava. O grupo das elevações teve 29\u00A0pontos a mais de melhora no Foot Function Index aos três meses (Rathleff e colegas, 2015).',
        'Comece pelo nível mais fácil e só suba quando ele parecer fácil por duas sessões seguidas. A progressão abaixo vai do trabalho sentado até a elevação de calcanhar com toalha e carga do ensaio.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar sentado',
          evidence: { level: 'moderate', why: 'O grau B da diretriz vale para o treino de força em geral. Este primeiro degrau, com pouca carga, não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Sente-se com os pés apoiados no chão. Suba os calcanhares empurrando pela parte da frente dos dois pés. As mãos nos joelhos dão uma resistência leve. É o jeito com menos carga de começar a trabalhar a panturrilha.',
          often: 'Dias de força',
          feel: 'Trabalho leve nas panturrilhas, quase sem carga no calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentado: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'Grau B na diretriz. Um degrau intermediário antes do trabalho com carga em uma perna.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga. Apoie-se numa parede ou num corrimão para manter o equilíbrio.',
          often: 'Dias de força, quando a elevação sentado parecer fácil por duas sessões',
          feel: 'As panturrilhas trabalhando juntas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar sustentada (isométrica)',
          evidence: { level: 'moderate', why: 'Grau B na diretriz. Sustentação isométrica no fim do movimento. Não foi testada em um ensaio isolado de fascite plantar.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe afundar. Segurar lá em cima põe carga no tendão sem o quique de uma repetição completa.',
          often: 'Dias de força, o degrau depois da elevação com os dois pés',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com toalha (em uma perna)',
          evidence: { level: 'strong', why: 'O exercício do ensaio randomizado de Rathleff de 2015. Grau B na diretriz.' },
          dose: 'Protocolo da pesquisa: 3\u00A0séries de 12RM, progredindo para 5\u00A0séries de 8RM. O Walkito começa com 3\u00A0séries de 12, cada perna',
          how: 'Fique em um pé só na beira de um degrau, com uma toalha enrolada embaixo dos cinco dedos. Três segundos para subir, dois segundos parado lá em cima, três segundos para descer. A toalha ativa o mecanismo de molinete (windlass), que põe carga na fáscia plantar junto com a panturrilha. Acrescente peso com uma mochila quando a última repetição deixar de ser difícil.',
          often: 'Dia sim, dia não no ensaio. O Walkito coloca esse exercício nos dias de força, nunca dois seguidos.',
          feel: 'Trabalho pesado na panturrilha e um puxão embaixo do arco',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos para subir, parado lá em cima, três segundos para descer',
          alt: 'Uma figura em um degrau subindo na ponta do pé com uma toalha enrolada embaixo do pé',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Como progredir nos exercícios para esporão?',
      paragraphs: [
        'Progrida pela sensação, não pelo calendário. A regra é: se o nível atual pareceu fácil por duas sessões seguidas, suba um degrau. Se a dor da manhã piorar depois de uma sessão, fique no nível atual ou volte um.',
      ],
      table: {
        caption: 'Progressão dos exercícios para esporão',
        head: ['Nível', 'Exercício', 'Quando subir'],
        rows: [
          ['1', 'Só o alongamento da fáscia plantar e os alongamentos de panturrilha', 'A dor da manhã está diminuindo e você quer acrescentar treino de força'],
          ['2', 'Elevação de calcanhar sentado (3 x 10)', 'Fácil por duas sessões seguidas'],
          ['3', 'Elevação de calcanhar com os dois pés (3 x 10)', 'Fácil por duas sessões seguidas'],
          ['4', 'Elevação de calcanhar sustentada (3 x 20\u00A0segundos)', 'Fácil por duas sessões seguidas'],
          ['5', 'Elevação de calcanhar com toalha, em uma perna (3 x 12)', 'Aumente a carga com uma mochila quando o peso do corpo ficar fácil'],
        ],
      },
      after: [
        'Mantenha o alongamento da fáscia plantar e os alongamentos de panturrilha em todos os níveis. O alongamento não é algo que você abandona quando começa a fortalecer. A diretriz avalia os dois de forma independente.',
        'Para mais detalhes sobre o protocolo da elevação de calcanhar com toalha e a pesquisa por trás dele, veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Exercícios de apoio opcionais',
      paragraphs: [
        'Os alongamentos e as elevações de calcanhar acima são a base. Os exercícios a seguir não são específicos para esporão, mas trabalham os músculos do pé e do tornozelo que sustentam o arco e absorvem impacto. A evidência por trás de cada um é mais fraca.',
      ],
      exercises: [
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Serve para dar alívio entre as sessões.' },
          dose: '2\u00A0minutos, cada pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem ou uma garrafa de água congelada. Mantenha a pressão firme, mas não a ponto de você fazer careta. Rolar depois de um dia longo em pé pode acalmar o tecido.',
          often: 'Dias de recuperação ou depois de um dia longo',
          feel: 'Pressão firme embaixo do pé, nunca dor aguda',
          stop: 'A dor chegar a 6/10',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha',
        },
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'early', why: 'Uma revisão de 2024 encontrou que o treino de pé curto mudou o formato do arco, mas não a dor. Parte de um programa que melhorou medidas do arco em um ensaio de 2023.' },
          dose: '3\u00A0séries de 10, segure 5\u00A0segundos, cada pé',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir. Não dobre os dedos. Isso treina o músculo pequeno dentro do arco.',
          often: 'Dias de força',
          feel: 'O arco subindo, com os dedos relaxados',
          stop: 'A dor chegar a 6/10',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar',
          alt: 'Uma perna sentada com o pé no chão, com o arco destacado enquanto sobe',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Nenhum estudo específico para esporão. Trabalho geral de equilíbrio para o pé e o tornozelo.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Fique em pé em um pé só e olhe para um ponto fixo. Deixe o pé balançar. Esse balanço é o pé fazendo o equilíbrio. Fique perto de uma parede por segurança.',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          stop: 'A dor chegar a 6/10',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: 'O que você deve sentir nos exercícios, e quando parar?',
      paragraphs: [
        'O alongamento deve dar a sensação de um puxão, não de uma pontada. Um alongamento de panturrilha que dá uma tensão confortável na parte de cima ou de baixo da panturrilha está certo. Um alongamento da fáscia plantar que puxa de leve ao longo do arco está certo. Se o alongamento reproduz a dor forte que você sente nos primeiros passos, alivie.',
        'As elevações de calcanhar devem dar a sensação de trabalho na panturrilha. A versão com toalha também vai dar um puxão embaixo do arco, que é a fáscia recebendo carga. Esse puxão é esperado e é justamente a função da toalha.',
        'Pare por hoje se a dor chegar a **6/10 ou mais** em qualquer exercício, ou se os seus primeiros passos na manhã seguinte estiverem claramente piores que o normal. Essa regra de parar e voltar um degrau é a que o app usa. Uma dor muscular leve que passa em um dia é normal, principalmente nas duas primeiras semanas. Dor que continua alta por dias ou que piora semana após semana é motivo para voltar um nível ou procurar um profissional de saúde.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Em quanto tempo a dor do esporão melhora com exercício?',
      paragraphs: [
        'Não existe ensaio que meça os resultados do exercício especificamente em pessoas com esporão. Os prazos abaixo vêm de estudos sobre fascite plantar, que é a condição que causa a dor em volta do esporão na maioria dos casos.',
        'Uma revisão da evidência clínica relata que cerca de 90% das pessoas com fascite plantar melhoram com tratamento sem cirurgia, como alongamento e palmilhas, muitas vezes em alguns meses (Latt e colegas, 2020). No ensaio de Rathleff de 2015, o grupo das elevações de calcanhar com carga estava significativamente à frente do grupo que só alongava aos três meses.',
        'Nenhum programa de exercícios pode prometer um prazo para uma pessoa específica. O que você pode medir é se as coisas estão mudando. A dor da manhã numa escala de 0 a 10, anotada antes do primeiro passo, é o sinal mais claro do dia a dia. A resistência da panturrilha, medida por quantas elevações de calcanhar em uma perna você consegue fazer, acompanha a força ao longo das semanas. As duas coisas são mais úteis do que adivinhar.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: 'Dá para eliminar o esporão de forma natural?',
      paragraphs: [
        'Exercício, alongamento e mudanças na alimentação não dissolvem um esporão. O esporão é osso calcificado. Ele continua no raio-X, você alongando ou não.',
        'Mas “eliminar o esporão” raramente é a meta certa. No estudo de 2019, o esporão quase sempre vinha junto com uma fáscia plantar espessada, e o tecido mole é a parte que o exercício consegue mudar. A dor vem do tecido mole. Os exercícios desta página trabalham o tecido mole. Se a dor diminui, o esporão não é um problema que precisa ser resolvido.',
        'Se alguém prometeu a você um suplemento, uma pomada ou um aparelho que dissolve esporão, desconfie. Nenhuma evidência publicada apoia essa promessa. A abordagem recomendada pela diretriz é alongamento, fortalecimento da panturrilha e controle da carga.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quais exercícios ajudam na dor do esporão?',
      cites: [CITE.guideline],
      a: 'Os exercícios que ajudam na dor do esporão são os mesmos que a diretriz de 2023 para dor no calcanhar recomenda para fascite plantar: alongamento da fáscia plantar (grau A na diretriz), alongamento de panturrilha (grau A) e fortalecimento gradual da panturrilha com elevações de calcanhar (grau B). Eles trabalham a fáscia plantar e os músculos da panturrilha em volta do esporão, que normalmente são o que causa a dor.',
    },
    {
      q: 'Exercício dissolve o esporão?',
      a: 'Não. O esporão é osso calcificado, e o exercício não o dissolve. Os exercícios trabalham a fáscia plantar e a panturrilha, os tecidos moles em volta do esporão que quase sempre são a origem da dor. Se a dor diminui com o exercício, o esporão no raio-X não é um problema que precisa ser resolvido.',
    },
    {
      q: 'Com que frequência fazer alongamento para esporão?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'O alongamento da fáscia plantar funciona melhor feito toda manhã antes de ficar em pé e depois de ficar muito tempo sentado. Os alongamentos de panturrilha entram na maioria das sessões. Em um ensaio com 101\u00A0pessoas com dor crônica no calcanhar (82 concluíram o acompanhamento), o grupo que fazia o alongamento da fáscia plantar relatou resultados melhores em 8\u00A0semanas que o grupo que só alongava a panturrilha (DiGiovanni e colegas, 2003).',
    },
    {
      q: 'Quanto tempo demora para a dor do esporão passar?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'A maioria dos prazos vem de estudos sobre fascite plantar, já que a irritação da fáscia é normalmente o que dói. Uma revisão relata que cerca de 90% das pessoas com fascite plantar melhoram com tratamento sem cirurgia, muitas vezes em alguns meses (Latt 2020). Em um ensaio com 48\u00A0pessoas, as elevações de calcanhar com carga mostraram vantagem sobre só alongar aos três meses (Rathleff 2015). Nenhum programa pode prometer um prazo para uma pessoa específica.',
    },
    {
      q: 'Quem tem esporão deve parar de fazer exercício?',
      cites: [CITE.guideline],
      a: 'Não necessariamente. A diretriz recomenda o exercício como parte da abordagem, não só repouso. Pare um exercício específico por hoje se a dor chegar a 6 de 10 ou mais, ou se a manhã seguinte estiver claramente pior. Volte um nível em vez de parar tudo. Se a dor piorar semana após semana mesmo com os ajustes, procure um profissional de saúde.',
    },
    {
      q: 'Caminhar é bom para esporão?',
      cites: [CITE.guideline],
      a: 'Caminhar em si não é o problema. Caminhar com calçados de bom suporte, num ritmo confortável, normalmente não tem problema e é melhor que repouso total. A dor vem da fáscia plantar em volta do esporão e da panturrilha, e caminhar de forma moderada mantém a bomba da panturrilha ativa. Se caminhar deixa a sua dor da manhã pior no dia seguinte, encurte a distância e volte a aumentar aos poucos.',
    },
    {
      q: 'Quais exercícios evitar com esporão?',
      cites: [CITE.guideline],
      a: 'Evite movimentos de alto impacto como corrida, saltos e pliometria enquanto o calcanhar está em crise; impactos repetidos numa superfície dura forçam o tecido ao lado do esporão. Descer o calcanhar fundo da beira de um degrau também pode sobrecarregar uma fáscia irritada. A diretriz de 2023 apoia ajustar a carga em vez de proibir exercícios; o teste é se o calcanhar está pior na manhã seguinte.',
    },
    {
      q: 'O que piora a dor do esporão?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Impactos repetidos numa superfície dura são o gatilho mais comum: correr, saltar ou ficar horas em pé irrita o tecido mole ao lado do esporão do mesmo jeito que irrita a fascite plantar comum. Um aumento repentino de atividade, calçados gastos e andar descalço em piso frio também podem desencadear a dor. O que acalma uma crise é ajustar a carga, não o osso.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'apertar as laterais do calcanhar reproduz a dor, o que pode indicar uma fratura por estresse',
      'ela vem com dormência, formigamento ou queimação',
      'o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, principalmente se outras articulações estão envolvidas',
      'a dor não deixa você dormir ou aparece em repouso',
      'não melhorou depois de várias semanas de alongamento diário e treino de panturrilha',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa controlar os níveis, as séries nem quando progredir. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos. O alongamento começa no primeiro dia. A sequência da panturrilha, da elevação sentado até a elevação com toalha e carga, avança no seu ritmo.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a meta da manhã for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Exercícios para esporão',
  campaign: 'guide-heel-spur-exercises-pt',
};
