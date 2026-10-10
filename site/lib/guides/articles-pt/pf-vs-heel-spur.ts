import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fascite plantar ou esporão (PT) ───────────────────────────────────
 *
 * Translated from `articles/pf-vs-heel-spur.ts`, written around the
 * Brazilian Portuguese queries «fascite plantar ou esporão», «esporão no
 * calcanhar é a mesma coisa que fascite plantar», «esporão causa dor».
 * Informal «você». Figures, grades and qualifiers are identical to the
 * English page. Citations as in the English file (menzSpur, menzCoexistence,
 * ehrmannSpur).
 */

export const PF_VS_HEEL_SPUR_PT: Guide = {
  lang: 'pt',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fascite plantar ou esporão: é a mesma coisa?',
  description:
    'Fascite plantar ou esporão no calcanhar: qual a diferença, se o esporão causa dor, o que a pesquisa diz sobre quantas pessoas têm e quando fazer raio-X.',
  h1: 'Fascite plantar ou esporão no calcanhar: é a mesma coisa?',
  lede:
    'O esporão no calcanhar é um crescimento de osso na parte de baixo do osso do calcanhar. A fascite plantar é uma irritação da fáscia plantar, a faixa grossa de tecido que vai desse osso até os dedos. Os dois muitas vezes aparecem juntos, mas não são a mesma condição, e normalmente não é o esporão que dói. Muitas pessoas com esporão no raio-X não sentem dor nenhuma.',
  intro: [
    'Se disseram que você tem esporão e você quer saber o que fazer, os exercícios são os mesmos que ajudam na fascite plantar. [Exercícios para esporão no calcanhar](/pt/esporao-calcaneo-exercicios/) traz a rotina completa. Esta página explica a diferença entre as duas condições, o que a pesquisa diz sobre esporão e dor, e quando vale a pena fazer exame de imagem.',
  ],
  takeaways: [
    'Em um estudo com 216\u00A0idosos de 62 a 94\u00A0anos, 55% tinham pelo menos um esporão plantar no calcâneo no raio-X, e ter esporão estava ligado a obesidade e artrose, mas não à postura do pé (Menz e colegas, 2008). É uma amostra de idosos, não um número da população em geral.',
    'Em um estudo com 530\u00A0pessoas de 50\u00A0anos ou mais com dor no pé, o esporão e a fáscia plantar espessada normalmente apareciam juntos, e o esporão sozinho era raro (6% dos pés). A dor no calcanhar estava ligada a ter os dois achados juntos (Menz e colegas, 2019).',
    'A diretriz de 2023 para dor no calcanhar trata a fascite plantar como a causa mais comum de dor no calcanhar embaixo do pé e observa que exame de imagem normalmente não é necessário quando o exame clínico já aponta para fascite plantar (Koc e colegas, 2023).',
    'O próprio estudo de Menz de 2008 observa que pesquisas anteriores na população em geral tinham estimado a prevalência de esporão em 11 a 16%, bem abaixo dos 55% encontrados na amostra de idosos deles (Menz e colegas, 2008).',
    'Os exercícios que ajudam na dor da fascite plantar também trabalham o tecido mole em volta de um esporão. Exercício não dissolve o esporão, mas raramente é o esporão que precisa de atenção.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Esporão no calcanhar é a mesma coisa que fascite plantar?',
      figure: { id: 'heel-side', caption: 'O esporão, quando existe, se forma na parte de baixo do osso do calcanhar, perto de onde a fáscia plantar se prende.', alt: 'Vista lateral interna de um pé com a pele transparente, mostrando o osso do calcanhar, a fáscia plantar sob o arco e uma área vermelha sob o calcanhar onde a dor costuma começar.' },
      paragraphs: [
        '**Esporão no calcanhar e fascite plantar não são a mesma coisa.** A fascite plantar é um problema de tecido mole: a fáscia plantar, a faixa grossa que vai do osso do calcanhar até os dedos, fica irritada, normalmente onde se prende ao osso. O esporão é um crescimento de osso na parte de baixo do osso do calcanhar (o calcâneo). Os dois muitas vezes existem juntos, mas cada um pode aparecer sem o outro.',
        'A fascite plantar causa a dor forte, em pontada, que as pessoas descrevem embaixo do calcanhar, principalmente nos primeiros passos da manhã ou depois de ficar sentado. A diretriz de 2023 para dor no calcanhar a define como uma dor “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”. O esporão, por outro lado, é um achado estrutural no raio-X. Ele pode ou não causar sintomas próprios.',
        'A confusão é compreensível. Durante décadas, achava-se que o esporão era a causa da dor embaixo do calcanhar. Essa visão foi em grande parte substituída por evidências mostrando que o esporão é comum em pessoas sem dor, e que muitas pessoas com fascite plantar não têm esporão nenhum.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: 'Esporão no calcanhar causa dor?',
      keyFact: 'Em um estudo com 530\u00A0pessoas com dor no pé, o esporão no raio-X apareceu sozinho em só 6% dos pés; na maioria das vezes vinha junto com uma fáscia plantar espessada (Menz e colegas, 2019).',
      paragraphs: [
        '**A maioria dos esporões não causa dor.** A pesquisa mostra de forma consistente que o esporão aparece em pessoas sem nenhum sintoma no calcanhar, e que tirar o esporão não acaba com a dor de forma confiável.',
        'Em um estudo com 530\u00A0pessoas de 50\u00A0anos ou mais que relatavam dor no pé:',
        {
          list: [
            'O raio-X encontrou esporão em 26,5% dos pés.',
            'O ultrassom encontrou fáscia plantar espessada em 47,3% dos pés.',
            'Os dois normalmente vinham juntos, e o esporão sozinho era raro (6% dos pés).',
            'Pessoas com dor no calcanhar tinham cerca de duas vezes as chances de ter os dois achados juntos (Menz e colegas, 2019).',
          ],
        },
        'Ou seja, o esporão raramente aparece sem a mudança no tecido mole que vem com ele.',
        'Em outro estudo, com 216\u00A0idosos de 62 a 94\u00A0anos, 55% tinham pelo menos um esporão plantar no calcâneo no raio-X. O esporão estava ligado a obesidade, artrose e histórico de dor no calcanhar, mas não à postura do pé. Os autores sugeriram que o esporão pode ser uma resposta de adaptação à compressão vertical do calcanhar, e não resultado da fáscia plantar puxando o osso (Menz e colegas, 2008).',
        'O estudo de Menz de 2008 observa que pesquisas anteriores na população em geral tinham relatado prevalência de esporão de 11 a 16%, bem abaixo dos 55% que os autores encontraram na amostra de idosos deles. Nessa mesma amostra de idosos, cerca de 6 em cada 10 pessoas com esporão nunca tinham tido dor no calcanhar, embora a dor no calcanhar ainda fosse mais comum em quem tinha esporão (40%) do que em quem não tinha (12%) (Menz e colegas, 2008). O esporão aumenta as chances, mas não decide quem vai ter dor.',
      ],
      sourceNote:
        'Menz 2019: 530\u00A0participantes de 50\u00A0anos ou mais com dor no pé, estudo transversal. Esporão em 26,5% dos pés, espessamento da fáscia plantar em 47,3%, esporão isolado em 6,0%. Dor no calcanhar ligada às duas características juntas (OR 2,16, IC 95%: 1,24 a 3,77). Menz 2008: 216\u00A0participantes de 62 a 94\u00A0anos, estudo transversal, prevalência de esporão de 55%, dor no calcanhar atual ou anterior OR 4,6 (IC 95%: 2,3 a 9,4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: 'O esporão é comum em quem não sente dor?',
      keyFact: 'Em um estudo de ressonância magnética com 77\u00A0pessoas sem sintomas, 19% tinham esporão no calcâneo, o que mostra que o esporão é comum mesmo sem dor no calcanhar (Ehrmann e colegas, 2014).',
      paragraphs: [
        'O esporão no calcanhar é comum. A prevalência depende da faixa etária e do método usado para procurá-lo.',
        'O estudo de Menz de 2008 com idosos cita pesquisas anteriores que relataram prevalência de esporão de 11 a 16% na população em geral, bem abaixo dos 55% que os autores encontraram na própria amostra de 216\u00A0pessoas de 62 a 94\u00A0anos. Um estudo separado de ressonância magnética com 77\u00A0voluntários sem sintomas (idade média de 48\u00A0anos, de 23 a 83) encontrou esporão no calcâneo em 15 deles, 19% (Ehrmann e colegas, 2014).',
        'O padrão é consistente: uma parte grande das pessoas com esporão não tem sintomas, e **o esporão sozinho não prevê se alguém vai ter dor no calcanhar.** É por isso que a diretriz de 2023 para dor no calcanhar não cita o esporão como motivo para mudar a abordagem de exercícios.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: 'O que a diretriz de 2023 diz sobre esporão no calcanhar?',
      paragraphs: [
        'A diretriz de prática clínica de 2023 para dor no calcanhar, publicada no Journal of Orthopaedic and Sports Physical Therapy, trata a fascite plantar como a causa mais comum de dor embaixo do calcanhar. Ela cita a “síndrome do esporão do calcâneo” como um dos vários diagnósticos diferenciais, junto com:',
        {
          list: [
            'A síndrome do coxim gorduroso.',
            'A irritação de nervo.',
            'A fratura por estresse do calcâneo.',
          ],
        },
        'A diretriz não recomenda exame de imagem como primeiro passo quando o exame clínico já aponta para fascite plantar. Ela diz que exames de imagem “normalmente não são indicados para pacientes que atendem aos critérios do exame clínico para fascite plantar, até que as intervenções conservadoras falhem”. Quando um exame de imagem é considerado, o raio-X com apoio de peso é a primeira escolha, seguido de ultrassom ou ressonância magnética se for preciso.',
        'Na prática, isso significa que um profissional de saúde que vê o padrão típico (dor nos primeiros passos da manhã, dor ao toque na parte de dentro do calcanhar e pouca flexibilidade no tornozelo) pode começar alongamento e treino de força sem esperar um raio-X. **Ter ou não ter esporão num raio-X feito depois não muda o plano de exercícios.**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Precisa de raio-X para diferenciar fascite plantar de esporão?',
      paragraphs: [
        '**Normalmente você não precisa de raio-X para fascite plantar.** O diagnóstico é clínico: se baseia em onde a dor fica, quando ela aparece e o que a piora. Um raio-X pode mostrar um esporão, mas encontrá-lo não muda o que você faz pela dor, e não encontrá-lo não descarta fascite plantar.',
        'O exame de imagem passa a ser útil:',
        {
          list: [
            'Quando a dor não segue o padrão típico da fascite plantar.',
            'Quando ela não melhorou depois de várias semanas de tratamento conservador.',
            'Quando um profissional de saúde suspeita de outra coisa, como uma fratura por estresse, um problema de nervo ou uma ruptura da fáscia plantar.',
          ],
        },
        'O ultrassom consegue medir a espessura da fáscia plantar (uma medida acima de 4\u00A0mm costuma ser considerada espessada), e a ressonância magnética mostra detalhes do tecido mole que o raio-X não mostra.',
        'Se já disseram que você tem esporão num raio-X, o esporão em si quase nunca precisa de atenção separada. Os exercícios e alongamentos que ajudam na fascite plantar também trabalham o tecido mole em volta do esporão. Veja [exercícios para esporão no calcanhar](/pt/esporao-calcaneo-exercicios/) para a rotina completa.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Se o problema não é o esporão, o que é?',
      paragraphs: [
        'A dor normalmente vem da fáscia plantar e dos tecidos em volta dela, não do osso. A fáscia plantar se prende embaixo do osso do calcanhar. Quando ela é sobrecarregada, principalmente em quem tem a panturrilha tensa, IMC alto ou passa muitas horas em pé, esse ponto de ligação fica irritado. Essa irritação é a fascite plantar.',
        'Uma panturrilha tensa é um dos fatores de risco mais fortes. Em um estudo de caso-controle pareado com 50\u00A0pessoas com fascite plantar e 100\u00A0controles:',
        {
          list: [
            'A dorsiflexão do tornozelo reduzida, o quanto o pé consegue subir em direção à canela, teve a maior razão de chances de todos os fatores medidos.',
            'Ficar em pé a maior parte do dia de trabalho também foi significativo, com 3,6\u00A0vezes as chances (Riddle e colegas, 2003).',
          ],
        },
        'O esporão, quando existe, fica ali perto. Ele pode ter se formado ao longo de meses ou anos em resposta ao mesmo estresse mecânico que irritou a fáscia. Mas **são a fáscia e a panturrilha que respondem ao alongamento e ao fortalecimento, não o osso.** É por isso que a diretriz recomenda exercício, e não retirar o esporão.',
        'Para uma visão completa da fascite plantar, incluindo causas, fatores de risco e o que a diretriz recomenda, veja [fascite plantar](/pt/fascite-plantar/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'O esporão no calcanhar precisa ser retirado alguma vez?',
      paragraphs: [
        'Retirar o esporão com cirurgia é raro e não é uma opção de primeira linha. **A diretriz de 2023 não recomenda retirar o esporão na fascite plantar.** Vários estudos mostraram que a dor da fascite plantar pode passar com tratamento conservador mesmo com o esporão continuando no raio-X. A American Academy of Orthopaedic Surgeons diz claramente que “o esporão no calcanhar não causa a dor da fascite plantar” e que “a dor da fascite plantar pode ser tratada sem retirar o esporão”.',
        'A cirurgia às vezes é considerada quando a dor não respondeu a meses de tratamento conservador, mas o procedimento costuma ser uma liberação parcial da fáscia plantar, não a retirada do esporão. Se o esporão acaba sendo retirado nessa cirurgia, a evidência sugere que o benefício veio da liberação da fáscia, não da retirada do osso.',
        'A grande maioria das pessoas com dor no calcanhar e esporão melhora com o mesmo alongamento, o mesmo treino de panturrilha e o mesmo controle de carga que as pessoas sem esporão usam. Veja [exercícios para esporão no calcanhar](/pt/esporao-calcaneo-exercicios/) para a rotina prática.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Quais exercícios ajudam quando você tem esporão?',
      paragraphs: [
        'Os exercícios para a dor do esporão são os mesmos que a diretriz recomenda para fascite plantar: alongamento da fáscia plantar, alongamento de panturrilha e fortalecimento gradual da panturrilha. Exercício não dissolve o esporão. Ele trabalha o tecido mole que realmente está causando a dor.',
        'A diretriz dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, **A**, e ao treino de força um **B**. Esses graus valem com ou sem esporão. [Exercícios para esporão no calcanhar](/pt/esporao-calcaneo-exercicios/) traz a rotina completa com séries, tempos de sustentação e progressão. Abaixo estão três exercícios para começar.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 dá ao alongamento da fáscia plantar o grau A, o mais alto.' },
          dose: '10\u00A0vezes de 10\u00A0segundos, cada pé',
          how: 'Sente-se e cruze um tornozelo sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Faça antes de ficar em pé de manhã e depois de ficar muito tempo sentado.',
          often: 'Toda manhã e depois de ficar sentado',
          feel: 'Um alongamento ao longo do arco, não dor',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás antes do primeiro passo',
          alt: 'Uma figura sentada puxando os dedos para trás para alongar a fáscia plantar',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'O mesmo grau A na diretriz. Trabalha o gastrocnêmio, o músculo maior e mais superficial da panturrilha.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Uma panturrilha tensa puxa o calcanhar pelo tendão de Aquiles, o que aumenta a carga na fáscia.',
          often: 'Quase todas as sessões',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, incline para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao treino de força o grau B para fascite plantar. Um degrau antes da elevação de calcanhar com toalha e carga.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Isso aumenta a capacidade da panturrilha sem carga pesada no calcanhar.',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Esporão no calcanhar é a mesma coisa que fascite plantar?',
      cites: [CITE.guideline],
      a: 'Não. O esporão é um crescimento de osso na parte de baixo do osso do calcanhar. A fascite plantar é uma irritação da fáscia plantar, a faixa grossa de tecido que vai do calcanhar até os dedos. Os dois muitas vezes aparecem juntos, mas o esporão pode existir sem dor e a fascite plantar pode aparecer sem esporão. A diretriz de 2023 para dor no calcanhar trata os dois como achados separados.',
    },
    {
      q: 'Esporão no calcanhar dói?',
      cites: [CITE.menzCoexistence],
      a: 'A maioria dos esporões não causa dor. Em um estudo com 530\u00A0pessoas de 50\u00A0anos ou mais com dor no pé, o esporão sozinho era raro, e a dor no calcanhar estava ligada ao esporão junto com uma fáscia plantar espessada (Menz e colegas, 2019). Em outro estudo, com 216\u00A0idosos, cerca de 6 em cada 10 pessoas com esporão não tinham nem tinham tido dor no calcanhar (Menz e colegas, 2008).',
    },
    {
      q: 'Dá para ter fascite plantar sem esporão?',
      a: 'Sim. Muitas pessoas com fascite plantar não têm esporão no raio-X. A dor vem da fáscia plantar irritada, não do osso. A diretriz de 2023 não exige exame de imagem para diagnosticar fascite plantar quando o padrão clínico é claro: dor nos primeiros passos da manhã, dor ao toque no calcanhar e panturrilha tensa.',
    },
    {
      q: 'Exercício para esporão dissolve o esporão?',
      cites: [CITE.guideline],
      a: 'Não. Exercícios de alongamento e fortalecimento não dissolvem o esporão. Eles trabalham o tecido mole em volta dele, principalmente a fáscia plantar e os músculos da panturrilha, que normalmente são o que causa a dor. O esporão em si raramente precisa de atenção, e a diretriz recomenda os mesmos exercícios com ou sem esporão.',
    },
    {
      q: 'Preciso fazer raio-X se acho que tenho esporão?',
      cites: [CITE.guideline],
      a: 'A diretriz de 2023 diz que exame de imagem normalmente não é necessário quando o exame clínico aponta para fascite plantar. Um raio-X pode mostrar um esporão, mas encontrá-lo não muda o plano de exercícios, e não encontrá-lo não descarta fascite plantar. O exame de imagem passa a ser útil quando a dor não melhora depois de várias semanas ou quando um profissional de saúde suspeita de fratura por estresse ou de problema no nervo.',
    },
    {
      q: 'Esporão no calcanhar é comum?',
      cites: [CITE.menzSpur],
      a: 'A prevalência depende da idade. Pesquisas anteriores citadas no estudo de Menz de 2008 relataram esporão plantar no calcâneo no raio-X em 11 a 16% da população em geral. Em um estudo com 216\u00A0pessoas de 62 a 94\u00A0anos, 55% tinham pelo menos um esporão plantar (Menz e colegas, 2008). O esporão fica mais comum com a idade, com IMC mais alto e com artrose.',
    },
    {
      q: 'Quando o esporão precisa de cirurgia?',
      cites: [CITE.latt],
      a: 'Quase nunca. A diretriz não recomenda retirar o esporão na fascite plantar. Cerca de 90% das pessoas com fascite plantar melhoram com tratamento sem cirurgia, como alongamento, fortalecimento da panturrilha e controle de carga (Latt e colegas, 2020). Quando a cirurgia é considerada depois de meses de tratamento conservador sem resultado, ela normalmente envolve liberar a fáscia plantar, não retirar o esporão.',
    },
    {
      q: 'O que acontece se eu continuar andando com esporão?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Caminhar não vai empurrar o esporão para dentro do tecido ao lado. A dor que piora ao caminhar normalmente vem da fáscia plantar irritada ao lado do esporão, não do osso. A diretriz de 2023 recomenda ajustar a carga, como a distância ou o ritmo, em vez de parar, se caminhar deixa o calcanhar pior na manhã seguinte.',
    },
    {
      q: 'Massagem é bom para esporão no calcanhar?',
      cites: [CITE.guideline],
      a: 'Uma massagem leve em volta do esporão pode aliviar a tensão do tecido mole, mas não muda o osso. Rolar a sola com pressão firme, não aguda, pode soltar a fáscia e a panturrilha, os tecidos que normalmente causam a dor. A diretriz dá grau A à terapia manual feita por um profissional; a automassagem é um cuidado de conforto, não substitui o alongamento.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda, o que pode indicar uma ruptura da fáscia plantar e não fascite',
      'você não consegue apoiar o pé, ou está mancando',
      'apertar as laterais do calcanhar reproduz a dor, o que pode indicar uma fratura por estresse e não esporão ou fascite',
      'a dor vem com dormência, formigamento ou queimação, o que pode sugerir um nervo comprimido',
      'o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, principalmente se outras articulações estão rígidas ou inchadas',
      'a dor não deixa você dormir ou aparece em repouso, e não só ao apoiar o peso',
      'não melhorou depois de várias semanas de alongamento, treino de panturrilha e menos carga',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Com ou sem esporão no raio-X, a abordagem de exercícios é a mesma. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos. O alongamento começa no primeiro dia. O treino de força da panturrilha entra quando a primeira meta deixa de ser acalmar a dor e passa a ser ganhar capacidade.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a meta for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você acompanhar a evolução em vez de adivinhar.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se você não tem certeza se a sua dor no calcanhar é fascite plantar, esporão ou outra coisa, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Fascite plantar ou esporão',
  campaign: 'guide-pf-vs-heel-spur-pt',
};
