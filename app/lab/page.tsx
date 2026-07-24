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
    "Product exploration area featuring HirePulse, a real-time job aggregation platform in development.",
};

const architecture = [
  "Company Career Sites",
  "ATS Parsers",
  "Normalization Engine",
  "Search Database",
  "HirePulse",
];

export default function Lab() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="The Lab"
              title="Independent products in progress."
              text="A space for real products I am building outside enterprise work, grounded in practical user problems and scalable systems."
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <Card className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <Badge>Currently building</Badge>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em]">
                  HirePulse
                </h2>
                <p className="mt-5 leading-8 text-zinc-400">
                  A real-time job aggregation platform that collects openings
                  directly from company career sites, normalizes them, and makes
                  fresh roles searchable quickly.
                </p>
                <div className="mt-6 grid gap-3 text-sm uppercase tracking-[0.16em] text-zinc-400">
                  <span>135,000+ company career sites</span>
                  <span>Runs every hour</span>
                  <span>Publishes new jobs in approximately one hour</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Product architecture
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-5">
                  {architecture.map((step, index) => (
                    <div
                      key={step}
                      className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-200"
                    >
                      <span className="text-emerald-300">0{index + 1}</span>
                      <p className="mt-2 font-semibold">{step}</p>
                      {index < architecture.length - 1 ? (
                        <span className="absolute -right-3 top-1/2 hidden text-zinc-500 md:block">
                          →
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/lab/hirepulse">View product exploration</Button>
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
