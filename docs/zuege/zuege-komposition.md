---
sidebar_position: 1
id: zuege-komposition
title: Zug zusammenstellen
description: Komposition und Zugangaben pflegen, Bezeichnung sperren oder freigeben, Zuglänge über Puffer lesen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Zug zusammenstellen

Das Formular für einen neuen oder bestehenden Zug enthält den Fahrzeugbereich **Komposition**, die **Zugangaben** und eine **Beschreibung**.

<LimitsPlanNote />

## Einstieg

**Neu** in der [Zugübersicht](zuege.md) oder **Bearbeiten** an einem bestehenden Zug öffnet das Formular. Für **Neu** gilt dieselbe Obergrenze des Plans wie in der Übersicht.

Die Überschrift zeigt den Titel. Ein neuer Zug ohne Formel heisst **Neuer Zug**. Beim Bearbeiten hängt «bearbeiten» am Titel. Fehlt jede Bezeichnung, lautet der Titel **Zug ohne Bezeichnung**. In der Symbolleiste liegen **Zurück**, **Abbrechen** und **Speichern**.

Unter der Überschrift folgen **Komposition**, dann **Zugangaben** und zum Schluss **Beschreibung**. Die **Bezeichnung** steht oben im Block **Zugangaben**.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-formular.webp : Zugformular mit Komposition, Zugangaben und Bezeichnungssperre */}

## Zugangaben

Neue Züge starten mit gesperrter **Bezeichnung**. Unter dem Feld steht «Automatisch aus den Zugangaben.» Der Titel entsteht dann aus diesen Angaben. **Frei benennen** öffnet das Feld. Ist es noch leer, steht die bisherige Formel schon drin. **Zugangaben verwenden** sperrt wieder und leert die freie Bezeichnung.

Eine bekannte **Zuggattung** erscheint als Badge mit Symbol. Freitext ohne passendes Symbol bleibt eine einfache Markierung. Das Feld nimmt Vorschläge aus der Liste oder eigenen Text. Die übrigen Angaben sind optional: **Zugnummer**, **Liniennummer**, **Marketingname**, **Startbahnhof**, **Zielbahnhof**, **Betreiber**, **Epoche**, **Betriebsjahr** und **Länder**.

Nur beim Anlegen übernimmt Locobox Werte aus den hinzugefügten Artikeln. Leere Felder **Betreiber** und **Epoche** bekommen den Wert vom ersten Artikel. **Länder** setzt Locobox aus allen Artikeln im Zug neu zusammen, bis das Feld von Hand geändert wurde.

## Zuglänge über Puffer

Unter der Überschrift **Komposition** und über der Wagenreihe steht **Zuglänge über Puffer** in mm. Fehlt bei einzelnen Artikeln die Länge, färbt sich die Zahl. Ein Info-Symbol nennt dann den Hinweis: «Die Länge über Puffer ist nicht genau, weil nicht alle Artikel eine Länge über Puffer hinterlegt haben.» Dasselbe Symbol sitzt in der Übersicht neben der Millimeterzahl.

## Artikel in die Komposition

**Hinzufügen** öffnet den Dialog **Artikel hinzufügen**, mit denselben Filtern wie die [Artikelliste](../artikel/artikel-liste.md). **Auswahl hinzufügen** hängt die markierten Modelle ans Ende des Zuges. Was schon in der Komposition steckt, kommt nicht ein zweites Mal dazu. Das Häkchen im Tabellenkopf markiert alle Zeilen, die zum aktuellen Filter passen. Die Spalte **Kategorien** zeigt die Namen, wenn der Artikel welche hat.

Die Modelle liegen als Reihe mit Bild und Bezeichnung. Am Griff **Neu anordnen** wandert ein Modell an eine andere Stelle. **Weitere Aktionen** oder ein Rechtsklick auf das Bild zeigt **Hauptbild verwenden**, **Gespiegeltes Bild verwenden**, **Einen nach vorne**, **Einen nach hinten**, **An den Anfang**, **Ans Ende** und **Löschen**. Vor dem Entfernen erscheint «Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?»

Verkaufte Modelle sind an der Wagenkarte mit **Verkauft** markiert.

## Detailansicht

Nach dem Speichern öffnet Locobox die Detailansicht. Oben steht **Vorschau** mit dem Streifen, der Artikelzahl und der **Zuglänge über Puffer**. Danach kommen **Zugangaben**, **Beschreibung** und die Artikeltabelle unter **Komposition**. Im Streifen und in der Tabelle gilt dasselbe Label **Verkauft** für verkaufte Modelle.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-detailansicht.webp : Zug-Detailansicht mit Streifen, Zugangaben, Beschreibung und Artikeltabelle */}

## Speichern

Es braucht eine Bezeichnung und mindestens einen Artikel. Die Bezeichnung ist frei eingegeben oder kommt aus den Zugangaben. Eine gesperrte Bezeichnung genügt, sobald Badge oder Formel einen Titel ergeben. Ist die freie Bezeichnung leer, meldet das Feld **Name ist erforderlich.** Solange kein Artikel in der Komposition liegt, steht dort **Ein Zug benötigt mindestens einen Artikel.** **Speichern** wird erst aktiv, wenn beides erfüllt ist und das Formular geändert wurde.

**Speichern** wechselt in die Detailansicht. **Abbrechen** und **Zurück** verlassen das Formular. Bei offenen Änderungen erscheint «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?» Ein neuer Zug führt danach zur Liste, ein bestehender in die Detailansicht.

Am [Artikel](../artikel/artikel.md) listet **Verknüpfte Züge** die Züge, in denen das Modell steckt, mit einem eigenen Kompositionsstreifen. **Ansehen** öffnet den Zug. Löschen und Wiederherstellen: [Züge](zuege.md), [Papierkorb](../papierkorb/papierkorb.md).
