"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/common/SectionTitle';
import { stagger, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export function About(){
  const t = useTranslations('About');
  
  return (<section id="about" className="mx-auto max-w-6xl px-4 py-20">
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }}>
      <SectionTitle kicker={t('kicker')} title={t('title')} subtitle={t('subtitle')} />
      
      <motion.div 
        variants={stagger} 
        className="mt-12 grid gap-8 md:grid-cols-3"
      >
        {[
          {icon: Code2, bg:'indigo', title:t('cards.expertise.title'), desc:t('cards.expertise.desc')},
          {icon: ShieldCheck, bg:'sky', title:t('cards.reliability.title'), desc:t('cards.reliability.desc')},
          {icon: Sparkles, bg:'emerald', title:t('cards.innovation.title'), desc:t('cards.innovation.desc')},
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
