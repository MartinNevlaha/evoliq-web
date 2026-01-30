"use client";
import React from 'react';
import NavBar from '@/components/sections/NavBar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import { Products } from '@/components/sections/Products';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/sections/Footer';
import CookieConsent from '@/components/common/CookieConsent';

export default function Page(){
  // Note: Schemas should ideally be localized too, but for briefness using basics or passing props
  // For now keeping simpler page structure
  
  return (
    <>
      <div className="min-h-dvh bg-white dark:bg-neutral-950 text-black dark:text-white">
        <NavBar/>
        <Hero/>
        <Products/>
        <Services/>
        <About/>
        <Contact/>
        <Footer/>
        <CookieConsent/>
      </div>
    </>
  );
}
