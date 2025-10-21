import { getDictionary } from "../i18n";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, ShieldCheck, Code2, Gauge, Boxes, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import ProductScreenshots from "@/components/ProductScreenshots";

export default async function Page({ params: { lang } }:{ params: { lang: "sk"|"cz"|"en" } }){
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-dvh bg-white text-black dark:bg-neutral-900 dark:text-white">
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:py-28 md:grid-cols-2">
          <div>
            <div className="mb-3 inline-flex items-center gap-3 rounded-full border px-3 py-1">
              <span className="relative inline-block h-5 w-5 bg-black/10 dark:bg-white/10 rounded-full" />
              <span className="text-xs opacity-70">{dict.hero.kicker}</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">{dict.hero.title}</h1>
            <p className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-300">{dict.hero.desc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`/${lang}#contact`}><button className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">{dict.cta.start} <ArrowRight className="ml-2 inline-block h-4 w-4"/></button></a>
              <a href={`/${lang}#products`}><button className="rounded-2xl border px-4 py-2 text-sm">{dict.nav.products}</button></a>
            </div>
            <div className="mt-8 flex items-center gap-6 opacity-70">
              <div className="text-sm">SSR/SSG</div>
              <div className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/40" />
              <div className="text-sm">Tailwind</div>
              <div className="h-1 w-1 rounded-full bg-black/30 dark:bg-white/40" />
              <div className="text-sm">Framer Motion</div>
            </div>
          </div>
          <div>
            <Card className="rounded-3xl border bg-white/80 shadow-xl backdrop-blur dark:bg-neutral-800/70">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-2xl border bg-white/70 p-4 dark:bg-neutral-800/70">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <div className="text-sm">CI/CD</div>
                    </div>
                    <Gauge className="h-5 w-5 opacity-70" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: ShieldCheck, label: "Security" },
                      { icon: Code2, label: "Clean code" },
                      { icon: Boxes, label: "Modularity" },
                    ].map((it, i) => (
                      <div key={i} className="rounded-xl border p-3 text-center text-xs opacity-80">
                        <div className="mx-auto mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border">
                          <it.icon className="h-4 w-4" />
                        </div>
                        {it.label}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-300"><Sparkles className="h-3.5 w-3.5"/>{dict.services.kicker}</div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{dict.services.title}</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{dict.services.subtitle}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.cards.map((c:any, i:number) => (
            <div key={i} className="rounded-3xl border bg-white/60 p-6 backdrop-blur dark:bg-neutral-800/60">
              <div className="mb-3 inline-flex rounded-full border px-3 py-1 text-xs opacity-80">{c.title}</div>
              <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-300">{c.desc}</p>
              <ul className="space-y-2 text-sm">{c.points.map((p:string, idx:number)=>(<li key={idx} className="flex items-center gap-2 opacity-90"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70"/>{p}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mx-auto mb-6 flex h-28 w-40 items-center justify-center sm:h-32 sm:w-48">
            <Image src="/ai-controll.png" alt="AI-Control logo" width={192} height={128} priority className="h-full w-full object-contain" />
          </div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-300"><Sparkles className="h-3.5 w-3.5"/>{dict.products.kicker}</div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{dict.products.title}</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{dict.products.desc}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border p-6 dark:border-white/10">
            <h3 className="text-lg font-medium mb-2">{dict.products.benefitsTitle}</h3>
            <ul className="space-y-2 text-sm">
              {dict.products.benefits.map((b:string, i:number)=> (
                <li key={i} className="flex gap-2"><span className="h-1.5 w-1.5 rounded-full bg-black/40 dark:bg-white/70 mt-2"></span>{b}</li>
              ))}
            </ul>
          </div>
          <ProductScreenshots
            shots={[
              { src: "/ai-controll-login.png", alt: "AI-Control login screen", span: "wide" },
              { src: "/ai-controll-dashboard.png", alt: "AI-Control dashboard" },
              { src: "/ai-controll-planner.png", alt: "AI-Control audit planner" },
            ]}
          />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600 dark:text-neutral-300"><Sparkles className="h-3.5 w-3.5"/>{dict.contact.kicker}</div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{dict.contact.title}</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{dict.contact.subtitle}</p>
        </div>
        <form className="rounded-3xl border bg-white/70 p-6 backdrop-blur dark:bg-neutral-800/70" method="post" action={`/${lang}/api/contact`}>
          <div className="grid gap-4 text-sm">
            <input name="name" placeholder="Meno / Name" required className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
            <input name="phone" placeholder="Telefón / Phone" className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
            <textarea name="message" rows={4} placeholder="Správa / Message" required className="w-full rounded-xl border px-3 py-2 bg-transparent"/>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm opacity-80"><span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@evoliq.dev</span><span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> +421 900 000 000</span><span className="hidden items-center gap-2 sm:inline-flex"><MapPin className="h-4 w-4" /> Bratislava, SK</span></div>
              <button className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black">{dict.cta.send} <ArrowRight className="ml-2 inline-block h-4 w-4"/></button>
            </div>
          </div>
        </form>
      </section>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 px-4 py-14 text-center sm:flex-row sm:text-left">
          <div className="relative h-24 w-64 overflow-hidden sm:h-32 sm:w-80">
            <Image alt="Evoliq" src="/logo-evoliq-dark.png" fill className="object-contain dark:hidden scale-150" />
            <Image alt="Evoliq" src="/logo-evoliq-light.png" fill className="object-contain hidden scale-150 dark:block" />
          </div>
          <div className="space-y-1 text-sm opacity-80">
            <div>© {new Date().getFullYear()} Evoliq. All rights reserved.</div>
            <div className="opacity-80">{dict.footer.tagline}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
