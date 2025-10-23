# 📧 Resend Email - Návod na nastavení

## Co je Resend?

[Resend](https://resend.com) je moderní email API služba pro vývojáře. Poskytuje jednoduché API pro odesílání transačních emailů s vynikající doručitelností.

**Výhody:**
- ✅ Bezplatný tier: 100 emailů/den, 3 000 emailů/měsíc
- ✅ Jednoduchá integrace
- ✅ Vynikající dokumentace
- ✅ React Email podpora
- ✅ Analytics & monitoring

---

## 🚀 Návod na nastavení

### 1. Registrace na Resend

1. Přejděte na: https://resend.com/signup
2. Zaregistrujte se pomocí:
   - GitHub účtu (doporučeno)
   - Google účtu
   - Emailu

### 2. Vytvoření API klíče

1. Po přihlášení přejděte do **API Keys**: https://resend.com/api-keys
2. Klikněte na **"Create API Key"**
3. Vyplňte:
   - **Name**: `Evoliq Production` (nebo `Evoliq Development` pro testování)
   - **Permission**: `Sending access` (výchozí)
4. Klikněte **Add**
5. **DŮLEŽITÉ**: Zkopírujte API klíč ihned (zobrazí se pouze jednou!)
   - Vypadá takto: `re_123456789abcdefghijklmnop`

### 3. Přidání domény (Pro produkci)

⚠️ **Pro development můžete tento krok přeskočit a používat `onboarding@resend.dev`**

#### Pro vlastní doménu:

1. Přejděte do **Domains**: https://resend.com/domains
2. Klikněte **Add Domain**
3. Zadejte vaši doménu: `evoliq.cz`
4. Resend vám poskytne DNS záznamy

#### DNS Konfigurace

Přidejte tyto DNS záznamy u vašeho poskytovatele domény:

```
Type: TXT
Name: @
Value: resend._domainkey.evoliq.cz
```

```
Type: MX
Name: @
Priority: 10
Value: feedback-smtp.eu-central-1.amazonses.com
```

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@evoliq.cz
```

5. Klikněte **Verify DNS Records**
6. Verifikace může trvat 24-48 hodin

---

## 🔧 Konfigurace v projektu

### 1. Přidání environment variables

Vytvořte soubor `.env.local` v root složce projektu:

```bash
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# Kontaktní email (kam přijdou zprávy z formuláře)
CONTACT_TO_EMAIL=info@evoliq.cz

# Cloudflare Turnstile (pokud ještě nemáte)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

### 2. Konfigurace odesílatele

V souboru `app/api/contact/route.ts` je nakonfigurovaný email "from":

```typescript
from: 'Evoliq <info@evoliq.cz>'
```

#### Pro development:
- Používejte: `'Evoliq <onboarding@resend.dev>'`
- Funguje ihned bez DNS nastavení

#### Pro produkci:
- Po verifikaci domény změňte na: `'Evoliq <info@evoliq.cz>'`

---

## 🧪 Testování

### 1. Lokální testování

```bash
# Spusťte dev server
npm run dev

# Otevřete v prohlížeči
http://localhost:3000#contact
```

### 2. Test formuláře

1. Vyplňte všechna povinná pole
2. Vyřešte Turnstile (ochrana proti robotům)
3. Klikněte "Odeslat zprávu"
4. Zkontrolujte:
   - ✅ Zelená zpráva: "Zpráva byla úspěšně odeslána"
   - ✅ Email přišel na `CONTACT_TO_EMAIL`
   - ❌ Červená zpráva: Zkontrolujte konzoli serveru

### 3. Debug log

Server loguje do konzole:

```
✅ Email sent successfully: { id: 'abc123...' }
❌ Resend API error: { message: '...' }
```

---

## 📊 Monitoring

### Resend Dashboard

1. Přejděte na: https://resend.com/emails
2. Uvidíte všechny odeslané emaily:
   - **Status**: delivered, bounced, failed
   - **Timestamp**: Kdy byl email odeslán
   - **Recipient**: Komu byl odeslán
   - **Opens/Clicks**: Pokud máte tracking zapnutý

### Analytics

V Resend dashboardu najdete:
- **Delivery rate** - úspěšnost doručení
- **Bounce rate** - procent vrácených emailů
- **Volume** - počet odeslaných emailů za den/týden/měsíc

---

## 🐛 Řešení problémů

### ❌ Error: RESEND_API_KEY not configured

**Příčina**: Chybí API klíč v `.env.local`

**Řešení**:
```bash
# Vytvořte .env.local soubor
echo "RESEND_API_KEY=re_your_key" > .env.local

# Restartujte dev server
npm run dev
```

---

### ❌ Error: Invalid 'from' address

**Příčina**: Používáte neověřenou doménu v produkci

**Řešení**:
1. Pro development používejte: `onboarding@resend.dev`
2. Pro produkci: Dokončete DNS verifikaci domény

---

### ❌ Email nedorazil

**Checklist**:
1. ✅ Zkontrolujte SPAM složku
2. ✅ Ověřte `CONTACT_TO_EMAIL` v `.env.local`
3. ✅ Zkontrolujte Resend dashboard (https://resend.com/emails)
4. ✅ Podívejte se na server konzoli v terminálu

---

### ❌ Status 403 - Turnstile error

**Příčina**: Neplatný nebo chybějící Turnstile token

**Řešení**:
1. Zkontrolujte Turnstile klíče v `.env.local`
2. Pro testování použijte testovací klíče:
   ```bash
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
   TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
   ```

---

## 💰 Cenové plány

### Free Tier
- ✅ 3 000 emailů/měsíc (100/den)
- ✅ 1 doména
- ✅ API přístup
- ✅ Email support

### Pro Plan - $20/měsíc
- ✅ 50 000 emailů/měsíc
- ✅ Neomezené domény
- ✅ Prioritní podpora
- ✅ Advanced analytics

### Enterprise
- ✅ Custom volume
- ✅ Dedicated IPs
- ✅ SLA garanty

Více na: https://resend.com/pricing

---

## 🔒 Best Practices

### Bezpečnost

1. **Nikdy necommitujte `.env.local`** do Gitu
   ```bash
   # .gitignore obsahuje:
   .env*.local
   ```

2. **API klíče uložte bezpečně**
   - Vercel: Environment Variables
   - Netlify: Environment Variables
   - Lokálně: `.env.local` (gitignored)

3. **Rate limiting**
   - Implementujte ochranu proti spamu
   - Turnstile už poskytuje základní ochranu

### Email Quality

1. **Ověřte doménu** pro lepší doručitelnost
2. **Nastavte DMARC/SPF/DKIM** záznamy
3. **Používejte reply-to** pro odpovědi zákazníků
4. **Přidejte plain text verzi** (už implementováno)
5. **Sledujte bounce rate** v dashboardu

---

## 📚 Další informace

- 📖 Dokumentace: https://resend.com/docs
- 🎮 API Reference: https://resend.com/docs/api-reference
- 💬 Discord: https://resend.com/discord
- 📧 Support: team@resend.com

---

## ✅ Checklist

### Development
- [ ] Vytvořil jsem Resend účet
- [ ] Vygeneroval jsem API klíč
- [ ] Přidal jsem `RESEND_API_KEY` do `.env.local`
- [ ] Nastavil jsem `CONTACT_TO_EMAIL`
- [ ] Používám `onboarding@resend.dev` jako "from"
- [ ] Otestoval jsem formulář lokálně
- [ ] Email přišel na správnou adresu

### Production
- [ ] Přidal jsem doménu `evoliq.cz` do Resend
- [ ] Nakonfiguroval jsem DNS záznamy
- [ ] Počkal jsem 24-48h na verifikaci
- [ ] Změnil jsem "from" na `info@evoliq.cz`
- [ ] Přidal jsem API klíč do Vercel Environment Variables
- [ ] Redeployoval jsem aplikaci
- [ ] Otestoval jsem formulář v produkci
- [ ] Nastavil jsem monitoring v Resend dashboardu

---

**🎉 Gratulujeme! Email konfigurace je hotová!**
