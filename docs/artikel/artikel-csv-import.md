---
sidebar_position: 6
id: artikel-csv-import
title: Artikel per CSV importieren
description: Artikelbestände aus einer CSV-Datei importieren mit Dateiprüfung, Spaltenzuordnung und Vorschau.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Artikel per CSV importieren

Über den **CSV-Import** lassen sich grössere Artikelbestände gesammelt aus einer CSV-Tabelle in Locobox einspielen.

**Navigation:** Hauptmenü **Sammlung** → unter **Artikel** der Eintrag **CSV importieren**.

Der Assistent führt in vier Schritten durch den Import: **Datei**, **Zuordnung**, **Vorschau** und **Ausführen**. Die Schaltfläche **Schliessen** bricht den Vorgang ab; **Vorschau erstellen** und **Import starten** steuern den weiteren Ablauf.

![CSV-Import-Assistent (Datei, Zuordnung mit beiden Registern, Vorschau-Tabelle, Ausführen)](/img/handbuch/artikel/csv-import.webp)

<LimitsPlanNote />

## 1. Datei

- Über **CSV auswählen** wird eine gültige CSV-Datei bestimmt (Schrittbezeichnung: **CSV-Datei wählen**). Es kann jeweils eine Datei pro Importlauf gewählt werden.
- Die erste Zeile der Datei muss Spaltenüberschriften aufweisen. Reine Leerzeilen übergeht das System automatisch.
- Nach erfolgter Dateianalyse erscheint der Dateiname unter **Ausgewählte Datei**.

Unter **CSV-Format Hilfe** sind die Formatvorgaben für Datentypen aufgeführt:

- **Pflichtangaben:** Jede Datenzeile muss Werte für **Hersteller** und **Artikelnummer** enthalten.
- **Ja/Nein-Werte:** Empfohlen sind `ja` oder `nein`. Zulässig sind ebenso `true` / `false`, `1` / `0` sowie `yes` / `no`.
- **Zahlenwerte:** Punkt oder Komma als Dezimaltrenner (beispielsweise `329.90` oder `329,90`).
- **Datumsformate:** Bevorzugt im Format **TT.MM.JJJJ** (Schweizer Schreibweise).
- **Ländercodes:** Zweistellige ISO-Kürzel (beispielsweise `CH`, `DE`, `FR`). Historische Kennungen: `DD` für DDR, `SU` für Sowjetunion, `YU` für Jugoslawien.
- **Stromsystem:** Textangaben oder Zahlencodes gemäss Anleitung (**Andere**, **DC**, **AC**).
- **Massstab:** Definierte Modellbaukürzel wie `H0`, `N`, `Z`. Unbekannte Werte bleiben leer.
- **Verpackung und Zustand:** Zulässige Bezeichnungen gemäss Werteliste (**OVP**, **Gebraucht**).

Kann die Datei technisch nicht analysiert werden, erscheint der Hinweis **Die CSV-Datei konnte nicht verarbeitet werden.**

## 2. Zuordnung

In diesem Schritt werden die Spalten der Ausgangsdatei den Zielfeldern in Locobox zugewiesen, Konstantwerte definiert oder irrelevante Spalten ausgeschlossen (Schrittbezeichnung: **Felder zuordnen**).

- Automatische Erkennung: Gängige Spaltenüberschriften (beispielsweise **Hersteller**) ordnet die Anwendung bereits beim Einlesen selbstständig zu.
- Register **CSV-Spalten**: Für jede gefundene Spalte wird das Zielfeld bestimmt oder die Option **Diese Spalte ignorieren** gewählt.
- Register **Verbleibende Felder**: Nicht über die Datei abgedeckte Attribute lassen sich über **Konstante** mit einem festen Sammelwert belegen oder auf **Ignorieren** setzen. Bei der Wahl von **Konstante** muss das Eingabefeld in der Spalte **Konstante** befüllt werden.

Die Pflichtfelder **Hersteller** und **Artikelnummer** müssen zwingend abgedeckt sein (entweder über eine Spaltenzuordnung oder als Konstantwert).

Hinweise in der Zuordnungsmaske:

- **In der Zuordnung fehlen Pflichtfelder:** Erscheint, solange Hersteller oder Artikelnummer nicht zugeordnet sind.
- **Pflicht-CSV-Spalten enthalten in einer oder mehreren Zeilen leere Werte:** Weist darauf hin, dass Pflichtspalten in einzelnen Zeilen leere Zellen aufweisen. Die Erstellung der Vorschau bleibt gesperrt, bis die Daten bereinigt sind.
- Nicht zugewiesene Spalten werden mit einem separaten Prüfhinweis quittiert.

## 3. Vorschau

Nach Klick auf **Vorschau erstellen** listet der Abschnitt **Importdaten prüfen** alle Zeilen mit den Spalten **Hersteller**, **Artikelnummer**, **Validierung** (**Gültig** / **Ungültig**) sowie **Zeilenfehler** auf.

Fehlerhafte Datensätze sperren den Start des Imports. Die Meldung quantifiziert die fehlerhaften Zeilen. Nach Korrektur der Datei oder Zuordnung lässt sich die Vorschau neu aufbauen.

## 4. Ausführen

Im Schritt **Import ausführen** startet die Schaltfläche **Import starten** das sequentielle Einspielen der validierten Zeilen.

- Eine Fortschrittsanzeige visualisiert die verarbeiteten und aktuellen Zeilennummern.
- Schlägt das Schreiben einer Zeile fehl, stoppt der Prozess mit Nennung der fehlerhaften Zeilennummer und Fehlerursache. Bereits geschriebene Datensätze verbleiben in der Datenbank.
- Nach erfolgreichem Durchlauf fasst eine Bestätigungsmeldung die Anzahl neu erstellter Artikel zusammen.

Bilder, Decoder und Kategorien werden beim CSV-Import nicht verknüpft; diese Spezifikationen erfolgen anschliessend an den jeweiligen Einzelartikeln.

Importierte Artikel unterliegen denselben Kontingenten wie manuell erfasste Bestände (siehe [Nutzung](../einstellungen/nutzung.md)).

Ergänzende Handbuchkapitel: [Artikel](artikel.md), [Artikel bearbeiten](artikel-bearbeiten.md).
