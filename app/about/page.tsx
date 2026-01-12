"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Zap, Shield, MousePointer2, ChevronDown } from "lucide-react";

export default function AboutPage() {
  // REMOVED: useScroll, useTransform, and useRef (Heavy scroll event listeners)
  
  // Standard Fade Up (Kept because it runs only once)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] as const, 
      },
    }),
  };

  const lineReveal: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen relative bg-white dark:bg-black font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black overflow-hidden">
      
      {/* --- OPTIMIZED STATIC BACKGROUND ORBS --- */}
      {/* These look the same but are static (0% CPU usage) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-zinc-100 dark:bg-zinc-900/40 rounded-full blur-[100px] opacity-60" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-zinc-50 dark:bg-zinc-900/20 rounded-full blur-[80px] opacity-40" />
      </div>

      {/* 1. HEADER */}
      {/* Replaced backdrop-blur with solid transparent bg for performance */}
      <header className="relative z-20 flex justify-between items-center py-6 px-4 md:px-8 border-b border-zinc-100 dark:border-zinc-900/50 bg-white/90 dark:bg-black/90">
        <Link href="/" className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
        </Link>
        <div className="text-3xl font-header text-zinc-900 dark:text-white pt-2 select-none">
            Painsparc.
        </div>
      </header>

      {/* 2. HERO: THE MANIFESTO */}
      <section className="relative z-10 pt-32 pb-10 min-h-[85vh] flex flex-col justify-between px-4 md:px-8 max-w-5xl mx-auto">
        
        <div>
            {/* Removed heavy parallax transform styles */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0}
            >
                <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-none mb-10">
                    Complexity is <br/>
                    <span className="text-zinc-400 dark:text-zinc-600">the enemy.</span>
                </h1>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={1}
                className="flex flex-col md:flex-row gap-12 md:gap-24 items-start relative"
            >
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                    We believe software shouldn't just be a tool; it should be an absence of resistance. 
                    Most systems add layers of management. Ours remove them.
                    <br/><br/>
                    At Painsparc, we don't just write code. We deconstruct workflows, 
                    identify friction, and engineer silent, high-velocity systems that 
                    allow your business to operate at the speed of thought.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-8">
                    <div className="group cursor-default">
                        <span className="block text-4xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                            100%
                        </span>
                        <span className="text-xs font-mono uppercase text-zinc-400 tracking-widest group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                            Automation Focus
                        </span>
                    </div>
                    <div className="group cursor-default">
                        <span className="block text-4xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                            0s
                        </span>
                        <span className="text-xs font-mono uppercase text-zinc-400 tracking-widest group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                            Lag Tolerance
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-4 py-8"
        >
          <div className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs font-mono uppercase text-zinc-400 tracking-widest">
            The Flow
          </span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={16} className="text-zinc-400" />
          </motion.div>
        </motion.div>

      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="relative z-10 py-24 px-4 md:px-8 bg-zinc-50/50 dark:bg-zinc-900/30 border-y border-zinc-100 dark:border-zinc-900/50">
        <div className="max-w-6xl mx-auto">
            
            <motion.div 
                variants={lineReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }} 
                className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-800 mb-16" 
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    {
                        icon: Zap,
                        title: "Velocity First",
                        desc: "Speed isn't a feature; it's the foundation. Every interaction is measured in milliseconds. If it feels like waiting, it's broken."
                    },
                    {
                        icon: Shield,
                        title: "Bulletproof Logic",
                        desc: "We build systems that don't break under pressure. Our backend architectures are designed to handle chaos without flinching."
                    },
                    {
                        icon: MousePointer2,
                        title: "Intuitive Design",
                        desc: "No manuals. No training sessions. We design interfaces so obvious that using them feels like remembering something you already knew."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }} 
                        className="group"
                    >
                        {/* Static Icon Container (Removed infinite float) */}
                        <div className="w-12 h-12 bg-white dark:bg-black rounded-2xl flex items-center justify-center mb-6 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-md group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-all duration-300">
                            <item.icon size={20} className="text-zinc-900 dark:text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                            {item.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. THE PROCESS */}
      <section className="relative z-10 py-32 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-16 tracking-tighter"
        >
            How we erase the work.
        </motion.h2>

        <div className="space-y-6">
            {[
                "We audit your manual processes to find the 'Time Thieves'.",
                "We architect a custom digital ecosystem (Web + Mobile).",
                "We deploy rigorous automation scripts.",
                "You stop managing the software, and start managing the growth."
            ].map((step, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="flex items-center gap-6 p-6 border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-white/80 dark:bg-black/40 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                >
                    <div className="flex-shrink-0 text-zinc-300 dark:text-zinc-700 font-mono text-xs font-bold tracking-widest">
                        0{i + 1}
                    </div>
                    <CheckCircle2 size={24} className="text-zinc-900 dark:text-white flex-shrink-0" />
                    <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                        {step}
                    </p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* 5. CTA FOOTER */}
      <section className="relative z-10 bg-black text-white py-24 px-4 md:px-8 text-center overflow-hidden">
        {/* Footer Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-black pointer-events-none" />
        
        <div className="relative z-20 max-w-2xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
            >
                Ready to be effortless?
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 mb-10 text-lg"
            >
                The future of your workflow is waiting.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.4 }}
            >
                <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl shadow-white/10"
                >
                    Start the Transformation
                    <ArrowUpRight size={18} />
                </Link>
            </motion.div>
        </div>
      </section>

    </div>
  );
}