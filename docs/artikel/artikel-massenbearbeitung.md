---
id: artikel-massenbearbeitung
title: Artikel Massenbearbeitung
description: Mehrere Artikel in einem geführten Ablauf auswählen, Felder und Werte setzen oder löschen, Vorschau prüfen und Änderungen anwenden.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel Massenbearbeitung

Unter **Artikel Massenbearbeitung** lassen sich dieselben Feldänderungen auf **viele Artikel auf einmal** anwenden, statt jeden Eintrag einzeln zu öffnen.
Der Bereich ist im Hauptmenü unter **Artikel** erreichbar.

Voraussetzung ist, dass mindestens ein Artikel ausgewählt und mindestens ein bearbeitbares Feld gewählt wird.
Die Oberfläche führt in **vier Schritten** durch den Vorgang; die Schrittbezeichnungen entsprechen der Anwendung.

<LimitsPlanNote />


## Schritt 1: Artikel auswählen

Hier erscheint eine filterbare Artikeltabelle wie in der [Artikelliste](artikel-liste.md) bei der Auswahl von Artikeln.

- Einzelne Zeilen lassen sich für die Massenbearbeitung markieren.
- Die **Checkbox in der Tabellenüberschrift** wählt **alle zur aktuellen Filterung passenden** Artikel aus, nicht nur die sichtbare Seite.
- Oben wird zusammengefasst, wie viele passende Artikel es gibt und wie viele davon ausgewählt sind.

Es geht erst weiter, wenn **mindestens ein Artikel** ausgewählt ist.

**Hinweis:** Wenn sich die Filter ändern, wird die bisherige Auswahl zurückgesetzt.

## Schritt 2: Felder auswählen

Hier legen Sie fest, **welche Felder** bei allen ausgewählten Artikeln geändert werden sollen.

- Über die Auswahlliste **Felder auswählen** wählen Sie eines oder mehrere Felder aus.
- **Nicht jedes Feld aus der Artikelliste** ist verfügbar: Mehrfachauswahlen, bestimmte Anzeigefelder und technische Spalten fehlen bewusst.
- Für einige Felder kann die Auswahl eingeschränkt sein; die Oberfläche zeigt beim Versuch den jeweiligen Hinweis.

Es geht erst weiter, wenn **mindestens ein Feld** ausgewählt ist.

## Schritt 3: Werte setzen

Für jedes gewählte Feld legen Sie fest, was passieren soll:

| Modus (in der App) | Bedeutung |
|--------------------|-----------|
| **Wert setzen** | Der eingegebene Wert wird bei allen ausgewählten Artikeln gespeichert. |
| **Wert löschen** | Der aktuelle Wert wird bei allen ausgewählten Artikeln entfernt (leer gesetzt). |

Beim Modus **Wert löschen** gilt der Hinweistext aus der App: der aktuelle Wert wird bei allen ausgewählten Artikeln gelöscht.

**Einschränkung:** Für **Hersteller** und **Artikelnummer** ist **Wert löschen** nicht verfügbar (nur **Wert setzen**).

Je nach Feldtyp sind Zahlen, Datum, Ja/Nein, Auswahllisten oder Freitext nötig, bis der Schritt **Weiter** möglich ist.
Bei einigen Textfeldern unterstützt die Eingabe **Vorschläge** aus den bestehenden Artikeldaten.

## Schritt 4: Vorschau

Hier sehen Sie exemplarisch die geplanten Änderungen.

- In der Vorschau erscheinen die **ersten zehn** der ausgewählten Artikel, die Gesamtanzahl der Auswahl wird weiterhin angezeigt.
- Pro Artikel werden die geplanten Feldänderungen aufgelistet.

Wenn alle Angaben konsistent sind, können Sie die Massenbearbeitung anwenden.

## Anwenden und Ergebnis

Mit **Massenbearbeitung anwenden** starten Sie die Übernahme. Es erscheint eine **Sicherheitsabfrage**, ob die Massenbearbeitung wirklich angewendet werden soll.

Während der Verarbeitung zeigt die Anzeige den Fortschritt in der Form „X von Y Artikeln verarbeitet“.

Nach Abschluss erscheint eine Meldung mit einer **kurzen Statistik**: wie viele Artikel aktualisiert wurden, wie viele versucht wurden und wie viele **fehlgeschlagen** sind.

- Wenn alle betroffenen Artikel erfolgreich waren, entspricht die Zahl der Aktualisierungen der Anzahl der ausgewählten Artikel.
- **Fehlschläge** bleiben einzeln sichtbar, in der Meldung als Anzahl enthalten; die erfolgreichen Artikel sind trotzdem geändert worden.

Schlägt die Aktion insgesamt fehl oder die Liste lässt sich nicht laden, erscheint eine Meldung mit der Überschrift **Fehler** und dem Hinweis, dass ein unerwarteter Fehler aufgetreten ist und ein späterer erneuter Versuch sinnvoll sein kann (wie auch bei anderen Ladevorgängen in der App).

Nach einer **erfolgreichen** Anwendung springt der Ablauf zurück zum **ersten Schritt**; Artikelauswahl und Feldauswahl werden zurückgesetzt, Filter können bestehen bleiben.

## Zusammen mit anderen Bereichen

Massenbearbeitung betrifft nur **Artikeldaten**. Sie ersetzt nicht die Bearbeitung einzelner Artikel in der Liste, wenn Sie Bilder, [Decoder](../decoder/decoder.md)-Verknüpfungen oder [Züge](../zuege/zuege.md) im Detail pflegen möchten.

Weitere Übersicht zum Artikelbereich: [Artikel](artikel.md).
