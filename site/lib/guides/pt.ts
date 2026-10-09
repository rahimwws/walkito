import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Translated from `en.ts` (2026-10-08), written around the Brazilian
 * Portuguese queries: «exercícios para pé chato», «dor no arco do pé»,
 * «fascite plantar», «dor no calcanhar», «esporão». Informal «você».
 * Figures, doses, grades and qualifiers are identical to `en.ts`. Numbers and
 * units are joined with a non-breaking space. Pages that exist only in English
 * keep their English path and say «(em inglês)» after the link.
 *
 * The plan has no fixed length, so nothing here describes it in weeks. Every
 * number about the plan is read from `PROGRAM`.
 */

/** `3, 5 ou 7`: the plan's options as a Portuguese list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} ou ${options[options.length - 1]}`;
}

const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why the site spells out its signs.
 */
const RED_FLAGS = {
  h2: 'Procure primeiro um profissional de saúde se',
  bullets: [
    'a dor começou depois de uma lesão ou de uma queda',
    'você não consegue apoiar o pé, ou está mancando',
    'ela vem com dormência, formigamento, queimação, inchaço ou calor',
    'o calcanhar está vermelho, ou você tem febre ou se sente mal',
    'ela acorda você à noite',
    'é uma dor aguda, ou está piorando mesmo depois de reduzir a carga',
    'apertar as laterais do calcanhar dói, ou a dor aumenta durante as corridas depois que você aumentou a quilometragem; as duas coisas podem ser sinais de uma fratura por estresse',
    'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    'os dois calcanhares doem e outras articulações estão inchadas ou rígidas',
    'não melhorou depois de várias semanas de exercício e menos carga',
    'um arco caiu de repente na vida adulta',
  ],
} as const;

