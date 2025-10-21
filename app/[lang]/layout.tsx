import type { Metadata } from "next";
import "../globals.css";
import { getDictionary } from "../i18n";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Evoliq — IT solutions tailored",
  description: "Moderné weby, AI asistované aplikácie a integrácie na mieru.",
};

export default async function LangLayout({ children, params: { lang } }:{ children: React.ReactNode; params:{ lang: "sk"|"cz"|"en" }}){
  const dict = await getDictionary(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('theme');const m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add((s||m)==='dark'?'dark':'');}catch(e){}})();`
          }}
        />
        <div className="sticky top-0 z-50 w-full backdrop-blur-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href={`/${lang}#home`} className="flex items-center font-semibold tracking-tight">
              <span className="relative inline-block h-20 w-20 overflow-hidden sm:h-24 sm:w-24">
                <Image alt="Evoliq" src="/header-logo-evoliq-dark.png" fill className="object-contain dark:hidden scale-110"/>
                <Image alt="Evoliq" src="/header-logo-evoliq-white.png" fill className="object-contain hidden scale-110 dark:block"/>
              </span>
              <span className="sr-only">{dict.brand}</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm sm:flex">
              <a href={`/${lang}#services`} className="opacity-80 hover:opacity-100">{dict.nav.services}</a>
              <a href={`/${lang}#products`} className="opacity-80 hover:opacity-100">{dict.nav.products}</a>
              <a href={`/${lang}#about`} className="opacity-80 hover:opacity-100">{dict.nav.about}</a>
              <a href={`/${lang}#contact`} className="opacity-80 hover:opacity-100">{dict.nav.contact}</a>
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <a href={`/${lang}#contact`}><button className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">{dict.cta.contact}</button></a>
              <ThemeToggle />
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
