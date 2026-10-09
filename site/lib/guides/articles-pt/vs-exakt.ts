import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/vs-exakt.ts` (2026-10-08). Brazilian Portuguese,
 * informal «você». Prices, ratings and dates are identical to the English
 * page (checked October 2026); prices stay in US dollars, written «US$» so
 * they are not read as reais, as on `best-app.ts`. Evidence level names match
 * the labels in `components/Evidence.tsx`.
 */

export const VS_EXAKT_PT: Guide = {
  lang: 'pt',
  page: 'vsExakt',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Walkito vs Exakt Health: comparação lado a lado',
  description:
    'Walkito ou Exakt Health: condições, preço, plataformas, como cada um monta o seu plano, evidências, idiomas e privacidade. Conferido em outubro de 2026.',
  h1: 'Walkito vs Exakt Health: qual combina com você?',
  lede:
    'O Walkito e o Exakt Health oferecem planos de exercícios para fascite plantar, mas foram feitos para pessoas diferentes. O Exakt é um app para corredores, com mais de 15 planos de reabilitação de lesões e um programa de volta à corrida. O Walkito é um app mais focado, em dor no calcanhar, pé chato e adaptação diária à dor. Esta página compara os dois com honestidade, diz onde o Exakt é a melhor escolha e explica o que o Walkito faz de diferente.',
  intro: [
    'É o Walkito que faz esta página. Por isso, leia as informações sobre o Exakt (tiradas da página dele na App Store, da página no Google Play e do site oficial, tudo conferido em outubro de 2026) e decida por conta própria. Os links para todas as fontes estão embaixo da tabela de comparação.',
  ],
  takeaways: [
    'O Exakt Health cobre mais de 15 lesões de corrida e inclui planos de treino de corrida dos 5\u00A0km à maratona. O Walkito cobre só dor no calcanhar, pé chato e dor na canela.',
    'O Exakt está no iOS e no Android. O Walkito é só para iOS em outubro de 2026.',
    'O Exakt Health é certificado como dispositivo médico na União Europeia. O Walkito não é um dispositivo médico.',
    'O Walkito ajusta cada sessão a partir de um check-in de dor pela manhã e testa a assimetria entre esquerda e direita a cada 14\u00A0dias. O Exakt adapta o plano a partir do retorno que você dá no fim da sessão.',
    'O Exakt custa US$\u00A019,99/mês ou US$\u00A059,99 por seis meses. O Walkito custa US$\u00A044,99/ano ou US$\u00A07,99/semana.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Comparação lado a lado',
      paragraphs: [
        'Cada informação sobre o Exakt abaixo foi conferida na página do Exakt Health na App Store, na página no Google Play e em exakthealth.com em outubro de 2026. Cada informação sobre o Walkito vem da página do Walkito na App Store, de walkito.site e do próprio código-fonte do app.',
      ],
      table: {
        caption: 'Walkito vs Exakt Health (conferido em outubro de 2026)',
        head: ['', 'Walkito', 'Exakt Health'],
        rows: [
          [
            'Foco',
            'Dor no calcanhar, pé chato, dor na canela, ficar em pé o dia todo',
            'Lesões de corrida (mais de 15) e treino de corrida (5\u00A0km à maratona)',
          ],
          [
            'Plataformas',
            'Só iOS (Android planejado)',
            'iOS e Android',
          ],
          [
            'Preço',
            'US$\u00A044,99/ano ou US$\u00A07,99/semana',
            'US$\u00A019,99/mês, US$\u00A039,99/3\u00A0meses ou US$\u00A059,99/6\u00A0meses (reabilitação); planos de corrida até US$\u00A099,99/ano',
          ],
          [
            'Teste grátis',
            'Não aparece na App Store (os termos permitem ofertas introdutórias)',
            '7\u00A0dias grátis',
          ],
          [
            'Duração da sessão',
            '3, 5 ou 10\u00A0minutos',
            'Varia conforme o plano (normalmente 15-30\u00A0minutos)',
          ],
          [
            'Adaptação à dor',
            'O check-in da manhã ajusta cada sessão; 7/10 ou mais troca para um trabalho leve sentado',
            'O retorno no fim da sessão ajusta a progressão pelos níveis',
          ],
          [
            'Testes de progresso',
            'A cada 14\u00A0dias: elevação de calcanhar, sustentação do arco, equilíbrio, comparação entre esquerda e direita',
            'Acompanhamento dinâmico do progresso pelos níveis do plano',
          ],
          [
            'Vídeos de exercícios',
            'Sim, clipes no app para cada exercício',
            'Sim, mais de 600 vídeos de exercícios',
          ],
          [
            'Volta à corrida',
            'Não incluída (ajusta à carga de corrida pelos passos do app Saúde da Apple)',
            'Sim, programa de caminhada e corrida no fim de cada plano de reabilitação',
          ],
          [
            'Idiomas',
            'Inglês, russo, espanhol',
            'Inglês, francês, alemão, espanhol',
          ],
          [
            'Dispositivo médico',
            'Não',
            'Sim, certificado na União Europeia',
          ],
          [
            'Acesso a profissionais',
            'Nenhum (só programa de exercícios)',
            'Nenhum dentro do app (criado por fisioterapeutas esportivos habilitados)',
          ],
          [
            'Integração com dados de saúde',
            'App Saúde da Apple (passos, sono, assimetria da marcha, velocidade da caminhada, frequência cardíaca)',
            'Integração com smartwatch para registrar corridas',
          ],
          [
            'Privacidade',
            'Os dados do app Saúde da Apple ficam no aparelho. Notas de dor e sessões são sincronizadas com a conta. Sem rastreamento para anúncios.',
            'Identificadores usados para rastreamento. Coleta dados financeiros. Dados criptografados em trânsito. Exclusão disponível.',
          ],
          [
            'Nota na App Store',
            'Ainda sem nota (lançado em 2 de outubro de 2026)',
            '4,8 de 5 (125 avaliações)',
          ],
          [
            'Desenvolvedor',
            'Aigum Kalasov',
            'Exakt Health GmbH (Berlim)',
          ],
        ],
      },
      sourceNote:
        'Fontes do Exakt: App Store (apps.apple.com/us/app/exakt-running-pt-trainer/id1638338198), Google Play (play.google.com/store/apps/details?id=exakt.mobile.android.release), exakthealth.com/en-US/pricing, exakthealth.com/en-US/about-us. Fontes do Walkito: App Store (apps.apple.com/app/id6813076846), walkito.site.',
    },
    {
      h2: 'Para quem o Exakt Health foi feito?',
      paragraphs: [
        'O Exakt Health foi feito para corredores. Essa é a identidade central dele, e tudo no app reflete isso. Se você corre e está se recuperando de fascite plantar, tendinopatia de Aquiles, entorse de tornozelo, lesão no posterior da coxa ou lesão de menisco, o Exakt tem um plano de reabilitação específico para a sua lesão. Ele cobre mais de 15 condições diferentes.',
        'Cada plano de reabilitação termina com um programa de caminhada e corrida para voltar a correr, uma das partes da recuperação mais difíceis de acertar sozinho. O app também tem planos de treino de corrida para todas as distâncias, do sedentário aos 5\u00A0km até a maratona.',
        'O Exakt foi fundado em 2021 por Philip Billaudelle, Lucia Payo e Maryke Louw. Ele é feito por fisioterapeutas esportivos habilitados e treinadores de corrida, e captou cerca de 2,2\u00A0milhões de euros em investimento seed em setembro de 2024. A equipe fica em Berlim. O app é certificado como dispositivo médico na União Europeia, o que significa que passou por avaliação regulatória para o uso pretendido.',
        'Se você corre e precisa tanto de reabilitação de lesão quanto de um plano de treino estruturado, é difícil competir com o Exakt. A nota 4,8 em 125 avaliações no iOS e os mais de 100\u00A0mil downloads no Android mostram que ele funciona para o público dele.',
      ],
    },
    {
      h2: 'Para quem o Walkito foi feito?',
      paragraphs: [
        'O Walkito foi feito para quem tem dor nos pés e quer um plano de exercícios diário e curto que se ajuste a como a pessoa acorda cada manhã. Isso inclui fascite plantar, pé chato flexível e dor na canela. Ele também foi feito para quem passa o dia todo em pé: enfermagem, comércio, estoque e armazém.',
        'O app é mais focado que o Exakt. Ele não cobre lesões no joelho, lesões no posterior da coxa nem planos de corrida. O que ele faz de diferente é ajustar a sessão de cada dia a partir de um check-in de dor pela manhã, e não do retorno no fim da sessão. Uma manhã com dor de 7/10 ou mais troca o dia para cerca de três minutos de trabalho sentado. Um dia puxado em pé (medido pelos passos do app Saúde da Apple) transforma a próxima sessão de força numa sessão de recuperação mais leve.',
        'O Walkito testa o progresso a cada 14\u00A0dias com elevação de calcanhar, sustentação do arco e equilíbrio em uma perna, e compara o seu lado esquerdo com o direito. Essa comparação entre esquerda e direita é algo que a maioria dos apps dessa área não acompanha.',
        'O Walkito foi lançado em 2 de outubro de 2026. Ele é novo, ainda não tem avaliações de usuários e é só para iOS. Ele não tem o histórico nem a variedade que o Exakt construiu desde 2021.',
      ],
    },
    {
      h2: 'Como cada app monta o seu plano?',
      paragraphs: [
        'O Exakt pergunta sobre a sua lesão, o seu nível de experiência e a sua agenda da semana, e depois passa um plano de reabilitação estruturado em níveis. Você avança pelos níveis conforme cada sessão vai. Quando a reabilitação termina, você pode passar direto para um plano de treino de corrida sem começar do zero.',
        'O Walkito pergunta onde dói, de que lado, o seu nível de atividade, o seu objetivo e quantos dias e minutos você tem. Ele monta um plano semanal em torno de metas medidas: manhãs sem dor, sustentação do arco por 60\u00A0segundos, 25 elevações de calcanhar em uma perna, equilíbrio em uma perna por 30\u00A0segundos e simetria entre esquerda e direita. A cada semana, ele refaz o plano a partir de como foi a semana anterior. Uma meta é o foco de cada vez. Quando uma meta é alcançada, ela passa para manutenção e a próxima meta começa.',
        'A principal diferença: o Exakt segue uma progressão estruturada por níveis. O Walkito segue uma progressão por metas, em que o check-in de cada manhã ajusta a intensidade do dia.',
      ],
    },
    {
      h2: 'Quais condições cada app cobre?',
      keyFact: 'Os exercícios do Walkito seguem a diretriz de 2023 para dor no calcanhar, que dá ao alongamento da fáscia plantar e da panturrilha o grau A e ao treino de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Aqui o Exakt é claramente mais forte. Os planos de reabilitação dele cobrem fascite plantar, tendinopatia de Aquiles, entorse de tornozelo, lesão no posterior da coxa, lesão de menisco, joelho de corredor e mais. Se a sua dor é no joelho, no quadril ou no posterior da coxa, o Walkito não tem um plano para isso.',
        'O Walkito cobre fascite plantar, pé chato (flexível), dor no calcanhar de ficar em pé e dor na canela. Os exercícios dele seguem a diretriz de 2023 para dor no calcanhar (alongamento com grau A, força com grau B) e o ensaio de Rathleff de 2015 (elevação de calcanhar com carga para fascite plantar). Para essas condições específicas, ele tem exercícios, lógica de progressão e adaptação à dor. Para qualquer coisa fora disso, o Exakt ou um app mais amplo como o Prehab é a escolha certa.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quanto custam o Walkito e o Exakt Health?',
      paragraphs: [
        'O Walkito custa US$\u00A044,99 por ano ou US$\u00A07,99 por semana. O preço anual dá cerca de US$\u00A00,87 por semana. Nenhum teste grátis aparece na App Store, embora os termos de uso permitam ofertas introdutórias.',
        'O Exakt custa US$\u00A019,99 por mês nos planos de reabilitação, com opções de 3\u00A0meses (US$\u00A039,99) e 6\u00A0meses (US$\u00A059,99). Os planos de treino de corrida vão até US$\u00A099,99 por ano. Toda assinatura começa com 7\u00A0dias grátis.',
        'Em um ano inteiro: o plano anual do Walkito custa US$\u00A044,99. A opção de reabilitação mais barata do Exakt (o plano de 6\u00A0meses renovado duas vezes) fica em cerca de US$\u00A0120. Se você incluir um plano de corrida, o Exakt pode passar de US$\u00A0200 por ano.',
        'Se você precisa só de exercícios para dor no calcanhar ou no pé, o Walkito é bem mais barato. Se você precisa de reabilitação de lesão de corrida mais um plano de treino, o preço maior do Exakt cobre mais coisas.',
      ],
    },
    {
      h2: 'Plataformas e idiomas',
      paragraphs: [
        'O Exakt Health está no iOS e no Android. Se você usa um celular Android, isso já decide a questão, já que o Walkito é só para iOS.',
        'O Exakt está disponível em inglês, francês, alemão e espanhol. O Walkito está disponível em inglês, russo e espanhol. Os dois têm em comum o inglês e o espanhol. Se você precisa de francês ou alemão, o Exakt é a única opção. Se você precisa de russo, o Walkito é a única opção.',
      ],
    },
    {
      h2: 'Privacidade',
      paragraphs: [
        'O Walkito lê dados do app Saúde da Apple (passos, sono, assimetria da marcha, velocidade da caminhada, frequência cardíaca em repouso) e os mantém no aparelho. Eles nunca são enviados. O que é sincronizado com a conta do Walkito são as notas de dor, os dados das sessões e os resultados dos testes. Não há rastreamento para anúncios.',
        'O rótulo de privacidade do Exakt Health na App Store lista Identificadores como dados usados para rastrear você, e Compras, Identificadores, Dados de uso e Diagnóstico como dados coletados, mas não vinculados à sua identidade. A página no Google Play informa que nenhum dado é compartilhado com terceiros, que dados financeiros podem ser coletados, que os dados são criptografados em trânsito e que a exclusão está disponível.',
        'Os dois apps coletam dados de uso comuns. Nenhum dos dois vende dados de saúde. O jeito do Walkito de manter os dados do app Saúde da Apple no aparelho é um modelo de privacidade mais rígido.',
      ],
    },
    {
      h2: 'Em que evidências cada app se baseia?',
      paragraphs: [
        'O Exakt Health é certificado como dispositivo médico na União Europeia (Alemanha), o que exige evidências de segurança e de finalidade de uso. O app é feito por fisioterapeutas esportivos habilitados. Ele afirma que os seus métodos são baseados em evidências, mas não lista estudos específicos na página da App Store nem na página de preços.',
        'O Walkito lista as suas fontes de evidência no site. Os exercícios seguem a diretriz clínica de 2023 para dor no calcanhar (Koc e colegas, JOSPT), o ensaio de Rathleff de 2015 sobre elevação de calcanhar com carga alta, o ensaio de Brijwasi de 2023 sobre exercícios para pé chato, entre outros. Cada exercício no app traz um nível de evidência (Forte, Moderada ou Inicial) com uma explicação de uma linha.',
        'Nenhum dos dois apps publicou um ensaio clínico próprio. Os dois se apoiam em pesquisas existentes, aplicadas nos seus respectivos programas.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quando o Exakt Health é a melhor escolha?',
      paragraphs: [
        'Escolha o Exakt Health se qualquer um destes pontos for verdade:',
      ],
      bullets: [
        'Você corre, está se recuperando de uma lesão de corrida e quer um plano estruturado de volta à corrida.',
        'A sua lesão não é fascite plantar nem pé chato. O Exakt cobre mais de 15 condições; o Walkito cobre três.',
        'Você usa um celular Android.',
        'Você quer 7\u00A0dias grátis para testar o app antes de pagar.',
        'A certificação de dispositivo médico na União Europeia é importante para você.',
        'Você precisa do app em francês ou alemão.',
      ],
    },
    {
      h2: 'Quando o Walkito é a melhor escolha?',
      paragraphs: [
        'Escolha o Walkito se qualquer um destes pontos for verdade:',
      ],
      bullets: [
        'A sua dor é especificamente dor no calcanhar, fascite plantar ou pé chato, e você quer um programa focado nisso.',
        'Você quer sessões de 3 a 10\u00A0minutos em vez de 15 a 30.',
        'A adaptação diária à dor a partir de um check-in pela manhã importa mais para você do que uma progressão por níveis.',
        'Você quer testes de progresso a cada 14\u00A0dias que comparem a esquerda com a direita.',
        'O preço pesa: o Walkito, a US$\u00A044,99 por ano, custa menos da metade do menor custo anual do Exakt.',
        'Você precisa do app em russo.',
        'Você passa o dia todo em pé no trabalho, não corre, e quer um app feito para isso.',
      ],
    },
  ],
  faq: [
    {
      q: 'O Exakt Health é melhor que o Walkito?',
      a: 'Depende do que você precisa. O Exakt Health cobre mais de 15 lesões de corrida e inclui planos de volta à corrida. Ele está no iOS e no Android e é certificado como dispositivo médico na União Europeia. O Walkito é focado em dor no calcanhar e pé chato, com adaptação diária à dor e sessões mais curtas. Para quem corre e tem vários tipos de lesão, o Exakt combina melhor. Para dor específica no calcanhar com ajuste diário, o Walkito foi feito para isso.',
    },
    {
      q: 'O Walkito é mais barato que o Exakt Health?',
      a: 'Sim, no plano anual. O Walkito custa US$\u00A044,99 por ano. A opção de reabilitação mais barata do Exakt Health é US$\u00A059,99 por seis meses, ou cerca de US$\u00A0120 por ano. O Exakt oferece 7\u00A0dias grátis; o Walkito não mostra um teste grátis na App Store no momento.',
    },
    {
      q: 'O Exakt Health tem plano para fascite plantar?',
      a: 'Sim. O Exakt Health tem um plano de reabilitação específico para fascite plantar, além de planos para tendinopatia de Aquiles, entorse de tornozelo, lesão no posterior da coxa, lesão de menisco e mais. O plano de fascite plantar termina com um programa de caminhada e corrida para voltar a correr com segurança, e o app adapta o plano conforme você avança pelos níveis.',
    },
    {
      q: 'Dá para usar o Walkito no Android?',
      a: 'Ainda não. O Walkito é só para iOS em outubro de 2026. O Android está planejado, mas nenhuma data de lançamento foi anunciada. Se você usa Android, o Exakt Health está no Google Play com um plano de reabilitação para fascite plantar, e funciona hoje tanto no Android quanto no iOS.',
    },
    {
      q: 'O Exakt Health é um dispositivo médico?',
      a: 'Sim. O Exakt Health é certificado como dispositivo médico na União Europeia (Alemanha). Isso significa que ele passou por avaliação regulatória de segurança e de uso pretendido. O Walkito não é um dispositivo médico e não diz que faz diagnóstico nem que dá orientação médica.',
    },
    {
      q: 'Qual app se adapta mais à dor do dia a dia?',
      a: 'O Walkito ajusta cada sessão a partir de um check-in de dor pela manhã, antes de você começar. Uma nota de 7/10 ou mais deixa a sessão mais leve. Um dia com muitos passos faz o dia seguinte ter uma sessão de recuperação. O Exakt adapta o plano a partir da nota que você dá para cada sessão depois de terminar. O jeito do Walkito reage mais às mudanças diárias da dor; o do Exakt é mais focado na progressão geral do plano.',
    },
  ],
  redFlags: {
    h2: 'Quando um app não basta, procure um profissional de saúde',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé ou está mancando',
      'a dor vem com dormência, formigamento, queimação, inchaço ou calor',
      'a dor acorda você à noite ou aparece em repouso',
      'apertar as laterais do calcanhar dói, o que pode indicar uma fratura por estresse e não fascite plantar',
      'a dor está piorando de semana em semana mesmo com exercício constante',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Se o Walkito parece combinar com a sua situação, é assim que ele funciona. Você responde perguntas sobre onde dói, de que lado, o seu nível de atividade e o seu objetivo. O Walkito monta um plano semanal em torno de metas medidas, começando por manhãs sem dor. Toda manhã, um check-in ajusta o dia.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, e mostra a diferença entre o seu lado esquerdo e o direito. Os exercícios seguem a diretriz clínica de 2023 e o ensaio de Rathleff de 2015. O Walkito é um programa de exercícios, não um diagnóstico nem um substituto para um profissional de saúde.',
    ],
    cta: 'Experimente o Walkito na App Store.',
  },
  crumb: 'Walkito vs Exakt Health',
  campaign: 'compare-exakt-pt',
};
