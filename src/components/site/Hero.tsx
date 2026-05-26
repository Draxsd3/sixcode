import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl animate-fade-up">
          <span className="eyebrow mb-8">Tecnologia para empresas</span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-6 mb-8">
            Sistemas, automações e <span className="text-primary">IA</span> sob medida
            para o seu negócio
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            A SixCode desenvolve soluções digitais sob medida para empresas que
            querem reduzir tarefas manuais, integrar sistemas e escalar operações
            com tecnologia.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Solicitar proposta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center px-6 py-3.5 rounded-md border border-border bg-background hover:bg-surface text-foreground font-medium transition-colors"
            >
              Conhecer soluções
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 lg:mt-28 border border-border bg-border">
          {[
            { n: "Sob medida", l: "Cada projeto único" },
            { n: "Ágil", l: "Entregas iterativas" },
            { n: "IA aplicada", l: "Resultado real" },
            { n: "Escalável", l: "Pronto para crescer" },
          ].map((s) => (
            <div key={s.n} className="bg-background p-6 md:p-8">
              <div className="font-display text-2xl md:text-3xl text-foreground">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
