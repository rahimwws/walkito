import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/shin-splints.ts` (2026-10-08). Figures, doses and
 * qualifiers are identical to the English page. Citation notes live in the
 * English file.
 */

/** `3, 5 oder 7`: the plan's options as a German list. */
const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} oder ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const SHIN_SPLINTS_DE: Guide = {
  lang: 'de',
  page: 'shinSplints',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Schienbeinkantensyndrom: Übungen, was hilft und was nicht',
  description:
    'Übungen beim Schienbeinkantensyndrom für Läufer: was die Forschung zeigt, Startdosen, wie du es von einem Ermüdungsbruch unterscheidest und wann zum Arzt.',
  h1: 'Übungen beim Schienbeinkantensyndrom: was hilft und was nicht',
  lede:
    'Das Schienbeinkantensyndrom ist Schmerz an der Innenkante des Schienbeins, verteilt über mehrere Zentimeter statt an einer einzelnen wunden Stelle. Der medizinische Name ist mediales tibiales Stresssyndrom, kurz MTSS. Die meisten Seiten listen Übungen auf, als wäre bewiesen, dass sie die Heilung beschleunigen. Eine systematische Übersichtsarbeit von 2013 über alle Behandlungsstudien fand, dass für Dehn- und Kraftübungen nicht gezeigt ist, dass sie es verkürzen.',
  intro: [
    'Das heißt nicht, dass Übungen nutzlos sind. Die Übungen unten zielen auf Wadenausdauer, Kraft am Schienbein und Hüftkontrolle, die Bereiche, in denen Forschende Unterschiede zwischen Menschen mit und ohne Schienbeinkantensyndrom gefunden haben. Eine Fall-Kontroll-Studie fand, dass Läufer mit Schienbeinkantensyndrom bis zur Erschöpfung weniger Wiederholungen beim einbeinigen Fersenheben schafften als passende Kontrollpersonen ohne.',
    'Ob es die Erholung verkürzt, diese Ausdauer wieder aufzubauen, ist noch offen. Der sicherste Hebel ist in jeder bisherigen Studie, die Laufbelastung zu reduzieren, die die Beschwerden ausgelöst hat.',
    'Das Fersenheben selbst, mit wie vielen Wiederholungen und wann du Last dazunimmst, wird ausführlicher unter [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/) behandelt. Wenn du den ganzen Tag stehst, statt zu laufen, deckt [Fußschmerzen vom langen Stehen](/de/fussschmerzen-vom-stehen/) dieselben Übungen für Wade und Gewölbe für diese Ursache ab.',
  ],
  toc: true,
  takeaways: [
    'Eine systematische Übersichtsarbeit von 2013 über 11\u00A0Behandlungsstudien fand, dass für Dehn- und Kraftübungen nicht bewiesen ist, dass sie die Erholung vom medialen tibialen Stresssyndrom beschleunigen (Winters und Kollegen, 2013).',
    'In der einzigen randomisierten Studie zu Übungen beim Schienbeinkantensyndrom verkürzte es die Erholung nicht, Wadendehnen und Wadenkräftigung zu einem gestuften Laufprogramm hinzuzufügen, verglichen mit dem Laufprogramm allein, in einer Studie mit 74\u00A0Sportlern (Moen und Kollegen, 2012).',
    'Läufer mit Schienbeinkantensyndrom schafften bis zur Erschöpfung weniger Wiederholungen beim einbeinigen Fersenheben als passende Kontrollpersonen, was auf eine Lücke bei der Wadenausdauer hindeutet (Madeley und Kollegen, 2007).',
    'Punktgenauer Druckschmerz an einer kleinen Stelle, statt eines Schmerzes, der sich über mehrere Zentimeter Knochen verteilt, kann ein Ermüdungsbruch sein und braucht eine medizinische Fachperson, keine weiteren Übungen.',
  ],
  sections: [
    {
      h2: 'Was ist das Schienbeinkantensyndrom, und welche Übungen helfen wirklich?',
      keyFact: 'Eine systematische Übersichtsarbeit von 2013 über 11\u00A0Behandlungsstudien zum Schienbeinkantensyndrom kam zu dem Schluss, dass kein Dehn- oder Kraftansatz klare Belege dafür hat, die Erholung zu beschleunigen (Winters und Kollegen, 2013).',
      paragraphs: [
        'Das Schienbeinkantensyndrom, oder mediales tibiales Stresssyndrom, ist eine Überlastungsverletzung des Schienbeins und des Gewebes darum. Der Schmerz ist meist flächig, verteilt über mehrere Zentimeter entlang der Innenkante der Tibia, und beginnt in der Regel während oder nach dem Laufen. Eine Übersichtsarbeit von 2020 zu Laufanfängern und Freizeitläufern fand die klarsten Zusammenhänge in der Art, wie Läufer sich bewegen, darunter mehr Rotation in der Hüfte und ein Fuß, der stärker als üblich nach innen rollt.',
        'Die ehrliche Antwort zu Übungen beim Schienbeinkantensyndrom ist, dass **für kein bestimmtes Übungsprogramm in einer kontrollierten Studie gezeigt wurde, dass es die Erholung beschleunigt.** Eine systematische Übersichtsarbeit von 2013 hat 11\u00A0Behandlungsstudien angesehen und kam zu dem Schluss, dass Dehnen und Kräftigen „sich bei der Behandlung von MTSS nicht als wirksam erwiesen haben“.',
        'In der einzigen randomisierten Studie mit einem Übungsarm wurden 74\u00A0Sportler in drei Gruppen aufgeteilt:',
        {
          list: [
            'Ein gestuftes Laufprogramm allein.',
            'Dasselbe Programm plus Wadendehnen und Wadenkräftigung.',
            'Dasselbe Programm plus Kompressionsstrümpfe.',
          ],
        },
        'Alle drei Gruppen verbesserten sich ähnlich schnell.',
        'Die Übungen unten sind also kein eigenes Protokoll für das Schienbeinkantensyndrom. Es sind allgemeine Übungen für Unterschenkel und Hüfte aus dem Übungskatalog, die auf die Muskeln und Gelenke zielen, die Forschende bei Menschen mit Schienbeinkantensyndrom untersucht haben. Der stärkste Schritt bleibt, die Laufbelastung zu reduzieren und sie langsam wieder aufzubauen.',
      ],
      cites: [CITE.mtssReview, CITE.winters, CITE.moen],
    },
    {
      h2: 'Welche Übungen helfen beim Schienbeinkantensyndrom, und wie viel solltest du machen?',
      paragraphs: [
        'Das sind Übungen aus dem Katalog der App, die sich mit den Muskeln und Risikofaktoren überschneiden, die die Forschung zum Schienbeinkantensyndrom gefunden hat. Die Wadendehnungen und das Fersenheben sind dieselben wie bei den [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) und zielen auf dieselben Gewebe. Es sind Startdosen, keine Verordnung. Jede Evidenzstufe unten ist **vorläufig**, weil für keine Übung auf dieser Liste in einer Studie gezeigt wurde, dass sie die Erholung beim Schienbeinkantensyndrom verkürzt. [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Wenn du beim Check-in das Schienbein als schmerzend markierst, gibt dir Walkito Sprunggelenk-Wippen und Fußrollen. Zehenheben taucht im allgemeinen Plan ab Stufe 2 als Zusatzübung auf, im Wechsel mit dem Sprunggelenk-Wippen. Ein eigenes Programm für das Schienbeinkantensyndrom gibt es nicht. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf.',
      ],
      table: {
        head: ['Übung', 'Dosis', 'Wie oft', 'Was du spüren solltest', 'Aufhören, wenn'],
        rows: [
          ['Wadendehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten', 'Eine Dehnung in der Wade des gestreckten hinteren Beins', 'Der Schmerz 6/10 erreicht'],
          ['Soleusdehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten', 'Eine Dehnung tief in der Wade, nahe der Ferse', 'Der Schmerz 6/10 erreicht'],
          ['Zehenheben', '3\u00A0Sätze à 10, beide Füße', 'Krafttage', 'Der Schienbeinmuskel arbeitet, während sich die Zehen heben', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben beidbeinig', '3\u00A0Sätze à 10, beide Füße', 'Krafttage', 'Die Waden arbeiten, beide Füße teilen sich die Last', 'Der Schmerz 6/10 erreicht'],
          ['Hüftabduktion', '3\u00A0Sätze à 15, jedes Bein', 'Krafttage', 'Arbeit an der Außenseite der Hüfte', 'Der Schmerz 6/10 erreicht'],
          ['Einbeinstand', '3-mal 30\u00A0Sekunden halten, jedes Bein', 'Gleichgewichtstage', 'Fuß und Sprunggelenk machen kleine Korrekturen', 'Der Schmerz 6/10 erreicht'],
          ['Sprunggelenk-Wippen', '2\u00A0Sätze à 15, jedes Bein', 'Die meisten Einheiten', 'Das Sprunggelenk beugt sich weiter, die Ferse bleibt unten', 'Der Schmerz 6/10 erreicht'],
          ['Fußrollen', '2\u00A0Minuten', 'Erholungstage', 'Fester Druck unter dem Fuß, nie so, dass du zusammenzuckst', 'Der Schmerz 6/10 erreicht'],
        ],
      },
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: {
            level: 'early',
            why: 'Wird beim Schienbeinkantensyndrom oft empfohlen. Eine systematische Übersichtsarbeit von 2013 fand, dass nicht bewiesen ist, dass Dehnen die Erholung vom Schienbeinkantensyndrom beschleunigt.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Wade und Schienbein teilen sich beim Laufen die Aufgabe, deinen Fuß zu kontrollieren, eine verkürzte Wade verlagert also mehr Last aufs Schienbein.',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: {
            level: 'early',
            why: 'Dieselbe Begründung wie bei der Wadendehnung. Nicht als eigene Maßnahme beim Schienbeinkantensyndrom getestet.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          how: 'Geh in dieselbe Position an der Wand und beug dann das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt nur mit gebeugtem Knie los.',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du es nahe der Ferse spürst',
          alt: 'Eine Figur in der Wanddehnung mit gebeugtem hinterem Knie, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Zehenheben',
          evidence: {
            level: 'early',
            why: 'Zielt auf den Tibialis anterior, den Muskel vorn am Schienbein. Keine Studie speziell zum Schienbeinkantensyndrom, und das Schienbeinkantensyndrom schmerzt meist entlang der Innenkante des Schienbeins, der Zusammenhang ist also indirekt.',
          },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Der Schienbeinmuskel arbeitet, während sich die Zehen heben',
          how: 'Stell dich mit dem Rücken an eine Wand. Heb die Zehen und den vorderen Teil beider Füße vom Boden, die Fersen bleiben unten. Senk langsam ab. Dabei arbeitet der Tibialis anterior, der Muskel vorn am Schienbein.',
          image: 'Übung: Zehenheben',
          media: 'tibialis_raise',
          caption: 'Zehenheben: Rücken an die Wand, Zehen heben, Fersen bleiben unten',
          alt: 'Eine Figur steht an einer Wand und hebt die Zehen vom Boden, die Schienbeinmuskeln sind hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: {
            level: 'early',
            why: 'Läufer mit Schienbeinkantensyndrom hatten in einer Fall-Kontroll-Studie weniger Wadenausdauer. Nicht als Behandlung des Schienbeinkantensyndroms getestet.',
          },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Die Wadenausdauer war bei Läufern mit Schienbeinkantensyndrom geringer als bei passenden Kontrollpersonen, deshalb gehört Wadenkraft auf diese Liste.',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben: gerade hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Hüftabduktion',
          evidence: {
            level: 'early',
            why: 'Zwei Metaanalysen haben den Bewegungsumfang der Hüftrotation mit dem Schienbeinkantensyndrom in Verbindung gebracht. Keine Studie hat Hüftkräftigung als Behandlung des Schienbeinkantensyndroms getestet.',
          },
          dose: '3\u00A0Sätze à 15, jedes Bein',
          often: 'Krafttage',
          feel: 'Arbeit an der Außenseite der Hüfte',
          how: 'Stell dich mit einem Widerstandsband um beide Knöchel hin und heb ein Bein gegen das Band zur Seite. Drück über die Ferse, nicht über die Zehen. Zwei Metaanalysen fanden, dass sich der Bewegungsumfang der Hüftrotation zwischen Menschen mit und ohne Schienbeinkantensyndrom unterscheidet, darauf beruht die Hüftarbeit.',
          image: 'Übung: Hüftabduktion',
          media: 'hip_abduction',
          caption: 'Hüftabduktion: Heb ein Bein gegen das Band zur Seite',
          alt: 'Eine stehende Figur mit einem Band um die Knöchel hebt ein Bein zur Seite, die äußere Hüfte ist hervorgehoben',
        },
        {
          name: 'Einbeinstand',
          evidence: {
            level: 'early',
            why: 'Allgemeines Gleichgewichtstraining. Keine Studie speziell zum Schienbeinkantensyndrom dahinter.',
          },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Gleichgewichtstage',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          how: 'Stell dich auf einen Fuß und schau auf einen festen Punkt. Lass den Fuß wackeln. Dieses Wackeln ist der Fuß, der das Gleichgewicht hält. Stell dich in die Nähe einer Wand, wenn du eine Absicherung brauchst.',
          image: 'Übung: Einbeinstand',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Steh auf einem Fuß und lass ihn kleine Korrekturen machen',
          alt: 'Eine Figur balanciert auf einem Bein, die Unterschenkelmuskeln sind hervorgehoben',
        },
        {
          name: 'Sprunggelenk-Wippen',
          evidence: {
            level: 'early',
            why: 'Das gibt die App, wenn du das Schienbein als schmerzend markierst. Keine Studie speziell zum Schienbeinkantensyndrom.',
          },
          dose: '2\u00A0Sätze à 15, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Das Sprunggelenk beugt sich weiter, die Ferse bleibt unten',
          how: 'Stell dich in Schrittstellung nahe an eine Wand. Schieb das vordere Knie über die Zehen nach vorn, die Ferse bleibt flach auf dem Boden. Ein Sprunggelenk, das sich gut beugt, lässt das Schienbein Stöße beim Laufen gleichmäßiger abfangen.',
          image: 'Übung: Sprunggelenk-Wippen',
          media: 'ankle_rocks',
          caption: 'Sprunggelenk-Wippen: Knie über die Zehen, Ferse bleibt auf dem Boden',
          alt: 'Eine Figur in Schrittstellung schiebt das Knie über die Zehen nach vorn, das Sprunggelenk ist hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: {
            level: 'early',
            why: 'Das gibt die App, wenn du das Schienbein als schmerzend markierst. Für das Wohlgefühl, keine getestete Maßnahme beim Schienbeinkantensyndrom.',
          },
          dose: '2\u00A0Minuten',
          often: 'Erholungstage',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du zusammenzuckst, nimm Druck raus. Das Fußrollen zielt nicht direkt aufs Schienbein, lockert aber das Gewebe an der Fußsohle, das sich die Last mit dem Unterschenkel teilt.',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
      ],
      cites: [CITE.winters, CITE.madeley, CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Wie unterscheidet sich das Schienbeinkantensyndrom von einem Ermüdungsbruch?',
      paragraphs: [
        'Das Schienbeinkantensyndrom von einem Ermüdungsbruch zu unterscheiden ist wichtig, weil beide eine andere Reaktion brauchen. Das mediale tibiale Stresssyndrom und Ermüdungsbrüche der Tibia liegen auf demselben Kontinuum von Stressverletzungen des Knochens. Unter weiterer Belastung kann sich ein Schienbeinkantensyndrom in Richtung Ermüdungsbruch entwickeln. Das ist der Hauptgrund, die Trainingsbelastung früh zu ändern, statt trotz flächiger Schienbeinschmerzen weiterzulaufen.',
        'Das Schienbeinkantensyndrom macht meist einen flächigen Druckschmerz, verteilt über mehrere Zentimeter an der Innenseite des Schienbeins. Ein Ermüdungsbruch macht einen punktgenauen Druckschmerz an einer kleinen Stelle, oft mit Schwellung. Schmerz, der beim Aufwärmen nachlässt, spricht eher für ein Schienbeinkantensyndrom. Schmerz, der beim Laufen immer weiter zunimmt oder in Ruhe oder nachts auftritt, spricht eher für einen Ermüdungsbruch.',
        'Schmerz hinten an der Ferse statt am Schienbein ist ein anderes Problem, meist die Achillessehne; lies [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/), wenn deiner dort sitzt.',
        'Ein häufig genannter Test für zu Hause ist ein Hüpfer auf einem Bein, der einen stechenden, punktgenauen Schmerz auslöst und so auf einen Bruch hindeuten soll. Eine Übersichtsarbeit von 2011 in American Family Physician fand aber keine neueren Belege für seine Genauigkeit, und ein positiver Hüpftest kam auch bei fast der Hälfte der Patienten mit bestätigtem Schienbeinkantensyndrom vor. **Ein positiver Hüpftest ist also ein Grund, zu einer medizinischen Fachperson zu gehen, kein verlässlicher Weg, einen Bruch selbst festzustellen oder auszuschließen.**',
      ],
      cites: [CITE.patelStressFracture],
    },
    {
      h2: 'Kannst du mit Schienbeinkantensyndrom weiterlaufen?',
      keyFact: 'Eine Studie von 2008 mit 532\u00A0Laufanfängern fand keinen Unterschied bei den Verletzungsraten zwischen einer Steigerung des Wochenumfangs um 10\u00A0% und einer schnelleren Steigerung, die Regel ist also nicht belegt (Buist und Kollegen, 2008).',
      paragraphs: [
        'Es gibt keine Studie, die dir genau sagt, wie viel du reduzieren sollst. Was etwas Unterstützung hat, ist die Form eines gestuften Laufprogramms: In der einzigen randomisierten Studie folgten alle drei Gruppen einem schrittweisen Wiedereinstieg ins Laufen, und alle drei verbesserten sich ungefähr gleich schnell. Das Laufprogramm war die Konstante, nicht die zusätzlichen Übungen oder die Kompression.',
        'Gründe, aufzuhören und es abklären zu lassen, statt weiterzulaufen:',
        {
          list: [
            'Stechender Schmerz beim Laufen.',
            'Schmerz, der unterwegs schlimmer wird.',
            'Schmerz in Ruhe.',
          ],
        },
        'Wenn der Schmerz beim Aufwärmen nachlässt und erträglich bleibt, ist ein kürzerer oder leichterer Lauf seltener pro Woche ein vernünftiger Mittelweg, während sich das Schienbein anpasst. Ruhetage zwischen den Läufen geben dem Knochen Zeit, auf die Belastung zu reagieren.',
        'Die 10-%-Regel, also den Wochenumfang um höchstens 10\u00A0% zu steigern, ist eine oft genannte Faustregel, aber keine bewiesene. Eine Studie von 2008 mit 532\u00A0Laufanfängern fand keinen Unterschied bei den Verletzungsraten zwischen einem Programm nach der 10-%-Regel und einem schnelleren.',
        'Was eine Studie von 2014 mit 874\u00A0Läufern zeigte: Große, plötzliche Sprünge in der Distanz gehen mit mehr Verletzungen einher. **Langsam ist besser als plötzlich, aber ein bestimmter Prozentsatz ist nicht durch Studien gestützt.** [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) geht genauer auf dieselbe Belastungssteuerung ein.',
      ],
      cites: [CITE.moen, CITE.buist, CITE.nielsen],
    },
    {
      h2: 'Was im Training verhindert wirklich, dass das Schienbeinkantensyndrom zurückkommt?',
      paragraphs: [
        'Für keine einzelne Übung wurde in einer Studie gezeigt, dass sie ein Schienbeinkantensyndrom verhindert. Die Risikofaktoren aus zwei unabhängigen Metaanalysen sprechen für eine allgemeine Steuerung der Trainingsbelastung und eine langsame Steigerung, nicht für eine bestimmte Dehnung oder Kraftübung. Die übereinstimmenden Risikofaktoren in beiden Übersichtsarbeiten waren:',
        {
          list: [
            'Ein höherer BMI.',
            'Ein stärkerer Navicular Drop (wie weit das Gewölbe unter Last absinkt).',
            'Weibliches Geschlecht.',
            'Weniger Jahre Lauferfahrung.',
            'Ein früheres Schienbeinkantensyndrom.',
          ],
        },
        'Ein allgemeines Muster für den Wiedereinstieg ins Laufen:',
        {
          list: [
            'Zuerst schmerzfreies Gehen.',
            'Dann lockeres Joggen auf weichem Untergrund mit Ruhetagen dazwischen.',
            'Dann nach und nach längere Läufe, solange die Morgen schmerzfrei bleiben.',
          ],
        },
        'Jeder Tag, der einen stechenden oder punktgenauen Schmerz auslöst, oder einen Schmerz, der beim Laufen zunimmt, statt beim Aufwärmen nachzulassen, **ist ein Signal zum Aufhören, nicht zum Durchbeißen.**',
      ],
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      h2: 'Wie lange dauert es, bis das Schienbeinkantensyndrom besser wird?',
      keyFact: 'In einer Studie mit 74\u00A0Sportlern mit Schienbeinkantensyndrom dauerte es über die drei Gruppen im Mittel etwa 105\u00A0Tage, bis das Laufprogramm abgeschlossen war, die Spanne war aber groß (Moen und Kollegen, 2012).',
      paragraphs: [
        'Die Quellen unterscheiden sich, und keine nennt eine einzelne, durch Studien gestützte Zahl. Allgemein gilt bei Überlastungsverletzungen, dass leichte Fälle innerhalb weniger Wochen mit weniger Aktivität abklingen, während Fälle, die mit wiederkehrenden Trainingsfehlern zusammenhängen, länger dauern können, wenn dieselbe Belastung zurückkommt, bevor sich das Gewebe angepasst hat.',
        'In der randomisierten Studie mit 74\u00A0Sportlern mit Schienbeinkantensyndrom dauerte es über die drei Gruppen im Mittel etwa 102 bis 118\u00A0Tage (insgesamt im Mittel 105\u00A0Tage), bis das Laufprogramm abgeschlossen war, die Spanne war aber groß.',
        'Weil Schienbeinkantensyndrom und Ermüdungsbrüche der Tibia auf demselben Kontinuum liegen, ist Schmerz, der nach ein paar Wochen mit leichterem Laufen und Ruhetagen nicht besser wird, ein Grund, es abklären zu lassen, statt länger zu warten. **Das klarste Zeichen der Erholung ist schmerzfreies Gehen und dann schmerzfreies lockeres Joggen, in dieser Reihenfolge, bevor der Umfang wieder steigt.**',
      ],
      cites: [CITE.moen],
    },
  ],
  faq: [
    {
      q: 'Was hilft am schnellsten gegen Schienbeinkantensyndrom?',
      a: 'Keine Studie hat gezeigt, dass eine bestimmte Übung oder Dehnung die Erholung vom Schienbeinkantensyndrom beschleunigt. Die am ehesten passenden Belege kommen aus einer randomisierten Studie mit 74\u00A0Sportlern, in der Wadendehnen und Wadenkräftigung zusätzlich zu einem gestuften Laufprogramm die Erholung gegenüber dem Laufprogramm allein nicht verkürzten. Die Laufbelastung zu reduzieren, die die Beschwerden ausgelöst hat, bleibt der wichtigste Hebel, keine bestimmte Übung.',
      cites: [CITE.moen],
    },
    {
      q: 'Hilft Dehnen wirklich beim Schienbeinkantensyndrom?',
      a: 'Eine systematische Übersichtsarbeit von 2013 über 11\u00A0Behandlungsstudien fand, dass Dehn- und Kraftübungen sich beim Schienbeinkantensyndrom auf dem verfügbaren Evidenzniveau „nicht als wirksam erwiesen haben“. Das heißt nicht, dass Dehnen schadet, nur dass keine gute Studie gezeigt hat, dass es den Verlauf verändert. Wadendehnungen werden trotzdem oft empfohlen und machen es kaum schlimmer.',
      cites: [CITE.winters],
    },
    {
      q: 'Sollte man mit Schienbeinkantensyndrom weiterlaufen?',
      a: 'Nichts in den Studien sagt dir einen genauen Umfang, auf den du reduzieren sollst. Die einzige randomisierte Studie zeigte, dass ein gestufter, schrittweiser Wiedereinstieg ins Laufen in allen drei Studiengruppen ungefähr gleich gut funktionierte. Stechender Schmerz beim Laufen, Schmerz, der unterwegs schlimmer wird, oder Schmerz in Ruhe sind Gründe, aufzuhören und es abklären zu lassen, statt durchzubeißen.',
      cites: [CITE.moen],
    },
    {
      q: 'Kann aus einem Schienbeinkantensyndrom ein Ermüdungsbruch werden?',
      a: 'Schienbeinkantensyndrom und Ermüdungsbrüche der Tibia werden allgemein als verschiedene Punkte auf demselben Kontinuum von Stressverletzungen des Knochens beschrieben. Ein Schienbeinkantensyndrom, um das du dich nicht kümmerst, kann sich unter weiterer Belastung in Richtung Ermüdungsbruch entwickeln. Das ist der Hauptgrund, die Trainingsbelastung früh zu ändern, statt weiterzulaufen.',
    },
    {
      q: 'Was verursacht ein Schienbeinkantensyndrom bei Läufern?',
      a: 'Zwei unabhängige Metaanalysen fanden übereinstimmende Risikofaktoren: einen höheren BMI, einen stärkeren Navicular Drop (wie weit das Gewölbe unter Last absinkt), weibliches Geschlecht, weniger Jahre Lauferfahrung und ein früheres Schienbeinkantensyndrom. Eine weitere Fall-Kontroll-Studie fand, dass Läufer mit Schienbeinkantensyndrom weniger Wadenausdauer hatten, was darauf hindeutet, dass ein Defizit der Plantarflexoren Teil des Bildes sein könnte.',
      cites: [CITE.newman, CITE.hamstraWright, CITE.madeley],
    },
    {
      q: 'Gibt es eine Übung, die verhindert, dass das Schienbeinkantensyndrom zurückkommt?',
      a: 'Für keine einzelne Übung gibt es Belege auf Studienniveau, dass sie einem Schienbeinkantensyndrom vorbeugt. Die Risikofaktoren aus zwei Metaanalysen, darunter BMI, Absinken des Gewölbes und Lauferfahrung, sprechen für eine langsame Steuerung der Trainingsbelastung und eine allgemeine Kräftigung des Unterschenkels statt einer bestimmten Bewegung. Das ist eine weniger befriedigende Antwort als eine konkrete Übung, aber es ist das, was die Forschung stützt.',
      cites: [CITE.newman, CITE.hamstraWright],
    },
    {
      q: 'Was wird oft mit einem Schienbeinkantensyndrom verwechselt?',
      cites: [CITE.mtssReview],
      a: 'Ein Ermüdungsbruch der Tibia, ein chronisches belastungsabhängiges Kompartmentsyndrom und eine Tendinopathie der Tibialis-posterior-Sehne können alle Schienbeinschmerzen verursachen und als Schienbeinkantensyndrom bezeichnet werden. Ein Ermüdungsbruch tut meist an einer bestimmten Stelle am Knochen weh, während ein Kompartmentsyndrom ein Engegefühl und Taubheit macht, die beim Laufen zunehmen und kurz nach dem Aufhören nachlassen. Beides braucht eine medizinische Fachperson statt mehr Belastung.',
    },
    {
      q: 'Darf man mit Schienbeinkantensyndrom gehen?',
      cites: [CITE.mtssReview],
      a: 'Meist ja. Gehen belastet weniger als Laufen, und viele mit medialem tibialem Stresssyndrom können weitergehen, ohne dass es aufflammt, solange der Schmerz leicht bleibt und danach schnell abklingt. Wenn schon das Gehen einen stechenden Schmerz an einer einzelnen Stelle am Knochen auslöst, hör auf und lass es abklären, denn dieses Muster passt eher zu einem Ermüdungsbruch als zu einem Schienbeinkantensyndrom.',
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz punktgenau ist, auf eine kleine Stelle am Knochen begrenzt, statt über mehrere Zentimeter verteilt',
      'der Schmerz beim Laufen zunimmt, statt beim Aufwärmen nachzulassen',
      'du Schmerzen in Ruhe oder nachts hast',
      'das Schienbein an einer bestimmten Stelle geschwollen ist',
      'ein Hüpfer auf einem Bein einen stechenden, punktgenauen Schmerz auslöst',
      'bei Belastung ein Engegefühl, Taubheit oder Kribbeln in Unterschenkel oder Fuß entsteht, das während der Aktivität zunimmt und innerhalb von Minuten nach dem Aufhören verschwindet, was ein Zeichen für ein Kompartmentsyndrom sein kann',
      'der Schmerz nach mehreren Wochen mit weniger Laufen und Ruhetagen nicht nachgelassen hat',
      'du das Bein nicht belasten kannst oder hinkst',
      'der Unterschenkel gerötet oder warm ist oder du Fieber hast oder dich krank fühlst',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: `Walkito hat kein eigenes Programm für das Schienbeinkantensyndrom, und diese Seite erklärt, warum: Für kein Übungsprogramm wurde in einer Studie gezeigt, dass es die Erholung vom Schienbeinkantensyndrom beschleunigt. Was Walkito hat, ist Arbeit für Wade, Sprunggelenk und Gleichgewicht, die auf dieselben Muskeln zielt, die Forschende untersucht haben, und einen Plan, der sich danach richtet, wie sich jeder Morgen anfühlt.`,
    more: [
      `Du wählst ${DAYS} Tage pro Woche und Einheiten von ${MINUTES}\u00A0Minuten. Alle ${PROGRAM.testEveryDays}\u00A0Tage (alle ${PROGRAM.testEveryDaysAfterGoal}, sobald dein erstes Ziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, ob die Arbeit am Unterschenkel etwas bringt.`,
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn dein Schienbeinschmerz punktgenau ist, schlimmer wird oder in Ruhe auftritt, geh zu einer medizinischen Fachperson, bevor du ihn weiter belastest.',
    ],
    cta: `Fang mit ${PROGRAM.sessionMinutes[0]}\u00A0Minuten am Tag an.`,
  },
  crumb: 'Übungen beim Schienbeinkantensyndrom',
  campaign: 'guide-shin-splints-de',
};
