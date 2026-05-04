'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const steps = [
  { num: 'I', title: 'Architecture Selection', desc: 'Secure the Optimal Deployment tier to establish the scholarship funnel.' },
  { num: 'II', title: 'Curriculum Sync', desc: 'A 45-minute summit to align the psychometric outputs with your existing language programs.' },
  { num: 'III', title: 'Editorial Review', desc: 'Signing off on the visual language, typography, and narrative of the generated intelligence reports.' },
  { num: 'IV', title: 'Live Deployment', desc: 'System activation prior to the inaugural seminar. Fully load-tested.' },
];

export function NextSteps() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 relative overflow-hidden pt-32 pb-16">
      <div className="relative z-10 w-full max-w-5xl mx-auto border-t border-stone-200 pt-32">
        <div className="mb-24 text-center">
          <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-8 uppercase">Implementation Protocol</h4>
          <h2 className="font-serif text-6xl md:text-8xl font-medium leading-[1.1] tracking-tight">
            Initiate the <span className="italic text-stone-500">Scholarship Funnel</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-[1px] bg-stone-300" />
          
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 relative group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative`}>
                  <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? 'left-[35px] md:-left-[20px]' : 'left-[35px] md:-right-[20px]'} w-2 h-2 bg-stone-500 rounded-full z-10`} />
                  
                  <div className={`bg-white/60 backdrop-blur-sm border border-stone-200 p-10 md:w-[85%] w-[80%] ml-20 md:ml-0`}>
                    <div className="font-serif italic text-xl text-stone-400 mb-4 block">
                     {step.num}
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-stone-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-stone-600 font-sans font-light leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-12 text-center flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-stone-300 rounded-full mb-6" />
          <p className="text-stone-400 font-sans text-[10px] tracking-widest uppercase">
            Confidential Architecture Protocol · Skyhigh Edu
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
