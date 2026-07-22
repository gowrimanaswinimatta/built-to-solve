"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl px-8">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500"
        >
          PRODUCT STUDIO
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="max-w-5xl text-7xl font-bold leading-[0.9] tracking-[-0.05em] md:text-9xl"
        >
          BUILT TO
          <br />
          SOLVE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .30 }}
          className="mt-10 max-w-2xl text-xl leading-9 text-zinc-400"
        >
          I build products that transform complex business
          problems into software people actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .45 }}
          className="mt-14 flex gap-4"
        >
          <button className="rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:scale-105">
            Explore Products
          </button>

          <button className="rounded-xl border border-zinc-700 px-7 py-4 transition hover:border-zinc-400">
            View Resume
          </button>
        </motion.div>

      </div>
    </section>
  );
}
