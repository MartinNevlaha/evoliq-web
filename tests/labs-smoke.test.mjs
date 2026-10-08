import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

// Run against `npm run start` after a successful build.
const baseUrl = process.env.LABS_TEST_BASE_URL || 'http://localhost:3000';
const locales = ['cs', 'sk', 'en'];
const routes = ['/labs', '/labs/unflatten-w'];
const badges = { cs: 'Již brzy', sk: 'Už čoskoro', en: 'Coming soon' };
const denseExists = { cs: 'již existuje', sk: 'už existuje', en: 'already exists' };

function decodeHtml(value) {
  const entities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
  return value.replace(/&(amp|quot|apos|lt|gt);/g, (_, entity) => entities[entity]);
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decodeHtml(value)]))
  );
}

for (const locale of locales) {
  for (const route of routes) {
    test(`${locale}${route}: localized research page, SEO and assets`, async () => {
      const response = await fetch(`${baseUrl}/${locale}${route}`);
      assert.equal(response.status, 200);
      const html = await response.text();
      const messages = JSON.parse(await readFile(new URL(`../messages/${locale}.json`, import.meta.url), 'utf8'));
      const copy = messages[route === '/labs' ? 'Labs' : 'UnflattenW'];
      assert.ok(html.includes(`<html lang="${locale}"`));
      assert.ok(html.includes(badges[locale]), 'localized Coming soon badge');
      assert.ok(/<h3\b[^>]*>Unflatten Forms<\/h3>/.test(html), 'Forms is a model card');
      const formsCard = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)].map(([article]) => article).find(article => article.includes('Unflatten Forms'));
      assert.ok(formsCard?.includes(badges[locale]), 'Forms retains localized Coming soon status');
      assert.ok(html.includes(denseExists[locale]), 'Dense already exists and awaits release');
      assert.ok(!html.includes('Coming soon / Již brzy / Už čoskoro'));
      assert.ok(html.includes(`href="/${locale}/labs"`), 'localized Labs navigation');
      const links = tags(html, 'link');
      assert.ok(links.some(link => link.rel === 'canonical' && link.href === `https://evoliq.cz/${locale}${route}`));
      for (const [lang, code] of [['cs-CZ', 'cs'], ['sk-SK', 'sk'], ['en-US', 'en']]) {
        assert.ok(links.some(link => link.rel === 'alternate' && link.hrefLang === lang && link.href === `https://evoliq.cz/${code}${route}`));
      }
      const meta = tags(html, 'meta');
      assert.ok(meta.some(tag => tag.name === 'description' && tag.content === copy.metadataDescription));
      assert.ok(meta.some(tag => tag.property === 'og:url' && tag.content === `https://evoliq.cz/${locale}${route}`));
      assert.ok(meta.some(tag => tag.name === 'twitter:card' && tag.content === 'summary_large_image'));
      const schemas = [...html.matchAll(/<script\b[^>]*\btype="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(([, json]) => JSON.parse(json));
      const researchSchema = schemas.find(schema => JSON.stringify(schema).includes(`https://evoliq.cz/${locale}${route}`));
      assert.ok(researchSchema, 'localized research JSON-LD');
      assert.ok(JSON.stringify(researchSchema).includes(messages.LabsCommon.researchPreview), 'explicit research preview status');
      assert.ok(!JSON.stringify(researchSchema).includes('"offers"'), 'no sales or availability offer');
      const imageSources = tags(html, 'img').map(tag => tag.src).filter(src => /unflatten-(family|w-(dense|moe)-architecture)/.test(src));
      assert.ok(imageSources.some(src => src.includes('unflatten-family')), 'provided family visual is used');
      if (route === '/labs/unflatten-w') {
        for (const architecture of ['dense', 'moe']) {
          const sources = tags(html, 'img').map(tag => tag.src);
          assert.ok(sources.some(src => src.includes(`unflatten-w-${architecture}-architecture`)), `${architecture} architecture visual is used`);
        }
      }
      for (const src of new Set(imageSources)) {
        const image = await fetch(new URL(src, baseUrl));
        assert.equal(image.status, 200, `family asset ${src} loads`);
      }
    });
  }
}

test('sitemap contains every localized Labs page', async () => {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  for (const locale of locales) {
    for (const route of routes) assert.ok(xml.includes(`<loc>https://evoliq.cz/${locale}${route}</loc>`));
  }
});
