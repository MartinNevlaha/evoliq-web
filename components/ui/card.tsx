import * as React from 'react';
export function Card(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={['rounded-3xl border bg-white/70 shadow-sm backdrop-blur',p.className].filter(Boolean).join(' ')}/>}
export function CardContent(p:React.HTMLAttributes<HTMLDivElement>){return <div {...p} className={['p-6',p.className].filter(Boolean).join(' ')}/>}
