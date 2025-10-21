"use client";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher(){
  const pathname = usePathname() || "/sk";
  const segs = pathname.split("/").filter(Boolean);
  const current = ["sk","cz","en"].includes(segs[0]) ? segs[0] : "sk";
  function hrefFor(l:string){
    if(["sk","cz","en"].includes(current)){
      segs[0] = l;
      return "/"+segs.join("/");
    }
    return "/"+l;
  }
  return (
    <div className="inline-flex items-center gap-2 text-sm">
      {["sk","cz","en"].map(l => (
        <a key={l} href={hrefFor(l)} className={l===current ? "font-semibold" : "opacity-70 hover:opacity-100"}>
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
