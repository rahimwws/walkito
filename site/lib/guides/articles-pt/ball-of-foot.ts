import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ball-of-foot.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». «Metatarsalgia» and «dor na planta do pé» are
 * the everyday Brazilian search terms. Figures, doses and qualifiers are
 * identical to the English page. Exercise names follow `lib/guides/pt.ts`.
 */

export const BALL_OF_FOOT_PT: Guide = {
  lang: 'pt',
  page: 'ballOfFoot',
  mainSource: CITE.amaha,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Metatarsalgia: dor na planta do pé e exercícios',
  description:
    'Dor na planta do pé perto dos dedos: causas, metatarsalgia ou neuroma de Morton, exercícios, alongamento, almofada metatarsal e quando procurar ajuda.',
  h1: 'Dor na planta do pé: o que causa e o que ajuda',
  lede:
    'Você empurra o chão para dar o passo e lá está ela: uma dor aguda logo atrás dos dedos, como pisar numa pedrinha. A parte da frente da planta do pé recebe todo o peso do corpo a cada passo, e vários problemas diferentes podem fazer essa região doer. Esta página mostra quais são esses problemas, o que a evidência diz sobre exercício e calçados, e onde estão as lacunas reais da pesquisa.',
  intro: [
    'O termo clínico geral é metatarsalgia, que quer dizer dor em volta das cabeças dos metatarsos, as “juntas” ósseas logo atrás dos dedos. Mas metatarsalgia descreve onde dói, não é um diagnóstico. Vários problemas diferentes cabem nesse nome, e nem todos respondem à mesma coisa.',
  ],
  toc: true,
  takeaways: [
    'Em um estudo com 41\u00A0pessoas com metatarsalgia primária, um programa de 8\u00A0semanas de exercícios para os dedos melhorou a dor em 2,7\u00A0pontos em média, numa escala de 10\u00A0pontos. O estudo não tinha grupo de controle (Amaha e colegas, 2020).',
    'Um gastrocnêmio tenso, o músculo maior e mais superficial da panturrilha, joga o peso para a frente, na parte da frente do pé. Em uma série de 254\u00A0pessoas com fascite plantar, 52 a 60\u00A0por cento tinham uma contratura isolada do gastrocnêmio (Patel e DiGiovanni, 2011).',
    'As almofadas metatarsais colocadas logo atrás das cabeças dos metatarsos são a abordagem conservadora mais estudada para dor na parte da frente do pé.',
    'O neuroma de Morton e a metatarsalgia têm sintomas parecidos, mas ficam em lugares diferentes: a dor do neuroma costuma ficar entre o terceiro e o quarto dedos, com formigamento, enquanto a metatarsalgia é mais espalhada.',
  ],
  sections: [
    {
      h2: 'O que é a planta do pé, perto dos dedos?',
      figure: { id: 'ball', caption: 'A parte da frente da planta do pé fica embaixo das pontas dos metatarsos. A dor da metatarsalgia costuma ficar embaixo do segundo e do terceiro.', alt: 'Vista de cima dos ossos do pé com as pontas do segundo, terceiro e quarto metatarsos destacadas em vermelho.' },
      paragraphs: [
        'A parte da frente da planta do pé é a área acolchoada da sola logo atrás dos dedos. Embaixo dela ficam as cabeças dos cinco metatarsos, ossos longos que vão do meio do pé até a base de cada dedo. Quando você caminha, essa região recebe cerca de duas vezes o peso do seu corpo na fase em que o pé empurra o chão.',
        'Os músculos que dobram e abrem os dedos se chamam músculos intrínsecos do pé. Eles ajudam a dividir essa carga quando o pé empurra o chão. Quando eles enfraquecem, ou quando a estrutura do pé muda, mais força cai sobre as cabeças dos metatarsos, e muitas vezes é aí que a dor começa.',
      ],
    },
    {
      h2: 'O que causa dor na planta do pé?',
      paragraphs: [
        '**Metatarsalgia** é o nome mais comum. Descreve dor e inflamação em volta de uma ou mais cabeças dos metatarsos, normalmente a segunda e a terceira. Excesso de uso, um segundo metatarso longo, arco alto e panturrilhas tensas podem contribuir.',
        '**Neuroma de Morton** é um espessamento do nervo entre as cabeças dos metatarsos, na maioria das vezes entre o terceiro e o quarto dedos. Ele causa queimação, formigamento ou dormência, e não só uma dor. Sapatos apertados ou de salto alto comprimem o nervo e pioram o quadro.',
        '**Sesamoidite** é a inflamação dos dois ossinhos que ficam dentro do tendão embaixo da articulação do dedão. A dor fica bem embaixo do dedão, e não embaixo do meio da parte da frente do pé.',
        '**Fratura por estresse do metatarso** é uma pequena trinca em um dos metatarsos, normalmente o segundo ou o terceiro. A dor é localizada, muitas vezes piora ao longo do dia e pode doer à noite. Inchaço no peito do pé é comum. Esta precisa de exame de imagem e repouso.',
        '**Dedos em garra e dedos em martelo** dobram as articulações dos dedos para baixo, o que tira o dedo do chão e passa a carga do impulso de volta para a cabeça do metatarso atrás dele.',
        '**Saltos altos e sapatos apertados** jogam o peso para a frente do pé e apertam as cabeças dos metatarsos umas contra as outras, e é por isso que o neuroma de Morton é mais comum em quem usa esse tipo de calçado.',
        '**Arco alto** (pé cavo, um pé com arco alto e rígido) reduz a área de contato da sola, concentrando a pressão no calcanhar e na parte da frente do pé. No outro extremo, o [pé chato](/pt/exercicios-pe-chato/) também pode contribuir para a dor na parte da frente do pé, porque muda o jeito como o pé rola quando empurra o chão.',
        '**Panturrilhas tensas** são uma causa subestimada. Quando o gastrocnêmio, o músculo maior e mais superficial da panturrilha, está tenso, o tornozelo não consegue dobrar o suficiente durante a caminhada. O corpo compensa tirando o calcanhar do chão mais cedo, o que passa mais carga para a parte da frente do pé. É o mesmo mecanismo por trás da [fascite plantar](/pt/exercicios-fascite-plantar/) e da [tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Como diferenciar esses problemas?',
      paragraphs: [
        'O lugar da dor é a primeira pista:',
        {
          list: [
            'Dor espalhada embaixo da segunda e da terceira cabeças dos metatarsos aponta para metatarsalgia.',
            'Dor entre o terceiro e o quarto dedos, com formigamento, sugere neuroma de Morton.',
            'Dor bem embaixo da articulação do dedão combina mais com sesamoidite.',
            'Um ponto localizado no peito do pé, com inchaço, levanta a suspeita de fratura por estresse.',
          ],
        },
        'Fraturas por estresse muitas vezes não aparecem num raio-X simples nas primeiras duas a três semanas e podem precisar de ressonância magnética. **Vale a pena procurar um profissional de saúde** quando a dor continua depois de duas semanas mesmo com repouso e troca de calçado, ou quando há formigamento, dor à noite ou inchaço visível.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Exercício ajuda na dor na planta do pé?',
      keyFact: 'Em um estudo antes e depois de 2020 com 41\u00A0pessoas com metatarsalgia primária, um programa de 8\u00A0semanas de exercícios para os dedos baixou a dor em 2,7\u00A0pontos em média, numa escala de 10\u00A0pontos, sem grupo de controle (Amaha e colegas, 2020).',
      paragraphs: [
        'A resposta honesta é que **a evidência de exercício na metatarsalgia é inicial e limitada.** Ela é bem mais fraca do que a evidência para [fascite plantar](/pt/exercicios-fascite-plantar/) ou tendinite de Aquiles, em que existem ensaios randomizados.',
        'O melhor estudo até agora é um estudo antes e depois de 2020 com 41\u00A0pessoas (56\u00A0pés) com metatarsalgia primária. Um programa de 8\u00A0semanas de exercícios para os dedos, principalmente puxar a toalha com os dedos e pegar bolinhas de gude, baixou a nota da dor em 2,7\u00A0pontos em média numa escala de 10\u00A0pontos e melhorou a força de preensão dos dedos. Mas não havia grupo de controle, então parte da melhora pode ser recuperação natural. Os autores pediram ensaios randomizados.',
        'A lógica é simples: quando o pé empurra o chão, os dedos ajudam a dividir a carga com as cabeças dos metatarsos. Quando os músculos que dobram os dedos estão fracos, mais força cai sobre os metatarsos. O estudo de 2020 apoia essa ideia, mas um único estudo sem controle não é prova. Quem tinha sintomas havia mais de um ano melhorou menos, assim como quem tinha IMC mais alto.',
      ],
      sourceNote:
        'Amaha 2020: 41\u00A0pacientes, 56\u00A0pés, idade média de 63,4\u00A0anos. Desenho antes e depois. A EVA melhorou de 5,2 para 2,5 (p < 0,01). AOFAS melhorou, o teste de pegar bolinhas de gude melhorou, o tempo em apoio em uma perna melhorou (todos p < 0,01). Sem grupo de controle.',
      cites: [CITE.amaha],
    },
    {
      h2: 'Panturrilha tensa piora a dor na parte da frente do pé?',
      keyFact: 'Em 254\u00A0pessoas com fascite plantar, 52 a 60\u00A0por cento tinham uma contratura isolada do gastrocnêmio, uma panturrilha tensa que também está ligada à sobrecarga da parte da frente do pé (Patel e DiGiovanni, 2011).',
      paragraphs: [
        'Muito provavelmente. Quando o gastrocnêmio está tenso, o tornozelo não consegue dobrar o suficiente durante a caminhada. O corpo tira o calcanhar do chão mais cedo, o que joga mais peso na parte da frente do pé. O termo clínico é equino funcional, e ele é uma causa reconhecida de metatarsalgia.',
        'Os números vêm da pesquisa sobre fascite plantar, mas o mecanismo é o mesmo. Em 254\u00A0pessoas com fascite plantar, 52 a 60\u00A0por cento tinham uma contratura isolada do gastrocnêmio. Um estudo caso-controle com 50\u00A0casos e 100\u00A0controles mostrou que a dorsiflexão reduzida do tornozelo (o quanto o pé dobra para cima em direção à canela) era o fator de risco independente mais forte, com razão de chances de 23,3.',
        'Nenhum ensaio testou o alongamento da panturrilha especificamente para metatarsalgia, mas a ligação é reconhecida na clínica. Veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) para saber mais sobre a ligação entre panturrilha e tornozelo.',
      ],
      cites: [CITE.patelGastrocnemius, CITE.riddle],
    },
    {
      h2: 'E as almofadas metatarsais, as palmilhas e os calçados?',
      paragraphs: [
        'As almofadas metatarsais são a abordagem conservadora mais usada. Uma almofada colocada logo atrás das cabeças dos metatarsos levanta um pouco o corpo do osso e espalha a pressão por uma área maior. A posição importa. Muito para a frente, bem embaixo da cabeça, ela pode piorar a dor.',
        'Calçados com solado em mata-borrão (rocker) reduzem a pressão na parte da frente do pé porque deixam o pé rolar no impulso sem dobrar nas articulações dos metatarsos. Um bico largo evita que as cabeças sejam apertadas umas contra as outras. **Deixar de lado sapatos apertados ou de salto costuma ser o primeiro passo mais simples.**',
        'Almofadas e calçados mudam como a carga se distribui. O exercício constrói a força e a flexibilidade para lidar com essa carga. Quando [ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) faz parte do quadro, os dois importam.',
      ],
    },
    {
      h2: 'Quais exercícios ajudam na dor na planta do pé?',
      paragraphs: [
        'Estes exercícios miram dois lados do problema: a força dos dedos e dos músculos intrínsecos do pé (para dividir a carga no impulso) e a flexibilidade da panturrilha (para a parte da frente do pé não ficar sobrecarregada). Nenhum foi testado em um ensaio randomizado especificamente para metatarsalgia.',
        'Quando você toca na região da planta do pé, perto dos dedos, no mapa de dor do Walkito durante um check-in, a sessão de alívio traz abrir os dedos e o alongamento da fáscia plantar. A região dos dedos traz abrir os dedos e o pé curto sentado.',
      ],
      exercises: [
        {
          name: 'Abrir os dedos',
          dose: '3\u00A0séries de 10 aberturas',
          how: 'Sente-se ou fique em pé com o pé apoiado. Abra os cinco dedos o máximo que conseguir, segure 2 a 3\u00A0segundos e relaxe. Isso trabalha os pequenos músculos entre os metatarsos.',
          feel: 'Um alongamento entre os dedos e um esforço leve no peito do pé',
          stop: 'Dor na planta do pé durante o exercício',
          evidence: { level: 'early', why: 'Não há ensaio para metatarsalgia. O exercício mira os músculos intrínsecos do pé, que ajudam a distribuir a carga na parte da frente do pé.' },
          media: 'toe_spread',
          caption: 'Abrir os dedos: afaste os cinco dedos, segure e relaxe',
          alt: 'Um pé com os cinco dedos bem abertos, com os músculos entre os metatarsos destacados',
        },
        {
          name: 'Puxar a toalha com os dedos',
          dose: '3\u00A0séries de 10, cada pé',
          how: 'Sente-se com o pé apoiado sobre uma toalha. Dobre os dedos para puxar a toalha na sua direção. Solte e repita. É o mais parecido com o que o estudo de 2020 usou.',
          feel: 'Os músculos embaixo do arco e dos dedos trabalhando',
          stop: 'Dor na planta do pé durante o exercício',
          evidence: { level: 'early', why: 'O estudo de Amaha de 2020 usou um programa parecido de exercícios para os dedos e encontrou melhora da dor em 41\u00A0pessoas, mas não tinha grupo de controle.' },
          media: 'towel_scrunch',
          caption: 'Puxar a toalha com os dedos: dobre os dedos para puxar a toalha na sua direção',
          alt: 'Um pé sobre uma toalha, com os dedos dobrados puxando a toalha e os músculos intrínsecos do pé destacados',
        },
        {
          name: 'Pé curto, sentado',
          dose: '3\u00A0séries de 10, segurando cada uma por 5\u00A0segundos',
          how: 'Sente-se com o pé apoiado no chão. Sem dobrar os dedos, tente encurtar o pé puxando a parte da frente em direção ao calcanhar. O arco deve subir um pouco. Isso mira os músculos intrínsecos do pé, que sustentam o arco e a parte da frente do pé por baixo.',
          feel: 'Uma contração embaixo do arco',
          stop: 'Dor na planta do pé durante o exercício',
          evidence: { level: 'moderate', why: 'Uma metanálise de 2024 sobre o treino do pé curto encontrou melhora na postura do pé. Não foi testado especificamente para metatarsalgia.' },
          media: 'short_foot_seated',
          caption: 'Pé curto: suba o arco sem dobrar os dedos',
          alt: 'Uma figura sentada com um pé no chão, o arco subindo um pouco, com os músculos intrínsecos do pé destacados',
        },
        {
          name: 'Elevação do dedão',
          dose: '3\u00A0séries de 10, cada pé',
          how: 'Fique em pé ou sentado com o pé apoiado. Levante só o dedão, mantendo os outros quatro dedos no chão. Depois inverta: aperte o dedão no chão e levante os outros quatro. Quando o dedão não consegue estender direito, mais carga passa para as cabeças dos metatarsos vizinhos.',
          feel: 'Dificuldade no começo, depois um controle que vem aos poucos',
          stop: 'Dor embaixo da articulação do dedão que sugira sesamoidite',
          evidence: { level: 'early', why: 'Não há ensaio direto para metatarsalgia. Baseado no papel biomecânico do dedão na distribuição da carga na parte da frente do pé.' },
          media: 'big_toe_lift',
          caption: 'Elevação do dedão: levante o dedão mantendo os outros no chão',
          alt: 'Um pé no chão com o dedão levantado e os outros quatro dedos apoiados, com o músculo extensor destacado',
        },
        {
          name: 'Alongamento da fáscia plantar',
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          how: 'Sente-se e cruze o pé dolorido sobre o joelho oposto. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. A fáscia plantar vai do calcanhar até a base dos dedos e passa bem pela parte da frente da planta do pé.',
          feel: 'Um alongamento ao longo do arco e da sola do pé',
          stop: 'Dor aguda, e não sensação de alongamento',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar o grau máximo, A. Não foi testado especificamente para metatarsalgia, mas a fáscia faz parte da mesma estrutura que sustenta a carga.' },
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado',
          alt: 'Uma figura puxando para trás os dedos do pé cruzado, com a fáscia plantar destacada',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Segure até sentir o alongamento na parte de cima da panturrilha.',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'Dor no tendão de Aquiles',
          evidence: { level: 'strong', why: 'Grau A na diretriz de 2023 para dor no calcanhar para o alongamento da panturrilha. A panturrilha tensa é um fator reconhecido de sobrecarga da parte da frente do pé.' },
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e o gastrocnêmio destacado',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição do alongamento com o joelho esticado, depois dobre o joelho de trás até o alongamento descer, perto do tendão de Aquiles. Isso mira o sóleo, o músculo mais profundo da panturrilha, que só solta com o joelho dobrado.',
          feel: 'Um alongamento mais embaixo na panturrilha, perto do calcanhar',
          stop: 'Dor no tendão de Aquiles',
          evidence: { level: 'strong', why: 'Mesmo grau A na diretriz. Mira o sóleo, que também contribui para a rigidez do tornozelo.' },
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com o sóleo destacado',
        },
      ],
      cites: [CITE.amaha, CITE.guideline, CITE.cheng],
    },
    {
      h2: 'O que a evidência diz e o que ela não diz',
      paragraphs: [
        'A evidência de exercício na dor na planta do pé é mais fraca do que para [fascite plantar](/pt/exercicios-fascite-plantar/) ou tendinite de Aquiles, em que existem ensaios randomizados. Para metatarsalgia, há um estudo antes e depois com 41\u00A0pessoas e sem grupo de controle. O raciocínio biomecânico faz sentido, e o risco de exercícios leves para os dedos e alongamentos da panturrilha é baixo, mas falta a prova direta de um ensaio controlado.',
        '**Só o exercício pode não bastar.** Almofadas metatarsais, calçados com bico largo e menos tempo de salto têm um consenso clínico mais amplo.',
        'No neuroma de Morton, trocar de calçado e usar almofadas muitas vezes funciona melhor do que exercício. Numa fratura por estresse do metatarso, exercício é o caminho errado até o osso se recuperar. Se a dor dura mais de algumas semanas, ou vem com dormência ou inchaço, faça uma avaliação primeiro. [Dor no calcanhar na corrida](/heel-pain-runners/) (em inglês) fala do controle de carga para quem corre.',
      ],
      cites: [CITE.amaha, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'O que é metatarsalgia?',
      cites: [CITE.amaha],
      a: 'Metatarsalgia é dor e inflamação em volta das cabeças dos metatarsos, as “juntas” ósseas na parte da frente da planta do pé. Ela descreve onde dói, não é um diagnóstico único. Causas comuns são excesso de uso, arco alto, panturrilhas tensas e músculos que dobram os dedos enfraquecidos. Em um estudo com 41\u00A0pessoas, exercícios para os dedos melhoraram a dor em 2,7\u00A0pontos em média numa escala de 10\u00A0pontos (Amaha 2020).',
    },
    {
      q: 'Como saber se é metatarsalgia ou neuroma de Morton?',
      a: 'A metatarsalgia é uma dor, de surda a aguda, espalhada embaixo da parte da frente da planta do pé. O neuroma de Morton é mais específico: queimação, formigamento ou dormência entre o terceiro e o quarto dedos, às vezes com um estalo quando você aperta a parte da frente do pé. Um profissional de saúde consegue diferenciar os dois com exame físico e ultrassom.',
    },
    {
      q: 'Exercício para os dedos ajuda na dor na planta do pé?',
      cites: [CITE.amaha],
      a: 'A evidência é inicial. Um estudo com 41\u00A0pessoas mostrou que 8\u00A0semanas de exercícios para os dedos melhoraram a dor e a força de preensão, mas ele não tinha grupo de controle e os próprios autores pediram ensaios randomizados (Amaha 2020). A ideia faz sentido: dedos mais fortes deveriam dividir mais da carga do impulso. Mas falta a prova direta de um ensaio controlado.',
    },
    {
      q: 'Por que a panturrilha tensa causa dor na planta do pé?',
      cites: [CITE.patelGastrocnemius, CITE.riddle],
      a: 'Quando o gastrocnêmio, o músculo maior e mais superficial da panturrilha, está tenso, o tornozelo não consegue dobrar o suficiente durante a caminhada. O corpo compensa tirando o calcanhar do chão mais cedo, o que joga mais peso na parte da frente do pé. Em pessoas com fascite plantar, 52 a 60\u00A0por cento tinham uma contratura isolada do gastrocnêmio (Patel e DiGiovanni, 2011). O mesmo mecanismo contribui para a sobrecarga da parte da frente do pé.',
    },
    {
      q: 'Almofada metatarsal funciona para dor na planta do pé?',
      a: 'As almofadas metatarsais são a abordagem conservadora mais usada para dor na parte da frente do pé. Elas levantam o corpo do metatarso logo atrás da área dolorida e espalham a pressão por uma superfície maior. A posição importa: a almofada deve ficar logo atrás das cabeças dos metatarsos, não bem embaixo delas, ou pode aumentar a dor.',
    },
    {
      q: 'Dor na planta do pé pode ser fratura por estresse?',
      cites: [CITE.patelStressFracture],
      a: 'Pode. As fraturas por estresse do metatarso, normalmente no segundo ou no terceiro, causam uma dor localizada que piora ao longo do dia e pode doer à noite. Inchaço no peito do pé é comum. Uma fratura por estresse muitas vezes não aparece num raio-X simples nas primeiras duas a três semanas e pode precisar de ressonância magnética. Esse é um dos motivos para procurar um profissional de saúde se a dor na parte da frente do pé continuar.',
    },
    {
      q: 'Qual o melhor calçado para dor na planta do pé?',
      a: 'Calçados com bico largo, solado com amortecimento e salto baixo. Calçados com solado em mata-borrão (rocker) ajudam porque deixam o pé rolar no impulso sem dobrar nas articulações dos metatarsos. Sapatos apertados e saltos altos fazem o contrário. No neuroma de Morton principalmente, trocar de calçado costuma ser o passo isolado mais eficaz.',
    },
    {
      q: 'Quanto tempo dura uma crise de metatarsalgia?',
      a: 'Não há um prazo fixo. Uma crise leve muitas vezes acalma quando você reduz a atividade que a desencadeou, troca para calçados mais largos e com amortecimento e acrescenta uma almofada metatarsal. Crises ligadas a uma causa que continua, como salto alto, dedos em garra ou panturrilha tensa, podem durar meses, já que nenhum prazo único serve para todas as causas.',
    },
    {
      q: 'Quais as complicações da metatarsalgia não tratada?',
      a: 'Sem cuidado, a metatarsalgia pode mudar o seu jeito de andar, porque as pessoas naturalmente tiram o peso do ponto dolorido e passam para outras partes do pé, o que pode criar novos pontos de dor. A pressão contínua nas cabeças dos metatarsos também pode contribuir para calos ou, menos vezes, para deformidades dos dedos, como dedos em martelo. Trocar de calçado cedo e usar almofadas metatarsais reduz esse risco.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'há formigamento, queimação ou dormência nos dedos, o que pode indicar um problema de nervo como o neuroma de Morton',
      'a dor fica em um único ponto e piora ao longo do dia, o que pode sugerir uma fratura por estresse',
      'há inchaço visível no peito do pé',
      'a dor começou depois de um aumento repentino de atividade, de uma queda ou de uma pancada',
      'a articulação do dedão está rígida, travada ou não dobra para trás',
      'a dor não melhora depois de duas semanas de repouso, troca de calçado e almofadas',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
      'os dois pés doem e outras articulações estão inchadas ou rígidas',
      'ela acorda você à noite ou aparece em repouso',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você pode fazer os exercícios desta página por conta própria, ou deixar o Walkito organizar tudo para você. O app monta um plano uma semana de cada vez. Quando você marca a planta do pé, perto dos dedos, no mapa de dor, a sessão do check-in se concentra em abrir os dedos e no alongamento da fáscia plantar. O programa mais amplo acrescenta alongamento e fortalecimento da panturrilha com o passar das semanas.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando essa meta for alcançada), um teste curto mede o progresso para você ver o que está mudando. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a sua dor na parte da frente do pé vem com dormência, inchaço ou um caroço, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor na planta do pé',
  campaign: 'guide-ball-of-foot-pt',
};
