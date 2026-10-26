---
id: papierkorb
title: Papierkorb
description: Gelöschte Artikel, Kategorien, Decoder und Artikelsets einsehen, Fristen prüfen und Daten reaktivieren.
---

# Papierkorb

Der **Papierkorb** nimmt temporär gelöschte [Artikel](../artikel/artikel.md), [Kategorien](../kategorien/kategorien.md), [Decoder](../decoder/decoder.md) und [Artikelsets](../artikel/artikel-sets.md) auf.
Dies ermöglicht die Wiederherstellung versehentlich entfernter Daten innerhalb der Aufbewahrungsfrist.

**Navigation:** Über das **Benutzermenü** (Profilsymbol oben rechts) → **Papierkorb**. Befinden sich Objekte im Papierkorb, weist ein rotes Kennzeichen am Menüeintrag die Gesamtzahl aus. Nach Leerung oder vollständiger Reaktivierung wird das Kennzeichen ausgeblendet.

:::info Züge und Kompositionen

[Gelöschte Züge](../zuege/zuege.md) werden **nicht** in den Papierkorb überführt und können nachträglich nicht wiederhergestellt werden.

:::

## Struktur der Übersicht

![Papierkorb mit den vier Registern und dem roten Badge (Gesamtzahl) am Menüeintrag](/img/handbuch/papierkorb/papierkorb-register.webp)

Der Papierkorb gliedert sich in **vier Register**:

1. **Artikel**
2. **Kategorien**
3. **Decoder**
4. **Artikelsets**

In jeder Tabellenzeile sind das Löschdatum unter **Gelöscht am** sowie die Frist unter **Tage bis zur endgültigen Löschung** ersichtlich (beispielsweise «12 Tage»).

Die Tabellen lassen sich nach Spalten sortieren und bei grösseren Datenmengen paginiert durchblättern.

## Wiederherstellung

- Bei einem gelöschten Eintrag die Zeilenaktion **Wiederherstellen** anwählen.
- Die Sicherheitsabfrage «Möchten Sie diesen Eintrag wiederherstellen?» bestätigen.
- Der Datensatz wird daraufhin reaktiviert und in den jeweiligen Modulen wieder geführt. Bei reaktivierten Artikelsets werden bestehende Verknüpfungen zu Artikeln automatisch wiederhergestellt.

Bei erfolgreicher Durchführung meldet die Anwendung «Eintrag erfolgreich wiederhergestellt.».

Eine manuelle Funktion zur sofortigen endgültigen Löschung existiert nicht. Die Bereinigung erfolgt vollautomatisch nach Ablauf der definierten Aufbewahrungsfrist.

## Aufbewahrungsfrist von 30 Tagen

Die Aufbewahrungsfrist beträgt **30 Tage** ab dem Löschzeitpunkt.

- **Während der Frist:** Alle Einträge sind im Papierkorb aufgeführt und können jederzeit reaktiviert werden.
- **Nach Fristablauf:** Die Datensätze werden unwiderruflich aus der Datenbank gelöscht und aus der Anzeige entfernt.

Liegen in einem Register keine gelöschten Objekte vor, erscheint ein entsprechender Leerstufenhinweis wie «Keine gelöschten Artikel in den letzten 30 Tagen.».

:::note Verknüpfte Bilder

Mit der endgültigen Bereinigung eines Artikels werden auch die zugehörigen Bilddateien (Haupt- und gespiegelte Ansicht) dauerhaft vom Speichermedium entfernt.

:::

## Fehlerbehandlung

Treten beim Laden der Listen oder während eines Wiederherstellungsvorgangs Netzwerkprobleme auf, gibt die Anwendung eine Fehlermeldung aus. In diesem Fall empfiehlt sich ein erneuter Ladeversuch nach kurzer Wartezeit.

## Abgrenzung

Ausschliesslich Artikel, Kategorien, Decoder und Artikelsets nutzen die zweistufige Löschung über den Papierkorb. Andere Datenobjekte (wie Züge) werden bei Löschung unmittelbar endgültig entfernt.
