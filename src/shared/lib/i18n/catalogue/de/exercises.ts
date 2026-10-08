/**
 * The exercise catalogue, in German.
 *
 * Anatomy is the standard term a German physiotherapist uses: Plantarfaszie,
 * Wade, Soleus, Schienbein, Fußgewölbe, Ferse, Knöchel, Achillessehne. "Ball
 * of the foot" is «Fußballen», toes are «Zehen», the big toe «großer Zeh».
 *
 * `du` throughout. Cues lead with the physical instruction, imperative first:
 * they are followed by somebody standing on a painful foot, so the verb comes
 * early and the qualifier after it. Titles stay short, because German
 * compounds run long and a title must survive one line at 24pt.
 */
export const EXERCISES_DE = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Plantar-Dehnung',
  'exercises.fasciaStretch.rationale': 'Mach die erste Runde, bevor dein Fuß den Boden berührt.',
  'exercises.fasciaStretch.cue': 'Zieh die Zehen zu dir, bis du das Gewölbe spürst, nicht die Wade.',

  'exercises.calfStretchStraight.title': 'Wadendehnung',
  'exercises.calfStretchStraight.rationale': 'Eine lockerere Wade nimmt der Ferse etwas Zug ab.',
  'exercises.calfStretchStraight.cue': 'Hinteres Bein gestreckt, Ferse am Boden, Hüfte nach vorn.',

  'exercises.calfStretchBent.title': 'Soleus-Dehnung',
  'exercises.calfStretchBent.rationale': 'Der tiefere Wadenmuskel lässt nur mit gebeugtem Knie los.',
  'exercises.calfStretchBent.cue': 'Beug beide Knie leicht. Die hintere Ferse bleibt flach am Boden.',

  'exercises.ankleRocks.title': 'Knöchel-Wippen',
  'exercises.ankleRocks.rationale': 'Ein beweglicher Knöchel lässt die Ferse unten bleiben.',
  'exercises.ankleRocks.cue': 'Das Knie wandert über die Zehen, die Ferse bleibt am Boden.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Fersenheben',
  'exercises.heelRaiseTowel.rationale': 'In einer Studie linderte langsames, schweres Fersenheben den Schmerz früher als Dehnen allein.',
  'exercises.heelRaiseTowel.cue': 'Handtuch unter die Zehen. Ohne trainierst du nur die Waden.',

  'exercises.heelRaisePlain.title': 'Einbeiniges Fersenheben',
  'exercises.heelRaisePlain.rationale': 'Die einfache Version, die die aufgebaute Kraft hält.',
  'exercises.heelRaisePlain.cue': 'Drei Sekunden hoch, drei runter. Tempo macht es nutzlos.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Kurzer Fuß',
  'exercises.shortFootSeated.rationale': 'Der Muskel, der dein Gewölbe hält, sitzt im Fuß selbst.',
  'exercises.shortFootSeated.cue': 'Krall die Zehen nicht ein. Zieh den Fußballen Richtung Ferse.',

  'exercises.shortFootDouble.title': 'Kurzer Fuß im Stehen',
  'exercises.shortFootDouble.rationale': 'Derselbe Muskel, jetzt unter deinem Gewicht.',
  'exercises.shortFootDouble.cue': 'Die Zehen bleiben flach und lang. Nur das Gewölbe hebt sich.',

  'exercises.shortFootSingle.title': 'Kurzer Fuß, einbeinig',
  'exercises.shortFootSingle.rationale': 'Mit einem Fuß allein zeigt sich die schwächere Seite.',
  'exercises.shortFootSingle.cue': 'Lass den großen Zeh unten. Hebt er sich, mogelt das Gewölbe.',

  'exercises.toeSpread.title': 'Zehen spreizen',
  'exercises.toeSpread.rationale': 'Zehen, die sich spreizen können, teilen die Last mit dem Gewölbe.',
  'exercises.toeSpread.cue': 'Spreiz die Zehen über den Boden auseinander, dann drück großen und kleinen Zeh nach unten.',

  'exercises.bandInversion.title': 'Band nach innen',
  'exercises.bandInversion.rationale':
    'Den Fuß nach innen drehen trainiert den Muskel, der unter dem Gewölbe verläuft.',
  'exercises.bandInversion.cue': 'Beweg den Fuß, nicht das Bein. Das Knie bleibt ruhig.',

  'exercises.hipAbduction.title': 'Seitliches Beinheben',
  'exercises.hipAbduction.rationale': 'Eine Hüfte, die nachgibt, lädt die Last auf das Gewölbe ab.',
  'exercises.hipAbduction.cue': 'Leg dich auf die Seite. Heb das obere Bein hoch und leicht nach hinten, Zehen zeigen nach vorn.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Einbeinstand',
  'exercises.singleLegHold.rationale': 'Auf einem Bein stehen ist der Test, bei dem dein Fuß zuerst nachgibt.',
  'exercises.singleLegHold.cue': 'Schau auf einen Punkt. Lass den Fuß wackeln - das soll er.',

  'exercises.eyesClosedStand.title': 'Stehen mit geschlossenen Augen',
  'exercises.eyesClosedStand.rationale': 'Mit geschlossenen Augen muss der Fuß das Gleichgewicht halten.',
  'exercises.eyesClosedStand.cue': 'Stell dich an eine Wand. Danach greifen ist in Ordnung.',

  'exercises.heelToeWalk.title': 'Fersen-Zehen-Gang',
  'exercises.heelToeWalk.rationale':
    'Beim Gehen von der Ferse zu den Zehen wird das Gewölbe der Reihe nach be- und entlastet.',
  'exercises.heelToeWalk.cue': 'Erst landet die Ferse, dann abrollen. So langsam, dass du mitten im Schritt anhalten kannst.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Fuß rollen',
  'exercises.footRoll.rationale': 'Rollen beruhigt das Gewebe, nachdem es gearbeitet hat.',
  'exercises.footRoll.cue': 'Langsam und fest. Wenn du das Gesicht verziehst, nimm Druck raus.',

  'exercises.barefootHome.title': 'Barfuß zu Hause',
  'exercises.barefootHome.rationale': 'Jede Stunde barfuß ist eine Stunde, in der der Fuß arbeitet.',
  'exercises.barefootHome.cue': 'Nur drinnen, auf ebenem Boden, und langsam steigern.',

  'exercises.breathingReset.title': 'Ruhig atmen',
  'exercises.breathingReset.rationale': 'Eine Minute langsames Atmen schließt die Einheit richtig ab.',
  'exercises.breathingReset.cue': 'Länger aus als ein. Das ist alles.',

  // ── The weekly plan's additions ──────────────────────────────────────────
  'exercises.heelRaiseDouble.title': 'Beidbeiniges Fersenheben',
  'exercises.heelRaiseDouble.rationale': 'Beide Füße teilen sich die Last, während die Wade wach wird.',
  'exercises.heelRaiseDouble.cue': 'Geh gerade über die großen Zehen hoch, dann langsam ablassen.',

  'exercises.heelRaiseSeated.title': 'Fersenheben im Sitzen',
  'exercises.heelRaiseSeated.rationale': 'Wadenarbeit fast ohne Last auf der Ferse.',
  'exercises.heelRaiseSeated.cue': 'Drück dich über die Fußballen hoch. Hände auf den Knien geben Widerstand.',

  'exercises.heelRaiseHold.title': 'Fersenheben halten',
  'exercises.heelRaiseHold.rationale': 'Oben halten belastet die Sehne ohne Federn.',
  'exercises.heelRaiseHold.cue': 'Hoch, dann oben still bleiben - nicht wieder absinken.',

  'exercises.bigToeLift.title': 'Großen Zeh heben',
  'exercises.bigToeLift.rationale': 'Bringt dem großen Zeh bei, sich allein zu bewegen.',
  'exercises.bigToeLift.cue': 'Heb nur den großen Zeh. Die anderen vier bleiben flach am Boden.',

  'exercises.towelScrunch.title': 'Handtuch greifen',
  'exercises.towelScrunch.rationale': 'Weckt die kleinen Muskeln unter dem Gewölbe.',
  'exercises.towelScrunch.cue': 'Zieh das Handtuch mit den Zehen zu dir. Die Ferse bleibt unten.',

  'exercises.kneeToWall.title': 'Knie zur Wand',
  'exercises.kneeToWall.rationale': 'Macht den Knöchel frei, damit die Ferse nicht den Zug abbekommt.',
  'exercises.kneeToWall.cue': 'Die Ferse bleibt flach. Schieb das Knie über den zweiten Zeh nach vorn.',

  'exercises.balancePillow.title': 'Balance auf dem Kissen',
  'exercises.balancePillow.rationale': 'Ein weicher Untergrund lässt den Knöchel bei jedem Wackeln arbeiten.',
  'exercises.balancePillow.cue': 'Stell dich neben eine Wand. Knie locker, Blick geradeaus.',

  'exercises.heelDropStraight.title': 'Fersen absenken',
  'exercises.heelDropStraight.rationale': 'Langsames Absenken baut Wade und Achillessehne wieder auf.',
  'exercises.heelDropStraight.cue': 'Mit beiden Füßen hoch, mit einem langsam runter. Lass die Ferse unter die Stufe sinken.',

  'exercises.tibialisRaise.title': 'Zehen heben',
  'exercises.tibialisRaise.rationale': 'Kräftigt den Schienbeinmuskel, der jeden Schritt stabilisiert.',
  'exercises.tibialisRaise.cue': 'Rücken an die Wand. Heb die Zehen, die Fersen bleiben unten.',

  'exercises.stepDown.title': 'Stufe runter',
  'exercises.stepDown.rationale': 'Kontrolliert das Knie, damit der Fuß nicht allein landet.',
  'exercises.stepDown.cue': 'Das Knie bleibt über den Zehen. Tipp die Ferse ab - nicht fallen lassen.',

  'exercises.soleMassage.title': 'Fußsohlen-Massage',
  'exercises.soleMassage.rationale': 'Lockert das Gewebe nach einem langen Tag.',
  'exercises.soleMassage.cue': 'Feste Daumenstriche von der Ferse zu den Zehen. Bei Stechendem nachlassen.',

  'exercises.pogoHops.title': 'Pogo-Sprünge',
  'exercises.pogoHops.rationale': 'Bringt dem Fuß das Federn wieder bei - erst wenn der Schmerz weg ist.',
  'exercises.pogoHops.cue': 'Kleine, schnelle Sprünge mit festen Knöcheln. Hör auf, wenn die Ferse wehtut.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Bevor du aufstehst: Zieh die Zehen zu dir, 10 Sekunden, 10-mal.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack': 'Nimm einen Rucksack dazu. So schwer, dass die letzte Wiederholung wirklich die letzte ist.',
  'exercises.loadNote.heavier': 'Nimm mehr Gewicht. Acht Wiederholungen sollten alles sein, was du schaffst.',
  'exercises.loadNote.towelOff': 'Handtuch weg. Nur Körpergewicht. Das ist die Version, die du beibehältst.',

  // ── Categories ───────────────────────────────────────────────────────────
  'exercises.category.fitness': 'Training',
  'exercises.category.mobility': 'Beweglichkeit',
  'exercises.category.recovery': 'Erholung',
  'exercises.category.habit': 'Gewohnheit',

  // ── Dose ─────────────────────────────────────────────────────────────────
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} s',
  'exercises.dose.hold': '{seconds} s',
  'exercises.dose.holdMinutes': '{minutes} Min.',
  'exercises.dose.sets': { one: '{count} Satz', other: '{count} Sätze' },
  'exercises.dose.bothFeet': '{dose} · beide Füße',
};
