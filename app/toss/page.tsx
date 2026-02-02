"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ArrowLeft, ArrowRight, ChevronDown, ChevronUp, 
  WifiOff, Lock, Zap, HardDrive, ShieldCheck, 
  Cpu, Layers, Download, Globe, ArrowUpRight, 
  BatteryCharging, Key, Smartphone
} from "lucide-react";

export default function TossPage() {
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

  // Pulse Animation for the "Living Device" feel
  const powerPulse: Variants = {
    initial: { opacity: 0.4, scale: 1 },
    animate: { 
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.02, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-emerald-900 selection:text-white dark:selection:bg-emerald-500 dark:selection:text-black">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to System
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">System 03</span>
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
                TOSS.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                Your private AI. In your pocket. <br/>
                <span className="text-zinc-900 dark:text-zinc-200 font-medium">No Cloud. No Subscriptions. No Limits.</span>
              </p>
            </div>

             {/* Right: Large App Logo */}
            <div className="mt-12 md:mt-0 md:w-1/2 flex justify-end">
                <div className="w-full max-w-sm aspect-square bg-zinc-900 dark:bg-black rounded-[3rem] border border-zinc-800 dark:border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-grid-zinc-800/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                    
                    {/* Abstract "Brain/Chip" glow behind logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-[60px]" />

                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950">
                        <Image 
                            src="/logos/toss.png" 
                            alt="TOSS App Logo" 
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
              The Sovereign Stack
            </h2>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* USP 1: TOTAL PRIVACY (Span 2 - White Theme) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/toss/privacy" className="absolute inset-0 z-10" />
                 
                 {/* Decorative background */}
                 <div className="absolute right-0 top-0 w-2/3 h-full opacity-5 pointer-events-none">
                     <motion.div 
                        variants={powerPulse}
                        initial="initial"
                        animate="animate"
                        className="w-full h-full bg-gradient-to-l from-emerald-500/20 to-transparent"
                     />
                 </div>

                 <div>
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                        <Lock size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Uncensorable Privacy</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
                       Your thoughts are yours alone. TOSS runs entirely on your hardware. No data leaves your device. No corporate logs. No ads. Just pure, air-gapped intelligence.
                    </p>
                 </div>

                 <div className="flex gap-4 mt-4">
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Air-Gapped</div>
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Zero Telemetry</div>
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">Local Only</div>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 2: OFFLINE INDEPENDENCE (Span 1 - Dark Theme) */}
              <motion.div variants={item} className="relative group bg-zinc-900 dark:bg-white p-8 rounded-3xl border border-zinc-900 dark:border-white text-white dark:text-black h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/toss/offline" className="absolute inset-0 z-10" />

                 <div>
                    <div className="w-12 h-12 bg-zinc-800 dark:bg-zinc-100 rounded-2xl flex items-center justify-center mb-6 text-white dark:text-black">
                        <WifiOff size={20} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Works Anywhere</h3>
                    <p className="opacity-70 leading-relaxed text-sm">
                       In a plane, a submarine, or a remote bunker. TOSS requires zero internet to function.
                    </p>
                 </div>

                 <div className="text-center">
                    <span className="text-5xl font-bold tracking-tighter">0%</span>
                    <span className="block text-xs uppercase tracking-widest opacity-50 mt-1">Dependence</span>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center group-hover:bg-white group-hover:text-black dark:group-hover:bg-black dark:group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 3: OWN YOUR KNOWLEDGE (Span 1) */}
              <motion.div variants={item} className="relative group bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/toss/library" className="absolute inset-0 z-10" />
                 
                 <div>
                    <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                        <HardDrive size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Download The Web</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                        Don't just browse. <b>Own</b> the data. Scrape entire topics and save them locally forever.
                    </p>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </motion.div>

              {/* USP 4: BYO BRAIN (Span 2 - Dark/Hacker Theme) */}
              <motion.div variants={item} className="relative md:col-span-2 group bg-[#050A05] border border-[#152515] p-8 rounded-3xl hover:border-[#2A452A] transition-colors h-[340px] flex flex-col justify-between overflow-hidden">
                 <Link href="/toss/models" className="absolute inset-0 z-10" />
                 
                 {/* Decorative Grid Background */}
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00FF9D_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                 <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#0A1A0A] rounded-2xl flex items-center justify-center mb-6 border border-[#1A331A]">
                        <Cpu size={20} className="text-[#00FF9D]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Bring Your Own Brain (BYOB)</h3>
                    <p className="text-[#8FB38F] leading-relaxed max-w-lg">
                        You aren't locked in. Swap "Brains" like video game cartridges. Run Llama 3 for coding, Phi-3 for reasoning, or Gemma for speed. It's an OS for intelligence.
                    </p>
                 </div>

                 <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-[#0A1A0A] flex items-center justify-center group-hover:bg-[#00FF9D] group-hover:text-black transition-all duration-300">
                    <ArrowUpRight size={20} className="text-[#00FF9D] group-hover:text-black" />
                 </div>
              </motion.div>

            </motion.div>
          </div>

          {/* 3. SECONDARY SECTION: THE ARSENAL */}
          <div className="mb-24">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
              Why Go Offline?
            </h2>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                
                {/* 1. Speed */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                        <Zap size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Instant Speed</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        No server queues. No "Thinking..." bubbles. The AI lives on your silicon.
                    </p>
                </motion.div>

                {/* 2. Security */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                        <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Zero Leaks</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Perfect for sensitive data, legal docs, or personal journals.
                    </p>
                </motion.div>

                {/* 3. Reliability */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                        <BatteryCharging size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">Battery Efficient</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Optimized quantization (Int4/Int8) means high IQ with low power drain.
                    </p>
                </motion.div>

                {/* 4. Cost */}
                <motion.div variants={item} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center mb-4 text-pink-600 dark:text-pink-400">
                        <Key size={20} />
                    </div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">One-Time Use</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Stop paying monthly rent for your intelligence. Buy the hardware, own the brain.
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
                            
                            {/* 1. Inference Engine */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Cpu size={14}/> Inference
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Llama.cpp / ONNX</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Native C++ bindings via JNI.</p>
                            </div>

                            {/* 2. Quantization */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Layers size={14}/> Compression
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">4-bit / 8-bit</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Optimized GGUF & Int8 weights.</p>
                            </div>

                            {/* 3. Retrieval */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Smartphone size={14}/> Platform
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Android Native</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Kotlin + Jetpack Compose.</p>
                            </div>

                            {/* 4. Connectivity */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <WifiOff size={14}/> Network
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Air-Gapped</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Zero external API calls.</p>
                            </div>

                            {/* 5. Memory */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <HardDrive size={14}/> Context
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Rolling Window</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Auto-decay after 5m inactivity.</p>
                            </div>

                            {/* 6. Ingestion */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Globe size={14}/> Scraper
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Wikipedia API</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Intent-based fact extraction.</p>
                            </div>

                            {/* 7. Security */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <ShieldCheck size={14}/> Privacy
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Local Sandbox</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Data never leaves /data/user.</p>
                            </div>

                            {/* 8. Reflex */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider font-bold">
                                    <Zap size={14}/> Latency
                                </div>
                                <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">&lt;10ms Reflex</div>
                                <p className="text-[10px] text-zinc-500 leading-tight">Hardcoded instant responses.</p>
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
                className="group flex items-center gap-4 text-xl font-bold text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all"
            >
                Initiate Local Integration <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}