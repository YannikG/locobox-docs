---
sidebar_position: 1
id: artikel-liste
title: Artikel finden und filtern
description: Artikelliste auf Desktop und Mobilgeräten, Filter, Sortierung, Paginierung, Zeilenaktionen und Ansichtseinstellungen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel finden und filtern

Unter **Sammlung** → **Artikelliste** befindet sich die Übersicht aller erfassten Sammlungsbestände. Die Seitenüberschrift lautet **Artikel**.

Kurzüberblick zum Bereich: [Artikel](artikel.md). Zum Erfassen oder Ändern einzelner Datensätze: [Artikel bearbeiten](artikel-bearbeiten.md) und [Artikeldetails ansehen](artikel-detailansicht.md).

<LimitsPlanNote />

## Symbolleiste

![Artikelliste mit Toolbar und aufgeklapptem Filterbereich](/img/handbuch/artikel/artikelliste.webp)

- **Zurück** führt zur vorherigen Stelle im Browserverlauf zurück.
- **Ansichtseinstellungen** öffnet einen Dialog mit den Bereichen **Verfügbar** und **Ausgewählt** zur Auswahl, Suche und Reihenfolgenanpassung von Spalten. Die Speicherung erfolgt über **Speichern**, das Zurücksetzen über **Auf Standard zurücksetzen**, der Abbruch über **Abbrechen**. Der Dialoghinweis lautet wörtlich: «Wählen Sie die sichtbaren Spalten und legen Sie deren Reihenfolge fest.»
- **Neu** öffnet das Formular zur Erfassung eines neuen Artikels (siehe [Artikel bearbeiten](artikel-bearbeiten.md)).

CSV-Import und Massenbearbeitung liegen nicht in dieser Symbolleiste, sondern im Hauptmenü **Sammlung** (siehe [Artikel per CSV importieren](artikel-csv-import.md) und [Artikel in Masse bearbeiten](artikel-massenbearbeitung.md)).

## Darstellung: Desktop und Mobilgeräte

- **Desktop:** Die Anzeige erfolgt als **Tabelle**. Bei vielen Spalten lässt sich die Tabelle horizontal scrollen.
- **Mobilgeräte:** Die Artikel erscheinen als Kartenansicht. Ein Antippen einer Karte öffnet die Detailansicht des Artikels.
- Ergibt eine Filterkombination keine Treffer, blendet die Oberfläche den Text **Keine Artikel entsprechen den aktuellen Filtern.** ein.

## Filter

Über den aufklappbaren Bereich **Filter** lassen sich Kriterien definieren, die den sichtbaren und filterbaren Spalten entsprechen (Textsuche, Auswahllisten, Ja/Nein-Werte, Kategorien):

- **Kategorien auswählen** inklusive der Option **Ohne Kategorie** für Artikel ohne Kategoriezuordnung.
- **Adresse** (**Mit Adresse** / **Ohne Adresse**), sofern die Spalte **Adressen** eingeblendet ist.
- **Zug-Zuordnung** (**Alle** / **Nur ohne Zug-Zuordnung** / **Nur mit Zug-Zuordnung**).
- Preisfilter (**Kaufpreis vorhanden**), sofern die Preisspalte filterbar ist.
- **Nach Labels filtern** (Premium): Bei mehreren gewählten [Labels](artikel-labels.md) listet das System ausschliesslich Artikel auf, die alle gewählten Labels aufweisen (UND-Verknüpfung). Ohne Premium lautet die Rückmeldung «Labelfilter sind ein Premium-Feature.»

**Zurücksetzen** leert die Filtermaske, **Anwenden** lädt die Trefferliste neu.

## Sortierung

- In der Tabelle genügt ein Klick auf die Spaltenüberschrift; ein Richtungssymbol zeigt die Sortierung an.
- In der Kartenansicht stehen unter **Sortierung** das Auswahlfeld **Sortieren nach** sowie **Aufsteigend** und **Absteigend** bereit.

## Tabellenspalten und Zeilenaktionen

Die sichtbaren Spalten richten sich nach den gewählten **Ansichtseinstellungen**. Typische Spalten sind **Hersteller**, **Artikelnummer**, **Bild**, **Kategorien**, **Labels**, **Adressen**, Finanz- und Lagerdaten sowie **Erstellt am** am Zeilenende.

In der letzten Spalte **Aktionen** stehen pro Zeile bereit:

- **Ansehen** zur [Detailansicht](artikel-detailansicht.md).
- **Bearbeiten** zum [Erfassungsformular](artikel-bearbeiten.md).

Bei leerer Datenbasis erscheint die Meldung **Keine Einträge gefunden**.

## Rückkehr aus der Detailansicht

Beim Verlassen der Detailansicht und der Rückkehr zur Artikelliste bleiben Filtereinstellungen, Sortierung sowie die vorherige Scrollposition erhalten. Dies ermöglicht die fortlaufende Prüfung mehrerer Datensätze ohne erneute Filtereingabe.

## Paginierung

Am unteren Rand der Liste lässt sich die Anzahl der Datensätze pro Seite festlegen sowie zwischen den Seiten navigieren. Bei Bedarf werden weitere Daten dynamisch nachgeladen.
