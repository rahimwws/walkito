import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Hub: Pé chato (PT)
 *
 * Translated from `articles/hub-flat-feet.ts`, written around the Brazilian
 * Portuguese queries «pé chato», «pé chato flexível», «pé plano», «arco
 * caído». Informal «você». Figures, grades and qualifiers are identical to
 * the English page. No new citations.
 */

export const HUB_FLAT_FEET_PT: Guide = {
  lang: 'pt',
  page: 'hubFlatFeet' as any,
  mainSource: CITE.ling,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Pé chato: causas, tipos e quando precisa de atenção',
  description:
    'O que é pé chato, flexível ou rígido, se causa problemas, pé plano adquirido do adulto, arco caído, exercícios e quando procurar um profissional.',
  h1: 'Pé chato: o que é, o que causa e quando precisa de atenção',
  lede:
    'Ter pé chato significa que o arco do pé fica mais baixo que o normal ou encosta no chão quando você fica em pé. A maioria dos pés chatos é flexível, ou seja, o arco aparece quando o pé sai do chão, e a maioria não causa dor nenhuma. Um número menor é rígido ou surge na vida adulta por causa de um tendão que enfraquece, e esses são os casos que merecem mais atenção.',
  takeaways: [
    'Uma revisão sistemática de 2023 com 12\u00A0estudos populacionais estimou uma prevalência geral de pé chato de cerca de 15,6%, embora o número varie muito conforme a faixa etária, o método de medida e a população (Salinas-Torres e colegas, 2023).',
    'A maioria dos pés chatos é flexível e acompanha a pessoa a vida toda. Um pé chato rígido, que continua plano mesmo quando o pé é levantado, é estrutural e não vai mudar com exercício.',
    'O Framingham Foot Study, com cerca de 1.900\u00A0adultos, não encontrou relação entre a postura de pé chato e dor lombar. Encontrou uma pequena relação, em mulheres, entre um pé que vira para dentro ao caminhar e dor nas costas, e nenhuma em homens (Menz e colegas, 2013).',
    'O pé plano adquirido do adulto, causado na maioria das vezes pelo enfraquecimento do tendão tibial posterior, pode trazer dor e inchaço na parte de dentro do tornozelo e uma queda progressiva do arco (Ling e Lui, 2017).',
    'Em um ensaio com 52\u00A0pessoas com pé chato flexível, seis semanas de exercícios combinados mudaram o formato do arco mais do que em um grupo controle. O ensaio mediu o formato do arco, não a dor (Brijwasi e Borkar, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é pé chato?',
      figure: { id: 'arches', caption: 'Os mesmos ossos do pé com pé chato, arco típico e arco alto, vistos pelo lado de dentro.', alt: 'Três pés vistos pelo lado de dentro sobre um chão plano: um pé chato com o arco apoiado no chão, um arco típico com um pequeno espaço embaixo e um arco alto com um grande espaço sob o meio do pé.' },
      keyFact: 'Uma revisão sistemática de 2023 que juntou 12\u00A0estudos populacionais com cerca de 16.000\u00A0pessoas encontrou pé chato em cerca de 15,6% no geral, com taxas mais altas ligadas a IMC mais alto e idade mais avançada (Salinas-Torres e colegas, 2023).',
      paragraphs: [
        'O arco do pé, chamado arco longitudinal medial, é formado pelos ossos, ligamentos e tendões da parte de dentro do pé. No pé chato, esse arco fica mais baixo ou some quando você fica em pé. O nome médico é pé plano (pes planus).',
        'Pé chato é comum. Uma revisão sistemática de 2023 juntou 12\u00A0estudos populacionais com cerca de 16.000\u00A0pessoas e relatou uma prevalência geral de 15,6%. Só em adultos, as estimativas vão de cerca de 5 a 27%, conforme a população e o método de medida. IMC mais alto e idade mais avançada estão ligados a uma prevalência maior.',
        '“Arco caído” é um nome comum para pé chato. Na maioria das vezes as duas expressões querem dizer a mesma coisa. Às vezes “arco caído” é usado de forma mais específica para um arco que desceu na vida adulta, que tem outra causa, explicada mais abaixo.',
        'Ter pé chato não quer dizer automaticamente que algo está errado. Muitas pessoas com arco baixo caminham, correm e ficam em pé sem sintoma nenhum. As perguntas que importam são se o pé chato é flexível ou rígido, e se ele está causando dor.',
      ],
      cites: [CITE.salinasTorres],
    },
    {
      h2: 'Como saber se o pé chato é flexível ou rígido?',
      keyFact: 'Em um ensaio com 52\u00A0pessoas com pé chato flexível, seis semanas de pé curto, exercícios de tornozelo, quadril e alongamentos melhoraram duas medidas do formato do arco mais do que em um grupo controle (Brijwasi e Borkar, 2023).',
      paragraphs: [
        'Um pé chato flexível é aquele em que o arco abaixa com o seu peso, mas volta quando o pé sai do chão. A maioria dos pés chatos é desse tipo. Um pé chato rígido continua plano, esteja você apoiado nele ou não.',
        'Um teste rápido: sente-se e olhe a parte de dentro do pé. Se você vê um arco, fique em pé sobre os dois pés. Se o arco some quando você fica em pé, mas estava lá quando você estava sentado, o pé chato é flexível. Outro jeito: suba na ponta dos pés. Se o arco aparece quando você sobe, ele é flexível.',
        'A diferença importa porque o exercício pode influenciar um arco flexível. Em um ensaio com 52\u00A0pessoas com pé chato flexível, seis semanas de exercícios de pé curto, trabalho de tornozelo, fortalecimento de quadril e alongamentos mudaram duas medidas do formato do arco mais do que em um grupo controle. Um pé chato rígido é estrutural (muitas vezes por uma coalizão tarsal, uma ponte de osso entre ossos do pé), e o exercício não vai mudar o formato dele. Um pé chato rígido que causa dor normalmente precisa da avaliação de um profissional de saúde.',
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Pé chato é mesmo um problema?',
      keyFact: 'O Framingham Foot Study, com cerca de 1.900\u00A0adultos, não encontrou relação entre a postura de pé chato e dor nas costas, embora uma pisada pronada ao caminhar tenha mostrado uma pequena relação só em mulheres (Menz e colegas, 2013).',
      paragraphs: [
        'Para a maioria das pessoas, não. Um pé chato flexível que não causa dor e não limita o que você faz é uma variação normal do formato do pé, não uma condição que precisa ser resolvida.',
        'A preocupação mais comum é a dor nas costas. O maior estudo sobre o assunto, o Framingham Foot Study, avaliou cerca de 1.900\u00A0adultos. Ele não encontrou associação entre a postura de pé chato e dor lombar. Em mulheres, um pé que virava para dentro ao caminhar (pisada pronada) mostrou uma pequena relação com dor nas costas, mas a postura do pé em si, chato ou não, não mostrou. Em homens, nem a postura nem a pisada tiveram relação com dor nas costas.',
        'O pé chato pode mudar o caminho da carga pela perna. Alguns corredores com pés muito pronados desenvolvem lesões por sobrecarga no tornozelo ou no joelho, mas a relação entre a postura do pé e lesões é mais fraca do que muita gente imagina. Uma revisão de 2024 sobre treino de pé curto em pé chato não encontrou mudança clara na postura do pé no geral, e encontrou mudança em uma medida da queda do arco só em programas com mais de seis semanas. Tanto o ensaio quanto a revisão mediram o formato do arco, não a dor nem as taxas de lesão.',
        'Os casos em que o pé chato importa de verdade estão explicados abaixo: o pé plano adquirido do adulto, por um tendão que enfraquece, e o pé chato que vem com dor, inchaço ou uma mudança repentina na altura do arco.',
      ],
      cites: [CITE.menz, CITE.cheng],
    },
    {
      h2: 'O que é pé plano adquirido do adulto?',
      paragraphs: [
        'A deformidade do pé plano adquirido do adulto é uma condição em que um arco que era normal cai na vida adulta, normalmente porque o tendão tibial posterior (o tendão que sustenta o arco pela parte de dentro do tornozelo) enfraquece e não consegue mais fazer o seu trabalho. O nome clínico do problema no tendão é disfunção do tendão tibial posterior.',
        'O tendão tibial posterior passa por trás do osso de dentro do tornozelo e se prende aos ossos que formam o arco. Quando ele se estica ou se rompe, o arco cai, o calcanhar inclina para fora e a parte da frente do pé pode começar a apontar para longe da linha do meio. Dor e inchaço na parte de dentro do tornozelo são sinais iniciais comuns. O teste de elevação do calcanhar em uma perna, em que você tenta ficar em um pé só e subir na ponta dos dedos, pode ser difícil ou doloroso no lado afetado.',
        'Uma revisão no The Open Orthopaedics Journal descreve quatro estágios: o estágio I tem inflamação no tendão, mas nenhuma deformidade visível; o estágio II mostra uma deformidade de pé plano flexível que ainda pode ser corrigida com a mão; o estágio III é uma deformidade rígida que não pode ser corrigida manualmente; e o estágio IV envolve alterações na articulação do tornozelo além da deformidade rígida.',
        'Uma revisão sistemática sobre exercício para disfunção do tendão tibial posterior encontrou pouca evidência de ensaios randomizados. A revisão observou que as diretrizes clínicas recomendam tratamento sem cirurgia, incluindo exercício, órteses e ajuste das atividades, nos estágios iniciais (estágios I e II), mas o número de ensaios de alta qualidade é pequeno. Estágios mais avançados muitas vezes precisam da avaliação de um profissional de saúde e podem envolver órtese de tornozelo ou cirurgia.',
        'Se um arco caiu na vida adulta, com dor ou inchaço na parte de dentro do tornozelo, procure um profissional de saúde antes de começar um programa de exercícios. Isso não é a mesma coisa que um pé chato flexível que você sempre teve.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quais sintomas mostram que o pé chato precisa de atenção?',
      paragraphs: [
        'A maioria dos pés chatos não dá sintomas e não precisa de investigação médica. Um pé chato flexível que existe desde a infância e não causa dor é uma variação normal do formato do pé. Estes são os padrões que vale a pena verificar com um profissional de saúde:',
      ],
      bullets: [
        'Dor na parte de dentro do tornozelo ou embaixo do arco que não melhora com repouso.',
        'Inchaço na parte de dentro do tornozelo, principalmente se apareceu há pouco tempo.',
        'Um arco que ficou plano na vida adulta enquanto o outro não.',
        'Dificuldade de ficar em um pé só e subir na ponta dos dedos no lado afetado.',
        'Dor no joelho, na canela ou no quadril que você desconfia ter relação com o jeito como o pé pisa.',
        'Um pé chato rígido (o arco continua plano mesmo quando o pé está fora do chão).',
        'Dormência, formigamento ou sensação de instabilidade no tornozelo.',
      ],
    },
    {
      h2: 'Calçados e palmilhas ajudam no pé chato?',
      paragraphs: [
        'Calçados com bom suporte, com entressola firme e algum suporte para o arco, podem deixar mais confortável ficar em pé e caminhar para quem tem pé chato. Eles não mudam o arco com o tempo, mas diminuem o trabalho que os músculos do arco precisam fazer durante o dia.',
        'Palmilhas de arco prontas são fáceis de achar e baratas. Palmilhas sob medida, feitas a partir de um molde do seu pé, custam mais e às vezes são recomendadas para disfunção do tendão tibial posterior. A evidência sobre palmilhas especificamente para pé chato é mais fraca do que a maioria das pessoas imagina. Para fascite plantar, a diretriz de 2023 para dor no calcanhar recomenda não usar palmilhas como abordagem isolada de curto prazo (grau B contra), mas dá um C ao tratamento combinado que inclui palmilhas.',
        'Se o seu pé chato não causa dor, você não precisa de calçado especial. Se ficar em pé ou caminhar deixa o arco ou o tornozelo doendo, um calçado com sola firme e um suporte leve para o arco é um primeiro passo razoável, e vale testar antes de gastar mais com palmilhas sob medida. Calçados com sola muito plana e sem suporte (sandálias finas, tênis gastos) costumam piorar o cansaço no arco em dias longos.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quais exercícios ajudam no pé chato?',
      paragraphs: [
        'Os exercícios para pé chato focam nos músculos que sustentam o arco por baixo (os músculos intrínsecos do pé) e nos músculos mais acima que controlam como o pé pisa (a panturrilha, o quadril). A melhor evidência até agora vem de um ensaio com 52\u00A0pessoas com pé chato flexível em que seis semanas de exercícios combinados mudaram o formato do arco mais do que em um grupo controle. Esse ensaio incluiu pé curto, exercícios de tornozelo, fortalecimento de quadril e alongamentos, feitos juntos.',
        'Uma revisão de 2024 sobre o treino de pé curto sozinho foi menos animadora: não encontrou mudança clara no geral, e encontrou melhora em uma medida do arco só em programas com mais de seis semanas. A lição é que um programa combinado funciona melhor do que um exercício isolado, e que paciência importa.',
        '[Exercícios para pé chato](/pt/exercicios-pe-chato/) tem a lista completa de exercícios, as doses, o que cada um deve fazer você sentir e a evidência por trás de cada um. O Walkito monta um plano semanal em torno da meta de sustentar o arco, começando pelo pé curto sentado, passando para as versões em pé e em uma perna, e depois acrescentando faixa elástica e fortalecimento de quadril. As páginas de cada exercício se aprofundam:',
      ],
      bullets: [
        'O [pé curto](/pt/exercicios/pe-curto/) treina o arco a subir sem dobrar os dedos.',
        '[Puxar a toalha com os dedos](/pt/exercicios/puxar-toalha-dedos/) acorda os músculos pequenos embaixo do arco.',
        '[Abrir os dedos](/pt/exercicios/abrir-os-dedos-do-pe/) trabalha os músculos entre os dedos que dividem a carga com o arco.',
        'A [inversão com faixa](/pt/exercicios/inversao-tornozelo-faixa/) fortalece o tibial posterior, o mesmo músculo envolvido no pé plano adquirido do adulto.',
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Condições relacionadas',
      paragraphs: [
        'O pé chato pode se misturar com outros problemas no pé, principalmente quando você fica em pé ou caminha por muito tempo. Se a dor é perto do calcanhar e segue o padrão da manhã (forte nos primeiros passos, melhorando depois de alguns minutos), isso combina mais com fascite plantar. Veja [fascite plantar](/pt/fascite-plantar/) para uma visão completa.',
      ],
      bullets: [
        'A [dor no antepé](/pt/metatarsalgia-dor-na-planta-do-pe/) pode vir de carga demais na parte da frente do pé quando o arco é baixo. Uma panturrilha tensa joga o peso para a frente.',
        '[Pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala dos exercícios e dos calçados que ajudam quando um dia longo em piso duro deixa o arco doendo.',
        '[Enfermagem e dor nos pés](/pt/dor-nos-pes-enfermagem/) trata do peso dos plantões de 12\u00A0horas.',
      ],
    },
    {
      h2: 'Todos os guias sobre pé chato neste site',
      bullets: [
        '[Exercícios para pé chato](/pt/exercicios-pe-chato/) tem a lista completa de exercícios com doses, progressão e graus de evidência.',
        '[Pé curto](/pt/exercicios/pe-curto/) explica em detalhes o principal movimento de treino do arco.',
        '[Puxar a toalha com os dedos](/pt/exercicios/puxar-toalha-dedos/) explica o exercício com a toalha para os músculos intrínsecos do pé.',
        '[Abrir os dedos](/pt/exercicios/abrir-os-dedos-do-pe/) explica como abrir os dedos para dividir a carga com o arco.',
        '[Inversão com faixa](/pt/exercicios/inversao-tornozelo-faixa/) fortalece o tibial posterior.',
        '[Dor no antepé](/pt/metatarsalgia-dor-na-planta-do-pe/) fala da dor na parte da frente do pé, que se mistura com o pé chato quando a carga vai para a frente.',
        '[Pés doendo de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala dos exercícios e dos calçados para dias longos em pé.',
        '[Enfermagem e dor nos pés](/pt/dor-nos-pes-enfermagem/) trata da dor nos pés de quem trabalha na área da saúde.',
      ],
    },
  ],
  faq: [
    {
      q: 'Pé chato é motivo de preocupação?',
      cites: [CITE.menz],
      a: 'Para a maioria das pessoas, não. Um pé chato flexível que não causa dor e não limita as atividades é um formato normal, não um distúrbio. O Framingham Foot Study, com cerca de 1.900\u00A0adultos, não encontrou relação entre a postura de pé chato e dor lombar (Menz e colegas, 2013). Os casos que precisam de atenção são o pé chato rígido e o arco que caiu na vida adulta com dor ou inchaço.',
    },
    {
      q: 'O que causa pé chato em adulto?',
      cites: [CITE.ling],
      a: 'A maioria dos pés chatos em adultos existe desde sempre e é só o jeito como o pé se desenvolveu. Quando um arco que era normal cai na vida adulta, a causa mais comum é a disfunção do tendão tibial posterior: o tendão da parte de dentro do tornozelo enfraquece, o arco cai, e pode vir dor ou inchaço (Ling e Lui, 2017). Outras causas são lesão, artrite inflamatória e problemas nos nervos.',
    },
    {
      q: 'Pé chato pode causar dor no joelho ou no quadril?',
      a: 'Um arco baixo muda o caminho da força pela perna, e algumas pessoas com pés muito pronados desenvolvem sintomas de sobrecarga no joelho, na canela ou no quadril. Mas a relação é mais fraca do que se costuma achar. Muitas pessoas com pé chato não têm problema nenhum no joelho ou no quadril. Se você tem pé chato e dor no joelho ou no quadril, um profissional de saúde pode ver se as duas coisas têm relação no seu caso.',
    },
    {
      q: 'Pé chato em criança passa com a idade?',
      cites: [CITE.salinasTorres],
      a: 'Na maioria das vezes, sim. Quase toda criança pequena tem pé chato, e o arco costuma se formar por volta dos 6 aos 10\u00A0anos. Uma revisão sistemática de 2023 observou que a prevalência é maior em crianças de 3 a 5\u00A0anos e diminui até a adolescência (Salinas-Torres e colegas, 2023). Um adolescente que ainda tem pé chato flexível sem dor dificilmente tem um problema que precisa ser resolvido.',
    },
    {
      q: 'Devo usar palmilha se tenho pé chato?',
      cites: [CITE.guideline],
      a: 'Se o seu pé chato não causa dor, palmilhas são opcionais. Se ficar em pé ou caminhar deixa o arco doendo, um calçado com sola firme e um suporte leve para o arco é um primeiro passo razoável. Palmilhas sob medida às vezes são usadas na disfunção do tendão tibial posterior, mas a evidência de palmilhas só para pé chato é limitada. A diretriz de 2023 para dor no calcanhar dá às palmilhas como abordagem isolada um B contra.',
    },
    {
      q: 'O que é pé plano adquirido do adulto?',
      cites: [CITE.ling, CITE.posteriorTibialReview],
      a: 'O pé plano adquirido do adulto é uma queda progressiva do arco, normalmente por enfraquecimento do tendão tibial posterior (Ling e Lui, 2017). Ele causa dor e inchaço na parte de dentro do tornozelo, dificuldade de subir na ponta dos dedos em um pé só, e o calcanhar inclinando para fora. As diretrizes clínicas recomendam tratamento sem cirurgia nos estágios iniciais, embora a evidência de ensaios de alta qualidade seja limitada (Ross e colegas, 2018).',
    },
    {
      q: 'Quem tem pé chato pode correr?',
      a: 'Muitos corredores têm pé chato e correm sem problemas. Um arco baixo pode aumentar a pronação, que alguns corredores controlam com tênis de estabilidade. Se correr causa dor no arco, no tornozelo ou no joelho que não melhora entre uma corrida e outra, um profissional de saúde pode ver se o pé chato está contribuindo. Fortalecer os músculos do arco e do quadril é uma abordagem razoável, troque você de tênis ou não.',
    },
    {
      q: 'Pé chato é considerado deficiência?',
      a: 'Normalmente não. A maioria dos pés chatos não causa dor nem limita as atividades, então sozinho ele não cumpre os critérios de deficiência. Pés chatos graves ou rígidos que causam dor constante e limitam caminhar ou ficar em pé às vezes podem sustentar um pedido de benefício por deficiência, mas isso depende do programa específico, como a Social Security americana, e da sua capacidade geral, não só de ter pé chato.',
    },
    {
      q: 'Qual etnia tem mais pé chato?',
      cites: [CITE.salinasTorres],
      a: 'O pé chato (pé plano) aparece mais em alguns grupos, embora a pesquisa seja limitada. Uma revisão sistemática de 2023 de estudos populacionais encontrou a origem asiática ligada a mais que o dobro das chances de pé chato, e pessoas brancas ligadas a cerca de metade das chances, em comparações de subgrupos separadas. São padrões de população, não uma previsão para os pés de uma pessoa específica.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'um arco ficou plano de repente na vida adulta',
      'há dor ou inchaço na parte de dentro do tornozelo',
      'você não consegue ficar em um pé só e subir na ponta dos dedos no lado afetado',
      'o arco continua plano mesmo quando o pé está fora do chão (pé chato rígido)',
      'a dor começou depois de uma lesão ou de uma queda',
      'você tem dormência, formigamento ou instabilidade no tornozelo',
      'os dois pés doem e outras articulações estão rígidas ou inchadas',
      'a dor está piorando semana após semana mesmo com exercício',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa decidir quais exercícios de arco fazer nem quando passar para uma versão mais difícil. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para um pé chato flexível, essa meta é sustentar o arco: manter o arco erguido por 60\u00A0segundos. Se você também tem dor no calcanhar, as manhãs sem dor vêm primeiro.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a primeira meta for alcançada), um teste curto mede a sustentação do arco, a resistência da panturrilha e o equilíbrio. A meta de sustentar o arco fica no plano até você alcançá-la, leve as semanas que levar.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se um arco caiu na vida adulta com dor ou inchaço, procure um profissional de saúde antes de começar.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Pé chato',
  campaign: 'hub-flat-feet-pt',
};
