import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/*
 * Translated from `en.ts` (2026-10-08), written around the Italian queries:
 * «esercizi piede piatto», «dolore all'arco plantare», «fascite plantare»,
 * «dolore al tallone», «spina calcaneare». Informal «tu». Figures, doses,
 * grades and qualifiers are identical to `en.ts`. The app has no Italian
 * catalogue yet, so exercise names are plain Italian descriptions. Numbers and
 * units are joined with a non-breaking space.
 *
 * Pages that exist only in English (exercise pages, program, evidence, FAQ,
 * other articles) keep their English path, marked «(in inglese)».
 */

/** `3, 5 o 7`: the plan's options as an Italian list. */
function either(options: readonly number[]): string {
  return `${options.slice(0, -1).join(', ')} o ${options[options.length - 1]}`;
}

const DAYS = either(PROGRAM.daysPerWeek);
const MINUTES = either(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, as `en.ts` and the About pages. Calcaneal
 * stress fracture is one of the causes of heel pain the 2023 guideline names
 * alongside plantar fasciitis, which is why the site spells out its signs.
 */
const RED_FLAGS = {
  h2: 'Rivolgiti prima a un professionista sanitario se',
  bullets: [
    'il dolore è iniziato dopo un infortunio o una caduta',
    'non riesci a caricare il peso sul piede, o zoppichi',
    'si accompagna a intorpidimento, formicolio, bruciore, gonfiore o calore',
    'il tallone è arrossato, o hai la febbre o non ti senti bene',
    'ti sveglia di notte',
    'è un dolore acuto, o peggiora anche se hai ridotto il carico',
    'stringere i lati del tallone fa male, o il dolore aumenta durante la corsa dopo che hai aumentato i chilometri; entrambi possono essere segni di una frattura da stress',
    'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    'ti fanno male entrambi i talloni e altre articolazioni sono gonfie o rigide',
    'non è migliorato dopo diverse settimane di esercizi e meno carico',
    'da adulto un arco si è abbassato all’improvviso',
  ],
} as const;

export const FLAT_FEET_IT: Guide = {
  lang: 'it',
  page: 'flatFeet',
  mainSource: CITE.brijwasi,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizi per piede piatto e dolore all’arco plantare',
  description:
    'Esercizi per piede piatto flessibile e arco plantare abbassato: dosi, frequenza, cosa devi sentire, cosa dicono gli studi e cosa fare se ti fa male l’arco.',
  h1: 'Esercizi per il piede piatto e il dolore all’arco',
  lede: 'La sera hai i piedi stanchi e ti fanno male gli archi. Quando sei in piedi, i piedi sembrano cedere verso l’interno e gli archi scendono verso il pavimento. Magari ti hanno detto che il piede piatto è fatto così e non serve pensarci. Voler fare qualcosa ha senso, e c’è ricerca vera su come allenare l’arco.',
  intro: [
    'Inizia con una verifica: guarda se il tuo piede piatto è flessibile, cioè se l’arco torna quando sollevi il piede. Nel piede piatto flessibile, uno studio su 52\u00A0persone ha visto che sei settimane di esercizi del piede corto, lavoro sulla caviglia, rinforzo dell’anca e allungamenti, fatti insieme, cambiavano la forma dell’arco più che in un gruppo di controllo. Le prove sul piede corto da solo sono più deboli. Una revisione del 2024 non ha trovato un cambiamento chiaro nel complesso, e ha visto un cambiamento in una misura dell’arco solo nei programmi più lunghi di sei settimane. Entrambi hanno misurato la forma dell’arco, non il dolore. Se il tuo dolore è vicino al tallone, la ricerca sul dolore al tallone è la guida migliore.',
  ],
  takeaways: [
    'Lo studio randomizzato di questa pagina riguardava il piede piatto flessibile, quello in cui l’arco torna quando il piede è sollevato da terra (Brijwasi e Borkar, 2023).',
    'In quello studio su 52\u00A0persone, sei settimane di piede corto, caviglia, anca e allungamenti hanno cambiato la forma dell’arco più che nel gruppo di controllo (Brijwasi e Borkar, 2023).',
    'Una revisione del 2024 sull’allenamento del piede corto non ha trovato un cambiamento chiaro nel complesso, e un miglioramento in una misura dell’arco solo nei programmi più lunghi di sei settimane (Cheng e colleghi, 2024).',
    'Un piede piatto rigido, che resta piatto anche sollevato da terra, è strutturale, e l’esercizio non ne cambierà la forma.',
    'Questi studi hanno misurato la forma dell’arco, non il dolore. Per il dolore al tallone, la linea guida del 2023 dà all’allungamento della fascia plantare e del polpaccio il grado più alto, A, e al lavoro di forza una B.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Come capire se il piede piatto è flessibile o rigido?',
      paragraphs: [
        'Puoi capire se il tuo piede piatto è flessibile o rigido con una verifica di pochi secondi. Conta perché lo studio di questa pagina riguardava il piede piatto flessibile, e l’esercizio non cambierà la forma di uno rigido. La revisione del 2024 ha messo insieme studi sul piede piatto in generale. Walkito non controlla il tipo di piede, quindi questa verifica tocca a te:',
      ],
      bullets: [
        'Stai in piedi scalzo e guarda l’interno del piede. Con il piede piatto, l’arco è basso o tocca il pavimento.',
        'Solleva quel piede da terra, oppure sali sulle punte, e guarda di nuovo.',
        'Se l’arco torna, il piede piatto è **flessibile**. Gli esercizi qui sotto sono per questo tipo.',
        'Se l’arco resta piatto anche sollevato da terra, il piede è **rigido**. È un problema strutturale che l’esercizio non cambierà. Lascia da parte l’obiettivo della tenuta dell’arco e rivolgiti a un professionista sanitario prima di iniziare un programma.',
        '«Arco caduto» di solito è solo un altro nome per il piede piatto. Ma se da adulto un arco si è abbassato **all’improvviso**, da un lato solo, rivolgiti a un professionista sanitario prima di allenarlo, qualunque sia il risultato della verifica.',
      ],
    },
    {
      h2: 'Gli esercizi per il piede piatto, con le dosi di partenza',
      paragraphs: [
        'Gli esercizi per il piede piatto in Walkito iniziano con la raccolta dell’asciugamano e il sollevamento dell’alluce, poi salgono attraverso tre versioni del piede corto. L’apertura delle dita, l’inversione con elastico, l’equilibrio su una gamba, l’abduzione dell’anca e gli allungamenti del polpaccio completano il resto. Sono le dosi di partenza di Walkito, non una prescrizione. Falli a piedi nudi. [Come scriviamo queste guide](/it/chi-siamo/).',
        'Il piede corto è il cuore del lavoro sull’arco. Accorci il piede tirando l’avampiede verso il tallone, così l’arco si alza, senza arricciare le dita. Il piede corto, il rinforzo dell’anca e gli allungamenti sono ciò che lo studio ha testato. La raccolta dell’asciugamano, il sollevamento dell’alluce, l’apertura delle dita, l’inversione con elastico e l’equilibrio su una gamba sono aggiunte di Walkito.',
        'Fai un esercizio per l’arco alla volta, quello del tuo livello. Walkito ti fa salire di un gradino quando le ultime due sessioni con quell’esercizio ti sono sembrate facili. Finché l’arco è il tuo obiettivo, ogni sessione ha un esercizio per l’arco, e gli altri si danno il turno. Alcuni esercizi richiedono un asciugamano o un elastico. Walkito ti chiede cosa hai e toglie quello che non hai. Se un esercizio porta il dolore a **6/10 o più**, fermati per oggi. È il punto in cui Walkito chiude una sessione.',
      ],
      table: {
        head: ['Esercizio', 'Dose', 'Quanto spesso', 'Cosa dovresti sentire', 'Fermati se'],
        rows: [
          ['Raccolta dell’asciugamano', '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede', 'Ogni sessione, finché è il tuo livello', 'I piccoli muscoli sotto l’arco che lavorano', 'Il dolore arriva a 6/10'],
          ['Sollevamento dell’alluce', '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede', 'Ogni sessione, finché è il tuo livello', 'L’alluce che si muove da solo', 'Il dolore arriva a 6/10'],
          ['Piede corto, da seduto', '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede', 'Ogni sessione, finché è il tuo livello', 'L’arco che si alza, con le dita rilassate', 'Il dolore arriva a 6/10'],
          ['Piede corto, in piedi', '3\u00A0serie da 8, tieni 5\u00A0secondi, entrambi i piedi', 'Ogni sessione, finché è il tuo livello', 'L’arco che lavora mentre porta il tuo peso', 'Il dolore arriva a 6/10'],
          ['Piede corto, su una gamba', '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede', 'Ogni sessione, finché è il tuo livello', 'Più lavoro nell’arco, con l’alluce che spinge a terra', 'Il dolore arriva a 6/10'],
          ['Apertura delle dita', '3\u00A0serie da 10, ogni piede', 'Giorni di forza, a turno con l’inversione con elastico', 'Sforzo nei piccoli muscoli del piede', 'Il dolore arriva a 6/10'],
          ['Inversione con elastico', '3\u00A0serie da 12, ogni piede', 'Giorni di forza, dopo sei sessioni di piede corto in piedi', 'Lavoro lungo l’interno del piede e della caviglia', 'Il dolore arriva a 6/10'],
          ['Equilibrio su una gamba', '3\u00A0tenute da 20\u00A0secondi, ogni gamba', 'Giorni di equilibrio', 'Il piede e la caviglia che fanno piccole correzioni', 'Il dolore arriva a 6/10'],
          ['Abduzione dell’anca', '3\u00A0serie da 10, ogni gamba, in piedi, con elastico', 'Giorni di forza, quando l’obiettivo sinistra e destra è nel tuo piano', 'Lavoro sul lato esterno dell’anca', 'Il dolore arriva a 6/10'],
          ['Allungamento di polpaccio e soleo', '2\u00A0tenute da 30\u00A0secondi per ogni allungamento, ogni gamba', 'Quasi tutte le sessioni, a turno con gli altri allungamenti', 'Un allungamento nel polpaccio, poi più in basso, vicino al tallone', 'Il dolore arriva a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Raccolta dell’asciugamano',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'I piccoli muscoli sotto l’arco che lavorano',
          how: 'Siediti con un asciugamano steso a terra sotto il piede. Tira verso di te l’asciugamano con le dita, tenendo il tallone giù. La raccolta dell’asciugamano sveglia i piccoli muscoli sotto l’arco.',
          image: 'Esercizio: raccolta dell’asciugamano',
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: tira l’asciugamano con le dita, il tallone resta giù',
          alt: 'Una figura seduta che tira un asciugamano con le dita di un piede',
        },
        {
          name: 'Sollevamento dell’alluce',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’alluce che si muove da solo',
          how: 'Siediti con i piedi appoggiati. Solleva solo l’alluce e tieni. Le altre quattro dita restano ferme a terra. Questo esercizio insegna all’alluce a muoversi da solo, il primo interruttore dell’arco.',
          image: 'Esercizio: sollevamento dell’alluce',
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: alza solo l’alluce, le altre quattro dita restano giù',
          alt: 'Un piede a terra che solleva solo l’alluce, con l’arco evidenziato',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023. Da solo, il piede corto ha risultati più deboli.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’arco che si alza',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si alza, e tieni. Non arricciare le dita. Arricciarle è l’errore più comune in questo esercizio.',
          image: 'Esercizio: piede corto, da seduto',
          media: 'short_foot_seated',
          caption: 'Piede corto, da seduto: tira l’avampiede verso il tallone così l’arco si alza',
          alt: 'Una gamba di una persona seduta con il piede a terra, i muscoli dell’arco evidenziati mentre l’arco si alza',
        },
        {
          name: 'Piede corto, in piedi',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023. Da solo, il piede corto ha risultati più deboli.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, entrambi i piedi',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’arco che lavora sotto il tuo peso',
          how: 'Stai in piedi con il peso su entrambi i piedi e fai lo stesso movimento. Le dita restano piatte e lunghe. Si alza solo l’arco. È lo stesso muscolo della versione da seduto, che ora regge il tuo peso.',
          image: 'Esercizio: piede corto, in piedi',
          media: 'short_foot_double',
          caption: 'Piede corto, in piedi: dita piatte e lunghe, si alza solo l’arco',
          alt: 'Due gambe in piedi, con l’arco e il polpaccio di una gamba evidenziati mentre l’arco si alza',
        },
        {
          name: 'Piede corto, su una gamba',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023. Da solo, il piede corto ha risultati più deboli.' },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'Più lavoro nell’arco',
          how: 'Stai su un piede e alza l’arco. Tieni l’alluce giù. Se si alza, l’arco sta barando. Lavorando un piede alla volta si vede qual è il lato più debole.',
          image: 'Esercizio: piede corto, su una gamba',
          media: 'short_foot_single',
          caption: 'Piede corto, su una gamba: alza l’arco e tieni l’alluce giù',
          alt: 'Un piede appoggiato a terra, con l’arco evidenziato mentre si alza',
        },
        {
          name: 'Apertura delle dita',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 10, ogni piede',
          often: 'Giorni di forza',
          feel: 'Sforzo nei piccoli muscoli del piede',
          how: 'Apri le dita il più possibile, poi tieni. Dita che si aprono condividono il carico con l’arco. Lo scopo non è sollevarle.',
          image: 'Esercizio: apertura delle dita',
          media: 'toe_spread',
          caption: 'Apertura delle dita: apri le dita il più possibile, e tieni',
          alt: 'Un piede visto di fronte, con i piccoli muscoli tra le dita evidenziati mentre si aprono',
        },
        {
          name: 'Inversione con elastico',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 12, ogni piede',
          often: 'Giorni di forza',
          feel: 'Lavoro lungo l’interno del piede e della caviglia',
          how: 'Siediti con un elastico intorno al piede e ruota il piede verso l’interno contro l’elastico. Muovi il piede, non la gamba. Il ginocchio resta fermo. Walkito aggiunge questo esercizio solo dopo sei sessioni di piede corto in piedi, così prima lavorano i muscoli dell’arco.',
          image: 'Esercizio: inversione con elastico',
          media: 'band_inversion',
          caption: 'Inversione con elastico: ruota il piede verso l’interno contro l’elastico, il ginocchio resta fermo',
          alt: 'Una gamba con un elastico intorno al piede che ruota il piede verso l’interno, con la parte bassa della gamba evidenziata',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, ogni gamba',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          how: 'Stai su un piede e guarda un punto fisso. Lascia che il piede oscilli. Deve farlo, perché quell’oscillazione è il piede che tiene l’equilibrio.',
          image: 'Esercizio: equilibrio su una gamba',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascialo fare piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
        {
          name: 'Abduzione dell’anca',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023.' },
          dose: '3\u00A0serie da 10, ogni gamba',
          often: 'Giorni di forza',
          feel: 'Lavoro sul lato esterno dell’anca',
          how: 'Stai in piedi con un elastico e porta una gamba di lato contro l’elastico. Spingi con il tallone, non con le dita. Un’anca che cede scarica il peso sull’arco.',
          image: 'Esercizio: abduzione dell’anca',
          media: 'hip_abduction',
          caption: 'Abduzione dell’anca: porta una gamba di lato contro l’elastico',
          alt: 'Una figura in piedi con un elastico intorno alle gambe che porta una gamba di lato, con l’esterno dell’anca evidenziato',
        },
        {
          name: 'Allungamento di polpaccio e soleo',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023. Quello studio ha misurato la forma dell’arco, non il dolore.' },
          dose: '2\u00A0tenute da 30\u00A0secondi per ogni allungamento, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio, poi vicino al tallone',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone giù e i fianchi in avanti, e senti l’allungamento nel polpaccio. Poi piega il ginocchio dietro finché lo senti più in basso, vicino al tallone. Quello è il soleo, il muscolo più profondo del polpaccio.',
          image: 'Esercizio: allungamento di polpaccio e soleo',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: mani al muro, gamba dietro tesa, tallone giù',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
      ],
    },
    {
      h2: 'Quanto ci vuole perché gli esercizi cambino l’arco?',
      paragraphs: [
        'Finora, nella ricerca, gli esercizi per il piede piatto hanno cambiato l’arco dopo sei settimane o più, e solo nel piede piatto flessibile. In uno studio su 52\u00A0persone con piede piatto **flessibile**, un programma di sei settimane con esercizi del piede corto, lavoro sulla caviglia, rinforzo dell’anca e allungamenti ha cambiato due misure della forma dell’arco più che nel gruppo di controllo.',
        'Le prove sul piede corto da solo sono più deboli. Una revisione del 2024 ha messo insieme studi sull’allenamento del piede corto nel piede piatto in generale. Nel complesso non ha trovato una differenza chiara rispetto ai gruppi di controllo nella forma dell’arco o nella postura del piede. Solo i programmi più lunghi di sei settimane hanno migliorato quanto l’arco si abbassa sotto il tuo peso, e gli autori dicono che servono studi più grandi. Quindi metti in conto almeno sei settimane, e di più se fai solo il piede corto.',
        `Anche per questo il piano di Walkito non ha una data di fine. L’obiettivo dell’arco, tenerlo per ${PROGRAM.goals.archHoldSeconds}\u00A0secondi, resta nel piano finché non lo raggiungi, per quante settimane servano. La tenuta dell’arco viene testata ogni ${PROGRAM.testEveryDays}\u00A0giorni finché non raggiungi il primo obiettivo, poi ogni ${PROGRAM.testEveryDaysAfterGoal}, così vedi se si sta muovendo. Gli studi sono riassunti nella [pagina delle evidenze](/science/) (in inglese).`,
      ],
      sourceNote:
        'Brijwasi e Borkar: il navicular drop (quanto scende l’osso navicolare, all’interno dell’arco, quando stai in piedi) è migliorato di 0,4\u00A0cm, e l’angolo dell’arco di 16\u00A0gradi, più che nel gruppo di controllo. Cheng e colleghi: nessuna differenza significativa nel complesso nel navicular drop o nel Foot Posture Index; il navicular drop è migliorato in modo significativo solo nel sottogruppo dei programmi più lunghi di sei settimane.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Gli esercizi per il piede piatto aiutano il dolore all’arco?',
      paragraphs: [
        'Nessuno studio di questa pagina mostra che gli esercizi per il piede piatto riducano il dolore all’arco, perché nessuno lo ha misurato. Lo studio e la revisione hanno misurato la forma dell’arco. Mostrano che l’arco si può allenare. Non sono una prova che gli stessi esercizi diano sollievo a un arco dolorante.',
        'Il dolore al tallone, e a volte lungo l’arco, può venire dalla fascia plantare, la banda di tessuto che corre sotto la pianta del piede. Se il tuo è vicino al tallone, la linea guida del 2023 sul dolore al tallone è la guida migliore. Per il dolore sotto il tallone, dà all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**, e al lavoro di forza una **B**. Quegli esercizi sono in [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/).',
        'Walkito può lavorare su entrambi insieme, come obiettivi separati: mattine senza dolore per il dolore, e la tenuta dell’arco per l’arco. Come si dividono la settimana è spiegato nella [pagina del piano](/program/) (in inglese).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cosa succede quando raggiungi l’obiettivo dell’arco?',
      paragraphs: [
        `Quando raggiungi l’obiettivo dell’arco, cioè tenerlo per ${PROGRAM.goals.archHoldSeconds}\u00A0secondi, Walkito tiene il lavoro sull’arco nel piano a una dose più bassa. L’obiettivo passa al mantenimento e il successivo prende il suo posto. Raggiungerlo non vuol dire che il lavoro sull’arco si ferma.`,
        `Anche i test continuano, ogni ${PROGRAM.testEveryDaysAfterGoal}\u00A0giorni dopo il primo obiettivo raggiunto. Se la tenuta dell’arco inizia a calare, lo vedi nei numeri invece di tirare a indovinare.`,
        'Se ti fa male anche il tallone, il tallone ha i suoi esercizi e il suo obiettivo: vedi [esercizi e allungamenti per la fascite plantare](/it/esercizi-fascite-plantare/). Le domande sull’app hanno risposta nelle [domande frequenti](/faq/) (in inglese).',
      ],
    },
  ],
  faq: [
    {
      q: 'Gli esercizi possono cambiare il piede piatto?',
      a: 'L’esercizio può cambiare la forma dell’arco nel piede piatto flessibile, ma non in quello rigido. In uno studio su 52\u00A0persone il cui arco tornava con il piede sollevato, sei settimane di piede corto, caviglia, anca e allungamenti hanno cambiato le misure dell’arco più che in un gruppo di controllo. Un piede che resta piatto anche sollevato è strutturale, e l’esercizio non ne cambierà la forma.',
    },
    {
      q: 'Quanto ci vuole perché gli esercizi per il piede piatto funzionino?',
      a: `Metti in conto sei settimane o più. In uno studio sul piede piatto flessibile, un programma di sei settimane di piede corto, anca e allungamenti ha cambiato le misure dell’arco. Per il solo piede corto, una revisione del 2024 non ha trovato un cambiamento chiaro nel complesso, e un miglioramento solo nei programmi più lunghi di sei settimane. Walkito tiene l’obiettivo di ${PROGRAM.goals.archHoldSeconds}\u00A0secondi di tenuta dell’arco finché non lo raggiungi.`,
    },
    {
      q: 'Cosa aiuta il dolore sotto l’arco del piede?',
      a: 'Qui non ci sono prove dirette, perché nessuno studio citato in questa pagina ha misurato il dolore all’arco. Se il dolore è vicino al tallone e legato alla fascia plantare, la linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio una A e al lavoro di forza una B. Gli esercizi per l’arco di questa pagina allenano la forma dell’arco, non il dolore. Vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
    },
    {
      q: 'Il piede piatto può causare mal di schiena?',
      a: 'Le prove sono deboli e contrastanti, non un sì chiaro. Lo studio più grande sul tema, il [Framingham Foot Study](https://doi.org/10.1093/rheumatology/ket298) su circa 1.900 adulti, non ha trovato un legame tra piede piatto e mal di schiena lombare. Ha trovato un piccolo legame nelle donne tra un piede che cede verso l’interno camminando e il mal di schiena lombare, e nessuno negli uomini. Quindi il piede piatto da solo spiega poco il mal di schiena. Se hai entrambi, considerali due problemi separati, e per la schiena rivolgiti a un professionista sanitario.',
      cites: [CITE.menz],
    },
    {
      q: 'Che differenza c’è tra arco caduto e piede piatto?',
      a: 'Di solito nessuna: «arco caduto» è un nome comune per il piede piatto. La maggior parte dei piedi piatti c’è da sempre ed è flessibile, e l’arco torna quando il piede è sollevato da terra. A volte però l’espressione indica altro: il [piede piatto acquisito dell’adulto](https://doi.org/10.2174/1874325001711010714), spesso per un indebolimento del tendine tibiale posteriore, il tendine che sostiene l’arco. Tende a comparire da adulti e può dare dolore o gonfiore all’interno della caviglia. Se da adulto un arco si è abbassato, rivolgiti a un professionista sanitario prima di allenarlo.',
      cites: [CITE.ling],
    },
    {
      q: 'Quali esercizi rinforzano gli archi dei piedi?',
      a: 'Il principale è l’esercizio del piede corto: alzi l’arco avvicinando l’avampiede al tallone, senza arricciare le dita. Walkito lo inizia da seduto, con 3\u00A0serie da 8 e 5\u00A0secondi di tenuta, poi in piedi, poi su una gamba. Raccolta dell’asciugamano, sollevamento dell’alluce, apertura delle dita e inversione con elastico allenano i piccoli muscoli intorno all’arco. Tutto questo è per il piede piatto flessibile. Passo passo: [esercizio del piede corto](/exercises/short-foot-exercise/) (in inglese).',
    },
    {
      q: 'Quanto spesso devo fare gli esercizi per il piede piatto?',
      a: `Fai il lavoro del piede corto in ogni giorno di allenamento finché l’arco è il tuo obiettivo. In Walkito scegli ${DAYS} giorni di allenamento a settimana, e finché l’arco è il tema della settimana, ogni sessione include un esercizio per l’arco, un livello più difficile alla volta. La tenuta dell’arco si ritesta ogni ${PROGRAM.testEveryDays}\u00A0giorni, poi ogni ${PROGRAM.testEveryDaysAfterGoal} dopo il primo obiettivo.`,
    },
    {
      q: 'Quando andare dal medico per il piede piatto?',
      a: 'Rivolgiti a un professionista sanitario prima di iniziare se l’arco resta piatto con il piede sollevato da terra, o se da adulto un arco si è abbassato all’improvviso. Vale lo stesso per un dolore iniziato dopo un infortunio, che ti sveglia di notte, o che si accompagna a intorpidimento, formicolio, gonfiore o calore. Un dolore acuto o in peggioramento richiede un professionista, non più esercizio.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'l’arco resta piatto quando il piede è sollevato da terra'],
  },
  program: {
    h2: 'Farlo come un piano',
    text: `Non devi capire da solo l’ordine, le dosi o quando passare a una versione più difficile. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per un piede piatto flessibile, quell’obiettivo è la tenuta dell’arco: tenere l’arco alzato per ${PROGRAM.goals.archHoldSeconds}\u00A0secondi. Se hai anche dolore, prima vengono le mattine senza dolore.`,
    more: [
      `Scegli ${DAYS} giorni a settimana e sessioni da ${MINUTES}\u00A0minuti. Ogni ${PROGRAM.testEveryDays}\u00A0giorni (poi ogni ${PROGRAM.testEveryDaysAfterGoal} quando hai raggiunto il primo obiettivo), un breve test controlla tenuta dell’arco, resistenza del polpaccio ed equilibrio, così vedi se il lavoro sull’arco sta servendo.`,
    ],
    cta: `Inizia con ${PROGRAM.sessionMinutes[0]}\u00A0minuti al giorno.`,
  },
  crumb: 'Esercizi per piede piatto',
  campaign: 'guide-flat-feet-it',
};

export const HEEL_PAIN_IT: Guide = {
  lang: 'it',
  page: 'heelPain',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: '8 esercizi per fascite plantare e dolore al tallone',
  description:
    'Otto esercizi e allungamenti per la fascite plantare: dosi, cosa evitare, quando fare stretching e i gradi di evidenza della linea guida del 2023.',
  h1: 'Esercizi e allungamenti per la fascite plantare e il dolore al tallone',
  lede: 'I primi passi appena sceso dal letto sono il momento peggiore della giornata. Una fitta proprio sul tallone, prima ancora del caffè. Si calma quando ti muovi, poi torna dopo che sei stato seduto un po’. Quello schema ha un nome, [fascite plantare](/plantar-fasciitis/) (in inglese), e la linea guida clinica del 2023 sul dolore al tallone la indica come la causa più riconosciuta del dolore sotto il tallone.',
  intro: [
    'Cercare informazioni confonde, perché ognuno dice una cosa diversa. Le prove indicano due cose: allungare la fascia plantare e il polpaccio, e fare lavoro di forza per il polpaccio. Una linea guida clinica del 2023 dà allo stretching il grado più alto, A, e al lavoro di forza una B. In uno studio su 48\u00A0persone, tutte con plantari, sollevamenti lenti sulle punte con un asciugamano sotto le dita hanno aiutato più in fretta del solo stretching. A dodici mesi i due gruppi erano pari. Fare entrambe le cose è ciò che la linea guida sostiene.',
  ],
  takeaways: [
    'La linea guida del 2023 sul dolore al tallone del Journal of Orthopaedic & Sports Physical Therapy dà all’allungamento della fascia plantare e del polpaccio il grado più alto, A, e al lavoro di forza una B.',
    'In uno studio su 48\u00A0persone, sollevamenti sulle punte con carico alto hanno ridotto il dolore e migliorato le attività quotidiane più in fretta dello stretching, e a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015).',
    'Per il dolore al tallone quando corri, la stessa linea guida consiglia di cambiare il carico invece di fermare tutto, un consiglio di grado E perché si basa sulla teoria, non su studi.',
    'Rivolgiti prima a un professionista sanitario se il dolore è iniziato dopo un infortunio, si accompagna a intorpidimento o gonfiore, ti sveglia di notte o fa male quando stringi il tallone.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Gli esercizi per la fascite plantare, con le dosi di partenza',
      paragraphs: [
        'Gli esercizi per la fascite plantare in Walkito sono allungamenti per la fascia plantare e il polpaccio, lavoro di forza per il polpaccio che sale a piccoli passi, e un massaggio con la pallina. Sono le dosi di partenza di Walkito, non una prescrizione. Un riassunto di una pagina è nelle [schede di esercizi da stampare](/printable-exercise-sheets/) (in inglese). [Come scriviamo queste guide](/it/chi-siamo/).',
        'L’ordine conta. Finché il dolore è il tuo obiettivo, Walkito tiene leggero il lavoro sul polpaccio: prima i sollevamenti sulle punte da seduto, poi quelli su due piedi, poi la tenuta sulle punte, un gradino alla volta. Sali di un gradino quando le ultime due sessioni con quell’esercizio ti sono sembrate facili. Il [sollevamento sulle punte con asciugamano](/exercises/towel-heel-raise/) (in inglese) carica di più la fascia plantare, quindi arriva solo quando il dolore del mattino è sceso e l’obiettivo passa alla forza del polpaccio. Se un esercizio porta il dolore a **6/10 o più**, fermati per oggi. È il punto in cui Walkito chiude una sessione.',
      ],
      table: {
        head: ['Esercizio', 'Dose', 'Quanto spesso', 'Cosa dovresti sentire', 'Fermati se'],
        rows: [
          ['Allungamento della fascia plantare', '2\u00A0tenute da 30\u00A0secondi, ogni piede', 'Quasi tutte le sessioni, a turno con gli allungamenti del polpaccio', 'Un allungamento lungo l’arco, non nel polpaccio', 'Il dolore arriva a 6/10'],
          ['Allungamento del polpaccio', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni, a turno con gli altri allungamenti', 'Un allungamento nel polpaccio della gamba dietro tesa', 'Il dolore arriva a 6/10'],
          ['Allungamento del soleo', '2\u00A0tenute da 30\u00A0secondi, ogni gamba', 'Quasi tutte le sessioni, a turno con gli altri allungamenti', 'Un allungamento in basso nel polpaccio, vicino al tallone', 'Il dolore arriva a 6/10'],
          ['Sollevamenti sulle punte da seduto', '3\u00A0serie da 10, entrambi i piedi', 'Giorni di forza, 3 a settimana, mai due di fila', 'Lavoro facile nei polpacci, quasi senza carico sul tallone', 'Il dolore arriva a 6/10'],
          ['Sollevamenti sulle punte su due piedi', '3\u00A0serie da 10, entrambi i piedi', 'Giorni di forza, quando quelli da seduto sono facili', 'I polpacci che lavorano, con i due piedi che si dividono il carico', 'Il dolore arriva a 6/10'],
          ['Tenuta sulle punte', '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi', 'Giorni di forza, il gradino successivo', 'I polpacci che lavorano per restare fermi in alto', 'Il dolore arriva a 6/10'],
          ['Sollevamenti sulle punte con asciugamano', '4\u00A0serie da 10, ogni gamba, con peso aggiunto', 'Giorni di forza, quando l’obiettivo passa alla forza del polpaccio', 'Lavoro intenso nel polpaccio e una tensione sotto l’arco', 'Il dolore arriva a 6/10'],
          ['Massaggio con la pallina', '1\u00A0minuto', 'Giorni di recupero', 'Pressione decisa sotto il piede, mai una smorfia', 'Il dolore arriva a 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà allo stretching una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni piede',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento lungo l’arco',
          how: 'Siediti e accavalla il piede sull’altro ginocchio. Tira indietro le dita finché senti l’allungamento nell’arco, non nel polpaccio. Fai il primo sul bordo del letto, prima che il piede tocchi terra.',
          image: 'Esercizio: allungamento della fascia plantare',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita finché lo senti nell’arco',
          alt: 'Una figura che tira indietro le dita di un piede, con la pianta del piede evidenziata',
        },
        {
          name: 'Allungamento del polpaccio',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà allo stretching una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nel polpaccio',
          how: 'Appoggia le mani al muro. Tieni la gamba dietro tesa, il tallone giù e i fianchi in avanti. Un polpaccio rigido tira il tallone tutto il giorno, quindi questo allungamento conta anche se lo senti più in alto.',
          image: 'Esercizio: allungamento del polpaccio',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, fianchi in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo',
          evidence: { level: 'strong', why: 'La linea guida del 2023 sul dolore al tallone dà allo stretching una A, il suo grado più alto.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento vicino al tallone',
          how: 'Mettiti nella stessa posizione, poi piega il ginocchio dietro finché senti l’allungamento più in basso, vicino al tallone. Il soleo, il muscolo più profondo del polpaccio, si allunga solo con il ginocchio piegato.',
          image: 'Esercizio: allungamento del soleo',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché lo senti vicino al tallone',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa dei polpacci evidenziata',
        },
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'Lavoro facile nei polpacci',
          how: 'Siediti con i piedi appoggiati e spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono resistenza. Da seduto lavori il polpaccio quasi senza carico sul tallone.',
          image: 'Esercizio: sollevamenti sulle punte da seduto',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta che solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico mentre il polpaccio si sveglia.',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Tenuta sulle punte',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo gradino non è stato testato da solo.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano per restare fermi',
          how: 'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non riabbassarti. Restare fermo in alto carica il tendine senza rimbalzi.',
          image: 'Esercizio: tenuta sulle punte',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano',
          evidence: { level: 'moderate', why: 'È la routine di uno studio su 48\u00A0persone, e la linea guida del 2023 dà al lavoro di forza una B.' },
          dose: '4\u00A0serie da 10, ogni gamba, con peso aggiunto',
          often: 'Giorni di forza',
          feel: 'Lavoro intenso nel polpaccio',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Prendi tre secondi per salire, tieni due secondi in alto e prendi tre secondi per scendere. A questo livello Walkito aggiunge peso, per esempio uno zaino. È l’asciugamano che fa lavorare la fascia plantare e non solo il polpaccio.',
          image: 'Esercizio: sollevamenti sulle punte con asciugamano',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, due in alto, tre giù',
          alt: 'Una figura che sale sulle punte su un gradino con un asciugamano arrotolato, con i polpacci evidenziati',
        },
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non testato negli studi di questa pagina. È qui per dare sollievo tra una sessione e l’altra.' },
          dose: '1\u00A0minuto',
          often: 'Giorni di recupero',
          feel: 'Pressione decisa sotto il piede',
          how: 'Siediti e fai rotolare lentamente la pianta del piede su una pallina da massaggio, con una pressione decisa. Se fai smorfie, alleggerisci. Far rotolare il piede calma il tessuto dopo che ha lavorato. Niente pallina? Il massaggio plantare usa invece passate decise con il pollice dal tallone alle dita.',
          image: 'Esercizio: massaggio con la pallina',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina, con la pianta evidenziata',
        },
      ],
    },
    {
      h2: 'Quali esercizi evitare con la fascite plantare?',
      paragraphs: [
        'Evita le attività ad alto impatto che fanno impennare il carico sul tallone mentre il dolore è acceso, ed evita di camminare scalzo su pavimenti duri appena alzato.',
        'Salti, scatti e pliometria scaricano sulla fascia plantare un picco di forza improvviso. Quando il tessuto è irritato, quel picco può farti tornare indietro. La linea guida del 2023 consiglia di regolare il carico sui piedi al lavoro, nello sport e nella vita di tutti i giorni, un consiglio di grado E. Non vieta esercizi specifici. La domanda è se il carico supera quello da cui il tessuto riesce a riprendersi durante la notte. Camminare scalzo su pavimenti duri è un fattore scatenante comune, perché la fascia è più rigida dopo il riposo e una superficie dura non ammortizza.',
        'Altre due cose a cui fare attenzione. Far rotolare una pallina sotto il piede deve dare una sensazione decisa, non una fitta. Se fa male, alleggerisci o saltalo. E se hai anche dolore al tendine d’Achille vicino alla parte posteriore del tallone, evita discese profonde del tallone dal bordo di un gradino, perché la discesa può caricare l’inserzione dell’Achille. Fai il [sollevamento sulle punte con asciugamano](/exercises/towel-heel-raise/) (in inglese) a terra in piano finché un professionista sanitario non ha escluso problemi all’Achille.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Qual è il momento migliore per gli allungamenti per la fascite plantare?',
      paragraphs: [
        'Prima dei primi passi del mattino e prima di alzarti dopo essere stato seduto a lungo. Sono i due momenti in cui la fascia plantare è più rigida e fa più facilmente male.',
        'Uno studio del 2003 su 82\u00A0persone con fascite plantare cronica ha testato un allungamento specifico della fascia plantare fatto prima di caricare il peso. I pazienti tenevano l’allungamento 10\u00A0secondi, lo ripetevano 10 volte, tre volte al giorno, con la prima serie prima del primo passo del mattino. A otto settimane, il gruppo che faceva questo allungamento aveva molto meno dolore ai primi passi del mattino del gruppo che faceva solo un allungamento del polpaccio. A due anni, dopo che tutti i pazienti avevano ricevuto lo stesso allungamento, entrambi i gruppi erano migliorati.',
        'In questa pagina, l’[allungamento della fascia plantare](/exercises/plantar-fascia-stretch/) (in inglese) inizia sul bordo del letto, prima che il piede tocchi terra. Poi viene l’[allungamento del polpaccio](/exercises/calf-stretch/) (in inglese). Walkito mette il primo allungamento prima di alzarti per lo stesso motivo dello studio: allungare prima che il tessuto prenda carico è più delicato che farlo dopo.',
      ],
      cites: [CITE.digiovanni2003],
    },
    {
      h2: 'Cosa aiuta il dolore al tallone del mattino?',
      paragraphs: [
        'Il dolore al tallone ai primi passi del mattino è lo schema più spesso legato alla fascite plantare. Di solito si calma quando inizi a muoverti, e torna dopo che sei stato seduto un po’.',
        'Due cose in questa pagina puntano a questo. L’allungamento della fascia plantare si fa **prima di alzarti**, sul bordo del letto con le dita tirate indietro, così i tuoi primi passi non sono il tuo primo allungamento. E la linea guida del 2023 dà una **A** ai tutori notturni, portati per 1-3\u00A0mesi, per chi continua ad avere dolore ai primi passi del mattino. I tutori notturni sono da valutare con un professionista sanitario. Walkito non li fornisce.',
        'Walkito ti chiede del dolore del mattino ogni giorno per lo stesso motivo. Il dolore del mattino è il segnale più chiaro di come il piede ha retto il giorno prima, e decide quanto ti chiede la sessione di oggi. Altro su cosa lo provoca è in [dolore al tallone al mattino](/heel-pain-in-the-morning/) (in inglese).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Riposare o continuare a correre con il dolore al tallone?',
      paragraphs: [
        'Se il dolore al tallone da fascite plantare si accende quando corri, cambia il carico invece di fermare tutto. La linea guida del 2023 consiglia di imparare a regolare il carico sui piedi al lavoro, nello sport e nella vita di tutti i giorni. Quel consiglio è di grado E, cioè si basa sulla teoria più che su studi. Quindi continua con gli allungamenti ogni giorno, e riduci quello che peggiora il tallone.',
        'In una brutta mattina, tieni gli allungamenti e togli i sollevamenti sulle punte per quel giorno. La mattina dopo ti dice com’è andata. Se dopo una corsa i primi passi sono chiaramente peggiori, quella corsa era più di quanto il tallone potesse reggere. Walkito la legge allo stesso modo. Una giornata intensa in piedi trasforma la sessione di forza successiva in una di recupero più leggera, e una mattina dolorosa accorcia la sessione senza annullarla.',
        'Fermati e rivolgiti a un professionista sanitario se correre fa molto male o se il dolore peggiora di settimana in settimana. Vale lo stesso per un dolore che aumenta durante la corsa dopo che hai aumentato i chilometri, o un dolore quando stringi i lati del tallone. Entrambi possono essere segni di una frattura da stress, una delle altre cause di dolore al tallone che la linea guida nomina.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Meglio il lavoro di forza o lo stretching per la fascite plantare?',
      paragraphs: [
        'Il lavoro di forza e lo stretching aiutano entrambi la fascite plantare, e il lavoro di forza aiuta prima.',
        'In uno studio su 48\u00A0persone con fascite plantare confermata da ecografia, tutti portavano plantari. Un gruppo aggiungeva sollevamenti sulle punte con carico alto a giorni alterni. L’altro allungava la fascia plantare ogni giorno. A tre mesi, il gruppo dei sollevamenti era chiaramente avanti su dolore e attività quotidiane. A dodici mesi, i due gruppi erano pari. Il lavoro di forza ha anticipato il miglioramento. Non lo ha reso più grande.',
        'La linea guida sostiene di fare entrambe le cose. Il ragionamento studio per studio è nella [pagina delle evidenze](/science/) (in inglese).',
      ],
      sourceNote:
        'Misurato con il Foot Function Index: 29\u00A0punti in meno nel gruppo dei sollevamenti a tre mesi (IC al 95%: 6-52, p = 0,016), e 22 contro 16 a dodici mesi, una differenza non significativa.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'Cosa raccomanda la linea guida del 2023 per la fascite plantare?',
      paragraphs: [
        'La linea guida del 2023 sulla fascite plantare dà a ogni opzione un grado in base alla forza delle prove. A è il grado più alto. Un grado segnato «contro» vuol dire che la linea guida consiglia di non usare quell’opzione.',
      ],
      table: {
        head: ['Opzione', 'Grado'],
        rows: [
          ['Allungamento della fascia plantare e del polpaccio', '**A**'],
          ['Terapia manuale (lavoro con le mani su articolazioni e tessuti molli di gamba e piede), da un professionista', '**A**'],
          ['Taping insieme ad altra fisioterapia, per migliorare dolore e funzionalità fino a 6\u00A0settimane', '**A**'],
          ['Tutori notturni per 1-3\u00A0mesi, se i primi passi di ogni mattina continuano a fare male', '**A**'],
          ['Esercizi contro resistenza e di forza', '**B**'],
          ['Laserterapia a bassa intensità e dry needling, da un professionista', '**B**'],
          ['Plantari da soli, per ridurre il dolore nel breve periodo', '**B contro**'],
          ['Plantari insieme ad altre cure', '**C**'],
          ['Ultrasuoni terapeutici aggiunti allo stretching', '**A contro**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Scarpe e plantari aiutano la fascite plantare?',
      paragraphs: [
        'Le scarpe con un buon sostegno aiutano, ma i plantari da soli non bastano per la maggior parte delle persone. La linea guida del 2023 dà alle ortesi (plantari e supporti per l’arco) come opzione a sé un **B contro**, cioè le prove dicono di non contare solo su di loro. Insieme a stretching e lavoro di forza, le ortesi prendono una **C**.',
        'I tutori notturni, portati mentre dormi per 1-3\u00A0mesi, ricevono il grado più alto della linea guida, **A**, per chi continua ad avere dolore ai primi passi di ogni mattina. Tengono ferma la caviglia così la fascia plantare non si accorcia durante la notte. Chiedi a un professionista sanitario se vale la pena provarli.',
        'La linea guida non valuta tipi specifici di scarpe, ma le calzature senza sostegno sono un fattore di rischio comunemente riconosciuto. Scarpe con supporto per l’arco e un contrafforte del tallone rigido si prendono una parte del carico che la fascia plantare porterebbe da sola. Se ti fanno male i piedi dopo una lunga giornata in piedi, vedi [piedi doloranti dopo una giornata in piedi](/feet-hurt-standing-all-day/) (in inglese). Chi lavora a turni può iniziare da [infermieri e dolore ai piedi](/nurses-foot-pain/) (in inglese).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Cosa succede quando il tallone smette di fare male?',
      paragraphs: [
        `Quando il dolore al tallone passa, Walkito continua a una dose più bassa, perché il dolore al tallone può tornare. Quando raggiungi l’obiettivo delle mattine senza dolore (dolore del mattino a 1/10 o meno per ${PROGRAM.painFreeDays}\u00A0giorni di fila), quell’obiettivo passa al mantenimento e il successivo prende il suo posto.`,
        'Se hai anche il piede piatto, l’arco ha i suoi esercizi e i suoi tempi: vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/). Le domande sull’app hanno risposta nelle [domande frequenti](/faq/) (in inglese).',
      ],
    },
  ],
  faq: [
    {
      q: 'Posso continuare a correre con la fascite plantare?',
      a: 'Non devi fermare tutto. Cambia il carico. La linea guida clinica del 2023 consiglia di imparare a regolare il carico sui piedi, con grado E, cioè un consiglio che viene dalla teoria, non da studi. Riduci quello che peggiora il tallone e continua ad allungare ogni giorno. Se la mattina dopo i primi passi sono chiaramente peggiori, la corsa era troppo. Un dolore acuto o in peggioramento richiede un professionista sanitario.',
    },
    {
      q: 'Perché il dolore al tallone è peggio al mattino?',
      a: 'Il dolore al tallone ai primi passi dopo il sonno o dopo essere stato seduto è lo schema più spesso legato alla fascite plantare. La linea guida del 2023 sul dolore al tallone lo descrive come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo». La spiegazione più comune è che il tessuto sotto il piede si irrigidisce a riposo, poi viene caricato all’improvviso dai primi passi. Per questo l’allungamento della fascia plantare si fa prima di alzarsi, e per questo la linea guida del 2023 dà ai tutori notturni una A.',
    },
    {
      q: 'Quanto dura la fascite plantare?',
      a: 'Per la maggior parte delle persone si calma nel giro di mesi, non di settimane. I tempi completi sono in [quanto dura la fascite plantare](/how-long-does-plantar-fasciitis-last/) (in inglese). Una [revisione del 2020](https://doi.org/10.1177/2473011419896763) riporta che circa il 90% delle persone migliora con cure non chirurgiche come stretching e plantari, spesso in 3-6\u00A0mesi. Alcuni ci mettono di più, e un gruppo più piccolo ha ancora dolore dopo un anno. Nessun programma di esercizi può promettere dei tempi. La linea guida del 2023 sul dolore al tallone dà allo stretching e al lavoro di forza sul polpaccio i suoi gradi migliori, ed è per questo che vengono prima in questa pagina.',
      cites: [CITE.latt],
    },
    {
      q: 'Meglio lo stretching o il rinforzo per la fascite plantare?',
      a: 'Aiutano entrambi, e il rinforzo funziona più in fretta. In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico alto erano chiaramente avanti rispetto allo stretching a tre mesi, ma a dodici mesi i due gruppi erano pari. La linea guida del 2023 dà allo stretching una A e al lavoro di forza una B. La [pagina delle evidenze](/science/) (in inglese) ha i dettagli.',
    },
    {
      q: 'La spina calcaneare è la stessa cosa della fascite plantare?',
      a: 'Non proprio. Spesso si dice «spina calcaneare» intendendo la fascite plantare, ma a rigore la spina calcaneare è una crescita ossea che si vede ai raggi X. La fascite plantare è un dolore che viene dalla banda di tessuto sotto il piede. Gli esercizi di questa pagina sono quelli che la linea guida del 2023 valuta per il dolore sotto il tallone. Solo un professionista sanitario può dire cosa c’è dietro il tuo.',
    },
    {
      q: 'Quanto spesso devo fare gli esercizi per la fascite plantare?',
      a: `Allunga quasi tutti i giorni e fai il lavoro di forza per il polpaccio nei giorni di forza. In Walkito scegli ${DAYS} giorni di allenamento a settimana, e ogni settimana ha tre giorni di forza, mai due di fila. Gli allungamenti ci sono in quasi tutte le sessioni, con il primo allungamento della fascia plantare prima che il piede tocchi terra. Nello studio che Walkito segue, i sollevamenti sulle punte si facevano a giorni alterni.`,
    },
    {
      q: 'Quali sono i migliori allungamenti per il dolore al tallone?',
      a: 'L’allungamento della fascia plantare e quelli di polpaccio e soleo sono quelli a cui la linea guida del 2023 sul dolore al tallone dà una A, il suo grado più alto. Accavalla il piede sul ginocchio e tira indietro le dita per 30\u00A0secondi, la prima volta prima di alzarti al mattino. Poi allunga il polpaccio contro il muro, ginocchio dietro teso, poi piegato. Walkito parte da 2\u00A0tenute da 30\u00A0secondi ciascuna. Tecnica: [allungamento della fascia plantare](/exercises/plantar-fascia-stretch/) (in inglese).',
      cites: [CITE.guideline],
    },
    {
      q: 'Quando andare dal medico per il dolore al tallone?',
      a: 'Rivolgiti prima a un professionista sanitario se il dolore è iniziato dopo un infortunio o una caduta, se non riesci a caricare il peso sul piede, o se si accompagna a intorpidimento, formicolio, gonfiore, calore o febbre. Vale lo stesso se ti sveglia di notte, se è acuto o peggiora, o se fa male quando stringi il tallone, che può indicare una frattura da stress. Walkito non fa diagnosi.',
    },
    {
      q: 'Camminare aiuta la fascite plantare?',
      a: 'Camminare di solito va bene, ma da solo non è un esercizio per la fascite plantare. La linea guida del 2023 consiglia di regolare il carico invece di fermare l’attività. Se una camminata ti lascia i primi passi della mattina dopo chiaramente peggiori, la distanza o il ritmo erano troppo. Allungarsi prima di camminare, soprattutto con l’[allungamento della fascia plantare](/exercises/plantar-fascia-stretch/) (in inglese) prima dei primi passi, rende più facili i primi minuti.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Farlo come un piano',
    text: `Non devi capire da solo l’ordine, le dosi o per quanto restare su ogni esercizio. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è una mattina migliore: dolore a 1/10 o meno per ${PROGRAM.painFreeDays}\u00A0giorni di fila.`,
    more: [
      `Scegli ${DAYS} giorni a settimana e sessioni da ${MINUTES}\u00A0minuti. Ogni ${PROGRAM.testEveryDays}\u00A0giorni (poi ogni ${PROGRAM.testEveryDaysAfterGoal} quando hai raggiunto quell’obiettivo), un breve test controlla la [resistenza del polpaccio](/calf-raise-test/) (in inglese), la tenuta dell’arco e l’equilibrio, così vedi cosa sta cambiando.`,
    ],
    cta: `Inizia con ${PROGRAM.sessionMinutes[0]}\u00A0minuti al giorno.`,
  },
  crumb: 'Esercizi per la fascite plantare',
  campaign: 'guide-plantar-fasciitis-it',
};
