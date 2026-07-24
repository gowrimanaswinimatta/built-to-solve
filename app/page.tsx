import type { CSSProperties } from "react";
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


const selectedWork = [
  {
    title: "Enterprise Workflow Automation Platform",
    status: "Production System",
    impact: "≈ $30M Business Value",
    category: "Workflow Automation",
    role: "Product Engineering • Automation • Analytics",
    meta: ["Python", "Selenium", "Flask", "SQL", "Audit Logging", "A/B Testing", "UAT"],
    problem: ["Business Need", "Manual Process", "Operational Complexity", "Inconsistent Decisions", "Business Risk"],
    architecture: ["Users", "Workflow Intake", "Validation", "Automation", "Database", "Audit + Reporting"],
    insights: ["High-volume workflows", "Exception handling", "Governed validation", "Auditability", "Experimentation", "Operational resilience"],
    journey: ["Requirements", "Validation", "Workflow Engine", "Automation", "Audit", "Production"],
    outcomes: ["≈ $30M Business Value", "40% Process Improvement", "Enterprise Production System"],
    accent: "emerald",
  },
  {
    title: "Unified Analytics Platform",
    status: "Trusted Decision Layer",
    impact: "Reusable KPI Platform",
    category: "Analytics Engineering",
    role: "Data Engineering • BI • KPI Governance",
    meta: ["Data Modeling", "BI", "Documentation", "Semantic Layer", "Analytics Enablement"],
    problem: ["Fragmented Sources", "Conflicting Definitions", "Manual Reconciliation", "Low Trust", "Delayed Decisions"],
    architecture: ["Operational Sources", "Ingestion", "Normalization", "Business Rules", "Semantic Layer", "Dashboards", "Business Decisions"],
    insights: ["KPI governance", "Normalized tables", "Reusable definitions", "Cross-functional alignment", "Data quality", "Business documentation"],
    journey: ["Source Mapping", "Ingestion Contracts", "Canonical Models", "Rules Layer", "Metric Store", "Self-Service Analytics"],
    outcomes: ["Shared Analytical Foundation", "Trusted Business Metrics", "Multi-team Enablement"],
    accent: "cyan",
  },
  {
    title: "Self-Service Decision Platform",
    status: "Governed Analytics Workspace",
    impact: "Reusable Reporting System",
    category: "Business Intelligence",
    role: "Product Ownership • Analytics • Decision Enablement",
    meta: ["KPI Definitions", "Reporting UX", "Governance", "Decision Paths"],
    problem: ["Recurring Questions", "One-off Reports", "Metric Drift", "Slow Follow-up", "Decision Friction"],
    architecture: ["Business Questions", "Governed KPIs", "Reusable Views", "Exploration Paths", "Decision Rooms"],
    insights: ["Self-service access", "Metric consistency", "Executive readability", "Reusable reports", "Context-rich dashboards", "Decision governance"],
    journey: ["Question Library", "Metric Contracts", "Explore Views", "Dashboard Modules", "Operating Reviews"],
    outcomes: ["Governed Self-Service", "Reusable KPI Definitions", "Faster Decision Support"],
    accent: "violet",
  },
  {
    title: "Guided Operations Workflow",
    status: "Operational Decision Tool",
    impact: "Simplified Complex Decisions",
    category: "Guided Workflow",
    role: "Workflow Design • Business Logic • Enablement",
    meta: ["Decision Trees", "Validation", "Recommendations", "Operational UX"],
    problem: ["Complex Inputs", "Policy Ambiguity", "Manual Interpretation", "Inconsistent Action", "Rework"],
    architecture: ["User Input", "Decision Tree", "Validation", "Recommendation", "Completion"],
    insights: ["Decision logic", "User guidance", "Input validation", "Operational clarity", "Reduced ambiguity", "Repeatable outcomes"],
    journey: ["Inputs", "Branch Logic", "Rule Checks", "Recommended Action", "Completion State"],
    outcomes: ["Clearer Operator Decisions", "Reduced Rework", "Repeatable Guidance"],
    accent: "amber",
  },
];

function WorkFlow({ items }: { items: string[] }) {
  return <div className="grid gap-3 md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]" style={{"--cols": items.length} as CSSProperties}>{items.map((item, i) => <div className="reveal relative rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm text-zinc-200" style={{animationDelay: `${i * 80}ms`}} key={item}><span className="text-emerald-300">0{i+1}</span><p className="mt-2 font-semibold">{item}</p>{i < items.length - 1 ? <span className="absolute -right-3 top-1/2 hidden text-zinc-500 md:block">→</span> : null}</div>)}</div>;
}

