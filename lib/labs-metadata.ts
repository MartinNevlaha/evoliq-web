import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export type LabsLocale = (typeof routing.locales)[number];
export type LabsRoute = "/labs" | "/labs/unflatten-w";
export type LabsNamespace = "Labs" | "UnflattenW";

const siteUrl = "https://evoliq.cz";
const imageUrl = `${siteUrl}/logo-evoliq-dark.png`;

const languageTags: Record<LabsLocale, string> = {
  cs: "cs-CZ",
  en: "en-US",
  sk: "sk-SK",
};

const openGraphLocales: Record<LabsLocale, string> = {
  cs: "cs_CZ",
  en: "en_US",
  sk: "sk_SK",
};

export function validateLabsLocale(locale: string): LabsLocale {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return locale;
}

export function labsUrl(locale: LabsLocale, route: LabsRoute): string {
  return `${siteUrl}/${locale}${route}`;
}

export async function createLabsMetadata(
  locale: LabsLocale,
  route: LabsRoute,
  namespace: LabsNamespace,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const title = t("metadataTitle");
  const description = t("metadataDescription");
  const canonical = labsUrl(locale, route);
  const image = {
    url: imageUrl,
    width: 1024,
    height: 1024,
    alt: t("ogAlt"),
    type: "image/png",
  };

  return {
    title: { absolute: title },
    description,
    keywords: t.raw("metadataKeywords") as string[],
    alternates: {
      canonical,
      languages: Object.fromEntries(
        routing.locales.map((language) => [
          languageTags[language],
          labsUrl(language, route),
        ]),
      ),
    },
    openGraph: {
      type: route === "/labs" ? "website" : "article",
      title,
      description,
      url: canonical,
      siteName: "Evoliq Labs",
      locale: openGraphLocales[locale],
      alternateLocale: routing.locales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: imageUrl, alt: t("ogAlt") }],
    },
  };
}

export async function createLabsJsonLd(locale: LabsLocale) {
  const [t, model, common] = await Promise.all([
    getTranslations({ locale, namespace: "Labs" }),
    getTranslations({ locale, namespace: "UnflattenW" }),
    getTranslations({ locale, namespace: "LabsCommon" }),
  ]);
  const url = labsUrl(locale, "/labs");
  const modelUrl = labsUrl(locale, "/labs/unflatten-w");
  const status = `${common("researchPreview")} · ${common("comingSoon")}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: t("metadataTitle"),
    description: t("metadataDescription"),
    inLanguage: languageTags[locale],
    creativeWorkStatus: status,
    publisher: {
      "@type": "Organization",
      name: "Evoliq s.r.o.",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${url}#research-projects`,
      numberOfItems: 1,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TechArticle",
            "@id": `${modelUrl}#article`,
            url: modelUrl,
            headline: model("metadataTitle"),
            description: model("metadataDescription"),
            inLanguage: languageTags[locale],
            creativeWorkStatus: status,
          },
        },
      ],
    },
  };
}

export async function createUnflattenWJsonLd(locale: LabsLocale) {
  const [t, common] = await Promise.all([
    getTranslations({ locale, namespace: "UnflattenW" }),
    getTranslations({ locale, namespace: "LabsCommon" }),
  ]);
  const url = labsUrl(locale, "/labs/unflatten-w");
  const collectionUrl = labsUrl(locale, "/labs");
  const status = `${common("researchPreview")} · ${common("comingSoon")}`;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    url,
    headline: t("metadataTitle"),
    description: t("metadataDescription"),
    keywords: t.raw("metadataKeywords") as string[],
    inLanguage: languageTags[locale],
    creativeWorkStatus: status,
    image: imageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
    },
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${collectionUrl}#webpage`,
      url: collectionUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Evoliq s.r.o.",
      url: siteUrl,
    },
    about: {
      "@type": "SoftwareApplication",
      "@id": `${url}#research-model`,
      name: "Unflatten W",
      url,
      description: t("metadataDescription"),
      applicationCategory: "ResearchApplication",
      creativeWorkStatus: status,
    },
  };
}

export function serializeLabsJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
