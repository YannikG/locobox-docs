---
sidebar_position: 1
id: zuege-komposition
title: Zug zusammenstellen
description: Komposition zusammenstellen, Artikel einreihen, Reihenfolge per Drag-and-drop steuern und Zuglänge berechnen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Zug zusammenstellen

In Locobox wird die Reihung und Darstellung der Fahrzeuge in den Masken **Zug erstellen** und **Zug bearbeiten** festgelegt. In der Benutzeroberfläche trägt dieser Bereich den Namen **Komposition**.

<LimitsPlanNote />

## Navigation zur Komposition

- Neuer Zug: Über **Neu** in der Zugliste öffnet sich die Eingabemaske **Zug erstellen** (Premium erforderlich).
- Bestehender Zug: In der Zugliste führt **Ansehen** in die Detailansicht, **Bearbeiten** in die Maske **Zug bearbeiten**.

Im oberen Bereich des Formulars befindet sich die Leiste **Komposition**, darunter die Felder **Bezeichnung** und **Beschreibung**. Beim Erstellen eines neuen Zuges blendet die Seite unter den Stammdaten zusätzlich eine **Vorschau** der Reihung ein. In der Detailansicht gespeicherter Züge steht diese vollständige Wagenreihung ebenfalls zur Verfügung.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zug-detailansicht.webp : Zug-Detailansicht mit Bezeichnung, Beschreibung, Komposition, Vorschau und Zuglänge über Puffer */}

## Zuglänge über Puffer

Oberhalb der Kompositionsleiste summiert das System die **Zuglänge über Puffer** in **mm**, sofern bei den beteiligten Modellen entsprechende Werte hinterlegt sind. Fehlen bei einzelnen Fahrzeugen Angaben, weist die Anwendung mit folgendem Hinweis darauf hin: **Die Länge über Puffer ist nicht genau, weil nicht alle Artikel eine Länge über Puffer hinterlegt haben.**

## Artikel hinzufügen

1. Die Schaltfläche **Hinzufügen** öffnet das Auswahlfenster **Artikel hinzufügen**.
2. Darin stehen dieselben Filterfunktionen wie in der Artikelübersicht bereit.
3. In der Auswahltabelle lassen sich Modelle selektieren. Das Kontrollkästchen im Tabellenkopf markiert alle zur Filterung passenden Datensätze auf einmal oder hebt die Markierung auf.
4. Über **Auswahl hinzufügen** werden die gewählten Artikel an das Zugende angehängt. Bereits im Zug vorhandene Artikel werden dabei nicht doppelt eingefügt.

## Reihenfolge und Wagendarstellung

Die eingefügten Modelle erscheinen als horizontale Kette kleiner Karten mit Bezeichnung und Bild.

- **Reihenfolge:** Über die Griffleiste **Neu anordnen** lässt sich jede Karte per Drag-and-drop verschieben.
- **Aktionsmenü:** Über das Menü **Weitere Aktionen** oder einen Rechtsklick auf den Bildbereich stehen Steuerungsbefehle zur Verfügung:
  - Umschalten zwischen **Hauptbild verwenden** und **Gespiegeltes Bild verwenden**, sofern beide Varianten hinterlegt sind.
  - Schrittweise Verschiebung über **Einen nach vorne** / **Einen nach hinten**, **An den Anfang** oder **Ans Ende**.
  - **Löschen** entfernt das Modell nach einer Sicherheitsabfrage aus der Reihung.

Verkaufte Artikel werden in der Reihung mit dem Label **Verkauft** hervorgehoben, um Lücken oder Verkäufe im Verband schnell zu erkennen.

## Gültigkeitsregeln beim Speichern

Das Speichern setzt eine eingetragene **Bezeichnung** sowie mindestens ein zugeordnetes Modell voraus.

- Fehlende Bezeichnung: **Name ist erforderlich.**
- Leere Komposition: **Ein Zug benötigt mindestens einen Artikel.**

Beim Verlassen des Formulars mit ungespeicherten Daten blendet die Oberfläche folgende Sicherheitsabfrage ein: «Sie haben ungespeicherte Änderungen. Möchten Sie die Seite wirklich verlassen?».

Nach dem Speichern eines neuen Zuges öffnet sich direkt dessen Detailansicht. Bei bestehenden Zügen führt das Speichern zur vorherigen Ansicht zurück.

## Verknüpfung aus der Artikelperspektive

In der Detailansicht eines [Artikels](../artikel/artikel.md) dokumentiert der Abschnitt **Verknüpfte Züge** alle Zugehörigkeiten. Über **Ansehen** lässt sich der jeweilige Zug direkt aufrufen.

## Weiterführend

Löschfunktionen und Besonderheiten bezüglich des Papierkorbs sind unter [Züge](zuege.md) dokumentiert.
