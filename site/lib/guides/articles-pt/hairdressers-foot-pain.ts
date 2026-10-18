import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/hairdressers-foot-pain.ts
 * (2026-10-18), written around «dor nos pés cabeleireira», «cabeleireiro em pé
 * o dia todo». Informal «você», plural «cabeleireiros» as the general term.
 * Figures, grades, doses, hedges and CITE keys are identical to the English
 * page after its fact-check. Same media ids. Exercise names follow pt.ts and
 * the other /pt/ pages. Salon terms: chair = «cadeira», station = «bancada»,
 * basin = «lavatório», foils = «mechas no papel-alumínio», stool = «banqueta»
 * (the salon «mocho»). "Clinician" is «profissional de saúde» or «médico»
 * where the English is about checks. No /pt/ version of foot-pain-identifier
 * or /program/: links removed, words kept.
 */

export const HAIRDRESSERS_PT: Guide = {
  lang: 'pt',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dor nos pés de cabeleireiros: calçados, tapetes e exercícios',
  description:
    'Por que os pés do cabeleireiro doem de ficar parado em pé, o que os estudos acharam, calçados, tapetes e banquetas que ajudam, e exercícios entre clientes.',
  h1: 'Dor nos pés de cabeleireiros: o que ajuda quando você fica parado em pé o dia todo',
  lede:
    'A dor nos pés de cabeleireiros vem principalmente das horas paradas em pé ao lado da cadeira, não de andar, então as opções com alguma evidência miram justamente o ficar parado em pé: um piso ou um calçado com amortecimento, meias de compressão leve e um minuto de exercício para a panturrilha entre um cliente e outro. Em um estudo com 384\u00A0cabeleireiros e 384\u00A0pessoas de outras profissões, 49,5% dos cabeleireiros relataram dor no joelho ou no pé, contra 38,3% do grupo de comparação (Mishra e Sarkar, 2021).',
  intro: [
    'As pesquisas sobre cabeleireiros olham principalmente ombros, pescoço, punhos e costas. Os pés recebem bem menos atenção, e esta página diz onde os dados são escassos. Ela mostra o que se sabe sobre os pés e as pernas de cabeleireiros, quais evidências sobre ficar em pé valem para o trabalho no salão e como encaixar exercícios nos intervalos entre clientes. Para dor de ficar em pé em geral, veja [por que meus pés doem depois de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/). Para plantões em que se anda muito, veja [dor nos pés na enfermagem](/pt/dor-nos-pes-enfermagem/).',
  ],
  toc: true,
  takeaways: [
    'De 384\u00A0cabeleireiros na Índia, 49,5% relataram dor no joelho ou no pé nos últimos 12\u00A0meses, contra 38,3% de 384\u00A0pessoas de outras profissões. O estudo contou joelho e pé juntos (Mishra e Sarkar, 2021).',
    'Uma revisão de escopo de 2019 com 44\u00A0estudos encontrou só 5 que relatavam dor nos pés em cabeleireiros, com valores de 10% a 44%. A maioria dos estudos olhava costas, pescoço, ombros e mãos, e ficar em pé era um dos fatores de risco mais comuns (Kozak e colegas, 2019).',
    'Em um ensaio randomizado cruzado com 108\u00A0cabeleireiros, meias de compressão de 15 a 20\u00A0mmHg reduziram em média em 12% a pontuação de dor e inchaço nas pernas e em 19\u00A0mL o volume da parte de baixo da perna (Blazek e colegas, 2013).',
    'Uma revisão de 2018 com 10\u00A0estudos encontrou evidência moderada de que pisos mais macios e palmilhas com amortecimento reduzem o desconforto e o cansaço de quem trabalha em pé (Speed e colegas, 2018).',
    'A panturrilha encurtada foi o fator de risco mais forte para fascite plantar em um estudo de caso-controle de 2003, com uma chance 23,3\u00A0vezes maior, e ficar em pé a maior parte do dia de trabalho aumentava a chance em 3,6\u00A0vezes (Riddle e colegas, 2003).',
  ],
  sections: [
    {
      h2: 'Quão comum é a dor nos pés em cabeleireiros?',
      keyFact: 'Cinco estudos de uma revisão de escopo de 2019 relataram dor nos pés em cabeleireiros, de 10% a 44% (Kozak e colegas, 2019).',
      paragraphs: [
        '**A dor nos pés e nas pernas é comum em cabeleireiros, mas é bem menos estudada do que a dor nos ombros ou nas costas.** Uma revisão de escopo de 2019 reuniu 44\u00A0estudos sobre problemas musculoesqueléticos na profissão. Só 5 relatavam dor nos pés, com valores de 10% a 44%. A variação é grande porque os estudos usaram perguntas, países e períodos diferentes.',
        'O maior estudo com grupo de comparação entrevistou 384\u00A0cabeleireiros e 384\u00A0pessoas de outras profissões em duas cidades da Índia. A dor no joelho ou no pé foi a queixa mais comum nos dois grupos: 49,5% dos cabeleireiros contra 38,3% dos outros. O estudo contou joelho e pé como uma categoria só, então não dá para saber quanto disso era só dos pés.',
        'Um estudo britânico com 147\u00A0cabeleireiros e 67\u00A0pessoas de outras profissões encontrou dor nas pernas ou nos pés ligada ao trabalho bem mais vezes nos cabeleireiros. A chance era 31\u00A0vezes maior, mas a margem estatística era muito larga, de cerca de 4 a 267\u00A0vezes, então o tamanho real da diferença é incerto. Em um estudo turco de 2023, depois da lombar, as regiões mais doloridas eram as pernas abaixo do joelho: 36,9% do lado direito e 32,5% do lado esquerdo.',
      ],
      sourceNote:
        'Mishra e Sarkar (2021): estudo transversal, 384\u00A0cabeleireiros e 384\u00A0controles, prevalência em 12\u00A0meses, joelho e pé em uma só categoria. Bradshaw e colegas (2011): questionário aplicado por entrevistador, razão de chances ajustada de 31,0 (IC 95% de 3,8 a 267,4). Ince Parpucu e colegas (2023): Cornell Musculoskeletal Discomfort Questionnaire, última semana.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: 'Por que ficar parado em pé dói mais do que andar?',
      paragraphs: [
        'O dia de um cabeleireiro é diferente do de um enfermeiro. Você não anda grandes distâncias. Fica em pé ao lado da cadeira, se mexe um pouco, se inclina para a frente e volta a ficar em pé. Quando você fica parado em pé:',
        {
          list: [
            'Os músculos da panturrilha ficam na mesma posição, então param de bombear o sangue de volta para cima.',
            'Sangue e líquido se acumulam na parte de baixo das pernas e nos pés, e é por isso que o sapato parece mais apertado no fim do dia.',
            'A almofada do calcanhar e a fáscia plantar, a faixa embaixo do arco, carregam uma carga constante, sem pausa.',
          ],
        },
        'Estudos de laboratório mostram com que rapidez isso acontece. Uma revisão de 2017 com 25\u00A0estudos de laboratório viu que os sintomas na lombar se tornavam clinicamente relevantes depois de cerca de 71\u00A0minutos em pé, em média, e depois de 42\u00A0minutos em pessoas propensas a dor de ficar em pé. Uma coloração ou um corte pode levar mais tempo que isso. Uma revisão de 2015 sobre o trabalho em pé ligou ficar muito tempo em pé a dor lombar e nas pernas, desconforto e cansaço em muitas profissões.',
        'Em um estudo de 2023 com cabeleireiros turcos, quem relatava cansaço nas pernas também tinha mais dor nos joelhos e nas pernas e pontuações piores de energia e mobilidade. **O inchaço também dá para medir:** em 38\u00A0cabeleireiros, a circunferência do tornozelo passou de 21,1\u00A0cm de manhã para 22,1\u00A0cm no fim de um dia sem compressão.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: 'A postura na cadeira afeta os pés?',
      paragraphs: [
        'Os estudos sobre a postura de cabeleireiros olham as costas e os braços, não os pés. Uma revisão de escopo relatou que cabeleireiros costumam se inclinar para a frente ou girar o tronco enquanto cortam e lavam, e que, em um estudo de medição, o corte mantinha a coluna inclinada para a frente durante 66% do tempo da tarefa. Ficar inclinado por muito tempo tende a jogar o peso para a parte da frente do pé.',
        'Nenhum estudo mediu como a postura no salão muda a carga nos pés de cabeleireiros. O que você pode controlar é simples: suba ou desça a cadeira do cliente para não precisar se inclinar, mantenha o peso nos dois pés e mude a posição a cada poucos minutos. Em um estudo de laboratório com quatro horas em pé, quem mudava mais o peso de um pé para o outro também relatava mais desconforto, então mudar de posição toda hora pode ser um sinal de que o desconforto está aumentando, e uma boa deixa para uma pausa curta (Wiggermann e Keyserling, 2013).',
        'Se os pés doem junto com as costas, a ligação vale nos dois sentidos. [Pé chato e dor nas costas](/pt/pe-chato-dor-nas-costas/) mostra o que dizem as pesquisas.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: 'Quais são os melhores calçados para cabeleireiros?',
      paragraphs: [
        '**Nenhum estudo comparou tipos de calçado para cabeleireiros.** As dicas de calçado que você encontra na internet vêm de marcas ou de clínicas, não de estudos feitos em salões. O que as pesquisas mais amplas sobre trabalho em pé apoiam é o amortecimento: uma revisão de 2018 com 10\u00A0estudos encontrou evidência moderada de que palmilhas com amortecimento e pisos mais macios reduzem o desconforto e o cansaço de quem trabalha em pé, e evidência limitada de que as palmilhas fazem mais do que os tapetes.',
        'Na prática, procure:',
        {
          list: [
            'Um solado com amortecimento e algum apoio para o arco, para que o calcanhar e o arco não levem toda a carga de um piso duro.',
            'Bico fechado que não aperte os dedos. Dor entre os dedos pode ser [neuroma de Morton](/pt/neuroma-de-morton/).',
            'Um salto baixo e estável. Salto alto joga mais peso para a parte da frente do pé.',
            'Um solado antiderrapante. O piso do salão fica molhado e escorregadio.',
          ],
        },
        'Algumas pessoas trocam de calçado no meio de um dia longo. Nenhum estudo testou isso, mas um calçado diferente distribui a carga de outro jeito. Se você já tem dor no calcanhar ou no arco, palmilhas podem deixar o dia mais confortável, mas elas agem no conforto, não na panturrilha e no arco em si. [Palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/) compara as duas coisas.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: 'Tapetes antifadiga ajudam cabeleireiros?',
      keyFact: 'Uma revisão de 2018 com 10\u00A0estudos encontrou evidência moderada de que pisos mais macios e palmilhas com amortecimento reduzem o desconforto e o cansaço de quem trabalha em pé (Speed e colegas, 2018).',
      paragraphs: [
        'Um tapete na sua bancada é uma das mudanças mais simples com evidência a favor. Em um estudo de laboratório, pessoas ficaram em pé por quatro horas em quatro tapetes antifadiga diferentes e em um piso duro. Três dos quatro tapetes reduziram o desconforto em comparação com o piso duro, mas os tapetes não foram muito diferentes entre si.',
        'Nem toda a evidência é positiva. Em um pequeno estudo de 1994 com 5\u00A0pessoas, os tapetes reduziram a fadiga muscular só na lombar, e só com o mais macio de dois tapetes. Os músculos das pernas não mudaram. **Então o tapete ajuda no conforto, mas não substitui se mexer e alongar.**',
        'No salão, coloque o tapete onde você realmente fica, atrás da cadeira, e deixe-o bem plano para não tropeçar nas bordas. Cabelo e água podem deixar o tapete escorregadio, então varra com frequência.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: 'Cabeleireiro deve usar banqueta ou um assento semissentado?',
      paragraphs: [
        '**Nenhum estudo testou se uma banqueta reduz a dor nos pés de cabeleireiros.** Sentar tira carga dos pés, e em estudos com trabalho de escritório alternar entre sentado e em pé reduziu o desconforto lombar sem perda de produtividade (Karakolis e Callaghan, 2014). É a melhor evidência indireta a favor de passar parte do tempo sentado.',
        'A banqueta tem um porém. Um estudo alemão sobre postura, resumido na revisão de escopo de 2019, viu que cabeleireiros que usavam banqueta com rodinhas (o mocho) dobravam mais a lombar e erguiam as mãos acima da altura dos ombros com mais frequência. Uma banqueta baixa demais pode trocar a dor nos pés por sobrecarga nas costas e nos ombros.',
        'Um jeito prático: use a banqueta para tarefas em que você alcança sem se esticar, como acabamentos na nuca ou mechas no papel-alumínio nas partes de baixo, e fique em pé no resto. Regule a banqueta alta o bastante para os braços ficarem abaixo da linha dos ombros. Se você trabalha no lavatório, sente quando a estrutura permitir.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: 'Que exercícios dá para fazer entre um cliente e outro?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A, o mais alto, e aos exercícios de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios são os mesmos usados para [fascite plantar](/pt/fascite-plantar/) e para dor de ficar em pé em geral: alongamentos da panturrilha, elevações de calcanhar e um alongamento da fáscia plantar. O que muda para cabeleireiros é o momento. **Você tem intervalos curtos entre clientes, então escolha um ou dois exercícios por intervalo em vez de uma rotina completa.** Nenhum estudo testou pausas com exercícios para os pés de cabeleireiros, então as doses aqui vêm do guia principal de dor no calcanhar.',
        'A panturrilha é o que mais importa. Em um estudo de caso-controle, a panturrilha encurtada aumentou a chance de fascite plantar em 23,3\u00A0vezes, mais do que qualquer outro fator. Se algum exercício levar sua dor a 6 de 10 ou mais, pare por hoje.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada perna',
          how: 'Apoie as mãos na parede ou na parte de trás da sua bancada. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Duas sustentações em cada perna levam uns dois minutos, então cabem em um intervalo entre clientes.',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar de trás no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada perna',
          how: 'Mesma posição, calcanhar de trás no chão, e então dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, é o que segura você de pé quando fica parado, e ele só solta com o joelho dobrado.',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente do outro e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá aos exercícios de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Segure na bancada para se equilibrar. Além de dar força, isso faz a panturrilha bombear o sangue de volta para cima, o que ficar parado em pé não faz.',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá aos exercícios de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Sente na banqueta com os pés apoiados e empurre para cima pela parte da frente dos pés. As mãos sobre os joelhos acrescentam resistência. Com o joelho dobrado, isso trabalha principalmente o sóleo, quase sem carga no calcanhar. Uma boa opção quando os calcanhares já estão doloridos.',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: empurre para cima pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Balanço do tornozelo',
          evidence: { level: 'early', why: 'Trabalha a flexibilidade do tornozelo, o fator de risco mais forte para fascite plantar em um estudo de caso-controle de 2003. Não foi testado sozinho em um ensaio.' },
          dose: '2\u00A0séries de 15, cada perna',
          how: 'Um pé à frente do outro, mãos na parede. Leve o joelho da frente para a frente, por cima dos dedos, com o calcanhar no chão. Devagar, cerca de dois segundos para cada lado. Isso movimenta o tornozelo depois de muito tempo parado em pé.',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: o joelho vai para a frente por cima dos dedos, o calcanhar fica no chão',
          alt: 'Uma figura com um pé à frente do outro levando o joelho da frente por cima dos dedos, com o tornozelo destacado',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar o grau A.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada pé',
          how: 'Sente e cruze um pé sobre o joelho oposto. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Faça isso em um intervalo em que dê para sentar, e antes dos primeiros passos da manhã se o calcanhar dói mais nessa hora.',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado até sentir no arco',
          alt: 'Uma figura sentada puxando para trás os dedos de um pé, com o arco destacado',
        },
      ],
      table: {
        caption: 'Qual exercício cabe em qual intervalo',
        head: ['Intervalo', 'Exercício', 'Dose'],
        rows: [
          ['Enquanto a tinta age', 'Alongamento de panturrilha', '2 x 30 s, cada perna'],
          ['Próximo intervalo', 'Alongamento do sóleo', '2 x 30 s, cada perna'],
          ['Cliente no lavatório', 'Elevação de calcanhar', '3 x 10, os dois pés'],
          ['Sentado na banqueta', 'Elevação de calcanhar sentada', '3 x 10, os dois pés'],
          ['Antes de um corte longo', 'Balanço do tornozelo', '2 x 15, cada perna'],
          ['Horário de almoço', 'Alongamento da fáscia plantar', '2 x 30 s, cada pé'],
        ],
      },
      after: [
        'A elevação de calcanhar com os dois pés e a elevação de calcanhar sentada são o mesmo trabalho de força, então escolha uma por dia. Fazer força em dias alternados dá tempo para a panturrilha se recuperar.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Meias de compressão ajudam cabeleireiros?',
      keyFact: 'Em um ensaio randomizado cruzado com 108\u00A0cabeleireiros, meias de 15 a 20\u00A0mmHg reduziram em 12% a pontuação de dor e inchaço nas pernas e em 19\u00A0mL o volume da parte de baixo da perna (Blazek e colegas, 2013).',
      paragraphs: [
        '**As meias de compressão são uma das poucas coisas testadas nos próprios cabeleireiros.** Em um ensaio randomizado cruzado na Suíça, 108\u00A0cabeleireiros usaram meias de compressão leve (de 15 a 20\u00A0mmHg) durante um período e nenhuma meia durante outro. Com as meias, a pontuação de dor e sensação de inchaço nas pernas caiu em média 12%, e o volume da parte de baixo da perna caiu 19\u00A0mL. As pontuações de sono e humor também melhoraram.',
        'Um estudo brasileiro menor, com 38\u00A0cabeleireiros, mediu o tornozelo. Sem meias, ele passou de 21,1\u00A0cm de manhã para 22,1\u00A0cm no fim do dia. Com meias, ficou em 21,2\u00A0cm no fim do dia, mais ou menos o mesmo da manhã.',
        'Os efeitos foram modestos, e os estudos mediram inchaço e sintomas nas pernas, não problemas do pé como a fascite plantar. Um ensaio de 2023 com vigilantes encontrou resultados parecidos para longos turnos em pé. **As meias ajudam com o inchaço e as pernas pesadas, mas a panturrilha e o arco continuam precisando dos próprios exercícios.** Se você tem diabetes, má circulação ou dormência nos pés, pergunte a um médico antes de usar compressão.',
      ],
      sourceNote:
        'Blazek e colegas (2013): randomizado cruzado, 108\u00A0cabeleireiros, meias de compressão médica de 15 a 20\u00A0mmHg contra nenhuma meia, escala de sintomas de 0 a 4 (queda média de 0,22). Agle e colegas (2020): 38\u00A0cabeleireiros sem doença venosa, circunferência do tornozelo no ponto B, de manhã e à noite, com e sem meias.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: 'Pode ser fascite plantar, varizes ou outra coisa?',
      paragraphs: [
        'Uma dor geral e as pernas pesadas no fim de um dia de salão são comuns e costumam melhorar durante a noite. Alguns padrões apontam para algo mais específico:',
        {
          list: [
            'Uma dor forte no calcanhar nos primeiros passos da manhã ou depois de ficar sentado aponta para [fascite plantar](/pt/fascite-plantar/). A rotina completa está em [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
            'Queimação ou dor embaixo da parte da frente do pé combina com [metatarsalgia](/pt/metatarsalgia-dor-na-planta-do-pe/), comum com solado fino ou salto.',
            'Um arco que dói ou parece mais baixo no fim do dia combina com [dor no arco do pé](/pt/dor-no-arco-do-pe/).',
            'Veias inchadas, tortuosas ou saltadas nas pernas podem ser varizes. Em uma pesquisa com 182\u00A0cabeleireiros em Taiwan, 24,2% tinham varizes, e em quem tinha mais de 45\u00A0anos muitas horas em pé por mês eram um fator de risco (Chen e Guo, 2014).',
          ],
        },
        'Se você não sabe bem que dor é essa, um médico pode dizer com certeza. **Se a dor mudar, se espalhar ou parar de melhorar com repouso, faça uma avaliação antes de colocar carga com exercícios.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: 'Por que os pés de cabeleireiros doem tanto?',
      a: 'Cabeleireiros ficam parados em pé no mesmo lugar por muito tempo, o que carrega o calcanhar e o arco sem o bombeamento da panturrilha que a caminhada dá. Em um estudo com 384\u00A0cabeleireiros, 49,5% relataram dor no joelho ou no pé em 12\u00A0meses, contra 38,3% das pessoas de outras profissões. Inclinar o corpo para a frente, piso duro e calçado sem apoio aumentam a carga.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: 'Quais são os melhores calçados para cabeleireiros com dor nos pés?',
      a: 'Nenhum estudo comparou tipos de calçado para cabeleireiros, então não existe um melhor calçado comprovado. Procure solado com amortecimento, algum apoio para o arco, salto baixo, espaço para os dedos e solado antiderrapante. Uma revisão de 2018 com 10\u00A0estudos encontrou evidência moderada de que palmilhas com amortecimento e pisos mais macios reduzem o desconforto de quem trabalha em pé.',
      cites: [CITE.speedCushioning],
    },
    {
      q: 'Tapete antifadiga funciona para cabeleireiros?',
      a: 'Ajuda no conforto. Em um estudo de laboratório com quatro horas em pé, três de quatro tapetes antifadiga reduziram o desconforto em comparação com um piso duro. Um estudo pequeno e mais antigo viu que os tapetes reduziram a fadiga dos músculos das costas, mas não a das pernas. Vale a pena ter um tapete na sua cadeira, mas ele não substitui alongar e se mexer entre um cliente e outro.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: 'Cabeleireiro deve usar meia de compressão?',
      a: 'A compressão leve é uma das poucas opções testadas em cabeleireiros. Em um ensaio cruzado com 108\u00A0cabeleireiros, meias de 15 a 20\u00A0mmHg reduziram em 12% a pontuação de dor e inchaço nas pernas e em 19\u00A0mL o volume da parte de baixo da perna. O efeito foi modesto. Se você tem diabetes ou má circulação, pergunte antes a um médico.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: 'É melhor o cabeleireiro trabalhar sentado em uma banqueta?',
      a: 'Ficar sentado parte do dia tira carga dos pés, mas nenhum estudo testou banquetas para a dor nos pés de cabeleireiros. Um estudo sobre postura viu que quem usava banqueta dobrava mais a lombar e erguia as mãos acima dos ombros com mais frequência. Use uma banqueta regulada alta o bastante para manter os braços baixos, e fique em pé no resto do tempo.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: 'Que alongamentos o cabeleireiro pode fazer entre um cliente e outro?',
      a: 'O alongamento de panturrilha e o do sóleo, 2\u00A0sustentações de 30\u00A0segundos em cada perna, cabem em um intervalo entre clientes. A elevação de calcanhar, 3\u00A0séries de 10, faz a panturrilha voltar a bombear depois de muito tempo parado em pé. A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A, o mais alto, para fascite plantar.',
      cites: [CITE.guideline],
    },
    {
      q: 'Trabalhar como cabeleireiro pode causar fascite plantar?',
      a: 'Ficar em pé a maior parte do dia de trabalho aumentou a chance de fascite plantar em 3,6\u00A0vezes em um estudo de caso-controle com 50\u00A0casos e 100\u00A0controles, e a panturrilha encurtada aumentou em 23,3\u00A0vezes. Nenhum estudo mediu a fascite plantar especificamente em cabeleireiros, mas o trabalho no salão envolve exatamente esse tipo de tempo longo em pé.',
      cites: [CITE.riddle],
    },
    {
      q: 'Quanto tempo o cabeleireiro pode ficar em pé antes de fazer uma pausa?',
      a: 'Não existe um limite testado para cabeleireiros. Em uma revisão de estudos de laboratório, os sintomas na lombar se tornavam clinicamente relevantes depois de cerca de 71\u00A0minutos em pé, em média, e depois de 42\u00A0minutos em pessoas propensas a dor de ficar em pé. Quebrar os atendimentos longos com um alongamento curto, algumas elevações de calcanhar ou um minuto na banqueta é um caminho razoável.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma queda, uma torção ou algo que caiu no seu pé',
      'você não consegue apoiar o peso no pé, ou está mancando',
      'o pé está dormente, formigando ou queimando',
      'uma perna inchou de repente e está dolorida, vermelha ou quente',
      'o pé está vermelho ou quente, ou você tem febre ou se sente mal',
      'a dor acorda você à noite ou aparece mesmo em repouso',
      'você tem diabetes, má circulação ou sensibilidade reduzida nos pés',
      'a dor não melhorou depois de várias semanas com calçado melhor, tapete, pausas e os exercícios desta página',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text:
      'Você não precisa descobrir sozinho a ordem, as doses ou quando passar para uma versão mais difícil. O Walkito é um app de exercícios para o calcanhar e o pé que monta seu plano uma semana de cada vez, e as sessões são curtas o bastante para caber antes do trabalho ou em um intervalo.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar, e o plano se ajusta a ela. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Dor nos pés de cabeleireiros',
  campaign: 'guide-hairdressers-foot-pain-pt',
};
