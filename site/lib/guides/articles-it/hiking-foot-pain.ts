import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/hiking-foot-pain.ts (2026-10-18), written
 * around «dolore ai piedi dopo il trekking», «male ai piedi dopo
 * un’escursione». Informal «tu». Figures, grades, doses, hedges and CITE keys
 * are identical to the English page after its fact-check. Same media ids.
 * Exercise names follow it.ts and the other /it/ pages. Pounds and miles kept
 * as in the studies, with approximate kg and km added. No /it/ version of
 * foot-pain-identifier: link removed, words kept.
 */

export const HIKERS_IT: Guide = {
  lang: 'it',
  page: 'hikers',
  mainSource: CITE.chruschHikers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolore ai piedi dopo il trekking: cause, esercizi e allarmi',
  description:
    'Male ai piedi dopo un’escursione: cosa dicono le indagini, tallone, Achille e avampiede, peso dello zaino, scarponi o scarpe da trail, e esercizi con dosi.',
  h1: 'Dolore ai piedi dopo il trekking: perché ti fanno male i piedi e cosa fare',
  lede:
    'I piedi doloranti dopo una lunga escursione sono comuni, e spesso si tratta di sovraccarico: più distanza, più discesa o uno zaino più pesante di quanto i tuoi piedi siano abituati a reggere. In un’indagine su 1.295 escursionisti di lunga distanza sull’Appalachian Trail, il 29% riferiva un infortunio o dolore al piede e il 12% dolore al tendine d’Achille (Chrusch e Kavin, 2021). Il dolore al tallone ai primi passi della mattina dopo fa pensare alla [fascite plantare](/it/fascite-plantare/); un dolore in un punto preciso di un osso che cresce a ogni escursione può essere una frattura da stress e va fatto valutare da un professionista sanitario.',
  intro: [
    'Questa pagina parla di trekking e lunghe camminate sui sentieri: cosa tende a fare male, cosa hanno trovato le indagini sugli escursionisti su zaini, scarpe e allenamento, e una breve routine per prima e dopo un’escursione. Se il tallone ti fa male dopo le camminate di tutti i giorni, parti da [dolore al tallone dopo aver camminato](/it/dolore-tallone-dopo-camminata/), e per sapere quanto camminare con un tallone dolorante, leggi [camminare con la fascite plantare](/it/camminare-con-fascite-plantare/).',
  ],
  toc: true,
  takeaways: [
    'Su 1.295 escursionisti di lunga distanza dell’Appalachian Trail, il 61% riferiva un disturbo a muscoli, articolazioni o ossa, il 37% dolore al ginocchio, il 29% dolore al piede e il 12% dolore all’Achille, e l’11% ha interrotto il cammino per questo (Chrusch e Kavin, 2021).',
    'Chi non si era allenato prima del sentiero riferiva più spesso dolore al piede, 38% contro 28%, e più spesso un infortunio di questo tipo in generale, 80% contro 58%. È un collegamento in un’indagine, non la prova che l’allenamento prevenga gli infortuni (Chrusch e Kavin, 2021).',
    'Le vesciche ai piedi erano il disturbo più comune tra 280 escursionisti dell’Appalachian Trail, riferite dal 64% (Boulware e colleghi, 2003).',
    'Intorpidimento o formicolio aumentavano con il peso dello zaino in 128 escursionisti di lunga distanza, dal 35% con zaini da 10 a 20\u00A0libbre (circa da 4,5 a 9\u00A0kg) al 69% sopra le 31\u00A0libbre (circa 14\u00A0kg). Il tipo di scarpa e il peso dello zaino non erano collegati ad altri infortuni a muscoli e articolazioni (Anderson e colleghi, 2009).',
    'I bastoncini da trekking riducevano il carico su caviglia, ginocchio e anca quando 15 escursionisti esperti camminavano in discesa, con e senza zaino (Bohne e Abendroth-Smith, 2007).',
  ],
  sections: [
    {
      h2: 'Perché ti fanno male i piedi dopo un’escursione?',
      keyFact: 'In un’indagine su 1.295 escursionisti di lunga distanza dell’Appalachian Trail, il 29% riferiva un infortunio o dolore al piede e il 37% dolore al ginocchio (Chrusch e Kavin, 2021).',
      paragraphs: [
        '**Soprattutto perché il trekking carica i piedi di più, e più a lungo, della camminata di tutti i giorni.** Cammini per ore, su terreno irregolare, in salita e in discesa, spesso con uno zaino. Ognuna di queste cose aggiunge lavoro per il tallone, l’arco, il polpaccio e il tendine d’Achille.',
        'I numeri migliori vengono dagli escursionisti di lunga distanza. In un’indagine del 2018 e 2019 su 1.295 escursionisti dell’Appalachian Trail, il 61% riferiva un disturbo a muscoli, articolazioni o ossa. Il dolore al ginocchio era il più comune, al 37%, poi il dolore al piede al 29%, le distorsioni di caviglia al 13%, il dolore all’Achille al 12% e il dolore alla tibia all’11%. Questi disturbi hanno fatto interrompere il cammino all’11% di loro (Chrusch e Kavin, 2021).',
        'I problemi da sovraccarico, che si accumulano in giorni di carico ripetuto, erano più comuni degli infortuni improvvisi: 28% contro 18% nella stessa indagine. Questo conta anche per chi fa escursioni di un giorno. Una prima escursione lunga della stagione, o un fine settimana con due giornate impegnative di fila, è la stessa dinamica in scala più piccola.',
        'Sono indagini basate su quello che riferiscono persone che camminano per centinaia di chilometri. Nessuno studio ha contato il dolore ai piedi negli escursionisti della domenica, quindi i numeri esatti non valgono per chi cammina nel fine settimana. La parte utile è il quadro di cosa fa male.',
      ],
      sourceNote: 'Chrusch e Kavin 2021: indagine elettronica trasversale aggiunta all’indagine di fine stagione della Appalachian Trail Conservancy, tasso di risposta del 52%. Sovraccarico o cronici 28% (n=363), acuti 18% (n=238).',
      cites: [CITE.chruschHikers],
    },
    {
      h2: 'Dove fa male, e cosa può essere?',
      paragraphs: [
        'Il punto in cui senti il dolore è l’indizio più rapido. La tabella è un punto di partenza, non una diagnosi.',
      ],
      table: {
        caption: 'Dolore ai piedi dopo il trekking: dove fa male e il primo passo abituale',
        head: ['Dove e quando', 'Spesso', 'Primo passo'],
        rows: [
          ['Sotto il tallone, peggio ai primi passi della mattina dopo', 'Fascite plantare', 'Allungamenti di polpaccio e arco, sollevamenti sulle punte'],
          ['Dietro il tallone o nel tendine sopra', 'Tendinopatia achillea', 'Escursioni più brevi, sollevamenti sulle punte lenti'],
          ['Avampiede, dietro le dita', 'Metatarsalgia', 'Controlla la calzata, allungamento del polpaccio'],
          ['Un punto preciso su un osso, peggio a ogni escursione', 'Possibile frattura da stress', 'Smetti di camminare in montagna, fatti visitare'],
          ['Dita che bruciano o formicolano', 'Nervo compresso', 'Allenta i lacci, zaino più leggero'],
          ['Unghie dei piedi scure o doloranti dopo le discese', 'Dita che urtano la scarpa', 'Scarpa più lunga, unghie corte'],
        ],
      },
      after: [
        '**Sotto il tallone.** La fascite plantare di solito fa più male ai primi passi dopo il riposo. La linea guida del 2023 sul dolore al tallone indica come caratteristica tipica un dolore iniziato dopo un recente aumento delle attività sotto carico (Koc e colleghi, 2023), ed è proprio quello che è un’escursione più impegnativa. Un polpaccio rigido è il fattore di rischio più forte che si conosca: in uno studio su 50\u00A0persone con fascite plantare e 100 senza, chi aveva la caviglia meno flessibile aveva una probabilità 23,3\u00A0volte più alta (Riddle e colleghi, 2003).',
        '**Dietro il tallone.** Il dolore all’Achille può riacutizzarsi nelle lunghe salite, dove polpaccio e tendine ti spingono in su a ogni passo. Vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
        '**Avampiede.** Le lunghe discese e un polpaccio rigido possono entrambi spostare il carico sulla parte anteriore del piede. Vedi [metatarsalgia](/it/metatarsalgia-dolore-pianta-piede/).',
        '**Vesciche e unghie.** Le vesciche erano riferite dal 64% di 280 escursionisti dell’Appalachian Trail, più di qualsiasi altro disturbo (Boulware e colleghi, 2003). Unghie scure o doloranti dopo una giornata di discese di solito vogliono dire che le dita urtano la punta della scarpa. Sono entrambi problemi di pelle e di calzata, non qualcosa che gli esercizi cambiano.',
      ],
      cites: [CITE.guideline, CITE.riddle, CITE.boulwareHikers],
    },
    {
      h2: 'Perché la discesa fa più male ai piedi?',
      keyFact: 'In 15 escursionisti esperti che camminavano in discesa senza zaino, con uno zaino leggero e con uno zaino pesante, i bastoncini da trekking riducevano il carico su caviglia, ginocchio e anca (Bohne e Abendroth-Smith, 2007).',
      paragraphs: [
        '**In discesa, le gambe lavorano da freno.** A ogni passo verso il basso, il polpaccio, la parte anteriore della tibia e i muscoli della coscia controllano la discesa mentre si allungano. Il piede scivola anche in avanti nella scarpa, quindi le dita e l’avampiede prendono più pressione. Per questo molte persone stanno bene in salita e hanno male dopo la discesa.',
        'In uno studio di laboratorio, 15 escursionisti esperti uomini hanno camminato in discesa senza zaino, con uno zaino da giornata pari al 15% del peso corporeo e con uno zaino da spedizione del 30%. I bastoncini riducevano le forze di rotazione su caviglia, ginocchio e anca e il picco del lavoro di frenata a caviglia e ginocchio, con tutti gli zaini (Bohne e Abendroth-Smith, 2007). Nell’indagine sull’Appalachian Trail, il 70% usava bastoncini o un bastone, e i bastoncini andavano insieme a meno disturbi (Chrusch e Kavin, 2021). Quel collegamento nell’indagine non prova che i bastoncini prevengano gli infortuni.',
        'Consigli pratici, nessuno testato per prevenire il dolore ai piedi: fai passi più corti nelle discese ripide, stringi bene i lacci sul collo del piede così il piede non scivola in avanti, e tieni le unghie dei piedi corte.',
      ],
      sourceNote: 'Bohne 2007: 10 prove per condizione, momenti articolari sul piano sagittale ridotti a tutte e tre le articolazioni con i bastoncini; picco di assorbimento di potenza ridotto a caviglia e ginocchio. Forze misurate, non dolore o infortuni.',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
    },
    {
      h2: 'Uno zaino più pesante peggiora il dolore ai piedi?',
      keyFact: 'In 128 escursionisti di lunga distanza, intorpidimento o formicolio erano riferiti dal 35% con zaini da 10 a 20\u00A0libbre (circa da 4,5 a 9\u00A0kg) e dal 69% con zaini oltre le 31\u00A0libbre (circa 14\u00A0kg) (Anderson e colleghi, 2009).',
      paragraphs: [
        '**Uno zaino più pesante vuol dire più carico a ogni passo, ma gli studi sugli escursionisti mostrano un collegamento chiaro solo con intorpidimento e formicolio.** In un’indagine del 2006 su 128 escursionisti che avevano camminato più di 500\u00A0miglia (circa 800\u00A0km) sull’Appalachian Trail o sul Pacific Crest Trail, intorpidimento o formicolio aumentavano con il peso dello zaino: 35% con zaini da 10 a 20\u00A0libbre, 50% da 21 a 30\u00A0libbre e 69% sopra le 31\u00A0libbre (Anderson e colleghi, 2009).',
        'La stessa indagine ha trovato che il peso dello zaino e il tipo di scarpa non erano collegati ad altri infortuni a muscoli e articolazioni, come distorsioni, dolore che dura nel tempo o lesioni muscolari. Quindi nessuno ha dimostrato che uno zaino più leggero voglia dire meno dolore al tallone o all’arco. Resta comunque un punto di partenza sensato se i piedi ti fanno male solo nei giorni in cui porti lo zaino pieno.',
        'Se le dita bruciano o formicolano, allenta i lacci sul dorso del piede e controlla la cintura in vita e gli spallacci, e fatti visitare se non passa dopo aver tolto lo zaino.',
      ],
      cites: [CITE.andersonPack],
    },
    {
      h2: 'Scarponi o scarpe da trail: cosa è meglio per il dolore ai piedi?',
      paragraphs: [
        '**Nessuna sperimentazione ha confrontato scarponi e scarpe da trail per il dolore ai piedi, quindi nessuno può dire che uno sia meglio dell’altro.** Ci sono solo indagini:',
        {
          list: [
            'Nell’indagine del 2006 su 128 escursionisti di lunga distanza, intorpidimento o formicolio erano riferiti dal 29% di chi portava sandali, dal 36% con scarpe da corsa, dal 42% con scarpe da escursionismo e dal 68% con scarponi. Tenendo conto del peso dello zaino, il tipo di scarpa non contava più, il che fa pensare che chi portava gli scarponi avesse anche zaini più pesanti (Anderson e colleghi, 2009).',
            'Nell’indagine del 2018 e 2019 sull’Appalachian Trail, il 58% portava scarpe da corsa o da trail e il 24% scarponi. Entrambi andavano insieme a meno disturbi rispetto ad altre calzature come i sandali (Chrusch e Kavin, 2021).',
          ],
        },
        'Quindi scegli la scarpa che calza bene, con cui hai già camminato e che è adatta al terreno. Per il dolore al tallone in generale, la linea guida del 2023 dà ai plantari usati da soli per un sollievo a breve termine una **B a sfavore**, e li ammette insieme ad altri trattamenti, con una **C** (Koc e colleghi, 2023). Altro in [plantari o esercizi](/it/plantari-o-esercizi/). Se vuoi passare a scarpe più leggere o più piatte, fallo nel giro di settimane, non alla prima escursione lunga; [scarpe barefoot](/it/scarpe-barefoot/) spiega perché.',
      ],
      cites: [CITE.andersonPack, CITE.chruschHikers, CITE.guideline],
    },
    {
      h2: 'Quanto in fretta puoi aumentare la distanza delle escursioni?',
      keyFact: 'Chi non si era allenato prima dell’Appalachian Trail riferiva più spesso un infortunio a muscoli, articolazioni o ossa, 80% contro 58% (Chrusch e Kavin, 2021).',
      paragraphs: [
        '**Nessuno studio indica un aumento settimanale sicuro per gli escursionisti.** La prova più vicina è l’indagine sull’Appalachian Trail: il 13% degli escursionisti che non si era allenato prima del sentiero riferiva più infortuni in generale (80% contro 58%), più dolore al piede (38% contro 28%), più dolore all’Achille (18% contro 11%) e più fratture da stress nella parte bassa della gamba (5% contro 2%). Allenamento di forza, allungamenti o yoga e allenamento di resistenza andavano ciascuno insieme a meno infortuni (Chrusch e Kavin, 2021). È un’indagine, quindi può darsi semplicemente che le persone più in forma o più prudenti si siano allenate di più.',
        'Un modo pratico per aumentare, non testato:',
        {
          list: [
            'Cambia una cosa alla volta: più distanza, più dislivello in salita e in discesa, o uno zaino più pesante, non tutte e tre lo stesso giorno.',
            'Usa la mattina dopo come verifica. Un dolore che si calma entro la mattina dopo e non cresce di settimana in settimana è un segno ragionevole che il carico va bene. Questa regola viene da una sperimentazione sull’Achille, non dagli escursionisti (Silbernagel e colleghi, 2007).',
            'Dopo una giornata impegnativa, programmane una facile. La [Appalachian Trail Conservancy](https://appalachiantrail.org/experience/hike-the-trail/essential-skills/health-hygiene/common-injuries/) (in inglese) dà un consiglio simile agli escursionisti di lunga distanza: fermati per la giornata se i piedi iniziano a fare male, si gonfiano o li senti tesi dopo aver camminato più del solito.',
          ],
        },
        'Vale la pena allenare la forza del polpaccio tra un’escursione e l’altra, perché il polpaccio fa gran parte del lavoro in salita e in discesa. I sollevamenti sulle punte qui sotto sono gli stessi della guida [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      cites: [CITE.chruschHikers, CITE.silbernagel],
    },
    {
      h2: 'Qual è una buona routine prima e dopo un’escursione?',
      paragraphs: [
        'Tienila breve. Prima dell’escursione, un minuto o due per mettere in movimento le caviglie. Dopo, gli allungamenti per tallone e polpaccio. Nei giorni tra un’escursione e l’altra, i sollevamenti sulle punte per la forza. Sono le dosi di partenza di Walkito, prese dalle guide principali. Interrompi un esercizio per oggi se il dolore supera 6 su 10.',
        'Sii onesto su cosa fanno gli allungamenti prima di un’escursione. In una sperimentazione su 1.538 reclute dell’esercito, in tre mesi di addestramento, allungare sei gruppi muscolari delle gambe prima di ogni sessione non riduceva gli infortuni in modo rilevante (Pope e colleghi, 2000). Gli allungamenti qui servono per il dolore al tallone e al polpaccio, dove la linea guida del 2023 dà agli allungamenti una **A**, e il lavoro di forza per il polpaccio ha una **B** (Koc e colleghi, 2023).',
      ],
      exercises: [
        {
          name: 'Oscillazioni della caviglia (prima)',
          evidence: { level: 'early', why: 'Dose di Walkito. Non esiste un protocollo pubblicato per gli escursionisti.' },
          dose: '2\u00A0serie da 15, ogni gamba',
          often: 'Prima dell’escursione',
          feel: 'Un allungamento davanti alla caviglia e una tensione nella parte bassa del polpaccio',
          how: 'Un piede avanti e uno indietro, le mani su un muro, un albero o i bastoncini. Porta il ginocchio davanti in avanti sopra le dita, il tallone resta a terra. Lentamente, circa due secondi per direzione. Cambia gamba dopo ogni serie.',
          stop: 'Il dolore arriva a 6 su 10',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va in avanti sopra le dita, il tallone resta a terra',
          alt: 'Una figura con un piede avanti e uno indietro che porta il ginocchio davanti in avanti sopra le dita, con la caviglia evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (dopo)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto. Non sono stati studiati negli escursionisti.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Dopo l’escursione',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Un polpaccio rigido tira sul tallone, quindi questo allungamento conta anche se lo senti più in alto.',
          stop: 'Dolore acuto al tallone o all’Achille',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone dietro a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (dopo)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto. Non sono stati studiati negli escursionisti.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Dopo l’escursione',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra e piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Dolore acuto al tallone o all’Achille',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare (dopo, e la mattina dopo)',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti una A, il suo grado più alto. Non sono stati studiati negli escursionisti.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Dopo l’escursione e prima dei primi passi della mattina dopo',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. La mattina dopo, fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Dolore acuto al tallone',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Massaggio con la pallina (dopo)',
          evidence: { level: 'early', why: 'Non è stato testato negli studi di questa pagina. È qui per dare sollievo.' },
          dose: '1\u00A0minuto, ogni piede',
          often: 'Dopo l’escursione o la sera',
          feel: 'Una pressione decisa sotto il piede',
          how: 'Siediti e fai rotolare lentamente la pianta del piede su una pallina da massaggio, con una pressione decisa. Se ti scappa una smorfia, alleggerisci. Niente pallina? Vanno bene anche passate decise con il pollice dal tallone alle dita.',
          stop: 'Ti scappa una smorfia di dolore, o senti un punto dolente su un osso',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi (tra un’escursione e l’altra)',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Un programma di sollevamenti sulle punte ha aiutato il dolore al tallone più in fretta degli allungamenti in una sperimentazione su 48\u00A0persone (Rathleff 2015).' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Da 2 a 3\u00A0giorni a settimana, non il giorno dopo un’escursione impegnativa',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai in piedi su entrambi i piedi, sali dritto sopra gli alluci, poi scendi lentamente. Quando diventa facile, passa a una gamba sola o al [sollevamento sulle punte con asciugamano](/it/esercizi/sollevamento-tallone-asciugamano/). Per il dolore all’Achille, l’esercizio principale è la discesa lenta da un gradino: vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
          stop: 'Dolore al tallone o all’Achille sopra 6 su 10, o peggio la mattina dopo',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi lentamente',
          alt: 'Una figura in piedi sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
      ],
      cites: [CITE.popeStretching, CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Quando smettere di camminare e farti visitare?',
      keyFact: 'In una revisione sulle fratture da stress, l’81% dei pazienti aveva dolore camminando, e una radiografia precoce ne trovava solo circa il 10% (Patel e colleghi, 2011).',
      paragraphs: [
        '**Fermati e fatti controllare se il dolore è in un punto preciso di un osso e peggiora a ogni escursione.** È il quadro classico della frattura da stress, di solito nei metatarsi dietro le dita o nel calcagno. In una revisione sulle fratture da stress, l’81% dei pazienti aveva dolore camminando, e un punto dolente sull’osso si trovava dal 65,9 al 100% dei casi. Una radiografia alla prima visita ne individuava solo circa il 10%, quindi una radiografia normale non la esclude (Patel e colleghi, 2011). Se non sei sicuro di cosa sia, smetti con le escursioni finché non ti ha visitato un professionista sanitario.',
        'Fermati anche se non riesci a caricare il peso sul piede, se il dolore è iniziato con una storta, una caduta o uno schiocco, o se il piede è arrossato, caldo e gonfio. L’elenco completo è qui sotto.',
        'La maggior parte del dolore al tallone è meno drammatica. Nella fascite plantare, circa il 90% delle persone migliora con un trattamento non chirurgico, anche se possono servire mesi (Latt e colleghi, 2020). Vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/).',
      ],
      sourceNote: 'I dati di Patel 2011 riguardano le fratture da stress in tutte le sedi, non gli escursionisti. La sensibilità della radiografia sale dal 30 al 70% dopo circa tre settimane.',
      cites: [CITE.patelStressFracture, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'È normale che i piedi facciano male dopo un’escursione?',
      cites: [CITE.chruschHikers],
      a: 'Un po’ di indolenzimento dopo un’escursione lunga o ripida è comune e spesso passa in un giorno o due. In un’indagine su 1.295 escursionisti dell’Appalachian Trail, il 29% riferiva dolore al piede. Un dolore acuto, in un punto preciso di un osso, o che c’è ancora dopo qualche giorno tranquillo, va fatto controllare.',
    },
    {
      q: 'Perché mi fa male il tallone dopo il trekking?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'La causa più comune è la fascite plantare, che fa male sotto il tallone e di solito è peggio ai primi passi della mattina dopo. La linea guida del 2023 indica come fattore scatenante tipico un recente aumento delle attività sotto carico, e un polpaccio rigido è il fattore di rischio più forte che si conosca. Un dolore dietro il tallone fa pensare all’Achille.',
    },
    {
      q: 'Posso continuare a fare trekking con la fascite plantare?',
      cites: [CITE.silbernagel],
      a: 'Molte persone ci riescono, su percorsi più brevi e più pianeggianti, se durante l’escursione il dolore resta moderato e si calma entro la mattina dopo. Questa regola della mattina dopo viene da una sperimentazione sull’Achille, non da uno studio sul trekking. Se il tallone va peggio ogni mattina, riduci prima la distanza e la discesa. La nostra guida su come camminare con la fascite plantare spiega come riprendere gradualmente.',
    },
    {
      q: 'Per il dolore ai piedi sono meglio gli scarponi o le scarpe da trail?',
      cites: [CITE.andersonPack, CITE.chruschHikers],
      a: 'Nessuno lo sa con certezza, perché nessuna sperimentazione li ha confrontati. Nelle indagini sugli escursionisti di lunga distanza, sia gli scarponi sia le scarpe da trail andavano insieme a meno disturbi rispetto ai sandali, e il collegamento tra scarponi e intorpidimento spariva tenendo conto del peso dello zaino. Scegli il paio che calza bene e con cui hai già camminato.',
    },
    {
      q: 'Uno zaino pesante causa dolore ai piedi?',
      cites: [CITE.andersonPack],
      a: 'Aggiunge carico a ogni passo, ma le indagini sugli escursionisti mostrano un collegamento chiaro solo con intorpidimento e formicolio. In 128 escursionisti di lunga distanza, si passava dal 35% con zaini da 10 a 20\u00A0libbre (circa da 4,5 a 9\u00A0kg) al 69% sopra le 31\u00A0libbre (circa 14\u00A0kg). In quell’indagine il peso dello zaino non era collegato ad altri infortuni a muscoli e articolazioni.',
    },
    {
      q: 'Perché i piedi mi fanno più male in discesa?',
      cites: [CITE.bohnePoles],
      a: 'In discesa i muscoli delle gambe lavorano da freno mentre si allungano, e il piede scivola in avanti nella scarpa, caricando le dita e l’avampiede. In uno studio di laboratorio su 15 escursionisti che camminavano in discesa, i bastoncini da trekking riducevano il carico su caviglia, ginocchio e anca, con e senza zaino.',
    },
    {
      q: 'I bastoncini da trekking aiutano con il dolore ai piedi?',
      cites: [CITE.bohnePoles, CITE.chruschHikers],
      a: 'Riducono il carico sulle gambe. In 15 escursionisti esperti che camminavano in discesa, i bastoncini riducevano le forze su caviglia, ginocchio e anca, e in un’indagine sugli escursionisti dell’Appalachian Trail i bastoncini andavano insieme a meno disturbi. Nessuna sperimentazione ha verificato se i bastoncini prevengano il dolore ai piedi in sé, quindi considerali un aiuto sensato in più, non una certezza.',
    },
    {
      q: 'Quanto dovrebbero far male i piedi dopo una lunga escursione?',
      a: 'Il normale indolenzimento dopo una giornata impegnativa spesso passa in un giorno o due di attività leggera. Se il dolore al tallone ai primi passi torna ogni mattina, o se il dolore c’è ancora dopo una settimana di camminate più brevi, è più probabile un problema da sovraccarico come la fascite plantare o il dolore all’Achille, e vale la pena farlo valutare bene.',
    },
    {
      q: 'Devo fare allungamenti prima di un’escursione?',
      cites: [CITE.popeStretching, CITE.guideline],
      a: 'Un breve riscaldamento come le oscillazioni della caviglia va bene, ma non aspettarti che gli allungamenti prima di un’escursione prevengano gli infortuni. In una sperimentazione su 1.538 reclute dell’esercito, gli allungamenti prima dell’addestramento non riducevano gli infortuni in modo rilevante. Gli allungamenti di polpaccio e arco dopo l’escursione sono più utili se ti fa male il tallone, e lì la linea guida del 2023 dà loro una A.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è in un punto preciso di un osso e peggiora a ogni escursione, il che può essere una frattura da stress',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il dolore è iniziato con una storta, una caduta o uno schiocco, soprattutto dietro il tallone',
      'il piede o la caviglia sono arrossati, caldi o gonfi, o hai la febbre',
      'una vescica o un’unghia sembrano infette: arrossamento che si allarga, pus o strisce rosse',
      'intorpidimento, formicolio o bruciore non passano dopo che hai tolto zaino e scarpe',
      'il piede fa male di notte o a riposo',
      'il dolore continua a peggiorare per due o tre settimane nonostante escursioni più brevi',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede con gli allungamenti e i sollevamenti sulle punte di questa pagina. Non pianifica le tue escursioni, quindi tieni il tuo programma dei percorsi e inserisci le sessioni intorno a quello, con sessioni più leggere dopo una giornata impegnativa.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto a come stanno i tuoi piedi, e il piano si adatta. Walkito non fa diagnosi.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['heelPainAfterWalking', 'achilles', 'ballOfFoot'],
  crumb: 'Dolore ai piedi dopo il trekking',
  campaign: 'guide-hiking-foot-pain-it',
};
