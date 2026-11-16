import { getTranslations } from 'next-intl/server';

export default async function ModelStatusBadge({ compact = false, status = 'comingSoon' }: { compact?: boolean; status?: 'comingSoon' | 'released' | 'researchPreview' }) {
  const t = await getTranslations('LabsCommon');

  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border font-medium ${status === 'released' ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300' : 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300'} ${compact ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${status === 'released' ? 'bg-emerald-500' : 'bg-sky-500'}`} />
      {t(status)}
    </span>
  );
}
