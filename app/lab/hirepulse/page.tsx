import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Card, Container, Heading, Section, SectionHeading } from "@/components/ui/design";

export const metadata: Metadata = {
  title: "HirePulse",
  description: "HirePulse is a job discovery platform currently in development.",
};

const valueFlow = ["135,000+ Company Career Sites", "HirePulse", "Fresh Job Discovery"];

const facts = [
  ["Coverage", "135,000+ company career sites"],
  ["Refresh", "Hourly"],
  ["Source", "Close to the original employer source"],
  ["Category", "Job discovery platform"],
];

const productProgress = ["Expanding coverage", "Improving the discovery experience", "Preparing for broader access"];

export default function HirePulse() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading eyebrow="Job discovery platform" title="HirePulse" text="A commercial product preview for helping job seekers discover fresh opportunities from company career sites in one searchable experience." />
            <div className="mt-8 flex flex-wrap gap-3"><Badge>Actively building</Badge><Badge>Hourly refresh</Badge><Badge>135,000+ sites</Badge></div>
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
            <SectionHeading eyebrow="Product value" title="Fresh opportunities from company career sites in one place." text="HirePulse is intentionally presented at a high level while the proprietary implementation remains private." />
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 sm:p-8">
              <div className="grid gap-3 md:grid-cols-3">
                {valueFlow.map((step, index) => <div key={step} className="reveal relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center" style={{ animationDelay: `${index * 80}ms` }}><p className="text-lg font-semibold text-white">{step}</p>{index < valueFlow.length - 1 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}</div>)}
              </div>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
              <Card><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">What HirePulse delivers</p><div className="mt-5 space-y-3">{["Broad employer coverage", "Frequent job refreshes", "Direct-source discovery", "A unified search experience"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-300">▣ {item}</div>)}</div></Card>
              <Card><p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Product progress</p><div className="mt-5 grid gap-3 sm:grid-cols-2">{productProgress.map((item, index) => <div key={item} className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4"><span className="font-mono text-xs text-emerald-300">p{index + 1}</span><p className="mt-2 font-semibold text-white">{item}</p></div>)}</div></Card>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
