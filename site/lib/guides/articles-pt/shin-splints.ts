import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/shin-splints.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». «Canelite» is the everyday Brazilian name for
 * shin splints; the clinical name (síndrome do estresse tibial medial) is
 * given once in the lede. Figures, doses and qualifiers are identical to the
 * English page.
 */

/** `3, 5 ou 7`: the plan's options as a Portuguese list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} ou ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_PT: Guide = {
  lang: 'pt',
  page: 'shinSplints',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercícios para canelite: o que ajuda e o que não ajuda',
  description:
    'Exercícios para canelite em corredores: o que a pesquisa mostra, doses iniciais, como diferenciar canelite de fratura por estresse e quando procurar ajuda.',
  h1: 'Exercícios para canelite: o que ajuda e o que não ajuda',
  lede:
    'Canelite é dor ao longo da borda de dentro do osso da canela, espalhada por vários centímetros e não em um ponto só. O nome clínico é síndrome do estresse tibial medial, ou SETM. A maioria das páginas lista exercícios como se fosse comprovado que eles aceleram a recuperação. Uma revisão sistemática de 2013 de todos os ensaios de tratamento concluiu que não foi demonstrado que exercícios de alongamento e de fortalecimento encurtam a canelite.',
  intro: [
    'Isso não quer dizer que exercício seja inútil. Os exercícios abaixo trabalham a resistência da panturrilha, a força da canela e o controle do quadril, as áreas em que os pesquisadores encontraram diferenças entre pessoas com e sem canelite. Um estudo caso-controle mostrou que corredores com canelite conseguiam fazer menos elevações de calcanhar até a falha do que controles pareados sem canelite.',
    'Se recuperar essa resistência encurta a recuperação ainda é uma pergunta em aberto. A alavanca mais segura, em todos os ensaios até agora, é reduzir a carga de corrida que causou o problema.',
    'A elevação de calcanhar em si, incluindo quantas repetições e quando acrescentar carga, está explicada com mais detalhes em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/). Se você passa o dia em pé em vez de correr, [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) traz os mesmos exercícios de panturrilha e de arco para essa causa.',
  ],
  toc: true,
  takeaways: [
    'Uma revisão sistemática de 2013 de 11\u00A0ensaios de tratamento concluiu que não está comprovado que exercícios de alongamento e de fortalecimento acelerem a recuperação da síndrome do estresse tibial medial (Winters e colegas, 2013).',
    'No único ensaio randomizado de exercício para canelite, com 74\u00A0atletas, somar alongamento e fortalecimento da panturrilha a um programa de corrida gradual não encurtou a recuperação em comparação com o programa de corrida sozinho (Moen e colegas, 2012).',
    'Corredores com canelite conseguiam fazer menos elevações de calcanhar até a falha do que controles pareados, o que sugere uma diferença na resistência da panturrilha (Madeley e colegas, 2007).',
    'Uma dor ao toque localizada, em um único ponto pequeno, em vez de uma dor espalhada por vários centímetros do osso, pode ser uma fratura por estresse e precisa de um profissional de saúde, não de mais exercício.',
  ],
  sections: [
    {
      h2: 'O que é canelite, e quais exercícios ajudam de verdade?',
      keyFact: 'Uma revisão sistemática de 2013 que reuniu 11\u00A0ensaios de tratamento para canelite concluiu que nenhuma abordagem de alongamento ou de fortalecimento tinha evidência clara de acelerar a recuperação (Winters e colegas, 2013).',
      paragraphs: [
        'A canelite, ou síndrome do estresse tibial medial, é uma lesão por sobrecarga do osso da canela e do tecido em volta dele. A dor costuma ser difusa, espalhada ao longo da borda de dentro da tíbia por vários centímetros, e normalmente começa durante ou depois da corrida. Uma revisão de 2020 com corredores iniciantes e recreativos encontrou as ligações mais claras no jeito como os corredores se movem, incluindo mais rotação do quadril e um pé que vira para dentro mais que o normal.',
        'A resposta honesta sobre exercícios para canelite é que **nenhum programa de exercícios específico mostrou acelerar a recuperação em um ensaio controlado.** Uma revisão sistemática de 2013 analisou 11\u00A0estudos de tratamento e concluiu que alongamento e fortalecimento “não tiveram eficácia comprovada no tratamento da SETM”.',
        'No único ensaio randomizado com um grupo de exercício, 74\u00A0atletas foram divididos em três grupos:',
        {
          list: [
            'Um programa de corrida gradual sozinho.',
            'O mesmo programa com alongamento e fortalecimento da panturrilha.',
            'O mesmo programa com meias de compressão.',
          ],
        },
        'Os três grupos melhoraram em um ritmo parecido.',
        'Então os exercícios abaixo não são um protocolo específico para canelite. São exercícios gerais de perna e de quadril que já estão no catálogo e que trabalham os músculos e as articulações que os pesquisadores estudaram em pessoas com canelite. O passo mais forte continua sendo reduzir a carga de corrida e reconstruí-la devagar.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Quais exercícios ajudam na canelite, e quanto fazer?',
      paragraphs: [
        'Estes são exercícios do catálogo do app que coincidem com os músculos e os fatores de risco identificados na pesquisa sobre canelite. Os alongamentos de panturrilha e as elevações de calcanhar são os mesmos usados em [exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/), e trabalham os mesmos tecidos. São doses iniciais, não uma prescrição. Todo nível de evidência abaixo é **inicial**, porque nenhum exercício desta lista mostrou encurtar a recuperação da canelite em um ensaio. [Como estes guias são escritos](/pt/sobre-walkito/).',
        'Se você marca a canela como dolorida no check-in, o Walkito passa o balanço do tornozelo e rolar o pé na bolinha. A elevação dos dedos aparece no plano geral como exercício complementar a partir do nível 2, revezando com o balanço do tornozelo. Não existe um programa específico para canelite. Se algum exercício levar a sua dor a **6/10 ou mais**, pare por hoje.',
      ],
      table: {
        head: ['Exercício', 'Dose', 'Com que frequência', 'O que você deve sentir', 'Pare se'],
        rows: [
          ['Alongamento de panturrilha', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões', 'Um alongamento na panturrilha da perna de trás esticada', 'A dor chegar a 6/10'],
          ['Alongamento do sóleo', '2\u00A0vezes de 30\u00A0segundos, cada perna', 'Quase todas as sessões', 'Um alongamento na parte baixa da panturrilha, perto do calcanhar', 'A dor chegar a 6/10'],
          ['Elevação dos dedos', '3\u00A0séries de 10, os dois pés', 'Dias de força', 'O músculo da canela trabalhando enquanto os dedos sobem', 'A dor chegar a 6/10'],
          ['Elevação de calcanhar com os dois pés', '3\u00A0séries de 10, os dois pés', 'Dias de força', 'As panturrilhas trabalhando, com os dois pés dividindo a carga', 'A dor chegar a 6/10'],
          ['Abdução de quadril', '3\u00A0séries de 15, cada perna', 'Dias de força', 'Trabalho na parte de fora do quadril', 'A dor chegar a 6/10'],
          ['Equilíbrio em uma perna', '3\u00A0vezes de 30\u00A0segundos, cada perna', 'Dias de equilíbrio', 'O pé e o tornozelo fazendo pequenas correções', 'A dor chegar a 6/10'],
          ['Balanço do tornozelo', '2\u00A0séries de 15, cada perna', 'Quase todas as sessões', 'O tornozelo dobrando mais, com o calcanhar no chão', 'A dor chegar a 6/10'],
          ['Rolar o pé na bolinha', '2\u00A0minutos', 'Dias de recuperação', 'Pressão firme embaixo do pé, nunca uma careta de dor', 'A dor chegar a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Alongamento de panturrilha',
          evidence: {
            level: 'early',
            why: 'Muito recomendado para canelite. Uma revisão sistemática de 2013 concluiu que não está comprovado que o alongamento acelere a recuperação da canelite.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar no chão e o quadril para a frente. A panturrilha e a canela dividem o trabalho de controlar o pé enquanto você corre, então uma panturrilha tensa passa mais carga para a canela.',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: {
            level: 'early',
            why: 'Mesmo raciocínio do alongamento de panturrilha. Não foi testado sozinho como tratamento para canelite.',
          },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição na parede e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura alongando na parede com o joelho de trás dobrado, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Elevação dos dedos',
          evidence: {
            level: 'early',
            why: 'Trabalha o tibial anterior, o músculo da frente da canela. Não há ensaio específico para canelite, e a canelite costuma doer ao longo da borda de dentro da tíbia, então a ligação é indireta.',
          },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'O músculo da canela trabalhando enquanto os dedos sobem',
          how: 'Fique em pé com as costas apoiadas na parede. Levante os dedos e a parte da frente dos dois pés do chão, mantendo os calcanhares no chão. Desça devagar. Isso trabalha o tibial anterior, o músculo da frente da canela.',
          image: 'Exercício: elevação dos dedos',
          media: 'tibialis_raise',
          caption: 'Elevação dos dedos: costas na parede, levante os dedos, calcanhares no chão',
          alt: 'Uma figura em pé encostada na parede levantando os dedos do chão, com os músculos da canela destacados',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: {
            level: 'early',
            why: 'Em um estudo caso-controle, corredores com canelite tinham menos resistência na panturrilha. Não foi testada como tratamento para canelite.',
          },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. A resistência da panturrilha era menor em corredores com canelite do que em controles pareados, e é por isso que a força da panturrilha faz parte desta lista.',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Abdução de quadril',
          evidence: {
            level: 'early',
            why: 'Duas metanálises associaram a amplitude de rotação do quadril à canelite. Nenhum ensaio testou o fortalecimento do quadril como tratamento para canelite.',
          },
          dose: '3\u00A0séries de 15, cada perna',
          often: 'Dias de força',
          feel: 'Trabalho na parte de fora do quadril',
          how: 'Fique em pé com uma faixa elástica em volta dos dois tornozelos e levante uma perna para o lado contra a faixa. Empurre pelo calcanhar, não pelos dedos. Duas metanálises encontraram diferença na amplitude de rotação do quadril entre pessoas com e sem canelite, e essa é a base para incluir o trabalho de quadril.',
          image: 'Exercício: abdução de quadril',
          media: 'hip_abduction',
          caption: 'Abdução de quadril: levante uma perna para o lado contra a faixa',
          alt: 'Uma figura em pé com uma faixa em volta dos tornozelos levantando uma perna para o lado, com a parte de fora do quadril destacada',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: {
            level: 'early',
            why: 'Trabalho geral de equilíbrio. Não há estudo específico para canelite por trás dele.',
          },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          how: 'Fique em pé em um pé só e olhe para um ponto fixo. Deixe o pé balançar. Esse balanço é o pé fazendo o equilíbrio. Fique perto de uma parede se precisar de segurança.',
          image: 'Exercício: equilíbrio em uma perna',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
        {
          name: 'Balanço do tornozelo',
          evidence: {
            level: 'early',
            why: 'É o que o app passa quando você marca a canela como dolorida. Não há ensaio específico para canelite.',
          },
          dose: '2\u00A0séries de 15, cada perna',
          often: 'Quase todas as sessões',
          feel: 'O tornozelo dobrando mais, com o calcanhar no chão',
          how: 'Fique perto de uma parede com uma perna à frente da outra. Leve o joelho da frente para a frente, por cima dos dedos, mantendo o calcanhar apoiado no chão. Um tornozelo que dobra bem deixa a canela absorver o impacto de forma mais equilibrada durante a corrida.',
          image: 'Exercício: balanço do tornozelo',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: joelho por cima dos dedos, calcanhar no chão',
          alt: 'Uma figura com uma perna à frente da outra levando o joelho para a frente por cima dos dedos, com o tornozelo destacado',
        },
        {
          name: 'Rolar o pé na bolinha',
          evidence: {
            level: 'early',
            why: 'É o que o app passa quando você marca a canela como dolorida. Uma medida de conforto, não um tratamento testado para canelite.',
          },
          dose: '2\u00A0minutos',
          often: 'Dias de recuperação',
          feel: 'Pressão firme embaixo do pé',
          how: 'Sente-se e role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se estiver fazendo careta, alivie. Rolar o pé não mira a canela diretamente, mas solta os tecidos da sola, que dividem a carga com a parte de baixo da perna.',
          image: 'Exercício: rolar o pé na bolinha',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Qual a diferença entre a dor da canelite e uma fratura por estresse?',
      paragraphs: [
        'Diferenciar canelite de fratura por estresse importa porque as duas pedem respostas diferentes. A síndrome do estresse tibial medial e as fraturas por estresse da tíbia ficam na mesma linha contínua de lesão por estresse ósseo. A canelite pode evoluir para uma fratura por estresse se a carga continuar, e esse é o principal motivo para mudar a carga de treino cedo em vez de continuar correndo com uma dor difusa na canela.',
        'A canelite costuma causar uma dor ao toque difusa, espalhada por vários centímetros da parte de dentro da canela. Uma fratura por estresse causa uma dor ao toque localizada em um ponto pequeno, muitas vezes com inchaço. Dor que melhora conforme você aquece aponta mais para canelite. Dor que vai aumentando durante a corrida, ou que aparece em repouso ou à noite, aponta mais para fratura por estresse.',
        'Dor na parte de trás do calcanhar em vez da canela é outro problema, normalmente do tendão de Aquiles; veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/) se a sua dor fica ali.',
        'Um teste caseiro muito citado é saltar em uma perna só: se isso reproduz uma dor aguda e localizada, sugere fratura. Mas uma revisão de 2011 na American Family Physician não encontrou evidência recente que comprovasse a precisão desse teste, e um teste do salto positivo também apareceu em quase metade dos pacientes com canelite confirmada. **Então um teste do salto positivo é motivo para procurar um profissional de saúde, não um jeito confiável de confirmar ou descartar uma fratura sozinho.**',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Dá para continuar correndo com canelite?',
      keyFact: 'Um ensaio de 2008 com 532\u00A0corredores iniciantes não encontrou diferença na taxa de lesões entre aumentar a quilometragem semanal em 10% e uma progressão mais rápida, o que deixa essa regra sem comprovação (Buist e colegas, 2008).',
      paragraphs: [
        'Nenhum ensaio diz exatamente quanto você deve reduzir. O que tem algum apoio é o formato de um programa de corrida gradual: no único ensaio randomizado, os três grupos do estudo seguiram uma volta progressiva à corrida, e os três melhoraram mais ou menos no mesmo ritmo. O programa de corrida, e não os exercícios extras ou a compressão, foi o que todos tinham em comum.',
        'Motivos para parar e fazer uma avaliação, em vez de continuar correndo com dor:',
        {
          list: [
            'Dor aguda durante uma corrida.',
            'Dor que piora conforme você corre.',
            'Dor em repouso.',
          ],
        },
        'Se a dor melhora com o aquecimento e continua tolerável, uma corrida mais curta ou mais leve, com menos frequência, é um meio-termo razoável enquanto a canela se adapta. Dias de descanso entre as corridas dão tempo para o osso responder à carga.',
        'A regra dos 10%, não aumentar mais de 10% na quilometragem semanal, é uma regra prática muito citada, mas não comprovada. Um ensaio de 2008 com 532\u00A0corredores iniciantes não encontrou diferença na taxa de lesões entre um programa baseado na regra dos 10% e um mais rápido.',
        'O que um estudo de 2014 com 874\u00A0corredores mostrou é que saltos grandes e repentinos na distância vêm com mais lesões. **Gradual é melhor do que repentino, mas nenhuma porcentagem específica tem apoio de ensaios.** [Dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) traz o mesmo raciocínio de controle de carga com mais detalhes.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: 'Que mudanças no treino evitam que a canelite volte?',
      paragraphs: [
        'Nenhum exercício isolado mostrou prevenir canelite em um ensaio. Os fatores de risco identificados em duas metanálises independentes apontam para o controle geral da carga de treino e a progressão gradual, e não para um alongamento ou um exercício de força específico. Os fatores de risco que se repetiram nas duas revisões foram:',
        {
          list: [
            'IMC mais alto.',
            'Maior queda do navicular (o quanto o arco abaixa com carga).',
            'Sexo feminino.',
            'Menos anos de experiência em corrida.',
            'Um histórico anterior de canelite.',
          ],
        },
        'Um padrão geral para voltar a correr:',
        {
          list: [
            'Primeiro caminhar sem dor.',
            'Depois trotes leves em superfícies macias com dias de descanso entre eles.',
            'Depois corridas aos poucos mais longas enquanto as manhãs continuam sem dor.',
          ],
        },
        'Qualquer dia que reproduza uma dor aguda ou localizada, ou uma dor que aumenta durante a corrida em vez de melhorar com o aquecimento, **é sinal para parar, não para insistir.**',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Quanto tempo a canelite leva para melhorar?',
      keyFact: 'Em um ensaio com 74\u00A0atletas com canelite, o tempo médio para completar o programa de corrida foi de cerca de 105\u00A0dias nos três grupos, embora a variação tenha sido grande (Moen e colegas, 2012).',
      paragraphs: [
        'As fontes variam e nenhuma aponta para um número único apoiado por ensaios. A orientação geral para lesões por sobrecarga é que casos leves melhoram em poucas semanas com menos atividade, enquanto casos ligados a erros de treino que se repetem podem demorar mais se a mesma carga voltar antes de o tecido se adaptar.',
        'No ensaio randomizado com 74\u00A0atletas com canelite, o tempo médio para completar o programa de corrida foi de cerca de 102 a 118\u00A0dias nos três grupos (média geral de 105\u00A0dias), embora a variação tenha sido grande.',
        'Como a canelite e as fraturas por estresse da tíbia ficam na mesma linha contínua, uma dor que não melhora depois de algumas semanas de corrida mais leve e dias de descanso é motivo para fazer uma avaliação em vez de esperar mais. **O sinal mais claro de recuperação é caminhar sem dor e depois trotar leve sem dor, nessa ordem, antes de a quilometragem voltar a subir.**',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: 'Qual o jeito mais rápido de acabar com a canelite?',
      a: 'Nenhum ensaio mostrou que um exercício ou alongamento acelera a recuperação da canelite. A evidência mais próxima vem de um ensaio randomizado com 74\u00A0atletas em que somar alongamento e fortalecimento da panturrilha a um programa de corrida gradual não encurtou a recuperação em relação ao programa de corrida sozinho. Reduzir a carga de corrida que causou o problema continua sendo a principal alavanca, não um exercício específico.',
      cites: [CITE.moen],
    },
    {
      q: 'Alongamento ajuda mesmo na canelite?',
      a: 'Uma revisão sistemática de 2013 de 11\u00A0ensaios de tratamento concluiu que exercícios de alongamento e de fortalecimento “não tiveram eficácia comprovada” na canelite, com a evidência disponível. Isso não quer dizer que alongar faça mal, só que nenhum ensaio de boa qualidade mostrou que ele muda o curso do problema. Alongamentos de panturrilha continuam sendo muito recomendados e dificilmente vão piorar as coisas.',
      cites: [CITE.winters],
    },
    {
      q: 'Posso continuar correndo com canelite?',
      a: 'Nada na evidência dos ensaios diz uma quilometragem exata para a qual reduzir. O que o único ensaio randomizado mostrou é que uma volta gradual e progressiva à corrida funcionou mais ou menos igual nos três grupos do estudo. Dor aguda durante uma corrida, dor que piora conforme você corre ou dor em repouso são motivos para parar e fazer uma avaliação, em vez de insistir.',
      cites: [CITE.moen],
    },
    {
      q: 'Canelite pode virar fratura por estresse?',
      a: 'A canelite e as fraturas por estresse da tíbia costumam ser descritas como pontos diferentes da mesma linha contínua de lesão por estresse ósseo. Uma canelite sem controle pode evoluir para uma fratura por estresse se a carga continuar. Esse é o principal motivo para mudar a carga de treino cedo em vez de continuar correndo com dor.',
    },
    {
      q: 'O que causa canelite em corredores?',
      a: 'Duas metanálises independentes encontraram um conjunto consistente de fatores de risco: IMC mais alto, maior queda do navicular (o quanto o arco abaixa com carga), sexo feminino, menos anos de experiência em corrida e um histórico anterior de canelite. Um estudo caso-controle separado mostrou que corredores com canelite tinham menos resistência na panturrilha, o que sugere que um déficit dos flexores plantares pode fazer parte do quadro.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: 'Algum exercício específico evita que a canelite volte?',
      a: 'Nenhum exercício isolado tem evidência de ensaios para prevenir canelite. Os fatores de risco de duas metanálises, incluindo IMC, queda do arco e experiência em corrida, apontam para o controle gradual da carga de treino e o condicionamento geral da perna, e não para um exercício em particular. É uma resposta menos satisfatória do que um exercício com nome, mas é o que a pesquisa apoia.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      q: 'O que costuma ser confundido com canelite?',
      cites: [CITE.mtssReview],
      a: 'Uma fratura por estresse da tíbia, a síndrome compartimental crônica de esforço e a tendinopatia do tibial posterior podem causar dor na canela e acabar sendo chamadas de canelite. Uma fratura por estresse tende a doer em um ponto específico do osso, enquanto a síndrome compartimental causa aperto e dormência que aumentam durante a corrida e passam logo depois que você para. As duas precisam de um profissional de saúde, não de mais carga.',
    },
    {
      q: 'Posso caminhar com canelite?',
      cites: [CITE.mtssReview],
      a: 'Normalmente sim. Caminhar tem menos impacto que correr, e muitas pessoas com síndrome do estresse tibial medial conseguem continuar caminhando sem crise, desde que a dor fique leve e passe rápido depois. Se a própria caminhada reproduz uma dor aguda em um único ponto do osso, pare e faça uma avaliação, porque esse padrão combina mais com fratura por estresse do que com canelite.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor é localizada e pontual, em um único ponto pequeno do osso em vez de espalhada por vários centímetros',
      'a dor aumenta durante a corrida em vez de melhorar com o aquecimento',
      'você tem dor em repouso ou à noite',
      'a canela está inchada em um ponto específico',
      'saltar em uma perna só reproduz uma dor aguda e localizada',
      'você sente aperto, dormência ou formigamento na perna ou no pé com o exercício, que aumenta durante a atividade e passa poucos minutos depois de parar, o que pode ser sinal de síndrome compartimental',
      'a dor não melhorou depois de várias semanas de menos corrida e dias de descanso',
      'você não consegue apoiar a perna, ou está mancando',
      'a perna está vermelha ou quente, ou você tem febre ou se sente mal',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: `O Walkito não tem um programa específico para canelite, e esta página explica por quê: nenhum programa de exercícios mostrou acelerar a recuperação da canelite em um ensaio. O que o Walkito tem é trabalho de panturrilha, tornozelo e equilíbrio que mira os mesmos músculos que os pesquisadores estudaram, e um plano que se adapta a como cada manhã está.`,
    more: [
      `Você escolhe ${DAYS} dias por semana e sessões de ${MINUTES}\u00A0minutos. A cada ${PROGRAM.testEveryDays}\u00A0dias (e depois a cada ${PROGRAM.testEveryDaysAfterGoal} quando a sua primeira meta for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver se o trabalho na perna está fazendo efeito.`,
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a sua dor na canela é localizada, está piorando ou aparece em repouso, procure um profissional de saúde antes de aumentar a carga.',
    ],
    cta: `Comece com ${PROGRAM.sessionMinutes[0]}\u00A0minutos por dia.`,
  },
  crumb: 'Exercícios para canelite',
  campaign: 'guide-shin-splints-pt',
};
