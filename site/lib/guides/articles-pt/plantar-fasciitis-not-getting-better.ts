import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/plantar-fasciitis-not-getting-better.ts
 * (2026-10-19), written around «fascite plantar não melhora» and «fascite
 * plantar crônica». Informal «você». Figures, grades, doses, hedges and CITE
 * keys are identical to the English page after its fact-check. Same media
 * ids. Exercise names follow the other Portuguese PF pages. Link to
 * app-vs-physical-therapy removed (no Portuguese page), words kept.
 * "Clinician" is «profissional de saúde».
 */

export const PF_NOT_BETTER_PT: Guide = {
  lang: 'pt',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantar não melhora? Motivos e o que mudar',
  description:
    'Dor no calcanhar que não passa? Seis motivos comuns para a fascite plantar empacar, o que mudar em cada um e as opções quando só exercício não basta.',
  h1: 'Fascite plantar que não melhora: motivos e o que mudar',
  lede:
    'Quando a fascite plantar não melhora, os motivos mais comuns são um plano só de alongamento, uma carga que nunca aumenta, parar quando a dor alivia ou algo que continua provocando a dor. Às vezes nem é fascite plantar. Raramente é sinal de que nada pode mudar: em um estudo que acompanhou 174\u00A0pessoas por cerca de dez anos, 54% estavam sem sintomas e a maior parte das outras tinha só uma dor leve (Hansen e colegas, 2018).',
  intro: [
    'Esta página é para a fase em que tudo parece travado: você já fez os alongamentos, talvez usou palmilhas, talvez tomou uma injeção, e os primeiros passos ainda doem. Quanto tempo a recuperação costuma levar está em [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/). Aqui vamos passar pelos motivos comuns para a melhora empacar, como cada um aparece, o que mudar e quando fazer uma nova avaliação.',
  ],
  takeaways: [
    'Em 174\u00A0pessoas acompanhadas por uma média de 9,7\u00A0anos desde o início dos sintomas, 54% estavam sem sintomas e 46% ainda tinham algum sintoma, na maioria leve. Quase todas (93%) tomaram uma injeção de corticoide em algum momento, então eram casos mais difíceis (Hansen e colegas, 2018).',
    'Altos e baixos são normais: 31,9% das pessoas que melhoraram tiveram pelo menos uma recaída antes, e 77,5% das que ainda tinham dor já tinham passado por um período sem dor (Hansen e colegas, 2018).',
    'Em um ensaio com 48\u00A0pessoas, a elevação de calcanhar com carga antecipou a melhora em comparação com o alongamento aos três meses. Em um ano, os dois grupos estavam mais ou menos iguais (Rathleff e colegas, 2015).',
    'A diretriz de 2023 para dor no calcanhar dá grau **A** a alongamento, terapia manual, bandagem e tala noturna, e grau **B** a trabalho de força, agulhamento seco e laser de baixa intensidade. Ela recomenda não usar palmilhas sozinhas para alívio a curto prazo (Koc e colegas, 2023).',
    'A mesma diretriz diz para procurar outros diagnósticos quando os sintomas não se acalmam, como artrite inflamatória, atrofia do coxim gorduroso ou um nódulo na fáscia (Koc e colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'A fascite plantar é permanente se não melhora?',
      keyFact: 'Em um grupo de 174\u00A0pessoas acompanhadas por uma média de 9,7\u00A0anos, 54% estavam sem sintomas e 46% ainda tinham algum sintoma, na maioria leve (Hansen e colegas, 2018).',
      paragraphs: [
        '**Para a maioria das pessoas, não.** Uma revisão de 2020 relata que mais de 90% das pessoas melhoram com cuidado sem cirurgia, embora isso possa levar de três a seis meses (Latt e colegas, 2020). A pergunta mais difícil é o que acontece com quem continua travado depois disso.',
        'Os melhores dados de longo prazo vêm de um estudo dinamarquês que acompanhou 174\u00A0pessoas com fascite plantar confirmada por ultrassom. Em média 9,7\u00A0anos depois do início dos sintomas, 54% não tinham sintoma nenhum. Os outros 46% ainda tinham algum, mas a maioria os descreveu como leves. Em média, as pessoas tinham tentado 3,8\u00A0tipos diferentes de cuidado (Hansen e colegas, 2018).',
        'Duas coisas deixam este estudo mais animador do que parece à primeira vista. Era um grupo de clínica especializada, com dor difícil de controlar: 93% tomaram uma injeção de corticoide em algum momento, o que não é um primeiro passo. E “ainda tem sintomas” queria dizer qualquer nota acima de 0 de 10, então inclui pessoas com incômodos leves de vez em quando.',
        'O estudo também mostrou que a fáscia ficou mais fina com o tempo, tivessem as pessoas dor ou não, e só 24% do grupo sem dor tinha uma fáscia com aparência totalmente normal no ultrassom. Então um exame que ainda parece alterado não significa que você não possa se sentir melhor. Para a linha do tempo completa, veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/).',
      ],
      sourceNote:
        'Hansen 2018: 269 diagnosticados de 2001 a 2011, 174 participaram (91 mulheres, 83 homens), 137 fizeram um ultrassom de acompanhamento. Sem sintomas = 0 em todas as escalas de dor (repouso, caminhada, corrida, pressão). A espessura da fáscia caiu de 6,9\u00A0mm e 6,7\u00A0mm para 4,3\u00A0mm nos dois grupos. Mulheres e pessoas com dor nos dois calcanhares tiveram pior evolução (ambos P < 0,01). Os autores observam que o estudo não permite julgar quais cuidados funcionaram.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Qual motivo combina com você?',
      paragraphs: [
        'A maioria dos casos travados se encaixa em um ou dois destes padrões. Leia a coluna do meio, veja qual parece com você e vá para a seção correspondente.',
      ],
      table: {
        caption: 'Motivos comuns para a fascite plantar empacar',
        head: ['Motivo', 'Como aparece', 'O que mudar'],
        rows: [
          ['Só alongamento', 'Semanas alongando, primeiros passos ainda doem', 'Acrescente força na panturrilha'],
          ['A carga nunca sobe', 'As mesmas elevações fáceis há meses', 'Suba aos poucos, mantenha pesado'],
          ['Parou cedo demais', 'Melhorou, parou, voltou', 'Mantenha uma dose mais leve'],
          ['Crise, e depois parou', 'Um dia ruim, uma semana parado', 'Diminua, não abandone'],
          ['Gatilhos constantes', 'Turnos longos, corridas ou tornozelo rígido', 'Mude a carga que der'],
          ['Não é fascite plantar', 'Dor à noite, formigamento, os dois calcanhares', 'Faça nova avaliação'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Você está só alongando?',
      keyFact: 'Em um ensaio com 48\u00A0pessoas, o grupo da elevação de calcanhar teve um resultado 29\u00A0pontos melhor no Foot Function Index do que o grupo do alongamento aos três meses (Rathleff e colegas, 2015).',
      paragraphs: [
        '**Vale manter o alongamento, mas sozinho ele pode não bastar.** A diretriz de 2023 para dor no calcanhar dá ao alongamento da fáscia plantar e da panturrilha o grau **A**, o mais alto. Ela também dá ao trabalho de força para o pé e o tornozelo o grau **B** (Koc e colegas, 2023). Muitos planos caseiros só incluem a primeira parte.',
        'Em um ensaio com 48\u00A0pessoas, um grupo fez elevações de calcanhar lentas e pesadas com uma toalha embaixo dos dedos, e o outro alongou a fáscia plantar. Aos três meses, o grupo da elevação de calcanhar teve um resultado 29\u00A0pontos melhor no Foot Function Index. Em um ano, os dois grupos estavam mais ou menos iguais (Rathleff e colegas, 2015). Ou seja, trocar o alongamento pela elevação de calcanhar não mudou onde as pessoas chegaram em um ano, mas fez com que chegassem lá mais cedo.',
        'Como aparece: você alongou direitinho por um mês ou mais, o alongamento ficou mais fácil, mas os primeiros passos do dia ainda doem forte. O que mudar: mantenha os alongamentos e acrescente o trabalho de panturrilha da próxima seção. [Elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) explica em detalhe a rotina do ensaio.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'A carga já aumentou alguma vez?',
      keyFact: 'Em um ensaio com 70\u00A0pessoas fazendo elevação de calcanhar por três meses, só 4 chegaram a um ponto em que sentiam não precisar de mais nenhum cuidado (Riel e colegas, 2019).',
      paragraphs: [
        '**O trabalho de força só ajuda se ficar mais difícil com o tempo.** Dez elevações de calcanhar fáceis com os dois pés, feitas por meses, são um aquecimento, não uma carga. Os degraus abaixo vão dos dois pés para um pé só e depois acrescentam peso. A rotina do ensaio era elevação de calcanhar em uma perna com uma toalha embaixo dos dedos, em ritmo lento e com uma mochila como peso extra (Rathleff e colegas, 2015).',
        'O jeito de definir a carga importa menos do que se imagina. Um ensaio de 2019 deu a 70\u00A0pessoas ou um plano fixo de elevação de calcanhar, degrau por degrau, ou a orientação de escolher as próprias séries e o próprio peso, o mais pesado que conseguissem. Os dois grupos melhoraram de forma parecida. Escolher a própria dose não levou as pessoas a fazer mais (Riel e colegas, 2019).',
        'O mesmo ensaio ajuda a ter os pés no chão: depois de três meses de elevação de calcanhar, 44 das 65\u00A0pessoas que responderam disseram estar melhor, mas só 4 de 70 sentiam não precisar de mais nenhum cuidado. Se aos três meses você está melhor, mas ainda não terminou, você está no grupo comum, não no grupo que falhou.',
        'O que mudar: suba um degrau quando o atual parecer fácil em duas sessões seguidas e a sua manhã seguinte não estiver pior. Os cartões abaixo são os degraus, em ordem.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria das sessões',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão.',
          stop: 'Dor forte no calcanhar que continua depois que você solta',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha, quase sem carga no calcanhar. Comece por aqui se a elevação em pé doer.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando juntas',
          how: 'Fique em pé sobre os dois pés, suba reto por cima dos dedões e desça devagar. Os dois pés dividem a carga enquanto a panturrilha se acostuma com o trabalho.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com os dois pés',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar com os dois pés: suba reto por cima dos dedões e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos dois pés, com a panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar sustentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, os dois pés',
          often: 'Dias de força',
          feel: 'As panturrilhas trabalhando para ficar paradas',
          how: 'Suba na ponta dos dois pés e fique parado lá em cima. Não deixe afundar. Um degrau útil nos dias em que as repetições com movimento parecem demais.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sustentada',
          media: 'heel_raise_hold',
          caption: 'Elevação de calcanhar sustentada: suba e fique parado lá em cima',
          alt: 'Uma figura parada na ponta dos dois pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: { level: 'moderate', why: 'É a rotina de um ensaio com 48\u00A0pessoas, e a diretriz de 2023 dá ao trabalho de força o grau B.' },
          dose: '4\u00A0séries de 10, cada perna, com peso extra',
          often: 'Dias de força',
          feel: 'Trabalho pesado na panturrilha',
          how: 'Fique em um pé só sobre um degrau, com uma toalha enrolada embaixo dos dedos. Leve três segundos para subir, segure dois lá em cima e leve três para descer. Neste nível, acrescente peso, como uma mochila. É a toalha que faz este exercício trabalhar a fáscia plantar, e não só a panturrilha.',
          stop: 'Dor no calcanhar acima de 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com toalha',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos subindo, dois lá em cima, três descendo',
          alt: 'Uma figura subindo na ponta do pé sobre um degrau com uma toalha enrolada, com as panturrilhas destacadas',
        },
      ],
      sourceNote:
        'Riel 2019: 70\u00A0pessoas com fasciopatia plantar no ultrassom, elevação de calcanhar em pé por três meses. Dor no Foot Health Status Questionnaire: diferença média ajustada de 6,9\u00A0pontos, IC de 95% de menos 15,5 a mais 1,7, sem significância. Melhora na Global Rating of Change: 24 de 33 (dose escolhida pela pessoa) e 20 de 32 (plano fixo). Patient Acceptable Symptom State: 3 de 35 e 1 de 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: 'Você parou quando começou a melhorar, ou depois de uma crise?',
      keyFact: 'Em um estudo de longo prazo, 31,9% das pessoas que ficaram sem sintomas tiveram pelo menos uma recaída antes (Hansen e colegas, 2018).',
      paragraphs: [
        '**As recaídas fazem parte do caminho normal, não são prova de que nada funciona.** No estudo dinamarquês de longo prazo, 31,9% das pessoas que acabaram sem sintomas tiveram pelo menos uma recaída antes de a dor ir embora de vez. Entre as que ainda tinham sintomas, 77,5% já tinham passado por um período sem dor (Hansen e colegas, 2018).',
        'Daí saem dois padrões:',
        {
          list: [
            '**Parar cedo demais.** A dor alivia, os exercícios ficam de lado e, algumas semanas depois, o calcanhar está de volta ao ponto de partida. O que mudar: quando as manhãs estiverem boas, passe para uma dose de manutenção mais leve, por exemplo menos dias de força, em vez de parar.',
            '**Crise, e depois parar.** Um dia longo em pé ou um par de calçados novo provoca uma manhã ruim, e você para tudo por uma semana. O que mudar: volte um degrau nos cartões acima e continue. Parar de vez faz você perder a força que construiu.',
          ],
        },
        'Uma regra simples ajuda a diferenciar uma crise de um retrocesso: dor durante o exercício de até cerca de 6 de 10 é aceitável se ela passa e a sua manhã seguinte não fica pior. É a regra que o Walkito usa. Ela não foi testada sozinha como regra, então, se as suas manhãs pioram semana após semana, procure um profissional de saúde.',
        'Nenhum estudo testou por quanto tempo manter uma dose de manutenção depois que a fascite plantar se acalma. A diretriz de 2023 não define uma data final para o trabalho de força (Koc e colegas, 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Alguma coisa ainda está provocando a dor?',
      keyFact: 'Um tornozelo que dobrava 0\u00A0grau ou menos aumentou cerca de 23\u00A0vezes a chance de fascite plantar em comparação com um tornozelo que dobrava mais de 10\u00A0graus, em um estudo com 50\u00A0casos e 100\u00A0controles (Riddle e colegas, 2003).',
      paragraphs: [
        '**A carga que você coloca no pé no resto do dia pode superar o efeito dos exercícios.** Em um estudo pareado com 50\u00A0pessoas com fascite plantar e 100 sem, um tornozelo rígido foi o fator de risco mais forte: um tornozelo que dobrava 0\u00A0grau ou menos aumentou a chance 23,3\u00A0vezes. Um índice de massa corporal acima de 30 aumentou cerca de 5,6\u00A0vezes, e passar a maior parte do dia de trabalho em pé, cerca de 3,6\u00A0vezes (Riddle e colegas, 2003).',
        'A diretriz de 2023 lista os mesmos fatores, mais a corrida, e acrescenta que superfícies duras que absorvem mal o impacto tornam o tempo em pé e andando no trabalho um risco maior (Koc e colegas, 2023). Alguns desses fatores você consegue mudar, outros não:',
        {
          list: [
            '**Um tornozelo rígido ou uma panturrilha encurtada.** Mantenha os alongamentos da panturrilha e do sóleo; [panturrilha tensa](/pt/panturrilha-tensa/) traz o conjunto completo.',
            '**Turnos longos em piso duro.** Calçados com amortecimento, um tapete onde você fica em pé e pausas sentado quando der. Veja [dor nos pés de ficar em pé](/pt/dor-nos-pes-ficar-em-pe/).',
            '**Volume de caminhada ou corrida.** Reduza a distância ou o ritmo em vez de parar. Se os primeiros passos da manhã seguinte estiverem claramente piores, foi demais. Veja [caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/).',
            '**Peso corporal.** O peso não esteve ligado a quanto tempo os sintomas duraram no estudo de longo prazo (Hansen e colegas, 2018), então não é questão de culpa. [Peso e fascite plantar](/pt/peso-e-fascite-plantar/) mostra o que se sabe.',
          ],
        },
        'As palmilhas podem tirar um pouco da pressão do calcanhar enquanto você ganha força, mas a diretriz recomenda não depender só delas para alívio a curto prazo (grau **B**) e as aceita junto com outros cuidados (grau **C**). [Palmilhas ou exercícios](/pt/palmilhas-ou-exercicios/) compara os dois.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Pode ser outra coisa que não fascite plantar?',
      paragraphs: [
        '**Pode, e a diretriz orienta os profissionais de saúde a verificar isso quando os sintomas não se acalmam.** A diretriz de 2023 para dor no calcanhar diz que eles devem procurar outros diagnósticos, incluindo artrite inflamatória da coluna e das articulações (espondiloartrite), afinamento do coxim gorduroso do calcanhar e um nódulo benigno na fáscia (fibroma plantar), quando o quadro não se encaixa ou os sintomas não estão se resolvendo com o cuidado (Koc e colegas, 2023).',
        'Uma revisão de 2020 lista outras causas de dor embaixo do calcanhar, incluindo um nervo comprimido (síndrome do túnel do tarso ou nervo de Baxter), uma fratura por estresse do calcâneo, uma ruptura da fáscia e artrite inflamatória (Latt e colegas, 2020). Pistas que apontam para longe da fascite plantar:',
        {
          list: [
            '**Queimação, formigamento ou dormência**, ou dor que se espalha para o arco ou os dedos: possível problema de nervo.',
            '**Dor que aumenta quanto mais você anda**, em vez de aliviar depois dos primeiros passos, e que dói quando você aperta os lados do calcanhar: veja [fascite plantar ou fratura por estresse](/pt/fascite-plantar-ou-fratura-por-estresse/).',
            '**Dor atrás do calcanhar**, e não embaixo: veja [fascite plantar ou tendinite de Aquiles](/pt/fascite-plantar-ou-tendinite-de-aquiles/).',
            '**Uma dor profunda, parecida com um hematoma, no meio da almofada do calcanhar**, pior em piso duro e descalço: veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
            '**Dor à noite ou em repouso**: veja [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/).',
            '**Os dois calcanhares, com rigidez longa de manhã ou outras articulações doloridas.** No estudo de longo prazo, dor nos dois calcanhares veio junto com uma recuperação mais lenta, e os autores sugeriram que ela poderia indicar uma condição inflamatória que não foi investigada (Hansen e colegas, 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: 'O que a diretriz lista quando só o exercício não ajudou?',
      keyFact: 'Em um ensaio com 180\u00A0pessoas, uma injeção de corticoide somada à elevação de calcanhar, à orientação e a uma calcanheira não fez uma diferença que os pacientes percebessem em nenhum momento até um ano (Riel e colegas, 2023).',
      paragraphs: [
        'Estas são opções para conversar com um profissional de saúde, não coisas para tentar em casa. Todos os graus são da diretriz de 2023 para dor no calcanhar, em que **A** é a recomendação mais forte (Koc e colegas, 2023):',
        {
          list: [
            '**Terapia manual** (trabalho com as mãos nas articulações e nos tecidos moles): **A**.',
            '**Bandagem**, rígida ou elástica, junto com outros cuidados, para alívio a curto prazo: **A**. Veja [bandagem para fascite plantar](/pt/bandagem-fascite-plantar/).',
            '**Tala noturna por um a três meses**, se os primeiros passos continuam doendo: **A**. Veja [tala noturna](/pt/tala-noturna-fascite-plantar/).',
            '**Agulhamento seco** dos músculos da panturrilha e do pé: **B**.',
            '**Laser de baixa intensidade** como parte de um programa de reabilitação, para dor a curto prazo: **B**.',
            '**Palmilhas junto com outros cuidados**: **C**.',
          ],
        },
        'A diretriz recomenda **contra** usar palmilhas como a única coisa que você faz para alívio a curto prazo (**B**) e contra somar ultrassom terapêutico ao alongamento (**A**). A versão de 2023 não faz recomendação sobre terapia por ondas de choque.',
        '**Injeções de corticoide** aliviam a dor de algumas pessoas a curto prazo, mas a evidência para acrescentá-las é fraca. Em um ensaio com 180\u00A0pessoas, todos receberam orientação e uma calcanheira; um grupo acrescentou elevação de calcanhar e outro, elevação de calcanhar mais uma injeção. As diferenças entre os grupos nunca chegaram a um tamanho que os pacientes percebessem, em nenhum momento até um ano (Riel e colegas, 2023). O mesmo ensaio não encontrou um benefício extra claro ao acrescentar a elevação de calcanhar, o que lembra que nenhum acréscimo sozinho funciona com certeza.',
        'Uma revisão de 2020 diz que pessoas que ainda têm dor depois de pelo menos seis meses de cuidado sem cirurgia podem receber opções minimamente invasivas, como injeções ou ondas de choque, ou em alguns casos cirurgia (Latt e colegas, 2020). Essas são decisões para você e um especialista. Um fisioterapeuta também pode conferir pessoalmente a sua execução e a sua carga: veja a comparação entre app e fisioterapia.',
      ],
      sourceNote:
        'Riel 2023: orientação + calcanheira (n = 62), mais elevação de calcanhar pesada e lenta com dose escolhida pela pessoa (n = 59), mais uma injeção de triancinolona guiada por ultrassom (n = 59). Dor no Foot Health Status Questionnaire, diferença mínima importante de 14,1\u00A0pontos. Grupo da injeção vs só orientação: diferença ajustada de 9,1\u00A0pontos aos três meses (p = 0,023) e 5,2\u00A0pontos ao longo de 52\u00A0semanas (p = 0,045), abaixo da diferença mínima importante. Nenhuma diferença significativa entre exercício e exercício mais injeção, nem entre orientação e exercício, em nenhum momento.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: 'Quando fazer uma nova avaliação?',
      paragraphs: [
        '**Faça uma nova avaliação se alguns meses de exercício constante e progressivo não mexeram na sua dor da manhã, ou antes disso se o padrão mudar.** Uma revisão de 2020 diz que os exames de imagem ficam reservados para casos fora do comum e para quem não responde ao cuidado de primeira linha (Latt e colegas, 2020), e a diretriz diz que os profissionais de saúde devem procurar outros diagnósticos quando os sintomas não estão se resolvendo (Koc e colegas, 2023).',
        'Para aproveitar melhor a consulta, leve:',
        {
          list: [
            'As suas notas de dor da manhã (primeiros passos, de 0 a 10) das últimas semanas, para a tendência ficar clara.',
            'O que você fez, com que frequência e com quanto peso: “elevação de calcanhar” diz menos a um profissional de saúde do que “uma perna, 4\u00A0séries de 10, com mochila”.',
            'O que piora: um turno, uma corrida, calçados novos, piso descalço.',
            'Qualquer coisa que não combine com fascite plantar: dor à noite, formigamento, os dois calcanhares, outras articulações doloridas.',
          ],
        },
        'Pergunte se o diagnóstico ainda faz sentido, se um exame de imagem mudaria alguma coisa e quais das opções da diretriz acima combinam com você.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Por que a minha fascite plantar não melhora?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Os motivos comuns são um plano só de alongamento, sem força na panturrilha, uma carga que nunca fica mais difícil, parar quando a dor alivia ou depois de uma crise, e a carga do dia a dia, como turnos longos ou corridas. Às vezes não é fascite plantar. A diretriz de 2023 dá grau A ao alongamento e grau B ao trabalho de força, então a maioria dos planos precisa dos dois.',
    },
    {
      q: 'A fascite plantar é permanente?',
      cites: [CITE.hansen, CITE.latt],
      a: 'Normalmente não. Cerca de 90% das pessoas melhoram com cuidado sem cirurgia. Em um grupo difícil de 174\u00A0pessoas acompanhadas por uma média de 9,7\u00A0anos, 54% estavam sem sintomas e a maior parte das outras tinha só sintomas leves. Algumas pessoas mantêm sintomas leves por anos, então vale fazer uma nova avaliação se você estiver travado.',
    },
    {
      q: 'A fascite plantar crônica ainda pode melhorar?',
      cites: [CITE.hansen],
      a: 'Pode. Em um estudo de longo prazo, as pessoas continuaram ficando sem sintomas bem depois do primeiro ano, e 77,5% das que ainda tinham dor já tinham passado por um período sem dor. A fáscia também ficou mais fina com o tempo, com ou sem dor. Lento não é o mesmo que travado para sempre.',
    },
    {
      q: 'Devo parar os exercícios se a dor no calcanhar piorar?',
      cites: [CITE.hansen],
      a: 'Normalmente não de vez. Volte um degrau, por exemplo da elevação de calcanhar em uma perna para a elevação com as duas, e continue. Recaídas são comuns: 31,9% das pessoas que ficaram sem sintomas em um estudo de longo prazo tiveram pelo menos uma antes. Procure um profissional de saúde se as manhãs continuarem piorando semana após semana.',
    },
    {
      q: 'Só alongamento basta para a fascite plantar?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Para algumas pessoas basta, mas acrescentar força na panturrilha pode ajudar mais cedo. A diretriz de 2023 dá grau A ao alongamento e grau B ao trabalho de força. Em um ensaio com 48\u00A0pessoas, a elevação de calcanhar pesada deu um resultado melhor que o alongamento aos três meses, embora os grupos estivessem mais ou menos iguais em um ano.',
    },
    {
      q: 'Injeção de corticoide ajuda na fascite plantar que não passa?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'Ela pode aliviar a dor por um tempo, mas o benefício extra parece pequeno. Em um ensaio com 180\u00A0pessoas, somar uma injeção à elevação de calcanhar, à orientação e a uma calcanheira não fez uma diferença que os pacientes percebessem em nenhum momento até um ano. Se ela serve para você é uma decisão do seu médico.',
    },
    {
      q: 'Quando a cirurgia é considerada para a fascite plantar?',
      cites: [CITE.latt],
      a: 'Só depois de um longo período de cuidado sem cirurgia. Uma revisão de 2020 diz que a cirurgia é considerada quando a dor e as limitações continuam apesar de pelo menos seis meses de cuidado sem cirurgia, e que opções minimamente invasivas, como injeções ou ondas de choque, também podem ser consideradas nessa fase. Um especialista em pé e tornozelo toma essa decisão com você.',
    },
    {
      q: 'A minha dor no calcanhar pode ser outra coisa que não fascite plantar?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Pode. A diretriz de 2023 orienta os profissionais de saúde a procurar outras causas quando os sintomas não se acalmam, como artrite inflamatória ou afinamento do coxim gorduroso do calcanhar. Outras causas incluem um nervo comprimido e uma fratura por estresse do calcâneo. Queimação, formigamento, dor à noite ou dor que aumenta com a caminhada são motivos para fazer uma avaliação.',
    },
    {
      q: 'Palmilhas ajudam se a fascite plantar não está melhorando?',
      cites: [CITE.guideline],
      a: 'Elas podem ajudar como parte de um plano mais amplo. A diretriz de 2023 recomenda não usar palmilhas como único recurso para alívio a curto prazo (grau B) e diz que elas podem ser usadas junto com outros cuidados (grau C). Combine com alongamento e força na panturrilha em vez de depender só delas.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor está piorando semana após semana, e não só ficando igual',
      'ela começou depois de uma queda, um salto ou um estalo repentino, ou você não consegue apoiar o peso no pé',
      'dói quando você aperta os lados do calcanhar, ou a dor aumenta quanto mais você anda',
      'você sente queimação, formigamento ou dormência no calcanhar, no arco ou nos dedos',
      'a dor acorda você à noite ou aparece em repouso',
      'os dois calcanhares doem com rigidez longa de manhã, ou outras articulações estão doloridas ou inchadas',
      'o calcanhar está vermelho, quente ou inchado, ou você está com febre',
      'você tem diabetes, sensibilidade reduzida nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Ele não consegue dizer por que o seu calcanhar está travado e não substitui a avaliação de um profissional de saúde, mas cobre as partes que muitas vezes ficam de fora: trabalho de força na panturrilha que fica mais difícil com o tempo e uma sessão mais leve nas manhãs ruins, em vez de uma semana parado.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar de manhã, e o plano se ajusta a ela. A cada 14\u00A0dias, um teste curto verifica a força da panturrilha, a sustentação do arco e o equilíbrio, para você ver se as coisas estão andando. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Fascite plantar que não melhora',
  campaign: 'guide-plantar-fasciitis-not-getting-better-pt',
};
