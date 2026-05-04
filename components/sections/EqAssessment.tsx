'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const eqPillars = [
  { icon: 'I', title: 'Self-Awareness', desc: "Recognising one's own limitations and cultural gaps." },
  { icon: 'II', title: 'Self-Regulation', desc: "Emotional resilience in unfamiliar, foreign environments." },
  { icon: 'III', title: 'Motivation', desc: "Internal drive toward international achievement." },
  { icon: 'IV', title: 'Empathy', desc: "Cross-cultural understanding and perspective-taking." },
  { icon: 'V', title: 'Social Skills', desc: "Building networks without sharing a native tongue." },
];

export function EqAssessment() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-16 border-b border-stone-200 pb-8 max-w-4xl">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">Matrix IV</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
          Emotional Quotient <span className="text-stone-400 font-light italic">— The Predictor</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <div className="lg:w-1/2 relative bg-rose-50/50 backdrop-blur-sm border border-rose-100 p-12 lg:p-16 flex flex-col justify-center items-center text-center">
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-8xl md:text-[10rem] text-rose-900 mb-6 italic"
              >
                58<span className="text-rose-300 text-6xl">%</span>
              </motion.div>
              <p className="text-xl md:text-2xl text-rose-800 mb-4 font-sans font-light tracking-wide">
                of international success is attributed<br/> to Emotional Intelligence
              </p>
              
              <div className="h-[1px] w-24 bg-rose-200 mx-auto my-10" />
              
              <p className="text-lg text-rose-700 max-w-sm mx-auto leading-relaxed font-light">
                Intellect alone does not ensure survival abroad. EQ determines how candidates adapt, integrate, and overcome the friction of language acquisition.
              </p>
            </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
          {eqPillars.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 items-start pb-6 border-b border-stone-200 last:border-0"
            >
              <div className="font-serif text-2xl italic text-stone-300 shrink-0 w-8">
                {p.icon}
              </div>
              <div>
                <h3 className="font-serif font-medium text-2xl text-stone-900 mb-2">{p.title}</h3>
                <p className="text-stone-600 font-sans font-light text-lg">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
