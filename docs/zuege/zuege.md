---
id: zuege
title: Züge
description: Zugkompositionen als Karten durchsuchen, filtern und aus Artikeln zusammenstellen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Züge

Im Bereich **Züge** lassen sich aus erfassten [Artikeln](../artikel/artikel.md) vollständige Zugkompositionen zusammenstellen.
Züge können angelegt, betrachtet, bearbeitet und in den [Papierkorb](../papierkorb/papierkorb.md) verschoben werden.

<LimitsPlanNote />

## Zugübersicht (Karten)

Die Übersicht zeigt Züge als **Kartenraster** (keine klassische Zeilentabelle).

{/* SCREENSHOT_TODO /img/handbuch/zuege/zugliste-karten.webp : Zugübersicht als Kartenraster mit Kompositionsstreifen, Artikelanzahl und LüP */}

Pro Karte typisch sichtbar:

- Titelzeile mit Zuggattungs-Badge (soweit bekannt), Zugnummer und Bezeichnung bzw. Formel aus den Zugangaben
- horizontaler **Kompositionsstreifen** der Fahrzeuge
- Kennzahlen: zuerst **Anzahl Artikel**, danach **Länge über Puffer (LüP)** in mm, sofern berechenbar
- Länderflaggen und Aktionen (u. a. Ansehen, Bearbeiten, Löschen)

Verkaufte Modelle im Streifen sind als **Verkauft** hervorgehoben.

Die Schaltfläche **Neu** startet das Anlegen eines neuen Zuges und setzt ein aktives Premium-Abonnement voraus.

## Filtern

Über den aufklappbaren Filterbereich lassen sich die Karten eingrenzen. Mit **Anwenden** wird die Auswahl wirksam; **Zurücksetzen** leert alle Kriterien. Aktive Filter erscheinen als Chips und lassen sich einzeln entfernen.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zugliste-filter.webp : Aufgeklappter Zugfilter mit Zugangaben und Bereichen für Artikelanzahl und LüP */}

Typische Kriterien:

- **Bezeichnung** und weitere **Zugangaben** (u. a. Zuggattung, Zugnummer, Betreiber, Epoche, Länder)
- Bereiche für **Anzahl Artikel** und **Länge über Puffer (LüP)**

Beim Zurückkehren aus der Detailansicht bleiben die Filter der Sitzung erhalten.

## Detail und Bearbeitung

Ein Klick auf die Karte öffnet die Detailansicht. Von dort oder über die Kartenaktionen führt **Bearbeiten** in die Eingabemaske.

Komposition, Zugangaben und Bezeichnung (gesperrt oder frei) sind unter [Zug zusammenstellen](zuege-komposition.md) beschrieben.

Fehlt ein Zug unter der aufgerufenen Adresse (etwa nach Löschung), erscheint die Seite **Nicht gefunden** mit dem Hinweis «Dieser Eintrag ist nicht vorhanden.» und dem Link **Zur Liste**.

## Globale Suche

In der [globalen Suche](../generelles/globale-suche.md) erscheinen Züge in der Gruppe **Züge**. Treffer nutzen Bezeichnung bzw. Zugangaben; ein Kompositionsstreifen wird dort nicht angezeigt.

## Löschen

Gelöschte Züge landen im [Papierkorb](../papierkorb/papierkorb.md) im Register **Züge** und können innerhalb der Aufbewahrungsfrist wiederhergestellt werden. Das Menü-Badge am Papierkorb zählt Züge mit.
