const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos o problema, o contexto e os objetivos do negócio." },
  { n: "02", title: "Planejamento", desc: "Definimos escopo, arquitetura e roadmap da solução." },
  { n: "03", title: "Desenvolvimento Ágil", desc: "Entregas iterativas, código limpo e foco em qualidade." },
  { n: "04", title: "Testes & Validação", desc: "Validamos a solução em cenários reais antes do go-live." },
  { n: "05", title: "Entrega & Evolução", desc: "Acompanhamento contínuo e melhoria constante." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-gradient-surface relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Processo</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-5">
            Como a SixCode trabalha
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo claro, transparente e focado em resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/40 transition-all"
            >
              <div className="font-display text-4xl text-gradient mb-3">{s.n}</div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
