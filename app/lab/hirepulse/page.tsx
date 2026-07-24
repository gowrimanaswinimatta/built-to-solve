import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Card, Container, Heading, Section, SectionHeading } from "@/components/ui/design";

export const metadata: Metadata = {
  title: "HirePulse",
  description: "HirePulse is a real-time job aggregation platform currently in development.",
};

const flow = [
  { label: "Company Career Sites", detail: "Employer-hosted source pages" },
  { label: "ATS Connectors", detail: "System-specific collection paths" },
  { label: "Normalization", detail: "Common job record shape" },
  { label: "Central Database", detail: "Search-ready posting store" },
  { label: "Search", detail: "Fresh role discovery" },
  { label: "HirePulse", detail: "Product experience" },
];

const facts = [
  ["Coverage", "135,000+ company career sites"],
  ["Refresh", "Runs every hour"],
  ["Source", "Directly from company career sites"],
  ["Output", "Normalized searchable job records"],
];

const roadmap = ["Connector expansion", "Freshness monitoring", "Duplicate controls", "Search relevance tuning"];

export default function HirePulse() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading eyebrow="Real-time job aggregation platform" title="HirePulse" text="An independent product under active development for collecting job postings close to the employer source and making fresh openings searchable quickly." />
            <div className="mt-8 flex flex-wrap gap-3"><Badge>In development</Badge><Badge>Hourly refresh</Badge><Badge>135,000+ sites</Badge></div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 md:grid-cols-4">
              {facts.map(([label, value]) => <Card key={label}><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p><p className="mt-4 text-xl font-semibold leading-7 text-white">{value}</p></Card>)}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading eyebrow="System design" title="From employer career sites to searchable job records." text="The product is grounded in collection, normalization, storage, and search. No invented intelligence layer is required for the core value proposition." />
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-8">
              <div className="grid gap-3 md:grid-cols-6">
                {flow.map((step, index) => <div key={step.label} className="reveal relative rounded-2xl border border-white/10 bg-white/[0.035] p-4" style={{ animationDelay: `${index * 80}ms` }}><span className="font-mono text-[11px] text-emerald-300">0{index + 1}</span><h3 className="mt-3 text-sm font-semibold text-white">{step.label}</h3><p className="mt-2 text-xs leading-5 text-zinc-400">{step.detail}</p>{index < flow.length - 1 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}</div>)}
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
              <Card><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Current capabilities</p><div className="mt-5 space-y-3">{["Collect openings from employer career sites", "Route through ATS-specific connectors", "Normalize postings into a central schema", "Make fresh postings searchable after hourly runs"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">▣ {item}</div>)}</div></Card>
              <Card><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Roadmap</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{roadmap.map((item, index) => <div key={item} className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4"><span className="font-mono text-xs text-emerald-300">r{index + 1}</span><p className="mt-2 font-semibold text-white">{item}</p></div>)}</div></Card>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
