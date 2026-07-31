"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex justify-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse"></span>

          <span className="text-[11px] font-semibold uppercase tracking-[4px] text-violet-200">
            PREMIUM WEBSITE DEVELOPMENT
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[900px] text-center font-extrabold leading-[1.05]"
      >
        <span className="block text-white text-5xl md:text-6xl lg:text-7xl">
          We Build Stunning
        </span>

        <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl lg:text-7xl">
          Websites That Convert
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-8 max-w-[820px] text-center text-lg leading-9 text-white/70"
      >
         Modern, responsive and high-performance websites that help your business grow faster
      </motion.p>

    </div>
  );
}