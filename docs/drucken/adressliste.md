---
sidebar_position: 1
id: adressliste
title: Adressliste drucken
description: PDF-Liste mit Bild, Artikelangaben und allen Decoder-Adressen je Artikel.
---

# Adressliste drucken

Die **Adressliste** ist ein druckfertiges PDF: pro ausgewähltem Artikel erscheinen Bild (falls vorhanden), die wichtigsten Artikelangaben sowie alle zugeordneten Decoder-Adressen. So haben Sie die Adressen auf der Anlage ohne Umweg über die Artikeldetails.

In der App lautet die Kartenbeschreibung: PDF mit Bild, Artikelangaben und allen Decoder-Adressen pro Artikel.

## Artikel wählen und PDF erzeugen

Die Seite öffnen Sie über **Drucken** → **Adressliste**. Sie hat eine eigene Artikeltabelle mit Filtern.

1. Mit den Filtern die gewünschte Teilmenge eingrenzen. Standardmässig sind nicht verkaufte Artikel vorausgewählt; die Filter lassen sich anpassen (unter anderem die Spalte **Verkauft**). Mit Premium können Sie die Treffer zusätzlich über [Labels](../artikel/artikel-labels.md) eingrenzen.
2. In der Tabelle eine oder mehrere Zeilen auswählen. Über die Kopfzeilen-Auswahl können Sie alle gemäss aktuellem Filter passenden Artikel auswählen, nicht nur die aktuelle Seite.
3. Oben wird angezeigt, wie viele Artikel ausgewählt sind und wie viele Treffer der Filter insgesamt liefert.
4. **PDF erzeugen** startet die Erstellung; die Datei wird anschliessend als `adressliste.pdf` auf das Gerät geladen.

Ohne mindestens einen ausgewählten Artikel weist die App mit **Wählen Sie mindestens einen Artikel aus.** hin; die Schaltfläche zum PDF ist dann nicht nutzbar.

**Zurück** führt zur vorherigen Ansicht; oft ist das die Übersicht unter **Drucken**.

## PDF-Inhalt

Das PDF ist hochkant formatiert und enthält eine Tabelle mit den Spalten **Bild**, **Artikel** und **Adresse(n)**. Decoder ohne gültige Adresse werden im Dokument leer oder mit einem Platzhalter dargestellt, soweit zutreffend.

Die Reihenfolge der Zeilen im PDF entspricht einer Sortierung nach Decoder-Adressen (Artikel ohne Adresse stehen hinten, dann wie gewählt).

---

Siehe auch [Berichte drucken](drucken-uebersicht.md) für den Überblick über diesen Bereich, [QR Codes drucken](drucken-qr-code.md) für den QR-Raster-Export und [Artikel](../artikel/artikel.md) für Stammdaten und Filterlogik in der Artikelliste.
