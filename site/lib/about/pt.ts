import { PAIN_GOAL_MAX, PROGRAM, SUPPORT_EMAIL } from '@/lib/site';

import type { About } from './types';

/** `3, 5 ou 7`: the plan's options as a Portuguese list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} ou ${options[options.length - 1]}`;
}

/*
 * Translated from `en.ts` (2026-10-08). Brazilian Portuguese with «você».
 * Nothing here is invented: no reviewer is named because none has reviewed the
 * guides yet. When one does, their name, credentials and what they checked
 * replace that paragraph in every language. Pages that exist only in English
 * keep their English path and say «(em inglês)» after the link.
 */
export const ABOUT_PT: About = {
  lang: 'pt',
  title: 'Sobre o Walkito: como nossos guias são escritos',
  description:
    'O que é o Walkito, como são escritos e embasados os guias sobre dor no calcanhar e pé chato, o que o Walkito não faz e como avisar sobre um erro.',
  h1: 'Sobre o Walkito',
  lede: 'O Walkito é um app para iPhone e Android com exercícios para dor no calcanhar, fascite plantar e pé chato, para os primeiros passos ao acordar e os longos dias em pé. Um plano que se ajusta a como seus pés estão a cada manhã. Esta página explica como os guias deste site são escritos e de onde vêm os números. Ela também diz o que o Walkito não faz, e como nos avisar quando algo estiver errado.',
  sections: [
    {
      h2: 'O Walkito em resumo',
      id: 'facts',
      bullets: [
        '**O que é:** um app para iPhone e Android com exercícios para dor no calcanhar, fascite plantar e pé chato.',
        '**Celulares:** iPhone, na [App Store](https://apps.apple.com/app/id6813076846), e Android, no [Google Play](https://play.google.com/store/apps/details?id=com.walkito.app).',
        `**Sessões:** ${either(PROGRAM.sessionMinutes)}\u00A0minutos, em casa. O Walkito pergunta o que você tem, como uma toalha ou um degrau, e deixa de fora os exercícios que precisam de outra coisa.`,
        `**Frequência:** você escolhe ${either(PROGRAM.daysPerWeek)} dias de treino por semana. Cada sessão se adapta a como foi a sua manhã.`,
        `**Progresso:** um teste curto a cada ${PROGRAM.testEveryDays}\u00A0dias.`,
        '**Idiomas:** inglês, russo, espanhol, português, francês, italiano e alemão.',
        '**Preço:** grátis para baixar, com uma assinatura anual ou semanal dentro do app. A App Store ou o Google Play mostra o preço na sua moeda antes de você assinar.',
        '**Quem faz:** Rahim Hudaykulyyev e Rahman Bazarov, os dois cofundadores do Walkito.',
        '**O que não é:** um dispositivo médico. O Walkito não faz diagnóstico e não substitui um profissional de saúde.',
        '**Nome:** o Walkito não tem relação com o walkito.com, um serviço de passeio com cães.',
      ],
    },
    {
      h2: 'O que é o Walkito?',
      paragraphs: [
        `O Walkito é um app para iPhone e Android que monta o seu plano de exercícios uma semana de cada vez, em torno de metas que dá para medir. Ele não tem relação com o walkito.com, um serviço de passeio com cães.`,
        `São cinco metas: manhãs sem dor (dor da manhã em ${PAIN_GOAL_MAX}/10 ou menos por ${PROGRAM.painFreeDays}\u00A0dias seguidos), sustentar o arco por ${PROGRAM.goals.archHoldSeconds}\u00A0segundos, ${PROGRAM.goals.calfRaises} elevações de calcanhar em uma perna só, ${PROGRAM.goals.balanceSeconds}\u00A0segundos de equilíbrio em uma perna, e uma diferença menor que ${PROGRAM.goals.gapPercent}% entre o lado esquerdo e o direito. Você começa com até três delas. Se algo dói, a dor vem primeiro.`,
        `Você escolhe ${either(PROGRAM.daysPerWeek)} dias de treino por semana e sessões de ${either(PROGRAM.sessionMinutes)}\u00A0minutos. A sessão de cada dia se adapta a como foi a sua manhã. A cada ${PROGRAM.testEveryDays}\u00A0dias, um teste curto mostra se os seus números estão mudando. Depois que você alcança a primeira meta, o teste passa a ser a cada ${PROGRAM.testEveryDaysAfterGoal}\u00A0dias.`,
        'O plano não tem duração fixa. Quando você alcança uma meta, ela passa para manutenção com uma dose menor, e a próxima meta entra no lugar. Isso continua enquanto você usar o Walkito.',
        'O Walkito está em inglês, russo, espanhol, português, francês, italiano e alemão.',
        'O Walkito também pode ser usado dentro do ChatGPT e do Claude, onde responde com vídeos curtos de exercícios e um plano inicial.',
      ],
    },
    {
      h2: 'Como pesquisamos',
      id: 'how-we-research',
      paragraphs: [
        'Os guias do Walkito são feitos a partir de mais de 250 estudos publicados e diretrizes clínicas. Lemos o artigo completo, não só o resumo, antes de um número entrar numa página, e cada grau e número tem link para o estudo por trás dele, para você abrir e conferir. Nenhum profissional de saúde habilitado revisou os guias ainda.',
        'Rahim Hudaykulyyev e Rahman Bazarov, os dois cofundadores do Walkito, escrevem os guias deste site, entre eles [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) e [exercícios para pé chato](/pt/exercicios-pe-chato/). Nós os montamos a partir de diretrizes de prática clínica, ensaios randomizados e revisões sistemáticas. Não usamos posts de blog, fóruns ou resumos de outros sites como fonte. Quando um resumo cita um estudo, vamos até o estudo.',
        'Exercícios e afirmações recebem um de três selos de evidência. **Forte** quer dizer que uma diretriz clínica dá um grau alto, ou que vários bons ensaios concordam. **Moderada** quer dizer que pelo menos um ensaio bem desenhado apoia. **Inicial** quer dizer que a pesquisa é pequena ou está começando: vale tentar, e o selo pode mudar conforme sair mais pesquisa. Uma regra popular que um ensaio testou e não confirmou é marcada como **Sem respaldo**.',
        'O Walkito não tem patrocinadores, links de afiliado nem conteúdo pago. Nada está numa página porque alguém pagou por isso. Revisamos uma página quando sai pesquisa nova sobre o tema dela. Todo guia segue cinco regras:',
      ],
      bullets: [
        '**Todo número vem de uma fonte primária.** Ou seja, um ensaio randomizado, uma metanálise ou uma diretriz clínica. A fonte aparece com link na página que a usa. Se não conseguimos ligar um número a uma fonte assim, ele não entra no site. Já removemos frases por esse motivo.',
        '**A diretriz de prática clínica de 2023 sobre dor no calcanhar é a referência.** Ela é do Journal of Orthopaedic & Sports Physical Therapy. Ela dá a cada intervenção um grau conforme a força da evidência, incluindo as que ela recomenda não usar.',
        '**As ressalvas andam junto com os números.** Um resultado de três meses sempre aparece junto com o que aconteceu aos doze meses. Toda afirmação sobre o formato do arco diz em que tipo de pé foi medida.',
        '**As doses são as doses iniciais do próprio Walkito.** Elas mostram onde os exercícios do Walkito começam. Não são uma prescrição para você.',
        '**Nenhuma promessa de cura.** As páginas dizem o que a pesquisa encontrou e onde a evidência para.',
      ],
    },
    {
      h2: 'O que o Walkito não faz?',
      paragraphs: [
        'O Walkito não faz diagnóstico, não faz tratamento e não substitui um profissional de saúde. O Walkito não consegue dizer o que está causando a sua dor. Procure primeiro um profissional de saúde se:',
      ],
      // The guides' list (`lib/guides/pt.ts`), word for word, plus the arch.
      bullets: [
        'a dor começou depois de uma lesão ou de uma queda',
        'você não consegue apoiar o pé, ou está mancando',
        'ela vem com dormência, formigamento, queimação, inchaço ou calor',
        'o calcanhar está vermelho, ou você tem febre ou se sente mal',
        'ela acorda você à noite',
        'é uma dor aguda, ou está piorando mesmo depois de reduzir a carga',
        'apertar as laterais do calcanhar dói, ou a dor aumenta durante as corridas depois que você aumentou a quilometragem; as duas coisas podem ser sinais de uma fratura por estresse',
        'você tem diabetes, menos sensibilidade nos pés ou má circulação',
        'os dois calcanhares doem e outras articulações estão inchadas ou rígidas',
        'não melhorou depois de várias semanas de exercício e menos carga',
        'um arco caiu de repente na vida adulta',
        'o arco continua plano mesmo quando o pé está fora do chão',
      ],
    },
    {
      h2: 'Algum profissional de saúde revisou os guias do Walkito?',
      id: 'clinician',
      paragraphs: [
        'Nenhum profissional de saúde habilitado revisou os guias do Walkito ainda. Rahim e Rahman os escrevem a partir da pesquisa publicada citada em cada página.',
        'Quando um profissional de saúde revisar, esta página vai mostrar o nome dele, as credenciais e o que foi conferido. Até lá, nenhuma página deste site diz ter revisão médica.',
      ],
    },
    {
      h2: 'Como aviso sobre um erro?',
      paragraphs: [
        `Para avisar sobre um erro neste site, escreva para ${SUPPORT_EMAIL}. Pode ser um número que não bate com a fonte, uma dose que parece errada ou um link quebrado. Corrigimos a própria página.`,
        'Toda página mostra a data da última mudança no conteúdo. Essa data só muda quando o conteúdo muda de verdade.',
      ],
    },
    {
      h2: 'Como o Walkito trata os meus dados?',
      paragraphs: [
        'A [política de privacidade](/pt/privacidade/) do Walkito explica o que o Walkito guarda, o que sai do seu celular e como apagar. Em resumo, o seu plano e os seus registros ficam salvos na sua conta, e os dados do app Saúde da Apple ficam no seu celular.',
      ],
    },
  ],
};
