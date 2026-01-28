import type { Metadata } from "next";
import CaseStudyPage from "./CaseStudyPage";

export const metadata: Metadata = {
  title: "Případová studie: Úspora 61% času s AI Control | Evoliq",
  description: "Reálné srovnání tradičního interního auditu vs. AI Control. Zjistěte, jak výrobní společnost ušetřila 94 hodin ročně a zvýšila kvalitu auditů o 40% díky automatizaci s umělou inteligencí.",
  keywords: [
    "případová studie AI audit",
    "úspora času interní audit",
    "automatizace interních auditů",
    "AI vs tradiční audit",
    "efektivita auditního procesu",
    "ROI interní audit",
    "digitalizace auditů",
    "ISO certifikace automatizace",
  ],
  openGraph: {
    title: "Případová studie: Úspora 61% času s AI Control",
    description: "Výrobní společnost ušetřila 94 hodin ročně automatizací interních auditů. Podívejte se na reálná data.",
    type: "article",
    locale: "cs_CZ",
    siteName: "Evoliq",
    url: "https://evoliq.cz/products/ai-control/case-study",
  },
  twitter: {
    card: "summary_large_image",
    title: "Případová studie: Úspora 61% času s AI Control",
    description: "Reálné srovnání tradičního interního auditu vs. AI Control. Úspora 94 hodin ročně.",
  },
  alternates: {
    canonical: "https://evoliq.cz/products/ai-control/case-study",
  },
};

export default function Page() {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Případová studie: Úspora 61% času s AI Control",
    "description": "Reálné srovnání tradičního interního auditního procesu oproti automatizaci s AI Control systémem.",
    "author": {
      "@type": "Organization",
      "name": "Evoliq s.r.o."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Evoliq s.r.o.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://evoliq.cz/logo-dark.png"
      }
    },
    "datePublished": "2025-10-23",
    "articleBody": "Výrobní společnost s 30 interními audity ročně ušetřila 94 hodin automatizací pomocí AI Control."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <CaseStudyPage />
    </>
  );
}
