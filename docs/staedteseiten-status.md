# Stadtseiten-Status (Stand 31.08.2026)

Quelle: Live `page-sitemap.xml`. **32 Stadtseiten online.** Slug-Muster `/kurierdienst-<stadt>/`, Datei `pages/kurierdienst-<stadt>.html`.

Vorlage: `referenz/stadtseite-paderborn.html` (aktualisiert = korrigiertes Paderborn als Fragment). Beim Neubau je Stadt: **Live-Text beibehalten**, nur DataForSEO-Feinschliff; alle Fixes anwenden (siehe unten); neuer Standortkarten-Hero.

## Fixes, die jede Stadtseite braucht (aus Paderborn-Vorlage)
1. `reviewCount` 49 -> **63** (JSON-LD) + Seite in `tools/update-reviews.mjs` PAGES.
2. Telefon-Emoji 📞 -> Inline-SVG `.ic-ph`.
3. Umlaut-URL `/transport-mit-hebebühne/` -> `/transport-mit-hebebuehne/`.
4. `/maschinentransporte/` (Plural) -> `/maschinentransport/`.
5. Wort "Spedition" entfernen (Reinwald ist Kurierdienst); nur Direktfahrten (kein Sammelgut/Teilladung als Angebot).
6. Gruen-Token `#3f8a27` -> `#3d8526`.
7. Fahrzeiten-Tabelle: eigene Spalte **Abholung = 60 bis 120 Min.** je Zeile; Fahrzeit klar als "Reine Fahrzeit zum Ziel".
8. Meta-Description <= ~155 Zeichen.
9. In-Content Stadt-Cluster-Links (Nachbarstaedte mit eigener Seite verlinken).
10. Neuer Hero: Standort-/Einzugsgebiet-Karte (`.loc-card`) statt Foto.
11. Globalen Header/Footer NICHT ins Fragment (WordPress injiziert); im Repo-Preview haben wir sie inline.
12. Breadcrumb Startseite > Einzugsgebiet > <Stadt> (Link auf /kurierdienst-deutschland/).

## Status
- [x] Tier 1 (7): Paderborn, Berlin, Muenchen, Hamburg, Koeln, Frankfurt-am-Main, Duesseldorf — fertig, gepusht, in Automatik
- [x] Tier 2 (9): Stuttgart, Hannover, Bremen, Dresden, Leipzig, Nuernberg, Essen, Duisburg, Dortmund — fertig, gepusht, in Automatik
- [ ] Tier 3 (16, in Arbeit / Agenten): Darmstadt, Wiesbaden, Konstanz, Bamberg, Erding, Plauen, Pinneberg, Siegen, Oldenburg, Rosenheim, Bayreuth, Bad-Oeynhausen, Hof, Amberg, Giessen, Regensburg

Damit sind 16/32 fertig, 16 in Produktion. Lokale Winkel Tier 3 u.a.: Erding = Flughafen MUC/Luftfracht, Bad Oeynhausen = HDZ/Medizinlogistik, Konstanz = Bodensee/CH-Grenze, Bamberg/Bayreuth/Amberg/Hof = Franken-Naehe zu Theilenhofen.

## Naechster Schritt
Nach Tier-3-Fertigstellung: preview + gh-pages neu bauen, alle Staedte in `tools/update-reviews.mjs` PAGES pruefen. Batch-Muster bleibt: pro Stadt Live-Text (Browser) + DataForSEO, dann aus `pages/kurierdienst-dortmund.html` (Gold-Standard) bauen.
