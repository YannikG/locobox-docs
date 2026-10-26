---
sidebar_position: 1
id: zuege-komposition
title: Zug zusammenstellen
description: Komposition, Zugangaben und Bezeichnung pflegen sowie Zuglänge über Puffer berechnen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Zug zusammenstellen

In den Masken **Neuer Zug** und **… bearbeiten** werden Komposition, Zugangaben und Beschreibung festgelegt. In der Oberfläche heisst der Fahrzeugbereich **Komposition**.

<LimitsPlanNote />

## Navigation

- Neuer Zug: In der Zugübersicht **Neu** (Premium erforderlich).
- Bestehender Zug: Karte öffnen (Detail) oder **Bearbeiten**.

Reihenfolge im Formular: Überschrift → **Komposition** → **Zugangaben** (inkl. Bezeichnung) → **Beschreibung** → Speichern.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-formular.webp : Zugformular mit Komposition, Zugangaben und Bezeichnungssperre */}

## Zugangaben und Bezeichnung

Unter **Zugangaben** stehen u. a.:

| Feld | Bedeutung |
| --- | --- |
| **Zuggattung** | z. B. bekannte Gattungen aus der Vorschlagsliste oder freier Text |
| **Zugnummer**, **Liniennummer**, **Marketingname** | optionale Identifikation |
| **Startbahnhof**, **Zielbahnhof** | optional |
| **Betreiber**, **Epoche**, **Betriebsjahr**, **Länder** | optional |

### Bezeichnung sperren oder freigeben

Neue Züge starten mit **gesperrter** Bezeichnung. Der Titel wird dann **automatisch aus den Zugangaben** gebildet (Hinweis: «Automatisch aus den Zugangaben.»).

- **Frei benennen:** Bezeichnung freigeben und selbst eintragen.
- **Zugangaben verwenden:** wieder sperren; die freie Bezeichnung wird geleert und der Titel folgt erneut den Zugangaben.

Bekannte Zuggattungen können als Badge mit Symbol erscheinen. Unbekannte Freitext-Gattungen erscheinen als einfache Markierung ohne Symbol.

### Vorbefüllung beim Erstellen

Nur beim **Anlegen**: Leere Felder **Betreiber**, **Epoche** und **Länder** können sich aus den hinzugefügten Wagen füllen (erster Artikel für Betreiber/Epoche, Vereinigung der Länder). Beim Bearbeiten gibt es diese Vorbefüllung nicht.

## Zuglänge über Puffer

Oberhalb der Komposition summiert das System die **Zuglänge über Puffer** in **mm**, sofern bei den Modellen Längen hinterlegt sind. Fehlen Angaben, erscheint: **Die Länge über Puffer ist nicht genau, weil nicht alle Artikel eine Länge über Puffer hinterlegt haben.**

## Artikel hinzufügen

1. **Hinzufügen** öffnet **Artikel hinzufügen**.
2. Filter wie in der Artikelübersicht.
3. Modelle markieren; der Tabellenkopf wählt alle zur Filterung passenden Zeilen.
4. **Auswahl hinzufügen** hängt die Modelle ans Zugende an. Bereits enthaltene Artikel werden nicht doppelt eingefügt.

## Reihenfolge und Wagendarstellung

Eingefügte Modelle erscheinen als horizontale Kette mit Bezeichnung und Bild.

- **Reihenfolge:** über **Neu anordnen** per Drag-and-drop.
- **Weitere Aktionen** bzw. Rechtsklick am Bild:
  - **Hauptbild verwenden** / **Gespiegeltes Bild verwenden**
  - **Einen nach vorne** / **Einen nach hinten**, **An den Anfang**, **Ans Ende**
  - **Löschen** entfernt das Modell nach Sicherheitsabfrage aus der Reihung

Verkaufte Artikel sind mit **Verkauft** markiert.

In eingebetteten Artikeltabellen (Komposition, Detail) können zugeordnete [Kategorien](../kategorien/kategorien.md) als Namen mitlaufen.

## Detailansicht

Nach dem Speichern eines neuen Zuges öffnet sich die Detailansicht. Aufbau typischerweise:

1. Vorschau mit Kompositionsstreifen, Artikelanzahl und LüP
2. Zugangaben in Paaren
3. Beschreibung
4. Artikeltabelle der Komposition

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-detailansicht.webp : Zug-Detailansicht mit Streifen, Zugangaben, Beschreibung und Artikeltabelle */}

## Speichern und Verlassen

Voraussetzungen: eine gültige **Bezeichnung** (frei oder aus Zugangaben) sowie mindestens ein Modell.

- Fehlende Bezeichnung: **Name ist erforderlich.**
- Leere Komposition: **Ein Zug benötigt mindestens einen Artikel.**

Ungespeicherte Änderungen lösen beim Verlassen die Abfrage «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?» aus.

## Verknüpfung aus der Artikelperspektive

In der Artikel-Detailansicht listet **Verknüpfte Züge** die Zugehörigkeiten. Über **Ansehen** öffnet sich der Zug.

## Weiterführend

Löschen und Wiederherstellen: [Züge](zuege.md) und [Papierkorb](../papierkorb/papierkorb.md).
