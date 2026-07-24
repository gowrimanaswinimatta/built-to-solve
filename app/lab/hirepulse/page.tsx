import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Badge,
  Card,
  Container,
  Heading,
  Section,
  SectionHeading,
} from "@/components/ui/design";

export const metadata: Metadata = {
  title: "HirePulse",
  description:
    "HirePulse is a real-time job aggregation platform currently in development.",
};

const flow = [
  "Company Career Sites",
  "ATS Parsers",
  "Normalization Engine",
  "Search Database",
  "HirePulse",
];

const facts = [
  "Aggregates jobs directly from company career sites",
  "Covers 135,000+ company career sites",
  "Refreshes every hour",
  "Publishes new jobs within approximately one hour",
];

export default function HirePulse() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="Real-time job aggregation platform"
              title="HirePulse"
              text="An independent product that tracks company career sites, normalizes job postings, and makes fresh openings searchable quickly."
            />
            <div className="mt-8">
              <Badge>In development</Badge>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <h2 className="text-xl font-semibold">Purpose</h2>
                <p className="mt-4 text-zinc-400">
                  Aggregate jobs directly from company career sites so job
                  seekers can discover openings close to the source.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-semibold">Coverage</h2>
                <p className="mt-4 text-zinc-400">
                  The platform monitors more than 135,000 company career sites
                  across many employer systems.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-semibold">Refresh</h2>
                <p className="mt-4 text-zinc-400">
                  The aggregation system runs every hour and publishes new jobs
                  within approximately one hour of appearing on career sites.
                </p>
              </Card>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Product architecture"
              title="From employer career sites to searchable job records."
            />
            <ol className="grid gap-4 md:grid-cols-5">
              {flow.map((step, index) => (
                <li
                  key={step}
                  className="relative rounded-2xl border border-white/10 bg-zinc-950/70 p-5"
                >
                  <span className="text-emerald-300">0{index + 1}</span>
                  <p className="mt-3 font-semibold">{step}</p>
                  {index < flow.length - 1 ? (
                    <span className="absolute -right-3 top-1/2 hidden text-zinc-500 md:block">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </Container>
        </Section>
        <Section>
          <Container>
            <Card>
              <h2 className="text-2xl font-semibold">Current platform facts</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {facts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
