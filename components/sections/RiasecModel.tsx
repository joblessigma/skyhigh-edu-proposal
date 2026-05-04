'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const riasec = [
  { l: 'R', name: 'Realistic', desc: 'Tangible, hands-on application', target: 'Applied Sciences', textColor: 'text-emerald-700', bg: 'bg-emerald-50/50', border: 'border-emerald-200', graph: 'bg-emerald-300' },
  { l: 'I', name: 'Investigative', desc: 'Analytical, scientific curiosity', target: 'Research / Analysis', textColor: 'text-indigo-700', bg: 'bg-indigo-50/50', border: 'border-indigo-200', graph: 'bg-indigo-300' },
  { l: 'A', name: 'Artistic', desc: 'Creative, fluid expression', target: 'Design / Humanities', textColor: 'text-rose-700', bg: 'bg-rose-50/50', border: 'border-rose-200', graph: 'bg-rose-300' },
  { l: 'S', name: 'Social', desc: 'Collaborative, linguistic mastery', target: 'Ed / International Re.', textColor: 'text-amber-700', bg: 'bg-amber-50/50', border: 'border-amber-200', graph: 'bg-amber-300' },
  { l: 'E', name: 'Enterprising', desc: 'Leading, global persuasion', target: 'Global Business', textColor: 'text-sky-700', bg: 'bg-sky-50/50', border: 'border-sky-200', graph: 'bg-sky-300' },
  { l: 'C', name: 'Conventional', desc: 'Organizing, structured data', target: 'Finance / Logistics', textColor: 'text-fuchsia-700', bg: 'bg-fuchsia-50/50', border: 'border-fuchsia-200', graph: 'bg-fuchsia-300' },
];

export function RiasecModel() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start relative max-w-6xl mx-auto">
        
        <div className="lg:w-1/3 flex flex-col justify-center relative z-10">
          <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">Matrix I</h4>
          <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
            Holland&apos;s<br/>
            <span className="italic text-stone-500">RIASEC</span><br/>
            Archetypes
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed font-sans font-light">
            We intercept student pathways using Holland&apos;s vocational codes. By isolating &apos;Social&apos;, &apos;Artistic&apos;, and &apos;Enterprising&apos; traits, we build a data-driven justification for why language immersion is critical to their optimal career trajectory.
          </p>
          <ul className="space-y-4 font-sans font-light text-stone-600 border-l border-stone-300 pl-6">
            {['Subtle redirection to language programs', 'Vocational aptitude mapping', 'High-conversion personalized reports'].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-stone-400 font-serif italic">/</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {riasec.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`backdrop-blur-sm p-8 flex flex-col items-center text-center border relative overflow-hidden group ${r.bg} ${r.border}`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-30 flex gap-1">
                {[0.4, 0.8, 0.5, 0.9].map((val, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${val * 24}px` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                    className={`w-1.5 rounded-b-sm ${r.graph}`}
                  />
                ))}
              </div>

              <div className={`font-serif italic text-6xl mb-6 ${r.textColor} opacity-30 group-hover:scale-110 transition-transform`}>
                {r.l}
              </div>
              <h3 className={`font-serif font-medium text-xl mb-2 tracking-tight ${r.textColor}`}>{r.name}</h3>
              <p className="text-stone-600 mb-6 flex-1 text-sm font-sans font-light mix-blend-multiply">{r.desc}</p>
              <div className={`text-[10px] font-sans font-bold uppercase tracking-widest border-t w-full pt-4 ${r.textColor} border-current opacity-70`}>
                {r.target}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
}
