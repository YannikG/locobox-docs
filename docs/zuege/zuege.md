---
id: zuege
title: Züge
description: Zugkompositionen als Karten finden, filtern und aus Artikeln zusammenstellen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Züge

Unter **Züge** entstehen Kompositionen aus vorhandenen [Artikeln](../artikel/artikel.md). Anlegen braucht Premium; gelöschte Züge liegen im [Papierkorb](../papierkorb/papierkorb.md).

<LimitsPlanNote />

## Übersicht

Statt einer Zeilentabelle zeigt Locobox ein **Kartenraster**.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zugliste-karten.webp : Zugübersicht als Kartenraster mit Kompositionsstreifen, Artikelanzahl und LüP */}

Auf der Karte stehen Titel (Badge, Zugnummer, Bezeichnung oder Formel aus den Zugangaben), der horizontale **Kompositionsstreifen**, darunter zuerst die **Anzahl Artikel** und danach die **Länge über Puffer (LüP)** in mm, sofern sie sich aus den Modellen ergibt. Verkaufte Fahrzeuge im Streifen tragen das Label **Verkauft**. Aktionen am Rand: Ansehen, Bearbeiten, Löschen.

**Neu** öffnet das Formular für einen neuen Zug.

## Filter

Der aufklappbare Filterbereich grenzt die Karten ein. **Anwenden** lädt die Treffer, **Zurücksetzen** leert alles. Aktive Kriterien erscheinen als Chips und lassen sich einzeln entfernen.

{/* SCREENSHOT_TODO /img/handbuch/zuege/zugliste-filter.webp : Aufgeklappter Zugfilter mit Zugangaben und Bereichen für Artikelanzahl und LüP */}

Filtern lässt sich nach **Bezeichnung** und den übrigen **Zugangaben** (Zuggattung, Zugnummer, Betreiber, Epoche, Länder u. a.) sowie nach Bereichen für **Anzahl Artikel** und **Länge über Puffer (LüP)**. Kommt man aus der Detailansicht zurück, bleiben die Filter der Sitzung stehen.

## Detail und Bearbeitung

Klick auf die Karte öffnet die Detailansicht. **Bearbeiten** steht dort und an den Kartenaktionen. Wie Komposition und Zugangaben funktionieren, steht unter [Zug zusammenstellen](zuege-komposition.md).

Existiert der Zug unter der URL nicht mehr, erscheint **Nicht gefunden** («Dieser Eintrag ist nicht vorhanden.») mit dem Link **Zur Liste**.

## Globale Suche

In der [globalen Suche](../generelles/globale-suche.md) landen Züge in der Gruppe **Züge**, nach Bezeichnung bzw. Zugangaben. Den Kompositionsstreifen gibt es dort nicht.

## Löschen

Löschen legt den Zug im Papierkorb unter dem Register **Züge** ab. Innerhalb der Frist ist Wiederherstellen möglich; das rote Badge am Menüeintrag zählt Züge mit.
