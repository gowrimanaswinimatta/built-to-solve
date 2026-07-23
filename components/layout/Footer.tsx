import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { Container, Divider } from "@/components/ui/design";

export default function Footer() {
  return <footer className="pb-10 pt-16"><Container><Divider /><div className="grid gap-8 py-10 md:grid-cols-[1fr_auto]"><div><p className="font-semibold uppercase tracking-[0.24em] text-white">{site.brand}</p><p className="mt-3 max-w-md text-zinc-500">Still building. Still learning. Still solving. {site.tagline}</p></div><nav className="flex flex-wrap gap-4 text-sm text-zinc-400" aria-label="Footer navigation">{navLinks.map((link)=><Link className="hover:text-white" key={link.href} href={link.href}>{link.label}</Link>)}</nav></div><p className="text-sm text-zinc-600">© {new Date().getFullYear()} {site.name}. All rights reserved.</p></Container></footer>;
}
