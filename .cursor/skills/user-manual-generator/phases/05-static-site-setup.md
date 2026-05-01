# Phase 5: Docusaurus einbinden

Nur **locobox-docs**: keine anderen Static-Site-Generatoren.

## Schritte

1. Neue oder geänderte Seiten unter `docs/` ablegen.
2. **`sidebars.ts`**: Doc-IDs eintragen, Kategorien/Labels auf Deutsch wie im Projekt üblich.
3. **`docusaurus.config.ts`**: nur bei Bedarf (z. B. Navbar); Standard nicht zerstören.
4. Details und Konventionen: `.cursor/skills/user-manual-generator/ssg/docusaurus.md`

## Lokal

```bash
npm start
npm run build
```

Build muss grün sein, bevor Phase 6 startet.

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/06-quality-assurance.md`
