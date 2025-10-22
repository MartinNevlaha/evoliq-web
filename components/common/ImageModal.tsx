"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      onClick={onClose} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        exit={{ scale: 0.9, opacity: 0 }} 
        transition={{ duration: 0.3 }} 
        onClick={(e) => e.stopPropagation()} 
        className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-neutral-800/90 hover:bg-white dark:hover:bg-neutral-800 transition-colors"
        >
          <X className="h-5 w-5"/>
        </button>
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image alt={alt} src={src} fill className="object-contain"/>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
