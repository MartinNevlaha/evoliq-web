import * as React from "react";
export function Button({className,variant='default',...props}:{className?:string;variant?:'default'|'outline'}&React.ButtonHTMLAttributes<HTMLButtonElement>){
  const base='inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition';
  const v = variant==='outline' ? 'border border-black/20 hover:bg-black/5' : 'bg-black text-white hover:opacity-90';
  return <button className={[base,v,className].filter(Boolean).join(' ')} {...props}/>;
}
