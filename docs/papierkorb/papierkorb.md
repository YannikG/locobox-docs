---
id: papierkorb
title: Papierkorb
description: Gelöschte Artikel, Kategorien und Decoder ansehen, Frist und Wiederherstellung, automatische endgültige Löschung nach 30 Tagen.
---

# Papierkorb

Der **Papierkorb** sammelt vorübergehend gelöschte [Artikel](../artikel/artikel.md), [Kategorien](../kategorien/kategorien.md) und [Decoder](../decoder/decoder.md).
So können Sie versehentliches Löschen rückgängig machen, solange die Aufbewahrungsfrist noch läuft.

:::info Züge und Kompositionen

[Gelöschte Züge](../zuege/zuege.md) erscheinen **nicht** im Papierkorb und können dort nicht wiederhergestellt werden.

:::

## Aufbau der Seite

Der Papierkorb ist in **drei Bereiche** unterteilt (Registerkarten):

1. **Artikel** mit Hersteller und Artikelnummer
2. **Kategorien** mit dem Namen der Kategorie
3. **Decoder** mit Hersteller und Modell

Pro Zeile sehen Sie, **wann** der Eintrag gelöscht wurde, und wie viele **Tage bis zur endgültigen Löschung** noch offen sind (Zählung auf ganze Tage, mindestens „0 Tage“, wenn die Frist bereits am laufenden Tag endet).

Die Listen lassen sich **sortieren** und sind **seitenweise** durchblätterbar, wenn sehr viele Einträge im Papierkorb liegen.

## Wiederherstellung

- Wählen Sie bei einem Eintrag **Wiederherstellen**.
- Es erscheint eine **Rückfrage**, ob Sie diesen Eintrag wirklich wiederherstellen möchten.
- Nach der Bestätigung ist der Eintrag wieder aktiv: Er erscheint wieder in den Listen und Formularen des passenden Bereichs, wie vor dem Löschen, sofern keine anderen Regeln dagegenhalten (etwa Kategorien mit noch zugeordneten Artikeln).

Bei **erfolgreicher** Wiederherstellung zeigt die Anwendung eine **Erfolgsmeldung**.

Es gibt **keine** Schaltfläche, um Einträge aus dem Papierkorb sofort **endgültig** zu löschen. Die endgültige Entfernung erfolgt **automatisch** nach Ablauf der Frist (siehe nächster Abschnitt).

## Endgültige Löschung und 30-Tage-Frist

Die Aufbewahrungsfrist beträgt **30 Tage** ab dem Zeitpunkt des Löschens.

- **Innerhalb dieser Frist** können Sie die Einträge im Papierkorb sehen und wiederherstellen.
- **Nach Ablauf** werden sie im Hintergrund endgültig entfernt und sind **nicht** mehr verfügbar. Sie erscheinen dann auch nicht mehr in der Papierkorb-Ansicht.

Wenn in einem Bereich **nichts** mehr im gültigen Zeitraum liegt, zeigt die Tabelle einen **Hinweis**, dass keine gelöschten Einträge in den letzten 30 Tagen vorhanden sind (je nach Bereich für Artikel, Kategorien oder Decoder).

:::note Artikel und Bilder

Wird ein Artikel endgültig entfernt, werden die dazu gehörenden **gespeicherten Artikelbilder** (Darstellung Haupt- und gegebenenfalls gespiegelte Ansicht) mitbereinigt.

:::

## Fehler beim Laden oder Wiederherstellen

Treten beim **Laden des Papierkorbs** oder bei der **Wiederherstellung** technische Probleme auf, erscheint eine **allgemeine Fehlermeldung**.

In dem Fall später erneut versuchen. Wiederholt fehlgeschlagene Aktionen lohnen einen erneuten Seitenaufruf oder Zugriff zu einem anderen Zeitpunkt.

## Was nicht im Papierkorb liegt

Neben Zügen (siehe oben) gilt: Alles andere, was beim Löschen **direkt** entfernt wird und den Papierkorb **nicht** passiert, ist dort nicht sichtbar. Nur Artikel, Kategorien und Decoder nutzen diese weiche Löschung samt Papierkorb.
