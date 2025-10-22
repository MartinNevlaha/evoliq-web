"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/common/SectionTitle';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const [loading, setLoading] = React.useState(false); 
  const [ok, setOk] = React.useState<null|boolean>(null); 
  const formRef = React.useRef<HTMLFormElement|null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // Kontrola Turnstile tokenu
    if (!turnstileToken) {
      setOk(false);
      return;
    }
    
    setLoading(true);
    setOk(null);
    const fd = new FormData(e.currentTarget); 
    const payload = {
      ...Object.fromEntries(fd.entries()),
      turnstileToken
    };
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    setLoading(false); 
    setOk(res.ok); 
    if (res.ok) {
      formRef.current?.reset();
      setTurnstileToken('');
    }
  }
  
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionTitle kicker="Kontakt" title="Kontaktujte nás" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border bg-white/70 dark:bg-neutral-900/70 p-6 backdrop-blur relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-emerald-500/5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 text-sm relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-xs font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Jméno *</label>
              <motion.input 
                id="name" 
                name="name" 
                placeholder="Vaše jméno" 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                className="w-full rounded-xl border bg-white dark:bg-neutral-800 dark:border-neutral-700 px-3 py-2 transition-all"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <label htmlFor="email" className="block text-xs font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Email *</label>
              <motion.input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="vas@email.cz" 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                className="w-full rounded-xl border bg-white dark:bg-neutral-800 dark:border-neutral-700 px-3 py-2 transition-all"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="phone" className="block text-xs font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Telefon</label>
              <motion.input 
                id="phone" 
                name="phone" 
                placeholder="+420 xxx xxx xxx" 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                className="w-full rounded-xl border bg-white dark:bg-neutral-800 dark:border-neutral-700 px-3 py-2 transition-all"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <label htmlFor="message" className="block text-xs font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Zpráva *</label>
              <motion.textarea 
                id="message" 
                name="message" 
                rows={4} 
                placeholder="Popište váš projekt nebo dotaz..." 
                required 
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                className="w-full rounded-xl border bg-white dark:bg-neutral-800 dark:border-neutral-700 px-3 py-2 transition-all"
              />
            </motion.div>

            <motion.div 
              className="rounded-xl border bg-neutral-50 dark:bg-neutral-800/50 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-xs font-medium mb-2 text-neutral-700 dark:text-neutral-300">Ochrana proti robotům *</label>
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken('')}
                onExpire={() => setTurnstileToken('')}
                options={{
                  theme: 'auto',
                  size: 'normal',
                }}
              />
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <div className="flex flex-col gap-2 text-xs opacity-80">
                <motion.span 
                  className="inline-flex items-center gap-2"
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  <Mail className="h-3.5 w-3.5"/> hello@evoliq.dev
                </motion.span>
                <motion.span 
                  className="inline-flex items-center gap-2"
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  <Phone className="h-3.5 w-3.5"/> +421 900 000 000
                </motion.span>
                <motion.span 
                  className="inline-flex items-center gap-2"
                  whileHover={{ x: 5, opacity: 1 }}
                >
                  <MapPin className="h-3.5 w-3.5"/> Brno, Česká republika
                </motion.span>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="rounded-2xl w-full sm:w-auto" disabled={loading}>
                  {loading ? 'Odesílám...' : 'Odeslat zprávu'} 
                  <motion.div
                    className="ml-2 inline-block"
                    animate={loading ? { x: [0, 5, 0] } : {}}
                    transition={loading ? { duration: 0.5, repeat: Infinity } : {}}
                  >
                    <ArrowRight className="h-4 w-4"/>
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
            
            <AnimatePresence mode="wait">
              {ok === true && (
                <motion.p 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-green-600 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    className="inline-block mr-2"
                  >
                    ✓
                  </motion.span>
                  Zpráva byla úspěšně odeslána. Brzy se vám ozveme!
                </motion.p>
              )}
              {ok === false && (
                <motion.p 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3"
                >
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="inline-block mr-2"
                  >
                    ✗
                  </motion.span>
                  Chyba při odesílání. Zkontrolujte prosím všechna pole a zkuste to znovu.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
