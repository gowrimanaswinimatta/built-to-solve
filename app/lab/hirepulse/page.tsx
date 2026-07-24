import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Card, Container, Heading, Section, SectionHeading } from "@/components/ui/design";

export const metadata: Metadata = {
  title: "HirePulse",
  description: "HirePulse is a job discovery platform currently in development.",
};

const queues = ["Fresh postings", "Coverage expansion", "Source health", "Search experience"];
const alerts = ["New employer source detected", "Hourly refresh completed", "Coverage candidate queued", "Discovery quality signal reviewed"];
const playbooks = ["Prioritize direct-source freshness", "Keep implementation proprietary", "Surface product value without exposing internals", "Prepare for broader access"];
const facts = [["Coverage", "135,000+ company career sites"], ["Refresh", "Hourly"], ["Source", "Close to original employer source"], ["Category", "Commercial product preview"]];

export default function HirePulse() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading eyebrow="Guided Operations Workflow" title="HirePulse product control center" text="A commercial product preview for helping job seekers discover fresh opportunities from company career sites in one searchable experience." />
            <div className="mt-8 flex flex-wrap gap-3"><Badge>Product preview</Badge><Badge>Hourly refresh</Badge><Badge>135,000+ sites</Badge></div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/30">
              <div className="grid gap-5 border-b border-white/10 p-6 lg:grid-cols-4">
                {facts.map(([label, value]) => <div key={label} className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.06] p-4"><p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">{label}</p><p className="mt-4 text-xl font-semibold leading-7 text-white">{value}</p></div>)}
              </div>
              <div className="grid gap-5 p-6 lg:grid-cols-[.8fr_1.2fr_.8fr]">
                <aside className="rounded-3xl border border-white/10 bg-black/25 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Alert stream</p><div className="mt-5 space-y-3">{alerts.map((alert, index) => <div key={alert} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="font-mono text-xs text-amber-200">a{index + 1}</span><p className="mt-2 text-sm text-zinc-300">{alert}</p><p className="mt-2 max-h-0 overflow-hidden text-xs leading-5 text-zinc-500 transition-all group-hover:max-h-20">Hover reveals the product signal without exposing proprietary implementation.</p></div>)}</div></aside>
                <section className="rounded-3xl border border-white/10 bg-black/20 p-5"><div className="flex flex-wrap items-center justify-between gap-4"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Operations topology</p><span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-amber-100">commercial preview</span></div><div className="mt-6 grid gap-3 md:grid-cols-4">{queues.map((queue, index) => <details key={queue} className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-4 open:border-amber-300/25 open:bg-amber-300/[0.06]"><summary className="cursor-pointer list-none"><span className="font-mono text-xs text-zinc-500">q{index + 1}</span><p className="mt-2 font-semibold text-white">{queue}</p></summary><p className="mt-3 text-sm leading-6 text-zinc-400">Click reveals the reasoning surface: maintain freshness, coverage, reliability, and a clear job seeker experience.</p></details>)}</div><div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Routing logic</p><div className="mt-4 grid gap-3 md:grid-cols-3">{["Signal", "Review", "Product decision"].map((node, index) => <div key={node} className="relative rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-300"><span className="font-mono text-xs text-zinc-500">0{index + 1}</span><p className="mt-2 font-semibold text-white">{node}</p>{index < 2 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}</div>)}</div></div></section>
                <aside className="rounded-3xl border border-white/10 bg-black/25 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Playbooks</p><div className="mt-5 space-y-3">{playbooks.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">↳ {item}</div>)}</div></aside>
              </div>
            </div>
          </Container>
        </Section>
        <Section><Container><SectionHeading eyebrow="Product value" title="Fresh opportunities from company career sites in one place." text="HirePulse remains product-focused: the visitor can understand the commercial promise, operating signals, and product direction without viewing proprietary internals." /></Container></Section>
        <Section><Container><Card><h2 className="text-3xl font-semibold">What HirePulse delivers</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{["Broad employer coverage", "Frequent job refreshes", "Direct-source discovery", "Unified search experience"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">▣ {item}</div>)}</div></Card></Container></Section>
      </main>
      <Footer />
    </>
  );
}
