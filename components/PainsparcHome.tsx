"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, ChevronDown, Terminal, Cpu, Globe, 
  Database, Layers, Smartphone, Wrench, Container, Server,
  ArrowRight
} from "lucide-react";
import { useRef } from "react";
import Tree from "./Tree";

export default function PainsparcHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax Text
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
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
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const stack = [
    { name: "Next.js", icon: Globe, desc: "Web Core" },
    { name: "Flutter", icon: Cpu, desc: "Cross-Platform" },
    { name: "Kotlin", icon: Smartphone, desc: "Native Android" },
    { name: "Gradle", icon: Wrench, desc: "Build Systems" },
    { name: "Supabase", icon: Server, desc: "SQL Backend" },
    { name: "Firebase", icon: Database, desc: "NoSQL Backend" },
    { name: "Python", icon: Terminal, desc: "Logic & AI" },
    { name: "Docker", icon: Container, desc: "Containerization" },
    { name: "Tailwind", icon: Layers, desc: "System Design" },
  ];

  return (
    <div 
      ref={ref}
      className="relative bg-black font-sans selection:bg-white selection:text-black overflow-x-hidden"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:h-[90vh] flex flex-col px-4 md:px-8">
        
        {/* Header */}
        <header className="flex justify-between items-center py-6 relative z-30">
          <div className="text-3xl text-white font-header pt-2 select-none">
            Painsparc's
          </div>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-zinc-500 hover:text-white transition-colors"
          >
            Get in touch
          </Link>
        </header>

        {/* --- HERO CONTENT WRAPPER --- */}
        <div className="flex-1 flex flex-col md:block relative">
            
            {/* Center Text */}
            <div className="relative z-10 pt-20 pb-10 md:py-0 md:absolute md:top-0 md:left-0 md:h-full flex flex-col justify-center max-w-6xl pointer-events-none">
                <motion.div style={{ y: textY, opacity }} className="pointer-events-auto text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-zinc-100 tracking-tighter leading-[1.1] mb-8">
                    Certainly, we have it <br/>
                    <span className="text-zinc-500">That what you need.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed mb-8 md:mb-0">
                    The things are built the way they're supposed to be, durable, scalable and perhaps, gorgeous.
                    </p>

                    {/* MOBILE SCROLL INDICATOR (Relative, below text) */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="flex md:hidden items-center gap-4 z-20 mt-8"
                    >
                      <div className="h-[1px] w-12 bg-zinc-700" />
                      <span className="text-xs font-mono uppercase text-zinc-400 tracking-widest">
                        Scroll to explore
                      </span>
                      <motion.div 
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <ChevronDown size={16} className="text-zinc-400" />
                      </motion.div>
                    </motion.div>

                </motion.div>
            </div>

            {/* --- THE TREE CONTAINER --- */}
            <div className="relative w-full h-[50vh] md:absolute md:top-0 md:right-0 md:h-full md:w-[50%] z-0 opacity-100 flex items-end justify-center pb-0">
                 <Tree />
            </div>

        </div>

        {/* DESKTOP SCROLL INDICATOR (Absolute, bottom left) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex absolute bottom-10 left-4 md:left-8 items-center gap-4 z-20"
        >
          <div className="h-[1px] w-12 bg-zinc-700" />
          <span className="text-xs font-mono uppercase text-zinc-400 tracking-widest">
            Scroll to explore systems
          </span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={16} className="text-zinc-400" />
          </motion.div>
        </motion.div>

      </section>

      {/* 2. WORK SECTION */}
      <div className="relative z-10 bg-black pb-12 px-4 md:px-8 pt-20">
        
        {/* Animated Line Separator */}
        <motion.div 
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-[1px] bg-zinc-800 mb-20" 
        />
        
        {/* ADDED HEADING: Centered & Premium Spacing */}
        <div className="max-w-6xl mx-auto mb-24 text-center">
            <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
                Workflow Systems we Built
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* TILE 1: ORBIT */}
          <motion.div
            custom={0} 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/orbit" className="group relative w-full h-[400px] block overflow-hidden rounded-[2rem]">
              <div className="w-full h-full bg-zinc-900 border border-zinc-800 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 right-8 z-30 bg-white p-3 rounded-full opacity-100 md:opacity-0 -translate-x-0 -translate-y-0 md:-translate-x-2 md:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="text-black" />
                </div>

                <div className="absolute top-6 right-6 md:right-12 z-20 w-20 h-20 md:w-[120px] md:h-[120px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-zinc-700 bg-white">
                    <Image 
                        src="/logos/orbit.png" 
                        alt="Orbit Logo" 
                        fill 
                        className="object-cover"
                    />
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 flex flex-col items-start z-10 pointer-events-none">
                  <span className="block font-sans text-xs font-bold tracking-widest uppercase text-zinc-500 mb-2">
                    System 01
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                    Orbit
                  </h2>
                  <p className="text-zinc-400 text-sm mt-2 max-w-[200px] md:max-w-xs font-medium leading-relaxed">
                    Welcome to the next generation of education management.
                  </p>

                  <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Automatic Unlimited Test Gen
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Multi-Tenant Architecture
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Rapid Attendance & UI
                    </li>
                  </ul>
                </div>

                <div className="absolute -bottom-10 -left-4 text-[12rem] font-bold text-white/5 leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-700">
                  01
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TILE 2: PEAK */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/peak" className="group relative w-full h-[400px] block overflow-hidden rounded-[2rem]">
              <div className="w-full h-full bg-zinc-100 border border-zinc-200 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-200 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 right-8 z-30 bg-black p-3 rounded-full opacity-100 md:opacity-0 -translate-x-0 -translate-y-0 md:-translate-x-2 md:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="text-white" />
                </div>

                <div className="absolute top-6 right-6 md:right-12 z-20 w-20 h-20 md:w-[120px] md:h-[120px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-zinc-300 bg-white">
                    <Image 
                        src="/logos/peak.png" 
                        alt="Peak Logo" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 flex flex-col items-start z-10 pointer-events-none">
                    <span className="block font-sans text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">
                      System 02
                    </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter">
                    Peak
                  </h2>
                  <p className="text-zinc-600 text-sm mt-2 max-w-[200px] md:max-w-xs font-medium leading-relaxed">
                    Ascend to your highest potential. <br/> A CRM designed for speed.
                  </p>

                   <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> Dual-Engine Performance
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> Automated Client Retention
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> High-Velocity Lead Pipeline
                    </li>
                  </ul>
                </div>

                <div className="absolute -bottom-10 -left-4 text-[12rem] font-bold text-black/5 leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-700">
                  02
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* --- TESTIMONIALS BUTTON SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <Link 
            href="/testimonials" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl border border-zinc-200"
          >
            View Testimonials
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* --- NEW SECTION: PHILOSOPHY / WHAT WE DO --- */}
      <section className="relative z-10 bg-black py-24 md:py-32 px-4 md:px-8 border-b border-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={0}
            >
                <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">
                    Our Approach
                </span>
            </motion.div>

            <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={1}
                className="flex flex-col gap-2 font-bold tracking-tighter mb-8 leading-tight"
            >
                <span className="text-4xl md:text-6xl text-zinc-100">
                   That what we do
                </span>
                <span className="text-4xl md:text-6xl text-zinc-500">
                   makes you do less.
                </span>
            </motion.h2>

            <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={2}
                className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto"
            >
                We architect intelligent software systems designed to absorb complexity. 
                By automating the mundane and streamlining critical operations, 
                our solutions act as a silent engine for your business—allowing you 
                to step back from the noise and focus entirely on growth and strategy.
            </motion.p>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                custom={3}
            >
                <Link 
                    href="/about" 
                    className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-zinc-700 hover:border-white text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-zinc-900"
                >
                    Know More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

        </div>
      </section>

      {/* 3. ARSENAL (Faint Tiles) */}
      <section className="relative z-10 bg-black px-4 md:px-8 pb-32 pt-12">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start justify-between border-t border-zinc-800 pt-12">
            <div className="mb-10 md:mb-0 md:w-1/3">
              <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">The Arsenal</span>
              <h3 className="text-3xl font-bold text-white tracking-tight">Technical <br/> Foundation</h3>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stack.map((item, i) => (
                <motion.div 
                    key={i} 
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 cursor-default group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <item.icon size={20} className="text-zinc-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                        <span className="block text-sm font-bold text-zinc-300 group-hover:text-white transition-colors duration-300">
                            {item.name}
                        </span>
                        <span className="block text-[10px] font-mono text-zinc-600 uppercase tracking-wider mt-1">
                            {item.desc}
                        </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. ABOUT US SECTION - Vertical Left Hierarchy */}
      <section className="relative z-10 bg-black px-4 md:px-8 pb-32">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="max-w-6xl mx-auto border-t border-zinc-800 pt-12"
        >
          {/* Title Row */}
          <div className="mb-12">
            <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">About Us</span>
            <h3 className="text-3xl font-bold text-white tracking-tight">The Architects</h3>
          </div>

          {/* Flexible People Grid - NOW CLEANER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Person 01: You */}
            <div className="flex flex-col items-start">
              {/* Photo Below Title */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-zinc-800 shadow-sm mb-6 bg-zinc-900">
                <Image 
                  src="/my-photo.png" 
                  alt="Painsparc Founder" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Identity Details */}
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-white tracking-tighter">
                  Pushkar Wagh
                </h4>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pb-4">
                  Founder & Systems Architect
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[280px]">
                  {/* Bio can go here if needed later */}
                </p>
              </div>
            </div>

            {/* Removed System_02 as requested */}

          </div>
        </motion.div>
      </section>

      {/* 5. FOOTER */}
      <footer className="relative z-10 bg-zinc-900 pt-20 pb-40 px-4 md:px-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
          
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 max-w-2xl leading-tight">
              Oh well, let us impress you. <br/>
              Ready to initiate?
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-lg font-medium border-b border-zinc-700 pb-1"
            >
              orbit.test.personal@gmail.com <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-16 md:mt-0 text-left md:text-right">
            <p className="text-zinc-400 text-sm leading-relaxed">
              © 2026 The Painsparc Company Pvt. Ltd. 
              All Rights Reserved. <br/> 
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}