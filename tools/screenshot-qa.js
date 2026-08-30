const { chromium } = require('playwright');
const ph = (w,h,label,bg)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="${bg}" rx="12"/><text x="50%" y="50%" fill="#fff" font-family="Arial" font-size="28" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`;
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.startsWith('file://')) return route.continue();
      let label='Bild', w2=800, h2=520, bg='#2c3a5e';
      if (url.includes('Logo')) { label='LOGO'; w2=200; h2=44; bg='#4FA832'; }
      else if (url.includes('Group-920')) { label='Fuhrpark PNG (freigestellt)'; w2=640; h2=380; bg='#3f8a27'; }
      else if (url.includes('385_komp')) { label='Foto Disposition'; }
      else if (url.includes('260623-465')) { label='Foto GF und Kollege'; }
      else if (url.includes('260623-625')) { label='Portrait GF'; w2=200; h2=200; }
      route.fulfill({ contentType: 'image/svg+xml', body: ph(w2,h2,label,bg) });
    });
    await page.goto('file:///home/claude/work/reinwald/build/startseite.html', { waitUntil: 'load', timeout: 45000 });
    await page.evaluate(async () => {
      await new Promise(res => {
        let y = 0;
        const t = setInterval(() => {
          y += 600; window.scrollTo(0, y);
          if (y >= document.body.scrollHeight) { clearInterval(t); window.scrollTo(0,0); setTimeout(res, 600); }
        }, 120);
      });
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `screens/v3-${name}.png`, fullPage: true });
    await page.close();
  }
  await browser.close();
  console.log('done');
})();
