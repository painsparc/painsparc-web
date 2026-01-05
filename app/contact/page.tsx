"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Mail, Instagram, Twitter, 
  ArrowUpRight, Phone, Check, Copy 
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("orbit.test.personal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        // FIXED: Added 'as const' to satisfy TypeScript
        ease: [0.21, 0.47, 0.32, 0.98] as const 
      }
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      {/* 1. HEADER (Navigation) */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="text-xl font-header text-zinc-900 dark:text-white select-none">
            Painsparc
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT */}
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: TITLE & CONTEXT */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 flex flex-col justify-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-[1.1] mb-6">
                Open a <br/>
                <span className="text-zinc-400">secure channel.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed mb-10">
                Whether it's a project inquiry, a technical challenge, or a strategic partnership—we are ready to listen.
              </p>
              
              <div className="hidden lg:block">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Status: Online 
                </p>
                <div className="mt-2 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/20" />
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: INTERACTION GRID (Bento Box) */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              
              {/* CARD 1: EMAIL (Full Width) */}
              <motion.div variants={item} className="md:col-span-2 group">
                <button 
                  onClick={handleCopy}
                  className="w-full text-left relative overflow-hidden bg-zinc-900 dark:bg-zinc-100 p-8 rounded-3xl transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 mb-2">
                        <Mail size={20} />
                        <span className="text-xs font-mono uppercase tracking-wider">Primary Uplink</span>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white dark:text-black tracking-tight">
                        orbit.test.personal@gmail.com
                      </div>
                    </div>
                    <div className="bg-zinc-800 dark:bg-zinc-200 p-3 rounded-full text-white dark:text-black">
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div className={`absolute bottom-6 left-8 text-sm font-medium text-emerald-400 transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}>
                    
                  </div>
                </button>
              </motion.div>

              {/* CARD 2: TWITTER / X */}
              <motion.div variants={item}>
                <a 
                  href="https://x.com/painsparc" // REPLACE WITH YOUR LINK
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <Twitter size={24} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-bold text-zinc-900 dark:text-white">Twitter / X</span>
                </a>
              </motion.div>

              {/* CARD 3: INSTAGRAM */}
              <motion.div variants={item}>
                <a 
                  href="https://instagram.com/painsparc" // REPLACE WITH YOUR LINK
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <Instagram size={24} className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                    <ArrowUpRight size={20} className="text-zinc-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-bold text-zinc-900 dark:text-white">Instagram</span>
                </a>
              </motion.div>

              {/* CARD 4: REQUEST A CALL (Priority) */}
              <motion.div variants={item} className="md:col-span-2">
                <a 
                  href="mailto:orbit.test.personal@gmail.com?subject=Priority%3A%20Requesting%20a%20Call"
                  className="block w-full bg-white dark:bg-black border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl hover:border-zinc-900 dark:hover:border-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-full group-hover:scale-110 transition-transform">
                      <Phone size={24} className="text-zinc-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Request a Call</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Skip the queue. Schedule a direct line with the architect.
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </main>

      {/* 3. FOOTER (Simple Copyright) */}
      <footer className="fixed bottom-0 w-full py-6 text-center pointer-events-none">
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-300 dark:text-zinc-700">
          Secure connection established
        </p>
      </footer>

    </div>
  );
}