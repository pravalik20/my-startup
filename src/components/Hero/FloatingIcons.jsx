"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const icons = [
  {
    icon: <FaReact size={28} />,
    x: -220,
    y: -120,
    delay: 0,
  },
  {
    icon: <SiNextdotjs size={26} />,
    x: 220,
    y: -100,
    delay: 0.4,
  },
  {
    icon: <SiTailwindcss size={26} />,
    x: -260,
    y: 90,
    delay: 0.8,
  },
  
  
  {
    icon: <SiTypescript size={26} />,
    x: 100,
    y: -210,
    delay: 2,
  },
  {
    icon: <FaHtml5 size={26} />,
    x: -170,
    y: 220,
    delay: 2.4,
  },
  {
    icon: <FaCss3Alt size={26} />,
    x: 180,
    y: 220,
    delay: 2.8,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: {
              delay: item.delay,
              duration: 0.5,
            },
            scale: {
              delay: item.delay,
              duration: 0.5,
            },
            y: {
              duration: 3,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            },
          }}
          className="absolute z-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,.35)]"
          style={{
            left: `calc(50% + ${item.x}px)`,
            top: `calc(50% + ${item.y}px)`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}