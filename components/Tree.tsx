"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Tree() {
  const [isScared, setIsScared] = useState(false);

  // Rugged, Dark Banyan Palette
  const colors = {
    barkDark: "#2c1b18",
    barkLight: "#3e2723",
    leafDarkest: "#1a3c34",
    leafDark: "#274e43",
    leafMid: "#356154",
    leafHighlight: "#467366",
  };

  const handleDisturb = () => {
    if (!isScared) {
      setIsScared(true);
      // Birds return to nest after 5 seconds
      setTimeout(() => setIsScared(false), 5000); 
    }
  };

  // Helper to generate natural flight paths for the flock
  const getFlockPath = (index: number) => {
    const angle = (index / 15) * 2 * Math.PI + (Math.random() * 0.5); 
    const distance = 600 + Math.random() * 300; 
    const destX = 400 + Math.cos(angle) * distance;
    const destY = 280 + Math.sin(angle) * distance;

    return {
      x: destX,
      y: destY,
      rotate: (angle * 180) / Math.PI + 90,
      duration: 2.5 + Math.random() * 1.5,
      delay: Math.random() * 0.3
    };
  };

  return (
    <div 
      // FIXED: Added pb-14 to reserve space for text and constrain tree height
      className="relative w-full h-full flex items-end justify-center pointer-events-auto pb-14"
      onMouseMove={handleDisturb}
    >
      {/* 1. THE SVG TREE & BIRDS */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full max-w-[900px] overflow-visible opacity-90 mix-blend-normal dark:mix-blend-soft-light"
        preserveAspectRatio="xMidYMax meet"
      >
        
        {/* --- AMBIENT BACKGROUND BIRDS --- */}
        <motion.path d="M0,0 Q10,10 20,0" fill="none" stroke={colors.barkDark} strokeWidth="2" className="dark:stroke-zinc-500 opacity-60"
          initial={{ x: -100, y: 50 }} animate={{ x: 900, y: 80, d: ["M0,0 Q10,10 20,0", "M0,10 Q10,0 20,10"] }}
          transition={{ x: { duration: 25, repeat: Infinity, ease: "linear" }, d: { duration: 0.4, repeat: Infinity, repeatType: "reverse" } }} />
        <motion.path d="M0,0 Q10,10 20,0" fill="none" stroke={colors.barkDark} strokeWidth="2" className="dark:stroke-zinc-500 opacity-50"
          initial={{ x: -100, y: 150 }} animate={{ x: 900, y: 120, d: ["M0,0 Q10,10 20,0", "M0,10 Q10,0 20,10"] }}
          transition={{ x: { duration: 18, repeat: Infinity, ease: "linear", delay: 5 }, d: { duration: 0.3, repeat: Infinity, repeatType: "reverse" } }} />
        <motion.path d="M0,0 Q8,8 16,0" fill="none" stroke={colors.barkDark} strokeWidth="2" className="dark:stroke-zinc-600 opacity-40"
          initial={{ x: -100, y: 250 }} animate={{ x: 900, y: 300, d: ["M0,0 Q8,8 16,0", "M0,8 Q8,0 16,8"] }}
          transition={{ x: { duration: 12, repeat: Infinity, ease: "linear", delay: 2 }, d: { duration: 0.2, repeat: Infinity, repeatType: "reverse" } }} />
        <motion.path d="M0,0 Q10,10 20,0" fill="none" stroke={colors.barkDark} strokeWidth="1.5" className="dark:stroke-zinc-500 opacity-30"
          initial={{ x: -100, y: 70 }} animate={{ x: 900, y: 40, d: ["M0,0 Q10,10 20,0", "M0,10 Q10,0 20,10"] }}
          transition={{ x: { duration: 28, repeat: Infinity, ease: "linear", delay: 15 }, d: { duration: 0.4, repeat: Infinity, repeatType: "reverse" } }} />
        <motion.path d="M0,0 Q6,6 12,0" fill="none" stroke={colors.barkDark} strokeWidth="1" className="dark:stroke-zinc-400 opacity-30"
          initial={{ x: -100, y: 20 }} animate={{ x: 900, y: 20, d: ["M0,0 Q6,6 12,0", "M0,6 Q6,0 12,6"] }}
          transition={{ x: { duration: 35, repeat: Infinity, ease: "linear", delay: 0 }, d: { duration: 0.5, repeat: Infinity, repeatType: "reverse" } }} />

        {/* --- THE HIDDEN FLOCK --- */}
        {[...Array(15)].map((_, i) => {
          const path = getFlockPath(i);
          return (
            <motion.path
              key={i} fill="none" stroke={colors.barkDark} strokeWidth="2" className="dark:stroke-zinc-400"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ opacity: 0, x: 400, y: 280, scale: 0 }}
              animate={isScared ? { opacity: [0, 1, 1, 0], x: path.x, y: path.y, scale: [0, 1, 0.5], rotate: path.rotate + 90, d: ["M-10,5 Q0,0 10,5", "M-10,-5 Q0,0 10,-5"] } 
                        : { opacity: 0, x: 400, y: 280, scale: 0, d: "M-10,0 Q0,5 10,0" }}
              transition={{ default: { duration: path.duration, ease: "easeInOut", delay: path.delay }, d: { duration: 0.2, repeat: Infinity, repeatType: "reverse" } }}
            />
          );
        })}

        {/* --- BANYAN STRUCTURE (Original) --- */}
        <g stroke={colors.barkDark} strokeWidth="2" strokeLinecap="round" opacity="0.6">
          <path d="M320,350 C320,450 310,550 300,600" />
          <path d="M480,320 C480,400 490,500 500,600" />
          <path d="M280,380 C280,450 260,520 250,600" />
        </g>
        <path d="M300,600 C320,500 350,400 380,350 C410,300 440,300 460,350 C500,450 520,550 540,600 L300,600 Z" fill={colors.barkDark} />
        <g stroke={colors.barkDark} strokeWidth="25" strokeLinecap="round" fill="none">
          <path d="M420,350 Q480,280 550,300" />
          <path d="M380,350 Q320,280 250,320" />
          <path d="M400,320 Q400,200 420,180" strokeWidth="20" />
        </g>
        <g stroke={colors.barkLight} strokeWidth="3" strokeLinecap="round">
          <path d="M500,310 C500,380 510,480 520,580" />
          <path d="M530,320 C530,400 525,500 535,550" strokeWidth="2" />
          <path d="M300,330 C300,400 290,500 280,580" />
          <path d="M270,340 C270,420 275,510 270,560" strokeWidth="2" />
          <path d="M380,360 C380,420 370,500 360,550" strokeWidth="4" />
          <path d="M420,360 C420,420 430,500 440,550" strokeWidth="4" />
        </g>

        {/* --- CANOPY --- */}
        <motion.g animate={isScared ? { x: [0, -5, 5, -3, 3, 0], rotate: [0, -2, 2, -1, 1, 0] } : {}} transition={{ duration: 0.5, ease: "easeInOut" }}>
          <g fill={colors.leafDarkest} opacity="0.9">
            <circle cx="400" cy="280" r="140" />
            <ellipse cx="280" cy="350" rx="100" ry="80" />
            <ellipse cx="520" cy="330" rx="110" ry="90" />
          </g>
          <motion.g fill={colors.leafDark} animate={!isScared ? { rotate: [0, 2, -1, 0], scale: [1, 1.02, 0.98, 1] } : {}} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "400px 300px" }}>
            <circle cx="350" cy="250" r="100" />
            <circle cx="450" cy="240" r="110" />
            <ellipse cx="220" cy="320" rx="80" ry="60" />
            <ellipse cx="580" cy="300" rx="90" ry="70" />
            <circle cx="400" cy="180" r="80" />
          </motion.g>
          <motion.g fill={colors.leafMid} opacity="0.8" animate={!isScared ? { rotate: [0, -2, 2, 0], scale: [1, 0.98, 1.02, 1] } : {}} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "400px 300px" }}>
            <circle cx="300" cy="220" r="70" />
            <circle cx="500" cy="210" r="75" />
            <ellipse cx="400" cy="150" rx="120" ry="60" />
            <circle cx="180" cy="300" r="50" />
            <circle cx="620" cy="280" r="55" />
          </motion.g>
          <g fill={colors.leafHighlight} opacity="0.6">
              <circle cx="380" cy="180" r="40" />
              <circle cx="440" cy="200" r="35" />
              <ellipse cx="280" cy="260" rx="50" ry="30" />
              <ellipse cx="540" cy="250" rx="50" ry="30" />
          </g>
        </motion.g>
      </svg>

      {/* 2. TEXT BELOW TREE (Absolute position, pinned to bottom-4) */}
      <div className="absolute bottom-4 w-full flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {isScared ? (
            <motion.p
              key="scared"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="font-sans text-sm font-medium text-zinc-500 dark:text-zinc-500 tracking-wide text-center"
            >
              You scared away the birds!!!!
            </motion.p>
          ) : (
            <motion.p
              key="idle"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.7, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm font-normal text-zinc-400 dark:text-zinc-600 tracking-widest uppercase text-center"
            >
              Try and shake the tree
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  );
}