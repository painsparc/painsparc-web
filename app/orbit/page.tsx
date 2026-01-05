"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowLeft, Infinity as InfinityIcon, FileText, Zap, ArrowRight, 
  ChevronDown, ChevronUp, Code, Server, Shield, Cpu, Database,
  Eye, Layers, Clock, Network, Lock, Activity
} from "lucide-react";

export default function OrbitPage() {
  const [showSpecs, setShowSpecs] = useState(false);
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
    },
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to System
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">System 01</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-between mb-32"
          >
            {/* Left: Text Content */}
            <div className="md:w-1/2">
              <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-[0.9] mb-6">
                Orbit.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                The next generation of education management. <br/>
                <span className="text-zinc-900 dark:text-zinc-200 font-medium">Zero friction. Infinite scale.</span>
              </p>
            </div>

             {/* Right: Large App Logo */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-end">
                <div className="w-full max-w-sm aspect-square bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-grid-zinc-100 dark:bg-grid-zinc-800/20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shadow-lg">
                        <Image 
                            src="/logos/orbit.png" 
                            alt="Orbit App Logo" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
          </motion.div>

          {/* 2. THE CORE LOGIC (Features) */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Core Architecture
            </h2>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* Feature 1 */}
              <motion.div variants={item} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6">
                    <InfinityIcon className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Infinite Evaluation</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                   Automatic, unlimited test generation. Our engine creates unique question sets instantly, eliminating manual paper setting forever.
                </p>
              </motion.div>

              {/* Feature 2: UNIVERSAL EXAM SUPPORT */}
              <motion.div variants={item} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 md:col-span-2">
                 <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                            <FileText className="text-zinc-900 dark:text-zinc-100" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Universal Exam Protocols</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
                            From high-stakes competitive patterns like JEE & NEET to standard subjective Board Exams. Orbit's engine natively understands and formats for every curriculum requirement instantly.
                        </p>
                    </div>
                    <div className="mt-8 flex gap-4">
                        <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Objective (MCQ)</div>
                        <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Subjective Theory</div>
                        <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Hybrid Mode</div>
                    </div>
                 </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={item} className="bg-zinc-900 dark:bg-white p-8 rounded-3xl border border-zinc-900 md:col-span-2 text-white dark:text-black">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold">Rapid Attendance UI</h3>
                    <Zap size={24} />
                 </div>
                 <p className="opacity-80 leading-relaxed max-w-md">
                    We shaved milliseconds off every interaction. Teachers can mark attendance for an entire class in under 12 seconds. Design that respects your time.
                 </p>
              </motion.div>

              {/* Feature 4 */}
              <motion.div variants={item} className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center items-center text-center">
                 <div className="mb-4">
                    <h4 className="text-4xl font-bold text-zinc-900 dark:text-white">10k+</h4>
                    <span className="text-xs uppercase tracking-widest text-zinc-400">Questions Banked</span>
                 </div>
                 <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4" />
                 </div>
              </motion.div>

            </motion.div>
          </div>

          {/* 3. TECH SPECS TOGGLE (The Nerd List - 12 Items) */}
          <div className="flex flex-col items-center mb-8">
             <button 
                onClick={() => setShowSpecs(!showSpecs)}
                className="text-xs md:text-sm font-mono text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors flex items-center gap-2 mb-6"
             >
                {showSpecs ? "Hide Technical Specifications" : "View Technical Specifications"}
                {showSpecs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
             </button>

             <AnimatePresence>
                {showSpecs && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden w-full max-w-5xl"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 mb-12 shadow-xl">
                            
                            {/* 1. Integrity */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Eye size={14}/> Integrity
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Heuristic Proctoring</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Focus loss & tab-switch detection.</p>
                            </div>

                            {/* 2. Scheduling */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Clock size={14}/> Scheduling
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Constraint Solver</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Auto-conflict resolution engine.</p>
                            </div>

                            {/* 3. Rendering */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Code size={14}/> Rendering
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Vector Math Engine</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Native LaTeX equation parsing.</p>
                            </div>

                            {/* 4. Architecture */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Layers size={14}/> Multi-Tenancy
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Tenant Sharding</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Strict logical org isolation.</p>
                            </div>

                            {/* 5. Performance */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Cpu size={14}/> Performance
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Lazy-Load Grid</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">On-demand asset hydration.</p>
                            </div>

                            {/* 6. Database (FIXED JSX ERROR HERE) */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Database size={14}/> Persistence
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Compound Indexing</div>
                                {/* CHANGED: <50ms to &lt;50ms */}
                                <p className="text-[10px] text-zinc-500 leading-tight">Optimized &lt;50ms query times.</p>
                            </div>

                            {/* 7. Security */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Shield size={14}/> Auth Layer
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Scoped Tokens</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Hierarchical PIN access control.</p>
                            </div>

                            {/* 8. Delivery */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Network size={14}/> Delivery
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">CDN Edge Cache</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Low-latency media distribution.</p>
                            </div>

                            {/* 9. Logic */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Activity size={14}/> Logic Core
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Adaptive Algo</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Dynamic difficulty scaling.</p>
                            </div>

                            {/* 10. Operations */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Zap size={14}/> Operations
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Rapid-Fire State</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Batch-write attendance flow.</p>
                            </div>

                            {/* 11. Integrity */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Lock size={14}/> Data Safety
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Lifecycle Monitor</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">OS-level background detection.</p>
                            </div>

                            {/* 12. Backend */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Server size={14}/> Serverless
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Event Triggers</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Auto-scaling cloud functions.</p>
                            </div>

                        </div>
                    </motion.div>
                )}
             </AnimatePresence>
          </div>

          {/* 4. CTA (Refined) */}
          <div className="flex justify-center">
            <Link 
                href="/contact"
                className="group flex items-center gap-4 text-xl font-bold text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-300 transition-all"
            >
                Begin Institutional Integration <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}