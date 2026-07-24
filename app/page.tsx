import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Badge,
  Button,
  Card,
  Container,
  Metric,
  Section,
  SectionHeading,
} from "@/components/ui/design";
import { impactMetrics, journey } from "@/data/experience";
import { principles } from "@/data/principles";

type WorkSystem = {
  title: string;
  status: string;
  impact: string;
  category: string;
  accent: "emerald" | "cyan" | "violet" | "amber";
  metrics: { label: string; value: string }[];
  nodes: { label: string; detail: string; tone?: "primary" | "muted" }[];
  lanes: { label: string; items: string[] }[];
  signals: string[];
  decisionLog: string[];
  map: "automation" | "lineage" | "workspace" | "workflow";
};

const selectedWork: WorkSystem[] = [
  {
    title: "Enterprise Workflow Automation Platform",
    status: "Production workspace",
    impact: "≈ $30M value surfaced",
    category: "Runbook automation",
    accent: "emerald",
    metrics: [
      { label: "Cycle reduction", value: "40%" },
      { label: "Control points", value: "6" },
      { label: "State", value: "Live" },
    ],
    nodes: [
      { label: "Intake", detail: "Structured requests" },
      { label: "Rules", detail: "Deterministic checks" },
      { label: "Executor", detail: "Automated actions", tone: "primary" },
      { label: "Exceptions", detail: "Human review" },
      { label: "Ledger", detail: "Audit record" },
      { label: "Observability", detail: "Operating view" },
    ],
    lanes: [
      { label: "Pre-flight", items: ["Schema validation", "Eligibility gates", "Duplicate checks"] },
      { label: "Execution", items: ["Queued work", "Retry policy", "Exception routing"] },
      { label: "Control", items: ["Audit trail", "Outcome review", "Experiment reads"] },
    ],
    signals: ["High-volume queue", "Reviewable failures", "Rule transparency", "Repeatable releases"],
    decisionLog: ["Kept ambiguous cases outside automation", "Made every action reconstructable", "Separated validation from execution"],
    map: "automation",
  },
  {
    title: "Unified Analytics Platform",
    status: "Trusted metric layer",
    impact: "Reusable KPI foundation",
    category: "Analytical control plane",
    accent: "cyan",
    metrics: [
      { label: "Sources", value: "Many" },
      { label: "Definitions", value: "One" },
      { label: "Consumers", value: "Multi-team" },
    ],
    nodes: [
      { label: "Operational feeds", detail: "Raw source contracts" },
      { label: "Ingestion", detail: "Refresh checks" },
      { label: "Canonical models", detail: "Normalized grain", tone: "primary" },
      { label: "Metric layer", detail: "Shared definitions", tone: "primary" },
      { label: "Explores", detail: "Reusable views" },
      { label: "Decision forums", detail: "Aligned reads" },
    ],
    lanes: [
      { label: "Modeling", items: ["Source map", "Grain selection", "Business rules"] },
      { label: "Governance", items: ["Metric contracts", "Definition notes", "Quality checks"] },
      { label: "Consumption", items: ["Executive view", "Team drilldown", "Ad hoc path"] },
    ],
    signals: ["Metric ownership", "Reconciliation removed", "Traceable definitions", "Shared operating language"],
    decisionLog: ["Designed the model around recurring questions", "Made context visible near the number", "Optimized for trust before dashboard volume"],
    map: "lineage",
  },
  {
    title: "Self-Service Decision Platform",
    status: "Governed exploration space",
    impact: "Reusable reporting system",
    category: "Decision workspace",
    accent: "violet",
    metrics: [
      { label: "Question paths", value: "Curated" },
      { label: "Metric drift", value: "Reduced" },
      { label: "Follow-up", value: "Faster" },
    ],
    nodes: [
      { label: "Question bank", detail: "Recurring asks" },
      { label: "Metric contracts", detail: "Approved logic", tone: "primary" },
      { label: "Explore modules", detail: "Guided slices" },
      { label: "Review rooms", detail: "Operating cadence" },
      { label: "Annotations", detail: "Business context" },
      { label: "Next action", detail: "Decision handoff" },
    ],
    lanes: [
      { label: "Entry points", items: ["Operating question", "KPI lookup", "Exception read"] },
      { label: "Exploration", items: ["Segment compare", "Trend explain", "Root-cause path"] },
      { label: "Decision support", items: ["Narrative context", "Action owner", "Follow-up metric"] },
    ],
    signals: ["Self-serve without metric drift", "Reusable modules", "Executive-readable views", "Decision context preserved"],
    decisionLog: ["Turned one-off reporting into paths", "Constrained exploration where definitions mattered", "Paired every view with interpretation context"],
    map: "workspace",
  },
  {
    title: "Guided Operations Workflow",
    status: "Operator decision tool",
    impact: "Complex actions simplified",
    category: "Guided execution",
    accent: "amber",
    metrics: [
      { label: "Branches", value: "Mapped" },
      { label: "Inputs", value: "Validated" },
      { label: "Outputs", value: "Repeatable" },
    ],
    nodes: [
      { label: "Inputs", detail: "Structured capture" },
      { label: "Branch logic", detail: "Policy paths", tone: "primary" },
      { label: "Checks", detail: "Validation gates" },
      { label: "Recommendation", detail: "Next best action" },
      { label: "Completion", detail: "Closed loop" },
      { label: "Feedback", detail: "Rule refinement" },
    ],
    lanes: [
      { label: "Operator", items: ["Select scenario", "Enter constraints", "Review guidance"] },
      { label: "System", items: ["Resolve branch", "Validate inputs", "Return action"] },
      { label: "Control", items: ["Reduce ambiguity", "Capture outcome", "Tune rules"] },
    ],
    signals: ["Ambiguity made visible", "Guidance embedded in flow", "Consistent outcomes", "Reviewable rule changes"],
    decisionLog: ["Modeled the workflow before the interface", "Designed for edge cases first", "Made completion states explicit"],
    map: "workflow",
  },
];

