import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Button, Card, Container, Heading, Section } from "@/components/ui/design";
import { products, type Product } from "@/data/products";

type Experience = {
  label: string;
  theme: string;
  console: string;
  primary: string;
  secondary: string;
  graph: string[];
  panels: { title: string; items: string[] }[];
  trace: { time: string; event: string; state: string }[];
  reasoning: string[];
};

const experiences: Record<string, Experience> = {
  "pricing-automation-engine": {
    label: "Enterprise Workflow Automation Platform",
    theme: "emerald",
    console: "orchestration-engine",
    primary: "Execution graph",
    secondary: "Dependencies, approvals, workflow states, and the operational timeline are inspectable instead of summarized.",
    graph: ["Intake", "Dependency check", "Approval gate", "Rules engine", "Exception queue", "Operational ledger"],
    panels: [
      { title: "Dependency contract", items: ["Inputs validated before execution", "Eligibility gates are explicit", "Downstream writes wait for approvals"] },
      { title: "State model", items: ["Queued", "Validated", "Needs review", "Approved", "Executed", "Recorded"] },
      { title: "Tradeoff drawer", items: ["Automated repeatable work", "Kept judgment calls visible", "Favored reconstructable runs over hidden speed"] },
    ],
    trace: [
      { time: "09:12", event: "Request batch entered queue", state: "queued" },
      { time: "09:15", event: "Duplicate and schema checks passed", state: "validated" },
      { time: "09:18", event: "Two records routed for approval", state: "review" },
      { time: "09:25", event: "Approved records executed", state: "complete" },
    ],
    reasoning: ["Separating validation from execution makes failures understandable.", "Human approval remains where ambiguous business judgment matters.", "The ledger turns automation into an accountable operating system."],
  },
  "decision-intelligence-platform": {
    label: "Self-Service Decision Platform",
    theme: "violet",
    console: "executive-workspace",
    primary: "Decision workspace",
    secondary: "KPI scorecards, guided filters, drill-down routes, and business questions replace a static analytics narrative.",
    graph: ["Business question", "KPI scorecard", "Segment filter", "Drill-down", "Interpretation", "Decision path"],
    panels: [
      { title: "KPI scorecards", items: ["Shared definitions", "Visible interpretation notes", "Executive and team-level reads"] },
      { title: "Interactive filters", items: ["Question-first entry", "Segment comparison", "Root-cause paths"] },
      { title: "Decision tradeoffs", items: ["Constrained exploration where definitions matter", "Flexible slicing where context helps", "Follow-up actions preserved"] },
    ],
    trace: [
      { time: "Q1", event: "Conflicting KPI logic identified", state: "diagnose" },
      { time: "Q2", event: "Definition owners aligned", state: "govern" },
      { time: "Q3", event: "Executive path and drill-downs released", state: "serve" },
      { time: "Q4", event: "Recurring decisions moved into reusable views", state: "evolve" },
    ],
    reasoning: ["The interface starts with the decision, not the chart.", "Definitions travel with metrics so trust is not separated from usage.", "Drill-downs are curated to prevent self-service from becoming metric drift."],
  },
  "executive-insights-platform": {
    label: "Unified Analytics Platform",
    theme: "cyan",
    console: "bi-control-plane",
    primary: "Semantic layer",
    secondary: "Lineage, governed metrics, dashboard navigation, and business definitions are presented as a BI platform surface.",
    graph: ["Operational feeds", "Quality checks", "Canonical model", "Semantic layer", "Governed metric", "Dashboard route"],
    panels: [
      { title: "Data lineage", items: ["Source-to-metric chain", "Modeled grain", "Refresh and quality checkpoints"] },
      { title: "Governed metrics", items: ["Business definitions close to the number", "Reusable metric contracts", "Dashboard routes by audience"] },
      { title: "Platform tradeoffs", items: ["Trust before dashboard volume", "Readable models before exhaustive detail", "Shared foundation with role-specific views"] },
    ],
    trace: [
      { time: "01", event: "Source map established", state: "ingest" },
      { time: "02", event: "Metric grain normalized", state: "model" },
      { time: "03", event: "Definitions published", state: "govern" },
      { time: "04", event: "Dashboards routed by decision need", state: "consume" },
    ],
    reasoning: ["Lineage makes the number explainable.", "A semantic layer reduces reconciliation work across teams.", "Dashboard navigation mirrors how leaders move from summary to cause."],
  },
};

