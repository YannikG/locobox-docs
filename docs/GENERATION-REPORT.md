---
id: generation-report
title: Bericht Doku-Stand
description: Letzter Prüfdurchlauf Nutzerhandbuch-Workflow (Skill user-manual-generator).
unlisted: true
---

# Bericht: Doku-Update

**Datum:** 9. September 2026  
**Quelle:** App `../locobox2` v2.0.0 (`f142f096`), Journeys, Specs, `public/i18n/de-CH.json`  
**Build:** nach inhaltlichem Nachzug prüfen mit `npm run build`

## Neu oder geändert (dieser Durchlauf)

- **Neu:** `docs/generelles/app-installieren.md` (Ersteinrichtung + Benutzermenü, Browser-Unterschiede)
- **Übersicht:** Monatsaktivität unter **Artikel im Bestand**, Register **Datenqualität** (Gratis- und Premium-Problemtypen)
- **Drucken-Hub:** Schaltfläche **Erstellen**, Kartenbeschreibungen an App angeglichen
- **Erste Schritte / Konto / Generelles / FAQ / Browser / Premium:** Install-Schritt und Verweise nachgezogen; Assistent endet mit **Einrichtung abschliessen**
- **Inventar:** auf locobox2 v2.0.0 aktualisiert; Collection-Charts Overview noch ausstehend (UI Phase 2+)

## Geprüfte Nutzer-Themen

- Einstieg inkl. App-Installation, Übersicht (drei Register), Drucken-Hub, Premium-Hinweise
- UI-Wortlaut gegen `de-CH.json` und Journeys `pwa-install`, `data-health-tab`, `dashboard`, `dashboard-overview-monthly-deltas`

## Vertrauen

**mittel bis hoch** für die geänderten Bereiche. Live-App nicht klickweise durchgespielt. Screenshots für Datenqualität und App-Installation fehlen noch (siehe `docs/TODO.md`).

## Offenes

Siehe `docs/TODO.md` (Screenshots, visueller UI-Faktencheck). Collection-Charts auf der Übersicht dokumentieren, sobald die UI ausgeliefert ist.
