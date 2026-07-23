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
    "HirePulse is an AI Career Intelligence Platform currently in development.",
};
const flow = [
  "Upload or create résumé",
  "Analyze role alignment",
  "Score opportunities",
  "Surface career insights",
  "Iterate with feedback",
];
const features = [
  "Resume intelligence",
  "ATS matching",
  "Opportunity scoring",
  "Career insights",
];
export default function HirePulse() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="AI Career Intelligence Platform"
              title="HirePulse"
              text="A product exploration focused on helping job seekers understand fit, improve positioning, and make clearer career decisions."
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
                <h2 className="text-xl font-semibold">Vision</h2>
                <p className="mt-4 text-zinc-400">
                  Make the job search less opaque by turning résumé, job
                  description, and market signals into practical guidance.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-semibold">Problem</h2>
                <p className="mt-4 text-zinc-400">
                  Job seekers often lack clear feedback on why a role is a fit,
                  what to improve, and which opportunities deserve attention.
                </p>
              </Card>
              <Card>
                <h2 className="text-xl font-semibold">Who it helps</h2>
                <p className="mt-4 text-zinc-400">
                  Candidates who want structured guidance for résumé quality,
                  ATS alignment, and opportunity prioritization.
                </p>
              </Card>
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Core product flow"
              title="A guided loop from résumé signal to smarter action."
            />
            <ol className="grid gap-4 md:grid-cols-5">
              {flow.map((step, i) => (
                <li
                  key={step}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <span className="text-emerald-300">0{i + 1}</span>
                  <p className="mt-3 font-semibold">{step}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h2 className="text-2xl font-semibold">Feature areas</h2>
                <ul className="mt-5 space-y-3 text-zinc-400">
                  {features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <h2 className="text-2xl font-semibold">Current status</h2>
                <p className="mt-5 leading-8 text-zinc-400">
                  Currently building as a product exploration. The focus is on
                  useful intelligence, transparent scoring, and workflows that
                  help people take the next best action.
                </p>
              </Card>
              <Card>
                <h2 className="text-2xl font-semibold">Product principles</h2>
                <p className="mt-5 leading-8 text-zinc-400">
                  Be honest about uncertainty, make recommendations explainable,
                  and optimize for candidate confidence rather than vanity
                  scores.
                </p>
              </Card>
              <Card>
                <h2 className="text-2xl font-semibold">Exploring next</h2>
                <p className="mt-5 leading-8 text-zinc-400">
                  Deeper role matching, better feedback loops, and clearer
                  opportunity prioritization without claiming guaranteed
                  outcomes.
                </p>
              </Card>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
