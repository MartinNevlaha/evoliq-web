# Evoliq — Profesionální IT Website

Moderní Next.js 14 website s pokročilými animacemi, AI řešeními a kompletní SEO optimalizací.

## ✨ Hlavní funkce

- 🎨 **Moderní Design** - Framer Motion animace, dark mode, responzivní
- 🤖 **AI-Control** - Modulární audit & compliance platforma
- 📱 **PWA Ready** - Progressive Web App s offline podporou
- 🔍 **SEO Optimalizace** - Kompletní SEO, strukturovaná data, sitemap
- 🍪 **GDPR Compliance** - Cookie consent, ochrana soukromí
- 📧 **Kontaktní formulář** - S CAPTCHA ochranou a email notifikacemi

## 🚀 Technologie

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animace**: Framer Motion
- **Email**: Resend API
- **Ikony**: Lucide React
- **SEO**: Next.js Metadata API, JSON-LD

## 📦 Instalace

```bash
npm install
```

## 🔑 Environment Variables

Vytvořte soubor `.env.local`:

```env
# Email konfigurace (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_TO_EMAIL=info@evoliq.cz

# Google Verification (po registraci v Search Console)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 🏃‍♂️ Spuštění

```bash
# Development
npm run dev

# Production build
npm run build

# Production start
npm start

# Linting
npm run lint
```

## 📁 Struktura projektu

```
evoliq-web/
├── app/
│   ├── layout.tsx          # Root layout s SEO metadata
│   ├── page.tsx            # Hlavní stránka s JSON-LD
│   ├── robots.ts           # Dynamický robots.txt
│   ├── sitemap.ts          # Automatická sitemap
│   └── api/
│       └── contact/        # API route pro kontaktní formulář
├── components/
│   ├── common/             # Znovupoužitelné komponenty
│   │   ├── SectionTitle.tsx
│   │   ├── ImageModal.tsx
│   │   └── CookieConsent.tsx
│   ├── sections/           # Sekce stránky
│   │   ├── NavBar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   └── ui/                 # UI komponenty (Button, Card)
├── lib/
│   └── animations.ts       # Framer Motion varianty
├── public/
│   ├── logo-dark.png
│   ├── logo-white.png
│   ├── manifest.json       # PWA manifest
│   └── ...                 # Ostatní assets
└── SEO-OPTIMIZATION.md     # Kompletní SEO dokumentace
```

## 🔍 SEO Funkce

### Implementováno
✅ Meta tagy (title, description, keywords)  
✅ Open Graph & Twitter Card  
✅ Strukturovaná data (Organization, Service, Product, Breadcrumbs)  
✅ robots.txt & sitemap.xml  
✅ Image optimization (AVIF, WebP)  
✅ Security headers  
✅ PWA manifest  
✅ Semantic HTML & Accessibility  

Více informací v [SEO-OPTIMIZATION.md](./SEO-OPTIMIZATION.md)

## 📧 Email Konfigurace

Website používá [Resend](https://resend.com) pro odesílání emailů:

1. Zaregistrujte se na resend.com
2. Vytvořte API klíč
3. Přidejte doménu a ověřte DNS záznamy
4. Nastavte `RESEND_API_KEY` v `.env.local`

## 🌐 Deployment

### Vercel (doporučeno)

1. Push do GitHub repository
2. Import projektu ve Vercel
3. Nastavte environment variables
4. Deploy automaticky proběhne

```bash
# Nebo pomocí Vercel CLI
npm i -g vercel
vercel --prod
```

### Docker

```bash
# Build image
docker build -t evoliq-web .

# Run container
docker run -p 3000:3000 evoliq-web
```

## 🎨 Customizace

### Barvy (Tailwind)
Upravte `tailwind.config.ts` pro změnu barevné palety.

### Animace
Všechny animační varianty jsou v `lib/animations.ts`.

### Metadata
SEO metadata upravte v `app/layout.tsx`.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance)
- **SEO Score**: 100
- **Accessibility**: 95+
- **Best Practices**: 100

## 🛡️ Security

- HSTS headers
- XSS protection
- Content Security Policy
- GDPR cookie consent
- CAPTCHA na kontaktním formuláři

## 📝 Licence

© 2025 Evoliq s.r.o. Všechna práva vyhrazena.

## 🤝 Podpora

Pro support kontaktujte: info@evoliq.cz

---

**Vytvořeno s ❤️ pomocí Next.js 14**
