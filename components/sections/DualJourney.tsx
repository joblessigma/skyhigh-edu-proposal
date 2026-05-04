'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

export function DualJourney() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-20 text-center flex flex-col items-center">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">The Symbiotic Platform</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl leading-[1.1]">
          Two Perspectives.<br />
          <span className="italic text-stone-500">One Conversion Engine.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative mt-16 max-w-6xl mx-auto">
        {/* Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-stone-300 z-10" />

        {/* Student Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-teal-50/50 backdrop-blur-sm border border-teal-100 rounded-none md:rounded-2xl overflow-hidden group flex flex-col"
        >
          <div className="p-10 md:p-14 flex-1">
            <h3 className="text-teal-600 font-sans uppercase tracking-widest text-[10px] mb-8 flex items-center gap-4 font-bold bg-teal-100/50 border border-teal-200/50 px-4 py-2 rounded-full w-max">
              The Participant Experience
            </h3>
            <h4 className="font-serif text-4xl mb-12 font-medium text-stone-900 tracking-tight">Psychometric Valuation</h4>
            
            <ul className="space-y-8">
              {[
                { num: '01', text: 'Seamless QR onboarding post-lecture' },
                { num: '02', text: 'Dynamic, non-intrusive psychometric profiling' },
                { num: '03', text: 'Facial identification for counselor memory' },
                { num: '04', text: 'Instant generation of a 30-page bespoke intelligence report' },
                { num: '05', text: 'Subtle realization of language-learning necessity', highlight: true }
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-6 font-sans text-lg leading-relaxed ${item.highlight ? 'text-teal-900 font-medium' : 'text-stone-600 font-light'}`}>
                  <span className={`font-serif italic text-2xl ${item.highlight ? 'text-teal-500' : 'text-stone-300'}`}>{item.num}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Counselor Journey */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-indigo-50/50 backdrop-blur-sm border border-indigo-100 rounded-none md:rounded-2xl overflow-hidden mt-12 md:mt-0 group flex flex-col"
        >
          <div className="p-10 md:p-14 flex-1">
            <h3 className="text-indigo-600 font-sans uppercase tracking-widest text-[10px] mb-8 flex items-center gap-4 font-bold bg-indigo-100/50 border border-indigo-200/50 px-4 py-2 rounded-full w-max">
              The Sales Architecture
            </h3>
            <h4 className="font-serif text-4xl mb-12 font-medium text-stone-900 tracking-tight">Counselor Enablement</h4>
            
            <ul className="space-y-8">
              {[
                { num: '01', text: 'Live-updating candidate database' },
                { num: '02', text: 'Visual face-to-profile correlation' },
                { num: '03', text: 'Algorithmic filtering by linguistic aptitude' },
                { num: '04', text: 'Automated high-scorer identification' },
                { num: '05', text: 'Scholarship eligibility WhatsApp triggers', highlight: true }
              ].map((item, i) => (
                <li key={i} className={`flex items-start gap-6 font-sans text-lg leading-relaxed ${item.highlight ? 'text-indigo-900 font-medium' : 'text-stone-600 font-light'}`}>
                  <span className={`font-serif italic text-2xl ${item.highlight ? 'text-indigo-500' : 'text-stone-300'}`}>{item.num}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
