"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowLeft, TrendingUp, Cpu, ArrowRight, Lock, ChevronDown, ChevronUp, 
  Zap, Smartphone, Fingerprint, Activity, Layers, 
  Database, FileText, BarChart3, Globe, Server,
  Mic, Calendar, QrCode, ArrowUpRight, ShoppingBag, Receipt, Package, Coins
} from "lucide-react";

export default function PeakPage() {
  const [showSpecs, setShowSpecs] = useState(false);

  // Staggered Fade In
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

  // Pulse Animation for Voice
  const pulse: Variants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: { 
      scale: [1, 1.5, 1], 
      opacity: [0.5, 0, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
    }
  };

  // Scanning Animation for Performance
  const scan: Variants = {
    initial: { left: "-10%" },
    animate: { 
      left: "110%", 
      transition: { duration: 3, repeat: Infinity, ease: "linear" } 
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* HEADER */}
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

          {/* 2. USP FEATURES GRID (BENTO LAYOUT) */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2">
              Core Selling Propositions
            </h2>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* USP 1: NEURAL VOICE ENTRY (Long Tile - Span 2) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-colors h-[320px] flex flex-col justify-between overflow-hidden">
                 <Link href="/peak/voice-entry" className="absolute inset-0 z-10" />
                 
                 <div>
                    <div className="relative w-12 h-12 flex items-center justify-center mb-6">
                        {/* Dynamic Pulse Animation */}
                        <motion.div variants={pulse} initial="initial" animate="animate" className="absolute inset-0 bg-red-500 rounded-full blur-md" />
                        <div className="relative z-10 w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-red-500/50 transition-colors">
                            <Mic className="text-white" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Neural Voice Entry</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-md">
                        Stop typing. Speak natural commands to log data instantly. Our model parses context, dates, and amounts with 99% accuracy.
                    </p>
                 </div>

                 {/* Arrow */}
                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 2: HIGH VELOCITY PIPELINE (Short Tile - Span 1) */}
              <motion.div variants={item} className="relative group bg-white p-8 rounded-3xl border border-white text-black h-[320px] flex flex-col justify-between overflow-hidden">
                 <Link href="/peak/pipeline" className="absolute inset-0 z-10" />

                 <div>
                    <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
                        <TrendingUp className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">High-Velocity Pipeline</h3>
                    <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                       Visual stagnation tracking. Peak highlights decaying leads and forces movement.
                    </p>
                 </div>

                 {/* Subtle Dynamic Graph Bar */}
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100">
                    <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-black" 
                    />
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 3: LIVE APPOINTMENT BOOKER (Short Tile - Span 1) - DIM OLIVE GREEN */}
              <motion.div variants={item} className="relative group bg-[#13160F] p-8 rounded-3xl border border-[#24291B] hover:border-[#465232] transition-colors h-[320px] flex flex-col justify-between overflow-hidden">
                 <Link href="/peak/appointments" className="absolute inset-0 z-10" />
                 
                 <div>
                    <div className="w-12 h-12 bg-[#1E2415] rounded-2xl flex items-center justify-center mb-6 border border-[#2F3820] group-hover:border-emerald-500/50 transition-colors">
                        <div className="flex gap-1">
                            <QrCode className="text-white" size={18} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Live Booking</h3>
                    <p className="text-[#8e9c85] leading-relaxed text-sm">
                        Zero-friction. Clients scan QR codes to book slots. Updates reflect live.
                    </p>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#1E2415] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 4: DUAL ENGINE PERFORMANCE (Long Tile - Span 2) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-colors h-[320px] flex flex-col justify-between overflow-hidden">
                 <Link href="/peak/performance" className="absolute inset-0 z-10" />
                 
                 {/* Scanning Line Animation */}
                 <motion.div 
                    variants={scan}
                    initial="initial"
                    animate="animate"
                    className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-20 pointer-events-none"
                 />

                 <div>
                    <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                        <Cpu className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dual-Engine Core</h3>
                    <p className="text-zinc-400 leading-relaxed max-w-md">
                        Ultra-Light Mode for field data entry. Heavy-Analytics Mode for desktop reviews. The system adapts to your device state instantly to preserve battery and maintain 120fps.
                    </p>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

            </motion.div>
          </div>

          {/* 3. NEW SECTION: COMPLETE ECOSYSTEM */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-2">
              The Complete Ecosystem
            </h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                
                {/* 1. Finance */}
                <motion.div variants={item} className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 text-emerald-500">
                        <Coins size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Finance Core</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Atomic ledger system. Track expenses, profit, and loss with decimal precision.
                    </p>
                </motion.div>

                {/* 2. Inventory */}
                <motion.div variants={item} className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 text-blue-500">
                        <Package size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Smart Inventory</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Live stock decrements. Get low-stock alerts before you run out.
                    </p>
                </motion.div>

                {/* 3. Auto-Receipts */}
                <motion.div variants={item} className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 text-purple-500">
                        <Receipt size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Auto Receipts</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Generates PDF invoices instantly and sends them via WhatsApp automatically.
                    </p>
                </motion.div>

                {/* 4. Marketplace */}
                <motion.div variants={item} className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 border border-zinc-800 text-amber-500">
                        <ShoppingBag size={20} />
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2">Marketplace</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        Integrated store. Shop for products or sell to clients directly within the app.
                    </p>
                </motion.div>

            </motion.div>
          </div>

          {/* 4. TECH SPECS TOGGLE */}
          <div className="flex flex-col items-center mb-8">
             <button 
                onClick={() => setShowSpecs(!showSpecs)}
                className="text-xs md:text-sm font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 mb-6"
             >
                {showSpecs ? "Hide Deep Technical Specifications" : "View Deep Technical Specifications"}
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

          {/* 5. CTA */}
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