const accentClasses = {
  emerald: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
  cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
  violet: "border-violet-300/20 bg-violet-300/10 text-violet-100",
  amber: "border-amber-300/20 bg-amber-300/10 text-amber-100",
};

function SystemNode({ node, index, accent }: { node: WorkSystem["nodes"][number]; index: number; accent: WorkSystem["accent"] }) {
  return (
    <div className={`reveal relative rounded-2xl border p-4 ${node.tone === "primary" ? accentClasses[accent] : "border-white/10 bg-zinc-950/70 text-zinc-200"}`} style={{ animationDelay: `${index * 70}ms` }}>
      <span className="font-mono text-[11px] text-zinc-500">n{String(index + 1).padStart(2, "0")}</span>
      <p className="mt-2 text-sm font-semibold">{node.label}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-400">{node.detail}</p>
    </div>
  );
}

function SystemMap({ work }: { work: WorkSystem }) {
  const columns = work.map === "workflow" ? "md:grid-cols-3" : "md:grid-cols-6";
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">System map</p>
        <span className="font-mono text-xs text-zinc-500">{work.map}.prod</span>
      </div>
      <div className={`mt-5 grid gap-3 ${columns}`}>
        {work.nodes.map((node, index) => (
          <div key={node.label} className="relative">
            <SystemNode node={node} index={index} accent={work.accent} />
            {index < work.nodes.length - 1 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkSystemCard({ work, index }: { work: WorkSystem; index: number }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.065),rgba(255,255,255,.02))] shadow-2xl shadow-black/30">
      <div className="grid gap-6 border-b border-white/10 bg-zinc-950/85 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">workspace / 0{index + 1}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">{work.title}</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {[work.status, work.category, work.impact].map((item) => <span key={item} className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] ${accentClasses[work.accent]}`}>{item}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {work.metrics.map((metric) => <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/25 p-4"><p className="text-2xl font-semibold text-white">{metric.value}</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-zinc-500">{metric.label}</p></div>)}
        </div>
      </div>
      <div className="grid gap-5 p-6 sm:p-8">
        <SystemMap work={work} />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <div className="grid gap-3 md:grid-cols-3">
            {work.lanes.map((lane) => <div key={lane.label} className="rounded-3xl border border-white/10 bg-zinc-950/60 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{lane.label}</p><div className="mt-4 space-y-2">{lane.items.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-zinc-300">{item}</div>)}</div></div>)}
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Operating signals</p>
            <div className="mt-4 flex flex-wrap gap-2">{work.signals.map((signal) => <span key={signal} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300">▣ {signal}</span>)}</div>
            <div className="mt-5 border-t border-white/10 pt-4"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Decision log</p><ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">{work.decisionLog.map((entry) => <li key={entry}>↳ {entry}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="min-h-[92svh] pt-32"><Container><div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div className="reveal"><Badge>Product engineer • Data • AI</Badge><h1 className="mt-8 text-6xl font-semibold leading-none tracking-[-0.08em] sm:text-8xl lg:text-9xl">BUILT TO<br />SOLVE.</h1><p className="mt-8 text-3xl font-light tracking-[-0.04em] text-zinc-200 sm:text-5xl">Turning complexity into clarity.</p><p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">I design and build data platforms, AI-powered products, and automation systems that transform complex business challenges into scalable, measurable solutions.</p><div className="mt-10 flex flex-wrap gap-3"><Button href="/products">See My Products</Button><Button href="/experience" variant="secondary">Explore Experience</Button></div><div className="mt-10 flex flex-wrap gap-3"><Badge>Amazon</Badge><Badge>8+ Years</Badge><Badge>Building HirePulse</Badge></div></div><Card className="reveal"><div className="grid gap-4">{["Problem", "Data", "Automation", "AI", "Decision"].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-4"><span className="flex size-9 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">{index + 1}</span><span className="text-lg text-white">{item}</span><span className="ml-auto text-zinc-600">→</span></div>)}</div></Card></div></Container></Section>
        <Section>
          <Container>
            <SectionHeading eyebrow="Selected Work" title="Production systems, opened like internal workspaces." text="Each view is structured around the operating model: inputs, controls, execution paths, signals, and the decisions that shaped the system." />
            <div className="space-y-10">{selectedWork.map((work, index) => <WorkSystemCard key={work.title} work={work} index={index} />)}</div>
          </Container>
        </Section>
        <Section><Container><SectionHeading eyebrow="Engineering principles" title="A practical operating system for hard problems." /><div className="grid gap-5 md:grid-cols-2">{principles.map((p) => <Card key={p.number}><p className="text-emerald-300">{p.number}</p><h3 className="mt-4 text-2xl font-semibold">{p.title}</h3><p className="mt-3 text-zinc-400">{p.summary}</p></Card>)}</div></Container></Section>
        <Section><Container><Card className="grid gap-8 lg:grid-cols-2"><div><Badge>The Lab</Badge><h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">Active product bench.</h2></div><div><h3 className="text-2xl font-semibold">HirePulse</h3><p className="mt-4 leading-8 text-zinc-400">A real-time job aggregation platform that monitors company career sites, normalizes postings, and makes fresh roles searchable quickly.</p><div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-300"><span className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3">135,000+ career sites</span><span className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3">Hourly refresh</span></div><div className="mt-6"><Button href="/lab/hirepulse" variant="secondary">Open Lab workspace</Button></div></div></Card></Container></Section>
        <Section><Container><SectionHeading eyebrow="Business impact" title="Built around outcomes that can be explained." /><div className="grid gap-5 md:grid-cols-3">{impactMetrics.map((m) => <Metric key={m.label} {...m} />)}</div></Container></Section>
        <Section><Container><SectionHeading eyebrow="Experience journey" title="From enterprise data systems to AI product exploration." /><div className="flex flex-wrap gap-3">{journey.map((item) => <Badge key={item}>{item}</Badge>)}</div></Container></Section>
        <Section><Container><Card><h2 className="text-4xl font-semibold tracking-[-0.04em]">Let’s build something meaningful.</h2><p className="mt-5 max-w-2xl leading-8 text-zinc-400">Whether you’re building a product, modernizing data platforms, or exploring AI, I’d love to connect.</p><div className="mt-8"><Button href="/contact">Contact Gowri</Button></div></Card></Container></Section>
      </main>
      <Footer />
    </>
  );
}
