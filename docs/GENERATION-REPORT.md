---
id: generation-report
title: Bericht Doku-Stand
description: Letzter Prüfdurchlauf Nutzerhandbuch-Workflow (Skill user-manual-generator).
unlisted: true
---

# Bericht: Doku-Update

**Datum:** 19. Juli 2026  
**Quelle:** App `../locobox2` (Journeys, Specs, Komponenten, `public/i18n/de-CH.json`), Doku-Repo locobox-docs  
**Build:** `npm run build` (Ergebnis: ok)

## Neu oder geändert (im Rahmen dieses Durchlaufs)

- **Neu:** `docs/artikel/artikel-labels.md`, `docs/artikel/artikel-sets.md`, `docs/artikel/artikel-externer-import.md`
- **Flächendeckender Abgleich** aller Nutzerseiten gegen i18n und Journeys: Menüpfade (**Sammlung**, **Drucken**, Benutzermenü), exakte Schaltflächen/Meldungen, fehlende Flows
- **Papierkorb:** vier Register inkl. **Artikelsets**, Badge im Benutzermenü
- **Drucken:** Adressliste gratis; QR Code Raster, Verkaufsliste, Bestandsliste Premium
- **Premium/Limits:** Artikelsets in den Gratisgrenzen
- **Sidebars:** Labels unter Artikel ergänzt

## Geprüfte Nutzer-Themen

- Einstieg, Übersicht, Artikel (inkl. Sets/Labels/Import), Kategorien, Züge, Decoder, Drucken, Premium, Einstellungen, Papierkorb
- UI-Wortlaut gegen `de-CH.json` verifiziert; erfundene Labels entfernt oder durch exakte Strings ersetzt

## Vertrauen

**mittel bis hoch:** Inhalt gegen Repo-i18n, Journeys und Komponenten geprüft. Live-App wurde nicht klickweise durchgespielt. Screenshots fehlen weiterhin (siehe `docs/TODO.md`).

## Offenes

Siehe `docs/TODO.md` (Screenshots, visueller UI-Faktencheck nach Releases).

## Nächste Schritte

1. `npm start`: Seiten gegenlesen  
2. `npm run build`: muss grün bleiben  
3. Deployment nach eurem üblichen Prozess (CI, Pages, oder gleichwertig)
