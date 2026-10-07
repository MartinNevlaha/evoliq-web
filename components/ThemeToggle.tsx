"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

export default function ThemeToggle() {
  const locale = useLocale();
  const t = useTranslations('ThemeToggle');
  const [dark, setDark] = React.useState<boolean>(false);

  React.useLayoutEffect(() => {
    let preference: string | null = null;
    try { preference = localStorage.getItem('theme'); } catch {}
    const isDark = preference === 'dark' || (preference !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, [locale]);

  function toggle() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  }

  const Icon = dark ? Sun : Moon;
  return (
    <button type="button" onClick={toggle} aria-label={dark ? t('lightMode') : t('darkMode')} aria-pressed={dark} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:opacity-90">
      <Icon aria-hidden="true" className="h-4 w-4" />
      <span className="hidden sm:inline">{dark ? t('lightMode') : t('darkMode')}</span>
    </button>
  );
}
