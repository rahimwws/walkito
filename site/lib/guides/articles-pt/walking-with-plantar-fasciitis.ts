import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/walking-with-plantar-fasciitis.ts
 * (2026-10-18), written around «caminhar com fascite plantar», «fascite
 * plantar pode caminhar», «quantos passos por dia fascite plantar». Informal
 * «você». Figures, grades, doses and qualifiers are identical to the English
 * page after its fact-check. Same CITE keys and media ids. Exercise names
 * follow lib/guides/pt.ts. No Portuguese page exists for heel pain in runners
 * or best insoles, so those links were removed and the words kept.
 */

export const WALKING_PF_PT: Guide = {
  lang: 'pt',
  page: 'walkingPf',
  mainSource: CITE.guideline,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Caminhar com fascite plantar: quanto pode andar?',
  description:
    'Caminhar com fascite plantar: regra simples de dor durante e na manhã seguinte, a verdade sobre passos por dia, calçados, pisos e como voltar a andar mais.',
  h1: 'Quanto você pode caminhar com fascite plantar?',
  lede:
    'Normalmente dá para continuar caminhando com [fascite plantar](/pt/fascite-plantar/), desde que a dor fique moderada durante a caminhada e passe até a manhã seguinte. A diretriz de 2023 para dor no calcanhar recomenda orientação sobre como ajustar a carga em pé e não manda parar de andar, mas dá a essa orientação um **E**, ou seja, ela se apoia em teoria, não em ensaios clínicos (Koc e colegas, 2023). Nenhum estudo dá um número seguro de passos, então o teste da manhã seguinte é um guia melhor do que uma meta de passos.',
  intro: [
    'Esta página trata de quanto andar enquanto o calcanhar dói e de como voltar a andar mais aos poucos. Se a sua dúvida principal é por que o calcanhar dói depois de uma caminhada, veja [dor no calcanhar depois de andar](/pt/dor-no-calcanhar-depois-de-andar/). Se os seus pés doem de ficar parado no mesmo lugar, veja [dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/).',
  ],
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar dá grau **E** à orientação sobre como mudar a carga em pé no trabalho, no lazer e no dia a dia, além da orientação sobre calçados: ela se apoia em teoria, não em ensaios clínicos (Koc e colegas, 2023).',
    'Em um ensaio com 180\u00A0adultos com fasciopatia plantar, o grupo que recebeu só a orientação de continuar ativo, reduzir as atividades que pioram a dor e usar uma calcanheira melhorou de forma clinicamente relevante em cerca de três meses (Riel e colegas, 2023).',
    'Uma regra de monitoramento da dor aceita dor de até cerca de 5 de 10 durante a atividade, desde que passe até a manhã seguinte e não aumente de uma semana para outra. Ela foi testada em 38\u00A0pessoas com dor no tendão de Aquiles, não com fascite plantar (Silbernagel e colegas, 2007).',
    'Nenhum estudo dá um número de passos por dia para fascite plantar. Em 50\u00A0pessoas com dor no calcanhar e 25 sem, o nível de atividade não foi diferente, mas o grupo com dor no calcanhar ficava 3,4\u00A0horas a mais por dia em pé (Landorf e colegas, 2023).',
    'Um guia de boas práticas de 2021 para dor no calcanhar recomenda calçados com um pequeno desnível entre calcanhar e ponta e evitar andar descalço e usar calçados planos e sem suporte até os sintomas passarem (Morrissey e colegas, 2021).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Caminhar faz bem ou mal para a fascite plantar?',
      keyFact: 'Em um ensaio com 180\u00A0adultos, o grupo que recebeu a orientação de continuar ativo mas reduzir as atividades que pioram a dor, mais uma calcanheira, melhorou de forma clinicamente relevante em cerca de três meses (Riel e colegas, 2023).',
      paragraphs: [
        '**Caminhar não é o inimigo, mas muito de uma vez pode fazer o calcanhar piorar.** A diretriz de 2023 para dor no calcanhar não manda parar de andar. O resumo dela inclui orientação sobre formas de mudar a carga em pé no trabalho, no lazer e no dia a dia, e sobre calçados. Ela dá a essa orientação grau **E**, o que quer dizer que a teoria e a ciência básica a apoiam, mas nenhum ensaio clínico a testou (Koc e colegas, 2023).',
        'A diretriz também cita a dor no calcanhar que começou depois de um aumento recente da atividade em pé como uma característica típica da fascite plantar. Então a pergunta quase nunca é se você deve andar. É quanto, e com que rapidez aumentar.',
        'Um ensaio dinamarquês comparou uma orientação simples com tratamentos a mais. 180\u00A0adultos com fasciopatia plantar (outro nome para fascite plantar) foram divididos em três grupos. Um recebeu só orientação e uma calcanheira; os outros dois fizeram também treino de elevação de calcanhar, e um deles recebeu ainda uma infiltração de corticoide. A orientação era reduzir as atividades que causam as crises e depois voltar aos poucos ao nível de atividade de antes, guiando-se pelos sintomas. Os três grupos melhoraram de forma clinicamente relevante em cerca de três meses (Riel e colegas, 2023).',
        'Talvez não seja a caminhada em si que está ligada à dor no calcanhar. Em um estudo de 2023, 50\u00A0pessoas com dor no calcanhar e 25\u00A0pessoas parecidas sem dor relataram atividade física semelhante. A diferença estava no tempo em pé: o grupo com dor no calcanhar ficava 3,4\u00A0horas a mais por dia em pé (Landorf e colegas, 2023). Esse estudo mostra uma associação, não uma causa. Se o seu dia é quase todo em pé, [dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) trata desse lado.',
      ],
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.rielFixHeelProtocol, CITE.landorfFootwear],
    },
    {
      h2: 'Quanto andar é aceitável? Uma regra simples de dor',
      keyFact: 'Em um ensaio com 38\u00A0pessoas com dor no tendão de Aquiles, quem continuou ativo com a dor em cerca de 5 de 10, passando até a manhã seguinte, estava tão bem em doze meses quanto quem parou de correr e saltar por seis semanas (Silbernagel e colegas, 2007).',
      paragraphs: [
        '**Use a dor como medidor da dose, e confira duas vezes: durante a caminhada e na manhã seguinte.** Nenhum estudo testou uma regra de caminhada para fascite plantar. A regra testada mais próxima vem da reabilitação de tendões, então use como um guia emprestado, não como um limite comprovado para o calcanhar.',
        'Em um ensaio de 2007, 38\u00A0pessoas com dor no tendão de Aquiles foram divididas em dois grupos. Um grupo continuou correndo e saltando, usando um modelo de monitoramento da dor: era aceita dor de até cerca de 5 de 10 durante a atividade, desde que passasse até a manhã seguinte e não aumentasse de uma semana para outra. O outro grupo parou essas atividades nas primeiras seis semanas. Os dois grupos melhoraram, e continuar ativo não levou a resultados piores em doze meses (Silbernagel e colegas, 2007). Mais sobre esse ensaio em [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        'Para a dor no calcanhar, um guia de boas práticas de 2021, montado a partir de uma revisão de 51\u00A0ensaios, entrevistas com 14\u00A0especialistas e uma pesquisa com pacientes, diz que o monitoramento da dor foi fortemente recomendado e que as pessoas deveriam aprender a ler a resposta da dor à atividade (Morrissey e colegas, 2021). Ele não dá um número. A tabela abaixo aplica a regra testada à caminhada, com nota de 0 (sem dor) a 10 (a pior dor). A coluna da próxima caminhada é uma leitura prática dessa regra, não um protocolo testado.',
      ],
      table: {
        caption: 'Como ler o calcanhar depois de uma caminhada (escala de dor de 0 a 10)',
        head: ['O que você percebe', 'O que significa', 'Próxima caminhada'],
        rows: [
          ['De 0 a 2 durante, manhã seguinte normal', 'Bem dentro do limite', 'Mantenha, ou aumente um pouco'],
          ['De 3 a 5 durante, passou até a manhã seguinte', 'Carga aceitável', 'Repita a mesma caminhada'],
          ['Acima de 5 durante a caminhada', 'Demais para hoje', 'Encurte ou vá mais devagar'],
          ['Primeiros passos da manhã seguinte piores que o normal', 'Demais ontem', 'Reduza e depois volte a subir'],
          ['Pior a cada semana', 'A carga está subindo aos poucos', 'Dê um passo atrás e procure um profissional de saúde se continuar'],
        ],
      },
      after: [
        'O teste da manhã é o que mais importa. A dor nos primeiros passos é o sintoma clássico da fascite plantar, e é o sinal mais claro de como o pé aguentou o dia anterior. [Dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) explica esse padrão e os alongamentos para fazer antes de ficar em pé.',
        'Dor forte que faz você mancar, dor que aumenta a cada caminhada e não alivia com repouso, ou dor à noite estão fora dessa regra. Confira a lista no fim desta página.',
      ],
      sourceNote: 'Silbernagel 2007: 19\u00A0pessoas por grupo; em doze meses a pontuação VISA-A-S foi de 57 para 85 no grupo ativo e de 57 para 91 no grupo em repouso, sem diferença significativa no ritmo de melhora.',
      cites: [CITE.silbernagel, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Quantos passos por dia são aceitáveis com fascite plantar?',
      keyFact: 'Nenhum estudo dá um número de passos por dia para fascite plantar. Em uma análise conjunta de 47.471\u00A0adultos, a queda no risco de morte se estabilizava entre 6.000 e 8.000\u00A0passos por dia em pessoas com 60\u00A0anos ou mais (Paluch e colegas, 2022).',
      paragraphs: [
        '**Não existe um número de passos baseado em evidência para fascite plantar.** Não encontramos nenhum ensaio que tenha definido um número de passos ou uma distância de caminhada para pessoas com dor no calcanhar e medido o resultado. Qualquer página que dê um número fixo para dor no calcanhar está chutando.',
        'Os famosos 10.000\u00A0passos são uma meta de saúde geral, não um número da pesquisa sobre o pé, e mesmo ali a evidência é fraca. Uma análise de 2022 com 15\u00A0estudos e 47.471\u00A0adultos concluiu que mais passos por dia andavam junto com um risco de morte menor, mas o benefício se estabilizava em cerca de 6.000 a 8.000\u00A0passos por dia em adultos com 60\u00A0anos ou mais, e em 8.000 a 10.000 em adultos mais jovens (Paluch e colegas, 2022). Isso é sobre saúde a longo prazo, não sobre o que um calcanhar irritado aguenta nesta semana.',
        'Um número mais útil é o seu. Quase todo celular conta passos. Olhe uma semana normal antes de o calcanhar piorar e uma semana normal de agora. Isso dá um ponto de partida, e a regra de dor acima diz se você deve manter, aumentar ou reduzir.',
        'Dividir a caminhada pode ajudar mais do que o total. O guia de boas práticas de 2021 recomenda quebrar longos períodos de carga estática, como ficar em pé (Morrissey e colegas, 2021). Várias caminhadas curtas espalhadas pelo dia dão ao calcanhar uma carga menos contínua do que uma longa, embora nenhum estudo tenha comparado as duas coisas na fascite plantar.',
      ],
      cites: [CITE.paluchSteps, CITE.morrisseyBestPractice],
    },
    {
      h2: 'Como voltar a caminhar mais?',
      paragraphs: [
        'A orientação testada no ensaio dinamarquês era reduzir as atividades que causam as crises e depois voltar aos poucos ao nível de atividade de antes, guiando-se pelos sintomas (Riel e colegas, 2020). Ela não definia uma porcentagem por semana, e nenhum estudo testou uma para fascite plantar. Aqui vai um jeito de colocar essa orientação em prática:',
        {
          list: [
            'Encontre uma caminhada que passe na regra de dor: no máximo dor moderada durante, e uma manhã seguinte normal. Se nem uma caminhada curta passar, comece com menos.',
            'Repita essa caminhada por alguns dias. Um dia bom só não basta para avaliar.',
            'Aumente pouco, por exemplo mais cinco minutos, e mantenha o resto igual. Mude uma coisa de cada vez: distância, ritmo, subidas ou tipo de piso.',
            'Se a manhã seguinte for pior, volte para a última caminhada que passou e fique nela por mais tempo.',
          ],
        },
        'Os cinco minutos são uma sugestão prática, não um número testado. O que importa é que cada aumento seja pequeno o bastante para a manhã seguinte mostrar com clareza se deu certo.',
        'A recuperação da fascite plantar costuma ser lenta. Cerca de 90% das pessoas melhoram com cuidados sem cirurgia, como alongamento, trabalho de panturrilha e controle da carga (Latt e colegas, 2020), mas isso pode levar meses. Veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/). Se você também corre, os mesmos princípios valem para a quilometragem e as mudanças de carga na corrida.',
      ],
      cites: [CITE.rielFixHeelProtocol, CITE.latt],
    },
    {
      h2: 'Quais calçados ajudam a caminhar com fascite plantar?',
      keyFact: 'A diretriz de 2023 dá às palmilhas usadas sozinhas para alívio da dor a curto prazo um **B contra**, e um **C** quando combinadas com outros cuidados, incluindo amortecimento no calcanhar (Koc e colegas, 2023).',
      paragraphs: [
        '**Calçados confortáveis e amortecidos, com um pequeno desnível entre calcanhar e ponta, são a recomendação dos especialistas, mas nenhum ensaio testou um calçado específico para caminhar.** O guia de boas práticas de 2021 diz que o calçado deve ter suporte e ser confortável, ter um pequeno desnível entre retropé e antepé (o calcanhar fica um pouco mais alto que os dedos) e ser algo que você vai usar de verdade. Ele também recomenda evitar andar descalço e usar calçados planos e sem suporte até os sintomas passarem por completo (Morrissey e colegas, 2021).',
        'A diretriz de 2023 inclui a orientação sobre calçados na sua recomendação de educação de grau **E**. Sobre palmilhas ela é mais específica: não use como única abordagem (**B contra**), mas elas podem ajudar junto com outros cuidados (**C**). Isso inclui uma calcanheira de farmácia ou calçados que amortecem o calcanhar (Koc e colegas, 2023).',
        'A dureza do calçado pode importar. No estudo de 2023 com 50\u00A0pessoas com dor no calcanhar e 25 sem, o grupo com dor no calcanhar usava calçados com o calcanhar mais duro e relatava mais dificuldade para encontrar calçados adequados (Landorf e colegas, 2023). De novo, uma associação, não a prova de que calçados macios ajudam.',
        'Para ver o que os ensaios mostram sobre palmilhas, veja [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/). Pensando em calçados minimalistas? [Calçados barefoot](/pt/calcados-barefoot/) explica por que eles não são uma boa escolha enquanto o calcanhar está dolorido.',
      ],
      cites: [CITE.morrisseyBestPractice, CITE.guideline, CITE.landorfFootwear],
    },
    {
      h2: 'O tipo de piso onde você caminha importa?',
      paragraphs: [
        '**Provavelmente sim, mas a evidência é indireta.** A diretriz cita a atividade em pé ligada ao trabalho, principalmente em condições com pouca absorção de impacto, como um fator de risco para fascite plantar (Koc e colegas, 2023). Isso aponta para chão duro e calçado duro como uma carga para o calcanhar.',
        'A evidência direta é pouca. No estudo pareado de 2023, pessoas com e sem dor no calcanhar não eram diferentes quanto a ficar em pé em pisos duros (Landorf e colegas, 2023). Uma série de casos com 20\u00A0corredores relatou menos dor depois de cerca de um mês e meio de corrida descalça na grama, mas não tinha grupo de comparação (MacGabhann e colegas, 2022). Nenhum ensaio comparou tipos de piso para caminhar com fascite plantar.',
        'Opções práticas enquanto o calcanhar está dolorido:',
        {
          list: [
            'Escolha grama, uma trilha de parque ou uma pista em vez de concreto para as caminhadas mais longas, se for mais confortável.',
            'Fique de calçado em casa em piso frio ou de madeira, principalmente nos primeiros passos do dia.',
            'Vá com calma nas descidas longas e nas subidas íngremes até a caminhada no plano passar na regra de dor. Mais sobre descidas, mochilas e bastões em [dor nos pés depois de trilha](/pt/dor-nos-pes-trilha/).',
          ],
        },
        'Uma dor funda bem no centro do calcanhar, claramente pior em chão duro, pode vir do coxim gorduroso do calcanhar e não da fáscia plantar. Veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
      ],
      cites: [CITE.guideline, CITE.landorfFootwear, CITE.macgabhannGrass],
    },
    {
      h2: 'Quais exercícios deixam a caminhada mais fácil?',
      keyFact: 'A diretriz de 2023 dá grau A ao alongamento da fáscia plantar e da panturrilha e grau B ao treino de força (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios podem ajudar o calcanhar a aguentar mais carga, para que com o tempo a mesma caminhada passe mais fácil na regra de dor, embora nenhum estudo tenha testado isso para caminhada. A diretriz de 2023 dá ao alongamento da fáscia plantar e da panturrilha um **A**, o grau máximo, e ao treino de força um **B**.',
        'Uma panturrilha tensa faz parte do quadro. Em um estudo de caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem, a menor dobra do tornozelo foi o fator de risco mais forte, e ficar em pé a maior parte do dia de trabalho também aumentava as chances (Riddle e colegas, 2003). Veja [panturrilha tensa](/pt/panturrilha-tensa/).',
        'Em um ensaio com 48\u00A0pessoas, a elevação de calcanhar com carga aliviou a dor e melhorou a função no dia a dia mais rápido do que o alongamento, e em doze meses os dois grupos estavam mais ou menos empatados (Rathleff e colegas, 2015). Os cartões abaixo são as doses iniciais do Walkito, não uma prescrição. O conjunto completo está em [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento grau A, o grau máximo.' },
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
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento grau A, o grau máximo.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões, e antes de uma caminhada mais longa',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha tensa puxa o calcanhar o dia todo, então esse alongamento importa mesmo que você sinta mais para cima.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento grau A, o grau máximo.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força grau B. Esta etapa não foi testada sozinha.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'Trabalho na parte baixa da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o trabalho fica principalmente no sóleo, quase sem carga no calcanhar, o que combina com os dias em que a caminhada já está perto do seu limite.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou uma manhã seguinte pior',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força grau B. Esta etapa não foi testada sozinha.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto sobre os dedões e depois desça devagar. Os dois pés dividem a carga. Segure numa parede para se equilibrar.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou uma manhã seguinte pior',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto sobre os dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: { level: 'moderate', why: 'É a rotina de um ensaio com 48\u00A0pessoas, e a diretriz de 2023 dá ao treino de força grau B.' },
          dose: '4\u00A0séries de 10, cada perna, com carga extra',
          often: 'Dias de força, quando a dor da manhã já diminuiu',
          feel: 'Trabalho pesado na panturrilha',
          how: 'Fique em um pé só num degrau, com uma toalha enrolada embaixo dos dedos. Leve três segundos para subir, segure dois lá em cima e leve três segundos para descer. Neste nível o Walkito acrescenta carga, como uma mochila. É a toalha que faz o exercício trabalhar a fáscia plantar e não só a panturrilha. Mais sobre a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/).',
          stop: 'Dor no calcanhar acima de 6 de 10, ou uma manhã seguinte pior',
          image: 'Exercício: elevação de calcanhar com toalha',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos subindo, dois parado, três descendo',
          alt: 'Uma figura num degrau subindo na ponta dos pés com uma toalha enrolada, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Devo caminhar com fascite plantar?',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd],
      a: 'Normalmente sim, na quantidade que o seu calcanhar aguenta. A diretriz de 2023 para dor no calcanhar recomenda ajustar a carga em pé e não orienta parar, mas essa orientação se apoia em teoria (grau E). Em um ensaio com 180\u00A0adultos, a orientação de continuar ativo mas reduzir as atividades que pioram a dor, mais uma calcanheira, veio junto com uma melhora relevante em cerca de três meses.',
    },
    {
      q: 'Caminhar faz bem para a fascite plantar?',
      cites: [CITE.landorfFootwear, CITE.morrisseyBestPractice],
      a: 'Caminhar em quantidade moderada costuma ir bem, embora nenhum estudo tenha testado qual a melhor quantidade. Em um estudo, pessoas com dor no calcanhar eram tão ativas quanto pessoas sem dor, mas ficavam 3,4\u00A0horas a mais por dia em pé. Um guia de boas práticas recomenda aprender a monitorar a resposta da dor à atividade.',
    },
    {
      q: 'Quantos passos por dia são aceitáveis com fascite plantar?',
      cites: [CITE.paluchSteps],
      a: 'Nenhum estudo dá um número de passos para fascite plantar. Os 10.000 são uma meta de saúde geral, e nas pesquisas sobre mortalidade o benefício se estabilizava entre 6.000 e 8.000\u00A0passos por dia em adultos com 60\u00A0anos ou mais. Para um calcanhar irritado, parta da sua contagem de sempre e deixe a dor da manhã seguinte decidir se é para aumentar ou reduzir.',
    },
    {
      q: 'Quanta dor é aceitável ao caminhar com fascite plantar?',
      cites: [CITE.silbernagel],
      a: 'Uma regra testada aceita dor de até cerca de 5 de 10 durante a atividade, desde que passe até a manhã seguinte e não aumente de uma semana para outra. Ela vem de um ensaio com 38\u00A0pessoas com dor no tendão de Aquiles, não com fascite plantar, então use como guia. Dor acima disso, ou uma manhã pior, quer dizer que é hora de reduzir.',
    },
    {
      q: 'Caminhar pode piorar a fascite plantar?',
      cites: [CITE.guideline],
      a: 'Sim, se você fizer muito mais do que o seu calcanhar está acostumado. A diretriz de 2023 cita a dor no calcanhar depois de um aumento recente da atividade em pé como uma característica típica da fascite plantar. Uma caminhada longa de repente, um percurso novo com subidas ou um dia em pisos duros podem fazer a dor piorar. Aumentos menores e constantes são mais leves para o calcanhar.',
    },
    {
      q: 'Devo parar de caminhar por completo para a fascite plantar acalmar?',
      cites: [CITE.silbernagel, CITE.guideline],
      a: 'Nenhum estudo mostra que o repouso total seja necessário. A diretriz de 2023 recomenda ajustar a carga e não orienta parar. Em um ensaio sobre dor no tendão de Aquiles, quem continuou ativo dentro de um limite de dor estava tão bem em doze meses quanto quem parou de correr e saltar por seis semanas. Se até caminhadas curtas doem muito ou fazem você mancar, procure um profissional de saúde.',
    },
    {
      q: 'Qual o melhor calçado para caminhar com fascite plantar?',
      cites: [CITE.morrisseyBestPractice, CITE.guideline],
      a: 'Calçados confortáveis e amortecidos, com o calcanhar um pouco mais alto que os dedos, são a recomendação dos especialistas. Um guia de boas práticas de 2021 recomenda evitar andar descalço e usar calçados planos e sem suporte até os sintomas passarem. A diretriz de 2023 diz que palmilhas ou calcanheiras podem ajudar junto com outros cuidados, mas não sozinhas.',
    },
    {
      q: 'É melhor caminhar na grama ou no concreto com fascite plantar?',
      cites: [CITE.guideline, CITE.macgabhannGrass],
      a: 'Um piso mais macio pode ser mais fácil, mas nenhum ensaio comparou tipos de piso para caminhar com fascite plantar. A diretriz de 2023 liga o trabalho em pé em superfícies que absorvem pouco impacto ao risco de fascite plantar. Uma pequena série de casos com corredores na grama relatou menos dor, mas não tinha grupo de comparação. Guie-se por como o calcanhar está na manhã seguinte.',
    },
    {
      q: 'Posso andar descalço em casa com fascite plantar?',
      cites: [CITE.morrisseyBestPractice],
      a: 'É melhor evitar enquanto o calcanhar está dolorido, principalmente em piso frio ou de madeira logo cedo. Um guia de boas práticas de 2021 para dor no calcanhar desaconselha andar descalço e usar calçados planos e sem suporte até os sintomas passarem por completo. A orientação de costume é usar um calçado com suporte ou um chinelo firme nos primeiros passos do dia.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor no calcanhar começou depois de uma queda, um salto ou uma torção, ou você não consegue apoiar o pé',
      'a dor aumenta a cada caminhada e não alivia com repouso, ou apertar as laterais do calcanhar dói (possível fratura por estresse)',
      'o calcanhar dói à noite ou em repouso, não só quando você anda',
      'você sente dormência, formigamento ou queimação no pé',
      'o calcanhar está vermelho, quente ou inchado, ou você se sente mal ou tem febre',
      'os dois calcanhares doem junto com outras articulações, ou você tem rigidez pela manhã em outros lugares',
      'você tem diabetes ou má circulação e o pé dói ou está com aparência diferente',
      'a dor piora semana após semana mesmo depois de reduzir',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Ele não define uma meta de passos nem planeja suas caminhadas, mas lê o calcanhar do mesmo jeito que esta página: pelo jeito que o pé está na manhã seguinte.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar pela manhã, e o plano se ajusta: depois de um dia longo em pé, a próxima sessão de força fica mais leve. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPainAfterWalking', 'heelPain', 'standing'],
  crumb: 'Caminhar com fascite plantar',
  campaign: 'guide-walking-with-plantar-fasciitis-pt',
};
