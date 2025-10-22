"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Code2, X, Boxes, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavBar, Hero, Services, Contact } from '@/components/sections';
import SectionTitle from '@/components/common/SectionTitle';
import ImageModal from '@/components/common/ImageModal';
import CookieConsent from '@/components/common/CookieConsent';
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations';

function Products(){
  const [selectedImage, setSelectedImage] = React.useState<{src:string; alt:string} | null>(null);
  
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20">
      <AnimatePresence>
        {selectedImage && <ImageModal src={selectedImage.src} alt={selectedImage.alt} onClose={()=>setSelectedImage(null)}/>}
      </AnimatePresence>
      
      <motion.div 
        className="mx-auto max-w-2xl text-center mb-12"
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.6}}
      >
        <motion.div 
          className="mb-6 flex justify-center"
          initial={{scale:0, rotate:-180}}
          whileInView={{scale:1, rotate:0}}
          viewport={{once:true}}
          transition={{duration:0.6, type:"spring", stiffness:200}}
        >
          <motion.div 
            className="relative h-24 w-48"
            whileHover={{scale:1.1, rotate:5}}
            transition={{duration:0.3}}
          >
            <Image alt="AI-Control" src="/logo-removebg-preview.png" fill className="object-contain"/>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600"
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          whileHover={{scale:1.05}}
        >
          <motion.div
            animate={{rotate: [0, 360]}}
            transition={{duration: 3, repeat: Infinity, ease: "linear"}}
          >
            <Sparkles className="h-3.5 w-3.5"/>
          </motion.div>
          Produkt
        </motion.div>
        <motion.h2 
          className="text-3xl font-semibold leading-tight sm:text-4xl"
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.2}}
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
        </motion.h2>
        <motion.p 
          className="mt-3 text-neutral-600 dark:text-neutral-400"
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.3}}
        >
          Modulární platforma pro plánování, realizaci a vyhodnocování auditů s pomocí AI. Pro certifikační společnosti, konzultanty i interní audity.
        </motion.p>
      </motion.div>

      <motion.div 
        className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 mb-12"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.1}}
      >
        {[
          {icon:'📋', title:'Modul plánování auditů', desc:'AI asistované plánování (termíny, týmy, harmonogram) a automatické generování programů auditu, checklistů a reportů.'},
          {icon:'🏢', title:'Modul správy společností', desc:'Komplexní správa auditovaných společností, auditorů a technických expertů s interními profily generovanými AI.'},
          {icon:'📱', title:'Mobilní aplikace', desc:'Offline/online režim, foto a audio důkazy, elektronický podpis a export prezenční listiny přímo z terénu.'},
          {icon:'✅', title:'Modul nápravných opatření', desc:'Sledování nápravných opatření s termíny, zodpovědností a notifikacemi až po ověření a uzavření.'},
          {icon:'🏅', title:'Certifikační moduly', desc:'Specializované moduly pro ISO 9001, 14001, 27001, 45001 a interní audity s předpřipravenými kontrolními seznamy.'},
          {icon:'📚', title:'Legislativní modul', desc:'Databáze zákonů a norem s aktualizacemi, propojení s audity a automatické kontroly shody s legislativou.'},
          {icon:'👥', title:'Modul rolí a licencí', desc:'Pokročilá správa uživatelských práv, rolí a licencí s flexibilním nastavením přístupů pro různé typy uživatelů.'},
          {icon:'📊', title:'Analytický modul', desc:'Reporty, statistiky, trendy a prediktivní analýzy pomocí AI pro efektivnější řízení auditních procesů.'},
          {icon:'🔗', title:'Integrační modul', desc:'API a integrace s externími systémy (ERP, CRM, dokumentové systémy) pro plynulý tok dat.'},
        ].map((module, i) => (
          <motion.div 
            key={i}
            variants={fadeUp}
            whileHover={{
              scale:1.05, 
              y:-10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              transition: {duration:0.3, type:"spring", stiffness:300}
            }}
            className="rounded-3xl border p-6 bg-white/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-colors cursor-pointer group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-sky-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            />
            <motion.div
              initial={{rotate:0}}
              whileHover={{rotate:[0, -10, 10, -10, 0], scale:1.2}}
              transition={{duration:0.5}}
              className="text-3xl mb-3 inline-block"
            >
              {module.icon}
            </motion.div>
            <h3 className="text-lg font-medium mb-3 relative">{module.title}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 relative">{module.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="grid gap-4 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
      >
        <motion.div 
          variants={slideInLeft}
          whileHover={{scale:1.05, y:-10, rotateY:5}} 
          transition={{duration:0.3, type:"spring", stiffness:300}} 
          onClick={()=>setSelectedImage({src:'/audit-plan.png', alt:'Plán auditu'})} 
          className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative cursor-pointer group"
          style={{perspective:1000}}
        >
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
          >
            <Image alt="Plán auditu" src="/audit-plan.png" fill className="object-cover"/>
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 flex items-center justify-center"
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            transition={{duration:0.3}}
          >
            <motion.span 
              className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
              initial={{y:20, opacity:0}}
              whileHover={{y:0, opacity:1}}
              transition={{delay:0.1}}
            >
              Klikněte pro zvětšení
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={slideInRight}
          whileHover={{scale:1.05, y:-10, rotateY:-5}} 
          transition={{duration:0.3, type:"spring", stiffness:300}} 
          onClick={()=>setSelectedImage({src:'/swot.png', alt:'SWOT analýza'})} 
          className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative cursor-pointer group"
          style={{perspective:1000}}
        >
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
          >
            <Image alt="SWOT analýza" src="/swot.png" fill className="object-cover"/>
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 flex items-center justify-center"
            initial={{opacity:0}}
            whileHover={{opacity:1}}
            transition={{duration:0.3}}
          >
            <motion.span 
              className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
              initial={{y:20, opacity:0}}
              whileHover={{y:0, opacity:1}}
              transition={{delay:0.1}}
            >
              Klikněte pro zvětšení
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About(){
  return (<section id="about" className="mx-auto max-w-6xl px-4 py-20">
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }}>
      <SectionTitle kicker="O nás" title="Česká společnost zaměřená na IT" subtitle="Pomáháme organizacím digitalizovat procesy, automatizovat rutinní úkony a efektivně využívat moderní technologie pro růst jejich podnikání." />
      
      <motion.div 
        variants={stagger} 
        className="mt-12 grid gap-8 md:grid-cols-3"
      >
        {[
          {icon: Code2, bg:'indigo', title:'Expertíza', desc:'Tým zkušených vývojářů a konzultantů s hlubokými znalostmi moderních technologií a best practices.'},
          {icon: ShieldCheck, bg:'sky', title:'Spolehlivost', desc:'Důraz na kvalitu kódu, bezpečnost a dlouhodobou udržitelnost vytvářených řešení.'},
          {icon: Sparkles, bg:'emerald', title:'Inovace', desc:'Využíváme nejnovější technologie včetně AI a strojového učení pro vytváření inteligentních řešení.'},
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{y:-10, scale:1.03}}
            transition={{type:"spring", stiffness:300}}
          >
            <Card className="rounded-3xl border bg-white/70 dark:bg-neutral-900/70 hover:shadow-2xl transition-shadow cursor-pointer overflow-hidden group">
              <CardContent className="p-6 relative">
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-${item.bg}-500/10 rounded-full blur-3xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
                <motion.div 
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-${item.bg}-100 dark:bg-${item.bg}-900/30 relative`}
                  whileHover={{rotate:360, scale:1.1}}
                  transition={{duration:0.5}}
                >
                  <item.icon className={`h-6 w-6 text-${item.bg}-600 dark:text-${item.bg}-400`}/>
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 relative">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 relative">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </section>);
}

function Footer(){
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showGDPR, setShowGDPR] = React.useState(false);

  return (<footer className="border-t">
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
  </footer>);
}

export default function Page(){
  // JSON-LD Structured Data pro SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evoliq s.r.o.",
    "url": "https://evoliq.cz",
    "logo": "https://evoliq.cz/logo-dark.png",
    "description": "Česká IT společnost specializující se na vývoj webových aplikací, mobilních aplikací, AI řešení a automatizaci procesů.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CZ",
      "addressLocality": "Praha"
    },
    "sameAs": [
      "https://www.linkedin.com/company/evoliq",
      "https://github.com/evoliq"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@evoliq.cz",
      "availableLanguage": ["Czech", "English"]
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Development & Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Evoliq s.r.o."
    },
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vývoj webových aplikací",
            "description": "Moderní responzivní webové aplikace na míru s důrazem na uživatelskou přívětivost a výkon."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobilní aplikace",
            "description": "Nativní a cross-platform mobilní aplikace pro iOS a Android."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI řešení",
            "description": "Implementace umělé inteligence a strojového učení do vašich procesů."
          }
        }
      ]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Control",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Modulární platforma pro plánování, realizaci a vyhodnocování auditů s pomocí AI. Pro certifikační společnosti, konzultanty i interní audity.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InDevelopment"
    },
    "provider": {
      "@type": "Organization",
      "name": "Evoliq s.r.o."
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domů",
        "item": "https://evoliq.cz"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Služby",
        "item": "https://evoliq.cz#služby"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Produkty",
        "item": "https://evoliq.cz#produkty"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "O nás",
        "item": "https://evoliq.cz#onás"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Kontakt",
        "item": "https://evoliq.cz#kontakt"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <div className="min-h-dvh bg-white dark:bg-neutral-950 text-black dark:text-white">
        <NavBar/>
        <Hero/>
        <Services/>
        <Products/>
        <About/>
        <Contact/>
        <Footer/>
        <CookieConsent/>
      </div>
    </>
  );
}
