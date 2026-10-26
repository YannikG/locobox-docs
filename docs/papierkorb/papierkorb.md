---
id: papierkorb
title: Papierkorb
description: Gelöschte Artikel, Kategorien, Decoder, Artikelsets und Züge einsehen, Fristen prüfen und Daten reaktivieren.
---

# Papierkorb

Der **Papierkorb** nimmt temporär gelöschte [Artikel](../artikel/artikel.md), [Kategorien](../kategorien/kategorien.md), [Decoder](../decoder/decoder.md), [Artikelsets](../artikel/artikel-sets.md) und [Züge](../zuege/zuege.md) auf.
Versehentlich entfernte Einträge lassen sich innerhalb der Aufbewahrungsfrist wiederherstellen.

**Navigation:** **Benutzermenü** (Profilsymbol oben rechts) → **Papierkorb**. Liegen Objekte im Papierkorb, zeigt ein rotes Kennzeichen am Menüeintrag die **Gesamtzahl** (inkl. Züge). Nach Leerung oder vollständiger Reaktivierung verschwindet das Kennzeichen.

## Struktur der Übersicht

{/* SCREENSHOT_TODO /img/handbuch/papierkorb/papierkorb-register.webp : Papierkorb mit fünf Registern inkl. Züge und Badge mit Gesamtzahl */}

Der Papierkorb gliedert sich in **fünf Register**:

1. **Artikel**
2. **Kategorien**
3. **Decoder**
4. **Artikelsets**
5. **Züge**

In jeder Tabellenzeile stehen **Gelöscht am** sowie **Tage bis zur endgültigen Löschung** (beispielsweise «12 Tage»).

Die Tabellen lassen sich nach Spalten sortieren und bei grösseren Mengen durchblättern.

## Wiederherstellung

- Bei einem gelöschten Eintrag die Zeilenaktion **Wiederherstellen** wählen.
- Die Abfrage «Möchten Sie diesen Eintrag wiederherstellen?» bestätigen.
- Der Datensatz erscheint wieder in den aktiven Listen. Bei Artikelsets werden Verknüpfungen zu Artikeln mithergestellt; wiederhergestellte Züge sind erneut unter [Züge](../zuege/zuege.md) sichtbar.

Erfolgshinweis: «Eintrag erfolgreich wiederhergestellt.».

Eine manuelle Sofortlöschung gibt es nicht. Die endgültige Bereinigung läuft automatisch nach Ablauf der Frist.

## Aufbewahrungsfrist von 30 Tagen

Die Frist beträgt **30 Tage** ab dem Löschzeitpunkt.

- **Während der Frist:** Einträge sind im Papierkorb und jederzeit reaktivierbar.
- **Nach Fristablauf:** unwiderrufliche Entfernung aus Datenbestand und Anzeige.

Leere Register zeigen einen Hinweis wie «Keine gelöschten Artikel in den letzten 30 Tagen.» (sinngemäss je Register).

:::note Verknüpfte Bilder

Mit der endgültigen Bereinigung eines Artikels werden auch die zugehörigen Bilddateien (Haupt- und gespiegelte Ansicht) dauerhaft entfernt.

:::

## Fehlerbehandlung

Bei Netzwerkproblemen beim Laden oder Wiederherstellen erscheint eine Fehlermeldung. Kurze Pause und erneuter Versuch helfen in der Regel.

## Abgrenzung

Artikel, Kategorien, Decoder, Artikelsets und Züge nutzen die zweistufige Löschung über den Papierkorb. Soft-gelöschte Einträge erscheinen nicht in der [globalen Suche](../generelles/globale-suche.md) und nicht in den normalen Auswahllisten.
