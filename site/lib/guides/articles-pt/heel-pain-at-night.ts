import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dor no calcanhar à noite (PT) ─────────────────────────────────────
 *
 * Translated from `articles/heel-pain-at-night.ts`, written around the
 * Brazilian Portuguese queries «dor no calcanhar à noite», «dor no
 * calcanhar em repouso», «calcanhar dói deitado». Informal «você».
 * Figures, doses, grades and qualifiers are identical to the English page.
 * Same citation note as the English file (Tedeschi 2025 for the Baxter 20% figure).
 */

export const HEEL_PAIN_AT_NIGHT_PT: Guide = {
  lang: 'pt',
  page: 'heelPainAtNight',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor no calcanhar à noite: causas e sinais de alerta',
  description:
    'Dor no calcanhar à noite ou em repouso pode indicar fratura por estresse, nervo comprimido ou artrite. Sinais de alerta e quando procurar um profissional.',
  h1: 'Dor no calcanhar à noite: o que causa e quando é sinal de alerta',
  lede:
    'A dor no calcanhar que aparece à noite, na cama ou em repouso é um padrão diferente da fisgada clássica dos primeiros passos da manhã na fascite plantar. Dor à noite e em repouso pode indicar uma fratura por estresse do calcâneo, um nervo comprimido, artrite inflamatória ou outra condição que precisa de um profissional de saúde. Esta página passa pelas causas comuns e pelas que você não deve deixar para depois.',
  intro: [
    'Se o seu calcanhar dói principalmente nos primeiros passos da manhã e depois melhora, o ponto de partida mais provável é [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/). Esta página é para a dor que continua em repouso, acorda você ou aparece depois de um tempo sem apoiar o pé e não combina com o padrão típico da fascite plantar.',
  ],
  takeaways: [
    'A dor da fascite plantar é pior nos primeiros passos depois do repouso e normalmente passa quando você se movimenta. Dor que continua em repouso, acorda você ou piora ao longo da noite é um padrão de alerta que precisa ser investigado (Tu, 2018).',
    'Fraturas por estresse do calcâneo podem doer ou latejar à noite e normalmente pioram com o apoio contínuo do peso, em vez de melhorar com o aquecimento (Patel e colegas, 2011).',
    'A síndrome do túnel do tarso e a compressão do nervo de Baxter, ramos do nervo tibial comprimidos, causam uma dor no calcanhar com queimação ou formigamento, de característica diferente da fascite (Tu, 2018). A compressão do nervo de Baxter, especificamente, pode responder por até 20% da dor crônica no calcanhar e pode aparecer em repouso (Tedeschi, 2025).',
    'Dor nos dois calcanhares com rigidez prolongada pela manhã pode indicar artrite inflamatória, como uma espondiloartropatia. Em um grupo de 174\u00A0pessoas com fascite plantar, dor nos dois calcanhares foi um preditor significativo de sintomas mais duradouros (Hansen e colegas, 2018).',
    'A diretriz de 2023 para dor no calcanhar dá às talas noturnas o grau **A** para fascite plantar persistente, mas o objetivo delas é evitar que a fáscia encurte durante a noite, e não tratar os tipos de dor noturna descritos nesta página (Koc e colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Por que o calcanhar dói à noite ou em repouso?',
      paragraphs: [
        'A fascite plantar dói porque a fáscia enrijece enquanto você dorme e depois estica de uma vez quando você fica em pé. Essa dor é máxima no primeiro passo e melhora conforme você se movimenta. Se o seu calcanhar dói enquanto você está deitado na cama, sem nenhum peso no pé, normalmente o mecanismo é outro.',
        'Uma revisão de 2018 na American Family Physician lista várias causas de dor no calcanhar que se comportam de um jeito diferente da fascite plantar. A diferença principal: a dor da fascite plantar melhora com a atividade, enquanto a dor de fraturas por estresse, nervos comprimidos, tumores e condições inflamatórias não segue esse padrão.',
        'O pé também fica apontado para baixo (flexão plantar) durante o sono. Essa posição pode encurtar o tendão de Aquiles e a panturrilha, o que às vezes contribui para o desconforto no calcanhar. As talas noturnas tratam disso segurando o tornozelo num ângulo neutro. Mas a tala noturna é uma ferramenta para fascite plantar, não um substituto para investigar uma dor que realmente piora em repouso.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain, CITE.guideline],
    },
    {
      h2: 'Pode ser uma fratura por estresse do calcâneo?',
      paragraphs: [
        'Uma fratura por estresse do calcâneo, uma trinca fina no osso do calcanhar causada por carga repetida, pode provocar uma dor funda que lateja à noite. Ao contrário da fascite plantar, a dor normalmente piora com a atividade e não melhora com o aquecimento. Muitas vezes vem depois de um aumento repentino de corrida, caminhada ou tempo em pé em superfícies duras.',
        'O “teste de compressão”, apertar os dois lados do osso do calcanhar ao mesmo tempo, é o sinal clínico clássico. Dor ao apertar é incomum na fascite plantar e comum nas fraturas por estresse. O raio-X simples muitas vezes não mostra fraturas por estresse no início. Normalmente é preciso ressonância magnética ou cintilografia óssea para confirmar.',
        'Uma revisão de 2011 na American Family Physician observou que as fraturas por estresse do calcâneo causam uma dor que piora aos poucos depois de um aumento de atividade ou de uma troca para superfícies mais duras. Dor à noite e em repouso estavam entre as características que diferenciam a fratura por estresse da fascite.',
      ],
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
    },
    {
      h2: 'E o nervo comprimido: túnel do tarso e nervo de Baxter?',
      keyFact: 'Uma revisão narrativa de 2025 concluiu que a compressão do nervo de Baxter pode responder por até 20% dos casos de dor crônica no calcanhar (Tedeschi, 2025).',
      paragraphs: [
        'O nervo tibial passa por um espaço atrás do tornozelo, do lado de dentro, chamado túnel do tarso. A compressão ali, a síndrome do túnel do tarso, causa queimação, formigamento ou dormência na sola e no calcanhar. Tu (2018) descreve a dor do túnel do tarso como normalmente pior ao ficar em pé, andar ou correr, e aliviada com repouso e elevação do pé. Esse padrão é diferente da fascite plantar, mas não é o mesmo que uma dor em repouso de verdade, então o túnel do tarso nem sempre se encaixa no padrão de que esta página trata.',
        'O nervo de Baxter é o primeiro ramo do nervo plantar lateral, um nervo menor perto da parte de dentro do calcanhar. Quando ele é comprimido, causa uma dor aguda ou em queimação na parte interna do calcanhar. A dor muitas vezes piora com a atividade ao longo do dia, mas também pode aparecer em repouso. Uma revisão de 2025 afirma que a compressão do nervo de Baxter pode responder por até 20% dos casos de dor crônica no calcanhar (Tedeschi, 2025).',
        'O nervo comprimido muitas vezes é confundido com fascite plantar, porque os dois causam dor na parte de dentro do calcanhar. A diferença está no tipo de dor: queimação, formigamento ou dormência são sinais de nervo. Exames de imagem e estudos de condução nervosa podem ajudar um profissional de saúde a confirmar o diagnóstico.',
      ],
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
    },
    {
      h2: 'Artrite inflamatória pode causar dor no calcanhar à noite?',
      keyFact: 'Em um acompanhamento de 5 a 15\u00A0anos de 174\u00A0pessoas com fascite plantar, dor nos dois calcanhares foi um preditor significativo de sintomas mais duradouros (Hansen e colegas, 2018).',
      paragraphs: [
        'As espondiloartropatias, um grupo de condições inflamatórias que inclui a espondilite anquilosante e a artrite psoriásica, podem causar entesite, uma inflamação onde um tendão ou ligamento se prende ao osso. O calcanhar é um local comum. A dor muitas vezes aparece nos dois lados, pode estar na inserção do tendão de Aquiles ou embaixo do calcanhar, e vem com rigidez prolongada pela manhã (mais de 30\u00A0minutos) que melhora com o movimento.',
        'Em um acompanhamento de 5 a 15\u00A0anos de 174\u00A0pessoas com fascite plantar, dor nos dois calcanhares foi um preditor significativo de sintomas mais duradouros. Os autores observaram que uma doença inflamatória sistêmica não reconhecida poderia explicar em parte esse achado.',
        'A artrite reumatoide e a gota também podem causar dor no calcanhar. Se a dor é nos dois calcanhares, se a rigidez dura mais de 30\u00A0minutos toda manhã, ou se outras articulações estão envolvidas, um profissional de saúde deve avaliar se há uma causa inflamatória.',
      ],
      cites: [CITE.hansen, CITE.tuHeelPain],
    },
    {
      h2: 'A fascite plantar pode piorar à noite?',
      paragraphs: [
        'A fascite plantar às vezes incomoda à noite depois de um dia longo em pé. Essa é uma dor ligada à atividade, da carga acumulada, e não é a mesma coisa que uma dor que acorda você ou aparece quando você está deitado sem nenhum peso no pé.',
        'Algumas pessoas também sentem desconforto no calcanhar quando o pé cai numa posição apontada durante o sono, puxando a fáscia plantar. É disso que as talas noturnas tratam. A diretriz de 2023 dá às talas noturnas o grau **A**, o seu grau de evidência mais alto, para fascite plantar persistente. Elas seguram o tornozelo num ângulo neutro para a fáscia não encurtar durante a noite.',
        'Se a dor é realmente pior à noite e em repouso, em vez de melhorar com o movimento na manhã seguinte, esse padrão se afasta da fascite plantar e se aproxima das condições acima. Não assuma que é fascite e siga em frente apesar da dor.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Talas noturnas ajudam na dor no calcanhar?',
      keyFact: 'A diretriz de 2023 para dor no calcanhar dá às talas noturnas o grau A, o seu grau de evidência mais alto, para fascite plantar, normalmente usadas por um a três meses (Koc e colegas, 2023).',
      paragraphs: [
        'A tala noturna é uma órtese que segura o tornozelo a 90\u00A0graus enquanto você dorme. A ideia é evitar que a panturrilha e a fáscia plantar encurtem durante a noite, para o primeiro passo da manhã doer menos.',
        'A diretriz de 2023 para dor no calcanhar dá às talas noturnas o grau **A** para fascite plantar. Normalmente elas são recomendadas por 1 a 3\u00A0meses quando a dor nos primeiros passos não melhorou só com alongamentos e exercícios de carga. Elas não tratam dor de nervo, fraturas por estresse nem condições inflamatórias.',
        'Para a maioria das pessoas, a tala noturna não é um dispositivo de longo prazo. É desconfortável dormir com ela, e o benefício é específico para o padrão de rigidez da manhã. Se a sua dor noturna não é do tipo encurta-e-estica, é pouco provável que a tala ajude, e ela pode atrasar o diagnóstico certo.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quais alongamentos e exercícios fazer antes de dormir?',
      paragraphs: [
        'Se a sua dor combina com o padrão da fascite plantar, alongar a panturrilha e a fáscia plantar com cuidado antes de dormir pode diminuir a rigidez da manhã seguinte. O mesmo alongamento específico da fáscia plantar que a diretriz classifica com grau **A** para a dor nos primeiros passos pode ser feito antes de dormir: puxe os dedos para trás com a mão até sentir o arco, segure por 10\u00A0segundos, repita 10\u00A0vezes.',
        'Exercícios de carga, como a elevação de calcanhar, funcionam melhor mais cedo no dia. A lista completa de exercícios está na página de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
        'Se a sua dor não é fascite plantar, ou se você não tem certeza, alongar à noite não é o primeiro passo. O primeiro passo é ter o diagnóstico certo.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar (sentado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz. Um ensaio clínico randomizado de DiGiovanni de 2003 com 101\u00A0pessoas (82 completaram o acompanhamento) concluiu que o alongamento específico do tecido foi superior ao alongamento de panturrilha para a dor nos primeiros passos.' },
          dose: '10\u00A0vezes de 10\u00A0segundos, cada pé',
          how: 'Sente-se na beira da cama. Cruze o pé afetado sobre o joelho oposto. Puxe os dedos para trás, em direção à canela, até sentir um alongamento ao longo do arco. Segure por 10\u00A0segundos. Esse também é o alongamento da manhã que a diretriz recomenda fazer antes de o pé tocar o chão.',
          often: 'Antes de dormir e antes de ficar em pé de manhã',
          feel: 'Um alongamento firme ao longo do arco, não dor forte',
          stop: 'Dor forte no calcanhar, ou qualquer queimação ou formigamento',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir o arco',
          alt: 'Uma figura sentada puxando os dedos de um pé em direção à canela, com a fáscia plantar destacada ao longo do arco',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz para fascite plantar, como parte de um programa de alongamento de panturrilha.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Leve um pé para trás, mantenha a perna de trás esticada e o calcanhar no chão. Incline para a frente até sentir um alongamento na parte de cima da panturrilha. Segure por 30\u00A0segundos. Troque de lado.',
          often: 'Antes de dormir, se a panturrilha tensa contribui para a dor da manhã',
          feel: 'Um alongamento na parte de cima da panturrilha, não no calcanhar',
          stop: 'Dor no calcanhar ou no tendão de Aquiles que não passa em alguns segundos',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, incline para a frente',
          alt: 'Uma figura apoiada na parede com uma perna esticada atrás, com os músculos da panturrilha destacados',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003],
    },
    {
      h2: 'Qual a diferença entre dor no calcanhar à noite e ao acordar?',
      paragraphs: [
        'Dor no calcanhar de manhã e dor no calcanhar à noite parecem parecidas, mas apontam para direções diferentes. A dor da manhã, aquela fisgada forte no primeiro passo que passa depois de alguns minutos andando, é o quadro clássico da fascite plantar. O tecido enrijeceu durante a noite e estica de uma vez quando recebe carga.',
        'A dor noturna, ou seja, a dor que aparece ou piora quando você está na cama sem apoiar o peso, sugere algo além de uma simples rigidez da fáscia. As condições mais ligadas à dor em repouso de verdade são fraturas por estresse, nervos comprimidos, artrite inflamatória e, raramente, tumores ósseos ou infecção.',
        'Se você não tem certeza de qual é o seu padrão, um teste simples: a dor melhora depois de 5 a 10\u00A0minutos andando? Se sim, o padrão da fascite plantar é mais provável, e a página [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) é o melhor ponto de partida. Se não, continue lendo aqui e considere procurar um profissional de saúde.',
      ],
      cites: [CITE.guideline, CITE.tuHeelPain],
    },
  ],
  faq: [
    {
      q: 'Dor no calcanhar à noite é sinal de algo grave?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Pode ser. Dor em repouso ou dor que acorda você é um padrão de alerta. Fraturas por estresse do calcâneo, nervos comprimidos (túnel do tarso ou nervo de Baxter) e artrite inflamatória podem causar dor no calcanhar à noite. Essas condições precisam de um profissional de saúde para o diagnóstico e o acompanhamento. Não assuma que é fascite plantar se a dor não segue o padrão típico dos primeiros passos.',
    },
    {
      q: 'Por que meu calcanhar dói quando eu deito?',
      cites: [CITE.tuHeelPain],
      a: 'Dor no calcanhar ao deitar, sem nenhum peso no pé, pode vir de um nervo comprimido, de uma fratura por estresse ou de inflamação. A fascite plantar às vezes causa desconforto quando o pé fica apontado para baixo na cama, mas isso é rigidez por posição, não uma dor em repouso de verdade. Queimação ou formigamento em repouso apontam para um problema de nervo.',
    },
    {
      q: 'Tala noturna ajuda na dor no calcanhar à noite?',
      cites: [CITE.guideline],
      a: 'As talas noturnas seguram o tornozelo a 90\u00A0graus para evitar que a panturrilha e a fáscia encurtem. A diretriz de 2023 para dor no calcanhar dá a elas o grau **A** para fascite plantar persistente. Elas ajudam no padrão de rigidez da manhã. Não tratam dor de nervo, fraturas por estresse nem condições inflamatórias.',
    },
    {
      q: 'Como saber se é fascite plantar ou fratura por estresse?',
      cites: [CITE.patelStressFracture, CITE.tuHeelPain],
      a: 'A dor da fascite plantar é mais forte no primeiro passo e melhora conforme você anda. A fratura por estresse do calcâneo normalmente piora com a atividade contínua e não melhora com o aquecimento. O teste de compressão, apertar os dois lados do osso do calcanhar, sugere mais uma fratura do que fascite. Muitas vezes é preciso ressonância magnética, porque o raio-X simples pode não mostrar fraturas no início.',
    },
    {
      q: 'Fascite plantar dói à noite?',
      cites: [CITE.guideline],
      a: 'A fascite plantar pode doer à noite depois de um dia longo em pé ou andando. Isso é carga acumulada, não dor em repouso. O pé também cai numa posição apontada durante o sono, o que encurta a fáscia e pode causar desconforto. Se a dor realmente acorda você, esse padrão não é típico da fascite e deve ser avaliado.',
    },
    {
      q: 'O que é a compressão do nervo de Baxter?',
      cites: [CITE.tedeschiBaxter, CITE.tuHeelPain],
      a: 'O nervo de Baxter é o primeiro ramo do nervo plantar lateral. Quando ele é comprimido perto da parte de dentro do calcanhar, causa uma dor aguda ou em queimação, às vezes com dormência. Uma revisão de 2025 afirma que ele pode responder por até 20% da dor crônica no calcanhar (Tedeschi, 2025). Ao contrário da fascite plantar, a dor muitas vezes piora no fim do dia ou em repouso e não alivia com o movimento.',
    },
    {
      q: 'Devo ir ao médico por dor no calcanhar à noite?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Sim. Dor no calcanhar à noite que acorda você, não melhora com o movimento, vem com queimação ou formigamento, ou aparece nos dois calcanhares com rigidez prolongada deve ser avaliada por um profissional de saúde. Esses padrões podem indicar uma fratura por estresse, um nervo comprimido ou uma doença inflamatória que os exercícios sozinhos não resolvem.',
    },
    {
      q: 'O que passar no calcanhar para a dor à noite?',
      a: 'Gelo é o primeiro passo mais comum: uma bolsa de gelo ou uma garrafa de água congelada no ponto dolorido pode aliviar a dor mais superficial. Nada disso trata uma fratura por estresse, um nervo comprimido ou uma artrite inflamatória, as condições mais ligadas à dor noturna de verdade, então uma compressa fria não substitui descobrir a causa.',
    },
    {
      q: 'O que não fazer se o calcanhar dói à noite?',
      cites: [CITE.tuHeelPain, CITE.patelStressFracture],
      a: 'Não assuma que é fascite plantar e continue forçando se a dor não segue o padrão de doer no primeiro passo e depois melhorar. Não ignore uma dor que acorda você, piora com a caminhada contínua, ou vem com queimação, formigamento ou inchaço. Tratar sozinho uma dor em repouso com alongamentos ou talas noturnas pode atrasar o diagnóstico de uma fratura por estresse, de um nervo comprimido ou de uma artrite inflamatória.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor acorda você ou aparece em repouso, sem nenhum peso no pé',
      'a dor piora com a caminhada contínua e não melhora depois de alguns minutos de aquecimento',
      'você sente queimação, formigamento ou dormência no calcanhar ou na sola',
      'o “teste de compressão” (apertar os dois lados do osso do calcanhar ao mesmo tempo) reproduz a dor',
      'os dois calcanhares doem, principalmente com rigidez prolongada pela manhã (mais de 30\u00A0minutos) ou dor em outras articulações',
      'a dor começou depois de um aumento repentino na quilometragem de corrida, de uma troca para superfícies mais duras ou de um trauma',
      'o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'a dor já dura mais de seis semanas e não está melhorando',
    ],
  },
  program: {
    h2: 'Quando o exercício é o passo certo',
    text: 'Se um profissional de saúde confirmou fascite plantar e descartou as condições acima, o exercício é a abordagem com o grau mais alto na diretriz. O Walkito monta um plano diário em torno de carga na panturrilha e na fáscia, começando com alongamentos e avançando para exercícios de força no seu ritmo.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste mede a resistência da panturrilha e o equilíbrio. O Walkito é um programa de exercícios. Ele não faz diagnóstico. Se a sua dor no calcanhar é pior à noite ou em repouso, procure um profissional de saúde antes de começar a pôr carga no pé.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor no calcanhar à noite',
  campaign: 'guide-heel-night-pt',
};
