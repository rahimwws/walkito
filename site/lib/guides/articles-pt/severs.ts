import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Doença de Sever (PT) ──────────────────────────────────────────────
 *
 * Translated from `articles/severs.ts`, written around the Brazilian
 * Portuguese queries «doença de Sever», «apofisite do calcâneo», «dor no
 * calcanhar em criança». Informal «você», addressed to parents. Figures,
 * grades and qualifiers are identical to the English page.
 */

export const SEVERS_PT: Guide = {
  lang: 'pt',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Doença de Sever: dor no calcanhar em crianças',
  description:
    'A doença de Sever causa dor no calcanhar em crianças de 8 a 15 anos. O que diz a evidência sobre calcanheiras, alongamento, carga e quando ir ao médico.',
  h1: 'Doença de Sever: o que é, o que ajuda e quando procurar um profissional de saúde',
  lede:
    'A doença de Sever, também chamada de apofisite do calcâneo, é a causa mais comum de dor no calcanhar em crianças. Ela acontece quando a placa de crescimento na parte de trás do osso do calcanhar fica irritada pelo puxão repetido do tendão de Aquiles, normalmente durante um estirão de crescimento e num esporte com corrida ou saltos. Não é uma doença no sentido comum. Ela passa sozinha quando a placa de crescimento se fecha.',
  intro: [
    'Esta página foi escrita para pais e mães. Ela explica o que está acontecendo no calcanhar, o que a pesquisa diz sobre calcanheiras, alongamento e controle da carga, e quando a dor precisa de um profissional de saúde em vez de repouso.',
    'O Walkito é um app de exercícios feito para adultos com dor no calcanhar e no arco. Ele não foi feito para crianças, e nada nesta página é uma recomendação para usá-lo com uma criança. Se a dor no calcanhar do seu filho não melhora com as medidas abaixo, um médico do esporte pediátrico ou um podólogo é o próximo passo certo.',
  ],
  takeaways: [
    'A doença de Sever afeta crianças de 8 a 15 anos, na maioria das vezes durante um estirão de crescimento, e passa quando a placa de crescimento do calcâneo se fecha, normalmente entre os 12 e os 17 anos (revisão StatPearls, 2024).',
    'Em um ensaio com 101\u00A0crianças, esperar e observar, uma palmilha de elevação do calcanhar e exercícios excêntricos supervisionados reduziram cada um de forma significativa a dor no calcanhar ao longo de três meses, sem diferença entre os três no acompanhamento final (Wiegerinck e colegas, 2016).',
    'Em um ensaio cruzado com 51\u00A0meninos, uma calcanheira reduziu a dor em cerca de 80% em comparação com uma cunha de calcanhar, medida na escala Borg CR-10 (Perhamre e colegas, 2011).',
    'Um ensaio fatorial de 12\u00A0meses com 124\u00A0crianças encontrou uma vantagem relativa da elevação do calcanhar sobre as palmilhas pré-fabricadas aos 2\u00A0meses, mas nenhuma vantagem de qualquer opção aos 12\u00A0meses (James e colegas, 2016).',
    'A placa de crescimento normalmente aparece entre os 7 e os 9 anos e se funde entre os 15 e os 17. Até ela se fechar, é comum a dor voltar, principalmente durante os estirões de crescimento e as temporadas esportivas.',
  ],
  toc: true,
  sections: [
    {
      h2: 'O que é a doença de Sever?',
      paragraphs: [
        'A doença de Sever é uma inflamação da apófise do calcâneo, a placa de crescimento na parte de trás do osso do calcanhar, onde o tendão de Aquiles se prende. Numa criança em crescimento, essa placa é feita de cartilagem, que é mais mole e mais vulnerável ao estresse do que o osso em volta. O tendão de Aquiles e a fáscia plantar puxam essa região. Quando a criança corre, pula ou pratica esporte em superfícies duras, essas forças se repetem centenas de vezes por treino.',
        'Durante um estirão de crescimento, o osso do calcanhar pode crescer mais rápido que os músculos da panturrilha e o tendão de Aquiles, o que aumenta a tensão na placa de crescimento. Essa combinação de crescimento rápido do osso e impacto repetido é o que causa a irritação.',
        'A doença de Sever não é uma fratura e não danifica a placa de crescimento de forma permanente. Ela é classificada como uma apofisite de tração: a placa de crescimento está sendo puxada, não quebrada. Quando a placa de crescimento se fecha e vira osso sólido, a condição não pode voltar.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Em que idade acontece e quem tem?',
      paragraphs: [
        'A doença de Sever afeta crianças entre cerca de 8 e 15 anos. A apófise do calcâneo aparece por volta dos 7 a 9 anos e normalmente se funde entre os 15 e os 17. Os meninos são afetados duas a três vezes mais que as meninas, com início típico por volta dos 12 anos nos meninos e dos 11 nas meninas. Cerca de 60% dos casos envolvem os dois calcanhares.',
        'Ela responde por 2 a 16% das consultas de crianças em clínicas de esporte. Os esportes mais ligados a ela são futebol, basquete, atletismo, corrida cross-country, ginástica e tênis. O padrão é previsível: ela costuma aparecer no começo de uma temporada esportiva ou durante um estirão de crescimento, quando a carga no calcanhar aumenta de repente.',
        'Os fatores de risco incluem:',
        {
          list: [
            'Muita atividade de corrida e salto.',
            'Panturrilha tensa.',
            'Pouca flexibilidade no tornozelo.',
            'IMC alto.',
            'Superfícies de jogo duras.',
            'Calçados ou chuteiras pouco amortecidos.',
          ],
        },
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: 'Como é a dor da doença de Sever?',
      paragraphs: [
        'O principal sintoma é dor na parte de trás ou nas laterais do calcanhar, normalmente durante ou depois da atividade e principalmente depois de correr ou pular. A dor muitas vezes é descrita como a de um hematoma. Raramente há inchaço ou mancha roxa visível. **Apertar as laterais do calcanhar normalmente reproduz a dor.** Esse teste de compressão é a verificação clínica padrão.',
        'Ao contrário da fascite plantar nos adultos, que é pior nos primeiros passos depois do repouso, a dor da doença de Sever costuma piorar com a atividade e não melhora andando. Algumas crianças começam a mancar ou a andar na ponta dos pés para não apoiar o peso no calcanhar.',
        'A dor pode ir de leve, perceptível só durante o esporte, até forte o bastante para impedir a criança de jogar.',
      ],
    },
    {
      h2: 'O que ajuda na doença de Sever? A evidência',
      keyFact: 'Em um ensaio com 101\u00A0crianças, as três abordagens melhoraram a dor, e o grupo da elevação do calcanhar relatou mais satisfação em seis semanas, embora a diferença tenha sumido aos três meses (Wiegerinck e colegas, 2016).',
      paragraphs: [
        'A evidência sobre a doença de Sever é pequena, mas está crescendo. As três principais opções estudadas são o controle da carga (reduzir a atividade que dói), calcanheiras ou palmilhas, e exercícios de alongamento ou fortalecimento. As três mostraram benefício, e **nenhuma se mostrou claramente melhor que as outras no acompanhamento final.**',
        'Em um ensaio de 2016 com 101\u00A0crianças de 8 a 15 anos, Wiegerinck e colegas compararam três abordagens:',
        {
          list: [
            'Esperar e observar com a orientação de parar a atividade que dói.',
            'Uma palmilha de elevação do calcanhar.',
            'Exercícios excêntricos supervisionados.',
          ],
        },
        'Os três grupos melhoraram de forma significativa. Em seis semanas, o grupo da elevação do calcanhar estava mais satisfeito que os outros dois. Aos três meses, não restava nenhuma diferença clinicamente relevante entre os três.',
        'Em outro ensaio fatorial de 2016 com 124\u00A0crianças, James e colegas compararam a elevação do calcanhar com palmilhas pré-fabricadas, e a troca de calçado com não trocar. A elevação do calcanhar teve uma pequena vantagem sobre as palmilhas pré-fabricadas aos 2\u00A0meses no domínio físico do Oxford Ankle Foot Questionnaire. Aos 6 e aos 12\u00A0meses, não restava diferença entre nenhuma combinação.',
        'Em um ensaio cruzado com 51\u00A0meninos, Perhamre e colegas compararam uma calcanheira de 3\u00A0mm com uma cunha de calcanhar de 5\u00A0mm. A calcanheira reduziu a dor em cerca de 80% na escala Borg CR-10, o que sugere que o amortecimento e a absorção do impacto podem importar mais do que simplesmente levantar o calcanhar.',
      ],
      sourceNote:
        'Wiegerinck 2016: 101\u00A0crianças, a dor na EVA melhorou de forma significativa nos 3\u00A0grupos (p<0,005), sem diferença entre os grupos aos 3\u00A0meses. James 2016: 124\u00A0crianças, efeito principal da elevação do calcanhar p=0,04 em 1-2\u00A0meses (só no domínio físico), sem efeito aos 6 ou 12\u00A0meses. Perhamre 2011: 51\u00A0meninos, ensaio cruzado, Borg CR-10 com a calcanheira caiu de 7 para 2.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Controle da carga e mudança de atividade',
      paragraphs: [
        'O controle da carga é a base do cuidado na doença de Sever. **Isso não quer dizer parar todo esporte.** Quer dizer reduzir as atividades que causam a dor, principalmente correr e pular em superfícies duras, até a dor acalmar. A maioria das crianças consegue voltar ao esporte em duas a oito semanas se a carga for controlada cedo.',
        'Medidas práticas incluem:',
        {
          list: [
            'Diminuir os treinos em vez de parar totalmente.',
            'Evitar chuteiras em chão duro quando possível.',
            'Trocar por calçados bem amortecidos.',
            'Pular as partes do treino com mais corrida e salto.',
          ],
        },
        'Alguns treinadores deixam a criança participar dos exercícios de técnica e ficar de fora dos tiros e do condicionamento.',
        'A parte mais difícil do controle da carga é que a doença de Sever costuma voltar. A criança pode melhorar depois de duas semanas de repouso, voltar à atividade completa e a dor reaparecer. Isso não quer dizer que a primeira rodada de repouso falhou. Quer dizer que a placa de crescimento ainda está aberta e ainda é vulnerável. É comum a dor voltar até o fim do crescimento do esqueleto.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Calcanheiras e palmilhas ajudam na doença de Sever?',
      keyFact: 'Um ensaio cruzado com 51\u00A0meninos concluiu que uma calcanheira reduziu a dor em cerca de 80% em comparação com uma cunha de calcanhar, o que sugere que a absorção do impacto importa mais que o ângulo da elevação do calcanhar (Perhamre e colegas, 2011).',
      paragraphs: [
        'As calcanheiras estão entre as intervenções mais práticas para a doença de Sever. Elas amortecem o calcanhar, absorvem o impacto e reduzem os picos de força que chegam à placa de crescimento. O ensaio cruzado de Perhamre concluiu que uma calcanheira reduziu a dor em cerca de 80% em comparação com uma cunha de calcanhar em 51\u00A0meninos, o que sugere que a absorção do impacto no calcanhar importa mais do que simplesmente mudar o ângulo do calcanhar.',
        'No ensaio fatorial de James, a elevação do calcanhar (um tipo de palmilha que levanta o calcanhar) mostrou uma pequena vantagem de curto prazo sobre as palmilhas pré-fabricadas aos 2\u00A0meses, mas nenhuma vantagem aos 12\u00A0meses. Palmilhas sob medida não foram testadas em nenhum desses ensaios.',
        '**Um ponto de partida razoável é uma calcanheira barata, comprada pronta, usada nos dois calçados e durante o esporte.** Se isso não ajudar, um profissional de saúde pode avaliar se uma palmilha sob medida vale o custo.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'Alongar a panturrilha ajuda na doença de Sever?',
      paragraphs: [
        'A panturrilha tensa aumenta o puxão sobre a placa de crescimento, e a panturrilha tensa é um dos fatores de risco reconhecidos da apofisite do calcâneo. Alongar o gastrocnêmio (o músculo mais superficial da panturrilha, alongado com o joelho esticado) e o sóleo (o músculo mais profundo da panturrilha, alongado com o joelho dobrado) é uma recomendação padrão.',
        'No ensaio de Wiegerinck, o grupo de exercício fez um programa de fortalecimento excêntrico da panturrilha supervisionado por fisioterapeuta. Esse grupo melhorou tanto quanto os grupos da elevação do calcanhar e de esperar e observar. Alongamento e fortalecimento leve são seguros e podem ajudar reduzindo a tração sobre a placa de crescimento, mas **a evidência não mostra que eles sejam superiores às calcanheiras ou ao controle da carga sozinhos.**',
        'Os exercícios para crianças com apofisite do calcâneo devem ser supervisionados ou ensinados por um profissional de saúde ou fisioterapeuta. A dose e a progressão dependem da idade da criança, do nível de dor e das exigências do esporte. Uma criança com dor aguda que está mancando precisa primeiro de repouso, não de exercícios.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'O Walkito serve para uma criança com doença de Sever?',
      paragraphs: [
        'Não. O Walkito é um app de exercícios feito para adultos com dor embaixo do calcanhar e dor no arco. As doses dos exercícios, os limites de dor e as regras de progressão foram feitos para corpos adultos. A placa de crescimento de uma criança é uma estrutura fundamentalmente diferente do osso do calcanhar já fundido de um adulto, e as regras de carga são diferentes.',
        'Se o seu filho foi liberado por um profissional de saúde e você procura orientação de exercícios, um médico do esporte pediátrico ou um podólogo pode passar um programa adequado à idade e ao esporte da criança. Os guias para adultos deste site, como [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) e [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/), trabalham os mesmos músculos, mas com doses e limites de adulto.',
      ],
    },
    {
      h2: 'Quanto tempo dura e ela volta?',
      paragraphs: [
        'A doença de Sever normalmente passa em semanas a meses com controle da carga e cuidados de apoio. A maioria das crianças consegue voltar ao esporte em duas a oito semanas. A dor normalmente some de vez quando a placa de crescimento se funde em osso sólido, em geral entre os 12 e os 17 anos, dependendo do sexo da criança e do ritmo de maturação (revisão StatPearls, 2024).',
        'É comum e esperado que a dor volte. Cada estirão de crescimento e cada nova temporada esportiva podem trazer a dor de volta. **A volta da dor não é sinal de que o cuidado falhou.** É sinal de que a placa de crescimento ainda está aberta. Continuar com calcanheiras, bons calçados e alongamento da panturrilha nas temporadas esportivas pode reduzir a intensidade e a frequência das crises.',
        'Nenhum problema de longo prazo foi associado à doença de Sever. Ela não danifica a placa de crescimento nem afeta o formato final do osso.',
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: 'O que é a doença de Sever?',
      a: 'A doença de Sever, também chamada de apofisite do calcâneo, é uma inflamação da placa de crescimento na parte de trás do osso do calcanhar. É a causa mais comum de dor no calcanhar em crianças de 8 a 15 anos, provocada pelo puxão repetido do tendão de Aquiles durante corridas, saltos e estirões de crescimento. Não é uma doença de verdade e passa quando a placa de crescimento se fecha.',
    },
    {
      q: 'Calcanheira ajuda na doença de Sever?',
      cites: [CITE.perhamreHeelCup],
      a: 'Em um ensaio cruzado com 51\u00A0meninos, uma calcanheira reduziu a dor no calcanhar em cerca de 80% em comparação com uma cunha de calcanhar, medida na escala Borg CR-10 (Perhamre 2011). As calcanheiras amortecem a placa de crescimento e absorvem o impacto. Uma calcanheira barata, comprada pronta, usada nos dois calçados e durante o esporte, é um primeiro passo razoável.',
    },
    {
      q: 'Criança com doença de Sever deve parar o esporte?',
      cites: [CITE.wiegerinck],
      a: 'Não necessariamente. Em um ensaio com 101\u00A0crianças, reduzir a atividade que dói foi tão eficaz quanto palmilhas de calcanhar ou exercícios supervisionados aos três meses (Wiegerinck 2016). A maioria dos profissionais recomenda diminuir a corrida e os saltos em vez de parar todo esporte. Exercícios de técnica que evitam impacto repetido no calcanhar normalmente são seguros. A volta ao esporte completo é esperada em duas a oito semanas.',
    },
    {
      q: 'A doença de Sever é permanente?',
      a: 'Não. A doença de Sever passa por completo quando a placa de crescimento do calcâneo se fecha, o que acontece entre os 12 e os 17 anos, dependendo do sexo e da maturação. Nenhuma complicação de longo prazo foi relatada. É comum a dor voltar enquanto a placa de crescimento ainda está aberta, mas cada episódio também passa.',
    },
    {
      q: 'Alongamento ajuda na doença de Sever?',
      cites: [CITE.wiegerinck],
      a: 'O alongamento da panturrilha é uma recomendação padrão, porque a panturrilha tensa aumenta o puxão sobre a placa de crescimento. No ensaio de Wiegerinck de 2016, exercícios excêntricos supervisionados melhoraram a dor tanto quanto uma palmilha de elevação do calcanhar ou esperar e observar. O alongamento ajuda, mas não está comprovado que seja mais rápido que o controle da carga ou as calcanheiras sozinhos.',
    },
    {
      q: 'Qual a diferença entre doença de Sever e fascite plantar?',
      a: 'A doença de Sever afeta a placa de crescimento na parte de trás do calcanhar em crianças, enquanto a fascite plantar é uma irritação da fáscia plantar embaixo do pé, principalmente em adultos. A dor da doença de Sever normalmente fica na parte de trás e nas laterais do calcanhar e piora com a atividade. A dor da fascite plantar normalmente fica embaixo do calcanhar e é pior nos primeiros passos depois do repouso. As duas condições têm causas e caminhos de cuidado diferentes.',
    },
    {
      q: 'O Walkito pode ajudar meu filho com doença de Sever?',
      a: 'O Walkito foi feito para adultos com dor no calcanhar e no arco. As doses dos exercícios, os limites de dor e as regras de progressão foram feitos para corpos adultos, não para a placa de crescimento aberta de uma criança. Um médico do esporte pediátrico ou um podólogo é a fonte certa para o programa de exercícios de uma criança.',
    },
    {
      q: 'O que pode ser confundido com doença de Sever?',
      cites: [CITE.wiegerinck],
      a: 'Irritação do tendão de Aquiles, fratura por estresse do calcâneo e bursite retrocalcânea podem parecer parecidas numa criança em crescimento. Um teste de compressão positivo (dor ao apertar as laterais do calcanhar ao mesmo tempo), idade entre 8 e 15 anos e um aumento recente no treino apontam mais para a doença de Sever. Uma lesão única, inchaço ou dor piorando num ponto específico precisam de um profissional de saúde para descartar uma fratura.',
    },
    {
      q: 'Como fazer bandagem kinesio para doença de Sever?',
      a: 'Não existe ensaio testando a bandagem kinesio para a doença de Sever, então nenhum padrão está comprovado como melhor que calcanheiras ou controle da carga. Alguns profissionais aplicam a fita ao longo do Aquiles e embaixo do calcanhar para reduzir o puxão sobre a placa de crescimento. Se quiser experimentar, peça para um fisioterapeuta ou preparador físico aplicar e mostrar o padrão.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde se',
    bullets: [
      'a dor é forte a ponto de a criança mancar ou se recusar a apoiar o peso no calcanhar',
      'a dor começou depois de uma lesão única ou de uma queda, o que pode indicar uma fratura e não apofisite',
      'há inchaço, vermelhidão ou calor visível em volta do calcanhar',
      'a criança tem febre ou se sente mal junto com a dor no calcanhar',
      'a dor não melhora depois de várias semanas de controle da carga, calcanheiras e repouso',
      'a dor aparece em repouso ou acorda a criança à noite, o que pode indicar algo diferente de apofisite',
      'a dor fica num ponto específico e está piorando, o que pode sugerir uma fratura por estresse e não uma irritação da placa de crescimento',
      'a dor no calcanhar vem com inchaço ou rigidez em outras articulações',
    ],
  },
  program: {
    h2: 'Um recado para pais que procuram um app',
    text: 'O Walkito é um programa de exercícios para adultos com dor no calcanhar e no arco. Ele não foi feito para crianças, e as doses e regras de progressão partem do princípio de um osso do calcanhar já totalmente fundido. Se você é um adulto lendo esta página porque o seu próprio calcanhar dói, os guias para adultos podem ajudar: [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/), [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) ou [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/). Para uma criança, o ponto de partida certo é um profissional de saúde.',
  },
  crumb: 'Doença de Sever',
  campaign: 'guide-severs-pt',
};
