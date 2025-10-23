# 🛡️ Error Handling & Validation - Kontaktní formulář

## Přehled

Kontaktní formulář má komplexní error handling na několika úrovních:

1. **Frontend validace** - Browser + React state
2. **Bot protection** - Cloudflare Turnstile
3. **Backend validace** - Zod schema
4. **Email delivery** - Resend API
5. **User feedback** - Vizuální zpětná vazba

---

## 🎯 Validační pravidla

### Frontend (HTML5 + Browser)

```tsx
// components/sections/Contact.tsx

<input 
  name="name" 
  required           // ✅ Povinné pole
  minLength={2}      // ✅ Min 2 znaky
/>

<input 
  type="email"       // ✅ Email formát
  required 
/>

<textarea 
  name="message" 
  required 
  minLength={5}      // ✅ Min 5 znaků
/>
```

### Backend (Zod Schema)

```typescript
// app/api/contact/route.ts

const schema = z.object({
  name: z.string()
    .min(2, 'Jméno musí mít alespoň 2 znaky')
    .max(100, 'Jméno je příliš dlouhé'),
    
  email: z.string()
    .email('Neplatná emailová adresa'),
    
  phone: z.string()
    .optional()
    .default(''),
    
  message: z.string()
    .min(5, 'Zpráva musí mít alespoň 5 znaků')
    .max(2000, 'Zpráva je příliš dlouhá'),
    
  turnstileToken: z.string()
    .min(1, 'Chybí ověření proti robotům'),
});
```

---

## 🔐 Bezpečnostní vrstvy

### 1. Turnstile Bot Protection

```typescript
// Frontend - získání tokenu
const [turnstileToken, setTurnstileToken] = React.useState<string>('');

<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
  onSuccess={(token) => setTurnstileToken(token)}
  onError={() => setTurnstileToken('')}
  onExpire={() => setTurnstileToken('')}
/>

// Kontrola před odesláním
if (!turnstileToken) {
  setOk(false);
  return;
}
```

### 2. Backend Turnstile Verification

```typescript
// app/api/contact/route.ts

async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    }
  );
  
  const data = await response.json();
  return data.success === true;
}

// Použití v route handler
const isValidToken = await verifyTurnstileToken(turnstileToken, ip);

if (!isValidToken) {
  return NextResponse.json(
    { error: 'Ochrana proti robotům selhala. Zkuste to prosím znovu.' },
    { status: 403 }
  );
}
```

---

## 📧 Email Delivery Error Handling

### Resend API Errors

```typescript
try {
  const { data, error } = await resend.emails.send({
    from: 'Evoliq <info@evoliq.cz>',
    to: [process.env.CONTACT_TO_EMAIL],
    reply_to: email,
    subject: `Nová zpráva od ${name}`,
    text: `...`,
    html: `...`,
  });

  if (error) {
    console.error('Resend API error:', error);
    return NextResponse.json(
      { error: 'Chyba při odesílání emailu. Zkuste to prosím znovu později.' },
      { status: 500 }
    );
  }

  console.log('Email sent successfully:', data);
  return NextResponse.json({ 
    ok: true, 
    message: 'Email byl úspěšně odeslán' 
  }, { status: 200 });
  
} catch (emailError) {
  console.error('Email sending error:', emailError);
  return NextResponse.json(
    { error: 'Chyba při odesílání emailu. Zkuste to prosím znovu.' },
    { status: 500 }
  );
}
```

### Environment Variables Check

```typescript
// Check před odesláním emailu
if (!process.env.RESEND_API_KEY) {
  return NextResponse.json(
    { error: 'RESEND_API_KEY not configured' },
    { status: 500 }
  );
}

if (!process.env.CONTACT_TO_EMAIL) {
  return NextResponse.json(
    { error: 'CONTACT_TO_EMAIL not configured' },
    { status: 500 }
  );
}
```

---

## 🎨 User Feedback (Frontend)

### Loading State

```tsx
const [loading, setLoading] = React.useState(false);

<Button disabled={loading}>
  {loading ? 'Odesílám...' : 'Odeslat zprávu'}
</Button>
```

### Success Message

```tsx
{ok === true && (
  <motion.p 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-green-600 bg-green-50 border border-green-200 rounded-lg p-3"
  >
    ✓ Zpráva byla úspěšně odeslána. Brzy se vám ozveme!
  </motion.p>
)}
```

### Error Message

```tsx
{ok === false && (
  <motion.p 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3"
  >
    ✗ Chyba při odesílání. Zkontrolujte prosím všechna pole a zkuste to znovu.
  </motion.p>
)}
```

