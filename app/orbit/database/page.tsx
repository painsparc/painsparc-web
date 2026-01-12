"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Database, Search, Filter, Tag, 
  FileCheck, ArrowRight, Server, Archive
} from "lucide-react";
import { useState, useEffect } from "react";

export default function DatabasePage() {
  
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
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-400">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/orbit" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Orbit
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Question Bank</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-indigo-500/20">
                    <Database className="text-indigo-600 dark:text-indigo-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-none mb-8">
                The Vault. <br/>
                <span className="text-zinc-400 dark:text-zinc-600">15,000+ Questions.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Stop searching through dusty books. <br/>
                Our digital repository is indexed by <span className="text-indigo-600 dark:text-indigo-400 font-medium">Concept, Difficulty, and Year.</span>
              </p>
            </motion.div>
          </section>

          {/* 2. THE VAULT SIMULATOR */}
          <section className="py-12">
             <VaultSimulator />
          </section>

          {/* 3. CAPABILITIES GRID */}
          <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Repository Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Granular Tags",
                        desc: "Questions aren't just sorted by chapter. They are tagged by Micro-Concept (e.g., Physics > Optics > Lens Maker Formula).",
                        icon: Tag
                    },
                    {
                        label: "Archive Mode",
                        desc: "Includes full previous year question papers (PYQ) from JEE, NEET, and CBSE boards dating back to 2012.",
                        icon: Archive
                    },
                    {
                        label: "Rich Media",
                        desc: "Supports complex diagrams, chemical structures, and LaTeX equations. Images are vector-rendered for perfect print quality.",
                        icon: FileCheck
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
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Unlock the knowledge base.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl"
                >
                    Access The Vault
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

function VaultSimulator() {
    const [activeFilter, setActiveFilter] = useState<number>(0);
    const filters = ["Physics", "Rotational Motion", "Hard", "JEE Advanced"];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFilter(prev => (prev + 1) % 5); // Cycle 0 to 4
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        // FIXED CONTAINER: h-auto on mobile to allow stacking, fixed height on desktop
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]">
            
            {/* LEFT: FILTER SIDEBAR */}
            <div className="w-full md:w-1/3 bg-zinc-50 dark:bg-zinc-950 p-6 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col">
                <div className="flex items-center gap-2 mb-6 md:mb-8 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    <Filter size={14} /> Filter Stack
                </div>

                <div className="space-y-3 md:space-y-4">
                    {filters.map((filter, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0.5, x: -10 }}
                            animate={{ 
                                opacity: i < activeFilter ? 1 : 0.3,
                                x: i < activeFilter ? 0 : -10,
                                scale: i + 1 === activeFilter ? 1.05 : 1
                            }}
                            className={`p-3 md:p-4 rounded-xl border flex items-center justify-between transition-colors ${i < activeFilter ? 'bg-white dark:bg-zinc-900 border-indigo-500/50 shadow-sm' : 'border-transparent'}`}
                        >
                            <span className={`text-sm font-medium ${i < activeFilter ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>{filter}</span>
                            {i < activeFilter && <CheckCircle2 size={16} className="text-indigo-500" />}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:mt-auto pt-4 md:pt-8 border-t md:border-t-0 border-zinc-200 dark:border-zinc-800 md:border-none flex justify-between md:block items-center">
                    <div className="text-xs text-zinc-500 mb-0 md:mb-2">Matches Found</div>
                    <div className="text-3xl font-mono font-bold text-zinc-900 dark:text-white">
                        {activeFilter === 0 ? "15,420" : 
                         activeFilter === 1 ? "4,200" : 
                         activeFilter === 2 ? "340" : 
                         activeFilter === 3 ? "128" : "24"}
                    </div>
                </div>
            </div>

            {/* RIGHT: RESULTS AREA */}
            <div className="flex-1 p-6 relative bg-zinc-100/50 dark:bg-zinc-900/50 min-h-[400px] md:min-h-0">
                {/* Simulated Search Bar */}
                <div className="flex items-center gap-4 bg-white dark:bg-black p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 mb-6 shadow-sm">
                    <Search size={18} className="text-zinc-400" />
                    <div className="h-4 w-32 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                </div>

                {/* Results List */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {activeFilter >= 4 && [1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white dark:bg-black p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded">QID-{2049 + i}</span>
                                    <span className="text-[10px] text-zinc-400">JEE Adv 201{8+i}</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                                    <div className="h-2 w-1/2 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                        
                        {/* Loading State */}
                        {activeFilter < 4 && (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center h-[200px] text-zinc-400 absolute inset-0"
                            >
                                <Server size={32} className="animate-pulse mb-4 opacity-50" />
                                <span className="text-xs uppercase tracking-widest">Querying Vault...</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

        </div>
    )
}

function CheckCircle2({ size, className }: { size: number, className?: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
        </svg>
    )
}