"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Activity, Beaker } from "lucide-react";

export default function AWAKEPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 px-4 md:px-8 pb-32">
      <div className="max-w-4xl mx-auto">
        
        {/* 1. Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
            Phase 1 Experimental Protocol
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            Project A.W.A.K.E.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium mb-10 max-w-3xl leading-relaxed">
            Activation-Assisted Wakefulness and Awareness through Knowledge of Emergent Drift.
          </p>
          
          <a 
            href="/research/awake-protocol-v1.0.pdf" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Download Protocol PDF <Download size={16} />
          </a>
        </motion.div>

        {/* 2. The Core Cognitive Cycle */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-24 py-16 border-t border-b border-zinc-900"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-12">The Fundamental Cycle</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center font-bold tracking-widest uppercase text-sm md:text-base">
            <div className="px-6 py-4 bg-zinc-900 rounded-xl text-zinc-300 w-full md:w-auto">Awareness</div>
            <ArrowRight className="hidden md:block text-zinc-700" />
            <ArrowDown className="block md:hidden text-zinc-700" />
            <div className="px-6 py-4 bg-zinc-900 rounded-xl text-zinc-500 w-full md:w-auto">Drift</div>
            <ArrowRight className="hidden md:block text-zinc-700" />
            <ArrowDown className="block md:hidden text-zinc-700" />
            <div className="px-6 py-4 bg-white text-black rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full md:w-auto">Recognition (SCRE)</div>
            <ArrowRight className="hidden md:block text-zinc-700" />
            <ArrowDown className="block md:hidden text-zinc-700" />
            <div className="px-6 py-4 bg-zinc-900 rounded-xl text-zinc-300 w-full md:w-auto">Return</div>
          </div>

          <p className="mt-12 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Project AWAKE narrowly targets the moment of recognition—the Self-Caught Recognition Event (SCRE). The objective is to determine if this internal monitoring mechanism can be trained and accelerated.
          </p>
        </motion.div>

        {/* 3. Experimental Methodology */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-12">Experimental Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Condition A */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Beaker className="text-zinc-500" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest text-zinc-300">Condition A</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Static Stillness</h4>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                The control baseline. Participants observe a minimal, static visual anchor for continuous 18-minute blocks.
              </p>
              
              <div className="mt-auto space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-zinc-800 pb-2 text-zinc-400">
                  <span>Stimulation</span> <span>None</span>
                </div>
                <div className="flex justify-between pt-2 text-zinc-400">
                  <span>Duration</span> <span>Continuous</span>
                </div>
              </div>
            </div>

            {/* Condition B */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-white" size={24} />
                <span className="text-sm font-bold uppercase tracking-widest text-white">Condition B</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Activation-to-Stillness</h4>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                The experimental protocol. A period of rapid cognitive activation (RSVP) followed by an abrupt termination into stillness.
              </p>
              
              <div className="mt-auto space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-zinc-700 pb-2 text-zinc-300">
                  <span>Activation Phase</span> <span>90s (RSVP @ 500 WPM)</span>
                </div>
                <div className="flex justify-between pt-2 text-zinc-300">
                  <span>Stillness Phase</span> <span>90s (Abrupt Transition)</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4. The Ramp vs Crutch Hypothesis */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 bg-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">The Ramp vs. Crutch Problem</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">The Ramp (Genuine Training)</h4>
              <p className="text-zinc-400 leading-relaxed">
                If Activation-to-Stillness transitions function as a training scaffold, observed improvements in SCRE frequency will persist even when the activation phase is completely removed during transfer evaluation.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-zinc-500 mb-2">The Crutch (External Prompting)</h4>
              <p className="text-zinc-600 leading-relaxed">
                If the transition acts merely as a crutch, SCRE events will cluster immediately after the transition, and performance enhancements will disappear entirely during the stillness-only transfer evaluation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 5. Authorship & Cryptographic Evidence */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-zinc-900 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono"
        >
          <div>
            <span className="block text-zinc-600 mb-2">Document ID</span>
            <span className="text-zinc-300">AWAKE-2026-001</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-2">Version</span>
            <span className="text-zinc-300">1.0</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-2">Published</span>
            <span className="text-zinc-300">24 Jun 2026</span>
          </div>
          <div>
            <span className="block text-zinc-600 mb-2">Author</span>
            <span className="text-zinc-300">Pushkar Wagh</span>
          </div>
          <div className="col-span-2 md:col-span-4 mt-4 bg-zinc-900 p-4 rounded-lg break-all">
            <span className="block text-zinc-600 mb-2">SHA-256 Checksum</span>
            <span className="text-zinc-400 font-bold">
            9ec1b14534297df62e3b743e814cd5c6a5d3c07baf0732f4cd99c134e96de2a7
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}