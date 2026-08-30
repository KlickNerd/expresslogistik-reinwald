#!/usr/bin/env node
/**
 * update-reviews.mjs
 * -----------------------------------------------------------------------------
 * Eigene, WordPress-unabhaengige Loesung fuer Google-Bewertungen.
 *
 * Ablauf:
 *   1. Holt die aktuellen Google-Bewertungen (Sterne, Anzahl, Rezensionstexte)
 *      ueber die DataForSEO Business-Data-API und schreibt sie nach
 *      data/reviews.json.
 *   2. Spielt die Werte in die statischen Seiten ein:
 *      - Rezensions-Slider (zwischen <!--REVIEWS_START--> / <!--REVIEWS_END-->)
 *      - Bewertungs-Anzahl ("<n> Bewertungen", "Alle <n> auf Google")
 *      - JSON-LD (reviewCount / ratingValue)
 *      - Score-Karten-Rating (<span class="num" data-rating>)
 *
 * Nutzung:
 *   node tools/update-reviews.mjs              # Fetch + Injektion (braucht Credentials)
 *   node tools/update-reviews.mjs --inject-only  # nur Injektion aus data/reviews.json
 *
 * Credentials (fuer den Fetch) via Umgebungsvariablen:
 *   DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD
 *
 * In der GitHub Action laeuft das Skript alle zwei Wochen und committet die
 * Aenderungen automatisch (siehe .github/workflows/update-reviews.yml).
 * -----------------------------------------------------------------------------
 */
