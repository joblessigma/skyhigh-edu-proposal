'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function SlideWrapper({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`min-h-[100svh] py-24 flex items-center justify-center relative ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </motion.section>
  );
}
