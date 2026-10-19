import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Dor nos pés para cozinheiros e quem trabalha em cozinha (PT-BR).
 * Translated from `articles/chefs-foot-pain.ts` (2026-10-18), written around
 * «dor nos pés cozinheiro», «sapato antiderrapante para cozinha», «babuche».
 * Informal «você». Figures, grades, doses and hedges identical to the English
 * page; exercise names follow `lib/guides/pt.ts`. Same CITE keys and media ids.
 * All internal links have a /pt/ version.
 */

export const CHEFS_PT: Guide = {
  lang: 'pt',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dor nos pés de cozinheiro: sapatos, tapetes e exercícios',
  description:
    'Por que os pés do cozinheiro doem no chão duro e molhado: o que dizem estudos sobre sapato antiderrapante, babuche ou tênis, tapetes e exercícios curtos.',
  h1: 'Dor nos pés para cozinheiros e quem trabalha em cozinha: o que ajuda nos turnos longos',
  lede:
    'A dor nos pés de quem trabalha em cozinha costuma vir das muitas horas em pé e andando em chão duro, e para dor no calcanhar as opções com a melhor evidência são os alongamentos da panturrilha e da fáscia plantar, que a diretriz de 2023 para dor no calcanhar classifica com grau **A**, e o trabalho de força da panturrilha, com grau **B** (Koc e colegas, 2023). O sapato antiderrapante é uma questão de segurança, não de dor: em um ensaio randomizado em 226\u00A0distritos escolares, dar sapatos antiderrapantes de graça para quem trabalha na cozinha das escolas reduziu os registros de acidente por escorregão de 3,54 para 1,18 a cada 10.000\u00A0meses-trabalhador (Bell e colegas, 2019). Nenhum estudo testou se babuches, tamancos ou qualquer sapato de cozinha reduzem a dor nos pés em si.',
  intro: [
    'Esta página fala do lado da cozinha: chão duro, molhado e engordurado, a correria do serviço e sapatos escolhidos pela aderência. Para a dor nos pés de ficar em pé em qualquer trabalho, veja [por que meus pés doem depois de ficar o dia todo em pé](/pt/dor-nos-pes-ficar-em-pe/). Para os plantões no hospital, veja [dor nos pés na enfermagem](/pt/dor-nos-pes-enfermagem/). Se o calcanhar dói mais nos primeiros passos depois de descansar, esse padrão aponta para [fascite plantar](/pt/fascite-plantar/).',
  ],
  toc: true,
  takeaways: [
    'Em uma pesquisa com 128\u00A0trabalhadores de cozinha no Cairo, 46,1% relataram dor nos pés nos últimos 12\u00A0meses, atrás só da região lombar e do joelho (Abdelsalam e colegas, 2023).',
    'Em 475\u00A0trabalhadores de 36\u00A0lanchonetes de fast food nos Estados Unidos, usar sapato antiderrapante esteve associado a uma taxa de escorregões 54% menor (Verma e colegas, 2011).',
    'Em um ensaio randomizado em cozinhas escolares, os registros de acidente por escorregão caíram de 3,54 para 1,18 a cada 10.000\u00A0meses-trabalhador onde os trabalhadores receberam sapatos antiderrapantes de graça, enquanto subiram de 2,01 para 2,30 no grupo de comparação (Bell e colegas, 2019).',
    'Passar a maior parte do dia de trabalho em pé aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo de caso-controle com 50\u00A0casos e 100\u00A0controles, e uma panturrilha tensa aumentou essa chance em 23,3\u00A0vezes (Riddle e colegas, 2003).',
    'A diretriz de 2023 para dor no calcanhar dá grau **A** aos alongamentos da panturrilha e da fáscia plantar e grau **B** ao trabalho de força. As palmilhas sozinhas recebem **B contra** (Koc e colegas, 2023).',
  ],
  sections: [
    {
      h2: 'Por que os pés do cozinheiro doem tanto depois de um turno?',
      keyFact: 'Em 128\u00A0trabalhadores de cozinha, 46,1% relataram dor nos pés nos últimos 12\u00A0meses, atrás da região lombar (64,8%) e do joelho (46,9%) (Abdelsalam e colegas, 2023).',
      paragraphs: [
        '**O trabalho na cozinha junta o que os pés aguentam pior: horas em pé, deslocamentos curtos e rápidos, chão duro e pouco descanso.** Em uma pesquisa com 128\u00A0trabalhadores de cozinha de dois grandes alojamentos estudantis no Cairo, 90,6% relataram algum problema musculoesquelético nos últimos 12\u00A0meses. O pé foi a terceira região mais afetada, com 46,1%, logo atrás do joelho, com 46,9%.',
        'Os números variam muito de um estudo para outro. Em 307\u00A0cozinheiros de restaurante no Paquistão, a maioria trabalhando de 9 a 12\u00A0horas por dia, 26 relataram dor no tornozelo ou no pé, bem menos que os 101 que relataram dor lombar e no joelho (Iqbal e colegas, 2023). As pesquisas usaram grupos e perguntas diferentes, então leia esses números como um retrato aproximado, não como uma taxa exata.',
        'Uma relação aparece com clareza. Em 415\u00A0trabalhadores de cozinhas de hotéis e restaurantes na Etiópia, ficar muito tempo em pé esteve associado a uma chance 3,81\u00A0vezes maior de um problema musculoesquelético relacionado ao trabalho (Abebaw e colegas, 2024). Esse estudo contou dor em qualquer parte do corpo, não só nos pés.',
      ],
      sourceNote:
        'Abdelsalam 2023 e Abebaw 2024 usaram o Questionário Nórdico Musculoesquelético para a prevalência em 12\u00A0meses. Abebaw 2024: razão de chances ajustada de 3,81 (IC 95% de 1,58 a 9,17) para ficar muito tempo em pé. Iqbal 2023 usou uma amostra de conveniência de 307\u00A0cozinheiros (285\u00A0homens).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: 'A dor nos pés na cozinha é fascite plantar?',
      keyFact: 'Passar a maior parte do dia de trabalho em pé aumentou em 3,6\u00A0vezes a chance de fascite plantar, e a flexibilidade reduzida do tornozelo aumentou em 23,3\u00A0vezes (Riddle e colegas, 2003).',
      paragraphs: [
        'Muitas vezes é cansaço geral e uma dor que passa com uma noite de descanso. Mas o trabalho na cozinha traz os dois maiores fatores de risco encontrados em um estudo de caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem: passar a maior parte do dia de trabalho em pé aumentou a chance em 3,6\u00A0vezes, e uma [panturrilha tensa](/pt/panturrilha-tensa/) que limita o quanto o tornozelo dobra aumentou em 23,3\u00A0vezes.',
        'A fascite plantar tem um padrão típico: dor aguda embaixo do calcanhar nos primeiros passos da manhã ou depois de ficar sentado, que melhora conforme você anda e volta depois de um dia longo. Esse padrão é explicado em [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/), e o guia completo de exercícios é [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/).',
        'Outros padrões apontam para outras causas:',
        {
          list: [
            'queimação embaixo da parte da frente do pé no meio do serviço: veja [dor na planta do pé](/pt/metatarsalgia-dor-na-planta-do-pe/)',
            'uma dor profunda, como um hematoma, no centro do calcanhar, que piora quanto mais tempo você fica em pé no chão duro: veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/)',
            'arcos que doem ou parecem achatados no fim do turno: veja [dor no arco do pé](/pt/dor-no-arco-do-pe/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Babuche ou sapato antiderrapante: o que diz a evidência?',
      keyFact: 'Sapatos antiderrapantes de graça reduziram os registros de acidente por escorregão de 3,54 para 1,18 a cada 10.000\u00A0meses-trabalhador em um ensaio randomizado em 226\u00A0distritos escolares (Bell e colegas, 2019).',
      paragraphs: [
        '**A evidência mais forte sobre calçado de cozinha fala de escorregões, não de pés doloridos.** Um estudo nos Estados Unidos acompanhou por três meses 475\u00A0trabalhadores de 36\u00A0lanchonetes de fast food. Quem usava sapato com a marcação de antiderrapante na sola relatou uma taxa de escorregões 54% menor do que quem não usava, já considerando idade, sexo, peso corporal e outros fatores (Verma e colegas, 2011).',
        'Depois, um ensaio randomizado testou isso como programa. Distritos escolares foram sorteados para dar sapatos antiderrapantes de graça aos trabalhadores das cozinhas. Nesses distritos, os registros de acidente por escorregão caíram de 3,54 para 1,18 a cada 10.000\u00A0meses-trabalhador, e nos outros subiram de 2,01 para 2,30 (Bell e colegas, 2019).',
        'O sapato se desgasta. Nos mesmos trabalhadores de restaurante, quem já usava sapato antiderrapante e trocou por um par novo teve depois uma taxa de escorregões 55% menor, e sapatos usados por menos de seis meses foram moderadamente melhores que os mais velhos (Verma e colegas, 2014). O estudo não conseguiu dizer exatamente quando trocar.',
        '**Não encontramos nenhum estudo que compare babuche ou tamanco com tênis, ou um sapato de cozinha com outro, para dor nos pés.** Para dor no calcanhar em geral, a diretriz de 2023 dá às [palmilhas](/pt/palmilhas-ou-exercicios/) sozinhas grau **B contra**: a evidência diz para não contar só com elas. Uma ordem sensata: escolha um sapato com sola antiderrapante que sirva no seu pé como ele está hoje e não aperte os dedos, troque quando a sola estiver gasta e, para a dor em si, faça os alongamentos e o trabalho de força abaixo.',
      ],
      table: {
        caption: 'Para que serve cada opção',
        head: ['Opção', 'Ajuda com', 'Evidência'],
        rows: [
          ['Sapato antiderrapante', 'Escorregões e acidentes por escorregão', 'Estudo de coorte e ensaio randomizado'],
          ['Babuche ou tênis', 'Não testados para dor', 'Nenhuma encontrada'],
          ['Palmilhas sozinhas', 'Dor no calcanhar', 'Grau B contra'],
          ['Tapete antifadiga', 'Desconforto de ficar em pé', 'Alguma, não em cozinhas'],
          ['Meias de compressão', 'Desconforto e inchaço nas pernas', 'Ensaios pequenos, não em cozinhas'],
          ['Alongamentos de panturrilha e fáscia', 'Dor no calcanhar', 'Grau A'],
        ],
      },
      sourceNote:
        'Verma 2011: uso de sapato antiderrapante avaliado pela marcação na sola; taxa de escorregões relatados 54% menor (IC 95% de 37% a 64%). Bell 2019: ensaio randomizado por conglomerados com dois braços, cozinhas escolares da educação infantil ao ensino médio; razão de chances ajustada de 0,33 (IC 95% de 0,17 a 0,63). Verma 2014: razão de taxas de 0,45 (IC 95% de 0,23 a 0,89) depois da troca por um par novo.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: 'Em que lugar da cozinha acontecem mais escorregões?',
      keyFact: 'Trabalhadores de restaurante escorregaram 14,6\u00A0vezes mais andando em chão sujo e 2,9\u00A0vezes mais quando estavam com pressa (Verma e colegas, 2011).',
      paragraphs: [
        'No estudo com restaurantes dos Estados Unidos, a maioria dos escorregões aconteceu perto da **pia e da fritadeira**, as áreas que os trabalhadores também consideravam as mais escorregadias, e havia líquido ou gordura no chão em mais de 70% dos escorregões (Verma e colegas, 2010).',
        'Uma segunda análise dos mesmos trabalhadores olhou o momento de cada escorregão. A taxa de escorregões foi 14,6\u00A0vezes maior andando em chão sujo, 2,9\u00A0vezes maior com pressa e 1,7\u00A0vez maior com distração. O sapato antiderrapante reduziu o efeito da pressa e do chão sujo (Verma e colegas, 2011).',
        'Também importa quem fornece o sapato. Onde o empregador fornecia sapatos antiderrapantes, 91% dos trabalhadores usavam. Onde eles não eram nem fornecidos nem incentivados, 53,5% usavam (Verma e colegas, 2010). Se a sua cozinha tem um programa de calçados, vale a pena usar.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: 'Tapete antifadiga e meia de compressão ajudam na cozinha?',
      paragraphs: [
        'Uma revisão de 2015 sobre as pesquisas de trabalho em pé lista tapetes, meias de compressão e calçados com bom suporte entre as opções com alguma evidência de menos desconforto e cansaço (Waters e Dick, 2015). Nenhuma dessas pesquisas foi feita em cozinhas. Um tapete num posto onde você fica muito tempo em pé, como o passe ou uma bancada de preparo, é algo razoável de testar. Escolha um que fique plano e não saia do lugar no chão molhado, para não virar ele mesmo um risco de tropeço.',
        'As meias de compressão não foram testadas em cozinhas. Em um pequeno ensaio randomizado com 40\u00A0seguranças em turnos de cerca de 12\u00A0horas em pé, tanto as meias de 15 a 20\u00A0mmHg quanto as de 20 a 30\u00A0mmHg evitaram o aumento do desconforto e do inchaço nas pernas visto com meias comuns (Garcia e colegas, 2023). Os seguranças eram todos homens e nenhum era cozinheiro, então leia isso como algo que provavelmente se aplica, não como prova para a cozinha.',
        '**Tapetes e meias ajudam no conforto durante o turno. Eles não substituem os alongamentos e o trabalho de força**, que recebem os graus mais altos da diretriz para dor no calcanhar.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: 'Que exercícios ajudam cozinheiros com dor nos pés?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá grau A, o seu mais alto, aos alongamentos da panturrilha e da fáscia plantar, e grau B ao trabalho de força (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios são os do [guia de fascite plantar](/pt/exercicios-fascite-plantar/), com as mesmas doses iniciais. Os alongamentos só precisam de uma parede ou de uma cadeira, então cabem num intervalo, antes do serviço ou depois de tirar o sapato de trabalho. Deixe o trabalho de força para as folgas ou para depois do turno.',
        'Os graus da diretriz são para a fascite plantar e não foram testados em trabalhadores de cozinha, mas os tecidos são os mesmos que um turno na cozinha sobrecarrega o dia todo. Se algum exercício levar a sua dor a 6/10 ou mais, pare por hoje.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto. A panturrilha tensa foi o fator de risco mais forte em um estudo de caso-controle de 2003.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias de turno',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos numa parede ou numa bancada de inox. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Faça num ponto seco do chão, não perto da pia.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar de trás no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias de turno',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente do outro e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria dos dias, logo ao acordar',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força, 3 por semana, nunca dois seguidos',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e empurre para cima pela parte da frente dos pés. As mãos sobre os joelhos acrescentam resistência. Com o joelho dobrado, isso trabalha principalmente o sóleo, quase sem carga no calcanhar, então dá para fazer no intervalo, sentado num engradado virado ou numa cadeira do vestiário.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: empurre para cima pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força, quando a elevação sentada ficar fácil',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Segure numa parede ou num corrimão. Faça em casa ou depois do turno, não no chão molhado da cozinha.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Está aqui pelo conforto depois do turno.' },
          dose: '1\u00A0minuto',
          often: 'Depois de um turno longo ou nas folgas',
          feel: 'Uma pressão firme embaixo do pé',
          how: 'Sentado, role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se estiver fazendo careta, alivie.',
          stop: 'A dor chegar a 6/10',
          image: 'Exercício: rolar o pé na bolinha',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Como encaixar os exercícios num turno de cozinha?',
      paragraphs: [
        'Um turno partido ou uma dobra deixam pouco espaço para uma rotina, então ligue os exercícios a algo que você já faz:',
        {
          list: [
            '**Se você tem 3\u00A0minutos:** o alongamento de panturrilha e o alongamento do sóleo, 30\u00A0segundos de cada lado, antes do serviço ou na hora de trocar de sapato. Isso trabalha a panturrilha tensa, o fator de risco mais forte no estudo de caso-controle.',
            '**Se você tem 5\u00A0minutos:** acrescente o alongamento da fáscia plantar. O alongamento é a parte que a diretriz de 2023 classifica com grau **A**.',
            '**Se você tem 10\u00A0minutos:** numa folga ou depois do turno, acrescente a elevação de calcanhar e um minuto rolando o pé na bolinha. O trabalho de força recebe grau **B**.',
          ],
        },
        'Os próprios intervalos parecem importar. Em 1.909\u00A0trabalhadores de cozinha na Coreia, as mulheres que relataram intervalos insuficientes tinham uma chance 1,68\u00A0vez maior de problemas musculoesqueléticos (Park e colegas, 2021). A relação foi relatada para as mulheres, e uma pesquisa como essa não consegue mostrar causa e efeito. Mesmo assim, sentar por alguns minutos entre um pico de movimento e outro é algo que vale a pena defender.',
        'Na fascite plantar em geral, cerca de 90% das pessoas melhoram sem cirurgia, embora isso possa levar meses; veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/). A diretriz de 2023 também sugere ajustar a carga sobre os pés no trabalho, uma recomendação com grau **E** porque se baseia em teoria, não em ensaios.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Por que meus pés doem tanto depois de trabalhar na cozinha?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'Os turnos na cozinha juntam horas em pé, deslocamentos curtos e rápidos e chão duro. Em uma pesquisa com 128\u00A0trabalhadores de cozinha, 46,1% relataram dor nos pés no último ano. Passar a maior parte do dia de trabalho em pé também aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo de caso-controle. Alongamentos diários da panturrilha e da fáscia plantar trabalham os tecidos mais sobrecarregados.',
    },
    {
      q: 'Babuche é bom para cozinheiro com dor nos pés?',
      cites: [CITE.guideline],
      a: 'Ninguém sabe ao certo: não encontramos nenhum estudo que compare babuches ou tamancos com tênis ou outros sapatos de cozinha para dor nos pés. Para a segurança, o que mais importa é uma sola antiderrapante. Para dor no calcanhar, a diretriz de 2023 dá às palmilhas sozinhas grau B contra, então combine o sapato que melhor serve no seu pé com os alongamentos da panturrilha e da fáscia plantar, que ela classifica com grau A.',
    },
    {
      q: 'Sapato antiderrapante funciona mesmo em restaurante?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'Para escorregões, sim. Em 475\u00A0trabalhadores de 36\u00A0lanchonetes de fast food nos Estados Unidos, o sapato antiderrapante esteve associado a uma taxa de escorregões 54% menor. Em um ensaio randomizado em cozinhas escolares, sapatos antiderrapantes de graça reduziram os registros de acidente por escorregão de 3,54 para 1,18 a cada 10.000\u00A0meses-trabalhador. Esses estudos mediram escorregões, não dor nos pés.',
    },
    {
      q: 'De quanto em quanto tempo trocar o sapato de cozinha?',
      cites: [CITE.vermaShoeAge],
      a: 'Não existe uma regra testada. Em um estudo com 475\u00A0trabalhadores de restaurante, sapatos antiderrapantes usados por menos de seis meses foram moderadamente mais eficazes contra escorregões que os mais velhos, e quem já usava sapato antiderrapante e trocou por um par novo escorregou 55% menos. Confira a sola e troque o sapato quando os sulcos estiverem gastos e lisos.',
    },
    {
      q: 'Tapete antifadiga ajuda quem trabalha na cozinha?',
      cites: [CITE.waters],
      a: 'Provavelmente sim, no conforto. Uma revisão de 2015 sobre trabalho em pé lista os tapetes entre as opções com alguma evidência de menos desconforto e cansaço, mas nenhuma dessas pesquisas foi feita em cozinhas. Use o tapete onde você fica parado em pé por muito tempo, e escolha um que fique plano e não escorregue no chão molhado.',
    },
    {
      q: 'Meia de compressão ajuda cozinheiro em turno longo?',
      cites: [CITE.garcia],
      a: 'Pode ajudar. Em um ensaio com 40\u00A0seguranças em turnos de cerca de 12\u00A0horas em pé, tanto as meias de 15 a 20\u00A0mmHg quanto as de 20 a 30\u00A0mmHg evitaram o aumento do desconforto e do inchaço nas pernas visto com meias comuns. O ensaio foi pequeno e não foi em cozinhas, e as meias não substituem os alongamentos nem o trabalho de força.',
    },
    {
      q: 'Trabalhar como cozinheiro pode dar fascite plantar?',
      cites: [CITE.riddle],
      a: 'O trabalho na cozinha traz fatores de risco conhecidos. Em um estudo de caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem, passar a maior parte do dia de trabalho em pé aumentou a chance em 3,6\u00A0vezes, e uma panturrilha tensa em 23,3\u00A0vezes. Nenhum estudo mediu a fascite plantar especificamente em cozinheiros.',
    },
    {
      q: 'O que fazer com os pés doloridos no meio de um serviço cheio?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Troque o peso de perna, sente-se nos intervalos quando der e faça um alongamento de panturrilha de 30\u00A0segundos numa parede, num ponto seco do chão. Em trabalhadores de cozinha na Coreia, as mulheres com intervalos insuficientes tinham uma chance 1,68\u00A0vez maior de problemas musculoesqueléticos. Deixe a elevação de calcanhar e as sessões mais longas para depois do turno ou para as folgas.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de um escorregão, uma queda, uma torção ou algo pesado que caiu no seu pé',
      'você não consegue apoiar o pé no chão, ou está mancando',
      'o pé está dormente, formigando ou queimando, ou inchado, vermelho ou quente',
      'você tem no pé uma queimadura, um corte ou uma bolha que não está melhorando, principalmente se tem diabetes ou menos sensibilidade nos pés',
      'uma panturrilha ou perna fica de repente dolorida e inchada',
      'a dor acorda você à noite ou aparece em repouso',
      'a dor fica num ponto exato e piora com a atividade, um padrão que pode ser de fratura por estresse',
      'a dor não melhorou depois de várias semanas com sapatos melhores, mais intervalos e os exercícios desta página',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para calcanhar e pés no iPhone e no Android. Ele não conhece a sua escala, então você escolhe quando fazer as sessões: antes do serviço, entre um turno e outro ou nas folgas.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você avalia como estão os seus pés, e o plano se ajusta a isso. A cada 14\u00A0dias, um teste curto confere a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito não faz diagnóstico. Se a dor for aguda, estiver piorando ou não deixar você dormir, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Dor nos pés para cozinheiros',
  campaign: 'guide-chefs-foot-pain-pt',
};
