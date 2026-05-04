'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';

const challenges = [
  {
    num: '01',
    title: 'The Volume Paradox',
    desc: "Hundreds of high-intent students captive in one room. Yet, manual data entry and generic forms fail to capture their true potential.",
    color: 'border-orange-200 bg-orange-50/50',
    numberColor: 'text-orange-300'
  },
  {
    num: '02',
    title: 'Superficial Data',
    desc: "Standard lead forms collect contact details, not intent. They don't reveal a student's cognitive baseline or linguistic aptitude.",
    color: 'border-blue-200 bg-blue-50/50',
    numberColor: 'text-blue-300'
  },
  {
    num: '03',
    title: 'Lost Momentum',
    desc: "The emotional peak of a seminar fades within hours. Without an immediate, personalized value-add, conversion rates plummet.",
    color: 'border-rose-200 bg-rose-50/50',
    numberColor: 'text-rose-300'
  }
];

export function Challenge() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left text */}
        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            className="absolute -left-8 top-0 w-[1px] bg-stone-300"
          />
          <h2 className="font-serif text-5xl md:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            The Missing<br />
            <span className="italic text-stone-500">Bridge</span>
          </h2>
          <p className="text-xl md:text-2xl text-stone-600 font-light max-w-sm leading-relaxed border-b border-stone-200 pb-8">
            Every seminar is a rare convergence of ambition, but traditional capture methods fail to translate curiosity into enrollment.
          </p>
          <div className="mt-8 font-sans text-xs tracking-widest text-stone-400 uppercase">
            The Structural Inefficiency
          </div>
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-8 relative">
          {challenges.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`backdrop-blur-sm border p-8 rounded-none md:rounded-lg ${c.color}`}
            >
              <div className="flex items-start gap-8">
                <div className={`font-serif text-3xl italic shrink-0 ${c.numberColor}`}>
                  {c.num}
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-3 text-stone-900 font-medium">{c.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed font-sans text-lg">
                    {c.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
