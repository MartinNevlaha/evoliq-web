import { getTranslations } from 'next-intl/server';
import NavBar from '@/components/sections/NavBar';
import { Footer } from '@/components/sections/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import ComingSoonBadge from '@/components/labs/ComingSoonBadge';
import LabsBrand from '@/components/labs/LabsBrand';
import UnflattenFamily from '@/components/labs/UnflattenFamily';
import FamilyVisual from '@/components/labs/FamilyVisual';
import ResearchStatus from '@/components/labs/ResearchStatus';

export default async function LabsPage() {
  const t = await getTranslations('Labs');

  return (
    <div className="min-h-dvh bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <NavBar />
      <main>
        <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.13),transparent_65%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:py-20">
            <LabsBrand />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">{t('eyebrow')}</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-6xl">{t('title')}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">{t('lead')}</p>
            <div className="mt-7"><ComingSoonBadge /></div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 pt-14 sm:pt-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('family')}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">{t('familyText')}</p>
          <div className="mt-8"><UnflattenFamily linkToModel /></div>
        </section>
        <FamilyVisual namespace="Labs" />
        <ResearchStatus namespace="Labs" />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
