import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, Container, Heading, Section } from "@/components/ui/design";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Gowri Manaswini about products, data platforms, automation, and AI.",
};
const contacts = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "LinkedIn",
    value: site.contact.linkedin,
    href: site.contact.linkedin,
  },
  { label: "GitHub", value: site.contact.github, href: site.contact.github },
];
export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32">
          <Container>
            <Heading
              eyebrow="Contact"
              title="Let’s build something meaningful."
              text="Whether you’re building a product, modernizing data platforms, or exploring AI, I’d love to connect."
            />
          </Container>
        </Section>
        <Section>
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {contacts.map((c) => (
                <Card key={c.label}>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {c.label}
                  </p>
                  <a
                    className="mt-4 block break-words text-lg text-emerald-300 hover:text-emerald-200"
                    href={c.href}
                  >
                    {c.value}
                  </a>
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
