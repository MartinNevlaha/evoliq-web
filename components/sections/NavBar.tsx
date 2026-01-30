"use client";
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useTranslations } from 'next-intl';

export default function NavBar() {
  const t = useTranslations('NavBar');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });
  
  const navItems = [
    { label: t('products'), href: '/#products' },
    { label: t('services'), href: '/services' },
    { label: t('about'), href: '/#about' },
    { label: t('contact'), href: '/#contact' },
  ];

  return (
    <motion.div 
      className="sticky top-0 z-50 w-full backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <motion.div 
        style={{ scaleX }} 
        className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <motion.a 
          href="/" 
          className="flex items-center gap-2 font-semibold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative inline-block h-32 w-32">
            <Image alt="Evoliq" src="/logo-dark.png" fill className="rounded-md object-contain dark:hidden"/>
            <Image alt="Evoliq" src="/logo-white.png" fill className="rounded-md object-contain hidden dark:block"/>
          </span>
        </motion.a>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {navItems.map((item, i) => (
            <Link 
              key={item.label}
              href={item.href}
              className="opacity-80 hover:opacity-100 transition-opacity relative"
            >
              {item.label}
              {/* Simplified hover effect for now or wrap Link with motion if needed, but standard Link is key here */}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <motion.a 
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="rounded-2xl">{t('contactUs')}</Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
