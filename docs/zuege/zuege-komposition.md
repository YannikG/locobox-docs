---
sidebar_position: 1
id: zuege-komposition
title: Zug zusammenstellen
description: Komposition und Zugangaben pflegen, Bezeichnung sperren oder freigeben, Zuglänge über Puffer lesen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Zug zusammenstellen

In **Neuer Zug** und in der Bearbeiten-Maske werden Komposition, Zugangaben und Beschreibung gesetzt. Der Fahrzeugbereich heisst in der Oberfläche **Komposition**.

<LimitsPlanNote />

## Einstieg

**Neu** in der Zugübersicht (Premium) oder **Bearbeiten** an einem bestehenden Zug. Im Formular folgen nacheinander Überschrift, **Komposition**, **Zugangaben** (mit Bezeichnung), **Beschreibung**, Speichern.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-formular.webp : Zugformular mit Komposition, Zugangaben und Bezeichnungssperre */}

## Zugangaben

Felder unter **Zugangaben**: **Zuggattung**, **Zugnummer**, **Liniennummer**, **Marketingname**, **Startbahnhof**, **Zielbahnhof**, **Betreiber**, **Epoche**, **Betriebsjahr**, **Länder**. Zuggattung nimmt Vorschläge aus der Liste oder freien Text; die übrigen Angaben sind optional.

Neue Züge starten mit **gesperrter** Bezeichnung. Locobox baut den Titel dann aus den Zugangaben («Automatisch aus den Zugangaben.»). **Frei benennen** gibt die Bezeichnung frei; **Zugangaben verwenden** sperrt wieder und leert die freie Bezeichnung. Bekannte Gattungen können als Badge mit Symbol erscheinen, unbekannte Freitext-Gattungen nur als schlichte Markierung.

Nur beim **Anlegen** füllen leere **Betreiber**, **Epoche** und **Länder** sich aus den hinzugefügten Wagen (Betreiber und Epoche vom ersten Artikel, Länder als Vereinigung). Beim Bearbeiten bleibt das aus.

## Zuglänge über Puffer

Oberhalb der Komposition steht die Summe der **Zuglänge über Puffer** in **mm**, sobald die Modelle Längen tragen. Fehlen Werte, lautet der Hinweis: **Die Länge über Puffer ist nicht genau, weil nicht alle Artikel eine Länge über Puffer hinterlegt haben.**

## Artikel in die Komposition

**Hinzufügen** öffnet **Artikel hinzufügen** mit denselben Filtern wie die Artikelübersicht. Markierte Modelle hängt **Auswahl hinzufügen** ans Zugende; bereits enthaltene Einträge werden nicht doppelt eingefügt. Der Tabellenkopf markiert alle Zeilen, die zur aktuellen Filterung passen.

Die Modelle liegen als Kette mit Bild und Bezeichnung. **Neu anordnen** verschiebt per Drag-and-drop. Über **Weitere Aktionen** oder Rechtsklick am Bild: **Hauptbild verwenden** / **Gespiegeltes Bild verwenden**, **Einen nach vorne** / **Einen nach hinten**, **An den Anfang** / **Ans Ende**, sowie **Löschen** nach Sicherheitsabfrage. Verkaufte Modelle tragen **Verkauft**.

In der Artikeltabelle der Komposition können [Kategorienamen](../kategorien/kategorien.md) mitlaufen, wenn sie am Artikel hängen.

## Detailansicht

Nach dem Speichern eines neuen Zuges öffnet Locobox die Detailansicht: Streifen mit Anzahl und LüP, Zugangaben, Beschreibung, Artikeltabelle.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-detailansicht.webp : Zug-Detailansicht mit Streifen, Zugangaben, Beschreibung und Artikeltabelle */}

## Speichern

Es braucht eine gültige **Bezeichnung** (frei oder aus Zugangaben) und mindestens ein Modell. Sonst: **Name ist erforderlich.** bzw. **Ein Zug benötigt mindestens einen Artikel.**

Beim Verlassen mit offenen Änderungen erscheint: «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?»

Am [Artikel](../artikel/artikel.md) listet **Verknüpfte Züge** die Zugehörigkeiten; **Ansehen** öffnet den Zug. Löschen und Wiederherstellen: [Züge](zuege.md), [Papierkorb](../papierkorb/papierkorb.md).
