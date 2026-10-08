import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import ComingSoonBadge from './ComingSoonBadge';

export default async function ArchitectureVisuals() {
  const [t, common] = await Promise.all([getTranslations('UnflattenW'), getTranslations('LabsCommon')]);
  const visuals = [
    {
      src: '/labs/unflatten-w-dense-architecture.jpg',
      title: t('denseVisualTitle'),
      caption: t('denseVisualCaption'),
      alt: t('denseVisualAlt'),
    },
    {
      src: '/labs/unflatten-w-moe-architecture.jpg',
      title: t('moeVisualTitle'),
      caption: t('moeVisualCaption'),
      alt: t('moeVisualAlt'),
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('architectureVisualsTitle')}</h2>
      <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">{t('architectureVisualsIntro')}</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {visuals.map(({ src, title, caption, alt }) => (
          <figure key={src} className="min-w-0 overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-wrap items-center justify-between gap-3 p-5"><h3 className="text-lg font-bold">{title}</h3><ComingSoonBadge compact /></div>
            <a href={src} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">
              <Image src={src} alt={alt} width={1536} height={1024} sizes="(min-width: 1024px) 544px, (min-width: 768px) 720px, 100vw" className="h-auto w-full" />
            </a>
            <figcaption className="p-5">
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{caption}</p>
              <a href={src} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300"><Maximize2 aria-hidden="true" className="h-4 w-4" />{common('openVisual')}</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
