import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  createLabsMetadata,
  createUnflattenWJsonLd,
  serializeLabsJsonLd,
  validateLabsLocale,
} from "@/lib/labs-metadata";
import UnflattenWPage from "./UnflattenWPage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return createLabsMetadata(
    validateLabsLocale(locale),
    "/labs/unflatten-w",
    "UnflattenW",
  );
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = validateLabsLocale(locale);
  setRequestLocale(validLocale);
  const jsonLd = await createUnflattenWJsonLd(validLocale);

  return (
    <>
      <script
        id={`${validLocale}-unflatten-w-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLabsJsonLd(jsonLd) }}
      />
      <UnflattenWPage />
    </>
  );
}
