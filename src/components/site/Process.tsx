const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos o problema, o contexto e os objetivos do seu negócio." },
  { n: "02", title: "Planejamento", desc: "Definimos escopo, arquitetura e roadmap da solução." },
  { n: "03", title: "Desenvolvimento", desc: "Entregas iterativas com código limpo e foco em qualidade." },
  { n: "04", title: "Validação", desc: "Testamos em cenários reais antes do go-live." },
  { n: "05", title: "Evolução", desc: "Acompanhamento contínuo e melhoria constante." },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 lg:py-32 bg-surface border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow mb-5">Processo</span>
          <h2 className="text-4xl md:text-5xl mt-5 mb-5">Como a SixCode trabalha</h2>
          <p className="text-muted-foreground text-lg">
            Um processo claro, transparente e focado em resultado de negócio.
          </p>
        </div>

        <div className="border-t border-border">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[140px_280px_1fr] gap-6 md:gap-10 py-8 border-b border-border items-baseline transition-colors hover:bg-background/60 -mx-4 px-4 rounded-sm"
            >
              <span className="font-display text-4xl md:text-5xl text-primary/30 group-hover:text-primary transition-colors tabular-nums">
                {s.n}
              </span>
              <h3 className="text-2xl md:text-3xl">{s.title}</h3>
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
