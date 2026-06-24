"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Circle, Download } from "lucide-react";

export default function HPDIPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 px-4 md:px-8 pb-32">
      <div className="max-w-3xl mx-auto">
        
        {/* 1. Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="block font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
            Theory v1.0
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            Hyper-Perception Data Injection (HPDI)
          </h1>
          <p className="text-2xl text-zinc-400 font-medium mb-10">
            Reducing interference. <br /> Facilitating realization.
          </p>
          
          <a 
            href="/research/hpdi-v1.0.pdf" 
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Download Full PDF <Download size={16} />
          </a>
        </motion.div>

        {/* 2. Core Insight */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-24 py-16 border-t border-b border-zinc-900"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">Core Insight</h3>
          <blockquote className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-zinc-200">
            "Information can be transferred. <br/> <span className="text-zinc-600">Knowing cannot.</span>"
          </blockquote>
          <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            HPDI explores how experiential seeds may reduce interpretational interference and facilitate internally generated understanding.
          </p>
        </motion.div>

        {/* 3. Framework Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-12">Framework Comparison</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Traditional Column */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-8">Traditional Model</span>
              <DiagramNode text="Reality" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Experience" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Encoding" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Language" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Noise" className="bg-red-950/30 text-red-400 border-red-900/50" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Interpretation" />
              <ArrowDown size={16} className="text-zinc-700 my-2" />
              <DiagramNode text="Understanding" />
            </div>

            {/* HPDI Column */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-10 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-white mb-8">HPDI Framework</span>
              
              <DiagramNode text="Experiential Seed" className="bg-white text-black border-white" />
              <ArrowDown size={16} className="text-zinc-500 my-4" />
              <DiagramNode text="Reduced Interference" />
              <ArrowDown size={16} className="text-zinc-500 my-4" />
              <DiagramNode text="Internal Realization" className="bg-emerald-950/30 text-emerald-400 border-emerald-900/50" />
            </div>
          </div>
        </motion.div>

        {/* 4. Roadmap */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-8">Research Roadmap</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-zinc-200">
              <CheckCircle2 size={20} className="text-white" /> Theory v1.0
            </li>
            <li className="flex items-center gap-4 text-zinc-600">
              <Circle size={20} /> Experimental Design
            </li>
            <li className="flex items-center gap-4 text-zinc-600">
              <Circle size={20} /> Prototype Systems
            </li>
            <li className="flex items-center gap-4 text-zinc-600">
              <Circle size={20} /> Validation Framework
            </li>
            <li className="flex items-center gap-4 text-zinc-600">
              <Circle size={20} /> Independent Evaluation
            </li>
          </ul>
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
            <span className="text-zinc-300">HPDI-2026-001</span>
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
            <span className="text-zinc-300">Painsparc Research</span>
          </div>
          <div className="col-span-2 md:col-span-4 mt-4 bg-zinc-900 p-4 rounded-lg break-all">
            <span className="block text-zinc-600 mb-2">SHA-256 Checksum</span>
            <span className="text-zinc-400">
              {/* Replace this string with the actual hash of your PDF once generated */}
              2F5A9B8C7D6E5F4A3B2C1D0E9F8A7B6C5D4E3F2A1B0C9D8E7F6A5B4C3D2E1F0
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// Minimal Component for the Flow Diagram
function DiagramNode({ text, className = "" }: { text: string, className?: string }) {
  return (
    <div className={`px-4 py-2 border border-zinc-800 rounded-lg text-sm font-medium text-zinc-300 ${className}`}>
      {text}
    </div>
  );
}