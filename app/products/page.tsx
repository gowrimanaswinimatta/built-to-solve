import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Container, Heading, Section } from "@/components/ui/design";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Interactive product systems by Gowri Manaswini spanning workflow automation, governed analytics, decision intelligence, and guided operations.",
};

const systems = [
  {
    title: "Enterprise Workflow Automation Platform",
    href: "/products/pricing-automation-engine",
    accent: "emerald",
    mode: "Orchestration engine",
    topology: ["Intake", "Rules", "Approval", "Execute", "Review", "Ledger"],
    signals: ["Dependencies", "Workflow states", "Approvals", "Execution trace"],
  },
  {
    title: "Unified Analytics Platform",
    href: "/products/executive-insights-platform",
    accent: "cyan",
    mode: "BI control plane",
    topology: ["Sources", "Model", "Semantic", "Metrics", "Dashboards", "Definitions"],
    signals: ["Data lineage", "Governed KPIs", "Dashboard routes", "Business glossary"],
  },
  {
    title: "Self-Service Decision Platform",
    href: "/products/decision-intelligence-platform",
    accent: "violet",
    mode: "Executive workspace",
    topology: ["Question", "Scorecard", "Filter", "Drill-down", "Reasoning", "Decision"],
    signals: ["KPI scorecards", "Interactive filters", "Decision paths", "Tradeoffs"],
  },
  {
    title: "Guided Operations Workflow",
    href: "/lab/hirepulse",
    accent: "amber",
    mode: "Operations control center",
    topology: ["Alerts", "Queues", "Routing", "Playbook", "Signals", "Resolution"],
    signals: ["Product preview", "Operational queues", "Discovery signals", "Commercial focus"],
  },
];

const accent: Record<string, string> = {
  emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
  amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="Systems console"
              title="Explore production-style systems, not portfolio cards."
              text="Each workspace exposes architecture, relationships, governance, and business outcomes through panels, topology maps, traces, and expandable reasoning."
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-4 shadow-2xl shadow-black/30">
              <div className="grid gap-4 lg:grid-cols-4">
                {systems.map((system, index) => (
                  <Link key={system.title} href={system.href} className="group rounded-3xl border border-white/10 bg-black/25 p-5 transition hover:-translate-y-1 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">sys.0{index + 1}</span>
                      <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.16em] ${accent[system.accent]}`}>{system.mode}</span>
                    </div>
                    <h2 className="mt-5 min-h-24 text-3xl font-semibold tracking-[-0.045em] text-white">{system.title}</h2>
                    <div className="mt-6 grid gap-2">
                      {system.topology.map((node, nodeIndex) => (
                        <div key={node} className="grid grid-cols-[1.75rem_1fr] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-300">
                          <span className="font-mono text-[11px] text-zinc-500">{nodeIndex + 1}</span>
                          <span>{node}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-48 group-focus:max-h-48">
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Hover context</p>
                      <div className="mt-3 flex flex-wrap gap-2">{system.signals.map((signal) => <span key={signal} className="rounded-xl border border-white/10 bg-zinc-950/70 px-3 py-2 text-xs text-zinc-300">{signal}</span>)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-12"><Button href="/contact">Build a clearer system</Button></div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
