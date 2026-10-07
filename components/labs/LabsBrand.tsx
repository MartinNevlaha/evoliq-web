import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export default async function LabsBrand() {
  const t = await getTranslations('LabsCommon');

  return (
    <div className="inline-flex items-center gap-3">
      <span className="relative h-12 w-36 overflow-hidden">
        <Image src="/logo-dark.png" alt="Evoliq" fill sizes="144px" className="object-cover dark:hidden" />
        <Image src="/logo-white.png" alt="Evoliq" fill sizes="144px" className="hidden object-cover dark:block" />
      </span>
      <span className="border-l border-neutral-300 pl-3 text-xl font-semibold tracking-tight text-sky-600 dark:border-neutral-700 dark:text-sky-400">{t('labsLabel')}</span>
    </div>
  );
}
