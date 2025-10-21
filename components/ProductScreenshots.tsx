"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Screenshot = {
  src: string;
  alt: string;
  span?: "wide";
};

type ProductScreenshotsProps = {
  shots: Screenshot[];
};

export default function ProductScreenshots({ shots }: ProductScreenshotsProps) {
  const [active, setActive] = useState<Screenshot | null>(null);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {shots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(shot)}
            className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-neutral-200 text-left shadow-sm transition duration-700 dark:border-white/10 dark:bg-neutral-800 ${
              shot.span === "wide" ? "sm:col-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 animate-[drift_12s_ease-in-out_infinite] scale-110"
                style={{
                  backgroundImage: `url(${shot.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${shot.src})`,
                  backgroundSize: "110%",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 border-2 border-transparent transition duration-700 group-hover:border-blue-400/60" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 transition duration-700 group-hover:opacity-20" />
            <span className="sr-only">{shot.alt}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={() => setActive(null)}
        >
          <div
            className="absolute inset-0"
            aria-hidden="true"
          />
          <div
            className="relative z-10 w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-white/20 bg-neutral-900 shadow-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
