"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Wifi, WifiOff, BatteryCharging, 
  Zap, CloudOff, Plane, Database, 
  CheckCircle2, AlertTriangle, Server
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function OfflinePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isOffline, setIsOffline] = useState(false);

  // Animations
  const pulse: Variants = {
    animate: { opacity: [0.5, 1, 0.5], transition: { duration: 2, repeat: Infinity } }
  };

  const statusChange: Variants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-amber-900 selection:text-white">
      
      {/* 1. NAV */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/toss" className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            System_03 // Return
          </Link>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
             <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider">Independent Core</span>
          </div>
        </div>
      </header>

      <main>

        {/* 2. HERO: THE SIMULATOR */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 border-b border-zinc-900 relative overflow-hidden">
            
            {/* Background Map Graphic (Abstract) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-800 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-zinc-800 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-800/50 rounded-full border-dashed" />
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto">
                
                {/* INTERACTIVE TOGGLE */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 mb-12 backdrop-blur-xl">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">
                            Connection Simulator
                        </span>
                        <button 
                            onClick={() => setIsOffline(!isOffline)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all flex items-center gap-2 ${isOffline ? 'bg-red-500/10 text-red-500 border border-red-500/50' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'}`}
                        >
                            {isOffline ? <WifiOff size={14} /> : <Wifi size={14} />}
                            {isOffline ? "Disconnected" : "Connected"}
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* CLOUD AI STATUS */}
                        <div className={`p-6 rounded-2xl border transition-all duration-300 ${isOffline ? 'bg-zinc-950 border-red-900/30 opacity-50' : 'bg-zinc-800 border-zinc-700'}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <Server size={18} className={isOffline ? "text-zinc-600" : "text-zinc-400"} />
                                <span className="text-xs font-bold text-zinc-400 uppercase">Cloud AI</span>
                            </div>
                            {isOffline ? (
                                <motion.div key="cloud-offline" variants={statusChange} initial="initial" animate="animate" className="text-red-500 font-mono font-bold flex items-center gap-2">
                                    <AlertTriangle size={16} /> UNREACHABLE
                                </motion.div>
                            ) : (
                                <div className="text-emerald-500 font-mono font-bold flex items-center gap-2">
                                    <CheckCircle2 size={16} /> ONLINE
                                </div>
                            )}
                        </div>

                        {/* TOSS STATUS */}
                        <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-amber-500/5 animate-pulse" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Database size={18} className="text-amber-500" />
                                    <span className="text-xs font-bold text-amber-500 uppercase">TOSS Core</span>
                                </div>
                                <motion.div 
                                    key="toss-status"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 0.2 }}
                                    className="text-white font-mono font-bold text-xl flex items-center gap-2"
                                >
                                    <Zap size={18} className="text-amber-400 fill-amber-400" />
                                    OPERATIONAL
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                        OFF THE GRID. <br/>
                        <span className="text-zinc-600">NOT OFF LINE.</span>
                    </h1>
                    <p className="text-zinc-400 max-w-lg mx-auto leading-relaxed text-lg">
                        Intelligence shouldn't depend on signal strength. 
                        TOSS carries its own brain. It works in a tunnel, 
                        on a plane, or in a submarine.
                    </p>
                </div>

            </div>
        </section>


        {/* 3. FEATURES GRID (INDUSTRIAL THEME) */}
        <section className="py-24 px-4 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {[
                        {
                            title: "Zero Latency",
                            desc: "Light moves faster than packets. Local inference eliminates network lag, server queues, and buffering.",
                            icon: Zap,
                            color: "text-amber-500"
                        },
                        {
                            title: "Battery Saver",
                            desc: "5G radios consume more power than the NPU. By staying offline, TOSS extends your device's life.",
                            icon: BatteryCharging,
                            color: "text-amber-500"
                        },
                        {
                            title: "Bunker Ready",
                            desc: "Designed for field operations. Pre-download knowledge packs and vanish from the grid completely.",
                            icon: Plane,
                            color: "text-amber-500"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-black border border-zinc-800 hover:border-amber-900/50 transition-colors group">
                            <div className={`w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-amber-950/30 transition-colors`}>
                                <feature.icon size={24} className={`${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>


        {/* 4. TECHNICAL DEEP DIVE */}
        <section className="py-24 px-4 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <span className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2 block">Architecture</span>
                    <h2 className="text-4xl font-bold text-white mb-6">How it works.</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-1 h-full bg-zinc-800 rounded-full" />
                            <div>
                                <h4 className="text-white font-bold mb-1">1. Compressed Weights</h4>
                                <p className="text-zinc-500 text-sm">We use 4-bit quantization (Q4_K_M) to shrink massive models (like Llama 3) from 10GB down to 1.5GB without losing intelligence.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1 h-full bg-zinc-800 rounded-full" />
                            <div>
                                <h4 className="text-white font-bold mb-1">2. JSON Vector Search</h4>
                                <p className="text-zinc-500 text-sm">Instead of a cloud database, we scrape knowledge into local JSON files. The "Smol Brain" scans them instantly on your storage.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1 h-full bg-zinc-800 rounded-full" />
                            <div>
                                <h4 className="text-white font-bold mb-1">3. Hybrid Compute</h4>
                                <p className="text-zinc-500 text-sm">Reflex tasks run on CPU. Deep thinking runs on the NPU/GPU via OpenCL/Vulkan drivers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2 w-full">
                    <div className="aspect-square bg-zinc-900 rounded-full border border-zinc-800 relative flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent opacity-50" />
                        <CloudOff size={120} className="text-zinc-800" />
                        <div className="absolute inset-0 border-[40px] border-zinc-950 rounded-full" />
                        <div className="absolute text-center">
                            <div className="text-4xl font-bold text-white">0kb</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Data Usage</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* 5. FOOTER */}
        <section className="py-20 text-center border-t border-zinc-900 bg-black">
            <h2 className="text-3xl font-bold text-white mb-8">
                Sever the link.
            </h2>
            <div className="flex justify-center">
                <Link 
                    href="/download"
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black rounded-full font-bold text-sm tracking-widest uppercase transition-colors"
                >
                    Download Offline Core
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}