"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Code2, Gauge, Boxes, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ThemeToggle from '@/components/ThemeToggle';

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1] as const}} };
const stagger = { hidden:{}, show:{transition:{staggerChildren:0.1}} };

function SectionTitle({kicker,title,subtitle}:{kicker?:string;title:string;subtitle?:string}){
  return (<motion.div variants={fadeUp} className="mx-auto max-w-2xl text-center">
    {kicker && (<div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600"><Sparkles className="h-3.5 w-3.5"/>{kicker}</div>)}
    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-neutral-600">{subtitle}</p>}
  </motion.div>);
}

function NavBar(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30,mass:0.2});
  return (<div className="sticky top-0 z-50 w-full backdrop-blur-lg">
    <motion.div style={{scaleX}} className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"/>
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
      <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
        <span className="relative inline-block h-7 w-7">
          <Image alt="Evoliq" src="/logo-evoliq-dark.png" fill className="rounded-md object-contain dark:hidden"/>
          <Image alt="Evoliq" src="/logo-evoliq-light.png" fill className="rounded-md object-contain hidden dark:block"/>
        </span>
        <span>Evoliq</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm sm:flex">
        <a href="#services" className="opacity-80 hover:opacity-100">Služby</a>
        <a href="#projects" className="opacity-80 hover:opacity-100">Projekty</a>
        <a href="#about" className="opacity-80 hover:opacity-100">O nás</a>
        <a href="#contact" className="opacity-80 hover:opacity-100">Kontakt</a>
      </nav>
      <div className="flex items-center gap-2"><ThemeToggle /><a href="#contact"><Button className="rounded-2xl">Kontaktuj nás</Button></a></div>
    </div>
  </div>);
}

function Hero(){
  return (<section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-emerald-500/20 blur-3xl"/>
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:py-28 md:grid-cols-2">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.4 }}>
        <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-3 rounded-full border px-3 py-1">
          <span className="relative inline-block h-5 w-5">
            <Image alt="Evoliq" src="/logo-evoliq-dark.png" fill className="object-contain dark:hidden"/>
            <Image alt="Evoliq" src="/logo-evoliq-light.png" fill className="object-contain hidden dark:block"/>
          </span><span className="text-xs opacity-70">Evoliq</span>
        </motion.div>
        <motion.h1 variants={fadeUp} className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
          IT solutions tailored <span className="text-gradient bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">for your business</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-neutral-600">Tvoríme moderné weby, AI asistované aplikácie a integrácie na mieru. Od nápadu po produkciu – bezpečne, výkonne a udržateľne.</motion.p>
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
          <a href="#contact"><Button className="rounded-2xl">Začať projekt <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
          <a href="#projects"><Button variant="outline" className="rounded-2xl">Pozrieť projekty</Button></a>
        </motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{ once:true, amount:0.3 }} transition={{duration:0.7,ease:[0.22,1,0.36,1]}}>
        <div className="relative"><div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-emerald-500/20 blur-xl"/>
          <Card className="relative rounded-3xl border bg-white/80 shadow-xl backdrop-blur"><CardContent className="p-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between rounded-2xl border bg-white/80 p-4"><div className="flex items-center gap-3"><span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"/><div className="text-sm">CI/CD nasadenie</div></div><Gauge className="h-5 w-5 opacity-70"/></div>
              <div className="grid grid-cols-3 gap-3">{[{icon:<ShieldCheck className='h-4 w-4'/>,label:'Bezpečnosť'},{icon:<Code2 className='h-4 w-4'/>,label:'Čistý kód'},{icon:<Boxes className='h-4 w-4'/>,label:'Modularita'}].map((it,i)=>(<div key={i} className="rounded-xl border p-3 text-center text-xs opacity-80"><div className="mx-auto mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border">{it.icon}</div>{it.label}</div>))}</div>
            </div>
          </CardContent></Card>
        </div>
      </motion.div>
    </div>
  </section>);
}

