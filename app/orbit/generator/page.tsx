"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, FileText, RefreshCw, CheckCircle2, 
  Cpu, Layers, Zap, ArrowRight, Settings, Printer
} from "lucide-react";
import { useState, useEffect } from "react";

export default function GeneratorPage() {
  
  // Staggered Fade Up
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-400">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/orbit" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Orbit
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Test Engine</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-blue-500/20">
                    <RefreshCw className="text-blue-600 dark:text-blue-500 w-10 h-10 animate-spin-slow" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-none mb-8">
                Infinite Exams. <br/>
                <span className="text-zinc-400 dark:text-zinc-600">Zero Effort.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                The manual labor of setting question papers is over. <br/>
                Select a topic. Choose a difficulty. <span className="text-blue-600 dark:text-blue-400 font-medium">Click Print.</span>
              </p>
            </motion.div>
          </section>

          {/* 2. THE GENERATOR SIMULATION */}
          <section className="py-12">
             <GeneratorSimulator />
          </section>

          {/* 3. CAPABILITIES GRID */}
          <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Engine Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Blueprint Compliance",
                        desc: "Strict adherence to exam patterns (JEE Mains, NEET, CBSE Boards). The engine knows exactly how many MCQs vs Theory questions to pick.",
                        icon: Layers
                    },
                    {
                        label: "No Repetition",
                        desc: "Smart history tracking ensures students never see the same question twice in consecutive tests, forcing true learning.",
                        icon: RefreshCw
                    },
                    {
                        label: "Instant Key",
                        desc: "As the question paper is generated, a corresponding Answer Key and detailed Solution PDF is created in parallel.",
                        icon: CheckCircle2
                    }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6 text-zinc-500 dark:text-zinc-400">
                            <stat.icon size={18} />
                            <span className="text-xs uppercase tracking-widest">{stat.label}</span>
                        </div>
                        
                        <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
          </section>

          {/* 4. CTA */}
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Deploy the Engine.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl"
                >
                    Start Generating
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// --- SIMULATOR COMPONENT ---

function GeneratorSimulator() {
    const [mode, setMode] = useState<'jee' | 'board'>('jee');
    const [generating, setGenerating] = useState(false);
    const [paperHeight, setPaperHeight] = useState(0);

    useEffect(() => {
        // Auto-trigger generation animation when mode changes
        setGenerating(true);
        setPaperHeight(0);
        
        const timeout = setTimeout(() => {
            setPaperHeight(400); // Expand paper
            setGenerating(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [mode]);

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* CONTROLS */}
            <div className="order-2 lg:order-1 space-y-8">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                        <Settings size={18} /> Configuration
                    </h3>
                    
                    {/* Mode Toggle */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button 
                            onClick={() => setMode('jee')}
                            className={`p-4 rounded-xl border text-sm font-bold transition-all ${mode === 'jee' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-300'}`}
                        >
                            JEE Mains (MCQ)
                        </button>
                        <button 
                            onClick={() => setMode('board')}
                            className={`p-4 rounded-xl border text-sm font-bold transition-all ${mode === 'board' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-300'}`}
                        >
                            CBSE Board (Theory)
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-500">Difficulty Distribution</span>
                            <span className="font-mono text-zinc-900 dark:text-white">30% Easy / 50% Med / 20% Hard</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                            <div className="w-[30%] h-full bg-green-500" />
                            <div className="w-[50%] h-full bg-yellow-500" />
                            <div className="w-[20%] h-full bg-red-500" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400 text-sm">
                    <Cpu size={16} />
                    <span>Algorithm selects from 15,000+ unique questions.</span>
                </div>
            </div>

            {/* PREVIEW ANIMATION */}
            <div className="order-1 lg:order-2 flex justify-center relative">
                
                {/* The "Printer" Head */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-12 bg-zinc-800 rounded-full shadow-2xl z-20 flex items-center justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Generating...</span>
                </div>

                {/* The "Paper" */}
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: paperHeight }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-[320px] bg-white border border-zinc-200 overflow-hidden shadow-2xl relative z-10 mt-6"
                >
                    <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex justify-between items-end border-b-2 border-black pb-4">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">{mode === 'jee' ? 'Entrance Examination' : 'Term End Examination'}</div>
                                <div className="text-2xl font-serif font-bold text-black">{mode === 'jee' ? 'PHYSICS - JEE' : 'PHYSICS - XII'}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-mono text-zinc-500">Marks: {mode === 'jee' ? '100' : '70'}</div>
                                <div className="text-xs font-mono text-zinc-500">Time: 3h</div>
                            </div>
                        </div>

                        {/* Questions Content */}
                        <div className="space-y-6 opacity-80">
                            {mode === 'jee' ? (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-black">Q1.</span>
                                            <span className="text-xs text-zinc-800 font-serif leading-relaxed">A particle moves along a straight line such that its displacement at any time t is given by s = t³ - 6t² + 3t + 4...</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 pl-6 text-[10px] font-mono text-zinc-600">
                                            <div>(A) 12 m/s</div>
                                            <div>(B) 14 m/s</div>
                                            <div>(C) 0 m/s</div>
                                            <div>(D) -12 m/s</div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-black">Q2.</span>
                                            <span className="text-xs text-zinc-800 font-serif leading-relaxed">The dimensional formula for magnetic flux is...</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 pl-6 text-[10px] font-mono text-zinc-600">
                                            <div>(A) [ML²T⁻²A⁻¹]</div>
                                            <div>(B) [ML³T⁻²A⁻²]</div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-black">Q1.</span>
                                            <span className="text-xs text-zinc-800 font-serif leading-relaxed">State Gauss's Law in electrostatics. Derive an expression for the electric field due to an infinitely long straight charged wire. (5 Marks)</span>
                                        </div>
                                        <div className="h-16 border border-dashed border-zinc-300 rounded bg-zinc-50" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold text-black">Q2.</span>
                                            <span className="text-xs text-zinc-800 font-serif leading-relaxed">Define 'drift velocity' and derive an expression for it. (3 Marks)</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    
                    {/* Scan line effect */}
                    <motion.div 
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 1.5, ease: "linear", repeat: generating ? Infinity : 0 }}
                        className="absolute left-0 w-full h-1 bg-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] z-30"
                    />
                </motion.div>

            </div>
        </div>
    )
}