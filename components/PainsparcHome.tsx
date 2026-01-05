"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, ChevronDown, Terminal, Cpu, Globe, 
  Database, Layers, Code, Smartphone, Wrench, Container, Server 
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
    visible: (i: number) => ({
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
      className="relative bg-white dark:bg-black font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black overflow-x-hidden"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] md:h-[90vh] flex flex-col px-4 md:px-8">
        
        {/* Header */}
        <header className="flex justify-between items-center py-6 relative z-30">
          <div className="text-3xl text-zinc-900 dark:text-white font-header pt-2 select-none">
            Painsparc's
          </div>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            Get in touch
          </Link>
        </header>

        {/* --- HERO CONTENT WRAPPER --- */}
        <div className="flex-1 flex flex-col md:block relative">
            
            {/* Center Text */}
            <div className="relative z-10 pt-20 pb-10 md:py-0 md:absolute md:top-0 md:left-0 md:h-full flex flex-col justify-center max-w-6xl pointer-events-none">
                <motion.div style={{ y: textY, opacity }} className="pointer-events-auto text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter leading-[1.1] mb-8">
                    Certainly, we have it <br/>
                    <span className="text-zinc-400">That what you need.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                    The things are built the way they're supposed to be, durable, scalable and perhaps, gorgeous.
                    </p>
                </motion.div>
            </div>

            {/* --- THE TREE CONTAINER --- */}
            <div className="relative w-full h-[50vh] md:absolute md:top-0 md:right-0 md:h-full md:w-[50%] z-0 opacity-100 flex items-end justify-center pb-0">
                 <Tree />
            </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex absolute bottom-10 left-4 md:left-8 items-center gap-4 z-20"
        >
          <div className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
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
      <div className="relative z-10 bg-white dark:bg-black pb-20 px-4 md:px-8">
        
        {/* Animated Line Separator */}
        <motion.div 
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-800 mb-20" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* TILE 1: ORBIT (White Card) */}
          <motion.div
            custom={0} 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/orbit" className="group relative w-full h-[400px] block overflow-hidden rounded-[2rem]">
              <div className="w-full h-full bg-[#F4F4F5] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-200/50 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 right-8 z-30 bg-black dark:bg-white p-3 rounded-full opacity-100 md:opacity-0 -translate-x-0 -translate-y-0 md:-translate-x-2 md:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="text-white dark:text-black" />
                </div>

                <div className="absolute top-6 right-6 md:right-12 z-20 w-20 h-20 md:w-[120px] md:h-[120px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-700 bg-white">
                    <Image 
                        src="/logos/orbit.png" 
                        alt="Orbit Logo" 
                        fill 
                        className="object-cover"
                    />
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 flex flex-col items-start z-10 pointer-events-none">
                  <span className="block font-sans text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
                    System 01
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white tracking-tighter">
                    Orbit
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 max-w-[200px] md:max-w-xs font-medium leading-relaxed">
                    Welcome to the next generation of education management.
                  </p>

                  <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Automatic Unlimited Test Gen
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Multi-Tenant Architecture
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-600 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-400 rounded-full" /> Rapid Attendance & UI
                    </li>
                  </ul>
                </div>

                <div className="absolute -bottom-10 -left-4 text-[12rem] font-bold text-black/5 dark:text-white/5 leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-700">
                  01
                </div>
              </div>
            </Link>
          </motion.div>

          {/* TILE 2: PEAK (Black Card) */}
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link href="/peak" className="group relative w-full h-[400px] block overflow-hidden rounded-[2rem]">
              <div className="w-full h-full bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 transition-colors duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 dark:to-zinc-200 opacity-0 group-hover:opacity-10 dark:opacity-0 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 right-8 z-30 bg-white dark:bg-black p-3 rounded-full opacity-100 md:opacity-0 -translate-x-0 -translate-y-0 md:-translate-x-2 md:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="text-black dark:text-white" />
                </div>

                <div className="absolute top-6 right-6 md:right-12 z-20 w-20 h-20 md:w-[120px] md:h-[120px] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-zinc-700 dark:border-zinc-300 bg-black dark:bg-white">
                    <Image 
                        src="/logos/peak.png" 
                        alt="Peak Logo" 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 flex flex-col items-start z-10 pointer-events-none">
                    <span className="block font-sans text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400 mb-2">
                      System 02
                    </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black tracking-tighter">
                    Peak
                  </h2>
                  <p className="text-zinc-400 dark:text-zinc-600 text-sm mt-2 max-w-[200px] md:max-w-xs font-medium leading-relaxed">
                    Ascend to your highest potential. <br/> A CRM designed for speed.
                  </p>

                   <ul className="mt-8 md:mt-10 space-y-3 md:space-y-4">
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> Dual-Engine Performance
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> Automated Client Retention
                    </li>
                    <li className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-zinc-600 rounded-full" /> High-Velocity Lead Pipeline
                    </li>
                  </ul>
                </div>

                <div className="absolute -bottom-10 -left-4 text-[12rem] font-bold text-white/10 dark:text-black/5 leading-none select-none pointer-events-none group-hover:scale-105 transition-transform duration-700">
                  02
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 3. ARSENAL (Faint Tiles) */}
      <section className="relative z-10 bg-white dark:bg-black px-4 md:px-8 pb-32">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start justify-between border-t border-zinc-100 dark:border-zinc-800 pt-12">
            <div className="mb-10 md:mb-0 md:w-1/3">
              <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">The Arsenal</span>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Technical <br/> Foundation</h3>
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
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors duration-300 cursor-default group"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <item.icon size={20} className="text-zinc-400 group-hover:text-zinc-900 dark:text-zinc-500 dark:group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                        <span className="block text-sm font-bold text-zinc-700 group-hover:text-black dark:text-zinc-300 dark:group-hover:text-white transition-colors duration-300">
                            {item.name}
                        </span>
                        <span className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider mt-1">
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
      <section className="relative z-10 bg-white dark:bg-black px-4 md:px-8 pb-32">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="max-w-6xl mx-auto border-t border-zinc-100 dark:border-zinc-800 pt-12"
        >
          {/* Title Row */}
          <div className="mb-12">
            <span className="block font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">About Us</span>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">The Architects</h3>
          </div>

          {/* Flexible People Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Person 01: You */}
            <div className="flex flex-col items-start">
              {/* Photo Below Title */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm mb-6 bg-zinc-50 dark:bg-zinc-900">
                <Image 
                  src="/my-photo.png" 
                  alt="Painsparc Founder" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Identity Details */}
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tighter">
                  Pushkar Wagh
                </h4>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pb-4">
                  Founder & Systems Architect
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[280px]">
                  
                </p>
              </div>
            </div>

            {/* Person 02: (Placeholder for next employee) */}
            <div className="flex flex-col items-start opacity-40 hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm mb-6 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                 <span className="text-[10px] font-mono text-zinc-300 dark:text-zinc-700">NODE_PENDING</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-zinc-300 dark:text-zinc-700 uppercase tracking-tighter">
                  System_02
                </h4>
                <p className="text-[10px] font-mono text-zinc-200 dark:text-zinc-800 uppercase tracking-widest pb-4">
                  Upcoming Integration
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 5. FOOTER */}
      <footer className="relative z-10 bg-zinc-50 dark:bg-zinc-900 pt-20 pb-40 px-4 md:px-8 border-t border-zinc-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
          
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-8 max-w-2xl leading-tight">
              Oh well, let us impress you. <br/>
              Ready to initiate?
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors text-lg font-medium border-b border-zinc-300 dark:border-zinc-700 pb-1"
            >
              orbit.test.personal@gmail.com <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-16 md:mt-0 text-left md:text-right">
            <p className="text-zinc-400 text-sm leading-relaxed">
              © 2026 The Painsparc Company Pvt. Ltd. <br/> 
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
