"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/data/site";
import { Container } from "@/components/ui/design";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070b]/85 backdrop-blur-xl"><Container className="flex h-16 items-center justify-between"><Link href="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-white focus:outline-none focus:ring-2 focus:ring-emerald-300">{site.brand}</Link><nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">{navLinks.map((link)=><Link key={link.href} href={link.href} className="text-sm text-zinc-400 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300">{link.label}</Link>)}</nav><button className="rounded-full border border-white/15 px-4 py-2 text-sm md:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav">Menu</button></Container>{open ? <nav id="mobile-nav" className="border-t border-white/10 bg-[#05070b] px-5 py-4 md:hidden" aria-label="Mobile navigation">{navLinks.map((link)=><Link onClick={()=>setOpen(false)} className="block rounded-xl px-3 py-3 text-zinc-200" key={link.href} href={link.href}>{link.label}</Link>)}</nav> : null}</header>;
}
