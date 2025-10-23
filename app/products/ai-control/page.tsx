import type { Metadata } from "next";
import AIControlPage from "./AIControlPage";

export const metadata: Metadata = {
  title: "AI Control - Inteligentní systém řízení auditů | Evoliq",
  description: "AI Control je cloudové multitenant řešení pro komplexní správu auditů s umělou inteligencí. Automatizace plánů, checklistů, zpráv a certifikací. Start cloudového provozu 1.1.2026.",
  keywords: [
    "AI audit systém",
    "cloudový audit software",
    "multitenant audit platforma",
    "AI generované checklist",
    "automatizace auditů",
    "ISO certifikace AI",
    "SWOT analýza AI",
    "správa certifikátů",
    "kalendář auditů",
    "audit reporting AI",
    "process mapping AI",
    "kvalifikace auditorů",
  ],
  openGraph: {
    title: "AI Control - Inteligentní systém řízení auditů",
    description: "Cloudové multitenant řešení s AI pro automatizaci auditů, certifikací a správy kvality. Dostupné od 1.1.2026.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Evoliq",
    url: "https://evoliq.cz/products/ai-control",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Control - Inteligentní systém řízení auditů",
    description: "Cloudové AI řešení pro automatizaci auditů a certifikací. Start 1.1.2026.",
  },
  alternates: {
    canonical: "https://evoliq.cz/products/ai-control",
  },
};

export default function Page() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Control",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Audit Management System",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "availabilityStarts": "2026-01-01",
      "price": "0",
      "priceCurrency": "CZK",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "CZK",
        "priceType": "https://schema.org/SaaS"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Evoliq s.r.o.",
      "url": "https://evoliq.cz"
    },
    "description": "AI Control je cloudové multitenant řešení pro komplexní správu auditů s umělou inteligencí. Automatizace plánů, checklistů, zpráv a certifikací.",
    "featureList": [
      "AI-asistované vyplňování firemního profilu",
      "Automatická správa certifikátů",
      "SWOT analýza s AI",
      "Customizovatelná uživatelská oprávnění",
      "Správa kvalifikací auditorů",
      "Kalendář auditů",
      "AI generované plány auditů",
      "AI Checklist",
      "Výkon auditu v UI",
      "Zprávy z auditu generované AI",
      "Vícejazyčnost (SK, CZ, EN)"
    ],
    "screenshot": "https://evoliq.cz/audit-plan.png",
    "softwareVersion": "1.0",
    "releaseNotes": "Cloudová provoz startuje 1.1.2026"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <AIControlPage />
    </>
  );
}
