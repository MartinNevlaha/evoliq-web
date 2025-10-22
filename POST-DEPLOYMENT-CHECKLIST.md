# Post-Deployment SEO Checklist

## 🎯 Po nasazení webu na produkci proveďte tyto kroky:

### 1. Google Search Console
- [ ] Zaregistrujte se na https://search.google.com/search-console
- [ ] Přidejte property `https://evoliq.cz`
- [ ] Ověřte vlastnictví pomocí HTML meta tagu
- [ ] Zkopírujte verifikační kód do `app/layout.tsx` (řádek 44)
- [ ] Odešlete sitemap: `https://evoliq.cz/sitemap.xml`
- [ ] Sledujte indexaci stránky

### 2. Google Analytics 4
- [ ] Vytvořte GA4 property na https://analytics.google.com
- [ ] Získejte Measurement ID (G-XXXXXXXXXX)
- [ ] Přidejte Google Analytics script do `app/layout.tsx`

Příklad:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Grafické assety
Vytvořte a nahrajte následující obrázky do `/public`:

- [ ] `/og-image.png` - 1200x630px (Open Graph)
- [ ] `/icon-192.png` - 192x192px (PWA icon)
- [ ] `/icon-512.png` - 512x512px (PWA icon)
- [ ] `/apple-touch-icon.png` - 180x180px
- [ ] `/favicon.ico` - 32x32px
- [ ] `/icon.svg` - Vektorová ikona
- [ ] `/screenshot-wide.png` - 1280x720px (PWA screenshot)
- [ ] `/screenshot-narrow.png` - 750x1334px (PWA screenshot)

### 4. robots.txt & Sitemap Verifikace
Po nasazení zkontrolujte:
- [ ] `https://evoliq.cz/robots.txt` - funguje správně
- [ ] `https://evoliq.cz/sitemap.xml` - obsahuje všechny URL
- [ ] Test v Google Search Console → Sitemaps

### 5. Strukturovaná Data
- [ ] Otestujte na https://search.google.com/test/rich-results
- [ ] Zkontrolujte Organization schema
- [ ] Zkontrolujte Service schema
- [ ] Zkontrolujte Product schema (AI-Control)
- [ ] Zkontrolujte BreadcrumbList

### 6. Performance Testing
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - Cíl: Performance 90+
  - Cíl: SEO 100
  - Cíl: Accessibility 95+
- [ ] WebPageTest: https://www.webpagetest.org/
- [ ] GTmetrix: https://gtmetrix.com/

### 7. Mobile Testing
- [ ] Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] Test na reálných zařízeních (iOS, Android)
- [ ] PWA instalace test (Add to Home Screen)

### 8. Social Media Preview
Zkontrolujte, jak vypadá náhled na sociálních sítích:
- [ ] Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### 9. Local SEO (volitelné)
- [ ] Google My Business profil
- [ ] Firmy.cz registrace
- [ ] Seznam.cz profil
- [ ] Přidání do IT directories

### 10. Monitoring Setup
- [ ] Google Search Console alerts
- [ ] Uptime monitoring (např. UptimeRobot)
- [ ] Error tracking (např. Sentry)
- [ ] Performance monitoring (Next.js Analytics ve Vercel)

### 11. Aktualizace Kontaktních Údajů
V souboru `app/page.tsx` aktualizujte:
- [ ] Email adresa v JSON-LD schema (řádek 372)
- [ ] Telefon v JSON-LD schema
- [ ] Adresa společnosti
- [ ] Social media linky (LinkedIn, GitHub)

V souboru `app/layout.tsx` aktualizujte:
- [ ] Verifikační kód Google (řádek 44)
- [ ] Canonical URL (ujistěte se, že je `evoliq.cz`)

### 12. Legal & GDPR
- [ ] Vyplňte kontaktní email v Privacy Policy modalu (`app/page.tsx`)
- [ ] Vyplňte IČO společnosti v Privacy Policy
- [ ] Vyplňte adresu společnosti v Privacy Policy
- [ ] Nastavte cookie consent správně dle GDPR

### 13. Email Konfigurace
- [ ] Ověřte doménu v Resend.com
- [ ] Nastavte SPF, DKIM, DMARC záznamy
- [ ] Otestujte kontaktní formulář
- [ ] Zkontrolujte doručování emailů

### 14. Security
- [ ] HTTPS certifikát aktivní
- [ ] Security headers aplikovány (zkontrolujte na securityheaders.com)
- [ ] Content Security Policy nastavena
- [ ] CORS polícy správně nakonfigurována

### 15. Backup & Updates
- [ ] Nastavte automatické backupy (např. GitHub repo)
- [ ] Pravidelné aktualizace npm packages
- [ ] Monitorování CVE vulnerabilities

---

## 🎉 Po dokončení

Gratulujeme! Váš web je SEO optimalizovaný a připravený k indexaci.

### Očekávané výsledky:
- ✅ Indexace v Google během 1-2 týdnů
- ✅ Lighthouse SEO Score: 100
- ✅ Rich results v Google vyhledávání
- ✅ Správné náhledy na sociálních sítích
- ✅ PWA funkcionalita

### Sledování výsledků:
- Každý týden kontrolujte Google Search Console
- Měsíčně analyzujte Google Analytics data
- Průběžně sledujte keyword rankings
- Upravujte obsah na základě analytických dat

---

**Tip**: Tento checklist si uložte a pravidelně kontrolujte stav jednotlivých bodů!
