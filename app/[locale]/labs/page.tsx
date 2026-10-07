import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  createLabsJsonLd,
  createLabsMetadata,
  serializeLabsJsonLd,
  validateLabsLocale,
} from "@/lib/labs-metadata";
import LabsPage from "./LabsPage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return createLabsMetadata(validateLabsLocale(locale), "/labs", "Labs");
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = validateLabsLocale(locale);
  setRequestLocale(validLocale);
  const jsonLd = await createLabsJsonLd(validLocale);

  return (
    <>
      <script
        id={`${validLocale}-labs-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeLabsJsonLd(jsonLd) }}
      />
      <LabsPage />
    </>
  );
}
