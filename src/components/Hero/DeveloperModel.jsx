"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DeveloperModel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative z-30"
    >
<img
 src="/models/developer.png"
 alt="Developer"
 width={650}
/>
    </motion.div>
  );
}