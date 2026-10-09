import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/standing-desk.ts`, written around the queries
 * «scrivania in piedi dolore ai piedi», «quanto stare in piedi alla scrivania»
 * and «tappetino antifatica». Informal «tu». Exercise names as in `it.ts`.
 * Figures, doses, grades and qualifiers are identical to the English page.
 */

export const STANDING_DESK_IT: Guide = {
  lang: 'it',
  page: 'standingDesk',
  mainSource: CITE.buckley,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Scrivania in piedi e dolore ai piedi: perché e cosa aiuta',
  description:
    'Perché la scrivania in piedi fa male ai piedi, quanto stare in piedi prima di sederti, tappetini antifatica ed esercizi da fare alla scrivania.',
  h1: 'Scrivania in piedi e dolore ai piedi: perché succede e cosa aiuta',
  lede:
    'Passare a una scrivania in piedi dovrebbe farti bene, ma nelle prime settimane piedi e gambe potrebbero non essere d’accordo. Il dolore ai piedi con la scrivania in piedi di solito viene dallo stare troppo a lungo nella stessa posizione, non dalla scrivania in sé. La ricerca indica periodi in piedi più brevi, un tappetino, le scarpe giuste e qualche esercizio da fare senza alzarti dalla scrivania.',
  intro: [
    'Una revisione sistematica del 2017 di studi di laboratorio ha trovato che sintomi clinicamente rilevanti alla parte bassa della schiena e agli arti inferiori compaiono dopo circa 40\u00A0minuti in piedi senza interruzioni. Una dichiarazione di esperti del 2015 consiglia di arrivare a 2\u00A0ore al giorno di stazione eretta e attività leggera durante il lavoro, per poi salire a 4\u00A0ore, divise in periodi più brevi invece che in un’unica tirata. Questa pagina copre sia la ricerca sia i passi pratici.',
  ],
  toc: true,
  takeaways: [
    'Una revisione sistematica del 2017 di 25\u00A0studi di laboratorio ha trovato che sintomi muscoloscheletrici clinicamente rilevanti comparivano dopo circa 40\u00A0minuti in piedi senza interruzioni, che scendevano a 42\u00A0minuti nelle persone inclini al mal di schiena. Gli autori consigliavano di non stare in piedi di continuo per più di 40\u00A0minuti (Coenen e colleghi, 2017).',
    'Una dichiarazione di esperti del 2015 commissionata da Public Health England consiglia di accumulare all’inizio 2\u00A0ore al giorno di stazione eretta e attività leggera durante il lavoro, per poi salire a 4\u00A0ore al giorno, divise in periodi più brevi (Buckley e colleghi, 2015).',
    'Una revisione sistematica del 2014 di 14\u00A0studi ha trovato prove sufficienti che le postazioni seduto-in piedi riducono il fastidio alla parte bassa della schiena, senza calo di produttività, ma non ha trovato un rapporto ideale tra tempo seduti e in piedi (Karakolis e Callaghan, 2014).',
    'Una revisione del 2015 della ricerca di medicina del lavoro ha associato lo stare in piedi a lungo a fastidi muscoloscheletrici, stanchezza e dolore alle gambe, e ha elencato tappetini, calze a compressione e scarpe di sostegno tra gli interventi con prove a favore (Waters e Dick, 2015).',
    'Una flessibilità della caviglia ridotta, cioè un polpaccio rigido, era il fattore più forte per la fascite plantare in uno studio caso-controllo del 2003, con una probabilità 23,3\u00A0volte più alta. Stare in piedi per la maggior parte della giornata lavorativa la aumentava di 3,6\u00A0volte (Riddle e colleghi, 2003).',
  ],
  sections: [
    {
      h2: 'Perché la scrivania in piedi fa male ai piedi?',
      keyFact: 'Una revisione sistematica del 2017 di 25\u00A0studi ha trovato che i sintomi alla parte bassa della schiena diventavano clinicamente rilevanti dopo circa 71\u00A0minuti in piedi in generale, ma dopo soli 42\u00A0minuti nelle persone inclini al dolore da stazione eretta (Coenen e colleghi, 2017).',
      paragraphs: [
        'Il dolore ai piedi con la scrivania in piedi nasce per lo stesso motivo per cui fa male qualsiasi stazione eretta prolungata: piedi, polpacci e parte bassa delle gambe reggono un carico statico senza il sollievo che danno la camminata o lo stare seduti. Quando stai fermo in piedi, la gravità fa ristagnare il sangue nella parte bassa delle gambe, i muscoli del polpaccio tengono la stessa posizione senza contrarsi e rilassarsi, e la fascia plantare sotto l’arco assorbe un carico costante.',
        'Una revisione sistematica del 2017 di 25\u00A0studi di laboratorio ha messo insieme i dati di 591\u00A0partecipanti e ha trovato che livelli clinicamente rilevanti di sintomi alla parte bassa della schiena comparivano dopo circa 71\u00A0minuti in piedi senza interruzioni nella popolazione generale, ma dopo soli 42\u00A0minuti nelle persone che tendono ad avere dolore stando in piedi. Per i sintomi agli arti inferiori il quadro era simile. Gli autori hanno indicato 40\u00A0minuti come limite pratico prima di interrompere il tempo in piedi.',
        'Una revisione del 2015 della letteratura di medicina del lavoro ha confermato il legame tra stare in piedi a lungo e fastidi muscoloscheletrici, stanchezza e dolore alle gambe in molti tipi di lavoro in piedi. La revisione ha anche trovato che lo sforzo cardiovascolare e il gonfiore delle gambe aumentano con il tempo passato in piedi.',
      ],
      cites: [CITE.coenen, CITE.waters],
    },
    {
      h2: 'Quanto stare in piedi alla scrivania prima di sederti?',
      keyFact: 'Una dichiarazione di esperti del 2015 consiglia di arrivare a 2\u00A0ore al giorno di stazione eretta e attività leggera, per poi salire a 4\u00A0ore, divise in periodi più brevi (Buckley e colleghi, 2015).',
      paragraphs: [
        'Non c’è una risposta unica che vada bene per tutti, ma la ricerca restringe il campo. Una dichiarazione di esperti del 2015 commissionata da Public Health England e dalla Active Working Community Interest Company ha consigliato a chi lavora alla scrivania di arrivare all’inizio ad accumulare 2\u00A0ore al giorno di stazione eretta e attività leggera durante l’orario di lavoro, per poi salire a 4\u00A0ore al giorno. La dichiarazione precisava che il tempo in piedi va diviso in periodi più brevi, non fatto tutto di fila.',
        'La revisione del 2017 di studi di laboratorio indica che 40\u00A0minuti in piedi di continuo sono il punto in cui i sintomi iniziano a diventare clinicamente rilevanti. Mettendo insieme le due cose, un punto di partenza pratico è stare in piedi 20-30\u00A0minuti, sedersi 20-30\u00A0minuti e ripetere durante la giornata, aggiustando man mano che il corpo si adatta.',
        'Una revisione sistematica del 2014 di 14\u00A0studi sulle postazioni seduto-in piedi ha trovato prove sufficienti che riducono il fastidio alla parte bassa della schiena, senza calo di produttività. La revisione non ha trovato un rapporto ideale tra seduti e in piedi, e gli autori hanno notato che il rapporto migliore probabilmente cambia da persona a persona e da lavoro a lavoro. Quello che le prove sostengono è alternare, non una regola fissa.',
      ],
      sourceNote:
        'Buckley e colleghi (2015): consenso di esperti di un panel internazionale, commissionato da Public Health England. Coenen e colleghi (2017): revisione sistematica di 25\u00A0studi di laboratorio, 591\u00A0partecipanti, analisi dose-risposta aggregata. Karakolis e Callaghan (2014): revisione sistematica di 14\u00A0studi sulle postazioni seduto-in piedi.',
      cites: [CITE.buckley, CITE.coenen, CITE.karakolis],
    },
    {
      h2: 'I tappetini antifatica aiutano il dolore ai piedi con la scrivania in piedi?',
      paragraphs: [
        'I tappetini antifatica hanno qualche prova a favore. La revisione di medicina del lavoro del 2015 elenca i tappetini tra gli interventi con prove di ridurre il fastidio durante la stazione eretta prolungata. Uno studio crossover su 38\u00A0membri di équipe chirurgiche ha trovato che stare su un tappetino antifatica di gomma da 15\u00A0mm durante gli interventi dava punteggi di dolore e stanchezza nettamente più bassi rispetto al pavimento normale.',
        'Il meccanismo è semplice: una superficie più morbida permette ai piedi di fare piccoli aggiustamenti e toglie parte del carico che un pavimento duro concentra su tallone e avampiede. Una revisione sistematica del 2018 sui materiali ammortizzanti durante la stazione eretta prolungata ha notato risultati coerenti di minore fastidio, anche se gli studi erano piccoli e il beneficio riguardava il comfort, non la prevenzione di un problema specifico.',
        'Un tappetino da solo non risolverà il dolore ai piedi, ma è una delle cose più semplici da provare. Se hai già una scrivania in piedi e ti fanno male i piedi, un tappetino insieme a periodi in piedi più brevi e agli esercizi di questa pagina copre le basi principali.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Che scarpe mettere alla scrivania in piedi?',
      paragraphs: [
        'Se lavori da casa, magari stai alla scrivania in calzini o in pantofole. Sono tante ore senza ammortizzazione né sostegno dell’arco. La linea guida del 2023 sul dolore al tallone dà ai plantari da soli una B contro per la fascite plantare, cioè le prove fanno propendere per non usarli come unica soluzione, ma questo riguarda i plantari da soli, non se una scarpa qualsiasi sia meglio di nessuna scarpa.',
        'Un approccio ragionevole: metti una scarpa con un po’ di ammortizzazione e un plantare interno di sostegno quando stai in piedi, anche a casa. Non ti serve una scarpa speciale per la scrivania in piedi. Se alterni in piedi e seduto, puoi toglierti le scarpe nei periodi seduti. Gli esercizi di questa pagina lavorano direttamente sui tessuti. Scarpe e tappetini aiutano il comfort in piedi, ma non sostituiscono lo stretching e il lavoro di forza.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quali esercizi puoi fare alla scrivania per il dolore ai piedi da stazione eretta?',
      keyFact: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio e della fascia plantare una A, il suo grado più alto, e al lavoro di forza una B (Koc e colleghi, 2023).',
      paragraphs: [
        'Questi esercizi lavorano sul polpaccio, sulla fascia plantare e sui piccoli muscoli del piede. Alcuni si fanno alla scrivania durante una pausa da seduto. Altri è meglio farli lontano dalla scrivania, in un altro momento. Se un esercizio porta il dolore a 6 su 10 o più, fermati per oggi.',
        'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio e della fascia plantare il suo grado più alto, A, e al lavoro di forza una B. Entrambi i gradi riguardano la fascite plantare in particolare, ma sono gli stessi tessuti a prendere il carico alla scrivania in piedi. Per l’elenco completo degli esercizi per la fascite plantare, vedi [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      exercises: [
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà all’allungamento del polpaccio una A. Un polpaccio rigido era il fattore di rischio più forte per la fascite plantare in uno studio caso-controllo del 2003.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Fai un passo indietro dalla scrivania, metti le mani sul bordo della scrivania o su un muro e tieni la gamba dietro tesa con il tallone giù. Lavora sul gastrocnemio, il muscolo più grande e superficiale del polpaccio. Puoi farlo nel passaggio da in piedi a seduto.',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, mani sulla scrivania o al muro',
          alt: 'Una figura appoggiata a una scrivania con la gamba dietro tesa e il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: {
            level: 'moderate',
            why: 'Stesso sostegno della linea guida. Lavora sul soleo, il muscolo più profondo del polpaccio, che si allunga solo con il ginocchio piegato.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione, ma piega il ginocchio dietro finché senti l’allungamento più in basso, più vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro per sentirlo vicino al tallone',
          alt: 'Una figura in allungamento alla scrivania con il ginocchio dietro piegato, con la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: {
            level: 'early',
            why: 'I sollevamenti sulle punte da seduto caricano il soleo con un impegno complessivo minore delle versioni in piedi. Non testati in modo specifico per il dolore da scrivania in piedi.',
          },
          dose: '3\u00A0serie da 15, entrambi i piedi',
          how: 'Siediti alla scrivania con i piedi appoggiati a terra. Solleva entrambi i talloni il più in alto possibile, tieni un secondo, poi scendi piano. Lavora sul soleo, il muscolo più profondo del polpaccio, e puoi farlo in qualsiasi pausa da seduto senza alzarti dalla sedia.',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: solleva entrambi i talloni, tieni, scendi piano',
          alt: 'Una figura seduta che solleva entrambi i talloni da terra, con i polpacci evidenziati',
        },
        {
          name: 'Apertura delle dita',
          evidence: {
            level: 'early',
            why: 'Lavora sui muscoli intrinseci del piede. Non fa parte dei programmi testati in questa pagina.',
          },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi',
          how: 'Siediti alla scrivania e apri tutte e cinque le dita il più possibile, poi tieni. Attiva i piccoli muscoli tra le dita che restano compressi nelle scarpe quando stai in piedi. Puoi farlo senza scarpe durante una pausa da seduto.',
          media: 'toe_spread',
          caption: 'Apertura delle dita: apri tutte e cinque le dita e tieni',
          alt: 'Un piede visto dall’alto con le dita ben aperte',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: {
            level: 'early',
            why: 'Una revisione del 2024 ha trovato che l’allenamento del piede corto cambiava la forma dell’arco ma non il dolore. Walkito lo inserisce come parte di un programma più ampio.',
          },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si solleva, senza arricciare le dita. Allena i piccoli muscoli dentro l’arco che lo sostengono quando stai in piedi.',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone così l’arco si solleva',
          alt: 'Una gamba seduta con il piede a terra, con l’arco evidenziato mentre si solleva',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi (in piedi)',
          evidence: {
            level: 'moderate',
            why: 'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una B per la fascite plantare. Costruisce la forza del polpaccio che assorbe il carico in piedi.',
          },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai in piedi alla scrivania, sali dritto sopra gli alluci in circa tre secondi, poi scendi piano. Tieniti al bordo della scrivania per l’equilibrio. La progressione dettagliata, compresa la variante con l’asciugamano, è in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte in piedi: sali sopra gli alluci, scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
      ],
      table: {
        caption: 'Dosi di partenza per il dolore ai piedi con la scrivania in piedi',
        head: ['Esercizio', 'Dose', 'Dove', 'Cosa dovresti sentire'],
        rows: [
          ['Allungamento del polpaccio (ginocchio teso)', '2 x 30\u00A0secondi, ogni gamba', 'Alla scrivania o al muro', 'Un allungamento nella parte alta del polpaccio'],
          ['Allungamento del soleo (ginocchio piegato)', '2 x 30\u00A0secondi, ogni gamba', 'Alla scrivania o al muro', 'Un allungamento in basso nel polpaccio, vicino al tallone'],
          ['Sollevamenti sulle punte da seduto', '3 x 15, entrambi i piedi', 'Alla scrivania, seduto', 'I polpacci che lavorano senza sforzo'],
          ['Apertura delle dita', '3 x 10 (tenuta di 5\u00A0secondi)', 'Alla scrivania, seduto, senza scarpe', 'Le dita che si aprono, nessun dolore'],
          ['Piede corto', '3 x 10 (tenuta di 5\u00A0secondi), ogni piede', 'Alla scrivania, seduto', 'L’arco che si solleva, dita rilassate'],
          ['Sollevamenti sulle punte in piedi', '3 x 10, entrambi i piedi', 'Alla scrivania, in piedi', 'I polpacci che lavorano, non un dolore acuto'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Meglio spostare il peso, usare un poggiapiedi o muoversi di più?',
      paragraphs: [
        'Aiutano tutte e tre, e sono tutte varianti della stessa idea: interrompere la postura statica in piedi. La dichiarazione di esperti del 2015 sottolinea che il lavoro da seduti va interrotto spesso con momenti in piedi, e che lo stare in piedi deve includere attività leggera. Anche solo spostare il peso da un piede all’altro cambia i muscoli che lavorano e favorisce la circolazione nella parte bassa delle gambe.',
        'Un piccolo poggiapiedi o una barra bassa sotto la scrivania ti permette di appoggiare un piede in alto e spostare il carico da un lato all’altro. È una vecchia strategia da reparto di fabbrica, ed è uno degli interventi elencati dalla revisione di medicina del lavoro. Non ti serve un prodotto speciale. Va bene una scatola robusta o una mensola bassa.',
        'Le brevi pause di movimento quando sei seduto sono altrettanto importanti. Alzati, vai in cucina e torna, o fai una serie di sollevamenti sulle punte da seduto o di aperture delle dita dalla tabella sopra. Lo scopo non è un allenamento. È evitare la postura statica che causa il problema.',
      ],
      cites: [CITE.buckley, CITE.waters],
    },
    {
      h2: 'Come passare alla scrivania in piedi senza male ai piedi?',
      paragraphs: [
        'Inizia con meno tempo in piedi di quanto pensi ti serva. La dichiarazione di esperti del 2015 consiglia di arrivare a 2\u00A0ore al giorno di stazione eretta e attività leggera, non di partire da lì. Se sei nuovo allo stare in piedi, inizia con 15-20\u00A0minuti in piedi ogni ora e aumenta piano nel giro di qualche settimana.',
        'Una prima settimana pratica: 15\u00A0minuti in piedi, 45\u00A0minuti seduto, e ripeti durante la giornata. Nella seconda settimana passa a 20\u00A0minuti in piedi e 40 seduto. Verso la terza o quarta settimana prova 30 e 30. Ascolta i piedi e la parte bassa della schiena. Se il fastidio cresce, siediti prima invece di stringere i denti.',
        'Aggiungi un tappetino da subito se ce l’hai. Metti scarpe con un po’ di ammortizzazione, anche a casa. Fai gli allungamenti del polpaccio della tabella sopra almeno una volta al giorno. Se hai già male ai piedi a stare in piedi e vuoi la guida più ampia, [perché mi fanno male i piedi dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) spiega dove si sovrappongono il dolore da scrivania in piedi e problemi come la fascite plantare. Per la versione dedicata agli infermieri, vedi [dolore ai piedi per infermieri](/it/dolore-piedi-infermieri/).',
      ],
      cites: [CITE.buckley],
    },
    {
      h2: 'Il dolore ai piedi con la scrivania in piedi può essere fascite plantare o altro?',
      paragraphs: [
        'Il dolore ai piedi con la scrivania in piedi di solito è un fastidio generico da stazione eretta statica prolungata. Ma se il dolore è acuto, concentrato vicino al tallone e peggiore ai primi passi dopo che sei stato seduto per un po’, quello schema fa pensare alla fascite plantare. Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo, quindi la scrivania in piedi può plausibilmente contribuire.',
        'Gli esercizi che aiutano i due problemi si sovrappongono molto. Se il tuo dolore segue lo schema della fascite plantare, [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/) è la guida più completa. Se senti gli archi piatti, vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/). Se non sei sicuro, senti un professionista sanitario prima di caricare il piede con gli esercizi.',
      ],
      cites: [CITE.riddle],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo stare in piedi alla scrivania?',
      a: 'Una dichiarazione di esperti del 2015 consiglia di arrivare a 2\u00A0ore al giorno di stazione eretta e attività leggera durante il lavoro, per poi salire a 4\u00A0ore, divise in periodi più brevi. Una revisione sistematica del 2017 ha trovato che i sintomi muscoloscheletrici diventavano clinicamente rilevanti dopo circa 40\u00A0minuti in piedi di continuo. Un punto di partenza pratico è stare in piedi 20-30\u00A0minuti, poi seduto 20-30\u00A0minuti.',
      cites: [CITE.buckley, CITE.coenen],
    },
    {
      q: 'I tappetini antifatica funzionano davvero con la scrivania in piedi?',
      a: 'Una revisione di medicina del lavoro del 2015 elenca i tappetini tra gli interventi con prove di ridurre il fastidio durante la stazione eretta prolungata. Uno studio crossover su membri di équipe chirurgiche ha trovato punteggi di dolore e stanchezza più bassi con un tappetino di gomma da 15\u00A0mm rispetto al pavimento normale. Il beneficio riguarda comfort e stanchezza, non la prevenzione di un problema specifico. Un tappetino con periodi in piedi più brevi e allungamenti del polpaccio copre più di un tappetino da solo.',
      cites: [CITE.waters],
    },
    {
      q: 'La scrivania in piedi può causare la fascite plantare?',
      a: 'Stare in piedi per la maggior parte della giornata lavorativa aumentava di 3,6\u00A0volte la probabilità di fascite plantare in uno studio caso-controllo con 50\u00A0casi e 100\u00A0controlli. Una scrivania in piedi aumenta le ore in piedi ogni giorno, quindi può plausibilmente contribuire se il polpaccio è già rigido, che era il fattore di rischio indipendente più forte, con una probabilità 23,3\u00A0volte più alta. Gli allungamenti del polpaccio sono il modo più diretto di lavorare su entrambi i fattori.',
      cites: [CITE.riddle],
    },
    {
      q: 'Meglio stare seduti o in piedi tutto il giorno?',
      a: 'Nessuna delle due. La revisione del 2014 di Karakolis e Callaghan ha trovato prove sufficienti che le postazioni seduto-in piedi riducono il fastidio alla parte bassa della schiena, senza calo di produttività, ma non ha trovato un rapporto ideale tra seduti e in piedi. La revisione del 2017 di Coenen ha trovato che stare in piedi senza interruzioni dà sintomi dopo circa 40\u00A0minuti. Le prove sostengono l’alternanza, non la scelta di una delle due.',
      cites: [CITE.karakolis, CITE.coenen],
    },
    {
      q: 'Che esercizi fare alla scrivania in piedi?',
      a: 'In piedi: allungamenti del polpaccio contro il bordo della scrivania (2\u00A0tenute da 30\u00A0secondi per lato) e sollevamenti sulle punte in piedi (3\u00A0serie da 10). Nelle pause da seduto: sollevamenti sulle punte da seduto (3\u00A0serie da 15), apertura delle dita e l’esercizio del piede corto. Lavorano su polpaccio, fascia plantare e muscoli intrinseci del piede, che reggono il carico in piedi. Se un esercizio porta il dolore a 6 su 10 o più, fermati per oggi.',
      cites: [CITE.guideline],
    },
    {
      q: 'Perché i piedi fanno più male a stare fermi in piedi che a camminare?',
      a: 'Camminare attiva la pompa del polpaccio, che a ogni passo rimanda il sangue verso l’alto dalla parte bassa delle gambe. Stando fermi in piedi quella pompa si spegne, quindi il sangue ristagna nei piedi e nelle gambe, e i muscoli tengono la stessa posizione statica invece di contrarsi e rilassarsi. Una revisione sistematica del 2017 ha confermato questo meccanismo e ha trovato che i sintomi agli arti inferiori compaiono con regolarità nella stazione eretta statica in laboratorio.',
      cites: [CITE.coenen],
    },
    {
      q: 'Cos’è la regola 20-8-2 per la scrivania in piedi?',
      a: 'La regola 20-8-2 è un’indicazione di ergonomia: dividi ogni blocco di 30\u00A0minuti in 20\u00A0minuti seduto, 8\u00A0minuti in piedi e 2\u00A0minuti in movimento. È una convenzione generale, non una formula testata, ma va d’accordo con il punto principale di questa pagina: nessuna posizione tenuta per ore è ideale, e cambi di postura brevi e frequenti riducono il carico statico che stanca i piedi.',
    },
    {
      q: 'Stare in piedi peggiora la fascite plantare?',
      a: 'Può succedere. Stare in piedi tiene la fascia plantare e il polpaccio sotto un carico prolungato, senza le pause camminando che fanno circolare il sangue e allentano la tensione. Nella ricerca sulla stazione eretta prolungata, stare in piedi per gran parte della giornata lavorativa è un fattore di rischio indipendente per la fascite plantare. Se hai già la fascite plantare, una scrivania in piedi su un pavimento duro senza pause né allungamenti può peggiorare i sintomi.',
      cites: [CITE.riddle],
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'il piede è intorpidito, formicola, brucia, è gonfio o caldo',
      'il tallone o il piede è arrossato, o hai la febbre o non ti senti bene',
      'il dolore ti sveglia di notte',
      'il dolore è acuto, o peggiora anche se stai più seduto',
      'il dolore è in un solo punto preciso e peggiora con l’attività, che può essere lo schema di una frattura da stress e non di fastidio da stazione eretta',
      'una gamba o un piede si è gonfiato all’improvviso ed è dolorante, arrossato o caldo',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
      'il dolore non si è calmato dopo diverse settimane di periodi in piedi più brevi, un tappetino e gli esercizi di questa pagina',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text:
      'Non devi capire da solo l’ordine, le dosi o quando progredire. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Se il dolore da scrivania in piedi segue lo schema del dolore mattutino tipico della fascite plantare, il primo obiettivo è un dolore mattutino a 1 su 10 o meno per 14\u00A0giorni di fila.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto il primo obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se il lavoro sta dando risultati.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore è acuto, peggiora o ti tiene sveglio di notte, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Scrivania in piedi e dolore ai piedi',
  campaign: 'guide-standing-desk-it',
};
