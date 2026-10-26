---
id: generation-report
title: Bericht Doku-Stand
description: Letzter Prüfdurchlauf Nutzerhandbuch-Workflow (Skill user-manual-generator).
unlisted: true
---

# Bericht: Doku-Update

**Datum:** 26. Oktober 2026  
**Quelle:** App `../locobox2` **v2.1.0** (`4ea3cfa4`, Tag 2026-10-18), Journeys, Specs, `public/i18n/de-CH.json`  
**Nicht als Quelle:** Feature-Branch-Tip nach dem Tag (u. a. globale Suche nach Artikelsets).  
**Build:** nach inhaltlichem Nachzug prüfen mit `npm run build`

## Versionspin

| Was | Wert |
| --- | --- |
| Dokumentierter Release | **v2.1.0** |
| Commit (Tag) | `4ea3cfa4` |
| Vorheriger Pin | v2.0.0 (`f142f096`, 2026-09-08) |

## Gap-Scan v2.0.0 → v2.1.0 (Inhalt noch nachziehen)

Nutzerrelevante Änderungen im Release, Handbuch noch auf v2.0.0-Stand:

- **Züge:** Modul-Overhaul (Karten, Zugangaben, Name sperren/freigeben, Lean-Filter, LüP)
- **Papierkorb:** Züge soft-delete + Wiederherstellen (Handbuch sagt fälschlich «endgültig»)
- **Premium:** Abrechnung **monatlich** / **jährlich**, Intervallwechsel im Portal
- **Massenbearbeitung:** Kategorien im Gratisplan; Labels weiter Premium; Hinweistext veraltet
- **Artikelliste:** Autocomplete-Filter für Lager Standort / Regal / Schachtel
- **Eingebettete Tabellen:** Kategorienamen (Zug, Übersicht, Decoder)
- **Sonstiges (klein):** Not-found-Seite, PWA-Install Doppelklick-Fix, Datenqualität Premium/Grace

Details und Status: `REWRITE-INVENTORY.md`. Arbeitsliste: `docs/TODO.md`.

## Geprüft (dieser Durchlauf)

- Nur Diff/Journeys/`de-CH.json` zwischen Tags `v2.0.0` und `v2.1.0`
- Kein Live-Klickdurchlauf, keine Feature-Branch-Commits nach dem Tag

## Vertrauen

**niedrig bis mittel** für Züge, Papierkorb, Premium und Massenbearbeitung (Inhalt hinter Release). Übrige Cluster unverändert zum v2.0.0-Nachzug.

## Offenes

Siehe `docs/TODO.md` (v2.1.0-Nachzug, Screenshots). Collection-Charts auf der Übersicht erst dokumentieren, wenn die UI im Release ist.
