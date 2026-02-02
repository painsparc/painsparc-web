"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Download, Database, Globe, 
  Layers, FileJson, Zap, HardDrive, 
  Network, ArrowDown, Library
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function LibraryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- INGESTION SIMULATOR STATE ---
  const [depth, setDepth] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  // Simulation Data (based on your IngestionActivity.kt)
  const depthLevels = [
    { level: 1, name: "QUICK SCAN", files: "~10 Files", desc: "Surface level facts. Definitions only." },
    { level: 2, name: "STANDARD", files: "~50 Files", desc: "Related topics and immediate context." },
    { level: 3, name: "DEEP DIVE", files: "~200 Files", desc: "Full category tree and sub-branches." },
    { level: 4, name: "COMPREHENSIVE", files: "~1,000 Files", desc: "Academic depth. Every citation followed." },
    { level: 5, name: "MAXIMUM", files: "~10,000 Files", desc: "The entire knowledge graph. Everything." },
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setProgress(0);
    setLogs(["> INITIALIZING HARVESTER..."]);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 15);
      if (p > 100) p = 100;
      setProgress(p);

      // Add "Hacker" logs based on progress
      if (p > 10 && p < 20) setLogs(prev => [...prev.slice(-4), "> PARSING WIKIPEDIA API..."]);
      if (p > 30 && p < 40) setLogs(prev => [...prev.slice(-4), `> DEPTH LEVEL ${depth} REACHED...`]);
      if (p > 50 && p < 60) setLogs(prev => [...prev.slice(-4), "> FILTERING INTENTS [DOSAGE, SAFETY]..."]);
      if (p > 70 && p < 80) setLogs(prev => [...prev.slice(-4), "> WRITING JSON PACKS..."]);
      if (p === 100) {
        setLogs(prev => [...prev.slice(-4), "> INGESTION COMPLETE. KNOWLEDGE SECURED."]);
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 2000);
      }
    }, 200);
  };

  // --- ANIMATIONS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-violet-900 selection:text-white">
      
      {/* 1. NAV */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/toss" className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            System_03 // Return
          </Link>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
             <span className="text-[10px] font-bold text-violet-500 uppercase tracking-wider">Knowledge Engine</span>
          </div>
        </div>
      </header>

      <main>

        {/* 2. HERO: THE LIBRARY OF ALEXANDRIA */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 border-b border-zinc-900 relative overflow-hidden">
            
            {/* Violet Nebula Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-violet-900/20">
                        <Database size={48} className="text-violet-500" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
                    STEAL THE <br/>
                    <span className="text-violet-500">INTERNET.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-12">
                    Webpages are temporary. Files are forever. <br/>
                    TOSS includes a military-grade <b>scraper</b> that turns chaotic websites 
                    into permanent, offline knowledge packs.
                </p>

                {/* --- INTERACTIVE INGESTION SIMULATOR --- */}
                <div className="max-w-xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl text-left relative overflow-hidden">
                    
                    {/* Header */}
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block mb-1">Target Subject</span>
                            <div className="text-white font-mono font-bold text-lg">"Quantum Mechanics"</div>
                        </div>
                        <div className="text-right">
                             <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest block mb-1">Harvester Level</span>
                             <div className="text-violet-400 font-bold font-mono">LVL {depth}</div>
                        </div>
                    </div>

                    {/* Slider UI */}
                    <div className="mb-8 relative z-10">
                        <div className="flex justify-between mb-2 text-[10px] font-mono text-zinc-600 uppercase">
                            <span>Scan</span>
                            <span>Max</span>
                        </div>
                        <input 
                            type="range" 
                            min="1" 
                            max="5" 
                            step="1"
                            value={depth}
                            onChange={(e) => setDepth(parseInt(e.target.value))}
                            disabled={isSimulating}
                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500 disabled:opacity-50"
                        />
                        <div className="flex justify-between mt-4 items-center">
                            <div className="text-xs text-zinc-400 font-medium">
                                {depthLevels[depth-1].name}
                            </div>
                            <div className="text-xs text-zinc-500">
                                {depthLevels[depth-1].files}
                            </div>
                        </div>
                        <div className="mt-2 text-[10px] text-zinc-600">
                            {depthLevels[depth-1].desc}
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="border-t border-zinc-800 pt-6">
                        {!isSimulating ? (
                            <button 
                                onClick={runSimulation}
                                className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowDown size={14} /> Start Ingestion
                            </button>
                        ) : (
                            <div className="space-y-3">
                                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-violet-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                                <div className="font-mono text-[10px] text-violet-400 h-16 overflow-hidden flex flex-col justify-end">
                                    {logs.map((log, i) => (
                                        <div key={i}>{log}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </motion.div>
        </section>


        {/* 3. TECHNICAL BREAKDOWN (How it works) */}
        <section className="py-24 px-4 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Vector-Less RAG.</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        We don't use bloated vector databases. We use <b>Intent-Based JSON</b>. 
                        It's 10x faster, editable by humans, and takes up 90% less space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Step 1 */}
                    <div className="p-8 rounded-3xl bg-black border border-zinc-800 relative group hover:border-violet-500/30 transition-colors">
                        <div className="absolute top-8 right-8 text-zinc-800 font-black text-6xl opacity-20 group-hover:text-violet-900 transition-colors select-none">01</div>
                        <Globe className="text-zinc-600 mb-6 group-hover:text-violet-500 transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">The Spider</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Our crawler (`IngestionEngine`) hits Wikipedia and related sources. It follows links based on your "Depth" setting, capturing entire knowledge trees.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="p-8 rounded-3xl bg-black border border-zinc-800 relative group hover:border-violet-500/30 transition-colors">
                        <div className="absolute top-8 right-8 text-zinc-800 font-black text-6xl opacity-20 group-hover:text-violet-900 transition-colors select-none">02</div>
                        <Layers className="text-zinc-600 mb-6 group-hover:text-violet-500 transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Intent Filter</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            We don't just dump text. We sort facts into buckets: <i>Dosage, Safety, History, Composition</i>. The AI knows exactly where to look.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="p-8 rounded-3xl bg-black border border-zinc-800 relative group hover:border-violet-500/30 transition-colors">
                        <div className="absolute top-8 right-8 text-zinc-800 font-black text-6xl opacity-20 group-hover:text-violet-900 transition-colors select-none">03</div>
                        <FileJson className="text-zinc-600 mb-6 group-hover:text-violet-500 transition-colors" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">JSON Packs</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Data is saved as pure JSON. You can open it, read it, edit it, or share it. It's not a database blob; it's a file you own.
                        </p>
                    </div>

                </div>
            </div>
        </section>


        {/* 4. USE CASE GRID */}
        <section className="py-24 px-4 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                
                <div className="md:w-1/2">
                    <span className="text-violet-500 font-mono text-xs uppercase tracking-widest mb-2 block">Applications</span>
                    <h2 className="text-4xl font-bold text-white mb-6">Who needs this?</h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 bg-zinc-800 p-2 rounded text-white"><Library size={16}/></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Medics & First Responders</h4>
                                <p className="text-zinc-500 text-xs mt-1">Download "Emergency Medicine" or "Toxicology" packs. Access life-saving dosage info without cell towers.</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 bg-zinc-800 p-2 rounded text-white"><HardDrive size={16}/></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Engineers & Coders</h4>
                                <p className="text-zinc-500 text-xs mt-1">Ingest documentation (Python docs, Linux man pages). Debug your code on a flight or in a bunker.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="mt-1 bg-zinc-800 p-2 rounded text-white"><Network size={16}/></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Journalists & Activists</h4>
                                <p className="text-zinc-500 text-xs mt-1">Archive news events and history before they are scrubbed or censored. Keep the truth local.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                     {/* Abstract Graphic: Data Compression */}
                     <div className="relative aspect-square rounded-full border border-zinc-800 flex items-center justify-center">
                        <div className="absolute inset-0 bg-violet-500/5 animate-pulse rounded-full" />
                        
                        {/* Orbiting particles */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute w-full h-full"
                        >
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-violet-500 rounded-full blur-[2px]" />
                        </motion.div>

                        <div className="text-center z-10">
                            <div className="text-6xl font-black text-white tracking-tighter">10k</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Pages / Pack</div>
                        </div>
                     </div>
                </div>

            </div>
        </section>


        {/* 5. FOOTER */}
        <section className="py-20 text-center border-t border-zinc-900 bg-black">
            <h2 className="text-2xl text-white font-bold mb-8">
                Build your ark.
            </h2>
            <div className="flex justify-center">
                <Link 
                    href="/download"
                    className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-bold text-sm tracking-widest uppercase transition-colors flex items-center gap-3"
                >
                    <Download size={16} />
                    Get The Harvester
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}