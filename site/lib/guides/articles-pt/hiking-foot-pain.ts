import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/hiking-foot-pain.ts (2026-10-18),
 * written around «dor nos pés depois de trilha», «dor no pé depois de
 * caminhada». «Você». Figures, grades, doses, hedges and CITE keys are
 * identical to the English page after its fact-check. Same media ids.
 * Exercise names follow pt.ts and the other /pt/ pages. Pounds and miles kept
 * as in the studies, with approximate kg and km added. No /pt/ version of
 * foot-pain-identifier: link removed, words kept.
 */

export const HIKERS_PT: Guide = {
  lang: 'pt',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dor nos pés depois de trilha: causas, exercícios e alertas',
  description:
    'Dor nos pés depois de trilha: o que as pesquisas mostram, calcanhar, Aquiles e antepé, peso da mochila, bota ou tênis de trilha, e exercícios com doses.',
  h1: 'Dor nos pés depois de trilha: por que seus pés doem e o que fazer',
  lede:
    'Pés doloridos depois de uma trilha longa são comuns, e boa parte disso é sobrecarga: mais distância, mais descida ou uma mochila mais pesada do que seus pés estão acostumados. Em uma pesquisa com 1.295 trilheiros de longa distância na Appalachian Trail, 29% relataram lesão ou dor no pé, e 12% relataram dor no tendão de Aquiles (Chrusch e Kavin, 2021). Dor no calcanhar nos primeiros passos da manhã seguinte aponta para [fascite plantar](/pt/fascite-plantar/); dor em um ponto de um osso que aumenta a cada trilha pode ser uma fratura por estresse e precisa ser avaliada por um profissional de saúde.',
  intro: [
    'Esta página é sobre trilhas e caminhadas longas: o que costuma doer, o que as pesquisas com trilheiros encontraram sobre mochila, calçado e preparo, e uma rotina curta para antes e depois da trilha. Se o seu calcanhar dói depois das caminhadas do dia a dia, comece por [dor no calcanhar depois de andar](/pt/dor-no-calcanhar-depois-de-andar/), e para saber quanto caminhar com o calcanhar dolorido, veja [caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/).',
  ],
  toc: true,
  takeaways: [
    'De 1.295 trilheiros de longa distância da Appalachian Trail, 61% relataram algum problema em músculos, articulações ou ossos, 37% dor no joelho, 29% dor no pé e 12% dor no Aquiles, e 11% pararam a trilha por causa disso (Chrusch e Kavin, 2021).',
    'Quem não fez nenhum preparo antes da trilha relatou dor no pé com mais frequência, 38% contra 28%, e qualquer lesão desse tipo com mais frequência, 80% contra 58%. É uma associação em uma pesquisa, não prova de que o preparo previne lesões (Chrusch e Kavin, 2021).',
    'As bolhas nos pés foram a queixa mais comum entre 280 trilheiros da Appalachian Trail, relatadas por 64% (Boulware e colegas, 2003).',
    'Dormência ou formigamento aumentaram com o peso da mochila em 128 trilheiros de longa distância, de 35% com mochilas de 10 a 20\u00A0libras (cerca de 4,5 a 9\u00A0kg) para 69% acima de 31\u00A0libras (cerca de 14\u00A0kg). O tipo de calçado e o peso da mochila não tiveram relação com outras lesões musculares e articulares (Anderson e colegas, 2009).',
    'Os bastões de caminhada reduziram a carga no tornozelo, no joelho e no quadril quando 15 trilheiros experientes caminharam em descida, com e sem mochila (Bohne e Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: 'Por que seus pés doem depois de uma trilha?',
      keyFact: 'Em uma pesquisa com 1.295 trilheiros de longa distância da Appalachian Trail, 29% relataram lesão ou dor no pé e 37% dor no joelho (Chrusch e Kavin, 2021).',
      paragraphs: [
        '**Principalmente porque a trilha carrega os pés mais, e por mais tempo, do que a caminhada do dia a dia.** Você anda por horas, em terreno irregular, subindo e descendo, muitas vezes com mochila. Cada uma dessas coisas aumenta o trabalho do calcanhar, do arco, da panturrilha e do tendão de Aquiles.',
        'Os melhores números vêm dos trilheiros de longa distância. Em uma pesquisa de 2018 a 2019 com 1.295 trilheiros da Appalachian Trail, 61% relataram algum problema em músculos, articulações ou ossos. A dor no joelho foi a mais comum, com 37%, depois a dor no pé com 29%, as entorses de tornozelo com 13%, a dor no Aquiles com 12% e a dor na canela com 11%. Essas queixas fizeram 11% deles interromper a trilha (Chrusch e Kavin, 2021).',
        'Os problemas por sobrecarga, que se acumulam ao longo de dias de carga repetida, foram mais comuns do que as lesões repentinas: 28% contra 18% na mesma pesquisa. Isso vale também para quem faz trilhas de um dia. Uma primeira trilha longa da temporada, ou um fim de semana com dois dias puxados seguidos, é o mesmo padrão em escala menor.',
        'São pesquisas baseadas no que relatam pessoas que caminham centenas de quilômetros. Nenhum estudo contou a dor nos pés em quem faz trilhas curtas de vez em quando, então os números exatos não valem para quem caminha no fim de semana. A parte útil é o padrão do que dói.',
      ],
      sourceNote: 'Chrusch e Kavin 2021: pesquisa eletrônica transversal acrescentada à pesquisa de fim de temporada da Appalachian Trail Conservancy, taxa de resposta de 52%. Sobrecarga ou crônico 28% (n=363), agudo 18% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: 'Onde dói, e o que provavelmente é?',
      paragraphs: [
        'O lugar da dor é a pista mais rápida. A tabela é um ponto de partida, não um diagnóstico.',
      ],
      table: {
        caption: 'Dor nos pés depois de trilha: onde dói e o primeiro passo mais comum',
        head: ['Onde e quando', 'Muitas vezes', 'Primeiro passo'],
        rows: [
          ['Embaixo do calcanhar, pior nos primeiros passos da manhã seguinte', 'Fascite plantar', 'Alongamentos de panturrilha e arco, elevação de calcanhar'],
          ['Atrás do calcanhar ou no tendão acima dele', 'Tendinopatia de Aquiles', 'Trilhas mais curtas, elevação de calcanhar lenta'],
          ['Planta do pé, atrás dos dedos', 'Metatarsalgia', 'Confira o ajuste do calçado, alongamento de panturrilha'],
          ['Um ponto em um osso, pior a cada trilha', 'Possível fratura por estresse', 'Pare as trilhas, procure um profissional de saúde'],
          ['Dedos queimando ou formigando', 'Nervo comprimido', 'Afrouxe os cadarços, mochila mais leve'],
          ['Unhas dos pés escuras ou doloridas depois das descidas', 'Dedos batendo no calçado', 'Calçado mais comprido, unhas curtas'],
        ],
      },
      after: [
        '**Embaixo do calcanhar.** A fascite plantar costuma doer mais nos primeiros passos depois do repouso. A diretriz de 2023 para dor no calcanhar lista como característica típica a dor que começou depois de um aumento recente das atividades com descarga de peso (Koc e colegas, 2023), que é exatamente o que uma trilha mais puxada é. A panturrilha encurtada é o fator de risco mais forte que se conhece: em um estudo com 50\u00A0pessoas com fascite plantar e 100 sem, quem tinha menos dobra no tornozelo tinha uma chance 23,3\u00A0vezes maior (Riddle e colegas, 2003).',
        '**Atrás do calcanhar.** A dor no Aquiles pode piorar nas subidas longas, em que a panturrilha e o tendão empurram você para cima a cada passo. Veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        '**Planta do pé.** Descidas longas e uma panturrilha encurtada podem levar a carga para a parte da frente do pé. Veja [metatarsalgia](/pt/metatarsalgia-dor-na-planta-do-pe/).',
        '**Bolhas e unhas.** As bolhas foram relatadas por 64% de 280 trilheiros da Appalachian Trail, mais do que qualquer outra queixa (Boulware e colegas, 2003). Unhas escuras ou doloridas depois de um dia de descidas geralmente significam que os dedos estão batendo na ponta do calçado. As duas coisas são problemas de pele e de ajuste, não algo que exercício muda.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: 'Por que a descida dói mais nos pés?',
      keyFact: 'Em 15 trilheiros experientes caminhando em descida sem mochila, com uma mochila leve e com uma mochila pesada, os bastões de caminhada reduziram a carga no tornozelo, no joelho e no quadril (Bohne e Abendroth-Smith, 2007).',
      paragraphs: [
        '**Na descida, suas pernas funcionam como freio.** A cada passo para baixo, a panturrilha, a frente da canela e os músculos da coxa controlam a descida enquanto se alongam. O pé também escorrega para a frente dentro do calçado, então os dedos e a planta do pé recebem mais pressão. Por isso muita gente se sente bem na subida e dolorida depois da descida.',
        'Em um estudo de laboratório, 15 trilheiros homens experientes caminharam em descida sem mochila, com uma mochila de um dia de 15% do peso corporal e com uma mochila de expedição de 30%. Usar bastões reduziu as forças de rotação no tornozelo, no joelho e no quadril e o pico do trabalho de frenagem no tornozelo e no joelho, com todas as mochilas (Bohne e Abendroth-Smith, 2007). Na pesquisa da Appalachian Trail, 70% usavam bastões ou um cajado, e os bastões estavam associados a menos queixas (Chrusch e Kavin, 2021). Essa associação na pesquisa não prova que os bastões previnem lesões.',
        'Dicas práticas, nenhuma testada para prevenir dor nos pés: dê passos mais curtos nas descidas íngremes, amarre bem o cadarço sobre o peito do pé para o pé não escorregar para a frente, e mantenha as unhas dos pés curtas.',
      ],
      sourceNote: 'Bohne 2007: 10 tentativas por condição, momentos articulares no plano sagital reduzidos nas três articulações com bastões; pico de absorção de potência reduzido no tornozelo e no joelho. Forças medidas, não dor nem lesão.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: 'Uma mochila mais pesada piora a dor nos pés?',
      keyFact: 'Em 128 trilheiros de longa distância, dormência ou formigamento foram relatados por 35% com mochilas de 10 a 20\u00A0libras (cerca de 4,5 a 9\u00A0kg) e por 69% com mochilas acima de 31\u00A0libras (cerca de 14\u00A0kg) (Anderson e colegas, 2009).',
      paragraphs: [
        '**Uma mochila mais pesada significa mais carga a cada passo, mas os estudos com trilheiros só mostram uma relação clara com dormência e formigamento.** Em uma pesquisa de 2006 com 128 trilheiros que tinham caminhado mais de 500\u00A0milhas (cerca de 800\u00A0km) na Appalachian Trail ou na Pacific Crest Trail, dormência ou formigamento aumentaram com o peso da mochila: 35% com mochilas de 10 a 20\u00A0libras, 50% com 21 a 30\u00A0libras e 69% acima de 31\u00A0libras (Anderson e colegas, 2009).',
        'A mesma pesquisa mostrou que o peso da mochila e o tipo de calçado não tiveram relação com outras lesões musculares e articulares, como entorses, dor duradoura ou lesões musculares. Então ninguém mostrou que uma mochila mais leve significa menos dor no calcanhar ou no arco. Ainda assim, é um bom ponto de partida se os seus pés doem só nos dias em que você leva a mochila cheia.',
        'Se os dedos queimam ou formigam, afrouxe os cadarços sobre o peito do pé e confira a barrigueira e as alças, e procure um profissional de saúde se isso não passar depois que você tirar a mochila.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Bota ou tênis de trilha: qual é melhor para dor nos pés?',
      paragraphs: [
        '**Nenhum ensaio comparou botas e tênis de trilha para dor nos pés, então ninguém pode dizer que um é melhor.** O que existe são pesquisas:',
        {
          list: [
            'Na pesquisa de 2006 com 128 trilheiros de longa distância, dormência ou formigamento foram relatados por 29% de quem usava sandália, 36% com tênis de corrida, 42% com calçado de caminhada e 68% com bota. Depois de levar em conta o peso da mochila, o tipo de calçado deixou de importar, o que sugere que quem usava bota também carregava mochilas mais pesadas (Anderson e colegas, 2009).',
            'Na pesquisa de 2018 a 2019 da Appalachian Trail, 58% usavam tênis de corrida ou de trilha e 24% usavam bota. Os dois estavam associados a menos queixas do que outros calçados, como sandálias (Chrusch e Kavin, 2021).',
          ],
        },
        'Então escolha o calçado que serve bem, com que você já caminhou e que combina com o terreno. Para dor no calcanhar em geral, a diretriz de 2023 recomenda contra palmilhas usadas sozinhas para alívio a curto prazo, grau B, e as aceita junto com outros cuidados, grau C (Koc e colegas, 2023). Mais em [palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/). Se quiser mudar para calçados mais leves ou mais planos, faça isso ao longo de semanas, não na primeira trilha longa; [calçados barefoot](/pt/calcados-barefoot/) explica por quê.',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: 'Com que rapidez dá para aumentar a distância das trilhas?',
      keyFact: 'Quem não fez nenhum preparo antes da Appalachian Trail relatou alguma lesão em músculos, articulações ou ossos com mais frequência, 80% contra 58% (Chrusch e Kavin, 2021).',
      paragraphs: [
        '**Nenhum estudo dá um aumento semanal seguro para trilheiros.** A evidência mais próxima é a pesquisa da Appalachian Trail: os 13% de trilheiros que não fizeram nenhum preparo antes da trilha relataram mais lesões no geral (80% contra 58%), mais dor no pé (38% contra 28%), mais dor no Aquiles (18% contra 11%) e mais fraturas por estresse na parte de baixo da perna (5% contra 2%). Treino de força, alongamento ou yoga e treino de resistência estiveram cada um associados a menos lesões (Chrusch e Kavin, 2021). É uma pesquisa, então pode ser simplesmente que pessoas mais em forma ou mais cuidadosas tenham treinado mais.',
        'Uma forma prática de aumentar, não testada:',
        {
          list: [
            'Mude uma coisa de cada vez: mais distância, mais subida e descida, ou uma mochila mais pesada, não as três no mesmo dia.',
            'Use a manhã seguinte como teste. Uma dor que passa até a manhã seguinte e não vai aumentando de semana para semana é um sinal razoável de que a carga está boa. Essa regra vem de um ensaio sobre o Aquiles, não de trilheiros (Silbernagel e colegas, 2007).',
            'Depois de um dia puxado, planeje um dia leve. A [Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) (em inglês) dá um conselho parecido para trilheiros de longa distância: pare por aquele dia se os seus pés começarem a doer, inchar ou ficar tensos depois de caminhar mais do que o normal.',
          ],
        },
        'Vale a pena fortalecer a panturrilha entre uma trilha e outra, porque ela faz boa parte do trabalho nas subidas e descidas. As elevações de calcanhar abaixo são as mesmas do guia de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: 'Qual é uma boa rotina antes e depois da trilha?',
      paragraphs: [
        'Mantenha curta. Antes da trilha, um ou dois minutos para soltar os tornozelos. Depois, os alongamentos para o calcanhar e a panturrilha. Nos dias entre as trilhas, elevação de calcanhar para ganhar força. São as doses iniciais do Walkito, tiradas dos guias principais. Pare um exercício por aquele dia se a dor passar de 6 de 10.',
        'Seja honesto sobre o que o alongamento antes da trilha faz. Em um ensaio com 1.538 recrutas do exército, ao longo de três meses de treinamento, alongar seis grupos musculares das pernas antes de cada sessão não reduziu as lesões de forma relevante (Pope e colegas, 2000). Os alongamentos aqui são para dor no calcanhar e na panturrilha, em que a diretriz de 2023 dá ao alongamento o grau **A**, e o fortalecimento da panturrilha recebe **B** (Koc e colegas, 2023).',
      ],
      exercises: [
        {
          name: 'Balanço do tornozelo (antes)',
          evidence: { level: 'early', why: 'Dose do próprio Walkito. Não existe protocolo publicado para trilheiros.' },
          dose: '2\u00A0séries de 15, cada perna',
          often: 'Antes da trilha',
          feel: 'Um alongamento na frente do tornozelo e uma puxada na parte de baixo da panturrilha',
          how: 'Uma perna à frente da outra, mãos em uma parede, uma árvore ou nos bastões. Leve o joelho da frente para a frente por cima dos dedos, com o calcanhar apoiado. Devagar, uns dois segundos para cada lado. Troque de perna depois de cada série.',
          stop: 'A dor chegar a 6 de 10',
          media: 'ankle_rocks',
          caption: 'Balanço do tornozelo: o joelho vai para a frente por cima dos dedos, o calcanhar fica apoiado',
          alt: 'Uma figura com uma perna à frente da outra levando o joelho da frente para a frente por cima dos dedos, com o tornozelo destacado',
        },
        {
          name: 'Alongamento de panturrilha (depois)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto. Não foi estudado em trilheiros.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada perna',
          often: 'Depois da trilha',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. A panturrilha encurtada puxa o calcanhar, então esse alongamento importa mesmo que você o sinta mais para cima.',
          stop: 'Dor aguda no calcanhar ou no Aquiles',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar de trás no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (depois)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto. Não foi estudado em trilheiros.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada perna',
          often: 'Depois da trilha',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só se solta com o joelho dobrado.',
          stop: 'Dor aguda no calcanhar ou no Aquiles',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Alongamento da fáscia plantar (depois, e na manhã seguinte)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o mais alto. Não foi estudado em trilheiros.' },
          dose: '2\u00A0sustentações de 30\u00A0segundos, cada pé',
          often: 'Depois da trilha e antes dos primeiros passos da manhã seguinte',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Na manhã seguinte, faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Dor aguda no calcanhar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Rolar o pé na bolinha (depois)',
          evidence: { level: 'early', why: 'Não foi testado nos estudos desta página. Está aqui para dar alívio.' },
          dose: '1\u00A0minuto, cada pé',
          often: 'Depois da trilha ou à noite',
          feel: 'Uma pressão firme embaixo do pé',
          how: 'Sente e role a sola do pé devagar sobre uma bolinha de massagem, com pressão firme. Se fizer careta, alivie. Sem bolinha? Deslizar o polegar com firmeza do calcanhar até os dedos também funciona.',
          stop: 'Você fizer careta de dor, ou sentir um ponto dolorido em um osso',
          media: 'foot_roll',
          caption: 'Rolar o pé na bolinha: role a sola devagar sobre a bolinha, com pressão firme',
          alt: 'Uma figura sentada rolando a sola de um pé sobre uma bolinha, com a sola destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés (entre as trilhas)',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá aos exercícios de força o grau B. Um programa de elevação de calcanhar melhorou a dor no calcanhar mais rápido do que o alongamento em um ensaio com 48\u00A0pessoas (Rathleff 2015).' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'De 2 a 3\u00A0dias por semana, não no dia seguinte a uma trilha puxada',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Quando ficar fácil, passe para uma perna só ou para a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/). Para dor no Aquiles, o exercício principal é a descida lenta em um degrau: veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
          stop: 'Dor no calcanhar ou no Aquiles acima de 6 de 10, ou pior na manhã seguinte',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quando parar as trilhas e procurar um profissional de saúde?',
      keyFact: 'Em uma revisão sobre fraturas por estresse, 81% dos pacientes tinham dor ao caminhar, e um raio X feito cedo encontrou só cerca de 10% delas (Patel e colegas, 2011).',
      paragraphs: [
        '**Pare e faça uma avaliação se a dor fica em um ponto de um osso e piora a cada trilha.** Esse é o padrão clássico da fratura por estresse, geralmente nos metatarsos, atrás dos dedos, ou no osso do calcanhar. Em uma revisão sobre fraturas por estresse, 81% dos pacientes tinham dor ao caminhar, e um ponto dolorido no osso foi encontrado em 65,9 a 100% dos casos. Um raio X na primeira consulta detectou só cerca de 10% delas, então um raio X normal não descarta a fratura (Patel e colegas, 2011). Se você não tem certeza do que é, pare as trilhas até um profissional de saúde examinar.',
        'Pare também se você não consegue apoiar o peso no pé, se a dor começou com uma torção, uma queda ou um estalo, ou se o pé está vermelho, quente e inchado. A lista completa está abaixo.',
        'A maior parte da dor no calcanhar é menos dramática. Na fascite plantar, cerca de 90% das pessoas melhoram com tratamento não cirúrgico, embora isso possa levar meses (Latt e colegas, 2020). Veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/).',
      ],
      sourceNote: 'Os números de Patel 2011 são de fraturas por estresse em todos os locais, não de trilheiros. A sensibilidade do raio X sobe para 30 a 70% depois de cerca de três semanas.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'É normal os pés doerem depois de uma trilha?',
      cites: [CITE.chruschHikers],
      a: 'Um pouco de dor muscular depois de uma trilha longa ou íngreme é comum e costuma passar em um ou dois dias. Em uma pesquisa com 1.295 trilheiros da Appalachian Trail, 29% relataram dor no pé. Uma dor aguda, em um ponto de um osso, ou que continua depois de alguns dias tranquilos merece uma avaliação.',
    },
    {
      q: 'Por que meu calcanhar dói depois da trilha?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'A causa mais comum é a fascite plantar, que dói embaixo do calcanhar e geralmente piora nos primeiros passos da manhã seguinte. A diretriz de 2023 lista um aumento recente das atividades com descarga de peso como gatilho típico, e a panturrilha encurtada é o fator de risco mais forte que se conhece. Dor atrás do calcanhar aponta para o Aquiles.',
    },
    {
      q: 'Posso continuar fazendo trilha com fascite plantar?',
      cites: [CITE.silbernagel],
      a: 'Muita gente consegue, em percursos mais curtos e mais planos, se a dor fica moderada durante a trilha e passa até a manhã seguinte. Essa regra da manhã seguinte vem de um ensaio sobre o Aquiles, não de um estudo com trilhas. Se o calcanhar piora a cada manhã, reduza primeiro a distância e a descida. Nosso guia sobre caminhar com fascite plantar explica como voltar aos poucos.',
    },
    {
      q: 'Bota ou tênis de trilha: qual é melhor para dor nos pés?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Ninguém sabe ao certo, porque nenhum ensaio comparou os dois. Em pesquisas com trilheiros de longa distância, tanto as botas quanto os tênis de trilha estavam associados a menos queixas do que as sandálias, e a relação entre bota e dormência sumiu quando o peso da mochila foi levado em conta. Escolha o par que serve bem e com que você já caminhou.',
    },
    {
      q: 'Mochila pesada causa dor nos pés?',
      cites: [CITE.andersonPack],
      a: 'Ela aumenta a carga a cada passo, mas as pesquisas com trilheiros só mostram uma relação clara com dormência e formigamento. Em 128 trilheiros de longa distância, isso foi de 35% com mochilas de 10 a 20\u00A0libras (cerca de 4,5 a 9\u00A0kg) para 69% acima de 31\u00A0libras (cerca de 14\u00A0kg). Nessa pesquisa, o peso da mochila não teve relação com outras lesões musculares e articulares.',
    },
    {
      q: 'Por que meus pés doem mais na descida?',
      cites: [CITE.bohnePoles],
      a: 'Na descida, os músculos das pernas funcionam como freio enquanto se alongam, e o pé escorrega para a frente dentro do calçado, carregando os dedos e a planta do pé. Em um estudo de laboratório com 15 trilheiros caminhando em descida, os bastões de caminhada reduziram a carga no tornozelo, no joelho e no quadril, com e sem mochila.',
    },
    {
      q: 'Bastões de caminhada ajudam na dor nos pés?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'Eles reduzem a carga nas pernas. Em 15 trilheiros experientes caminhando em descida, os bastões reduziram as forças no tornozelo, no joelho e no quadril, e em uma pesquisa com trilheiros da Appalachian Trail os bastões estavam associados a menos queixas. Nenhum ensaio testou se os bastões previnem a dor no pé em si, então veja-os como um extra sensato, não como algo certo.',
    },
    {
      q: 'Por quanto tempo os pés podem doer depois de uma trilha longa?',
      a: 'A dor comum depois de um dia puxado costuma passar em um ou dois dias de atividade leve. Se a dor no calcanhar nos primeiros passos volta toda manhã, ou se a dor continua depois de uma semana de caminhadas mais curtas, é mais provável um problema por sobrecarga, como fascite plantar ou dor no Aquiles, e vale a pena fazer uma avaliação de verdade.',
    },
    {
      q: 'Devo alongar antes de uma trilha?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'Um aquecimento curto, como o balanço do tornozelo, tudo bem, mas não espere que alongar antes da trilha previna lesões. Em um ensaio com 1.538 recrutas do exército, alongar antes do treinamento não reduziu as lesões de forma relevante. Os alongamentos de panturrilha e arco depois da trilha são mais úteis se o seu calcanhar dói, e nesse caso a diretriz de 2023 dá a eles grau A.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor fica em um ponto de um osso e piora a cada trilha, o que pode ser uma fratura por estresse',
      'você não consegue apoiar o peso no pé, ou está mancando',
      'a dor começou com uma torção, uma queda ou um estalo, principalmente atrás do calcanhar',
      'o pé ou o tornozelo está vermelho, quente ou inchado, ou você está com febre',
      'uma bolha ou uma unha parece infeccionada: vermelhidão que se espalha, pus ou riscos vermelhos',
      'dormência, formigamento ou queimação não passam depois que você tira a mochila e o calçado',
      'o pé dói à noite ou em repouso',
      'a dor continua piorando ao longo de duas a três semanas mesmo com trilhas mais curtas',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para calcanhar e pé com os alongamentos e as elevações de calcanhar desta página. Ele não planeja suas trilhas, então mantenha o seu próprio plano de percursos e encaixe as sessões em volta dele, com sessões mais leves depois de um dia puxado.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para como estão seus pés, e o plano se ajusta. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Dor nos pés depois de trilha',
  campaign: 'guide-hiking-foot-pain-pt',
};
