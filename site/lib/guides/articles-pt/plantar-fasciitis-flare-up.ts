import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/plantar-fasciitis-flare-up.ts
 * (2026-10-19), written around «crise de fascite plantar» and «fascite
 * plantar piorou, o que fazer». Informal «você». Figures, grades, doses,
 * hedges and CITE keys are identical to the English page after its
 * fact-check. Same media ids. Exercise names follow the other Portuguese PF
 * pages. Links to heel-pain-runners and foot-pain-identifier removed (no
 * Portuguese pages), words kept. "Clinician" is «profissional de saúde».
 */

export const PF_FLARE_UP_PT: Guide = {
  lang: 'pt',
  page: 'pfFlareUp',
  mainSource: CITE.guideline,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Crise de fascite plantar: gatilhos e as primeiras 48 horas',
  description:
    'Crise de fascite plantar: o que costuma desencadear, o que fazer nas primeiras 48 horas, como retomar os exercícios e os sinais de que não é uma crise.',
  h1: 'Crise de fascite plantar: o que desencadeia e o que fazer nas primeiras 48\u00A0horas',
  lede:
    'Uma crise de [fascite plantar](/pt/fascite-plantar/) normalmente vem depois de um salto na carga que o calcanhar precisa aguentar: uma caminhada longa, um dia em pé em piso duro ou uma rotina nova. A diretriz de 2023 para dor no calcanhar lista a dor depois de um aumento recente de atividade com apoio do peso como um sinal típico e recomenda orientar a pessoa a ajustar a carga, sem mandar parar, uma orientação que ela classifica como grau **E** porque se baseia em teoria, não em ensaios (Koc e colegas, 2023). Nas primeiras 48\u00A0horas, reduza a carga que provocou a crise, mantenha os alongamentos suaves e deixe a manhã seguinte dizer como as coisas estão indo.',
  intro: [
    'Nenhum estudo definiu o que é uma crise de fascite plantar nem testou o que fazer nos dois primeiros dias, então esta página usa as regras testadas mais próximas e diz de onde elas vêm. Ela cobre os gatilhos comuns, um plano curto para as primeiras 48\u00A0horas, como recuar nos exercícios e voltar a subir, e os sinais de que a dor é outra coisa e não uma crise. Se o seu calcanhar dói mais nos primeiros passos do dia, [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) explica esse padrão em separado.',
  ],
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar lista a dor depois de um aumento recente de atividade com apoio do peso como um sinal típico da fascite plantar e recomenda orientação para mudar a carga, com grau **E**, sem indicar repouso completo (Koc e colegas, 2023).',
    'Em um estudo com 50\u00A0pessoas com fascite plantar e 100 sem, um tornozelo rígido (23,3\u00A0vezes a chance), um IMC acima de 30 (5,6\u00A0vezes) e ficar em pé na maior parte do dia de trabalho (3,6\u00A0vezes) foram fatores de risco. Esse estudo olhou para quem desenvolve fascite plantar, não para as crises (Riddle e colegas, 2003).',
    'Uma regra de monitoramento da dor permite dor de até cerca de 5 de 10 durante a atividade, desde que ela volte ao normal até a manhã seguinte. Ela foi testada em 38\u00A0pessoas com dor no Aquiles, não com fascite plantar (Silbernagel e colegas, 2007).',
    'A diretriz não faz recomendação sobre gelo ou calor, então o gelo é no máximo uma forma de conforto, e nenhum estudo mostra que ele acalma uma crise (Koc e colegas, 2023).',
    'Em um ensaio com 180\u00A0adultos, a orientação para reduzir as atividades que provocam crises e depois voltar aos poucos, junto com uma calcanheira, veio acompanhada de uma melhora clinicamente relevante em cerca de três meses (Riel e colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é uma crise de fascite plantar?',
      paragraphs: [
        '**Uma crise é uma sequência de dias em que a dor de sempre no calcanhar fica claramente pior do que o seu normal.** Os primeiros passos da manhã doem mais, o calcanhar começa a doer mais cedo quando você está em pé, ou uma dor que tinha sumido volta. Não existe uma definição médica aceita, e não encontramos nenhum estudo que conte com que frequência as crises acontecem ou quanto tempo elas duram.',
        'O tecido embaixo do calcanhar não gosta de mudanças bruscas de carga. A diretriz de 2023 descreve a dor da fascite plantar como mais perceptível nos primeiros passos depois do repouso e lista um aumento recente de atividade com apoio do peso como parte típica da história (Koc e colegas, 2023). Uma crise provavelmente é a mesma coisa em miniatura: o calcanhar teve que fazer mais do que estava pronto para fazer.',
        'Por isso uma crise não precisa significar que você voltou à estaca zero. Cerca de 90% das pessoas com fascite plantar melhoram com cuidado sem cirurgia, embora muitas vezes isso leve meses (Latt e colegas, 2020). Veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) para saber o que mostram os acompanhamentos longos.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'O que desencadeia uma crise de fascite plantar?',
      keyFact: 'Ficar em pé na maior parte do dia de trabalho veio com 3,6\u00A0vezes a chance de fascite plantar, e um tornozelo rígido com 23,3\u00A0vezes, em um estudo com 50\u00A0casos e 100\u00A0controles (Riddle e colegas, 2003).',
      paragraphs: [
        '**O ponto em comum é uma mudança brusca de carga.** Nenhum estudo acompanhou o que provoca crises em quem já tem fascite plantar. O que existe são pesquisas sobre o que faz a pessoa desenvolver o problema, e elas apontam na mesma direção:',
        {
          list: [
            '**Um salto repentino de atividade.** Uma viagem com dias longos de caminhada, um novo plano de corrida, uma trilha ou uma semana puxada no trabalho. A diretriz lista um aumento recente de atividade com apoio do peso como típico (Koc e colegas, 2023). Se você corre, a página sobre dor no calcanhar em corredores fala das mudanças de quilometragem.',
            '**Muitas horas em pé.** Em um estudo com 50\u00A0pessoas com fascite plantar e 100 sem, ficar em pé na maior parte do dia de trabalho veio com 3,6\u00A0vezes a chance (Riddle e colegas, 2003). Em outro, as pessoas com dor no calcanhar eram tão ativas quanto as sem dor, mas ficavam em pé 3,4\u00A0horas a mais por dia (Landorf e colegas, 2023). Veja [dor nos pés de ficar em pé](/pt/dor-nos-pes-ficar-em-pe/).',
            '**Descalço em piso duro.** A diretriz lista o trabalho em pé sobre superfícies que absorvem mal o impacto como fator de risco (Koc e colegas, 2023), embora um estudo não tenha encontrado mais pessoas em pé sobre piso duro entre quem tinha dor no calcanhar do que entre quem não tinha (Landorf e colegas, 2023). Um guia de boas práticas de 2021 aconselha evitar andar descalço e usar calçados retos e sem suporte até os sintomas passarem (Morrissey e colegas, 2021).',
            '**Calçados novos ou diferentes.** Não encontramos nenhum estudo que tenha testado calçados novos como gatilho. O que se sabe: pessoas com dor no calcanhar usavam calçados com saltos mais duros do que pessoas sem dor (Landorf e colegas, 2023), e o guia de boas práticas prefere calçados com suporte, com o calcanhar um pouco mais alto que os dedos (Morrissey e colegas, 2021). Trocar para calçados retos, finos ou muito flexíveis, ou para [calçados barefoot](/pt/calcados-barefoot/), é uma mudança que o seu calcanhar vai perceber.',
            '**Uma panturrilha encurtada.** No mesmo estudo de 2003, pessoas com um tornozelo que dobrava para cima 0\u00A0grau ou menos tinham 23,3\u00A0vezes a chance das pessoas com mais de 10\u00A0graus (Riddle e colegas, 2003). Deixar os alongamentos de lado por um tempo pode trazer essa rigidez de volta. Veja [panturrilha tensa](/pt/panturrilha-tensa/).',
          ],
        },
        'O peso corporal também é um fator de risco: um IMC acima de 30 veio com 5,6\u00A0vezes a chance no estudo de 2003. O peso muda devagar, então é mais um fator de fundo do que um gatilho para uma crise desta semana. Mais em [peso e fascite plantar](/pt/peso-e-fascite-plantar/).',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.landorfFootwear, CITE.morrisseyBestPractice],
    },
    {
      h2: 'O que fazer nas primeiras 48 horas de uma crise?',
      keyFact: 'Em um ensaio com 180\u00A0adultos, o grupo que recebeu só a orientação para reduzir as atividades que provocam crises e voltar aos poucos, junto com uma calcanheira, melhorou de forma clinicamente relevante em cerca de três meses (Riel e colegas, 2023).',
      paragraphs: [
        '**Reduza a carga, continue se mexendo com cuidado e avalie na manhã seguinte.** Nenhum ensaio testou um plano de 48\u00A0horas para a fascite plantar. Os passos abaixo colocam em prática a diretriz e a orientação testada mais próxima:',
        {
          list: [
            '**Descubra o gatilho e diminua.** Caminhadas mais curtas, mais pausas sentado, uma pausa na corrida ou nas subidas. A orientação testada em um ensaio dinamarquês foi reduzir as atividades que provocam crises e depois voltar aos poucos ao nível anterior, guiado pelos sintomas (Riel e colegas, 2020).',
            '**Não pare de se mexer de vez.** A diretriz recomenda ajustar a carga e não indica repouso completo (Koc e colegas, 2023). A caminhada que você precisa fazer no dia a dia está liberada dentro da regra de dor abaixo.',
            '**Mantenha os alongamentos suaves.** Os alongamentos da fáscia plantar e da panturrilha recebem grau **A** (Koc e colegas, 2023). Faça o primeiro antes de o pé tocar o chão de manhã.',
            '**Use calçado dentro de casa.** Calçados com suporte ou chinelos firmes desde o primeiro passo do dia, em vez de pés descalços em piso frio ou de madeira (Morrissey e colegas, 2021).',
            '**Quebre o tempo em pé.** O guia de boas práticas aconselha interromper longos períodos em pé parado (Morrissey e colegas, 2021).',
          ],
        },
        'Nesse ensaio, todos os 180\u00A0adultos receberam esse tipo de orientação mais uma calcanheira, e dois dos três grupos também fizeram treino de elevação de calcanhar ou elevação de calcanhar mais uma injeção de corticoide. Os três grupos do ensaio melhoraram de forma clinicamente relevante em cerca de três meses, inclusive o grupo que recebeu só a orientação e a calcanheira (Riel e colegas, 2023). A orientação era a base, não um detalhe.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.rielHeelRaiseAdd, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quanta dor é aceitável durante uma crise?',
      keyFact: 'Em um ensaio com 38\u00A0pessoas com dor no Aquiles, quem continuou ativo com dor de até cerca de 5 de 10, voltando ao normal até a manhã seguinte, se saiu tão bem em doze meses quanto quem pausou corrida e saltos (Silbernagel e colegas, 2007).',
      paragraphs: [
        '**Use a mesma regra de dor da caminhada: no máximo moderada durante a atividade e de volta ao seu normal até a manhã seguinte.** A regra vem de um ensaio de 2007 com 38\u00A0pessoas com dor no tendão de Aquiles. Dor de até cerca de 5 de 10 era permitida durante a atividade, desde que voltasse ao normal até a manhã seguinte e não fosse aumentando de uma semana para outra. Continuar ativo dessa forma não levou a resultados piores em doze meses do que pausar corrida e saltos por seis semanas (Silbernagel e colegas, 2007). Ela não foi testada na fascite plantar, então use como uma referência emprestada.',
        'Para dor no calcanhar, o guia de boas práticas de 2021 recomenda fortemente monitorar a dor e ensinar a pessoa a ler a resposta da dor à atividade, sem dar um número (Morrissey e colegas, 2021). Durante os exercícios, o Walkito encerra a sessão se a dor chegar a 6 de 10.',
      ],
      table: {
        caption: 'Como ler o seu calcanhar durante uma crise (escala de dor de 0 a 10)',
        head: ['O que você percebe', 'O que fazer'],
        rows: [
          ['0 a 5 durante, manhã seguinte normal', 'Mantenha essa carga'],
          ['Acima de 5 durante a atividade', 'Pare ou encurte hoje'],
          ['Manhã seguinte pior que o normal', 'Reduza de novo por um ou dois dias'],
          ['Melhor a cada manhã', 'Comece a retomar'],
          ['Pior a cada dia mesmo reduzindo', 'Procure um profissional de saúde'],
        ],
      },
      after: [
        'A versão completa desta regra, com uma coluna para a próxima caminhada, está em [caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/). A verificação da manhã é a que mais importa, porque a dor no primeiro passo mostra como o seu pé lidou com o dia anterior.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0pessoas por grupo, tendinopatia do Aquiles, não fascite plantar.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Vale colocar gelo numa crise de fascite plantar?',
      paragraphs: [
        '**O gelo pode ser usado se deixa o calcanhar mais confortável, mas nenhum estudo mostra que ele acalma uma crise.** A diretriz de 2023 encontrou evidência insuficiente para recomendar calor ou frio superficial para a fascite plantar (Koc e colegas, 2023).',
        'Mesmo em lesões esportivas recentes, em que o gelo é mais usado, uma revisão de 22\u00A0ensaios não encontrou evidência de uma melhor forma nem de um melhor tempo de aplicação (Bleakley e colegas, 2004). Então não existe uma regra testada de “gelo por X minutos” para um calcanhar dolorido. Se usar, coloque um pano entre o gelo e a pele, pare se a pele ficar dormente e não use se você tem diabetes ou pouca sensibilidade nos pés.',
        'Use junto com os alongamentos, não no lugar deles. [Gelo ou calor para fascite plantar](/pt/gelo-ou-calor-fascite-plantar/) explica o que os poucos estudos encontraram e como proteger a pele.',
      ],
      cites: [CITE.guideline, CITE.bleakleyIce],
    },
    {
      h2: 'Como retomar depois de uma crise?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas, a elevação de calcanhar com carga alta aliviou a dor e melhorou a função no dia a dia mais rápido que o alongamento, e em doze meses os dois grupos estavam mais ou menos iguais (Rathleff e colegas, 2015).',
      paragraphs: [
        '**Recue um nível no trabalho de força e volte a subir quando as manhãs se acalmarem.** Nenhum estudo testou como retomar depois de uma crise. A diretriz de 2023 dá ao trabalho de força na panturrilha o grau **B** (Koc e colegas, 2023), e em um ensaio com 48\u00A0pessoas a elevação de calcanhar com carga alta e uma toalha embaixo dos dedos ajudou mais rápido que o alongamento (Rathleff e colegas, 2015). Vale manter o trabalho de força, só que num nível que o seu calcanhar aguente nesta semana.',
        'O trabalho de panturrilha do Walkito sobe em degraus: elevação de calcanhar sentada, depois elevação de calcanhar com os dois pés, depois uma elevação sustentada e só mais tarde a elevação de calcanhar com toalha, que é a que mais exige da fáscia plantar. Durante uma crise:',
        {
          list: [
            'Desça um degrau. Se você estava na elevação de calcanhar com toalha, volte para a elevação sustentada ou para a elevação com os dois pés. Se estava com os dois pés, volte para a versão sentada.',
            'Continue com os alongamentos normalmente.',
            'Suba de novo um degrau quando as duas últimas sessões no nível mais baixo parecerem fáceis e as suas manhãs tiverem voltado ao normal.',
            'Traga de volta a atividade que provocou a crise em pequenas partes, mudando uma coisa de cada vez: distância, ritmo, subidas ou tipo de piso.',
          ],
        },
        'Essas são as doses iniciais do Walkito, não uma prescrição. O conjunto completo e a tabela estão em [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/), e a escada de força é explicada em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria das sessões, e antes dos primeiros passos do dia',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Dor forte no calcanhar',
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
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha encurtada puxa o calcanhar o dia todo, então este alongamento importa mesmo que você o sinta mais acima.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente e outro atrás e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força, o degrau para onde voltar durante uma crise',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha, quase sem carga no calcanhar.',
          stop: 'Dor no calcanhar que chegue a 6 de 10, ou uma manhã seguinte pior',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força, quando a versão sentada voltar a parecer fácil',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga. Apoie-se na parede para se equilibrar.',
          stop: 'Dor no calcanhar que chegue a 6 de 10, ou uma manhã seguinte pior',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Qual é a pior coisa a fazer durante uma crise?',
      paragraphs: [
        '**Nenhum estudo classifica qual é a pior, mas dois erros opostos são os mais comuns: forçar sem parar e parar tudo.** Veja o que a evidência diz sobre cada um:',
        {
          list: [
            '**Forçar com a dor aumentando.** Manter as mesmas caminhadas ou corridas longas enquanto o calcanhar piora a cada manhã ignora o único sinal em que a regra de dor testada se apoia (Silbernagel e colegas, 2007). Os especialistas por trás do guia de boas práticas de 2021 apontaram uma mudança na carga total como fator de risco para crises, então mais carga é a direção errada (Morrissey e colegas, 2021).',
            '**Parar toda atividade e todos os exercícios.** A diretriz recomenda ajustar a carga e não indica repouso completo (Koc e colegas, 2023), e no ensaio do Aquiles continuar ativo dentro de um limite de dor deu tão certo quanto pausar corrida e saltos por seis semanas (Silbernagel e colegas, 2007). Abandonar os alongamentos e o trabalho de panturrilha também joga fora as opções com grau **A** e **B**.',
            '**Andar descalço em piso duro,** principalmente nos primeiros passos do dia (Morrissey e colegas, 2021).',
            '**Contar só com uma palmilha.** As palmilhas usadas sozinhas para alívio a curto prazo recebem grau **B contra** na diretriz, embora possam ajudar junto com exercício (Koc e colegas, 2023). Veja [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/).',
          ],
        },
        'Uma crise não é prova de que o seu plano falhou. Se as crises continuam voltando ou cada uma é pior que a anterior, é hora de procurar um profissional de saúde, não de se esforçar mais.',
      ],
      cites: [CITE.silbernagel, CITE.guideline, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quando não é uma crise?',
      keyFact: 'O raio-X simples muitas vezes não mostra fraturas por estresse no início: uma revisão estimou a sensibilidade dele na primeira consulta em cerca de 10%, subindo para 30 a 70% depois de três semanas (Patel e colegas, 2011).',
      paragraphs: [
        '**Se a dor se comporta de um jeito diferente da sua fascite plantar de sempre, não presuma que é uma crise.** A dor da fascite plantar é pior nos primeiros passos depois do repouso, muitas vezes alivia quando você começa a andar e pode voltar depois de muito tempo em pé (Koc e colegas, 2023). Outros padrões apontam para outras causas:',
        {
          list: [
            '**Dor que aumenta quanto mais você anda,** muitas vezes depois de um salto na atividade, ou dor ao apertar os lados do calcanhar, pode ser uma fratura por estresse (Tu, 2018). Veja [fascite plantar ou fratura por estresse](/pt/fascite-plantar-ou-fratura-por-estresse/).',
            '**Dor à noite ou em repouso,** ou queimação, formigamento e dormência, sugerem algo além da fáscia plantar. Veja [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/).',
            '**Um estalo repentino ou uma dor aguda** embaixo do pé durante uma atividade, ou um roxo ou inchaço novo, precisam de um profissional de saúde, não de um plano para crise.',
            '**Uma dor profunda no centro do calcanhar** que piora em chão duro pode vir do coxim gorduroso do calcanhar. Veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
          ],
        },
        'Não sabe onde a sua dor se encaixa? O identificador de dor no pé passa pelos padrões comuns, embora não faça diagnóstico.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain, CITE.patelStressFracture],
    },
  ],
  faq: [
    {
      q: 'O que faz a fascite plantar entrar em crise?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Normalmente um aumento brusco da carga no calcanhar: mais caminhada ou corrida do que o normal, muitas horas em pé ou pés descalços em piso duro. A diretriz de 2023 lista um aumento recente de atividade com apoio do peso como típico. Em um estudo, ficar em pé na maior parte do dia de trabalho veio com 3,6\u00A0vezes a chance de desenvolver fascite plantar.',
    },
    {
      q: 'Quanto tempo dura uma crise de fascite plantar?',
      cites: [CITE.latt],
      a: 'Nenhum estudo mediu quanto tempo dura uma crise, então qualquer número fixo de dias é um palpite. Use as suas manhãs como guia: se a dor no primeiro passo alivia em alguns dias depois que você reduz a carga, você está no caminho certo. A fascite plantar em si muitas vezes leva meses, e cerca de 90% das pessoas melhoram com cuidado sem cirurgia.',
    },
    {
      q: 'O que fazer quando a fascite plantar ataca?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Reduza a atividade que provocou a crise, mantenha os alongamentos suaves da fáscia plantar e da panturrilha, use calçados com suporte dentro de casa e avalie pela dor da manhã seguinte. A diretriz de 2023 recomenda ajustar a carga e não indica repouso completo. Em um ensaio com 180\u00A0adultos, esse tipo de orientação mais uma calcanheira veio com melhora relevante em cerca de três meses.',
    },
    {
      q: 'Devo fazer repouso total durante uma crise de fascite plantar?',
      cites: [CITE.guideline, CITE.silbernagel],
      a: 'Nenhum estudo mostra que o repouso total seja necessário. A diretriz de 2023 recomenda ajustar a carga e não indica parar. Em um ensaio sobre dor no Aquiles, quem continuou ativo com dor de até cerca de 5 de 10, voltando ao normal até a manhã, se saiu tão bem em doze meses quanto quem pausou corrida e saltos por seis semanas. Se até caminhadas curtas doem muito ou fazem você mancar, procure um profissional de saúde.',
    },
    {
      q: 'Qual é a pior coisa que dá para fazer com fascite plantar?',
      cites: [CITE.guideline, CITE.morrisseyBestPractice],
      a: 'Nenhum estudo faz essa classificação, mas forçar com uma dor que piora a cada manhã é o erro mais claro, já que os especialistas de um guia de boas práticas de 2021 apontaram mudanças de carga como fator de risco para crises. Parar toda atividade e os exercícios é o erro oposto. Andar descalço em piso duro também é melhor evitar até os sintomas se acalmarem.',
    },
    {
      q: 'Devo continuar com os exercícios durante uma crise?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Sim, num nível mais leve. Mantenha os alongamentos da fáscia plantar e da panturrilha, que a diretriz de 2023 classifica com grau A, e desça um degrau no trabalho de força da panturrilha, por exemplo da elevação de calcanhar em pé para a sentada. O trabalho de força tem grau B, e a elevação de calcanhar com carga alta ajudou mais rápido que o alongamento em um ensaio com 48\u00A0pessoas. Pare se a dor chegar a 6 de 10.',
    },
    {
      q: 'Gelo é bom para uma crise de fascite plantar?',
      cites: [CITE.guideline, CITE.bleakleyIce],
      a: 'O gelo serve para dar conforto, mas não há evidência de que acalme uma crise. A diretriz de 2023 para dor no calcanhar não faz recomendação sobre gelo ou calor, e uma revisão de 22\u00A0ensaios em lesões recentes não encontrou uma melhor forma nem um melhor tempo de aplicação. Proteja a pele e não use se os seus pés têm pouca sensibilidade.',
    },
    {
      q: 'Um calçado novo pode provocar uma crise de fascite plantar?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Pode, embora nenhum estudo tenha testado calçados novos como gatilho. Pessoas com dor no calcanhar usavam calçados com saltos mais duros do que pessoas sem dor, e um guia de boas práticas aconselha calçados com suporte, com o calcanhar um pouco mais alto que os dedos. Trocar para um calçado reto, fino ou muito flexível é uma mudança que o seu calcanhar pode perceber.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma queda, um salto ou uma torção, ou você não consegue apoiar o peso no pé',
      'você sentiu um estalo ou uma dor aguda repentina embaixo do pé, ou apareceu um roxo ou inchaço novo',
      'a dor aumenta quanto mais você anda, ou apertar os lados do calcanhar dói (possível fratura por estresse)',
      'o calcanhar dói à noite ou em repouso, não só nos primeiros passos',
      'você tem dormência, formigamento ou queimação no pé',
      'o calcanhar está vermelho, quente ou inchado, ou você se sente mal ou está com febre',
      'você tem diabetes ou má circulação e o seu pé dói ou está com aparência diferente',
      'a dor continua piorando por mais de alguns dias mesmo reduzindo a carga, ou as crises continuam voltando',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Ele lê uma crise do mesmo jeito que esta página: pelo jeito que o seu calcanhar está de manhã.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar de manhã, e o plano se ajusta a ela: uma manhã ruim transforma a sessão em uma mais leve, e o trabalho de panturrilha volta a subir conforme as manhãs melhoram. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['walkingPf', 'heelPain', 'pfDuration'],
  crumb: 'Crise de fascite plantar',
  campaign: 'guide-plantar-fasciitis-flare-up-pt',
};
