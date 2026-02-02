"use client";

import { motion, useScroll, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Cpu, Box, 
  Settings, Download, Layers, 
  Microchip, ArrowRight, File as FileIcon 
} from "lucide-react";
import { useRef, useState } from "react";

export default function ModelsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- BRAIN BENCH SIMULATOR STATE ---
  const [activeModel, setActiveModel] = useState("smol");

  const models = {
    smol: {
      name: "Smol Brain (T5)",
      type: "Logic Driver",
      size: "250MB",
      speed: 95,
      iq: 40,
      ram: 15,
      desc: "Instant reflex. Runs on a toaster. Perfect for background tasks and quick fact checks.",
      color: "text-emerald-400",
      borderColor: "border-emerald-500/50",
      bg: "bg-emerald-500/10"
    },
    llama: {
      name: "Llama 3.2 (1B)",
      type: "Chat Engine",
      size: "1.2GB",
      speed: 75,
      iq: 85,
      ram: 45,
      desc: "The balanced warrior. Excellent conversationalist with coding capabilities. The daily driver.",
      color: "text-cyan-400",
      borderColor: "border-cyan-500/50",
      bg: "bg-cyan-500/10"
    },
    mistral: {
      name: "Deep Thinker (Phi-3)",
      type: "Reasoning Core",
      size: "2.8GB",
      speed: 40,
      iq: 98,
      ram: 85,
      desc: "Heavy artillery. Solves complex logic puzzles and math. Slow, methodical, brilliant.",
      color: "text-purple-400",
      borderColor: "border-purple-500/50",
      bg: "bg-purple-500/10"
    }
  };

  const current = models[activeModel as keyof typeof models];

  // --- ANIMATIONS ---
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  const barAnim: Variants = {
    initial: { width: 0 },
    animate: (value: number) => ({
      width: `${value}%`,
      transition: { duration: 1, type: "spring", bounce: 0.2 }
    })
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-cyan-900 selection:text-white">
      
      {/* 1. NAV */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/toss" className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            System_03 // Return
          </Link>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
             <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider">Cortex Swapper</span>
          </div>
        </div>
      </header>

      <main>

        {/* 2. HERO: THE NEURAL GARAGE */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 border-b border-zinc-900 relative overflow-hidden">
            
            {/* Background Circuitry */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10 text-center w-full max-w-4xl mx-auto"
            >
                <div className="flex justify-center mb-8">
                    <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-cyan-900/20 relative group">
                        <div className="absolute -inset-1 bg-cyan-500/30 blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-2xl" />
                        <Cpu size={48} className="text-cyan-400 relative z-10" />
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
                    BRING YOUR <br/>
                    <span className="text-cyan-400">OWN BRAIN.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-12">
                    Don't marry your AI. <b>Swap it.</b> <br/>
                    TOSS is an open runtime for intelligence. Load Llama for chat, 
                    Phi for math, or Gemma for creative writing.
                </p>

                {/* --- INTERACTIVE BRAIN BENCH --- */}
                <div className="max-w-2xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl text-left relative overflow-hidden">
                    
                    {/* Model Selector Tabs */}
                    <div className="flex p-1 bg-black rounded-xl mb-8 border border-zinc-800">
                        {Object.keys(models).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveModel(key)}
                                className={`flex-1 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                                    activeModel === key 
                                    ? "bg-zinc-800 text-white shadow-lg" 
                                    : "text-zinc-600 hover:text-zinc-400"
                                }`}
                            >
                                {models[key as keyof typeof models].name.split(" ")[0]}
                            </button>
                        ))}
                    </div>

                    {/* Active Model Stats */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeModel}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className={`text-2xl font-bold text-white mb-1`}>{current.name}</h3>
                                    <span className={`text-xs font-mono uppercase px-2 py-1 rounded bg-black border ${current.borderColor} ${current.color}`}>
                                        {current.type}
                                    </span>
                                </div>
                                <div className="text-right">
                                     <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Weight Size</div>
                                     <div className="text-white font-mono font-bold">{current.size}</div>
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm mb-8 min-h-[40px]">
                                {current.desc}
                            </p>

                            {/* Stat Bars */}
                            <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                                
                                {/* Speed */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Inference Speed</span>
                                        <span className={current.color}>{current.speed}/100</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                        <motion.div 
                                            custom={current.speed}
                                            variants={barAnim}
                                            initial="initial"
                                            animate="animate"
                                            className="h-full bg-white" 
                                        />
                                    </div>
                                </div>

                                {/* IQ */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Reasoning Depth</span>
                                        <span className={current.color}>{current.iq}/100</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                        <motion.div 
                                            custom={current.iq}
                                            variants={barAnim}
                                            initial="initial"
                                            animate="animate"
                                            className={`h-full ${activeModel === 'mistral' ? 'bg-purple-500' : 'bg-cyan-500'}`} 
                                        />
                                    </div>
                                </div>

                                {/* RAM */}
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>Memory Load</span>
                                        <span className={current.color}>{current.ram}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                                        <motion.div 
                                            custom={current.ram}
                                            variants={barAnim}
                                            initial="initial"
                                            animate="animate"
                                            className={`h-full ${current.ram > 80 ? 'bg-red-500' : 'bg-zinc-600'}`} 
                                        />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>

            </motion.div>
        </section>


        {/* 3. FORMAT SUPPORT */}
        <section className="py-24 px-4 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Native .GGUF Support.</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        We don't reinvent the wheel. TOSS is compatible with the industry standard.
                        If it runs on Llama.cpp, it runs on your phone.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    
                    {[
                        { ext: "GGUF", desc: "Standard Quantized Format", icon: Box },
                        { ext: "ONNX", desc: "Microsoft Runtime", icon: Microchip },
                        { ext: "TFLITE", desc: "Legacy Mobile Models", icon: Layers },
                        { ext: "BIN", desc: "Raw Binary Weights", icon: FileIcon }
                    ].map((fmt, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-black border border-zinc-900 flex flex-col items-center text-center group hover:border-cyan-900/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 text-zinc-600 group-hover:text-cyan-400 transition-colors">
                                <fmt.icon size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">.{fmt.ext}</h3>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest">{fmt.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>


        {/* 4. QUANTIZATION EXPLAINER */}
        <section className="py-24 px-4 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                
                <div className="md:w-1/2">
                    <span className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 block">Optimization</span>
                    <h2 className="text-4xl font-bold text-white mb-6">Big brains. Small footprint.</h2>
                    <p className="text-zinc-400 mb-8 leading-relaxed">
                        TOSS uses <b>4-bit Quantization</b> (Q4_K_M) to compress massive neural networks into files smaller than a movie.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 bg-zinc-800 p-2 rounded text-white"><Download size={16}/></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Download Once</h4>
                                <p className="text-zinc-500 text-xs mt-1">Get the model from HuggingFace directly in the app. No PC required.</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4 items-start">
                            <div className="mt-1 bg-zinc-800 p-2 rounded text-white"><Settings size={16}/></div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Tune Parameters</h4>
                                <p className="text-zinc-500 text-xs mt-1">Adjust Temperature, Top-K, and Context Window to change the AI's personality.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 w-full">
                     {/* Visual Metaphor: Compression */}
                     <div className="relative h-64 w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-50" />
                        
                        {/* The "Big" Block */}
                        <div className="w-32 h-32 border-2 border-dashed border-zinc-700 rounded-xl absolute opacity-30 scale-150" />
                        
                        {/* The "Small" Block (Compressed) */}
                        <div className="w-32 h-32 bg-cyan-500 rounded-xl shadow-[0_0_40px_rgba(34,211,238,0.3)] flex items-center justify-center text-black font-bold text-2xl z-10">
                            Q4
                        </div>

                        <div className="absolute bottom-6 flex gap-8 text-xs font-mono text-zinc-500">
                            <span>FP16: 12GB</span>
                            <ArrowRight size={14} className="text-cyan-500" />
                            <span className="text-cyan-400">INT4: 3GB</span>
                        </div>
                     </div>
                </div>

            </div>
        </section>


        {/* 5. FOOTER */}
        <section className="py-20 text-center border-t border-zinc-900 bg-black">
            <h2 className="text-2xl text-white font-bold mb-8">
                Your hardware. Your rules.
            </h2>
            <div className="flex justify-center">
                <Link 
                    href="/download"
                    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-bold text-sm tracking-widest uppercase transition-colors flex items-center gap-3"
                >
                    <Cpu size={16} />
                    Enter The Garage
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}