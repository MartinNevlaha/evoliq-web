"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const locales = [
    { code: 'cs', label: 'CZ' },
    { code: 'en', label: 'EN' },
    { code: 'sk', label: 'SK' },
  ];

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={ref}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border bg-white/50 px-3 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/80 dark:bg-black/50 dark:hover:bg-black/80"
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-max min-w-[80px] overflow-hidden rounded-xl border bg-white p-1 shadow-xl dark:bg-neutral-900"
          >
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSwitch(l.code)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                  locale === l.code ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <span>{l.label}</span>
                {locale === l.code && (
                  <motion.div
                    layoutId="activeLocale"
                    className="ml-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
