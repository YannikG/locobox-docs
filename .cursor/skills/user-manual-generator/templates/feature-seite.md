> **Skill-Sprache:** SaaS-Nutzerdoku auf **Deutsch, Schweizer Orthographie** (ä, ö, ü; ss statt scharfes S). Nur **Funktionalität und Bedienung**. **Keine** technische Implementierung, keine Anbieter- oder Framework-Namen (Auth0, Stripe, Supabase, Angular usw.), ausser exakt so in der UI sichtbar.

# Vorlage: Feature (SaaS)

Eine Seite pro **sichtbarem Produktbereich** oder klar abgegrenzter Funktion (aus `../locobox2` ableiten: Route, Menü, Komponente).

---

```markdown
# [Feature-Name]

## Wozu es dient

[2–4 Sätze: welches Problem es für die Nutzerin oder den Nutzer löst, in welchem Kontext es vorkommt]

## Was du in der Oberfläche siehst

[Kurz die relevanten Bereiche, Felder, Listen, Schaltflächen benennen, Platzhalter für Screenshot möglich]

> **Screenshot nötig:** [was sichtbar sein soll], **Ort:** [Menü / Screenname]

## Was du tun kannst

- **[Aktion 1]:** [was passiert, welches Ergebnis]
- **[Aktion 2]:** …
- **[Aktion 3]:** …

[Beschreibung in der Reihenfolge, wie man typischerweise vorgeht: Klicks, Eingaben, Speichern, ohne Terminal]

## Typischer Ablauf (Beispiel)

1. [Schritt in der App, z. B. Menü öffnen]  
2. [z. B. Eintrag wählen oder Formular ausfüllen]  
3. [z. B. Speichern, was danach sichtbar ist]

## Grenzen oder Hinweise (optional)

[Nur wenn nötig: z. B. «nur mit Rolle X», «max. N Einträge», ohne technische Interna]

## Verwandte Themen

- [Link zu anderem Feature oder How-to]
```

---

## Hinweise zur Vorlage

- **Ein Feature pro Seite**; bei großen Bereichen in Unterabschnitte oder mehrere Seiten teilen.
- Formulierungen aus **Nutzerperspektive**: «du wählst …», «du siehst …», nicht «die Komponente rendert …».
- Keine API-Keys, keine Tabellen- oder Service-Namen aus dem Code, keine Stacktraces, keine Erklärung «wie es technisch gebaut ist».
