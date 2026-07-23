import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Badge,
  Card,
  Container,
  Heading,
  Metric,
  Section,
  SectionHeading,
} from "@/components/ui/design";
import {
  capabilities,
  impactMetrics,
  journey,
  waysOfWorking,
} from "@/data/experience";
export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional journey and capabilities spanning Amazon, business intelligence, data engineering, automation, and AI products.",
};
export default function Experience() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="Experience"
              title="A journey through data, automation, and product systems."
              text="8+ years translating business ambiguity into data platforms, reporting systems, workflow automation, and AI product exploration."
            />
          </Container>
        </Section>
        <Section>
          <Container>
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
              eyebrow="Journey"
              title="Professional progression without the résumé clutter."
            />
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {journey.map((j, i) => (
                <li key={j} className="rounded-3xl border border-white/10 p-6">
                  <span className="text-emerald-300">0{i + 1}</span>
                  <h2 className="mt-4 text-2xl font-semibold">{j}</h2>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Capabilities"
              title="Tools and practices used to turn requirements into reliable systems."
            />
            <div className="flex flex-wrap gap-3">
              {capabilities.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 md:grid-cols-2">
              {waysOfWorking.map((w) => (
                <Card key={w}>
                  <p className="leading-8 text-zinc-300">{w}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
