'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

export function Hero() {
  return (
    <SlideWrapper className="!min-h-[100svh] overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-5xl mt-20 pt-20">
        
        {/* Decorative Color Orbs */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4 mb-8 relative z-10"
        >
          <div className="w-12 h-[1px] bg-stone-900"></div>
          <span className="text-stone-600 font-sans text-xs uppercase tracking-[0.3em]">Strategic Platform Proposal</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-medium mb-6 tracking-tight text-stone-900 leading-[0.9] relative z-10"
        >
          SkyHigh<br/>
          <span className="italic text-stone-400 text-5xl md:text-7xl lg:text-[8rem]">Edu</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-stone-600 max-w-2xl mb-16 leading-relaxed font-sans font-light relative z-10"
        >
          An intelligence platform transforming seminar attendees into targeted language-learning scholars through advanced psychometrics.
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-12 relative z-10">
          {[
            { tag: 'Psychometric Engine', color: 'text-indigo-700 bg-indigo-50/80 border-indigo-200' },
            { tag: 'Language Focus', color: 'text-emerald-700 bg-emerald-50/80 border-emerald-200' },
            { tag: 'Scholarship Funnel', color: 'text-amber-700 bg-amber-50/80 border-amber-200' },
            { tag: 'Editorial Insights', color: 'text-rose-700 bg-rose-50/80 border-rose-200' }
          ].map((item, i) => (
            <motion.div 
              key={item.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className={`px-6 py-3 border rounded-full text-sm tracking-widest font-sans uppercase backdrop-blur-md shadow-sm ${item.color}`}
            >
              {item.tag}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
