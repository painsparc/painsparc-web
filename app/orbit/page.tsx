"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowLeft, FileText, ArrowRight, 
  ChevronDown, ChevronUp, Code, Server, Shield, Cpu, Database,
  Eye, Layers, Clock, Network, Lock, Activity, 
  Infinity as InfinityIcon, Calendar, BookOpen, 
  BarChart, Users, ArrowUpRight, CheckCircle2 
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

  // Pulse Animation for Generator
  const generatePulse: Variants = {
    initial: { opacity: 0.3 },
    animate: { 
      opacity: [0.3, 1, 0.3],
      transition: { duration: 2, repeat: Infinity, ease: "linear" } 
    }
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

          {/* 2. USP FEATURES GRID */}
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
              
              {/* USP 1: AUTO TEST GENERATION (Span 2 - White Theme) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/orbit/generator" className="absolute inset-0 z-10" />
                 
                 {/* Dynamic Generating Background */}
                 <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <div className="flex flex-col gap-2 p-8">
                        {[1,2,3,4,5].map(i => (
                            <motion.div 
                                key={i}
                                variants={generatePulse}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: i * 0.2 }}
                                className="h-2 bg-black dark:bg-white rounded-full w-full"
                            />
                        ))}
                    </div>
                 </div>

                 <div>
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                        <InfinityIcon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Auto-Test Engine</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                       Generate unique, balanced question papers in seconds. Our algorithm creates unlimited sets with zero overlap, eliminating manual setting forever.
                    </p>
                 </div>

                 <div className="flex gap-4 mt-4">
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Objective</div>
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Subjective</div>
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Hybrid</div>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 2: QUESTION BANK (Span 1 - Dark Theme) */}
              <motion.div variants={item} className="relative group bg-zinc-900 dark:bg-white p-8 rounded-3xl border border-zinc-900 dark:border-white text-white dark:text-black h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/orbit/database" className="absolute inset-0 z-10" />

                 <div>
                    <div className="w-12 h-12 bg-zinc-800 dark:bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                        <Database size={20} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">The Vault</h3>
                    <p className="opacity-70 leading-relaxed text-sm">
                       Access a centralized repository of 15,000+ tagged questions. Filter by difficulty, topic, and board year.
                    </p>
                 </div>

                 <div className="text-center">
                    <span className="text-5xl font-bold tracking-tighter">15k+</span>
                    <span className="block text-xs uppercase tracking-widest opacity-50 mt-1">Questions Banked</span>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 3: FLASH ATTENDANCE (Span 1 - UPDATED: Removed Dynamic Icon) */}
              <motion.div variants={item} className="relative group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-green-500/30 transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/orbit/attendance" className="absolute inset-0 z-10" />
                 
                 <div>
                    <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                        <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Flash Attendance</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                        Mark an entire class in under 12 seconds. Smart pattern toggles mean you only tap the absentees.
                    </p>
                 </div>

                 {/* REMOVED: Dynamic Green Icon Animation Block */}

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 4: AUTO TIMETABLE (Span 2 - Olive Theme) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-[#1E2415] border border-[#2F3820] p-8 rounded-3xl hover:border-[#465232] transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/orbit/timetable" className="absolute inset-0 z-10" />
                 
                 {/* Decorative Grid Background */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#2a3322] rounded-2xl flex items-center justify-center mb-6 border border-[#3A452D]">
                        <Calendar size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Neural Timetable</h3>
                    <p className="text-[#8e9c85] leading-relaxed max-w-lg">
                        Conflict-free scheduling in one click. Our constraint solver handles teacher availability, room capacity, and subject weightage automatically.
                    </p>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#2a3322] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} className="text-white group-hover:text-black" />
                 </div>
              </motion.div>

            </motion.div>
          </div>

          {/* 3. NEW SECTION: ADMINISTRATIVE CORE */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Administrative Core
            </h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                
                {/* 1. Records */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                        <FileText size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Auto-Records</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Generates student transcripts, report cards, and character certificates instantly from stored data.
                    </p>
                </motion.div>

                {/* 2. Fee Manager */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                        <BarChart size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Fee Manager</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Track tuition, send automated WhatsApp reminders to parents, and generate financial reports.
                    </p>
                </motion.div>

                {/* 3. Library */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                        <BookOpen size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Digital Library</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Issue books, track returns, and manage fine calculations automatically.
                    </p>
                </motion.div>

                {/* 4. Parent App */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                        <Users size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Parent Connect</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Real-time updates for parents on attendance, marks, and school announcements.
                    </p>
                </motion.div>

            </motion.div>
          </div>

          {/* 4. TECH SPECS TOGGLE */}
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

                            {/* 6. Database */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Database size={14}/> Persistence
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Compound Indexing</div>
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
                                    <Clock size={14}/> Operations
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

          {/* 4. CTA */}
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