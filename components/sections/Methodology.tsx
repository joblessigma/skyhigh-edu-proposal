'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const methods = [
  { num: 'I', title: 'RIASEC Model', desc: 'Behavioral Aptitudes', hover: 'group-hover:text-amber-500', bar: 'bg-amber-500' },
  { num: 'II', title: 'OCEAN Profile', desc: 'Personality Matrix', hover: 'group-hover:text-sky-500', bar: 'bg-sky-500' },
  { num: 'III', title: 'Gardner MI', desc: 'Linguistic Resonance', hover: 'group-hover:text-fuchsia-500', bar: 'bg-fuchsia-500' },
  { num: 'IV', title: 'EQ Radar', desc: 'Emotional Predictors', hover: 'group-hover:text-rose-500', bar: 'bg-rose-500' }
];

export function Methodology() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 relative overflow-hidden">
       <div className="relative z-10 max-w-6xl mx-auto py-20 border-b border-stone-200">
        <div className="max-w-3xl mb-24">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-stone-400 font-sans tracking-widest text-xs mb-8 uppercase"
          >
            The Theoretical Framework
          </motion.h4>
          <h2 className="font-serif text-5xl md:text-8xl font-medium mb-8 leading-[1.1] tracking-tight">
            Scientific<br/>
            <span className="italic text-stone-500">Methodology</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl font-sans">
            Bypassing surface-level surveys to extract four dimensions of capability. Engineered uniquely to predict affinity for advanced language education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {methods.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`font-serif text-6xl italic transition-colors text-stone-200 ${m.hover}`}>
                  {m.num}
                </div>
                <div className="w-full h-[1px] bg-stone-200 relative overflow-hidden">
                   <div className={`absolute top-0 left-0 w-0 h-full ${m.bar} group-hover:w-full transition-all duration-700 ease-in-out`} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-medium mb-2 text-stone-900">{m.title}</h3>
              <p className="text-stone-500 font-sans font-light text-sm tracking-wide">{m.desc}</p>
            </motion.div>
          ))}
        </div>
       </div>
    </SlideWrapper>
  );
}
