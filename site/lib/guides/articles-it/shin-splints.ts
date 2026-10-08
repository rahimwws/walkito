import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Italian version of `articles/shin-splints.ts`, written around the queries
 * «periostite tibiale esercizi», «dolore alla tibia corsa» and «sindrome da
 * stress tibiale mediale». Informal «tu». Exercise names as in `it.ts`;
 * «sollevamenti dell’avampiede» (toe raises) is kept distinct from
 * «sollevamenti sulle punte» (heel raises). Figures, doses, grades and
 * qualifiers are identical to the English page. Citations as in English.
 */

/** `3, 5 o 7`: the plan's options as an Italian list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} o ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_IT: Guide = {
  lang: 'it',
  page: 'shinSplints',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizi per la periostite tibiale: cosa aiuta e cosa no',
  description:
    'Esercizi per la periostite tibiale nei runner: cosa dicono gli studi, dosi di partenza, come distinguerla da una frattura da stress e quando farsi visitare.',
  h1: 'Esercizi per la periostite tibiale: cosa aiuta e cosa no',
  lede:
    'La periostite tibiale è un dolore lungo il bordo interno della tibia, distribuito su diversi centimetri invece che in un solo punto. Il nome clinico è sindrome da stress tibiale mediale, o MTSS. La maggior parte delle pagine elenca esercizi come se fosse provato che accelerano il recupero. Una revisione sistematica del 2013 su tutti gli studi sui trattamenti ha trovato che non è stato dimostrato che allungamenti ed esercizi di rinforzo lo accorcino.',
  intro: [
    'Questo non vuol dire che l’esercizio sia inutile. Gli esercizi qui sotto lavorano su resistenza del polpaccio, forza della tibia e controllo dell’anca, le aree in cui i ricercatori hanno trovato differenze tra chi ha la periostite tibiale e chi no. Uno studio caso-controllo ha trovato che i runner con periostite tibiale riuscivano a fare meno sollevamenti sulle punte fino all’esaurimento rispetto a controlli appaiati senza il problema.',
    'Se ricostruire quella resistenza accorci il recupero è ancora una domanda aperta. La leva più sicura, in tutti gli studi finora, è ridurre il carico di corsa che l’ha causata. Il sollevamento sulle punte in sé, con quante ripetizioni fare e quando aggiungere carico, è spiegato più a fondo in [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/). Se passi la giornata in piedi invece di correre, [piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese) tratta gli stessi esercizi per polpaccio e arco per quella causa.',
  ],
  toc: true,
  takeaways: [
    'Una revisione sistematica del 2013 su 11\u00A0studi sui trattamenti ha trovato che non è dimostrato che allungamenti ed esercizi di rinforzo accelerino il recupero dalla sindrome da stress tibiale mediale (Winters e colleghi, 2013).',
    'Nell’unico studio randomizzato sull’esercizio per la periostite tibiale, aggiungere allungamenti e rinforzo del polpaccio a un programma di corsa graduale non ha accorciato il recupero rispetto al solo programma di corsa, in uno studio su 74\u00A0atleti (Moen e colleghi, 2012).',
    'I runner con periostite tibiale riuscivano a fare meno sollevamenti sulle punte fino all’esaurimento rispetto a controlli appaiati, il che fa pensare a un deficit di resistenza del polpaccio (Madeley e colleghi, 2007).',
    'Una dolorabilità localizzata in un solo piccolo punto, invece di un dolore diffuso lungo diversi centimetri di osso, può essere una frattura da stress e richiede un professionista sanitario, non più esercizio.',
  ],
  sections: [
    {
      h2: 'Cos’è la periostite tibiale, e quali esercizi aiutano davvero?',
      keyFact: 'Una revisione sistematica del 2013 su 11\u00A0studi sui trattamenti per la periostite tibiale ha concluso che nessun approccio di allungamento o rinforzo aveva prove chiare di accelerare il recupero (Winters e colleghi, 2013).',
      paragraphs: [
        'La periostite tibiale, o sindrome da stress tibiale mediale, è un infortunio da sovraccarico della tibia e dei tessuti intorno. Il dolore di solito è diffuso, distribuito lungo il bordo interno della tibia per diversi centimetri, e in genere inizia durante o dopo la corsa. Una revisione del 2020 su runner principianti e amatoriali ha trovato che i legami più chiari riguardavano il modo in cui i runner si muovono, tra cui più rotazione dell’anca e un piede che ruota verso l’interno più del solito.',
        'La risposta onesta sugli esercizi per la periostite tibiale è che nessun programma di esercizi specifico ha dimostrato di accelerare il recupero in uno studio controllato. Una revisione sistematica del 2013 ha esaminato 11\u00A0studi sui trattamenti e ha concluso che allungamenti e rinforzo «non si sono dimostrati efficaci nel trattamento della MTSS». Nell’unico studio randomizzato con un gruppo di esercizio, 74\u00A0atleti sono stati divisi in tre gruppi: un programma di corsa graduale da solo, lo stesso programma più allungamenti e rinforzo del polpaccio, e lo stesso programma più calze a compressione. Tutti e tre i gruppi sono migliorati a un ritmo simile.',
        'Quindi gli esercizi qui sotto non sono un protocollo dedicato alla periostite tibiale. Sono esercizi generali per la gamba e l’anca già presenti nel catalogo, che lavorano sui muscoli e sulle articolazioni studiati dai ricercatori in chi ha la periostite tibiale. La mossa più efficace resta ridurre il carico di corsa e ricostruirlo piano.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Quali esercizi aiutano la periostite tibiale, e quanto farne?',
      paragraphs: [
        'Sono esercizi del catalogo dell’app che si sovrappongono ai muscoli e ai fattori di rischio individuati dalla ricerca sulla periostite tibiale. Gli allungamenti del polpaccio e i sollevamenti sulle punte sono gli stessi usati negli [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/), e lavorano sugli stessi tessuti. Sono dosi di partenza, non una prescrizione. Ogni etichetta di evidenza qui sotto è **iniziale**, perché nessun esercizio di questo elenco ha dimostrato in uno studio di accorciare il recupero dalla periostite tibiale. [Come scriviamo queste guide](/it/chi-siamo/).',
        'Se nel check-in segni la tibia come dolorante, Walkito ti dà oscillazioni della caviglia e massaggio con la pallina. I sollevamenti dell’avampiede compaiono nel piano generale come esercizio accessorio dal livello 2 in poi, a turno con le oscillazioni della caviglia. Non c’è un programma dedicato alla periostite tibiale. Se un esercizio porta il dolore a **6/10 o più**, fermati per oggi.',
      ],
      table: {
        head: ['Esercizio', 'Dose', 'Quanto spesso', 'Cosa dovresti sentire', 'Fermati se'],
        rows: [
          ['Allungamento del polpaccio', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni', 'Un allungamento nel polpaccio della gamba dietro tesa', 'Il dolore arriva a 6/10'],
          ['Allungamento del soleo', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni', 'Un allungamento in basso nel polpaccio, vicino al tallone', 'Il dolore arriva a 6/10'],
          ['Sollevamenti dell’avampiede', '3\u00A0serie da 10, entrambi i piedi', 'Giorni di forza', 'Il muscolo della tibia che lavora mentre le dita si alzano', 'Il dolore arriva a 6/10'],
          ['Sollevamenti sulle punte su due piedi', '3\u00A0serie da 10, entrambi i piedi', 'Giorni di forza', 'I polpacci che lavorano, con i due piedi che si dividono il carico', 'Il dolore arriva a 6/10'],
          ['Abduzione dell’anca', '3\u00A0serie da 15, ogni gamba', 'Giorni di forza', 'Lavoro sul lato esterno dell’anca', 'Il dolore arriva a 6/10'],
          ['Equilibrio su una gamba', '3\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Giorni di equilibrio', 'Il piede e la caviglia che fanno piccole correzioni', 'Il dolore arriva a 6/10'],
          ['Oscillazioni della caviglia', '2\u00A0serie da 15, ogni gamba', 'Quasi tutte le sessioni', 'La caviglia che si piega di più, il tallone resta giù', 'Il dolore arriva a 6/10'],
          ['Massaggio con la pallina', '2\u00A0minuti', 'Giorni di recupero', 'Pressione decisa sotto il piede, mai una smorfia', 'Il dolore arriva a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Allungamento del polpaccio',
          evidence: {
            level: 'early',
            why: 'Spesso consigliato per la periostite tibiale. Una revisione sistematica del 2013 ha trovato che non è dimostrato che lo stretching acceleri il recupero dalla periostite tibiale.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone giù e i fianchi in avanti. Polpaccio e tibia si dividono il compito di controllare il piede mentre corri, quindi un polpaccio rigido sposta più carico sulla tibia.',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: {
            level: 'early',
            why: 'Stesso ragionamento dell’allungamento del polpaccio. Non testato da solo come intervento per la periostite tibiale.',
          },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione al muro, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura in allungamento al muro con il ginocchio dietro piegato, la parte bassa del polpaccio evidenziata',
        },
        {
          name: 'Sollevamenti dell’avampiede',
          evidence: {
            level: 'early',
            why: 'Lavora sul tibiale anteriore, il muscolo stesso della tibia. Nessuno studio specifico sulla periostite tibiale, ma è il muscolo che fa male.',
          },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'Il muscolo della tibia che lavora mentre le dita si alzano',
          how: 'Stai in piedi con la schiena appoggiata al muro. Solleva da terra le dita e la parte anteriore di entrambi i piedi, tenendo i talloni giù. Riabbassa piano. È il muscolo sul davanti della tibia, quello che fa male quando la periostite tibiale si accende.',
          image: 'Esercizio: sollevamenti dell’avampiede',
          media: 'tibialis_raise',
          caption: 'Sollevamenti dell’avampiede: schiena al muro, solleva le dita, i talloni restano giù',
          alt: 'Una figura in piedi contro il muro che solleva le dita da terra, con i muscoli della tibia evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: {
            level: 'early',
            why: 'In uno studio caso-controllo i runner con periostite tibiale avevano meno resistenza nel polpaccio. Non testato come trattamento per la periostite tibiale.',
          },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. La resistenza del polpaccio era più bassa nei runner con periostite tibiale che in controlli appaiati, ed è per questo che la forza del polpaccio è in questo elenco.',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Abduzione dell’anca',
          evidence: {
            level: 'early',
            why: 'La rotazione esterna dell’anca è un fattore di rischio confermato in due meta-analisi. Nessuno studio ha testato il rinforzo dell’anca come trattamento per la periostite tibiale.',
          },
          dose: '3\u00A0serie da 15, ogni gamba',
          often: 'Giorni di forza',
          feel: 'Lavoro sul lato esterno dell’anca',
          how: 'Stai in piedi con un elastico intorno alle caviglie e porta una gamba di lato contro l’elastico. Spingi con il tallone, non con le dita. Due meta-analisi hanno trovato che il movimento di rotazione dell’anca è diverso tra chi ha la periostite tibiale e chi no, ed è questa la base per includere il lavoro sull’anca.',
          image: 'Esercizio: abduzione dell’anca',
          media: 'hip_abduction',
          caption: 'Abduzione dell’anca: porta una gamba di lato contro l’elastico',
          alt: 'Una figura in piedi con un elastico intorno alle caviglie che porta una gamba di lato, con l’esterno dell’anca evidenziato',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: {
            level: 'early',
            why: 'Lavoro generale sull’equilibrio. Nessuno studio specifico sulla periostite tibiale alle spalle.',
          },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          how: 'Stai su un piede e guarda un punto fisso. Lascia che il piede oscilli. Quell’oscillazione è il piede che tiene l’equilibrio. Mettiti vicino a un muro se ti serve un appoggio di sicurezza.',
          image: 'Esercizio: equilibrio su una gamba',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascialo fare piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
        {
          name: 'Oscillazioni della caviglia',
          evidence: {
            level: 'early',
            why: 'È quello che l’app ti dà quando segni la tibia come dolorante. Nessuno studio specifico sulla periostite tibiale.',
          },
          dose: '2\u00A0serie da 15, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'La caviglia che si piega di più, il tallone resta giù',
          how: 'Mettiti in affondo vicino a un muro. Porta il ginocchio davanti in avanti sopra le dita, tenendo il tallone appoggiato a terra. Una caviglia che si piega bene permette alla tibia di assorbire l’impatto in modo più uniforme durante la corsa.',
          image: 'Esercizio: oscillazioni della caviglia',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: ginocchio sopra le dita, il tallone resta a terra',
          alt: 'Una figura in affondo che porta il ginocchio in avanti sopra le dita, con la caviglia evidenziata',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: {
            level: 'early',
            why: 'È quello che l’app ti dà quando segni la tibia come dolorante. Una misura di sollievo, non un intervento testato per la periostite tibiale.',
          },
          dose: '2\u00A0minuti',
          often: 'Giorni di recupero',
          feel: 'Pressione decisa sotto il piede',
          how: 'Siediti e fai rotolare lentamente la pianta del piede su una pallina da massaggio, con una pressione decisa. Se fai smorfie, alleggerisci. Il massaggio con la pallina non lavora direttamente sulla tibia, ma scioglie i tessuti sotto il piede che si dividono il carico con la gamba.',
          image: 'Esercizio: massaggio con la pallina',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Che differenza c’è tra periostite tibiale e frattura da stress?',
      paragraphs: [
        'Distinguere la periostite tibiale da una frattura da stress conta, perché le due richiedono risposte diverse. La sindrome da stress tibiale mediale e le fratture da stress della tibia stanno sulla stessa linea continua di lesioni ossee da stress. Sotto un carico continuo, la periostite tibiale può evolvere verso una frattura da stress, ed è il motivo principale per cambiare presto il carico di allenamento invece di continuare a correre con un dolore diffuso alla tibia.',
        'La periostite tibiale di solito dà una dolorabilità diffusa, distribuita lungo diversi centimetri della parte interna della tibia. Una frattura da stress dà una dolorabilità localizzata in un piccolo punto, spesso con gonfiore. Un dolore che si calma con il riscaldamento fa pensare più alla periostite tibiale. Un dolore che continua ad aumentare durante la corsa, o che compare a riposo o di notte, fa pensare più a una frattura da stress. Un dolore dietro il tallone invece che alla tibia è un altro problema, di solito il tendine d’Achille; vedi [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) se il tuo è lì.',
        'Una verifica casalinga spesso citata è un saltello su una gamba che riproduce un dolore acuto e localizzato, che farebbe pensare a una frattura. Ma una revisione del 2011 su American Family Physician non ha trovato prove recenti che ne confermino l’accuratezza, e un test del saltello positivo si vedeva anche in quasi metà dei pazienti con periostite tibiale confermata. Quindi un saltello positivo è un motivo per farti visitare, non un modo affidabile per confermare o escludere da solo una frattura.',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Si può continuare a correre con la periostite tibiale?',
      keyFact: 'Uno studio del 2008 su 532\u00A0runner principianti non ha trovato differenze nei tassi di infortunio tra un aumento settimanale dei chilometri del 10% e una progressione più rapida, quindi quella regola resta non dimostrata (Buist e colleghi, 2008).',
      paragraphs: [
        'Nessuno studio ti dice esattamente di quanto ridurre. Quello che ha un certo sostegno è la forma di un programma di corsa graduale: nell’unico studio randomizzato, tutti e tre i gruppi seguivano un ritorno progressivo alla corsa, e tutti e tre sono migliorati più o meno allo stesso ritmo. La costante era il programma di corsa, non gli esercizi aggiunti o la compressione.',
        'Un dolore acuto durante la corsa, un dolore che peggiora mentre corri o un dolore a riposo sono motivi per fermarti e farti controllare invece di continuare. Se il dolore si calma con il riscaldamento e resta gestibile, una corsa più breve o più facile e meno frequente è una via di mezzo ragionevole mentre la tibia si adatta. I giorni di riposo tra una corsa e l’altra danno all’osso il tempo di rispondere al carico.',
        'La regola del 10%, cioè non aggiungere più del 10% ai chilometri settimanali, è un criterio spesso citato ma non dimostrato. Uno studio del 2008 su 532\u00A0runner principianti non ha trovato differenze nei tassi di infortunio tra un programma basato sulla regola del 10% e uno più rapido. Quello che ha mostrato uno studio del 2014 su 874\u00A0runner è che grandi aumenti improvvisi della distanza portano più infortuni. Graduale è meglio di improvviso, ma una percentuale precisa non ha il sostegno degli studi. [Dolore al tallone quando corri](/heel-pain-runners/) (in inglese) spiega più nel dettaglio lo stesso modo di gestire il carico.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: 'Quali cambiamenti nell’allenamento evitano davvero che la periostite tibiale torni?',
      paragraphs: [
        'Nessun singolo esercizio ha dimostrato in uno studio di prevenire la periostite tibiale. I fattori di rischio individuati da due meta-analisi indipendenti indicano una gestione generale del carico di allenamento e una progressione graduale, non un allungamento o un esercizio di rinforzo in particolare. I fattori di rischio costanti in entrambe le revisioni erano un IMC più alto, un navicular drop maggiore (quanto l’arco si abbassa sotto carico), il sesso femminile, meno anni di esperienza nella corsa e una storia precedente di periostite tibiale.',
        'Uno schema generale per tornare a correre: prima camminare senza dolore, poi corsa leggera su superfici morbide con giorni di riposo in mezzo, poi corse via via più lunghe finché le mattine restano senza dolore. Ogni giorno che riproduce un dolore acuto o localizzato, o un dolore che aumenta durante la corsa invece di calmarsi con il riscaldamento, è un segnale per fermarti, non per stringere i denti.',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Quanto ci mette la periostite tibiale a migliorare?',
      keyFact: 'In uno studio su 74\u00A0atleti con periostite tibiale, il tempo medio per completare il programma di corsa era di circa 105\u00A0giorni nei tre gruppi, anche se l’intervallo era ampio (Moen e colleghi, 2012).',
      paragraphs: [
        'Le fonti variano e nessuna indica un unico numero sostenuto dagli studi. Le indicazioni generali sugli infortuni da sovraccarico dicono che i casi lievi si calmano in poche settimane di attività ridotta, mentre i casi legati a errori di allenamento ricorrenti possono richiedere più tempo se lo stesso carico torna prima che il tessuto si sia adattato.',
        'Nello studio randomizzato su 74\u00A0atleti con periostite tibiale, il tempo medio per completare il programma di corsa era di circa 102-118\u00A0giorni nei tre gruppi (media complessiva 105\u00A0giorni), anche se l’intervallo era ampio.',
        'Visto che la periostite tibiale e le fratture da stress della tibia stanno sulla stessa linea continua, un dolore che non migliora dopo qualche settimana di corsa più leggera e giorni di riposo è un motivo per farlo controllare invece di aspettare ancora. Il segno più chiaro di recupero è camminare senza dolore e poi correre piano senza dolore, in quest’ordine, prima che i chilometri tornino a salire.',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: 'Qual è il modo più veloce per far passare la periostite tibiale?',
      a: 'Nessuno studio ha mostrato che un esercizio o un allungamento acceleri il recupero dalla periostite tibiale. Le prove più vicine vengono da uno studio randomizzato su 74\u00A0atleti in cui aggiungere allungamenti e rinforzo del polpaccio a un programma di corsa graduale non ha accorciato il recupero rispetto al solo programma di corsa. Ridurre il carico di corsa che l’ha causata resta la leva principale, non un esercizio specifico.',
      cites: [CITE.moen],
    },
    {
      q: 'Lo stretching aiuta davvero la periostite tibiale?',
      a: 'Una revisione sistematica del 2013 su 11\u00A0studi sui trattamenti ha trovato che allungamenti ed esercizi di rinforzo «non si sono dimostrati efficaci» per la periostite tibiale, con le prove disponibili. Non vuol dire che lo stretching faccia male, solo che nessuno studio di buona qualità ha mostrato che cambi il decorso del problema. Gli allungamenti del polpaccio restano molto consigliati ed è difficile che peggiorino le cose.',
      cites: [CITE.winters],
    },
    {
      q: 'Si può continuare a correre con la periostite tibiale?',
      a: 'Niente negli studi ti dice a quanti chilometri scendere esattamente. Quello che ha mostrato l’unico studio randomizzato è che un ritorno alla corsa graduale e progressivo ha funzionato più o meno allo stesso modo in tutti e tre i gruppi. Un dolore acuto durante la corsa, un dolore che peggiora mentre corri o un dolore a riposo sono motivi per fermarti e farti controllare invece di stringere i denti.',
      cites: [CITE.moen],
    },
    {
      q: 'La periostite tibiale può diventare una frattura da stress?',
      a: 'La periostite tibiale e le fratture da stress della tibia di solito vengono descritte come punti diversi della stessa linea continua di lesioni ossee da stress. Una periostite tibiale non gestita può evolvere verso una frattura da stress sotto un carico continuo. È il motivo principale per cambiare presto il carico di allenamento invece di continuare a correre con il dolore.',
    },
    {
      q: 'Cosa causa la periostite tibiale nei runner?',
      a: 'Due meta-analisi indipendenti hanno trovato un insieme costante di fattori di rischio: IMC più alto, navicular drop maggiore (quanto l’arco si abbassa sotto carico), sesso femminile, meno anni di esperienza nella corsa e una storia precedente di periostite tibiale. Uno studio caso-controllo a parte ha trovato che i runner con periostite tibiale avevano meno resistenza nel polpaccio, il che fa pensare che un deficit dei flessori plantari possa far parte del quadro.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: 'Esiste un esercizio che impedisce alla periostite tibiale di tornare?',
      a: 'Nessun singolo esercizio ha prove a livello di studi per prevenire la periostite tibiale. I fattori di rischio di due meta-analisi, tra cui IMC, abbassamento dell’arco ed esperienza nella corsa, indicano una gestione graduale del carico di allenamento e un condizionamento generale della gamba, non un esercizio in particolare. È una risposta meno soddisfacente di un esercizio con un nome, ma è quella che la ricerca sostiene.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      q: 'Cosa si può scambiare per periostite tibiale?',
      cites: [CITE.mtssReview],
      a: 'Una frattura da stress della tibia, la sindrome compartimentale cronica da sforzo e la tendinopatia del tibiale posteriore possono tutte dare dolore alla tibia ed essere chiamate periostite tibiale. Una frattura da stress tende a fare male in un punto preciso dell’osso, mentre la sindrome compartimentale dà tensione e intorpidimento che crescono durante la corsa e passano poco dopo che ti fermi. Entrambe richiedono un professionista sanitario, non più carico.',
    },
    {
      q: 'Si può camminare con la periostite tibiale?',
      cites: [CITE.mtssReview],
      a: 'Di solito sì. Camminare ha meno impatto che correre, e molte persone con sindrome da stress tibiale mediale possono continuare a camminare senza riacutizzazioni, purché il dolore resti lieve e si calmi in fretta dopo. Se camminare in sé riproduce un dolore acuto in un solo punto dell’osso, fermati e fatti controllare, perché quello schema fa pensare più a una frattura da stress che alla periostite tibiale.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è localizzato e puntiforme, in un solo piccolo punto dell’osso invece che distribuito su diversi centimetri',
      'il dolore aumenta durante la corsa invece di calmarsi con il riscaldamento',
      'hai dolore a riposo o di notte',
      'la tibia è gonfia in un punto preciso',
      'un saltello su una gamba riproduce un dolore acuto e localizzato',
      'tensione, intorpidimento o formicolio alla gamba o al piede provocati dall’esercizio, che crescono durante l’attività e passano entro pochi minuti da quando ti fermi, che possono essere un segno di sindrome compartimentale',
      'il dolore non è calato dopo diverse settimane di corsa ridotta e giorni di riposo',
      'non riesci a caricare il peso sulla gamba, o zoppichi',
      'la gamba è arrossata, calda, o hai la febbre o non ti senti bene',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: `Walkito non ha un programma dedicato alla periostite tibiale, e questa pagina spiega perché: nessun programma di esercizi ha dimostrato in uno studio di accelerare il recupero dalla periostite tibiale. Quello che Walkito ha è lavoro su polpaccio, caviglia ed equilibrio che riguarda gli stessi muscoli studiati dai ricercatori, più un piano che si adatta a come ti senti ogni mattina.`,
    more: [
      `Scegli ${DAYS}\u00A0giorni a settimana e sessioni da ${MINUTES}\u00A0minuti. Ogni ${PROGRAM.testEveryDays}\u00A0giorni (poi ogni ${PROGRAM.testEveryDaysAfterGoal} quando hai raggiunto il primo obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se il lavoro sulla gamba sta servendo a qualcosa.`,
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore alla tibia è localizzato, peggiora o compare a riposo, rivolgiti a un professionista sanitario prima di caricarlo ancora.',
    ],
    cta: `Inizia con ${PROGRAM.sessionMinutes[0]}\u00A0minuti al giorno.`,
  },
  crumb: 'Esercizi per la periostite tibiale',
  campaign: 'guide-shin-splints-it',
};
