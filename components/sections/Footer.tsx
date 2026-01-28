"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer(){
  const t = useTranslations('Footer');
  const [showPrivacy, setShowPrivacy] = React.useState(false);
  const [showGDPR, setShowGDPR] = React.useState(false);

  return (<footer className="border-t">
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('copyright')}</p>
        <div className="flex gap-4">
          <button onClick={()=>setShowPrivacy(true)} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            {t('privacy')}
          </button>
          <button onClick={()=>setShowGDPR(true)} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
            {t('gdpr')}
          </button>
          <button onClick={()=>{
            const event = new CustomEvent('openCookieSettings');
            window.dispatchEvent(event);
          }} className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
            <Cookie className="h-3.5 w-3.5"/>
            {t('cookies')}
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
              <h3 className="text-lg font-semibold">{t('privacyTitle')}</h3>
              <button onClick={()=>setShowPrivacy(false)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <X className="h-5 w-5"/>
              </button>
            </div>
            <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-5rem)]">
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: t.raw('privacyContent') }} />
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
              <h3 className="text-lg font-semibold">{t('gdprTitle')}</h3>
              <button onClick={()=>setShowGDPR(false)} className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <X className="h-5 w-5"/>
              </button>
            </div>
            <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-5rem)]">
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: t.raw('gdprContent') }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </footer>);
}