function Services(){return (<section id="services" className="mx-auto max-w-6xl px-4 py-20">
  <SectionTitle kicker="Čo robíme" title="IT riešenia na mieru" subtitle="Od prototypu po škálovanú produkciu – pokrývame celý cyklus vývoja." />
</section>);}

function Contact(){
  const [loading,setLoading]=React.useState(false); const [ok,setOk]=React.useState<null|boolean>(null); const formRef=React.useRef<HTMLFormElement|null>(null);
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setLoading(true);setOk(null);
    const fd = new FormData(e.currentTarget); const payload = Object.fromEntries(fd.entries());
    const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    setLoading(false); setOk(res.ok); if(res.ok) formRef.current?.reset();
  }
  return (<section id="contact" className="relative">
    <div className="mx-auto max-w-6xl px-4 py-20">
      <SectionTitle kicker="Kontakt" title="Povedzte nám o svojom projekte" subtitle="Odpovieme do 24 hodín a navrhneme ďalší postup." />
      <div className="rounded-3xl border bg-white/70 p-6 backdrop-blur">
        <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 text-sm">
          <input name="name" placeholder="Meno" required className="w-full rounded-xl border px-3 py-2"/>
          <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl border px-3 py-2"/>
          <input name="phone" placeholder="Telefón" className="w-full rounded-xl border px-3 py-2"/>
          <textarea name="message" rows={4} placeholder="Správa" required className="w-full rounded-xl border px-3 py-2"/>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm opacity-80"><span className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> hello@evoliq.dev</span><span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> +421 900 000 000</span><span className="hidden sm:inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Bratislava, SK</span></div>
            <Button className="rounded-2xl" disabled={loading}>{loading?'Odosielam...':'Odoslať'} <ArrowRight className="ml-2 h-4 w-4"/></Button>
          </div>
          {ok===true && <p className="text-sm text-green-600">Správa bola odoslaná.</p>}
          {ok===false && <p className="text-sm text-red-600">Ups, niečo sa pokazilo.</p>}
        </form>
      </div>
    </div>
  </section>);
}

function Footer(){return (<footer className="border-t"><div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8"><div className="text-sm opacity-80">© {new Date().getFullYear()} Evoliq</div><div className="text-sm opacity-70">IT solutions tailored.</div></div></footer>);}

export default function Page(){return (<div className="min-h-dvh bg-white text-black">
  <NavBar/><Hero/><Services/><Products/><Contact/><Footer/>
</div>);}


function Products(){
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600"><Sparkles className="h-3.5 w-3.5"/>Produkt</div>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">AI-Control — Audit & Compliance</h2>
        <p className="mt-3 text-neutral-600">Modulárna platforma pre plánovanie, realizáciu a vyhodnocovanie auditov s pomocou AI. Pre certifikačné spoločnosti, konzultantov aj interné audity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border p-6">
          <h3 className="text-lg font-medium mb-2">Kľúčové prínosy</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span>AI asistované <strong>plánovanie auditov</strong> (termíny, tímy, harmonogram) a generovanie programu auditu, checklistov a reportov.</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span><strong>Správa auditovaných spoločností</strong>, audítorov a technických expertov s internými profilmi generovanými AI.</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span>Mobilná aplikácia (online/offline), foto/audio dôkazy, <strong>elektronický podpis</strong> a export prezenčnej listiny.</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span><strong>Nápravné opatrenia</strong> s termínmi, zodpovednosťou a notifikáciami až po overenie a uzavretie.</li>
            <li className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span>Moduly: ISO 9001, 14001, 27001, 45001, interné audity; legislatívny modul; <strong>role & licencie</strong>.</li>
          </ul>
        </div>
        <div className="grid gap-4">
          <div className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300">Screenshot placeholder</div>
          <div className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-300">Screenshot placeholder</div>
        </div>
      </div>
    </section>
  );
}

