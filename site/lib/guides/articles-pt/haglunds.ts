import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Deformidade de Haglund (PT) ───────────────────────────────────────
 *
 * Translated from `articles/haglunds.ts`, written around the Brazilian
 * Portuguese queries «deformidade de Haglund», «doença de Haglund»,
 * «calombo atrás do calcanhar». Informal «você». Figures, doses, grades
 * and qualifiers are identical to the English page.
 */

export const HAGLUNDS_PT: Guide = {
  lang: 'pt',
  page: 'haglunds',
  mainSource: CITE.achillesGuideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Deformidade de Haglund: o que é e o que fazer',
  description:
    'A deformidade de Haglund é um calombo ósseo atrás do calcanhar ligado a bursite e dor no Aquiles. Causas, exercícios e quando se fala em cirurgia.',
  h1: 'Deformidade de Haglund: o calombo atrás do calcanhar, o que causa e o que ajuda',
  lede:
    'A deformidade de Haglund é um aumento ósseo na parte de cima e de trás do osso do calcanhar. Ela fica bem onde o tendão de Aquiles se prende, e quando o calçado aperta ali, a bursa entre o osso e o tendão fica irritada. O resultado é dor atrás do calcanhar, inchaço e às vezes um calombo visível, que em inglês muita gente chama de “pump bump”. O tratamento conservador é a primeira escolha, mas a evidência por trás dele é quase toda opinião de especialistas, não ensaios clínicos.',
  intro: [
    'Esta página fala da anatomia, da relação com a tendinopatia insercional do Aquiles e a bursite retrocalcânea, das medidas conservadoras que existem e de quando a cirurgia entra na conversa. Se a sua dor fica mais acima no tendão, e não no osso, a página de [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/) é o melhor ponto de partida. Se a dor é embaixo do calcanhar, veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) ou [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/).',
  ],
  takeaways: [
    'A deformidade de Haglund é uma proeminência óssea anormal na parte posterossuperior do calcâneo, descrita pela primeira vez por Patrick Haglund em 1927. Ela pode levar a bursite retrocalcânea e tendinopatia insercional do Aquiles (Yuen e colegas, 2022).',
    'O tratamento conservador inclui mudar o calçado (evitar contrafortes rígidos), elevadores de calcanhar, alongamento e fortalecimento da panturrilha. Nenhum ensaio clínico randomizado testou o tratamento conservador especificamente para Haglund (Choo e colegas, 2020).',
    'Para a dor insercional do Aquiles associada a Haglund, a descida excêntrica do calcanhar deve ficar no nível do chão. A dorsiflexão profunda comprime o tendão contra o calombo (Jonsson e colegas, 2008).',
    'A cirurgia é considerada depois de pelo menos seis meses de tratamento conservador sem resultado. Uma revisão sistemática de 2022 concluiu que tanto a técnica aberta quanto a endoscópica melhoraram as notas de função, com recuperação mais curta nas técnicas endoscópicas (Yuen e colegas, 2022).',
    'A diretriz de 2024 para tendinopatia do Aquiles dá ao exercício o grau **A** na tendinopatia da porção média, mas os casos insercionais, que incluem Haglund, precisam de ajustes para evitar a dorsiflexão que provoca dor (Chimenti e colegas, 2024).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é a deformidade de Haglund?',
      figure: { id: 'haglund', caption: 'A deformidade de Haglund é um calombo ósseo no canto de cima e de trás do osso do calcanhar. A bursa entre ele e o tendão de Aquiles pode ficar espremida.', alt: 'Vista lateral de um tornozelo e calcanhar mostrando o tendão de Aquiles, um calombo ósseo no canto de cima e de trás do osso do calcanhar e uma pequena bolsa de líquido entre os dois.' },
      paragraphs: [
        'A deformidade de Haglund é um calombo ósseo na parte posterossuperior do calcâneo, o canto de cima e de trás do osso do calcanhar. Entre esse calombo e o tendão de Aquiles fica uma pequena bolsa cheia de líquido chamada bursa retrocalcânea. Quando o calombo é saliente, a bursa fica espremida entre o osso e o tendão, causando inflamação (bursite retrocalcânea) e dor atrás do calcanhar.',
        'O calombo em si é uma variação da estrutura. Algumas pessoas têm o calcâneo mais saliente que outras. Ele vira um problema quando a pressão do calçado, a carga no tendão ou as duas coisas irritam a bursa e a inserção do tendão. A combinação da proeminência óssea, da bursite e da tendinopatia insercional do Aquiles às vezes é chamada de síndrome de Haglund.',
        'Em inglês, o calombo também é chamado de “pump bump”, por causa da associação com sapatos de traseira rígida, como scarpins ou sapatos sociais, que apertam direto a proeminência. Mas ele não é causado só pelo calçado. A mecânica do pé, a panturrilha tensa e a carga no tendão também têm um papel.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'Qual a relação entre Haglund e a tendinopatia insercional do Aquiles?',
      paragraphs: [
        'A deformidade de Haglund e a tendinopatia insercional do Aquiles muitas vezes aparecem juntas, mas **não são a mesma condição.** A tendinopatia insercional é a dor no ponto em que o tendão de Aquiles se prende ao osso do calcanhar, normalmente por sobrecarga. A deformidade de Haglund é um formato do osso. O calombo pode irritar o tendão por trás, e a inserção do tendão pode ser afetada pela mesma compressão que inflama a bursa.',
        'Na prática: se você tem um calombo de Haglund e dor atrás do calcanhar, a dor pode vir da bursa, da inserção do tendão ou das duas. Um profissional de saúde consegue diferenciar examinando onde a sensibilidade é maior e se alongar ou pôr carga reproduz a dor.',
        'A diretriz de 2024 para tendinopatia do Aquiles separa claramente a doença da porção média da doença insercional. Nos problemas insercionais, que incluem os casos associados a Haglund, o protocolo padrão de descida excêntrica do calcanhar precisa de ajuste. A dorsiflexão profunda, deixar o calcanhar descer abaixo da borda do degrau, comprime o tendão contra o osso e pode piorar os sintomas.',
      ],
      cites: [CITE.achillesGuideline, CITE.jonsson],
    },
    {
      h2: 'O que é bursite retrocalcânea?',
      paragraphs: [
        'A bursa retrocalcânea fica no espaço entre o calcâneo e o tendão de Aquiles. A função dela é reduzir o atrito. Quando o calombo de Haglund é saliente, a bursa é espremida durante a dorsiflexão (dobrar o tornozelo para o pé subir). O resultado é inchaço, dor e às vezes vermelhidão atrás do calcanhar.',
        'A bursite retrocalcânea pode acontecer sem deformidade de Haglund, por exemplo depois de um aumento repentino de corrida ou de treino em subida. Mas a proeminência óssea a torna mais provável. Calçados com contraforte rígido que aperta o calombo são um irritante mecânico direto.',
        'A dor da bursite retrocalcânea fica atrás do calcanhar, funda, entre o tendão e o osso. Ela é diferente da bursite superficial (um inchaço mole e sensível na superfície da pele) e da dor na parte de dentro do calcanhar da fascite plantar.',
      ],
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
    },
    {
      h2: 'Quais são as opções conservadoras para a deformidade de Haglund?',
      paragraphs: [
        'Uma revisão narrativa de 2020 lista as primeiras medidas conservadoras:',
        {
          list: [
            '**Mudar o calçado:** evitar calçados com contraforte rígido, usar calçados abertos atrás ou acolchoar a região do calcanhar.',
            '**Elevadores de calcanhar:** para reduzir a tensão no Aquiles.',
            '**Alongar:** o gastrocnêmio e o sóleo.',
            '**Fortalecer:** a panturrilha.',
            '**Modificar a atividade.**',
          ],
        },
        'Nenhum ensaio clínico randomizado testou qualquer uma dessas intervenções especificamente para a deformidade de Haglund. A evidência é opinião de especialistas e séries de casos. A revisão cirúrgica de 2022 observou que a maioria dos autores recomenda pelo menos seis meses de tratamento conservador antes de considerar a cirurgia.',
        '**A mudança mais imediata muitas vezes é o calçado.** Se um contraforte rígido está apertando o calombo, tirar essa pressão pode reduzir os sintomas rápido. Calçados abertos atrás, calçados com contraforte macio ou flexível, ou um acolchoamento colocado dentro do calçado em volta (não em cima) do calombo são opções práticas.',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
    {
      h2: 'Quais exercícios ajudam na deformidade de Haglund?',
      keyFact: 'Em um estudo piloto com 27\u00A0pessoas com dor insercional no Aquiles, a carga excêntrica no nível do chão, sem dorsiflexão profunda, deu bons resultados em 67% dos casos (Jonsson e colegas, 2008).',
      paragraphs: [
        'O exercício para Haglund tem dois objetivos: reduzir a tensão da panturrilha que puxa o calcanhar e desenvolver a força da panturrilha que ajuda o tendão a tolerar carga. Os dois vêm da pesquisa sobre tendinopatia do Aquiles. Nenhum ensaio os testou especificamente para Haglund.',
        'O ajuste principal é fazer só no nível do chão. Para a dor insercional do Aquiles, um estudo piloto de 2008 com 27\u00A0pessoas testou a carga excêntrica sem dorsiflexão além da posição neutra, ou seja, o calcanhar nunca descia abaixo do chão. Foram relatados bons resultados em 67% dos casos. A descida do calcanhar padrão na borda de um degrau, que deixa o calcanhar afundar abaixo da borda e leva o tornozelo a uma dorsiflexão profunda, pode comprimir o tendão contra o calombo e piorar os sintomas.',
        'A página de [descida excêntrica do calcanhar](/pt/exercicios/excentrico-calcanhar/) explica o movimento em detalhes. Para Haglund e dor insercional, faça todas as elevações e descidas do calcanhar no nível do chão. Não desça abaixo da borda do degrau. O alongamento da panturrilha também deve ser leve, parando antes que a dorsiflexão profunda provoque a parte de trás do calcanhar.',
      ],
      exercises: [
        {
          name: 'Descida excêntrica do calcanhar (no nível do chão)',
          evidence: { level: 'early', why: 'Jonsson 2008 foi um estudo piloto pequeno e sem controle (27\u00A0pacientes, sem grupo de comparação): carga excêntrica só no nível do chão, sem dorsiflexão além da posição neutra, com bons resultados relatados em 67% dos pacientes com dor insercional no Aquiles. Nenhum ensaio controlado testou isso para Haglund, então a evidência continua inicial, e não moderada.' },
          dose: 'O Walkito começa com 3 x 10, cada perna. Protocolo de Jonsson: 3 x 15, duas vezes por dia, por três meses',
          how: 'Fique em pé num chão plano (não na borda de um degrau). Suba com os dois pés, passe o peso para a perna afetada e desça devagar em três segundos. O calcanhar volta ao nível do chão, não abaixo dele. Use os dois pés para subir de novo. Comece com o joelho esticado; acrescente séries com o joelho dobrado quando as de joelho esticado ficarem administráveis.',
          often: 'Dias de força. Protocolo de Jonsson: duas vezes por dia.',
          feel: 'Trabalho na panturrilha durante a descida. Algum desconforto no tendão é aceitável se passar até a manhã seguinte.',
          stop: 'Dor atrás do calcanhar acima de 5/10, ou dor que não passa durante a noite',
          media: 'heel_drop_straight',
          caption: 'Descida excêntrica do calcanhar no nível do chão: suba com os dois pés, desça devagar com um, o calcanhar fica no nível do chão',
          alt: 'Uma figura descendo um calcanhar devagar da ponta do pé até o nível do chão, com o tendão de Aquiles destacado',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'Apoiada pela diretriz como parte da progressão de carga do Aquiles. Não foi testada diretamente para Haglund.' },
          dose: '3\u00A0séries de 10, com os dois pés',
          how: 'Fique em pé sobre os dois pés num chão plano. Suba reto sobre os dedões e desça devagar em três segundos. Os dois pés dividem a carga. Esse é o ponto de partida com menos carga antes do trabalho excêntrico em uma perna.',
          often: 'Na maioria dos dias da semana, enquanto esse nível ainda for desafiador',
          feel: 'As panturrilhas trabalhando juntas, um leve puxão no tendão',
          stop: 'Dor atrás do calcanhar acima de 5/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés no nível do chão',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado, leve)',
          evidence: { level: 'early', why: 'Faz parte do tratamento conservador para Haglund segundo a recomendação de especialistas. Nenhum ensaio clínico randomizado para essa condição. Evite a dorsiflexão profunda.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Leve um pé para trás, perna de trás esticada, calcanhar no chão. Incline para a frente até sentir um alongamento na parte de cima da panturrilha. Pare antes de o alongamento chegar à parte de trás do osso do calcanhar. Não force o tornozelo numa dobra profunda.',
          often: 'Todo dia, depois do trabalho de força',
          feel: 'Um alongamento na panturrilha, não dor na inserção do Aquiles',
          stop: 'Qualquer incômodo na parte de trás do osso do calcanhar',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: faça leve, pare antes de provocar a parte de trás do calcanhar',
          alt: 'Uma figura apoiada na parede com uma perna esticada atrás, com os músculos da panturrilha destacados',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado, leve)',
          evidence: { level: 'early', why: 'Trabalha o músculo mais profundo da panturrilha. O mesmo cuidado: evite a dorsiflexão profunda na dor insercional.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede, dobre o joelho de trás até o alongamento descer. Pare antes do ponto em que a parte de trás do calcanhar é comprimida. O sóleo só solta com o joelho dobrado.',
          often: 'Todo dia, depois do alongamento de panturrilha',
          feel: 'Um alongamento perto da parte baixa da panturrilha, não no osso do calcanhar',
          stop: 'Dor na inserção do Aquiles ou no calombo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás, com leveza no calcanhar',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline, CITE.chooRearfoot],
    },
    {
      h2: 'Quanta dor é aceitável durante os exercícios?',
      keyFact: 'O modelo de monitoramento da dor permite dor de até cerca de 5 de 10 durante a carga, desde que ela volte ao nível de base até a manhã seguinte e não piore de uma semana para outra (Silbernagel e colegas, 2007).',
      paragraphs: [
        'O modelo de monitoramento da dor de Silbernagel 2007 para tendinopatia do Aquiles permitia dor de até cerca de 5 de 10 durante a carga, desde que ela voltasse ao nível de base até a manhã seguinte e não piorasse de uma semana para outra. Esse modelo foi testado para dor na porção média do Aquiles, não especificamente para Haglund ou casos insercionais, mas é o limite de dor mais citado na pesquisa sobre o Aquiles.',
        'Nos problemas insercionais associados a Haglund, tenha mais cautela. O calombo acrescenta um elemento mecânico que a tendinopatia da porção média não tem: a compressão da bursa e do tendão contra o osso. Se os exercícios provocam uma dor aguda atrás do calcanhar que não passa rápido, diminua a carga ou passe para sustentações isométricas antes de tentar o trabalho excêntrico de novo.',
      ],
      cites: [CITE.silbernagel, CITE.jonsson],
    },
    {
      h2: 'Quando a cirurgia é considerada na deformidade de Haglund?',
      keyFact: 'Uma revisão sistemática de 2022 com 20\u00A0estudos concluiu que tanto a cirurgia aberta quanto a endoscópica melhoraram as notas de função da AOFAS, com recuperação mais curta nas técnicas endoscópicas (Yuen e colegas, 2022).',
      paragraphs: [
        'A cirurgia entra na conversa depois de pelo menos seis meses de tratamento conservador sem alívio suficiente. A revisão sistemática de 2022 de Yuen e colegas incluiu 20\u00A0estudos e concluiu que tanto a técnica aberta quanto a endoscópica melhoraram as notas da AOFAS (American Orthopaedic Foot and Ankle Society). As abordagens endoscópicas tiveram tempo de recuperação mais curto.',
        'A cirurgia normalmente envolve:',
        {
          list: [
            'Retirar a proeminência óssea (calcaneoplastia).',
            'Remover a bursa inflamada.',
            'Em alguns casos, desbridar ou reinserir o tendão de Aquiles.',
          ],
        },
        'As complicações podem incluir problemas de cicatrização, lesão de nervo e enfraquecimento do tendão. A decisão é sua e do seu cirurgião.',
        'Esta página não recomenda nem desaconselha a cirurgia. As medidas conservadoras acima são onde a maioria das pessoas começa, e muitas respondem bem o suficiente para evitar uma operação. Se seis meses de mudança de calçado, exercício e ajustes na atividade não ajudaram, um especialista em pé e tornozelo pode conversar com você sobre as opções cirúrgicas.',
      ],
      cites: [CITE.yuenHaglund],
    },
    {
      h2: 'O calçado pode causar a deformidade de Haglund?',
      paragraphs: [
        'O calçado não cria a proeminência óssea. O formato do calcâneo é em parte genético. Mas calçados com um contraforte rígido, que não cede, podem irritar um calombo que de outra forma não doeria. Essa é a origem do nome em inglês “pump bump”, por causa da traseira rígida dos scarpins.',
        'Calçados a evitar: qualquer um com um contraforte duro e estreito que aperta a parte de trás do calcanhar. Calçados a procurar: gola do calcanhar macia ou acolchoada, parte de trás um pouco aberta ou flexível, e espaço suficiente para o contraforte não pressionar. Elevadores de calcanhar dentro do calçado também podem afastar um pouco o tendão de Aquiles do calombo.',
        'Mudar o calçado é a medida que dá para pôr em prática mais rápido e a mais recomendada de forma consistente na literatura de opinião de especialistas. **Se você consegue tirar a pressão, muitas vezes consegue reduzir a dor.**',
      ],
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
    },
  ],
  faq: [
    {
      q: 'O que é o calombo atrás do calcanhar?',
      cites: [CITE.yuenHaglund],
      a: 'Muitas vezes é a deformidade de Haglund, um aumento ósseo na parte de cima e de trás do osso do calcanhar, chamado em inglês de “pump bump”. O nome vem dos sapatos de traseira rígida (scarpins) que apertam o calombo e irritam o tecido entre o osso e o tendão de Aquiles, causando dor e inchaço.',
    },
    {
      q: 'Deformidade de Haglund é a mesma coisa que tendinite de Aquiles?',
      cites: [CITE.achillesGuideline, CITE.yuenHaglund],
      a: 'Não. A deformidade de Haglund é uma proeminência óssea no osso do calcanhar. A tendinite de Aquiles é a dor no próprio tendão, normalmente por sobrecarga. Elas muitas vezes aparecem juntas porque o calombo pode irritar o tendão onde ele se prende. A diretriz de 2024 trata a tendinopatia insercional do Aquiles, que pode envolver Haglund, como diferente da doença da porção média.',
    },
    {
      q: 'A deformidade de Haglund some sem cirurgia?',
      cites: [CITE.yuenHaglund, CITE.chooRearfoot],
      a: 'O calombo ósseo não some sem cirurgia. Mas a dor pode passar. Muitas pessoas controlam os sintomas com mudança de calçado, elevadores de calcanhar, alongamento e fortalecimento da panturrilha e ajustes na atividade. A cirurgia entra na conversa depois de pelo menos seis meses de tratamento conservador sem alívio.',
    },
    {
      q: 'Quais exercícios evitar com deformidade de Haglund?',
      cites: [CITE.jonsson],
      a: 'Evite exercícios que levam o tornozelo a uma dorsiflexão profunda, ou seja, o pé dobrando em direção à canela além da posição neutra. A descida excêntrica do calcanhar padrão na borda de um degrau, em que o calcanhar afunda abaixo do degrau, comprime o tendão contra o calombo. Faça elevações e descidas do calcanhar só no nível do chão. Evite alongamentos fortes de panturrilha que provocam a parte de trás do calcanhar.',
    },
    {
      q: 'Deformidade de Haglund precisa de cirurgia?',
      cites: [CITE.yuenHaglund],
      a: 'Nem sempre. O tratamento conservador é a primeira escolha. Uma revisão sistemática de 2022 observou que a maioria dos autores recomenda pelo menos seis meses de tratamento conservador antes de considerar a cirurgia. A cirurgia envolve retirar o calombo ósseo, a bursa inflamada e às vezes desbridar o tendão. Tanto a técnica aberta quanto a endoscópica melhoram os resultados.',
    },
    {
      q: 'Qual o melhor calçado para deformidade de Haglund?',
      cites: [CITE.chooRearfoot],
      a: 'Calçados com contraforte macio, acolchoado ou flexível. Evite calçados de traseira rígida que apertam o calombo. Calçados abertos atrás, tamancos ou calçados com um recorte na gola do calcanhar podem reduzir a pressão direta. Elevadores de calcanhar dentro do calçado podem afastar um pouco o tendão da proeminência.',
    },
    {
      q: 'O que é bursite retrocalcânea?',
      cites: [CITE.yuenHaglund],
      a: 'A bursite retrocalcânea é a inflamação da bolsa cheia de líquido (bursa) entre o tendão de Aquiles e o osso do calcanhar. A deformidade de Haglund a torna mais provável porque o osso saliente espreme a bursa durante o movimento do tornozelo. A dor é funda, atrás do calcanhar, e muitas vezes piora com o calçado e com a dorsiflexão.',
    },
    {
      q: 'O que acontece se a deformidade de Haglund não for tratada?',
      cites: [CITE.chooRearfoot, CITE.yuenHaglund],
      a: 'Sem mudanças, o calombo não diminui e o atrito do calçado que o provocou normalmente continua, então a dor e a bursite retrocalcânea podem continuar aumentando. Uma irritação de longa data também aumenta o risco de tendinopatia insercional do Aquiles. O crescimento ósseo em si não se reverte com tratamento conservador, embora os sintomas muitas vezes aliviem quando o calçado e a carga mudam.',
    },
    {
      q: 'Andar faz mal para a deformidade de Haglund?',
      cites: [CITE.chooRearfoot],
      a: 'Andar em si não faz mal, e continuar ativo normalmente não tem problema. O que importa é o calçado: um contraforte rígido ou baixo que roça no calombo pode piorar a dor e a bursite a cada passo. Trocar por calçados com o calcanhar macio ou aberto normalmente é mais útil do que ficar em repouso total.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'você sentiu um estalo repentino ou a sensação de ter levado um chute na parte de trás da perna. Isso pode indicar uma ruptura do tendão de Aquiles',
      'há inchaço, vermelhidão ou calor importantes atrás do calcanhar, principalmente com febre',
      'a dor está piorando sem parar mesmo com mudança de calçado e medidas conservadoras ao longo de várias semanas',
      'você não consegue subir na ponta dos pés ou andar normalmente',
      'a dor aparece em repouso ou acorda você à noite, o que pode indicar uma fratura por estresse ou outra condição além da bursite',
      'dormência ou formigamento acompanham a dor no calcanhar',
      'você tomou recentemente antibióticos do grupo das fluoroquinolonas (como o ciprofloxacino) e tem uma dor nova no tendão',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'A progressão de carga na panturrilha do Walkito vai da elevação de calcanhar sentado, passando pela elevação com os dois pés, uma sustentação, a descida excêntrica do calcanhar e além. Para Haglund e dor insercional no Aquiles, todas as etapas ficam no nível do chão, em vez de descer abaixo da borda de um degrau. O Walkito faz você subir de nível quando duas sessões num nível pareceram fáceis, e não num calendário fixo.',
    more: [
      'As sessões são de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste mede a resistência da panturrilha e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico. Se você tem um calombo visível atrás do calcanhar e não tem certeza do que está causando a dor, peça para um profissional de saúde avaliar antes de começar a pôr carga.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Deformidade de Haglund',
  campaign: 'guide-haglunds-pt',
};
