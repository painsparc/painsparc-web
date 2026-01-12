"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Cpu, Gauge, Battery, 
  Layers, Zap, ArrowRight, Smartphone, Activity
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function PerformancePage() {
  const containerRef = useRef(null);
  
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
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-blue-500">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/peak" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Peak
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Graphics Core</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shadow-2xl shadow-blue-900/20">
                    <Cpu className="text-blue-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                One App. <br/>
                <span className="text-zinc-600">Two Brains.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Peak detects your hardware instantly. <br/>
                On a flagship? You get <span className="text-blue-400">Ultra</span> glassmorphism. <br/>
                On a budget device? You get <span className="text-orange-400">Lite</span> solid-state speed.
              </p>
            </motion.div>
          </section>

          {/* 2. THE ENGINE SIMULATOR */}
          <section className="py-12">
             <DualEngineSimulator />
          </section>

          {/* 3. HARDWARE INTELLIGENCE GRID */}
          <section className="py-24 border-t border-zinc-900 mt-24">
            <h2 className="text-2xl font-bold mb-12 text-center">Hardware Intelligence Logic</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Imposter Detection",
                        desc: "Identifies devices with high RAM but weak processors (e.g., specific Xiaomi/Poco models) and forces Lite mode.",
                        icon: Smartphone
                    },
                    {
                        label: "RAM Hammer",
                        desc: "Analyzes physical memory bandwidth. Devices with <6.5GB usable RAM are automatically routed to Performance mode.",
                        icon: Layers
                    },
                    {
                        label: "FPS Lock",
                        desc: "Regardless of visual fidelity, the core logic loop prioritizes maintaining a stable 60/120 FPS for input latency.",
                        icon: Activity
                    }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
                    >
                        <div className="flex items-center gap-3 mb-6 text-zinc-500">
                            <stat.icon size={18} />
                            <span className="text-xs uppercase tracking-widest">{stat.label}</span>
                        </div>
                        
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
          </section>

          {/* 4. CTA */}
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Performance without compromise.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                >
                    Initialize Core
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

function DualEngineSimulator() {
    const [mode, setMode] = useState<'ultra' | 'lite'>('ultra');

    return (
        <div className="w-full max-w-4xl mx-auto">
            
            {/* Control Panel */}
            <div className="flex justify-center mb-12">
                <div className="bg-zinc-900 p-1.5 rounded-full border border-zinc-800 flex gap-1">
                    <button 
                        onClick={() => setMode('ultra')}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${mode === 'ultra' ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'text-zinc-500 hover:text-white'}`}
                    >
                        Ultra Mode
                    </button>
                    <button 
                        onClick={() => setMode('lite')}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${mode === 'lite' ? 'bg-orange-500 text-white shadow-lg shadow-orange-900/50' : 'text-zinc-500 hover:text-white'}`}
                    >
                        Lite Mode
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* DEVICE MOCKUP */}
                <div className="relative mx-auto w-[300px] h-[600px] bg-zinc-950 border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                    
                    {/* Dynamic Background */}
                    <AnimatePresence mode="wait">
                        {mode === 'ultra' ? (
                            <motion.div 
                                key="ultra-bg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black"
                            >
                                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <motion.div 
                                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-20 right-[-50px] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"
                                />
                                <motion.div 
                                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute bottom-20 left-[-50px] w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
                                />
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="lite-bg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-zinc-950"
                            />
                        )}
                    </AnimatePresence>

                    {/* App Content */}
                    <div className="relative z-10 flex-1 p-6 flex flex-col">
                        <div className="h-6 w-32 bg-zinc-800 rounded-full mx-auto mb-8 opacity-50" />
                        
                        {/* UI Cards */}
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    layout
                                    className={`
                                        h-24 w-full rounded-2xl p-4 flex flex-col justify-between
                                        ${mode === 'ultra' 
                                            ? 'bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg' 
                                            : 'bg-zinc-900 border border-zinc-800'
                                        }
                                        transition-all duration-500
                                    `}
                                >
                                    <div className={`h-2 w-12 rounded-full ${mode === 'ultra' ? 'bg-white/20' : 'bg-zinc-700'}`} />
                                    <div className="flex justify-between items-end">
                                        <div className={`h-2 w-24 rounded-full ${mode === 'ultra' ? 'bg-white/40' : 'bg-zinc-600'}`} />
                                        <div className={`h-6 w-6 rounded-full ${mode === 'ultra' ? 'bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-zinc-700'}`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className={`
                        absolute bottom-6 left-6 right-6 h-16 rounded-2xl flex items-center justify-around px-4
                        ${mode === 'ultra' 
                            ? 'bg-white/10 backdrop-blur-md border border-white/5' 
                            : 'bg-zinc-900 border-t border-zinc-800'
                        }
                        transition-all duration-500 z-20
                    `}>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-8 h-8 rounded-full ${mode === 'ultra' ? 'bg-white/20' : 'bg-zinc-800'}`} />
                        ))}
                    </div>
                </div>

                {/* INFO PANEL */}
                <div className="space-y-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className={`text-3xl font-bold mb-4 ${mode === 'ultra' ? 'text-blue-500' : 'text-orange-500'}`}>
                                {mode === 'ultra' ? 'Ultra Graphics' : 'Performance Mode'}
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Layers size={18} className={mode === 'ultra' ? 'text-blue-500' : 'text-zinc-600'} />
                                    {mode === 'ultra' ? 'Glassmorphism & Blurs Enabled' : 'Opaque Solid Backgrounds'}
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Activity size={18} className={mode === 'ultra' ? 'text-blue-500' : 'text-zinc-600'} />
                                    {mode === 'ultra' ? 'Live Particles & Glows' : 'Static Assets Only'}
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <Battery size={18} className={mode === 'ultra' ? 'text-blue-500' : 'text-zinc-600'} />
                                    {mode === 'ultra' ? 'Standard Power Usage' : 'Max Battery Efficiency'}
                                </li>
                            </ul>
                            
                            <div className="mt-8 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
                                    Target Device
                                </div>
                                <div className="text-white font-medium">
                                    {mode === 'ultra' ? 'Snapdragon 8 Gen 2 / A16 Bionic' : 'Snapdragon 680 / Helio G85'}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    )
}