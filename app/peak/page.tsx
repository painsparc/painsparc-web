"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// UPDATED IMPORTS with more icons
import { 
  ArrowLeft, TrendingUp, ShieldCheck, 
  Cpu, ArrowRight, Lock, ChevronDown, ChevronUp, 
  Zap, Smartphone, Fingerprint, Activity, Layers, 
  Database, FileText, BarChart3, Globe, Server
} from "lucide-react";

export default function PeakPage() {
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* HEADER (Dark Theme Forced) */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to System
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">System 02</span>
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
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-6">
                Peak.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-md leading-relaxed">
                Ascend to your highest potential. <br/>
                <span className="text-white font-medium">A CRM engineered for pure velocity.</span>
              </p>
            </div>

             {/* Right: Large App Logo */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-end">
                <div className="w-full max-w-sm aspect-square bg-zinc-900 rounded-[3rem] border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-emerald-900/10">
                     <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shadow-lg border border-zinc-800">
                         <Image 
                            src="/logos/peak.png" 
                            alt="Peak App Logo" 
                            fill 
                            className="object-cover"
                        />
                     </div>
                </div>
            </div>
          </motion.div>

          {/* 2. THE CORE LOGIC (Features) */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2">
              Performance Metrics
            </h2>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* Feature 1: Dual Engine */}
              <motion.div variants={item} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 md:col-span-2 group hover:border-zinc-600 transition-colors">
                 <div className="flex flex-col h-full justify-between">
                    <div>
                        <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800">
                            <Cpu className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Dual-Engine Performance</h3>
                        <p className="text-zinc-400 leading-relaxed max-w-lg">
                            Switch seamlessly between "Ultra" mode for heavy analytics and "Lite" mode for rapid data entry on the field. The graphics engine adapts to your device state instantly.
                        </p>
                    </div>
                    <div className="mt-8 flex gap-4">
                         <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }} 
                                whileInView={{ width: "90%" }} 
                                transition={{ duration: 1.5, ease: "easeOut" }} 
                                className="h-full bg-emerald-500" 
                            />
                         </div>
                    </div>
                 </div>
              </motion.div>

              {/* Feature 2: Velocity */}
              <motion.div variants={item} className="bg-white p-8 rounded-3xl border border-white text-black">
                <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">High-Velocity Pipeline</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                   Leads decay every minute they sit idle. Peak's pipeline visualizes stagnation and forces movement. Close deals 3x faster.
                </p>
              </motion.div>

              {/* Feature 3: Retention */}
              <motion.div variants={item} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                 <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800">
                    <ShieldCheck className="text-emerald-400" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Automated Retention</h3>
                 <p className="text-zinc-400 leading-relaxed text-sm">
                    Don't let clients drift away. Our "Retention Automata" detects inactivity and triggers re-engagement protocols automatically.
                 </p>
              </motion.div>

              {/* Feature 4: Security */}
              <motion.div variants={item} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 md:col-span-2 flex items-center justify-between">
                 <div>
                    <h4 className="text-lg font-bold text-white mb-1">Encrypted Vault</h4>
                    <p className="text-sm text-zinc-500">AES-256 at rest. Biometric access control.</p>
                 </div>
                 <Lock className="text-zinc-600" />
              </motion.div>

            </motion.div>
          </div>

          {/* 3. TECH SPECS TOGGLE (Impressive Client-Facing Specs) */}
          <div className="flex flex-col items-center mb-8">
             <button 
                onClick={() => setShowSpecs(!showSpecs)}
                className="text-xs md:text-sm font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 mb-6"
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
                        {/* UPDATED: 12-Item Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-zinc-900 rounded-3xl border border-zinc-800 mb-12 shadow-2xl">
                            
                            {/* 1. Optimization */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Cpu size={14} /> Optimization
                                </div>
                                <div className="font-bold text-white text-sm">Device-Adaptive</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Dynamic resource allocation profiles.
                                </p>
                            </div>

                            {/* 2. Security */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Fingerprint size={14} /> Security
                                </div>
                                <div className="font-bold text-white text-sm">4-Layer Biometric</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Org » Branch » Staff » Bio-Auth.
                                </p>
                            </div>

                            {/* 3. Sync */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Activity size={14} /> Synchronization
                                </div>
                                <div className="font-bold text-white text-sm">Real-Time Event Stream</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Live socket-based node updates.
                                </p>
                            </div>

                            {/* 4. Input */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Zap size={14} /> Input Vector
                                </div>
                                <div className="font-bold text-white text-sm">Voice-to-Data Neural</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Hands-free entry with context NLP.
                                </p>
                            </div>

                             {/* 5. Visual Engine */}
                             <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Smartphone size={14} /> Visual Engine
                                </div>
                                <div className="font-bold text-white text-sm">120Hz Physics-Based</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Fluid gesture interactions.
                                </p>
                            </div>

                            {/* 6. Architecture */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Layers size={14} /> Architecture
                                </div>
                                <div className="font-bold text-white text-sm">Multi-Tenant Kernel</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Strict logical data isolation.
                                </p>
                            </div>

                            {/* 7. Finance */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Database size={14} /> Financial Core
                                </div>
                                <div className="font-bold text-white text-sm">Atomic Ledger System</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Precision decimal handling.
                                </p>
                            </div>

                            {/* 8. Persistence */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Server size={14} /> Persistence
                                </div>
                                <div className="font-bold text-white text-sm">Optimistic Local State</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Instant interactions, bg sync.
                                </p>
                            </div>

                            {/* 9. Reporting */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <FileText size={14} /> Reporting
                                </div>
                                <div className="font-bold text-white text-sm">Vector Generation</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Client-side high-res PDF rendering.
                                </p>
                            </div>

                            {/* 10. Analytics */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <BarChart3 size={14} /> Analytics
                                </div>
                                <div className="font-bold text-white text-sm">Edge-Computed</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    On-device statistical modeling.
                                </p>
                            </div>

                            {/* 11. Network */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Globe size={14} /> Network
                                </div>
                                <div className="font-bold text-white text-sm">Adaptive Throttling</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Low-bandwidth optimization.
                                </p>
                            </div>

                            {/* 12. Encryption */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-500 text-xs uppercase tracking-wider font-bold">
                                    <Lock size={14} /> Transport
                                </div>
                                <div className="font-bold text-white text-sm">TLS 1.3 Encryption</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    End-to-end socket protection.
                                </p>
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
                className="group flex items-center gap-4 text-xl font-bold text-white border-b-2 border-white pb-1 hover:text-zinc-300 hover:border-zinc-500 transition-all"
            >
                Activate Peak Protocol <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}