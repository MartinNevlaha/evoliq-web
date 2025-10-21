import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Evoliq — IT solutions tailored", description: "Moderné weby a AI riešenia." };
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="sk" suppressHydrationWarning><body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const s=localStorage.getItem('theme');const m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add((s||m)==='dark'?'dark':'');}catch(e){}})();`
          }}
        />
    {children}</body></html>)}