import { readFile, writeFile } from 'node:fs/promises';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Lokale .env laden (nur fuer manuelle Laeufe; in der GitHub Action kommen die
// Werte aus den Secrets). Bereits gesetzte Umgebungsvariablen haben Vorrang.
const ENV_FILE = join(ROOT, '.env');
if (existsSync(ENV_FILE)) {
  for (const line of readFileSync(ENV_FILE, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}
const DATA_FILE = join(ROOT, 'data', 'reviews.json');
const PAGES = [join(ROOT, 'pages', 'kurierdienst.html'), join(ROOT, 'pages', 'index.html')];
const SLIDER_PAGE = join(ROOT, 'pages', 'kurierdienst.html');

const INJECT_ONLY = process.argv.includes('--inject-only');
const API = 'https://api.dataforseo.com/v3/business_data/google/reviews';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stars = (r) => '★'.repeat(Math.max(1, Math.min(5, Math.round(r || 5))));
const initials = (name) => {
  const p = String(name).trim().split(/\s+/).filter(Boolean);
  return ((p[0]?.[0] || '') + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase() || 'GK';
};

async function loadData() {
  return JSON.parse(await readFile(DATA_FILE, 'utf8'));
}

/* ----------------------------- Fetch (DataForSEO) ------------------------- */
async function fetchReviews(data) {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) {
    console.log('! Keine DATAFORSEO_LOGIN/PASSWORD gesetzt – ueberspringe Fetch, nutze data/reviews.json.');
    return data;
  }
  const auth = 'Basic ' + Buffer.from(`${login}:${password}`).toString('base64');
  const headers = { Authorization: auth, 'Content-Type': 'application/json' };

  // 1) Task anlegen
  const post = await fetch(`${API}/task_post`, {
    method: 'POST',
    headers,
    body: JSON.stringify([{
      place_id: data.place_id,
      language_name: 'German',
      location_name: 'Germany',
      sort_by: 'newest',
      depth: 100,
    }]),
  }).then((r) => r.json());
  const t0 = post?.tasks?.[0];
  console.log(`task_post: api ${post?.status_code} ${post?.status_message} | task ${t0?.status_code} ${t0?.status_message}`);
  const taskId = t0?.id;
  if (!taskId) throw new Error('Task-Anlage fehlgeschlagen: ' + (t0?.status_message || post?.status_message || 'unbekannt'));

  // 2) Auf Ergebnis warten. Zwischenstatus (Created/Handed/In Queue) = weiter warten.
  const IN_PROGRESS = new Set([20100, 40601, 40602]);
  let result = null;
  for (let i = 0; i < 24; i++) {
    await new Promise((res) => setTimeout(res, 5000));
    const get = await fetch(`${API}/task_get/advanced/${taskId}`, { headers }).then((r) => r.json());
    if (i === 0) console.log('  RAW get[0..600]:', JSON.stringify(get).slice(0, 600));
    const task = get?.tasks?.[0];
    const sc = task?.status_code;
    console.log(`  poll ${i}: api ${get?.status_code} ${get?.status_message} | task ${sc} ${task?.status_message || ''} | tasks_count ${get?.tasks_count}`);
    if (sc === 20000 && task?.result?.[0]) { result = task.result[0]; break; }
    if (sc && sc >= 40000 && !IN_PROGRESS.has(sc)) throw new Error('Fetch-Fehler: ' + task.status_message);
  }
  if (!result) throw new Error('Timeout: keine Rezensionen erhalten (Task evtl. noch in Bearbeitung).');

  // 3) Zusammenfassung + Items uebernehmen
  const value = result.rating?.value ?? data.rating;
  const count = result.rating?.votes_count ?? result.reviews_count ?? data.count;
  const items = (result.items || [])
    .map((it) => ({
      author: it.profile_name || 'Google-Nutzer',
      rating: it.rating?.value ?? 5,
      text: (it.review_text || '').trim(),
      time: it.timestamp || null,
    }))
    .filter((r) => r.text.length >= (data.min_chars || 40) && r.rating >= 4);

  const reviews = items.length ? items.slice(0, data.max_reviews || 8) : data.reviews;

  const next = {
    ...data,
    rating: Number(value) || data.rating,
    rating_display: String(value ?? data.rating).replace('.', ','),
    count: Number(count) || data.count,
    updated: new Date().toISOString().slice(0, 10),
    reviews,
  };
  await writeFile(DATA_FILE, JSON.stringify(next, null, 2) + '\n', 'utf8');
  console.log(`✓ ${reviews.length} Rezensionen geladen – ${next.count} Bewertungen, ${next.rating_display} Sterne.`);
  return next;
}

/* ------------------------------- Injektion -------------------------------- */
function buildCards(reviews) {
  return reviews.map((r) => {
    const round = Math.max(1, Math.min(5, Math.round(r.rating || 5)));
    return (
      '          <article class="quote">\n' +
      `            <div class="stars" aria-label="${round} von 5 Sternen">${stars(round)}</div>\n` +
      `            <blockquote>${esc(r.text)}</blockquote>\n` +
      `            <div class="who-row"><span class="avatar" aria-hidden="true">${esc(initials(r.author))}</span><span><strong>${esc(r.author)}</strong><small>Google-Bewertung</small></span></div>\n` +
      '          </article>'
    );
  }).join('\n');
}

async function injectPage(file, data, { slider }) {
  let html = await readFile(file, 'utf8');
  const before = html;
  const count = data.count;
  const ratingLd = (Number(data.rating) || 5).toFixed(1);

  if (slider) {
    const cards = buildCards(data.reviews);
    html = html.replace(
      /<!--REVIEWS_START-->[\s\S]*?<!--REVIEWS_END-->/,
      `<!--REVIEWS_START-->\n${cards}\n          <!--REVIEWS_END-->`
    );
  }

  html = html
    .replace(/\b\d+ Bewertungen\b/g, `${count} Bewertungen`)
    .replace(/Alle \d+ auf Google/g, `Alle ${count} auf Google`)
    .replace(/"reviewCount":\s*"\d+"/g, `"reviewCount": "${count}"`)
    .replace(/"ratingValue":\s*"[0-9.]+"/g, `"ratingValue": "${ratingLd}"`)
    .replace(/(<span class="num" data-rating>)[^<]*(<\/span>)/g, `$1${data.rating_display}$2`);

  if (html !== before) {
    await writeFile(file, html, 'utf8');
    console.log(`✓ aktualisiert: ${file.replace(ROOT + '/', '')}`);
  } else {
    console.log(`= unveraendert: ${file.replace(ROOT + '/', '')}`);
  }
}

/* --------------------------------- Main ----------------------------------- */
(async () => {
  let data = await loadData();
  if (!INJECT_ONLY) {
    try { data = await fetchReviews(data); }
    catch (e) { console.error('! Fetch fehlgeschlagen, nutze vorhandene data/reviews.json:', e.message); }
  }
  for (const file of PAGES) {
    await injectPage(file, data, { slider: file === SLIDER_PAGE });
  }
  console.log('Fertig.');
})().catch((e) => { console.error(e); process.exit(1); });
