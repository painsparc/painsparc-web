"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchIndex() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 px-4 md:px-8 pb-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            The Painsparc Company
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Research Department
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Foundational theories, experimental frameworks, and architectural studies exploring the next generation of intelligent systems.
          </p>
        </motion.div>

        {/* Research Archive List */}
        <div className="space-y-8">
          
          <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-4">
            Foundational Research
          </span>

          


          {/* AWAKE Entry */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="group relative block border border-zinc-800 rounded-2xl p-8 md:p-12 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-500 mt-6"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                  Phase 1 Protocol
                </span>
                <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-zinc-200 transition-colors">
                  Project A.W.A.K.E.
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Activation-Assisted Wakefulness and Awareness through Knowledge of Emergent Drift. An exploratory protocol investigating whether self-recognition of cognitive drift can be accelerated through structured activation-to-stillness transitions.
                </p>
                <p className="font-mono text-xs text-zinc-500">
                  Status: Pre-Registration Protocol &nbsp;|&nbsp; Published: 24 June 2026
                </p>
              </div>
              
              <div className="flex flex-col gap-4 min-w-[140px]">
                <Link 
                  href="/research/awake" 
                  className="flex items-center justify-between px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  View Protocol <ArrowRight size={14} />
                </Link>
                <a 
                  href="/research/awake-protocol-v1.0.pdf" 
                  target="_blank"
                  className="flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  PDF
                </a>
              </div>
            </div>
          </motion.div>
          
          
          {/* HPDI Entry */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative block border border-zinc-800 rounded-2xl p-8 md:p-12 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="max-w-xl">
                <span className="inline-block px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                  Theory v1.0
                </span>
                <h2 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-zinc-200 transition-colors">
                  Hyper-Perception Data Injection (HPDI)
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  A theoretical framework exploring interference reduction, experiential seeds, self-knowing, and internally generated understanding.
                </p>
                <p className="font-mono text-xs text-zinc-500">
                  Published: 24 June 2026
                </p>
              </div>
              
              <div className="flex flex-col gap-4 min-w-[140px]">
                <Link 
                  href="/research/hpdi" 
                  className="flex items-center justify-between px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  Read Paper <ArrowRight size={14} />
                </Link>
                <a 
                  href="/research/hpdi-v1.0.pdf" 
                  target="_blank"
                  className="flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  PDF
                </a>
              </div>
            </div>
          </motion.div>

          

        </div>
      </div>
    </div>
  );
}