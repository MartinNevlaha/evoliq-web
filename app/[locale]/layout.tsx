import type { Metadata, Viewport } from "next";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
};

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getMessages({locale});
  const metadata = (t as any).Metadata;

  return {
    metadataBase: new URL('https://evoliq.cz'),
    title: {
      default: metadata.title,
      template: '%s | Evoliq s.r.o.'
    },
    description: metadata.description,
    keywords: [
      'Evoliq',
      'Evoliq s.r.o.',
      'IT řešení Česko', // TODO: Localize keywords if needed
      'vývoj webových aplikací',
      'mobilní aplikace',
      'AI vývoj',
      'umělá inteligence',
      'automatizace procesů',
      'digitalizace',
      'software na míru',
      'Next.js vývoj',
      'React aplikace',
      'TypeScript',
      'audit software',
      'AI-Control',
      'ISO certifikace software',
      'compliance software',
      'GDPR řešení',
      'česká softwarová firma',
      'IT konzultace'
    ],
    authors: [{ name: 'Evoliq s.r.o.' }],
    creator: 'Evoliq s.r.o.',
    publisher: 'Evoliq s.r.o.',
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: locale === 'cs' ? 'cs_CZ' : (locale === 'sk' ? 'sk_SK' : 'en_US'),
      url: 'https://evoliq.cz',
      siteName: 'Evoliq s.r.o.',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Evoliq s.r.o. — IT řešení na míru',
          type: 'image/png',
        }
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.png'],
      creator: '@evoliq',
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 's-ASQ9Xk8RyL781u85FtENLjytCgHR8nQ6wXCjRPArQ',
    },
    
    // Alternates
    alternates: {
      canonical: 'https://evoliq.cz',
      languages: {
        'cs-CZ': 'https://evoliq.cz/cs',
        'sk-SK': 'https://evoliq.cz/sk',
        'en-US': 'https://evoliq.cz/en',
      },
    },
    
    // Other
    category: 'technology',
    classification: 'Business',
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evoliq s.r.o.',
    url: 'https://evoliq.cz',
    logo: 'https://evoliq.cz/logo.png',
    description: (messages as any).Metadata.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
    },
    sameAs: [
      'https://www.linkedin.com/company/evoliq',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['cs', 'en', 'sk'],
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
             __html: `(function(){try{const s=localStorage.getItem('theme');const m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add((s||m)==='dark'?'dark':'');}catch(e){}})();`
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
