import { Resend } from 'resend';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional().default(''),
  message: z.string().min(5).max(2000),
  turnstileToken: z.string().min(1),
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
    const { error } = await resend.emails.send({
      from: 'Evoliq <noreply@evoliq.dev>',
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Nová zpráva od ${name}`,
      text: `Jméno: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nZpráva:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error('Contact form error:', e);
    return NextResponse.json(
      { error: e?.message || 'Neplatný požadavek' },
      { status: 400 }
    );
  }
}
