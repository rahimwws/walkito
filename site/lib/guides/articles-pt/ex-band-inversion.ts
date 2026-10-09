import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-band-inversion.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». The exercise keeps the site name «inversão com
 * faixa» (`lib/guides/pt.ts`). Dose (3 x 15) is the English page's figure.
 * Uses existing keys, including CITE.kulig.
 */

export const EX_BAND_INVERSION_PT: Guide = {
  lang: 'pt',
  page: 'exBandInversion',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Inversão do tornozelo com faixa: tibial posterior',
  description:
    'Como fazer a inversão do tornozelo com faixa elástica para fortalecer o tibial posterior: técnica, séries, erros comuns e o que a pesquisa mostra.',
  h1: 'Inversão do tornozelo com faixa: como fortalecer o tibial posterior',
  lede:
    'A inversão do tornozelo com faixa elástica é um exercício que fortalece o tibial posterior, o músculo profundo da panturrilha cujo tendão passa por baixo da parte de dentro do tornozelo e sustenta o arco por baixo. Você vira a sola do pé para dentro contra a resistência de uma faixa. Um estudo de ressonância magnética de 2004 mostrou que um movimento parecido, a adução do pé em cadeia fechada, produziu a maior ativação isolada do tibial posterior entre três exercícios testados.',
  takeaways: [
    'Um estudo de ressonância magnética de 2004 com 5\u00A0adultos saudáveis mostrou que a adução do pé (virar o pé para dentro) aumentou em 50% a intensidade do sinal do tibial posterior, com menos de 5% de aumento nos músculos em volta, o que faz dele o exercício mais seletivo para esse músculo (Kulig e colegas, 2004).',
    'Uma revisão sistemática de 2018 mostrou que programas de exercício com fortalecimento do tibial posterior melhoraram a dor e a função em pessoas com disfunção do tendão tibial posterior, embora a revisão tenha observado que a maioria dos estudos era pequena (Ross e colegas, 2018).',
    'O tibial posterior é o principal estabilizador dinâmico do arco longitudinal medial em pé e ao andar. Quando ele enfraquece, o arco pode cair com o tempo.',
    'O Walkito só acrescenta este exercício depois de seis sessões de pé curto em pé, para que os músculos intrínsecos do arco já estejam trabalhando antes de a faixa entrar.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é o exercício de inversão do tornozelo com faixa?',
      paragraphs: [
        'A inversão do tornozelo com faixa é um exercício sentado em que uma faixa elástica passa em volta da parte da frente do pé e fica presa no outro pé ou em um ponto fixo. Você vira a sola do pé para dentro (inversão) contra a puxada da faixa. O joelho fica parado. Só o pé e o tornozelo se mexem.',
        'O exercício trabalha o tibial posterior, um músculo profundo na parte de trás da perna cujo tendão contorna por trás o osso de dentro do tornozelo e se abre em leque pela sola do pé. É o músculo extrínseco mais importante para sustentar o arco ao andar. Quando ele enfraquece ou o tendão se desgasta, o arco cai e o pé gira para dentro. Esse problema se chama disfunção do tendão tibial posterior, ou pé chato adquirido do adulto.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Como fazer a inversão do tornozelo com faixa?',
      paragraphs: [
        'Sente-se com as pernas esticadas à frente ou na beira de uma cadeira. Passe uma faixa elástica em volta da parte de dentro da frente do pé da perna que vai trabalhar. Prenda a outra ponta embaixo do pé oposto ou em volta do pé de uma mesa, para a faixa puxar o pé para fora.',
        'Comece com o pé um pouco virado para fora (em eversão). Vire a sola do pé para dentro contra a faixa, levando a parte da frente do pé em direção ao meio do corpo. **Mexa o pé, não a perna inteira.** O joelho aponta reto para a frente o tempo todo. Volte devagar e repita.',
        'Comece com uma faixa leve. O movimento é pequeno. Se o joelho torce ou o quadril gira, a faixa está pesada demais ou a perna está compensando.',
      ],
      exercises: [
        {
          name: 'Inversão com faixa',
          evidence: { level: 'moderate', why: 'A ressonância magnética confirma a ativação seletiva do tibial posterior com a adução do pé (Kulig 2004). Programas de exercício com trabalho do tibial posterior melhoraram os resultados na disfunção do tendão em uma revisão sistemática de 2018.' },
          dose: 'O Walkito começa com 3\u00A0séries de 15, cada pé',
          how: 'Sente-se com uma faixa elástica em volta da parte da frente do pé, presa de um jeito que puxe o pé para fora. Vire a sola do pé para dentro contra a faixa. Mexa o pé, não a perna. O joelho fica parado.',
          often: 'Dias de força, depois de seis sessões de pé curto em pé',
          feel: 'Trabalho na parte de dentro do pé e do tornozelo',
          stop: 'A dor chegar a 6/10',
          media: 'band_inversion',
          caption: 'Inversão com faixa: vire a sola do pé para dentro contra a faixa',
          alt: 'Uma figura sentada virando a sola do pé para dentro contra uma faixa elástica passada em volta da parte da frente do pé',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: 'Qual músculo este exercício trabalha?',
      keyFact: 'Um estudo de ressonância magnética de 2004 com 5\u00A0adultos saudáveis mostrou que virar o pé para dentro aumentou o sinal do tibial posterior em 50\u00A0por cento, com menos de 5\u00A0por cento de mudança nos músculos vizinhos (Kulig e colegas, 2004).',
      paragraphs: [
        'O alvo principal é o tibial posterior. Ele é o músculo mais profundo da parte de trás da perna, atrás da tíbia e da fíbula. O tendão dele passa por trás do maléolo medial (o osso de dentro do tornozelo) e depois se abre em várias faixas que se prendem a quase todos os ossos do meio do pé.',
        'Um estudo de ressonância magnética de 2004 de Kulig e colegas testou três exercícios em 5\u00A0adultos saudáveis:',
        {
          list: [
            'Adução do pé (virar o pé para dentro deslizando no chão).',
            'Elevação de calcanhar em uma perna.',
            'Supinação do pé em cadeia aberta.',
          ],
        },
        'A adução do pé produziu a maior ativação do tibial posterior (aumento de 50% no sinal) com a menor ativação nos músculos em volta (menos de 5%). A elevação de calcanhar em uma perna também ativou o tibial posterior, mas ativou muito o gastrocnêmio (99%) e o sóleo (39%), o que faz dela um exercício bem menos seletivo para o tibial posterior.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: 'Por que o tibial posterior importa para o arco?',
      paragraphs: [
        'O tibial posterior é **o principal estabilizador dinâmico do arco longitudinal medial.** Toda vez que você dá um passo, ele contrai para segurar o arco no meio do apoio, quando todo o seu peso está em um pé só. Os músculos intrínsecos do pé (treinados pelo [exercício do pé curto](/pt/exercicios/pe-curto/) e por [abrir os dedos](/pt/exercicios/abrir-os-dedos-do-pe/)) dão o apoio local ao arco, mas o tibial posterior dá a força extrínseca maior, de cima.',
        'Quando o tendão do tibial posterior enfraquece ou se desgasta, o arco cai aos poucos e o pé faz mais pronação. Uma revisão de 2017 de Ling e Lui descreveu isso como a causa mais comum de pé chato adquirido do adulto. Uma revisão sistemática de 2018 de Ross e colegas mostrou que programas de exercício com fortalecimento do tibial posterior melhoraram a dor e a função na disfunção do tendão tibial posterior em fase inicial.',
        'Por isso os [programas de exercícios para pé chato](/pt/exercicios-pe-chato/) incluem exercícios intrínsecos do pé e trabalho do tibial posterior. Os músculos intrínsecos são os estabilizadores locais. O tibial posterior é o principal estabilizador extrínseco. Os dois importam.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quais são os erros comuns na inversão com faixa?',
      paragraphs: [
        {
          list: [
            '**O erro mais comum é girar a perna inteira em vez de só o pé.** Quando o quadril gira para dentro para virar o pé, o tibial posterior quase não trabalha. Mantenha o joelho apontando reto para a frente. Só o pé se mexe, no tornozelo.',
            '**Outro erro é usar uma faixa forte demais.** O tibial posterior é um músculo pequeno e profundo. Uma faixa pesada obriga os músculos maiores a assumir. Comece com uma faixa leve e foque em sentir o trabalho na parte de dentro do tornozelo e no arco.',
            '**Deixar o pé voltar de uma vez entre as repetições é um terceiro problema.** Controle a volta. A fase excêntrica, voltando devagar, coloca carga no tendão de um jeito que ajuda ele a se adaptar. Uma volta lenta vale mais que uma puxada rápida.',
            '**Por fim, algumas pessoas colocam a faixa muito acima no pé, perto da própria articulação do tornozelo.** A faixa deve ficar em volta da parte da frente do pé, perto da base dos dedos, para a alavanca trabalhar no ângulo certo.',
          ],
        },
      ],
    },
    {
      h2: 'O que a pesquisa diz sobre o fortalecimento do tibial posterior?',
      paragraphs: [
        'A evidência mais direta sobre o movimento vem do estudo de ressonância magnética de 2004 de Kulig e colegas. Ele confirmou que a adução do pé ativa o tibial posterior de forma seletiva, com ativação mínima dos músculos em volta. Isso faz da inversão contra uma faixa o exercício de escolha quando o objetivo é fortalecer esse músculo específico.',
        'Para resultados clínicos, uma revisão sistemática de 2018 de Ross e colegas analisou programas de exercício para a disfunção do tendão tibial posterior. A maioria dos estudos era pequena, mas a revisão concluiu que programas com exercícios excêntricos e concêntricos do tibial posterior, muitas vezes junto com fortalecimento da panturrilha e palmilhas, melhoraram a dor e a função.',
        '**O exercício não foi testado sozinho em um ensaio grande de fascite plantar.** O papel dele no programa do Walkito é apoiar o arco fortalecendo o estabilizador extrínseco que trabalha junto com os músculos intrínsecos. Páginas relacionadas: [exercícios para pé chato](/pt/exercicios-pe-chato/), [exercício do pé curto](/pt/exercicios/pe-curto/), [abdução de quadril](/pt/exercicios/abducao-quadril/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: 'Qual a força da faixa elástica para fazer inversão do tornozelo?',
      a: 'Comece com uma faixa elástica leve. O tibial posterior é um músculo pequeno e profundo e não precisa de carga pesada para cansar. Você deve sentir o trabalho na parte de dentro do tornozelo e no arco. Se o joelho torce ou o quadril gira para completar o movimento, a faixa está forte demais.',
    },
    {
      q: 'Inversão do tornozelo com faixa ajuda no pé chato?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'O tibial posterior é o principal estabilizador dinâmico do arco. Uma revisão sistemática de 2018 mostrou que programas de exercício com fortalecimento do tibial posterior melhoraram a dor e a função em pessoas com disfunção do tendão tibial posterior, a causa mais comum de pé chato adquirido do adulto (Ross 2018). Fortalecer esse músculo faz parte da abordagem padrão para pé chato.',
    },
    {
      q: 'Qual a diferença entre inversão e eversão do tornozelo?',
      a: 'A inversão vira a sola do pé para dentro e treina o tibial posterior, na parte de dentro do tornozelo. A eversão vira a sola para fora e treina os músculos fibulares, na parte de fora. As duas são usadas na reabilitação do tornozelo, mas para sustentar o arco a direção que importa é a inversão.',
    },
    {
      q: 'Dá para fazer este exercício sem faixa?',
      a: 'Sem faixa, você pode pressionar a parte de dentro do pé contra uma parede ou usar a mão para resistir ao movimento. A faixa é melhor porque dá uma resistência constante em toda a amplitude de movimento. Qualquer faixa elástica leve serve.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você tem dor ou inchaço ao longo do osso de dentro do tornozelo que piora com atividade',
      'você não consegue ficar na ponta de um pé só, o que pode indicar fraqueza do tendão tibial posterior',
      'o arco caiu há pouco tempo e o pé ficou visivelmente mais chato',
      'você teve uma lesão no tornozelo e a parte de dentro ainda está sensível',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito acrescenta a inversão do tornozelo com faixa depois de seis sessões de pé curto em pé. A progressão garante que os músculos intrínsecos do pé estejam ativos antes de o estabilizador extrínseco receber carga. As sessões são de 3, 5 ou 10\u00A0minutos, e um teste a cada 14\u00A0dias acompanha o tempo de sustentação do arco e a resistência da panturrilha.',
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Inversão do tornozelo com faixa (tibial posterior)',
  campaign: 'ex-band-inversion-pt',
};
