# Phase 1: Anforderungen und Discovery

> Pfade zu weiteren Skill-Dateien: immer unter `.cursor/skills/user-manual-generator/…` öffnen.

## Feste Annahmen (Locobox)

- **Produkt:** **SaaS** im Browser. Die Doku beschreibt **nur Funktionalität**: was Nutzerinnen und Nutzer tun können und was sie dabei sehen, **ohne** technische Implementierung (keine Anbieter- oder Stack-Namen in `docs/`, ausser wörtlich in der UI).
- **App-Code:** `../locobox2` (von der Wurzel von `locobox-docs` aus). **Intern** u. a. Angular-Oberfläche, Auth0 für Authentifizierung, Stripe für Zahlungen, Supabase für Daten; das dient **dir als Agent** zur Orientierung, **nicht** dem Wortlaut der Nutzerdoku.
- **Doku:** dieses Repo, **Docusaurus**, Stil und Sprache wie in `docusaurus.config.ts` (bei euch typisch `de`).

## Rückfragen (kurz)

- Zielgruppe, Priorität der Features, Schnellstart ja/nein  
- Welche Sidebar-Kategorien in `sidebars.ts`  
- Medien (Screenshots): wer liefert sie  

## Orientierung in `../locobox2`

```bash
ls -la ../locobox2/package.json ../locobox2/angular.json 2>/dev/null
```

**Was du suchst (alles später in Nutzersprache ausdrücken):**

- sichtbare **Bereiche und Abläufe** (Navigation, Formulare, Zahlungs- und Kontoseiten)  
- **Texte und Meldungen**, die Nutzer sehen  
- **keine** Übernahme von Codebegriffen, URLs, Bibliotheksnamen in die Doku  

**Doku-Repo:** `docs/`, `sidebars.ts`, bestehende Struktur beachten.

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/02-feature-extraction.md`
