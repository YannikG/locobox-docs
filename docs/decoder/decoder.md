---
id: decoder
title: Decoder
description: Decoder ansehen und bearbeiten, mit Artikeln verknüpfen, Funktionsmatrix und CV-Konfiguration pflegen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Decoder

Im Bereich **Decoder** lassen sich alle aktiven Decoder verwalten.
Die [Decoder finden und filtern](./decoder-liste.md) ist der Einstieg; ein Klick öffnet die Detail- oder Bearbeitungsansicht.
Direkt sichtbar ist, ob ein Decoder bereits mit einem [Artikel](../artikel/artikel.md) verbunden ist.

Es gibt zwei klar getrennte Modi: eine **Detailansicht** zum Prüfen der Daten und eine **Bearbeitungsansicht**, in der alle Änderungen vorgenommen werden.
Beide nutzen dieselben Register: **Übersicht**, **Funktionsmatrix** und **Konfiguration**.

<LimitsPlanNote />


## Detailansicht

Die Detailansicht zeigt die gespeicherten Daten nur zum Lesen. Auf **Übersicht** sehen Sie Hersteller, Modell, Protokoll, Adresse, **Nur Funktion**, Beschreibung sowie **Verknüpfte Artikel**. Die Register **Funktionsmatrix** und **Konfiguration** zeigen die gespeicherten Zuordnungen und Einträge.

Oben stehen **Zurück**, **Bearbeiten** und **Löschen**. Ohne Wechsel in die Bearbeitung oder in den Löschablauf werden hier keine Daten geändert.

## Bearbeitungsansicht

{/* SCREENSHOT_TODO /img/handbuch/decoder/decoder-bearbeitung.png : Bearbeitungsansicht mit den Registern «Übersicht», «Funktionsmatrix» und «Konfiguration», Fehlersymbol am Register hervorheben */}

Die Bearbeitungsansicht ist der Arbeitsplatz für Änderungen. Oben stehen **Zurück**, **Abbrechen** und **Speichern**.

- **Abbrechen** führt zurück zur Decoder-Ansicht, ohne die Änderungen dieses Durchgangs zu speichern.
- **Speichern** übernimmt alle in dieser Sitzung angepassten Daten der drei Register.
- Verlassen Sie die Seite mit ungespeicherten Änderungen, fragt die App nach, ob Sie wirklich weitergehen möchten.

Die drei Register:

- **Übersicht**: Kernfelder wie Hersteller, Modell, Protokoll, Adresse, **Nur Funktion** und Beschreibung sowie die Artikelverknüpfung. Hinweise zu doppelten Adressen erscheinen am Adressfeld, siehe [Decoder-Adressen verwalten](./decoder-adressen.md).
- **Funktionsmatrix**: Zuordnung der Funktionstasten (F0, F1, …) zu Funktionsarten und optionalen Beschriftungen, ausführlich unter [Funktionsmatrix bearbeiten](./decoder-funktionsmatrix.md).
- **Konfiguration**: CV-Einträge mit Schlüssel und Wert, getrennt von der Funktionsmatrix, ausführlich unter [Konfiguration](./decoder-konfiguration.md).

Pflichtangaben werden auf dem Register **Übersicht** geprüft. Ist dort etwas ungültig, markiert die App das Register mit einem Fehlersymbol. Wählen Sie **Speichern**, während Fehler bestehen, wechselt die Ansicht automatisch zum Register mit Fehlern.

## Neuen Decoder anlegen

In der [Decoder finden und filtern](./decoder-liste.md):

- Die Schaltfläche **Neu** öffnet den Dialog **Neuer Decoder** (Standard-Decoder).
- Über das Menü daneben: **Neuer Funktions-Decoder**, siehe [Nur Funktion](#nur-funktion).

## Nur Funktion {#nur-funktion}

Ein Decoder mit dem Kennzeichen **Nur Funktion** steht für reine Zusatzfunktionen, zum Beispiel Beleuchtung oder Sound, ohne eigenes angetriebenes Fahrzeug. Das Kennzeichen sehen Sie in Liste und Detailansicht. Beim Anlegen über **Neuer Funktions-Decoder** ist es vorausgewählt.

## Mit Artikel verknüpfen

Ein Decoder lässt sich mit [Artikeln](../artikel/artikel.md) verbinden (Lok oder Wagen, in dem er eingebaut ist).

- Beim Anlegen oder beim **Bearbeiten** wählen Sie unter **Artikel verknüpfen** einen Artikel. Ist bereits eine Verknüpfung vorhanden, müssen Sie diese zuerst aufheben, bevor Sie einen anderen Artikel verknüpfen.
- In der Detailansicht sehen Sie unter **Verknüpfte Artikel** die Verbindungen; von dort öffnen oder entfernen Sie die Verknüpfung, wo die App es erlaubt.
- Umgekehrt zeigt der Artikel den zugehörigen Decoder.

## Adressen

Dieselbe Adresse darf mehrfach vorkommen; Locobox warnt trotzdem, ohne das Speichern zu blockieren. Wie Sie eine Adresse wählen, Vorschläge nutzen und die Hinweise verstehen, steht unter [Decoder-Adressen verwalten](./decoder-adressen.md).

## Löschen

Ein gelöschter Decoder verschwindet zuerst aus der aktiven Liste und landet im [Papierkorb](../papierkorb/papierkorb.md), wo er innerhalb der Aufbewahrungsfrist wiederhergestellt werden kann.
Solange ein Decoder nicht wieder aktiv ist, ist keine neue Verknüpfung mit einem Artikel und keine Bearbeitung möglich.
