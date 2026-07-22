"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0,8,0] }}
      transition={{
        repeat: Infinity,
        duration: 2
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-zinc-500"
    >
      Scroll
    </motion.div>
  );
}
