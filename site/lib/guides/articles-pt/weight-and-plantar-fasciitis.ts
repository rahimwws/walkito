import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/weight-and-plantar-fasciitis.ts
 * (2026-10-18), written around «fascite plantar e peso», «fascite plantar
 * sobrepeso». Informal «você», neutral and non-blaming about body weight,
 * gender-neutral phrasing where possible. Figures, grades, doses and
 * qualifiers are identical to the English page after its fact-check. Same
 * CITE keys and media ids. Exercise names follow lib/guides/pt.ts. Odds
 * ratios rendered as «chances ... vezes maiores», as on the other /pt/ pages.
 * The English link to heel pain in runners has no Portuguese version, so the
 * words stay without a link.
 */

export const WEIGHT_PF_PT: Guide = {
  lang: 'pt',
  page: 'weightPf',
  mainSource: CITE.vanLeeuwenBmi,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantar e peso: o que dizem os estudos',
  description:
    'O peso causa fascite plantar? Emagrecer ajuda? O que os estudos mostram, por que a carga importa e exercícios sentados que combinam com um peso maior.',
  h1: 'Peso e fascite plantar: o que a pesquisa mostra e o que ajuda agora',
  lede:
    'Um peso corporal maior é um dos fatores de risco mais claros para a [fascite plantar](/pt/fascite-plantar/) em quem não é atleta. Em uma revisão de 51\u00A0estudos, um índice de massa corporal (IMC) acima de 27 esteve associado a chances de fascite plantar 3,7\u00A0vezes maiores (van Leeuwen e colegas, 2016). Se perder peso alivia a dor no calcanhar é menos claro: nenhum ensaio randomizado testou isso em pessoas com dor no calcanhar, então os alongamentos e o trabalho de força que a diretriz de 2023 classifica com os graus mais altos são o ponto de partida, com qualquer peso.',
  intro: [
    'O peso é um fator entre vários, não um veredito. No mesmo estudo caso-controle que ligou um IMC acima de 30 à fascite plantar, um tornozelo rígido foi um fator muito mais forte (Riddle e colegas, 2003). Pessoas de todos os tamanhos têm dor no calcanhar, e pessoas de todos os tamanhos melhoram. Esta página explica o que os estudos encontraram, o que se sabe sobre perder peso, por que a carga importa e exercícios que você pode fazer sentado ou com apoio.',
  ],
  takeaways: [
    'Em um estudo caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem, um IMC acima de 30 esteve associado a chances de fascite plantar 5,6\u00A0vezes maiores, comparado com um IMC de 25 ou menos. Um tornozelo rígido foi o fator mais forte, com chances 23,3\u00A0vezes maiores (Riddle e colegas, 2003).',
    'Uma revisão de 51\u00A0estudos mostrou que um IMC acima de 27 foi o único fator clínico, entre os que puderam ser combinados, claramente ligado à fascite plantar, com chances 3,7\u00A0vezes maiores, e a ligação foi mais forte em quem não é atleta (van Leeuwen e colegas, 2016).',
    'Nenhum ensaio randomizado testou a perda de peso para dor no calcanhar. Uma revisão de 2012 encontrou só dois estudos sobre perda de peso e dor no pé, ambos depois de cirurgia bariátrica, e classificou a evidência como limitada (Butterworth e colegas, 2012).',
    'A diretriz de 2023 para dor no calcanhar dá grau **A** aos alongamentos da fáscia plantar e da panturrilha e grau **B** ao trabalho de força. A orientação para manter uma massa magra saudável recebe grau **E**, o que quer dizer que se apoia na teoria, não em ensaios (Koc e colegas, 2023).',
    'Em um acompanhamento de 174\u00A0pessoas, o IMC não previu quem ainda tinha dor no calcanhar anos depois. Ser mulher e ter dor nos dois calcanhares, sim (Hansen e colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O peso afeta a fascite plantar?',
      keyFact: 'Em uma revisão de 51\u00A0estudos, um IMC acima de 27 esteve associado a chances de fascite plantar 3,7\u00A0vezes maiores, e a ligação foi mais forte em quem não é atleta (van Leeuwen e colegas, 2016).',
      paragraphs: [
        '**Sim: em quem não é atleta, um IMC mais alto aparece ligado à fascite plantar estudo após estudo.** O IMC é o peso dividido pela altura ao quadrado. É uma medida aproximada, mas é a que esses estudos usaram.',
        'O estudo mais conhecido comparou 50\u00A0pessoas com fascite plantar em um calcanhar com 100\u00A0pessoas da mesma idade e do mesmo sexo sem o problema. Um IMC acima de 30 esteve associado a chances de fascite plantar 5,6\u00A0vezes maiores, comparado com um IMC de 25 ou menos (Riddle e colegas, 2003).',
        'Uma revisão de 2016 combinou 51\u00A0estudos. De todos os fatores clínicos que os autores conseguiram juntar, um IMC acima de 27 foi o único claramente ligado à fascite plantar, com chances 3,7\u00A0vezes maiores, e a ligação foi mais forte em quem não é atleta (van Leeuwen e colegas, 2016). Duas revisões anteriores chegaram à mesma conclusão, e nenhuma das duas encontrou ligação entre IMC e dor no calcanhar em atletas (Irving e colegas, 2006; Butterworth e colegas, 2012).',
        'A diretriz de 2023 para dor no calcanhar lista o IMC alto em quem não é atleta como fator de risco, ao lado de um tornozelo rígido, da corrida e de muitas horas em pé, principalmente em superfícies duras (Koc e colegas, 2023).',
      ],
      sourceNote:
        'Riddle 2003: IMC > 30 contra <= 25, razão de chances de 5,6 (IC 95% de 1,9 a 16,6). van Leeuwen 2016: IMC > 27, razão de chances de 3,7 (IC 95% de 2,93 a 5,62); 46 dos 51\u00A0estudos eram estudos caso-controle.',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi, CITE.irvingHeelPain, CITE.butterworthBmi, CITE.guideline],
    },
    {
      h2: 'O peso é a causa ou só um dos fatores?',
      keyFact: 'No mesmo estudo, um tornozelo rígido esteve associado a chances de fascite plantar 23,3\u00A0vezes maiores, e passar a maior parte do dia de trabalho em pé, a chances 3,6\u00A0vezes maiores, contra 5,6\u00A0vezes para um IMC acima de 30 (Riddle e colegas, 2003).',
      paragraphs: [
        '**Um fator entre vários, e não o mais forte.** No estudo caso-controle de 2003, três fatores contaram cada um por si:',
        {
          list: [
            'Um tornozelo rígido (o pé mal dobra para cima em direção à canela): chances 23,3\u00A0vezes maiores.',
            'Um IMC acima de 30: chances 5,6\u00A0vezes maiores.',
            'Passar a maior parte do dia de trabalho em pé: chances 3,6\u00A0vezes maiores.',
          ],
        },
        'Os autores apontaram o tornozelo rígido como o mais importante dos três (Riddle e colegas, 2003). Isso importa, porque a rigidez do tornozelo muitas vezes vem de uma [panturrilha tensa](/pt/panturrilha-tensa/), e alongar a panturrilha é algo que você pode começar hoje.',
        'A maioria desses estudos é do tipo caso-controle ou transversal: eles comparam pessoas que já têm dor no calcanhar com pessoas que não têm. Mostram uma ligação, não a prova de que o peso causa fascite plantar (van Leeuwen e colegas, 2016). Se você também trabalha em pé, [dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) trata dessa parte da carga.',
      ],
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
    },
    {
      h2: 'Por que a carga importa para o calcanhar?',
      paragraphs: [
        '**A fáscia plantar é a faixa embaixo do pé que sustenta o arco, e ela recebe carga a cada passo.** Mais peso corporal quer dizer mais carga a cada passo, então a mesma caminhada ou o mesmo turno pede mais do tecido. A orientação da diretriz para a dor no calcanhar parte dessa ideia: ajustar a carga nos pés no trabalho, no lazer e no dia a dia. A diretriz dá a essa orientação grau **E**, porque ela se apoia na teoria, não em ensaios (Koc e colegas, 2023).',
        'Perder peso reduz, sim, a pressão embaixo do pé. Em um ensaio com 41\u00A0adultos com IMC médio perto de 36, o grupo com um plano alimentar perdeu 5,9\u00A0kg em três meses, contra 1,9\u00A0kg no grupo de comparação, e teve pressão de pico menor embaixo de partes do pé. O formato do pé e o jeito de andar não mudaram (Song e colegas, 2015). Esse ensaio não mediu a dor no calcanhar.',
        'A pressão também não explica tudo. Em um estudo com pessoas com dor no pé na fila para cirurgia bariátrica, a dor diminuiu depois da cirurgia, mas a queda na pressão embaixo do pé não teve relação com a queda da dor. O humor teve: quem tinha mais sintomas depressivos relatava mais dor no pé, antes e depois (Walsh e colegas, 2018). A dor depende de muito mais do que a mecânica, e esse é mais um motivo para não se culpar por ela.',
      ],
      cites: [CITE.guideline, CITE.songWeightLoss, CITE.walshBariatric],
    },
    {
      h2: 'Perder peso ajuda na fascite plantar?',
      keyFact: 'Uma revisão de 2012 encontrou só dois estudos prospectivos sobre perda de peso e sintomas no pé, ambos depois de cirurgia, e concluiu que a evidência de que perder peso reduz a dor no pé era limitada (Butterworth e colegas, 2012).',
      paragraphs: [
        '**Pode ajudar, mas nenhum ensaio randomizado testou isso em pessoas com dor no calcanhar.** Essa é a resposta honesta. Tudo o que existe vem de estudos sem um grupo de comparação justo, a maioria depois de cirurgia bariátrica. Veja o que há:',
      ],
      table: {
        caption: 'Estudos sobre perda de peso e dor no pé ou no calcanhar',
        head: ['Estudo', 'Quem', 'O que encontrou'],
        rows: [
          ['Boules, 2018', '163\u00A0pessoas com fascite plantar, depois de cirurgia bariátrica', 'Em 90%, os sintomas no calcanhar se resolveram, segundo os prontuários'],
          ['Walsh, 2018', '45\u00A0pessoas com dor no pé: 29 operadas, 16 na fila de espera', 'A dor no pé diminuiu depois da cirurgia'],
          ['Song, 2015', '41\u00A0adultos, plano alimentar ou espera', 'Menos pressão embaixo do pé; dor não medida'],
          ['Yang, 2025', '92\u00A0pessoas usando semaglutida, entre 2.902 com dor no calcanhar', 'Mais melhora da dor do que quem não usava, sem randomização'],
        ],
      },
      after: [
        'O maior estudo revisou os prontuários de 163\u00A0pessoas com fascite plantar que fizeram cirurgia bariátrica. O IMC médio caiu de 45 para cerca de 35, e em 146 delas (90%) os sintomas no calcanhar se resolveram (Boules e colegas, 2018). Não havia grupo de comparação, e cerca de 90% das pessoas com fascite plantar melhoram com cuidados não cirúrgicos de qualquer forma (Latt e colegas, 2020), então esse estudo não consegue mostrar quanto a perda de peso em si acrescentou.',
        'O estudo com semaglutida acompanhou pessoas com dor no calcanhar de longa data. As 92 que usavam o remédio para diabetes ou para perder peso relataram mais melhora do que as que não usavam, mas elas não foram escolhidas por sorteio, e os autores pedem um ensaio randomizado (Yang e colegas, 2025). Remédios para perder peso e cirurgia são decisões para você tomar com seu médico, não algo para começar só por causa da dor no calcanhar.',
        'A diretriz não diz aos profissionais para prescrever perda de peso para dor no calcanhar. Ela diz que eles podem orientar sobre exercícios para ganhar ou manter uma massa magra saudável e encaminhar você para acompanhamento nutricional, com grau **E** (Koc e colegas, 2023).',
      ],
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.walshBariatric, CITE.songWeightLoss, CITE.yangSemaglutide, CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quais exercícios combinam com um peso corporal maior?',
      paragraphs: [
        'Os exercícios com os melhores graus na diretriz de 2023, os alongamentos (**A**) e o trabalho de força para a panturrilha (**B**), não dependem do seu peso (Koc e colegas, 2023). O que muda é como você começa. As versões sentadas e com apoio põem menos carga no calcanhar e exigem menos dos joelhos e do equilíbrio, por isso vêm primeiro aqui.',
        'As doses iniciais são as mesmas do guia principal de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/). Faça o primeiro alongamento da fáscia plantar sentado na beira da cama, antes de ficar em pé: em um ensaio com 82\u00A0pessoas, um alongamento da fáscia plantar feito antes de levantar aliviou a dor dos primeiros passos da manhã mais do que só o alongamento de panturrilha (DiGiovanni e colegas, 2003). Se algum exercício levar a dor no calcanhar a 6 de 10, pare por hoje.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria dos dias em que você se exercitar',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Se cruzar a perna for difícil, deixe o pé no chão, passe uma toalha pela parte da frente da sola e puxe com cuidado.',
          stop: 'Dor aguda no calcanhar, ou dor que chega a 6 de 10',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias em que você se exercitar',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede ou na bancada da cozinha. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. A parede segura parte do seu peso, então você só inclina até onde se sentir firme.',
          stop: 'Dor na panturrilha que continua depois de parar',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar de trás no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias em que você se exercitar',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição na parede, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor na panturrilha que continua depois de parar',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente do outro e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: '3\u00A0dias por semana, nunca dois seguidos',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba os calcanhares fazendo força com a parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha, quase sem carga no calcanhar. É o primeiro passo do trabalho de panturrilha, seja qual for o seu peso.',
          stop: 'Dor no calcanhar que chega a 6 de 10, ou pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba fazendo força com a parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés, com apoio na bancada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Nos dias de força, quando a elevação sentada ficar fácil',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique de frente para uma bancada ou para o encosto de uma cadeira firme, com as mãos apoiadas. Suba reto por cima dos dedões e desça devagar. Nos dias de mais dor, as mãos podem segurar um pouco do peso, e cada vez menos conforme você ganha força. Os dois pés dividem a carga.',
          stop: 'Dor no calcanhar que chega a 6 de 10, ou pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'moderate', why: 'Faz parte do programa que melhorou o formato do arco em um ensaio de 2023. Sozinho, o pé curto tem resultados mais fracos. Não foi testado para dor no calcanhar.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Na maioria dos dias em que você se exercitar',
          feel: 'O arco subindo',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, e segure. Mantenha a borda de fora do pé no chão. Não encolha os dedos: encolher os dedos é o erro mais comum neste exercício.',
          stop: 'Cãibra no pé que não passa quando você para',
          image: 'Exercício: pé curto, sentado',
          media: 'short_foot_seated',
          caption: 'Pé curto, sentado: suba o arco sem encolher os dedos',
          alt: 'Uma figura sentada subindo o arco de um pé, com o arco destacado',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
    {
      h2: 'Quais atividades poupam mais o calcanhar?',
      paragraphs: [
        '**Atividades em que os pés não recebem todo o seu peso a cada passo.** A diretriz recomenda mudar a carga nos pés em vez de parar de se mexer (Koc e colegas, 2023). Nenhum estudo comparou atividades para pessoas com dor no calcanhar e peso maior, então estas são opções práticas, não testadas:',
        {
          list: [
            '**Bicicleta ergométrica ou bicicleta horizontal.** Você continua se mexendo enquanto o banco segura o seu peso.',
            '**Natação ou caminhada na água.** A água tira boa parte do seu peso de cima dos pés.',
            '**Exercícios sentados ou para a parte de cima do corpo.** Bicicleta de braço, elásticos ou treinos na cadeira mantêm você em atividade nos dias em que o calcanhar está dolorido.',
            '**Caminhadas mais curtas, mais vezes.** Várias caminhadas curtas podem pesar menos num calcanhar dolorido do que uma caminhada longa.',
          ],
        },
        'Um teste simples vale para qualquer atividade: se os primeiros passos da manhã seguinte ficarem claramente piores, aquele dia foi mais do que o calcanhar aguentava, então faça um pouco menos da próxima vez. [Caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/) explica como retomar a caminhada passo a passo.',
        'Se você está começando a se exercitar para se sentir melhor ou para perder peso, começar com atividades de baixo impacto deixa você seguir em frente enquanto o calcanhar se acalma. A diretriz lista a corrida e muitas horas em pé, principalmente em superfícies duras, como fatores de risco para dor no calcanhar (Koc e colegas, 2023).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Sapatos e palmilhas importam mais com um peso maior?',
      paragraphs: [
        'Nenhum estudo testou sapatos ou palmilhas para dor no calcanhar especificamente em pessoas com peso maior. Para a dor no calcanhar em geral, a diretriz de 2023 dá às palmilhas sozinhas o grau **B contra**: a evidência diz para não contar só com elas. Combinadas com alongamento e trabalho de força, elas recebem **C** (Koc e colegas, 2023). A página [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/) compara as duas opções.',
        'A diretriz recomenda, sim, orientação sobre calçados como parte do controle da carga, e lista o trabalho com carga em superfícies duras que absorvem pouco impacto como fator de risco (Koc e colegas, 2023). Uma opção prática, não testada em ensaios, são sapatos com bom apoio e amortecimento em pisos duros, inclusive em casa.',
        'Depois de uma grande perda de peso, os pés podem mudar. No estudo com cirurgia, os autores sugeriram que perder gordura embaixo do meio do pé pode mudar o encaixe de sapatos e palmilhas, e que vale conferir isso depois de uma perda de peso grande (Walsh e colegas, 2018).',
      ],
      cites: [CITE.guideline, CITE.walshBariatric],
    },
    {
      h2: 'A fascite plantar passa se eu não perder peso?',
      paragraphs: [
        '**Para a maioria das pessoas, sim: ela melhora com o tempo e com cuidados não cirúrgicos.** Cerca de 90% das pessoas com fascite plantar melhoram com cuidados não cirúrgicos, como alongamentos e palmilhas, muitas vezes em 3 a 6\u00A0meses (Latt e colegas, 2020).',
        'Em um acompanhamento longo de 174\u00A0pessoas, os pesquisadores testaram se IMC, idade, tabagismo, trabalho físico e outros fatores previam quem ainda teria dor no calcanhar anos depois. Só ser mulher e ter dor nos dois calcanhares previram. O IMC, não (Hansen e colegas, 2018).',
        'Ou seja, um peso maior pode deixar mais provável que a fascite plantar comece, mas não quer dizer que você vai ficar com ela para sempre. Os alongamentos e o trabalho de panturrilha acima são os mesmos que ajudam pessoas de qualquer tamanho. [Quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) mostra a linha do tempo completa.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
  ],
  faq: [
    {
      q: 'Sobrepeso pode causar fascite plantar?',
      cites: [CITE.riddle, CITE.vanLeeuwenBmi],
      a: 'Um peso maior está ligado à fascite plantar, mas nenhum estudo prova que ele seja a causa. Um IMC acima de 30 esteve associado a chances 5,6\u00A0vezes maiores em um estudo, e uma revisão de 51\u00A0estudos encontrou chances 3,7\u00A0vezes maiores acima de um IMC de 27, com a ligação mais forte em quem não é atleta. Um tornozelo rígido foi um fator ainda mais forte.',
    },
    {
      q: 'Perder peso ajuda na fascite plantar?',
      cites: [CITE.butterworthBmi, CITE.boulesBariatric, CITE.latt],
      a: 'Pode ajudar, mas nenhum ensaio randomizado testou isso em pessoas com dor no calcanhar. Em um estudo de prontuários de 163\u00A0pessoas com fascite plantar que fizeram cirurgia bariátrica, em 90% os sintomas no calcanhar se resolveram, mas não havia grupo de comparação, e a maioria das pessoas com fascite plantar melhora com cuidados não cirúrgicos de qualquer forma (Latt e colegas, 2020). Uma revisão de 2012 classificou a evidência como limitada.',
    },
    {
      q: 'Quanto peso preciso perder para ajudar na fascite plantar?',
      cites: [CITE.butterworthBmi],
      a: 'Nenhum estudo calculou uma quantidade. Não existe ensaio de perda de peso para dor no calcanhar, então qualquer número que você leia é um palpite. Se você quer perder peso pela sua saúde, converse com seu médico. Para o calcanhar em si, o alongamento e o trabalho de força para a panturrilha têm a evidência mais forte, com qualquer peso.',
    },
    {
      q: 'O IMC é fator de risco para fascite plantar em corredores?',
      cites: [CITE.irvingHeelPain, CITE.butterworthBmi],
      a: 'Na maioria das vezes, não. Duas revisões sistemáticas mostraram que o IMC estava ligado à dor crônica no calcanhar em quem não é atleta, mas não em atletas. Na dor no calcanhar de corredores, outros fatores pesam mais.',
    },
    {
      q: 'Que exercício posso fazer com fascite plantar se estou acima do peso?',
      cites: [CITE.guideline],
      a: 'Exercícios sentados e com apoio são um bom começo: um alongamento da fáscia plantar sentado, alongamentos de panturrilha na parede e elevação de calcanhar sentada. Para o condicionamento, bicicleta ergométrica, natação ou caminhada na água mantêm você em movimento com menos carga no calcanhar. A diretriz de 2023 recomenda mudar a carga nos pés em vez de parar de se mexer.',
    },
    {
      q: 'Remédios para emagrecer ajudam na fascite plantar?',
      cites: [CITE.yangSemaglutide],
      a: 'Existe um estudo observacional. Pessoas com dor no calcanhar de longa data que usavam semaglutida relataram mais melhora do que as que não usavam, mas elas não foram distribuídas por sorteio, e os autores pedem um ensaio randomizado. É uma decisão para você tomar com seu médico, não algo para começar só por causa da dor no calcanhar.',
    },
    {
      q: 'Por que meus calcanhares doem mais depois que ganhei peso?',
      cites: [CITE.guideline, CITE.songWeightLoss],
      a: 'Mais peso corporal quer dizer mais carga na fáscia plantar a cada passo, e a dor no calcanhar muitas vezes começa depois que a carga nos pés aumenta. Em um ensaio com 41\u00A0adultos, perder peso reduziu a pressão embaixo de partes do pé. Esse ensaio não mediu a dor no calcanhar, então a ligação com a dor é provável, mas não comprovada.',
    },
    {
      q: 'A fascite plantar passa sem perder peso?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Para a maioria das pessoas, sim. Cerca de 90% melhoram com cuidados não cirúrgicos, como alongamentos e palmilhas, muitas vezes em 3 a 6\u00A0meses. Em um acompanhamento longo de 174\u00A0pessoas, o IMC não previu quem ainda tinha dor no calcanhar anos depois. Ser mulher e ter dor nos dois calcanhares, sim.',
    },
    {
      q: 'Palmilhas são mais importantes se eu peso mais?',
      cites: [CITE.guideline],
      a: 'Nenhum estudo testou isso. Para a dor no calcanhar em geral, a diretriz de 2023 desaconselha contar só com palmilhas (grau B contra) e dá a elas grau C quando combinadas com alongamento e trabalho de força. Sapatos com amortecimento em pisos duros são uma opção prática, embora os ensaios não os tenham testado. Veja [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/).',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'você tem diabetes e nota dormência, formigamento, uma ferida ou mudanças na pele ou no formato do pé',
      'a dor começou depois de uma queda, um salto ou uma torção, ou você não consegue apoiar o peso no pé',
      'o calcanhar está inchado, vermelho ou quente, ou você tem febre',
      'a dor piora à noite ou em repouso, ou vem com queimação ou dormência',
      'dói quando você aperta as laterais do calcanhar, ou a dor continua aumentando com a atividade (possível fratura por estresse)',
      'uma panturrilha está dolorida e inchada (possível coágulo): procure atendimento no mesmo dia',
      'os dois calcanhares doem junto com dor ou rigidez em outras articulações',
      'você está pensando em remédios para perder peso ou em cirurgia: essa é uma conversa para ter com seu médico',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Ele não acompanha o seu peso nem dá orientação de dieta. Ele monta um plano com os alongamentos e o trabalho de força para a panturrilha desta página e começa pelas versões sentadas e com apoio.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar daquela manhã, e o plano se ajusta a ela. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPain', 'walkingPf', 'standing'],
  crumb: 'Peso e fascite plantar',
  campaign: 'guide-weight-and-plantar-fasciitis-pt',
};
