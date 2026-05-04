'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideWrapper } from '../ui/SlideWrapper';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import Image from 'next/image';

const timelineData = [
  { time: 'Lead Capture', conversion: 20, engagement: 80 },
  { time: 'Assessment', conversion: 45, engagement: 95 },
  { time: 'Report Gen', conversion: 65, engagement: 100 },
  { time: 'Counselling', conversion: 85, engagement: 90 },
  { time: 'Enrollment', conversion: 92, engagement: 80 },
];

const aptitudeData = [
  { metric: 'Cognitive Speed', value: 88, fill: '#14b8a6' }, // teal-500
  { metric: 'Pattern Recognition', value: 94, fill: '#6366f1' }, // indigo-500
  { metric: 'Verbal Agility', value: 82, fill: '#f59e0b' }, // amber-500
  { metric: 'Cultural Empathy', value: 76, fill: '#ec4899' }, // pink-500
];

export function PlatformDemo() {
  const [step, setStep] = useState<'question' | 'generating' | 'complete'>('question');
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Analyzing psychometrics...');

  const handleOptionClick = () => {
    setStep('generating');
    setProgress(0);
  };

  useEffect(() => {
    if (step === 'generating') {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 15) + 5;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(currentProgress);
        
        if (currentProgress < 40) setLoadingText('Analyzing psychometrics...');
        else if (currentProgress < 75) setLoadingText('Compiling linguistic vector...');
        else setLoadingText('Finalizing report...');

        if (currentProgress === 100) {
          clearInterval(interval);
          setTimeout(() => setStep('complete'), 600);
        }
      }, 350);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <SlideWrapper className="bg-transparent text-stone-900 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <h4 className="text-indigo-500 font-sans tracking-widest text-xs mb-4 uppercase font-bold">Live System Preview</h4>
          <h2 className="font-serif text-5xl md:text-7xl font-medium tracking-tight max-w-4xl leading-[1.1] mb-6">
            The Interface of <span className="italic text-stone-500">Persuasion</span>
          </h2>
          <p className="font-sans text-xl text-stone-600 font-light max-w-2xl">
            A frictionless mobile experience for the student, feeding directly into an omniscient intelligence dashboard for your admissions team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mobile UI Mockup - Student Flow */}
          <div className="lg:col-span-4 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-[320px] h-[600px] sm:h-[650px] bg-white rounded-[2.5rem] sm:rounded-[3rem] border-[6px] sm:border-[8px] border-stone-200 shadow-2xl relative overflow-hidden flex flex-col shrink-0"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-stone-200 rounded-b-3xl z-20" />
              
              <div className="flex-1 bg-stone-50 pt-16 px-6 pb-6 flex flex-col relative z-10">
                <div className="w-full flex justify-between items-center mb-6 sm:mb-8 shrink-0">
                  <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-indigo-950">SkyHigh Edu</span>
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-xs">
                    10
                  </div>
                </div>

                <div className="flex-1 flex flex-col relative w-full h-full">
                  <AnimatePresence mode="wait">
                    {step === 'question' && (
                      <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                        className="flex flex-col h-full absolute inset-0"
                      >
                        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-stone-100 mb-4 mt-2 shrink-0">
                          <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                            Imagine arriving in a foreign city where no one speaks your language. Which instinct kicks in first?
                          </p>
                        </div>

                        <div className="space-y-2 sm:space-y-3 shrink-0">
                          {['Find a local to guide me', 'Observe patterns to navigate', 'Use expressive gestures', 'Stick to known landmarks'].map((opt, idx) => {
                            const colors = ['bg-sky-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'];
                            return (
                            <motion.button 
                              key={idx}
                              onClick={handleOptionClick}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + (idx * 0.1) }}
                              className="w-full text-left p-3 sm:p-4 rounded-xl border border-stone-200 bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer group flex items-center gap-3 shadow-sm h-12 sm:h-[3.25rem]"
                            >
                              <div className={`w-2 h-2 rounded-full ${colors[idx]} shrink-0`} />
                              <span className="font-sans text-xs sm:text-[13px] text-stone-700 group-hover:text-indigo-900 font-medium">{opt}</span>
                            </motion.button>
                          )})}
                        </div>
                        
                        <div className="mt-auto pt-4 shrink-0">
                          <div className="w-full bg-stone-200 rounded-full h-1.5 mb-3">
                            <motion.div 
                              initial={{ width: '80%' }}
                              animate={{ width: '90%' }}
                              transition={{ duration: 0.8 }}
                              className="bg-indigo-500 h-1.5 rounded-full"
                            />
                          </div>
                          <div className="text-center font-sans text-xs text-stone-400 font-medium">Question 10 of 10</div>
                        </div>
                      </motion.div>
                    )}

                    {step === 'generating' && (
                      <motion.div
                        key="generating"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                        className="flex flex-col flex-1 items-center justify-center absolute inset-0 pt-4"
                      >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-8">
                          <div className="absolute inset-0 border-4 border-stone-200 rounded-full"></div>
                          <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white shadow-inner">
                            <span className="font-sans font-bold text-indigo-900 text-lg sm:text-xl">{progress}%</span>
                          </div>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 mb-1 sm:mb-2 text-center">Analyzing Profile</h3>
                        <p className="font-sans text-xs sm:text-sm text-indigo-500 text-center px-4 mb-6 sm:mb-8 h-10 font-medium animate-pulse">
                          {loadingText}
                        </p>
                        
                        <div className="w-full space-y-2 px-4 opacity-40">
                          <div className="h-2 bg-stone-300 rounded animate-pulse" />
                          <div className="h-2 bg-stone-300 rounded animate-pulse w-4/5 mx-auto" />
                          <div className="h-2 bg-stone-300 rounded animate-pulse w-5/6 mx-auto" />
                        </div>
                      </motion.div>
                    )}

                    {step === 'complete' && (
                      <motion.div
                        key="complete"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col flex-1 items-center justify-center absolute inset-0 pt-4 px-2"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-xl">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mb-2 sm:mb-3 text-center leading-tight">Assessment<br/>Complete</h3>
                        <p className="font-sans text-xs sm:text-sm text-stone-500 text-center mb-6 sm:mb-8 px-4">
                          Your psychometric linguistic pathway has been generated.
                        </p>
                        
                        <button 
                          onClick={() => setStep('question')}
                          className="w-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-sans font-medium text-sm sm:text-base rounded-xl py-3 sm:py-4 transition-colors shadow-lg shadow-indigo-200/50 mt-auto"
                        >
                          View My Strategy
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Super User Dashboard Mockup */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-2xl md:rounded-3xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col flex-1"
             >
               {/* Window Controls */}
               <div className="bg-stone-50 border-b border-stone-100 py-3 px-4 flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-rose-400" />
                 <div className="w-3 h-3 rounded-full bg-amber-400" />
                 <div className="w-3 h-3 rounded-full bg-emerald-400" />
                 <span className="ml-4 font-mono text-[10px] md:text-xs text-stone-400 truncate">counselor-intel.skyhigh.edu/dashboard/stream-992</span>
               </div>

               <div className="flex flex-col md:flex-row flex-1">
                 {/* Sidebar (Desktop Hidden on Mobile or shown as thin strip) */}
                 <div className="hidden md:flex flex-col w-16 bg-stone-50 border-r border-stone-100 items-center py-6 gap-6">
                   <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-serif font-bold italic mb-4">S</div>
                   <div className="w-6 h-6 rounded text-stone-300 hover:text-indigo-500 cursor-pointer transition-colors bg-white shadow-sm flex justify-center items-center">
                     <span className="block w-3 h-3 bg-indigo-500 rounded-sm" />
                   </div>
                   <div className="w-6 h-6 rounded text-stone-300 hover:text-indigo-500 cursor-pointer transition-colors flex justify-center items-center">
                     <span className="block w-4 h-0.5 bg-current mb-1 shadow-[0_4px_0_currentColor]" />
                   </div>
                   <div className="w-6 h-6 rounded text-stone-300 hover:text-indigo-500 cursor-pointer transition-colors flex justify-center items-center">
                     <span className="block w-3 h-3 border-2 border-current rounded-full" />
                   </div>
                 </div>

                 <div className="p-5 md:p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 bg-white">
                 <div className="flex flex-col">
                   <div className="flex justify-between items-start mb-6">
                     <div>
                       <h3 className="font-serif text-2xl text-stone-900 font-medium">Candidate Profile</h3>
                       <p className="font-sans text-sm text-stone-500 mt-1">Real-time analysis stream #992</p>
                     </div>
                     <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-teal-50 text-teal-700 text-xs font-bold font-sans">
                       <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                       SCHOLARSHIP ELIGIBLE
                     </span>
                   </div>

                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 rounded-full bg-stone-200 overflow-hidden relative border border-stone-300">
                       <Image src="https://picsum.photos/seed/kalyan/100/100" alt="Student" fill className="object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <div>
                       <h4 className="font-sans font-bold text-lg text-stone-900">Arjun Mehta</h4>
                       <p className="font-sans text-sm text-stone-500 mb-2">Tier-1 Engineering Prospect</p>
                       <div className="flex gap-2 flex-wrap">
                         <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">Logical</span>
                         <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-700">Introverted</span>
                         <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">Analytical</span>
                       </div>
                     </div>
                   </div>

                   <div className="space-y-4 mb-6">
                     <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                       <h5 className="font-serif italic text-indigo-900 mb-1">Counselor Vector</h5>
                       <p className="font-sans text-sm font-medium text-indigo-800">
                         High logical intelligence paired with low social adaptation. Frame language learning as a structural engineering problem.
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Charts Area */}
                 <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-4 font-bold">Linguistic Aptitude Vectors</h4>
                      <div className="h-40 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={aptitudeData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                            <XAxis type="number" hide />
                            <YAxis dataKey="metric" type="category" axisLine={false} tickLine={false} tick={{ fill: '#78716c', fontSize: 11 }} />
                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={12}>
                              {
                                aptitudeData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))
                              }
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="flex-1 bg-gradient-to-br from-stone-900 to-stone-800 rounded-xl p-5 text-white flex flex-col justify-between relative overflow-hidden shadow-lg">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 blur-2xl rounded-full" />
                      <div className="relative z-10">
                         <h4 className="font-sans text-xs uppercase tracking-widest text-stone-400 mb-1 font-bold">Conversion Probability</h4>
                         <div className="font-serif italic text-4xl text-amber-400">92%</div>
                      </div>
                      <div className="relative z-10 flex gap-4 mt-4">
                        <button className="flex-1 bg-amber-500 hover:bg-amber-400 text-amber-950 text-sm font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer">
                          Trigger Scholarship
                        </button>
                        <button className="bg-stone-700 hover:bg-stone-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer">
                          Waive Fee
                        </button>
                      </div>
                    </div>
                 </div>
               </div>
               </div>
             </motion.div>

             {/* Global Metrics Chart */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 h-48 flex flex-col"
             >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-stone-500 font-bold">System Flow Entropy</h4>
                  <span className="font-sans text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+14% vs Previous Seminar</span>
                </div>
                <div className="flex-1 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelineData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }} 
                        itemStyle={{ fontSize: 12, fontWeight: 500 }}
                        labelStyle={{ fontSize: 12, color: '#78716c' }}
                      />
                      <Area type="monotone" dataKey="engagement" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorEngage)" />
                      <Area type="monotone" dataKey="conversion" stroke="#10b981" strokeWidth={2} fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
