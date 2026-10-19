import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/flat-feet-test.ts (2026-10-18),
 * written around «teste pé chato», «como saber se tenho pé chato».
 * Informal «você». Figures, grades, doses, hedges and CITE keys are identical
 * to the English page after its fact-check. Same media ids. Exercise names
 * follow pt.ts (exercicios-pe-chato). "Clinician" is «profissional de saúde».
 */

export const FLAT_FEET_TEST_PT: Guide = {
  lang: 'pt',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Teste de pé chato em casa: 4 verificações simples',
  description:
    'Como saber se você tem pé chato em casa: pegada molhada, sentado e em pé, ponta dos pés e dedão, elevação em um pé, e o que cada um mostra ou não mostra.',
  h1: 'Teste de pé chato em casa: 4 verificações simples, e o que elas mostram e não mostram',
  lede:
    'Dá para verificar em casa se você tem pé chato em uns cinco minutos: olhe a pegada do pé molhado, compare o arco sentado e em pé, fique na ponta dos pés ou levante o dedão para ver se o arco volta, e tente uma elevação de calcanhar em um pé só. A pegada é a menos precisa das quatro: em 95\u00A0idosos comparados com radiografias, a pontuação da pegada correspondeu só moderadamente à altura real do arco (Menz e Munteanu, 2005). As verificações que mais importam são se o arco volta e se um lado se comporta diferente do outro.',
  intro: [
    'Nenhuma dessas verificações é um diagnóstico, e um arco baixo sozinho normalmente não é um problema. Esta página mostra como fazer cada verificação, o quanto a pesquisa diz que dá para confiar nela, o que um profissional de saúde mede em vez disso e os resultados que indicam que é hora de mostrar o pé para alguém. Para entender o que é pé chato e quando ele importa, comece por [pé chato](/pt/pe-chato/).',
  ],
  takeaways: [
    'A pegada molhada é uma indicação aproximada. Em 95\u00A0pessoas de 62 a 94\u00A0anos, o índice do arco da pegada correspondeu só moderadamente à altura do arco na radiografia, enquanto uma medida com régua do osso do arco correspondeu bem (Menz e Munteanu, 2005).',
    'A gordura embaixo da sola pode preencher a pegada: em 24\u00A0adultos com sobrepeso ou obesidade, o índice do arco da pegada aumentou junto com o percentual de gordura corporal (Wearing e colegas, 2004).',
    'Se o arco volta quando você se senta, fica na ponta dos pés ou levanta o dedão, o pé chato é flexível, o tipo comum que os estudos com exercícios avaliaram (Brijwasi e Borkar, 2023).',
    'Dificuldade para subir na ponta de um pé só, dor atrás do tornozelo por dentro e um arco que vai ficando mais baixo de um lado são sinais de disfunção do tendão tibial posterior. Em 582\u00A0mulheres com mais de 40\u00A0anos, 3,3% tinham sintomas em fase inicial (estágio I ou II) e nenhuma tinha diagnóstico (Kohls-Gatzoulis e colegas, 2009).',
    'Até as medidas dos profissionais variam: quando dois avaliadores sem experiência mediram a queda do navicular, os resultados deles concordaram pouco (Picciano e colegas, 1993). Em um estudo posterior com 86\u00A0adultos jovens, a mesma medida foi altamente repetível (Zuil-Escobar e colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Como saber em casa se você tem pé chato?',
      paragraphs: [
        '**Faça quatro verificações, nesta ordem, descalço em um piso firme.** As duas primeiras mostram o quanto o seu arco é baixo. As duas últimas mostram se ele é flexível e se o tendão que o sustenta está fazendo o seu trabalho. Você vai precisar de uma toalha, um pouco de água, uma folha de papel pardo ou de cartolina e uma parede para se apoiar.',
        'Faça sempre os dois pés. Uma diferença entre o pé esquerdo e o direito diz mais do que cada pé sozinho, porque os pés da maioria das pessoas são mais ou menos parecidos, e um pé chato de um lado só é um dos sinais de alerta no fim desta página.',
      ],
      table: {
        caption: 'As quatro verificações em casa, em resumo',
        head: ['Verificação', 'O que você observa', 'O que pode mostrar', 'O que não pode mostrar'],
        rows: [
          ['Pegada molhada', 'Quanto da sola marca o papel', 'Um arco baixo, de forma aproximada', 'A altura exata do arco, ou a dor'],
          ['Sentado e em pé', 'O arco com e sem o peso do corpo', 'O quanto o arco abaixa', 'Por que ele abaixa'],
          ['Ponta dos pés e dedão', 'Se o arco volta', 'Flexível ou rígido', 'A causa de um pé rígido'],
          ['Elevação de calcanhar em um pé', 'Subir na ponta de um pé só', 'Fraqueza de um lado', 'Qual tendão está envolvido'],
        ],
      },
      after: [
        'Anote o que você vê, ou tire uma foto de cada pé pelo lado de dentro e por trás. Repetir as mesmas verificações daqui a alguns meses mostra se alguma coisa mudou, e isso importa mais do que um resultado isolado.',
      ],
    },
    {
      h2: 'Como fazer o teste da pegada molhada, e qual a precisão dele?',
      keyFact: 'Em 95\u00A0pessoas de 62 a 94\u00A0anos, o índice do arco da pegada correspondeu só moderadamente à altura do arco na radiografia (r = 0,52), contra r = 0,79 de uma medida da altura do osso do arco (Menz e Munteanu, 2005).',
      paragraphs: [
        '**Como fazer:** molhe a sola de um pé, pise com todo o peso em um papel pardo ou em uma cartolina seca, fique em pé normalmente por um segundo e tire o pé. Faça o outro pé. Olhe a parte do meio da pegada, entre o calcanhar e a parte da frente do pé:',
        {
          list: [
            '**Uma curva bem marcada no lado de dentro**, com a faixa do meio com mais ou menos metade da largura da frente do pé, ou menos: um arco típico.',
            '**Uma faixa do meio larga, com pouca ou nenhuma curva**, de modo que a pegada parece um chinelo: um arco baixo.',
            '**Só o calcanhar e a parte da frente do pé aparecem**, ligados por uma faixa fina ou sem ligação: um arco alto. Veja [pé cavo](/pt/pe-cavo-exercicios/).',
          ],
        },
        '**O que ela pode mostrar:** mais ou menos quanto da sua sola toca o chão. Os pesquisadores transformam a mesma pegada em um número, o índice do arco, comparando o terço do meio da pegada com a pegada inteira (Cavanagh e Rodgers, 1987).',
        '**O que ela não pode mostrar:** a altura real do seu arco. Em 95\u00A0pessoas de 62 a 94\u00A0anos comparadas com radiografias, o índice da pegada correspondeu só moderadamente à altura do osso do arco (Menz e Munteanu, 2005). Um estudo de 1992 com 115\u00A0homens concluiu que a pegada não conseguia prever a altura do arco (Hawes e colegas, 1992), enquanto um estudo de 2009 com 91\u00A0adultos jovens encontrou uma correspondência de fraca a moderada com as radiografias (Murley e colegas, 2009). Em 198\u00A0pacientes de clínica, três pontuações da pegada identificaram um pé chato na radiografia com uma precisão que os autores chamaram de razoável (Paecharoen e colegas, 2023).',
        'Um dos motivos são os tecidos moles. Em um pequeno estudo piloto com 24\u00A0adultos com sobrepeso ou obesidade, o índice da pegada ao caminhar aumentou junto com o percentual de gordura corporal, então uma pegada mais cheia pode significar mais acolchoamento embaixo do arco, e não um arco mais baixo (Wearing e colegas, 2004). A pegada também não diz nada sobre a dor, que é o que decide se um pé chato precisa de alguma atenção.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: 'O seu arco parece diferente sentado e em pé?',
      paragraphs: [
        '**Sente-se em uma cadeira com os pés apoiados e relaxados, e olhe o lado de dentro de cada pé.** Repare no espaço embaixo do arco. Depois fique em pé com o peso nos dois pés e olhe de novo, ou peça para alguém tirar uma foto de lado, na altura do chão.',
        'Abaixar um pouco é normal: todo arco desce um pouco com o seu peso. Em dados reunidos de 619\u00A0adultos saudáveis, o pé médio em repouso ficava levemente virado para dentro, uma posição que os autores consideram normal (Redmond e colegas, 2008). O que você procura é uma mudança grande, um arco que aparece bem quando você está sentado e some quando você fica em pé.',
        '**Depois olhe por trás.** Fique em pé normalmente e peça para alguém olhar os seus calcanhares na altura do chão. Um calcanhar que se inclina para fora, com o osso de dentro do tornozelo saltando para dentro, combina com um arco baixo. Se um calcanhar se inclina mais do que o outro, anote.',
        'Essa verificação mostra o quanto o arco abaixa, que é o que um profissional de saúde mede com mais precisão como queda do navicular (explicada mais abaixo). Ela não mostra o porquê: um pé frouxo de nascença e um tendão que está enfraquecendo podem parecer iguais com a pessoa parada. As duas verificações seguintes começam a diferenciar um do outro.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: 'Como fazer o teste do pé chato flexível?',
      keyFact: 'A coalizão tarsal, uma ponte de osso ou de tecido fibroso entre ossos do pé muitas vezes ligada a um pé chato rígido e dolorido em adultos jovens, é relatada em 1 a 13% das pessoas (Mehdi e colegas, 2024).',
      paragraphs: [
        'Um pé chato flexível achata com o seu peso, mas recupera o arco quando a carga muda. Duas verificações rápidas mostram isso:',
        {
          list: [
            '**Verificação na ponta dos pés.** Fique em pé segurando na parede e suba na ponta dos dois pés. Observe o lado de dentro de cada pé, ou os calcanhares por trás. Em um pé flexível, um arco aparece e os calcanhares se inclinam levemente para dentro enquanto você sobe.',
            '**Verificação do dedão (teste de Jack).** Fique em pé normalmente. Levante o dedão o máximo que der, ou peça para alguém levantar para você, com o calcanhar no chão. Em um pé flexível, o arco sobe junto com o dedão. O teste leva o nome de Jack, que o descreveu em 1953 (Jack, 1953).',
          ],
        },
        '**Se o arco volta, o pé chato é flexível.** Esse é o tipo comum, e o que foi estudado nos ensaios com exercícios: em 52\u00A0pessoas com pé chato flexível, seis semanas de pé curto, exercícios de tornozelo e quadril e alongamentos melhoraram duas medidas do formato do arco mais do que em um grupo de controle (Brijwasi e Borkar, 2023).',
        '**Se o arco continua achatado e o pé parece duro**, o pé chato pode ser rígido. Uma das causas é a coalizão tarsal, uma ponte de osso, cartilagem ou tecido fibroso entre dois ossos do pé, encontrada com frequência em adultos jovens com pé chato rígido e dolorido (Mehdi e colegas, 2024). Um pé chato rígido precisa que um profissional de saúde encontre a causa antes de você começar qualquer programa de exercícios.',
        'Vale ser honesto sobre o alcance dessas verificações: não encontramos nenhum estudo que tenha medido o quanto a verificação na ponta dos pés ou o teste de Jack são confiáveis em adultos quando feitos em casa. Elas são simples e o resultado costuma ser claro, mas encare um resultado rígido como um motivo para fazer uma avaliação, não como um diagnóstico.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: 'O que a elevação de calcanhar em um pé mostra sobre o pé chato?',
      keyFact: 'Em uma pesquisa com 582\u00A0mulheres com mais de 40\u00A0anos na Inglaterra, 3,3% tinham disfunção do tendão tibial posterior em fase inicial, e nenhuma tinha recebido o diagnóstico antes (Kohls-Gatzoulis e colegas, 2009).',
      paragraphs: [
        'O tibial posterior é o músculo cujo tendão passa atrás do osso de dentro do tornozelo e sustenta o arco. Quando o tendão enfraquece, o arco daquele lado pode ir baixando aos poucos. Isso se chama disfunção do tendão tibial posterior, um motivo comum para o arco de um adulto achatar com o tempo. O quadro típico é dor no lado de dentro do tornozelo, um pé que vai achatando e o calcanhar virando para fora (Deu e colegas, 2022).',
        '**Como fazer:** fique em um pé só ao lado de uma parede, com as pontas dos dedos na parede só para o equilíbrio. Suba o mais alto que conseguir na parte da frente do pé e desça. Faça algumas vezes e troque de pé. Observe três coisas:',
        {
          list: [
            'você consegue subir em um pé com a mesma facilidade que no outro',
            'no alto da subida o calcanhar vira para dentro, do mesmo jeito dos dois lados',
            'não há dor atrás ou embaixo do osso de dentro do tornozelo',
          ],
        },
        'Dificuldade para subir de um lado, um calcanhar que não vira para dentro ou dor no tornozelo por dentro são os sinais que apontam para o tendão. Um profissional de saúde usa o mesmo movimento como triagem, e o quadro completo está em [disfunção do tendão tibial posterior](/pt/disfuncao-tendao-tibial-posterior/).',
        'Essa verificação é sobre o formato e a sensação de um lado comparado ao outro em uma subida, e não sobre quantas você consegue fazer. Se você quer um número para a resistência da panturrilha, com o ritmo usado nas pesquisas e as contagens que adultos saudáveis alcançam, use o [teste de elevação de calcanhar](/pt/teste-elevacao-calcanhar/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'O que um profissional de saúde mede no pé chato?',
      keyFact: 'Em 619\u00A0adultos saudáveis avaliados com o índice de postura do pé (FPI), a média foi +4 em uma escala de -12 a +12, o que os autores chamam de levemente pronado e normal (Redmond e colegas, 2008).',
      paragraphs: [
        'Um profissional de saúde olha as mesmas coisas que você olhou, mas pontua tudo de um jeito padronizado. As duas medidas mais comuns:',
        {
          list: [
            '**Índice de postura do pé (FPI, Foot Posture Index).** Seis verificações do pé em pé, cada uma pontuada de -2 a +2, incluindo o ângulo do calcanhar, a saliência do tornozelo por dentro e o formato do arco. O total vai de -12 (arco alto) a +12 (chato). Em dados reunidos de 619\u00A0adultos saudáveis, a média foi +4, e os autores consideram pontuações abaixo de -3 ou acima de +10 claramente fora da faixa normal (Redmond e colegas, 2008).',
            '**Queda do navicular.** O profissional marca o osso do lado de dentro do arco, o navicular, mede a altura dele sentado, com o pé em uma posição padronizada, depois em pé, e registra o quanto ele desce. Nos estudos, adultos saudáveis têm em média de 3,6 a 8,1\u00A0milímetros, e nenhum ponto de corte para “demais” foi confirmado (Nielsen e colegas, 2009).',
          ],
        },
        '**Essas medidas são melhores do que a pegada, mas não são perfeitas.** Em idosos, uma medida com régua da altura do osso do arco correspondeu bem às radiografias (r = 0,79), enquanto o FPI correspondeu menos (r de 0,36 a 0,59), porque ele pontua o pé inteiro, e não só o arco (Menz e Munteanu, 2005). O total do FPI mostrou confiabilidade moderada no geral, a altura do navicular foi a medida isolada mais confiável em adultos, e nenhuma das medidas testadas foi confiável o suficiente em crianças pequenas (Evans e colegas, 2003).',
        'A prática faz diferença. Quando dois avaliadores sem experiência mediram a queda do navicular em 15\u00A0pessoas, os resultados concordaram pouco (Picciano e colegas, 1993). Em 86\u00A0adultos jovens de um estudo posterior, a queda do navicular e as pontuações da pegada foram altamente repetíveis (Zuil-Escobar e colegas, 2018). Se o seu arco está sendo acompanhado ao longo do tempo, ajuda que a mesma pessoa faça a medida.',
        'Se o profissional suspeitar de um pé rígido, de uma coalizão ou de lesão no tendão, ele pode pedir uma radiografia com apoio, uma tomografia ou uma ressonância magnética, que nenhuma verificação em casa substitui (Mehdi e colegas, 2024).',
      ],
      sourceNote:
        'Menz e Munteanu 2005: r de Pearson em relação à altura radiográfica do navicular, à inclinação do calcâneo e ao ângulo calcâneo primeiro metatarso; índice do arco r de 0,52 a 0,71, FPI r de 0,36 a 0,59. Picciano 1993: ICC entre avaliadores da queda do navicular 0,57, do mesmo avaliador 0,61 e 0,79. Zuil-Escobar 2018: ICC acima de 0,88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: 'O que fazer com o seu resultado?',
      paragraphs: [
        'Junte as quatro verificações:',
        {
          list: [
            '**Arco baixo que volta na ponta dos pés, sem dor, os dois pés parecidos:** um pé chato flexível, uma variação normal. Não é preciso fazer nada. Exercício é opcional.',
            '**Arco baixo que volta, com o arco cansado ou dolorido depois de dias longos:** exercícios para pé e tornozelo são um começo razoável. Veja [exercícios para pé chato](/pt/exercicios-pe-chato/) para o programa completo.',
            '**Arco que continua achatado, um pé mais chato que o outro ou dor no tornozelo por dentro:** procure um profissional de saúde antes de começar os exercícios. A lista abaixo traz os detalhes.',
          ],
        },
        '**O que o exercício pode e não pode fazer.** Em 52\u00A0pessoas com pé chato flexível, seis semanas de pé curto, trabalho de tornozelo e quadril e alongamentos melhoraram o formato do arco mais do que só movimentos do tornozelo para cima e para baixo (Brijwasi e Borkar, 2023). Uma revisão de 2024 sobre o treino de pé curto não encontrou mudança clara na postura geral do pé, e encontrou mudança em uma medida do arco só em programas com mais de seis semanas (Cheng e colegas, 2024). Os dois mediram formato, não dor.',
        'Os cartões abaixo são um ponto de partida tirado de [exercícios para pé chato](/pt/exercicios-pe-chato/), com as mesmas doses.',
      ],
      exercises: [
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023. Sozinho, o pé curto tem resultados mais fracos.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O arco subindo',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, e segure. Mantenha a parte de fora do pé no chão e suba o arco para formar um pequeno túnel embaixo do pé. Não dobre os dedos. Dobrar os dedos é o erro mais comum neste exercício.',
          stop: 'Cãibra no arco que não passa, ou dor no tornozelo por dentro',
          image: 'Exercício: pé curto, sentado',
          media: 'short_foot_seated',
          caption: 'Pé curto, sentado: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma perna sentada com o pé apoiado no chão, os músculos do arco destacados enquanto o arco sobe',
        },
        {
          name: 'Elevação do dedão',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O dedão se movendo sozinho',
          how: 'Sente-se com os pés apoiados. Levante só o dedão e segure. Os outros quatro dedos ficam apoiados no chão. A elevação do dedão ensina o dedão a se mover sozinho, que é o primeiro passo para ativar o arco.',
          stop: 'Dor na base do dedão',
          image: 'Exercício: elevação do dedão',
          media: 'big_toe_lift',
          caption: 'Elevação do dedão: levante só o dedão, os outros quatro ficam no chão',
          alt: 'Um pé no chão levantando só o dedão, com o arco destacado',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga enquanto a panturrilha acorda.',
          stop: 'Dor atrás do tornozelo por dentro, ou um lado que não consegue acompanhar o outro',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Inversão com faixa',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 12, cada pé',
          often: 'Dias de força',
          feel: 'Trabalho na parte de dentro do pé e do tornozelo',
          how: 'Sente-se com uma faixa elástica em volta do pé e vire o pé para dentro contra a faixa. Mexa o pé, não a perna. O joelho fica parado. O Walkito só coloca a inversão com faixa depois de seis sessões de pé curto em pé, para que os músculos do próprio arco venham primeiro.',
          stop: 'Dor atrás do tornozelo por dentro que continua depois da série',
          image: 'Exercício: inversão com faixa',
          media: 'band_inversion',
          caption: 'Inversão com faixa: vire o pé para dentro contra a faixa, o joelho fica parado',
          alt: 'Uma perna com uma faixa elástica em volta do pé, virando o pé para dentro, com a parte de baixo da perna destacada',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Como saber se eu tenho pé chato?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Olhe a pegada do pé molhado e depois compare o arco sentado e em pé. Uma pegada sem curva no lado de dentro e um arco que some quando você fica em pé sugerem um arco baixo. Depois suba na ponta dos pés: se o arco volta, o pé chato é flexível, o tipo comum. A pegada sozinha corresponde só moderadamente à altura real do arco.',
    },
    {
      q: 'O teste da pegada molhada é preciso?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Só de forma aproximada. Em 95\u00A0idosos comparados com radiografias, a pontuação da pegada correspondeu moderadamente à altura do arco, e um estudo de 1992 com 115\u00A0homens concluiu que a pegada não conseguia prever a altura do arco. A gordura embaixo da sola também pode preencher a pegada. Use como uma primeira olhada, não como diagnóstico.',
    },
    {
      q: 'O que é o teste do pé chato flexível?',
      cites: [CITE.jack1953],
      a: 'Ele verifica se o arco volta. Fique na ponta dos pés, ou levante o dedão com o calcanhar no chão (o teste de Jack, descrito em 1953). Se um arco aparece, o pé chato é flexível. Se ele continua achatado e duro, um profissional de saúde deve procurar a causa. Não encontramos estudos sobre a confiabilidade dessas verificações feitas em casa.',
    },
    {
      q: 'Como saber se o meu pé chato é rígido?',
      cites: [CITE.mehdiCoalition],
      a: 'Um pé chato rígido não tem arco quando você se senta, fica na ponta dos pés ou levanta o dedão, e muitas vezes parece duro. Uma das causas é a coalizão tarsal, uma ponte entre ossos do pé relatada em 1 a 13% das pessoas. Um pé chato rígido que dói precisa de um profissional de saúde e, em geral, de exames de imagem.',
    },
    {
      q: 'Dá para ter pé chato de um lado só?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Sim, e vale a pena verificar. Um arco que vai ficando mais baixo de um lado, principalmente com dor atrás do tornozelo por dentro ou dificuldade para subir na ponta daquele pé, é um sinal típico de disfunção do tendão tibial posterior. Em 582\u00A0mulheres com mais de 40\u00A0anos, 3,3% tinham sinais iniciais dela e nenhuma tinha diagnóstico. Procure um profissional de saúde.',
    },
    {
      q: 'Qual é a queda do navicular normal?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'Nos estudos, adultos saudáveis têm em média de 3,6 a 8,1\u00A0milímetros de queda do navicular, a distância que o osso do arco desce quando você fica em pé. Já se sugeriram pontos de corte de 10, 13 ou 15\u00A0milímetros para “demais”, mas nenhum foi confirmado, e os resultados variam entre avaliadores, principalmente os sem experiência. É difícil medir isso com precisão em você mesmo.',
    },
    {
      q: 'O que é o índice de postura do pé (FPI)?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'É uma avaliação em seis partes que um profissional de saúde faz com você em pé, dando ao calcanhar, ao tornozelo e ao arco notas de -2 a +2 cada, para um total de -12 (arco alto) a +12 (chato). Em 619\u00A0adultos saudáveis a média foi +4, o que é normal. Ele mostrou confiabilidade moderada no geral, e em um estudo nenhuma medida de postura do pé foi confiável o suficiente em crianças pequenas.',
    },
    {
      q: 'Pé chato precisa de tratamento se não dói?',
      cites: [CITE.menz],
      a: 'Normalmente não. Um pé chato flexível que não causa dor e não limita o que você faz é uma variação normal. O Framingham Foot Study, com cerca de 1.900\u00A0adultos, não encontrou relação entre pé chato e dor lombar. Dor, rigidez ou uma mudança de um lado só são os motivos para fazer uma avaliação.',
    },
    {
      q: 'Posso testar o pé chato do meu filho do mesmo jeito?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'As verificações na ponta dos pés e do dedão também funcionam em crianças, mas a maioria das crianças pequenas tem o arco baixo, que se forma com a idade, e em um estudo as medidas de postura do pé não foram confiáveis o suficiente em crianças pequenas. Um pé rígido, dor ou mancar são motivos para ir ao médico. Mais em [pé chato infantil](/pt/pe-chato-infantil/).',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'o arco continua achatado quando você se senta, fica na ponta dos pés ou levanta o dedão, e o pé parece duro',
      'um pé ficou mais chato que o outro ao longo dos meses, ou você percebeu isso de repente',
      'você tem dor ou inchaço atrás ou embaixo do osso de dentro do tornozelo',
      'você não consegue subir na ponta de um pé só, ou subir daquele lado dói',
      'o pé chato começou depois de uma queda, uma torção ou uma lesão',
      'você tem diabetes e o pé está quente, vermelho ou inchado, ou o formato dele está mudando',
      'você sente dormência, queimação ou formigamento no pé',
      'o pé chato de uma criança é rígido, dói ou vem junto com mancar',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para dor no calcanhar e no pé, para iPhone e Android. Ele monta um plano a partir das suas respostas, incluindo onde dói e de que lado, e repete um teste simples a cada 14\u00A0dias: elevação de calcanhar, sustentação do arco, equilíbrio em uma perna e comparação entre esquerda e direita.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para como os seus pés estão, e o plano se ajusta. O Walkito não faz diagnóstico, então, se o seu pé chato for rígido, de um lado só ou dolorido, peça antes a avaliação de um profissional de saúde.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Teste de pé chato',
  campaign: 'guide-flat-feet-test-pt',
};
