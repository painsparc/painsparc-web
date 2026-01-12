"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, GitBranch, RefreshCw, 
  CheckCircle2, AlertCircle, Clock, ArrowRight, 
  Table, Users, Shuffle
} from "lucide-react";
import { useState, useEffect } from "react";

export default function TimetablePage() {
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 font-sans selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-400">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-[#F4F4F5]/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/orbit" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Orbit
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Neural Scheduler</span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* 1. HERO SECTION */}
          <section className="min-h-[70vh] flex flex-col justify-center items-center text-center relative mb-24">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative z-10"
            >
              <div className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center">
                 <div className="relative z-10 w-24 h-24 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-purple-500/20">
                    <Calendar className="text-purple-600 dark:text-purple-500 w-10 h-10" />
                 </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-none mb-8">
                Scheduling Solved. <br/>
                <span className="text-zinc-400 dark:text-zinc-600">Conflict Free.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                The constraint solver that handles 50+ variables instantly. <br/>
                Teacher load, room capacity, double periods— <span className="text-purple-600 dark:text-purple-400 font-medium">calculated in milliseconds.</span>
              </p>
            </motion.div>
          </section>

          {/* 2. THE SIMULATOR */}
          <section className="py-12">
             <TimetableSimulator />
          </section>

          {/* 3. CAPABILITIES GRID */}
          <section className="py-24 border-t border-zinc-200 dark:border-zinc-800 mt-24">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Solver Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        label: "Smart Substitution",
                        desc: "Teacher absent? The system intelligently relocates affected periods or assigns qualified substitutes instantly.",
                        icon: Shuffle
                    },
                    {
                        label: "Constraint Logic",
                        desc: "Enforces hard rules: No math after lunch, double periods for labs, and max 3 consecutive classes per teacher.",
                        icon: GitBranch
                    },
                    {
                        label: "Live Editing",
                        desc: "Drag-and-drop swapping with real-time conflict detection. It won't let you create an impossible schedule.",
                        icon: RefreshCw
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
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Organize the chaos.</h2>
            <div className="flex justify-center">
                <Link 
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-transform shadow-xl"
                >
                    Generate Schedule
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

function TimetableSimulator() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const subjects = [
        { name: "Math", color: "bg-red-500" },
        { name: "Phy", color: "bg-blue-500" },
        { name: "Chem", color: "bg-green-500" },
        { name: "Eng", color: "bg-yellow-500" },
        { name: "CS", color: "bg-purple-500" },
        { name: "Lab", color: "bg-pink-500" },
    ];

    const [grid, setGrid] = useState<any[][]>([]);
    const [status, setStatus] = useState("Idle");
    const [conflicts, setConflicts] = useState<number>(0);

    // Initial Empty State
    useEffect(() => {
        setGrid(Array(5).fill(Array(5).fill(null)));
    }, []);

    const generateSchedule = () => {
        setStatus("Solving...");
        setConflicts(12);
        
        let iteration = 0;
        const interval = setInterval(() => {
            // Randomize grid to simulate "thinking"
            const newGrid = days.map(() => 
                Array(5).fill(null).map(() => subjects[Math.floor(Math.random() * subjects.length)])
            );
            setGrid(newGrid);
            
            // Decrease fake conflicts
            setConflicts(prev => Math.max(0, prev - 2));
            iteration++;

            if (iteration > 8) {
                clearInterval(interval);
                finalizeGrid();
            }
        }, 150);
    };

    const finalizeGrid = () => {
        // A fixed "perfect" schedule
        const perfectGrid = [
            [subjects[0], subjects[1], subjects[2], subjects[3], subjects[4]], // Mon
            [subjects[1], subjects[0], subjects[4], subjects[2], subjects[3]], // Tue
            [subjects[5], subjects[5], subjects[0], subjects[1], subjects[2]], // Wed (Double Lab)
            [subjects[2], subjects[3], subjects[1], subjects[4], subjects[0]], // Thu
            [subjects[4], subjects[2], subjects[3], subjects[0], subjects[1]], // Fri
        ];
        setGrid(perfectGrid);
        setStatus("Optimized");
        setConflicts(0);
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* LEFT: CONTROLS */}
            <div className="w-full md:w-1/3 bg-zinc-50 dark:bg-zinc-950 p-8 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-center">
                
                <div className="space-y-6">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Engine Status</div>
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${status === 'Solving...' ? 'bg-yellow-500 animate-bounce' : status === 'Optimized' ? 'bg-green-500' : 'bg-zinc-400'}`} />
                            <span className="text-2xl font-bold text-zinc-900 dark:text-white">{status}</span>
                        </div>
                    </div>

                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Conflicts Detected</div>
                        <div className="text-4xl font-mono font-bold text-zinc-900 dark:text-white">
                            {conflicts}
                        </div>
                    </div>

                    <button 
                        onClick={generateSchedule}
                        disabled={status === 'Solving...'}
                        className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {status === 'Solving...' ? <RefreshCw className="animate-spin" /> : <Shuffle />}
                        {status === 'Idle' ? 'Run Solver' : 'Re-Generate'}
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span>Teacher Availability Verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <span>Room Capacity Checked</span>
                    </div>
                </div>
            </div>

            {/* RIGHT: GRID DISPLAY */}
            <div className="flex-1 p-8 bg-zinc-100/50 dark:bg-zinc-900/50 overflow-x-auto">
                <div className="min-w-[400px]">
                    {/* Header */}
                    <div className="grid grid-cols-6 gap-2 mb-2">
                        <div className="text-xs font-bold uppercase text-zinc-400">Day</div>
                        {[1, 2, 3, 4, 5].map(p => (
                            <div key={p} className="text-xs font-bold uppercase text-zinc-400 text-center">P{p}</div>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="space-y-2">
                        {days.map((day, dIndex) => (
                            <div key={day} className="grid grid-cols-6 gap-2 h-12">
                                {/* Day Label */}
                                <div className="flex items-center text-sm font-bold text-zinc-500">
                                    {day}
                                </div>
                                
                                {/* Periods */}
                                {grid[dIndex]?.map((subject, pIndex) => (
                                    <motion.div
                                        key={`${dIndex}-${pIndex}`}
                                        layout
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className={`
                                            rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm
                                            ${subject ? subject.color : 'bg-zinc-200 dark:bg-zinc-800'}
                                        `}
                                    >
                                        {subject ? subject.name : ""}
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}