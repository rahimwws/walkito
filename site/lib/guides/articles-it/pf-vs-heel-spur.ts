import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Fascite plantare o spina calcaneare (IT) ──────────────────────────
 *
 * Translated from `articles/pf-vs-heel-spur.ts` (2026-10-08), written around
 * the Italian queries «fascite plantare o spina calcaneare», «spina
 * calcaneare differenza fascite», «la spina calcaneare fa male». Informal
 * «tu». Figures, grades and qualifiers are identical to the English page;
 * exercise names follow `lib/guides/it.ts`. Uses the existing keys menzSpur,
 * menzCoexistence and ehrmannSpur; no new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const PF_VS_HEEL_SPUR_IT: Guide = {
  lang: 'it',
  page: 'pfVsHeelSpur',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fascite plantare o spina calcaneare: sono la stessa cosa?',
  description:
    'Fascite plantare o spina calcaneare: in cosa sono diverse, se la spina fa male, quanto è comune secondo gli studi e quando servono gli esami.',
  h1: 'Fascite plantare o spina calcaneare: sono la stessa cosa?',
  lede:
    'La spina calcaneare è una crescita ossea sulla parte inferiore dell’osso del tallone. La fascite plantare è un’irritazione della fascia plantare, la banda spessa di tessuto che va da quell’osso alle dita. Spesso si presentano insieme, ma non sono lo stesso problema, e di solito non è la spina a fare male. Molte persone con una spina visibile ai raggi X non hanno alcun dolore.',
  intro: [
    'Se ti hanno detto che hai una spina calcaneare e vuoi sapere cosa fare, gli esercizi sono gli stessi che aiutano la fascite plantare. [Esercizi per la spina calcaneare](/it/spina-calcaneare-esercizi/) ha la routine completa. Questa pagina spiega la differenza tra i due problemi, cosa dice la ricerca su spina e dolore, e quando vale la pena fare esami di imaging.',
  ],
  takeaways: [
    'In uno studio su 216\u00A0anziani tra i 62 e i 94\u00A0anni, il 55% aveva almeno una spina calcaneare plantare ai raggi X, e la presenza della spina era legata all’obesità e all’artrosi ma non alla forma del piede (Menz e colleghi, 2008). È un campione di anziani, non un dato sulla popolazione generale.',
    'In uno studio su 530\u00A0persone dai 50\u00A0anni in su con dolore al piede, la spina calcaneare e una fascia plantare ispessita di solito comparivano insieme, e una spina da sola era rara (6% dei piedi). Il dolore al tallone era legato alla presenza di entrambe insieme (Menz e colleghi, 2019).',
    'La linea guida del 2023 sul dolore al tallone si concentra sulla fascite plantare come causa più comune del dolore sotto il tallone e nota che di solito non servono esami di imaging quando la visita clinica indica già una fascite plantare (Koc e colleghi, 2023).',
    'Lo stesso studio di Menz del 2008 nota che ricerche precedenti nella popolazione generale avevano stimato la frequenza della spina calcaneare tra l’11 e il 16%, molto sotto il 55% trovato nel loro campione di anziani (Menz e colleghi, 2008).',
    'Gli esercizi che aiutano il dolore da fascite plantare lavorano anche sul tessuto molle intorno a una spina calcaneare. L’esercizio non scioglie la spina, ma la spina raramente è ciò che richiede attenzione.',
  ],
  toc: true,
  sections: [
    {
      h2: 'La spina calcaneare è la stessa cosa della fascite plantare?',
      figure: { id: 'heel-side', caption: 'Una spina calcaneare, quando c’è, si forma nella parte inferiore dell’osso del tallone, vicino al punto in cui si attacca la fascia plantare.', alt: 'Vista laterale interna di un piede con la pelle trasparente che mostra l’osso del tallone, la fascia plantare sotto l’arco e una zona rossa sotto il tallone dove di solito inizia il dolore.' },
      paragraphs: [
        'Spina calcaneare e fascite plantare non sono la stessa cosa. La fascite plantare è un problema del tessuto molle: la fascia plantare, la banda spessa che va dall’osso del tallone alle dita, si irrita, di solito dove si attacca all’osso. La spina calcaneare è una sporgenza ossea sulla parte inferiore dell’osso del tallone (il calcagno). Le due spesso convivono, ma ognuna può comparire senza l’altra.',
        'La fascite plantare dà il dolore acuto, a fitta, che le persone descrivono sotto il tallone, soprattutto ai primi passi del mattino o dopo essere state sedute. La linea guida del 2023 sul dolore al tallone la definisce come un dolore «più evidente quando si carica il peso appena svegli o dopo un periodo di riposo». La spina calcaneare invece è un reperto strutturale in una radiografia. Può dare sintomi propri oppure no.',
        'La confusione è comprensibile. Per decenni si è pensato che la spina calcaneare fosse la causa del dolore sotto il tallone. Quell’idea è stata in gran parte sostituita da prove che mostrano che le spine sono comuni in persone senza dolore, e che molte persone con fascite plantare non hanno alcuna spina.',
      ],
      cites: [CITE.ehrmannSpur, CITE.guideline],
    },
    {
      h2: 'La spina calcaneare fa davvero male?',
      keyFact: 'In uno studio su 530\u00A0persone con dolore al piede, una spina calcaneare ai raggi X compariva da sola solo nel 6% dei piedi, di solito insieme a una fascia plantare ispessita (Menz e colleghi, 2019).',
      paragraphs: [
        'La maggior parte delle spine calcaneari non fa male. La ricerca mostra in modo coerente che le spine si trovano in persone senza sintomi al tallone, e che togliere la spina non fa passare il dolore in modo affidabile.',
        'In uno studio su 530\u00A0persone dai 50\u00A0anni in su con dolore al piede, le radiografie hanno trovato una spina calcaneare nel 26,5% dei piedi e l’ecografia una fascia plantare ispessita nel 47,3% dei piedi. Le due di solito comparivano insieme, e una spina da sola era rara (6% dei piedi). Le persone con dolore al tallone avevano circa il doppio delle probabilità di avere entrambe insieme (Menz e colleghi, 2019). In altre parole, la spina raramente compare senza il cambiamento del tessuto molle che la accompagna.',
        'In un altro studio, su 216\u00A0anziani tra i 62 e i 94\u00A0anni, il 55% aveva almeno una spina calcaneare plantare ai raggi X. Le spine erano legate all’obesità, all’artrosi e a una storia di dolore al tallone, ma non alla forma del piede. Gli autori hanno ipotizzato che le spine possano essere una risposta di adattamento alla compressione verticale del tallone, non il risultato della fascia plantare che tira sull’osso (Menz e colleghi, 2008).',
        'Lo studio di Menz del 2008 nota che ricerche precedenti nella popolazione generale avevano riportato una frequenza della spina calcaneare tra l’11 e il 16%, molto sotto il 55% trovato dagli autori nel loro campione di anziani. In quello stesso campione, circa 6\u00A0persone su 10 con una spina non avevano mai avuto dolore al tallone, anche se il dolore al tallone era comunque più comune in chi aveva una spina (40%) che in chi non l’aveva (12%) (Menz e colleghi, 2008). Una spina aumenta le probabilità, ma non decide chi avrà dolore.',
      ],
      sourceNote:
        'Menz 2019: 530\u00A0partecipanti dai 50\u00A0anni in su con dolore al piede, studio trasversale. Spine nel 26,5% dei piedi, ispessimento della fascia plantare nel 47,3%, spine isolate nel 6,0%. Dolore al tallone legato alle due caratteristiche combinate (OR 2,16, IC al 95%: 1,24-3,77). Menz 2008: 216\u00A0partecipanti tra i 62 e i 94\u00A0anni, studio trasversale, frequenza delle spine 55%, dolore al tallone attuale o passato OR 4,6 (IC al 95%: 2,3-9,4).',
      cites: [CITE.menzCoexistence, CITE.menzSpur],
    },
    {
      h2: 'Quanto è comune la spina calcaneare in chi non ha dolore?',
      keyFact: 'In uno studio con risonanza magnetica su 77\u00A0persone senza sintomi, il 19% aveva una spina calcaneare, a conferma che le spine sono comuni anche senza dolore al tallone (Ehrmann e colleghi, 2014).',
      paragraphs: [
        'Le spine calcaneari sono comuni. La frequenza dipende dalla fascia d’età e dal metodo usato per cercarle.',
        'Lo studio di Menz del 2008 sugli anziani cita ricerche precedenti che riportavano una frequenza della spina calcaneare tra l’11 e il 16% nella popolazione generale, un intervallo molto sotto il 55% trovato dagli autori nel loro campione di 216\u00A0persone tra i 62 e i 94\u00A0anni. Un altro studio con risonanza magnetica su 77\u00A0volontari senza sintomi (età media 48\u00A0anni, tra i 23 e gli 83) ha trovato una spina calcaneare in 15 di loro, il 19% (Ehrmann e colleghi, 2014).',
        'Lo schema è coerente: una gran parte delle persone con una spina non ha sintomi, e una spina da sola non predice se qualcuno avrà dolore al tallone. Per questo la linea guida del 2023 sul dolore al tallone non indica la spina calcaneare come motivo per cambiare l’approccio con gli esercizi.',
      ],
      cites: [CITE.ehrmannSpur, CITE.menzSpur],
    },
    {
      h2: 'Cosa dice la linea guida del 2023 sulla spina calcaneare?',
      paragraphs: [
        'La linea guida di pratica clinica del 2023 sul dolore al tallone, pubblicata sul Journal of Orthopaedic and Sports Physical Therapy, si concentra sulla fascite plantare come causa più comune del dolore sotto il tallone. Cita la «heel spur syndrome» (sindrome da spina calcaneare) come una delle diagnosi da distinguere, insieme alla sindrome del cuscinetto adiposo, all’irritazione dei nervi e alla frattura da stress del calcagno.',
        'La linea guida non raccomanda esami di imaging come primo passo quando la visita clinica indica già una fascite plantare. Dice che gli esami di imaging «di solito non sono indicati per i pazienti che soddisfano i criteri clinici della fascite plantare, finché le cure conservative non falliscono». Quando si valuta un esame, la prima scelta è la radiografia sotto carico, poi l’ecografia o la risonanza magnetica se servono.',
        'In pratica, un professionista sanitario che vede lo schema tipico, dolore ai primi passi del mattino, dolorabilità nella parte interna del tallone e caviglia meno flessibile, può far iniziare stretching e lavoro di forza senza aspettare una radiografia. La presenza o l’assenza di una spina in una radiografia fatta dopo non cambia il piano di esercizi.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Serve una radiografia per distinguere fascite plantare e spina calcaneare?',
      paragraphs: [
        'Di solito per la fascite plantare non serve una radiografia. La diagnosi è clinica: si basa su dove fa male, quando fa male e cosa lo peggiora. Una radiografia può mostrare una spina calcaneare, ma trovarla non cambia cosa fai per il dolore, e non trovarla non esclude la fascite plantare.',
        'Gli esami di imaging diventano utili quando il dolore non segue lo schema tipico della fascite plantare, quando non è migliorato dopo diverse settimane di cure conservative, o quando un professionista sanitario sospetta altro, come una frattura da stress, un problema ai nervi o una rottura della fascia plantare. L’ecografia può misurare lo spessore della fascia plantare (un valore sopra i 4\u00A0mm di solito si considera ispessito), e la risonanza magnetica può mostrare dettagli dei tessuti molli che la radiografia non vede.',
        'Se ti hanno già detto che hai una spina calcaneare in una radiografia, la spina in sé quasi mai richiede un’attenzione a parte. Gli esercizi e gli allungamenti che aiutano la fascite plantare lavorano anche sul tessuto molle intorno alla spina. Vedi [esercizi per la spina calcaneare](/it/spina-calcaneare-esercizi/) per la routine completa.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Se il problema non è la spina, cos’è?',
      paragraphs: [
        'Il dolore di solito viene dalla fascia plantare e dai tessuti intorno, non dall’osso. La fascia plantare si attacca alla parte inferiore dell’osso del tallone. Quando è sovraccaricata, soprattutto in chi ha un polpaccio rigido, un indice di massa corporea alto o passa molte ore in piedi, quel punto di attacco si irrita. Quell’irritazione è la fascite plantare.',
        'Un polpaccio rigido è uno dei fattori di rischio più forti. In uno studio caso-controllo appaiato su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione ridotta della caviglia, cioè quanto il piede si piega verso lo stinco, aveva l’odds ratio più alto tra tutti i fattori misurati. Anche stare in piedi per gran parte della giornata di lavoro era significativo, con probabilità 3,6\u00A0volte più alte (Riddle e colleghi, 2003).',
        'La spina, quando c’è, sta lì vicino. Potrebbe essersi formata in mesi o anni in risposta allo stesso stress meccanico che ha irritato la fascia. Ma sono la fascia e il polpaccio a rispondere a stretching e rinforzo, non l’osso. Per questo la linea guida raccomanda l’esercizio, non la rimozione della spina.',
        'Per una panoramica completa sulla fascite plantare, con cause, fattori di rischio e raccomandazioni della linea guida, vedi [fascite plantare](/it/fascite-plantare/).',
      ],
      cites: [CITE.riddle, CITE.guideline],
    },
    {
      h2: 'La spina calcaneare va mai tolta?',
      paragraphs: [
        'La rimozione chirurgica di una spina calcaneare è rara e non è un’opzione di prima scelta. La linea guida del 2023 non raccomanda di togliere la spina nella fascite plantare. Diversi studi hanno mostrato che il dolore da fascite plantare può risolversi con cure conservative anche quando la spina resta nella radiografia. L’American Academy of Orthopaedic Surgeons dice chiaramente che «le spine calcaneari non causano il dolore della fascite plantare» e che «il dolore della fascite plantare si può trattare senza togliere la spina».',
        'A volte si valuta la chirurgia quando il dolore non ha risposto a mesi di trattamento conservativo, ma l’intervento di solito è un rilascio parziale della fascia plantare, non una rimozione della spina. Se durante quell’intervento viene tolta anche la spina, le prove suggeriscono che il beneficio venga dal rilascio della fascia, non dalla rimozione dell’osso.',
        'La grande maggioranza delle persone con dolore al tallone e una spina migliora con lo stesso stretching, lo stesso lavoro sul polpaccio e la stessa gestione del carico di chi non ha la spina. Vedi [esercizi per la spina calcaneare](/it/spina-calcaneare-esercizi/) per la routine pratica.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'Quali esercizi aiutano quando hai una spina calcaneare?',
      paragraphs: [
        'Gli esercizi per il dolore da spina calcaneare sono gli stessi che la linea guida raccomanda per la fascite plantare: allungamento della fascia plantare, allungamento del polpaccio e rinforzo graduale del polpaccio. L’esercizio non scioglie la spina. Lavora sul tessuto molle che dà davvero il dolore.',
        'La linea guida dà all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**, e al lavoro di forza una **B**. Questi gradi valgono che la spina ci sia o no. [Esercizi per la spina calcaneare](/it/spina-calcaneare-esercizi/) ha la routine completa con serie, tenute e progressione. Qui sotto ci sono tre esercizi per iniziare.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'La linea guida del 2023 dà all’allungamento della fascia plantare una A, il suo grado più alto.' },
          dose: '10\u00A0tenute da 10\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla una caviglia sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Fallo prima di alzarti al mattino e dopo essere stato seduto a lungo.',
          often: 'Ogni mattina e dopo essere stato seduto',
          feel: 'Un allungamento lungo l’arco, non dolore',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita prima del primo passo',
          alt: 'Una figura seduta che tira indietro le dita per allungare la fascia plantare',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'Stesso grado A nella linea guida. Lavora sul gastrocnemio, il muscolo del polpaccio più grande e più esterno.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone giù, fianchi in avanti. Un polpaccio rigido tira il tallone attraverso il tendine d’Achille e aggiunge carico alla fascia.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, sporgiti in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B per la fascite plantare. Un gradino verso il sollevamento con asciugamano e carico.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. Questo aumenta la capacità del polpaccio senza un carico pesante sul tallone.',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'La spina calcaneare è la stessa cosa della fascite plantare?',
      cites: [CITE.guideline],
      a: 'No. La spina calcaneare è una crescita ossea sulla parte inferiore dell’osso del tallone. La fascite plantare è un’irritazione della fascia plantare, la banda spessa di tessuto che va dal tallone alle dita. Spesso compaiono insieme, ma una spina può esserci senza dolore e la fascite plantare può esserci senza spina. La linea guida del 2023 sul dolore al tallone le considera due reperti separati.',
    },
    {
      q: 'La spina calcaneare fa male?',
      cites: [CITE.menzCoexistence],
      a: 'La maggior parte delle spine calcaneari non fa male. In uno studio su 530\u00A0persone dai 50\u00A0anni in su con dolore al piede, una spina calcaneare da sola era rara, e il dolore al tallone era legato a una spina insieme a una fascia plantare ispessita (Menz e colleghi, 2019). In un altro studio su 216\u00A0anziani, circa 6 su 10 di quelli con una spina non avevano dolore al tallone, né attuale né passato (Menz e colleghi, 2008).',
    },
    {
      q: 'Si può avere la fascite plantare senza spina calcaneare?',
      a: 'Sì. Molte persone con fascite plantare non hanno alcuna spina nella radiografia. Il dolore viene dalla fascia plantare irritata, non dall’osso. La linea guida del 2023 non richiede esami di imaging per la diagnosi di fascite plantare quando lo schema clinico è chiaro: dolore ai primi passi del mattino, dolorabilità al tallone e polpaccio rigido.',
    },
    {
      q: 'Gli esercizi per la spina calcaneare la sciolgono?',
      cites: [CITE.guideline],
      a: 'No. Gli esercizi di allungamento e rinforzo non sciolgono una spina calcaneare. Lavorano sul tessuto molle intorno, soprattutto sulla fascia plantare e sui muscoli del polpaccio, che di solito sono ciò che fa male. La spina in sé raramente richiede attenzione, e la linea guida raccomanda gli stessi esercizi che la spina ci sia o no.',
    },
    {
      q: 'Devo fare una radiografia se penso di avere una spina calcaneare?',
      cites: [CITE.guideline],
      a: 'La linea guida del 2023 dice che di solito non servono esami di imaging quando la visita clinica indica una fascite plantare. Una radiografia può mostrare una spina, ma trovarla non cambia il piano di esercizi, e non trovarla non esclude la fascite plantare. Gli esami diventano utili quando il dolore non migliora dopo diverse settimane o quando un professionista sanitario sospetta una frattura da stress o un problema ai nervi.',
    },
    {
      q: 'Quanto è comune la spina calcaneare?',
      cites: [CITE.menzSpur],
      a: 'La frequenza dipende dall’età. Ricerche precedenti citate nello studio di Menz del 2008 riportavano una spina calcaneare plantare ai raggi X nell’11-16% della popolazione generale. In uno studio su 216\u00A0persone tra i 62 e i 94\u00A0anni, il 55% aveva almeno una spina plantare (Menz e colleghi, 2008). Le spine diventano più comuni con l’età, con un indice di massa corporea più alto e con l’artrosi.',
    },
    {
      q: 'Quando la spina calcaneare va operata?',
      cites: [CITE.latt],
      a: 'Quasi mai. La linea guida non raccomanda di togliere la spina nella fascite plantare. Circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come stretching, rinforzo del polpaccio e gestione del carico (Latt e colleghi, 2020). Quando si valuta la chirurgia dopo mesi di cure conservative senza risultati, di solito si tratta di un rilascio della fascia plantare, non della rimozione della spina.',
    },
    {
      q: 'Cosa succede se continui a camminare con la spina calcaneare?',
      cites: [CITE.menzSpur, CITE.guideline],
      a: 'Camminare non spingerà la spina nei tessuti vicini. Il dolore che si accende camminando di solito viene dalla fascia plantare irritata accanto alla spina, non dall’osso. La linea guida del 2023 raccomanda di regolare il carico, per esempio distanza o ritmo, invece di fermarti, se camminare ti peggiora il tallone la mattina dopo.',
    },
    {
      q: 'Fa bene massaggiare la spina calcaneare?',
      cites: [CITE.guideline],
      a: 'Un massaggio delicato intorno a una spina calcaneare può sciogliere la rigidità dei tessuti molli, ma non cambia l’osso. Far rotolare la pianta del piede con una pressione decisa, non dolorosa, può rilassare fascia e polpaccio, i tessuti che di solito danno il dolore. La linea guida dà alla terapia manuale fatta da un professionista una A; l’automassaggio dà sollievo, ma non sostituisce lo stretching.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta, che può indicare una rottura della fascia plantare invece di una fascite',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'stringere i lati del tallone riproduce il dolore, il che può far pensare a una frattura da stress più che a una spina o a una fascite',
      'il dolore si accompagna a intorpidimento, formicolio o bruciore, che possono far pensare a un nervo compresso',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'ti fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, soprattutto se altre articolazioni sono rigide o gonfie',
      'il dolore ti tiene sveglio di notte o c’è anche a riposo, non solo quando carichi il peso',
      'non è migliorato dopo diverse settimane di stretching, lavoro sul polpaccio e meno carico',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Che la radiografia mostri una spina o no, l’approccio con gli esercizi è lo stesso. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è un dolore del mattino a 1 su 10 o meno per 14\u00A0giorni di fila. Lo stretching inizia dal primo giorno. Il lavoro di forza per il polpaccio si aggiunge quando il primo obiettivo passa dal calmare il dolore al costruire capacità.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto l’obiettivo), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così segui i progressi invece di tirare a indovinare.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se non sei sicuro che il tuo dolore al tallone sia fascite plantare, una spina calcaneare o altro, rivolgiti prima a un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Fascite plantare o spina calcaneare',
  campaign: 'guide-pf-vs-heel-spur-it',
};
