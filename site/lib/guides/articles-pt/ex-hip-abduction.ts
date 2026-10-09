import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-hip-abduction.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the site name «abdução de
 * quadril» (`lib/guides/pt.ts`). Dose (3 x 15) is the English page's figure.
 * Uses existing keys: zarali, brijwasi, cheng, menz, guideline.
 */

export const EX_HIP_ABDUCTION_PT: Guide = {
  lang: 'pt',
  page: 'exHipAbduction',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Abdução de quadril com faixa para o pé e o arco',
  description:
    'Como fazer abdução de quadril com faixa elástica para controlar melhor o pé e o arco: técnica, séries, a ligação quadril e pé, e o que a pesquisa mostra.',
  h1: 'Abdução de quadril: como ela ajuda os pés e como fazer',
  lede:
    'A abdução de quadril é o movimento de levantar uma perna para o lado, para longe do meio do corpo. Quando os músculos abdutores do quadril estão fracos, o joelho cai para dentro ao andar e o pé faz pronação demais, achatando o arco. Fortalecer o glúteo médio com a abdução de quadril com faixa pode diminuir essa queda para dentro e tirar esforço do arco, da fáscia plantar e da parte de dentro do tornozelo.',
  takeaways: [
    'Um ensaio de 2023 com 52\u00A0pessoas com pé chato flexível mostrou que um programa combinado de seis semanas, com fortalecimento do quadril, exercícios de pé curto, trabalho de tornozelo e alongamento, melhorou duas medidas do formato do arco comparado a um grupo controle (Brijwasi e colegas, 2023).',
    'O glúteo médio controla a pelve e a coxa quando você fica em uma perna. Quando ele está fraco, o joelho vai para dentro e o pé faz mais pronação, colocando carga no arco medial.',
    'Um estudo transversal de 2013 com cerca de 1.900\u00A0adultos do Framingham Foot Study não encontrou ligação entre a postura de pé chato e dor lombar, mas encontrou uma pequena ligação entre um pé que gira para dentro ao andar e dor lombar em mulheres (Menz e colegas, 2013).',
    'A abdução de quadril em pé com faixa é como o Walkito passa este exercício. Em pé, a perna de apoio é obrigada a estabilizar enquanto a perna que trabalha sobe.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é a abdução de quadril?',
      paragraphs: [
        'Abdução de quadril quer dizer levar a perna para o lado, para longe do centro do corpo. O músculo principal responsável é o glúteo médio, que fica na parte de fora do quadril. Ele mantém a pelve nivelada quando você fica em uma perna e impede o quadril do outro lado de cair.',
        'Este exercício aparece em programas para os pés porque o quadril, o joelho e o pé estão ligados. Quando o glúteo médio está fraco, a coxa gira para dentro ao andar e ao ficar em pé, o joelho vai junto, e o pé faz mais pronação do que deveria. O arco achata com essa força para dentro. Fortalecer o quadril diminui essa reação em cadeia.',
      ],
    },
    {
      h2: 'Como fazer a abdução de quadril em pé com faixa?',
      paragraphs: [
        'Fique em pé com uma faixa elástica em volta dos dois tornozelos ou logo acima dos joelhos. Segure em uma parede ou cadeira para se equilibrar. Passe o peso para a perna de apoio. Levante a outra perna reta para o lado, com os dedos apontando para a frente e o corpo reto. Não incline para o lado oposto. Desça devagar e repita.',
        'Empurre pelo calcanhar da perna que trabalha, não pelos dedos. O movimento é no quadril, não na cintura. A perna não precisa subir muito. Uns 30 a 45\u00A0graus do chão bastam, se a técnica continuar limpa. Subir mais com o corpo inclinando para o lado faz menos pelo glúteo médio.',
      ],
      exercises: [
        {
          name: 'Abdução de quadril, em pé, com faixa',
          evidence: { level: 'moderate', why: 'Fez parte do programa combinado que melhorou o formato do arco em um ensaio randomizado de 2023 (Brijwasi 2023). O fortalecimento do quadril para o alinhamento do pé tem apoio no raciocínio biomecânico, mas não foi isolado em um ensaio próprio com desfechos no pé.' },
          dose: 'O Walkito começa com 3\u00A0séries de 15, cada perna',
          how: 'Fique em pé com uma faixa em volta dos dois tornozelos. Segure em uma parede para se equilibrar. Levante uma perna reta para o lado, com os dedos para a frente. Empurre pelo calcanhar. Desça devagar.',
          often: 'Dias de força, quando a meta de esquerda e direita está no seu plano',
          feel: 'Trabalho na parte de fora do quadril',
          stop: 'A dor chegar a 6/10',
          media: 'hip_abduction',
          caption: 'Abdução de quadril: levante uma perna para o lado contra a faixa',
          alt: 'Uma figura em pé com uma faixa elástica em volta dos tornozelos, levantando uma perna para o lado',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Como o quadril afeta o pé e o arco?',
      keyFact: 'Um estudo de 2013 com cerca de 1.900\u00A0adultos do Framingham Foot Study não encontrou ligação entre pé chato e dor lombar, mas encontrou uma pequena ligação entre o pé girando para dentro e dor nas costas em mulheres (Menz e colegas, 2013).',
      paragraphs: [
        'A ligação passa por uma cadeia biomecânica: quadril, joelho, tornozelo, pé. Quando o glúteo médio não consegue manter a pelve nivelada com você em uma perna, a coxa gira para dentro. O joelho vai junto, caindo em direção ao meio do corpo. Essa rotação obriga o pé a fazer pronação, virando o tornozelo para dentro e achatando o arco.',
        'É por isso que muita gente com pé chato ou dor no arco também tem o quadril fraco. O arco não está falhando sozinho. Ele está recebendo carga demais de cima. Fortalecer o quadril diminui essa carga que vem de cima para baixo.',
        'Um estudo transversal de 2013 do Framingham Foot Study analisou cerca de 1.900\u00A0adultos da comunidade. A postura de pé chato em si não estava ligada a dor lombar, mas um pé que girava para dentro ao andar mostrou uma pequena ligação com dor lombar em mulheres, sugerindo que a cadeia pé, quadril e costas pode funcionar nos dois sentidos.',
        'O ensaio de pé chato de Brijwasi e colegas (2023) incluiu fortalecimento do quadril junto com exercícios de pé curto, trabalho de tornozelo e alongamento. O programa combinado melhorou o formato do arco em seis semanas. O estudo não separou quanto o fortalecimento do quadril contribuiu sozinho, mas a inclusão reflete o raciocínio biomecânico.',
      ],
      cites: [CITE.menz, CITE.brijwasi],
    },
    {
      h2: 'Quem se beneficia da abdução de quadril para a dor no pé?',
      paragraphs: [
        'Quem tem pé chato ou pronação excessiva se beneficia, porque o exercício atua sobre uma causa comum, mais acima, da queda do arco. Se os seus joelhos costumam cair para dentro quando você agacha ou anda, abdutores do quadril fracos provavelmente contribuem.',
        'Corredores se beneficiam porque ficar em uma perna é a postura padrão da corrida. Cada passada aterrissa em um pé só. Um glúteo médio fraco desse lado deixa o joelho e o pé girarem para dentro, o que pode contribuir para canelite, fascite plantar e joelho de corredor. Veja [dor no calcanhar em corredores](/heel-pain-runners/) (em inglês) e [exercícios para canelite](/pt/canelite-exercicios/) para saber mais.',
        'Quem fica em pé por muitas horas, principalmente profissionais de enfermagem e do comércio, também pode se beneficiar. Ficar em pé por muito tempo cansa o glúteo médio, e no fim do turno o controle do quadril enfraquece. Veja [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) para exercícios que combinam com a abdução de quadril.',
      ],
    },
    {
      h2: 'Quais são os erros comuns na abdução de quadril em pé?',
      paragraphs: [
        'Inclinar o corpo para o lado oposto é o erro mais comum. Quando você inclina, o corpo usa o embalo e a inclinação lateral em vez do glúteo médio. Fique reto. Uma subida menor com o corpo reto é melhor que uma subida alta com inclinação.',
        'Girar o pé para fora, com os dedos apontando para o teto, é outro erro. Isso passa o trabalho para os flexores do quadril e o tensor da fáscia lata em vez do glúteo médio. Mantenha os dedos apontando para a frente ou um pouco para baixo.',
        'Balançar a perna é um terceiro problema. O exercício deve ser lento e controlado, principalmente na descida. A fase de descida (excêntrica) é onde acontece boa parte do fortalecimento. Se a perna cai rápido, o músculo não está fazendo o trabalho.',
        'Por fim, deixar o quadril de apoio cair é sinal de que a faixa está forte demais ou de que o glúteo médio do lado de apoio está cansando. A pelve deve ficar nivelada o tempo todo. Use uma faixa mais leve ou descanse entre as séries.',
      ],
    },
    {
      h2: 'O que a pesquisa diz?',
      paragraphs: [
        'O raciocínio biomecânico para a abdução de quadril em programas para os pés está bem estabelecido: abdutores do quadril fracos deixam o joelho cair para dentro, aumentando a pronação do pé e a carga no arco. Vários estudos observacionais confirmam a ligação entre fraqueza no quadril e problemas de alinhamento das pernas.',
        'Para resultados clínicos, a evidência mais forte vem de programas combinados. O ensaio de 2023 de Brijwasi e colegas incluiu fortalecimento do quadril como parte de um programa de exercícios de seis semanas para 52\u00A0pessoas com pé chato flexível. O programa melhorou o formato do arco. O fortalecimento do quadril não foi isolado em um ensaio próprio de pé chato ou de fascite plantar.',
        'Um ensaio randomizado de 2024 com 45\u00A0mulheres com pé chato flexível comparou exercícios de pé curto, um programa de exercícios combinado e exercícios de pé curto com abdução de quadril isométrica, por seis semanas. O grupo que acrescentou a abdução de quadril isométrica ao pé curto teve uma redução significativamente maior na queda do navicular (uma medida da queda do arco) que os outros dois grupos (Zarali e colegas, 2024), o que apoia a ideia de que o trabalho de quadril acrescenta algo que os exercícios só para o pé não dão.',
        'A evidência apoia a abdução de quadril como parte de um programa mais amplo para os pés. Ela não é um exercício isolado para dor no arco, mas preenche uma lacuna que os exercícios só para o pé deixam aberta. Páginas relacionadas: [exercícios para pé chato](/pt/exercicios-pe-chato/), [inversão do tornozelo com faixa](/pt/exercicios/inversao-tornozelo-faixa/), [exercício do pé curto](/pt/exercicios/pe-curto/).',
      ],
      cites: [CITE.zarali, CITE.brijwasi, CITE.cheng],
    },
  ],
  faq: [
    {
      q: 'Abdução de quadril ajuda no pé chato?',
      cites: [CITE.brijwasi],
      a: 'A abdução de quadril fortalece o glúteo médio, que controla o alinhamento do joelho e do pé de cima para baixo. Um ensaio de 2023 com 52\u00A0pessoas com pé chato flexível usou fortalecimento do quadril como parte de um programa combinado e encontrou melhora no formato do arco em seis semanas (Brijwasi 2023). Ela funciona melhor como parte de um programa mais amplo, não sozinha.',
    },
    {
      q: 'Quantas repetições de abdução de quadril devo fazer?',
      a: 'O Walkito começa com 3\u00A0séries de 15\u00A0repetições em cada perna, em pé, com uma faixa elástica em volta dos tornozelos. É um exercício de mais repetições e menos carga, porque o glúteo médio precisa de resistência para andar, não de força máxima.',
    },
    {
      q: 'Posso fazer abdução de quadril deitado de lado?',
      a: 'A abdução de quadril deitado de lado trabalha o mesmo músculo. Em pé, você ainda tem o desafio de se equilibrar na perna de apoio, o que também treina o quadril desse lado. O Walkito usa a versão em pé porque ela imita melhor a caminhada e o apoio em uma perna. Se em pé estiver instável demais, deitado de lado é um ponto de partida razoável.',
    },
    {
      q: 'Qual faixa elástica usar na abdução de quadril?',
      a: 'Uma miniband (faixa em anel) de resistência leve a média funciona melhor. Coloque em volta dos dois tornozelos ou logo acima dos joelhos. A faixa deve dar resistência suficiente para as últimas repetições de cada série serem desafiadoras, mas sem obrigar você a inclinar para o lado ou balançar a perna.',
    },
    {
      q: 'Por que a abdução de quadril está em um programa de exercícios para os pés?',
      cites: [CITE.menz],
      a: 'O quadril controla o que acontece no joelho e no pé. Um glúteo médio fraco deixa o joelho cair para dentro, o que obriga o pé a fazer pronação e achata o arco. Um estudo de 2013 com cerca de 1.900\u00A0adultos encontrou uma pequena ligação entre um pé que gira para dentro ao andar e dor lombar em mulheres, embora a postura de pé chato sozinha não estivesse ligada a dor nas costas (Menz 2013). Fortalecer o quadril diminui a sobrecarga de cima sobre o arco.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você tem uma dor aguda no quadril que limita apoiar o peso',
      'o joelho cai para dentro e você não consegue controlar, mesmo com prática',
      'você tem dor na virilha ou um estalo no quadril que piora com o exercício',
      'a dor no pé ou no arco está piorando apesar de exercícios regulares por várias semanas',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito acrescenta a abdução de quadril nos dias de força quando uma meta de equilíbrio entre esquerda e direita entra no seu plano. Ela fica junto com os exercícios intrínsecos do pé e o trabalho de panturrilha, para o arco receber apoio de cima e de baixo. As sessões são de 3, 5 ou 10\u00A0minutos, e um teste a cada 14\u00A0dias acompanha o progresso.',
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Abdução de quadril',
  campaign: 'ex-hip-abduction-pt',
};