### Form Reset on Success

```tsx
if (res.ok) {
  formRef.current?.reset();
  setTurnstileToken('');
}
```

---

## 🐛 Debugging

### Server-side Logging

```typescript
// Všechny chyby jsou logovány do konzole

console.error('Contact form error:', e);
console.error('Resend API error:', error);
console.error('Turnstile verification error:', error);
console.log('Email sent successfully:', data);
```

### Client-side Logging

```typescript
// Frontend errors
console.error('Contact form submission error:', error);
console.error('Turnstile verification failed');
console.warn('Turnstile token expired');
```

### Network Tab

V Developer Tools → Network můžete sledovat:
- **POST /api/contact**
  - Request payload: `{ name, email, phone, message, turnstileToken }`
  - Response: `{ ok: true }` nebo `{ error: "..." }`
  - Status code: 200, 400, 403, 500

---

## 🧪 Testování Error Handling

### 1. Test validace

```bash
# Prázdné jméno
Name: ""
Expected: Browser validation: "Please fill out this field"

# Krátké jméno (1 znak)
Name: "A"
Expected: Backend 400: "Jméno musí mít alespoň 2 znaky"

# Neplatný email
Email: "invalid-email"
Expected: Browser validation: "Please include an '@' in the email address"

# Krátká zpráva (< 5 znaků)
Message: "Hi"
Expected: Backend 400: "Zpráva musí mít alespoň 5 znaků"
```

### 2. Test Turnstile

```bash
# Bez vyřešení Turnstile
Expected: Frontend error, form není odeslán

# Expirovaný token (čekání 5+ minut)
Expected: Token reset, nutné znovu vyřešit Turnstile
```

### 3. Test Resend

```bash
# Špatný API klíč
RESEND_API_KEY=re_invalid
Expected: 500 error, log: "Resend API error"

# Chybějící API klíč
# Odstraňte RESEND_API_KEY z .env.local
Expected: 500 error: "RESEND_API_KEY not configured"

# Neplatný "from" email
from: 'test@unverified-domain.com'
Expected: Resend API error v dashboardu
```

---

## 📊 Error Rate Monitoring

### Metrics ke sledování

1. **Submission Success Rate**
   - Úspěšné odeslání / Všechny pokusy
   - Target: > 95%

2. **Turnstile Pass Rate**
   - Úspěšné ověření / Všechny pokusy
   - Target: > 98%

3. **Email Delivery Rate**
   - Doručené / Odeslané
   - Target: > 99%
   - Sledujte v Resend dashboardu

### Error Categories

```
├── Client Errors (400-499)
│   ├── 400 - Validation Error (Zod)
│   └── 403 - Turnstile Failed
│
└── Server Errors (500-599)
    ├── 500 - Resend API Error
    ├── 500 - Email Sending Error
    └── 500 - Missing Configuration
```

---

## ✅ Checklist před nasazením

- [ ] Otestoval jsem všechna pole s neplatnými daty
- [ ] Ověřil jsem, že Turnstile funguje v obou režimech (light/dark)
- [ ] Zkontroloval jsem success/error zprávy ve všech stavech
- [ ] Otestoval jsem formulář bez Turnstile tokenu
- [ ] Ověřil jsem, že se form resetuje po úspěšném odeslání
- [ ] Zkontroloval jsem, že email dorazil do správné schránky
- [ ] Otestoval jsem formulář s expirovaným Turnstile tokenem
- [ ] Ověřil jsem, že všechny chyby jsou logovány do konzole
- [ ] Zkontroloval jsem HTML/plain text verzi emailu
- [ ] Otestoval jsem formulář na mobilu i desktopu

---

## 🔄 Continuous Improvement

### User Feedback

Sledujte:
- Bounce rate na kontaktní sekci
- Počet neúspěšných odeslání
- Uživatelské reporty problémů

### Možná vylepšení

1. **Client-side validation knihovna**
   - React Hook Form
   - Formik
   - Real-time validation

2. **Email template engine**
   - React Email
   - MJML
   - Profesionální styling

3. **Rate limiting**
   - Upstash Rate Limit
   - Redis
   - IP-based throttling

4. **Advanced analytics**
   - Google Analytics events
   - Custom tracking
   - Conversion funnel

---

**📚 Další dokumentace:**
- [RESEND-SETUP.md](./RESEND-SETUP.md) - Resend konfigurace
- [TURNSTILE-SETUP.md](./TURNSTILE-SETUP.md) - Turnstile konfigurace
