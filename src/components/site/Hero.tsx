import { ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/15 blur-3xl animate-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl animate-blob pointer-events-none"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="eyebrow mb-8">Tecnologia para empresas</span>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mt-6 mb-8">
              Sistemas, automações e <span className="text-gradient">IA</span> sob
              medida para o seu negócio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              A SixCode desenvolve soluções digitais sob medida para empresas
              que querem reduzir tarefas manuais, integrar sistemas e escalar
              operações com tecnologia.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:glow-primary"
              >
                Solicitar proposta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center px-6 py-3.5 rounded-md border border-border bg-background/60 backdrop-blur hover:bg-surface hover:border-primary/40 text-foreground font-medium transition-all"
              >
                Conhecer soluções
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full" aria-hidden />
              <img
                src={heroVisual}
                alt="Diagrama isométrico SixCode conectando CRM, IA, API, automação e dashboards"
                width={1024}
                height={1024}
                className="relative w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-3 rounded-md shadow-sm hidden md:block">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Disponível
                </div>
                <div className="text-sm flex items-center gap-2 mt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Novos projetos
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 lg:mt-28 border border-border bg-border rounded-md overflow-hidden">
          {[
            { n: "Sob medida", l: "Cada projeto único" },
            { n: "Ágil", l: "Entregas iterativas" },
            { n: "IA aplicada", l: "Resultado real" },
            { n: "Escalável", l: "Pronto para crescer" },
          ].map((s) => (
            <div
              key={s.n}
              className="bg-background p-6 md:p-8 hover:bg-surface transition-colors group"
            >
              <div className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                {s.n}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
