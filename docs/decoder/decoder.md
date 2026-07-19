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
Änderungen werden erst wirksam, wenn in der Bearbeitungsansicht **Speichern** gewählt wird.

<LimitsPlanNote />


## Detailansicht

In der Detailansicht stehen dieselben Register wie in der Bearbeitung zur Verfügung: **Übersicht**, **Funktionsmatrix** und **Konfiguration**.

Auf **Übersicht** sehen Sie Hersteller, Modell, Protokoll, Adresse, **Nur Funktion**, Beschreibung sowie **Verknüpfte Artikel**.
Die Register **Funktionsmatrix** und **Konfiguration** zeigen die gespeicherten Zuordnungen und Einträge zum Lesen.

Oben stehen **Zurück**, **Bearbeiten** und **Löschen** zur Verfügung.
Ohne Wechsel in die Bearbeitung oder in den Löschablauf werden auf dieser Ansicht keine Daten geändert.

## Bearbeitungsansicht

Die Bearbeitungsansicht ist der Arbeitsplatz für Änderungen.
Oben stehen **Zurück**, **Abbrechen** und **Speichern** zur Verfügung.

- **Abbrechen** führt zurück zur Decoder-Ansicht, ohne die Änderungen dieses Bearbeitungsdurchgangs zu speichern.
- **Speichern** übernimmt die Änderungen am Decoder, also die Felder auf dem Register **Übersicht**, die **Funktionsmatrix** und die **Konfiguration**, soweit sie in dieser Sitzung angepasst wurden.
- Verlassen Sie die Seite mit ungespeicherten Änderungen, fragt die App nach, ob Sie wirklich weitergehen möchten.

### Tabs in der Bearbeitung

- **Übersicht**: Kernfelder des Decoders, zum Beispiel Hersteller, Modell, Protokoll, Adresse, **Nur Funktion** und Beschreibung, sowie die Artikelverknüpfung.
  Hinweise zu doppelten Adressen erscheinen am Adressfeld, analog zur Übersicht [Gleiche Adresse](#gleiche-adresse).
- **Funktionsmatrix**: Zuordnung der Funktionstasten (F0, F1, …) zu Funktionsarten und optionalen Beschriftungen.
  Ausführlich unter [Funktionsmatrix](./decoder-funktionsmatrix.md).
- **Konfiguration**: CV-Einträge mit Schlüssel und Wert, getrennt von der Funktionsmatrix.
  Ausführlich unter [Konfiguration](./decoder-konfiguration.md).

Pflichtangaben werden auf dem Register **Übersicht** geprüft. Ist dort etwas ungültig, markiert die App das Register mit einem Fehlersymbol. Wählen Sie **Speichern**, während Fehler bestehen, wechselt die Ansicht automatisch zum Register mit Fehlern, sodass Sie die betroffenen Felder direkt sehen.

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

## Gleiche Adresse

Dieselbe Adresse darf mehrfach vorkommen. Locobox warnt trotzdem, wenn eine Adresse schon vergeben ist. Speichern bleibt möglich. Ausführlich: [Decoder-Adressen](./decoder-adressen.md).

## Löschen

Ein gelöschter Decoder verschwindet zuerst aus der aktiven Liste und landet im [Papierkorb](../papierkorb/papierkorb.md), wo er innerhalb der Aufbewahrungsfrist wiederhergestellt werden kann.
Solange ein Decoder nicht wieder aktiv ist, ist keine neue Verknüpfung mit einem Artikel und keine Bearbeitung möglich.
