"use client";

import { ReactNode, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type PhysicsCardProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function PhysicsCard({
  title = "Peak CRM",
  description = "Physics-native interface for high velocity execution.",
  children,
  className = "",
}: PhysicsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const rotateYBase = useTransform(mouseX, [0, 1], [-12, 12]);
  const rotateXBase = useTransform(mouseY, [0, 1], [12, -12]);

  const rotateX = useSpring(rotateXBase, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rotateYBase, { stiffness: 300, damping: 30 });

  const glowBackground = useMotionTemplate`radial-gradient(280px circle at ${glowX}px ${glowY}px, rgba(16, 185, 129, 0.24), rgba(30, 64, 175, 0.1) 36%, transparent 72%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
    glowX.set(x);
    glowY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div className="w-full [perspective:1100px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative isolate overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900 p-8 text-zinc-100 shadow-[0_24px_80px_-36px_rgba(16,185,129,0.35)] ${className}`}
      >
        <motion.div
          aria-hidden
          style={{ background: glowBackground }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 z-0"
        />

        <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl border border-white/[0.06]" />

        <div className="relative z-20 [transform:translateZ(32px)]">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </motion.div>
    </div>
  );
}
