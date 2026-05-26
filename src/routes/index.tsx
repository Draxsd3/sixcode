import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Stack } from "@/components/site/Stack";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SixCode — Software, automações e IA para startups que querem escalar" },
      {
        name: "description",
        content:
          "Startup de tecnologia que entrega MVPs, sistemas sob medida, automações e IA. Do diagnóstico ao deploy, com squad dedicado e código próprio.",
      },
      { property: "og:title", content: "SixCode — Tecnologia que escala startups" },
      {
        property: "og:description",
        content: "MVPs, sistemas, automações e IA sob medida. Diagnóstico gratuito.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Solutions />
        <Stack />
        <Process />
        <Projects />
        <Testimonials />
        <Pricing />
        <About />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
