import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/can-plantar-fasciitis-cause-knee-pain.ts
 * (2026-10-19), written around «fascite plantar pode causar dor no joelho»,
 * «dor no quadril» and «dor nas costas». Informal «você». Figures, grades,
 * doses, hedges and CITE keys are identical to the English page after its
 * fact-check. Same media ids. Exercise names follow the other Portuguese
 * pages. All links have a Portuguese target. Emergency line points to the
 * pronto-socorro. "Clinician" is «profissional de saúde».
 */

export const PF_KNEE_HIP_BACK_PT: Guide = {
  lang: 'pt',
  page: 'pfKneeHipBack',
  mainSource: CITE.kamonseki,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantar causa dor no joelho, quadril ou costas?',
  description:
    'A fascite plantar pode causar dor no joelho, no quadril ou nas costas? O que mostram os estudos da marcha, o que falta provar, exercícios e alertas.',
  h1: 'A fascite plantar pode causar dor no joelho, no quadril ou nas costas?',
  lede:
    'Ela pode contribuir, mas ninguém comprovou isso. Um calcanhar dolorido muda o jeito de andar: estudos sobre [fascite plantar](/pt/fascite-plantar/) mostram que as pessoas colocam menos peso no calcanhar e mais na parte da frente do pé (Phillips e McClinton, 2017), e essa mudança pode carregar o joelho, o quadril e as costas de outro jeito. Nenhum estudo acompanhou pessoas com dor no calcanhar para ver se depois aparece dor no joelho, no quadril ou nas costas, então a evidência mostra associações, não prova de causa.',
  intro: [
    'Esta página passa pelo joelho, pelo quadril, pelas costas, pela panturrilha e pelo tornozelo, um de cada vez, diz o que os estudos encontraram e de que tamanho eram, explica o que significa o único ensaio de fortalecimento do quadril na fascite plantar (Kamonseki e colegas, 2016) e traz os exercícios e as doses que fazem sentido. Se a dor no joelho ou nas costas veio primeiro, ou se você tem pé chato, veja [pé chato e dor no joelho](/pt/pe-chato-dor-no-joelho/) e [pé chato e dor nas costas](/pt/pe-chato-dor-nas-costas/).',
  ],
  takeaways: [
    'Em uma revisão de 19\u00A0estudos de marcha, pessoas com dor na sola do calcanhar colocavam menos carga no calcanhar e mais no meio e na frente do pé, enquanto o tempo apoiado em cada pé continuava mais ou menos igual (Phillips e McClinton, 2017).',
    'Em 18\u00A0pessoas sem dor no pé, uma bolinha dolorida embaixo do calcanhar bastou para encurtar o tempo apoiado naquela perna a cada passo (Levins e colegas, 1998).',
    'Entre 40\u00A0pessoas com artrose no joelho, 52% tinham dor no calcanhar e 62% tinham a fáscia plantar espessada no ultrassom. O estudo não tinha grupo de comparação, então não consegue mostrar o que causou o quê (Miladi e colegas, 2023).',
    'Em um ensaio com 83\u00A0pessoas com fascite plantar, somar fortalecimento do pé e do quadril ao alongamento não reduziu a dor no calcanhar mais do que só o alongamento ao longo de oito semanas. Os três grupos melhoraram (Kamonseki e colegas, 2016).',
    'A panturrilha encurtada é a ligação mais estudada: pessoas com 0\u00A0grau ou menos de dobra do tornozelo tinham 23,3\u00A0vezes a chance de fascite plantar em comparação com pessoas acima de 10\u00A0graus (Riddle e colegas, 2003).',
  ],
  toc: true,
  sections: [
    {
      h2: 'A fascite plantar pode causar dor em outras partes da perna?',
      keyFact: 'Uma revisão de 19\u00A0estudos de marcha concluiu que pessoas com dor na sola do calcanhar tiram carga do calcanhar e passam para o meio e a frente do pé (Phillips e McClinton, 2017).',
      paragraphs: [
        '**Provavelmente às vezes, pelo jeito de andar.** A fascite plantar não se espalha perna acima. O que muda é a sua caminhada. Quando o calcanhar dói, você pisa nele com mais cuidado, impulsiona com menos força e se apoia na parte da frente do pé. Uma revisão de 2017 com 19\u00A0estudos encontrou exatamente esse padrão: menos carga no calcanhar no primeiro contato e mais tempo e carga no meio e na frente do pé.',
        'A mudança pode ser tão pequena que você nem percebe. Nessa revisão, o tempo total de cada pé no chão era mais ou menos o mesmo das pessoas sem dor no calcanhar. Em um estudo de laboratório, 18\u00A0pessoas sem dor no pé andaram com uma bolinha embaixo do calcanhar e, com as bolinhas maiores, passaram menos tempo apoiadas naquela perna (Levins e colegas, 1998). Isso é um leve mancar, pelo menos em um teste curto de laboratório com uma dor repentina.',
        'Veja como está a evidência para cada região:',
      ],
      table: {
        caption: 'Fascite plantar e dor em outros lugares: o que os estudos mostram',
        head: ['Região', 'Estudos diretos', 'Força'],
        rows: [
          ['Panturrilha', 'Panturrilha encurtada ligada à fascite plantar', 'Moderada'],
          ['Tornozelo e Aquiles', 'Fáscia mais grossa com alterações no Aquiles', 'Baixa'],
          ['Joelho', 'Dor no calcanhar comum na artrose do joelho', 'Baixa'],
          ['Quadril', 'Controle do quadril diferente em corredores', 'Baixa'],
          ['Costas', 'Nenhum estudo na fascite plantar', 'Nenhuma'],
        ],
      },
      after: [
        '“Baixa” quer dizer estudos pequenos que mediram as duas coisas em um único momento. Eles mostram que os dois problemas costumam aparecer juntos. Não conseguem mostrar que o calcanhar causou a outra dor, nem o contrário.',
      ],
      cites: [CITE.phillipsGait, CITE.levinsGait],
    },
    {
      h2: 'A fascite plantar pode causar dor no joelho?',
      keyFact: 'Entre 40\u00A0pessoas com artrose no joelho, 52% tinham dor no calcanhar e 62% tinham a fáscia plantar espessada no ultrassom (Miladi e colegas, 2023).',
      paragraphs: [
        '**As duas coisas aparecem juntas com frequência, mas nenhum estudo mostra que o calcanhar causa a dor no joelho.** O estudo mais próximo olhou para 40\u00A0pessoas com artrose no joelho. 21 delas (52%) tinham dor no calcanhar, e um ultrassom mostrou a fáscia plantar espessada em 25 (62%). As pessoas com fascite plantar tinham com mais frequência um tornozelo rígido, que não dobrava bem para cima (Miladi e colegas, 2023).',
        'Esse estudo não tinha um grupo de comparação de pessoas sem artrose no joelho, então não consegue dizer que a dor no calcanhar é mais comum do que o normal. Os autores lembram que os dois problemas têm fatores de risco em comum: envelhecer, o peso, o tipo de trabalho e calçados que não servem bem. Um tornozelo rígido pode ser a ligação em comum, em vez de uma articulação causar o problema da outra.',
        'Se o seu joelho começou a doer do mesmo lado depois que a dor no calcanhar apareceu, e alivia conforme o calcanhar se acalma, uma caminhada alterada é um palpite razoável. Se o joelho incha, trava, engancha ou falseia, ele tem um problema próprio e precisa da sua própria avaliação.',
        'Para dor em volta da patela, a diretriz de 2019 para dor patelofemoral recomenda exercícios que combinem quadril e joelho (Willy e colegas, 2019). Se você também tem pé chato, o lado do pé nessa história do joelho está em [pé chato e dor no joelho](/pt/pe-chato-dor-no-joelho/).',
      ],
      cites: [CITE.miladiKneeOa, CITE.willyPfpGuideline],
    },
    {
      h2: 'A fascite plantar pode causar dor no quadril?',
      keyFact: 'Corredores com fascite plantar mostraram menos atividade do glúteo médio e mais queda da pelve do que corredores sem ela, em um estudo de 15 contra 15 (Kongtong e Khongprasert, 2025).',
      paragraphs: [
        '**Existe uma ligação com o quadril, mas não se sabe o que vem primeiro.** Um estudo de laboratório de 2025 comparou 15\u00A0corredores de longa distância com fascite plantar e 15 sem. Os corredores com dor no calcanhar usavam menos o glúteo médio e o glúteo máximo, os músculos da lateral e de trás do quadril, em certos momentos da passada. A pelve deles caía mais do outro lado, e o joelho e o calcanhar tombavam mais para dentro (Kongtong e Khongprasert, 2025).',
        'Isso combina com duas histórias, e o estudo não consegue escolher entre elas. Um controle fraco do quadril pode deixar a perna girar para dentro e carregar mais o arco. Ou a dor no calcanhar pode mudar o jeito de correr, e o quadril acompanha. Nenhum estudo mediu dor no quadril em pessoas com fascite plantar.',
        'Um estudo de 2009 com 25\u00A0corredoras com histórico de fascite plantar e 25\u00A0corredoras pareadas concluiu que o grupo com fascite plantar pisava com um aumento mais rápido da força e tinha arcos mais baixos, mas sem diferença no movimento da parte de trás do pé e, ao contrário dos estudos sobre a panturrilha, com mais dobra do tornozelo (Pohl e colegas, 2009). Quem corre encontra mais em [exercícios para os pés de corredores](/pt/exercicios-para-os-pes-corredores/).',
      ],
      cites: [CITE.kongtongHip, CITE.pohlRunners],
    },
    {
      h2: 'A fascite plantar pode causar dor nas costas?',
      keyFact: 'Nenhum estudo mediu se a fascite plantar leva a dor lombar. Para o pé chato, o Framingham Foot Study, com 1.930\u00A0adultos, não encontrou ligação com a postura do pé em pé (Menz e colegas, 2013).',
      paragraphs: [
        '**Não encontramos nenhum estudo que teste se a fascite plantar leva a dor nas costas.** Algumas páginas de clínicas dizem que mancar por causa da dor no calcanhar “frequentemente” causa dor nas costas. Essa é uma cadeia possível, não uma cadeia medida.',
        'A evidência mais próxima é sobre o formato do pé, não sobre dor no calcanhar. No Framingham Foot Study, a postura de pé chato não esteve ligada a dor lombar, e só um pé que girava para dentro durante a caminhada mostrou uma ligação pequena, em mulheres (Menz e colegas, 2013). Os detalhes estão em [pé chato e dor nas costas](/pt/pe-chato-dor-nas-costas/), então não repetimos aqui.',
        'A dor lombar é muito comum e, para a maioria das pessoas, não se encontra uma causa única (Hartvigsen e colegas, 2018). Então, se as suas costas doem, o calcanhar é um possível fator entre muitos. O exercício é a abordagem com mais respaldo para dor nas costas que dura: uma revisão Cochrane de 2021 com 249\u00A0ensaios concluiu que ele reduziu a dor em cerca de 15\u00A0pontos numa escala de 100 (Hayden e colegas, 2021).',
      ],
      cites: [CITE.menz, CITE.hartvigsen, CITE.haydenExercise],
    },
    {
      h2: 'A fascite plantar pode causar dor na panturrilha ou no tornozelo?',
      keyFact: 'Em 254\u00A0pessoas com fascite plantar, de 52 a 60\u00A0por cento tinham encurtamento isolado do gastrocnêmio, o músculo maior da panturrilha (Patel e DiGiovanni, 2011).',
      paragraphs: [
        '**A panturrilha é a ligação mais estudada, e ela pode ir da panturrilha para o calcanhar.** Uma panturrilha encurtada limita o quanto o tornozelo dobra. Em um estudo de caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem, pessoas com 0\u00A0grau ou menos de dobra do tornozelo tinham 23,3\u00A0vezes a chance de fascite plantar em comparação com pessoas acima de 10\u00A0graus (Riddle e colegas, 2003). Em 254\u00A0pessoas com fascite plantar, de 52 a 60\u00A0por cento tinham encurtamento isolado do gastrocnêmio (Patel e DiGiovanni, 2011).',
        'Então panturrilha encurtada junto com dor no calcanhar é comum, e alongá-la faz parte do plano para a dor no calcanhar. Mais sobre isso em [panturrilha tensa](/pt/panturrilha-tensa/).',
        'A fáscia plantar e o tendão de Aquiles também estão ligados. Em 52\u00A0ressonâncias magnéticas, pessoas com alterações no Aquiles tinham uma fáscia plantar mais grossa, 3,43\u00A0mm em média contra 2,09\u00A0mm (Stecco e colegas, 2013). Se a dor fica atrás do calcanhar, e não embaixo, leia [fascite plantar ou tendinite de Aquiles](/pt/fascite-plantar-ou-tendinite-de-aquiles/).',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.steccoPfAchilles],
    },
    {
      h2: 'Fortalecer o quadril ajuda a fascite plantar?',
      keyFact: 'Em 83\u00A0pessoas com fascite plantar, só alongamento, alongamento mais fortalecimento do pé e alongamento mais fortalecimento do pé e do quadril melhoraram a dor e a função ao longo de oito semanas, sem diferença entre eles (Kamonseki e colegas, 2016).',
      paragraphs: [
        '**Para o calcanhar em si, acrescentar o quadril não foi melhor do que o alongamento no único ensaio que testou isso.** Em 2016, Kamonseki e colegas dividiram 83\u00A0pessoas com fascite plantar em três grupos por oito semanas:',
        {
          list: [
            'Só alongamento.',
            'Alongamento mais fortalecimento do pé.',
            'Alongamento mais fortalecimento do pé e do quadril (os músculos que levam a perna para o lado e a giram para fora).',
          ],
        },
        'Os três grupos melhoraram na dor no calcanhar, na função no dia a dia e em um teste de alcance e equilíbrio, e nenhum grupo se saiu melhor que os outros.',
        'O que isso significa na prática:',
        {
          list: [
            'O alongamento continua sendo a base. A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau **A**, o seu mais alto, e ao trabalho de força o grau **B** (Koc e colegas, 2023).',
            'O trabalho de quadril não é um atalho para o calcanhar. Um ensaio, oito semanas e 83\u00A0pessoas não bastam para descartar um benefício, mas ele não mostrou nenhum.',
            'O ensaio não mediu dor no joelho, no quadril ou nas costas. Se essas regiões doem, fortalecer o quadril continua sendo um acréscimo sensato, e para dor na patela a diretriz dessa condição apoia exercícios de quadril e joelho (Willy e colegas, 2019).',
          ],
        },
      ],
      cites: [CITE.kamonseki, CITE.guideline, CITE.willyPfpGuideline],
    },
    {
      h2: 'Quais exercícios ajudam quando a dor no calcanhar sobe pela perna?',
      paragraphs: [
        'Comece pelo calcanhar: os alongamentos e o trabalho de panturrilha do guia de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/). Depois acrescente quadril e equilíbrio para a perna acima dele. As doses abaixo são as doses iniciais do Walkito dos guias de dor no calcanhar e de pé chato.',
        'Fique num nível em que o calcanhar não esteja pior na manhã seguinte. Se a própria caminhada é o gatilho, [caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/) mostra como continuar se mexendo sem provocar uma crise.',
      ],
      exercises: [
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha encurtada puxa o calcanhar o dia todo, então este alongamento importa mesmo que você o sinta mais acima.',
          stop: 'Dor forte no calcanhar, ou dor na panturrilha que continua depois que você para',
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
          stop: 'Dor forte no calcanhar, ou dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente e outro atrás e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga enquanto a panturrilha acorda.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Abdução de quadril, em pé, com faixa',
          evidence: { level: 'early', why: 'O fortalecimento do quadril fez parte de um ensaio de fascite plantar (Kamonseki 2016), mas não acrescentou nada ao alongamento para a dor no calcanhar ao longo de oito semanas.' },
          dose: '3\u00A0séries de 10, cada perna',
          often: 'Dias de força',
          feel: 'Trabalho na lateral do quadril',
          how: 'Fique em pé com uma faixa elástica e leve uma perna para o lado contra a faixa. Empurre pelo calcanhar, não pelos dedos. Mantenha o corpo reto e não incline para o outro lado. Um quadril que cede joga a carga no arco.',
          stop: 'Dor forte no quadril ou na virilha',
          image: 'Exercício: abdução de quadril',
          media: 'hip_abduction',
          caption: 'Abdução de quadril: leve uma perna para o lado contra a faixa',
          alt: 'Uma figura em pé com uma faixa em volta das duas pernas levando uma perna para o lado, com a lateral do quadril destacada',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. O equilíbrio melhorou em todos os grupos do ensaio de 2016, mas este exercício não foi testado sozinho.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé, no tornozelo e no quadril',
          how: 'Fique em um pé só e olhe para um ponto fixo à frente. Deixe o pé balançar. É para balançar mesmo, porque esse balanço é o pé fazendo o trabalho de equilíbrio. Mantenha a pelve nivelada, para o quadril do lado de apoio trabalhar também. Encoste de leve as pontas dos dedos numa bancada ou na parede se precisar. Mais em [equilíbrio em uma perna](/pt/exercicios/equilibrio-uma-perna/).',
          stop: 'Dor forte no pé ou no tornozelo, não só o balanço',
          image: 'Exercício: equilíbrio em uma perna',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
      ],
      cites: [CITE.guideline, CITE.kamonseki],
    },
    {
      h2: 'Como saber se a dor no joelho, no quadril ou nas costas não vem do calcanhar?',
      keyFact: 'Causas graves de dor nas costas são raras, e uma estrutura internacional lista os sinais de alerta que os profissionais de saúde verificam primeiro (Finucane e colegas, 2020).',
      paragraphs: [
        'Uma caminhada alterada é só uma explicação. Estes sinais apontam para um problema separado, que precisa da sua própria avaliação:',
        {
          list: [
            '**A outra dor veio primeiro,** ou não tem nada a ver com o quanto você anda.',
            '**O joelho incha, trava, engancha ou falseia.** Esses são sinais de um problema dentro do joelho.',
            '**A dor é na virilha,** ou o quadril fica rígido quando você calça meias ou sapatos.',
            '**A dor desce pela perna abaixo do joelho, com dormência, formigamento ou fraqueza.** Isso pode vir de um nervo nas costas, e dor no calcanhar com queimação ou formigamento também pode ser dor de nervo.',
            '**Dor à noite ou em repouso** que não alivia quando você muda de posição. Veja também [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/).',
          ],
        },
        'Os profissionais de saúde usam uma lista curta de sinais de alerta para descartar problemas graves e raros na coluna (Finucane e colegas, 2020). Eles estão na lista abaixo.',
      ],
      cites: [CITE.finucaneRedFlags],
    },
  ],
  faq: [
    {
      q: 'A fascite plantar pode causar dor no joelho?',
      cites: [CITE.phillipsGait, CITE.miladiKneeOa],
      a: 'Ela pode contribuir, mas isso não está comprovado. A dor no calcanhar desloca a carga para a parte da frente do pé enquanto você anda, o que muda a carga sobre o joelho. Entre 40\u00A0pessoas com artrose no joelho, 52% tinham dor no calcanhar, mas, sem grupo de comparação, o estudo não consegue mostrar que uma coisa causou a outra.',
    },
    {
      q: 'A fascite plantar pode causar dor no quadril?',
      cites: [CITE.kongtongHip],
      a: 'Possivelmente, mas nenhum estudo mediu dor no quadril em pessoas com fascite plantar. Um estudo de 2025 com 15\u00A0corredores com fascite plantar e 15 sem encontrou menos atividade nos músculos da lateral do quadril e mais queda da pelve no grupo com dor no calcanhar. Ele não conseguiu dizer o que veio primeiro.',
    },
    {
      q: 'A fascite plantar pode causar dor lombar?',
      cites: [CITE.menz, CITE.hartvigsen],
      a: 'Não há estudo testando isso. Mancar por causa da dor no calcanhar poderia aumentar o esforço, mas essa cadeia não foi medida. Para a maioria das pessoas com dor lombar não se encontra uma causa única, e no Framingham Foot Study a postura de pé chato não esteve ligada a dor nas costas.',
    },
    {
      q: 'A fascite plantar pode causar dor na panturrilha?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'A panturrilha encurtada costuma andar junto com a fascite plantar, e a ligação pode ir da panturrilha para o calcanhar. Os estudos mediram o encurtamento, não a dor na panturrilha. Pessoas com 0\u00A0grau ou menos de dobra do tornozelo tinham 23,3\u00A0vezes a chance de fascite plantar, e de 52 a 60\u00A0por cento de 254\u00A0pessoas com o problema tinham o gastrocnêmio encurtado.',
    },
    {
      q: 'A dor no calcanhar pode causar dor na outra perna?',
      cites: [CITE.levinsGait],
      a: 'Em teoria, pode. Quando um calcanhar dói, você pode passar menos tempo apoiado naquela perna, como mostrou um teste curto de laboratório com 18\u00A0pessoas com uma bolinha dolorida embaixo do calcanhar. Nenhum estudo mediu dor na outra perna em pessoas com fascite plantar.',
    },
    {
      q: 'Exercícios de quadril vão ajudar a minha fascite plantar?',
      cites: [CITE.kamonseki],
      a: 'Não para o calcanhar em si, pelo que mostra o único ensaio. Em 83\u00A0pessoas ao longo de oito semanas, somar fortalecimento do pé e do quadril ao alongamento não reduziu a dor no calcanhar mais do que só o alongamento, e todos os grupos melhoraram. O trabalho de quadril ainda pode fazer sentido se o seu joelho ou quadril também doem.',
    },
    {
      q: 'Devo cuidar primeiro do calcanhar ou do joelho?',
      cites: [CITE.guideline, CITE.willyPfpGuideline],
      a: 'Dá para cuidar dos dois ao mesmo tempo. Os alongamentos para o calcanhar e a força na panturrilha têm graus A e B na diretriz de 2023 para dor no calcanhar, e exercícios de quadril e joelho são recomendados para dor na patela. Se o joelho incha, trava ou falseia, faça uma avaliação em vez de esperar o calcanhar se acalmar.',
    },
    {
      q: 'A fascite plantar pode causar dor no tornozelo?',
      cites: [CITE.steccoPfAchilles],
      a: 'Dor atrás do calcanhar ou em volta do tendão de Aquiles pode vir junto com a fascite plantar. Em 52\u00A0ressonâncias magnéticas, pessoas com alterações no Aquiles tinham uma fáscia plantar mais grossa, 3,43\u00A0mm em média contra 2,09\u00A0mm. Dor nas laterais do tornozelo depois de uma torção é outro problema.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor no joelho, no quadril ou nas costas veio primeiro, ou não muda com o quanto você anda',
      'o joelho incha, trava, engancha ou falseia, ou você não consegue dobrá-lo ou esticá-lo totalmente',
      'a dor desce pela perna abaixo do joelho, ou você tem dormência, formigamento, queimação ou fraqueza na perna ou no pé',
      'a dor acorda você à noite ou aparece em repouso e não alivia quando você muda de posição',
      'você tem dor nas costas com febre, perda de peso sem explicação ou histórico de câncer',
      'você tem dormência na virilha ou nas nádegas, ou uma dificuldade nova para controlar a bexiga ou o intestino: vá a um pronto-socorro',
      'a dor começou depois de uma queda, uma torção ou um estalo, ou você não consegue apoiar o peso na perna',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé com os exercícios desta página: alongamentos de panturrilha e de sóleo, elevação de calcanhar, abdução de quadril e equilíbrio em uma perna. Ele trabalha o calcanhar e a perna acima dele. Ele não avalia o seu joelho, quadril ou costas, então faça uma avaliação se essas regiões tiverem os próprios sinais de alerta.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar de manhã, e o plano se ajusta a ela. Um teste a cada 14\u00A0dias compara o lado esquerdo e o direito. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPain', 'flatFeetKneePain', 'flatFeetBackPain'],
  crumb: 'Fascite plantar e dor no joelho, quadril ou costas',
  campaign: 'guide-can-plantar-fasciitis-cause-knee-pain-pt',
};
