---
id: decoder
title: Decoder
description: Decoder ansehen und bearbeiten, mit Artikeln verknüpfen, Funktionsmatrix und CV-Konfiguration pflegen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Decoder

Im Bereich **Decoder** lassen sich alle aktiven Decoder verwalten.
Direkt sichtbar ist, ob ein Decoder bereits mit einem [Artikel](../artikel/artikel.md) verbunden ist.

Es gibt zwei klar getrennte Modi: eine **Detailansicht** zum Prüfen der Daten und eine **Bearbeitungsansicht**, in der alle Änderungen vorgenommen werden.
Änderungen werden erst wirksam, wenn in der Bearbeitungsansicht **Speichern** gewählt wird.

<LimitsPlanNote />


## Detailansicht

In der Detailansicht werden Hersteller, Modell, Protokoll, Adresse, Beschreibung, verknüpfte Artikel, die **Funktionsmatrix** und die **Konfiguration** übersichtlich dargestellt.
Hier lassen sich Einträge lesen, zur Liste zurückkehren, die Bearbeitung öffnen oder der Decoder löschen, sofern die Produktregeln das zulassen.
Ohne Wechsel in die Bearbeitung oder in den Löschablauf werden auf dieser Ansicht keine Daten geändert.

## Bearbeitungsansicht

Die Bearbeitungsansicht ist der Arbeitsplatz für Änderungen.
Oben stehen **Zurück**, **Abbrechen** und **Speichern** zur Verfügung.

- **Abbrechen** führt zurück zur Decoder-Ansicht, ohne die Änderungen dieses Bearbeitungsdurchgangs zu speichern.
- **Speichern** übernimmt die Änderungen am Decoder, also die Felder auf dem Tab **Übersicht**, die **Funktionsmatrix** und die **Konfiguration**, soweit sie in dieser Sitzung angepasst wurden.

### Tabs in der Bearbeitung

- **Übersicht**: Kernfelder des Decoders, zum Beispiel Hersteller, Modell, Protokoll, Adresse und das Kennzeichen „nur Funktion“, falls es in der App vorkommt, sowie die Beschreibung.
  Hinweise zu doppelten Adressen erscheinen im Zusammenhang mit dem Formular, analog zur Übersicht [Gleiche Adresse](#gleiche-adresse).
- **Funktionsmatrix**: Zuordnung der Funktionstasten (F0, F1, …) zu Verhaltenstypen und optionalen Bezeichnungen.
  Ausführlich unter [Funktionsmatrix](./decoder-funktionsmatrix.md).
- **Konfiguration**: CV-artige Konfigurationseinträge mit Schlüssel und Wert, getrennt von der Funktionsmatrix.
  Ausführlich unter [Konfiguration](./decoder-konfiguration.md).

## Funktionen

- Neue Decoder erfassen.
- Decoder in der Detailansicht prüfen und in der Bearbeitungsansicht anpassen.
- Einen Decoder mit genau einem Artikel verbinden.
- Eine Verbindung zu einem Artikel wieder entfernen.

## Gleiche Adresse

Dieselbe Adresse kann mehrfach verwendet werden.
Ist eine Adresse schon vergeben, erscheint ein klarer Hinweis, in der Detailansicht und bei der Bearbeitung auf dem Tab **Übersicht**.
Damit bleibt sofort sichtbar, dass die Adresse bereits vorhanden ist.

## Löschen

Ein gelöschter Decoder verschwindet zuerst aus der aktiven Liste und landet im [Papierkorb](../papierkorb/papierkorb.md), wo er innerhalb der Aufbewahrungsfrist **wiederhergestellt** werden kann.
Solange ein Decoder nicht wieder aktiv ist, ist keine neue Verknüpfung mit einem Artikel und keine Bearbeitung möglich.
