"use client";
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { stagger, fadeUp } from '@/lib/animations';

export default function Services() {
  const steps = [
    'Analýza existujícího stavu a požadavků',
    'Technický koncept s demonstrací funkcionalit',
    'Uživatelský prototyp',
    'Designová specifikace a detailní technický návrh',
    'Vývoj aplikace',
    'Integrace',
    'Testování výkonu a optimalizace',
    'Instalace řešení',
    'Nasazení a testování',
    'Postimplementační podpora'
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <SectionTitle 
          kicker="Co děláme" 
          title="IT řešení na míru" 
          subtitle="Vývoj softwaru na míru přináší inovativní řešení na specifické problémy tam, kde běžný software nestačí. Zaměřujeme se primárně na webová řešení a enterprise systémy, které připravujeme vždy v souladu s aktuálními standardy a trendy." 
        />
        
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            Každý náš projekt na míru je jedinečný a podle toho k našim zákazníkům také přistupujeme.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16">
          <motion.h3 
            className="text-2xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Naše práce se skládá z:
          </motion.h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{
                  scale: 1.05, 
                  x: 10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 }
                }}
                className="flex items-start gap-3 p-4 rounded-xl border bg-white/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-900 transition-colors cursor-pointer group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:text-emerald-600 transition-colors" />
                </motion.div>
                <span className="text-sm">{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
