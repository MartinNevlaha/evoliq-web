import { Resend } from 'resend'; import { z } from 'zod';
const resend = new Resend(process.env.RESEND_API_KEY);
const schema = z.object({name:z.string().min(2),email:z.string().email(),phone:z.string().optional().default(''),message:z.string().min(5)});
export async function POST(req:Request){try{const d=schema.parse(await req.json());
 if(!process.env.CONTACT_TO_EMAIL) return new Response(JSON.stringify({error:'CONTACT_TO_EMAIL not configured'}),{status:500});
 const {error}=await resend.emails.send({from:'Evoliq <noreply@evoliq.dev>',to:[process.env.CONTACT_TO_EMAIL!],reply_to:d.email,subject:`Nová správa — ${d.name}`,text:`Meno: ${d.name}\nEmail: ${d.email}\nTelefón: ${d.phone}\n\nSpráva:\n${d.message}`});
 if(error) return new Response(JSON.stringify({error:error.message}),{status:500});
 return new Response(JSON.stringify({ok:true}),{status:200});}catch(e:any){return new Response(JSON.stringify({error:e?.message||'Invalid request'}),{status:400})}}
