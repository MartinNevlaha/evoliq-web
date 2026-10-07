import { ArrowRight, FileText, Layers3, Presentation, Table2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import ComingSoonBadge from './ComingSoonBadge';

export default async function UnflattenFamily({ linkToModel = false }: { linkToModel?: boolean }) {
  const t = await getTranslations('UnflattenW');
  const labs = await getTranslations('Labs');
  const cards = [
    { icon: FileText, title: t('title'), description: t('wDesc'), model: true },
    { icon: Table2, title: 'Unflatten X', description: t('xDesc') },
    { icon: Presentation, title: 'Unflatten P', description: t('pDesc') },
    { icon: Layers3, title: t('shared'), description: t('sharedDesc') },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ icon: Icon, title, description, model }) => (
        <article key={title} className={`flex min-w-0 flex-col rounded-3xl border p-5 ${model ? 'border-sky-300 bg-gradient-to-br from-sky-50 to-indigo-50/50 dark:border-sky-800 dark:from-sky-950/40 dark:to-indigo-950/20' : 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900'}`}>
          <div className="mb-5 flex items-start justify-between gap-2">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><Icon aria-hidden="true" className="h-6 w-6" /></span>
            <ComingSoonBadge compact />
          </div>
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p>
          {model && linkToModel && (
            <Link href="/labs/unflatten-w" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-600 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:text-sky-300">
              {labs('open')}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
