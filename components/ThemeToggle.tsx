"use client";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeToggle() {
  const [dark, setDark] = React.useState<boolean>(false);

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  function toggle() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  }

  const Icon = dark ? Sun : Moon;
  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:opacity-90">
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{dark ? "Svetlý" : "Tmavý"} režim</span>
    </button>
  );
}
