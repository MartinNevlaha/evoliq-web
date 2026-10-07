import { getTranslations } from 'next-intl/server';

export default async function ComingSoonBadge({ compact = false }: { compact?: boolean }) {
  const t = await getTranslations('LabsCommon');

  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300 ${compact ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-sm'}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sky-500" />
      {t('comingSoon')}
    </span>
  );
}
