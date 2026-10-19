import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/plantar-fasciitis-vs-achilles-tendonitis.ts
 * (2026-10-18), written around «fascite plantar ou tendinite de Aquiles» and
 * «dor no calcanhar ou Aquiles». Informal «você». Figures, grades, doses and
 * qualifiers are identical to the English page after its fact-check. Same CITE
 * keys and media ids. Exercise names follow lib/guides/pt.ts and articles-pt/achilles.ts.
 */

export const PF_VS_ACHILLES_PT: Guide = {
  lang: 'pt',
  page: 'pfVsAchilles',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantar ou tendinite de Aquiles: como diferenciar',
  description:
    'Fascite plantar ou tendinite de Aquiles? Onde dói, quando dói, uma tabela lado a lado, os exercícios para cada uma e o que fazer se você tiver as duas.',
  h1: 'Fascite plantar ou tendinite de Aquiles: como saber a diferença',
  lede:
    'O jeito mais rápido de diferenciar as duas é o lugar da dor. A [fascite plantar](/pt/fascite-plantar/) dói embaixo do calcanhar, principalmente nos primeiros passos da manhã (Koc e colegas, 2023). A tendinite de Aquiles dói atrás do calcanhar ou no tendão logo acima, normalmente de 2 a 6\u00A0centímetros acima do osso do calcanhar (Chimenti e colegas, 2024). As duas respondem ao exercício, mas os exercícios não são os mesmos.',
  intro: [
    'Esta página é a comparação lado a lado. Ela não faz o seu diagnóstico, e algumas dores no calcanhar não são nenhuma das duas. Para os programas completos de exercícios, veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) e [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/). Se um calombo ósseo atrás do calcanhar faz parte do quadro, veja [deformidade de Haglund](/pt/deformidade-de-haglund/).',
  ],
  takeaways: [
    'A dor da fascite plantar fica embaixo do calcanhar, do lado de dentro, e costuma ser pior nos primeiros passos depois de dormir ou de ficar sentado (Koc e colegas, 2023).',
    'A tendinopatia de Aquiles no meio do tendão dói no próprio tendão, normalmente de 2 a 6\u00A0centímetros acima do osso do calcanhar. A dor bem onde o tendão se prende ao osso é o tipo insercional (Chimenti e colegas, 2024).',
    'A diretriz de 2023 para dor no calcanhar dá aos alongamentos da fáscia plantar e da panturrilha o grau **A** e ao trabalho de força o grau **B**. A diretriz de 2024 para o Aquiles dá aos exercícios de carga no tendão o grau **A** (Koc e colegas, 2023; Chimenti e colegas, 2024).',
    'Em um ensaio com 101\u00A0pessoas com dor crônica no calcanhar, o alongamento da fáscia plantar foi melhor do que só o alongamento de panturrilha em 8\u00A0semanas (DiGiovanni e colegas, 2003). Para o Aquiles, o grau mais alto da diretriz vai para a carga no tendão, não para o alongamento (Chimenti e colegas, 2024).',
    'As duas estão ligadas: em 52\u00A0ressonâncias magnéticas, quem tinha alterações no Aquiles tinha a fáscia plantar mais grossa, e 5 de 27 passavam do limite usado normalmente para a fascite plantar (Stecco e colegas, 2013).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Onde dói: embaixo do calcanhar ou atrás?',
      figure: { id: 'heel-side', caption: 'A fascite plantar dói embaixo do calcanhar. A dor do Aquiles fica atrás do calcanhar ou no tendão logo acima.', alt: 'Vista do lado de dentro de um pé mostrando o osso do calcanhar, a fáscia plantar embaixo do arco e o tendão de Aquiles atrás, com uma área vermelha embaixo do calcanhar.' },
      keyFact: 'A dor no meio do tendão de Aquiles costuma ser sentida de 2 a 6\u00A0centímetros acima do osso do calcanhar, enquanto a dor da fascite plantar fica embaixo do lado de dentro do calcanhar (Chimenti e colegas, 2024; Koc e colegas, 2023).',
      paragraphs: [
        '**O lugar da dor é a diferença mais clara.** A fáscia plantar é a faixa grossa embaixo do pé que vai do osso do calcanhar até os dedos. A fascite plantar dói onde essa faixa se prende, embaixo do calcanhar e para o lado de dentro. Apertar ali com o polegar costuma doer (Koc e colegas, 2023).',
        'O tendão de Aquiles liga os músculos da panturrilha à parte de trás do osso do calcanhar. Existem dois tipos de dor no Aquiles, e o ponto da dor diferencia os dois (Chimenti e colegas, 2024; Jonsson e colegas, 2008):',
        {
          list: [
            '**No meio do tendão:** dor e, muitas vezes, um tendão mais grosso e sensível de 2 a 6\u00A0centímetros acima do osso do calcanhar. Normalmente dá para pinçar o ponto dolorido entre o indicador e o polegar.',
            '**Insercional:** dor bem onde o tendão se prende atrás do osso do calcanhar, muitas vezes pior quando o sapato aperta ali.',
          ],
        },
        'Uma dor embaixo do calcanhar que dói quando você aperta os lados do calcanhar, que queima ou formiga, ou que vem com dormência aponta para outras causas, como um nervo, uma fratura por estresse ou o coxim gorduroso do calcanhar (Tu, 2018). A página [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/) fala dessas causas.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.jonsson, CITE.tuHeelPain],
    },
    {
      h2: 'Quando dói: nos primeiros passos ou durante a atividade?',
      paragraphs: [
        '**A fascite plantar é uma dor de primeiros passos.** A diretriz descreve uma dor no calcanhar que aparece mais nos primeiros passos da manhã ou depois de ficar sentado, que muitas vezes melhora conforme você anda e volta depois de muito tempo em pé (Koc e colegas, 2023). A página [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) explica esse padrão.',
        '**A tendinopatia de Aquiles é uma dor de carga.** O tendão também pode ficar rígido de manhã, e é por isso que as duas se confundem. A diferença é o que piora a dor ao longo do dia: atividades de carga como correr e pular, e a dor tende a acompanhar o quanto você fez (Chimenti e colegas, 2024). Subidas e impulsos rápidos sobrecarregam o tendão ainda mais.',
        'Então as duas podem doer de manhã. Pergunte a si mesmo onde, e não só quando: uma faixa rígida e dolorida atrás do tornozelo aponta para o Aquiles, uma pontada embaixo do calcanhar aponta para a fáscia plantar.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'Fascite plantar ou tendinite de Aquiles: a tabela lado a lado',
      paragraphs: [
        'A tabela resume o quadro típico. Muita gente não se encaixa direitinho em uma coluna só, e só o exame de um profissional de saúde pode dizer qual das duas você tem.',
      ],
      table: {
        caption: 'Fascite plantar e tendinopatia de Aquiles lado a lado',
        head: ['', 'Fascite plantar', 'Tendinopatia de Aquiles'],
        rows: [
          ['Onde', 'Embaixo do calcanhar, lado de dentro', 'Atrás do calcanhar ou de 2 a 6\u00A0cm acima'],
          ['Pior', 'Primeiros passos depois do repouso', 'Impulso, corrida, subidas'],
          ['Dói ao apertar', 'Embaixo do calcanhar', 'Tendão pinçado atrás'],
          ['Ligada a', 'Tornozelo rígido, peso, ficar em pé', 'Esporte em 35% dos casos'],
          ['Exercício com o grau mais alto', 'Alongamento, grau A', 'Carga no tendão, grau A'],
          ['Alongar a panturrilha?', 'Sim, grau A', 'Opcional, grau C'],
          ['Diretriz', 'Koc 2023', 'Chimenti 2024'],
        ],
      },
      after: [
        'Os fatores de risco vêm de estudos diferentes. Na fascite plantar, quem dobrava o tornozelo 0\u00A0grau ou menos tinha 23,3\u00A0vezes a chance de ter o problema, e um índice de massa corporal acima de 30 e passar a maior parte do dia de trabalho em pé também aumentavam a chance (Riddle e colegas, 2003). Em um estudo holandês com 57.725\u00A0pessoas cadastradas com um médico de família, a tendinopatia de Aquiles no meio do tendão foi diagnosticada em 2,35 a cada 1.000 adultos de 21 a 60\u00A0anos em um ano, e 35% dos casos tinham ligação com o esporte (de Jonge e colegas, 2011).',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.riddle, CITE.deJongeIncidence],
    },
    {
      h2: 'Quais exercícios servem para a fascite plantar?',
      keyFact: 'Em um ensaio com 101\u00A0pessoas com dor crônica no calcanhar, o alongamento da fáscia plantar deu resultados melhores em 8\u00A0semanas do que só o alongamento de panturrilha (DiGiovanni e colegas, 2003).',
      paragraphs: [
        '**Na fascite plantar, o alongamento vem primeiro.** A diretriz de 2023 dá aos alongamentos da fáscia plantar e da panturrilha o grau **A**, o seu mais alto, e ao trabalho de força o grau **B** (Koc e colegas, 2023).',
        'O alongamento que trabalha o arco faz diferença. Em um ensaio com 101\u00A0pessoas, o grupo que fazia o alongamento da fáscia plantar relatou resultados melhores em 8\u00A0semanas do que o grupo que fazia só o alongamento de panturrilha (DiGiovanni e colegas, 2003). Para a força, um ensaio de 2015 com 48\u00A0pessoas usou a elevação de calcanhar lenta com uma toalha embaixo dos dedos, que aliviou a dor mais rápido do que só o alongamento em três meses, embora em doze meses os dois grupos estivessem mais ou menos iguais (Rathleff e colegas, 2015).',
        'Estas são as doses iniciais do guia [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Dor forte no calcanhar que não alivia quando você solta',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha rígida puxa o calcanhar o dia todo, então este alongamento importa mesmo que você o sinta mais para cima.',
          stop: 'Um puxão forte atrás do osso do calcanhar',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: { level: 'moderate', why: 'Esta é a rotina de um ensaio com 48\u00A0pessoas, e a diretriz de 2023 dá ao trabalho de força o grau B.' },
          dose: '4\u00A0séries de 10, cada perna, com peso extra',
          often: 'Dias de força',
          feel: 'Trabalho pesado na panturrilha',
          how: 'Fique em um pé só sobre um degrau, com uma toalha enrolada embaixo dos dedos. Leve três segundos para subir, segure dois lá em cima e leve três segundos para descer. Neste nível o Walkito acrescenta peso, como uma mochila. É a toalha que faz este exercício trabalhar a fáscia plantar, e não só a panturrilha.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com toalha',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos para subir, dois lá em cima, três para descer',
          alt: 'Uma figura subindo na ponta dos pés em um degrau com uma toalha enrolada, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quais exercícios servem para a tendinite de Aquiles?',
      keyFact: 'Em um estudo piloto com 27\u00A0pessoas com dor insercional no Aquiles, as descidas do calcanhar no nível do chão deram bons resultados em 67% (Jonsson e colegas, 2008).',
      paragraphs: [
        '**No Aquiles, a carga vem primeiro, não o alongamento.** A diretriz de 2024 dá aos exercícios de carga no tendão o grau **A**: elevações de calcanhar, sustentações e descidas lentas que fazem o tendão trabalhar (Chimenti e colegas, 2024). A diretriz dá ao alongamento de panturrilha um grau mais baixo, **C**, e só para quem tem o tornozelo que dobra pouco (Chimenti e colegas, 2024).',
        'Um pouco de dor é permitido. Em um ensaio com 38\u00A0pessoas, uma dor de até cerca de 5 de 10 durante a carga não era problema, desde que passasse até a manhã seguinte e não aumentasse de uma semana para outra, e em doze meses esse grupo estava tão bem quanto o grupo que primeiro ficou em repouso (Silbernagel e colegas, 2007).',
        'Se a dor é bem no osso do calcanhar (insercional), faça todas as elevações e descidas do calcanhar no nível do chão, e vá com calma nos alongamentos de panturrilha. Deixar o calcanhar descer abaixo do degrau comprime o tendão contra o osso. Em um estudo piloto com 27\u00A0pessoas, as descidas no nível do chão deram bons resultados em 67% (Jonsson e colegas, 2008). Mais detalhes em [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar sustentada (isométrica)',
          evidence: { level: 'moderate', why: 'A diretriz de 2024 para o Aquiles inclui a carga isométrica. Nenhum ensaio randomizado testou as sustentações sozinhas como um programa completo.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés',
          often: 'Dias de força, ou na maioria dos dias enquanto o tendão estiver irritado',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não desça de novo. Segurar lá em cima põe carga no tendão sem quicar.',
          stop: 'Dor acima de 5 de 10 que não passa até a manhã seguinte',
          image: 'Exercício: elevação de calcanhar sustentada',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Descida excêntrica do calcanhar (joelho esticado)',
          evidence: { level: 'strong', why: 'Baseada no protocolo de Alfredson para dor no meio do tendão (3 x 15, duas vezes por dia); o Walkito começa com 3 x 10. A diretriz de 2024 dá ao exercício o grau A.' },
          dose: '3\u00A0séries de 10, cada perna',
          often: 'Dias de força',
          feel: 'Trabalho pesado na panturrilha durante a descida, não um alongamento lá embaixo',
          how: 'Fique na beira de um degrau. Suba com os dois pés, passe o peso para a perna dolorida e desça devagar, em três segundos. Use os dois pés para subir de novo. Se a dor for bem no osso do calcanhar, faça no chão plano e não deixe o calcanhar descer abaixo do degrau.',
          stop: 'Dor acima de 5 de 10 que não passa até a manhã seguinte, ou que piora de uma semana para outra',
          image: 'Exercício: descida excêntrica do calcanhar',
          media: 'heel_drop_straight',
          caption: 'Descida excêntrica do calcanhar: suba com os dois pés, desça devagar com um',
          alt: 'Uma figura em um degrau descendo um calcanhar abaixo da beira com o joelho esticado, com a panturrilha e o Aquiles destacados',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Dá para ter fascite plantar e tendinite de Aquiles ao mesmo tempo?',
      keyFact: 'Em 52\u00A0ressonâncias magnéticas, a fáscia plantar tinha 3,43\u00A0mm de espessura em quem tinha alterações no Aquiles, contra 2,09\u00A0mm em quem não tinha (Stecco e colegas, 2013).',
      paragraphs: [
        '**Sim, e as duas estão ligadas.** Em um estudo com 52\u00A0ressonâncias magnéticas de pessoas com dor no pé ou no tornozelo, as 27 com alterações no Aquiles tinham a fáscia plantar mais grossa, 3,43\u00A0mm em média contra 2,09\u00A0mm. Cinco das 27 tinham a fáscia plantar acima de 4,5\u00A0mm, um limite comum para a fascite plantar. Nenhuma das outras 25 passou de 4\u00A0mm (Stecco e colegas, 2013).',
        'O mesmo estudo descobriu que a fáscia plantar se liga à bainha em volta do Aquiles pelo revestimento do osso do calcanhar. Um estudo em cadáveres mostrou que puxar o Aquiles tensiona a fáscia plantar, e mais ainda quando os dedos estão dobrados para cima (Carlson e colegas, 2000). Uma panturrilha rígida ou sobrecarregada pode, portanto, tensionar as duas.',
        'Nenhum estudo contou com que frequência as pessoas têm as duas condições juntas, então não existe um número confiável. Nenhuma diretriz aborda quem tem as duas. Um caminho que respeita as duas diretrizes: trabalho de força para a panturrilha que sirva para o tendão, mais o alongamento da fáscia plantar, que trabalha o arco, não o Aquiles. Faça as descidas do calcanhar no nível do chão se a parte de trás do osso do calcanhar doer.',
      ],
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass, CITE.guideline, CITE.achillesGuideline],
    },
    {
      h2: 'O que mais causa uma dor no calcanhar parecida com essas duas?',
      paragraphs: [
        'Vários problemas ficam ali perto e podem dar uma sensação parecida (Choo e colegas, 2020; Tu, 2018):',
        {
          list: [
            'Um calombo ósseo atrás do calcanhar com uma área dolorida e inchada na linha do sapato: [deformidade de Haglund](/pt/deformidade-de-haglund/) ou bursite retrocalcânea, muitas vezes junto com dor insercional no Aquiles.',
            'Um esporão no calcanhar no raio X: é comum, e normalmente não é a causa da dor. Veja [fascite plantar ou esporão](/pt/fascite-plantar-ou-esporao/).',
            'Uma dor profunda, como de hematoma, no meio da almofada do calcanhar, pior em pisos duros: [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
            'Dor dos dois lados do calcanhar quando você aperta, depois de um aumento repentino de caminhada ou corrida: possível fratura por estresse, que precisa ser vista por um profissional de saúde.',
            'Queimação, formigamento ou dormência: talvez um nervo comprimido.',
          ],
        },
      ],
      cites: [CITE.chooRearfoot, CITE.tuHeelPain],
    },
    {
      h2: 'Quanto tempo cada uma leva para melhorar?',
      paragraphs: [
        'Na fascite plantar, cerca de 90% das pessoas melhoram com cuidados sem cirurgia, mas isso muitas vezes leva meses (Latt e colegas, 2020). A página [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) tem os detalhes.',
        'Na tendinopatia de Aquiles, os principais ensaios de carga duraram cerca de três meses e acompanharam as pessoas até doze meses. A diretriz de 2024 observa que a função pode começar a melhorar em até 2\u00A0semanas, mas uma recuperação mais completa leva mais tempo (Chimenti e colegas, 2024). A dor insercional foi mais difícil de ajudar com as descidas clássicas do calcanhar abaixo do degrau: só 32% tiveram bons resultados em um estudo anterior, e é por isso que se usam as descidas no nível do chão (Jonsson e colegas, 2008).',
        'Nenhum estudo comparou diretamente o tempo de recuperação das duas.',
      ],
      cites: [CITE.latt, CITE.achillesGuideline, CITE.jonsson],
    },
  ],
  faq: [
    {
      q: 'Como saber se a minha dor no calcanhar é fascite plantar ou tendinite de Aquiles?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Comece pelo lugar da dor. A fascite plantar dói embaixo do calcanhar, para o lado de dentro, e é pior nos primeiros passos depois do repouso. A tendinite de Aquiles dói atrás do calcanhar ou no tendão de 2 a 6\u00A0centímetros acima, e piora com o impulso, a corrida e as subidas. Um profissional de saúde pode confirmar qual é.',
    },
    {
      q: 'A fascite plantar pode causar dor no Aquiles?',
      cites: [CITE.steccoPfAchilles, CITE.carlsonWindlass],
      a: 'Elas estão ligadas, mas nenhum estudo mostra que uma causa a outra. Em 52\u00A0ressonâncias magnéticas, quem tinha alterações no Aquiles tinha a fáscia plantar mais grossa, 3,43\u00A0mm contra 2,09\u00A0mm. Um estudo em cadáveres mostrou que a tensão no Aquiles tensiona a fáscia plantar. Uma panturrilha rígida e sobrecarregada pode forçar as duas.',
    },
    {
      q: 'A tendinite de Aquiles é pior de manhã, como a fascite plantar?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Pode ser. As duas podem dar rigidez e dor nos primeiros passos do dia, e é por isso que se confundem. A fascite plantar é uma pontada embaixo do calcanhar que melhora conforme você anda. A dor do Aquiles fica atrás do tornozelo e tende a aumentar com corrida, saltos, subidas e escadas.',
    },
    {
      q: 'Devo alongar a panturrilha na tendinite de Aquiles?',
      cites: [CITE.achillesGuideline, CITE.jonsson],
      a: 'É opcional. A diretriz de 2024 para o Aquiles coloca os exercícios de carga no tendão em primeiro lugar, com grau A, e dá ao alongamento de panturrilha um C, para quem tem o tornozelo que dobra pouco. Se a sua dor é bem no osso do calcanhar, alongamentos profundos de panturrilha e descidas do calcanhar abaixo do degrau comprimem o tendão contra o osso, então faça tudo de leve e no nível do chão.',
    },
    {
      q: 'Os exercícios para fascite plantar e tendinite de Aquiles são os mesmos?',
      cites: [CITE.guideline, CITE.achillesGuideline],
      a: 'Eles se sobrepõem, mas não são os mesmos. A fascite plantar começa com os alongamentos da fáscia plantar e da panturrilha, com grau A, mais a elevação de calcanhar, com grau B. A tendinite de Aquiles começa com carga: elevação de calcanhar sustentada, elevação de calcanhar e descidas lentas do calcanhar, com grau A. O trabalho de força para a panturrilha serve para as duas.',
    },
    {
      q: 'Dá para ter fascite plantar e tendinite de Aquiles juntas?',
      cites: [CITE.steccoPfAchilles],
      a: 'Sim. Em um estudo com ressonância magnética de 52\u00A0pessoas com dor no pé ou no tornozelo, 5 das 27 com alterações no Aquiles também tinham a fáscia plantar grossa o bastante para atingir um limite comum para a fascite plantar. Nenhum estudo contou com que frequência as duas aparecem juntas na população em geral.',
    },
    {
      q: 'Dor atrás do calcanhar é fascite plantar?',
      cites: [CITE.guideline, CITE.chooRearfoot],
      a: 'Normalmente não. A fascite plantar dói embaixo do calcanhar. A dor atrás do calcanhar é mais frequentemente tendinopatia de Aquiles, bursite retrocalcânea ou deformidade de Haglund, um calombo ósseo onde o tendão se prende. Um estalo repentino atrás do calcanhar precisa de um profissional de saúde no mesmo dia.',
    },
    {
      q: 'Esporão no calcanhar quer dizer fascite plantar ou tendinite de Aquiles?',
      cites: [CITE.chooRearfoot],
      a: 'Sozinho, nenhuma das duas. Um esporão embaixo do calcanhar fica perto da fáscia plantar, e um esporão atrás fica onde o Aquiles se prende, mas esporões são comuns em pessoas sem dor. É o exame, e não só o raio X, que define o que está causando a dor.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'você sentiu um estalo repentino atrás do tornozelo, ou como se tivesse levado um chute ali, e agora fica difícil dar impulso com o pé',
      'você não consegue subir na ponta do pé do lado dolorido, ou sente um buraco no tendão',
      'você está tomando ou tomou recentemente um antibiótico do grupo das fluoroquinolonas, como o ciprofloxacino, e tem uma dor nova no tendão',
      'o calcanhar está vermelho, quente e inchado, ou você está com febre',
      'o calcanhar dói dos dois lados quando você aperta, ou dói à noite ou em repouso',
      'você sente queimação, formigamento ou dormência no calcanhar ou na sola do pé',
      'a dor começou depois de uma queda ou lesão, ou você não consegue apoiar o peso no pé',
      'a dor continua piorando ao longo de semanas mesmo com exercício regular',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Você diz onde dói, embaixo do calcanhar ou atrás, e ele monta o plano a partir da sua resposta: alongamentos da fáscia plantar e elevação de calcanhar com toalha para a dor no calcanhar, carga na panturrilha desde a elevação sustentada até as descidas lentas do calcanhar para a dor no Aquiles.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão, você dá uma nota para a dor no calcanhar ao acordar, e o plano se ajusta. O Walkito não faz diagnóstico, então se você não tiver certeza de qual das duas tem, peça antes a avaliação de um profissional de saúde.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['achilles', 'hubPlantarFasciitis', 'pfVsHeelSpur'],
  crumb: 'Fascite plantar ou Aquiles',
  campaign: 'guide-plantar-fasciitis-vs-achilles-tendonitis-pt',
};
