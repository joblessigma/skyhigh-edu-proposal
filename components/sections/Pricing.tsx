'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const tiers = [
  {
    name: 'Foundation',
    price: '₹37,000',
    subtitle: 'Capture & export leads efficiently',
    features: [
      'Mobile-optimised UX',
      'Basic PDF report generator',
      'CSV export dashboard',
      'Serverless architecture'
    ],
    footer: 'Essential Pipeline',
    color: 'border-stone-200',
    highlight: false
  },
  {
    name: 'Strategic Experience',
    price: '₹75,000',
    subtitle: 'Build trust & enable smart follow-up',
    recommended: true,
    features: [
      'Language-weighted Psychometrics',
      'Magazine-style PDF reporting',
      'Advanced analytics dashboard',
      'Auto-save test progress',
      'Guided selfie camera flow'
    ],
    footer: 'Recommended Array',
    color: 'border-stone-900',
    highlight: true,
  },
  {
    name: 'Automation Engine',
    price: '₹1,10,000',
    subtitle: 'Automate conversion & maximise ROI',
    features: [
      'WhatsApp delivery automation',
      'Scholarship-trigger workflows',
      'Counsellor routing by linguistic profile',
      'Image compression pipeline',
      'Everything in Strategic Experience'
    ],
    footer: 'Maximum Conversion',
    color: 'border-stone-200',
    highlight: false
  }
];

export function Pricing() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-16">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">Capital Allocation</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl">
          Select an <span className="italic text-stone-500">architecture</span> matched to your ambition.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8 relative z-10">
        {tiers.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className={`relative flex flex-col backdrop-blur-sm border-t-4 border-r border-b border-l transition-all ${t.highlight ? 'border-indigo-900 shadow-xl z-20 md:-mt-4 md:mb-4 bg-indigo-50/20' : 'bg-white/60 border-t-stone-300 border-x-stone-200 border-b-stone-200 opacity-90 hover:opacity-100 z-10'}`}
          >
            {t.recommended && (
              <div className="absolute top-0 left-0 w-full bg-indigo-900 text-indigo-50 font-sans tracking-widest text-[10px] uppercase py-2 px-6 flex justify-center items-center shadow-md">
                Optimal Deployment
              </div>
            )}
            
            <div className={`p-10 flex-col flex border-b ${t.highlight ? 'border-indigo-100' : 'border-stone-200'} ${t.recommended ? 'pt-16' : ''}`}>
              <h3 className={`font-sans tracking-widest text-xs mb-6 uppercase ${t.highlight ? 'text-indigo-600 font-bold' : 'text-stone-500'}`}>{t.name}</h3>
              <div className={`font-serif text-5xl font-medium mb-4 tracking-tight ${t.highlight ? 'text-indigo-950' : 'text-stone-900'}`}>
                 {t.price}
              </div>
              <p className={`text-sm font-sans font-light ${t.highlight ? 'text-indigo-900/70' : 'text-stone-600'}`}>{t.subtitle}</p>
            </div>
            
            <div className={`p-8 flex-1 flex flex-col ${t.highlight ? 'bg-indigo-50/30' : 'bg-white/40'}`}>
              <ul className="space-y-6 flex-1 mb-10">
                {t.features.map((f, j) => (
                  <li key={j} className={`flex items-start gap-4 font-sans font-light text-sm ${t.highlight ? 'text-indigo-950' : 'text-stone-700'}`}>
                    <span className={`font-serif italic mt-0.5 ${t.highlight ? 'text-indigo-300' : 'text-stone-400'}`}>/</span> 
                    {f}
                  </li>
                ))}
              </ul>
              
              <div className={`text-center py-4 text-xs font-sans uppercase tracking-widest cursor-pointer transition-colors ${t.highlight ? 'bg-indigo-900 text-indigo-50 hover:bg-indigo-800' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}>
                {t.footer}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideWrapper>
  );
}
