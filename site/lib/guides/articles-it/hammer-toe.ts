import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/hammer-toe.ts`, written around the queries
 * «dito a martello esercizi», «dito a martello piede» and «dita ad
 * artiglio». Informal «tu». Hammer, claw and mallet toe are «dito a
 * martello», «dito ad artiglio» and «dito a maglio». Exercise names as in
 * `it.ts`. Figures, doses, grades and qualifiers are identical to the
 * English page. Citations as in English.
 */

export const HAMMER_TOE_IT: Guide = {
  lang: 'it',
  page: 'hammerToe',
  mainSource: CITE.malhotra,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dito a martello: esercizi, flessibile o rigido',
  description:
    'Esercizi per il dito a martello flessibile, differenza con il dito ad artiglio, consigli sulle scarpe e quando si può parlare di chirurgia.',
  h1: 'Esercizi per il dito a martello: cosa possono fare e cosa dicono gli studi',
  lede:
    'Il dito a martello è un dito minore del piede che si piega verso il basso all’articolazione centrale. Se si raddrizza ancora quando ci premi sopra, è flessibile, ed esercizi, scarpe più larghe e cuscinetti possono aiutare a mantenerlo così. Se è rigido, l’esercizio non ne cambierà la posizione, e l’obiettivo diventa gestire la pressione ed evitare problemi alla pelle. Questa pagina spiega la differenza, quali esercizi si consigliano di solito e quanto sono davvero scarse le prove.',
  toc: true,
  takeaways: [
    'Un dito a martello flessibile si può raddrizzare con le mani e può rispondere a esercizi che mantengono la mobilità e rinforzano i muscoli delle dita. Un dito a martello rigido è bloccato in posizione e non cambia con l’esercizio.',
    'Nessuno studio randomizzato controllato ha testato un programma di esercizi specificamente per il dito a martello. Gli esercizi consigliati in questa pagina si basano sulla logica biomeccanica del rinforzo dei muscoli intrinseci del piede, non su prove dirette da studi.',
    'Scarpe con una punta larga e alta sono la misura conservativa consigliata con più costanza per il dito a martello. Riducono lo sfregamento, la pressione sull’articolazione piegata e il rischio di calli e duroni.',
    'Si considera la chirurgia quando dolore e problemi alla pelle continuano nonostante le cure conservative e la deformità è rigida. La decisione dipende dai sintomi, non solo dall’aspetto.',
  ],
  sections: [
    {
      h2: 'Cos’è il dito a martello?',
      paragraphs: [
        'Il dito a martello è una deformità in flessione dell’articolazione interfalangea prossimale (l’articolazione centrale) di una delle dita minori, più spesso il secondo. Il dito si piega verso il basso in quell’articolazione, mentre la punta può guardare in giù o un po’ in su. È una delle deformità più comuni dell’avampiede.',
        'La deformità nasce da uno squilibrio tra i muscoli che flettono ed estendono il dito. I muscoli estrinseci, i lunghi flessori ed estensori che vanno dalla gamba attraverso il piede, prevalgono sui muscoli intrinseci più piccoli dentro il piede. Quando gli intrinseci si indeboliscono, i flessori tirano giù l’articolazione centrale e gli estensori tirano su la base del dito all’articolazione metatarso-falangea.',
        'Tra le cause che contribuiscono più spesso ci sono:',
        {
          list: [
            'Scarpe che stringono le dita (punte strette, tacchi alti).',
            'Un secondo dito più lungo dell’alluce.',
            'Problemi come l’alluce valgo, in cui l’alluce spinge il secondo dito fuori posizione.',
          ],
        },
        'Anche le malattie neuromuscolari possono causarlo.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'Che differenza c’è tra dito a martello, dito ad artiglio e dito a maglio?',
      paragraphs: [
        'I tre nomi descrivono quali articolazioni sono piegate:',
        {
          list: [
            'Il dito a martello si piega all’articolazione centrale (articolazione interfalangea prossimale).',
            'Il dito a maglio si piega all’ultima articolazione (articolazione interfalangea distale), vicino alla punta del dito.',
            'Il dito ad artiglio si piega sia all’articolazione centrale sia all’ultima, mentre la base del dito (articolazione metatarso-falangea) si estende verso l’alto.',
          ],
        },
        'Le dita ad artiglio tendono a essere più gravi, spesso colpiscono più dita su entrambi i piedi e sono più spesso legate a malattie neuromuscolari. Il dito a martello di solito colpisce un solo dito, più spesso il secondo, ed è più spesso legato alle scarpe e alla struttura del piede.',
        'Nella pratica i trattamenti si sovrappongono. Scarpe più larghe, cuscinetti ed esercizi per i muscoli intrinseci del piede valgono per tutti e tre. La distinzione conta soprattutto quando si considera la chirurgia, perché l’approccio chirurgico dipende da quali articolazioni sono coinvolte.',
      ],
      cites: [CITE.malhotra],
    },
    {
      h2: 'Che differenza c’è tra dito a martello flessibile e rigido?',
      keyFact: 'Uno studio del 2022 su 20\u00A0anziani con dito a martello o ad artiglio ha trovato che dei supporti per dita in silicone modellati su misura riducevano in modo significativo la pressione di picco sulla punta del secondo dito, sia nei casi flessibili sia in quelli rigidi (Formosa e colleghi, 2022).',
      paragraphs: [
        'Un dito a martello flessibile ha ancora movimento all’articolazione centrale. Riesci a raddrizzarlo con la mano. Muscoli e tendini sono tesi, ma l’articolazione non ha sviluppato una retrazione fissa. **È la fase in cui le misure conservative hanno di più da offrire.**',
        'Un dito a martello rigido ha una retrazione fissa all’articolazione centrale. L’articolazione non si raddrizza più. A questo punto l’esercizio non può cambiare la posizione. Gli obiettivi diventano ridurre lo sfregamento (scarpe più larghe, cuscinetti per dita) ed evitare calli, duroni e lesioni della pelle.',
        'Uno studio quasi sperimentale del 2022 su 20\u00A0anziani con deformità a martello o ad artiglio ha trovato che dei supporti per dita in silicone modellati su misura riducevano in modo significativo la pressione di picco sulla punta del secondo dito, sia nei casi flessibili sia in quelli rigidi. All’articolazione metatarso-falangea, la riduzione della pressione era significativa solo nel gruppo rigido.',
      ],
      cites: [CITE.formosa],
    },
    {
      h2: 'Gli esercizi aiutano il dito a martello?',
      paragraphs: [
        'La risposta onesta è che **non ci sono studi randomizzati controllati che testino esercizi specificamente per il dito a martello.** Gli esercizi consigliati di solito, come raccolta dell’asciugamano, apertura delle dita e allungamento manuale, si basano sull’idea che rinforzare i muscoli intrinseci del piede e mantenere flessibile l’articolazione possa aiutare a evitare che una deformità flessibile diventi rigida.',
        'Il ragionamento è sensato. La deformità viene da uno squilibrio muscolare: intrinseci deboli ed estrinseci relativamente più forti. Esercizi che lavorano sugli intrinseci possono ripristinare un po’ di quell’equilibrio. Ma senza studi diretti, non sappiamo quanta differenza facciano né se possano davvero evitare la progressione.',
        'Quello che sappiamo da studi su altri problemi dell’avampiede è che esercizi per i muscoli intrinseci del piede come piede corto, apertura delle dita e raccolta dell’asciugamano attivano i muscoli giusti. Uno studio con risonanza magnetica di Gooding e colleghi (2016) ha confermato che l’esercizio del piede corto e l’apertura delle dita attivano in modo selettivo i muscoli intrinseci del piede. Se questa attivazione porti a risultati migliori specificamente nel dito a martello non è stato testato.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Quali esercizi aiutano il dito a martello?',
      paragraphs: [
        'Questi esercizi lavorano sui muscoli intrinseci del piede e mirano a mantenere la flessibilità in un dito che è ancora flessibile. Se il tuo dito a martello è rigido, questi esercizi non ne cambieranno la posizione, ma un allungamento delicato può aiutare con rigidità e fastidio. Tutte le etichette di evidenza qui sotto sono oneste: nessun esercizio di questo elenco è stato testato in uno studio sul dito a martello.',
      ],
      exercises: [
        {
          name: 'Raccolta dell’asciugamano',
          dose: 'Walkito parte da 3\u00A0serie da 8, ogni piede',
          how: 'Siediti con il piede appoggiato su un asciugamano. Arriccia le dita per raccogliere l’asciugamano verso di te, poi rilascia. Così lavori i flessori intrinseci delle dita, i muscoli che nel dito a martello vengono sopraffatti. Rinforzarli può aiutare a riequilibrare la trazione sulle articolazioni delle dita.',
          feel: 'I muscoli sotto l’arco e le dita che lavorano',
          stop: 'Dolore all’articolazione piegata o alla punta del dito',
          evidence: {
            level: 'early',
            why: 'Nessuno studio sul dito a martello. Consigliato spesso nelle linee guida cliniche per le deformità delle dita minori in base a un ragionamento biomeccanico.',
          },
          media: 'towel_scrunch',
          caption: 'Raccolta dell’asciugamano: arriccia le dita per tirare dentro l’asciugamano',
          alt: 'Un piede su un asciugamano con le dita arricciate, che tira l’asciugamano verso il tallone',
        },
        {
          name: 'Apertura delle dita',
          dose: 'Walkito parte da 3\u00A0serie da 10, tenendo ogni apertura per 5\u00A0secondi',
          how: 'Siediti o stai in piedi con il piede appoggiato. Apri tutte e cinque le dita più che puoi, tieni, poi rilassa. Così lavori i muscoli tra i metatarsi e l’abduttore dell’alluce lungo l’interno dell’arco.',
          feel: 'Un allungamento tra le dita e uno sforzo sul dorso del piede',
          stop: 'Dolore all’articolazione del dito a martello',
          evidence: {
            level: 'early',
            why: 'Nessuno studio sul dito a martello. Uno studio con risonanza magnetica ha confermato che gli esercizi di apertura delle dita attivano i muscoli intrinseci del piede, cioè i muscoli indeboliti nel dito a martello.',
          },
          media: 'toe_spread',
          caption: 'Apertura delle dita: allarga tutte e cinque le dita, tieni, rilassa',
          alt: 'Un piede con tutte e cinque le dita ben aperte',
        },
        {
          name: 'Sollevamento dell’alluce (yoga delle dita)',
          dose: 'Walkito parte da 3\u00A0serie da 8, tenendo 5\u00A0secondi, ogni piede',
          how: 'Siediti o stai in piedi con il piede appoggiato. Solleva solo l’alluce tenendo le altre quattro dita a terra. Poi inverti: spingi giù l’alluce e solleva le altre quattro. Così alleni il controllo indipendente delle dita, che spesso si perde in chi ha il dito a martello.',
          feel: 'All’inizio è difficile coordinarsi, poi il controllo arriva piano piano',
          stop: 'Dolore all’articolazione del dito a martello',
          evidence: {
            level: 'early',
            why: 'Nessuno studio sul dito a martello. Si basa sul principio che il controllo indipendente delle dita aiuta a riequilibrare le forze di flessori ed estensori sulle articolazioni delle dita.',
          },
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: solleva l’alluce mentre le altre dita restano giù',
          alt: 'Un piede con l’alluce sollevato e le altre quattro dita appoggiate al pavimento',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Le scarpe fanno differenza?',
      paragraphs: [
        '**Le scarpe sono l’approccio conservativo più consigliato per il dito a martello.** Una revisione sulla gestione delle deformità delle dita minori su EFORT Open Reviews (Malhotra e colleghi, 2016) metteva il cambio di scarpe al primo posto nell’elenco dei trattamenti conservativi:',
        {
          list: [
            'Una punta larga per dare spazio alle dita.',
            'Una punta alta per evitare lo sfregamento sull’articolazione piegata.',
            'Evitare i tacchi alti.',
          ],
        },
        'Le scarpe strette comprimono le dita tra loro e spingono l’articolazione piegata contro la parte alta della scarpa, causando calli e duroni. I tacchi alti fanno scivolare il piede in avanti, schiacciando le dita sul davanti. Cambiare scarpe non raddrizza un dito a martello rigido, ma riduce lo sfregamento e la pressione di ogni giorno che causano la maggior parte del dolore.',
        'Cuscinetti per dita, tubolari in gel e supporti in silicone possono ammortizzare l’articolazione piegata e ridistribuire la pressione sulla punta del dito. Lo studio di Formosa del 2022 ha mostrato che dei supporti per dita in silicone modellati riducevano la pressione di picco sulla punta del secondo dito sia nelle deformità flessibili sia in quelle rigide.',
      ],
      cites: [CITE.malhotra, CITE.formosa],
    },
    {
      h2: 'Il dito a martello si può correggere senza operazione?',
      paragraphs: [
        'Se il dito a martello è ancora flessibile, le misure conservative, tra cui esercizi, allungamenti, scarpe più larghe e bendaggio delle dita, possono evitare che progredisca e migliorare il comfort. Fissare con un cerotto il dito colpito a quello vicino può tenerlo delicatamente in una posizione più neutra durante il giorno. **Ma nessuna di queste misure ha dimostrato di correggere in modo permanente la deformità.**',
        'Una volta che il dito a martello diventa rigido, l’articolazione è retratta e non si può raddrizzare. A quel punto esercizi e allungamenti non ne cambiano la forma. L’attenzione si sposta sul proteggere la pelle dallo sfregamento e sul gestire la pressione con cuscinetti e scarpe.',
        'Quanto velocemente un dito a martello flessibile diventa rigido varia. In alcune persone resta flessibile per anni. Portare scarpe con una punta larga e mantenere la mobilità delle dita con allungamenti ed esercizi quotidiani sono le strategie consigliate più spesso per rallentare la progressione.',
      ],
    },
    {
      h2: 'Quando si parla di chirurgia?',
      keyFact: 'Una revisione del 2016 citava dati del registro svedese secondo cui gli interventi sulle dita minori, compresa la chirurgia per dito a martello e ad artiglio, erano quasi un quarto di tutte le operazioni all’avampiede (Malhotra e colleghi, 2016).',
      paragraphs: [
        'Si considera la chirurgia quando un dito a martello rigido causa dolore persistente, lesioni della pelle o difficoltà a portare le scarpe nonostante le cure conservative. La decisione si basa sui sintomi e sulle limitazioni nelle attività, non sull’aspetto del dito.',
        'Gli interventi comuni includono:',
        {
          list: [
            'L’artroplastica dell’articolazione interfalangea prossimale (togliere un piccolo pezzo di osso per raddrizzare l’articolazione).',
            'L’artrodesi (fondere l’articolazione in posizione dritta).',
          ],
        },
        'Esistono tecniche mininvasive più recenti, ma i dati sui risultati a lungo termine sono ancora in raccolta.',
        'Il recupero dopo un intervento per dito a martello di solito richiede da tre a sei settimane con una scarpa postoperatoria. Un po’ di rigidità nel dito è prevista. Una revisione del 2016 citava dati del registro svedese secondo cui gli interventi sulle dita minori, che includono dito a martello, dito ad artiglio e deformità collegate, erano quasi un quarto di tutti gli interventi all’avampiede.',
      ],
      cites: [CITE.malhotra],
    },
  ],
  faq: [
    {
      q: 'Il dito a martello si può correggere?',
      a: 'Se un dito a martello è ancora flessibile, cioè riesci a raddrizzarlo con la mano, le cure conservative possono migliorare il comfort e rallentare la progressione. Se è rigido, l’esercizio non può cambiarne la posizione. Nessuno studio ha dimostrato che gli esercizi correggano in modo permanente una deformità a martello.',
    },
    {
      q: 'Che differenza c’è tra dito a martello e dito ad artiglio?',
      a: 'Il dito a martello si piega all’articolazione centrale del dito. Il dito ad artiglio si piega sia all’articolazione centrale sia all’ultima, e la base del dito si estende verso l’alto all’articolazione metatarso-falangea. Le dita ad artiglio sono più spesso associate a malattie neuromuscolari, mentre il dito a martello è più spesso legato alle scarpe e alla struttura del piede.',
      cites: [CITE.malhotra],
    },
    {
      q: 'Gli allungamenti per il dito a martello funzionano davvero?',
      a: 'Nessuno studio randomizzato ha testato allungamenti o esercizi per il dito a martello. Allungare con le mani un dito a martello flessibile può aiutare a mantenere l’ampiezza di movimento ed evitare che diventi rigido. Gli esercizi per i muscoli intrinseci del piede si consigliano in base alla logica biomeccanica, non a prove dirette da studi su questo problema.',
    },
    {
      q: 'Quali scarpe sono migliori per il dito a martello?',
      a: 'Le scarpe con una punta larga e alta danno spazio al dito piegato e riducono lo sfregamento sopra l’articolazione. Evita scarpe strette, a punta o con il tacco alto. Nelle revisioni cliniche, la misura conservativa consigliata con più costanza è il cambio di scarpe.',
      cites: [CITE.malhotra],
    },
    {
      q: 'I tutori per dita aiutano il dito a martello?',
      a: 'Tutori e bendaggi per dita possono tenere un dito a martello flessibile in una posizione più neutra durante il giorno. Non sono una correzione permanente, ma possono rallentare la progressione e ridurre l’irritazione. Uno studio del 2022 ha trovato che dei supporti per dita in silicone riducevano la pressione sulla punta del dito sia nei casi flessibili sia in quelli rigidi.',
      cites: [CITE.formosa],
    },
    {
      q: 'Come capisco se il mio dito a martello va operato?',
      a: 'Di solito si considera la chirurgia quando dolore, calli, duroni o problemi alla pelle continuano nonostante cambio di scarpe, cuscinetti e cure conservative, e la deformità è rigida. Se riesci ancora a gestire i sintomi con scarpe più larghe e allungamenti quotidiani, la chirurgia non è urgente.',
    },
    {
      q: 'L’alluce valgo può causare il dito a martello?',
      a: 'Sì. Quando nell’alluce valgo l’alluce si inclina verso l’esterno, può spingere il secondo dito verso l’alto e fuori posizione, contribuendo a un dito a martello. Occuparsi dell’alluce valgo con scarpe più larghe ed [esercizi per l’alluce valgo](/it/alluce-valgo-esercizi/) può aiutare a ridurre la pressione sul secondo dito.',
    },
    {
      q: 'Il dito a martello si può sciogliere con i massaggi?',
      a: 'No. Il massaggio non può raddrizzare un dito a martello, flessibile o rigido, perché la piega è una posizione dell’articolazione, non un nodo nei tessuti molli. Un massaggio delicato e l’allungamento della parte alta del dito possono alleviare l’indolenzimento e la tensione dei tendini, e aiutare un dito flessibile a continuare a muoversi. Non annulla la deformità, quindi abbinalo a scarpe più larghe invece di aspettarti che cambi forma.',
    },
    {
      q: 'Camminare scalzi fa bene al dito a martello?',
      a: 'Nessuno studio lo ha testato direttamente. Camminare scalzi toglie la pressione e lo sfregamento di una scarpa stretta sull’articolazione piegata, e per alcune persone questo può alleviare l’irritazione. Non raddrizza un dito a martello. Su terreni duri o irregolari, stare scalzi può anche caricare le dita in modo diverso, quindi introducilo piano invece di cambiare tutto in una volta.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'Hai una piaga aperta, una vescica o una ferita sul dito, soprattutto se hai il diabete o una sensibilità ridotta',
      'Il dito è rosso, caldo e gonfio, il che potrebbe indicare un’infezione o un’artrite infiammatoria',
      'Il dito a martello è comparso all’improvviso dopo un trauma',
      'Noti intorpidimento o formicolio nel dito',
      'La deformità peggiora in fretta nonostante scarpe più larghe',
      'Fai fatica a camminare a causa della deformità',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text:
      'Walkito include la [raccolta dell’asciugamano](/it/esercizi/raccolta-asciugamano-dita/), l’[apertura delle dita](/it/esercizi/apertura-dita-piede/) e il [sollevamento dell’alluce](/it/esercizi/sollevamento-alluce/) nel suo percorso di rinforzo dei muscoli intrinseci del piede. L’app è pensata per fascite plantare e piede piatto, non specificamente per il dito a martello, ma gli esercizi si sovrappongono. Se hai un dito a martello flessibile e vuoi un modo strutturato per lavorare sulle dita ogni giorno, le sessioni da 3 o 5\u00A0minuti rendono gli esercizi costanti senza doverti ricordare una routine a parte.',
    more: [
      'Per problemi collegati dell’avampiede, vedi [metatarsalgia e dolore alla pianta del piede](/it/metatarsalgia-dolore-pianta-piede/) ed [esercizi per l’alluce valgo](/it/alluce-valgo-esercizi/).',
    ],
  },
  crumb: 'Esercizi per il dito a martello',
  campaign: 'guide-hammer-toe-it',
};
