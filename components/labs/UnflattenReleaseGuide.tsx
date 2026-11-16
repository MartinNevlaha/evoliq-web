import { ArrowUpRight, Download, Terminal } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { unflattenRelease } from '@/lib/unflatten-release';

const linkClass = 'inline-flex items-center gap-2 rounded-xl border border-sky-200 px-4 py-2.5 text-sm font-semibold text-sky-800 hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:border-sky-800 dark:text-sky-300 dark:hover:bg-sky-950';
const cardClass = 'min-w-0 rounded-3xl border border-neutral-200 p-6 dark:border-neutral-800 sm:p-8';

export default async function UnflattenReleaseGuide() {
  const t = await getTranslations('UnflattenRelease');
  const requirements = t.raw('requirements') as string[];
  const limitations = t.raw('limitations') as string[];
  const evaluationRows = t.raw('evaluationRows') as [string, string][];

  return (
    <section id="release" className="mx-auto max-w-6xl scroll-mt-32 px-4 pt-14 sm:pt-20">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
      <p className="mt-4 max-w-4xl leading-7 text-neutral-600 dark:text-neutral-300">{t('intro')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={unflattenRelease.model} className={linkClass}><Download aria-hidden="true" className="h-4 w-4" />{t('modelLink')}</a>
        <a href={unflattenRelease.tool} className={linkClass}>{t('toolLink')}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className={cardClass}>
          <h3 className="flex items-center gap-2 text-xl font-bold"><Terminal aria-hidden="true" className="h-5 w-5 text-sky-600" />{t('quickstartTitle')}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('quickstartText')}</p>
          <pre className="mt-5 overflow-x-auto rounded-2xl bg-neutral-950 p-4 text-xs leading-6 text-neutral-100"><code>{`git clone ${unflattenRelease.tool}\ncd UnflattenW_Inference_tool-\n./Start.sh`}</code></pre>
          <h4 className="mt-6 font-semibold">{t('apiTitle')}</h4>
          <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('apiText')}</p>
          <a href={unflattenRelease.api} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300">{t('docsLink')}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-bold">{t('requirementsTitle')}</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{requirements.map(item => <li key={item}>{item}</li>)}</ul>
          <h4 className="mt-6 font-semibold">{t('licenseTitle')}</h4>
          <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('licenseText')}</p>
          <a href={unflattenRelease.license} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline dark:text-sky-300">{t('licenseLink')}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-bold">{t('evaluationTitle')}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('evaluationIntro')}</p>
          <table className="mt-5 w-full text-sm"><caption className="sr-only">{t('evaluationTitle')}</caption><tbody>{evaluationRows.map(([label, value]) => <tr key={label} className="border-b border-neutral-200 dark:border-neutral-800"><th scope="row" className="py-3 pr-4 text-left font-medium">{label}</th><td className="py-3 text-right tabular-nums">{value}</td></tr>)}</tbody></table>
          <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('evaluationNote')}</p>
        </div>
        <div className={cardClass}>
          <h3 className="text-xl font-bold">{t('limitationsTitle')}</h3>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{limitations.map(item => <li key={item}>{item}</li>)}</ul>
          <p className="mt-6 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{t('sourcesLabel')} <a href={unflattenRelease.model} className="font-semibold text-sky-700 underline dark:text-sky-300">{t('modelLink')}</a> · <a href={unflattenRelease.tool} className="font-semibold text-sky-700 underline dark:text-sky-300">{t('toolLink')}</a></p>
        </div>
      </div>
    </section>
  );
}
