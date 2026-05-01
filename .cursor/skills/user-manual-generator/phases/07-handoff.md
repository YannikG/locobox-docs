# Phase 7: Übergabe

## `docs/GENERATION-REPORT.md` (Vorlage)

```markdown
# Bericht: Doku-Update

**Datum:** …  
**Quelle:** App `../locobox2` (nur Orientierung), Doku-Repo locobox-docs  
**Build:** `npm run build` (Ergebnis: ok / mit Fehlern)

## Neu oder geändert

- Dateien: …
- Sidebars: …

## Geprüfte Nutzer-Themen

- Feature-Seiten: …  
- How-tos: …  
- Schnellstart: … (falls vorhanden)

## Vertrauen

- hoch / mittel / Review nötig (kurz begründen)

## Offenes

Siehe `docs/TODO.md` (Screenshots, Faktencheck).

## Nächste Schritte

1. `npm start` – Seiten gegenlesen  
2. `npm run build` – muss grün bleiben  
3. Deployment nach eurem üblichen Prozess (CI/Pages/…)
```

## Kurzmeldung an den Nutzer

- was in `docs/` und `sidebars.ts` geändert wurde  
- ob `npm run build` ok ist  
- was in `docs/TODO.md` für Menschen nachgezogen werden muss  
- Hinweis: in `docs/` keine Secrets, keine technische Implementierung, keine Anbieternamen ausser wörtlich aus der UI

## Ende

Workflow abgeschlossen, wenn Bericht (optional), TODO und kommunizierte nächste Schritte klar sind.
