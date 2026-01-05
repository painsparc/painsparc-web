"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-start min-h-[80vh] px-6 max-w-5xl mx-auto pt-20">
      
      {/* Animated Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
          Available for hire
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl md:text-8xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tighter mb-6 leading-[1.1]"
      >
        Building digital <br />
        <span className="text-zinc-400 dark:text-zinc-600">masterpieces.</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed"
      >
        I am a software engineer specializing in mobile architecture and high-performance web apps.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-wrap gap-4"
      >
        <button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2">
          View Work <ArrowRight size={18} />
        </button>
        
        <div className="flex gap-2">
          <button className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <Github size={20} className="text-zinc-700 dark:text-zinc-300" />
          </button>
          <button className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
            <Twitter size={20} className="text-zinc-700 dark:text-zinc-300" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}