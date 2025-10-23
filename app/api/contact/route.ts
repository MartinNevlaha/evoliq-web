import { Resend } from 'resend';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

const schema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky').max(100, 'Jméno je příliš dlouhé'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().optional().default(''),
  message: z.string().min(5, 'Zpráva musí mít alespoň 5 znaků').max(2000, 'Zpráva je příliš dlouhá'),
  turnstileToken: z.string().min(1, 'Chybí ověření proti robotům'),
});

async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('TURNSTILE_SECRET_KEY not configured, skipping verification');
    return true; // Pro development
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
          remoteip: ip,
        }),
      }
    );
    
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, turnstileToken } = schema.parse(body);

    // Verify Turnstile token
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || undefined;
    const isValidToken = await verifyTurnstileToken(turnstileToken, ip);
    
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Ochrana proti robotům selhala. Zkuste to prosím znovu.' },
        { status: 403 }
      );
    }

    // Check environment variables
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

    // Send email
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      const { data, error } = await resend.emails.send({
        from: 'Evoliq <info@evoliq.cz>',
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Nová zpráva od ${name}`,
        text: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone || 'Neuvedeno'}\n\nZpráva:\n${message}`,
        html: `
          <h2>Nová zpráva z kontaktního formuláře</h2>
          <p><strong>Jméno:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
          <h3>Zpráva:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: 'Chyba při odesílání emailu. Zkuste to prosím znovu později.' },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
      return NextResponse.json({ ok: true, message: 'Email byl úspěšně odeslán' }, { status: 200 });
      
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Chyba při odesílání emailu. Zkuste to prosím znovu.' },
        { status: 500 }
      );
    }
  } catch (e: any) {
    console.error('Contact form error:', e);
    
    // Zod validation error
    if (e?.issues) {
      return NextResponse.json(
        { error: 'Neplatné údaje ve formuláři. Zkontrolujte prosím všechna pole.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: e?.message || 'Neplatný požadavek' },
      { status: 400 }
    );
  }
}
