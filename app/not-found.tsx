import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button, Card, Container, Section } from "@/components/ui/design";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="min-h-[70svh] pt-32">
          <Container>
            <Card>
              <p className="text-emerald-300">404</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">
                This path does not solve the problem.
              </h1>
              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                The page you’re looking for may have moved. Return home or
                explore the product systems.
              </p>
              <div className="mt-8 flex gap-3">
                <Button href="/">Home</Button>
                <Button href="/products" variant="secondary">
                  Products
                </Button>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
