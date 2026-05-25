import { ArrowRight } from "lucide-react";
import icon from "@/assets/sixcode-icon.png";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur text-xs font-mono text-muted-foreground mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Tecnologia que escala negócios
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
              Transformamos <span className="text-gradient">ideias</span> em sistemas <span className="text-gradient">inteligentes</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Desenvolvemos plataformas, automações e soluções com IA para empresas que querem operar com mais eficiência, escala e inteligência.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all"
              >
                Solicitar proposta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center px-6 py-3.5 rounded-lg border border-border bg-surface/50 hover:bg-surface text-foreground font-medium transition-colors"
              >
                Conhecer soluções
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-md">
              {[
                { n: "100%", l: "Sob medida" },
                { n: "IA", l: "Aplicada" },
                { n: "24/7", l: "Performance" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-foreground">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img
              src={icon}
              alt=""
              className="relative w-[420px] h-auto animate-float drop-shadow-[0_20px_60px_oklch(0.58_0.24_295_/_0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
