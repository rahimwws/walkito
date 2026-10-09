import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/calf-raise-test.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». «Teste de elevação de calcanhar» is the term
 * already used on `calf-raises.ts`; «teste de elevação do calcanhar em uma
 * perna» is given as the full name. Figures, norms and qualifiers are
 * identical to the English page.
 */

export const CALF_RAISE_TEST_PT: Guide = {
  lang: 'pt',
  page: 'calfRaiseTest' as any,
  mainSource: CITE.hebertLosier,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Teste de elevação de calcanhar: valores por idade',
  description:
    'Teste de elevação de calcanhar em uma perna: protocolo, valores por idade e sexo, o que o resultado indica e como melhorar a resistência da panturrilha.',
  h1: 'Teste de elevação de calcanhar: quantas você deveria fazer e o que o resultado quer dizer?',
  lede:
    'O teste de elevação de calcanhar em uma perna mede a resistência dos músculos da panturrilha. Você fica em um pé só e sobe na ponta do pé quantas vezes conseguir, num ritmo fixo. A contagem mostra quanta força resistente ao cansaço a panturrilha tem de cada lado, o que importa para caminhar, correr e se recuperar de lesões no calcanhar ou no tendão de Aquiles.',
  intro: [
    'Um estudo de 2017 com 566\u00A0adultos saudáveis encontrou uma mediana geral de cerca de 23 a 24\u00A0repetições por perna, que muda com idade, sexo e nível de atividade. Esta página mostra o protocolo da pesquisa, uma versão para fazer em casa, os valores de referência por idade, o que uma diferença entre esquerda e direita quer dizer e como o teste se liga à dor no calcanhar e à corrida.',
  ],
  takeaways: [
    'A mediana geral em adultos saudáveis é de 24\u00A0repetições na perna direita e 23 na esquerda, num estudo com 566\u00A0pessoas de 20 a 81\u00A0anos (Hebert-Losier e colegas, 2017).',
    'Os homens fizeram mais repetições que as mulheres no geral (mediana de 24 contra 21), mas as mulheres acima de 60\u00A0anos superaram os homens da mesma idade (Hebert-Losier e colegas, 2017).',
    'Uma diferença acima de 10\u00A0por cento entre esquerda e direita é o limite padrão para uma assimetria relevante na reabilitação dos membros inferiores (Silbernagel e colegas, 2010).',
    'O teste tem confiabilidade excelente: ICC de 0,96 e erro de medida típico de cerca de duas repetições (Hebert-Losier e colegas, 2017).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que o teste de elevação de calcanhar em uma perna mede?',
      keyFact: 'Em um estudo caso-controle com 20\u00A0atletas, os que tinham síndrome do estresse tibial medial (canelite) mostraram menos resistência na panturrilha do que os controles saudáveis (Madeley e colegas, 2007).',
      paragraphs: [
        'O teste mede a resistência dos flexores plantares, os músculos que empurram o pé para baixo e tiram o calcanhar do chão. Os principais são o gastrocnêmio (o músculo maior e mais superficial da panturrilha) e o sóleo (o mais profundo, embaixo dele). Juntos, eles se ligam ao osso do calcanhar pelo tendão de Aquiles.',
        'Resistência, aqui, quer dizer quantas repetições você consegue completar antes de a panturrilha cansar e o calcanhar não conseguir mais subir o suficiente ou acompanhar o ritmo. A contagem mostra a capacidade de manter o trabalho por dezenas de ciclos, o que é mais parecido com o que a panturrilha faz ao caminhar e correr do que um único impulso pesado.',
        'Os profissionais de saúde usam o teste:',
        {
          list: [
            'Para acompanhar a recuperação de rupturas do tendão de Aquiles.',
            'Para rastrear fraqueza na panturrilha em pessoas com dor no calcanhar ou canelite.',
            'Para comparar uma perna com a outra.',
          ],
        },
        'Atletas com síndrome do estresse tibial medial (canelite) tinham menos resistência na panturrilha do que controles saudáveis em um estudo caso-controle com 20\u00A0atletas.',
      ],
      cites: [CITE.hebertLosier, CITE.madeley],
    },
    {
      h2: 'Como se faz o teste de elevação de calcanhar? O protocolo da pesquisa',
      paragraphs: [
        'O protocolo de Hebert-Losier 2017 é a versão mais citada e a fonte dos valores de referência desta página. Nesse estudo, 566\u00A0adultos saudáveis de 20 a 81\u00A0anos fizeram elevações de calcanhar em uma perna até a fadiga, em cada perna.',
        'A pessoa fica descalça ou com calçado sem salto sobre uma prancha inclinada a 10\u00A0graus, um pé de cada vez. Pode apoiar a ponta dos dedos na parede, na altura do ombro, só para se equilibrar. Um metrônomo é ajustado em 60\u00A0batidas por minuto: uma batida para subir, uma para descer, então cada repetição completa leva dois segundos. A instrução é subir o calcanhar o mais alto possível, com o joelho esticado e o tronco reto.',
        'O teste termina quando:',
        {
          list: [
            'O calcanhar não sai mais da prancha.',
            'Não dá mais para acompanhar o ritmo do metrônomo.',
            'O joelho dobra ou o tronco inclina.',
            'A pessoa passa a empurrar a parede em vez de só tocar com a ponta dos dedos.',
          ],
        },
        'Um lembrete verbal é dado antes de encerrar. O aquecimento é de 10\u00A0minutos de caminhada rápida seguidos de 10 elevações de calcanhar com os dois pés. Há dois minutos de descanso entre uma perna e outra.',
      ],
      sourceNote:
        'Hebert-Losier 2017: ICC 0,96 (direita) e 0,96 (esquerda); diferença média entre dias de 0,2\u00A0repetição (limites de concordância de 95%: -6,2 a 6,5) na direita e 0,1\u00A0repetição (limites de concordância de 95%: -6,1 a 6,2) na esquerda.',
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Como fazer o teste de elevação de calcanhar em casa?',
      paragraphs: [
        'Você não precisa de uma prancha inclinada. Ficar em pé no chão plano deixa o teste um pouco mais fácil, então a sua contagem pode ficar algumas repetições acima dos valores publicados. Isso não é problema para acompanhar a mudança ao longo do tempo e comparar a esquerda com a direita.',
        'Fique perto de uma parede, com a ponta dos dedos encostada nela na altura do ombro. Levante um pé. Ajuste um app de metrônomo em 60\u00A0batidas por minuto.',
        'Na primeira batida, suba na ponta do pé o mais alto que conseguir. Na segunda batida, desça o calcanhar até o chão. Continue até não conseguir manter o ritmo, até o calcanhar quase não subir ou até o joelho dobrar.',
        'Conte o total de repetições. Descanse dois minutos e repita na outra perna. Anote os dois números e a data. O erro de medida típico é de cerca de duas repetições, então uma pequena mudança entre um dia de teste e outro é ruído. **O que importa é a tendência ao longo das semanas.**',
      ],
      exercises: [
        {
          name: 'Teste de elevação de calcanhar em uma perna (versão em casa)',
          dose: 'Máximo de repetições a 60\u00A0bpm, uma série por perna',
          how: 'Fique em um pé só perto de uma parede, com a ponta dos dedos encostada para se equilibrar. Suba na ponta do pé em um segundo e desça em um segundo, no ritmo de um metrônomo a 60\u00A0bpm. Continue até não conseguir acompanhar o ritmo ou até o calcanhar quase não subir. Conte as repetições. Descanse 2\u00A0minutos e repita na outra perna.',
          feel: 'Uma queimação na panturrilha que aumenta conforme as repetições somam',
          stop: 'Você não consegue subir o calcanhar, não consegue acompanhar o metrônomo ou o joelho dobra',
          media: 'heel_raise_double',
          mediaIsStandIn: true,
          caption: 'Teste de elevação de calcanhar: suba o mais alto que conseguir a cada batida, com a ponta dos dedos na parede para se equilibrar',
          alt: 'Uma figura subindo na ponta de um pé, com a ponta dos dedos na parede para se equilibrar',
        },
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Quantas elevações de calcanhar em uma perna você deveria conseguir fazer?',
      tool: 'calf-raise-calculator',
      keyFact: 'Em 1995, um estudo com 203\u00A0adultos de 20 a 59\u00A0anos propôs 25\u00A0repetições como referência de desempenho normal na elevação de calcanhar em uma perna (Lunsford e Perry, 1995).',
      paragraphs: [
        'A tabela abaixo mostra a mediana de repetições de elevação de calcanhar em uma perna por idade e sexo, de Hebert-Losier 2017. São estimativas de um modelo para uma pessoa com nível de atividade física moderado (nível 4 numa escala de 6\u00A0pontos) e índice de massa corporal de 24,2, com a média das duas pernas.',
        'Níveis de atividade mais altos somam cerca de cinco a nove repetições à mediana. Em 1995, Lunsford e Perry testaram 203\u00A0adultos de 20 a 59\u00A0anos e recomendaram 25\u00A0repetições como critério de desempenho normal. Os dados de Hebert-Losier apoiam esse número como uma referência razoável para adultos, embora seja uma mediana da população e não uma linha de aprovado ou reprovado. **A sua própria linha de base e a direção da mudança importam mais do que qualquer número isolado.**',
      ],
      table: {
        caption: 'Mediana de repetições de elevação de calcanhar em uma perna por idade e sexo (Hebert-Losier 2017)',
        head: ['Idade', 'Homens', 'Mulheres'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
          ['70', '15', '16'],
          ['80', '10', '14'],
        ],
      },
      sourceNote:
        'Estimativas do modelo para IMC de 24,2 e nível de atividade física 4. Os valores são a média dos lados esquerdo e direito, arredondada para o número inteiro mais próximo. Da Tabela 4 de Hebert-Losier 2017 (n = 566).',
      cites: [CITE.lunsfordPerry, CITE.hebertLosier],
    },
    {
      h2: 'A perna esquerda e a direita devem ter o mesmo resultado?',
      keyFact: 'Em um estudo com 78\u00A0pessoas depois de ruptura do tendão de Aquiles, a simetria média entre as pernas aos seis meses era de 84% pela contagem de repetições, mas só 61% pelo trabalho total, o que mostra que contar repetições sozinho pode subestimar um déficit (Silbernagel e colegas, 2010).',
      paragraphs: [
        'Quase o mesmo, sim. No estudo de Hebert-Losier, a diferença mediana entre direita e esquerda foi de uma repetição, e o erro de medida típico foi de cerca de duas repetições. Uma diferença tão pequena é ruído.',
        'Na reabilitação dos membros inferiores, um índice de simetria entre os membros (LSI) de 90\u00A0por cento ou mais é a referência padrão de função normal. O LSI é o lado mais fraco dividido pelo lado mais forte, vezes 100. Abaixo de 90\u00A0por cento quer dizer que um lado está mais de 10\u00A0por cento mais fraco.',
        'Silbernagel e colegas usaram esse limite em 78\u00A0pacientes depois de ruptura do tendão de Aquiles: aos 6\u00A0meses, os pacientes tinham em média um LSI de 84\u00A0por cento nas repetições e só 61\u00A0por cento no trabalho total, o que mostra que contar só as repetições pode subestimar um déficit.',
        'Sem uma lesão, **uma diferença acima de 10\u00A0por cento vale ser anotada e acompanhada.** Ela não quer dizer que algo está errado. Mas se a diferença continua em vários testes e você também tem dor no lado mais fraco, ela dá um contexto útil para um profissional de saúde.',
      ],
      cites: [CITE.hebertLosier, CITE.silbernagelHeelRise],
    },
    {
      h2: 'O que um resultado baixo quer dizer, e o que ele não quer dizer?',
      paragraphs: [
        'Uma contagem baixa no teste de elevação de calcanhar mostra que a panturrilha daquele lado cansa antes da mediana da população para a sua idade, sexo e nível de atividade. Ela não mostra por quê. Tudo isso pode dar uma contagem baixa:',
        {
          list: [
            'Falta de condicionamento.',
            'Uma lesão recente.',
            'Um problema no tendão de Aquiles.',
            'Evitar a dor.',
            'Falta de costume com o teste.',
          ],
        },
        '**O teste não é um diagnóstico.** Um resultado de 15 num homem de 30\u00A0anos não quer dizer que ele tem fascite plantar ou tendinite de Aquiles. Quer dizer que a resistência da panturrilha dele está abaixo da mediana de 33 para esse grupo.',
        'Um profissional de saúde junta a contagem com outros achados para decidir se o número explica um sintoma. O teste diz mais como tendência do que como um ponto isolado: passar de 14 para 22 em dois meses é um sinal mais claro do que qualquer número comparado com uma tabela.',
      ],
      cites: [CITE.hebertLosier],
    },
    {
      h2: 'Como a resistência da panturrilha se liga à dor no calcanhar, aos problemas de Aquiles e à corrida?',
      paragraphs: [
        'A panturrilha e a fáscia plantar se ligam pelo osso do calcanhar. O tendão de Aquiles puxa por trás; a fáscia puxa por baixo. **Panturrilhas fracas ou que cansam fácil põem mais tensão nos dois a cada passo.**',
        'A diretriz de 2023 para dor no calcanhar dá ao alongamento da panturrilha e da fáscia plantar o grau máximo, A, e ao treino de força o grau B. O ensaio de Rathleff, que testou elevações de calcanhar com carga para fascite plantar, usou uma elevação de calcanhar como exercício principal, e os participantes melhoraram a dor mais rápido do que com alongamento sozinho ao longo de três meses. Veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) para o protocolo completo.',
        'Na tendinite de Aquiles, o teste de elevação de calcanhar é uma das medidas de resultado padrão. Pacientes com tendinopatia de Aquiles na porção média (dor no meio do tendão, não no osso do calcanhar) costumam mostrar menos resistência na panturrilha do lado afetado. Veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/) para o trabalho excêntrico.',
        'Na corrida, a panturrilha absorve duas a três vezes o peso do corpo a cada passada. Uma panturrilha que cansa cedo passa carga para o joelho, a canela e o pé. Aumentar o resultado pode fazer parte de um plano de volta à corrida. Veja [dor no calcanhar e corrida](/heel-pain-runners/) (em inglês) para o quadro mais amplo.',
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.achillesGuideline, CITE.madeley],
    },
    {
      h2: 'Como melhorar um resultado baixo no teste de elevação de calcanhar?',
      paragraphs: [
        'Os exercícios que constroem a resistência da panturrilha na reabilitação são os mesmos que aumentam o resultado do teste. Comece no nível que combina com onde você está agora e **suba quando duas sessões seguidas parecerem fáceis.**',
        'Se você consegue fazer menos de 10 elevações em uma perna, comece com a elevação sentado ou com os dois pés em pé. Passe para a elevação de calcanhar sustentada para construir resistência isométrica, e depois para a elevação em uma perna no chão. Usar um degrau aumenta a amplitude. Usar uma mochila aumenta a carga.',
        'Veja [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/) para o movimento básico, [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/) para a versão que também põe carga na fáscia plantar e [descida excêntrica do calcanhar](/pt/exercicios/excentrico-calcanhar/) para a variação focada no Aquiles.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'Grau B na diretriz para o treino de força. Um degrau antes das elevações com carga em uma perna.' },
          dose: '3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga.',
          feel: 'As panturrilhas trabalhando juntas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar sustentada',
          evidence: { level: 'moderate', why: 'Grau B na diretriz. A sustentação isométrica aumenta o tempo sob tensão no fim do movimento.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe afundar. Segurar põe carga na panturrilha sem o quique de uma repetição completa.',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },

  ],
  faq: [
    {
      q: 'Quantas elevações de calcanhar eu deveria conseguir fazer?',
      cites: [CITE.hebertLosier],
      a: 'A mediana geral num estudo com 566\u00A0adultos saudáveis foi de cerca de 23 a 24\u00A0repetições por perna. Os homens tiveram mediana de 24, as mulheres de 21. A contagem cai cerca de quatro a cinco repetições por década de idade. Níveis de atividade mais altos somam cinco a nove repetições. Use esses números como pontos de referência para acompanhar o progresso, não como uma linha de aprovado ou reprovado (Hebert-Losier 2017).',
    },
    {
      q: 'Teste de elevação de calcanhar e heel-rise test são a mesma coisa?',
      a: 'Sim. “Heel-rise test” é o nome usado na literatura científica, em inglês. “Teste de elevação de calcanhar” é o nome mais comum em português. O movimento é o mesmo: subir na ponta de um pé só até a fadiga, num ritmo fixo.',
    },
    {
      q: 'Qual é um bom resultado no teste de elevação de calcanhar por idade?',
      cites: [CITE.hebertLosier],
      a: 'Para uma pessoa moderadamente ativa: cerca de 37 para um homem de 20\u00A0anos (30 para mulher), 28 para um homem de 40\u00A0anos (25 para mulher) e 19 para uma pessoa de 60\u00A0anos de qualquer sexo. O nível de atividade muda essas medianas em cinco a nove repetições (Hebert-Losier 2017).',
    },
    {
      q: 'De quanto em quanto tempo devo refazer o teste?',
      a: 'A cada duas a quatro semanas basta para ver uma mudança real sem testar demais. A pesquisa refez o teste com uma semana de intervalo e encontrou confiabilidade excelente. O Walkito refaz o teste a cada 14\u00A0dias enquanto a meta da panturrilha está ativa, e depois a cada 28\u00A0dias quando ela é alcançada.',
    },
    {
      q: 'O que quer dizer se uma perna é bem mais fraca que a outra?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Uma diferença acima de 10\u00A0por cento costuma ser marcada na reabilitação como um possível déficit. Em adultos saudáveis, a diferença típica é de uma a duas repetições. Uma diferença que continua, com dor no lado mais fraco, é motivo para procurar um profissional de saúde. Sem dor, acompanhe e treine (Silbernagel 2010).',
    },
    {
      q: 'Preciso de metrônomo para fazer o teste?',
      a: 'O protocolo da pesquisa usa um metrônomo a 60\u00A0batidas por minuto. Apps de metrônomo gratuitos funcionam bem. Sem um, conte “mil e um” na subida e na descida. A sua contagem vai ser menos comparável aos valores publicados, mas fazer o teste sempre do mesmo jeito importa mais do que copiar exatamente a montagem da pesquisa.',
    },
    {
      q: 'O teste de elevação de calcanhar diagnostica fascite plantar ou tendinite de Aquiles?',
      a: 'Não. Um resultado baixo mostra que a panturrilha cansa cedo, não por quê. Fascite plantar, tendinite de Aquiles, falta de condicionamento e uma lesão recente podem dar uma contagem baixa. Os profissionais de saúde juntam o resultado com um exame físico e o histórico. O teste mede a resistência da panturrilha, não um problema específico.',
    },
    {
      q: 'Quais são os sinais de panturrilha fraca?',
      cites: [CITE.silbernagelHeelRise],
      a: 'Panturrilhas fracas costumam aparecer como cansaço rápido em escadas ou subidas, um impulso mais fraco ao caminhar ou correr, ou balanço no equilíbrio em uma perna. O sinal objetivo mais claro é o teste de elevação de calcanhar em uma perna: uma diferença clara entre a perna esquerda e a direita é mais confiável do que a aparência ou a sensação da panturrilha.',
    },
    {
      q: 'Onde devo sentir a elevação de calcanhar?',
      a: 'Você deve sentir o trabalho na panturrilha, tanto no gastrocnêmio, mais volumoso e mais acima, quanto no sóleo, mais embaixo, perto do Aquiles, e não no osso do calcanhar, no arco ou no joelho. Se você sente dor aguda no calcanhar ou no Aquiles em vez de cansaço na panturrilha, a técnica ou a carga precisam de ajuste antes de você continuar contando repetições.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a panturrilha ou o Aquiles está inchado, quente ou dolorido ao toque, o que pode indicar uma ruptura aguda ou um problema no tendão',
      'você sentiu um estalo ou um tranco repentino na panturrilha durante a atividade',
      'você não consegue apoiar o pé ou está mancando',
      'a dor é aguda e localizada, e não uma dor geral',
      'há dormência, formigamento ou queimação no pé ou na parte de baixo da perna',
      'o teste reproduz exatamente a dor que você está tentando avaliar, com intensidade mais do que leve',
      'você tem uma ruptura conhecida do tendão de Aquiles ou fez uma cirurgia recente',
      'uma panturrilha está visivelmente menor que a outra e você ainda não procurou um profissional de saúde por isso',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito faz o teste de elevação de calcanhar em uma perna a cada 14\u00A0dias e acompanha as duas pernas. A meta da panturrilha é 25\u00A0elevações de calcanhar em uma perna. A meta de simetria é uma diferença entre esquerda e direita abaixo de 10\u00A0por cento. O app calcula a diferença como a diferença entre o lado mais forte e o mais fraco, dividida pelo lado mais forte. Quando as duas metas são alcançadas, o teste passa a ser a cada 28\u00A0dias e o plano muda para a próxima meta ativa.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. O trabalho de panturrilha começa com a elevação sentado e sobe pelas versões com os dois pés, sustentada, com toalha, descidas excêntricas e saltitos curtos na ponta dos pés, no seu ritmo. O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  crumb: 'Teste de elevação de calcanhar',
  campaign: 'calf-raise-test-pt',
};
