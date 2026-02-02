"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, WifiOff, Lock, EyeOff, 
  FileCode, ShieldAlert, Terminal, 
  ServerCrash, Fingerprint, XCircle
} from "lucide-react";
import { useRef } from "react";

export default function UncensorablePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // --- ANIMATIONS ---
  const terminalType: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const lineType: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  // REPLACED: Stable, premium hover instead of glitch
  const stableHover: Variants = {
    initial: { y: 0, borderColor: "rgba(39, 39, 42, 1)" }, // zinc-800
    hover: { 
      y: -5,
      borderColor: "rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-zinc-300 font-mono selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* 1. NAV: STRICT & MINIMAL */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/toss" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            System_03 // Return
          </Link>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/30 border border-red-900/50">
                <WifiOff size={10} className="text-red-500" />
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Offline</span>
             </div>
          </div>
        </div>
      </header>

      <main>
        
        {/* 2. HERO: THE VOID */}
        <section className="relative h-screen flex flex-col justify-center items-center px-4 overflow-hidden border-b border-zinc-900">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <motion.div style={{ opacity, scale }} className="relative z-10 text-center max-w-4xl">
                
                {/* The "Eye" Symbol - Crossed Out */}
                <div className="mx-auto mb-12 relative w-24 h-24 group">
                    <div className="absolute inset-0 bg-red-500/20 blur-[40px] rounded-full group-hover:bg-red-500/30 transition-all duration-500" />
                    <div className="relative w-full h-full border border-zinc-800 bg-black rounded-full flex items-center justify-center">
                        <EyeOff size={40} className="text-zinc-100" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] uppercase tracking-widest text-zinc-500">
                        Surveillance Disabled
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
                    NO SIGNAL. <br/>
                    <span className="text-zinc-600">NO MASTERS.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                    True privacy isn't a toggle in settings. It is the physical inability 
                    to transmit data. TOSS is architected as a digital Faraday cage.
                </p>

            </motion.div>
        </section>


        {/* 3. THE "KILL SWITCH" DEMO (Interactive Terminal) */}
        <section className="py-32 px-4 border-b border-zinc-900 bg-zinc-950/50">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: The Manifesto */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <Terminal size={24} className="text-emerald-500" />
                        The Audit
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-8">
                        Most "private" apps still request internet access for "analytics" or "updates." 
                        We don't.
                        <br /><br />
                        We stripped the networking stack from the manifest. 
                        Even if the AI <i>wanted</i> to snitch on you, it physically cannot find a route out.
                    </p>
                    
                    <ul className="space-y-4">
                        {[
                            "Zero Telemetry",
                            "Zero Crash Reporting",
                            "Zero Metadata Collection"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-sm" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: The Code Proof */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={terminalType}
                    className="bg-[#0D0D0D] border border-zinc-800 rounded-lg p-6 font-mono text-xs md:text-sm shadow-2xl relative overflow-hidden"
                >
                    {/* Window Controls */}
                    <div className="flex gap-2 mb-6 border-b border-zinc-900 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-900/50 border border-red-800" />
                        <div className="w-3 h-3 rounded-full bg-yellow-900/50 border border-yellow-800" />
                        <div className="w-3 h-3 rounded-full bg-green-900/50 border border-green-800" />
                    </div>

                    <div className="space-y-2">
                        <motion.div variants={lineType} className="text-zinc-500">
                            $ adb shell dumpsys package com.painsparc.toss
                        </motion.div>
                        
                        <motion.div variants={lineType} className="text-zinc-300 pt-2">
                            Package [com.painsparc.toss] (1a2b3c...):
                        </motion.div>

                        <motion.div variants={lineType} className="pl-4 text-zinc-500">
                            versionCode=1 minSdk=28 targetSdk=34
                        </motion.div>

                        <motion.div variants={lineType} className="text-zinc-300 pt-2">
                            requestedPermissions:
                        </motion.div>

                        {/* The Valid Permissions */}
                        <motion.div variants={lineType} className="pl-4 text-emerald-500 flex items-center gap-2">
                            <span className="text-zinc-600">--</span> android.permission.READ_EXTERNAL_STORAGE
                        </motion.div>
                        <motion.div variants={lineType} className="pl-4 text-emerald-500 flex items-center gap-2">
                            <span className="text-zinc-600">--</span> android.permission.WRITE_EXTERNAL_STORAGE
                        </motion.div>

                        {/* The Missing Internet Permission */}
                        <motion.div variants={lineType} className="pl-4 text-red-500 flex items-center gap-2 font-bold bg-red-950/10 py-1 -mx-2 px-2 mt-1">
                            <XCircle size={12} /> android.permission.INTERNET  [NOT FOUND]
                        </motion.div>
                         <motion.div variants={lineType} className="pl-4 text-red-500 flex items-center gap-2 font-bold bg-red-950/10 py-1 -mx-2 px-2">
                            <XCircle size={12} /> android.permission.ACCESS_NETWORK_STATE  [NOT FOUND]
                        </motion.div>

                        <motion.div variants={lineType} className="text-zinc-500 pt-4 animate-pulse">
                            _cursor_waiting
                        </motion.div>
                    </div>

                    {/* Scanlines Effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                </motion.div>
            </div>
        </section>


        {/* 4. UNCENSORABLE GRID */}
        <section className="py-32 px-4 max-w-6xl mx-auto">
            <div className="mb-20">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4 block">
                    Resistance Protocol
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter max-w-2xl">
                    Run raw models. <br/>
                    <span className="text-zinc-600">No safety rails.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div 
                    variants={stableHover}
                    initial="initial"
                    whileHover="hover"
                    className="bg-zinc-950 border border-zinc-800 p-8 group relative overflow-hidden rounded-xl"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                        <Lock className="text-zinc-700 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="mb-8 text-zinc-600 group-hover:text-emerald-500 transition-colors">
                        <FileCode size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Quantization Freedom</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Execute raw GGUF files. Run unaligned, unmodified open-source models (Llama, Mistral) exactly as the developers released them.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    variants={stableHover}
                    initial="initial"
                    whileHover="hover"
                    className="bg-zinc-950 border border-zinc-800 p-8 group relative overflow-hidden rounded-xl"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                        <ShieldAlert className="text-zinc-700 group-hover:text-red-500 transition-colors" />
                    </div>
                    <div className="mb-8 text-zinc-600 group-hover:text-red-500 transition-colors">
                        <ServerCrash size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Zero Moderation API</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Standard apps send your prompt to a moderation server first. TOSS processes everything locally. No middleware. No judgment.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    variants={stableHover}
                    initial="initial"
                    whileHover="hover"
                    className="bg-zinc-950 border border-zinc-800 p-8 group relative overflow-hidden rounded-xl"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                        <Fingerprint className="text-zinc-700 group-hover:text-purple-500 transition-colors" />
                    </div>
                    <div className="mb-8 text-zinc-600 group-hover:text-purple-500 transition-colors">
                        <FileCode size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Local Persistence</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Your chat history is stored in `/data/user/` JSON files. It survives app updates, server outages, and internet censorship.
                    </p>
                </motion.div>
            </div>
        </section>


        {/* 5. FOOTER: THE COMMITMENT */}
        <section className="py-24 border-t border-zinc-900 text-center bg-black">
            <h2 className="text-2xl text-white font-bold mb-8">
                Your mind is the last safe place. <br/> Keep it that way.
            </h2>
            
            <Link 
                href="/download"
                className="relative inline-flex group"
            >
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <button className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-black font-mono border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    <Fingerprint className="mr-2" size={16} />
                    INITIALIZE SECURE DOWNLOAD
                </button>
            </Link>
        </section>

      </main>
    </div>
  );
}