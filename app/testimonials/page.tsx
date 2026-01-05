"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Trophy, Quote, Award } from "lucide-react";

const testimonials = [
  {
    name: "Grantham NextGen EduCare",
    role: "Director @ Grantham NextGen EduCare",
    content: "Orbit impressed us with its speed, stability, and overall polish. From student portals and timetable management to tests, assignments, and announcements, every module worked seamlessly. The real-time synchronization, secure login system, and smooth performance across devices make Orbit a reliable and high-quality platform for modern coaching institutions.",
    rating: 5,
    tag: "Scale"
  },
  {
    name: "Nikunj Mapara",
    role: "Director",
    content: "What truly sets Orbit apart is its thoughtful design and depth of features. The intuitive interface, layered PIN security, and powerful question bank reflect a level of detail rarely seen in educational apps. Both teachers and students responded very positively, and the app proved to be innovative, easy to use, and future-ready.",
    rating: 5,
    tag: "Velocity"
  },
  {
    name: "",
    role: "Systems Consultant",
    content: "The attention to detail in Painsparc systems is unmatched. Durable, beautiful, and fundamentally robust.",
    rating: 5,
    tag: "Robustness"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to System
          </Link>
          <Award className="text-emerald-500" size={24} />
        </div>
      </header>

      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-8 border border-emerald-100 dark:border-emerald-500/20"
            >
              <Trophy className="text-emerald-500" size={32} />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-6">
              Proven Architecture.
            </h1>
            
            <div className="flex items-center gap-4 bg-zinc-100 dark:bg-zinc-900 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-emerald-500 text-emerald-500" />
                    ))}
                </div>
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-white">4.9/5 AVERAGE SYSTEM RATING</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-colors group"
              >
                <Quote className="absolute top-8 right-8 text-zinc-200 dark:text-zinc-800 group-hover:text-emerald-500/20 transition-colors" size={40} />
                <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={12} className="fill-emerald-500 text-emerald-500" />
                    ))}
                </div>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 leading-relaxed italic">
                    "{t.content}"
                </p>
                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <h4 className="font-bold text-zinc-900 dark:text-white uppercase tracking-tight">{t.name}</h4>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">{t.role}</p>
                    <div className="inline-block mt-4 px-3 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-full text-[10px] font-bold text-zinc-500 dark:text-zinc-400 tracking-widest uppercase">
                        {t.tag}
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center py-20 border-t border-zinc-100 dark:border-zinc-900">
             <h2 className="text-2xl font-bold text-zinc-400 mb-8 tracking-tight uppercase">Join the Elite Nodes</h2>
             <Link 
                href="/contact"
                className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white hover:text-emerald-500 transition-colors tracking-tighter"
             >
                Initiate Project <span className="text-emerald-500">→</span>
             </Link>
          </div>
        </div>
      </main>
    </div>
  );
}