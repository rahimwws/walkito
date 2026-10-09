import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder indices for citations not yet in CITATIONS[].
 * Replace with actual indices after adding them to lib/citations.ts.
 */

export const ACHILLES_PT: Guide = {
  lang: 'pt',
  page: 'achilles',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Tendinite de Aquiles: exercícios excêntricos e mais',
  description:
    'Exercícios para tendinite de Aquiles com doses: descida excêntrica, resistência pesada e lenta, dor insercional ou no meio do tendão, e quando parar.',
  h1: 'Exercícios para tendinite de Aquiles: descida excêntrica do calcanhar, doses e o que a pesquisa diz',
  lede:
    'Os exercícios para tendinite de Aquiles funcionam melhor quando você entende a descida do calcanhar como treino de força, não como alongamento. A diretriz clínica de 2024 dá ao exercício o grau máximo, **A**, e uma metanálise em rede de 2021 com 29\u00A0ensaios não encontrou nenhum protocolo claramente melhor que outro. O que importa é colocar carga no tendão com constância por semanas.',
  intro: [
    'Esta página aprofunda esses exercícios. Se a sua dor é embaixo do pé, e não na parte de trás do calcanhar, você está procurando [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/). A página [dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) resume os dois casos. Se a dor é ao longo da canela e não no calcanhar, veja [exercícios para canelite](/pt/canelite-exercicios/); se ela só aparece depois de um dia longo em pé e não com a corrida, veja [pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/).',
    'A maioria das pessoas usa “tendinite” e “tendinopatia” como sinônimos. As diretrizes atuais usam “tendinopatia” porque o problema costuma ser de carga, não uma inflamação pura. Esta página usa “tendinite” nos títulos e “tendinopatia” onde a diretriz usa.',
  ],
  takeaways: [
    'A diretriz clínica de 2024 dá ao exercício (qualquer tipo que coloque carga no tendão) o grau **A**, o mais alto, para a tendinopatia de Aquiles no meio do tendão (Chimenti e colegas, 2024).',
    'Uma metanálise em rede de 29\u00A0ensaios randomizados não encontrou diferença clinicamente relevante entre os tipos de exercício aos 3 ou aos 12\u00A0meses (van der Vlist e colegas, 2021).',
    'Em um ensaio com 58\u00A0pessoas, a resistência pesada e lenta 3\u00A0dias por semana deu resultados tão bons quanto os excêntricos duas vezes por dia (Beyer e colegas, 2015).',
    'Na dor de Aquiles insercional (bem no osso do calcanhar), as descidas do calcanhar devem ficar no nível do chão em vez de passar da beira do degrau, porque a dorsiflexão profunda, dobrar o tornozelo para os dedos subirem em direção à canela, comprime o tendão contra o osso (Jonsson e colegas, 2008).',
    'Dor durante a carga de até cerca de 5/10, que passa até a manhã seguinte e não piora de semana em semana, foi a regra testada em um ensaio randomizado que permitiu continuar o esporte durante a reabilitação (Silbernagel e colegas, 2007).',
  ],
  toc: true,
  sections: [
    {
      h2: 'É tendinite ou tendinopatia, e isso muda os exercícios?',
      paragraphs: [
        '“Tendinite” sugere inflamação. “Tendinopatia” descreve um tendão que mudou com a carga, muitas vezes mais grosso, sem que a inflamação seja o principal motor. A diretriz de 2024 usa “tendinopatia”. Para os exercícios, o nome não muda o que você faz. Os dois descrevem o mesmo problema: um tendão que dói com carga, normalmente alguns centímetros acima do osso do calcanhar (no meio do tendão) ou bem onde ele se prende (insercional).',
        'Onde dói no tendão muda, sim, os exercícios. Essa divisão está explicada mais abaixo.',
      ],
      cites: [CITE.achillesGuideline],
    },
    {
      h2: 'O que é a descida excêntrica do calcanhar, e por que não é um alongamento?',
      paragraphs: [
        'A descida excêntrica do calcanhar é um exercício de força, não um alongamento de flexibilidade. Você sobe com os dois pés, passa o peso para o lado dolorido e desce devagar em um pé só, deixando o calcanhar afundar abaixo da beira do degrau. A fase de descida é a contração excêntrica: o músculo da panturrilha se alongando sob carga. Essa descida controlada é o que constrói a capacidade do tendão ao longo das semanas.',
        'O erro mais comum é ficar parado embaixo como em um alongamento de panturrilha. Isso transforma o exercício em um alongamento estático, que é outro estímulo. **O que importa é a descida lenta e com carga.** Três segundos para descer, com o músculo trabalhando o tempo todo.',
        'No ensaio de Alfredson de 1998, 15\u00A0atletas com dor antiga no meio do tendão de Aquiles fizeram descidas excêntricas do calcanhar duas vezes por dia, 7\u00A0dias por semana, por três meses, com o joelho esticado e dobrado. Os 15 voltaram ao nível de corrida que tinham antes. Foi um ensaio pequeno, sem grupo controle, mas abriu toda uma linha de pesquisa.',
      ],
      exercises: [
        {
          name: 'Descida excêntrica do calcanhar (joelho esticado)',
          evidence: { level: 'strong', why: 'O protocolo original de Alfredson; apoiado pela diretriz de 2024, que dá ao exercício o grau A.' },
          dose: 'Alfredson: 3 x 15, duas vezes por dia, três meses. Walkito: 3 x 10, cada perna',
          how: 'Fique na beira de um degrau. Suba com os dois pés, passe o peso para a perna dolorida e desça devagar em três segundos. O calcanhar afunda abaixo do degrau. Use os dois pés para voltar a subir. O joelho esticado trabalha o gastrocnêmio, o músculo maior e mais superficial da panturrilha.',
          often: 'Duas vezes por dia no protocolo de Alfredson. Walkito: dias de força.',
          feel: 'Trabalho pesado na panturrilha durante a descida, não um alongamento embaixo',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte, ou dor que piora de semana em semana',
          media: 'heel_drop_straight',
          caption: 'Descida excêntrica do calcanhar: suba com os dois pés, desça devagar com um, calcanhar abaixo do degrau',
          alt: 'Uma figura em um degrau descendo um calcanhar abaixo da beira do degrau com o joelho esticado, com a panturrilha e o tendão de Aquiles destacados',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'A resistência pesada e lenta funciona tão bem quanto a descida excêntrica?',
      keyFact: 'Um ensaio de 2015 com 58\u00A0pessoas mostrou que a resistência pesada e lenta três dias por semana deu resultados duradouros tão bons quanto o protocolo excêntrico clássico de duas vezes por dia (Beyer e colegas, 2015).',
      paragraphs: [
        'Sim, pela evidência atual. Um ensaio de 2015 com 58\u00A0pessoas comparou a resistência pesada e lenta (HSR, de heavy slow resistance), feita 3\u00A0dias por semana, com o protocolo excêntrico clássico de duas vezes por dia. A conclusão: “Tanto o excêntrico tradicional quanto a HSR dão resultados clínicos positivos, igualmente bons e duradouros em pacientes com tendinopatia de Aquiles.”',
        'Uma metanálise em rede de 2021 com 29\u00A0ensaios não encontrou diferença clinicamente relevante entre nenhuma das abordagens de exercício ativo aos 3 ou aos 12\u00A0meses. Todas foram melhores do que não fazer nada. Nenhum ensaio tinha baixo risco de viés. Os autores recomendaram começar com um programa de exercícios para a panturrilha porque é barato e tem poucos riscos.',
        '**O formato do protocolo importa menos do que colocar carga no tendão com constância.** As descidas excêntricas são as mais estudadas, a HSR é igualmente eficaz e pede menos sessões por semana, e as duas são pontos de partida válidos. Para a versão dessa mesma lógica de fortalecer a panturrilha na fascite plantar, veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
    {
      h2: 'Quais exercícios ajudam na tendinite de Aquiles, e quanto fazer?',
      paragraphs: [
        'Os exercícios abaixo vão de pouca carga a muita carga, começando com a elevação de calcanhar sentado e subindo pela escada. Estas são as doses iniciais do Walkito ao lado dos protocolos da pesquisa. [Como estes guias são escritos](/pt/sobre-walkito/).',
        'Na dor de Aquiles insercional, todo exercício que usa degrau deve ser feito no nível do chão. Essa adaptação está explicada na seção sobre dor insercional, mais abaixo.',
      ],
      table: {
        caption: 'Exercícios para tendinite de Aquiles: doses da pesquisa e doses iniciais do Walkito',
        head: ['Exercício', 'Dose do protocolo da pesquisa', 'Dose inicial do Walkito', 'Evidência'],
        rows: [
          ['Elevação de calcanhar sentado', 'Silbernagel, fase 1: 3 x 10, sentado', '3 x 10, os dois pés', '**Forte**: igual ao protocolo publicado da fase 1'],
          ['Elevação de calcanhar com os dois pés', 'Silbernagel, fase 1: 3 x 10-15, em pé', '3 x 10, os dois pés', '**Forte**: correspondência direta com a fase 1'],
          ['Elevação de calcanhar sustentada (isométrica)', 'A diretriz de 2024 cita o isométrico como eficaz; na prática se sugere 3-5 x 30-45\u00A0s', '3 x 20\u00A0s, os dois pés', '**Moderada**: a diretriz inclui a carga isométrica; não há ensaio randomizado só de isométrico no Aquiles'],
          ['Descida excêntrica do calcanhar (joelho esticado)', 'Alfredson: 3 x 15, 2x/dia, 7\u00A0dias/semana, três meses', '3 x 10, cada perna', '**Forte**: o protocolo original; grau A na diretriz'],
          ['Alongamento de panturrilha (joelho esticado)', 'Não fez parte dos ensaios de carga; complemento de mobilidade', '3 x 30\u00A0s parado, cada perna', '**Inicial**: tratado como mobilidade, não como exercício de carga para o Aquiles'],
          ['Alongamento do sóleo (joelho dobrado)', 'Não fez parte dos ensaios de carga; complemento de mobilidade', '3 x 30\u00A0s parado, cada perna', '**Inicial**: mesma ressalva; evite alongar fundo na dor insercional'],
        ],
      },
      exercises: [
        {
          name: 'Elevação de calcanhar sentado',
          evidence: { level: 'strong', why: 'Igual à dose da fase 1 de Silbernagel 2007. O grau A da diretriz cobre todos os tipos de carga no tendão.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Sente-se com os pés apoiados. Suba empurrando pela parte da frente dos dois pés. As mãos nos joelhos dão resistência. Um jeito de começar com pouca carga quando o trabalho em pé dói demais.',
          often: 'Dias de força, enquanto for o seu nível',
          feel: 'Trabalho nas panturrilhas, quase sem alongar o tendão',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentado: suba pela parte da frente dos pés, as mãos dão carga',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'strong', why: 'Correspondência direta com a fase 1 de Silbernagel 2007. Grau A na diretriz.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar em três segundos. Os dois pés dividem a carga.',
          often: 'Dias de força, quando a elevação sentado parecer fácil',
          feel: 'As panturrilhas trabalhando juntas, com um leve puxão no tendão',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar sustentada (isométrica)',
          evidence: { level: 'moderate', why: 'A diretriz de 2024 cita o isométrico como um dos tipos eficazes de carga no tendão. Não há ensaio randomizado só de isométrico no Aquiles.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés (pesquisa: 3-5 x 30-45\u00A0segundos)',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe afundar. É uma sustentação isométrica, ou seja, o músculo trabalha sem se mover, o que põe carga no tendão sem o sobe e desce que pode irritar a dor de Aquiles no começo.',
          often: 'Pode ser feita todo dia nas fases iniciais e irritáveis, antes de passar para o trabalho excêntrico completo',
          feel: 'As panturrilhas trabalhando para ficar paradas; uma dor fraca e surda no tendão é aceitável',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Descida excêntrica do calcanhar (joelho esticado)',
          evidence: { level: 'strong', why: 'O protocolo original de Alfredson, de 1998. Grau A na diretriz de 2024.' },
          dose: 'Alfredson: 3 x 15, duas vezes por dia. Walkito: 3 x 10, cada perna',
          how: 'Fique na beira de um degrau. Suba com os dois pés, passe o peso para a perna dolorida e desça devagar com o joelho esticado. O calcanhar afunda abaixo do degrau. Use os dois pés para voltar lá em cima.',
          often: 'Duas vezes por dia no protocolo original. Walkito: dias de força.',
          feel: 'Trabalho pesado na panturrilha durante a descida',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte',
          media: 'heel_drop_straight',
          caption: 'Descida excêntrica do calcanhar: suba com os dois, desça devagar com um, joelho esticado',
          alt: 'Uma figura em um degrau descendo um calcanhar abaixo da beira com o joelho esticado, com o tendão de Aquiles destacado',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'early', why: 'Não fez parte dos ensaios de carga no Aquiles. É um complemento de mobilidade. Evite alongar fundo na dor insercional.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Não balance. Na dor insercional, alongue de leve e pare se irritar o ponto onde o tendão se prende.',
          often: 'Depois das sessões com carga',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'Qualquer puxão agudo onde o tendão se prende no osso do calcanhar',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'early', why: 'Não fez parte dos ensaios de carga no Aquiles. É um complemento de mobilidade. Evite a dorsiflexão profunda na dor insercional.' },
          dose: '3\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede; dobre o joelho de trás até o alongamento descer, perto do calcanhar. O sóleo só solta com o joelho dobrado.',
          often: 'Depois das sessões com carga',
          feel: 'Um alongamento perto do calcanhar',
          stop: 'Qualquer puxão agudo onde o Aquiles se prende',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
      ],
      cites: [CITE.alfredson, CITE.silbernagel, CITE.achillesGuideline],
    },
    {
      h2: 'Quanta dor é aceitável nos exercícios para o Aquiles?',
      keyFact: 'Em um ensaio com 38\u00A0pessoas, quem continuou correndo com a dor limitada a cerca de 5 de 10, passando até a manhã seguinte, melhorou tanto aos doze meses quanto quem descansou primeiro (Silbernagel e colegas, 2007).',
      paragraphs: [
        'No estudo de Silbernagel de 2007, 38\u00A0pessoas com dor no Aquiles foram divididas em dois grupos:',
        {
          list: [
            'Um continuou correndo e saltando durante a reabilitação, seguindo a regra de que a dor durante e depois da carga podia chegar a cerca de **5 de 10**, desde que voltasse ao nível de sempre até a manhã seguinte e não piorasse de semana em semana.',
            'O outro grupo descansou primeiro.',
          ],
        },
        'Os dois melhoraram de forma significativa aos 12\u00A0meses, sem diferença entre eles.',
        'Esse é um limite diferente da regra de parar em 6/10 da página de [fascite plantar](/pt/exercicios-fascite-plantar/), que é o limite que o Walkito usa para dor no calcanhar. O número 5/10 vem de um estudo só, não é um padrão universal, mas é o modelo de dor mais citado na reabilitação do Aquiles.',
        'Algum desconforto durante a carga é esperado e foi aceito no ensaio. Dor que não passa durante a noite, que piora de semana em semana ou que chega como um episódio agudo e repentino, não.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'A dor é no meio do tendão ou no osso do calcanhar, e por que isso muda o exercício?',
      figure: { id: 'achilles', caption: 'A dor no tendão de Aquiles costuma ficar em um de dois lugares: no meio do tendão ou onde ele se prende ao osso do calcanhar.', alt: 'Vista lateral de um pé e tornozelo com o tendão de Aquiles indo da panturrilha até a parte de trás do osso do calcanhar, e uma área vermelha no meio do tendão.' },
      keyFact: 'Em um estudo piloto com 27\u00A0pessoas com dor de Aquiles insercional, a carga excêntrica só no nível do chão, sem dorsiflexão profunda, deu bons resultados em 67% dos casos (Jonsson e colegas, 2008).',
      paragraphs: [
        'A tendinopatia de Aquiles no meio do tendão fica no corpo do tendão, em geral de 2 a 6\u00A0centímetros acima do osso do calcanhar. As descidas excêntricas padrão e a resistência pesada e lenta têm a melhor evidência aqui. Descidas do calcanhar passando da beira de um degrau são adequadas para dor no meio do tendão.',
        'A tendinopatia de Aquiles insercional é dor bem no ponto onde o tendão se prende no osso. Em um estudo piloto de 2008 com 27\u00A0pessoas (34\u00A0tendões) com dor insercional crônica, um protocolo adaptado com carga excêntrica só no nível do chão, sem dorsiflexão além da posição neutra, relatou bons resultados em 67\u00A0por cento dos casos. A dorsiflexão profunda comprime o tendão contra o osso do calcanhar, o que irrita a inserção.',
        'Se a sua dor é na parte de trás do osso do calcanhar e não mais acima no tendão, **faça todas as elevações e descidas do calcanhar no nível do chão.** Não desça abaixo da beira do degrau. Evite alongamentos fortes pelo mesmo motivo. Essa é a adaptação mais importante dos programas para o Aquiles, e a que mais passa despercebida.',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Quantas elevações de calcanhar em uma perna você deveria conseguir fazer?',
      paragraphs: [
        'A diretriz de 2024 cita o teste de resistência de elevação de calcanhar em uma perna como parte da forma recomendada de medir a força da panturrilha e acompanhar a recuperação. Um estudo normativo com 566\u00A0adultos saudáveis coloca uma contagem típica em cerca de 23 a 24\u00A0repetições, ajustada por idade, sexo e nível de atividade. O que importa é a tendência ao longo do tempo e a diferença entre os seus dois lados.',
        'A meta da panturrilha no app é 25 elevações de calcanhar em uma perna. O teste é feito a cada 14\u00A0dias enquanto a meta da panturrilha está ativa, e depois a cada 28\u00A0dias. A diferença entre as pernas também é acompanhada, porque uma diferença persistente entre os lados pode indicar uma recuperação incompleta.',
      ],
      cites: [CITE.hebertLosier, CITE.achillesGuideline],
    },
    {
      h2: 'Dá para continuar correndo durante a reabilitação do Aquiles?',
      paragraphs: [
        'No estudo de Silbernagel de 2007, os pacientes que continuaram correndo durante a reabilitação, seguindo o modelo de monitorar a dor, não se saíram pior do que os que descansaram primeiro. Os dois grupos melhoraram aos 12\u00A0meses. O ensaio concluiu que a atividade contínua, com a dor monitorada, “pode, portanto, representar uma opção valiosa” durante a reabilitação.',
        'Isso não quer dizer que correr é inofensivo em todos os casos. **Se a dor não passa durante a noite, ou se cada semana é pior, diminua.** Dor no ponto onde o tendão se prende no osso do calcanhar pede mais cuidado do que dor no meio do tendão. Qualquer estalo repentino é motivo para parar e procurar um profissional de saúde.',
        'A página [dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) trata do controle de carga específico da corrida com mais detalhes.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Em quanto tempo os exercícios para o Aquiles ajudam?',
      paragraphs: [
        'A recuperação da tendinopatia de Aquiles é medida em meses. Os principais ensaios de carga duraram cerca de três meses e acompanharam os resultados até os 12\u00A0meses. A diretriz de 2024 observa que a melhora funcional pode aparecer em 2\u00A0semanas, mas a recuperação mais completa vai bem além disso.',
        'Nenhum ensaio promete um prazo fixo. Algumas pessoas respondem mais rápido, outras mais devagar, e os casos insercionais tendem a demorar mais que os do meio do tendão. A carga constante ao longo do tempo é o ponto em comum.',
      ],
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer, CITE.silbernagel],
    },
  ],
  faq: [
    {
      q: 'Qual a diferença entre tendinite e tendinopatia de Aquiles?',
      cites: [CITE.achillesGuideline],
      a: '“Tendinite” dá a ideia de inflamação, mas a maior parte da dor crônica no Aquiles é um problema de carga, não principalmente inflamatório. A diretriz de 2024 usa “tendinopatia”. Para os exercícios, o nome não muda o que você faz. Os exercícios desta página valem para os dois termos.',
    },
    {
      q: 'O que é a descida excêntrica do calcanhar para tendinite de Aquiles?',
      cites: [CITE.alfredson],
      a: 'A descida excêntrica do calcanhar é um exercício de força: suba com os dois pés, desça devagar com um, com o calcanhar afundando abaixo da beira de um degrau. O foco é a descida. Em um ensaio de 1998, 15\u00A0atletas que fizeram isso duas vezes por dia por três meses voltaram todos ao nível de corrida de antes. Pesquisas posteriores mostram que outros tipos de carga funcionam igualmente bem.',
    },
    {
      q: 'Resistência pesada e lenta é tão boa quanto a descida excêntrica?',
      cites: [CITE.beyer, CITE.vanDerVlist],
      a: 'Um ensaio de 2015 com 58\u00A0pessoas concluiu que os dois dão “resultados clínicos positivos, igualmente bons e duradouros”. Uma metanálise de 2021 com 29\u00A0ensaios não encontrou diferença clinicamente relevante entre os tipos de exercício ativo aos 3 ou aos 12\u00A0meses. O que importa é a carga constante, não o protocolo específico.',
    },
    {
      q: 'Quanta dor é normal nos exercícios para tendinite de Aquiles?',
      cites: [CITE.silbernagel],
      a: 'Um ensaio permitiu dor de até cerca de 5/10 durante a carga, desde que ela passasse até a manhã seguinte e não piorasse de semana em semana. Os pacientes com esse modelo se saíram tão bem quanto os que descansaram primeiro (Silbernagel 2007). Dor que continua alta durante a noite ou piora a cada semana é o sinal para diminuir.',
    },
    {
      q: 'Os exercícios para Aquiles insercional são diferentes?',
      cites: [CITE.jonsson],
      a: 'Sim. O protocolo padrão de descida profunda do calcanhar teve resultados ruins para dor no ponto onde o tendão se prende no osso. Um estudo piloto de 2008 testou carga excêntrica só no nível do chão, sem dorsiflexão além da posição neutra, e relatou bons resultados em 67\u00A0por cento de 27\u00A0pacientes. Descidas profundas e alongamentos fortes devem ser evitados na dor insercional.',
    },
    {
      q: 'Devo alongar o tendão de Aquiles dolorido?',
      cites: [CITE.alfredson, CITE.silbernagel, CITE.beyer],
      a: 'O alongamento não é o exercício principal para a tendinopatia de Aquiles. Os ensaios desta página são todos protocolos de carga (elevações e descidas do calcanhar), não programas de alongamento. Um trabalho leve de mobilidade da panturrilha pode vir depois das sessões com carga, mas alongamentos fortes podem piorar os sintomas, principalmente na dor insercional, em que a dorsiflexão comprime o ponto onde o tendão se prende.',
    },
    {
      q: 'Quanto tempo os exercícios para tendinite de Aquiles levam para funcionar?',
      cites: [CITE.achillesGuideline, CITE.alfredson, CITE.beyer],
      a: 'A recuperação é medida em meses. Os principais ensaios fizeram programas de carga de cerca de três meses, acompanhando os resultados até os 12\u00A0meses. A diretriz de 2024 observa que a melhora funcional pode começar em 2\u00A0semanas, mas a recuperação mais completa vai bem além disso. Nenhum ensaio promete um prazo fixo.',
    },
    {
      q: 'O que não fazer com tendinite de Aquiles?',
      cites: [CITE.jonsson, CITE.silbernagel],
      a: 'Evite aumentar de repente o volume de corrida ou a intensidade dos tiros, alongar fundo a panturrilha se a sua dor é no ponto onde o tendão se prende no osso do calcanhar, e insistir com uma dor que continua alta na manhã seguinte ou piora de semana em semana. Um estalo repentino precisa de um profissional de saúde na hora. Repouso total também não é necessário; atividade com a dor monitorada costuma ser uma opção melhor do que parar tudo.',
    },
    {
      q: 'Caminhar piora a tendinite de Aquiles?',
      cites: [CITE.silbernagel],
      a: 'Normalmente não. Caminhar tem menos impacto que correr, e muitas pessoas com tendinopatia de Aquiles conseguem continuar caminhando sem crise. Fique de olho em dor que continua alta na manhã seguinte ou piora de semana em semana; esse é o sinal para reduzir a distância ou o ritmo, não para parar de se mexer. Subidas íngremes e caminhada rápida em piso duro têm mais chance de irritar.',
    },
    {
      q: 'O que pode ser confundido com tendinite de Aquiles?',
      cites: [CITE.chooRearfoot],
      a: 'Bursite retrocalcânea, deformidade de Haglund e uma ruptura parcial do Aquiles podem causar uma dor parecida na parte de trás do calcanhar. Uma saliência óssea visível aponta para a deformidade de Haglund, enquanto um inchaço bem na altura da borda de trás do calçado sugere bursite. Qualquer dor aguda e repentina com um estalo, ou não conseguir subir na ponta dos pés, precisa de avaliação urgente para ruptura do tendão.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'você sentiu um estalo repentino ou a sensação de ter levado um chute na parte de trás da perna, principalmente com dificuldade imediata de dar impulso ou de andar na ponta dos pés. Isso pode indicar uma ruptura do tendão de Aquiles',
      'você está tomando ou tomou recentemente um antibiótico do grupo das fluoroquinolonas (como ciprofloxacino ou levofloxacino) e tem uma dor no tendão nova ou piorando. Esses remédios têm um alerta em destaque (boxed warning) da FDA para tendinite e ruptura de tendão',
      'a dor e o inchaço vieram de repente, com febre, vermelhidão ou calor sobre o tendão',
      'há inchaço importante, um hematoma ou um buraco que dá para sentir no tendão',
      'a dor é bem no ponto onde o tendão se prende no osso do calcanhar e piora com alongamento ou com descidas profundas do calcanhar, em vez de melhorar. Isso aponta para uma tendinopatia insercional, que precisa de uma abordagem adaptada ou da opinião de um profissional de saúde',
      'a dor ou a rigidez está piorando aos poucos ao longo das semanas, mesmo com carga constante',
      'a dor aparece em repouso ou acorda você à noite',
      'você não consegue apoiar o pé ou está mancando',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa adivinhar a ordem, as doses nem quando acrescentar carga. O Walkito monta um plano uma semana de cada vez em torno de uma meta. A cadeia da panturrilha vai da elevação de calcanhar sentado, passando pela elevação com os dois pés, a sustentada, a elevação com toalha e as descidas excêntricas do calcanhar, até os saltitos curtos na ponta dos pés. Cada degrau se abre quando duas sessões no nível atual pareceram fáceis.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a meta da panturrilha for alcançada), um teste mede a resistência da panturrilha e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico. Se a dor é bem no ponto onde o tendão se prende no osso do calcanhar, peça para um profissional de saúde avaliar antes de aumentar muito a carga.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Exercícios para tendinite de Aquiles',
  campaign: 'guide-achilles-pt',
};
