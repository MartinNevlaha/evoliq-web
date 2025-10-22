"use client";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div 
      variants={fadeUp} 
      className="mx-auto max-w-2xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {kicker && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600 cursor-default"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-3.5 w-3.5"/>
          </motion.div>
          {kicker}
        </motion.div>
      )}
      <motion.h2 
        className="text-3xl font-semibold leading-tight sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="mt-3 text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
