---
sidebar_position: 5
id: decoder-adressen
title: Decoder-Adressen verwalten
description: Adressvergabe, freie Adressvorschläge und Hinweismeldungen bei Mehrfachbelegung.
---

# Decoder-Adressen verwalten

Jeder Digitaldecoder besitzt eine **Adresse** auf der Modellbahnanlage (beispielsweise DCC). Locobox unterstützt bei der Ermittlung freier Adressen und meldet allfällige Doppelbelegungen.

## Protokollwahl als Voraussetzung

Adressvorschläge erscheinen erst nach Auswahl eines **Protokolls** (beispielsweise **DCC**). Vor der Protokollauswahl stehen keine Vorschlagsschaltflächen zur Verfügung. Das Auswahlfeld trägt die Beschriftung **Protokoll auswählen**.

## Vorgeschlagene freie Adressen

Nach der Protokollauswahl generiert das Formular bis zu fünf Schaltflächen mit freien Adressen im gültigen Wertebereich unter der Bezeichnung **Vorgeschlagene freie Adressen**.

![Adressfeld mit gewähltem Protokoll, vorgeschlagenen freien Adressen und einem Verfügbarkeits- oder Warnhinweis](/img/handbuch/decoder/decoder-adressen.webp)

- Ein Klick auf einen Vorschlag befüllt das Adressfeld automatisch.
- Bei einer unbesetzten Adresse erscheint der Systemhinweis **Diese Adresse ist verfügbar.**

## Manuelle Adresseingabe

Bei manueller Eingabe prüft das System den Wert unmittelbar:

| Ausgangslage | Rückmeldung | Speicherbarkeit |
| --- | --- | --- |
| Adresse unbesetzt | **Diese Adresse ist verfügbar.** | Möglich |
| Adresse bereits durch anderen Decoder belegt | **Diese Adresse wird bereits verwendet.** | Weiterhin möglich |
| Adresse ausserhalb des Protokollbereichs | **Die Adresse liegt ausserhalb des gültigen Bereichs für das gewählte Protokoll.** | Erst nach Wertekorrektur möglich |

Wichtig: Mehrfach vergebene Adressen sind technisch zulässig. Die Meldung dient rein informativen Zwecken, beispielsweise bei bewussten Mehrfachtraktionen oder zur Vermeidung unbeabsichtigter Doppelungen.

## Platzierung der Hinweismeldungen

- **Decoder-Liste:** Mehrfach verwendete Adressen werden farblich hervorgehoben. Tooltip: **Diese Adresse wird mehrfach verwendet.**
- **Detail- und Bearbeitungsansicht (Register Übersicht):** Hinweistext direkt am Adressfeld (**Diese Adresse wird bereits verwendet.**).

## Trennung von Artikel und Decoder

Die Digitaladresse ist an den **Decoder** gebunden, nicht an das physische Rollmaterial. Ein verknüpfter [Artikel](../artikel/artikel.md) weist den Decoder in den Details aus; die Adressverwaltung verbleibt vollständig beim Decoder.

Navigation: [Decoder finden und filtern](./decoder-liste.md) · [Decoder-Übersicht](./decoder.md)
