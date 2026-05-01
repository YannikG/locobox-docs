# Phase 2: Was die App tut (nur für die Doku formulieren)

Quelle ist **`../locobox2`** und die **laufende Oberfläche**. Ziel ist eine **reine Funktionsbeschreibung** für Endnutzerinnen und Endnutzer.

## Harte Regel (Nutzerdoku)

- **Nicht** schreiben über: Auth0, Stripe, Supabase, Angular, APIs, Datenbanken, Services, Libraries, Deployment, Code, Dateistruktur, «wie es technisch funktioniert».
- **Schreiben** über: was man in der App **sieht**, **anklickt**, **eingibt**, **welches Ergebnis** entsteht, **welche Rollen oder Einschränkungen** aus Nutzersicht gelten.
- **Ausnahme:** exakt der Text, der **in der UI** steht (z. B. Schaltflächenbeschriftung), darf übernommen werden.

## Konto und Zugang (intern z. B. Auth0)

Aus Routen, Screens und Beschriftungen ableiten, **ohne** Anbieter zu nennen:

- Registrieren, anmelden, abmelden, Passwort zurücksetzen, Einladung annehmen  
- Social- oder Firmen-Login **nur** mit den Bezeichnungen aus der Oberfläche  

## Zahlungen und Abos (intern z. B. Stripe)

Nur **Nutzerhandlungen und sichtbare Ergebnisse**:

- Abo wählen oder wechseln, Zahlungsmittel erfassen, Rechnung oder Beleg  
- Was nach erfolgreicher oder fehlgeschlagener Zahlung in der App passiert (Meldungen wie in der UI)

## Daten und Inhalte in der App (intern z. B. Supabase)

- Listen, Formulare, Uploads, «wird gespeichert», Sichtbarkeit von Daten **aus Nutzersicht**  
- **Keine** Tabellennamen, **keine** «API», **keine** Echtzeit-Technik, ausser die App nennt es selbst so gegenüber der Nutzerin

## Navigation und Features (Oberfläche)

- Menüs, Seitentitel, Schritte, die ein typischer Workflow braucht  
- Fehlermeldungen: **was sie für die Nutzerin bedeutet**, in einfachen Worten, ohne technische Ursache

## Optional: interne Spurensuche (nur Agent, nichts davon in `docs/` kopieren)

Wenn du den Code zur Orientierung brauchst, kannst du gezielt in `../locobox2` suchen (Routen, Texte). Alles, was du findest, **in Alltagssprache und App-Begriffen** umschreiben.

## Referenz im Skill

`.cursor/skills/user-manual-generator/reference/stack-hinweise.md`

## Nächste Phase

`.cursor/skills/user-manual-generator/phases/03-structure-planning.md`
