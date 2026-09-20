# Google-Bewertungen: eigene Automatik (ohne WordPress-Plugin)

Ziel: Sterne, Anzahl und Rezensionstexte kommen **automatisch alle zwei Wochen**
von Google ins Repo, ganz ohne WordPress-Widget. Alles bleibt statisches HTML.

## Bausteine
- `data/reviews.json` — die Datenquelle (Rating, Anzahl, Rezensionen, Stand).
- `tools/update-reviews.mjs` — holt die Daten von DataForSEO und spielt sie in die Seiten ein.
- `.github/workflows/update-reviews.yml` — GitHub Action, laeuft am 1. und 15. jedes Monats (~alle 2 Wochen) und committet die Aenderungen selbst.

## Was das Skript in die Seiten schreibt
- **Rezensions-Slider** zwischen den Markern `<!--REVIEWS_START-->` /
  `<!--REVIEWS_END-->` (eine `.quote`-Karte je Rezension). Welche Seiten einen
  Slider bekommen und mit welchem Ausschnitt, steht in `SLIDER_SPECS` in
  `tools/update-reviews.mjs`: `kurierdienst.html` zeigt den vollen Satz, die
  Branchen-/Money-Pages je eine **rotierte Auswahl** (eigener `offset`), damit
  nicht ueberall dieselben Stimmen stehen.
- **Bewertungs-Anzahl** auf allen Seiten der `PAGES`-Liste: `"<n> Bewertungen"`,
  `"Alle <n> auf Google"`.
- **JSON-LD**: `reviewCount` und `ratingValue` (wo vorhanden).
- **Score-Karten-Rating**: `<span class="num" data-rating>`.

Die Anzahl aendert sich also nie wieder von Hand (aktuell z. B. 49 -> 64). Der
Workflow committet alle geaenderten Seiten (`git add data/reviews.json pages`).

### Neue Seite in die Rotation aufnehmen
1. Review-Modul einbauen und die Karten mit `<!--REVIEWS_START-->` /
   `<!--REVIEWS_END-->` umschliessen.
2. Basenamen in die `PAGES`-Liste aufnehmen (fuer die Zahl-Aktualisierung).
3. Fuer einen eigenen Slider einen Eintrag in `SLIDER_SPECS` mit `offset`/`count`
   ergaenzen.

## Einmalige Einrichtung (GitHub)
Repo -> **Settings -> Secrets and variables -> Actions -> New repository secret**:
- `DATAFORSEO_LOGIN` — DataForSEO-API-Login
- `DATAFORSEO_PASSWORD` — DataForSEO-API-Passwort

Danach laeuft die Action automatisch. Manuell testen: Tab **Actions ->
"Google-Bewertungen aktualisieren" -> Run workflow**.

## Lokal ausfuehren
```bash
# nur Injektion aus data/reviews.json (kein API-Zugriff, kein Login noetig)
node tools/update-reviews.mjs --inject-only

# echter Abruf + Injektion (Login noetig)
DATAFORSEO_LOGIN=... DATAFORSEO_PASSWORD=... node tools/update-reviews.mjs
```

## Konfiguration in `data/reviews.json`
- `place_id` / `cid` — Google-Business-Profil von Reinwald (bereits gesetzt).
- `max_reviews` — wie viele Rezensionen im Slider erscheinen (Default 8).
- `min_chars` — Mindestlaenge, damit nur aussagekraeftige Rezensionen einlaufen.
- Nur Rezensionen mit 4-5 Sternen werden uebernommen.

## Hinweise
- Es werden **nur echte** Google-Rezensionen uebernommen, nichts erfunden.
- Faellt der Abruf mal aus, bleibt der letzte Stand aus `data/reviews.json` erhalten.
- Datenquelle ist die DataForSEO Business-Data-API (Endpoint `business_data/google/reviews`).