const tone: Record<string, string> = {
  emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
};

export default function CaseStudyPage({ product }: { product: Product }) {
  const index = products.findIndex((item) => item.slug === product.slug);
  const next = products[(index + 1) % products.length];
  const experience = experiences[product.slug];

  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading eyebrow={experience.label} title={product.title} text={product.positioning} />
            <div className="mt-8 flex flex-wrap gap-2">
              {[experience.console, product.focus, product.outcome].map((item) => <Badge key={item}>{item}</Badge>)}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/30">
              <div className="grid gap-6 border-b border-white/10 p-6 lg:grid-cols-[.85fr_1.15fr]">
                <aside className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Command palette</p>
                  <div className="mt-5 space-y-3">
                    {product.workflow.map((step, i) => <button key={step} className="group w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-emerald-300"><span className="font-mono text-xs text-zinc-500">⌘ {i + 1}</span><span className="ml-3 font-semibold text-white">{step}</span><span className="block max-h-0 overflow-hidden pt-0 text-sm leading-6 text-zinc-400 transition-all group-hover:max-h-20 group-hover:pt-3 group-focus:max-h-20 group-focus:pt-3">{product.approach[i % product.approach.length]}</span></button>)}
                  </div>
                </aside>
                <section className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{experience.primary}</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{experience.secondary}</h2></div><span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] ${tone[experience.theme]}`}>live system view</span></div>
                  <ol className="mt-8 grid gap-3 md:grid-cols-6">
                    {experience.graph.map((node, i) => <li key={node} className={`group relative rounded-2xl border p-4 transition hover:-translate-y-1 ${i === 2 || i === 3 ? tone[experience.theme] : "border-white/10 bg-zinc-950/70"}`}><span className="font-mono text-[11px] text-zinc-500">n{String(i + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-semibold">{node}</p><p className="mt-2 text-xs leading-5 text-zinc-400 opacity-0 transition group-hover:opacity-100">Click panels below to reveal why this point exists.</p>{i < experience.graph.length - 1 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}</li>)}
                  </ol>
                </section>
              </div>
              <div className="grid gap-5 p-6 lg:grid-cols-[1fr_.8fr]">
                <div className="grid gap-4 md:grid-cols-3">
                  {experience.panels.map((panel) => <details key={panel.title} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.055]"><summary className="cursor-pointer list-none font-semibold text-white focus:outline-none">{panel.title}<span className="float-right text-zinc-500 group-open:rotate-45">＋</span></summary><ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">{panel.items.map((item) => <li key={item}>↳ {item}</li>)}</ul></details>)}
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/25 p-5"><p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Operational timeline</p><div className="mt-5 space-y-4">{experience.trace.map((item) => <div key={`${item.time}-${item.event}`} className="grid grid-cols-[4rem_1fr_auto] gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-3 text-sm"><span className="font-mono text-zinc-500">{item.time}</span><span className="text-zinc-300">{item.event}</span><span className={tone[experience.theme].replace("bg-", "bg-") + " rounded-full border px-2 py-0.5 text-[11px]"}>{item.state}</span></div>)}</div></div>
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card><h2 className="text-2xl font-semibold">Reasoning revealed</h2><ul className="mt-5 space-y-4 text-zinc-400">{experience.reasoning.map((item) => <li key={item}>↳ {item}</li>)}</ul></Card>
              <Card><h2 className="text-2xl font-semibold">Business outcome</h2><p className="mt-5 leading-8 text-zinc-400">{product.outcome}</p></Card>
            </div>
          </Container>
        </Section>
        <Section><Container><Card className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Next system</p><Link href={`/products/${next.slug}`} className="mt-2 block text-2xl font-semibold hover:text-emerald-300">{next.title}</Link></div><Button href="/contact">Discuss a system</Button></Card></Container></Section>
      </main>
      <Footer />
    </>
  );
}
