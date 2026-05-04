'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const intelligences = [
  { icon: '01', name: 'Logical\nMathematical', target: 'Syntax & Grammar', color: 'emerald' },
  { icon: '02', name: 'Linguistic\nVerbal', target: 'Vocabulary Mastery', color: 'blue' },
  { icon: '03', name: 'Musical\nRhythmic', target: 'Pronunciation & Accent', color: 'indigo' },
  { icon: '04', name: 'Bodily\nKinesthetic', target: 'Cultural Emersion', color: 'rose' },
  { icon: '05', name: 'Naturalist\nContextual', target: 'Contextual Nuance', color: 'amber' },
  { icon: '06', name: 'Spatial\nVisual', target: 'Character Recognition', color: 'pink' },
  { icon: '07', name: 'Interpersonal\nSocial', target: 'Conversational Fluency', color: 'cyan' },
  { icon: '08', name: 'Intrapersonal\nSelf-aware', target: 'Independent Study', color: 'fuchsia' },
];

const colorMap: Record<string, string> = {
  emerald: 'text-emerald-600', blue: 'text-blue-600', indigo: 'text-indigo-600', rose: 'text-rose-600',
  amber: 'text-amber-600', pink: 'text-pink-600', cyan: 'text-cyan-600', fuchsia: 'text-fuchsia-600'
};
const bgMap: Record<string, string> = {
  emerald: 'bg-emerald-50/50', blue: 'bg-blue-50/50', indigo: 'bg-indigo-50/50', rose: 'bg-rose-50/50',
  amber: 'bg-amber-50/50', pink: 'bg-pink-50/50', cyan: 'bg-cyan-50/50', fuchsia: 'bg-fuchsia-50/50'
};
const chartColorMap: Record<string, string> = {
  emerald: 'bg-emerald-200', blue: 'bg-blue-200', indigo: 'bg-indigo-200', rose: 'bg-rose-200',
  amber: 'bg-amber-200', pink: 'bg-pink-200', cyan: 'bg-cyan-200', fuchsia: 'bg-fuchsia-200'
};

export function GardnerModel() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-16 max-w-4xl border-l-[1px] border-stone-300 pl-8">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">Matrix III</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium mb-6 tracking-tight leading-[1.1]">
          Multiple Intelligences<br/>
          <span className="italic text-stone-500 text-3xl md:text-5xl">Re-engineered for Language Affinity</span>
        </h2>
        <p className="text-xl text-stone-600 leading-relaxed font-light font-sans">
          We strip Gardner&apos;s 8 intelligences from their generic application, mapping each trait directly to a linguistic cognitive advantage. Showing students how their specific intelligence type makes them naturally gifted at language acquisition.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
        {intelligences.map((int, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`p-6 md:p-8 border border-stone-200 text-center group flex flex-col justify-between min-h-[220px] relative overflow-hidden ${bgMap[int.color]}`}
          >
            {/* Synthetic Sparkline */}
            <div className="absolute bottom-0 left-0 w-full h-12 flex items-end justify-between px-2 pb-2 opacity-50 z-0">
              {[0.4, 0.7, 0.3, 0.9, 0.5, 0.8, 0.6].map((h, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                  className={`w-1 rounded-t-sm ${chartColorMap[int.color]}`}
                />
              ))}
            </div>

            <div className="flex flex-col h-full relative z-10">
              <div className={`text-2xl font-serif italic mb-4 ${colorMap[int.color]}`}>
                {int.icon}
              </div>
              <h3 className="font-serif text-xl font-medium mb-4 text-stone-900 whitespace-pre-line tracking-tight mix-blend-multiply">
                {int.name}
              </h3>
              <p className="text-stone-500 font-sans font-medium mt-auto uppercase text-[10px] tracking-widest bg-white/60 py-1 px-2 rounded backdrop-blur-sm self-center">
                Drive: {int.target}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}
