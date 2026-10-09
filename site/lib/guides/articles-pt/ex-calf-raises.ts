import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-calf-raises.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Exercise names follow `lib/guides/pt.ts`.
 * No new citations; uses only existing CITE keys.
 */

export const EX_CALF_RAISES_PT: Guide = {
  lang: 'pt',
  page: 'exCalfRaises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Elevação de calcanhar (panturrilha): como fazer',
  description:
    'Como fazer a elevação de calcanhar do jeito certo: em pé, sentado e sustentada, músculos trabalhados, séries e repetições, erros comuns e para quem serve.',
  h1: 'Elevação de calcanhar: como fazer certo, com séries, repetições e variações',
  lede:
    'A elevação de calcanhar é um exercício em pé ou sentado em que você sobe na parte da frente dos pés. Ela fortalece o gastrocnêmio (o músculo maior e mais superficial da panturrilha) e o sóleo (o mais profundo), e coloca carga no tendão de Aquiles e na fáscia plantar a cada repetição. Esta página explica a elevação em pé com os dois pés, a versão sentada e a elevação sustentada lá em cima.',
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar dá ao fortalecimento da panturrilha o grau B e o recomenda junto com o alongamento, que recebe grau A (Koc e colegas, 2023).',
    'Um estudo normativo com 566\u00A0adultos saudáveis (de 20 a 81\u00A0anos) encontrou uma mediana de 24\u00A0elevações de calcanhar em uma perna para homens e 21 para mulheres, variando com idade, sexo e nível de atividade (Hebert-Losier e colegas, 2017).',
    'A dorsiflexão reduzida do tornozelo, muitas vezes por um gastrocnêmio tenso, foi o fator de risco independente mais forte para fascite plantar em um estudo caso-controle pareado com 50\u00A0casos e 100\u00A0controles (Riddle e colegas, 2003).',
    'A elevação de calcanhar em pé coloca a carga principalmente no gastrocnêmio. A versão sentada passa a carga para o sóleo, porque o joelho dobrado encurta o gastrocnêmio.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Quais músculos a elevação de calcanhar trabalha?',
      paragraphs: [
        'A elevação de calcanhar em pé, com o joelho esticado, trabalha principalmente o gastrocnêmio, o músculo de duas cabeças que dá à panturrilha o formato visível. O gastrocnêmio cruza o joelho e o tornozelo, então ele trabalha mais com o joelho esticado.',
        'A elevação sentado passa a carga para o sóleo, o músculo mais profundo da panturrilha, que fica embaixo. O sóleo cruza só o tornozelo, então dobrar o joelho a uns 90\u00A0graus tira quase todo o gastrocnêmio do movimento e faz o sóleo trabalhar.',
        'Os dois músculos se ligam ao calcanhar pelo tendão de Aquiles. Toda elevação de calcanhar também coloca alguma carga na fáscia plantar, porque o calcanhar é o ponto de apoio que eles dividem. A [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/) aumenta ainda mais a carga na fáscia ao dobrar os dedos para cima.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'Como fazer a elevação de calcanhar em pé?',
      paragraphs: [
        'Fique com os dois pés apoiados no chão, mais ou menos na largura do quadril. Segure em uma parede ou cadeira para se equilibrar. Suba na parte da frente dos pés, empurrando pelos dedões. Segure um instante lá em cima e desça devagar, em uns três segundos. Os dois pés dividem a carga.',
        'Se você tem um degrau, fique com a parte da frente dos pés na beira e deixe os calcanhares descerem um pouco abaixo dele na descida. Essa amplitude extra embaixo alonga a panturrilha um pouco mais a cada repetição. No chão, a amplitude é menor, mas o exercício funciona do mesmo jeito.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: {
            level: 'moderate',
            why: 'A diretriz de 2023 dá ao treino de força o grau B. A elevação com os dois pés é um degrau nos programas testados, não foi testada sozinha.',
          },
          dose: 'O Walkito começa com 3\u00A0séries de 10, os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Segure em uma parede para se equilibrar.',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Como fazer a elevação de calcanhar sentado',
      paragraphs: [
        'Sente-se em uma cadeira com os pés apoiados no chão e os joelhos dobrados a uns 90\u00A0graus. Empurre pela parte da frente dos dois pés, tirando os dois calcanhares do chão. Desça devagar. Colocar as mãos nos joelhos e empurrar para baixo acrescenta resistência.',
        'A elevação sentado é a porta de entrada com menos carga na sequência da panturrilha. Ela quase não põe esforço no calcanhar comparada ao trabalho em pé, o que a torna um bom ponto de partida quando a elevação em pé dói demais.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar sentado',
          evidence: {
            level: 'moderate',
            why: 'Faz parte de progressões de reabilitação publicadas (fase 1 de Silbernagel). Não foi testada sozinha em um ensaio randomizado.',
          },
          dose: 'O Walkito começa com 3\u00A0séries de 10, os dois pés',
          how: 'Sente-se com os pés apoiados. Empurre pela parte da frente dos dois pés. As mãos nos joelhos dão resistência.',
          often: 'Dias de força, enquanto for o seu nível',
          feel: 'Trabalho nas panturrilhas, quase sem carga no calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentado: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.silbernagel, CITE.guideline],
    },
    {
      h2: 'Como fazer a elevação de calcanhar sustentada (isométrica)',
      paragraphs: [
        'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe os calcanhares afundarem. Uma contração isométrica quer dizer que o músculo trabalha sem percorrer uma amplitude. Isso coloca carga no tendão de Aquiles sem o sobe e desce que pode irritar algumas dores no tendão ou no calcanhar em fase inicial.',
        'A diretriz de 2024 para o Aquiles cita a carga isométrica como um dos tipos eficazes de carga no tendão, embora nenhum ensaio só com isometria para o Aquiles tenha sido publicado.',
      ],
      exercises: [
        {
          name: 'Elevação de calcanhar sustentada',
          evidence: {
            level: 'moderate',
            why: 'Citada na diretriz de 2024 para o Aquiles como um tipo eficaz de carga. Nenhum ensaio randomizado só com isometria.',
          },
          dose: 'O Walkito começa com 3\u00A0vezes de 20\u00A0segundos, os dois pés',
          how: 'Suba na ponta dos dois pés e segure lá em cima sem afundar. Segure em uma parede para se equilibrar.',
          often: 'Dias de força, o degrau entre a elevação com os dois pés e o trabalho em uma perna',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
      ],
      cites: [CITE.achillesGuideline, CITE.guideline],
    },
    {
      h2: 'Quantas elevações de calcanhar fazer?',
      keyFact: 'Um estudo normativo com 566\u00A0adultos saudáveis de 20 a 81\u00A0anos mostrou que a contagem de elevações de calcanhar em uma perna variava com idade, sexo e nível de atividade, e as mulheres chegavam a uma mediana de 21\u00A0repetições (Hebert-Losier e colegas, 2017).',
      paragraphs: [
        'Depende de onde você está na sequência e do que está trabalhando. Para força geral da panturrilha, 3\u00A0séries de 10 a 15\u00A0repetições em ritmo lento é uma dose inicial comum. No protocolo testado para fascite plantar, a elevação de calcanhar com toalha começa com 12\u00A0repetições máximas (12RM) em 3\u00A0séries e avança para 8RM em 5\u00A0séries ao longo de umas cinco semanas.',
        'Uma referência útil é o teste de resistência de elevação de calcanhar em uma perna. Um estudo normativo com 566\u00A0adultos saudáveis encontrou uma mediana de 24\u00A0repetições para homens e 21 para mulheres, variando com idade, sexo e atividade. A meta de panturrilha no app Walkito é 25\u00A0elevações de calcanhar em uma perna. Chegar lá não encerra o trabalho. Ele passa para a manutenção.',
        'Para saber mais do protocolo específico para fascite plantar, veja a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/). Para a versão do tendão de Aquiles, veja a [descida excêntrica do calcanhar](/pt/exercicios/excentrico-calcanhar/).',
      ],
      cites: [CITE.hebertLosier, CITE.rathleff],
    },
    {
      h2: 'Quais são os erros comuns na elevação de calcanhar?',
      paragraphs: [
        'Ir rápido demais. É a descida lenta (uns três segundos) que desenvolve força. Quicar embaixo desperdiça a fase excêntrica, que é a parte que faz a maior parte do trabalho de adaptação do tendão.',
        'Rolar para a borda de fora do pé. O empurrão deve passar pelo dedão e pela parte da frente do pé. Se o tornozelo vira para fora, a panturrilha não consegue contrair por completo, e os músculos pequenos da parte de fora do tornozelo levam um esforço para o qual não foram feitos.',
        'Pular a versão sentada. Se a elevação em pé dói, pular direto para o trabalho em uma perna no degrau piora as coisas. A sequência existe por um motivo: sentado, depois em pé com os dois pés, depois sustentada, depois em uma perna. Cada degrau deve parecer tranquilo por duas sessões antes de avançar.',
      ],
    },
    {
      h2: 'Elevação de calcanhar para fascite plantar ou para tendinite de Aquiles',
      paragraphs: [
        'Na fascite plantar, a evidência aponta para a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/), em que a toalha embaixo dos dedos coloca carga na fáscia junto com a panturrilha. O limite de dor é 6/10. A página completa sobre o problema está em [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).',
        'Na tendinite de Aquiles, o foco passa para a [descida excêntrica do calcanhar](/pt/exercicios/excentrico-calcanhar/), em que a fase de descida é o objetivo e a toalha não é usada. O modelo de dor de um ensaio permite carga até cerca de 5/10, desde que a dor passe até a manhã seguinte. A página completa está em [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        'A elevação com os dois pés, a elevação sentado e a elevação sustentada aparecem nos dois caminhos como primeiros degraus. Elas constroem a força de base que torna possível o exercício específico com carga.',
      ],
      cites: [CITE.rathleff, CITE.alfredson],
    },
  ],
  faq: [
    {
      q: 'Elevação de calcanhar trabalha o glúteo?',
      a: 'Não. A elevação de calcanhar trabalha o gastrocnêmio e o sóleo, na perna. Os glúteos estabilizam o quadril nas variações em uma perna, mas não são o músculo principal. Para força de quadril e glúteo, veja a [abdução de quadril](/pt/exercicios/abducao-quadril/).',
    },
    {
      q: 'Elevação de calcanhar sentado ou em pé: qual é melhor?',
      cites: [CITE.patelGastrocnemius],
      a: 'Elas trabalham músculos diferentes. A elevação em pé trabalha principalmente o gastrocnêmio, o músculo maior da panturrilha. A sentada passa a carga para o sóleo, o mais profundo, porque o joelho dobrado tira boa parte do gastrocnêmio do movimento. As duas têm seu papel, e fazer as duas cobre a panturrilha inteira.',
    },
    {
      q: 'Quantas elevações de calcanhar em uma perna é normal?',
      cites: [CITE.hebertLosier],
      a: 'Um estudo normativo com 566\u00A0adultos saudáveis encontrou uma mediana de 24\u00A0repetições para homens e 21 para mulheres, ajustando por idade, sexo e nível de atividade (Hebert-Losier 2017). O número é útil para acompanhar a mudança ao longo das semanas e comparar uma perna com a outra, não como linha de aprovado ou reprovado.',
    },
    {
      q: 'Posso fazer elevação de calcanhar todo dia?',
      cites: [CITE.rathleff],
      a: 'O ensaio de Rathleff na fascite plantar usou dia sim, dia não. Músculos e tendões precisam de recuperação entre as sessões com carga. O Walkito coloca a elevação de calcanhar nos dias de força, com dias de descanso entre eles. Carga diária sem descanso pode travar o progresso ou aumentar a dor.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você sentiu um estalo repentino na panturrilha ou no Aquiles durante uma elevação',
      'a panturrilha está inchada, vermelha, quente ou dura ao toque',
      'você não consegue subir na ponta do pé de jeito nenhum de um lado',
      'a dor não passa durante a noite e piora de semana em semana',
      'aparece dormência, formigamento ou queimação no pé',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito monta um plano que começa no seu nível e sobe quando você está pronto. A sequência da panturrilha vai da elevação sentado para a elevação em pé com os dois pés, a sustentada, a elevação com toalha, a descida excêntrica do calcanhar e os saltitos curtos na ponta dos pés. Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos.',
    more: [
      'A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha e o equilíbrio. A meta de panturrilha é 25\u00A0elevações em uma perna. Chegar lá não encerra o trabalho; uma nova meta entra no lugar. O Walkito é um programa de exercícios. Ele não faz diagnóstico.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Elevação de calcanhar',
  campaign: 'ex-calf-raises-pt',
};
