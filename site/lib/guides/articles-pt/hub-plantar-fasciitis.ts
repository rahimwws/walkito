import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Fascite plantar (PT) ─────────────────────────────────────────
 *
 * Translated from `articles/hub-plantar-fasciitis.ts`, written around the
 * Brazilian Portuguese queries «fascite plantar», «fascite plantar sintomas»,
 * «fascite plantar causas». Informal «você». Figures, grades and qualifiers
 * are identical to the English page. No new citations.
 */

export const HUB_PLANTAR_FASCIITIS_PT: Guide = {
  lang: 'pt',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fascite plantar: sintomas, causas e o que ajuda',
  description:
    'O que é a fascite plantar, sintomas e causas, o que a diretriz clínica de 2023 recomenda, quanto tempo dura a recuperação e quais exercícios ajudam.',
  h1: 'Fascite plantar: sintomas, causas e o que ajuda segundo a evidência',
  lede:
    'A fascite plantar é uma dor embaixo do calcanhar causada por sobrecarga na fáscia plantar, a faixa grossa de tecido que vai do osso do calcanhar até os dedos. É a causa mais comum de dor no calcanhar embaixo do pé. A diretriz clínica de 2023 para dor no calcanhar dá ao alongamento o grau máximo e ao treino de força o segundo mais alto, e cerca de 90% das pessoas melhoram com tratamento sem cirurgia.',
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, A, e ao treino de força um B (Koc e colegas, 2023).',
    'Cerca de 90% das pessoas com fascite plantar melhoram com tratamento sem cirurgia, como alongamento, treino de força e calçados com bom suporte, muitas vezes em alguns meses (Latt e colegas, 2020).',
    'A dorsiflexão do tornozelo reduzida, ou seja, o quanto o pé consegue subir em direção à canela, foi o fator de risco independente mais forte em um estudo de caso-controle com 50\u00A0casos e 100\u00A0controles, com razão de chances (odds ratio) de 23,3 (Riddle e colegas, 2003).',
    'Dor no calcanhar nos primeiros passos da manhã, que melhora depois de alguns minutos caminhando, é o padrão de sintomas mais fácil de reconhecer (Koc e colegas, 2023).',
    'Em um acompanhamento de longo prazo com 174\u00A0pacientes, cerca de metade estava sem sintomas aos cinco anos. Entre os que ainda tinham sintomas, a maioria relatou só uma dor leve (Hansen e colegas, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é fascite plantar?',
      figure: { id: 'plantar-fascia', caption: 'A fáscia plantar vai do osso do calcanhar até os dedos. A dor da fascite plantar costuma começar onde ela se prende ao calcanhar.', alt: 'Sola de um pé com a fáscia plantar em faixas brancas que se abrem do osso do calcanhar até a base dos dedos, e uma mancha vermelha no calcanhar onde a dor costuma começar.' },
      paragraphs: [
        'A fascite plantar é uma condição de sobrecarga da fáscia plantar. A fáscia plantar é uma faixa resistente de tecido conjuntivo que corre pela sola do pé, do osso do calcanhar (o calcâneo) até a base dos dedos. Ela sustenta o arco e absorve impacto a cada passo.',
        'Quando a fáscia recebe mais carga do que consegue recuperar, o tecido fica irritado perto de onde se prende no calcanhar. O nome termina em “-ite”, o que sugere inflamação, mas o entendimento atual aponta mais para um processo degenerativo no tecido do que para uma inflamação contínua. Alguns profissionais preferem dizer “fasciopatia plantar”. O nome não muda os sintomas nem a abordagem recomendada.',
        'A diretriz clínica de 2023 do Journal of Orthopaedic & Sports Physical Therapy diz que ela é a causa mais reconhecida de dor no calcanhar embaixo do pé.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Como é a dor da fascite plantar?',
      paragraphs: [
        'O sintoma típico é dor embaixo do calcanhar nos primeiros passos da manhã. A diretriz descreve essa dor como “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”. Ela costuma melhorar depois de alguns minutos caminhando, e volta quando você fica um tempo sentado e levanta de novo.',
        'A dor costuma ficar na parte de dentro e da frente do calcanhar, onde a fáscia se prende ao osso. Ela pode se espalhar pelo arco. Costuma ser pior depois do repouso, não durante a atividade, o contrário do que a maioria das pessoas espera.',
        'A dor aparece com mais clareza na manhã seguinte. Se a manhã seguinte está pior, o dia anterior pediu demais do pé. É por isso que acompanhar a dor da manhã é o jeito mais útil de avaliar a evolução. [Dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) explica o padrão da manhã em detalhes.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O que causa fascite plantar, e quem tem?',
      keyFact: 'Em um estudo de caso-controle com 50\u00A0pessoas com fascite plantar e 100 sem, a dorsiflexão do tornozelo reduzida aumentou 23,3\u00A0vezes as chances de fascite plantar, o fator de risco mais forte medido (Riddle e colegas, 2003).',
      paragraphs: [
        'A fascite plantar aparece quando a fáscia recebe mais carga do que consegue aguentar e recuperar. A carga pode ser demais de uma vez (um salto repentino na quilometragem de corrida) ou constante ao longo do tempo (ficar em pé num piso duro o dia todo).',
        'Um estudo de caso-controle pareado com 50\u00A0pessoas com fascite plantar e 100\u00A0controles encontrou que a dorsiflexão do tornozelo reduzida era o fator de risco independente mais forte, com razão de chances de 23,3. Em outra série, com 254\u00A0pessoas com fascite plantar, 52 a 60% tinham um encurtamento só do gastrocnêmio, o músculo maior e mais externo da panturrilha. Ficar muito tempo em pé no trabalho aumentou as chances 3,6\u00A0vezes. Um índice de massa corporal mais alto também aumentou.',
        'A diretriz cita outros fatores de risco: idade entre 40 e 60\u00A0anos, atividades com corrida ou saltos, e profissões em que se passa muito tempo em pé. Pé chato ou arco alto podem mudar o caminho da carga pela fáscia, mas nenhum dos dois garante que a condição vai aparecer.',
        'A fascite plantar costuma vir de uma combinação: panturrilha tensa, uma carga para a qual o pé não estava pronto, e pouco tempo de recuperação.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'Como é feito o diagnóstico da fascite plantar?',
      paragraphs: [
        'A fascite plantar costuma ser diagnosticada por um profissional de saúde a partir da sua história e de um exame físico. Os achados principais são sensibilidade na parte de dentro e da frente do calcanhar, dor nos primeiros passos da manhã, e dor que melhora com a atividade e volta depois do repouso.',
        'Exame de imagem não é necessário num caso típico. A diretriz recomenda considerar exames de imagem se o padrão não se encaixa, se os sintomas não melhoram depois de várias semanas de tratamento conservador, ou se é preciso descartar outro diagnóstico (uma fratura por estresse ou um nervo comprimido, por exemplo). Ultrassom e ressonância magnética podem mostrar a fáscia espessada, mas uma fáscia espessada no exame sem o padrão de sintomas correspondente não é fascite plantar.',
        'O Walkito não faz diagnóstico. Se você não tem certeza se a sua dor no calcanhar é fascite plantar, um profissional de saúde é o lugar certo para começar.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'O que ajuda na fascite plantar?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas, elevações de calcanhar com carga e uma toalha aliviaram a dor mais rápido que só alongar aos três meses, mas aos doze meses os dois grupos estavam iguais (Rathleff e colegas, 2015).',
      paragraphs: [
        'A diretriz clínica de 2023 dá a cada abordagem um grau conforme a força da evidência por trás dela. As recomendações mais fortes são alongamento, bandagem, terapia manual feita por um profissional e talas noturnas para dor da manhã que não passa. O treino de força vem em seguida. A tabela abaixo lista as principais opções com os graus da diretriz.',
        'Nenhuma opção funciona para todo mundo. A maioria das pessoas começa com alongamento e calçados com bom suporte, acrescenta treino de força quando a dor inicial diminui, e procura um profissional de saúde para as outras opções se a evolução travar. Em um ensaio com 48\u00A0pessoas, elevações de calcanhar com carga e uma toalha embaixo dos dedos aliviaram a dor mais rápido que só alongar aos três meses, mas aos doze meses os dois grupos estavam iguais. A diretriz recomenda não usar palmilhas sozinhas como abordagem isolada de curto prazo e não somar ultrassom terapêutico ao alongamento.',
      ],
      table: {
        caption: 'Graus da diretriz de 2023 para dor no calcanhar embaixo do pé',
        head: ['Abordagem', 'Grau', 'Observações'],
        rows: [
          ['Alongamento da fáscia plantar e da panturrilha', '**A**', 'Grau máximo. A base do tratamento conservador.'],
          ['Terapia manual (trabalho nas articulações e nos tecidos moles)', '**A**', 'Grau máximo. Feita por um profissional para restrições de articulação e de flexibilidade.'],
          ['Bandagem no pé (rígida ou elástica)', '**A**', 'Grau máximo para dor e função a curto prazo, junto com outros cuidados.'],
          ['Talas noturnas por 1 a 3\u00A0meses', '**A**', 'Grau máximo para dor da manhã que não passa. Veja [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/).'],
          ['Treino de força (elevações de calcanhar com carga)', '**B**', 'Adiantou a melhora em um ensaio com 48\u00A0pessoas. Veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).'],
          ['Laser de baixa intensidade', '**B**', 'Procedimento feito em consultório.'],
          ['Agulhamento seco', '**B**', 'Procedimento feito em consultório.'],
          ['Palmilhas junto com outros cuidados', '**C**', 'Evidência fraca. Podem ajudar como parte de um programa mais amplo.'],
          ['Palmilhas sozinhas, a curto prazo', '**B contra**', 'A diretriz recomenda **não** usar como abordagem isolada.'],
          ['Ultrassom terapêutico somado ao alongamento', '**A contra**', 'A evidência não apoia acrescentar.'],
        ],
      },
      sourceNote:
        'Graus de Koc e colegas, 2023, diretriz de prática clínica para dor no calcanhar do Journal of Orthopaedic & Sports Physical Therapy.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quanto tempo dura a fascite plantar?',
      keyFact: 'Em um grupo de 174\u00A0pessoas, cerca de metade estava sem sintomas aos cinco anos, e 46% ainda tinham alguma dor aos dez anos, a maioria só leve (Hansen e colegas, 2018).',
      paragraphs: [
        'Uma revisão de 2020 relata que cerca de 90% das pessoas melhoram com tratamento sem cirurgia, muitas vezes em alguns meses. Um acompanhamento mais longo de 174\u00A0pacientes dá um quadro mais detalhado: cerca de metade estava sem sintomas aos cinco anos, e 46% ainda tinham alguma dor depois de dez anos em média, embora a maioria deles relatasse só sintomas leves.',
        'A recuperação depende de há quanto tempo você tem a dor, do que você faz a respeito, e de alguns fatores que você não controla. O grupo de Hansen 2018 encontrou que ser mulher e ter dor nos dois calcanhares eram preditores significativos de recuperação mais lenta. IMC, idade, espessura da fáscia e presença de esporão não eram.',
        'A pergunta útil não é “quantas semanas até acabar”, e sim “a minha dor da manhã está menor este mês do que no mês passado?”. Essa tendência é o marco de verdade. [Quanto tempo dura a fascite plantar?](/pt/quanto-tempo-dura-fascite-plantar/) traz toda a evidência sobre o tempo de recuperação.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Quais exercícios e alongamentos ajudam na fascite plantar?',
      paragraphs: [
        'Os exercícios que a diretriz apoia se dividem em dois grupos: alongamento (grau A) e treino de força (grau B). O alongamento trabalha a fáscia plantar e a panturrilha. O treino de força aumenta a capacidade da panturrilha de lidar com a carga do dia a dia sem sobrecarregar a fáscia.',
        '[Exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) tem a lista completa com doses iniciais, o que cada um deve fazer você sentir e quando parar. [Elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) se aprofunda no exercício por trás do principal ensaio de treino de força. As páginas de cada exercício explicam cada movimento:',
      ],
      bullets: [
        'O [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/) puxa os dedos para trás para carregar a fáscia de leve antes de você ficar em pé.',
        'O [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/) e o [alongamento do sóleo](/exercises/soleus-stretch/) (em inglês) trabalham a panturrilha tensa que puxa o calcanhar.',
        'A [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/) é a elevação de calcanhar com carga do ensaio de Rathleff.',
        '[Rolar o pé na bolinha](/exercises/foot-roll/) (em inglês) acalma o tecido entre as sessões.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Por que as manhãs são as piores?',
      paragraphs: [
        'A fáscia plantar fica mais rígida e mais curta enquanto você dorme. Em repouso, o pé costuma ficar apontado para baixo. Quando você fica em pé e apoia o pé com todo o seu peso, o tecido encurtado se estica de repente. É essa a fisgada forte nos primeiros passos.',
        'O que mais ajuda acontece antes de o pé tocar o chão. Sente-se na beira da cama, cruze um tornozelo sobre o outro joelho e puxe os dedos para trás com cuidado por cerca de 10\u00A0segundos, 10\u00A0vezes em cada pé. A diretriz dá a esse alongamento o grau máximo.',
        'As talas noturnas seguram o pé em ângulo reto durante a noite para a fáscia continuar levemente alongada. A diretriz também dá a elas um A para quem continua com dor nos primeiros passos mesmo alongando. [Dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) fala da rotina da manhã, das talas noturnas e de outras condições com o mesmo padrão de dor nos primeiros passos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Fascite plantar no trabalho e na corrida',
      paragraphs: [
        'Ficar muito tempo em pé em superfícies duras é um dos fatores de risco do estudo de Riddle de 2003: aumentou as chances de fascite plantar 3,6\u00A0vezes. Uma revisão de 2015 da literatura de saúde ocupacional ligou ficar muito tempo em pé no trabalho a desconforto musculoesquelético, cansaço e dor nas pernas. Se os seus pés doem no fim do turno, valem os mesmos alongamentos de panturrilha e o mesmo treino de força.',
        'Para quem corre, a diretriz de 2023 aconselha mudar a carga em vez de parar tudo. Isso significa diminuir a quilometragem ou a intensidade, não zerar. A recomendação se baseia em opinião de especialistas (grau E) porque nenhum ensaio a testou, mas ela está de acordo com o jeito como as diretrizes para Aquiles e para canelite lidam com lesões por sobrecarga.',
      ],
      bullets: [
        '[Pés doendo de ficar em pé o dia todo](/feet-hurt-standing-all-day/) (em inglês) fala dos exercícios e dos calçados para quem passa o trabalho em pé.',
        '[Enfermagem e dor nos pés](/nurses-foot-pain/) (em inglês) trata do peso de turnos longos em piso duro.',
        '[Mesa para trabalhar em pé e dor nos pés](/standing-desk-foot-pain/) (em inglês) fala da transição entre sentado e em pé.',
        '[Dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) explica como ajustar o treino quando o calcanhar dói.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'A dor pode ser outra coisa e não fascite plantar?',
      paragraphs: [
        'Várias condições têm o mesmo local ou o mesmo padrão da manhã. Onde a dor fica e como ela se comporta ajudam a diferenciar.',
        '**Tendinite de Aquiles.** Dor na parte de trás do calcanhar ou no tendão logo acima, não embaixo do pé. Rigidez nos primeiros passos é comum, mas a dor fica mais em cima. Veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        '**Síndrome do coxim gorduroso do calcanhar.** Uma dor funda no centro do calcanhar, pior em superfícies duras e descalço. Uma revisão de escopo de 2022 observou que pode ser difícil diferenciá-la da fascite plantar sem exame de imagem. A dor do coxim gorduroso fica bem embaixo, no centro, enquanto a dor da fascite fica na parte de dentro e da frente.',
        '**Esporão no calcanhar.** Um crescimento de osso na parte de baixo do osso do calcanhar. Muita gente tem um sem sentir dor nenhuma. No grupo de Hansen 2018, com 174\u00A0pacientes, ter esporão no início não teve efeito significativo em quanto tempo os sintomas duraram. O esporão muitas vezes está lá, mas não é ele que causa a dor.',
        '**Fratura por estresse do calcâneo.** Dor que aumenta com a atividade em vez de melhorar depois do aquecimento. Pode doer em repouso ou à noite. Apertar as laterais do calcanhar muitas vezes reproduz a dor. Procure um profissional de saúde antes de exercitar o pé.',
        '**Artrite inflamatória.** Quando os dois calcanhares doem, a rigidez da manhã dura mais de 30\u00A0minutos e outras articulações estão rígidas ou inchadas, o padrão aponta para algo sistêmico. Um profissional de saúde deve avaliar.',
        'Se você estiver em dúvida, um profissional de saúde consegue diferenciar essas condições pelo local, pelo comportamento da dor e por exame de imagem se for preciso.',
      ],
      cites: [CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Apps para fascite plantar',
      paragraphs: [
        'Vários apps trazem exercícios para fascite plantar. Eles se diferenciam em se ajustam ou não ao nível de dor, se aumentam a carga aos poucos e se cobrem tanto alongamento quanto treino de força. [Melhor app para fascite plantar](/pt/melhor-app-fascite-plantar/) compara sete deles lado a lado, incluindo o Walkito.',
      ],
    },
    {
      h2: 'Todos os guias sobre fascite plantar neste site',
      bullets: [
        '[Exercícios e alongamentos para fascite plantar](/pt/exercicios-fascite-plantar/) tem a lista completa de exercícios com doses e graus de evidência.',
        '[Elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) explica o protocolo de elevação de calcanhar do ensaio de Rathleff.',
        '[Dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) fala da dor da manhã, das talas noturnas e de outras condições com dor nos primeiros passos.',
        '[Quanto tempo dura a fascite plantar?](/pt/quanto-tempo-dura-fascite-plantar/) traz o tempo de recuperação, os preditores e o que fazer se a evolução travar.',
        '[Dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) fala do controle de carga e de mudanças no treino.',
        '[Pés doendo de ficar em pé o dia todo](/feet-hurt-standing-all-day/) (em inglês) fala dos exercícios e dos calçados para quem fica muito tempo em pé.',
        '[Enfermagem e dor nos pés](/nurses-foot-pain/) (em inglês) trata de turnos longos em piso duro.',
        '[Mesa para trabalhar em pé e dor nos pés](/standing-desk-foot-pain/) (em inglês) fala da transição entre sentado e em pé.',
        '[Melhor app para fascite plantar](/pt/melhor-app-fascite-plantar/) compara sete apps para fascite plantar.',
        'Páginas de exercícios: [alongamento da fáscia plantar](/pt/exercicios/alongamento-fascia-plantar/), [alongamento de panturrilha](/pt/exercicios/alongamento-panturrilha/), [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/), [rolar o pé na bolinha](/exercises/foot-roll/) (em inglês).',
      ],
    },
  ],
  faq: [
    {
      q: 'Como melhorar da fascite plantar mais rápido?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Não existe atalho, mas a evidência aponta para começar cedo com alongamento (grau A na diretriz) e acrescentar treino de força para a panturrilha (grau B). Em um ensaio com 48\u00A0pessoas, elevações de calcanhar pesadas adiantaram a melhora aos três meses (Rathleff e colegas, 2015). Alongar todo dia, usar calçados com bom suporte e não sobrecarregar o pé são o básico.',
    },
    {
      q: 'Fascite plantar passa sozinha?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Pode passar, mas costuma demorar muito. Uma revisão de 2020 relata que cerca de 90% das pessoas melhoram com tratamento conservador (Latt e colegas, 2020). Em um grupo de 174\u00A0pacientes, cerca de metade estava sem sintomas aos cinco anos (Hansen e colegas, 2018). Cuidar ativamente da dor adianta esse prazo.',
    },
    {
      q: 'Caminhar faz bem ou mal para fascite plantar?',
      cites: [CITE.guideline],
      a: 'Caminhar com calçados de bom suporte, num ritmo confortável, normalmente não tem problema. A diretriz não diz para parar de se mexer. O teste é como o calcanhar está na manhã seguinte. Se a dor nos primeiros passos na manhã depois de uma caminhada está claramente maior que o normal, a caminhada foi demais. Encurte a distância antes de parar de vez.',
    },
    {
      q: 'Esporão no calcanhar causa fascite plantar?',
      cites: [CITE.hansen],
      a: 'Não do jeito que a maioria das pessoas imagina. O esporão é um crescimento de osso na parte de baixo do osso do calcanhar, e muita gente tem um sem sentir dor. Em um acompanhamento de 174\u00A0pacientes, ter esporão no início não teve efeito significativo na duração dos sintomas (Hansen e colegas, 2018). O problema é a sobrecarga da fáscia, não o esporão.',
    },
    {
      q: 'Posso fazer exercício com fascite plantar?',
      cites: [CITE.guideline],
      a: 'Pode, mas o tipo e a dose importam. A diretriz recomenda continuar ativo ajustando a carga, não repouso total. Exercícios que carregam a panturrilha e a fáscia (alongamentos, elevações de calcanhar) fazem parte da abordagem, não são uma contradição. Atividades de alto impacto podem precisar ser reduzidas. O teste é sempre a manhã seguinte: se está pior, o dia anterior foi demais.',
    },
    {
      q: 'Qual o melhor tênis para fascite plantar?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'A diretriz recomenda orientação sobre calçados como parte da abordagem, mas não cita marcas. Um calçado com algum amortecimento, suporte para o arco e um pequeno desnível entre calcanhar e dedos ajuda a compensar uma panturrilha tensa. Pouca flexibilidade no tornozelo é o fator de risco mais forte para fascite plantar (Riddle e colegas, 2003). Evite andar descalço em superfícies duras, principalmente de manhã.',
    },
    {
      q: 'Quando procurar um médico por dor no calcanhar?',
      a: 'Procure um profissional de saúde se a dor começou depois de uma lesão, se você não consegue apoiar o pé, se os dois calcanhares doem e outras articulações estão rígidas, se há dormência ou formigamento, se o calcanhar está vermelho ou quente, se a dor acorda você à noite, ou se ela não melhora depois de vários meses de alongamento e treino de panturrilha. Esses padrões podem indicar outra condição.',
    },
    {
      q: 'Por que tenho fascite plantar em um pé só?',
      a: 'A fascite plantar muitas vezes aparece primeiro em um pé porque a carga raramente se divide igualmente entre as pernas. Uma perna dominante, um mancar antigo, um trabalho que favorece um lado ou um aumento repentino de atividade em uma perna, como começar a correr, podem sobrecarregar mais uma fáscia que a outra. Com o tempo, os dois pés ainda podem ser afetados.',
    },
    {
      q: 'Por que tive fascite plantar de repente?',
      cites: [CITE.guideline],
      a: 'A fascite plantar que aparece de repente costuma vir depois de uma mudança repentina de carga, não de uma lesão repentina. Um aumento rápido na quilometragem de corrida, tênis novos, um trabalho novo que deixa você muito tempo em pé ou ganho de peso podem sobrecarregar a fáscia mais rápido do que ela consegue se adaptar. Ficar muito tempo em pé no trabalho é um dos fatores de risco reconhecidos na diretriz de 2023 para dor no calcanhar.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'ela vem com dormência, formigamento, queimação, inchaço ou calor',
      'o calcanhar está vermelho, ou você tem febre ou se sente mal',
      'ela acorda você à noite ou aparece em repouso',
      'apertar as laterais do calcanhar reproduz a dor',
      'os dois calcanhares doem e outras articulações estão inchadas ou rígidas',
      'não melhorou depois de várias semanas de exercício e menos carga',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa descobrir quais exercícios fazer, em que ordem, nem quando avançar. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para fascite plantar, a primeira meta é uma manhã melhor: dor em 1 de 10 ou menos por 14\u00A0dias seguidos.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio. Quando a meta da manhã é alcançada, ela passa para manutenção e a próxima meta entra no lugar.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Fascite plantar',
  campaign: 'hub-plantar-fasciitis-pt',
};
