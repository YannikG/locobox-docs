---
sidebar_position: 4
id: decoder-konfiguration
title: Decoder konfigurieren
description: Schlüssel-Wert-Einträge für CV-Parameter anlegen, bearbeiten, löschen und in der Bit-Ansicht prüfen.
---

import LimitsPlanNote from '@site/src/components/LimitsPlanNote';

# Decoder konfigurieren

Das Modul verwaltet Konfigurationseinträge und CV-Parameter. In der Übersichtstabelle lauten die Spalten **CV** und **Wert**; in der Eingabemaske heissen die Felder **Schlüssel** und **CV-Wert**.

Die Zuordnung logischer Funktionstasten (F0, F1...) behandelt das Kapitel [Funktionsmatrix](./decoder-funktionsmatrix.md).

<LimitsPlanNote />

## Bearbeitung und Speicherung

Die Konfigurationsparameter lassen sich im Decoder über **Bearbeiten** im Register **Konfiguration** pflegen. Neue sowie modifizierte Einträge werden erst mit dem **Speichern** der gesamten Bearbeitungsmaske dauerhaft gesichert ([Decoder-Bearbeitung](./decoder.md#bearbeitungsansicht)).

## Konfigurationseintrag hinzufügen

Die Schaltfläche **Eintrag hinzufügen** öffnet das Dialogfenster **Konfigurationseintrag hinzufügen**. Nach Eingabe von **Schlüssel** und **CV-Wert** (Ganzzahl von 0 bis 255) erfolgt die Sicherung über **Speichern**.

![Register «Konfiguration» mit CV-Tabelle und geöffnetem Dialog «Konfigurationseintrag hinzufügen»](/img/handbuch/decoder/decoder-konfiguration.webp)

Im Dialogfenster wird der eingegebene Wert parallel als Binärfolge visualisiert (**Dualzahl (Bitfolge)**). Einzelne Bits lassen sich dort direkt umschalten; der Dezimalwert passt sich synchron an.

## Konfigurationseintrag anpassen

In der entsprechenden Tabellenzeile die Aktion **Bearbeiten** betätigen. Im Dialog **Konfigurationseintrag bearbeiten** den CV-Wert anpassen und mit **Speichern** bestätigen. Der **Schlüssel** kann bei bestehenden Einträgen nicht mehr editiert werden.

## Konfigurationseintrag löschen

Über das Papierkorbsymbol der Zeile die Aktion **Löschen** ausführen. Das System blendet eine Bestätigungsabfrage mit der Beschriftung **Eintrag entfernen** ein.

- Doppelte Schlüssel sind unzulässig (**Dieser Schlüssel existiert bereits.**).
- Ohne Eingabe eines Schlüssels meldet das Formular **Bitte einen Schlüssel eingeben.** und sperrt die Speicherung bis zur Behebung.

## Bit-Ansicht in der Detailansicht

![Bit-Ansicht eines gespeicherten CV-Werts mit den einzelnen Bits](/img/handbuch/decoder/decoder-bitansicht.webp)

In der Detailansicht steht im Register **Konfiguration** für jeden Eintrag eine Bit-Darstellung bereit (Hinweistext: **CV-Wert als Bits anzeigen.**). Die Ansicht zerlegt den gespeicherten Wert in seine acht Einzelbits.

Die Bitansicht in der Detailansicht ist Abonnenten vorbehalten. Ohne aktiven Premium-Status verweist ein Hinweisfeld auf die Tarifgrenzen.

Zurück zur Übersicht: [Decoder](./decoder.md).
