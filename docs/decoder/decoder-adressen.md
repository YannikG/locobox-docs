---
id: decoder-adressen
title: Decoder-Adressen
description: Adresse wählen, Vorschläge nutzen und Hinweise bei doppelten Adressen verstehen.
---

# Decoder-Adressen

Jeder Decoder hat eine **Adresse** auf der Modelleisenbahn (z. B. DCC). Locobox hilft beim Finden freier Adressen und warnt, wenn eine Adresse schon vergeben ist.

## Protokoll zuerst

Adress-**Vorschläge** erscheinen erst, wenn Sie ein **Protokoll** gewählt haben (z. B. DCC). Ohne Protokoll gibt es keine Vorschlagsbuttons.

## Vorgeschlagene freie Adressen

Nach der Protokollwahl zeigt das Formular **Vorgeschlagene freie Adressen** — bis zu fünf Buttons mit freien Adressen im gültigen Bereich.

- Tippen Sie einen Vorschlag an → das Adressfeld wird ausgefüllt.
- Bei einer freien Adresse erscheint grünes Feedback (**Diese Adresse ist verfügbar**).

## Adresse manuell eingeben

Tragen Sie die Adresse selbst ein. Locobox prüft:

| Situation | Anzeige | Speichern |
| --------- | ------- | --------- |
| Adresse frei | Grüner Hinweis «verfügbar» | möglich |
| Adresse schon von **einem anderen** Decoder belegt | Orangefarbener Hinweis «wird bereits verwendet» | **weiterhin möglich** |
| Adresse ausserhalb des Protokoll-Bereichs | Fehlermeldung zum gültigen Bereich | erst nach Korrektur |

**Wichtig:** Doppelte Adressen sind **erlaubt**. Der Hinweis dient nur der Übersicht — z. B. wenn Sie bewusst mehrere Decoder auf einer Adresse führen oder einen Fehler bemerken wollen.

## Wo die Hinweise erscheinen

- **Decoder-Liste:** doppelte Adressen sind hervorgehoben (Tooltip).
- **Detailansicht** und **Bearbeitung**, Tab **Übersicht:** derselbe Hinweis am Adressfeld.

## Verknüpfung mit Artikeln

Die Adresse gehört zum **Decoder**, nicht zum Artikel. Ein verknüpfter [Artikel](../artikel/artikel.md) zeigt den Decoder in seiner Detailansicht; die Adresslogik bleibt am Decoder.

Zurück: [Decoder-Liste](./decoder-liste.md) · [Decoder-Übersicht](./decoder.md)
