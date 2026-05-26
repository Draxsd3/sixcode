const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos o problema, o contexto e os objetivos do seu negócio." },
  { n: "02", title: "Planejamento", desc: "Definimos escopo, arquitetura e roadmap da solução." },
  { n: "03", title: "Desenvolvimento", desc: "Entregas iterativas com código limpo e foco em qualidade." },
  { n: "04", title: "Validação", desc: "Testamos em cenários reais antes do go-live." },
  { n: "05", title: "Evolução", desc: "Acompanhamento contínuo e melhoria constante." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 lg:py-36 border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow mb-6">processo</span>
          <h2 className="text-5xl md:text-7xl headline-fade mt-6 mb-6">
            Como a SixCode trabalha
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo claro, transparente e focado em resultado de negócio.
          </p>
        </div>

        <div className="border-t border-border">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_280px_1fr] gap-6 md:gap-12 py-8 border-b border-border items-baseline transition-all hover:bg-surface/40 -mx-4 px-4 rounded-md"
            >
              <span className="font-mono text-sm text-muted-foreground/60 group-hover:text-primary transition-colors tabular-nums tracking-widest">
                {s.n}
              </span>
              <h3 className="text-3xl md:text-4xl tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed col-span-2 md:col-span-1 max-w-xl">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
