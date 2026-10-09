import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dor no calcanhar ao acordar (PT) ──────────────────────────────────
 *
 * Translated from `articles/morning-heel-pain.ts`, written around the
 * Brazilian Portuguese queries «dor no calcanhar ao acordar», «dor no
 * calcanhar de manhã», «dor no calcanhar ao levantar». Informal «você».
 * Figures, doses, grades and qualifiers are identical to the English page.
 */

export const MORNING_HEEL_PAIN_PT: Guide = {
  lang: 'pt',
  page: 'morningHeelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor no calcanhar ao acordar: por que acontece e o que fazer',
  description:
    'Por que o calcanhar dói quando você acorda, outras causas de dor nos primeiros passos além da fascite plantar e o que fazer antes de levantar de manhã.',
  h1: 'Dor no calcanhar ao acordar: por que acontece e o que fazer antes do primeiro passo',
  lede:
    'Os primeiros passos ao sair da cama são a pior parte do dia. Aquela fisgada forte no calcanhar, antes mesmo de você ficar em pé direito, é o padrão que a maioria das pessoas descreve quando pesquisa sobre dor no calcanhar. A causa mais comum é a fascite plantar, mas não é a única, e a manhã é o momento mais útil para fazer alguma coisa a respeito.',
  intro: [
    'A página de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) traz a lista completa de exercícios, a evidência por trás de cada um e os graus da diretriz. Esta página se aprofunda na manhã em si: por que o primeiro passo dói, quais outras condições têm o mesmo padrão, o que fazer antes de o pé tocar o chão, e por que acompanhar a sua dor da manhã mostra se as coisas estão melhorando.',
  ],
  takeaways: [
    'A dor no calcanhar pela manhã é a marca da fascite plantar: a diretriz de 2023 para dor no calcanhar a descreve como uma dor “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso” (Koc e colegas, 2023).',
    'Alongar a fáscia plantar antes de ficar em pé tem grau **A**, o mais alto da diretriz. As talas noturnas, usadas por 1 a 3\u00A0meses, também recebem um **A** para dor nos primeiros passos que não passa (Koc e colegas, 2023).',
    'Outras condições que doem de manhã são a tendinite de Aquiles (parte de trás do calcanhar), a síndrome do coxim gorduroso do calcanhar (dor funda no centro), a fratura por estresse do calcâneo (aumenta com a atividade, pode doer em repouso) e a artrite inflamatória (os dois calcanhares, com rigidez prolongada pela manhã em outras articulações).',
    'Em um grupo de 174\u00A0pessoas com fascite plantar, dor nos dois calcanhares foi um preditor significativo de sintomas mais duradouros, e os autores observaram que uma doença inflamatória sistêmica não reconhecida poderia explicar em parte esse achado (Hansen e colegas, 2018).',
    'A dor da manhã numa escala de 0 a 10 é o sinal mais claro do dia a dia para saber se o pé está melhorando ou não.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Por que a dor no calcanhar é pior de manhã?',
      figure: { id: 'heel-side', caption: 'Vista lateral: a fáscia plantar se prende embaixo do osso do calcanhar, onde a dor da fascite plantar costuma começar.', alt: 'Vista lateral interna de um pé com a pele transparente, mostrando o osso do calcanhar, a fáscia plantar sob o arco e uma área vermelha sob o calcanhar onde a dor costuma começar.' },
      paragraphs: [
        'A fáscia plantar, a faixa grossa de tecido que vai do osso do calcanhar até os dedos, fica mais rígida enquanto você dorme. Em repouso, o pé costuma ficar apontado para baixo, o que deixa a fáscia encurtar. Quando você fica em pé e apoia o pé com todo o seu peso, esse tecido encurtado se estica de repente. O resultado é uma fisgada forte na parte de dentro do calcanhar.',
        'A diretriz de 2023 para dor no calcanhar descreve isso como uma dor “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”. O mesmo padrão aparece quando você fica um tempo sentado e depois levanta, pelo mesmo motivo: o tecido encurta em repouso e depois recebe carga de uma vez.',
        'Não é uma lesão nova acontecendo toda manhã. O tecido está rígido, não está rasgando. Depois de alguns passos, quando a fáscia aquece, a dor normalmente melhora. Esse efeito de aquecimento é uma das coisas que diferenciam a fascite plantar de algumas das outras causas abaixo.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O que mais causa dor no calcanhar de manhã?',
      keyFact: 'Em um grupo de 174\u00A0pessoas com fascite plantar acompanhadas por 9,7\u00A0anos em média, dor nos dois calcanhares previu um resultado pior a longo prazo, o que os autores disseram poder refletir uma doença inflamatória sistêmica não reconhecida (Hansen e colegas, 2018).',
      paragraphs: [
        'A fascite plantar é a causa mais comum de dor no calcanhar pela manhã, mas não é a única. O local e o comportamento da dor ajudam a diferenciar.',
        '**Tendinite de Aquiles.** Dor na parte de trás do calcanhar ou no tendão logo acima, não embaixo do pé. O tendão de Aquiles fica rígido durante a noite assim como a fáscia plantar, então rigidez nos primeiros passos é comum. Normalmente melhora ao caminhar e depois piora de novo com atividade prolongada. Se a sua dor é na parte de trás do calcanhar e não embaixo dele, veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        '**Síndrome do coxim gorduroso do calcanhar.** O coxim gorduroso embaixo do osso do calcanhar funciona como uma almofada. Quando ele afina ou se desloca, o osso recebe mais impacto diretamente.',
        'Uma revisão de escopo de 2022 observou que a dor do coxim gorduroso costuma ser uma dor funda no centro do calcanhar, piora em superfícies duras e ao andar descalço, e pode ser difícil de diferenciar da fascite plantar sem exame de imagem (Chang e colegas, 2022). A diferença principal: a dor da fascite plantar costuma ser mais forte na parte de dentro e da frente do calcanhar, enquanto a dor do coxim gorduroso fica bem embaixo, no centro.',
        '**Fratura por estresse do calcâneo.** Dor que aparece aos poucos, normalmente depois de um aumento de atividade. Ao contrário da fascite plantar, a dor da fratura por estresse costuma aumentar com a atividade em vez de melhorar depois do aquecimento, e pode doer em repouso ou à noite. Se apertar as laterais do calcanhar reproduz a dor, procure um profissional de saúde antes de exercitar o pé. [Dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) explica como mudanças repentinas de carga afetam o calcanhar.',
        '**Artrite inflamatória (um sinal de alerta).** Quando os dois calcanhares doem de manhã, a rigidez dura mais de 30\u00A0minutos e outras articulações também estão rígidas ou inchadas, o padrão se afasta da fascite plantar e se aproxima de algo que um profissional de saúde deve avaliar. Condições como artrite psoriásica ou espondilite anquilosante podem causar dor onde os tendões se prendem ao osso, incluindo o calcanhar.',
        'Em um grupo de 174\u00A0pessoas com fascite plantar acompanhadas por 9,7\u00A0anos em média, dor nos dois calcanhares foi um preditor significativo de prognóstico pior a longo prazo, e os autores observaram que alguma doença inflamatória sistêmica não reconhecida poderia explicar em parte esse achado (Hansen e colegas, 2018). Se os dois calcanhares doem e outras articulações estão envolvidas, procure primeiro um profissional de saúde.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.patelStressFracture, CITE.hansen],
    },
    {
      h2: 'O que você pode fazer antes do primeiro passo?',
      paragraphs: [
        'O mais útil que você pode fazer pela dor no calcanhar pela manhã acontece antes de o pé tocar o chão. A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, **A**, e a manhã é o momento que ela mais repete quando recomenda alongar.',
        'Sente-se na beira da cama. Cruze um tornozelo sobre o joelho oposto e puxe os dedos para trás com cuidado, com uma mão, até sentir um alongamento ao longo do arco. Segure por cerca de 10\u00A0segundos e solte. Faça isso 10\u00A0vezes em cada pé. Isso tensiona a fáscia devagar, de forma controlada, antes de você pedir que ela aguente todo o seu peso.',
        'Em seguida, alongue a panturrilha. Fique perto da cama ou de uma parede, um pé atrás do outro, o calcanhar de trás no chão, e incline para a frente até sentir o alongamento na parte de cima da panturrilha. Segure por 30\u00A0segundos de cada lado.',
        'Panturrilhas tensas puxam o calcanhar pelo tendão de Aquiles, e pouca flexibilidade no tornozelo é um dos fatores de risco independentes mais fortes para fascite plantar: em um estudo de caso-controle pareado com 50\u00A0casos e 100\u00A0controles, ela teve a maior razão de chances de todos os fatores medidos (Riddle e colegas, 2003).',
        'Depois calce um sapato com bom suporte ou um chinelo de sola firme antes de ir até a cozinha. Descalço em piso duro é a pior combinação para uma fáscia rígida. Esses alongamentos da manhã são o ponto de partida. O plano de mais longo prazo acrescenta treino de força: a [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) é o exercício com a evidência de ensaio mais direta por trás.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar (sentado, antes de ficar em pé)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 dá ao alongamento da fáscia plantar e da panturrilha o grau A, o mais alto.' },
          dose: '10\u00A0vezes de 10\u00A0segundos, cada pé',
          how: 'Sente-se na cama. Cruze um tornozelo sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Segure e solte.',
          often: 'Toda manhã antes de ficar em pé, e depois de ficar muito tempo sentado',
          feel: 'Um alongamento ao longo do arco, não dor',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado antes de o pé tocar o chão',
          alt: 'Uma figura sentada puxando os dedos para trás para alongar o arco, com a fáscia plantar destacada',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'O mesmo grau A na diretriz. Trabalha o gastrocnêmio, o músculo maior e mais superficial da panturrilha.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Segure até sentir o alongamento na parte de cima da panturrilha.',
          often: 'Depois do alongamento da fáscia, na maioria das manhãs',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, incline para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'strong', why: 'O mesmo grau A na diretriz. Trabalha o sóleo, o músculo mais profundo da panturrilha.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição do alongamento de panturrilha, depois dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          often: 'Depois do alongamento com o joelho esticado',
          feel: 'Um alongamento mais embaixo na panturrilha, perto do calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Talas noturnas ajudam na dor no calcanhar pela manhã?',
      keyFact: 'A diretriz de 2023 dá às talas noturnas, usadas por um a três meses, o grau máximo, A, para quem continua tendo dor nos primeiros passos da manhã mesmo alongando (Koc e colegas, 2023).',
      paragraphs: [
        'As talas noturnas seguram o pé em ângulo reto enquanto você dorme, para a fáscia plantar e a panturrilha ficarem levemente alongadas em vez de encurtarem durante a noite. A ideia é simples: se a dor da manhã vem da fáscia que enrijece em repouso, mantê-la alongada deveria tirar parte do choque dos primeiros passos.',
        'A diretriz de 2023 para dor no calcanhar dá às talas noturnas o grau **A** para quem continua com dor nos primeiros passos da manhã mesmo com alongamento e outros cuidados conservadores. A duração recomendada é de 1 a 3\u00A0meses. A maioria das talas noturnas é uma bota rígida ou semirrígida que mantém o pé erguido.',
        'Algumas pessoas acham desconfortável dormir com elas, e a diretriz não as sugere como primeiro passo para todo mundo. Elas são para o grupo que já está alongando e ainda acorda com dor.',
        'Talas noturnas são algo para conversar com um profissional de saúde. Não são um exercício, e nenhum app pode fornecê-las. Mas vale a pena conhecê-las, porque têm um dos graus de evidência mais altos da diretriz, justamente para o problema de que esta página trata: dor nos primeiros passos que não passa.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Usar calçado em casa ajuda se os calcanhares doem?',
      paragraphs: [
        'Andar descalço em piso duro coloca a fáscia plantar no alongamento máximo sem nenhum amortecimento embaixo. Para quem já está com a fáscia irritada, é a pior combinação, e normalmente acontece logo depois do alongamento da manhã, quando o tecido ainda está aquecendo.',
        'Um calçado com bom suporte ou um chinelo de sola firme em casa mantém o arco levemente erguido e amortece o calcanhar. A diretriz de 2023 recomenda orientação sobre calçados como parte da abordagem geral, e pouca flexibilidade no tornozelo, ou seja, o quanto o pé consegue subir em direção à canela, é um dos fatores de risco mais fortes para fascite plantar. Um calçado com um pequeno desnível entre calcanhar e dedos ajuda a compensar uma panturrilha tensa.',
        'Não precisa ser um calçado especial. Qualquer tênis ou calçado de casa com sola firme e algum suporte para o arco é melhor do que pés descalços em piso frio ou de madeira. Se a sua dor é pior em casa do que na rua, muitas vezes o motivo é esse. Ficar em pé o dia todo em superfícies duras causa um problema parecido: [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala dos exercícios e dos calçados para isso.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Como a dor da manhã mostra se as coisas estão melhorando?',
      paragraphs: [
        'A dor da manhã é o sinal mais claro do dia a dia de como o pé está. Uma corrida pode parecer tranquila e deixar a fáscia sobrecarregada, e você só vai saber na manhã seguinte. Um turno longo em pé pode parecer suportável, mas a manhã seguinte diz se foi demais. O padrão é simples: se os seus primeiros passos na manhã seguinte estão piores que o normal, o dia anterior pediu mais do pé do que ele aguentava.',
        'É por isso que uma nota diária da dor da manhã, de 0 a 10, é mais útil do que checar a dor durante o dia. A dor durante o dia sobe e desce com a atividade, a postura e o calçado. A dor da manhã mede a mesma coisa, do mesmo jeito, mais ou menos no mesmo horário todo dia. Quando o número cai ao longo das semanas, o pé está ganhando terreno. Quando ele dispara, algo nos últimos um ou dois dias passou do ponto.',
        'O Walkito pede uma nota da dor da manhã antes de cada sessão. Se a nota é 7 ou mais, o dia vira uma sessão leve: só exercícios sentados, com pouca carga, que não forçam a fáscia, com no máximo 3\u00A0minutos. Se a nota está 3 ou mais pontos acima da média dos últimos 7\u00A0dias, o app desce cada exercício um nível. Se ontem você passou mais horas em pé que o normal, uma sessão de força vira uma sessão de recuperação mais leve.',
        'A meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos. É essa tendência, e não uma nota isolada, que diz que o pé está pronto para a próxima etapa.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Por que meu calcanhar dói só de manhã?',
      cites: [CITE.guideline],
      a: 'A fáscia plantar, a faixa grossa de tecido embaixo do pé, fica mais rígida e mais curta enquanto você dorme. Os primeiros passos a esticam com todo o seu peso. A diretriz de 2023 para dor no calcanhar descreve isso como uma dor “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”. Depois de caminhar alguns minutos, o tecido aquece e a dor normalmente melhora.',
    },
    {
      q: 'Devo alongar antes de sair da cama?',
      cites: [CITE.guideline],
      a: 'Sim. A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A, e a manhã é o momento que ela mais cita. Sente-se na beira da cama, cruze um tornozelo sobre o outro joelho e puxe os dedos para trás com cuidado por cerca de 10\u00A0segundos, 10\u00A0vezes em cada pé. Isso tensiona a fáscia devagar antes de você pedir que ela aguente todo o seu peso.',
    },
    {
      q: 'Dor no calcanhar de manhã é sempre fascite plantar?',
      cites: [CITE.fatPadReview, CITE.achillesGuideline],
      a: 'Nem sempre. A tendinite de Aquiles (dor na parte de trás do calcanhar), o afinamento do coxim gorduroso do calcanhar (dor funda no centro, pior descalço em superfícies duras), a fratura por estresse do calcâneo (aumenta com a atividade, pode doer em repouso) e a artrite inflamatória (os dois calcanhares, rigidez prolongada, outras articulações envolvidas) podem causar dor pela manhã. O local e o comportamento da dor ajudam a diferenciar, mas quem decide é um profissional de saúde.',
    },
    {
      q: 'Tala noturna funciona para dor no calcanhar de manhã?',
      cites: [CITE.guideline],
      a: 'A diretriz de 2023 para dor no calcanhar dá às talas noturnas o grau A, o mais alto, para quem continua com dor nos primeiros passos mesmo alongando. As talas noturnas seguram o pé em ângulo reto durante a noite para a fáscia ficar levemente alongada em vez de encurtar. A duração recomendada é de 1 a 3\u00A0meses. Vale conversar com um profissional de saúde se só alongar não basta.',
    },
    {
      q: 'Por que meu calcanhar volta a doer depois de ficar sentado?',
      cites: [CITE.guideline],
      a: 'Pelo mesmo motivo que dói de manhã. A fáscia plantar encurta e fica rígida quando o pé está sem carga, seja dormindo ou só sentado numa mesa. Quando você levanta, ela se estica de repente. A diretriz chama isso de “dor nos primeiros passos depois de um período de repouso”. Fazer um alongamento rápido da fáscia antes de levantar pode ajudar.',
    },
    {
      q: 'Quando ir ao médico por dor no calcanhar de manhã?',
      a: 'Procure um profissional de saúde se os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, se a dor começou depois de uma lesão, se está piorando semana após semana, se não deixa você dormir, se apertar as laterais do calcanhar reproduz a dor, ou se ela vem com dormência, inchaço ou calor. Esses padrões podem indicar algo diferente de fascite plantar.',
    },
    {
      q: 'Quanto tempo a dor nos primeiros passos demora para melhorar?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Uma revisão de 2020 relata que cerca de 90% das pessoas com fascite plantar melhoram com tratamento sem cirurgia, muitas vezes em alguns meses (Latt e colegas, 2020). Em um acompanhamento mais longo de 174\u00A0pacientes, cerca de metade ainda tinha sintomas aos 5\u00A0anos, embora a maioria tivesse só uma dor leve nessa altura (Hansen e colegas, 2018). Nenhum programa de exercícios pode prometer um prazo. [Quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) traz a evidência em mais detalhes.',
    },
    {
      q: 'O que evitar quando o calcanhar dói de manhã?',
      cites: [CITE.guideline],
      a: 'Evite andar descalço em piso duro logo depois de acordar, e não pule o alongamento antes de ficar em pé. A fáscia está mais rígida nesse momento, então pisar em piso frio ou de madeira sem nenhum amortecimento é um gatilho comum para a dor forte nos primeiros passos. Calce um sapato com bom suporte ou um chinelo firme antes de sair do quarto, e alongue ainda sentado na cama.',
    },
    {
      q: 'O que fazer em casa para dor no calcanhar de manhã?',
      cites: [CITE.guideline],
      a: 'Os cuidados caseiros para dor no calcanhar de manhã são alongamento, gelo e calçados com bom suporte, feitos todo dia e não uma vez só. Alongue a fáscia e a panturrilha antes de ficar em pé, e depois calce um sapato com bom suporte antes de andar em piso duro. Rolar a sola sobre uma garrafa de água congelada por alguns minutos alivia a rigidez, mas não substitui procurar um profissional de saúde se a dor não melhorar.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, principalmente se outras articulações estão rígidas ou inchadas',
      'a dor começou depois de uma lesão ou de uma queda, o que pode indicar uma ruptura da fáscia plantar',
      'você não consegue apoiar o pé, ou está mancando',
      'apertar as laterais do calcanhar reproduz a dor, o que pode indicar uma fratura por estresse',
      'ela vem com dormência, formigamento ou queimação, o que pode indicar um nervo comprimido',
      'o calcanhar está vermelho, quente ao toque, ou você tem febre',
      'ela acorda você à noite ou aparece em repouso, e não só nos primeiros passos',
      'não melhorou depois de várias semanas de alongamento diário e menos carga',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa lembrar os alongamentos, as doses nem quando passar para algo mais difícil. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é uma manhã melhor: dor em 1 de 10 ou menos por 14\u00A0dias seguidos. Toda manhã você anota a sua dor antes do primeiro passo, e a sessão do dia se ajusta a essa nota.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a meta da manhã for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver o que está mudando.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor da manhã é aguda, está piorando, ou aparece nos dois calcanhares com outras articulações envolvidas, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor no calcanhar ao acordar',
  campaign: 'guide-morning-heel-pt',
};
