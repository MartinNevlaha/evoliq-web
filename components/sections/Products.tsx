"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { stagger, fadeUp, slideInLeft, slideInRight } from '@/lib/animations';
import ImageModal from '@/components/common/ImageModal';
import { useTranslations } from 'next-intl';

export function Products(){
  const t = useTranslations('Products');
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
          {t('badge')}
        </motion.div>
        <motion.h2 
          className="text-3xl font-semibold leading-tight sm:text-4xl"
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.2}}
        >
          {t('titlePrefix')} <motion.span 
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
          >{t('titleSuffix')}</motion.span>
        </motion.h2>
        <motion.p 
          className="mt-3 text-neutral-600 dark:text-neutral-400"
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.3}}
        >
          {t('description')}
        </motion.p>
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.4}}
          className="mt-6"
        >
          <Link 
            href="/products/ai-control"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/40"
          >
            {t('moreInfo')}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 mb-12"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.1}}
      >
        {[
          {icon:'📋', title:t('modules.planning.title'), desc:t('modules.planning.desc')},
          {icon:'🏢', title:t('modules.companies.title'), desc:t('modules.companies.desc')},
          {icon:'📱', title:t('modules.mobile.title'), desc:t('modules.mobile.desc')},
          {icon:'✅', title:t('modules.corrective.title'), desc:t('modules.corrective.desc')},
          {icon:'🏅', title:t('modules.certification.title'), desc:t('modules.certification.desc')},
          {icon:'📚', title:t('modules.legislative.title'), desc:t('modules.legislative.desc')},
          {icon:'👥', title:t('modules.roles.title'), desc:t('modules.roles.desc')},
          {icon:'📊', title:t('modules.analytics.title'), desc:t('modules.analytics.desc')},
          {icon:'🔗', title:t('modules.integration.title'), desc:t('modules.integration.desc')},
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
          onClick={()=>setSelectedImage({src:'/audit-plan.png', alt:t('images.auditPlan')})} 
          className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative cursor-pointer group"
          style={{perspective:1000}}
        >
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
          >
            <Image alt={t('images.auditPlan')} src="/audit-plan.png" fill className="object-cover"/>
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
              {t('clickToZoom')}
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div 
          variants={slideInRight}
          whileHover={{scale:1.05, y:-10, rotateY:-5}} 
          transition={{duration:0.3, type:"spring", stiffness:300}} 
          onClick={()=>setSelectedImage({src:'/swot.png', alt:t('images.swot')})} 
          className="aspect-video rounded-2xl border bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative cursor-pointer group"
          style={{perspective:1000}}
        >
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5}}
          >
            <Image alt={t('images.swot')} src="/swot.png" fill className="object-cover"/>
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
              {t('clickToZoom')}
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
