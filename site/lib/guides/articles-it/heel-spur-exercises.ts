import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Esercizi per la spina calcaneare (IT) ─────────────────────────────
 *
 * Translated from `articles/heel-spur-exercises.ts` (2026-10-08), written
 * around the Italian queries «spina calcaneare esercizi», «spina calcaneare
 * stretching», «spina calcaneare rimedi». Informal «tu». Figures, doses,
 * grades and qualifiers are identical to the English page; exercise names
 * follow `lib/guides/it.ts`. No new citations (menzSpur and menzCoexistence
 * are already in CITATIONS[]).
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const HEEL_SPUR_EXERCISES_IT: Guide = {
  lang: 'it',
  page: 'heelSpurExercises',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizi per la spina calcaneare: allungamenti e forza',
  description:
    'Esercizi e allungamenti per la spina calcaneare su fascia plantare e polpaccio: routine, dosi e progressione. Lavorano sul dolore, non sciolgono la spina.',
  h1: 'Esercizi per la spina calcaneare: allungamenti e rinforzo per il dolore intorno alla spina',
  lede:
    'L’esercizio non scioglie una spina calcaneare. La spina è osso, e l’osso non si riduce con lo stretching. Ma il dolore che si sente quando si ha una spina calcaneare viene quasi sempre dalla fascia plantare e dal polpaccio intorno, non dall’osso in sé. Gli esercizi qui sotto lavorano su quei tessuti molli. Sono gli stessi che la linea guida del 2023 sul dolore al tallone raccomanda per la fascite plantare.',
  intro: [
    'Se prima vuoi capire la differenza tra spina calcaneare e fascite plantare, vedi [fascite plantare o spina calcaneare](/it/fascite-plantare-o-spina-calcaneare/). Questa pagina è la routine pratica: quali esercizi, quanti, come progredire e quando fermarti.',
  ],
  takeaways: [
    'Gli esercizi per la spina calcaneare funzionano perché lavorano sulla fascia plantare e sui muscoli del polpaccio intorno alla spina, non perché cambiano la spina.',
    'La linea guida del 2023 sul dolore al tallone dà all’allungamento della fascia plantare e del polpaccio il grado più alto, **A**, e al lavoro di forza una **B** (Koc e colleghi, 2023).',
    'In uno studio su 48\u00A0persone con fascite plantare, i sollevamenti sulle punte con carico alto e un asciugamano sotto le dita hanno ridotto il dolore più in fretta del solo stretching a tre mesi, anche se a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015).',
    'Un polpaccio rigido, misurato come dorsiflessione ridotta della caviglia, è stato il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo appaiato con 50\u00A0casi e 100\u00A0controlli (Riddle e colleghi, 2003).',
    'Una revisione sistematica con meta-analisi ha trovato che sia l’allungamento del polpaccio sia quello della fascia plantare riducevano il dolore rispetto a nessuno stretching (Siriphorn ed Eksakulkla, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Perché gli esercizi aiutano la spina calcaneare?',
      keyFact: 'In uno studio su 530\u00A0persone con dolore al piede, la spina calcaneare compariva da sola solo nel 6% dei piedi, di solito insieme a una fascia plantare ispessita (Menz e colleghi, 2019).',
      paragraphs: [
        'La spina calcaneare è una crescita ossea sulla parte inferiore dell’osso del tallone. In uno studio su 530\u00A0persone dai 50\u00A0anni in su con dolore al piede, una spina calcaneare da sola era rara (6% dei piedi), e il dolore al tallone era legato a una spina insieme a una fascia plantare ispessita, la banda di tessuto sotto il piede (Menz e colleghi, 2019). **Di solito il dolore viene dal tessuto molle, ed è lì che l’esercizio può arrivare.**',
        'Allungare la fascia plantare e il polpaccio riduce la tensione sul punto in cui si attaccano al tallone. Rinforzare il polpaccio aumenta la capacità della catena che assorbe il carico ogni volta che il tallone tocca terra. Insieme, riducono lo stress quotidiano sul tessuto intorno alla spina.',
        'Nessun programma di esercizi farà sparire una spina dalla radiografia. Ma la maggior parte delle persone con una spina calcaneare non ha bisogno che la spina sparisca. Ha bisogno che il dolore si calmi, e questo viene da una fascia e un polpaccio più forti e più flessibili.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
    {
      h2: 'Quali allungamenti aiutano il dolore da spina calcaneare?',
      keyFact: 'Una revisione sistematica ha trovato che sia l’allungamento del polpaccio sia quello della fascia plantare riducevano il dolore da fascite plantare rispetto a nessuno stretching (Siriphorn ed Eksakulkla, 2020).',
      paragraphs: [
        'Lo stretching è il punto di partenza. La linea guida del 2023 dà all’allungamento della fascia plantare e del polpaccio una **A**, il suo grado più alto. Una revisione sistematica con meta-analisi sullo stretching per la fascite plantare ha trovato che sia l’allungamento del polpaccio sia quello della fascia plantare riducevano il dolore rispetto a nessuno stretching (Siriphorn ed Eksakulkla, 2020). Inizia da questi tre.',
      ],
      exercises: [
        {
          name: 'Allungamento della fascia plantare',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Uno studio del 2003 su 101\u00A0persone (82 hanno completato il follow-up) ha trovato questo allungamento più efficace del solo allungamento del polpaccio a 8\u00A0settimane.' },
          dose: '10\u00A0tenute da 10\u00A0secondi, ogni piede',
          how: 'Siediti e accavalla una caviglia sull’altro ginocchio. Tira indietro le dita con delicatezza finché senti un allungamento lungo l’arco. Tieni, poi rilascia. Fallo prima del primo passo ogni mattina e dopo essere stato seduto a lungo.',
          often: 'Ogni mattina e dopo essere stato seduto',
          feel: 'Un allungamento lungo l’arco, non un dolore acuto',
          stop: 'Il dolore arriva a 6/10',
          media: 'fascia_stretch',
          caption: 'Allungamento della fascia plantare: tira indietro le dita con delicatezza prima di alzarti',
          alt: 'Una figura seduta che tira indietro le dita per allungare l’arco, con la fascia plantare evidenziata',
        },
        {
          name: 'Allungamento del polpaccio (ginocchio teso)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Un gastrocnemio rigido è stato il fattore di rischio più forte per la fascite plantare in uno studio caso-controllo del 2003.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Mani al muro. Gamba dietro tesa, tallone a terra, fianchi in avanti. Tieni finché senti l’allungamento nella parte alta del polpaccio. Il gastrocnemio, il muscolo del polpaccio più grande e più superficiale, si allunga solo con il ginocchio teso.',
          often: 'Quasi tutte le sessioni',
          feel: 'Un allungamento nella parte alta del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Allungamento del polpaccio: gamba dietro tesa, tallone giù, sporgiti in avanti',
          alt: 'Una figura appoggiata al muro con la gamba dietro tesa, il polpaccio evidenziato',
        },
        {
          name: 'Allungamento del soleo (ginocchio piegato)',
          evidence: { level: 'strong', why: 'Grado A nella linea guida. Lavora sul soleo, il muscolo più profondo del polpaccio, che si allunga davvero solo con il ginocchio piegato.' },
          dose: '2\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stessa posizione al muro dell’allungamento del polpaccio, poi piega il ginocchio dietro finché senti l’allungamento scendere, vicino al tallone. Il soleo sta sotto il gastrocnemio e si attacca più vicino al tallone.',
          often: 'Quasi tutte le sessioni, dopo l’allungamento a ginocchio teso',
          feel: 'Un allungamento più in basso nel polpaccio, vicino al tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Allungamento del soleo: piega il ginocchio dietro finché l’allungamento scende',
          alt: 'Una figura in affondo con le ginocchia piegate, con la parte bassa del polpaccio evidenziata',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.digiovanni2003, CITE.riddle],
    },
    {
      h2: 'Quali esercizi di rinforzo aiutano il dolore da spina calcaneare?',
      keyFact: 'In uno studio su 48\u00A0persone, il gruppo dei sollevamenti sulle punte aveva 29\u00A0punti in meno sul Foot Function Index rispetto al gruppo del solo stretching a tre mesi (Rathleff e colleghi, 2015).',
      paragraphs: [
        'Nelle prime settimane spesso basta lo stretching. Quando il dolore del mattino inizia a calmarsi, aggiungere il rinforzo del polpaccio aumenta la capacità di cui ha bisogno la catena del tallone. La linea guida dà al lavoro di forza una **B**, il suo secondo grado più alto.',
        'Nell’unico studio costruito per testare i sollevamenti sulle punte nella fascite plantare, 48\u00A0persone sono state divise tra un gruppo di sollevamenti con carico e un gruppo di solo stretching. Il gruppo dei sollevamenti aveva 29\u00A0punti in meno (cioè meglio) sul Foot Function Index a tre mesi (Rathleff e colleghi, 2015).',
        'Inizia dal livello più facile e sali solo quando ti sembra facile per due sessioni di fila. La progressione qui sotto va dal lavoro da seduto fino al sollevamento con asciugamano e carico dello studio.',
      ],
      exercises: [
        {
          name: 'Sollevamenti sulle punte da seduto',
          evidence: { level: 'moderate', why: 'Il grado B della linea guida riguarda il lavoro di forza in generale. Questo primo gradino a basso carico non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Siediti con i piedi appoggiati a terra. Spingi verso l’alto sugli avampiedi. Le mani sulle ginocchia aggiungono una leggera resistenza. È il modo con meno carico per iniziare a lavorare il polpaccio.',
          often: 'Giorni di forza',
          feel: 'Lavoro facile nei polpacci, quasi senza carico sul tallone',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_seated',
          caption: 'Sollevamenti sulle punte da seduto: spingi verso l’alto sugli avampiedi',
          alt: 'Una figura seduta che solleva entrambi i talloni, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida. Un gradino verso il lavoro con carico su una gamba.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico. Tieniti a un muro o a un corrimano per l’equilibrio.',
          often: 'Giorni di forza, quando quelli da seduto sono facili per due sessioni',
          feel: 'I polpacci che lavorano insieme',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Tenuta sulle punte (isometrica)',
          evidence: { level: 'moderate', why: 'Grado B nella linea guida. Tenuta isometrica a fine movimento. Non testata da sola in uno studio sulla fascite plantare.' },
          dose: '3\u00A0tenute da 20\u00A0secondi, entrambi i piedi',
          how: 'Sali sulle punte con entrambi i piedi, poi resta fermo in alto. Non riabbassarti. Restare fermo carica il tendine senza il rimbalzo di una ripetizione completa.',
          often: 'Giorni di forza, il gradino dopo i sollevamenti su due piedi',
          feel: 'I polpacci che lavorano per restare fermi',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_hold',
          caption: 'Tenuta sulle punte: sali, poi resta fermo in alto',
          alt: 'Una figura che resta ferma sulle punte di entrambi i piedi, con i polpacci evidenziati',
        },
        {
          name: 'Sollevamenti sulle punte con asciugamano (su una gamba)',
          evidence: { level: 'strong', why: 'L’esercizio dello studio randomizzato di Rathleff del 2015. Grado B nella linea guida.' },
          dose: 'Protocollo dello studio: 3\u00A0serie da 12RM, fino a 5\u00A0serie da 8RM. Walkito parte da 3\u00A0serie da 12, ogni gamba',
          how: 'Stai su un piede sul bordo di un gradino, con un asciugamano arrotolato sotto tutte e cinque le dita. Tre secondi su, due secondi fermo in alto, tre secondi giù. L’asciugamano attiva il meccanismo a verricello (windlass), che carica la fascia plantare insieme al polpaccio. Aggiungi peso con uno zaino quando l’ultima ripetizione smette di essere faticosa.',
          often: 'A giorni alterni nello studio. Walkito lo mette nei giorni di forza, mai due di fila.',
          feel: 'Lavoro intenso nel polpaccio e una tensione sotto l’arco',
          stop: 'Il dolore arriva a 6/10',
          media: 'heel_raise_towel',
          caption: 'Sollevamenti sulle punte con asciugamano: tre secondi su, fermo in alto, tre secondi giù',
          alt: 'Una figura su un gradino che sale sulle punte con un asciugamano arrotolato sotto il piede',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Come progredire con gli esercizi per la spina calcaneare?',
      paragraphs: [
        'Progredisci in base alle sensazioni, non al calendario. La regola è: se il livello attuale ti è sembrato facile per due sessioni di fila, sali di un gradino. Se dopo una sessione il dolore del mattino è peggiore, resta al livello attuale o torna indietro di uno.',
      ],
      table: {
        caption: 'Progressione degli esercizi per la spina calcaneare',
        head: ['Livello', 'Esercizio', 'Quando salire'],
        rows: [
          ['1', 'Solo allungamento della fascia plantare + allungamenti del polpaccio', 'Il dolore del mattino si sta calmando e vuoi aggiungere lavoro di forza'],
          ['2', 'Sollevamenti sulle punte da seduto (3 x 10)', 'Facile per due sessioni di fila'],
          ['3', 'Sollevamenti sulle punte su due piedi (3 x 10)', 'Facile per due sessioni di fila'],
          ['4', 'Tenuta sulle punte (3 x 20\u00A0secondi)', 'Facile per due sessioni di fila'],
          ['5', 'Sollevamenti sulle punte con asciugamano, su una gamba (3 x 12)', 'Aumenta il carico con uno zaino quando il peso del corpo è facile'],
        ],
      },
      after: [
        'Aggiungi l’allungamento della fascia plantare e gli allungamenti del polpaccio a ogni livello. Lo stretching non si toglie quando inizi il rinforzo. La linea guida valuta i due in modo indipendente.',
        'Per altri dettagli sul protocollo dei sollevamenti sulle punte con asciugamano e sulla ricerca dietro, vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Esercizi di supporto facoltativi',
      paragraphs: [
        'Gli allungamenti e i sollevamenti sulle punte qui sopra sono la base. Gli esercizi che seguono non sono specifici per la spina calcaneare, ma lavorano sui muscoli del piede e della caviglia che sostengono l’arco e assorbono gli urti. Le prove dietro ciascuno sono più deboli.',
      ],
      exercises: [
        {
          name: 'Massaggio con la pallina',
          evidence: { level: 'early', why: 'Non testato negli studi di questa pagina. È qui per dare sollievo tra una sessione e l’altra.' },
          dose: '2\u00A0minuti, ogni piede',
          how: 'Siediti e fai rotolare lentamente la pianta del piede su una pallina da massaggio o una bottiglia d’acqua ghiacciata. Tieni una pressione decisa, ma non tanto da farti fare smorfie. Farlo dopo una lunga giornata in piedi può dare sollievo al tessuto.',
          often: 'Giorni di recupero o dopo una lunga giornata',
          feel: 'Pressione decisa sotto il piede, mai un dolore acuto',
          stop: 'Il dolore arriva a 6/10',
          media: 'foot_roll',
          caption: 'Massaggio con la pallina: fai rotolare lentamente la pianta su una pallina, con pressione decisa',
          alt: 'Una figura seduta che fa rotolare la pianta di un piede su una pallina',
        },
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'early', why: 'Una revisione del 2024 ha trovato che l’allenamento del piede corto cambiava la forma dell’arco ma non il dolore. Faceva parte di un programma che ha migliorato le misure dell’arco in uno studio del 2023.' },
          dose: '3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si alza. Non arricciare le dita. Questo allena il piccolo muscolo dentro l’arco.',
          often: 'Giorni di forza',
          feel: 'L’arco che si alza, con le dita rilassate',
          stop: 'Il dolore arriva a 6/10',
          media: 'short_foot_seated',
          caption: 'Piede corto: tira l’avampiede verso il tallone',
          alt: 'Una gamba di una persona seduta con il piede a terra, con l’arco evidenziato mentre si alza',
        },
        {
          name: 'Equilibrio su una gamba',
          evidence: { level: 'early', why: 'Nessuno studio specifico sulla spina calcaneare. Lavoro di equilibrio generale per piede e caviglia.' },
          dose: '3\u00A0tenute da 30\u00A0secondi, ogni gamba',
          how: 'Stai su un piede e guarda un punto fisso. Lascia che il piede oscilli. Quell’oscillazione è il piede che tiene l’equilibrio. Mettiti vicino a un muro per sicurezza.',
          often: 'Giorni di equilibrio',
          feel: 'Piccole correzioni nel piede e nella caviglia',
          stop: 'Il dolore arriva a 6/10',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: stai su un piede e lascialo fare piccole correzioni',
          alt: 'Una figura in equilibrio su una gamba, con i muscoli della parte bassa della gamba evidenziati',
        },
      ],
      cites: [CITE.cheng, CITE.brijwasi],
    },
    {
      h2: 'Cosa dovresti sentire con gli esercizi, e quando fermarti?',
      paragraphs: [
        'Lo stretching deve dare una sensazione di tensione, non una fitta. Un allungamento del polpaccio che dà una tensione comoda nella parte alta o bassa del polpaccio va bene. Un allungamento della fascia plantare che tira con delicatezza lungo l’arco va bene. Se lo stretching riproduce la fitta che senti ai primi passi, alleggerisci.',
        'I sollevamenti sulle punte devono dare la sensazione di lavoro nel polpaccio. La versione con asciugamano dà anche una tensione sotto l’arco, che è la fascia che viene caricata. Quella tensione è normale ed è proprio lo scopo dell’asciugamano.',
        'Fermati per oggi se durante un esercizio il dolore arriva a **6/10 o più**, o se la mattina dopo i primi passi sono chiaramente peggiori del solito. È la regola di fermarsi e scendere di un livello che usa l’app.',
        'Un leggero indolenzimento che passa in un giorno è normale, soprattutto nelle prime due settimane. Un dolore che resta alto per giorni o peggiora di settimana in settimana è un motivo per tornare indietro di un livello o rivolgerti a un professionista sanitario.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quanto ci vuole perché il dolore da spina calcaneare migliori con gli esercizi?',
      paragraphs: [
        'Non esiste uno studio che misuri i risultati degli esercizi proprio nelle persone con spina calcaneare. I tempi qui sotto vengono dagli studi sulla fascite plantare, che nella maggior parte dei casi è il problema che dà il dolore intorno alla spina.',
        'Una revisione delle prove cliniche riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche come stretching e plantari, spesso nel giro di alcuni mesi (Latt e colleghi, 2020). Nello studio di Rathleff del 2015, il gruppo dei sollevamenti sulle punte con carico era nettamente avanti rispetto al gruppo del solo stretching a tre mesi.',
        'Nessun programma di esercizi può promettere dei tempi a una singola persona. **Quello che puoi misurare è se le cose stanno cambiando**:',
        {
          list: [
            'Il dolore del mattino su una scala da 0 a 10, misurato prima del primo passo, è il segnale quotidiano più chiaro.',
            'La resistenza del polpaccio, misurata da quanti sollevamenti sulle punte su una gamba riesci a fare, segue la forza nel corso delle settimane.',
          ],
        },
        'Entrambi sono più utili che tirare a indovinare.',
      ],
      cites: [CITE.latt, CITE.rathleff],
    },
    {
      h2: 'Si può eliminare la spina calcaneare in modo naturale?',
      paragraphs: [
        '**Esercizi, stretching e cambi nella dieta non sciolgono una spina calcaneare.** La spina è tessuto osseo. Resta nella radiografia che tu faccia stretching o no.',
        'Ma «eliminare la spina» è raramente l’obiettivo giusto. Nello studio del 2019, la spina c’era quasi sempre insieme a una fascia plantare ispessita, e il tessuto molle è la parte che l’esercizio può cambiare. Di solito il dolore viene dal tessuto molle. Gli esercizi di questa pagina lavorano sul tessuto molle. Se il dolore si calma, la spina non è un problema da risolvere.',
        'Se qualcuno ti ha promesso un integratore, una crema o un dispositivo che scioglie le spine calcaneari, sii scettico. Nessuna prova pubblicata sostiene questa affermazione. L’approccio raccomandato dalla linea guida è stretching, rinforzo del polpaccio e gestione del carico.',
      ],
      cites: [CITE.menzCoexistence, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quali esercizi aiutano il dolore da spina calcaneare?',
      cites: [CITE.guideline],
      a: 'Gli esercizi che aiutano il dolore da spina calcaneare sono gli stessi che la linea guida del 2023 sul dolore al tallone raccomanda per la fascite plantare: l’allungamento della fascia plantare (grado A nella linea guida), l’allungamento del polpaccio (grado A) e il rinforzo graduale del polpaccio con i sollevamenti sulle punte (grado B). Lavorano sulla fascia plantare e sui muscoli del polpaccio intorno alla spina, che di solito sono ciò che fa male.',
    },
    {
      q: 'Gli esercizi sciolgono la spina calcaneare?',
      a: 'No. La spina calcaneare è tessuto osseo e l’esercizio non la scioglie. Gli esercizi lavorano sulla fascia plantare e sul polpaccio, i tessuti molli intorno alla spina che sono quasi sempre l’origine del dolore. Se con gli esercizi il dolore si calma, la spina nella radiografia non è un problema da risolvere.',
    },
    {
      q: 'Quanto spesso fare gli allungamenti per la spina calcaneare?',
      cites: [CITE.guideline, CITE.digiovanni2003],
      a: 'L’allungamento della fascia plantare funziona meglio ogni mattina prima di alzarti e dopo essere stato seduto a lungo. Gli allungamenti del polpaccio vanno in quasi tutte le sessioni. In uno studio su 101\u00A0persone con dolore cronico al tallone, il gruppo che faceva l’allungamento della fascia plantare ha riferito risultati migliori a 8\u00A0settimane rispetto al gruppo che faceva solo l’allungamento del polpaccio (DiGiovanni e colleghi, 2003).',
    },
    {
      q: 'Quanto ci mette a passare il dolore da spina calcaneare?',
      cites: [CITE.latt, CITE.rathleff],
      a: 'La maggior parte dei tempi viene dagli studi sulla fascite plantare, perché di solito è l’irritazione della fascia a fare male. Una revisione riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche, spesso nel giro di alcuni mesi (Latt 2020). In uno studio su 48\u00A0persone, i sollevamenti sulle punte con carico hanno dato un vantaggio sul solo stretching entro tre mesi (Rathleff 2015). Nessun programma può promettere dei tempi a una singola persona.',
    },
    {
      q: 'Devo smettere di allenarmi se ho la spina calcaneare?',
      cites: [CITE.guideline],
      a: 'Non per forza. La linea guida raccomanda l’esercizio come parte dell’approccio, non il solo riposo. Ferma un esercizio per quel giorno se il dolore arriva a 6 su 10 o più, o se la mattina dopo va chiaramente peggio. Torna indietro di un livello invece di fermarti del tutto. Se il dolore peggiora di settimana in settimana anche dopo gli aggiustamenti, rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Camminare fa bene con la spina calcaneare?',
      cites: [CITE.guideline],
      a: 'Camminare in sé non è il problema. Camminare con scarpe che sostengono il piede, a un ritmo comodo, di solito va bene ed è meglio del riposo completo. Di solito il dolore viene dalla fascia plantare e dal polpaccio intorno alla spina, e camminare in modo moderato tiene attiva la pompa del polpaccio. Se camminare ti peggiora il dolore del mattino dopo, accorcia la distanza e riaumentala piano piano.',
    },
    {
      q: 'Quali esercizi evitare con la spina calcaneare?',
      cites: [CITE.guideline],
      a: 'Evita i movimenti ad alto impatto come corsa, salti e pliometria nelle fasi in cui il dolore al tallone è più forte; colpi ripetuti su una superficie dura sforzano il tessuto vicino alla spina. Anche le discese profonde del tallone dal bordo di un gradino possono sovraccaricare una fascia irritata. La linea guida del 2023 sostiene di regolare il carico invece di vietare esercizi; il test è se il tallone va peggio la mattina dopo.',
    },
    {
      q: 'Cosa fa riacutizzare il dolore da spina calcaneare?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'Il fattore scatenante più comune sono i colpi ripetuti su una superficie dura: correre, saltare o stare in piedi per ore irrita il tessuto molle vicino alla spina nello stesso modo in cui irrita la semplice fascite plantare. Anche un aumento improvviso dell’attività, scarpe consumate e camminare scalzo sulle piastrelle possono scatenarlo. A calmare una riacutizzazione è regolare il carico, non l’osso.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'stringere i lati del tallone riproduce il dolore, il che può far pensare a una frattura da stress',
      'si accompagna a intorpidimento, formicolio o bruciore',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'ti fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, soprattutto se sono coinvolte altre articolazioni',
      'il dolore ti tiene sveglio di notte o c’è anche a riposo',
      'non è migliorato dopo diverse settimane di stretching quotidiano e lavoro sul polpaccio',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Non devi tenere il conto dei livelli, delle serie o di quando progredire. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è un dolore del mattino a 1 su 10 o meno per 14\u00A0giorni di fila. Lo stretching inizia dal primo giorno. La sequenza per il polpaccio, dai sollevamenti da seduto fino a quelli con asciugamano e carico, va al tuo ritmo.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni (poi ogni 28 quando hai raggiunto l’obiettivo del mattino), un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Esercizi per la spina calcaneare',
  campaign: 'guide-heel-spur-exercises-it',
};
