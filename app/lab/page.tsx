import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
} from "@/components/ui/design";
export const metadata: Metadata = {
  title: "Lab",
  description:
    "Product exploration area featuring HirePulse, an AI career intelligence platform in development.",
};
export default function Lab() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="The Lab"
              title="Exploring what’s next."
              text="A space for product exploration at the edge of data, AI, automation, and practical user problems."
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <Card className="grid gap-8 lg:grid-cols-2">
              <div>
                <Badge>Currently building</Badge>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
                  HirePulse
                </h2>
                <p className="mt-5 leading-8 text-zinc-400">
                  AI-powered career intelligence platform helping job seekers
                  through résumé intelligence, ATS matching, opportunity
                  scoring, and career insights.
                </p>
              </div>
              <div className="grid gap-3">
                {[
                  "Resume intelligence",
                  "ATS matching",
                  "Opportunity scoring",
                  "Career insights",
                ].map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 p-4"
                  >
                    {x}
                  </div>
                ))}
                <Button href="/lab/hirepulse">View product exploration</Button>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
