import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import ComingSoonBadge from './ComingSoonBadge';

export default async function FamilyVisual({ namespace }: { namespace: 'Labs' | 'UnflattenW' }) {
  const [t, common] = await Promise.all([getTranslations(namespace), getTranslations('LabsCommon')]);
  const src = '/labs/unflatten-family-brand.png';

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <ComingSoonBadge />
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{t('familyVisualTitle')}</h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">{t('familyVisualText')}</p>
        </div>
        <figure className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <a href={src} target="_blank" rel="noopener noreferrer" className="block rounded-[1.35rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">
            <Image src={src} alt={t('familyVisualAlt')} width={1536} height={1024} sizes="(min-width: 1024px) 640px, (min-width: 768px) 720px, 100vw" className="h-auto w-full rounded-[1.35rem]" />
          </a>
          <figcaption className="px-2 pb-1 pt-3 text-sm text-sky-700 dark:text-sky-300">
            <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Maximize2 aria-hidden="true" className="h-4 w-4" />{common('openVisual')}</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