function WorkSystem({ work, index }: { work: (typeof selectedWork)[number]; index: number }) {
  return <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.025))] shadow-2xl shadow-black/30">
    <div className="border-b border-white/10 bg-zinc-950/80 p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5"><div><p className="text-sm uppercase tracking-[0.28em] text-emerald-300">0{index + 1} / Internal workspace</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{work.title}</h3></div><div className="grid gap-2 text-right text-xs uppercase tracking-[0.16em] text-zinc-400"><span>{work.status}</span><span className="text-emerald-200">{work.impact}</span><span>{work.category}</span><span>{work.role}</span></div></div>
      <div className="mt-6 flex flex-wrap gap-2">{work.meta.map((m)=><span key={m} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{m}</span>)}</div>
    </div>
    <div className="grid gap-6 p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><div className="rounded-3xl border border-white/10 bg-black/20 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Problem space</p><div className="mt-5 space-y-3">{work.problem.map((x,i)=><div key={x} className="flex items-center gap-3"><span className="size-2 rounded-full bg-emerald-300"/><span className="rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-300">{x}</span>{i<work.problem.length-1?<span className="text-zinc-600">↓</span>:null}</div>)}</div></div><div className="rounded-3xl border border-emerald-300/10 bg-emerald-300/[0.03] p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">System architecture</p><div className="mt-5"><WorkFlow items={work.architecture}/></div></div></div>
      <div className="rounded-3xl border border-white/10 bg-black/20 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Engineering insights</p><div className="mt-5 flex flex-wrap gap-2">{work.insights.map((x)=><span key={x} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300">▣ {x}</span>)}</div></div>
      <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5"><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Solution journey</p><div className="mt-5"><WorkFlow items={work.journey}/></div></div>
      <div className="grid gap-3 md:grid-cols-3">{work.outcomes.map((x)=><div key={x} className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-center font-semibold text-emerald-100">{x}</div>)}</div>
    </div>
  </article>;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="min-h-[92svh] pt-32">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div className="reveal">
                <Badge>Product engineer • Data • AI</Badge>
                <h1 className="mt-8 text-6xl font-semibold leading-none tracking-[-0.08em] sm:text-8xl lg:text-9xl">
                  BUILT TO
                  <br />
                  SOLVE.
                </h1>
                <p className="mt-8 text-3xl font-light tracking-[-0.04em] text-zinc-200 sm:text-5xl">
                  Turning complexity into clarity.
                </p>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  I design and build data platforms, AI-powered products, and
                  automation systems that transform complex business challenges
                  into scalable, measurable solutions.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/products">See My Products</Button>
                  <Button href="/experience" variant="secondary">
                    Explore Experience
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Badge>Amazon</Badge>
                  <Badge>8+ Years</Badge>
                  <Badge>Building HirePulse</Badge>
                </div>
              </div>
              <Card className="reveal">
                <div className="grid gap-4">
                  {["Problem", "Data", "Automation", "AI", "Decision"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/60 p-4"
                      >
                        <span className="flex size-9 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
                          {index + 1}
                        </span>
                        <span className="text-lg text-white">{item}</span>
                        <span className="ml-auto text-zinc-600">→</span>
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Selected Work"
              title="Enterprise systems that solve complex business problems."
              text="A workspace-style view into production platforms, analytical foundations, governed decision systems, and guided operational workflows."
            />
            <div className="space-y-10">
              {selectedWork.map((work, index) => (
                <WorkSystem key={work.title} work={work} index={index} />
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Engineering principles"
              title="A practical operating system for hard problems."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((p) => (
                <Card key={p.number}>
                  <p className="text-emerald-300">{p.number}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-zinc-400">{p.summary}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <Card className="grid gap-8 lg:grid-cols-2">
              <div>
                <Badge>The Lab</Badge>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
                  Exploring what’s next.
                </h2>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">HirePulse</h3>
                <p className="mt-4 leading-8 text-zinc-400">
                  Real-time job aggregation platform collecting openings
                  directly from company career sites, normalizing records, and
                  making fresh roles searchable quickly.
                </p>
                <Button href="/lab/hirepulse" variant="secondary">
                  Explore HirePulse
                </Button>
              </div>
            </Card>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Business impact"
              title="Built around outcomes that can be explained."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {impactMetrics.map((m) => (
                <Metric key={m.label} {...m} />
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Experience journey"
              title="From enterprise data systems to AI product exploration."
            />
            <div className="flex flex-wrap gap-3">
              {journey.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <Card>
              <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                Let’s build something meaningful.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
                Whether you’re building a product, modernizing data platforms,
                or exploring AI, I’d love to connect.
              </p>
              <div className="mt-8">
                <Button href="/contact">Contact Gowri</Button>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
