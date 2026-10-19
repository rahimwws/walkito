import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/foot-exercises-for-runners.ts (2026-10-18),
 * written around «esercizi piedi runner» and «esercizi per i piedi corsa».
 * Informal «tu». Figures, doses, hedges and sources are identical to the
 * English page after its fact-check. Same CITE keys and media ids. Exercise
 * names follow lib/guides/it.ts. /heel-pain-runners/ has no Italian version,
 * so those links are removed and the words kept.
 */

export const RUNNERS_FOOT_EXERCISES_IT: Guide = {
  lang: 'it',
  page: 'runnersFootExercises',
  mainSource: CITE.taddeiRRI,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Esercizi per i piedi per runner: routine, dosi e studi',
  description:
    'Esercizi per i piedi per chi corre: una routine breve per arco, polpacci, dita ed equilibrio, con dosi, valori di riferimento e cosa dicono gli studi.',
  h1: 'Esercizi per i piedi per runner: una routine breve e cosa dicono gli studi',
  lede:
    'Una buona routine per i piedi di chi corre allena quattro cose: i piccoli muscoli dell’arco (il piede corto), la resistenza del polpaccio e del soleo (i sollevamenti sulle punte), la forza delle dita e l’equilibrio su una gamba. Richiede circa 10\u00A0minuti, da due a cinque volte a settimana, dopo una corsa facile o in un giorno di riposo. In uno studio su 118\u00A0runner amatoriali, chi non seguiva un programma per i muscoli del piede aveva una probabilità 2,42\u00A0volte più alta di infortunarsi correndo nell’arco di 12\u00A0mesi (Taddei e colleghi, 2020). È un solo studio, quindi leggilo come un risultato promettente, non come una certezza.',
  intro: [
    'Questa pagina è per i runner che non sono infortunati, o che hanno un fastidio che permette loro di continuare a correre. Se il tallone ti fa già male quando corri, occupati prima del dolore al tallone. Per la progressione completa di ogni esercizio per il piede, da seduto fino a una gamba sola, vedi [esercizi di rinforzo del piede](/it/esercizi-rinforzo-piede/).',
  ],
  toc: true,
  takeaways: [
    'In uno studio del 2020 su 118\u00A0runner amatoriali di lunga distanza, il gruppo senza allenamento dei muscoli del piede aveva una probabilità 2,42\u00A0volte più alta di un infortunio da corsa nell’arco di 12\u00A0mesi. L’effetto è comparso tra il quarto e l’ottavo mese circa di allenamento (Taddei e colleghi, 2020).',
    'In uno studio del 2019 su 57\u00A0runner, circa due mesi di esercizi per il piede fatti almeno cinque volte a settimana hanno reso più grandi e più forti tutti i muscoli del piede misurati (Ridge e colleghi, 2019).',
    'Gli adulti sani fanno in mediana circa 23 o 24 sollevamenti sulle punte su una gamba per lato, e 25 è stato proposto come valore di riferimento normale (Hebert-Losier e colleghi, 2017; Lunsford e Perry, 1995).',
    'Un programma di forza da seguire in autonomia per anche, cosce e core, in 720\u00A0persone alla prima maratona, non ha ridotto gli infortuni da sovraccarico che impedivano di finire la gara: 7,1% contro 7,3% (Toresdahl e colleghi, 2020). In quello studio il lavoro di forza da solo non ha prevenuto gli infortuni.',
    'Negli studi sui runner di lunga distanza, tra il 19,4% e il 79,3% ha avuto un infortunio alle gambe, e un infortunio precedente era uno dei fattori di rischio più chiari (van Gent e colleghi, 2007).',
  ],
  sections: [
    {
      h2: 'Gli esercizi per i piedi aiutano i runner a evitare gli infortuni?',
      keyFact: 'In uno studio del 2020 su 118\u00A0runner amatoriali, chi non allenava i muscoli del piede aveva una probabilità 2,42\u00A0volte più alta di infortunarsi nell’arco di 12\u00A0mesi (Taddei e colleghi).',
      paragraphs: [
        '**Un buono studio dice di sì, ma resta un solo studio.** Nel 2020 Taddei e colleghi, in Brasile, hanno diviso a caso 118\u00A0runner amatoriali di lunga distanza in un gruppo con allenamento dei muscoli del piede (57\u00A0runner) e un gruppo di controllo (61\u00A0runner). Il primo gruppo ha fatto circa due mesi di allenamento supervisionato dei muscoli di piede e caviglia, poi ha continuato con una supervisione a distanza. Tutti hanno registrato ogni settimana le corse e gli eventuali infortuni per un anno.',
        'Nell’arco di 12\u00A0mesi, il gruppo di controllo aveva una probabilità 2,42\u00A0volte più alta di un infortunio da corsa. La differenza è comparsa tra il quarto e l’ottavo mese di allenamento, non nelle prime settimane. I runner la cui forza del piede era aumentata di più arrivavano più tardi a un infortunio.',
        'Uno studio precedente e più piccolo dello stesso gruppo, con 28\u00A0runner, ha trovato che circa due mesi di allenamento del piede facevano crescere i piccoli muscoli del piede e aumentavano la forza di spinta durante la corsa (Taddei e colleghi, 2020).',
        'Cosa non ci dice: entrambi gli studi vengono da un solo gruppo di ricerca, su runner amatoriali esperti che all’inizio non erano infortunati. Non includevano principianti né runner che avevano già dolore, quindi non sappiamo se i risultati valgano anche per loro.',
      ],
      sourceNote: 'Taddei 2020 (Am J Sports Med): il gruppo di controllo aveva una probabilità 2,42\u00A0volte più alta di un infortunio legato alla corsa (IC 95% da 1,98 a 3,62), p = 0,035, studio randomizzato in singolo cieco, follow-up di 12\u00A0mesi. Taddei 2020 (Phys Ther Sport): studio randomizzato pilota in singolo cieco, 28\u00A0runner, volume muscolare misurato con risonanza magnetica, dopo circa due mesi.',
      cites: [CITE.taddeiRRI, CITE.taddeiMuscle],
    },
    {
      h2: 'Cosa dovrebbe includere la routine per i piedi di un runner?',
      paragraphs: [
        'Quattro parti, ognuna con uno o due esercizi. Le dosi qui sotto sono le dosi di partenza di Walkito. Falli a piedi nudi, e fermati per quel giorno se il dolore supera 6 su 10.',
        {
          list: [
            '**Muscoli del piede:** il [piede corto](/it/esercizi/piede-corto/), prima in piedi e poi su una gamba. Allena i piccoli muscoli che sostengono l’arco.',
            '**Polpaccio e soleo:** sollevamenti sulle punte con il ginocchio teso per il polpaccio, e con il ginocchio piegato per il soleo, il muscolo più profondo del polpaccio.',
            '**Dita:** il sollevamento dell’alluce. L’alluce è l’ultima parte del piede a staccarsi da terra quando spingi.',
            '**Equilibrio:** l’equilibrio su una gamba, perché la corsa è una serie di atterraggi su una gamba sola.',
          ],
        },
        'Segue l’idea del programma di Taddei, che allenava prima i piccoli muscoli del piede e poi li usava in piedi e sotto carico. Non è una copia di quel programma. Per altro lavoro sulle dita, vedi [esercizi di rinforzo per le dita dei piedi](/it/esercizi-rinforzo-dita-piedi/).',
      ],
      exercises: [
        {
          name: 'Piede corto, in piedi',
          evidence: { level: 'moderate', why: 'Faceva parte del programma per i muscoli del piede negli studi sui runner (Taddei 2020). Non è stato testato da solo sugli infortuni.' },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, entrambi i piedi',
          often: 'Da 2 a 5\u00A0giorni a settimana',
          feel: 'Una tensione sotto l’arco, con le dita rilassate',
          how: 'Stai in piedi con il peso su entrambi i piedi. Senza arricciare le dita, tira l’avampiede verso il tallone così l’arco si alza un po’. Tieni, poi rilassa. Se le dita fanno presa sul pavimento, riduci lo sforzo.',
          stop: 'Un crampo che non passa, o dolore sopra 6 su 10',
          media: 'short_foot_double',
          caption: 'Piede corto, in piedi: l’arco si alza, le dita restano piatte',
          alt: 'Due piedi nudi a terra con gli archi che si alzano e le dita piatte',
        },
        {
          name: 'Piede corto, su una gamba',
          evidence: { level: 'early', why: 'Il passaggio su una gamba della progressione del piede corto. Non è stato testato da solo nei runner.' },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          often: 'Quando la versione in piedi diventa facile',
          feel: 'L’arco che lavora mentre stai in equilibrio',
          how: 'Stai su un piede, con una mano vicino al muro. Alza l’arco come sopra e tienilo mentre stai in equilibrio. È più vicino a quello che fa il piede quando atterri.',
          stop: 'Dolore sopra 6 su 10, o perdi l’equilibrio a ogni ripetizione',
          media: 'short_foot_single',
          caption: 'Piede corto su una gamba: tieni l’arco alzato mentre stai in equilibrio',
          alt: 'Una figura in piedi su un solo piede nudo con l’arco alzato',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'early', why: 'La resistenza del polpaccio era più bassa negli atleti con periostite tibiale (Madeley 2007). Non è stato testato come prevenzione degli infortuni nei runner.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Da 2 a 3\u00A0giorni a settimana, mai due giorni di fila',
          feel: 'Lavoro nei polpacci e sotto gli avampiedi',
          how: 'Tieniti al muro. Sali sugli avampiedi in circa 3\u00A0secondi, con il peso verso l’alluce, poi scendi in 3\u00A0secondi. Quando diventa facile, passa a una gamba. Altro nella pagina sui [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/).',
          stop: 'Dolore al tallone o all’Achille sopra 6 su 10, o peggiore la mattina dopo',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: sali piano, scendi piano, peso sull’alluce',
          alt: 'Una figura che si tiene al muro e sale sugli avampiedi di entrambi i piedi',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'early', why: 'Fa lavorare il soleo con il ginocchio piegato. Non è stato testato da solo nei runner.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Da 2 a 3\u00A0giorni a settimana',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Con il ginocchio piegato, il soleo fa la maggior parte del lavoro. Uno zaino o dei pesi sulle ginocchia aggiungono carico quando diventa facile.',
          stop: 'Dolore sopra 6 su 10',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: ginocchio piegato per caricare il soleo',
          alt: 'Una figura seduta che solleva entrambi i talloni, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamento dell’alluce',
          evidence: { level: 'early', why: 'Uno studio con risonanza magnetica mostra che attiva i piccoli muscoli del piede (Gooding 2016). Non è stato testato da solo in uno studio clinico sugli esiti.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Da 2 a 5\u00A0giorni a settimana',
          feel: 'Sforzo sul dorso del piede e sotto l’arco',
          how: 'Tieni le quattro dita piccole a terra e solleva solo l’alluce. Poi prova al contrario: alluce giù, dita piccole su. All’inizio basta un piccolo movimento.',
          stop: 'Dolore all’articolazione dell’alluce',
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: si alza solo l’alluce',
          alt: 'Un piede nudo con l’alluce sollevato e le altre dita piatte',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Fa parte della maggior parte dei programmi per il piede. Non è stato testato da solo come prevenzione degli infortuni nei runner.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni lato',
          often: 'Da 2 a 5\u00A0giorni a settimana',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          how: 'Stai su un piede, ginocchio morbido, vicino a un muro. Quando 30\u00A0secondi diventano facili, chiudi gli occhi o sali su un cuscino. Altro nella pagina sull’[equilibrio su una gamba](/it/esercizi/equilibrio-su-una-gamba/).',
          stop: 'Non riesci a restare in piedi senza aggrapparti al muro',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: ginocchio morbido, un muro a portata di mano',
          alt: 'Una figura in piedi su una gamba accanto a un muro',
        },
      ],
      cites: [CITE.taddeiRRI, CITE.madeley, CITE.gooding],
    },
    {
      h2: 'Perché i runner hanno bisogno di forza nel polpaccio e nel soleo?',
      keyFact: 'Fino a circa 7\u00A0metri al secondo, correre più veloce dipende soprattutto dallo spingere più forte contro il terreno, e il soleo e il gastrocnemio hanno un ruolo chiave in quella spinta (Schache e colleghi, 2014).',
      paragraphs: [
        '**Nella corsa, i muscoli del polpaccio fanno buona parte della spinta.** Una revisione del 2014 su come lavorano i muscoli delle gambe nella corsa ha trovato che, a velocità fino a circa 7\u00A0metri al secondo, cioè quasi tutta la corsa amatoriale, i runner vanno più veloci soprattutto spingendo più forte contro il terreno per fare un passo più lungo. I due muscoli del polpaccio, il soleo e il gastrocnemio, hanno un ruolo particolarmente importante in quella spinta (Schache e colleghi, 2014).',
        'Il soleo sta sotto il gastrocnemio e lavora di più quando il ginocchio è piegato, per questo la routine ha un sollevamento sulle punte da seduto, a ginocchio piegato, oltre a quello in piedi. Se dopo le corse senti spesso i polpacci tesi, [polpacci rigidi](/it/polpacci-rigidi/) parla dello stretching e dell’[allungamento del soleo](/it/esercizi/allungamento-soleo/).',
        'La resistenza del polpaccio entra in gioco anche nel dolore alla tibia. In uno studio caso-controllo, gli atleti con periostite tibiale facevano meno sollevamenti sulle punte fino all’affaticamento rispetto agli atleti senza (Madeley e colleghi, 2007). Questo mostra un legame, non che polpacci deboli causino la periostite tibiale. Altro in [periostite tibiale: esercizi](/it/periostite-tibiale-esercizi/).',
      ],
      cites: [CITE.schache, CITE.madeley],
    },
    {
      h2: 'Quanti sollevamenti sulle punte dovrebbe riuscire a fare un runner?',
      keyFact: 'In 566\u00A0adulti tra i 20 e gli 81\u00A0anni, la mediana era di 24\u00A0sollevamenti sulle punte su una gamba a destra e 23 a sinistra (Hebert-Losier e colleghi, 2017).',
      paragraphs: [
        'Non esiste un valore di riferimento specifico per i runner, quindi usa i numeri per gli adulti in generale come soglia minima. In uno studio su 566\u00A0adulti, la mediana era di 24\u00A0sollevamenti sulle punte su una gamba con la gamba destra e 23 con la sinistra, al ritmo di un battito per salire e uno per scendere a 60\u00A0battiti al minuto. I numeri calano con l’età, e le persone più attive ne facevano di più (Hebert-Losier e colleghi, 2017). Uno studio meno recente ha proposto 25 come valore di riferimento normale (Lunsford e Perry, 1995).',
        'Confronta anche le due gambe. Una differenza di oltre il 10% tra i lati è la soglia abituale per una differenza rilevante nella riabilitazione degli arti inferiori (Silbernagel e colleghi, 2010). Il protocollo completo, una versione da fare a casa e un calcolatore sono nella pagina del [test del sollevamento sulle punte](/it/test-sollevamento-punte/).',
      ],
      table: {
        caption: 'Sollevamenti sulle punte su una gamba, valori mediani per età, attività moderata (Hebert-Losier 2017)',
        head: ['Età', 'Uomini', 'Donne'],
        rows: [
          ['20', '37', '30'],
          ['30', '33', '27'],
          ['40', '28', '25'],
          ['50', '24', '22'],
          ['60', '19', '19'],
        ],
      },
      after: [
        'Sono stime di un modello per un adulto moderatamente attivo con un indice di massa corporea di 24,2, non soglie di promosso o bocciato. Ripeti il test a distanza di qualche settimana e guarda l’andamento e la differenza tra sinistra e destra.',
      ],
      sourceNote: 'Hebert-Losier 2017, Tabella 4: stime del modello per IMC 24,2 e livello di attività fisica 4, media delle due gambe, arrotondate. Lunsford e Perry 1995: 203\u00A0adulti tra i 20 e i 59\u00A0anni.',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry, CITE.silbernagelHeelRise],
    },
    {
      h2: 'Quando e quanto spesso un runner dovrebbe fare gli esercizi per i piedi?',
      paragraphs: [
        '**Nessuno studio ha confrontato gli esercizi per i piedi fatti dopo una corsa con quelli fatti in un giorno di riposo,** quindi le indicazioni sui tempi qui sotto sono pratiche, non testate.',
        {
          list: [
            '**Dopo una corsa facile o in un giorno di riposo.** Gli esercizi stancano i piccoli muscoli del piede, quindi si inseriscono meglio dopo una corsa breve e facile che prima di un allenamento duro o di un lungo.',
            '**Non subito prima delle ripetute o di una gara.** Lì ti servono polpacci freschi.',
            '**Sollevamenti sulle punte da 2 a 3\u00A0giorni a settimana,** con un giorno di pausa in mezzo, come per qualsiasi lavoro di forza.',
            '**Muscoli del piede, dita ed equilibrio da 2 a 5\u00A0giorni a settimana.** Nello studio del 2019, i runner facevano esercizi per il piede almeno cinque volte a settimana e hanno guadagnato forza in circa due mesi (Ridge e colleghi, 2019).',
          ],
        },
        'Dagli tempo. Negli studi le dimensioni dei muscoli sono cambiate in circa due mesi, ma il calo degli infortuni nello studio di Taddei è comparso solo tra il quarto e l’ottavo mese. Una routine che porti avanti per mesi conta più di una routine dura che abbandoni dopo tre settimane.',
      ],
      table: {
        caption: 'Una settimana tipo per un runner',
        head: ['Giorno', 'Corsa', 'Routine per i piedi'],
        rows: [
          ['Lun', 'Riposo', 'Routine completa'],
          ['Mar', 'Ripetute', 'Niente'],
          ['Mer', 'Facile', 'Muscoli del piede, dita, equilibrio'],
          ['Gio', 'Riposo', 'Routine completa'],
          ['Ven', 'Facile', 'Muscoli del piede, equilibrio'],
          ['Sab', 'Lungo', 'Niente'],
          ['Dom', 'Facile o riposo', 'Routine completa'],
        ],
      },
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
    },
    {
      h2: 'Puoi fare gli esercizi per i piedi con un fastidio?',
      paragraphs: [
        'Di solito sì, se il fastidio è lieve e stabile, e se ti adatti. Usa la stessa regola del resto del sito: un po’ di fastidio va bene, ma fermati per quel giorno se il dolore supera 6 su 10, e vai più leggero se la mattina dopo è peggio.',
        'Alcuni fastidi cambiano il piano:',
        {
          list: [
            '**Dolore al tallone ai primi passi del mattino** fa pensare alla fascite plantare. Lì contano di più i sollevamenti sulle punte e gli allungamenti: vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
            '**Dolore dietro il tallone o nel tendine d’Achille** richiede un piano per il polpaccio più graduale, spesso con discese lente sul tallone: vedi [tendinite d’Achille: esercizi](/it/tendinite-achille-esercizi/).',
            '**Dolore lungo il lato interno della tibia** può essere periostite tibiale: vedi [periostite tibiale: esercizi](/it/periostite-tibiale-esercizi/).',
            '**Dolore in un punto preciso di un osso** che aumenta a ogni corsa è un segnale d’allarme di frattura da stress. Smetti di correre e fatti visitare.',
          ],
        },
      ],
    },
    {
      h2: 'Cosa non fanno gli esercizi per i piedi',
      paragraphs: [
        '**Non sostituiscono un allenamento sensato.** Negli studi sui runner di lunga distanza, tra il 19,4% e il 79,3% ha avuto un infortunio alle gambe, e un chilometraggio settimanale alto negli uomini e un infortunio precedente erano tra i fattori di rischio più chiari (van Gent e colleghi, 2007). In uno studio danese su 874\u00A0runner principianti, chi aumentava il chilometraggio settimanale di oltre il 30% sembrava più soggetto ad alcuni infortuni da sovraccarico, anche se il risultato non ha raggiunto per poco la significatività statistica (Nielsen e colleghi, 2014).',
        '**Il lavoro di forza non è una protezione automatica.** In uno studio con 720\u00A0persone alla prima maratona di New York, un programma di 10\u00A0minuti da seguire in autonomia per anche, cosce e core, tre volte a settimana per circa tre mesi, non ha ridotto gli infortuni da sovraccarico che impedivano di finire la maratona: 7,1% nel gruppo forza contro 7,3% negli altri (Toresdahl e colleghi, 2020). Quel programma non allenava i piedi, ma ricorda che una routine sulla carta non equivale a un risultato.',
        '**Cambiano la forma dell’arco solo di poco.** In un piccolo studio su 21\u00A0persone senza gruppo di controllo, dopo un mese di allenamento del piede corto l’arco si abbassava di 1,8\u00A0mm in meno (Mulligan e Cook, 2013). Aspettati un piede più forte e più stabile, non un arco nuovo. Scarpe e corsa a piedi nudi sono un’altra questione, trattata in [scarpe barefoot](/it/scarpe-barefoot/).',
      ],
      sourceNote: 'Toresdahl 2020: studio randomizzato, 720\u00A0partecipanti, rischio relativo 0,97 (IC 95% da 0,57 a 1,63), p = 0,90. Il programma riguardava quadricipiti, abduttori dell’anca e core, con istruzioni scritte e video.',
      cites: [CITE.vanGent, CITE.nielsen, CITE.toresdahl, CITE.mulliganCook],
    },
  ],
  faq: [
    {
      q: 'Quali sono i migliori esercizi per i piedi per chi corre?',
      cites: [CITE.taddeiRRI],
      a: 'Una serie breve che copre quattro cose: il piede corto per l’arco, i sollevamenti sulle punte a ginocchio teso e piegato per polpaccio e soleo, il sollevamento dell’alluce per la spinta e l’equilibrio su una gamba. Un programma per i muscoli del piede basato sulla stessa idea ha ridotto gli infortuni da corsa in uno studio su 118\u00A0runner.',
    },
    {
      q: 'Gli esercizi di rinforzo del piede prevengono gli infortuni da corsa?',
      cites: [CITE.taddeiRRI],
      a: 'Possono farlo. In uno studio del 2020 su 118\u00A0runner amatoriali, il gruppo senza allenamento dei muscoli del piede aveva una probabilità 2,42\u00A0volte più alta di infortunarsi nell’arco di 12\u00A0mesi, con un effetto comparso tra il quarto e l’ottavo mese. È un solo studio di un solo gruppo di ricerca, quindi le prove sono promettenti ma non definitive.',
    },
    {
      q: 'Quanto spesso un runner dovrebbe fare gli esercizi per i piedi?',
      cites: [CITE.ridgeMinimalist],
      a: 'Da due a cinque giorni a settimana per il lavoro su muscoli del piede, dita ed equilibrio, e da due a tre giorni a settimana per i sollevamenti sulle punte, con un giorno di pausa in mezzo. In uno studio del 2019, i runner che facevano esercizi per il piede almeno cinque volte a settimana hanno guadagnato forza in circa due mesi.',
    },
    {
      q: 'Meglio fare gli esercizi per i piedi prima o dopo la corsa?',
      a: 'Dopo una corsa facile o in un giorno di riposo è la scelta pratica, perché gli esercizi stancano i piccoli muscoli del piede. Nessuno studio ha confrontato i tempi. Evita una routine completa subito prima delle ripetute, di un lungo o di una gara, quando ti servono piedi e polpacci freschi.',
    },
    {
      q: 'Quanti sollevamenti sulle punte su una gamba dovrebbe fare un runner?',
      cites: [CITE.hebertLosier, CITE.lunsfordPerry],
      a: 'Non esiste un numero specifico per i runner. Gli adulti sani fanno in mediana circa 23 o 24 sollevamenti per gamba a un ritmo fisso, e 25 è stato proposto come valore normale. Molti runner attivi ne fanno di più. Una differenza di oltre il 10% tra le gambe merita di essere tenuta d’occhio. La pagina del test del sollevamento sulle punte ha il protocollo completo.',
    },
    {
      q: 'Quanto ci vuole perché gli esercizi per i piedi facciano la differenza?',
      cites: [CITE.ridgeMinimalist, CITE.taddeiRRI],
      a: 'Negli studi i muscoli del piede sono diventati più grandi e più forti in circa due mesi. Il calo degli infortuni nello studio sui runner ha richiesto più tempo, comparendo tra il quarto e l’ottavo mese. Metti in conto di portare avanti una routine breve per mesi, non per settimane.',
    },
    {
      q: 'Posso continuare a correre mentre faccio gli esercizi per i piedi?',
      a: 'Sì. La routine è pensata per affiancare la corsa. Se hai un fastidio, interrompi un esercizio per quel giorno se il dolore supera 6 su 10, e fai solo corse facili se la mattina dopo il dolore è peggiore. Un dolore che aumenta a ogni corsa, o che sta in un punto preciso di un osso, va fatto valutare da un medico.',
    },
    {
      q: 'Correre a piedi nudi o con scarpe minimaliste rinforza i piedi?',
      cites: [CITE.ridgeMinimalist],
      a: 'In uno studio del 2019 sui runner, camminare con scarpe minimaliste, con un aumento lento e graduale, ha rinforzato il piede più o meno quanto gli esercizi. Cambiare in fretta le scarpe da corsa è un’altra cosa e ha i suoi rischi, quindi se ci provi procedi con gradualità.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore sta in un punto preciso di un osso del piede o della tibia e peggiora a ogni corsa, che può indicare una frattura da stress',
      'non riesci a caricare il peso sul piede, o zoppichi quando cammini',
      'il dolore è iniziato con uno schiocco, una caduta o una storta alla caviglia',
      'il piede o la caviglia sono gonfi, arrossati o caldi, o hai la febbre',
      'senti intorpidimento, formicolio o bruciore al piede',
      'il tallone o il piede fanno male di notte o a riposo',
      'il dolore continua a peggiorare per due o tre settimane nonostante corse più leggere',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede con gli esercizi di questa pagina: il piede corto da seduto fino a una gamba, i sollevamenti sulle punte, il sollevamento dell’alluce, l’apertura delle dita e l’equilibrio su una gamba. Non pianifica le tue corse, quindi tieni il tuo piano di allenamento e inserisci le sessioni nei giorni facili.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto a come senti i piedi, e il piano si adatta. Un breve test ogni 14\u00A0giorni controlla sollevamenti sulle punte, tenuta dell’arco ed equilibrio, sinistra contro destra. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['footStrengthening', 'calfRaiseTest', 'shinSplints'],
  crumb: 'Esercizi per i piedi per runner',
  campaign: 'guide-foot-exercises-for-runners-it',
};
