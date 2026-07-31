"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#070313]" />

      {/* Top Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[-220px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[180px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-180px] top-40 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-52 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[150px]"
      />

      {/* Center Light */}
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-400/10 blur-[160px]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(7,3,19,0.9)_75%,#070313)]" />

      {/* Small Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/30"
          style={{
            left: `${5 + i * 5}%`,
            top: `${8 + (i % 6) * 12}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}