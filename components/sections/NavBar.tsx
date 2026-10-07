"use client";
import Image from 'next/image';
import { Link, usePathname } from '@/i18n/routing';
import { motion, useScroll, useSpring } from 'framer-motion';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';

export default function NavBar() {
  const t = useTranslations('NavBar');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.2 });

  const navItems = [
    { label: t('products'), href: '/#products' },
    { label: t('services'), href: '/services' },
    { label: t('labs'), href: '/labs' },
    { label: t('about'), href: '/#about' },
    { label: t('contact'), href: '/#contact' },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    if (!isMenuOpen) return;

    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false);
    }

    desktopQuery.addEventListener('change', handleBreakpointChange);
    return () => desktopQuery.removeEventListener('change', handleBreakpointChange);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus({ preventScroll: true });
  }

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
        <motion.div
          className="shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center font-semibold tracking-tight" onClick={() => setIsMenuOpen(false)}>
            <span className="relative inline-block h-20 w-20 lg:h-32 lg:w-32">
              <Image alt="Evoliq" src="/logo-dark.png" fill sizes="(min-width: 1024px) 128px, 80px" className="rounded-md object-contain dark:hidden"/>
              <Image alt="Evoliq" src="/logo-white.png" fill sizes="(min-width: 1024px) 128px, 80px" className="rounded-md object-contain hidden dark:block"/>
            </span>
          </Link>
        </motion.div>
        <nav aria-label={t('navigation')} className="hidden items-center gap-5 text-sm lg:flex">
          {navItems.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className="opacity-80 hover:opacity-100 transition-opacity relative"
            >
              {item.label}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-emerald-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/#contact" className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
              {t('contactUs')}
            </Link>
          </motion.div>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition-opacity hover:opacity-80 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        ref={menuRef}
        id={menuId}
        aria-label={t('navigation')}
        hidden={!isMenuOpen}
        className="border-t bg-white/95 px-4 pb-4 pt-2 dark:bg-neutral-950/95 lg:hidden"
      >
        <div className="mx-auto max-w-6xl space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" onClick={closeMenu} className="inline-flex items-center justify-center rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
            {t('contactUs')}
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}
