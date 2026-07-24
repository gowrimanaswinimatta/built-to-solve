import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge, Button, Card, Container, Heading, Section } from "@/components/ui/design";

export const metadata: Metadata = {
  title: "Lab",
  description: "Product exploration area featuring HirePulse, a real-time job aggregation platform in development.",
};

const architecture = ["Company Career Sites", "ATS Connectors", "Normalization", "Central Database", "Search", "HirePulse"];
const capabilities = ["Direct employer-source aggregation", "135,000+ monitored career sites", "Hourly collection runs", "Searchable normalized job records"];

export default function Lab() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading eyebrow="The Lab" title="Active product systems under construction." text="A product bench for independent software that is still evolving. The emphasis here is purpose, architecture, capability, and what is being designed next." />
          </Container>
        </Section>
        <Section>
          <Container>
            <Card className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[.78fr_1.22fr]">
                <div className="border-b border-white/10 bg-zinc-950/80 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <Badge>Currently building</Badge>
                  <h2 className="mt-6 text-5xl font-semibold tracking-[-0.055em]">HirePulse</h2>
                  <p className="mt-5 leading-8 text-zinc-400">Real-time job aggregation platform that collects openings directly from company career sites, normalizes postings, and makes fresh roles searchable quickly.</p>
                  <div className="mt-8 grid gap-3">
                    {capabilities.map((capability) => <div key={capability} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300">▣ {capability}</div>)}
                  </div>
                  <div className="mt-8"><Button href="/lab/hirepulse">Open system design</Button></div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Product architecture</p>
                    <span className="font-mono text-xs text-zinc-500">hourly.run</span>
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-6">
                    {architecture.map((step, index) => <div key={step} className="reveal relative rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm text-zinc-200" style={{ animationDelay: `${index * 75}ms` }}><span className="font-mono text-[11px] text-emerald-300">0{index + 1}</span><p className="mt-3 font-semibold">{step}</p>{index < architecture.length - 1 ? <span className="absolute -right-2 top-1/2 hidden text-zinc-600 md:block">→</span> : null}</div>)}
                  </div>
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {[
                      ["Coverage map", "135k+ sites"],
                      ["Connector health", "ATS-specific parsers"],
                      ["Freshness window", "Hourly runs"],
                    ].map(([label, value]) => <div key={label} className="rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4"><p className="text-xs uppercase tracking-[0.16em] text-emerald-200">{label}</p><p className="mt-3 text-lg font-semibold text-white">{value}</p></div>)}
                  </div>
                </div>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
