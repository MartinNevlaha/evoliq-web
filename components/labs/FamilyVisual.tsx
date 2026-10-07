import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import ComingSoonBadge from './ComingSoonBadge';

export default async function FamilyVisual({ namespace }: { namespace: 'Labs' | 'UnflattenW' }) {
  const [locale, t] = await Promise.all([getLocale(), getTranslations(namespace)]);
  const src = locale === 'en' ? '/unflatten-family.svg' : `/unflatten-family-${locale}.svg`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <ComingSoonBadge />
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{t('familyVisualTitle')}</h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">{t('familyVisualText')}</p>
        </div>
        <figure className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <Image src={src} alt={t('familyVisualAlt')} width={1200} height={675} sizes="(min-width: 1024px) 640px, (min-width: 768px) 720px, 100vw" className="h-auto w-full rounded-[1.35rem]" />
        </figure>
      </div>
    </section>
  );
}
