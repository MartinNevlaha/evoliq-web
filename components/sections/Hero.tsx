"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Code2, Gauge, Boxes } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { stagger, staggerFast, scaleIn, fadeUp, slideInLeft } from '@/lib/animations';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden"
      aria-label="Úvodní sekce"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-emerald-500/20 blur-3xl"
        aria-hidden="true"
      />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 opacity-20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          aria-hidden="true"
        />
      ))}
      
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:py-28 md:grid-cols-2">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <motion.div 
            variants={scaleIn} 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="mb-4 inline-flex items-center gap-3 rounded-full border px-3 py-1 cursor-pointer"
            role="img"
            aria-label="Logo Evoliq"
          >
            <span className="relative inline-block h-5 w-5">
              <Image alt="Evoliq logo" src="/logo-evoliq-dark.png" fill className="object-contain dark:hidden"/>
              <Image alt="Evoliq logo" src="/logo-evoliq-light.png" fill className="object-contain hidden dark:block"/>
            </span>
            <span className="text-xs opacity-70">Evoliq</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            IT řešení šitá na míru <motion.span 
              className="text-gradient bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >vašemu podnikání</motion.span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-neutral-600 dark:text-neutral-400">
            Tvoříme moderní weby, AI asistované aplikace a integrace na míru. Od nápadu po produkci – bezpečně, výkonně a udržitelně.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-2xl">Začít projekt <ArrowRight className="ml-2 h-4 w-4"/></Button>
            </motion.a>
            <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="rounded-2xl">Zobrazit projekty</Button>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }} 
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/10 to-emerald-500/20 blur-xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Card className="relative rounded-3xl border bg-white/80 dark:bg-neutral-900/80 shadow-xl backdrop-blur">
              <CardContent className="p-6">
                <motion.div className="grid gap-4" variants={staggerFast} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <motion.div 
                    variants={slideInLeft}
                    whileHover={{ x: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    className="flex items-center justify-between rounded-2xl border bg-white/80 dark:bg-neutral-800/80 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="text-sm">CI/CD nasazení</div>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Gauge className="h-5 w-5 opacity-70"/>
                    </motion.div>
                  </motion.div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: <ShieldCheck className='h-4 w-4'/>, label: 'Bezpečnost' },
                      { icon: <Code2 className='h-4 w-4'/>, label: 'Čistý kód' },
                      { icon: <Boxes className='h-4 w-4'/>, label: 'Modularita' }
                    ].map((it, i) => (
                      <motion.div 
                        key={i} 
                        variants={scaleIn}
                        whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                        className="rounded-xl border p-3 text-center text-xs opacity-80 cursor-pointer"
                      >
                        <motion.div 
                          className="mx-auto mb-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {it.icon}
                        </motion.div>
                        {it.label}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
