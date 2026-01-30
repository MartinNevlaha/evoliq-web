"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Flame, ClipboardCheck, ArrowRight, Activity, FileText, Search, MessageSquare } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { stagger, fadeUp } from '@/lib/animations';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  // Helper to get arrays from translation messages
  // This avoids TypeScript errors when accessing array indices dynamically if not properly typed
  const getList = (key: string) => {
    const items = [];
    let i = 0;
    while (true) {
      try {
        const item = t(`${key}.${i}`);
        if (item === `${key}.${i}`) break;
        items.push(item);
        i++;
      } catch (e) {
        break;
      }
    }
    return items;
  };
  
  // Alternative method for next-intl if keys are strictly defined in arrays in JSON
  const benefitsList = [
    t('benefits.list.0'),
    t('benefits.list.1'),
    t('benefits.list.2'),
    t('benefits.list.3')
  ];

  const auditTypes = [
    {
      id: "bozp",
      icon: <ShieldCheck className="h-8 w-8 text-indigo-500" />,
      items: [t('auditTypes.bozp.list.0'), t('auditTypes.bozp.list.1'), t('auditTypes.bozp.list.2')]
    },
    {
      id: "po",
      icon: <Flame className="h-8 w-8 text-red-500" />,
      items: [t('auditTypes.po.list.0'), t('auditTypes.po.list.1'), t('auditTypes.po.list.2')]
    },
    {
      id: "quality",
      icon: <ClipboardCheck className="h-8 w-8 text-emerald-500" />,
      items: [t('auditTypes.quality.list.0'), t('auditTypes.quality.list.1'), t('auditTypes.quality.list.2')]
    }
  ];

  const whyUsList = [
    t('whyUs.list.0'),
    t('whyUs.list.1'),
    t('whyUs.list.2'),
    t('whyUs.list.3')
  ];

  const processSteps = [
    { icon: <MessageSquare className="h-5 w-5"/>, title: t('process.steps.0.title'), desc: t('process.steps.0.desc') },
    { icon: <Search className="h-5 w-5"/>, title: t('process.steps.1.title'), desc: t('process.steps.1.desc') },
    { icon: <FileText className="h-5 w-5"/>, title: t('process.steps.2.title'), desc: t('process.steps.2.desc') },
    { icon: <Activity className="h-5 w-5"/>, title: t('process.steps.3.title'), desc: t('process.steps.3.desc') }
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
        <SectionTitle 
          kicker={t('kicker')}
          title={t('title')} 
          subtitle={t('subtitle')}
        />
        
        {/* Benefits Section */}
        <motion.div variants={fadeUp} className="mt-16 mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">{t('benefits.title')}</h3>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {benefitsList.map((benefit, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800"
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="font-medium text-neutral-800 dark:text-neutral-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Start of Audit Types */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {auditTypes.map((type, i) => (
            <motion.div 
              key={type.id}
              variants={fadeUp}
              className="relative p-8 rounded-3xl border bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-800 w-fit">
                {type.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t(`auditTypes.${type.id}.title`)}</h3>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">
                {t(`auditTypes.${type.id}.subtitle`)}
              </p>
              <ul className="space-y-3">
                {type.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Us & Process Split */}
        <div className="grid gap-12 lg:grid-cols-2 mt-12 items-start">
          
          {/* Why Us */}
          <motion.div variants={fadeUp} className="bg-neutral-900 text-white p-8 rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">{t('whyUs.title')}</h3>
            <div className="space-y-6 relative z-10">
              {whyUsList.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-300 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={fadeUp}>
             <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">{t('process.title')}</h3>
             <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500/20 to-transparent dark:from-indigo-500/10"></div>
                
                <div className="space-y-8">
                  {processSteps.map((step, i) => (
                    <div key={i} className="relative flex gap-6">
                      <div className="h-12 w-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center flex-shrink-0 z-10">
                        {step.icon}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <p className="text-neutral-500 dark:text-neutral-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-20 text-center bg-indigo-500/5 rounded-3xl p-8 border border-indigo-500/10">
           <p className="text-xl font-medium text-indigo-900 dark:text-indigo-200 mb-6 max-w-3xl mx-auto">
             {t('cta')}
           </p>
           <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors md:text-lg shadow-lg hover:shadow-indigo-500/25">
             {t('type') === 'Services' ? 'Contact Us' : 'Kontaktujte nás'} 
             <ArrowRight className="ml-2 h-5 w-5"/>
           </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
