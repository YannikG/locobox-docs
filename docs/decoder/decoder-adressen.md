---
sidebar_position: 5
id: decoder-adressen
title: Decoder-Adressen verwalten
description: Adresse wählen, Vorschläge nutzen und Hinweise bei doppelten Adressen verstehen.
---

# Decoder-Adressen verwalten

Jeder Decoder hat eine **Adresse** auf der Modelleisenbahn (zum Beispiel DCC). Locobox hilft beim Finden freier Adressen und warnt, wenn eine Adresse schon vergeben ist.

## Protokoll zuerst

Adressvorschläge erscheinen erst, wenn Sie ein **Protokoll** gewählt haben (zum Beispiel **DCC**). Ohne Protokoll gibt es keine Vorschlagsbuttons. Das Feld heisst **Protokoll auswählen**, solange noch nichts gewählt ist.

## Vorgeschlagene freie Adressen

Nach der Protokollwahl zeigt das Formular **Vorgeschlagene freie Adressen**, bis zu fünf Buttons mit freien Adressen im gültigen Bereich.

![Adressfeld mit gewähltem Protokoll, vorgeschlagenen freien Adressen und einem Verfügbarkeits- oder Warnhinweis](/img/handbuch/decoder/decoder-adressen.webp)

- Tippen Sie einen Vorschlag an, dann wird das Adressfeld ausgefüllt.
- Bei einer freien Adresse erscheint der Hinweis **Diese Adresse ist verfügbar.**

## Adresse manuell eingeben

Tragen Sie die Adresse selbst ein. Locobox prüft:

| Situation | Anzeige | Speichern |
| --------- | ------- | --------- |
| Adresse frei | **Diese Adresse ist verfügbar.** | möglich |
| Adresse schon von einem anderen Decoder belegt | **Diese Adresse wird bereits verwendet.** | weiterhin möglich |
| Adresse ausserhalb des Protokoll-Bereichs | **Die Adresse liegt ausserhalb des gültigen Bereichs für das gewählte Protokoll.** | erst nach Korrektur |

Wichtig: Doppelte Adressen sind erlaubt. Der Hinweis dient nur der Übersicht, zum Beispiel wenn Sie bewusst mehrere Decoder auf einer Adresse führen oder einen Fehler bemerken wollen.

## Wo die Hinweise erscheinen

- Decoder-Liste: doppelte Adressen sind hervorgehoben. Tooltip: **Diese Adresse wird mehrfach verwendet.**
- Detailansicht und Bearbeitung, Register **Übersicht**: derselbe Hinweis am Adressfeld (bei Belegung: **Diese Adresse wird bereits verwendet.**).

## Verknüpfung mit Artikeln

Die Adresse gehört zum **Decoder**, nicht zum Artikel. Ein verknüpfter [Artikel](../artikel/artikel.md) zeigt den Decoder in seiner Detailansicht; die Adresslogik bleibt am Decoder.

Zurück: [Decoder finden und filtern](./decoder-liste.md) · [Decoder-Übersicht](./decoder.md)