export const FLAT_FEET_PT: Guide = {
  lang: 'pt',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercícios para pé chato, arco caído e dor no arco',
  description:
    'Exercícios para pé chato flexível e arco caído: doses, frequência, o que você deve sentir, o que os estudos mostraram e onde entra a dor no arco.',
  h1: 'Exercícios para pé chato, arco caído e dor no arco do pé',
  lede: 'No fim do dia seus pés estão cansados e os arcos doem. Quando você fica em pé, os pés parecem virar para dentro e os arcos afundam em direção ao chão. Talvez já tenham dito que pé chato é só o jeito que você é e que não vale a pena pensar nisso. Querer fazer alguma coisa faz sentido, e existe pesquisa de verdade sobre treinar o arco.',
  intro: [
    'Comece com um teste: veja se o seu pé chato é flexível, ou seja, se o arco volta quando você levanta o pé. No pé chato flexível, um ensaio com 52\u00A0pessoas mostrou que seis semanas de exercícios de pé curto, trabalho de tornozelo, fortalecimento de quadril e alongamentos, feitos juntos, mudaram o formato do arco mais do que em um grupo controle. A evidência sobre o pé curto sozinho é mais fraca. Uma revisão de 2024 não encontrou mudança clara no geral, e viu mudança em uma medida do arco só em programas com mais de seis semanas. Os dois estudos mediram o formato do arco, não a dor. Se a sua dor é perto do calcanhar, a pesquisa sobre dor no calcanhar é o melhor guia.',
  ],
  takeaways: [
    'O ensaio randomizado desta página foi feito com pé chato flexível, em que o arco volta quando o pé sai do chão (Brijwasi e Borkar, 2023).',
    'Nesse ensaio com 52\u00A0pessoas, seis semanas de pé curto, tornozelo, quadril e alongamentos mudaram o formato do arco mais do que no grupo controle (Brijwasi e Borkar, 2023).',
    'Uma revisão de 2024 sobre o treino de pé curto não encontrou mudança clara no geral, e encontrou melhora em uma medida do arco só em programas com mais de seis semanas (Cheng e colegas, 2024).',
    'Um pé chato rígido, que continua plano mesmo fora do chão, é estrutural, e o exercício não vai mudar o formato dele.',
    'Esses estudos mediram o formato do arco, não a dor. Para dor no calcanhar, a diretriz de 2023 dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A, e ao treino de força um B.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Como saber se o pé chato é flexível ou rígido?',
      figure: { id: 'arches', caption: 'Os mesmos ossos do pé com pé chato, arco típico e arco alto, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco apoiado no chão, um arco típico com um pequeno espaço embaixo e um arco alto com um grande espaço sob o meio do pé.' },
      paragraphs: [
        'Dá para saber se o seu pé chato é flexível ou rígido com um teste de poucos segundos. Isso importa porque o ensaio desta página foi feito com pé chato flexível, e o exercício não vai mudar o formato de um pé rígido. A revisão de 2024 juntou estudos sobre pé chato em geral. O Walkito não avalia o seu tipo de pé, então esse teste é com você:',
      ],
      bullets: [
        'Fique em pé descalço e olhe a parte de dentro do pé. No pé chato, o arco fica baixo ou encosta no chão.',
        'Tire esse pé do chão, ou suba na ponta dos pés, e olhe de novo.',
        'Se o arco volta, o pé chato é **flexível**. Os exercícios abaixo são para esse tipo.',
        'Se o arco continua plano mesmo fora do chão, o pé é **rígido**. É uma questão estrutural que o exercício não vai mudar. Deixe de lado a meta de sustentar o arco e procure um profissional de saúde antes de começar um programa.',
        '“Arco caído” costuma ser só outro nome para pé chato. Mas se um arco caiu **de repente**, de um lado só, na vida adulta, procure um profissional de saúde antes de exercitá-lo, seja qual for o resultado do teste.',
      ],
    },
    {
      h2: 'Os exercícios para pé chato, com doses iniciais',
      paragraphs: [
        'Os exercícios para pé chato no Walkito começam com puxar a toalha com os dedos e a elevação do dedão, e depois sobem por três versões do pé curto. Abrir os dedos, a inversão com faixa, o equilíbrio em uma perna, a abdução de quadril e os alongamentos de panturrilha completam o resto. Essas são as doses iniciais do Walkito, não uma prescrição. Faça descalço. [Como estes guias são escritos](/pt/sobre-walkito/).',
        'O pé curto é a base do trabalho do arco. Você encurta o pé puxando a parte da frente do pé em direção ao calcanhar, para o arco subir, sem dobrar os dedos. Pé curto, fortalecimento de quadril e alongamentos são o que o ensaio testou. Puxar a toalha, a elevação do dedão, abrir os dedos, a inversão com faixa e o equilíbrio em uma perna são acréscimos do próprio Walkito.',
        'Você faz um exercício de arco por vez, o do seu nível. O Walkito sobe você um degrau quando as duas últimas sessões com ele pareceram fáceis. Enquanto o arco for a sua meta, toda sessão tem um exercício de arco, e os outros se revezam. Alguns exercícios precisam de uma toalha ou de uma faixa elástica. O Walkito pergunta o que você tem e deixa de fora o que você não tem. Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje. É nesse ponto que o Walkito encerra uma sessão.',
      ],
      table: {
        head: ['Exercício', 'Dose', 'Com que frequência', 'O que você deve sentir', 'Pare se'],
        rows: [
          ['Puxar a toalha com os dedos', '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé', 'Toda sessão, enquanto for o seu nível', 'Os músculos pequenos embaixo do arco trabalhando', 'A dor chegar a 6/10'],
          ['Elevação do dedão', '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé', 'Toda sessão, enquanto for o seu nível', 'O dedão se movendo sozinho', 'A dor chegar a 6/10'],
          ['Pé curto, sentado', '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé', 'Toda sessão, enquanto for o seu nível', 'O arco subindo, com os dedos relaxados', 'A dor chegar a 6/10'],
          ['Pé curto, em pé', '3\u00A0séries de 8, segure 5\u00A0segundos, os dois pés', 'Toda sessão, enquanto for o seu nível', 'O arco trabalhando enquanto sustenta o seu peso', 'A dor chegar a 6/10'],
          ['Pé curto, em uma perna', '3\u00A0séries de 10, segure 5\u00A0segundos, cada pé', 'Toda sessão, enquanto for o seu nível', 'Trabalho mais forte no arco, com o dedão pressionando o chão', 'A dor chegar a 6/10'],
          ['Abrir os dedos', '3\u00A0séries de 10, cada pé', 'Dias de força, revezando com a inversão com faixa', 'Esforço nos músculos pequenos do pé', 'A dor chegar a 6/10'],
          ['Inversão com faixa', '3\u00A0séries de 12, cada pé', 'Dias de força, depois de seis sessões de pé curto em pé', 'Trabalho na parte de dentro do pé e do tornozelo', 'A dor chegar a 6/10'],
          ['Equilíbrio em uma perna', '3\u00A0vezes de 20\u00A0segundos, cada perna', 'Dias de equilíbrio', 'O pé e o tornozelo fazendo pequenas correções', 'A dor chegar a 6/10'],
          ['Abdução de quadril', '3\u00A0séries de 10, cada perna, em pé, com faixa', 'Dias de força, quando a meta de esquerda e direita está no seu plano', 'Trabalho na parte de fora do quadril', 'A dor chegar a 6/10'],
          ['Alongamento de panturrilha e sóleo', '2\u00A0vezes de 30\u00A0segundos em cada alongamento, cada perna', 'Quase todas as sessões, revezando com os outros alongamentos', 'Um alongamento na panturrilha, e depois mais embaixo, perto do calcanhar', 'A dor chegar a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Puxar a toalha com os dedos',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'Os músculos pequenos embaixo do arco trabalhando',
          how: 'Sente-se com uma toalha esticada no chão embaixo do pé. Puxe a toalha com os dedos e mantenha o calcanhar no chão. Esse exercício acorda os músculos pequenos embaixo do arco.',
          image: 'Exercício: puxar a toalha com os dedos',
          media: 'towel_scrunch',
          caption: 'Puxar a toalha: puxe a toalha com os dedos, o calcanhar fica no chão',
          alt: 'Uma figura sentada puxando uma toalha com os dedos de um pé',
        },
        {
          name: 'Elevação do dedão',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O dedão se movendo sozinho',
          how: 'Sente-se com os pés apoiados. Levante só o dedão e segure. Os outros quatro dedos ficam apoiados no chão. A elevação do dedão ensina o dedão a se mover sozinho, que é o primeiro passo para ativar o arco.',
          image: 'Exercício: elevação do dedão',
          media: 'big_toe_lift',
          caption: 'Elevação do dedão: levante só o dedão, os outros quatro ficam no chão',
          alt: 'Um pé no chão levantando só o dedão, com o arco destacado',
        },
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023. Sozinho, o pé curto tem resultados mais fracos.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O arco subindo',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir, e segure. Não dobre os dedos. Dobrar os dedos é o erro mais comum neste exercício.',
          image: 'Exercício: pé curto, sentado',
          media: 'short_foot_seated',
          caption: 'Pé curto, sentado: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma perna sentada com o pé apoiado no chão, os músculos do arco destacados enquanto o arco sobe',
        },
        {
          name: 'Pé curto, em pé',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023. Sozinho, o pé curto tem resultados mais fracos.' },
          dose: '3\u00A0séries de 8, segure 5\u00A0segundos, os dois pés',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O arco trabalhando com o seu peso',
          how: 'Fique em pé com o peso nos dois pés e faça o mesmo movimento. Os dedos ficam esticados e apoiados. Só o arco sobe. É o mesmo músculo da versão sentada, agora sustentando o seu peso.',
          image: 'Exercício: pé curto, em pé',
          media: 'short_foot_double',
          caption: 'Pé curto, em pé: dedos esticados e apoiados, só o arco sobe',
          alt: 'Duas pernas em pé, com o arco e a panturrilha de uma perna destacados enquanto o arco sobe',
        },
        {
          name: 'Pé curto, em uma perna',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023. Sozinho, o pé curto tem resultados mais fracos.' },
          dose: '3\u00A0séries de 10, segure 5\u00A0segundos, cada pé',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'Trabalho mais forte no arco',
          how: 'Fique em pé em um pé só e suba o arco. Mantenha o dedão no chão. Se ele levantar, o pé está compensando. Trabalhar um pé de cada vez é onde o lado mais fraco aparece.',
          image: 'Exercício: pé curto, em uma perna',
          media: 'short_foot_single',
          caption: 'Pé curto, em uma perna: suba o arco e mantenha o dedão no chão',
          alt: 'Um pé apoiado no chão, com o arco destacado enquanto sobe',
        },
        {
          name: 'Abrir os dedos',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 10, cada pé',
          often: 'Dias de força',
          feel: 'Esforço nos músculos pequenos do pé',
          how: 'Abra os dedos o máximo que conseguir e segure. Dedos que conseguem se abrir dividem a carga com o arco. Levantar os dedos não é o objetivo.',
          image: 'Exercício: abrir os dedos',
          media: 'toe_spread',
          caption: 'Abrir os dedos: abra os dedos o máximo que der, e segure',
          alt: 'Um pé visto de frente, com os músculos pequenos entre os dedos destacados enquanto eles se abrem',
        },
        {
          name: 'Inversão com faixa',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0séries de 12, cada pé',
          often: 'Dias de força',
          feel: 'Trabalho na parte de dentro do pé e do tornozelo',
          how: 'Sente-se com uma faixa elástica em volta do pé e vire o pé para dentro contra a faixa. Mexa o pé, não a perna. O joelho fica parado. O Walkito só coloca a inversão com faixa depois de seis sessões de pé curto em pé, para que os músculos do próprio arco venham primeiro.',
          image: 'Exercício: inversão com faixa',
          media: 'band_inversion',
          caption: 'Inversão com faixa: vire o pé para dentro contra a faixa, o joelho fica parado',
          alt: 'Uma perna com uma faixa elástica em volta do pé, virando o pé para dentro, com a parte de baixo da perna destacada',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte do programa testado nos estudos desta página.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          how: 'Fique em pé em um pé só e olhe para um ponto fixo. Deixe o pé balançar. É para balançar mesmo, porque esse balanço é o pé fazendo o equilíbrio.',
          image: 'Exercício: equilíbrio em uma perna',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
        {
          name: 'Abdução de quadril',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023.' },
          dose: '3\u00A0séries de 10, cada perna',
          often: 'Dias de força',
          feel: 'Trabalho na parte de fora do quadril',
          how: 'Fique em pé com uma faixa elástica e levante uma perna para o lado contra ela. Empurre pelo calcanhar, não pelos dedos. Um quadril que cede joga a carga no arco.',
          image: 'Exercício: abdução de quadril',
          media: 'hip_abduction',
          caption: 'Abdução de quadril: levante uma perna para o lado contra a faixa',
          alt: 'Uma figura em pé com uma faixa em volta das duas pernas levantando uma perna para o lado, com a parte de fora do quadril destacada',
        },
        {
          name: 'Alongamento de panturrilha e sóleo',
          evidence: { level: 'moderate', why: 'Parte do programa que melhorou o formato do arco em um ensaio de 2023. Esse ensaio mediu o formato do arco, não a dor.' },
          dose: '2\u00A0vezes de 30\u00A0segundos em cada alongamento, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na panturrilha, depois perto do calcanhar',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar no chão e o quadril para a frente, e sinta o alongamento na panturrilha. Depois dobre o joelho de trás até sentir mais embaixo, perto do calcanhar. Esse é o sóleo, o músculo mais profundo da panturrilha.',
          image: 'Exercício: alongamento de panturrilha e sóleo',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: mãos na parede, perna de trás esticada, calcanhar no chão',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
      ],
    },
    {
      h2: 'Em quanto tempo os exercícios para pé chato mudam o arco?',
      paragraphs: [
        'Na pesquisa até agora, os exercícios para pé chato mudaram o arco depois de seis semanas ou mais, e só no pé chato flexível. Em um ensaio com 52\u00A0pessoas com pé chato **flexível**, um programa de seis semanas de exercícios de pé curto, trabalho de tornozelo, fortalecimento de quadril e alongamentos mudou duas medidas do formato do arco mais do que no grupo controle.',
        'A evidência sobre o treino de pé curto sozinho é mais fraca. Uma revisão de 2024 juntou estudos de treino de pé curto em pé chato em geral. No geral, não encontrou diferença clara em relação aos grupos controle no formato do arco ou na postura do pé. Só os programas com mais de seis semanas melhoraram o quanto o arco afunda com o seu peso, e os autores dizem que são necessários estudos maiores. Então conte com pelo menos seis semanas, e mais se você fizer o pé curto sozinho.',
        `Esse é um dos motivos pelos quais o plano do Walkito não tem data para acabar. A meta do arco, sustentar o arco por ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, fica no plano até você alcançá-la, leve as semanas que levar. A sustentação do arco é testada a cada ${PROGRAM.testEveryDays}\u00A0dias até você alcançar a primeira meta, e depois a cada ${PROGRAM.testEveryDaysAfterGoal}, para você ver se ela está mudando. Os ensaios estão resumidos na [página de evidências](/science/) (em inglês).`,
      ],
      sourceNote:
        'Brijwasi e Borkar: a queda do navicular (o quanto o osso navicular, na parte de dentro do arco, desce quando você fica em pé) melhorou 0,4\u00A0cm, e o ângulo do arco 16\u00A0graus, mais do que no grupo controle. Cheng e colegas: sem diferença significativa no geral na queda do navicular nem no Foot Posture Index; a queda do navicular melhorou de forma significativa só no subgrupo de programas com mais de seis semanas.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Exercícios para pé chato ajudam na dor no arco?',
      paragraphs: [
        'Nenhum estudo desta página mostra que os exercícios para pé chato aliviam a dor no arco, porque nenhum deles mediu isso. O ensaio e a revisão mediram o formato do arco. Eles mostram que o arco pode ser treinado. Não são evidência de que os mesmos exercícios aliviam um arco dolorido.',
        'A dor no calcanhar, e às vezes ao longo do arco, pode vir da fáscia plantar, a faixa de tecido que corre pela sola do pé. Se a sua dor é perto do calcanhar, a diretriz de 2023 para dor no calcanhar é o melhor guia. Para dor no calcanhar embaixo do pé, ela dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, **A**, e ao treino de força um **B**. Esses exercícios estão em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/).',
        'O Walkito pode trabalhar as duas coisas ao mesmo tempo, como metas separadas: manhãs sem dor para a dor, e sustentar o arco para o arco. Como as duas dividem a semana está na [página do plano](/program/) (em inglês).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O que acontece quando você alcança a meta do arco?',
      paragraphs: [
        `Quando você alcança a meta do arco, sustentar o arco por ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, o Walkito mantém o trabalho do arco no plano com uma dose menor. A meta passa para manutenção, e a próxima meta entra no lugar. Alcançar a meta não significa que o trabalho do arco acaba.`,
        `Os testes também continuam, a cada ${PROGRAM.testEveryDaysAfterGoal}\u00A0dias depois que você alcança a primeira meta. Se a sustentação do arco começar a cair, você vê nos números em vez de adivinhar.`,
        'Se o seu calcanhar também dói, o calcanhar tem os próprios exercícios e a própria meta: veja [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/). Dúvidas sobre o app estão respondidas nas [perguntas frequentes](/faq/) (em inglês).',
      ],
    },
  ],
  faq: [
    {
      q: 'Exercício pode mudar o pé chato?',
      a: 'O exercício pode mudar o formato do arco no pé chato flexível, mas não no rígido. Em um ensaio com 52\u00A0pessoas cujo arco voltava fora do chão, seis semanas de pé curto, tornozelo, quadril e alongamentos mudaram as medidas do arco mais do que em um grupo controle. Um pé que continua plano mesmo quando levantado é estrutural, e o exercício não vai mudar o formato dele.',
    },
    {
      q: 'Quanto tempo os exercícios para pé chato levam para funcionar?',
      a: `Conte com seis semanas ou mais. Em um ensaio com pé chato flexível, um programa de seis semanas de pé curto, quadril e alongamentos mudou as medidas do arco. Para o pé curto sozinho, uma revisão de 2024 não encontrou mudança clara no geral, e encontrou melhora só em programas com mais de seis semanas. O Walkito mantém a meta de sustentar o arco por ${PROGRAM.goals.archHoldSeconds}\u00A0segundos até você alcançá-la.`,
    },
    {
      q: 'O que ajuda na dor embaixo do arco do pé?',
      a: 'Não há evidência direta aqui, porque nenhum estudo citado nesta página mediu dor no arco. Se a dor é perto do calcanhar e ligada à fáscia plantar, a diretriz de 2023 para dor no calcanhar dá grau A ao alongamento da fáscia plantar e da panturrilha e grau B ao treino de força. Os exercícios de arco desta página treinam o formato do arco, não a dor. Veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
    },
    {
      q: 'Pé chato pode causar dor nas costas?',
      a: 'A evidência é fraca e mista, não um sim claro. O maior estudo sobre isso, o [Framingham Foot Study](https://doi.org/10.1093/rheumatology/ket298), com cerca de 1.900\u00A0adultos, não encontrou relação entre a postura de pé chato e dor lombar. Encontrou uma pequena relação, em mulheres, entre um pé que vira para dentro ao caminhar e dor lombar, e nenhuma em homens. Então o pé chato sozinho explica mal a dor nas costas. Se você tem os dois, trate como dois problemas separados, e procure um profissional de saúde por causa das costas.',
      cites: [CITE.menz],
    },
    {
      q: 'Qual a diferença entre arco caído e pé chato?',
      a: 'Normalmente nenhuma: “arco caído” é um nome comum para pé chato. A maioria dos pés chatos é flexível e acompanha a pessoa a vida toda, e o arco volta quando o pé sai do chão. Às vezes a expressão quer dizer outra coisa: o [pé plano adquirido do adulto](https://doi.org/10.2174/1874325001711010714), muitas vezes por enfraquecimento do tendão tibial posterior, o tendão que sustenta o arco. Ele costuma aparecer na vida adulta e pode trazer dor ou inchaço na parte de dentro do tornozelo. Se um arco caiu na vida adulta, procure um profissional de saúde antes de exercitá-lo.',
      cites: [CITE.ling],
    },
    {
      q: 'Quais exercícios fortalecem o arco do pé?',
      a: 'O exercício de pé curto é o principal: você sobe o arco puxando a parte da frente do pé em direção ao calcanhar, sem dobrar os dedos. O Walkito começa com ele sentado, em 3\u00A0séries de 8 segurando 5\u00A0segundos, depois em pé, depois em uma perna. Puxar a toalha, a elevação do dedão, abrir os dedos e a inversão com faixa treinam os músculos pequenos em volta do arco. Tudo isso é para pé chato flexível. Passo a passo: [exercício de pé curto](/pt/exercicios/pe-curto/).',
    },
    {
      q: 'Com que frequência devo fazer exercícios para pé chato?',
      a: `Faça o pé curto em todo dia de treino enquanto o arco for a sua meta. No Walkito você escolhe ${DAYS} dias de treino por semana, e enquanto o arco for o foco da semana, toda sessão inclui um exercício de arco, um nível mais difícil de cada vez. A sustentação do arco é testada de novo a cada ${PROGRAM.testEveryDays}\u00A0dias, e depois a cada ${PROGRAM.testEveryDaysAfterGoal} após a sua primeira meta.`,
    },
    {
      q: 'Quando devo ir ao médico por causa do pé chato?',
      a: 'Procure um profissional de saúde antes de começar se o arco continua plano quando o pé está fora do chão, ou se um arco caiu de repente na vida adulta. Vale o mesmo para dor que começou depois de uma lesão, que acorda você à noite, ou que vem com dormência, formigamento, inchaço ou calor. Dor aguda ou que está piorando precisa de um profissional de saúde, não de mais exercício.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'o arco continua plano quando o pé está fora do chão'],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: `Você não precisa descobrir a ordem, as doses nem quando passar para uma versão mais difícil. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para um pé chato flexível, essa meta é sustentar o arco: manter o arco erguido por ${PROGRAM.goals.archHoldSeconds}\u00A0segundos. Se você também tem dor, as manhãs sem dor vêm primeiro.`,
    more: [
      `Você escolhe ${DAYS} dias por semana e sessões de ${MINUTES}\u00A0minutos. A cada ${PROGRAM.testEveryDays}\u00A0dias (e depois a cada ${PROGRAM.testEveryDaysAfterGoal} quando a primeira meta for alcançada), um teste curto mede a sustentação do arco, a resistência da panturrilha e o equilíbrio, para você ver se o trabalho do arco está fazendo efeito.`,
    ],
    cta: `Comece com ${PROGRAM.sessionMinutes[0]}\u00A0minutos por dia.`,
  },
  crumb: 'Exercícios para pé chato',
  campaign: 'guide-flat-feet-pt',
};

export const HEEL_PAIN_PT: Guide = {
  lang: 'pt',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercícios para fascite plantar e dor no calcanhar',
  description:
    'Oito exercícios e alongamentos para fascite plantar e dor no calcanhar: doses, o que evitar, melhor hora de alongar e graus da diretriz de 2023.',
  h1: 'Exercícios e alongamentos para fascite plantar e dor no calcanhar',
  lede: 'Os primeiros passos ao sair da cama são a pior parte do dia. Uma fisgada forte bem no calcanhar, antes mesmo do café. Melhora quando você começa a se mexer, e volta depois que você fica um tempo sentado. Esse padrão tem nome, [fascite plantar](/pt/fascite-plantar/), e a diretriz clínica de 2023 para dor no calcanhar diz que ela é a causa mais reconhecida de dor no calcanhar embaixo do pé.',
  intro: [
    'Também é confuso pesquisar sobre isso, porque cada um diz uma coisa. A evidência aponta para duas coisas: alongar a fáscia plantar e a panturrilha, e fazer treino de força para a panturrilha. Uma diretriz clínica de 2023 dá ao alongamento o grau máximo, A, e ao treino de força um B. Em um ensaio com 48\u00A0pessoas, todas usando palmilhas, elevações de calcanhar lentas com uma toalha embaixo dos dedos ajudaram mais rápido do que só alongar. Aos doze meses, os dois grupos estavam iguais. Fazer as duas coisas é o que a diretriz apoia.',
  ],
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar do Journal of Orthopaedic & Sports Physical Therapy dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A, e ao treino de força um B.',
    'Em um ensaio com 48\u00A0pessoas, elevações de calcanhar com carga alta aliviaram a dor e melhoraram a função no dia a dia mais rápido que o alongamento, e aos doze meses os dois grupos estavam iguais (Rathleff e colegas, 2015).',
    'Para dor no calcanhar ao correr, a mesma diretriz recomenda mudar a carga em vez de parar tudo, uma recomendação com grau E porque se baseia em teoria, não em ensaios.',
    'Procure primeiro um profissional de saúde se a dor começou depois de uma lesão, vem com dormência ou inchaço, acorda você à noite ou dói quando você aperta o calcanhar.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Os exercícios para fascite plantar, com doses iniciais',
      figure: { id: 'plantar-fascia', caption: 'A fáscia plantar vai do osso do calcanhar até os dedos. A dor da fascite plantar costuma começar onde ela se prende ao calcanhar.', alt: 'Sola de um pé com a fáscia plantar em faixas brancas que se abrem do osso do calcanhar até a base dos dedos, e uma mancha vermelha no calcanhar onde a dor costuma começar.' },
      paragraphs: [
        'Os exercícios para fascite plantar no Walkito são alongamentos da fáscia plantar e da panturrilha, treino de força para a panturrilha que sobe aos poucos, e rolar o pé na bolinha. Essas são as doses iniciais do Walkito, não uma prescrição. Um resumo de uma página está nas [fichas de exercícios para imprimir](/printable-exercise-sheets/) (em inglês). [Como estes guias são escritos](/pt/sobre-walkito/).',
        'A ordem importa. Enquanto a dor for a sua meta, o Walkito mantém o trabalho de panturrilha leve: primeiro elevação de calcanhar sentado, depois elevação de calcanhar com os dois pés, depois uma elevação de calcanhar sustentada, um degrau de cada vez. Você sobe um degrau quando as duas últimas sessões com ele pareceram fáceis. A [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/) é a que mais põe carga na fáscia plantar, então ela só entra quando a dor da manhã já diminuiu e a meta passa para a força da panturrilha. Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje. É nesse ponto que o Walkito encerra uma sessão.',
      ],
      table: {
        head: ['Exercício', 'Dose', 'Com que frequência', 'O que você deve sentir', 'Pare se'],
        rows: [
          ['Alongamento da fáscia plantar', '2\u00A0vezes de 30\u00A0segundos, cada pé', 'Quase todas as sessões, revezando com os alongamentos de panturrilha', 'Um alongamento ao longo do arco, não na panturrilha', 'A dor chegar a 6/10'],
          ['Alongamento de panturrilha', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões, revezando com os outros alongamentos', 'Um alongamento na panturrilha da perna de trás esticada', 'A dor chegar a 6/10'],
          ['Alongamento do sóleo', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões, revezando com os outros alongamentos', 'Um alongamento na parte baixa da panturrilha, perto do calcanhar', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar sentado', '3\u00A0séries de 10, os dois pés', 'Dias de força, 3 por semana, nunca dois seguidos', 'Trabalho leve nas panturrilhas, quase sem carga no calcanhar', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar com os dois pés', '3\u00A0séries de 10, os dois pés', 'Dias de força, quando a elevação sentado parecer fácil', 'As panturrilhas trabalhando, com os dois pés dividindo a carga', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar sustentada', '3\u00A0vezes de 20\u00A0segundos, os dois pés', 'Dias de força, o degrau seguinte', 'As panturrilhas trabalhando para ficar paradas lá em cima', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar com toalha', '4\u00A0séries de 10, cada perna, com peso extra', 'Dias de força, quando a meta passa para a força da panturrilha', 'Trabalho pesado na panturrilha e um puxão embaixo do arco', 'A dor chegar a 6/10'],
          ['Rolar o pé na bolinha', '1\u00A0minuto', 'Dias de recuperação', 'Pressão firme embaixo do pé, nunca uma careta de dor', 'A dor chegar a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar no chão e o quadril para a frente. Uma panturrilha tensa puxa o calcanhar o dia todo, então esse alongamento importa mesmo que você sinta mais em cima.',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentado',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força o grau B. Este degrau não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'Trabalho leve nas panturrilhas',
          how: 'Sente-se com os pés apoiados e suba os calcanhares empurrando pela parte da frente dos pés. As mãos nos joelhos dão resistência. A elevação sentado trabalha a panturrilha quase sem carga no calcanhar.',
          image: 'Exercício: elevação de calcanhar sentado',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentado: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força o grau B. Este degrau não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga enquanto a panturrilha acorda.',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar sustentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força o grau B. Este degrau não foi testado sozinho.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe afundar. Segurar lá em cima põe carga no tendão sem o quique.',
          image: 'Exercício: elevação de calcanhar sustentada',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: { level: 'moderate', why: 'Esta é a rotina de um ensaio com 48\u00A0pessoas, e a diretriz de 2023 dá ao treino de força o grau B.' },
          dose: '4\u00A0séries de 10, cada perna, com peso extra',
          often: 'Dias de força',
          feel: 'Trabalho pesado na panturrilha',
          how: 'Fique em um pé só em um degrau, com uma toalha enrolada embaixo dos dedos. Leve três segundos para subir, segure dois lá em cima e leve três segundos para descer. Nesse nível o Walkito acrescenta peso, como uma mochila. É a toalha que faz esse exercício trabalhar a fáscia plantar, e não só a panturrilha.',
          image: 'Exercício: elevação de calcanhar com toalha',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos para subir, dois lá em cima, três para descer',
          alt: 'Uma figura subindo na ponta do pé em um degrau com uma toalha enrolada, com as panturrilhas destacadas',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Está aqui para dar alívio entre as sessões.' },
          dose: '1\u00A0minuto',
          often: 'Dias de recuperação',
          feel: 'Pressão firme embaixo do pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se estiver fazendo careta, alivie. Rolar acalma o tecido depois que ele trabalhou. Sem bolinha? A massagem na sola usa movimentos firmes com o polegar, do calcanhar até os dedos.',
          image: 'Exercício: rolar o pé na bolinha',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
    },
    {
      h2: 'Quais exercícios evitar com fascite plantar?',
      paragraphs: [
        'Evite atividades de alto impacto que aumentam de repente a carga no calcanhar enquanto a dor está em crise, e evite andar descalço em piso duro logo cedo.',
        'Saltos, tiros de corrida e pliometria jogam um pico de força repentino na fáscia plantar. Quando o tecido está irritado, esse pico pode fazer você voltar atrás. A diretriz de 2023 recomenda ajustar a carga nos pés no trabalho, no esporte e no dia a dia, uma recomendação com grau E. Ela não proíbe exercícios específicos. A questão é se a carga é maior do que o tecido consegue recuperar de um dia para o outro. Andar descalço em piso duro é um gatilho comum porque a fáscia está mais rígida depois do repouso e uma superfície dura não amortece nada.',
        'Mais duas coisas para observar. Rolar uma bolinha embaixo do pé deve dar uma sensação firme, não aguda. Se doer, alivie ou pule. E se você também tem dor no tendão de Aquiles, perto da parte de trás do calcanhar, evite descer o calcanhar fundo da beira de um degrau, porque essa descida pode sobrecarregar a inserção do Aquiles. Faça a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/) no chão plano até um profissional de saúde liberar o lado do Aquiles.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Qual a melhor hora para fazer os alongamentos para fascite plantar?',
      paragraphs: [
        'Antes dos primeiros passos da manhã e antes de levantar depois de ficar muito tempo sentado. São os dois momentos em que a fáscia plantar está mais rígida e com mais chance de doer.',
        'Um ensaio de 2003 com 82\u00A0pessoas com fascite plantar crônica testou um alongamento específico da fáscia plantar feito antes de apoiar o peso. Os pacientes seguravam o alongamento por 10\u00A0segundos, repetiam 10\u00A0vezes, três vezes por dia, com a primeira série antes do primeiro passo da manhã. Com oito semanas, o grupo que fazia esse alongamento tinha bem menos dor nos primeiros passos da manhã do que o grupo que fazia só alongamento de panturrilha. Em dois anos, depois que todos os pacientes passaram a fazer o mesmo alongamento, os dois grupos tinham melhorado.',
        'Nesta página, o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) começa na beira da cama, antes de o pé tocar o chão. O [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) vem depois. O Walkito coloca o primeiro alongamento antes de você ficar em pé pelo mesmo motivo do ensaio: alongar antes de o tecido receber carga é mais suave do que alongar depois.',
      ],
      cites: [CITE.digiovanni2003],
    },
    {
      h2: 'O que ajuda na dor no calcanhar pela manhã?',
      paragraphs: [
        'A dor no calcanhar nos primeiros passos da manhã é o padrão mais ligado à fascite plantar. Muitas vezes ela melhora quando você começa a se mexer, e volta depois que você fica um tempo sentado.',
        'Duas coisas desta página miram nela. O alongamento da fáscia plantar é feito **antes de você levantar**, na beira da cama, com os dedos puxados para trás, para que os primeiros passos não sejam o seu primeiro alongamento. E a diretriz de 2023 dá às talas noturnas, usadas por 1 a 3\u00A0meses, um **A** para quem continua tendo dor nos primeiros passos da manhã. Talas noturnas são algo para conversar com um profissional de saúde. O Walkito não fornece talas.',
        'O Walkito pergunta todo dia sobre a sua dor da manhã pelo mesmo motivo. A dor da manhã é o sinal mais claro de como o seu pé lidou com o dia anterior, e ela decide o quanto a sessão de hoje vai pedir de você. Mais sobre o que causa essa dor está em [dor no calcanhar pela manhã](/pt/dor-no-calcanhar-ao-acordar/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Descansar ou continuar correndo com dor no calcanhar?',
      paragraphs: [
        'Se a dor no calcanhar da fascite plantar piora quando você corre, mude a carga em vez de parar tudo. A diretriz de 2023 recomenda aprender a ajustar a carga nos pés no trabalho, no esporte e no dia a dia. Essa recomendação tem grau E, o que significa que se baseia em teoria e não em ensaios. Então mantenha os alongamentos todo dia, e diminua o que deixa o calcanhar pior.',
        'Numa manhã ruim, mantenha os alongamentos e tire as elevações de calcanhar naquele dia. A manhã seguinte mostra como foi. Se os seus primeiros passos estão claramente piores depois de uma corrida, essa corrida foi mais do que o calcanhar aguentava. O Walkito lê isso do mesmo jeito. Um dia puxado em pé transforma a próxima sessão de força em uma sessão de recuperação mais leve, e uma manhã com dor deixa a sessão mais curta sem cancelá-la.',
        'Pare e procure um profissional de saúde se correr dói de forma aguda ou se a dor piora semana após semana. Vale o mesmo para dor que aumenta durante as corridas depois que você aumentou a quilometragem, ou dor quando você aperta as laterais do calcanhar. As duas podem ser sinais de uma fratura por estresse, uma das outras causas de dor no calcanhar que a diretriz cita.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Força ou alongamento: o que é melhor para fascite plantar?',
      paragraphs: [
        'Treino de força e alongamento ajudam na fascite plantar, e o treino de força ajuda mais cedo.',
        'Em um ensaio com 48\u00A0pessoas com fascite plantar confirmada por ultrassom, todos usaram palmilhas. Um grupo acrescentou elevações de calcanhar com carga alta dia sim, dia não. O outro alongou a fáscia plantar todo dia. Aos três meses, o grupo das elevações estava claramente à frente em dor e em função no dia a dia. Aos doze meses, os dois grupos estavam iguais. O treino de força adiantou a melhora. Não a deixou maior.',
        'A diretriz apoia fazer os dois. O raciocínio estudo por estudo está na [página de evidências](/science/) (em inglês).',
      ],
      sourceNote:
        'Medido pelo Foot Function Index: 29\u00A0pontos a menos no grupo das elevações aos três meses (IC 95%: 6-52, p = 0,016), e 22 contra 16 aos doze meses, uma diferença não significativa.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'O que a diretriz de 2023 recomenda para fascite plantar?',
      paragraphs: [
        'A diretriz de 2023 para fascite plantar dá a cada opção um grau conforme a força da evidência. A é o grau mais alto. Um grau marcado “contra” quer dizer que a diretriz recomenda não usar essa opção.',
      ],
      table: {
        head: ['Opção', 'Grau'],
        rows: [
          ['Alongamento da fáscia plantar e da panturrilha', '**A**'],
          ['Terapia manual (trabalho com as mãos nas articulações e nos tecidos moles da perna e do pé), feita por um profissional', '**A**'],
          ['Bandagem junto com outra fisioterapia, para melhorar dor e função por até 6\u00A0semanas', '**A**'],
          ['Talas noturnas por 1 a 3\u00A0meses, se os primeiros passos de toda manhã continuam doendo', '**A**'],
          ['Treino de resistência e de força', '**B**'],
          ['Laser de baixa intensidade e agulhamento seco, feitos por um profissional', '**B**'],
          ['Palmilhas sozinhas, para alívio da dor a curto prazo', '**B contra**'],
          ['Palmilhas junto com outros cuidados', '**C**'],
          ['Ultrassom terapêutico somado ao alongamento', '**A contra**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Calçados e palmilhas ajudam na fascite plantar?',
      paragraphs: [
        'Calçados com bom suporte ajudam, mas palmilhas sozinhas não bastam para a maioria das pessoas. A diretriz de 2023 dá às órteses (palmilhas e suportes de arco) como opção isolada um **B contra**, o que significa que a evidência diz para não depender só delas. Junto com alongamento e treino de força, as órteses recebem um **C**.',
        'As talas noturnas, usadas durante o sono por 1 a 3\u00A0meses, recebem o grau máximo da diretriz, **A**, para quem continua tendo dor nos primeiros passos de toda manhã. Elas seguram o tornozelo para que a fáscia plantar não encurte durante a noite. Pergunte a um profissional de saúde se vale a pena tentar.',
        'A diretriz não avalia tipos específicos de calçado, mas calçado sem suporte é um fator de risco bem reconhecido. Calçados com suporte para o arco e um contraforte firme no calcanhar dividem parte da carga que a fáscia plantar carregaria sozinha. Se seus pés doem depois de um dia longo em pé, veja [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/). Quem trabalha em turnos pode começar por [enfermagem e dor nos pés](/pt/dor-nos-pes-enfermagem/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O que acontece quando o calcanhar para de doer?',
      paragraphs: [
        `Quando a dor no calcanhar passa, o Walkito continua com uma dose menor, porque a dor no calcanhar pode voltar. Quando você alcança a meta de manhãs sem dor (dor da manhã em 1/10 ou menos por ${PROGRAM.painFreeDays}\u00A0dias seguidos), essa meta passa para manutenção e a próxima meta entra no lugar.`,
        'Se os seus arcos também são baixos, o arco tem os próprios exercícios e o próprio tempo: veja [exercícios para pé chato](/pt/exercicios-pe-chato/). Dúvidas sobre o app estão respondidas nas [perguntas frequentes](/faq/) (em inglês).',
      ],
    },
  ],
  faq: [
    {
      q: 'Posso continuar correndo com fascite plantar?',
      a: 'Você não precisa parar tudo. Mude a carga. A diretriz clínica de 2023 recomenda aprender a ajustar a carga nos pés, com grau E, o que significa que vem de teoria, não de ensaios. Diminua o que deixa o calcanhar pior e continue alongando todo dia. Se os seus primeiros passos na manhã seguinte estão claramente piores, a corrida foi demais. Dor aguda ou que está piorando precisa de um profissional de saúde.',
    },
    {
      q: 'Por que a dor no calcanhar é pior de manhã?',
      a: 'A dor no calcanhar nos primeiros passos depois de dormir ou de ficar sentado é o padrão mais ligado à fascite plantar. A diretriz de 2023 para dor no calcanhar descreve essa dor como “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”. A explicação mais comum é que o tecido embaixo do pé fica rígido no repouso e de repente recebe carga com esses primeiros passos. É por isso que o alongamento da fáscia plantar é feito antes de você levantar, e por isso a diretriz de 2023 dá às talas noturnas um A para esse caso.',
    },
    {
      q: 'Quanto tempo dura a fascite plantar?',
      a: 'Para a maioria das pessoas, ela melhora em meses, não em semanas. O tempo completo está em [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/). Uma [revisão de 2020](https://doi.org/10.1177/2473011419896763) relata que cerca de 90% das pessoas melhoram com tratamento sem cirurgia, como alongamento e palmilhas, muitas vezes em 3 a 6\u00A0meses. Algumas levam mais tempo, e um grupo menor ainda tem dor depois de um ano. Nenhum programa de exercícios pode prometer um prazo. A diretriz de 2023 para dor no calcanhar dá ao alongamento e ao treino de força da panturrilha os seus melhores graus, e é por isso que eles vêm primeiro nesta página.',
      cites: [CITE.latt],
    },
    {
      q: 'Alongar ou fortalecer: o que é melhor para fascite plantar?',
      a: 'Os dois ajudam, e fortalecer funciona mais rápido. Em um ensaio com 48\u00A0pessoas, as elevações de calcanhar com carga alta estavam claramente à frente do alongamento aos três meses, mas aos doze meses os dois grupos estavam iguais. A diretriz de 2023 dá ao alongamento um A e ao treino de força um B. A [página de evidências](/science/) (em inglês) tem os detalhes.',
    },
    {
      q: 'Esporão no calcanhar é a mesma coisa que fascite plantar?',
      a: 'Não exatamente. Muita gente fala “esporão” quando quer dizer fascite plantar, mas, a rigor, o esporão é um crescimento de osso que aparece no raio-X. A fascite plantar é dor na faixa de tecido embaixo do pé. Os exercícios desta página são os que a diretriz de 2023 avalia para dor no calcanhar embaixo do pé. Só um profissional de saúde pode dizer o que está por trás da sua.',
    },
    {
      q: 'Com que frequência devo fazer exercícios para fascite plantar?',
      a: `Alongue na maioria dos dias e faça o treino de força da panturrilha nos dias de força. No Walkito você escolhe ${DAYS} dias de treino por semana, e toda semana tem três dias de força, nunca dois seguidos. Os alongamentos entram na maioria das sessões, com o primeiro alongamento da fáscia plantar antes de o pé tocar o chão. No ensaio que o Walkito segue, as elevações de calcanhar eram feitas dia sim, dia não.`,
    },
    {
      q: 'Quais são os melhores alongamentos para dor no calcanhar?',
      a: 'O alongamento da fáscia plantar e os alongamentos de panturrilha e do sóleo são os que a diretriz de 2023 para dor no calcanhar avalia com A, o grau mais alto. Cruze o pé sobre o joelho e puxe os dedos para trás por 30\u00A0segundos, a primeira vez antes de levantar de manhã. Depois alongue a panturrilha na parede, com o joelho de trás esticado e depois dobrado. O Walkito começa com 2\u00A0vezes de 30\u00A0segundos cada. Técnica: [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/).',
      cites: [CITE.guideline],
    },
    {
      q: 'Quando devo ir ao médico por dor no calcanhar?',
      a: 'Procure primeiro um profissional de saúde se a dor começou depois de uma lesão ou de uma queda, se você não consegue apoiar o pé, ou se ela vem com dormência, formigamento, inchaço, calor ou febre. Vale o mesmo se ela acorda você à noite, é aguda ou está piorando, ou dói quando você aperta o calcanhar, o que pode indicar uma fratura por estresse. O Walkito não faz diagnóstico.',
    },
    {
      q: 'Caminhar ajuda na fascite plantar?',
      a: 'Caminhar normalmente não tem problema, mas sozinho não é um exercício para fascite plantar. A diretriz de 2023 recomenda ajustar a carga em vez de parar a atividade. Se uma caminhada deixa os seus primeiros passos na manhã seguinte claramente piores, a distância ou o ritmo foram demais. Alongar antes de caminhar, principalmente o [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) antes dos primeiros passos, deixa os primeiros minutos mais fáceis.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Fazendo isso como um plano',
    text: `Você não precisa descobrir a ordem, as doses nem quanto tempo ficar em cada exercício. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é uma manhã melhor: dor em 1/10 ou menos por ${PROGRAM.painFreeDays}\u00A0dias seguidos.`,
    more: [
      `Você escolhe ${DAYS} dias por semana e sessões de ${MINUTES}\u00A0minutos. A cada ${PROGRAM.testEveryDays}\u00A0dias (e depois a cada ${PROGRAM.testEveryDaysAfterGoal} quando essa meta for alcançada), um teste curto mede a [resistência da panturrilha](/pt/teste-elevacao-calcanhar/), a sustentação do arco e o equilíbrio, para você ver o que está mudando.`,
    ],
    cta: `Comece com ${PROGRAM.sessionMinutes[0]}\u00A0minutos por dia.`,
  },
  crumb: 'Exercícios para fascite plantar',
  campaign: 'guide-plantar-fasciitis-pt',
};
