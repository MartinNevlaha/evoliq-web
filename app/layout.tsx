import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://evoliq.cz'),
  title: {
    default: 'Evoliq s.r.o. — Profesionální IT řešení a AI vývoj | Česká softwarová společnost',
    template: '%s | Evoliq s.r.o.'
  },
  description: 'Česká IT společnost specializující se na vývoj webových aplikací, mobilních aplikací, AI řešení a automatizaci procesů. Komplexní digitalizace vašeho podnikání s důrazem na kvalitu a inovace.',
  keywords: [
    'Evoliq',
    'Evoliq s.r.o.',
    'IT řešení Česko',
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
    locale: 'cs_CZ',
    url: 'https://evoliq.cz',
    siteName: 'Evoliq s.r.o.',
    title: 'Evoliq s.r.o. — Profesionální IT řešení a AI vývoj',
    description: 'Česká IT společnost specializující se na vývoj webových aplikací, mobilních aplikací, AI řešení a automatizaci procesů.',
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
    title: 'Evoliq s.r.o. — Profesionální IT řešení a AI vývoj',
    description: 'Česká IT společnost specializující se na vývoj webových aplikací, mobilních aplikací, AI řešení a automatizaci procesů.',
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
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-code',
  },
  
  // Alternates
  alternates: {
    canonical: 'https://evoliq.cz',
    languages: {
      'cs-CZ': 'https://evoliq.cz',
    },
  },
  
  // Other
  category: 'technology',
  classification: 'Business',
};

export default function RootLayout({children}:{children:React.ReactNode}){
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evoliq s.r.o.',
    url: 'https://evoliq.cz',
    logo: 'https://evoliq.cz/logo.png',
    description: 'Česká IT společnost specializující se na vývoj webových aplikací, mobilních aplikací, AI řešení a automatizaci procesů.',
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
      availableLanguage: ['cs', 'en'],
    },
  };

  return(
    <html lang="cs" suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
