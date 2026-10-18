import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Dor nos pés para quem trabalha em loja e depósito (PT-BR).
 * Translated from `articles/retail-warehouse-foot-pain.ts` (2026-10-18),
 * written around «dor nos pés trabalho em pé», «dor nos pés trabalhando em
 * depósito», «botina de segurança machuca o pé». Informal «você». Figures,
 * grades, doses and hedges identical to the English page; exercise names
 * follow `lib/guides/pt.ts`. Same CITE keys as the English file.
 * Links with no Portuguese version (/program/, best insoles) removed, words kept.
 */

export const RETAIL_WAREHOUSE_PT: Guide = {
  lang: 'pt',
  page: 'retailWarehouse',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dor nos pés no trabalho em depósito: chão duro e exercícios',
  description:
    'Dor nos pés em depósito e loja: o que os estudos dizem sobre chão de concreto, botinas de segurança, tapetes e palmilhas, e exercícios de 3 minutos.',
  h1: 'Dor nos pés para quem trabalha em loja ou depósito: o que ajuda no chão duro',
  lede:
    'No depósito e na loja os pés doem porque horas em pé e andando em chão duro carregam o calcanhar, o arco e a panturrilha com pouco amortecimento embaixo. Passar a maior parte do dia de trabalho em pé aumentou em 3,6\u00A0vezes a chance de [fascite plantar](/pt/fascite-plantar/) em um estudo (Riddle e colegas, 2003). Os alongamentos da panturrilha e da fáscia plantar têm o grau mais alto, **A**, na diretriz de 2023 para dor no calcanhar, e uma versão curta cabe em cerca de 3\u00A0minutos de intervalo. Tapetes e palmilhas com amortecimento ajudam no conforto, mas a evidência a favor deles é mais fraca (Speed e colegas, 2018).',
  intro: [
    'Esta página fala do trabalho em si: chão de concreto e de piso frio, botinas de segurança, turnos longos e intervalos curtos. Para a dor de ficar em pé em geral, veja [por que meus pés doem depois de ficar o dia todo em pé](/pt/dor-nos-pes-ficar-em-pe/). Se você trabalha em hospital, [dor nos pés na enfermagem](/pt/dor-nos-pes-enfermagem/) fala dos plantões de 12\u00A0horas e das escalas que mudam.',
  ],
  toc: true,
  takeaways: [
    'Passar a maior parte do dia de trabalho em pé aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo de caso-controle com 50\u00A0casos e 100\u00A0controles. Uma flexibilidade do tornozelo muito reduzida, em geral por uma panturrilha tensa, aumentou essa chance em 23,3\u00A0vezes (Riddle e colegas, 2003).',
    'A diretriz de 2023 para dor no calcanhar mantém uma recomendação de grau **B**: os profissionais de saúde devem avaliar a carga sobre os pés no trabalho, principalmente em superfícies que amortecem pouco, como fator de risco para dor no calcanhar (Koc e colegas, 2023).',
    'Uma revisão de 10\u00A0estudos encontrou evidência moderada de que tapetes e palmilhas com amortecimento reduzem o desconforto e o cansaço de quem trabalha em pé, e só evidência limitada de que as palmilhas sejam melhores que os tapetes (Speed e colegas, 2018).',
    'Em uma revisão de 7\u00A0estudos com trabalhadores que usam calçado de segurança, os 4 que mediram dor encontraram dor nos pés em uma parcela de 42,3% a 60,8% dos trabalhadores, e as principais queixas eram calor, suor, peso e rigidez (Arceri e colegas, 2024).',
    'Os alongamentos da panturrilha e da fáscia plantar recebem o grau mais alto da diretriz, **A**, e o trabalho de força recebe **B**. As palmilhas sozinhas recebem **B contra** para dor no calcanhar (Koc e colegas, 2023).',
  ],
  sections: [
    {
      h2: 'Por que os pés doem depois de um turno no depósito ou na loja?',
      keyFact: 'Passar a maior parte do dia de trabalho com o peso sobre os pés aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo de caso-controle pareado (Riddle e colegas, 2003).',
      paragraphs: [
        'O trabalho em loja e em depósito junta dois tipos de carga. No caixa ou numa bancada de embalagem você fica parado em pé por muito tempo. No salão de vendas ou separando pedidos você anda, carrega peso, empurra carrinhos e gira o corpo. Nos dois casos o peso fica no calcanhar e no arco durante a maior parte do turno, e quem define os intervalos é a escala, não os seus pés.',
        'Um estudo de caso-controle de 2003 com 50\u00A0pessoas com fascite plantar e 100\u00A0controles pareados encontrou que passar a maior parte do dia de trabalho com o peso sobre os pés aumentava em 3,6\u00A0vezes a chance de fascite plantar. A flexibilidade reduzida do tornozelo, ou seja, uma [panturrilha tensa](/pt/panturrilha-tensa/), foi o fator mais forte, com uma chance 23,3\u00A0vezes maior. **A panturrilha tensa é algo em que você pode trabalhar. O emprego, em geral, não.**',
        'Uma revisão sistemática de 16\u00A0estudos sobre dor crônica no calcanhar encontrou alguma evidência de relação com ficar muito tempo em pé, junto com peso corporal mais alto, idade e flexibilidade reduzida do tornozelo. Os autores pediram estudos que acompanhem as pessoas ao longo do tempo, então isso mostra uma associação, não a prova de que ficar em pé causa dor no calcanhar (Irving e colegas, 2006).',
        'Quanto você anda? Não encontramos nenhum estudo publicado que conte os passos por turno de quem trabalha em depósito ou loja. Números como «19\u00A0km (12\u00A0milhas) por turno» aparecem em blogs do setor sem um estudo por trás. O número medido mais próximo vem da enfermagem: uma média de 9.360\u00A0passos por plantão em um estudo com rastreadores (Chang e Cho, 2022).',
      ],
      cites: [CITE.riddle, CITE.irvingHeelPain, CITE.changCho],
    },
    {
      h2: 'O chão de concreto faz mesmo mais mal para os pés?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar aponta a carga sobre os pés no trabalho, principalmente em condições de pouco amortecimento, como fator de risco (grau B, Koc e colegas, 2023).',
      paragraphs: [
        'Provavelmente sim, mas ninguém mediu o concreto sozinho. A diretriz de 2023 para dor no calcanhar mantém uma recomendação de 2014, de grau **B**: os profissionais de saúde devem avaliar as atividades de trabalho com o peso sobre os pés, principalmente em condições de pouco amortecimento, como fator de risco para dor no calcanhar e fascite plantar. Um chão de concreto sem revestimento está entre as superfícies de trabalho que menos amortecem.',
        'O que foi testado é o contrário: colocar algo macio. Em estudos de laboratório e no local de trabalho, ficar em pé sobre um tapete ou usar palmilhas com amortecimento reduziu o desconforto em comparação com um chão duro (Speed e colegas, 2018). Isso combina com a ideia de que a superfície dura aumenta a carga, sem provar que o concreto causa alguma condição específica.',
        'Algumas dores no calcanhar pioram no chão duro por outro motivo. Se a dor fica bem no fundo, no centro do calcanhar, e é claramente pior descalço em piso frio ou concreto, vale a pena ler sobre a [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning],
    },
    {
      h2: 'Tapete antifadiga ou palmilha: o que ajuda mais?',
      keyFact: 'Uma revisão de 10\u00A0estudos encontrou evidência moderada de que o amortecimento reduz o desconforto de quem trabalha em pé, e evidência limitada de que as palmilhas sejam melhores que os tapetes (Speed e colegas, 2018).',
      paragraphs: [
        '**Os dois ajudam no conforto, sem um vencedor claro, e nenhum tem evidência forte.** Uma revisão sistemática de 2018 encontrou 10\u00A0estudos sobre tapetes e palmilhas com amortecimento em pessoas que trabalham em pé. Ela considerou moderada a evidência de que o amortecimento reduz o desconforto e o cansaço, e limitada a de que as palmilhas funcionam melhor que os tapetes. Os estudos eram muito diferentes entre si, e os autores pediram estudos maiores em locais de trabalho reais.',
        'Em um estudo no local de trabalho, trabalhadores de uma linha de montagem passaram uma semana de jornadas de 8\u00A0horas em cada uma de quatro condições: chão duro, tapete, palmilhas e palmilhas sobre o tapete. O tapete, as palmilhas e a combinação foram todos mais confortáveis que o chão duro, sem diferença clara entre eles (King, 2002).',
        'Em um teste de laboratório de 4\u00A0horas, três de quatro tapetes antifadiga comerciais reduziram o desconforto em comparação com um chão duro, mas nenhum tapete foi melhor que os outros (Wiggermann e Keyserling, 2013). Então nenhum tapete se mostrou melhor que os demais.',
        'A divisão prática: **um tapete só ajuda onde você fica parado**, como no caixa, na bancada de embalagem ou num posto de trabalho. Se você anda pelo salão ou separa pedidos, o amortecimento precisa ir com você, dentro do calçado. Para dor no calcanhar especificamente, a diretriz de 2023 dá às palmilhas sozinhas grau **B contra**, então não conte só com elas. A página [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/) compara as duas opções.',
      ],
      cites: [CITE.speedCushioning, CITE.kingMats, CITE.wiggermannMats, CITE.guideline],
    },
    {
      h2: 'Botina de segurança causa dor nos pés?',
      keyFact: 'Em uma revisão de 7\u00A0estudos com trabalhadores que usam calçado de segurança, os 4 que mediram dor encontraram dor nos pés em uma parcela de 42,3% a 60,8% dos trabalhadores (Arceri e colegas, 2024).',
      paragraphs: [
        'A botina de segurança protege os seus pés, e também traz queixas. Uma revisão sistemática de 2024 encontrou 7\u00A0estudos com trabalhadores que usam calçado de segurança. Todos os estudos relataram desconforto e dor, e os 4 que mediram dor encontraram dor nos pés em uma parcela de 42,3% a 60,8% dos trabalhadores. As principais queixas eram calor, suor, peso e solado rígido, principalmente em volta dos dedos e da biqueira.',
        'Em um estudo com 509\u00A0trabalhadores de 12\u00A0fábricas metalúrgicas, todos usando calçado de segurança todos os dias, 81% tinham pelo menos um problema nos pés. As queixas mais comuns sobre o calçado eram calor e umidade por dentro (42%), peso (27,5%) e ajuste ao pé (22,9%) (Mancuso e colegas, 2017).',
        'São pesquisas por questionário, então não conseguem dizer que a botina causa a dor: horas em chão duro doeriam com qualquer calçado. As sugestões da revisão são práticas:',
        {
          list: [
            'Use o tamanho e a largura certos, e veja se os modelos aprovados pela empresa existem em forma mais larga.',
            'Escolha a botina mais leve que atenda à exigência de segurança do seu local de trabalho.',
            'Procure materiais que respiram se os seus pés esquentam e suam.',
            'A maioria das botinas de segurança tem palmilha removível, então dá para colocar uma palmilha com amortecimento se ela não deixar a botina apertada demais.',
          ],
        },
        'Nunca troque uma botina de segurança obrigatória por um tênis porque os pés estão doendo. Converse com seu supervisor ou com o técnico de segurança do trabalho sobre outros modelos aprovados.',
      ],
      cites: [CITE.arceriSafety, CITE.mancusoSafety],
    },
    {
      h2: 'Que exercícios dá para fazer no intervalo?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá grau A, o seu mais alto, aos alongamentos da panturrilha e da fáscia plantar, e grau B ao trabalho de força (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios abaixo não precisam de equipamento nem de espaço no chão, só de uma parede, uma coluna da prateleira ou a borda de um balcão. Os três primeiros são feitos em pé, na sala de descanso ou num corredor do estoque. Os outros são para depois do turno, sentado.',
        'A diretriz dá grau **A** aos alongamentos da panturrilha e da fáscia plantar e grau **B** ao trabalho de força. Esses graus são para a fascite plantar, mas são os mesmos tecidos que um turno em chão duro sobrecarrega. Pare por aquele dia se algum exercício levar a dor a 6 de 10 ou mais.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto. A panturrilha tensa foi o fator de risco mais forte em um estudo de caso-controle de 2003.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'No intervalo ou depois do turno',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos numa parede, numa coluna da prateleira ou num balcão. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Dá para fazer de botina de segurança também.',
          stop: 'Dor forte no calcanhar ou na panturrilha',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar de trás no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'No intervalo ou depois do turno',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor forte no calcanhar ou na panturrilha',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente do outro e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Balanço do tornozelo',
          evidence: { level: 'early', why: 'Trabalha a flexibilidade do tornozelo, o fator de risco mais forte em um estudo de caso-controle de 2003. Não foi testado sozinho em um ensaio sobre dor no calcanhar.' },
          dose: '2\u00A0séries de 15, cada perna',
          often: 'No intervalo',
          feel: 'Um alongamento na frente do tornozelo e uma tensão na parte de baixo da panturrilha',
          how: 'Um pé à frente do outro, mãos na parede. Leve o joelho da frente para a frente, por cima dos dedos, com o calcanhar no chão. Devagar, cerca de dois segundos para cada lado. Mais em [balanço do tornozelo](/pt/exercicios/mobilidade-tornozelo/).',
          stop: 'A dor chega a 6 de 10',
          image: 'Exercício: balanço do tornozelo',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: o joelho vai para a frente por cima dos dedos, o calcanhar fica no chão',
          alt: 'Uma figura com um pé à frente do outro levando o joelho da frente por cima dos dedos, com o tornozelo destacado',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Depois do turno, e antes dos primeiros passos da manhã',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se, tire a botina e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Se os primeiros passos ao sair da cama doem, faça um na beira da cama antes de o pé tocar o chão.',
          stop: 'Dor forte no calcanhar',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Nas folgas, ou depois de um turno mais leve',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, segure na parede, suba reto por cima dos dedões e desça devagar. O trabalho de força funciona melhor nas folgas, para a panturrilha ter tempo de se recuperar antes do próximo turno. Mais em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
          stop: 'Dor no calcanhar acima de 6 de 10, ou pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Está aqui pelo conforto depois do turno.' },
          dose: '1\u00A0minuto',
          often: 'Depois do turno',
          feel: 'Uma pressão firme embaixo do pé',
          how: 'Sentado, role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se estiver fazendo careta, alivie.',
          stop: 'Dor que continua depois de parar',
          image: 'Exercício: rolar o pé na bolinha',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Como encaixar no turno: 3, 5 ou 10\u00A0minutos?',
      paragraphs: [
        'A maioria dos intervalos em loja e depósito é curta e definida pela escala. Uma revisão de estudos de laboratório encontrou que os sintomas de ficar em pé sem interrupção ficavam clinicamente relevantes depois de cerca de 42\u00A0minutos em pessoas com tendência a dor em pé, e os autores sugeriram não ficar parado em pé por mais de cerca de 40\u00A0minutos (Coenen e colegas, 2017). Muitas vezes você não escolhe quando sentar, mas pode mudar de posição: ande até o fim do corredor, troque o peso de perna ou faça um alongamento de panturrilha numa prateleira.',
        {
          list: [
            '**3\u00A0minutos, no intervalo:** o alongamento de panturrilha, 2\u00A0vezes de 30\u00A0segundos em cada perna, mais uma vez de 30\u00A0segundos do alongamento do sóleo em cada perna. Isso trabalha a panturrilha tensa, o fator de risco mais forte no estudo de 2003.',
            '**5\u00A0minutos, num intervalo maior ou no fim do turno:** acrescente o balanço do tornozelo, ou o alongamento da fáscia plantar depois de tirar a botina.',
            '**10\u00A0minutos, na folga:** acrescente a elevação de calcanhar (3\u00A0séries de 10) e rolar o pé na bolinha. Isso cobre a parte de força, com grau **B**.',
          ],
        },
        '**Fazer uma rotina curta na maioria dos turnos importa mais do que uma longa que você pula.** Ligue a rotina a algo que você já faz, como o primeiro intervalo ou a hora de tirar a botina.',
      ],
      cites: [CITE.coenen, CITE.riddle, CITE.guideline],
    },
    {
      h2: 'O que a evidência diz sobre cada opção',
      paragraphs: [
        'A maioria dos conselhos para o trabalho mistura evidência forte e fraca. Esta tabela coloca as principais opções lado a lado, com o melhor estudo que encontramos para cada uma.',
      ],
      table: {
        caption: 'Opções para dor nos pés em trabalhos em pé e andando',
        head: ['Opção', 'Melhor evidência', 'Resultado', 'Força'],
        rows: [
          ['Alongamentos de panturrilha e fáscia', 'Diretriz de 2023', 'Grau A para dor no calcanhar', 'Forte'],
          ['Trabalho de força da panturrilha', 'Diretriz de 2023', 'Grau B para dor no calcanhar', 'Moderada'],
          ['Tapete antifadiga', 'Revisão de 10\u00A0estudos', 'Menos desconforto', 'Moderada, só conforto'],
          ['Palmilhas com amortecimento', 'A mesma revisão', 'Menos desconforto, parecido com o tapete', 'Moderada, só conforto'],
          ['Palmilhas sozinhas para dor no calcanhar', 'Diretriz de 2023', 'B contra', 'Tende a ser contra'],
          ['Meias de compressão', 'Ensaio com 40\u00A0seguranças', 'Sem aumento do desconforto', 'Um ensaio pequeno'],
          ['Botina de segurança com melhor ajuste', 'Revisão de 7\u00A0estudos', 'Ajuste, peso e calor importam', 'Só pesquisas por questionário'],
        ],
      },
      after: [
        'As meias de compressão são explicadas em detalhe em [por que meus pés doem depois de ficar o dia todo em pé](/pt/dor-nos-pes-ficar-em-pe/). O ensaio foi feito com seguranças homens em turnos longos em pé, não com trabalhadores de depósito (Garcia e colegas, 2023).',
      ],
      cites: [CITE.guideline, CITE.speedCushioning, CITE.garcia, CITE.arceriSafety],
    },
    {
      h2: 'Pode ser fascite plantar ou outra coisa?',
      paragraphs: [
        'Uma dor geral e os pés cansados depois de um turno longo costumam passar com uma noite de descanso. A fascite plantar tem um padrão mais claro: dor aguda perto da parte de dentro do calcanhar, pior nos primeiros passos da manhã ou depois de ficar sentado. Se isso parece com o seu caso, veja [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) e [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/). Cerca de 90% das pessoas com fascite plantar melhoram com tratamento não cirúrgico, embora isso possa levar de três a seis meses (Latt e colegas, 2020).',
        'Outros padrões apontam para outras causas. Uma dor em queimação embaixo da parte da frente do pé aponta para [dor na planta do pé](/pt/metatarsalgia-dor-na-planta-do-pe/). Uma dor ao longo do arco que piora durante o turno é explicada em [dor no arco do pé](/pt/dor-no-arco-do-pe/). A dor em cima do pé pode vir de botinas amarradas apertado demais ou que pressionam; veja [dor no peito do pé](/pt/dor-no-peito-do-pe/).',
        'Uma dor num ponto pequeno de um osso, que piora quanto mais você anda, pode ser uma fratura por estresse, principalmente depois de um aumento das horas ou de um emprego novo com mais caminhada. **Isso precisa de um profissional de saúde, não de mais exercício.**',
      ],
      cites: [CITE.latt, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'Por que meus pés doem tanto trabalhando em depósito?',
      cites: [CITE.riddle, CITE.guideline],
      a: 'Muitas horas em pé e andando em chão duro mantêm a carga no calcanhar, no arco e na panturrilha durante a maior parte do turno. Passar a maior parte do dia de trabalho em pé aumentou em 3,6\u00A0vezes a chance de fascite plantar em um estudo, e a diretriz de 2023 para dor no calcanhar aponta a carga sobre os pés no trabalho em superfícies com pouco amortecimento como fator de risco.',
    },
    {
      q: 'Quantos passos um trabalhador de depósito dá por turno?',
      cites: [CITE.changCho],
      a: 'Não encontramos nenhum estudo publicado que conte os passos em turnos de depósito ou de loja. Números como 19\u00A0km (12\u00A0milhas) por turno vêm de blogs do setor sem um estudo por trás. O número medido mais próximo vem da enfermagem hospitalar, com média de 9.360\u00A0passos por plantão em um estudo com rastreadores. O seu celular ou relógio é o melhor guia para o seu trabalho.',
    },
    {
      q: 'Tapete antifadiga funciona mesmo?',
      cites: [CITE.speedCushioning, CITE.wiggermannMats],
      a: 'Reduz o desconforto de quem fica em pé no mesmo lugar, mas a evidência é moderada, não forte. Uma revisão de 10\u00A0estudos encontrou que o amortecimento ajuda quem trabalha em pé. Em um teste de laboratório de 4\u00A0horas, três de quatro tapetes foram melhores que o chão duro, e nenhum tapete foi melhor que os outros. Um tapete só ajuda onde você fica parado.',
    },
    {
      q: 'Palmilha ou tapete: o que é melhor para ficar em pé no concreto?',
      cites: [CITE.kingMats, CITE.speedCushioning],
      a: 'Mais ou menos a mesma coisa para o conforto. Em um estudo no local de trabalho, trabalhadores de montagem acharam o tapete, as palmilhas e os dois juntos mais confortáveis que o chão duro, sem diferença clara entre eles. Uma revisão considerou limitada a evidência de que as palmilhas sejam melhores que os tapetes. Se você anda bastante, a palmilha vai com você e o tapete não.',
    },
    {
      q: 'Botina de segurança pode causar fascite plantar?',
      cites: [CITE.arceriSafety, CITE.guideline],
      a: 'Nenhum estudo mostra que botinas de segurança causam fascite plantar. Uma revisão de 7\u00A0estudos com trabalhadores que usam calçado de segurança encontrou dor nos pés em uma parcela de 42,3% a 60,8% dos trabalhadores nos 4 estudos que mediram isso, e as principais queixas eram calor, peso e rigidez. As horas em chão duro também contam, seja qual for a botina. Um bom ajuste e a botina aprovada mais leve são primeiros passos razoáveis.',
    },
    {
      q: 'Que alongamentos posso fazer no intervalo do trabalho?',
      cites: [CITE.guideline],
      a: 'O alongamento de panturrilha e o alongamento do sóleo são feitos em pé, apoiado numa parede ou prateleira, de botina mesmo: duas vezes de 30\u00A0segundos cada, em cada perna, cerca de 4\u00A0minutos para os dois alongamentos. A diretriz de 2023 para dor no calcanhar dá grau A ao alongamento da panturrilha. Deixe o alongamento da fáscia plantar e a elevação de calcanhar para depois do turno ou para as folgas.',
    },
    {
      q: 'É normal os pés doerem depois de um turno na loja?',
      cites: [CITE.waters],
      a: 'Pés cansados e doloridos depois de um turno longo em pé são comuns, e uma revisão de 2015 associou ficar muito tempo em pé no trabalho a desconforto, cansaço e dor nas pernas em muitas profissões. Comum não quer dizer que você deva ignorar. Uma dor aguda, que continua nas folgas ou que é pior nos primeiros passos da manhã merece atenção.',
    },
    {
      q: 'Dá para continuar trabalhando em pé com fascite plantar?',
      cites: [CITE.latt, CITE.guideline],
      a: 'Muita gente continua, com algumas mudanças. Alongamentos curtos nos intervalos, botinas com melhor ajuste e amortecimento onde você fica em pé diminuem a carga, e cerca de 90% das pessoas com fascite plantar melhoram com tratamento não cirúrgico, embora isso possa levar de três a seis meses. Se a dor estiver piorando mesmo assim, procure um profissional de saúde.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou com uma queda, uma carga que caiu no pé ou uma torção no trabalho',
      'você não consegue apoiar o pé no chão, ou está mancando',
      'a dor fica num ponto pequeno de um osso e piora ao andar, o que pode ser uma fratura por estresse',
      'o pé está dormente, formigando ou queimando, ou parece frio',
      'o pé ou o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'uma panturrilha ou perna fica de repente dolorida e inchada',
      'você tem diabetes ou menos sensibilidade nos pés, e a botina causou uma ferida ou bolha',
      'a dor acorda você à noite ou continua piorando depois de várias semanas com as mudanças desta página',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'Você não precisa descobrir a ordem, as doses nem quando passar para uma versão mais difícil. O Walkito monta o plano a partir das suas respostas e o ajusta a como seus pés estão a cada dia, então uma manhã ruim depois de um turno longo significa uma sessão mais leve.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos, para encaixar nos turnos e nas folgas. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'heelPainAfterWalking'],
  crumb: 'Dor nos pés em loja e depósito',
  campaign: 'guide-retail-warehouse-foot-pain-pt',
};
