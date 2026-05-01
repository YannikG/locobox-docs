# Phase 6: Qualitätssicherung (Docusaurus)

## Inhalt

- [ ] neue Seiten decken die geplanten Nutzeraufgaben ab
- [ ] keine Secrets in `docs/`
- [ ] keine technischen Implementierungsdetails und keine Stack- oder Anbieternamen (nur UI-Wortlaut, wo nötig)
- [ ] Sprache und Anrede konsistent zum bestehenden Handbuch

## Technisch

```bash
find docs -name "*.md" | sort
grep -r "\[.*\](.*\.md)" docs/ || true
```

- interne Links und Doc-IDs stimmen (Docusaurus `onBrokenLinks`).
- Keine unnötigen Terminal- oder Code-Blöcke; nur was Endnutzer wirklich sehen (Ausnahme: z. B. eine URL).

## Barrierefreiheit (Basis)

- Alternativtexte für neue Bilder
- Überschriftenhierarchie
- Linktexte aussagekräftig

## Build

```bash
npm run build
```

Fehler beheben.

## `docs/TODO.md`

Manuelle Restarbeit (Screenshots, Faktenprüfung) festhalten.

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/07-handoff.md`
