import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Melhor app para fascite plantar (PT) ──────────────────────────────
 *
 * Translated from `articles/best-app.ts`, written around the Brazilian
 * Portuguese queries «melhor app para fascite plantar», «aplicativo para
 * fascite plantar», «app de exercícios para dor no calcanhar». Informal
 * «você». Prices, ratings and dates are identical to the English page
 * (checked October 2026); prices stay in US dollars, written «US$» so they
 * are not read as reais.
 */

export const BEST_APP_PT: Guide = {
  lang: 'pt',
  page: 'bestApp',
  published: '2026-10-08',
  updated: '2026-10-09',
  title: 'Melhor app para fascite plantar em 2026: comparação honesta',
  description:
    'Melhor app para fascite plantar em 2026: Exakt Health, Hinge Health, Prehab, PlantarCare, Arch e Walkito comparados em preço, plataformas e perfil.',
  h1: 'Melhor app para fascite plantar: um guia de escolha para 2026',
  lede:
    'Esta página compara sete apps que trazem exercícios para fascite plantar, pé chato ou dor no pé em geral. O Walkito é um deles, e é o Walkito que faz esta página, então é bom você saber disso desde o início. O objetivo é ser justo, dizer onde os outros são melhores e dar detalhes suficientes para você escolher o que combina com a sua situação.',
  intro: [
    'Não existe um app que seja o melhor para todo mundo. A escolha certa depende do que você precisa: quem corre e está voltando de uma fascite plantar tem necessidades diferentes de quem tem pé chato e passa o dia todo em pé no trabalho, e os dois têm necessidades diferentes de quem tem o Hinge Health pago pela empresa. Os critérios abaixo explicam o que observar, e a tabela em seguida mostra onde cada app se encaixa.',
  ],
  takeaways: [
    'A diretriz clínica de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A e ao treino de força o grau B. Um bom app deve incluir os dois.',
    'Adaptar-se à dor importa: uma rotina diária fixa não diferencia uma manhã boa de uma ruim, e colocar a mesma carga numa fáscia irritada todo dia pode fazer você voltar atrás.',
    'O Exakt Health é a opção mais forte para corredores se recuperando de fascite plantar que também querem um plano de volta à corrida, e é certificado como dispositivo médico na União Europeia.',
    'O Hinge Health é gratuito por meio de empresas e planos de saúde e vem com uma equipe clínica completa, mas não dá para comprá-lo por conta própria.',
    'Nenhum app consegue diagnosticar a sua dor no pé. Se a dor começou depois de uma lesão, vem com inchaço ou dormência, ou acorda você à noite, procure um profissional de saúde antes de começar qualquer programa.',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que um app para fascite plantar deve fazer?',
      keyFact: 'A diretriz clínica de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A, o mais alto, e ao treino de força o grau B (Koc e colegas, 2023).',
      paragraphs: [
        'Um app útil para fascite plantar deve trazer exercícios que combinam com o que a pesquisa apoia. A diretriz clínica de 2023 para dor no calcanhar avalia a evidência por trás de cada abordagem. O alongamento da fáscia plantar e da panturrilha recebe um A, o grau mais alto. O treino de força recebe um B. Isso significa que **os dois devem estar no app, não só um.**',
        'Além da lista de exercícios, estas são as coisas que vale verificar antes de assinar:',
      ],
      bullets: [
        '**Progressão.** Os exercícios devem ficar mais difíceis com o tempo, e não ficar no mesmo nível para sempre. A pesquisa sobre treino de força para fascite plantar usou um protocolo com aumento progressivo de carga.',
        '**Adaptação à dor.** O app deve reagir quando a dor está pior. Carregar um calcanhar dolorido do mesmo jeito numa manhã ruim é o jeito mais rápido de alguém perder a confiança no programa.',
        '**Tempo por dia.** A maioria das pessoas não vai fazer 30\u00A0minutos de exercícios para os pés. De cinco a dez minutos dos exercícios certos, feitos com constância, é mais realista.',
        '**Preço e período de teste.** Saiba quanto você vai pagar e se existe um teste grátis para ver se funciona para você.',
        '**Plataformas.** Alguns apps são só para iOS. Se você usa Android, as opções são menores.',
        '**Privacidade.** Dados de dor e de saúde são sensíveis. Verifique se o app compartilha ou vende esses dados.',
        '**Participação de profissionais.** Um app criado ou revisado por fisioterapeutas habilitados é um sinal razoável. Um app que pode colocar você em contato com um profissional é um sinal mais forte.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Como esses apps se comparam?',
      paragraphs: [
        'A tabela abaixo cobre sete apps disponíveis em outubro de 2026. Cada informação foi conferida na página do app na App Store ou no Google Play e no site oficial. As notas e os números de avaliações são os que apareciam na App Store do iOS no momento em que esta página foi escrita.',
      ],
      table: {
        caption: 'Apps para fascite plantar e dor no pé comparados (outubro de 2026)',
        head: ['App', 'Plataformas e preço', 'Foco', 'Se adapta à dor?', 'Nota (iOS)'],
        rows: [
          [
            '[Exakt Health](https://www.exakthealth.com/)',
            'iOS, Android. US$\u00A019,99/mês ou US$\u00A059,99/6\u00A0meses; 7\u00A0dias grátis',
            'Lesões de corrida (mais de 15 planos de reabilitação) e treino de corrida',
            'Sim, o plano se adapta conforme você avança',
            '4,8 (125\u00A0avaliações)',
          ],
          [
            '[Hinge Health](https://www.hingehealth.com/)',
            'iOS, Android. US$\u00A00 por meio da empresa ou do plano de saúde',
            'Dor musculoesquelética em geral (costas, joelho, quadril, pescoço, assoalho pélvico)',
            'Sim, personalizado pela equipe clínica',
            '4,9 (168\u00A0mil avaliações)',
          ],
          [
            '[Prehab](https://theprehabguys.com/)',
            'iOS. US$\u00A049/mês ou ~US$\u00A016/mês no plano anual; 7\u00A0dias grátis no plano anual',
            'Mais de 55 programas para várias partes do corpo',
            'Avaliação Body Scan, depois um programa fixo',
            '4,8 (~1,7\u00A0mil avaliações)',
          ],
          [
            '[PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136)',
            'iOS. Gratuito, sem compras dentro do app',
            'Acompanhamento de dor no calcanhar e fascite plantar',
            'Fases de recuperação ajustam a rotina conforme a tendência da dor',
            'Ainda sem nota',
          ],
          [
            '[Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858)',
            'iOS. US$\u00A09,99/mês ou US$\u00A039,99/ano; 7\u00A0dias grátis',
            'Pé chato e fortalecimento do arco',
            'Não',
            '4,3 (6\u00A0avaliações)',
          ],
          [
            'Plantar Fasciitis Exercises',
            'iOS, Android. Download gratuito; é preciso fazer uma compra dentro do app para usar',
            'Só alongamentos para fascite plantar',
            'Não',
            '1,0 (1\u00A0avaliação)',
          ],
          [
            '[Walkito](https://walkito.site/)',
            'iOS, Android. US$\u00A044,99/ano ou US$\u00A07,99/semana',
            'Dor no calcanhar, pé chato, quem passa o dia em pé, corredores',
            'O check-in da manhã ajusta cada sessão',
            'Ainda sem nota (novo, out. 2026)',
          ],
        ],
      },
      sourceNote:
        'Todos os dados vêm da App Store, do Google Play e dos sites oficiais. Conferidos em outubro de 2026.',
    },
    {
      h2: 'Exakt Health: o app de reabilitação para corredores',
      paragraphs: [
        'O Exakt Health foi feito para corredores, e isso aparece. O app tem mais de 15 planos de reabilitação de lesões, da fascite plantar à tendinopatia de Aquiles e à lesão de menisco, além de planos de treino de corrida que vão do sedentário à maratona. Cada plano de reabilitação termina com uma fase estruturada de volta à corrida, algo que a maioria dos apps para dor no pé não oferece.',
        'Ele é certificado como dispositivo médico na União Europeia, o que significa que passou por avaliação regulatória de segurança e de uso pretendido. Foi criado por fisioterapeutas esportivos habilitados e treinadores de corrida. O app tem mais de 600 vídeos de exercícios e adapta o plano conforme você avança nos níveis.',
        'Por US$\u00A019,99 por mês ou US$\u00A059,99 por seis meses, o Exakt não é barato, mas a variedade de condições e a qualidade dos planos de reabilitação são difíceis de igualar entre os apps que você usa por conta própria. O teste grátis de 7\u00A0dias deixa você ver o app completo antes de pagar. Ele está disponível em inglês, francês, alemão e espanhol, no iOS e no Android.',
        'Onde o Exakt é melhor que o Walkito:',
        {
          list: [
            'Cobre mais tipos de lesão (mais de 15, contra dor no calcanhar, pé chato e canela).',
            'Tem um programa completo de volta à corrida.',
            'Tem certificação de dispositivo médico na UE.',
            'Uma base de usuários estabelecida, com nota 4,8 em 125 avaliações no iOS.',
          ],
        },
        'Onde o Walkito é diferente:',
        {
          list: [
            'O Walkito ajusta a sessão de cada dia a partir de um check-in de dor pela manhã, e não de um retorno no fim da sessão.',
            'Testa a diferença entre esquerda e direita a cada 14\u00A0dias.',
            'Foca especificamente em dor no calcanhar e no pé, e não em toda a variedade de lesões de corrida.',
          ],
        },
      ],
    },
    {
      h2: 'Hinge Health: a opção paga pela empresa',
      paragraphs: [
        'O Hinge Health é a maior plataforma digital de saúde musculoesquelética dos Estados Unidos, com mais de 2\u00A0milhões de membros. Se a sua empresa ou o seu plano de saúde cobre, ele é gratuito para você e vem com algo que nenhum app de uso por conta própria consegue igualar: uma equipe clínica dedicada que inclui fisioterapeutas, ortopedistas e outros especialistas.',
        'O app cobre uma grande variedade de problemas de articulações e músculos, não só dos pés. Ele também inclui o Enso, um aparelho vestível para alívio da dor aguda. A nota 4,9 em 168\u00A0mil avaliações no iOS reflete a combinação de exercícios guiados, acompanhamento humano e custo zero.',
        '**O problema é o acesso.** Você não consegue comprar o Hinge Health na App Store. É preciso ter cobertura por meio de uma das mais de 2.800 empresas ou planos de saúde que o oferecem.',
        'Se você tem acesso, provavelmente é a opção mais completa desta lista. Se não tem, ele simplesmente não é uma opção.',
        'O Hinge Health não é específico para os pés. Os principais usos dele são dor nas costas, no joelho, no quadril e no pescoço. Especificamente para fascite plantar, um app mais focado pode ser um ponto de partida melhor.',
      ],
    },
    {
      h2: 'Prehab: a maior biblioteca de exercícios',
      paragraphs: [
        'O app The Prehab Guys foi criado por doutores em fisioterapia e tem a maior biblioteca de exercícios desta comparação:',
        {
          list: [
            'Mais de 55 programas.',
            'Mais de 170 treinos.',
            'Mais de 4.000 vídeos de exercícios.',
          ],
        },
        'Ele tem um programa específico de reabilitação para fascite plantar. O recurso Body Scan pergunta sobre a sua dor, os seus objetivos e as suas necessidades de movimento, e depois recomenda um programa.',
        'Por US$\u00A049 por mês ou cerca de US$\u00A0200 por ano, é a opção de uso por conta própria mais cara daqui. O teste grátis de 7\u00A0dias vale só para o plano anual. As sessões duram cerca de 20\u00A0minutos, mais do que os 3 a 10\u00A0minutos dos apps focados nos pés. A qualidade das instruções em vídeo é elogiada com frequência nas avaliações.',
        'O Prehab é uma boa escolha se você tem dor em várias partes do corpo e quer um app só que cubra tudo, dos ombros aos pés. Ele é menos focado que os apps feitos especificamente para fascite plantar, e não adapta as sessões diárias à sua dor da manhã.',
        'Ele é só para iOS e só em inglês.',
      ],
    },
    {
      h2: 'PlantarCare: o rastreador gratuito',
      paragraphs: [
        'O PlantarCare é gratuito, não tem compras dentro do app e não exige conta. Ele foca inteiramente em dor no calcanhar e fascite plantar. Você anota a dor dos primeiros passos da manhã e a pior dor do dia, e o app leva você por fases de recuperação, com alongamentos guiados, trabalho de panturrilha, elevações de calcanhar e lembretes de gelo de acordo com a sua fase.',
        'Para um app gratuito, ele acerta bastante coisa:',
        {
          list: [
            'Tendência da dor ao longo do tempo.',
            'Registro de calçado e de carga.',
            'Lembretes de sinais de alerta que dizem quando procurar um profissional de saúde.',
          ],
        },
        'A contrapartida é que ele é novo, ainda não tem notas e não descreve a pesquisa por trás da escolha dos exercícios.',
        'O PlantarCare é um ponto de partida razoável se você quer acompanhar a sua dor de graça e seguir alongamentos básicos sem assinar nada. Ele é só para iOS.',
      ],
    },
    {
      h2: 'Arch: Flat Feet Trainer',
      paragraphs: [
        'O Arch é o único app desta comparação focado inteiramente em pé chato e fortalecimento do arco. Ele tem mais de 40 exercícios para os pés, acompanhamento da evolução e um design limpo. Por US$\u00A039,99 por ano ou US$\u00A09,99 por mês, com 7\u00A0dias grátis, o preço é moderado.',
        'Uma pessoa que avaliou o app observou que ele não tem vídeos dos exercícios, só ilustrações. O app diz que as rotinas são “respaldadas pela ciência” e seguem “princípios comprovados de fisioterapia”, mas não cita estudos específicos. Com só 6 avaliações na App Store, ele ainda está no começo.',
        'Se a sua principal preocupação é pé chato sem dor importante, vale testar o Arch. Para fascite plantar, ele não é a escolha certa, já que não inclui exercícios de reabilitação específicos para o calcanhar nem acompanhamento da dor.',
      ],
    },
    {
      h2: 'Plantar Fasciitis Exercises: um app básico com cobrança',
      paragraphs: [
        'Este app, de Verdhit Agarwal, oferece 15 exercícios em três níveis: alongamentos leves, ganho de força e exercícios avançados. Ele aparece como gratuito no iOS e no Android, mas as duas lojas mostram compras dentro do app, e uma pessoa relatou que teve que pagar uma assinatura mensal antes de conseguir usá-lo.',
        'Os exercícios são básicos, com instruções em texto em vez de demonstração em vídeo. Não há lógica de progressão, nem acompanhamento da dor, nem adaptação. A única nota no iOS é 1 de 5, e essa avaliação fala justamente de uma cobrança inesperada. É o tipo de app que existe porque “plantar fasciitis exercises” é um termo muito pesquisado, e não porque alguém montou um programa bem pensado.',
        'Se você quer uma referência gratuita de quais alongamentos tentar, confira a página na loja antes de começar, já que alguns exercícios podem estar atrás de uma cobrança. Para um programa guiado de verdade, com progressão, ele não basta.',
      ],
    },
    {
      h2: 'Walkito: o que ele faz e o que não faz',
      paragraphs: [
        'O Walkito é um programa de exercícios para dor no calcanhar, pé chato e dor na parte de baixo da perna. Ele foi lançado na App Store em 2 de outubro de 2026 e no Google Play mais tarde, em outubro de 2026. É novo e ainda não tem notas.',
        'O que ele faz:',
        {
          list: [
            'Monta um plano semanal a partir das suas respostas sobre dor, objetivos e agenda.',
            'Toda manhã, um check-in ajusta a sessão do dia a como o seu pé está.',
            'Testes a cada 14\u00A0dias medem as elevações de calcanhar, a sustentação do arco e o equilíbrio em uma perna, e comparam esquerda e direita.',
            'As sessões têm 3, 5 ou 10\u00A0minutos.',
            'Os exercícios seguem a diretriz de 2023 para dor no calcanhar e o ensaio de Rathleff de 2015.',
            'No iPhone, ele lê do Apple Saúde dados de passos, sono e caminhada, que ficam no seu celular. No Android, ele lê do Health Connect passos, sessões de exercício, distância e sono.',
          ],
        },
        'O que ele não faz:',
        {
          list: [
            'Não diagnostica a sua dor.',
            'Não é um dispositivo médico.',
            'Não tem um profissional de saúde do outro lado.',
          ],
        },
        'Ele cobre dor no calcanhar, pé chato e dor na canela, e não as mais de 15 lesões que o Exakt cobre nem o corpo inteiro como o Hinge Health ou o Prehab.',
        'Por US$\u00A044,99 por ano ou US$\u00A07,99 por semana, o preço anual é menor que o da maioria dos concorrentes. O preço semanal é mais alto em relação ao anual, o que é o padrão em assinaturas.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Como escolher o app certo para fascite plantar?',
      paragraphs: [
        'Comece pela sua situação, não pela lista de recursos.',
      ],
      bullets: [
        '**Você corre, tem fascite plantar** e quer uma volta estruturada à corrida: o [Exakt Health](https://www.exakthealth.com/) é a escolha mais forte.',
        '**A sua empresa cobre o Hinge Health**: verifique se você tem direito. Uma equipe clínica com fisioterapeutas e médicos sem custo nenhum é difícil de superar.',
        '**Você tem dor em várias partes do corpo**, não só nos pés: o [Prehab](https://theprehabguys.com/) dá mais de 55 programas numa assinatura só.',
        '**Você quer um ponto de partida gratuito** para acompanhar a dor no calcanhar e tentar alongamentos básicos: o [PlantarCare](https://apps.apple.com/us/app/plantarcare-heel-pain-tracker/id6789899136) faz isso bem, sem custo.',
        '**O seu problema principal é pé chato** sem dor importante: o [Arch: Flat Feet Trainer](https://apps.apple.com/us/app/arch-flat-feet-trainer/id6755728858) foca exatamente nisso.',
        '**Você quer um plano diário para dor no calcanhar ou pé chato que se ajuste à sua manhã** e teste a sua evolução: foi para isso que o [Walkito](https://walkito.site/) foi feito.',
      ],
    },
  ],
  faq: [
    {
      q: 'Existe app gratuito para fascite plantar?',
      a: 'O PlantarCare é gratuito e não tem compras dentro do app. Ele acompanha a dor da manhã, sugere alongamentos de acordo com a sua fase de recuperação e mostra a tendência ao longo do tempo. O app “Plantar Fasciitis Exercises” aparece como gratuito, mas mostra compras dentro do app na loja, e uma pessoa relatou ter sido cobrada para usá-lo. Dos dois, o PlantarCare é a opção gratuita mais confiável.',
    },
    {
      q: 'Quais exercícios um app para fascite plantar deve ter?',
      cites: [CITE.guideline],
      a: 'A diretriz clínica de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau A e ao treino de força o grau B. Um bom app deve incluir os dois: alongamento para a fáscia e a panturrilha, e fortalecimento progressivo da panturrilha, como elevações de calcanhar. Exercícios que ficam mais difíceis aos poucos e se adaptam ao seu nível de dor são mais úteis que uma lista fixa.',
    },
    {
      q: 'Exakt Health ou Walkito: qual é melhor para fascite plantar?',
      a: 'O Exakt Health cobre mais condições, incluindo mais de 15 lesões de corrida e planos completos de treino de corrida. Ele é certificado como dispositivo médico na União Europeia. O Walkito foca especificamente em dor no calcanhar e no pé, com adaptação diária pela dor e testes de evolução a cada 14\u00A0dias. O Exakt é a escolha mais forte para corredores que precisam de reabilitação e de um plano de corrida. O Walkito é mais restrito, mas ajusta cada sessão à sua manhã. Os dois estão no iOS e no Android.',
    },
    {
      q: 'Um app pode substituir o fisioterapeuta na fascite plantar?',
      a: 'Nenhum app substitui um profissional de saúde que pode examinar o seu pé, descartar outras causas e ajustar um plano na hora. Um app é útil para exercícios diários guiados entre as consultas, ou como ponto de partida quando a dor é leve e combina com o padrão típico da fascite plantar. Se a dor veio de uma lesão, vem com inchaço ou dormência, ou está piorando, procure primeiro um profissional de saúde.',
    },
    {
      q: 'O Hinge Health é gratuito?',
      a: 'O Hinge Health é gratuito para membros cuja empresa ou plano de saúde o cobre. Não dá para comprá-lo diretamente na App Store. Verifique se você tem direito em hinge.health/covered. Se você tem cobertura, ele inclui uma equipe clínica com fisioterapeutas e médicos sem custo para você.',
    },
    {
      q: 'Por que o Walkito não diz que é o melhor app para fascite plantar?',
      a: 'Porque não seria honesto. O Walkito é novo, ainda não tem avaliações de usuários, cobre menos condições que o Exakt Health e não tem um profissional de saúde do outro lado como o Hinge Health. O que ele faz bem é ajustar cada dia à sua dor e testar a sua evolução a cada 14\u00A0dias. Se isso faz dele o app certo para você depende do que você precisa.',
    },
    {
      q: 'Algum desses apps funciona no Android?',
      a: 'O Exakt Health, o Hinge Health e o Walkito estão no iOS e no Android. O “Plantar Fasciitis Exercises” também está nos dois, embora mostre compras dentro do app em cada loja. Prehab, PlantarCare e Arch são, por enquanto, só para iOS. No Android, o Exakt Health cobre mais condições, e o Walkito é a opção mais específica, feita para dor no calcanhar e pé chato.',
    },
    {
      q: 'Precisa de app para fazer exercícios para fascite plantar?',
      cites: [CITE.guideline],
      a: 'Não. Um app não é obrigatório. Você pode fazer os exercícios com evidência de pesquisa por trás, como o alongamento da fáscia e a progressão das elevações de calcanhar, a partir de uma folha impressa ou de uma orientação de um profissional de saúde. O que um app costuma acrescentar são lembretes, acompanhamento da evolução e regras de ritmo baseadas na dor, que ajudam algumas pessoas a seguir o plano por mais tempo, e não um exercício diferente.',
    },
    {
      q: 'Com que frequência usar um app de exercícios para fascite plantar?',
      cites: [CITE.guideline],
      a: 'A maioria dos programas de exercícios para fascite plantar, incluindo os mais bem avaliados na diretriz de 2023 para dor no calcanhar, é feita em torno de sessões diárias ou quase diárias por cerca de três meses, e não de uso de vez em quando. Um app é mais útil quando você o abre na maioria dos dias, já que é a constância que produz o efeito da carga, e não algum recurso específico dele.',
    },
  ],
  redFlags: {
    h2: 'Quando um app não basta, procure um profissional de saúde',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé ou está mancando',
      'a dor vem com dormência, formigamento, queimação, inchaço ou calor',
      'o calcanhar está vermelho, ou você tem febre',
      'a dor acorda você à noite ou aparece em repouso',
      'os dois pés doem e outras articulações estão inchadas ou rígidas',
      'a dor está piorando semana após semana mesmo com exercício',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Se você leu até aqui e o Walkito parece combinar com você, veja como ele funciona. Você responde algumas perguntas sobre onde dói, de que lado, o quanto você é ativo e qual é o seu objetivo. O Walkito monta um plano semanal em torno dessas respostas. Toda manhã, um check-in ajusta o dia. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio em uma perna.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Os exercícios seguem a diretriz clínica de 2023 para dor no calcanhar. O plano não tem data para acabar: quando você alcança uma meta, ela passa para manutenção e a próxima meta entra no lugar. O Walkito é um programa de exercícios, não um diagnóstico nem um substituto para um profissional de saúde.',
    ],
    cta: 'Experimente o Walkito no iPhone ou no Android.',
  },
  crumb: 'Melhor app para fascite plantar',
  campaign: 'compare-best-app-pt',
};
