"use client";

import { motion } from "framer-motion";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Adobe",
  "Spotify",
];

export default function Trusted() {
  return (
    <section className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.35em] text-sm text-white/40"
        >
          Trusted By Innovative Companies
        </motion.p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <span className="text-lg font-bold text-white/70">
                {company}
              </span>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}