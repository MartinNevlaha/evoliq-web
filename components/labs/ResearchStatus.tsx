import { FlaskConical } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import ComingSoonBadge from './ComingSoonBadge';

export default async function ResearchStatus({ namespace }: { namespace: 'Labs' | 'UnflattenW' }) {
  const t = await getTranslations(namespace);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
      <div className="rounded-[2rem] border border-sky-200 bg-sky-50/70 p-6 dark:border-sky-900 dark:bg-sky-950/20 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <FlaskConical aria-hidden="true" className="h-5 w-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-xl font-bold">{t('statusTitle')}</h2>
          <ComingSoonBadge compact />
        </div>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('statusText')}</p>
      </div>
    </section>
  );
}
