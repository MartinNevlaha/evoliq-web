"use client";
import React from 'react';
import NavBar from '@/components/sections/NavBar';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <div className="min-h-dvh bg-white dark:bg-neutral-950 text-black dark:text-white">
      <NavBar/>
      
      {/* Simple Hero for Services Page */}
      <div className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
          {t('title')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <Services/>
      
      <Contact/>
      <Footer/>
      <CookieConsent/>
    </div>
  );
}
