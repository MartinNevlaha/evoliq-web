"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import EvoliqAIVideoBackground from "@/components/common/EvoliqAIVideoBackground";
import NavBar from "@/components/sections/NavBar";
import {
  Building2,
  Shield,
  Award,
  Calendar,
  ClipboardCheck,
  FileCheck2,
  Languages,
  Cloud,
  Users,
  ChevronRight,
  Sparkles,
  Network,
  UserCog,
  X,
  Cookie,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Profil společnosti s AI",
    description:
      "Automatické vyplňování firemního profilu pomocí umělé inteligence. Správa oddělení, procesních map a certifikátů. SWOT analýza generovaná AI s aktuálními insights.",
    image: "/swot.png",
    details: [
      "AI-asistované vyplňování firemních údajů",
      "Správa organizační struktury a oddělení",
      "Automatická správa certifikátů s upozorněními",
      "Procesní mapy generované a optimalizované AI",
      "AI SWOT analýza s konkurenčním benchmarkingem",
    ],
  },
  {
    icon: UserCog,
    title: "Customizovatelná uživatelská oprávnění",
    description:
      "Flexibilní systém rolí a oprávnění přizpůsobený vaší organizační struktuře. Granulární kontrola přístupu k jednotlivým modulům, auditům a dokumentům.",
    image: "/audit-plan.png",
    details: [
      "Víceúrovňový systém rolí a oprávnění",
      "Přizpůsobitelné role pro audit manažery, auditory, uživatele",
      "Oprávnění na úrovni projektu, oddělení a dokumentu",
      "Audit trail pro všechny změny oprávnění",
      "Jednoduchá správa přes přehledné UI rozhraní",
    ],
  },
  {
    icon: Award,
    title: "Správa kvalifikací a certifikátů",
    description:
      "Komplexní správa kvalifikací auditorů a interních pracovníků s automatickým sledováním platnosti. AI asistent pro návrhy školení a certifikačních programů.",
    image: "/swot.png",
    details: [
      "Centrální databáze kvalifikací a certifikátů",
      "AI-asistované vyplňování údajů",
      "Automatická upozornění na expirující certifikáty",
      "AI doporučení pro rozvoj kompetencí",
      "Historie školení a vzdělávání",
      "Integrace s certifikačními autoritami",
    ],
  },
  {
    icon: Calendar,
    title: "Kalendář auditů",
    description:
      "Přehledný kalendář všech plánovaných a probíhajících auditů.",
    image: "/audit-plan.png",
    details: [
      "Vizuální kalendář s týdenním, měsíčním a ročním pohledem",
      "Připomínky a notifikace pro účastníky",
      "Export do CSV formátů",
    ],
  },
  {
    icon: FileCheck2,
    title: "Plán auditu s AI",
    description:
      "AI generuje komplexní plány auditů na základě norem (ISO 9001, ISO 27001, GDPR a dalších), historie auditů a specifik vaší organizace. Úspora desítek hodin manuální práce.",
    image: "/audit-plan.png",
    details: [
      "Automatické generování audit plánu podle norem",
      "Přizpůsobení specifikům organizace a odvětví",
      "Návrhy kontrolních otázek a checklistů",
      "Rozdělení zodpovědností a časový harmonogram",
      "Verzování a schvalovací proces",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "AI Checklist",
    description:
      "Inteligentní generování kontrolních seznamů (checklistů) pro jednotlivé audity. AI analyzuje požadavky norem, minulé nálezy a best practices z odvětví.",
    image: "/swot.png",
    details: [
      "Generování checklistů podle vybraných standardů",
      "Kontextové otázky přizpůsobené oddělení",
      "Přiřazení důkazů a dokumentace",
      "Scoring a vážení kritérií",
      "Export do PDF",
    ],
  },
  {
    icon: Shield,
    title: "Výkon auditu v UI",
    description:
      "Moderní a intuitivní rozhraní pro vykonávání auditů v terénu i na dálku. Jednoduché přidávání zjištění, komentářů a důkazů přímo v aplikaci.",
    image: "/audit-plan.png",
    details: [
      "Real-time spolupráce více auditorů",
      "Přímé nahrávaní a dokumentů",
      "Kategorizace zjištění (shoda, neshoda, pozorování)",
      "Poznámky, komentáře",
    ],
  },
  {
    icon: Sparkles,
    title: "Zpráva z auditu generovaná AI",
    description:
      "Profesionální zprávy z auditů generované umělou inteligencí za pár sekund. Automatická analýza zjištění, doporučení na zlepšení.",
    image: "/swot.png",
    details: [
      "Automatické generování zprávy z nálezů",
      "AI analýza trendů a rizik",
      "Doporučení na nápravná opatření",
      "Profesionální PDF reporty s brandingem",
      "Multilanguage podpora (SK, CZ, EN)",
    ],
  },
  {
    icon: Languages,
    title: "Vícejazyčnost",
    description:
      "Plná podpora slovenského, českého a anglického jazyka v celé aplikaci. Automatický překlad AI generovaných obsahů, reportů.",
    image: "/audit-plan.png",
    details: [
      "Uživatelské rozhraní v SK, CZ, EN",
      "AI překlad všech generovaných textů",
      "Lokalizované formáty datumů a čísel",
      "Vícejazyčné PDF reporty",
    ],
  },
];

