import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dor no arco do pé (PT) ────────────────────────────────────────────
 *
 * Translated from `articles/arch-pain.ts`, written around the Brazilian
 * Portuguese queries «dor no arco do pé», «dor na sola do pé no meio»,
 * «dor no arco do pé ao andar». Informal «você». Figures, doses, grades
 * and qualifiers are identical to the English page.
 */

export const ARCH_PAIN_PT: Guide = {
  lang: 'pt',
  page: 'archPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor no arco do pé: causas e quando ir ao médico',
  description:
    'Dor no arco do pé ao andar: fascite plantar, pé chato, tendão tibial posterior, pé cavo ou nervo. Como diferenciar, exercícios e quando ir ao médico.',
  h1: 'Dor no arco do pé: o que causa e o que fazer',
  lede:
    'A dor no arco do pé normalmente vem de uma entre poucas condições: fascite plantar, pé chato ou arco caído, disfunção do tendão tibial posterior, pé cavo que não absorve bem o impacto, sobrecarga ou irritação de nervo, como a síndrome do túnel do tarso. A causa muda o que fazer. Esta página mapeia as mais comuns, aponta para os guias completos de exercícios quando eles existem e traz os exercícios que ajudam o arco diretamente.',
  takeaways: [
    'A fascite plantar é a causa isolada mais comum de dor no arco e no calcanhar. A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A e ao treino de força o grau B (Koc e colegas, 2023).',
    'A disfunção do tendão tibial posterior, um enfraquecimento do tendão que sustenta o arco, é a causa mais comum de pé chato adquirido do adulto (Ross e colegas, 2018).',
    'Tanto o pé chato quanto o pé cavo mudam a forma como a força passa pelo arco ao andar, mas os padrões de dor e os exercícios são diferentes.',
    'A menor dorsiflexão do tornozelo, ou seja, uma panturrilha tensa, foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle com 50\u00A0casos e 100\u00A0controles (Riddle e colegas, 2003).',
    'Dor no arco que vem com dormência, formigamento, queimação ou fraqueza precisa de um profissional de saúde para descartar um nervo comprimido ou uma causa neurológica antes dos exercícios.',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que causa dor no arco do pé?',
      paragraphs: [
        'O arco é sustentado pela fáscia plantar, pelo tendão tibial posterior, pelos músculos intrínsecos do pé e pelos ossos e ligamentos do meio do pé. Dor no arco quer dizer que uma ou mais dessas estruturas está sob mais estresse do que aguenta. As causas mais comuns se dividem em alguns padrões.',
        '**Fascite plantar** é a principal causa isolada. A fáscia plantar, uma faixa grossa de tecido que vai do calcanhar até a base dos dedos, fica irritada com a carga repetida. A dor normalmente é pior perto do calcanhar, mas muitas vezes se estende para o arco, principalmente quando a parte da fáscia do lado do arco está envolvida. A marca registrada é uma dor forte nos primeiros passos depois do repouso. Veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) e o [guia geral de fascite plantar](/pt/fascite-plantar/) para o guia completo.',
        '**Pé chato e arco caído** causam dor no arco ao esticar demais a fáscia plantar e o tendão tibial posterior. Quando o arco desaba ao ficar em pé e ao andar, essas estruturas recebem uma carga que elas não têm formato para aguentar por muito tempo. Veja [exercícios para pé chato](/pt/exercicios-pe-chato/) e o [guia geral de pé chato](/pt/pe-chato/).',
        '**A disfunção do tendão tibial posterior** é a causa mais comum de pé chato adquirido do adulto. O tendão tibial posterior passa por trás do tornozelo, do lado de dentro, e por baixo do arco, segurando-o. Quando esse tendão enfraquece ou rompe, o arco cai aos poucos. A dor aparece na parte de dentro do tornozelo e no arco, e piora com a atividade. Uma revisão sistemática de 2018 sobre exercício para essa disfunção encontrou evidência limitada, mas promissora, para fortalecimento e alongamento. Veja [disfunção do tendão tibial posterior](/pt/disfuncao-tendao-tibial-posterior/).',
        '**O pé cavo** causa dor no arco de outro jeito. Um arco alto e rígido não flexiona o suficiente para absorver o impacto, então a força se concentra embaixo do calcanhar e na parte da frente do pé, em vez de se espalhar pelo meio do pé. A dor embaixo do arco num pé cavo muitas vezes vem de uma fáscia plantar tensa. Veja [exercícios para pé cavo](/pt/pe-cavo-exercicios/).',
        '**A sobrecarga** sem uma condição com nome é comum em quem aumenta de repente o quanto anda, corre ou fica em pé. Os músculos do arco e a fáscia plantar ainda não estão fortes o bastante para a nova exigência, e reclamam. Isso normalmente melhora com uma volta gradual à carga anterior mais fortalecimento da panturrilha e do arco.',
        '**A irritação de nervo**, como a síndrome do túnel do tarso, pode causar queimação, formigamento ou dormência ao longo do arco. O nervo tibial posterior passa por trás do osso de dentro do tornozelo e entra na sola do pé. Se ele é comprimido, a dor pode imitar a fascite plantar, mas vem com sintomas sensitivos (de sensibilidade) que a fascite não causa. Isso precisa de um profissional de saúde.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview, CITE.riddle],
    },
    {
      h2: 'Como diferenciar essas causas?',
      paragraphs: [
        'O local da dor, a hora do dia em que ela é pior e o que a melhora ou piora dão as pistas mais claras.',
      ],
      table: {
        caption: 'Dor no arco do pé: padrões por causa',
        head: ['Causa', 'Onde dói', 'Quando é pior', 'Pista principal'],
        rows: [
          ['Fascite plantar', 'Embaixo do calcanhar, estendendo-se para o arco', 'Primeiros passos depois do repouso, principalmente de manhã', 'A dor forte alivia depois de alguns minutos andando'],
          ['Pé chato / arco caído', 'Ao longo da parte de dentro do arco e às vezes na parte de dentro do tornozelo', 'Depois de muito tempo em pé ou andando', 'O arco desaba visivelmente ao ficar em pé; a dor alivia sem carga'],
          ['Disfunção do tendão tibial posterior', 'Parte de dentro do tornozelo e arco', 'Durante e depois da atividade', 'A elevação de calcanhar em uma perna é fraca ou dolorida do lado afetado'],
          ['Pé cavo', 'Embaixo do meio do pé ou ao longo da parte de fora do arco', 'Ao andar ou correr, principalmente em superfícies duras', 'O arco continua alto mesmo em pé; pouca absorção de impacto'],
          ['Sobrecarga', 'Dor geral no arco', 'Depois de um aumento repentino de carga', 'Sem padrão de dor de manhã; melhora com repouso'],
          ['Nervo (túnel do tarso)', 'Ao longo do arco, com formigamento ou queimação', 'Variável, às vezes em repouso', 'Dormência, formigamento ou queimação que a fascite plantar não causa'],
        ],
      },
      after: [
        'Se a sua dor no arco segue o padrão da dor da manhã e fica perto do calcanhar, comece pela página de [fascite plantar](/pt/fascite-plantar/). Se o arco desaba quando você fica em pé, veja [exercícios para pé chato](/pt/exercicios-pe-chato/). Se a dor vem com dormência ou queimação, ou se a elevação de calcanhar em uma perna é fraca ou impossível de um lado, procure um profissional de saúde antes de começar os exercícios.',
      ],
      cites: [CITE.guideline, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quais exercícios ajudam na dor no arco do pé?',
      keyFact: 'Na diretriz de 2023 para dor no calcanhar, o alongamento da fáscia plantar e da panturrilha recebe o grau de evidência mais alto, A, enquanto o treino de força fica um nível abaixo, com B (Koc e colegas, 2023).',
      paragraphs: [
        'Os exercícios abaixo trabalham o próprio arco e os músculos da panturrilha que o puxam. Eles servem melhor quando a dor no arco está ligada a fascite plantar, pé chato ou sobrecarga geral. Na disfunção do tendão tibial posterior ou na dor no arco ligada a nervo, quem deve orientar o plano de exercícios é um profissional de saúde. Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje.',
        'Estas são as doses iniciais do Walkito, não as doses dos protocolos de pesquisa. A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A, e ao treino de força o grau B. O pé curto e o rolar o pé na bolinha têm evidência mais fraca por conta própria. [Como estes guias são escritos](/pt/sobre-walkito/).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar o grau A, o mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          how: 'Sente-se e cruze o pé afetado sobre o outro joelho. Puxe os dedos para trás até sentir um alongamento ao longo do arco, não na panturrilha. Se o seu arco dói mais de manhã, faça este antes de o pé tocar o chão.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento embaixo do arco',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir o arco',
          alt: 'Uma figura puxando os dedos de um pé para trás, com o arco destacado',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 dá ao alongamento de panturrilha o grau A. Uma panturrilha tensa é o fator de risco mais forte para fascite plantar (Riddle 2003).' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede, perna de trás esticada, calcanhar no chão, quadril para a frente. O gastrocnêmio, o músculo mais superficial da panturrilha, só alonga com o joelho esticado.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'strong', why: 'O mesmo grau A na diretriz. Trabalha o sóleo, o músculo mais profundo da panturrilha.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede, depois dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só alonga com o joelho dobrado.',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'early', why: 'Uma revisão de 2024 concluiu que o treino de pé curto mudou o formato do arco em alguns estudos, mas a evidência de redução da dor por conta própria é fraca.' },
          dose: '3\u00A0séries de 10\u00A0sustentações de 5\u00A0segundos, cada pé',
          how: 'Sente-se com o pé apoiado no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir. Não dobre os dedos. O pé curto treina os músculos intrínsecos que seguram o arco.',
          often: 'Dias de força',
          feel: 'O arco subindo enquanto os dedos ficam apoiados',
          stop: 'A dor chegar a 6/10',
          media: 'short_foot_seated',
          caption: 'Pé curto: puxe a parte da frente do pé em direção ao calcanhar',
          alt: 'O pé de uma pessoa sentada, com o arco subindo e os dedos relaxados no chão',
        },
        {
          name: 'Inversão com faixa (tibial posterior)',
          evidence: { level: 'moderate', why: 'Ativação seletiva do tibial posterior confirmada por ressonância magnética (Kulig 2004). Recomendada para a reabilitação da disfunção do tendão tibial posterior na revisão de 2018.' },
          dose: '3\u00A0séries de 15, cada pé',
          how: 'Sente-se com uma faixa elástica passada pela parte da frente do pé, presa de lado. Gire o pé para dentro contra a faixa. Mantenha o joelho parado, para o movimento vir do tornozelo, não da perna. Isso trabalha o tendão tibial posterior, o tendão que segura o arco.',
          often: 'Dias de força',
          feel: 'Trabalho na parte de dentro do tornozelo e embaixo do arco',
          stop: 'A dor chegar a 6/10',
          media: 'band_inversion',
          caption: 'Inversão com faixa: mova o pé, não a perna',
          alt: 'Uma figura sentada girando o pé para dentro contra uma faixa, com a parte de dentro do tornozelo destacada',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Serve para dar alívio entre as sessões.' },
          dose: '2\u00A0minutos, cada pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem ou uma garrafa de água congelada. Pressão firme, mas nunca a ponto de você fazer careta. Isso acalma o tecido depois que ele trabalhou.',
          often: 'Dias de recuperação',
          feel: 'Pressão firme embaixo do pé',
          stop: 'A dor chegar a 6/10',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: devagar e firme, alivie se sentir algo agudo',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha',
        },
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.posteriorTibialReview, CITE.kulig, CITE.cheng],
    },
    {
      h2: 'Quando a dor no arco é sinal de outra coisa?',
      paragraphs: [
        'A maior parte da dor no arco responde a alongamento, ajuste de carga e tempo. Mas alguns padrões apontam para condições que precisam de um profissional de saúde antes dos exercícios.',
        'Dor com dormência, formigamento ou queimação pode vir da síndrome do túnel do tarso, em que o nervo tibial posterior é comprimido atrás do tornozelo, do lado de dentro. Isso precisa de um diagnóstico clínico, não só de exercícios.',
        'Dor no arco que vem junto com um achatamento progressivo do pé, principalmente de um lado, pode indicar uma disfunção do tendão tibial posterior numa fase mais avançada. O teste de elevação de calcanhar em uma perna é uma checagem simples: se você não consegue subir totalmente na ponta de um pé, ou se dói bem mais de um lado, um profissional de saúde deve avaliar o tendão antes de você pôr mais carga nele.',
        'Dor num ponto específico que piora sem parar com a atividade e não alivia com o repouso normal pode ser uma fratura por estresse de um dos ossinhos do meio do pé. Isso precisa de exame de imagem, não de alongamento.',
        'Dor no arco em crianças de 8 a 15\u00A0anos pode ser [apofisite do calcâneo (doença de Sever)](/pt/doenca-de-sever/), que envolve a placa de crescimento e não a fáscia. Essa página explica o que ajuda nas crianças. O Walkito é feito para adultos.',
      ],
      cites: [CITE.posteriorTibialReview],
    },
    {
      h2: 'O tipo de pé influencia a dor no arco?',
      figure: { id: 'arches', caption: 'Os mesmos ossos do pé com um pé chato, um arco típico e um pé cavo, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco encostado no chão, um arco típico com um pequeno espaço embaixo e um pé cavo com um espaço grande embaixo do meio do pé.' },
      paragraphs: [
        'Sim. Tanto o pé chato quanto o pé cavo mudam a forma como a força passa pelo pé, mas de jeitos opostos.',
        'O pé chato deixa o arco desabar sob carga, esticando a fáscia plantar e o tendão tibial posterior além da faixa confortável. Os exercícios para pé chato se concentram em fortalecer os músculos do arco (pé curto, abrir os dedos, inversão com faixa) e o quadril (abdução de quadril), porque um quadril que cede ao apoiar numa perna só empurra o arco para dentro. Veja [exercícios para pé chato](/pt/exercicios-pe-chato/).',
        'O pé cavo é rígido e não flexiona o suficiente para espalhar o impacto. A força se concentra no calcanhar e na parte da frente do pé. A fáscia plantar num pé cavo muitas vezes é tensa. Os exercícios se concentram em alongar a panturrilha e a fáscia plantar, mais trabalho de estabilidade do tornozelo. Palmilhas amortecidas ou sob medida têm a melhor evidência para a dor do pé cavo. Veja [exercícios para pé cavo](/pt/pe-cavo-exercicios/).',
        'Um arco normal com sobrecarga repentina, por exemplo uma semana andando muito mais que o normal, causa uma dor geral no arco que responde bem aos exercícios desta página mais uma volta gradual à carga normal.',
      ],
    },
    {
      h2: 'E as palmilhas e os calçados para dor no arco?',
      paragraphs: [
        'A diretriz de 2023 para dor no calcanhar dá grau B contra usar palmilhas sozinhas para a dor da fascite plantar no curto prazo. Palmilhas combinadas com outros cuidados, como alongamento, recebem um C a favor. Calçados com bom suporte são muito recomendados e podem reduzir o desconforto, mas nenhum ensaio grande mostrou que eles sejam melhores que alongamento e trabalho de força.',
        'No pé chato, um suporte para o arco medial pode reduzir o desabamento do arco ao ficar em pé e ao andar, dando menos trabalho ao tendão tibial posterior e à fáscia plantar. No pé cavo, uma palmilha amortecida absorve o impacto que o arco rígido não absorve. Em um ensaio de 2006 com 154\u00A0pessoas com dor de pé cavo, palmilhas sob medida melhoraram a dor e a função mais que uma palmilha placebo aos três meses (Burns e colegas, 2006).',
        'Calçados e palmilhas ajudam a controlar os sintomas enquanto o exercício constrói a capacidade de que o pé precisa. Um não substitui o outro.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Qual a causa mais comum de dor no arco do pé?',
      cites: [CITE.guideline],
      a: 'A fascite plantar é a causa isolada mais comum. Ela acontece quando a fáscia plantar, uma faixa grossa de tecido embaixo do pé, fica irritada com a carga repetida. A dor normalmente fica perto do calcanhar, mas muitas vezes se estende para o arco, principalmente quando a parte da fáscia do lado do arco está envolvida. A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A e ao treino de força o grau B.',
    },
    {
      q: 'Por que o arco do meu pé dói quando eu ando?',
      a: 'A dor no arco ao andar normalmente vem de uma entre poucas fontes: fascite plantar, pé chato que deixa o arco desabar sob carga, disfunção do tendão tibial posterior, uma panturrilha tensa que transfere estresse para o arco, ou simplesmente andar mais do que o seu pé está preparado para aguentar. O padrão da dor, principalmente se é pior de manhã ou depois da atividade, ajuda a afunilar qual delas é.',
    },
    {
      q: 'Pé chato causa dor no arco?',
      a: 'Sim. Quando o arco desaba ao ficar em pé e ao andar, a fáscia plantar e o tendão tibial posterior são esticados além da faixa normal. Esse alongamento causa dor no arco e às vezes na parte de dentro do tornozelo. Fortalecer os músculos intrínsecos do pé com exercícios como o pé curto e a inversão com faixa pode ajudar a sustentar o arco por dentro.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Pé cavo causa dor no arco?',
      a: 'Sim, mas pelo motivo oposto. O arco alto é rígido e não absorve bem o impacto. O impacto se concentra no calcanhar e na parte da frente do pé, e a fáscia plantar tensa num pé cavo pode doer ao longo de todo o seu comprimento. Alongar a panturrilha e a fáscia plantar, mais palmilhas amortecidas, são as principais abordagens. Veja [exercícios para pé cavo](/pt/pe-cavo-exercicios/) para mais detalhes.',
    },
    {
      q: 'Quando ir ao médico por dor no arco do pé?',
      a: 'Procure um profissional de saúde se a dor vem com dormência, formigamento ou queimação, o que pode indicar um nervo comprimido. Procure também se o arco está achatando de um lado, se a elevação de calcanhar em uma perna é fraca ou impossível num pé, se a dor fica num ponto bem específico e está piorando, ou se ela não melhorou depois de várias semanas de alongamento e ajuste de carga.',
      cites: [CITE.posteriorTibialReview],
    },
    {
      q: 'Palmilha ajuda na dor no arco do pé?',
      cites: [CITE.guideline],
      a: 'A diretriz de 2023 para dor no calcanhar dá grau B contra usar palmilhas sozinhas na fascite plantar. Palmilhas combinadas com alongamento e trabalho de força podem ajudar a controlar os sintomas enquanto o pé ganha capacidade. No pé cavo, palmilhas amortecidas ou sob medida têm evidência melhor, incluindo um ensaio clínico randomizado que mostrou melhora em relação a uma palmilha placebo aos três meses.',
    },
    {
      q: 'Dor no arco do pé é fascite plantar?',
      a: 'Nem sempre. A fascite plantar é uma causa específica de dor no arco, a mais comum. Mas a dor no arco também pode vir de pé chato, disfunção do tendão tibial posterior, pé cavo, sobrecarga ou irritação de nervo. Toda fascite plantar envolve dor no arco ou no calcanhar, mas nem toda dor no arco é fascite plantar. O padrão da dor, principalmente o horário, ajuda a diferenciar.',
    },
    {
      q: 'O que causa dor na parte de fora do arco do pé?',
      a: 'Os exercícios desta página trabalham a parte de dentro do arco, então a dor na parte de fora normalmente tem outra causa. Ela pode vir de irritação dos tendões fibulares (os tendões atrás do tornozelo, do lado de fora) ou da síndrome do cuboide, em que um ossinho do meio do pé sai um pouco do lugar, muitas vezes depois de uma entorse ou de sobrecarga. As duas precisam de um exame e de um plano diferentes do alongamento da fáscia plantar, então procure um profissional de saúde.',
    },
    {
      q: 'Dor no arco do pé passa sozinha?',
      a: 'Às vezes. Uma dor curta de sobrecarga muitas vezes alivia em alguns dias quando você diminui a carga que a causou. A dor de fascite plantar, pé chato ou disfunção do tendão tibial posterior tende a continuar ou voltar sem alongamento e trabalho de força. Se ela não melhorou depois de várias semanas de repouso e carga mais leve, procure um profissional de saúde.',
    },
    {
      q: 'Devo massagear o arco do pé quando dói?',
      a: 'Rolar o pé com cuidado pode ajudar entre as sessões, embora nenhum estudo desta página tenha testado a massagem sozinha. Role a sola devagar sobre uma bolinha de massagem ou uma garrafa de água congelada, com pressão firme, mas nunca a ponto de fazer careta. É uma medida de alívio. Ela não age sobre a causa em si. Se apertar um ponto reproduz uma dor aguda, peça uma avaliação em vez de apertar mais forte.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor vem com dormência, formigamento ou queimação, o que pode indicar um nervo comprimido',
      'o arco está achatando visivelmente de um lado, o que pode indicar uma disfunção do tendão tibial posterior progressiva',
      'você não consegue fazer a elevação de calcanhar em uma perna do lado afetado, ou ela é claramente mais fraca que do outro lado',
      'a dor fica num ponto bem específico e piora com a atividade, o que pode ser uma fratura por estresse',
      'a dor começou depois de uma lesão ou de uma queda',
      'há inchaço, vermelhidão ou calor em volta do pé ou do tornozelo',
      'a dor não melhora depois de várias semanas de alongamento e ajuste de carga',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Se a sua dor no arco segue o padrão da fascite plantar, o Walkito monta um plano em torno de uma meta de cada vez. A primeira meta é uma manhã melhor: dor em 1/10 ou menos por 14\u00A0dias seguidos. O arco ganha a sua própria meta e os seus próprios exercícios. Se a sua dor no arco vem do pé chato, o app pode trabalhar a dor e o arco como metas separadas.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se você não tem certeza do que está causando a sua dor no arco, procure um profissional de saúde antes de pôr carga nele com exercícios.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor no arco do pé',
  campaign: 'guide-arch-pain-pt',
};
