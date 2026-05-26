import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SixCode — Sistemas, automações e IA sob medida" },
      {
        name: "description",
        content:
          "A SixCode desenvolve sistemas, automações e soluções com IA para empresas que querem escalar com tecnologia, eficiência e inteligência.",
      },
      { property: "og:title", content: "SixCode — Tecnologia que escala negócios" },
      {
        property: "og:description",
        content: "Sistemas web, automações, integrações e IA sob medida.",
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
        <Solutions />
        <Process />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
