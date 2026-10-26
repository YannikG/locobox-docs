---
sidebar_position: 1
id: adressliste
title: Adressliste drucken
description: PDF-Übersicht mit Abbildungen, Stammdaten und Digitaladressen je Artikel.
---

# Adressliste drucken

Die **Adressliste** generiert ein druckfertiges PDF-Dokument: Pro ausgewähltem Artikel erscheinen Foto, Kernangaben sowie alle zugeordneten Decoder-Adressen. Dies ermöglicht das schnelle Nachschlagen von Digitaladressen direkt an der Modellbahnanlage ohne Aufruf der Artikeldetails.

In der Anwendung lautet die Beschreibung: «PDF mit Bild, Artikelangaben und allen Decoder-Adressen pro Artikel.».

## Artikelauswahl und Dokumenterstellung

Die Maske ist über **Drucken** → **Adressliste** erreichbar und stellt eine filterbare Artikeltabelle bereit.

![Auswahlseite der Adressliste mit Artikeltabelle und markierten Zeilen](/img/handbuch/drucken/adressliste-auswahl.webp)

1. Mit den Filtern die gewünschte Treffermenge eingrenzen. Standardmässig sind unverkaufte Modelle vorausgewählt; die Filterparameter lassen sich flexibel anpassen. Bei aktivem Premium-Status steht ergänzend die Filterung nach [Labels](../artikel/artikel-labels.md) bereit.
2. In der Tabelle gewünschte Datensätze markieren. Über das Kontrollkästchen im Tabellenkopf lassen sich alle zur Filterung passenden Modelle auf einmal auswählen.
3. Im Kopfbereich wird ausgewiesen, wie viele Modelle selektiert sind und wie viele Treffer der Filter insgesamt umfasst.
4. **PDF erzeugen** startet die Generierung; der Browser lädt die Datei anschliessend als `adressliste.pdf` herunter.

Ohne markierte Datensätze meldet das System **Wählen Sie mindestens einen Artikel aus.**; die Exportschaltfläche bleibt gesperrt.

Über **Zurück** erfolgt die Rückkehr zur vorherigen Ansicht.

## Aufbau des Dokuments

Das Dokument ist im Hochformat angelegt und umfasst eine Tabelle mit den Spalten **Bild**, **Artikel** und **Adresse(n)**. Decoder ohne gültige Digitaladresse werden mit einem Leerfeld oder Platzhalter ausgewiesen.

Die Sortierung im Dokument richtet sich primär nach den vergebenen Decoder-Adressen (Modelle ohne Digitaladresse werden am Ende aufgeführt).

## Weiterführend

- [Berichte drucken](drucken-uebersicht.md): Gesamtübersicht der Druckfunktionen
- [QR Codes drucken](drucken-qr-code.md): Rasterdruck für Scan-Etiketten
- [Artikel](../artikel/artikel.md): Artikelverwaltung und Stammdaten
