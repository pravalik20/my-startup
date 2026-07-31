"use client";

import { motion } from "framer-motion";

export default function DeveloperModel() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:[0,-10,0]
      }}

      transition={{
        opacity:{
          duration:1
        },

        y:{
          duration:4,
          repeat:Infinity,
          ease:"easeInOut"
        }
      }}

      className="
      relative
      z-30
      flex
      justify-center
      w-full
      "

    >
    
      <img

        src="/models/developer.png"

        alt="Developer"

        className="
        w-[280px]
        sm:w-[400px]
        md:w-[550px]
        xl:w-[650px]
        h-auto
        object-contain
        "

      />

    </motion.div>

  );

}