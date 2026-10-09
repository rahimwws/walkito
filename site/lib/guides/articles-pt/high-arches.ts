import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Pé cavo: exercícios (PT) ──────────────────────────────────────────
 *
 * Translated from `articles/high-arches.ts`, written around the Brazilian
 * Portuguese queries «pé cavo exercícios», «pé cavo dor», «arco do pé
 * alto». Informal «você». Figures, doses, grades and qualifiers are
 * identical to the English page.
 */

export const HIGH_ARCHES_PT: Guide = {
  lang: 'pt',
  page: 'highArches',
  mainSource: CITE.burnsCavus,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Pé cavo: exercícios e o que ajuda na dor',
  description:
    'Exercícios para pé cavo: alongamento da panturrilha e da fáscia plantar, estabilidade do tornozelo, palmilhas sob medida e sinais de alerta neurológicos.',
  h1: 'Exercícios para pé cavo: o que ajuda e o que precisa de um profissional de saúde',
  lede:
    'O pé com arco alto, chamado de pé cavo, é rígido e não flexiona o suficiente para absorver o impacto. A força se concentra no calcanhar e na parte da frente do pé, e a fáscia plantar muitas vezes é tensa. Cerca de 60% das pessoas com pé cavo relatam dor no pé. A evidência mais forte é para palmilhas amortecidas ou sob medida. O exercício se concentra em alongar a panturrilha e a fáscia plantar, melhorar a mobilidade do tornozelo e ganhar estabilidade.',
  intro: [
    'O pé cavo afeta mais ou menos 1 em cada 10 pessoas (Burns e colegas, 2007). Muitas pessoas com arco alto nunca têm dor no pé. Para quem tem, a dor normalmente fica embaixo do calcanhar, na parte da frente do pé ou ao longo da fáscia plantar tensa. A causa importa: a maioria dos pés cavos é idiopática (sem causa conhecida), mas uma parte é causada por condições neurológicas, como a doença de Charcot-Marie-Tooth. Um pé cavo progressivo ou de um lado só sempre precisa de um profissional de saúde.',
  ],
  takeaways: [
    'Em um ensaio com 154\u00A0adultos com pé cavo doloroso, palmilhas sob medida melhoraram a dor no pé 8,3\u00A0pontos a mais que uma palmilha placebo aos três meses, e a função 9,5\u00A0pontos a mais (Burns e colegas, 2006).',
    'O mesmo ensaio concluiu que as palmilhas sob medida reduziram a pressão plantar em 26%, contra 9% da palmilha placebo.',
    'Cerca de 60% das pessoas com pé cavo relatam dor no pé, normalmente embaixo do calcanhar, na parte da frente do pé ou no arco (Burns e colegas, 2005).',
    'O pé cavo pode ser o primeiro sinal de uma condição neurológica, como a doença de Charcot-Marie-Tooth. Um pé cavo progressivo ou de um lado só precisa de uma avaliação neurológica, não só de exercícios.',
    'Nenhum ensaio testou um programa de exercícios especificamente para a dor do pé cavo. Os exercícios desta página trabalham as estruturas tensas e as articulações instáveis comuns no pé cavo.',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é pé cavo e por que ele causa dor?',
      figure: { id: 'arches', caption: 'Os mesmos ossos do pé com um pé chato, um arco típico e um pé cavo, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco encostado no chão, um arco típico com um pequeno espaço embaixo e um pé cavo com um espaço grande embaixo do meio do pé.' },
      paragraphs: [
        'O pé cavo é um pé com o arco longitudinal medial alto demais. O arco continua alto mesmo quando o pé está apoiando o peso. Ao contrário do pé chato, que desaba sob carga e espalha o impacto por uma área grande, o pé cavo é rígido e concentra a força numa superfície menor: o calcanhar e a parte da frente do pé.',
        'A fáscia plantar num pé cavo normalmente é curta e tensa, o que segura o arco na posição alta, mas reduz a capacidade do pé de flexionar e absorver o impacto. A parte da frente do pé muitas vezes fica mais baixa que a de trás (primeiro metatarso em flexão plantar), e os dedos podem ficar em garra. Essas mudanças jogam a pressão para as cabeças dos metatarsos e para o calcanhar, e tiram do meio do pé.',
        'A dor no pé cavo costuma aparecer como metatarsalgia (dor na planta do pé, na parte da frente), dor embaixo do calcanhar ou dor ao longo da fáscia plantar tensa. As entorses de tornozelo também são mais comuns, porque o pé rígido e virado para dentro é menos estável em terreno irregular.',
      ],
      cites: [CITE.burnsCavusCochrane, CITE.burnsCavusPain, CITE.burnsCavus],
    },
    {
      h2: 'O que causa o pé cavo?',
      paragraphs: [
        'A maioria dos pés cavos é idiopática, ou seja, não se encontra uma causa específica. Eles normalmente aparecem nos dois pés, ficam estáveis ao longo do tempo e existem desde a infância.',
        'Um grupo menor, mas clinicamente importante, é causado por condições neurológicas. A mais comum é a doença de Charcot-Marie-Tooth (CMT), uma neuropatia motora e sensitiva hereditária que causa fraqueza e perda muscular progressivas, começando nos pés e na parte de baixo das pernas. O pé cavovaro na CMT se forma porque alguns músculos enfraquecem mais rápido que outros, puxando o pé para uma posição de arco alto e virada para dentro.',
        'Outras causas neurológicas incluem alterações da medula espinhal, poliomielite, espinha bífida, paralisia cerebral e outras neuropatias periféricas. O pé cavo também pode aparecer depois de um AVC ou de uma lesão na medula.',
        'A diferença importa para os exercícios. O pé cavo idiopático normalmente é estável: o pé tem esse formato e continua assim. O pé cavo neurológico pode ser progressivo: o arco fica mais alto, a fraqueza piora e o pé fica menos estável com o tempo. Os exercícios podem manter a mobilidade e a estabilidade num pé cavo neurológico, mas não conseguem reverter a condição de base, e um profissional de saúde precisa estar envolvido.',
      ],
    },
    {
      h2: 'Quando o pé cavo deve ser avaliado por um profissional de saúde?',
      paragraphs: [
        'Nem todo pé cavo precisa de uma investigação neurológica. Mas alguns padrões sempre devem ser avaliados.',
        'Um pé cavo progressivo, ou seja, um arco que fica mais alto ao longo de meses ou anos, é um sinal de alerta para uma causa neurológica. Um pé cavo de um lado só, em que um pé tem o arco bem mais alto que o outro, é outro. Fraqueza no pé ou na parte de baixo da perna, dificuldade para levantar o pé ao andar (pé caído), dedos em garra que estão piorando ou histórico familiar de CMT ou outra neuropatia são motivos para procurar um neurologista ou um especialista em pé e tornozelo.',
        'Se o seu pé cavo aparece nos dois pés, está estável e é assim desde a infância, e você não tem fraqueza nem alterações de sensibilidade, o mais provável é que seja idiopático. Os exercícios abaixo e uma conversa com um podólogo sobre palmilhas são um ponto de partida razoável.',
      ],
    },
    {
      h2: 'Palmilhas ajudam na dor do pé cavo?',
      keyFact: 'Um ensaio randomizado com 154\u00A0adultos com dor de pé cavo concluiu que as palmilhas sob medida superaram uma palmilha placebo em 8,3\u00A0pontos na dor e 9,5\u00A0pontos na função aos três meses (Burns e colegas, 2006).',
      paragraphs: [
        'As palmilhas sob medida têm a evidência mais forte para a dor do pé cavo. No único ensaio randomizado, Burns e colegas dividiram 154\u00A0adultos com dor crônica no pé e pé cavo nos dois lados entre palmilhas de polipropileno feitas sob medida e uma palmilha placebo plana. Aos três meses, o grupo das palmilhas sob medida relatou 8,3\u00A0pontos a mais de melhora na dor no pé, no Foot Health Status Questionnaire, que o grupo placebo. As notas de função melhoraram 9,5\u00A0pontos a mais. A pressão plantar caiu 26% com as palmilhas sob medida, contra 9% com a placebo.',
        'O ensaio incluiu pessoas com pé cavo idiopático e neuromuscular (133 idiopáticos, 21 neuromusculares, incluindo 16 com doença de Charcot-Marie-Tooth). As palmilhas eram moldadas ao formato do pé, com uma cobertura amortecida em todo o comprimento.',
        'Palmilhas amortecidas compradas prontas são um primeiro passo razoável antes de investir em palmilhas sob medida, que são mais caras. O que o ensaio mostrou ser eficaz foi moldar a base da palmilha ao formato exato do pé, e não só acrescentar um amortecimento plano.',
      ],
      sourceNote:
        'Burns 2006: 154\u00A0adultos, acompanhamento de 3\u00A0meses, diferença na dor do Foot Health Status Questionnaire de 8,3\u00A0pontos (IC 95% 1,2-15,3, p=0,022), diferença na função de 9,5\u00A0pontos (IC 95% 2,9-16,1, p=0,005).',
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'Quais exercícios ajudam no pé cavo?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A e ao treino de força o grau B para a dor embaixo do calcanhar, o local de dor mais comum no pé cavo (Koc e colegas, 2023).',
      paragraphs: [
        'Nenhum ensaio testou um programa de exercícios feito especificamente para a dor do pé cavo. Os exercícios abaixo trabalham as estruturas que costumam ficar tensas ou instáveis num pé cavo: a panturrilha, a fáscia plantar, o tornozelo e os músculos intrínsecos do pé. Eles vêm da evidência sobre fascite plantar, instabilidade do tornozelo e condicionamento geral do pé, e estão identificados como tal.',
        'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau A e ao treino de força o grau B para a dor embaixo do calcanhar, um dos locais de dor mais comuns no pé cavo. Não existe uma diretriz equivalente específica para o pé cavo.',
        'Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'moderate', why: 'Grau A na diretriz para dor embaixo do calcanhar. A panturrilha tensa é comum no pé cavo e aumenta a carga no calcanhar.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede, perna de trás esticada, calcanhar no chão, quadril para a frente. Um gastrocnêmio tenso é comum no pé cavo e aumenta a carga sobre o arco rígido.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'moderate', why: 'Mesmo mecanismo. Trabalha o músculo mais profundo da panturrilha.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede, depois dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo só solta com o joelho dobrado.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'moderate', why: 'Grau A na diretriz para dor embaixo do calcanhar. A fáscia plantar costuma ser tensa no pé cavo.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          how: 'Sente-se e cruze o pé afetado sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. A fáscia plantar num pé cavo muitas vezes é curta e tensa.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento ao longo do arco',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir o arco',
          alt: 'Uma figura puxando os dedos de um pé para trás, com o arco destacado',
        },
        {
          name: 'Balanço do tornozelo',
          evidence: { level: 'early', why: 'Nenhum ensaio específico para pé cavo. Trabalha a dorsiflexão do tornozelo, que costuma ser limitada no pé cavo.' },
          dose: '2\u00A0séries de 15, cada perna',
          how: 'Fique de frente para uma parede com um pé à frente. Leve o joelho para a frente, por cima dos dedos, enquanto o calcanhar fica no chão. Isso abre a dorsiflexão do tornozelo, que muitas vezes é limitada num pé cavo.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na frente do tornozelo',
          stop: 'A dor chegar a 6/10',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: o joelho passa por cima dos dedos, o calcanhar fica no chão',
          alt: 'Uma figura de frente para uma parede levando o joelho para a frente, por cima dos dedos',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Nenhum ensaio com pé cavo. As entorses de tornozelo são mais comuns no pé cavo; o trabalho de equilíbrio cuida da estabilidade do tornozelo.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Fique em um pé só e olhe para um ponto fixo. Deixe o pé balançar. Pés cavos são menos estáveis em terreno irregular, e o trabalho de equilíbrio treina os músculos que corrigem esses balanços. Fique perto de uma parede.',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          stop: 'A dor chegar a 6/10',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: deixe o pé fazer as correções',
          alt: 'Uma figura se equilibrando em uma perna, com o tornozelo destacado',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado para pé cavo. Uma medida de alívio para a fáscia plantar tensa.' },
          dose: '2\u00A0minutos, cada pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem. Pressão firme, mas não a ponto de fazer careta. É uma medida de alívio para a fáscia tensa, não um exercício corretivo.',
          often: 'Dias de recuperação',
          feel: 'Pressão firme embaixo do pé',
          stop: 'A dor chegar a 6/10',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: devagar e firme, alivie se sentir algo agudo',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha',
        },
      ],
      cites: [CITE.guideline, CITE.burnsCavus],
    },
    {
      h2: 'E o calçado para pé cavo?',
      paragraphs: [
        'O calçado para pé cavo deve amortecer, não controlar. Ao contrário do pé chato, em que um reforço firme na parte de dentro evita o desabamento, o pé cavo precisa do oposto: um calçado que absorva o impacto, porque o próprio pé não absorve.',
        'Procure uma sola amortecida, uma biqueira espaçosa (dedos em garra precisam de espaço) e nada de suporte de arco agressivo. Um suporte de arco rígido feito para um pé normal empurra o arco do pé cavo no lugar errado. Tênis de corrida neutros com bom amortecimento no calcanhar e na parte da frente são uma recomendação comum.',
        'Se calçados e palmilhas comprados prontos não bastam, um podólogo pode avaliar se palmilhas sob medida valem o investimento. O ensaio de Burns de 2006 concluiu que o segredo de uma palmilha eficaz para pé cavo era uma base moldada ao pé com cobertura amortecida, e não um dispositivo corretivo rígido.',
      ],
      cites: [CITE.burnsCavus],
    },
    {
      h2: 'O Walkito ajuda no pé cavo?',
      paragraphs: [
        'O Walkito é feito em torno da dor embaixo do calcanhar e da dor no arco em adultos. Ele inclui alongamento de panturrilha, alongamento da fáscia plantar, rolar o pé na bolinha e trabalho de estabilidade do tornozelo, tudo relevante para um pé cavo. Quando você aponta para o arco no mapa do corpo do app, a sessão de alívio oferece o pé curto, o alongamento da fáscia plantar e o rolar o pé na bolinha.',
        'O que o app não tem é uma meta específica para pé cavo ou um programa para pé cavo. Os exercícios que aparecem são os mesmos indicados para fascite plantar e pé chato. Para quem tem pé cavo e dor embaixo do calcanhar, esses exercícios se sobrepõem ao que esta página recomenda. Para quem tem a dor do pé cavo principalmente na parte da frente do pé, ou tem uma causa neurológica, o app não é uma boa escolha e quem deve orientar o plano de exercícios é um profissional de saúde.',
      ],
    },
  ],
  faq: [
    {
      q: 'Quais exercícios ajudam no pé cavo?',
      cites: [CITE.guideline],
      a: 'Nenhum ensaio testou exercícios especificamente para pé cavo. Os exercícios com a melhor evidência para os padrões de dor comuns no pé cavo são o alongamento de panturrilha e o alongamento da fáscia plantar, os dois com grau A na diretriz de 2023 para dor embaixo do calcanhar. O trabalho de estabilidade do tornozelo e rolar o pé na bolinha cuidam da instabilidade e da fáscia tensa comuns no pé cavo.',
    },
    {
      q: 'Palmilha ajuda na dor do pé cavo?',
      cites: [CITE.burnsCavus],
      a: 'Em um ensaio com 154\u00A0adultos com pé cavo doloroso, palmilhas sob medida melhoraram a dor no pé 8,3\u00A0pontos e a função 9,5\u00A0pontos a mais que uma palmilha placebo aos três meses (Burns 2006). A pressão plantar caiu 26% com as palmilhas sob medida. Essa é a evidência mais forte para qualquer intervenção isolada na dor do pé cavo.',
    },
    {
      q: 'Dá para corrigir o pé cavo com exercícios?',
      a: 'O exercício não muda o formato dos ossos de um pé cavo. O que ele pode fazer é alongar as estruturas tensas (panturrilha, fáscia plantar), melhorar a mobilidade do tornozelo e ganhar estabilidade para reduzir entorses e dor. O arco em si vai continuar alto. A meta é reduzir a dor e melhorar a função, não achatar o arco.',
    },
    {
      q: 'Pé cavo é sinal de problema neurológico?',
      a: 'Pode ser. A maioria dos pés cavos é idiopática e estável. Mas um pé cavo progressivo ou de um lado só pode ser o primeiro sinal da doença de Charcot-Marie-Tooth ou de outra condição neurológica. Se os seus arcos estão ficando mais altos, se um pé é mais afetado que o outro, ou se você tem fraqueza ou alterações de sensibilidade nos pés, procure um neurologista.',
    },
    {
      q: 'Qual o melhor calçado para pé cavo?',
      cites: [CITE.burnsCavus],
      a: 'Calçados amortecidos, com biqueira espaçosa e sem suporte de arco agressivo. O arco alto não desaba, então não precisa de controle de movimento. Ele precisa de amortecimento para absorver o impacto que o arco rígido não absorve. Tênis de corrida neutros com bom amortecimento no calcanhar e na parte da frente são um ponto de partida comum. Palmilhas sob medida com base moldada e cobertura amortecida têm a melhor evidência de ensaio.',
    },
    {
      q: 'Pé cavo é a mesma coisa que arco alto?',
      a: 'Sim. Pé cavo é o termo médico para um pé com o arco alto demais. Ele descreve um formato de pé, não uma doença. Cerca de 1 em cada 10 pessoas tem pé cavo, e muitas nunca têm dor no pé. Quando a dor aparece, normalmente fica embaixo do calcanhar, na parte da frente do pé ou ao longo da fáscia plantar tensa.',
      cites: [CITE.burnsCavusCochrane],
    },
    {
      q: 'Pé cavo pode causar fascite plantar?',
      cites: [CITE.guideline],
      a: 'O pé cavo aparece como fator de risco para fascite plantar. O pé rígido põe mais esforço na fáscia plantar a cada passo, e a fáscia muitas vezes já é tensa. Se o seu pé cavo tem dor embaixo do calcanhar, pior de manhã, esse padrão combina com fascite plantar, e os exercícios de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) se aplicam.',
    },
    {
      q: 'Como saber se tenho pé cavo?',
      a: 'Faça o teste da pegada molhada: molhe a sola do pé descalço e pise numa superfície plana e seca. Um arco alto deixa pouca ou nenhuma marca na borda de fora, muitas vezes só o calcanhar e a parte da frente do pé, enquanto um pé chato deixa quase a sola inteira. Uma diferença grande entre os dois pés vale ser comentada com um profissional de saúde.',
    },
    {
      q: 'É melhor ter pé chato ou pé cavo?',
      cites: [CITE.burnsCavusPain],
      a: 'Nenhum dos dois é claramente melhor. O pé chato espalha a carga por uma área grande, mas pode esticar demais a fáscia plantar e o tendão tibial posterior. O pé cavo é rígido e concentra a força no calcanhar e na parte da frente do pé. Cerca de 60% das pessoas com pé cavo relatam dor no pé, então o formato do pé sozinho não prevê como os seus pés vão se sentir.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'os seus arcos estão ficando mais altos com o tempo, o que pode indicar uma causa neurológica',
      'um pé tem o arco bem mais alto que o outro',
      'você tem fraqueza no pé ou na parte de baixo da perna, ou dificuldade para levantar a parte da frente do pé',
      'há dormência, formigamento ou queimação nos pés',
      'os dedos estão ficando mais em garra do que antes',
      'as entorses de tornozelo são frequentes e estão piorando',
      'há histórico familiar de doença de Charcot-Marie-Tooth ou outra neuropatia',
      'a dor no pé não melhora depois de várias semanas de alongamento, calçado melhor e palmilhas amortecidas',
      'você tem dor num ponto específico que piora com a atividade, o que pode ser uma fratura por estresse ou sesamoidite, e não um padrão geral de pé cavo',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito inclui alongamento de panturrilha, alongamento da fáscia plantar, trabalho de estabilidade do tornozelo e rolar o pé na bolinha, tudo relevante para o pé cavo. Quando você aponta para o arco no mapa do corpo, o app oferece exercícios para essa região. Mas o app não tem uma meta ou um programa específico para pé cavo. Se o seu pé cavo causa dor embaixo do calcanhar, as metas de dor no calcanhar do app podem servir. Se a sua dor fica principalmente na parte da frente do pé ou está ligada a uma condição neurológica, quem deve orientar o seu plano de exercícios é um profissional de saúde.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
  },
  crumb: 'Exercícios para pé cavo',
  campaign: 'guide-high-arches-pt',
};
