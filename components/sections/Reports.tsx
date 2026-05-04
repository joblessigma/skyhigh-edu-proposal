'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const reports = [
  { icon: '01', title: 'Cognitive Baseline', desc: 'Detailed analysis of information processing speed and logic parameters.', bg: 'bg-emerald-50/60', border: 'border-emerald-200', text: 'text-emerald-900', num: 'text-emerald-300' },
  { icon: '02', title: 'Linguistic Resonance', desc: 'Calculates structural affinity for foreign languages. Weighted to trigger positive outcomes.', bg: 'bg-sky-50/60', border: 'border-sky-200', text: 'text-sky-900', num: 'text-sky-300' },
  { icon: '03', title: 'Cultural Adaptability', desc: 'Measures readiness to thrive in international academic environments.', bg: 'bg-amber-50/60', border: 'border-amber-200', text: 'text-amber-900', num: 'text-amber-300' },
  { icon: '04', title: 'The Scholarship Matrix', desc: 'Identifies high-performers for exclusive financial aid opportunities, driving urgency.', bg: 'bg-fuchsia-50/60', border: 'border-fuchsia-200', text: 'text-fuchsia-900', num: 'text-fuchsia-300' },
];

export function Reports() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-20 max-w-4xl text-center mx-auto flex flex-col items-center">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase font-bold">The Strategic Advantage</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Architecting the <span className="italic text-stone-500">Outcome</span>
        </h2>
        <p className="text-xl text-stone-600 font-light leading-relaxed font-sans max-w-2xl">
          The assessment is structured to evaluate general intelligence but heavily weights linguistic aptitude. The generated report subtly bridges their natural talents to the necessity of language acquisition—highlighting their potential for prestigious scholarship tracks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {reports.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className={`flex flex-col backdrop-blur-sm p-10 border group transition-all hover:scale-[1.02] hover:shadow-xl relative overflow-hidden ${r.bg} ${r.border}`}
          >
            {/* Background synthetic design */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-10 rounded-full border-[20px] border-current text-current pointer-events-none group-hover:scale-125 transition-transform duration-700 ease-out" />
            
            <div className="flex-1 flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className={`font-serif text-4xl italic ${r.num}`}>{r.icon}</div>
                <div className={`p-2 rounded-full border border-current ${r.num} opacity-50`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className={`font-serif text-2xl mb-3 tracking-tight font-medium ${r.text}`}>
                {r.title}
              </h3>
              <p className="text-stone-600 leading-relaxed font-sans font-light mix-blend-multiply">
                {r.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}
