import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/plantar-fasciitis-vs-stress-fracture.ts
 * (2026-10-18), written around «fascite plantar ou fratura por estresse» and
 * «fratura por estresse no calcanhar». Informal «você». Figures, grades, doses,
 * hedges and CITE keys are identical to the English page after its fact-check.
 * Same media ids. The only addition is a km conversion next to the 25 miles
 * (cerca de 40 km), as in the Spanish version. Link to heel-pain-runners
 * removed (no Portuguese page), words kept.
 */

export const PF_VS_STRESS_FRACTURE_PT: Guide = {
  lang: 'pt',
  page: 'pfVsStressFracture',
  mainSource: CITE.patelStressFracture,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Fascite plantar ou fratura por estresse: como diferenciar',
  description:
    'Fascite plantar ou fratura por estresse no calcanhar? Compare o tipo de dor, o teste de compressão, quem corre risco, por que o raio-X falha e o que fazer.',
  h1: 'Fascite plantar ou fratura por estresse do calcâneo: como diferenciar',
  lede:
    'A [fascite plantar](/pt/fascite-plantar/) dói mais nos primeiros passos depois do repouso e costuma melhorar depois de alguns minutos de caminhada. Uma fratura por estresse do calcâneo faz o contrário: a dor aumenta quanto mais você anda ou corre, muitas vezes depois de um salto na atividade, e apertar os lados do calcanhar costuma doer (Tu, 2018). Um raio-X feito cedo pode parecer normal: em 30\u00A0recrutas militares com uma lesão por estresse no calcâneo vista na ressonância magnética, o raio-X simples mostrou a lesão em apenas 15% (Sormaala e colegas, 2006).',
  intro: [
    'As duas condições ficam no mesmo calcanhar e podem começar depois da mesma coisa: mais caminhada, mais corrida ou mais tempo em pé. Mas pedem respostas opostas: a fascite plantar responde bem a alongamento e trabalho de força, enquanto uma fratura por estresse precisa primeiro de menos carga. Esta página compara as duas lado a lado, explica o que o teste de compressão pode e não pode dizer, quem tem mais risco de fratura, por que o exame muitas vezes acaba sendo uma ressonância magnética e o que fazer enquanto você espera a resposta.',
  ],
  takeaways: [
    'A dor da fascite plantar é «mais perceptível ao apoiar o peso logo ao acordar ou depois de um período de repouso» e melhora com a caminhada (Koc e colegas, 2023). A dor da fratura por estresse começa com a atividade e, mais tarde, pode aparecer também em repouso (Tu, 2018).',
    'Dor ao apertar os lados do osso do calcanhar sugere fratura por estresse (Tu, 2018), mas não encontramos nenhum estudo que tenha medido a precisão do teste de compressão para o calcanhar, e ele também dói na doença de Sever em crianças.',
    'O raio-X simples muitas vezes não mostra fraturas por estresse no início: uma revisão estimou a sensibilidade dele na primeira consulta em cerca de 10%, subindo para 30 a 70% depois de três semanas (Patel e colegas, 2011). A ressonância magnética foi o exame mais preciso em uma revisão sistemática de 2016 (Wright e colegas, 2016).',
    'Um aumento repentino do treino é o gatilho clássico. Quem corre em média mais de 25\u00A0milhas (cerca de 40\u00A0km) por semana, as mulheres e as pessoas com baixa disponibilidade de energia ou ossos fracos têm mais risco (Patel e colegas, 2011; Mountjoy e colegas, 2023).',
    'Alongamento e exercícios de força recebem graus **A** e **B** para a fascite plantar (Koc e colegas, 2023). Eles não são um plano para uma suspeita de fratura, que primeiro precisa de menos carga e de um profissional de saúde.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Como diferenciar a fascite plantar de uma fratura por estresse do calcâneo?',
      keyFact: 'A dor da fratura por estresse do calcâneo costuma começar depois de um aumento de atividade com carga ou de uma troca para uma superfície mais dura, aparece primeiro só com a atividade e, mais tarde, pode aparecer em repouso (Tu, 2018).',
      paragraphs: [
        '**A pista mais clara é o que a caminhada faz com a dor.** A fascite plantar é pior nos primeiros passos depois de dormir ou de ficar sentado, melhora depois de alguns minutos e pode voltar depois de um dia longo em pé (Tu, 2018). A diretriz de 2023 para dor no calcanhar descreve essa dor como «mais perceptível ao apoiar o peso logo ao acordar ou depois de um período de repouso» (Koc e colegas, 2023).',
        'Uma fratura por estresse do calcâneo é uma pequena trinca no osso do calcanhar causada por carga repetida. A dor costuma começar depois que você aumenta a caminhada, a corrida ou o tempo em pé, ou passa para uma superfície mais dura. No começo ela dói só durante a atividade e vai aumentando conforme você continua. Mais tarde pode doer em repouso (Tu, 2018). Em uma revisão sobre fraturas por estresse em geral, dor ao andar foi relatada por 81% dos pacientes, um ponto dolorido no osso por 65,9 a 100% e inchaço por 18 a 44% (Patel e colegas, 2011).',
        'A tabela resume os padrões mais comuns. Nenhuma linha decide sozinha, e algumas pessoas não se encaixam bem em nenhuma das colunas.',
      ],
      table: {
        caption: 'Padrões típicos, não um diagnóstico',
        head: ['', 'Fascite plantar', 'Fratura por estresse do calcâneo'],
        rows: [
          ['Pior momento', 'Primeiros passos depois do repouso', 'Durante e depois da atividade'],
          ['Depois de alguns minutos andando', 'Costuma melhorar', 'Aumenta'],
          ['Onde dói', 'Embaixo do calcanhar, lado de dentro', 'No osso do calcanhar todo, muitas vezes na metade de trás'],
          ['Apertar os lados do calcanhar', 'Normalmente não dói', 'Muitas vezes dói'],
          ['Inchaço', 'Não é um sinal comum', 'Às vezes'],
          ['Gatilho comum', 'Muitas horas em pé, panturrilha encurtada', 'Um salto no treino ou uma superfície mais dura'],
          ['Raio-X no início', 'Não é necessário', 'Muitas vezes normal'],
        ],
      },
      after: [
        'A dor que aparece principalmente à noite ou em repouso tem uma lista própria de causas, explicada em [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/). A dor que aumenta ao longo de uma caminhada é explicada em [dor no calcanhar depois de andar](/pt/dor-no-calcanhar-depois-de-andar/).',
      ],
      sourceNote: 'Localização: em Sormaala 2006, 19 das 34 lesões por estresse do calcâneo estavam na parte de trás do osso, 6 no meio e 9 na parte da frente. Os números de sensibilidade ao toque, dor ao andar e inchaço de Patel 2011 são de fraturas por estresse em todos os locais, não só no calcanhar.',
      cites: [CITE.tuHeelPain, CITE.guideline, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'O que é o teste de compressão e quanto ele pode dizer?',
      paragraphs: [
        '**O teste de compressão é apertar ao mesmo tempo o lado de dentro e o lado de fora do osso do calcanhar, entre as palmas das mãos ou entre o polegar e os dedos.** O profissional faz o teste com o pé relaxado. Dor ao apertar «sugere o diagnóstico» de fratura por estresse do calcâneo, segundo uma revisão de 2018 na American Family Physician (Tu, 2018). Já a fascite plantar dói quando você aperta embaixo da parte de dentro e da frente do calcanhar, onde a fáscia se prende.',
        'Os limites dele são reais:',
        {
          list: [
            '**Ninguém mediu a precisão dele para o calcanhar.** Não encontramos nenhum estudo que diga com que frequência o teste de compressão dá positivo em pessoas com fratura por estresse do calcâneo confirmada, ou com que frequência dá positivo sem fratura. A mesma revisão sobre fraturas por estresse observa que o teste do salto em um pé só, outro teste comum no consultório, também não foi validado (Patel e colegas, 2011).',
            '**Um teste negativo não descarta uma fratura.** Algumas lesões por estresse do calcâneo ficam mais para a frente ou no meio do osso: em um estudo com ressonância magnética, 15 de 34 não estavam na parte de trás (Sormaala e colegas, 2006).',
            '**Outras coisas também doem ao apertar.** Em crianças e pré-adolescentes, dor ao apertar é um sinal comum da [doença de Sever](/pt/doenca-de-sever/), uma irritação da placa de crescimento (Tu, 2018). Outros problemas do osso do calcanhar também podem doer, então um profissional precisa avaliar.',
          ],
        },
        'Se você apertar os lados do próprio calcanhar e doer, encare isso como um motivo para ser avaliado, não como um diagnóstico. Não pule em um pé só para testar.',
      ],
      cites: [CITE.tuHeelPain, CITE.patelStressFracture, CITE.sormaalaCalcaneus],
    },
    {
      h2: 'Quem tem mais risco de fratura por estresse do calcâneo?',
      keyFact: 'Corredores amadores que correm em média mais de 25\u00A0milhas (cerca de 40\u00A0km) por semana têm mais risco de fraturas por estresse, e as mulheres têm mais risco do que os homens (Patel e colegas, 2011).',
      paragraphs: [
        'Uma fratura por estresse acontece quando o osso recebe mais carga repetida do que consegue reparar. O risco sobe quando a carga aumenta, quando o osso aguenta menos, ou as duas coisas (Warden e colegas, 2014).',
        {
          list: [
            '**Um aumento repentino do treino.** Um salto grande em caminhada, corrida, marcha ou tempo em pé, ou treinos pesados seguidos com pouco descanso, é a história clássica (Patel e colegas, 2011). A troca para uma superfície mais dura para andar é um gatilho comum no calcanhar (Tu, 2018).',
            '**Muito volume de corrida.** Corredores amadores que correm em média mais de 25\u00A0milhas (cerca de 40\u00A0km) por semana têm mais risco, assim como atletas de atletismo, basquete, futebol e dança (Patel e colegas, 2011).',
            '**Baixa disponibilidade de energia.** Comer pouco para o tanto que você treina pode afetar os hormônios e os ossos. O Comitê Olímpico Internacional inclui a saúde óssea prejudicada, com as lesões ósseas por estresse, entre os efeitos desse quadro, chamado de deficiência relativa de energia no esporte (REDs), em mulheres e em homens (Mountjoy e colegas, 2023).',
            '**Saúde dos ossos.** Mulheres com a tríade da mulher atleta (transtorno alimentar, falta de menstruação e baixa densidade óssea) têm mais risco, e um estudo encontrou níveis mais baixos de vitamina D em recrutas com fraturas por estresse (Patel e colegas, 2011). Um osso enfraquecido pela osteoporose pode trincar com cargas normais, o que se chama fratura por insuficiência.',
            '**Ser mulher.** As mulheres têm mais risco do que os homens, principalmente no treinamento militar, embora os dados em atletas mulheres sejam divergentes (Patel e colegas, 2011).',
          ],
        },
        'A fascite plantar tem outro perfil de risco. Em um estudo com 50\u00A0pessoas com fascite e 100 sem, quem tinha 0\u00A0grau ou menos de flexão do tornozelo para cima (dorsiflexão) teve uma chance 23,3\u00A0vezes maior do que quem tinha mais de 10\u00A0graus, e ficar em pé a maior parte do dia de trabalho aumentou a chance em 3,6\u00A0vezes (Riddle e colegas, 2003).',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.wardenBSI, CITE.mountjoyREDs, CITE.riddle],
    },
    {
      h2: 'Por que o raio-X pode parecer normal com uma fratura por estresse?',
      keyFact: 'Em 30\u00A0recrutas militares cuja ressonância magnética mostrou uma lesão por estresse no calcâneo, a lesão aparecia no raio-X simples em apenas 15% (Sormaala e colegas, 2006).',
      paragraphs: [
        '**Uma fratura por estresse no início muitas vezes é pequena demais para aparecer no raio-X.** O osso reage primeiro com um inchaço dentro dele, que o raio-X não enxerga. Os sinais de reparo aparecem depois. Uma revisão estimou a sensibilidade do raio-X na primeira consulta em cerca de 10%, subindo para 30 a 70% depois de três semanas (Patel e colegas, 2011).',
        'No calcanhar especificamente, um estudo finlandês avaliou recrutas militares com dor no calcanhar ou no tornozelo ligada ao exercício que fizeram ressonância magnética. De 30\u00A0recrutas com lesões por estresse no calcâneo, só 15% tinham uma lesão visível no raio-X simples. Em 22 dos 34 calcanhares lesionados, ossos vizinhos do pé também estavam afetados (Sormaala e colegas, 2006).',
        'Uma revisão sistemática de 2016 sobre fraturas por estresse nos membros inferiores encontrou uma sensibilidade do raio-X de 12% a 56%, contra 68% a 99% da ressonância magnética. Os autores apontaram a ressonância como o exame mais sensível e específico e alertaram que o raio-X tende a dar falsos negativos no início (Wright e colegas, 2016).',
        'Por isso, quando suspeita de fratura, o profissional pode repetir o raio-X depois de duas a três semanas ou ir direto para a ressonância magnética se uma resposta rápida for importante (Patel e colegas, 2011). Para a fascite plantar, a diretriz de 2023 diz que exames de imagem «geralmente não são indicados para pacientes que preenchem os critérios do exame clínico para fascite plantar, até que as intervenções conservadoras falhem» (Koc e colegas, 2023). A [página sobre esporão](/pt/fascite-plantar-ou-esporao/) explica por que um esporão no raio-X também não tira a dúvida.',
      ],
      sourceNote: 'Wright 2016 reuniu fraturas por estresse dos membros inferiores, não só do calcanhar. As faixas são a menor e a maior sensibilidade relatadas entre os estudos incluídos, não estimativas combinadas.',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture, CITE.wrightImaging, CITE.guideline],
    },
    {
      h2: 'O que fazer enquanto você espera a resposta?',
      keyFact: 'Mudar a atividade, com pouca ou nenhuma carga no pé por até seis semanas se a dor for forte, costuma dar certo nas fraturas por estresse do calcâneo (Tu, 2018).',
      paragraphs: [
        '**Se a sua dor se encaixa na coluna da fratura por estresse, tire a carga do calcanhar e marque uma consulta.** Não continue correndo para ver no que dá. Começar cedo faz diferença: uma revisão observa que a demora já foi associada a uma volta mais longa à atividade (Patel e colegas, 2011).',
        {
          list: [
            '**Reduza a carga ao que não dói.** Isso normalmente quer dizer parar por enquanto com corrida, saltos e caminhadas longas. Algumas pessoas precisam de muletas ou de uma bota imobilizadora por um tempo (Patel e colegas, 2011; Tu, 2018).',
            '**Mantenha o condicionamento sem carga no calcanhar,** por exemplo com natação ou bicicleta, se não doerem (Patel e colegas, 2011).',
            '**Pergunte sobre analgésicos.** A mesma revisão diz que os anti-inflamatórios devem ser usados com cautela em uma fratura por estresse, porque alguns estudos em animais sugerem que eles podem atrasar o reparo do osso (Patel e colegas, 2011).',
            '**Não comece ainda um plano de alongamento ou de força para o calcanhar.** Espere até um profissional descartar a fratura ou liberar você.',
          ],
        },
        'As fraturas por estresse do calcâneo costumam ter boa recuperação em pessoas saudáveis em outros aspectos (Tu, 2018). Nas fraturas por estresse em geral, a recuperação leva de quatro semanas a três meses ou mais a partir do momento em que a atividade é reduzida, e depois a atividade volta aos poucos quando você já está sem dor (Patel e colegas, 2011).',
        'Se a sua dor se encaixa na coluna da fascite plantar, normalmente você não precisa de exame de imagem para começar os exercícios abaixo (Koc e colegas, 2023). Se não tiver certeza de qual coluna é a sua, procure primeiro um profissional de saúde.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Por que os exercícios são para a fascite plantar e não para uma fratura?',
      paragraphs: [
        '**Alongamento e carga ajudam a fascite plantar porque o tecido se adapta à carga. Um osso trincado primeiro precisa que a carga seja retirada.** As lesões ósseas por estresse ficam em uma escala: uma reação de estresse pode evoluir para uma fratura por estresse e, se a carga continuar, para uma fratura completa (Warden e colegas, 2014).',
        'As evidências a favor do exercício são específicas da fascite plantar. A diretriz de 2023 para dor no calcanhar dá grau **A** ao alongamento da fáscia plantar e da panturrilha e grau **B** ao trabalho de força para essa condição (Koc e colegas, 2023). O programa de elevação de calcanhar do ensaio mais conhecido foi testado em 48\u00A0pessoas com fascite plantar, não em pessoas com fratura (Rathleff e colegas, 2015).',
        'Nas fraturas por estresse, as evidências apontam para o outro lado. Dois ensaios randomizados por conglomerados mostraram que alongar as pernas no aquecimento não preveniu fraturas por estresse (Patel e colegas, 2011). O que importa é reduzir a carga e depois voltar aos poucos com a orientação de um profissional. Depois que a fratura se recupera, fortalecer os músculos em volta do osso passa a fazer parte da prevenção da próxima (Warden e colegas, 2014).',
        'É por isso que os exercícios desta página são só para a fascite plantar. Se disseram que você tem uma fratura por estresse, siga o plano de retorno do seu profissional de saúde.',
      ],
      cites: [CITE.wardenBSI, CITE.guideline, CITE.rathleff, CITE.patelStressFracture],
    },
    {
      h2: 'Só para fascite plantar: quais exercícios servem depois de descartar uma fratura?',
      paragraphs: [
        '**Faça estes exercícios só se a sua dor se encaixa na fascite plantar, ou se um profissional já descartou uma fratura.** Se apertar o calcanhar dói, a dor aumenta a cada caminhada ou o calcanhar está inchado, pule os exercícios e seja avaliado primeiro.',
        'Estes são os primeiros passos do nosso guia de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/): primeiro os alongamentos, depois uma elevação de calcanhar sentada que quase não põe carga no calcanhar. A progressão completa, até a elevação de calcanhar com toalha do ensaio, está nesse guia.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para uma suspeita de fratura.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Dor no próprio osso do calcanhar, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para uma suspeita de fratura.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente. Uma panturrilha encurtada puxa o calcanhar o dia todo, então este alongamento importa mesmo que você o sinta mais acima.',
          stop: 'Dor no próprio osso do calcanhar, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (só fascite plantar)',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto, para a fascite plantar. Não serve para uma suspeita de fratura.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor no próprio osso do calcanhar, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente e outro atrás e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada (só fascite plantar)',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B para a fascite plantar. Este passo não foi testado sozinho. Não serve para uma suspeita de fratura.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: '3\u00A0dias por semana, nunca dois seguidos',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha, quase sem carga no calcanhar.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Como saber se a dor no calcanhar é fratura por estresse ou fascite plantar?',
      cites: [CITE.tuHeelPain, CITE.guideline],
      a: 'Observe o que a caminhada faz com a dor. A fascite plantar dói mais nos primeiros passos depois do repouso e melhora depois de alguns minutos. Uma fratura por estresse do calcâneo costuma vir depois de um salto na atividade, aumenta quanto mais tempo você anda ou corre e muitas vezes dói quando os lados do calcanhar são apertados. Se a sua dor se encaixa no padrão da fratura, procure um profissional de saúde.',
    },
    {
      q: 'O raio-X pode não mostrar uma fratura por estresse do calcâneo?',
      cites: [CITE.sormaalaCalcaneus, CITE.patelStressFracture],
      a: 'Sim, com frequência. Em 30\u00A0recrutas militares com uma lesão por estresse no calcâneo vista na ressonância magnética, o raio-X simples mostrou a lesão em apenas 15%. Uma revisão estimou a sensibilidade do raio-X na primeira consulta em cerca de 10%, subindo para 30 a 70% depois de três semanas. Um raio-X normal feito cedo não descarta uma fratura por estresse.',
    },
    {
      q: 'Preciso de ressonância magnética para dor no calcanhar?',
      cites: [CITE.guideline, CITE.wrightImaging],
      a: 'Não para uma fascite plantar típica: a diretriz de 2023 diz que exames de imagem geralmente não são necessários quando o exame clínico é compatível. Se o profissional suspeitar de fratura por estresse, a ressonância magnética é o exame mais preciso. Uma revisão sistemática de 2016 encontrou sensibilidade de 68% a 99% para a ressonância, contra 12% a 56% para o raio-X simples.',
    },
    {
      q: 'O que significa um teste de compressão positivo?',
      cites: [CITE.tuHeelPain],
      a: 'Dor quando o lado de dentro e o lado de fora do osso do calcanhar são apertados ao mesmo tempo sugere fratura por estresse do calcâneo ou, em crianças, doença de Sever. É um motivo para procurar um profissional, não um diagnóstico. Não encontramos nenhum estudo que tenha medido a precisão do teste de compressão para fraturas por estresse do calcâneo, então um aperto sem dor não descarta uma fratura.',
    },
    {
      q: 'Dá para andar com uma fratura por estresse no calcanhar?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Talvez você consiga, mas normalmente não deveria continuar pondo carga. O cuidado consiste em reduzir a atividade ao que não dói e, com dor forte, pôr pouco ou nenhum peso no pé por até seis semanas, às vezes com muletas ou uma bota. Um profissional de saúde deve orientar quanto você pode andar com segurança.',
    },
    {
      q: 'Quanto tempo leva para uma fratura por estresse do calcâneo melhorar?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'Nas fraturas por estresse em geral, a recuperação leva de quatro semanas a três meses ou mais a partir do momento em que a atividade é reduzida. As fraturas por estresse do calcâneo costumam ter boa recuperação em pessoas saudáveis em outros aspectos. Depois a atividade volta aos poucos, quando você já está sem dor. Para os prazos da fascite plantar, veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/).',
    },
    {
      q: 'Devo alongar se posso ter uma fratura por estresse?',
      cites: [CITE.patelStressFracture, CITE.guideline],
      a: 'Não, não até um profissional descartar a fratura. Alongamento e trabalho de força recebem graus A e B para a fascite plantar, mas uma suspeita de fratura precisa primeiro de menos carga. Dois ensaios randomizados por conglomerados mostraram que alongar as pernas no aquecimento não preveniu fraturas por estresse, então o alongamento não é a ferramenta para o osso.',
    },
    {
      q: 'A fascite plantar pode virar uma fratura por estresse?',
      cites: [CITE.wardenBSI],
      a: 'Nenhum estudo mostra a fascite plantar virando uma fratura. São lesões diferentes, uma na fáscia e outra no osso. Elas podem ter o mesmo gatilho, como um aumento repentino de caminhada ou corrida, e uma reação de estresse no osso pode evoluir para fratura se a carga continuar. Uma dor que muda de padrão merece avaliação.',
    },
    {
      q: 'Quem tem fratura por estresse do calcâneo?',
      cites: [CITE.patelStressFracture, CITE.mountjoyREDs],
      a: 'Principalmente quem de repente passa a treinar mais: corredores, recrutas militares e atletas. Quem corre em média mais de 25\u00A0milhas (cerca de 40\u00A0km) por semana tem mais risco, e as mulheres mais do que os homens. Baixa disponibilidade de energia, falta de menstruação e baixa densidade óssea aumentam o risco, e um estudo encontrou níveis mais baixos de vitamina D em recrutas com fraturas por estresse.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor no calcanhar aumenta quanto mais você anda ou corre, em vez de melhorar',
      'apertar os lados do osso do calcanhar dói',
      'o calcanhar está inchado ou roxo, ou um ponto do osso está muito dolorido',
      'a dor começou depois de um salto repentino no treino ou de uma troca para uma superfície mais dura',
      'dói em repouso ou acorda você à noite',
      'você já teve uma fratura por estresse, ficou sem menstruar, tem um transtorno alimentar ou baixa densidade óssea',
      'você não consegue pôr todo o peso no pé, ou a dor veio depois de uma queda ou de uma torção',
      'você sente queimação, formigamento ou dormência no calcanhar ou na sola do pé',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para dor no calcanhar e no pé. O plano dele foi feito para dor no calcanhar do tipo fascite plantar, não para fratura por estresse, então, se a sua dor se encaixa no padrão da fratura, procure um profissional de saúde antes de começar.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar da manhã, e o plano se ajusta. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPainAtNight', 'hubPlantarFasciitis', 'heelPainAfterWalking'],
  crumb: 'Fascite plantar ou fratura por estresse',
  campaign: 'guide-plantar-fasciitis-vs-stress-fracture-pt',
};
