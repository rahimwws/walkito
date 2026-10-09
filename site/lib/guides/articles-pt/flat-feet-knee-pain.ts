import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const FLAT_FEET_KNEE_PAIN_PT: Guide = {
  lang: 'pt',
  page: 'flatFeetKneePain',
  mainSource: CITE.grossFlatFeetKnee,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Pé chato e dor no joelho: existe relação?',
  description:
    'Pé chato e dor no joelho: o que os estudos mostram sobre a relação, o que o profissional avalia, se palmilhas ajudam e por que quadril e joelho vêm antes.',
  h1: 'Pé chato e dor no joelho: existe relação e o que ajuda?',
  lede:
    'O pé chato tem relação com dor no joelho, mas a relação é pequena e não foi mostrado que ele seja a causa. Em 1.903\u00A0adultos mais velhos, os pés mais chatos tinham chances 1,3\u00A0vez maiores de dor frequente no joelho. Para a dor na frente do joelho, a melhor evidência é para o fortalecimento de quadril e joelho, com palmilhas como um complemento de curto prazo.',
  intro: [
    'O seu joelho dói na escada ou depois de uma corrida, e alguém disse que é porque você tem pé chato. É uma dúvida justa. O pé e o joelho se movem juntos, sim. Mas a maioria das pessoas com pé chato não tem dor nenhuma no joelho, e a dor no joelho tem muitas causas que não têm nada a ver com o arco.',
  ],
  takeaways: [
    'Em um estudo de 2011 com 1.903\u00A0adultos mais velhos, os pés mais chatos tinham chances 1,3\u00A0vez maiores de dor no joelho na maioria dos dias e 1,4\u00A0vez maiores de dano na cartilagem do lado de dentro do joelho (Gross e colegas). O estudo mostra uma relação, não uma causa.',
    'Em 97.279\u00A0jovens recrutas militares, a dor na frente do joelho foi de 7% com pé chato moderado ou grave e de 4% com pé chato leve ou sem pé chato (Kosashvili e colegas, 2008).',
    'Uma revisão de 2014 com 21\u00A0estudos prospectivos encontrou só uma evidência muito limitada, com efeitos pequenos, de que um pé que vira para dentro aumenta o risco de dor ao redor da patela (Neal e colegas).',
    'Em um ensaio com 179\u00A0adultos com dor na patela, palmilhas com formato se saíram melhor que palmilhas planas no curto prazo, mas não foram melhores que a fisioterapia e não acrescentaram nada a ela (Collins e colegas, 2008).',
    'A diretriz americana de fisioterapia de 2019 dá ao exercício combinado de quadril e joelho o seu grau mais alto, A, para dor ao redor da patela. Palmilhas só são recomendadas no curto prazo, para pessoas cujo pé vira para dentro mais que o normal, e junto com exercício.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Pé chato pode causar dor no joelho?',
      keyFact: 'Em 1.903\u00A0adultos mais velhos, os pés mais chatos tinham chances 1,3\u00A0vez maiores de dor frequente no joelho em comparação com todos os outros pés (Gross e colegas, 2011).',
      figure: { id: 'arches', caption: 'Os mesmos ossos do pé com pé chato, arco típico e arco alto, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco apoiado no chão, um arco típico com um pequeno espaço embaixo e um arco alto com um grande espaço sob o meio do pé.' },
      paragraphs: [
        'Vários estudos grandes mostram relação entre pé chato e dor no joelho, mas **nenhum deles prova que o arco causa a dor.** O tamanho da relação é pequeno, e ela aparece principalmente nos pés mais chatos.',
        'O estudo mais conhecido vem dos Framingham Studies, nos Estados Unidos. Gross e colegas mediram a pegada de 1.903\u00A0adultos mais velhos (idade média de 65\u00A0anos) e perguntaram sobre dor no joelho. Os resultados de 2011, para os pés mais chatos em comparação com todos os outros pés:',
        {
          list: [
            '**Dor no joelho:** chances 1,3\u00A0vez maiores de dor no joelho na maioria dos dias.',
            '**Cartilagem:** chances 1,4\u00A0vez maiores de dano na cartilagem do lado de dentro da articulação do joelho na ressonância magnética. A cartilagem é a camada lisa que cobre as pontas dos ossos.',
            '**Resto do joelho:** nenhuma relação com dano em nenhuma outra parte do joelho.',
          ],
        },
        'Um segundo estudo olhou para o começo da vida adulta. Kosashvili e colegas analisaram 97.279\u00A0jovens recrutas militares em 2008. A dor na frente do joelho apareceu em 7% dos recrutas com pé chato moderado ou grave e em 4% dos que tinham pé chato leve ou arco normal. O pé chato leve, que era 74% do grupo com pé chato, não trouxe risco a mais.',
        'Os dois estudos mediram as pessoas uma única vez, então não conseguem dizer se o pé veio primeiro. Os autores de Framingham também observaram que a pegada pode não distinguir um pé chato de um pé largo e carnudo, e que o peso corporal, sozinho, já afeta o joelho.',
      ],
      sourceNote:
        'Gross 2011: estudo transversal, razão de chances para dor no joelho de 1,3 (IC 95% 1,1 a 1,6), dano na cartilagem tibiofemoral medial de 1,4 (IC 95% 1,1 a 1,8), com ajuste para idade, sexo e índice de massa corporal. Kosashvili 2008: análise retrospectiva, pé chato classificado por um ortopedista, dor na frente do joelho atribuída à articulação patelofemoral.',
      cites: [CITE.grossFlatFeetKnee, CITE.kosashvili],
    },
    {
      h2: 'Em que parte do joelho aparece a dor ligada ao pé chato?',
      paragraphs: [
        'A dor no joelho ligada ao pé chato costuma ser descrita em um de dois lugares. São problemas diferentes, e os cuidados com cada um também são diferentes.',
        {
          list: [
            '**Ao redor ou atrás da patela.** Ela se chama dor patelofemoral. Ela costuma começar devagar e piora ao agachar, subir e descer escadas, correr, saltar ou ficar muito tempo sentado com o joelho dobrado. É comum em adolescentes e adultos ativos. É o problema de joelho com mais pesquisa sobre a postura do pé, e a maior parte desta página fala dele.',
            '**No lado de dentro do joelho, em um adulto mais velho.** Ela tem relação mais frequente com artrose, as alterações de desgaste de uma articulação. O estudo de Framingham viu que o dano na cartilagem do lado de dentro do joelho era mais comum nos pés mais chatos, o que combina com esse quadro. Mas uma relação num único momento é tudo o que o estudo mostra.',
          ],
        },
        'Um joelho que incha depois de uma torção, trava ou falseia é outra história. Isso aponta para o menisco (o amortecedor de cartilagem dentro do joelho) ou para um ligamento, e precisa de um profissional de saúde.',
      ],
      cites: [CITE.willyPfpGuideline, CITE.grossFlatFeetKnee],
    },
    {
      h2: 'Como um pé chato poderia afetar o joelho?',
      paragraphs: [
        'A explicação mais comum é uma cadeia: quando o pé vira para dentro, o osso da canela gira para dentro junto, e o joelho vai para dentro. Esse virar para dentro se chama pronação, e um pouco dela faz parte normal de cada passo. A ideia é que pronação demais muda como a patela desliza no seu sulco.',
        'O pé e a canela de fato giram juntos. Se isso explica a dor no joelho já é menos claro, e a evidência prospectiva é pouca. Duas revisões estudaram isso:',
        {
          list: [
            '**Barton e colegas, 2009:** reuniu 24\u00A0estudos sobre como pessoas com dor na patela caminham e correm. Ela encontrou algumas diferenças no osso do calcanhar e mais movimento do quadril para dentro em corredores. Mas ela não encontrou nenhum estudo prospectivo com dados utilizáveis. Os estudos que ela pôde analisar compararam pessoas que já tinham dor com pessoas que não tinham, o que não separa causa de efeito.',
            '**Neal e colegas, 2014:** juntou 21\u00A0estudos prospectivos com 6.228\u00A0pessoas, estudos que acompanham as pessoas ao longo do tempo para ver quem se machuca. Um pé que vira para dentro foi um fator de risco claro para canelite. Para a dor na patela, a evidência foi muito limitada e os efeitos foram pequenos. Os revisores concluíram que a postura do pé é uma peça de uma avaliação mais ampla, não a resposta sozinha.',
          ],
        },
        'O quadril fica no alto da mesma cadeia. Músculos fracos na parte de fora do quadril deixam a coxa girar para dentro, e isso pode puxar o joelho para dentro de cima para baixo. Esse é um dos motivos pelos quais os exercícios para dor na patela começam pelo quadril, não pelo pé.',
      ],
      sourceNote:
        'Neal 2014: tamanhos de efeito entre postura do pé pronada e dor patelofemoral de 0,28 a 0,33. Barton 2009: nenhum estudo prospectivo com dados suficientes para calcular tamanhos de efeito; os achados vêm de estudos caso-controle.',
      cites: [CITE.bartonPfpGait, CITE.nealFootPosture],
    },
    {
      h2: 'O que um profissional deve avaliar na dor no joelho com pé chato?',
      paragraphs: [
        'Um profissional de saúde normalmente olha primeiro o joelho e depois o pé. O objetivo é descobrir o que está dolorido no joelho e depois se o pé, o quadril ou a carga de treino estão somando a isso. A diretriz americana de fisioterapia de 2019 para dor na patela lista testes simples de movimento, como agachar, descer de um degrau e agachar em uma perna só, para ver o que provoca a dor e como a perna se move.',
        'O que um fisioterapeuta, um médico do esporte ou um podólogo provavelmente vai verificar:',
      ],
      bullets: [
        'Onde exatamente dói e o que provoca a dor (escadas, agachamentos, ficar sentado, correr).',
        'Se o joelho inchou, travou, falseou ou se machucou numa torção ou numa queda.',
        'Como o joelho, o quadril e o pé se movem ao agachar ou ao descer um degrau.',
        'A força dos músculos da parte de fora e de trás do quadril, e da coxa.',
        'Se o seu pé chato é flexível (o arco volta quando você se senta ou fica na ponta dos pés) ou rígido. Veja [pé chato](/pt/pe-chato/) para o teste rápido.',
        'Em adultos mais velhos, sinais de artrose no joelho, que podem pedir um raio-X.',
      ],
      cites: [CITE.willyPfpGuideline],
    },
    {
      h2: 'Palmilhas ajudam na dor no joelho por pé chato?',
      keyFact: 'Em um ensaio com 179\u00A0adultos com dor na patela, palmilhas com formato se saíram melhor que palmilhas planas no curto prazo, mas não foram melhores que a fisioterapia (Collins e colegas, 2008).',
      paragraphs: [
        'Palmilhas com formato podem aliviar a dor na frente do joelho no curto prazo, mas acrescentam pouco quando você já está fazendo um bom exercício.',
        'O teste mais claro é um ensaio de 2008 publicado no BMJ. Collins e colegas dividiram 179\u00A0adultos de 18 a 40\u00A0anos com dor ao redor da patela em quatro grupos:',
        {
          list: [
            'Palmilhas prontas com formato.',
            'Palmilhas planas.',
            'Fisioterapia: exercícios para os músculos da coxa, bandagem, terapia manual e orientações.',
            'Palmilhas mais fisioterapia.',
          ],
        },
        'As palmilhas com formato se saíram melhor que as planas depois de cerca de um mês e meio. Não foram melhores que a fisioterapia, e acrescentá-las à fisioterapia não melhorou os resultados. Em um ano, os quatro grupos tinham melhorado de forma relevante.',
        'Um ensaio menor, de 2018, de Mølgaard e colegas, escolheu 40\u00A0pessoas com dor na patela cujo calcanhar inclinava para dentro mais que o normal. Somar exercícios para o pé e palmilhas sob medida aos exercícios para o joelho trouxe 8,9\u00A0pontos a mais de alívio da dor numa escala de joelho de 100\u00A0pontos aos quatro meses. Aos doze meses, a diferença entre os grupos já não era estatisticamente clara. O ensaio não consegue dizer se a diferença veio das palmilhas, dos exercícios para o pé ou das sessões a mais.',
        'A diretriz de 2019 resume assim: **palmilhas prontas podem ser usadas por pessoas cujo pé vira para dentro mais que o normal, só para alívio da dor no curto prazo e sempre junto com exercício.** Ela encontrou evidência insuficiente para preferir palmilhas sob medida às prontas. Para o debate mais amplo sobre palmilhas, veja [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/).',
      ],
      sourceNote:
        'Collins 2008: ensaio randomizado simples-cego, desfechos em cerca de um mês e meio, três meses e um ano; palmilhas com formato vs. palmilhas planas na melhora global, número necessário para beneficiar de 4. Um dos autores tinha recebido financiamento de um fabricante de palmilhas. Mølgaard 2018: subescala de dor do KOOS, 8,9\u00A0pontos (IC 95% 0,4 a 17,4). Willy 2019: grau A.',
      cites: [CITE.collinsPfpOrthoses, CITE.molgaardPfp, CITE.willyPfpGuideline],
    },
    {
      h2: 'Quais exercícios ajudam na dor no joelho quando você tem pé chato?',
      keyFact: 'A diretriz americana de fisioterapia de 2019 dá ao exercício combinado de quadril e joelho o grau A, o mais alto, para dor ao redor da patela (Willy e colegas).',
      paragraphs: [
        'Para a dor ao redor da patela, os exercícios com a melhor evidência trabalham o quadril e a coxa, não o arco. A diretriz americana de fisioterapia de 2019 dá ao exercício combinado de quadril e joelho o seu grau mais alto, A. Um consenso internacional de 2016 diz o mesmo e acrescenta que exercício de quadril mais joelho deve ser escolhido no lugar de exercício só para o joelho.',
        'O exercício de quadril trabalha os músculos da parte de fora e de trás do quadril. O exercício de joelho fortalece a frente da coxa, com agachamentos ou esticando o joelho contra resistência. O pé chato não muda essa orientação, e nenhum ensaio testou exercícios só para o pé na dor no joelho de pessoas com pé chato.',
        'Se o seu arco também dói, o pé curto e o treino de equilíbrio são complementos razoáveis, embora a evidência de que ajudam o joelho seja inicial. Para a rotina completa para os pés, veja [exercícios para pé chato](/pt/exercicios-pe-chato/).',
        'O Walkito é um app para os pés e a parte de baixo das pernas, sem meta nem exercícios para o joelho. O plano dele inclui um exercício de abdução de quadril (levantar a perna para o lado), começando com 3\u00A0séries de 10 de cada lado. Um fisioterapeuta pode montar a parte do joelho.',
        'Pare por hoje se a dor no joelho chegar a 6/10, ou se o joelho estiver claramente pior na manhã seguinte. Um pouco de dor enquanto você coloca carga no joelho é comum nesses programas.',
      ],
      exercises: [
        {
          name: 'Abdução de quadril, em pé, com faixa',
          evidence: { level: 'moderate', why: 'O exercício voltado para o quadril faz parte do programa combinado de quadril e joelho que a diretriz de 2019 classifica como grau A. Este exercício exato não foi testado sozinho.' },
          dose: 'O Walkito começa com 3\u00A0séries de 10, cada lado',
          often: 'Na maioria das sessões',
          feel: 'Trabalho na parte de fora do quadril de apoio e do quadril que se move',
          stop: 'A dor no joelho ou no quadril chegar a 6/10',
          how: 'Passe uma faixa elástica em volta dos tornozelos e segure numa parede. Fique em pé, bem reto, em uma perna e levante a outra para o lado, com os dedos apontando para a frente. Não incline o corpo para o lado oposto. Desça devagar. Veja [abdução de quadril](/pt/exercicios/abducao-quadril/) para os detalhes.',
          media: 'hip_abduction',
          caption: 'Abdução de quadril: levante a perna para o lado, com o corpo reto',
          alt: 'Uma pessoa segurando numa parede e levantando uma perna para o lado contra uma faixa elástica',
        },
        {
          name: 'Agachamento parcial ou sentar e levantar',
          evidence: { level: 'moderate', why: 'O fortalecimento voltado para o joelho é a outra metade da combinação de grau A na diretriz de 2019. Não faz parte do Walkito.' },
          dose: 'O seu fisioterapeuta define a dose; 2 a 3\u00A0séries de 10 é um começo comum',
          often: 'Na maioria dos dias, se o seu profissional de saúde concordar',
          feel: 'Trabalho na frente da coxa',
          stop: 'A dor no joelho chegar a 6/10',
          how: 'Fique em pé na frente de uma cadeira, com os pés na largura do quadril. Dobre o quadril e os joelhos como se fosse sentar, mantendo os joelhos alinhados com o segundo dedo do pé. Pare numa profundidade que pareça tranquila e levante. Encostar de leve na cadeira não tem problema.',
        },
        {
          name: 'Pé curto',
          evidence: { level: 'early', why: 'Mudou o formato do arco em pé chato flexível como parte de um programa combinado. Não foi testado sozinho para dor no joelho.' },
          dose: 'O Walkito começa com 3\u00A0séries de 8, segurando 5\u00A0segundos',
          often: 'Na maioria das sessões',
          feel: 'Esforço embaixo do arco, dedos relaxados',
          stop: 'A dor no pé ou no joelho chegar a 6/10',
          how: 'Sente-se com o pé apoiado no chão. Encurte o pé puxando a parte da frente em direção ao calcanhar, para que o arco suba. Não dobre os dedos. Segure e solte. Veja [pé curto](/pt/exercicios/pe-curto/).',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar',
          alt: 'Uma pessoa sentada subindo o arco de um pé sem dobrar os dedos',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Treina o controle do pé, do joelho e do quadril ao mesmo tempo. Nenhum ensaio testou só o equilíbrio para dor no joelho com pé chato.' },
          dose: 'O Walkito começa com 3\u00A0vezes de 20\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no quadril',
          stop: 'A dor no joelho chegar a 6/10',
          how: 'Fique em uma perna perto de uma parede, com o joelho levemente dobrado. Mantenha o joelho apontando por cima dos dedos, sem deixá-lo ir para dentro. Olhe para um ponto fixo na parede.',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: joelho por cima dos dedos, pequenas correções',
          alt: 'Uma pessoa se equilibrando em uma perna ao lado de uma parede',
        },
      ],
      sourceNote:
        'Consenso de Crossley 2016: exercício de quadril e joelho recomendado para dor e função no curto, médio e longo prazo. Evidência do pé curto: Brijwasi 2023 (52\u00A0pessoas, programa combinado mudou o formato do arco); revisão de Cheng 2024 (nenhuma mudança clara na postura geral do pé só com treino de pé curto).',
      cites: [CITE.willyPfpGuideline, CITE.crossleyPfpConsensus, CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Dá para continuar correndo com pé chato e dor no joelho?',
      paragraphs: [
        'Muitos corredores com pé chato e dor na patela continuam correndo com menos carga enquanto ganham força. Uma abordagem comum é voltar aos poucos, aumentando a frequência, a intensidade e a duração das corridas um passo de cada vez.',
        'A diretriz também lista o retreinamento da corrida, com evidência mais fraca (grau C): um profissional orienta você a dar passos mais curtos e mais rápidos ou a não deixar a coxa ir para dentro. Tênis de estabilidade e palmilhas são sugeridos com frequência para corredores com pé chato. Quanto às palmilhas, os ensaios acima mostram, no máximo, alívio de curto prazo, então experimente se elas parecerem confortáveis.',
        'Se correr provocar dor aguda, fizer você mancar ou causar inchaço, pare e faça uma avaliação. Dor ao longo da parte de dentro da canela é outro problema; veja [exercícios para canelite](/pt/canelite-exercicios/).',
      ],
      cites: [CITE.willyPfpGuideline],
    },
  ],
  faq: [
    {
      q: 'Pé chato pode causar dor no joelho?',
      cites: [CITE.grossFlatFeetKnee, CITE.nealFootPosture],
      a: 'O pé chato tem relação com dor no joelho, mas a relação é pequena e não foi mostrado que ele seja a causa. Em 1.903\u00A0adultos mais velhos, os pés mais chatos tinham chances 1,3\u00A0vez maiores de dor frequente no joelho (Gross 2011). Uma revisão de 2014 encontrou só uma evidência muito limitada de que um pé que vira para dentro aumenta o risco de dor na patela. A maioria das pessoas com pé chato não tem dor no joelho.',
    },
    {
      q: 'Pé chato pode causar dor na parte de dentro do joelho?',
      cites: [CITE.grossFlatFeetKnee],
      a: 'Existe uma relação em adultos mais velhos. No estudo de Framingham de 2011, os pés mais chatos tinham chances 1,4\u00A0vez maiores de dano na cartilagem do lado de dentro do joelho, e nenhuma relação com dano em outras partes do joelho. Esse padrão combina com artrose no joelho. O estudo mediu as pessoas uma única vez, então não consegue mostrar que os pés causaram isso. Um profissional de saúde pode verificar se a artrose é a origem.',
    },
    {
      q: 'Palmilhas ajudam na dor no joelho por pé chato?',
      cites: [CITE.collinsPfpOrthoses, CITE.willyPfpGuideline],
      a: 'Para a dor ao redor da patela, palmilhas com formato podem ajudar no curto prazo. Em um ensaio com 179\u00A0adultos, elas se saíram melhor que palmilhas planas depois de cerca de um mês e meio, mas não foram melhores que a fisioterapia e não acrescentaram nada a ela (Collins 2008). A diretriz de 2019 apoia palmilhas prontas só no curto prazo, para pés que viram para dentro mais que o normal, junto com exercício.',
    },
    {
      q: 'Levantar o arco vai acabar com a minha dor no joelho?',
      cites: [CITE.cheng, CITE.willyPfpGuideline],
      a: 'Provavelmente não, sozinho. Uma revisão de 2024 viu que o treino de pé curto sozinho não trouxe mudança clara na postura geral do pé, e nenhum ensaio mostrou que mudar o arco alivia a dor no joelho. O exercício com a melhor evidência para dor na patela é o fortalecimento combinado de quadril e joelho, com grau A na diretriz de 2019. O trabalho com o pé pode ser um complemento se o seu arco também dói.',
    },
    {
      q: 'Devo usar joelheira para dor no joelho com pé chato?',
      cites: [CITE.willyPfpGuideline],
      a: 'Para a dor ao redor da patela, a diretriz americana de fisioterapia de 2019 recomenda não usar joelheiras, mangas de compressão e faixas (grau B), porque uma revisão Cochrane não encontrou efeito relevante na dor quando somadas ao exercício. A bandagem de curto prazo aplicada por um profissional é outra coisa e pode aliviar a dor no curto prazo junto com o exercício.',
    },
    {
      q: 'Criança com pé chato tem dor no joelho?',
      cites: [CITE.kosashvili],
      a: 'A maioria dos jovens com pé chato não tem dor no joelho. Os melhores dados vêm de adolescentes mais velhos: em 97.279\u00A0jovens recrutas militares, a dor na frente do joelho foi de 7% com pé chato moderado ou grave e de 4% com pé chato leve ou sem pé chato (Kosashvili 2008). Uma criança com dor no joelho e que está mancando deve ver um médico, porque problemas no quadril podem aparecer como dor no joelho. Veja [pé chato infantil](/pt/pe-chato-infantil/).',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'o seu joelho trava, prende de um jeito que você não consegue esticá-lo, ou falseia',
      'o joelho inchou rápido, em poucas horas, depois de uma torção, uma queda ou um estalo',
      'a articulação está quente, vermelha ou muito inchada, ou você tem febre ou se sente mal',
      'você não consegue apoiar o peso na perna ou caminhar mais que alguns passos',
      'a panturrilha está inchada, quente e sensível ao toque, o que pode ser um coágulo',
      'há dormência, formigamento ou fraqueza na perna ou no pé',
      'a dor acorda você à noite ou vem com uma perda de peso que você não consegue explicar',
      'uma criança tem dor no joelho e está mancando, ou um pé chato está rígido e dolorido',
      'o joelho não melhora depois de cerca de um mês com menos carga e exercício',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito foi feito para dor no calcanhar, no pé e na parte de baixo das pernas em adultos, não para dor no joelho. Se você tem pé chato com dor no arco ou no calcanhar, além do joelho dolorido, ele pode cuidar da parte do pé: pé curto, equilíbrio e abdução de quadril, organizados uma semana de cada vez. Os exercícios para o joelho devem vir de um fisioterapeuta.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias no começo, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver o que está mudando. O Walkito é um programa de exercícios. Ele não faz diagnóstico, não ajuda diretamente na dor no joelho e não substitui um profissional de saúde. Para dor nas costas com pé chato, veja [pé chato e dor nas costas](/pt/pe-chato-dor-nas-costas/).',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Pé chato e dor no joelho',
  campaign: 'guide-flat-feet-knee-pt',
};
