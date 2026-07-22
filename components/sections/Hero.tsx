"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500"
        >
          Product Studio · Data · AI · Automation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-5xl text-6xl font-bold leading-none tracking-tight md:text-8xl"
        >
          I build products that solve real problems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
        >
          From analytics platforms to AI-powered job intelligence, I design,
          build, and ship software that removes friction and creates measurable
          impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#solutions"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
