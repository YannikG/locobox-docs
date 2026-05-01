> **Skill-Sprache:** Nutzerdoku auf Deutsch, **Schweizer Orthographie** (ä, ö, ü; ss statt scharfes S).

# Docusaurus in locobox-docs

**locobox-docs** nutzt bereits Docusaurus 3. Kein zweites Projekt mit `create-docusaurus` anlegen: bestehende Site **erweitern**.

## Neue Dokumentationsseite

1. Datei unter `docs/<bereich>/<name>.md` anlegen (Frontmatter nur wenn ihr es im Projekt üblich nutzt).
2. In `sidebars.ts` die Doc-ID eintragen (Pfad ohne Endung, z. B. `decoder/decoder-neu`).
3. `npm start` und Seite prüfen; `npm run build` muss ohne Fehler durchlaufen (`onBrokenLinks`).

## Typische Dateien

- `docusaurus.config.ts`: Titel, URL, `i18n`, Preset `classic`, `docs.sidebarPath`
- `sidebars.ts`: mehrere Sidebars möglich, Kategorien mit `label` und `items`
- `src/css/custom.css`: Theme-Anpassungen

## Navbar / Footer

Anpassungen nur, wenn der Nutzer es verlangt; sonst bestehende Konfiguration beibehalten.

## Deployment

Build-Ausgabe wie in eurem Projekt konfiguriert (häufig Ordner `build` oder `dist`). CI/GitHub Pages nur nach bestehenden Projektregeln, nichts generisch erfinden.
