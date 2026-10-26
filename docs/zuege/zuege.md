---
id: zuege
title: Züge
description: Zugkompositionen als Karten finden, filtern und aus Artikeln zusammenstellen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Züge

Unter **Züge** stehen die zusammengestellten Züge der Sammlung. Ein Zug besteht aus [Artikeln](../artikel/artikel.md), die bereits erfasst sind. Gelöschte Züge bleiben im [Papierkorb](../papierkorb/papierkorb.md).

<LimitsPlanNote />

## Übersicht

Die Übersicht zeigt die Züge als **Kartenraster**.

![Zugübersicht mit aufgeklapptem Filter und Kartenraster inkl. Kompositionsstreifen](/img/handbuch/zuege/zugliste-filter.webp)

Im Titel stehen das Badge der Zuggattung, die Zugnummer und die Bezeichnung, je nachdem, was gesetzt ist. Bei gesperrter Bezeichnung kommt der sichtbare Titel aus den Zugangaben. Darunter liegt der Kompositionsstreifen mit den Fahrzeugen in der Reihenfolge des Zuges. Verkaufte Modelle sind im Streifen mit **Verkauft** markiert.

Unter dem Streifen folgt die Anzahl der Artikel, danach die Länge in mm. Fehlen Längen, sitzt neben der Millimeterzahl ein Info-Symbol; der Hinweistext steht unter [Zug zusammenstellen](zuege-komposition.md). Rechts liegen die Länderflaggen, sofern Länder erfasst sind, sowie **Ansehen**, **Bearbeiten** und **Löschen**. Nur **Ansehen** öffnet die Detailansicht.

**Neu** öffnet das Formular für einen neuen Zug. Im Gratisplan gilt dafür eine Obergrenze. Ist sie erreicht, erscheint der Hinweis auf Premium statt des Formulars. Mit Premium entfällt die Grenze.

Ohne Züge erscheint **Noch keine Einträge vorhanden.** Die Aktion **Erstellen** macht dann dasselbe wie **Neu**. Passt kein Zug zum Filter, steht dort **Keine Einträge entsprechen den aktuellen Filtern.** und **Filter zurücksetzen**.

Am unteren Rand stehen die Seitenwahl und die Anzahl Karten pro Seite.

## Filter

Der Bereich **Filter** klappt auf. Darin stehen **Bezeichnung**, **Zuggattung**, **Zugnummer**, **Betreiber**, **Epoche** und **Länder**, dazu je ein Bereich für **Anzahl Artikel** und **Länge über Puffer (LüP)**.

**Anwenden** lädt die Trefferliste neu, **Zurücksetzen** leert die Maske. Aktive Kriterien stehen als Chips unter dem Filter. Ein Klick auf das Kreuz am Chip entfernt nur dieses Kriterium, und die Liste lädt sofort neu.

Die Filter bleiben erhalten, solange Locobox im Browser offen bleibt, auch nach der Rückkehr aus der Detailansicht. Ein Neuladen der Seite setzt sie zurück.

## Detail und Bearbeitung

**Ansehen** öffnet die Detailansicht. **Bearbeiten** steht an der Karte und noch einmal in der Detailansicht. Komposition und Zugangaben beschreibt [Zug zusammenstellen](zuege-komposition.md).

Fehlt der Zug unter der aufgerufenen Adresse, zeigt die Seite **Nicht gefunden**. Der Text lautet «Dieser Eintrag ist nicht vorhanden.» Darunter führt **Zur Liste** zurück zur Übersicht.

## Globale Suche

In der [globalen Suche](../generelles/globale-suche.md) erscheinen Züge in der Gruppe **Züge**. Locobox sucht dort nach Bezeichnung und Zugangaben. Der Kompositionsstreifen der Karte ist in diesen Treffern nicht dabei.

## Löschen

**Löschen** fragt zuerst «Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?» Der Zug liegt danach im Papierkorb, im Register **Züge**. Innerhalb von 30 Tagen holt **Wiederherstellen** ihn zurück. Das rote Badge am Menüeintrag **Papierkorb** zählt auch diesen Zug. Ablauf und Register: [Papierkorb](../papierkorb/papierkorb.md).
