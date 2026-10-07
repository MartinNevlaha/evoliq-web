import { ArrowDown, ArrowRight, Boxes, FileOutput, FileText, FlaskConical, ImageIcon, Network, ScanText, Sparkles, Table2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import NavBar from '@/components/sections/NavBar';
import { Footer } from '@/components/sections/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import ComingSoonBadge from '@/components/labs/ComingSoonBadge';
import LabsBrand from '@/components/labs/LabsBrand';
import UnflattenFamily from '@/components/labs/UnflattenFamily';
import FamilyVisual from '@/components/labs/FamilyVisual';
import ResearchStatus from '@/components/labs/ResearchStatus';

export default async function UnflattenWPage() {
  const t = await getTranslations('UnflattenW');
  const pipelineItems = t.raw('pipelineItems') as string[];
  const features = t.raw('features') as [string, string][];
  const architecturePills = t.raw('architecturePills') as string[];
  const featureIcons = [ScanText, Table2, ImageIcon, Boxes];
  const signals = [
    { icon: FlaskConical, label: t('researchDriven') },
    { icon: Sparkles, label: t('realDocs') },
    { icon: Network, label: t('structuredOutput') },
  ];

  return (
    <div className="min-h-dvh bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <NavBar />
      <main>
        <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(14,165,233,0.13),transparent_34%),radial-gradient(circle_at_15%_10%,rgba(99,102,241,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="min-w-0">
              <div className="mb-5 flex flex-wrap items-center gap-3"><LabsBrand /><ComingSoonBadge /></div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">{t('eyebrow')}</p>
              <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">{t('title')}</h1>
              <p className="mt-5 max-w-2xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{t('subtitle')}</p>
              <p className="mt-5 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-300 sm:text-lg sm:leading-8">{t('intro')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#capabilities" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">{t('explore')}<ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
                <a href="#technical" className="inline-flex items-center gap-2 rounded-2xl border border-sky-300 px-5 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:text-sky-300 dark:hover:bg-sky-950/40">{t('technicalOverview')}<FileOutput aria-hidden="true" className="h-4 w-4" /></a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                {signals.map(({ icon: Icon, label }) => <span key={label} className="inline-flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-sky-600 dark:text-sky-400" />{label}</span>)}
              </div>
            </div>
            <div className="min-w-0 rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50/90 via-white to-indigo-50/80 p-5 shadow-[0_24px_80px_rgba(14,165,233,0.10)] dark:border-sky-900/60 dark:from-sky-950/30 dark:via-neutral-900 dark:to-indigo-950/30 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xl font-bold">{t('title')}</p><ComingSoonBadge compact /></div>
              <ol className="mt-8 grid items-center gap-3 sm:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
                <li className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-900"><FileText aria-hidden="true" className="mx-auto h-9 w-9 text-red-500" /><p className="mt-3 text-sm font-semibold">{t('input')}</p></li>
                <li aria-hidden="true" className="mx-auto text-sky-500"><ArrowDown className="h-5 w-5 sm:hidden" /><ArrowRight className="hidden h-5 w-5 sm:block" /></li>
                <li className="min-w-0 rounded-2xl border border-sky-200 bg-white p-4 text-center dark:border-sky-800 dark:bg-neutral-900"><Network aria-hidden="true" className="mx-auto h-10 w-10 text-sky-500" /><p className="mt-3 text-sm font-bold">{t('understanding')}</p><p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{t('understandingDesc')}</p></li>
                <li aria-hidden="true" className="mx-auto text-sky-500"><ArrowDown className="h-5 w-5 sm:hidden" /><ArrowRight className="hidden h-5 w-5 sm:block" /></li>
                <li className="min-w-0 rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-900"><FileOutput aria-hidden="true" className="mx-auto h-9 w-9 text-blue-600 dark:text-blue-400" /><p className="mt-3 text-sm font-semibold">{t('output')}</p></li>
              </ol>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/70 p-4 dark:bg-neutral-900/70"><p className="text-sm font-semibold">{t('input')}</p><p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{t('inputDesc')}</p></div>
                <div className="rounded-2xl bg-white/70 p-4 dark:bg-neutral-900/70"><p className="text-sm font-semibold">{t('output')}</p><p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{t('outputDesc')}</p></div>
              </div>
              <ul className="mt-5 grid gap-3 text-xs text-neutral-600 dark:text-neutral-300 sm:grid-cols-2">
                {pipelineItems.map(item => <li key={item} className="flex items-center gap-2"><ArrowRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-sky-500" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('familyTitle')}</h2><p className="mt-4 max-w-4xl leading-7 text-neutral-600 dark:text-neutral-300">{t('familyIntro')}</p></div>
            <Link href="/labs" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-600 dark:text-sky-300">{t('familyLink')}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8"><UnflattenFamily /></div>
        </section>
        <section id="capabilities" className="scroll-mt-32 border-y border-neutral-200 bg-neutral-50/70 dark:border-neutral-800 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="flex flex-wrap items-center justify-between gap-4"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('whatTitle')}</h2><ComingSoonBadge /></div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map(([title, description], index) => {
                const Icon = featureIcons[index];
                return <article key={title} className="rounded-3xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300"><Icon aria-hidden="true" className="h-6 w-6" /></span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p></article>;
              })}
            </div>
          </div>
        </section>
        <FamilyVisual namespace="UnflattenW" />
        <section id="technical" className="scroll-mt-32 border-t border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_.95fr]">
              <div>
                <ComingSoonBadge />
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{t('architectureTitle')}</h2>
                <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">{t('architectureText')}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{architecturePills.map(pill => <li key={pill} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium dark:border-neutral-700 dark:bg-neutral-900">{pill}</li>)}</ul>
              </div>
              <div className="rounded-[2rem] border border-neutral-200 bg-gradient-to-br from-neutral-50 to-sky-50 p-6 dark:border-neutral-800 dark:from-neutral-900 dark:to-sky-950/30">
                <ol className="grid gap-3">
                  <li className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-950"><p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{t('technicalPixels')}</p><p className="mt-2 font-semibold">{t('technicalInput')}</p></li>
                  <li aria-hidden="true"><ArrowDown className="mx-auto h-5 w-5 text-sky-500" /></li>
                  <li className="rounded-2xl border border-sky-200 bg-white p-4 dark:border-sky-800 dark:bg-neutral-950"><p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{t('technicalModel')}</p><p className="mt-2 font-semibold">{t('technicalModelValue')}</p></li>
                  <li aria-hidden="true"><ArrowDown className="mx-auto h-5 w-5 text-sky-500" /></li>
                  <li className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-950"><p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{t('technicalValidated')}</p><p className="mt-2 font-semibold">{t('technicalOutput')}</p></li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <ResearchStatus namespace="UnflattenW" />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
