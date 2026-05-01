---
id: zuege-komposition
title: Zug-Komposition
description: Komposition zusammenstellen, Artikel hinzufügen, Reihenfolge per Drag-and-drop, Bildvariante und Zuglänge.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Zug-Komposition bearbeiten

In Locobox wird die Reihenfolge und Darstellung der Artikel in einem Zug in der gleichen Ansicht wie **Zug erstellen** und **Zug bearbeiten** gepflegt. In der Oberfläche heisst dieser Block **Komposition** (nicht „Builder“).

<LimitsPlanNote />


## Wo die Komposition zu finden ist

- **Neuer Zug:** Über **Neu** in der Zugliste öffnet sich das Formular **Zug erstellen**.
- **Bestehender Zug:** In der Liste **Anzeigen** öffnet die Detailansicht, **Bearbeiten** öffnet **Zug bearbeiten**.

Oben im Formular steht zuerst die **Komposition**, darunter **Bezeichnung** und **Beschreibung**. Beim Anlegen eines neuen Zuges erscheint unter den Stammdaten zusätzlich eine **Vorschau** der Komposition; in der Detailansicht eines gespeicherten Zuges gibt es ebenfalls eine Vorschau mit der kompletten Darstellung.

## Zuglänge über Puffer

Über der Kompositionsleiste wird die summierte **Zuglänge über Puffer** in Millimetern angezeigt, soweit die beteiligten Artikel dazu Werte haben. Fehlen bei einzelnen Artikeln Angaben, bleibt die Summe unvollständig und die Oberfläche weist mit einem Hinweis darauf hin, dass die Länge nicht exakt ist.

## Artikel hinzufügen

1. **Hinzufügen** öffnet den Dialog **Artikel hinzufügen**.
2. Darin stehen dieselben **Filter** wie in der Artikelübersicht zur Verfügung, damit gezielt nach Einträgen gesucht werden kann.
3. In der Tabelle können Sie Artikel **mehrfach auswählen**. Über das Kontrollkästchen im **Tabellenkopf** markieren Sie alle **zum aktuellen Filter passenden** Artikel auf einmal oder setzen die Markierung zurück.
4. Mit **Auswahl hinzufügen** werden die gewählten Artikel ans Ende der Komposition gehängt. Bereits vorhandene Artikel im Zug werden dabei nicht doppelt eingefügt.

## Reihenfolge und Darstellung jedes Wagens

Die eingefügten Artikel erscheinen als **Waagrechte Reihe** kleiner Karten mit Kennzeichnung und Bild.

- **Reihenfolge:** Über den Bereich zum **Neu anordnen** (Griff-Symbol) kann jede Karte mit der Maus verschoben werden (**Drag-and-drop**).
- **Kontextmenü:** Über das Menü (**Weitere Aktionen**) oder ein **Rechtsklick** auf den Bildbereich öffnen sich weitere Befehle:
  - Wechsel zwischen **Hauptbild** und **gespiegeltes Bild**, sofern der Artikel beide Bilder hat.
  - **Einen nach vorne** / **Einen nach hinten**, **An den Anfang**, **Ans Ende**.
  - **Löschen** entfernt den Artikel aus der Komposition; dabei erscheint eine Sicherheitsabfrage.

Verkaufte Artikel werden in der Komposition **hervorgehoben** dargestellt, damit sie in der Garnitur leicht erkennbar sind.

## Speichern und Gültigkeit

Speichern ist nur möglich, wenn eine **Bezeichnung** eingetragen ist und **mindestens ein Artikel** in der Komposition liegt. Ungültige Eingaben werden an den Feldern beziehungsweise mit einer Meldung bei leerer Komposition angezeigt.

Wenn Sie das Formular **ohne zu speichern** verlassen und es gibt noch Änderungen, fragt die Anwendung nach, ob Sie wirklich weiternavigieren möchten.

Nach dem ersten Speichern eines neuen Zuges gelangen Sie zur **Detailansicht** dieses Zuges.

## Verknüpfung von einem Artikel aus

Öffnen Sie einen [Artikel](../artikel/artikel.md), zeigt die Sektion **Verknüpfte Züge**, in welchen Zügen dieser Artikel vorkommt. Von dort können Sie einen Zug **anzeigen** und bei Bedarf danach zur Bearbeitung wechseln.

## Übriges zum Bereich Züge

Löschen und Papierkorb sind unter [Züge](zuege.md) beschrieben.
