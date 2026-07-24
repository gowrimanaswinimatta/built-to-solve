import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, Container, Heading, Section } from "@/components/ui/design";
import { principles } from "@/data/principles";
export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Engineering principles and practical approach used by Gowri Manaswini.",
};
const topics = [
  "Problem framing",
  "Stakeholder alignment",
  "Metric definition",
  "Workflow design",
  "Automation judgment",
  "Clarity for non-technical users",
  "Measurement and iteration",
];
export default function Thinking() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="Thinking"
              title="How hard problems become usable systems."
              text="The work starts before building. It starts by making the problem, decision, and measure of success explicit enough for teams to align."
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((p) => (
                <Card key={p.number}>
                  <p className="text-emerald-300">{p.number}</p>
                  <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-3 text-zinc-400">{p.detail}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-4">
              {topics.map((t) => (
                <Card key={t}>
                  <h2 className="text-xl font-semibold">{t}</h2>
                  <p className="mt-3 leading-7 text-zinc-400">
                    Practical systems work requires this discipline to be
                    explicit, testable, and understandable by the people who
                    depend on the outcome.
                  </p>
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
