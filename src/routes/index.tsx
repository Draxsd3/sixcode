import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Solutions } from "@/components/site/Solutions";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { CTASection } from "@/components/site/CTASection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SixCode — Tecnologia sob medida para fazer o seu negócio crescer" },
      {
        name: "description",
        content:
          "Criamos sistemas, automações e soluções com IA para empresas que querem economizar tempo, vender mais e tirar o foco da operação repetitiva.",
      },
      { property: "og:title", content: "SixCode — Tecnologia que faz seu negócio crescer" },
      {
        property: "og:description",
        content: "Sistemas sob medida, automações e IA para o seu negócio. Diagnóstico gratuito.",
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
        <Process />
        <Projects />
        <About />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
