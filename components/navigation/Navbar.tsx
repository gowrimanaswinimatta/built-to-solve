"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

const links = [
  { label: "Products", href: "#products" },
  { label: "Lab", href: "#lab" },
  { label: "Thinking", href: "#thinking" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6 }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5"
    >
      <Container className="flex h-20 items-center justify-between">

        <Link
          href="/"
          className="font-semibold tracking-[0.25em] uppercase"
        >
          BUILT TO SOLVE
        </Link>

        <nav className="hidden gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </Container>
    </motion.header>
  );
}
