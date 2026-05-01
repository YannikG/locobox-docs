> **Skill-Sprache:** Nutzerdoku auf Deutsch, **Schweizer Orthographie** (ä, ö, ü; ss statt scharfes S).

# Interner Stack (nur für den Agenten)

Dieses Dokument dient **nur** dem Verständnis von `../locobox2`. **In keiner** Markdown-Datei unter `docs/` dürfen die folgenden Technologien, Bibliotheken oder Implementierungsdetails genannt oder erklärt werden, **ausser** die App zeigt denselben Wortlaut explizit der Nutzerin (z. B. sichtbarer Button-Text).

| Intern (Orientierung) | Thema | In der Nutzerdoku stattdessen |
|------------------------|--------|-------------------------------|
| **Auth0** | Anmeldung, Session, Social-Login | Konto, anmelden, abmelden, Passwort, «Mit … anmelden» nur wie beschriftet |
| **Stripe** | Checkout, Abos, Rechnungen | Zahlung, Abo wechseln, Rechnung herunterladen, Preis wie in der UI |
| **Supabase** | Daten, Speicher, Echtzeit | Was Nutzer in Listen/Formularen sieht und speichert, ohne Backend-Begriffe |
| **Angular** | Routen, Komponenten | Menüs, Seiten, Abläufe wie in der Oberfläche |

**Regel:** Nutzerinnen und Nutzer interessiert die **Funktionalität**, nicht die technische Umsetzung. Keine Architektur, keine «wie wir es bauen», keine SDK-Namen, keine URLs aus dem Entwicklerstack in Nutzerseiten.

## Pfade (Agent)

| Teil | Ort |
|------|-----|
| Doku | `locobox-docs`: `docs/`, `sidebars.ts`, `docusaurus.config.ts` |
| App | `../locobox2` relativ zu `locobox-docs` |

## Docusaurus (Agent)

- Doc-IDs, Sidebars, `npm start` / `npm run build`, `onBrokenLinks` wie im Projekt üblich.
