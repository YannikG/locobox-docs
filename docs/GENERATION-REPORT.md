---
id: generation-report
title: Bericht Doku-Stand
description: Letzter Prüfdurchlauf Nutzerhandbuch-Workflow (Skill user-manual-generator).
unlisted: true
---

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

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

## Nachzug 26.10.2026 (Züge + Papierkorb)

- `docs/zuege/zuege.md`, `zuege-komposition.md`, `papierkorb/papierkorb.md` an v2.1.0 angeglichen
- Screenshots nachgezogen: Züge (Liste/Formular/Detail), Papierkorb, Datenqualität (+ Leer), Artikel-/Set-/Decoder-Detail

## Noch offen (v2.1.0)

- **Premium:** Abrechnung **monatlich** / **jährlich**, Intervallwechsel im Portal
- **Massenbearbeitung:** Kategorien im Gratisplan; Labels weiter Premium; Hinweistext veraltet
- **Artikelliste:** Autocomplete-Filter für Lager Standort / Regal / Schachtel
- **Eingebettete Tabellen:** Kategorienamen (Übersicht, Decoder; Zug erwähnt)
- **Sonstiges (klein):** Not-found wo relevant, Datenqualität Premium/Grace

Details: `REWRITE-INVENTORY.md`. Arbeitsliste: `docs/TODO.md`.

## Geprüft (dieser Durchlauf)

- Journeys/Specs/`de-CH.json` am Tag `v2.1.0` für Züge und Papierkorb
- Kein Live-Klickdurchlauf, keine Feature-Branch-Commits nach dem Tag

## Vertrauen

**mittel** für Züge und Papierkorb (Text nachgezogen, Screenshots offen). **niedrig bis mittel** für Premium, Massenbearbeitung und Lager-Filter.

## Offenes

Siehe `docs/TODO.md` (v2.1.0-Nachzug, Screenshots). Collection-Charts auf der Übersicht erst dokumentieren, wenn die UI im Release ist.
