"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, QrCode, Smartphone, Users, 
  Bell, CheckCircle2, ArrowRight, Zap, Clock
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function AppointmentsPage() {
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
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-500">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/peak" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Peak
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-wider">Live Queue</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 shadow-2xl shadow-emerald-900/20">
                    <QrCode className="text-emerald-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                The Queue is <br/>
                <span className="text-zinc-600">Invisible.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                No kiosks. No paper tokens. <br/>
                Just a QR code and your customer's phone.
                {/* FIXED LINE BELOW */}
                <span className="block mt-4 text-emerald-500 text-lg font-mono">Scan {'->'} Register {'->'} Notify.</span>
              </p>
            </motion.div>
          </section>

          {/* 2. THE LIVE SYNC SIMULATION */}
          <section className="py-12">
             <LiveSyncSimulator />
          </section>

          {/* 3. FEATURES GRID */}
          <section className="py-24 border-t border-zinc-900 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Hardware",
                        old: "Kiosks & TVs",
                        new: "Zero",
                        desc: "Uses the device currently in your customer's pocket.",
                        icon: Smartphone
                    },
                    {
                        label: "Latency",
                        old: "Manual",
                        new: "Real-time",
                        desc: "Instant Firestore socket sync between Staff and Visitor.",
                        icon: Zap
                    },
                    {
                        label: "Experience",
                        old: "Standing",
                        new: "Freedom",
                        desc: "Visitors can wait anywhere. The phone rings when it's time.",
                        icon: Bell
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
                            <span className="text-3xl font-bold text-white">{stat.new}</span>
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
            <h2 className="text-3xl font-bold mb-8">Modernize your lobby.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform"
                >
                    Deploy Queue System
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// --- SIMULATOR COMPONENT ---

function LiveSyncSimulator() {
    const [status, setStatus] = useState<'waiting' | 'called'>('waiting');

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(prev => prev === 'waiting' ? 'called' : 'waiting');
        }, 4000); // Toggle every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT: STAFF DASHBOARD */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs">1</div>
                    <h3 className="text-2xl font-bold">Staff Control</h3>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 w-full max-w-md mx-auto lg:mx-0">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-zinc-800">
                        <span className="text-xs font-mono text-zinc-500">QUEUE_MANAGER.exe</span>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        </div>
                    </div>
                    
                    {/* Visitor Card */}
                    <div className="bg-black p-4 rounded-lg border border-zinc-800 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-white">#4</div>
                            <div>
                                <div className="text-sm font-bold text-white">John Doe</div>
                                <div className="text-xs text-zinc-500">Waiting 5m</div>
                            </div>
                        </div>
                        
                        {/* THE BUTTON ANIMATION */}
                        <motion.button 
                            animate={{ scale: status === 'waiting' ? [1, 1.05, 1] : 1 }}
                            transition={{ duration: 0.5, delay: 3.5 }} // Bump right before switch
                            className={`px-4 py-2 rounded-md text-xs font-bold transition-colors duration-300 ${status === 'called' ? 'bg-zinc-800 text-zinc-500' : 'bg-emerald-500 text-black'}`}
                        >
                            {status === 'called' ? 'Called' : 'Call Visitor'}
                        </motion.button>
                    </div>
                </div>
                <p className="text-zinc-500 text-sm max-w-sm">
                    Staff simply hits "Call" on their dashboard. No announcements needed.
                </p>
            </div>

            {/* RIGHT: VISITOR PHONE */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-xs">2</div>
                    <h3 className="text-2xl font-bold">Visitor View</h3>
                </div>

                {/* PHONE MOCKUP */}
                <div className="relative w-[280px] h-[550px] bg-zinc-950 border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
                    
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-20" />

                    {/* App Content */}
                    <div className="flex-1 bg-black p-6 flex flex-col justify-center items-center relative">
                        
                        {/* WAITING STATE */}
                        <motion.div 
                            initial={false}
                            animate={{ 
                                opacity: status === 'waiting' ? 1 : 0,
                                scale: status === 'waiting' ? 1 : 0.8,
                                filter: status === 'waiting' ? 'blur(0px)' : 'blur(10px)'
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center"
                        >
                            <div className="w-32 h-32 rounded-full border-4 border-zinc-800 flex items-center justify-center mb-8">
                                <span className="text-6xl font-bold text-white">#4</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">You are in queue</h4>
                            <p className="text-sm text-zinc-500">Please wait. We'll notify you when it's your turn.</p>
                        </motion.div>

                        {/* CALLED STATE (GREEN) */}
                        <motion.div 
                            initial={false}
                            animate={{ 
                                opacity: status === 'called' ? 1 : 0,
                                scale: status === 'called' ? 1 : 1.2,
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-black"
                        >
                            {/* Pulse Effect */}
                            <div className="relative">
                                <motion.div 
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-emerald-500 rounded-full blur-xl"
                                />
                                <div className="relative w-32 h-32 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center mb-8">
                                    <Bell className="text-emerald-500 w-12 h-12" />
                                </div>
                            </div>
                            
                            <h4 className="text-2xl font-bold text-emerald-500 mb-2">Please Come In!</h4>
                            <p className="text-sm text-zinc-400">Staff is ready for you.</p>
                        </motion.div>

                    </div>

                    {/* Dynamic Bar */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                </div>
                
                <p className="text-zinc-500 text-sm max-w-xs text-center lg:text-left">
                    The visitor's phone rings and vibrates instantly when called.
                </p>
            </div>

        </div>
    )
}