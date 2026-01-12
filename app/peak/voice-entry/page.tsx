"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Mic, Zap, CheckCircle2, 
  BrainCircuit, Waveform, ArrowRight, Keyboard
} from "lucide-react";
import { useRef } from "react";

export default function VoiceEntryPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animations
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  const pulseRing: Variants = {
    initial: { scale: 1, opacity: 0.2 },
    animate: { 
      scale: 2, 
      opacity: 0, 
      transition: { duration: 2, repeat: Infinity, ease: "easeOut" } 
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-500">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/peak" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Peak
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Neural Engine</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 {/* Pulsing Rings */}
                 <motion.div variants={pulseRing} initial="initial" animate="animate" className="absolute inset-0 bg-emerald-500 rounded-full" />
                 <motion.div variants={pulseRing} initial="initial" animate="animate" transition={{delay: 0.5}} className="absolute inset-0 bg-emerald-500 rounded-full" />
                 
                 <div className="relative z-10 w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 shadow-2xl shadow-emerald-900/20">
                    <Mic className="text-emerald-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                Don't Type. <br/>
                <span className="text-zinc-500">Just Speak.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Data entry is the bottleneck of sales. We removed it. <br/>
                Our Neural Engine parses natural language into structured customer profiles instantly.
              </p>
            </motion.div>
          </section>

          {/* 2. LIVE DEMO SIMULATION */}
          <section className="py-24">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Input (Voice) */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Listening...</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                            "Add a new lead, <span className="text-emerald-400">Sarah Jenkins</span> from <span className="text-emerald-400">TechCorp</span>. Phone number is <span className="text-emerald-400">98765 43210</span>. She's interested in the <span className="text-emerald-400">Enterprise Plan</span>."
                        </p>
                    </div>

                    {/* Right: Output (Structured Data) */}
                    <div className="bg-black rounded-xl border border-zinc-800 p-6 font-mono text-sm relative">
                        <div className="absolute top-4 right-4 text-zinc-600">
                            <BrainCircuit size={20} />
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <span className="text-zinc-500 w-24">Name:</span>
                                <span className="text-white">Sarah Jenkins</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-500 w-24">Company:</span>
                                <span className="text-white">TechCorp</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-500 w-24">Phone:</span>
                                <span className="text-emerald-500">9876543210</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-500 w-24">Interest:</span>
                                <span className="text-purple-400">Enterprise Plan</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-zinc-500 w-24">Status:</span>
                                <span className="text-yellow-500">Active Lead</span>
                            </div>
                        </div>
                        
                        {/* Success Badge */}
                        <div className="mt-6 flex items-center gap-2 text-emerald-500 text-xs uppercase tracking-widest">
                            <CheckCircle2 size={14} /> Parsed in 0.4s
                        </div>
                    </div>

                </div>
            </motion.div>
          </section>

          {/* 3. COMPARISON METRICS */}
          <section className="py-24 border-t border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {[
                    {
                        label: "Speed",
                        old: "2m 30s",
                        new: "15s",
                        desc: "Average time to log a new client",
                        icon: Zap
                    },
                    {
                        label: "Accuracy",
                        old: "85%",
                        new: "99.8%",
                        desc: "Field data extraction precision",
                        icon: CheckCircle2
                    },
                    {
                        label: "Interaction",
                        old: "35 Taps",
                        new: "1 Tap",
                        desc: "Physical interaction required",
                        icon: Keyboard
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
                        
                        <div className="flex items-baseline gap-4 mb-4">
                            <span className="text-4xl font-bold text-white">{stat.new}</span>
                            <span className="text-lg text-zinc-600 line-through decoration-red-500/50">{stat.old}</span>
                        </div>
                        
                        <p className="text-zinc-400 text-sm">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}

            </div>
          </section>

          {/* 4. CTA */}
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Stop clicking. Start closing.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                >
                    Get Voice Entry
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}