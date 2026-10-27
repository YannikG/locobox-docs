---
sidebar_position: 5
id: globale-suche
title: Globale Suche
description: Zentrale Suche über Artikel, Kategorien, Decoder und Züge inklusive Tastatursteuerung.
---

# Globale Suche

Die **Globale Suche** stellt ein zentrales Suchfenster bereit. Die Abfrage durchsucht [Artikel](../artikel/artikel.md), [Kategorien](../kategorien/kategorien.md), [Decoder](../decoder/decoder.md) und [Züge](../zuege/zuege.md) parallel an einer Stelle. Einträge im [Papierkorb](../papierkorb/papierkorb.md) sind von den Suchergebnissen ausgenommen.

Der Platzhalter im Eingabefeld lautet: «Suche über Artikel, Kategorien, Decoder und Züge...».

![Geöffneter Suchdialog mit Eingabefeld und gemischter Trefferliste](/img/handbuch/generelles/globale-suche.webp)

## Öffnen und Schliessen der Suche

**Tastaturkürzel (Öffnen und Schliessen):**

- macOS: `Cmd + K`
- Windows und Linux: `Ctrl + K`

Auf breiteren Bildschirmen zeigt die Symbolleiste neben dem Eingabefeld das systemspezifische Tastenkürzel an.

**Über die Symbolleiste:**

- Auf grossen Bildschirmen: Eingabefeld mit dem Platzhalter «Global suchen...». Sobald dieses Feld den Fokus erhält, öffnet sich der Suchdialog mit dem aktuellen Suchbegriff. Ein Klick auf das Lupensymbol **Suchen** öffnet den Dialog ebenfalls.
- Auf kompakten Bildschirmen: Klick auf das Lupensymbol **Suchen** in der Symbolleiste.

Der Suchtext in der Symbolleiste und im Suchdialog bleibt beim Wechsel synchron.

**Schliessen des Dialogs:**

- Taste `Esc`
- Klick auf das Schliesssymbol im Dialogfenster
- Klick ausserhalb des Dialogs in den abgedunkelten Hintergrund
- Erneutes Drücken von `Cmd + K` beziehungsweise `Ctrl + K`

Beim Schliessen bleibt der eingegebene Text in der Symbolleiste hinterlegt. Bei erneutem Öffnen ohne Textänderung stehen die bisherigen Treffer ohne erneuten Suchlauf wieder bereit.

## Suchergebnisse und Grenzen

- Pro Abfrage erscheinen **maximal zehn** Treffer. Liegen mehr passende Datensätze vor, wird die Liste begrenzt.
- Die Suche startet, sobald **mindestens ein sichtbares Zeichen** im Eingabefeld steht. Reine Leerzeichen lösen keine Suche aus. Ohne Eingabe erscheint die Aufforderung «Tippen Sie, um zu suchen...».
- Während der Abfrage wird «Suche läuft...» eingeblendet. Bei ausbleibenden Treffern erscheint «Keine passenden Ergebnisse gefunden.». Bei einem Verbindungs- oder Serverproblem meldet das System «Die Suche ist fehlgeschlagen. Bitte versuchen Sie es erneut.».

Die Ergebnisliste ist nach Datensatztyp gemischt. Jeder Eintrag trägt eine Kennzeichnung mit **Artikel**, **Kategorie**, **Decoder** oder **Zug**.

**Verhalten beim Öffnen eines Treffers:**

- **Artikel:** Öffnet die Artikel-Detailansicht.
- **Decoder:** Öffnet die Decoder-Detailansicht.
- **Zug:** Öffnet die Zug-Detailansicht.
- **Kategorie:** Wechselt zur [Artikelliste](../artikel/artikel-liste.md) mit aktivem Filter auf diese Kategorie.

Artikelkarten können Vorschaubilder sowie konfigurierbare Zusatzangaben enthalten, beispielsweise **Kaufdatum**, **Kaufpreis**, **Verkaufsdatum** oder **Verkaufspreis**. Ergänzend lässt sich eine Verkauft-Markierung auf dem Bild aktivieren. Diese Darstellungsoptionen lassen sich unter [Anzeigeeinstellungen](../einstellungen/anzeigeeinstellungen.md) im Abschnitt **Globale Suche Anzeige Einstellungen** verwalten.

## Tastatursteuerung in der Ergebnisliste

- **Pfeiltaste ab / auf:** Navigiert durch die Trefferliste. Unmittelbar nach dem Öffnen ist kein Treffer vorausgewählt. Die Hervorhebung setzt mit dem ersten Tastendruck oder beim manuellen Fokussieren ein.
- **Enter:** Öffnet den aktuell markierten Treffer. Ist kein Eintrag markiert, öffnet sich der oberste Treffer der Liste.
