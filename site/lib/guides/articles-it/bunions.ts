import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/bunions.ts`, written around the queries
 * «alluce valgo esercizi», «esercizi per l’alluce valgo» and «separatori
 * per alluce valgo». Informal «tu». Exercise names as in `it.ts`
 * («Apertura delle dita», «Sollevamento dell’alluce», «Piede corto, da
 * seduto», «Raccolta dell’asciugamano»). Figures, doses, grades and
 * qualifiers are identical to the English page. Citations as in English.
 */

export const BUNIONS_IT: Guide = {
  lang: 'it',
  page: 'bunions',
  mainSource: CITE.kimHV,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizi per l’alluce valgo: cosa dicono gli studi',
  description:
    'Gli esercizi per l’alluce valgo riducono il dolore o frenano la deviazione? Uno sguardo onesto ad apertura delle dita, abduttore dell’alluce e separatori.',
  h1: 'Esercizi per l’alluce valgo: cosa possono fare e cosa no',
  lede:
    'Gli esercizi per l’alluce valgo non possono correggere l’angolo osseo dell’alluce valgo. È un cambiamento strutturale dell’articolazione, e nessun esercizio lo annulla. Quello che mostrano alcuni piccoli studi è che esercizi specifici possono rinforzare l’abduttore dell’alluce, il muscolo che tira l’alluce verso l’interno, e in alcuni casi questo si accompagna a un modesto sollievo dal dolore e a un piccolo cambiamento dell’angolo dell’alluce valgo. Questa pagina spiega cosa hanno trovato quegli studi, cosa non hanno testato e quali esercizi hanno il sostegno migliore.',
  toc: true,
  takeaways: [
    'In uno studio su 24\u00A0persone con alluce valgo da lieve a moderato, 8\u00A0settimane di esercizi di apertura delle dita più un’ortesi hanno ridotto l’angolo dell’alluce valgo in media di 3,4\u00A0gradi e aumentato le dimensioni dell’abduttore dell’alluce. Il gruppo con la sola ortesi non ha mostrato cambiamenti (Kim e colleghi, 2015).',
    'Uno studio su 56\u00A0donne con alluce valgo moderato ha trovato che 3\u00A0mesi di mobilizzazione del piede ed esercizi, insieme a un separatore per dita, miglioravano dolore e funzione a 1\u00A0anno, rispetto a un gruppo di controllo che non aveva ricevuto nessun intervento (Abdalbary, 2018).',
    'I separatori per dita possono alleviare la pressione tra le dita e ridurre il dolore nel breve periodo, ma le prove che cambino l’angolo dell’alluce valgo nel lungo periodo sono deboli.',
    'L’esercizio non sostituisce la chirurgia per un alluce valgo da moderato a grave che fa male ogni giorno. Può aiutare con sintomi lievi e con il sostegno muscolare intorno all’articolazione.',
  ],
  sections: [
    {
      h2: 'Gli esercizi possono correggere l’alluce valgo?',
      figure: { id: 'bunion', caption: 'L’alluce valgo è una sporgenza ossea all’articolazione dell’alluce, con l’alluce che pende verso le altre dita.', alt: 'Vista dall’alto delle ossa del piede, con l’alluce inclinato verso il secondo dito e una sporgenza rossa sul lato interno dell’articolazione dell’alluce.' },
      paragraphs: [
        'No. L’alluce valgo, in termini clinici hallux valgus (in modo colloquiale anche «cipolla»), è una deviazione ossea della prima articolazione metatarso-falangea (l’articolazione dell’alluce). Il primo metatarso scivola verso l’interno e l’alluce si inclina verso l’esterno. Una volta che l’osso si è spostato e la capsula articolare si è adattata, l’esercizio non può rimetterlo a posto.',
        'Quello che l’esercizio può fare è rinforzare i muscoli intorno all’articolazione. L’abduttore dell’alluce corre lungo l’interno dell’arco e riporta l’alluce in asse. In chi ha l’alluce valgo questo muscolo è più debole e più piccolo che in chi non ce l’ha. Rinforzarlo non annulla il cambiamento strutturale, ma può migliorare il controllo, ridurre i sintomi e forse rallentare un’ulteriore deviazione nei casi lievi.',
        'Un commento clinico del 2016 sul Journal of Orthopaedic and Sports Physical Therapy ha proposto per l’alluce valgo iniziale un approccio di rinforzo muscolare basato sulla biomeccanica, centrato sui muscoli intrinseci del piede. L’autore sosteneva che la deformità progredisce in parte per uno squilibrio muscolare, quindi ripristinare l’attività dei muscoli potrebbe avere un effetto protettivo. È un ragionamento plausibile, ma le prove dirette a lungo termine sono ancora limitate.',
      ],
    },
    {
      h2: 'Cosa dice la ricerca sugli esercizi per l’alluce valgo?',
      keyFact: 'Uno studio su 60\u00A0donne (120\u00A0piedi) che confrontava un mese di tutore notturno, esercizi o elettrostimolazione ha trovato che tutti e tre miglioravano dolore e funzione, ma il tutore funzionava meglio di esercizi ed elettroterapia (Külünkoğlu e colleghi, 2021).',
      paragraphs: [
        'Le prove migliori vengono da una manciata di piccoli studi. Nessuno è grande, e nessuno ha seguito i partecipanti per più di un anno.',
        'Kim e colleghi (2015) hanno assegnato a caso 24\u00A0persone con alluce valgo da lieve a moderato alla sola ortesi o a un’ortesi più esercizi di apertura delle dita per 8\u00A0settimane. Il gruppo con gli esercizi ha ridotto l’angolo dell’alluce valgo in media di 3,4\u00A0gradi e aumentato l’area di sezione dell’abduttore dell’alluce. Il gruppo con la sola ortesi non ha mostrato cambiamenti significativi su nessuna delle due misure. Lo studio era piccolo e includeva soprattutto giovani adulti con alluce valgo lieve.',
        'Abdalbary (2018) ha assegnato a caso 56\u00A0donne con alluce valgo moderato a 3\u00A0mesi di mobilizzazione del piede, esercizi di rinforzo e un separatore per dita, oppure a nessun intervento (una lista d’attesa). A 3\u00A0mesi e di nuovo a 1\u00A0anno, il gruppo con gli esercizi aveva dolore, funzione e misure radiografiche dell’angolo significativamente migliori del gruppo che non aveva ricevuto niente. Lo studio si distingue per il controllo più lungo, ma dato che il separatore era messo insieme a mobilizzazione ed esercizi, non può dirci quanto abbia contribuito il separatore da solo.',
        'Külünkoğlu e colleghi (2021) hanno assegnato a caso 60\u00A0donne (120\u00A0piedi) con alluce valgo a un mese di tutore notturno, esercizi o elettrostimolazione. Tutti e tre i gruppi sono migliorati in dolore e funzione, ma il tutore è stato più efficace di esercizi ed elettroterapia, e gli esercizi hanno funzionato meglio dell’elettroterapia. Lo studio non aveva un gruppo di controllo non trattato, quindi è difficile sapere quanto ciascuno dei tre approcci abbia aggiunto oltre alla variazione naturale.',
      ],
      sourceNote:
        'Kim 2015: 24\u00A0soggetti, studio randomizzato di 8\u00A0settimane. Variazione dell’angolo HV: gruppo esercizi -3,41 ± 3,17\u00A0gradi, gruppo ortesi -0,5 ± 2,07\u00A0gradi (p < 0,05). Variazione della CSA dell’AbdH: gruppo esercizi +0,48\u00A0cm², gruppo ortesi -0,11\u00A0cm². Abdalbary 2018: 56\u00A0donne, assegnate a caso a 3\u00A0mesi di mobilizzazione + esercizi + separatore per dita (36\u00A0sedute) o a nessun intervento, studio randomizzato con controllo a 1\u00A0anno. Külünkoğlu 2021: 60\u00A0donne (120\u00A0piedi), studio randomizzato a 3\u00A0gruppi (tutore, esercizi, elettroterapia), trattamento di 1\u00A0mese, nessun controllo non trattato; il tutore è stato il più efficace dei tre.',
      cites: [CITE.kimHV, CITE.abdalbary, CITE.kulunkoglu],
    },
    {
      h2: 'I separatori per dita funzionano per l’alluce valgo?',
      keyFact: 'In uno studio su 30\u00A0donne con alluce valgo doloroso, una soletta con separatore per dita ha ridotto in modo significativo il dolore in tre mesi, mentre un gruppo a parte con tutore notturno non è migliorato (Tehraninasr e colleghi, 2008).',
      paragraphs: [
        'I separatori per dita, chiamati anche distanziatori, stanno tra l’alluce e il secondo dito. Riducono lo sfregamento, alleviano la pressione sull’alluce valgo e, mentre li porti, spingono delicatamente l’alluce lontano dal secondo dito.',
        'Tehraninasr e colleghi (2008) hanno studiato 30\u00A0donne con alluce valgo doloroso per 3\u00A0mesi. Un gruppo portava una soletta con un separatore per dita integrato, e un gruppo a parte portava invece un tutore notturno. Il dolore è sceso in modo significativo nel gruppo con il separatore ma non nel gruppo con il tutore notturno. In nessuno dei due gruppi l’angolo dell’alluce valgo è cambiato in modo statisticamente significativo. Lo studio di Abdalbary abbinava un separatore per dita a terapia manuale ed esercizi, quindi non isola cosa abbia fatto il separatore da solo.',
        'Il quadro tra gli studi è coerente: i separatori per dita possono aiutare con il comfort e i sintomi nel breve periodo, ma le prove che cambino l’angolo dell’osso nel tempo sono deboli. Non sono dannosi e costano poco, per questo molti clinici li consigliano insieme a esercizi e cambio di scarpe.',
      ],
      cites: [CITE.abdalbary, CITE.tehraninasr],
    },
    {
      h2: 'Quali esercizi aiutano l’alluce valgo?',
      paragraphs: [
        'Questi esercizi lavorano sull’abduttore dell’alluce e sui muscoli intrinseci più piccoli del piede. L’obiettivo è ripristinare il sostegno muscolare intorno alla prima articolazione metatarso-falangea. Nessuno correggerà la deformità ossea, ma due di loro hanno il sostegno di studi per aumentare le dimensioni del muscolo e ridurre i sintomi nell’alluce valgo lieve.',
      ],
      exercises: [
        {
          name: 'Apertura delle dita',
          dose: 'Walkito parte da 3\u00A0serie da 10, tenendo ogni apertura per 5\u00A0secondi',
          how: 'Siediti o stai in piedi con il piede appoggiato. Solleva tutte e cinque le dita, poi spingi il mignolo in giù e verso l’esterno mentre spingi l’alluce in giù e verso l’interno, allargandole. Tieni l’apertura, poi rilassa. È l’esercizio testato nello studio di Kim del 2015.',
          feel: 'Sforzo lungo l’interno dell’arco e tra le dita',
          stop: 'Dolore all’articolazione dell’alluce valgo durante il movimento',
          evidence: {
            level: 'moderate',
            why: 'Lo studio randomizzato di Kim del 2015 ha trovato che l’esercizio di apertura delle dita riduceva l’angolo dell’alluce valgo di 3,4\u00A0gradi e aumentava le dimensioni dell’abduttore dell’alluce in 24\u00A0persone in 8\u00A0settimane.',
          },
          media: 'toe_spread',
          caption: 'Apertura delle dita: allarga tutte e cinque le dita, spingi l’alluce verso l’interno',
          alt: 'Un piede con tutte e cinque le dita ben aperte, con l’abduttore dell’alluce lungo l’interno dell’arco evidenziato',
        },
        {
          name: 'Sollevamento dell’alluce',
          dose: 'Walkito parte da 3\u00A0serie da 8, tenendo 5\u00A0secondi, ogni piede',
          how: 'Siediti o stai in piedi con il piede appoggiato. Solleva solo l’alluce tenendo le altre quattro dita a terra. Riabbassa piano. Così isoli l’estensore dell’alluce e attivi l’abduttore dell’alluce, allenando l’alluce a muoversi da solo.',
          feel: 'Una sensazione di trazione lungo la parte superiore dell’alluce e l’interno dell’arco',
          stop: 'Dolore all’articolazione dell’alluce valgo',
          evidence: {
            level: 'early',
            why: 'Non testato in uno studio specifico sull’alluce valgo. Si basa su studi elettromiografici che mostrano l’attivazione dell’abduttore dell’alluce durante movimenti isolati dell’alluce.',
          },
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: solleva l’alluce mentre le altre quattro dita restano giù',
          alt: 'Un piede a terra con l’alluce sollevato e le altre quattro dita appoggiate al pavimento',
        },
        {
          name: 'Piede corto, da seduto',
          dose: 'Walkito parte da 3\u00A0serie da 10, tenendo 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Senza arricciare le dita, prova ad accorciare il piede avvicinando la parte anteriore della pianta al tallone. L’arco si alza un poco. Così attivi i muscoli intrinseci del piede, compreso l’abduttore dell’alluce.',
          feel: 'Una contrazione sotto l’arco',
          stop: 'Dolore all’alluce valgo o un crampo che non passa',
          evidence: {
            level: 'early',
            why: 'Gli studi elettromiografici mostrano l’attivazione dell’abduttore dell’alluce durante gli esercizi del piede corto, ma uno studio di confronto ha trovato che l’apertura delle dita dava un’attivazione maggiore nei soggetti con alluce valgo lieve.',
          },
          media: 'short_foot_seated',
          caption: 'Piede corto: solleva l’arco senza arricciare le dita',
          alt: 'Una figura seduta con un piede a terra e l’arco che si alza un poco',
        },
        {
          name: 'Raccolta dell’asciugamano',
          dose: 'Walkito parte da 3\u00A0serie da 8, ogni piede',
          how: 'Siediti con il piede su un asciugamano. Arriccia le dita per tirare l’asciugamano verso di te. Rilascia e ripeti. Così lavori i flessori delle dita e i muscoli sotto l’arco.',
          feel: 'I muscoli sotto l’arco e le dita che lavorano',
          stop: 'Dolore all’articolazione dell’alluce valgo',
          evidence: {
            level: 'early',
            why: 'Un’aggiunta di Walkito. La raccolta dell’asciugamano lavora sui muscoli intrinseci del piede, ma non è stata testata specificamente in uno studio sull’alluce valgo.',
          },
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: arriccia le dita per tirare dentro l’asciugamano',
          alt: 'Un piede su un asciugamano con le dita arricciate, che tira l’asciugamano verso il tallone',
        },
      ],
      cites: [CITE.kimHV, CITE.jung],
    },
    {
      h2: 'Le scarpe contano per l’alluce valgo?',
      paragraphs: [
        'Le scarpe sono uno dei cambiamenti con più effetto che puoi fare. Una punta larga dà all’alluce lo spazio per stare in una posizione più neutra ed evita che la scarpa prema sull’alluce valgo. Le scarpe strette e a punta spingono l’alluce ancora più in valgo e comprimono l’articolazione.',
        'I tacchi alti spostano il peso sull’avampiede e aumentano la pressione sulla prima articolazione metatarso-falangea. Se il dolore all’alluce valgo è un problema, abbassare il tacco è un primo passo semplice.',
        'Le scarpe da sole non correggono la deformità, ma possono ridurre i sintomi e rallentare la progressione togliendo la forza esterna che spinge l’alluce ancora più fuori asse.',
      ],
    },
    {
      h2: 'Quando si considera la chirurgia?',
      paragraphs: [
        'Si considera la chirurgia quando dolore e limitazioni nelle attività continuano nonostante le misure conservative come cambio di scarpe, esercizi, separatori e plantari. La decisione dipende da quanto l’alluce valgo pesa sulla vita di tutti i giorni, non solo dall’angolo.',
        'Per l’alluce valgo esistono più di 150\u00A0procedure chirurgiche, dal riallineamento dei tessuti molli all’osteotomia (tagliare e riposizionare l’osso). La scelta dipende dalla gravità e dall’anatomia specifica. Il recupero va da settimane a mesi.',
        'Di solito si provano prima per diversi mesi esercizi e gestione conservativa. Se stai gestendo bene i sintomi con gli approcci di questa pagina, la chirurgia non è urgente. Se il dolore limita le camminate, la scelta delle scarpe o le attività nonostante queste misure, uno specialista di piede e caviglia può parlarti delle opzioni.',
      ],
    },
  ],
  faq: [
    {
      q: 'Gli esercizi possono correggere l’alluce valgo?',
      a: 'No. L’esercizio non può correggere la deviazione ossea dell’alluce valgo. Lo studio di Kim del 2015 ha mostrato che gli esercizi di apertura delle dita possono rinforzare l’abduttore dell’alluce e ridurre un poco l’angolo dell’alluce valgo nei casi lievi. È un sostegno muscolare, non una correzione strutturale.',
      cites: [CITE.kimHV],
    },
    {
      q: 'Dopo quanto tempo si vedono i risultati degli esercizi per l’alluce valgo?',
      a: 'Lo studio di Kim del 2015 ha misurato i cambiamenti dopo 8\u00A0settimane di esercizi quotidiani di apertura delle dita. Lo studio di Abdalbary del 2018 ha seguito i partecipanti per 1\u00A0anno. I cambiamenti nei muscoli possono iniziare in qualche settimana, ma un effetto su dolore o funzione richiede probabilmente un paio di mesi di lavoro costante.',
      cites: [CITE.kimHV, CITE.abdalbary],
    },
    {
      q: 'Vale la pena provare i separatori per dita?',
      a: 'I separatori per dita possono ridurre lo sfregamento e il fastidio nel breve periodo. Nello studio di Tehraninasr del 2008, una soletta con separatore ha ridotto in modo significativo il dolore in un gruppo di 30\u00A0donne, mentre un gruppo a parte con tutore notturno non è migliorato. In nessuno dei due gruppi l’angolo dell’alluce valgo è cambiato in modo significativo. Costano poco e non sono dannosi, quindi è ragionevole provarli insieme a esercizi e scarpe più larghe.',
      cites: [CITE.tehraninasr],
    },
    {
      q: 'L’alluce valgo peggiora senza operazione?',
      a: 'L’alluce valgo tende a essere progressivo, cioè l’angolo può aumentare nel tempo. Cambio di scarpe, esercizi e separatori possono rallentare la progressione, ma non ci sono studi a lungo termine che dimostrino che una misura conservativa la fermi del tutto. Alcune persone hanno un alluce valgo lieve per decenni senza un peggioramento significativo.',
    },
    {
      q: 'Si può correre con l’alluce valgo?',
      a: 'Molte persone corrono con l’alluce valgo senza problemi. Una scarpa da corsa con la punta larga e un separatore per dita durante le corse possono aiutare. Se l’alluce valgo fa male durante o dopo la corsa, vale la pena ridurre la corsa e farti vedere da un professionista sanitario prima di stringere i denti.',
    },
    {
      q: 'Da cosa viene l’alluce valgo?',
      a: 'L’alluce valgo nasce da un insieme di genetica, struttura del piede e scarpe. Avere familiari con alluce valgo è il fattore di rischio più forte. Scarpe strette e tacchi alti da soli non causano l’alluce valgo, ma possono accelerarne la progressione in chi è predisposto.',
    },
    {
      q: 'Camminare scalzi fa bene all’alluce valgo?',
      a: 'Nessuno studio ha confrontato il camminare scalzi con le scarpe per l’alluce valgo. Stare scalzi toglie la pressione di una punta stretta sull’articolazione, e per alcune persone questo può alleviare i sintomi. Non corregge l’angolo dell’osso. Su terreni duri o irregolari, camminare scalzi può sollecitare il piede in modo diverso, quindi aumentalo piano invece di cambiare tutto in una volta.',
    },
    {
      q: 'A che età viene di solito l’alluce valgo?',
      a: 'Non c’è un’età precisa. L’alluce valgo di solito si forma piano piano nel corso degli anni e diventa più evidente dalla mezza età in poi. Una forma giovanile meno comune compare nell’adolescenza, spesso con una forte familiarità. Scarpe strette e tacchi alti accelerano la progressione in chiunque sia già predisposto, a qualsiasi età.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'L’articolazione dell’alluce valgo è rossa, calda e gonfia, il che può indicare gotta, infezione o borsite invece di un semplice alluce valgo',
      'Il dolore è così forte da limitare le camminate di tutti i giorni nonostante scarpe più larghe',
      'L’alluce si sovrappone al secondo dito o ci finisce sotto',
      'Noti intorpidimento o formicolio all’alluce, il che potrebbe indicare una compressione di un nervo',
      'L’articolazione sembra bloccata o non riesci per niente a muovere l’alluce',
      'Hai una ferita, una vescica o una lesione della pelle sopra l’alluce valgo',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text:
      'Walkito include l’[apertura delle dita](/it/esercizi/apertura-dita-piede/) e il [sollevamento dell’alluce](/it/esercizi/sollevamento-alluce/) nel suo percorso di rinforzo dei muscoli intrinseci del piede. L’app è pensata per fascite plantare e piede piatto, non specificamente per l’alluce valgo, ma l’esercizio di apertura delle dita è lo stesso movimento testato nello studio di Kim del 2015 sull’alluce valgo. Se vuoi un modo strutturato per prendere l’abitudine, le sessioni quotidiane da 3 o 5\u00A0minuti ti aiutano a fare gli esercizi con costanza.',
    more: [
      'Per un dolore all’avampiede più ampio che coinvolge la seconda e la terza testa metatarsale, vedi [metatarsalgia e dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/). Per un dolore proprio sotto l’articolazione dell’alluce, vedi [sesamoidite](/it/sesamoidite/).',
    ],
  },
  crumb: 'Esercizi per l’alluce valgo',
  campaign: 'guide-bunions-it',
};
