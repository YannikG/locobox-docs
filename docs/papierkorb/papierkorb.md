---
id: papierkorb
title: Papierkorb
description: Gelöschte Artikel, Kategorien, Decoder und Artikelsets ansehen, Frist und Wiederherstellung, automatische endgültige Löschung nach 30 Tagen.
---

# Papierkorb

Der **Papierkorb** sammelt vorübergehend gelöschte [Artikel](../artikel/artikel.md), [Kategorien](../kategorien/kategorien.md), [Decoder](../decoder/decoder.md) und [Artikelsets](../artikel/artikel-sets.md).
So können Sie versehentliches Löschen rückgängig machen, solange die Aufbewahrungsfrist noch läuft.

**Wo:** Über das **Benutzermenü** (Profilbild oben rechts) → **Papierkorb**. Liegen gelöschte Einträge im Papierkorb, erscheint neben dem Eintrag **Papierkorb** ein rotes **Badge** mit der Gesamtzahl. Nach dem Wiederherstellen aller Einträge verschwindet das Badge wieder.

:::info Züge und Kompositionen

[Gelöschte Züge](../zuege/zuege.md) erscheinen **nicht** im Papierkorb und können dort nicht wiederhergestellt werden.

:::

## Aufbau der Seite

{/* SCREENSHOT_TODO /img/handbuch/papierkorb/papierkorb-register.png : Papierkorb mit den vier Registern und dem roten Badge (Gesamtzahl) am Menüeintrag */}

Der Papierkorb ist in **vier Register** unterteilt:

1. **Artikel**
2. **Kategorien**
3. **Decoder**
4. **Artikelsets**

Pro Zeile sehen Sie unter **Gelöscht am**, wann der Eintrag gelöscht wurde, und unter **Tage bis zur endgültigen Löschung**, wie viele Tage noch offen sind (Anzeige z. B. «12 Tage»).

Die Listen lassen sich **sortieren** und sind **seitenweise** durchblätterbar, wenn sehr viele Einträge im Papierkorb liegen.

## Wiederherstellung

- Wählen Sie bei einem Eintrag **Wiederherstellen**.
- Es erscheint die Rückfrage «Möchten Sie diesen Eintrag wiederherstellen?».
- Nach der Bestätigung ist der Eintrag wieder aktiv und erscheint wieder in den Listen und Formularen des passenden Bereichs. Bei einem wiederhergestellten Artikelset sind auch die zuvor verknüpften Artikel erneut zugeordnet.

Bei erfolgreicher Wiederherstellung erscheint die Meldung «Eintrag erfolgreich wiederhergestellt.».

Es gibt **keine** Schaltfläche, um Einträge aus dem Papierkorb sofort **endgültig** zu löschen. Die endgültige Entfernung erfolgt **automatisch** nach Ablauf der Frist (siehe nächster Abschnitt).

## Endgültige Löschung und 30-Tage-Frist

Die Aufbewahrungsfrist beträgt **30 Tage** ab dem Zeitpunkt des Löschens.

- **Innerhalb dieser Frist** können Sie die Einträge im Papierkorb sehen und wiederherstellen.
- **Nach Ablauf** werden sie im Hintergrund endgültig entfernt und sind **nicht** mehr verfügbar. Sie erscheinen dann auch nicht mehr in der Papierkorb-Ansicht.

Wenn in einem Register nichts mehr im gültigen Zeitraum liegt, erscheint ein Hinweis wie «Keine gelöschten Artikel in den letzten 30 Tagen.» (je nach Register für Artikel, Kategorien, Decoder oder Artikelsets).

:::note Artikel und Bilder

Wird ein Artikel endgültig entfernt, werden die dazu gehörenden **gespeicherten Artikelbilder** (Darstellung Haupt- und gegebenenfalls gespiegelte Ansicht) mitbereinigt.

:::

## Fehler beim Laden oder Wiederherstellen

Treten beim **Laden des Papierkorbs** oder bei der **Wiederherstellung** technische Probleme auf, erscheint eine **allgemeine Fehlermeldung**.

In dem Fall später erneut versuchen. Wiederholt fehlgeschlagene Aktionen lohnen einen erneuten Seitenaufruf oder Zugriff zu einem anderen Zeitpunkt.

## Was nicht im Papierkorb liegt

Neben Zügen (siehe oben) gilt: Alles andere, was beim Löschen **direkt** entfernt wird und den Papierkorb **nicht** passiert, ist dort nicht sichtbar. Nur Artikel, Kategorien, Decoder und Artikelsets nutzen diese weiche Löschung samt Papierkorb.