const benefits = [
  {
    title: "Cloudové řešení",
    description:
      "Žádná potřeba instalace či údržby serverů. Přístup odkudkoliv přes webový prohlížeč. Automatické zálohování a dostupnost.",
    icon: Cloud,
  },
  {
    title: "Multitenant architektura",
    description:
      "Každá organizace má své izolované datové prostředí. Škálovatelnost, bezpečnost a GDPR compliance zaručeny na úrovni infrastruktury.",
    icon: Network,
  },
  {
    title: "Kolaborativní",
    description:
      "Týmová spolupráce v reálném čase. Více auditorů může pracovat současně na jednom auditu. Integrovaný schvalovací proces.",
    icon: Users,
  },
];

export default function AIControlPage() {
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showGDPR, setShowGDPR] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-indigo-950">
      {/* Animated AI Background */}
      <EvoliqAIVideoBackground 
        nodeCount={80} 
        connectDistance={160}
        hue={220}
        saturation={70}
        lightness={60}
        opacity={0.35}
      />

      {/* Header Navigation */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo s animáciou */}
            <motion.div 
              className="mb-6 flex justify-center"
              initial={{scale:0, rotate:-180}}
              animate={{scale:1, rotate:0}}
              transition={{duration:0.6, type:"spring", stiffness:200}}
            >
              <motion.div 
                className="relative h-24 w-48 md:h-32 md:w-64"
                whileHover={{scale:1.1, rotate:5}}
                transition={{duration:0.3}}
              >
                <Image alt="AI-Control" src="/logo-removebg-preview.png" fill className="object-contain"/>
              </motion.div>
            </motion.div>

            {/* Produkt badge */}
            <motion.div 
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-white/80 dark:bg-neutral-800/80 px-4 py-2 text-sm tracking-wide text-slate-700 dark:text-slate-300 shadow-lg backdrop-blur-sm"
              initial={{opacity:0, scale:0.8}}
              animate={{opacity:1, scale:1}}
              transition={{delay:0.2}}
              whileHover={{scale:1.05}}
            >
              <motion.div
                animate={{rotate: [0, 360]}}
                transition={{duration: 3, repeat: Infinity, ease: "linear"}}
              >
                <Sparkles className="h-4 w-4"/>
              </motion.div>
              Produkt
            </motion.div>

            {/* Hlavný nadpis */}
            <motion.h1 
              className="mb-2 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl dark:text-white"
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.3}}
            >
              AI-Control — <motion.span 
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{backgroundSize: '200% 200%'}}
              >Audit & Compliance</motion.span>
            </motion.h1>

            <motion.p 
              className="mx-auto mb-6 mt-4 max-w-3xl text-xl text-slate-600 dark:text-slate-300 md:text-2xl"
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.4}}
            >
              Inteligentní cloudový systém pro komplexní správu auditů, certifikací a kvality
            </motion.p>

            <motion.p 
              className="mx-auto mb-12 max-w-2xl text-lg text-slate-500 dark:text-slate-400"
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.5}}
            >
              Multitenant platforma s umělou inteligencí, která automatizuje plánování,
              vykonávání a reporting auditů. Dostupná v slovenštině, češtině a angličtině.
            </motion.p>

            {/* Video Preview */}
            <motion.div
              className="mb-10 flex justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border-4 border-white/50 bg-slate-900 shadow-2xl dark:border-neutral-800/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                  controls={false}
                >
                  <source src="/ai_control.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div 
              className="mb-12 flex flex-wrap items-center justify-center gap-4"
              initial={{opacity:0, y:20}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.6}}
            >
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-white shadow-lg">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Start cloudové provozu: 1.2.2026</span>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <motion.div 
              className="grid gap-6 md:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="rounded-2xl border border-slate-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/90 p-6 shadow-xl backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-slate-100">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-slate-800 dark:text-slate-100 md:text-5xl">
              Komplexní funkce pro{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                moderní audit
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Všechno, co potřebujete pro efektivní správu auditů a certifikací na jednom místě
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image/Screenshot Placeholder */}
                <div className="flex-1">
                  <div className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-neutral-700 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-neutral-800 dark:to-neutral-900 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-3xl">
                    <div className="aspect-video">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={450}
                        className="h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-2xl bg-white/95 dark:bg-neutral-800/95 px-6 py-4 shadow-xl backdrop-blur-sm">
                          <feature.icon className="mx-auto mb-2 h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                            Screenshot bude doplněn
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-4 inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-3 text-white shadow-lg">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-100">{feature.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400" />
                        <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1 shadow-2xl"
          >
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-10 md:p-16">
              <div className="text-center">
                <Sparkles className="mx-auto mb-6 h-16 w-16 text-indigo-600 dark:text-indigo-400" />
                <h2 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-100 md:text-4xl">
                  Připraveni modernizovat váš audit proces?
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                  Kontaktujte nás pro demo prezentaci nebo více informací o AI Control systému.
                  Cloudová provoz startuje 1.1.2026.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/#kontakt"
                    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"
                  >
                    Kontaktujte nás
                    <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/products/ai-control/case-study"
                    className="rounded-full border-2 border-indigo-300 dark:border-indigo-600 bg-white dark:bg-neutral-800 px-8 py-4 text-lg font-semibold text-indigo-700 dark:text-indigo-300 transition-all hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    Případová studie
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border-2 border-slate-300 dark:border-neutral-600 px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 transition-all hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    Zpět na hlavní stránku
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">© 2025 Evoliq s.r.o. Všechna práva vyhrazena.</p>
            <div className="flex gap-4">
              <button onClick={()=>setShowPrivacy(true)} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                Ochrana soukromí
              </button>
              <button onClick={()=>setShowGDPR(true)} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                GDPR
              </button>
              <button onClick={()=>{
                const event = new CustomEvent('openCookieSettings');
                window.dispatchEvent(event);
              }} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
                <Cookie className="h-3.5 w-3.5"/>
                Nastavení cookies
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showPrivacy && (
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}} 
              exit={{opacity:0}} 
              onClick={()=>setShowPrivacy(false)} 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <motion.div 
                initial={{scale:0.9, opacity:0}} 
                animate={{scale:1, opacity:1}} 
                exit={{scale:0.9, opacity:0}} 
                transition={{duration:0.3}} 
                onClick={(e)=>e.stopPropagation()} 
                className="relative max-w-2xl w-full max-h-[80vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b px-6 py-4 flex items-center justify-between z-10">
                  <h3 className="text-lg font-semibold">Zásady ochrany osobních údajů</h3>
                  <button onClick={()=>setShowPrivacy(false)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <X className="h-5 w-5"/>
                  </button>
                </div>
                <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-5rem)]">
                  <div className="prose dark:prose-invert max-w-none">
                    <h4>1. Správce osobních údajů</h4>
                    <p>Správcem vašich osobních údajů je Evoliq s.r.o., se sídlem [adresa], IČ: [IČO].</p>
                    
                    <h4>2. Jaké údaje zpracováváme</h4>
                    <p>Zpracováváme následující kategorie osobních údajů:</p>
                    <ul>
                      <li>Identifikační údaje (jméno, příjmení, e-mail, telefon)</li>
                      <li>Údaje o využívání našich služeb</li>
                      <li>Cookies a další analytické údaje</li>
                    </ul>

                    <h4>3. Účel zpracování</h4>
                    <p>Vaše osobní údaje zpracováváme za účelem:</p>
                    <ul>
                      <li>Poskytování našich služeb a produktů</li>
                      <li>Komunikace s vámi ohledně našich služeb</li>
                      <li>Zlepšování kvality našich služeb</li>
                      <li>Plnění zákonných povinností</li>
                    </ul>

                    <h4>4. Právní základ zpracování</h4>
                    <p>Údaje zpracováváme na základě:</p>
                    <ul>
                      <li>Vašeho souhlasu (čl. 6 odst. 1 písm. a) GDPR)</li>
                      <li>Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)</li>
                      <li>Oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR)</li>
                    </ul>

                    <h4>5. Doba uložení</h4>
                    <p>Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu zpracování, minimálně však po dobu stanovenou právními předpisy.</p>

                    <h4>6. Vaše práva</h4>
                    <p>Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. V případě otázek nás kontaktujte na [kontaktní e-mail].</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showGDPR && (
            <motion.div 
              initial={{opacity:0}} 
              animate={{opacity:1}} 
              exit={{opacity:0}} 
              onClick={()=>setShowGDPR(false)} 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            >
              <motion.div 
                initial={{scale:0.9, opacity:0}} 
                animate={{scale:1, opacity:1}} 
                exit={{scale:0.9, opacity:0}} 
                transition={{duration:0.3}} 
                onClick={(e)=>e.stopPropagation()} 
                className="relative max-w-2xl w-full max-h-[80vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b px-6 py-4 flex items-center justify-between z-10">
                  <h3 className="text-lg font-semibold">Informace o GDPR</h3>
                  <button onClick={()=>setShowGDPR(false)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <X className="h-5 w-5"/>
                  </button>
                </div>
                <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-5rem)]">
                  <div className="prose dark:prose-invert max-w-none">
                    <h4>General Data Protection Regulation (GDPR)</h4>
                    <p>GDPR je nařízení EU na ochranu osobních údajů, které vstoupilo v platnost 25. května 2018. Zajišťuje jednotná pravidla ochrany osobních údajů napříč Evropskou unií.</p>

                    <h4>Vaše práva podle GDPR:</h4>
                    <ul>
                      <li><strong>Právo na přístup:</strong> Máte právo získat informace o tom, jaké osobní údaje o vás zpracováváme.</li>
                      <li><strong>Právo na opravu:</strong> Máte právo požadovat opravu nepřesných nebo neúplných údajů.</li>
                      <li><strong>Právo na výmaz:</strong> Můžete požádat o vymazání svých osobních údajů („právo být zapomenut").</li>
                      <li><strong>Právo na omezení zpracování:</strong> Můžete požádat o omezení zpracování vašich údajů.</li>
                      <li><strong>Právo na přenositelnost:</strong> Máte právo získat své údaje ve strukturovaném, běžně používaném formátu.</li>
                      <li><strong>Právo vznést námitku:</strong> Můžete vznést námitku proti zpracování vašich údajů.</li>
                      <li><strong>Právo odvolat souhlas:</strong> Pokud je zpracování založeno na souhlasu, můžete jej kdykoli odvolat.</li>
                    </ul>

                    <h4>Jak uplatnit svá práva:</h4>
                    <p>Pro uplatnění svých práv nás kontaktujte na e-mailu: [kontaktní e-mail]</p>
                    <p>Odpovíme vám bez zbytečného odkladu, nejpozději do 1 měsíce od obdržení žádosti.</p>

                    <h4>Stížnost u dozorového úřadu:</h4>
                    <p>Máte právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz), pokud se domníváte, že zpracování vašich osobních údajů porušuje GDPR.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    </div>
  );
}
