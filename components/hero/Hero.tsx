"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

import HeroCanvas from "./HeroCanvas";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div>

            <motion.p
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              className="mb-6 text-sm uppercase tracking-[0.3em] text-emerald-400"
            >
              PRODUCT ENGINEER • DATA • AI
            </motion.p>

            <motion.h1
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.1}}
              className="text-6xl font-bold leading-none tracking-tight md:text-8xl"
            >
              BUILT TO
              <br />
              SOLVE.
            </motion.h1>

            <motion.h2
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.2}}
              className="mt-8 text-3xl font-light text-zinc-300"
            >
              Turning complexity
              <br />
              into clarity.
            </motion.h2>

            <motion.p
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.3}}
              className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
            >
              I build data platforms, AI systems, and automation that help
              organizations make better decisions, eliminate repetitive work,
              and create measurable business impact.
            </motion.p>

            <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.4}}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Badge>Amazon</Badge>
              <Badge>8+ Years</Badge>
              <Badge>Building HirePulse</Badge>
            </motion.div>

            <motion.div
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:.5}}
              className="mt-10 flex gap-4"
            >
              <Button href="#products">
                See My Products
              </Button>

              <Button
                href="#experience"
                variant="secondary"
              >
                Experience
              </Button>
            </motion.div>

          </div>

          <motion.div
            initial={{opacity:0,scale:.95}}
            animate={{opacity:1,scale:1}}
            transition={{delay:.5}}
          >
            <HeroCanvas />
          </motion.div>

        </div>

      </Container>

      <ScrollIndicator />

    </section>
  );
}
