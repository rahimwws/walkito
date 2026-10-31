import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/heel-pain-not-plantar-fasciitis.ts
 * (2026-10-19), written around «dor no calcanhar que não é fascite plantar»
 * and «o que pode ser dor no calcanhar». Informal «você». Figures, grades,
 * doses, hedges and CITE keys are identical to the English page after its
 * fact-check. Same media ids. Exercise names follow the other Portuguese PF
 * pages. Link to /foot-pain-identifier/ removed (no Portuguese page), words
 * kept. "Clinician" is «profissional de saúde».
 */

export const HEEL_NOT_PF_PT: Guide = {
  lang: 'pt',
  page: 'heelNotPf',
  mainSource: CITE.latt,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Dor no calcanhar que não é fascite plantar: 9 causas',
  description:
    'Dor no calcanhar que não é fascite plantar: coxim gorduroso, nervos, fratura por estresse, Aquiles, Haglund, Sever, tendão tibial, artrite e coluna.',
  h1: 'Dor no calcanhar que não é fascite plantar: as causas parecidas e como diferenciar',
  lede:
    'Se a sua dor no calcanhar não segue o padrão comum da [fascite plantar](/pt/fascite-plantar/), pior nos primeiros passos da manhã e melhorando conforme o pé aquece, pode ser outra coisa. Embaixo do calcanhar, as causas parecidas mais comuns são um coxim gorduroso machucado ou fino, um nervo irritado, inclusive um nervo comprimido na lombar, uma fratura por estresse do calcâneo e a artrite inflamatória (Latt e colegas, 2020). A dor atrás do calcanhar tem causas próprias, como o tendão de Aquiles. Em 250\u00A0pessoas com dor embaixo do calcanhar, a fascite plantar explicou 53,2% dos casos e a atrofia do coxim gorduroso, 14,8% (Yi e colegas, 2011).',
  intro: [
    'Esta página compara lado a lado nove condições parecidas: onde cada uma dói, quando, o que piora e o que fazer em seguida. Não é um diagnóstico. Várias delas dão uma sensação parecida, duas podem aparecer ao mesmo tempo, e só um profissional de saúde que examina o seu pé consegue diferenciá-las. Se você quer uma triagem rápida pelo local da dor, o identificador de dor no pé faz isso; esta página explica as diferenças por trás dele.',
  ],
  takeaways: [
    'A dor típica da fascite plantar fica perto da parte de dentro do calcanhar, é pior no primeiro passo da manhã ou depois de ficar sentado, melhora com a atividade e depois volta a piorar conforme a atividade continua (Latt e colegas, 2020).',
    'Em 250\u00A0pessoas com dor na sola do calcanhar, a fascite plantar respondeu por 53,2% dos casos, a atrofia do coxim gorduroso por 14,8% e as duas juntas por 9,2% (Yi e colegas, 2011).',
    'Dor no calcanhar em queimação, em choque ou com formigamento muitas vezes aponta para um nervo. Uma revisão estima que a compressão do nervo de Baxter pode explicar até 20% da dor crônica no calcanhar (Tedeschi, 2025).',
    'Uma fratura por estresse do calcâneo costuma doer com a atividade, não no primeiro passo, e em 30\u00A0recrutas militares apareceu no raio-X simples em apenas 15% (Latt e colegas, 2020; Sormaala e colegas, 2006).',
    'Dor nos dois calcanhares junto com outras articulações doloridas ou rígidas, ou uma coluna rígida, sugere uma causa inflamatória que precisa de um médico, não só de alongamentos (Latt e colegas, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que mais pode causar dor no calcanhar além da fascite plantar?',
      keyFact: 'Em 250\u00A0pessoas com dor na sola do calcanhar, a fascite plantar explicou 53,2% dos casos, a atrofia do coxim gorduroso sozinha 14,8% e as duas juntas 9,2% (Yi e colegas, 2011).',
      paragraphs: [
        '**A fascite plantar é a causa mais comum de dor no calcanhar, mas está longe de ser a única.** Uma diretriz de cirurgiões do pé dos Estados Unidos descreve a dor no calcanhar como principalmente mecânica, mas diz que causas ligadas a nervos, artrite, lesões, tumores, infecções e vasos sanguíneos também precisam ser consideradas (Thomas e colegas, 2010). Uma revisão de 2020 agrupa as causas de dor embaixo do calcanhar em problemas de nervo, lesões como uma fratura por estresse ou uma ruptura da fáscia, artrite inflamatória e desgaste do coxim gorduroso ou da própria fáscia (Latt e colegas, 2020).',
        'A tabela coloca as nove condições parecidas mais comuns ao lado da fascite plantar. Leia como um mapa de padrões, não como uma lista de verificação: as células descrevem o que é típico, e o seu calcanhar não precisa seguir o padrão à risca.',
      ],
      table: {
        caption: 'Condições parecidas com a fascite plantar: padrões típicos. Só um profissional de saúde confirma qual é a sua.',
        head: ['Condição', 'Onde dói', 'Quando', 'Piora com', 'Próximo passo'],
        rows: [
          ['[Fascite plantar](/pt/fascite-plantar/)', 'Sola do calcanhar, lado de dentro', 'Primeiros passos da manhã, depois de sentar', 'Muito tempo em pé, andar sem parar', 'Alongamento e força na panturrilha'],
          ['[Síndrome do coxim gorduroso](/pt/sindrome-coxim-gorduroso-calcanhar/)', 'Centro do calcanhar, como um hematoma profundo', 'Em pé e andando', 'Piso duro, descalço', 'Amortecimento, profissional de saúde'],
          ['Nervo (Baxter, túnel do tarso)', 'Calcanhar por dentro ou sola, pode irradiar', 'Não ligado aos primeiros passos, pode ser em repouso', 'Queimação, formigamento, dormência', 'Profissional de saúde'],
          ['[Fratura por estresse](/pt/fascite-plantar-ou-fratura-por-estresse/)', 'Osso do calcanhar todo, lados doloridos', 'Aumenta com a atividade', 'Correr, pular, mais quilometragem', 'Menos carga, profissional de saúde logo'],
          ['[Aquiles insercional](/pt/fascite-plantar-ou-tendinite-de-aquiles/)', 'Atrás do calcanhar, junto ao osso', 'Durante e depois da atividade', 'Subidas, escadas, alongamento fundo', 'Carga na panturrilha, descidas de calcanhar no chão'],
          ['[Haglund](/pt/deformidade-de-haglund/)', 'Saliência atrás e em cima do calcanhar', 'Com calçado', 'Contrafortes duros', 'Contraforte macio, elevação de calcanhar'],
          ['[Sever (crianças)](/pt/doenca-de-sever/)', 'Atrás ou nos lados do calcanhar', 'Durante e depois do esporte', 'Correr, pular, estirões', 'Menos carga, profissional de saúde'],
          ['[Tendão tibial posterior](/pt/disfuncao-tendao-tibial-posterior/)', 'Tornozelo por dentro e arco', 'Andando, em pé', 'Terreno irregular, subidas', 'Profissional de saúde, depois exercício'],
          ['Artrite inflamatória', 'Os dois calcanhares, com outras articulações', 'Rigidez de manhã por mais de 30\u00A0minutos', 'Outras articulações e coluna rígidas', 'Médico'],
          ['Vinda da coluna', 'Calcanhar ou sola, com dor na perna', 'Varia, com dor nas costas', 'Dor nas costas ou na perna, dormência', 'Médico'],
        ],
      },
      after: [
        'As linhas de nervo, coluna e artrite não têm link porque não temos página sobre elas: elas precisam de avaliação médica, não de um guia de exercícios. Cada linha é explicada nas seções abaixo.',
      ],
      cites: [CITE.yiFatPad, CITE.thomasCpg, CITE.latt],
    },
    {
      h2: 'Como costuma ser a dor da fascite plantar?',
      paragraphs: [
        '**Conhecer o padrão comum é o jeito mais fácil de perceber quando o seu calcanhar não se encaixa nele.** A fascite plantar típica é uma dor surda ou latejante em volta da parte da frente e de dentro do calcanhar, onde a fáscia se prende. Ela é pior no primeiro passo da manhã e quando você levanta depois de ficar sentado, muitas vezes melhora quando você começa a se mexer e depois volta a piorar conforme o tempo em pé ou andando se prolonga (Latt e colegas, 2020). Mais sobre esse padrão em [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/).',
        'A mesma revisão diz que, quando a pessoa não descreve esses sinais clássicos, o profissional de saúde deve procurar outras causas. Ela também observa que a fascite plantar costuma afetar um pé só, embora cerca de 30% das pessoas a tenham nos dois (Latt e colegas, 2020). Então dois calcanhares doloridos não descartam a fascite plantar, mas são um motivo para olhar mais amplamente.',
        'A fascite plantar também é a causa mais comum, então um calcanhar que se encaixa na maior parte do padrão ainda tem mais chance de ser fascite plantar. Nas 250\u00A0pessoas citadas acima, ela explicou sozinha cerca de metade dos casos e estava presente em outros 9,2% junto com a atrofia do coxim gorduroso (Yi e colegas, 2011).',
      ],
      cites: [CITE.latt, CITE.yiFatPad],
    },
    {
      h2: 'Pode ser um nervo, ou uma dor vinda da coluna?',
      keyFact: 'Uma revisão de 2025 estima que a compressão do nervo de Baxter pode responder por até 20% da dor crônica no calcanhar e muitas vezes é confundida com fascite plantar (Tedeschi, 2025).',
      paragraphs: [
        '**Uma dor descrita como queimação ou como um choque elétrico muitas vezes vem de um nervo** (Latt e colegas, 2020). Três origens nervosas são as suspeitas de sempre:',
        {
          list: [
            '**O nervo de Baxter**, um pequeno ramo que passa embaixo do calcanhar. Quando ele é comprimido, dá uma dor crônica em queimação na almofada do calcanhar (Latt e colegas, 2020). Uma revisão estima que ele pode explicar até 20% da dor crônica no calcanhar e diz que muitas vezes é confundido com fascite plantar (Tedeschi, 2025), enquanto outra o considera pouco comum (Latt e colegas, 2020).',
            '**A síndrome do túnel do tarso**, em que o nervo tibial é comprimido atrás do osso de dentro do tornozelo. Ela costuma trazer dor em queimação ou em pontada ao longo da sola, muitas vezes com dormência (Latt e colegas, 2020). Mais sobre dor de nervo no arco em [dor no arco do pé](/pt/dor-no-arco-do-pe/).',
            '**Um nervo comprimido na lombar**, no nível L5 ou S1. É relativamente comum e normalmente vem com dor nas costas, dor descendo pela perna ou dormência no pé ou na perna (Latt e colegas, 2020).',
          ],
        },
        'Uma revisão sobre dor no calcanhar de origem nervosa concluiu que a compressão de nervos pode ter um papel tanto no início quanto na dor no calcanhar que não melhora, mas que o mecanismo e a melhor forma de testá-la ainda estão em debate (Alshami e colegas, 2008). Dor à noite ou em repouso com formigamento é explicada em [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/).',
        'Este é um grupo em que os exercícios por conta própria não são o primeiro passo. Um profissional de saúde examina o pé, por exemplo batendo de leve ao longo do nervo tibial, e pode usar ultrassom, exames dos nervos ou ressonância magnética (Latt e colegas, 2020; Tedeschi, 2025).',
      ],
      cites: [CITE.latt, CITE.tedeschiBaxter, CITE.alshami],
    },
    {
      h2: 'Pode ser uma fratura por estresse ou o coxim gorduroso?',
      keyFact: 'Em 30\u00A0recrutas militares cuja ressonância magnética mostrou uma lesão por estresse no calcâneo, a lesão apareceu no raio-X simples em apenas 15% (Sormaala e colegas, 2006).',
      paragraphs: [
        '**As duas tendem a doer com a atividade, e não no primeiro passo da manhã.** Uma fratura por estresse do calcâneo costuma causar uma dor na parte de trás do osso do calcanhar ligada à atividade, não ao levantar da cama. Ela é mais provável se você já teve baixa densidade óssea ou uma fratura por estresse antes (Latt e colegas, 2020). Normalmente vem depois de um salto na caminhada, na corrida ou de uma troca para uma superfície mais dura (Tu, 2018).',
        'Um raio-X normal não a descarta: em 30\u00A0recrutas com uma lesão por estresse no calcâneo vista na ressonância magnética, o raio-X simples mostrou a lesão em apenas 15% (Sormaala e colegas, 2006). A comparação lado a lado está em [fascite plantar ou fratura por estresse](/pt/fascite-plantar-ou-fratura-por-estresse/).',
        'A dor do coxim gorduroso costuma ser descrita como uma dor profunda, parecida com um hematoma, no meio da almofada do calcanhar, pior em piso duro e descalço. Assim como a fratura por estresse, ela tende a estar ligada à atividade (Latt e colegas, 2020), e em uma clínica ela afetou com mais frequência os dois calcanhares e piorava com o tempo em pé (Yi e colegas, 2011). Foi a segunda causa mais comum nas 250\u00A0pessoas citadas acima, com 14,8% (Yi e colegas, 2011). Uma revisão de 2022 encontrou apenas sete estudos originais sobre o tema, então boa parte das orientações vem da experiência, não de ensaios (Chang e colegas, 2022). Mais em [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/) e, sobre o papel do esporão, em [fascite plantar ou esporão](/pt/esporao-calcaneo-exercicios/).',
      ],
      cites: [CITE.latt, CITE.tuHeelPain, CITE.sormaalaCalcaneus, CITE.yiFatPad, CITE.fatPadReview],
    },
    {
      h2: 'E se a dor for atrás do calcanhar?',
      paragraphs: [
        '**A fascite plantar dói embaixo do calcanhar. A dor atrás do calcanhar normalmente vem do tendão de Aquiles, do osso onde ele se prende ou, em crianças, da placa de crescimento.** Três condições parecidas ficam aqui:',
        {
          list: [
            '**Tendinopatia insercional do Aquiles**, dor bem no ponto em que o tendão de Aquiles encontra o osso do calcanhar, e não mais acima no tendão (Jonsson e colegas, 2008). Veja [fascite plantar ou tendinite de Aquiles](/pt/fascite-plantar-ou-tendinite-de-aquiles/) e [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
            '**Deformidade de Haglund**, uma saliência óssea na parte de cima e de trás do calcanhar em que o calçado esfrega, o que pode irritar a bursa e o tendão (Yuen e colegas, 2022). Veja [deformidade de Haglund](/pt/deformidade-de-haglund/).',
            '**Doença de Sever** em crianças que ainda estão crescendo: a placa de crescimento atrás do calcanhar fica dolorida com corrida e saltos. Em crianças, dor quando o calcanhar é apertado dos dois lados aponta para ela (Tu, 2018). Veja [doença de Sever](/pt/doenca-de-sever/).',
          ],
        },
        'A dor insercional do Aquiles muda a forma de se exercitar: as descidas de calcanhar ficam no nível do chão, sem deixar o calcanhar descer abaixo do degrau, porque um alongamento profundo pode pressionar o tendão contra o osso (Jonsson e colegas, 2008).',
      ],
      cites: [CITE.jonsson, CITE.yuenHaglund, CITE.tuHeelPain],
    },
    {
      h2: 'E se os dois calcanhares doem, ou outras articulações também estão rígidas?',
      paragraphs: [
        '**Dor nos dois calcanhares, dor no calcanhar junto com várias articulações doloridas ou rígidas, ou uma coluna rígida sugerem uma causa inflamatória**, como artrite psoriática, artrite reativa ou espondiloartrite (Latt e colegas, 2020). O grupo das espondiloartrites é mais comum em homens jovens, enquanto a fascite plantar é mais comum na meia-idade e com mais frequência em mulheres (Latt e colegas, 2020).',
        'A mesma revisão lista as pistas que levam um médico a pedir exames de sangue: sintomas em outras partes do corpo, os dois pés afetados, várias articulações envolvidas, principalmente as pequenas, e rigidez de manhã que dura mais de 30\u00A0minutos (Latt e colegas, 2020).',
        'Os dois calcanhares também podem doer na fascite plantar. Em um acompanhamento de 5 a 15\u00A0anos de 174\u00A0pessoas com fascite plantar, dor nos dois calcanhares esteve ligada a sintomas que duraram mais (Hansen e colegas, 2018). Por isso dois calcanhares doloridos são um motivo para fazer uma avaliação, não uma prova de artrite.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'E se dói na parte de dentro do tornozelo e no arco?',
      paragraphs: [
        '**Uma dor que fica atrás ou abaixo do osso de dentro do tornozelo e ao longo do arco, e não embaixo do calcanhar, pode vir do tendão tibial posterior.** Ele é o principal suporte ativo do arco interno, e quem tem um problema nele sente dor na parte de dentro do tornozelo e tem um pé que vai ficando chato aos poucos (Deu e colegas, 2022). Em uma pesquisa com 582\u00A0mulheres com mais de 40\u00A0anos na Inglaterra, 3,3% tinham disfunção do tendão tibial posterior em fase inicial, e nenhuma delas tinha diagnóstico (Kohls-Gatzoulis e colegas, 2009).',
        'Um arco que está ficando mais chato de um lado, ou dificuldade para subir na ponta daquele pé, é motivo para procurar um profissional de saúde. O exercício tem algum respaldo nas fases iniciais, mas só três ensaios pequenos, com 93\u00A0pessoas no total, o testaram (Ross e colegas, 2018). Mais em [disfunção do tendão tibial posterior](/pt/disfuncao-tendao-tibial-posterior/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'O que fazer agora, e quando os exercícios fazem sentido?',
      paragraphs: [
        '**Se o seu calcanhar se encaixa no padrão da fascite plantar e nenhum dos sinais de alerta abaixo se aplica, alongamento e trabalho de força na panturrilha são as opções de primeira linha.** A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau **A** e ao trabalho de força o grau **B** para a fascite plantar (Koc e colegas, 2023). Esses exercícios são só para fascite plantar. Eles não servem para uma suspeita de fratura, um problema de nervo ou artrite.',
        'Se a sua dor se encaixa em outra linha da tabela, ou se você não tem certeza, procure um clínico geral, um fisioterapeuta ou um podólogo. Leve uma anotação curta: onde dói, quando é pior, o que piora, se é um pé ou os dois e qualquer coisa que veio junto, como dormência, inchaço ou dor nas costas. É isso que o profissional de saúde usa para separar as condições parecidas.',
        'Se você faz exercícios para fascite plantar há várias semanas e nada mudou, isso também vale uma consulta. O cuidado sem cirurgia traz alívio completo para cerca de 90% das pessoas com fascite plantar, embora possa levar de três a seis meses, então uma dor que não se mexe é um motivo para conferir o diagnóstico (Latt e colegas, 2020). Veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) e os [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) completos.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para as condições parecidas desta página.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Queimação ou formigamento, dor no próprio osso do calcanhar, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para as condições parecidas desta página.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha encurtada puxa o calcanhar o dia todo, então este alongamento importa mesmo que você o sinta mais acima.',
          stop: 'Dor atrás do calcanhar, onde o Aquiles se prende, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para as condições parecidas desta página.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor atrás do calcanhar, onde o Aquiles se prende, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente e outro atrás e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada (só fascite plantar)',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B para a fascite plantar. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: '3\u00A0dias por semana, nunca dois seguidos',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha, quase sem carga no calcanhar. O ensaio de elevação de calcanhar citado neste site testou uma versão mais difícil, em pé (Rathleff e colegas, 2015).',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'O que costuma ser confundido com fascite plantar?',
      cites: [CITE.latt, CITE.yiFatPad],
      a: 'As condições parecidas mais comuns são a síndrome do coxim gorduroso do calcanhar, a compressão de um nervo, como o nervo de Baxter ou a síndrome do túnel do tarso, a fratura por estresse do calcâneo e a dor insercional do Aquiles. Também pode ser artrite inflamatória ou um nervo comprimido na lombar. Em 250\u00A0pessoas com dor embaixo do calcanhar, a atrofia do coxim gorduroso explicou 14,8% dos casos.',
    },
    {
      q: 'Como saber se a minha dor no calcanhar não é fascite plantar?',
      cites: [CITE.latt],
      a: 'Não dá para ter certeza sem um exame, mas alguns sinais não combinam. A fascite plantar costuma ser pior nos primeiros passos da manhã e alivia conforme você se mexe. Queimação ou formigamento, dor que aumenta com a atividade, dor atrás do calcanhar ou nos dois calcanhares com articulações rígidas sugerem outra coisa. Um profissional de saúde consegue esclarecer.',
    },
    {
      q: 'Dor no calcanhar pode vir da coluna?',
      cites: [CITE.latt],
      a: 'Sim. Um nervo comprimido na lombar, no nível L5 ou S1, pode causar dor, dormência ou formigamento no calcanhar e na sola. É relativamente comum e normalmente vem com dor nas costas ou dor descendo pela perna. Fraqueza no pé ou dormência que se espalha precisam de um médico sem demora.',
    },
    {
      q: 'Como é a dor de nervo no calcanhar?',
      cites: [CITE.latt, CITE.tedeschiBaxter],
      a: 'A dor de nervo no calcanhar costuma ser em queimação, em pontada ou como um choque elétrico, às vezes com formigamento ou dormência na sola. A compressão do nervo de Baxter dá uma dor em queimação na almofada do calcanhar, e uma revisão estima que ela pode explicar até 20% da dor crônica no calcanhar. Ela precisa da avaliação de um profissional de saúde.',
    },
    {
      q: 'Dor nos dois calcanhares é fascite plantar?',
      cites: [CITE.latt],
      a: 'Pode ser: cerca de 30% das pessoas com fascite plantar a têm nos dois pés. Mas dor nos dois calcanhares, principalmente com outras articulações doloridas ou rígidas, coluna rígida ou rigidez de manhã que dura mais de 30\u00A0minutos, pode apontar para artrite inflamatória. Essa combinação é um motivo para procurar um médico.',
    },
    {
      q: 'O raio-X mostra o que está causando a minha dor no calcanhar?',
      cites: [CITE.sormaalaCalcaneus, CITE.guideline],
      a: 'Às vezes, mas um raio-X normal descarta menos do que as pessoas pensam. Em 30\u00A0recrutas com uma lesão por estresse no calcâneo vista na ressonância magnética, o raio-X simples mostrou a lesão em apenas 15%. Para a fascite plantar típica, a diretriz de 2023 diz que exames de imagem normalmente não são necessários. Um profissional de saúde decide se vale fazer ultrassom, ressonância ou exames dos nervos.',
    },
    {
      q: 'Por que a minha fascite plantar não melhora?',
      cites: [CITE.latt],
      a: 'Há vários motivos possíveis, e um deles é que talvez não seja fascite plantar. Cerca de 90% das pessoas com fascite plantar melhoram com cuidado sem cirurgia, então uma dor que não mudou depois de várias semanas de alongamento e trabalho de força constantes é um bom motivo para pedir a um profissional de saúde que confira o diagnóstico.',
    },
    {
      q: 'O que causa dor no calcanhar em crianças, se não é fascite plantar?',
      cites: [CITE.tuHeelPain],
      a: 'Em crianças que ainda estão crescendo, a causa mais comum é a doença de Sever, uma irritação da placa de crescimento atrás do osso do calcanhar. Ela dói durante e depois de esportes com corrida e saltos, e um calcanhar que dói quando apertado dos dois lados aponta para ela. Uma dor no calcanhar de criança que não passa deve ser vista por um profissional de saúde.',
    },
    {
      q: 'Posso fazer exercícios para fascite plantar se não tenho certeza do que é?',
      cites: [CITE.guideline],
      a: 'A diretriz de 2023 dá aos alongamentos da fáscia plantar e da panturrilha o grau A para a fascite plantar, e eles são suaves. Mas, se você tem queimação ou dormência, inchaço, dor que aumenta com a atividade ou dor depois de uma lesão, procure antes um profissional de saúde. Pare qualquer exercício que deixe o calcanhar muito pior.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'você sente queimação, formigamento, choques ou dormência no calcanhar ou na sola',
      'a dor no calcanhar vem junto com dor nas costas, dor descendo pela perna ou fraqueza no pé',
      'a dor aumenta quanto mais você anda ou corre, ou apertar os lados do osso do calcanhar dói',
      'o calcanhar está inchado, vermelho, quente ou roxo, ou você está com febre',
      'os dois calcanhares doem e outras articulações estão doloridas ou rígidas, ou a rigidez de manhã dura mais de 30\u00A0minutos',
      'a dor começou depois de uma queda, uma torção ou um estalo repentino, ou você não consegue apoiar o peso no pé',
      'o calcanhar dói em repouso ou acorda você à noite',
      'uma criança tem dor no calcanhar que não passa com menos esporte',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para dor no calcanhar e no pé. O plano dele foi feito para dor no calcanhar do tipo fascite plantar, não para as condições parecidas desta página, então, se a sua dor se encaixa em outro padrão, procure um profissional de saúde antes de começar.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar de manhã, e o plano se ajusta a ela. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['hubPlantarFasciitis', 'heelFatPad', 'heelPainAtNight'],
  crumb: 'Dor no calcanhar que não é fascite plantar',
  campaign: 'guide-heel-pain-not-plantar-fasciitis-pt',
};
