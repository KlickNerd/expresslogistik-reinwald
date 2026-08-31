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
- [x] Tier 3 (16): Darmstadt, Wiesbaden, Konstanz, Bamberg, Erding, Plauen, Pinneberg, Siegen, Oldenburg, Rosenheim, Bayreuth, Bad-Oeynhausen, Hof, Amberg, Giessen, Regensburg — fertig, gepusht, in Automatik

- [x] Tier 4 (10, NEU, datengetriebene Auswahl per DataForSEO aus 45 Kandidaten): Ulm, Bonn, Luebeck, Heilbronn, Pforzheim, Ingolstadt, Augsburg, Muenster, Mannheim, Kassel — fertig, gepusht, in Automatik

**42 Stadtseiten live.** Tier 4 wurde nach SEO-Volumen + Wettbewerb gewaehlt: LOW-Gems Ulm/Heilbronn/Pforzheim, Volumen-Leader Bonn/Luebeck (je 70/Mo), plus B2B-Anker Ingolstadt (Audi), Augsburg, Muenster, Mannheim, Kassel (zentraler Knoten). Preview + gh-pages-Staging (noindex) enthalten alle 42.

## Naechster Schritt
Stadtseiten-Phase abgeschlossen (42 live). Weitere Staedte jederzeit per gleichem Muster: DataForSEO-Ranking -> Agenten -> `scratchpad/build-staedte.sh` (normalisiert cfg automatisch) aus `pages/kurierdienst-dortmund.html` als Gold-Standard. Laut ziel-sitemap.md folgen sonst: ~60 Lexikon-Eintraege, Unternehmensseiten, Blog-Konsolidierung.
