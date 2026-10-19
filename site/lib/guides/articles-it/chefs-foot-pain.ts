import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/chefs-foot-pain.ts (2026-10-18), written around
 * «dolore ai piedi cuochi», «scarpe da cucina antiscivolo», «zoccoli da cucina».
 * Informal «tu». Figures, grades, doses and hedges identical to the English
 * page after its fact-check. Same CITE keys and media ids. Exercise names
 * follow lib/guides/it.ts. All internal links have an /it/ version.
 */

export const CHEFS_IT: Guide = {
  lang: 'it',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Dolore ai piedi per cuochi: scarpe, tappetini ed esercizi',
  description:
    'Perché ai cuochi fanno male i piedi su pavimenti duri e bagnati: cosa dicono gli studi sulle scarpe antiscivolo, zoccoli, tappetini ed esercizi brevi.',
  h1: 'Dolore ai piedi per cuochi e personale di cucina: cosa aiuta nei turni lunghi',
  lede:
    'Il dolore ai piedi dei cuochi nasce spesso dalle tante ore in piedi e a camminare su pavimenti di cucina duri, e per il dolore al tallone le opzioni con le prove migliori sono gli allungamenti del polpaccio e della fascia plantare, che la linea guida del 2023 sul dolore al tallone classifica con grado **A**, e il lavoro di forza per il polpaccio, con grado **B** (Koc e colleghi, 2023). Le scarpe antiscivolo servono alla sicurezza, non al dolore: in uno studio randomizzato in 226\u00A0distretti scolastici, dare gratis scarpe antiscivolo al personale delle mense ha ridotto le denunce di infortunio da scivolamento da 3,54 a 1,18 ogni 10.000\u00A0mesi-lavoratore (Bell e colleghi, 2019). Nessuno studio ha verificato se gli zoccoli o qualsiasi altra scarpa da cucina riducano il dolore ai piedi in sé.',
  intro: [
    'Questa pagina parla del lato cucina del problema: pavimenti duri, bagnati e unti, la fretta durante il servizio e scarpe scelte per la tenuta. Per il dolore ai piedi dovuto allo stare in piedi in qualsiasi lavoro, vedi [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/). Per i turni in ospedale, vedi [dolore ai piedi per infermieri](/it/dolore-piedi-infermieri/). Se il tallone fa più male ai primi passi dopo il riposo, quel quadro fa pensare alla [fascite plantare](/it/fascite-plantare/).',
  ],
  toc: true,
  takeaways: [
    'In un sondaggio su 128\u00A0addetti di cucina al Cairo, il 46,1% riferiva dolore ai piedi negli ultimi 12\u00A0mesi, dietro solo alla zona lombare e al ginocchio (Abdelsalam e colleghi, 2023).',
    'In 475\u00A0lavoratori di 36\u00A0fast food statunitensi, portare scarpe antiscivolo era associato a un tasso di scivolate più basso del 54% (Verma e colleghi, 2011).',
    'In uno studio randomizzato nelle mense scolastiche, le denunce di infortunio da scivolamento sono scese da 3,54 a 1,18 ogni 10.000\u00A0mesi-lavoratore dove il personale ha ricevuto gratis scarpe antiscivolo, mentre nel gruppo di confronto sono salite da 2,01 a 2,30 (Bell e colleghi, 2019).',
    'Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte le odds di fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli, e un polpaccio rigido le aumentava di 23,3\u00A0volte (Riddle e colleghi, 2003).',
    'La linea guida del 2023 sul dolore al tallone dà agli allungamenti del polpaccio e della fascia plantare il grado **A** e al lavoro di forza il grado **B**. I plantari da soli hanno un grado **B a sfavore** (Koc e colleghi, 2023).',
  ],
  sections: [
    {
      h2: 'Perché ai cuochi fanno così male i piedi dopo un turno?',
      keyFact: 'Su 128\u00A0addetti di cucina, il 46,1% riferiva dolore ai piedi negli ultimi 12\u00A0mesi, dietro alla zona lombare (64,8%) e al ginocchio (46,9%) (Abdelsalam e colleghi, 2023).',
      paragraphs: [
        '**Il lavoro in cucina somma le cose che i piedi sopportano peggio: ore in piedi, brevi spostamenti veloci, pavimenti duri e poco riposo.** In un sondaggio su 128\u00A0addetti di cucina di due grandi residenze universitarie al Cairo, il 90,6% riferiva un disturbo muscoloscheletrico negli ultimi 12\u00A0mesi. Il piede era la terza zona più colpita, con il 46,1%, appena dietro al ginocchio con il 46,9%.',
        'I numeri cambiano molto da uno studio all’altro. Su 307\u00A0cuochi di ristorante in Pakistan, quasi tutti con giornate da 9 a 12\u00A0ore, 26 riferivano dolore alla caviglia o al piede, molti meno dei 101 che riferivano dolore lombare e al ginocchio (Iqbal e colleghi, 2023). I sondaggi usavano gruppi e domande diversi, quindi leggili come un quadro approssimativo, non come un tasso preciso.',
        'Un legame emerge con chiarezza. Su 415\u00A0addetti di cucina di hotel e ristoranti in Etiopia, stare a lungo in piedi si associava a odds 3,81\u00A0volte più alte di un disturbo muscoloscheletrico legato al lavoro (Abebaw e colleghi, 2024). Quello studio contava il dolore in qualsiasi parte del corpo, non solo ai piedi.',
      ],
      sourceNote:
        'Abdelsalam 2023 e Abebaw 2024 hanno usato il Nordic Musculoskeletal Questionnaire per la prevalenza a 12\u00A0mesi. Abebaw 2024: odds ratio aggiustato 3,81 (IC al 95% da 1,58 a 9,17) per lo stare a lungo in piedi. Iqbal 2023 ha usato un campione di convenienza di 307\u00A0cuochi (285\u00A0uomini).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: 'Il dolore ai piedi in cucina è fascite plantare?',
      keyFact: 'Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte le odds di fascite plantare, e una flessibilità della caviglia ridotta di 23,3\u00A0volte (Riddle e colleghi, 2003).',
      paragraphs: [
        'Spesso è stanchezza generale e un indolenzimento che passa con una notte di riposo. Ma il lavoro in cucina porta con sé i due fattori di rischio più forti trovati in uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza: stare in piedi per la maggior parte della giornata lavorativa aumentava le odds di 3,6\u00A0volte, e un [polpaccio rigido](/it/polpacci-rigidi/) che limita quanto si piega la caviglia di 23,3\u00A0volte.',
        'La fascite plantare ha un quadro tipico: dolore acuto sotto il tallone ai primi passi del mattino o dopo essere stato seduto, che si attenua camminando e torna dopo una lunga giornata. Quel quadro è spiegato in [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/), e la guida completa agli esercizi è [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/).',
        'Altri quadri fanno pensare ad altro:',
        {
          list: [
            'bruciore sotto l’avampiede a metà servizio: vedi [dolore sotto l’avampiede](/it/metatarsalgia-dolore-pianta-piede/)',
            'un dolore profondo, come un livido, al centro del tallone, che peggiora quanto più a lungo stai in piedi su un pavimento duro: vedi [sindrome del cuscinetto adiposo del tallone](/it/sindrome-cuscinetto-adiposo-tallone/)',
            'archi che fanno male o sembrano piatti a fine turno: vedi [dolore all’arco plantare](/it/dolore-arco-plantare/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Zoccoli o scarpe antiscivolo: cosa dicono le prove?',
      keyFact: 'Scarpe antiscivolo gratuite hanno ridotto le denunce di infortunio da scivolamento da 3,54 a 1,18 ogni 10.000\u00A0mesi-lavoratore in uno studio randomizzato in 226\u00A0distretti scolastici (Bell e colleghi, 2019).',
      paragraphs: [
        '**Le prove più solide sulle scarpe da cucina riguardano le scivolate, non i piedi doloranti.** Uno studio statunitense ha seguito per tre mesi 475\u00A0lavoratori di 36\u00A0fast food. Chi aveva scarpe con un marchio antiscivolo sulla suola riferiva un tasso di scivolate più basso del 54% rispetto a chi non le aveva, tenendo conto di età, sesso, peso corporeo e altri fattori (Verma e colleghi, 2011).',
        'Uno studio randomizzato lo ha poi testato come programma. Alcuni distretti scolastici, scelti a caso, hanno dato gratis scarpe antiscivolo al personale delle mense. In quei distretti le denunce di infortunio da scivolamento sono scese da 3,54 a 1,18 ogni 10.000\u00A0mesi-lavoratore, e negli altri sono salite da 2,01 a 2,30 (Bell e colleghi, 2019).',
        'Le scarpe si consumano. Negli stessi lavoratori dei ristoranti, chi portava già scarpe antiscivolo e le ha cambiate con un paio nuovo ha avuto poi un tasso di scivolate più basso del 55%, e le scarpe usate da meno di sei mesi funzionavano moderatamente meglio di quelle più vecchie (Verma e colleghi, 2014). Lo studio non ha potuto dire con precisione quando sostituirle.',
        '**Non abbiamo trovato studi che confrontino zoccoli e scarpe da ginnastica, o una scarpa da cucina con un’altra, per il dolore ai piedi.** Per il dolore al tallone in generale, la linea guida del 2023 dà ai [plantari](/it/plantari-o-esercizi/) da soli un grado **B a sfavore**: le prove dicono di non affidarsi solo a loro. Un ordine sensato: scegli una scarpa con suola antiscivolo che vada bene al tuo piede come è adesso e non stringa le dita, sostituiscila quando il battistrada è consumato, e per il dolore in sé fai gli allungamenti e il lavoro di forza descritti più sotto.',
      ],
      table: {
        caption: 'A cosa serve ogni opzione',
        head: ['Opzione', 'Aiuta con', 'Prove'],
        rows: [
          ['Scarpe antiscivolo', 'Scivolate e infortuni da scivolamento', 'Studio di coorte e studio randomizzato'],
          ['Zoccoli o scarpe da ginnastica', 'Non testati per il dolore', 'Nessuna trovata'],
          ['Plantari da soli', 'Dolore al tallone', 'Grado B a sfavore'],
          ['Tappetini antifatica', 'Fastidio da stazione eretta', 'Alcune, non in cucina'],
          ['Calze a compressione', 'Fastidio e gonfiore alle gambe', 'Piccoli studi, non in cucina'],
          ['Allungamenti di polpaccio e fascia', 'Dolore al tallone', 'Grado A'],
        ],
      },
      sourceNote:
        'Verma 2011: uso di scarpe antiscivolo valutato dal marchio sulla suola; tasso di scivolate riferite più basso del 54% (IC al 95% dal 37% al 64%). Bell 2019: studio randomizzato a cluster a due bracci, mense dalla scuola dell’infanzia alle superiori; odds ratio aggiustato 0,33 (IC al 95% da 0,17 a 0,63). Verma 2014: rapporto tra tassi 0,45 (IC al 95% da 0,23 a 0,89) dopo il passaggio a un paio nuovo.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: 'In quali punti della cucina si scivola di più?',
      keyFact: 'Il personale dei ristoranti scivolava 14,6\u00A0volte più spesso camminando su un pavimento sporco e 2,9\u00A0volte più spesso quando aveva fretta (Verma e colleghi, 2011).',
      paragraphs: [
        'Nello studio sui ristoranti statunitensi, la maggior parte delle scivolate avveniva vicino al **lavello e alla friggitrice**, le zone che i lavoratori giudicavano anche le più scivolose, e in oltre il 70% delle scivolate c’erano liquidi o grasso sul pavimento (Verma e colleghi, 2010).',
        'Una seconda analisi sugli stessi lavoratori ha guardato il momento di ogni scivolata. Il tasso di scivolate era 14,6\u00A0volte più alto camminando su un pavimento sporco, 2,9\u00A0volte più alto quando si aveva fretta e 1,7\u00A0volte più alto quando si era distratti. Le scarpe antiscivolo riducevano l’effetto della fretta e del pavimento sporco (Verma e colleghi, 2011).',
        'Conta anche chi fornisce le scarpe. Dove era il datore di lavoro a fornire le scarpe antiscivolo, le portava il 91% dei lavoratori. Dove non venivano né fornite né consigliate, le portava il 53,5% (Verma e colleghi, 2010). Se la tua cucina ha un programma per le scarpe, vale la pena approfittarne.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: 'Tappetini antifatica e calze a compressione aiutano in cucina?',
      paragraphs: [
        'Una revisione del 2015 sulla ricerca sullo stare in piedi al lavoro elenca tappetini, calze a compressione e calzature di sostegno tra le opzioni con qualche prova di minore fastidio e stanchezza (Waters e Dick, 2015). Nessuna di quelle ricerche è stata fatta in cucina. Un tappetino in una postazione dove stai a lungo in piedi, come il pass o un banco di preparazione, è una prova ragionevole. Scegline uno che resti piatto e fermo su un pavimento bagnato, così non diventa a sua volta un rischio di inciampo.',
        'Le calze a compressione non sono state testate in cucina. In un piccolo studio randomizzato su 40\u00A0guardie giurate in piedi per turni di circa 12\u00A0ore, sia le calze da 15 a 20\u00A0mmHg sia quelle da 20 a 30\u00A0mmHg hanno evitato l’aumento di fastidio e gonfiore alle gambe visto con le calze normali (Garcia e colleghi, 2023). Le guardie erano tutti uomini e nessuno era cuoco, quindi leggilo come un risultato probabilmente applicabile, non come una prova per la cucina.',
        '**Tappetini e calze aiutano il comfort durante il turno. Non sostituiscono gli allungamenti e il lavoro di forza** a cui la linea guida sul dolore al tallone dà i gradi più alti.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: 'Quali esercizi aiutano i cuochi con il dolore ai piedi?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti del polpaccio e della fascia plantare il grado A, il più alto, e al lavoro di forza il grado B (Koc e colleghi, 2023).',
      paragraphs: [
        'Gli esercizi sono quelli della [guida alla fascite plantare](/it/esercizi-fascite-plantare/), alle stesse dosi di partenza. Per gli allungamenti bastano un muro o una sedia, quindi ci stanno in una pausa, prima del servizio o dopo che ti sei tolto le scarpe da lavoro. Tieni il lavoro di forza per i giorni liberi o per dopo il turno.',
        'I gradi della linea guida riguardano la fascite plantare e non sono stati testati su chi lavora in cucina, ma i tessuti sono gli stessi che un turno in cucina carica tutto il giorno. Se un esercizio porta il dolore a 6 su 10 o più, fermati per quel giorno.',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il più alto. Un polpaccio rigido era il fattore di rischio più forte in uno studio caso-controllo del 2003.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni di turno',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani a un muro o a un piano d’acciaio. Tieni la gamba dietro tesa, il tallone dietro ben appoggiato a terra e il bacino in avanti. Fallo su un punto asciutto del pavimento, non vicino al lavello.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone dietro a terra, bacino in avanti',
          alt: 'Una figura appoggiata a un muro con la gamba dietro tesa, con il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutti i giorni di turno',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, tieni il tallone dietro ben appoggiato a terra, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: tallone dietro a terra, piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura con un piede avanti e uno indietro e le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà agli allungamenti il grado A, il più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutti i giorni, appena sveglio',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sul ginocchio opposto. Tira le dita indietro finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi il pavimento.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira le dita indietro finché lo senti nell’arco',
          alt: 'Una figura tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza, 3 a settimana, mai due di fila',
          feel: 'Lavoro nella parte bassa del polpaccio',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Con il ginocchio piegato lavora soprattutto il soleo, quasi senza carico sul tallone, quindi va bene in pausa, seduto su una cassetta rovesciata o su una sedia dello spogliatoio.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza il grado B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza, quando i sollevamenti da seduto diventano facili',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai in piedi su entrambi i piedi, sali dritto sopra gli alluci, poi scendi lentamente. Tieniti a un muro o a una ringhiera. Falli a casa o dopo il turno, non su un pavimento di cucina bagnato.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi lentamente',
          alt: 'Una figura in piedi sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non è stato testato negli studi di questa pagina. È qui per il comfort dopo il turno.' },
          dose: '1\u00A0minuto',
          often: 'Dopo un turno lungo o nei giorni liberi',
          feel: 'Una pressione decisa sotto il piede',
          how: 'Siediti e fai rotolare lentamente la pianta del piede su una pallina da massaggio, con una pressione decisa. Se fai smorfie, alleggerisci.',
          stop: 'Il dolore arriva a 6 su 10',
          image: 'Esercizio: massaggio con la pallina',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con una pressione decisa',
          alt: 'Una figura seduta fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Come inserire gli esercizi in un turno di cucina?',
      paragraphs: [
        'Un turno spezzato o un doppio turno lasciano poco spazio per una routine, quindi lega gli esercizi a qualcosa che fai già:',
        {
          list: [
            '**Se hai 3\u00A0minuti:** l’allungamento del polpaccio e quello del soleo, 30\u00A0secondi per lato, prima del servizio o quando ti cambi le scarpe. Così lavori sul polpaccio rigido, il fattore di rischio più forte nello studio caso-controllo.',
            '**Se hai 5\u00A0minuti:** aggiungi l’allungamento della fascia plantare. Gli allungamenti sono la parte a cui la linea guida del 2023 dà il grado **A**.',
            '**Se hai 10\u00A0minuti:** in un giorno libero o dopo il turno, aggiungi i sollevamenti sulle punte e un minuto di massaggio con la pallina. Il lavoro di forza ha il grado **B**.',
          ],
        },
        'Anche le pause in sé sembrano contare. Su 1.909\u00A0addetti di cucina coreani, le donne che riferivano pause insufficienti avevano odds 1,68\u00A0volte più alte di disturbi muscoloscheletrici (Park e colleghi, 2021). Il legame è stato riportato per le donne, e un sondaggio come questo non può dimostrare un rapporto di causa ed effetto. Detto questo, sedersi qualche minuto tra un picco di lavoro e l’altro è un’abitudine da difendere.',
        'Per la fascite plantare in generale, circa il 90% delle persone migliora con un trattamento non chirurgico, anche se possono servire mesi; vedi [quanto dura la fascite plantare](/it/quanto-dura-fascite-plantare/). La linea guida del 2023 suggerisce anche di adattare il carico sui piedi al lavoro, un consiglio con grado **E** perché si basa sulla teoria, non su studi clinici.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Perché mi fanno così male i piedi dopo aver lavorato in cucina?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'I turni in cucina sommano ore in piedi, brevi spostamenti veloci e pavimenti duri. In un sondaggio su 128\u00A0addetti di cucina, il 46,1% riferiva dolore ai piedi nell’ultimo anno. Stare in piedi per la maggior parte della giornata lavorativa aumentava anche di 3,6\u00A0volte le odds di fascite plantare in uno studio caso-controllo. Gli allungamenti quotidiani del polpaccio e della fascia plantare lavorano sui tessuti più sotto sforzo.',
    },
    {
      q: 'Gli zoccoli vanno bene per i cuochi con dolore ai piedi?',
      cites: [CITE.guideline],
      a: 'Nessuno lo sa con certezza: non abbiamo trovato studi che confrontino zoccoli e scarpe da ginnastica o altre scarpe da cucina per il dolore ai piedi. Per la sicurezza conta soprattutto una suola antiscivolo. Per il dolore al tallone, la linea guida del 2023 dà ai plantari da soli un grado B a sfavore, quindi abbina la scarpa che ti calza meglio agli allungamenti del polpaccio e della fascia plantare, a cui dà il grado A.',
    },
    {
      q: 'Le scarpe antiscivolo funzionano davvero nei ristoranti?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'Per le scivolate, sì. In 475\u00A0lavoratori di 36\u00A0fast food statunitensi, le scarpe antiscivolo erano associate a un tasso di scivolate più basso del 54%. In uno studio randomizzato nelle mense scolastiche, scarpe antiscivolo gratuite hanno ridotto le denunce di infortunio da scivolamento da 3,54 a 1,18 ogni 10.000\u00A0mesi-lavoratore. Questi studi misuravano le scivolate, non il dolore ai piedi.',
    },
    {
      q: 'Ogni quanto vanno cambiate le scarpe da cucina?',
      cites: [CITE.vermaShoeAge],
      a: 'Non esiste una regola testata. In uno studio su 475\u00A0lavoratori di ristoranti, le scarpe antiscivolo usate da meno di sei mesi erano moderatamente più efficaci contro le scivolate di quelle più vecchie, e chi portava scarpe antiscivolo e le ha cambiate con un paio nuovo scivolava il 55% in meno. Controlla il battistrada e sostituisci le scarpe quando il disegno della suola è consumato e liscio.',
    },
    {
      q: 'I tappetini antifatica aiutano chi lavora in cucina?',
      cites: [CITE.waters],
      a: 'Probabilmente sì, per il comfort. Una revisione del 2015 sullo stare in piedi al lavoro elenca i tappetini tra le opzioni con qualche prova di minore fastidio e stanchezza, ma nessuna di quelle ricerche è stata fatta in cucina. Usa un tappetino dove stai fermo in piedi a lungo, e scegline uno che resti piatto e non scivoli su un pavimento bagnato.',
    },
    {
      q: 'Le calze a compressione aiutano i cuochi nei turni lunghi?',
      cites: [CITE.garcia],
      a: 'Potrebbero. In uno studio su 40\u00A0guardie giurate in piedi per turni di circa 12\u00A0ore, sia le calze da 15 a 20\u00A0mmHg sia quelle da 20 a 30\u00A0mmHg hanno evitato l’aumento di fastidio e gonfiore alle gambe visto con le calze normali. Lo studio era piccolo e non in cucina, e le calze non sostituiscono gli allungamenti o il lavoro di forza.',
    },
    {
      q: 'Lavorare come cuoco può far venire la fascite plantare?',
      cites: [CITE.riddle],
      a: 'Il lavoro in cucina porta con sé fattori di rischio noti. In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100 senza, stare in piedi per la maggior parte della giornata lavorativa aumentava le odds di 3,6\u00A0volte e un polpaccio rigido di 23,3\u00A0volte. Nessuno studio ha misurato la fascite plantare proprio nei cuochi.',
    },
    {
      q: 'Cosa posso fare per i piedi doloranti durante un servizio pieno?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Sposta il peso da un piede all’altro, siediti nelle pause quando puoi e fai un allungamento del polpaccio di 30\u00A0secondi contro un muro, su un punto asciutto del pavimento. Negli addetti di cucina coreani, le donne con pause insufficienti avevano odds 1,68\u00A0volte più alte di disturbi muscoloscheletrici. Tieni i sollevamenti sulle punte e le sessioni più lunghe per dopo il turno o per i giorni liberi.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo una scivolata, una caduta, una storta o un oggetto pesante caduto sul piede',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il piede è intorpidito, formicola o brucia, oppure è gonfio, arrossato o caldo',
      'hai sul piede una scottatura, un taglio o una vescica che non migliora, soprattutto se hai il diabete o meno sensibilità ai piedi',
      'un polpaccio o una gamba diventa all’improvviso dolorante e gonfio',
      'il dolore ti sveglia di notte o c’è anche a riposo',
      'il dolore è in un punto preciso e peggiora con l’attività, un quadro che può indicare una frattura da stress',
      'il dolore non si è attenuato dopo diverse settimane con scarpe migliori, più pause e gli esercizi di questa pagina',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per tallone e piede su iPhone e Android. Non conosce i tuoi turni, quindi decidi tu quando fare le sessioni: prima del servizio, tra un turno e l’altro o nei giorni liberi.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto a come stanno i tuoi piedi, e il piano si adatta. Ogni 14\u00A0giorni un breve test controlla la resistenza del polpaccio, la tenuta dell’arco e l’equilibrio. Walkito non fa diagnosi. Se il dolore è acuto, sta peggiorando o ti tiene sveglio di notte, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Dolore ai piedi per cuochi',
  campaign: 'guide-chefs-foot-pain-it',
};
