# 🛡️ Cloudflare Turnstile - Návod na nastavení

## Co je Cloudflare Turnstile?

Cloudflare Turnstile je bezplatná, user-friendly alternativa k reCAPTCHA. Chrání váš kontaktní formulář před boty bez obtěžování uživatelů.

## ✅ Výhody

- ✅ **Úplně zdarma** - bez limitů
- ✅ **User-friendly** - často invisible, žádné "vyberte semafory"
- ✅ **Privacy-first** - lepší než Google reCAPTCHA
- ✅ **Jednoduchá integrace** - hotová za 5 minut

---

## 🚀 Návod na nastavení

### 1. Registrace u Cloudflare

1. Přejděte na: https://dash.cloudflare.com/sign-up
2. Vytvořte si bezplatný účet
3. Po přihlášení přejděte do **Turnstile** sekce: https://dash.cloudflare.com/?to=/:account/turnstile

### 2. Vytvoření Turnstile Widget

1. Klikněte na **"Add Widget"** nebo **"Create Widget"**
2. Vyplňte:
   - **Widget Name**: `Evoliq Contact Form` (nebo libovolný název)
   - **Domain**: `evoliq.cz` (nebo vaše doména)
   - **Widget Mode**: 
     - `Managed` (doporučeno) - automaticky rozhoduje, kdy zobrazit výzvu
     - `Non-Interactive` - invisible, žádná interakce
     - `Invisible` - úplně skrytý
3. Klikněte **Create**

### 3. Získání API klíčů

Po vytvoření widgetu dostanete:

- ✅ **Site Key** (public key) - např. `0x4AAAAAAA...`
- ✅ **Secret Key** (private key) - např. `0x4AAAAAAA...`

**⚠️ Secret Key NIKDY nesdílejte veřejně!**

### 4. Přidání klíčů do projektu

#### Lokální vývoj (`.env.local`):

Přidejte do souboru `.env.local`:

```env
# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAA... # Vaš Site Key
TURNSTILE_SECRET_KEY=0x4AAAAAAA... # Vaš Secret Key
```

#### Produkce (Vercel):

1. Přejděte do Vercel dashboardu
2. Otevřete váš projekt → **Settings** → **Environment Variables**
3. Přidejte obě proměnné:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = váš Site Key
   - `TURNSTILE_SECRET_KEY` = váš Secret Key
4. Redeploy aplikaci

---

## 🧪 Testování

### Testing Site Keys (pro development):

Cloudflare poskytuje testing klíče:

```env
# Always passes
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# Always blocks  
NEXT_PUBLIC_TURNSTILE_SITE_KEY=2x00000000000000000000AB
TURNSTILE_SECRET_KEY=2x0000000000000000000000000000000AB

# Forces challenge
NEXT_PUBLIC_TURNSTILE_SITE_KEY=3x00000000000000000000FF
TURNSTILE_SECRET_KEY=3x0000000000000000000000000000000FF
```

### Manuální test:

1. Spusťte aplikaci: `npm run dev`
2. Přejděte na kontaktní formulář: `http://localhost:3000#contact`
3. Vyplňte formulář
4. Měli byste vidět Turnstile widget (nebo invisible ověření)
5. Odešlete formulář
6. Zkontrolujte konzoli serveru - měla by proběhnout verifikace

---

## 📊 Monitoring

### Cloudflare Dashboard

V Turnstile dashboardu uvidíte:
- Počet ověření
- Success rate
- Failed attempts
- Grafy návštěvnosti

### Logy v aplikaci

API route loguje chyby:
```bash
# Úspěšná verifikace
✅ Token verified successfully

# Neúspěšná verifikace  
❌ Turnstile verification error: ...
```

---

## 🔧 Troubleshooting

### Widget se nezobrazuje

1. ✅ Zkontrolujte, že máte správný Site Key v `.env.local`
2. ✅ Restartujte dev server: `npm run dev`
3. ✅ Zkontrolujte konzoli prohlížeče (F12)

### Formulář nefunguje

1. ✅ Zkontrolujte, že máte oba klíče v `.env.local`
2. ✅ Zkontrolujte konzoli serveru - měla by být verifikace
3. ✅ Zkuste testing klíč `1x00000000000000000000AA`

### Token expired

- Token má platnost 5 minut
- Po expiraci se automaticky vygeneruje nový
- Uživatel to nepozná

---

## 🎨 Customizace

### Změna vzhledu

V `components/sections/Contact.tsx`:

```tsx
<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
  options={{
    theme: 'light' | 'dark' | 'auto',  // Téma
    size: 'normal' | 'compact',         // Velikost
    language: 'cs' | 'en' | 'auto',     // Jazyk
  }}
/>
```

### Přidání do jiných formulářů

1. Import komponentu:
```tsx
import { Turnstile } from '@marsidev/react-turnstile';
```

2. Přidat state:
```tsx
const [token, setToken] = useState('');
```

3. Vložit widget:
```tsx
<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
  onSuccess={setToken}
/>
```

4. Odeslat token s formulářem:
```tsx
const response = await fetch('/api/endpoint', {
  method: 'POST',
  body: JSON.stringify({ ...formData, turnstileToken: token })
});
```

---

## 📚 Další informace

- 📖 Dokumentace: https://developers.cloudflare.com/turnstile/
- 🎮 Playground: https://demo.turnstile.dev/
- 💬 Support: https://community.cloudflare.com/

---

## ✅ Checklist

- [ ] Vytvořil jsem Cloudflare účet
- [ ] Vytvořil jsem Turnstile widget
- [ ] Zkopíroval jsem Site Key a Secret Key
- [ ] Přidal jsem klíče do `.env.local`
- [ ] Otestoval jsem formulář lokálně
- [ ] Přidal jsem klíče do Vercel Environment Variables
- [ ] Redeployoval jsem aplikaci
- [ ] Otestoval jsem formulář v produkci

---

**🎉 Gratulujeme! Váš formulář je nyní chráněn proti botům!**
