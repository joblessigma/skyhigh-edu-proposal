'use client';

import { motion } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Openness', desc: '(Linguistic Receptivity)', A: 85, fullMark: 100 },
  { subject: 'Conscientiousness', desc: '(Disciplinary Consistency)', A: 65, fullMark: 100 },
  { subject: 'Extraversion', desc: '(Social Adaptation)', A: 50, fullMark: 100 },
  { subject: 'Agreeableness', desc: '(Cultural Empathy)', A: 75, fullMark: 100 },
  { subject: 'Neuroticism', desc: '(Anxiety Index)', A: 40, fullMark: 100 },
];

export function OceanProfile() {
  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32">
      <div className="mb-16">
        <h4 className="text-stone-400 font-sans tracking-widest text-xs mb-4 uppercase">Matrix II</h4>
        <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-4">
          OCEAN <span className="italic text-stone-500">Profile</span>
        </h2>
        <p className="text-xl text-stone-600 max-w-2xl font-light font-sans">
          The empirically validated personality framework, repurposed to identify students highly receptive to international immersion and linguistic adaptation.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full h-[350px] sm:h-[400px] md:h-[600px] relative"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <PolarGrid stroke="rgba(0,0,0,0.1)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12, fontFamily: 'inherit', fontWeight: 600 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                itemStyle={{ color: '#0ea5e9', fontWeight: 'bold' }}
              />
              <Radar
                name="Student Profile"
                dataKey="A"
                stroke="#0ea5e9"
                strokeWidth={3}
                fill="url(#colorUv)"
                fillOpacity={0.5}
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
        
        <div className="lg:w-1/2 flex flex-col gap-6 w-full">
          {data.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/60 p-5 md:p-6 border border-stone-200 rounded-xl md:rounded-2xl flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-stone-800 font-medium">{item.subject}</h3>
                  <p className="text-xs font-sans text-stone-500">{item.desc}</p>
                </div>
                <div className="font-serif italic text-3xl md:text-4xl text-sky-400/50 mix-blend-multiply">
                  {item.A}
                </div>
              </div>
              <div className="w-full h-1.5 md:h-[3px] bg-stone-100 rounded-full overflow-hidden mt-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.A}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                  className="h-full bg-sky-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
