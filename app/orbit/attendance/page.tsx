"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Zap, Users, CheckCircle2, 
  XCircle, Clock, ArrowRight, Smartphone, RotateCcw, MousePointerClick
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AttendancePage() {
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-green-500/30 selection:text-green-600 dark:selection:text-green-400">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/orbit" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Orbit
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Rapid Fire Mode</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-green-500/20">
                    <Zap className="text-green-600 dark:text-green-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-none mb-8">
                One at a time. <br/>
                <span className="text-zinc-400 dark:text-zinc-600">Lightning Fast.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                The Rapid Fire Engine focuses on one student at a time. <br/>
                <span className="text-green-600 dark:text-green-400 font-medium">Left for Absent. Right for Present.</span> Zero distractions.
              </p>
            </motion.div>
          </section>

          {/* 2. THE SIMULATOR (Rapid Fire UI) */}
          <section className="py-12 flex flex-col items-center">
             <RapidFireSimulator />
             
             {/* ADDED INSTRUCTION LINE */}
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8 flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm font-medium bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800"
             >
                <MousePointerClick size={16} className="animate-bounce" />
                <span>Interactive Demo: Tap the buttons above to test the speed yourself.</span>
             </motion.div>
          </section>

          {/* 3. CAPABILITIES GRID */}
          <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Velocity Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Focus Mode",
                        desc: "By showing only one student, we eliminate the cognitive load of scanning a grid. This increases processing speed by 40%.",
                        icon: Users
                    },
                    {
                        label: "Batch Write",
                        desc: "Data isn't sent one by one. It's compiled into a single ultra-light JSON payload and synced instantly at the end.",
                        icon: Zap
                    },
                    {
                        label: "Parent Sync",
                        desc: "The moment you finish, automated notifications (SMS/WhatsApp) are triggered for every absent student.",
                        icon: Smartphone
                    }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6 text-zinc-500 dark:text-zinc-400">
                            <stat.icon size={18} />
                            <span className="text-xs uppercase tracking-widest">{stat.label}</span>
                        </div>
                        
                        <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
          </section>

          {/* 4. CTA */}
          <section className="py-20 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Save 15 minutes every hour.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl"
                >
                    Start Rapid Fire
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

// --- SIMULATOR COMPONENT (Matches take_attendance.dart UI) ---

function RapidFireSimulator() {
    const students = [
        { id: 1, name: "Aarav Patel", roll: 1 },
        { id: 2, name: "Aditi Sharma", roll: 2 },
        { id: 3, name: "Arjun Singh", roll: 3 },
        { id: 4, name: "Diya Gupta", roll: 4 },
        { id: 5, name: "Ishaan Kumar", roll: 5 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 left, 1 right
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState({ present: 0, absent: 0 });

    const handleSwipe = (status: 'present' | 'absent') => {
        const isPresent = status === 'present';
        setDirection(isPresent ? 1 : -1);
        
        setStats(prev => ({
            present: isPresent ? prev.present + 1 : prev.present,
            absent: !isPresent ? prev.absent + 1 : prev.absent
        }));

        setTimeout(() => {
            if (currentIndex < students.length - 1) {
                setCurrentIndex(prev => prev + 1);
                setDirection(0);
            } else {
                setFinished(true);
            }
        }, 300);
    };

    const reset = () => {
        setCurrentIndex(0);
        setFinished(false);
        setStats({ present: 0, absent: 0 });
        setDirection(0);
    };

    return (
        <div className="w-full max-w-sm mx-auto h-[600px] bg-black rounded-[3rem] border-8 border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col">
            
            {/* STATUS BAR (Notch) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl z-20" />
            
            {/* NAVBAR */}
            <div className="pt-12 pb-4 px-6 flex justify-center items-center relative z-10">
                <span className="text-white font-medium text-lg">
                    {finished ? "Summary" : `${currentIndex + 1} / ${students.length}`}
                </span>
            </div>

            {/* CONTENT AREA */}
            <div className="flex-1 relative px-6 pb-8 flex flex-col">
                
                <AnimatePresence mode="wait">
                    {!finished ? (
                        <motion.div
                            key={currentIndex}
                            initial={{ x: 300, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: direction * -300, opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="flex-1 flex flex-col"
                        >
                            <div className="flex-1 flex flex-col justify-center items-center">
                                {/* CARD UI matching take_attendance.dart */}
                                <div className="w-full bg-[#1C1C1E] rounded-3xl p-8 shadow-lg flex flex-col items-center border border-white/5">
                                    
                                    {/* Roll Number Circle */}
                                    <div className="w-24 h-24 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center mb-6">
                                        <span className="text-3xl font-bold text-white">
                                            {students[currentIndex].roll}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                                        {students[currentIndex].name}
                                    </h3>

                                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">
                                        Roll Number
                                    </span>
                                </div>
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="mt-8 flex gap-4">
                                {/* Absent Button (Deep Red) */}
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSwipe('absent')}
                                    className="flex-1 h-20 bg-[#B71C1C] rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20"
                                >
                                    <span className="text-white font-bold text-lg tracking-wider">ABSENT</span>
                                </motion.button>

                                {/* Present Button (Deep Green) */}
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSwipe('present')}
                                    className="flex-1 h-20 bg-[#1B5E20] rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/20"
                                >
                                    <span className="text-white font-bold text-lg tracking-wider">PRESENT</span>
                                </motion.button>
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex-1 flex flex-col justify-center items-center text-center space-y-8"
                        >
                            <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800">
                                <CheckCircle2 size={40} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Done!</h3>
                                <p className="text-zinc-500">Attendance submitted successfully.</p>
                            </div>
                            
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500">{stats.present}</div>
                                    <div className="text-xs uppercase tracking-wider text-zinc-600">Present</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-red-500">{stats.absent}</div>
                                    <div className="text-xs uppercase tracking-wider text-zinc-600">Absent</div>
                                </div>
                            </div>

                            <button 
                                onClick={reset}
                                className="mt-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                            >
                                <RotateCcw size={16} /> Restart Demo
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    )
}