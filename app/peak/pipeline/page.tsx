"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, TrendingUp, Zap, AlertCircle, 
  Clock, CheckCircle2, ArrowRight, Filter, LayoutList
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function PipelinePage() {
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
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 selection:text-amber-500">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/peak" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Peak
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Velocity Engine</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow (Amber for Urgency) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shadow-2xl shadow-amber-900/20">
                    <TrendingUp className="text-amber-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                Stagnation is <br/>
                <span className="text-zinc-600">Death.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Most CRMs are just graveyards for data. <br/>
                Peak is a flow engine. It visualizes lead decay, forces movement, and sorts by <span className="text-amber-500">urgency</span>, not just date.
              </p>
            </motion.div>
          </section>

          {/* 2. THE VISUALIZER: STAGNATION TRACKING */}
          <section className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Description */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold">The Decay Protocol</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Every minute a lead sits in a stage without activity, its "health score" drops. Peak visually signals this decay, ensuring no opportunity slips through the cracks unnoticed.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                <Zap size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Fresh</h4>
                                <p className="text-xs text-zinc-500">Less than 24h inactivity. Prime state.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                <AlertCircle size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Decaying</h4>
                                <p className="text-xs text-zinc-500">24-48h inactivity. Needs attention.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Critical</h4>
                                <p className="text-xs text-zinc-500">48h+ inactivity. Forced alert.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* VISUAL SIMULATION */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-black border border-zinc-800 rounded-3xl p-6 relative overflow-hidden"
                >
                    {/* Header UI */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-xs font-mono text-zinc-600">PIPELINE_VIEW_v2.0</div>
                    </div>

                    {/* Pipeline Columns */}
                    <div className="flex gap-4 h-[400px]">
                        <PipelineColumn title="New Leads" stage="new" />
                        <PipelineColumn title="In Progress" stage="progress" />
                        <PipelineColumn title="Closing" stage="closing" />
                    </div>

                </motion.div>
            </div>
          </section>

          {/* 3. COMPARISON METRICS */}
          <section className="py-24 border-t border-zinc-900 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Cycle Time",
                        old: "14 Days",
                        new: "4 Days",
                        desc: "Average time from lead to close",
                        icon: Clock
                    },
                    {
                        label: "Lead Leakage",
                        old: "22%",
                        new: "0%",
                        desc: "Opportunities lost due to inaction",
                        icon: AlertCircle
                    },
                    {
                        label: "Sort Logic",
                        old: "Alphabetical",
                        new: "Urgency",
                        desc: "Prioritization algorithm",
                        icon: Filter
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
            <h2 className="text-3xl font-bold mb-8">Speed is the only currency.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                >
                    Accelerate Sales
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS FOR ANIMATION ---

function PipelineColumn({ title, stage }: { title: string, stage: string }) {
    return (
        <div className="flex-1 flex flex-col bg-zinc-900/30 rounded-xl p-3 border border-zinc-800/50">
            <div className="text-xs font-bold text-zinc-500 uppercase mb-4 flex justify-between">
                {title}
                <span className="bg-zinc-800 px-1.5 rounded text-white">3</span>
            </div>
            
            <div className="space-y-3 flex-1">
                {/* Simulated Lead Cards */}
                <LeadCard name="TechCorp Inc." value="₹25k" status="fresh" />
                <LeadCard name="Design Studio" value="₹12k" status="decaying" />
                <LeadCard name="Global Logistics" value="₹85k" status="critical" />
            </div>
        </div>
    )
}

function LeadCard({ name, value, status }: { name: string, value: string, status: 'fresh' | 'decaying' | 'critical' }) {
    
    // Status Colors
    let borderColor = "border-zinc-800";
    let glowColor = "shadow-none";
    let iconColor = "text-zinc-600";
    
    if (status === 'fresh') {
        borderColor = "border-emerald-500/30";
        iconColor = "text-emerald-500";
    } else if (status === 'decaying') {
        borderColor = "border-amber-500/50";
        glowColor = "shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)]";
        iconColor = "text-amber-500";
    } else if (status === 'critical') {
        borderColor = "border-red-500/60";
        glowColor = "shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]";
        iconColor = "text-red-500";
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-black p-3 rounded-lg border ${borderColor} ${glowColor} transition-all duration-1000`}
        >
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-white">{name}</span>
                {status === 'critical' && <AlertCircle size={12} className="text-red-500 animate-pulse" />}
            </div>
            <div className="flex justify-between items-end">
                <span className="text-[10px] text-zinc-500 font-mono">2d ago</span>
                <span className={`text-xs font-bold ${iconColor}`}>{value}</span>
            </div>
            
            {/* Decay Bar */}
            <div className="mt-2 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                    className={`h-full ${status === 'fresh' ? 'bg-emerald-500' : status === 'decaying' ? 'bg-amber-500' : 'bg-red-500'}`}
                    initial={{ width: "100%" }}
                    animate={{ width: status === 'critical' ? "10%" : "60%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                />
            </div>
        </motion.div>
    )
}