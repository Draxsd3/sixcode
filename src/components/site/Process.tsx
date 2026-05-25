const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos o problema, o contexto e os objetivos do negócio." },
  { n: "02", title: "Planejamento", desc: "Definimos escopo, arquitetura e roadmap da solução." },
  { n: "03", title: "Desenvolvimento Ágil", desc: "Entregas iterativas, código limpo e foco em qualidade." },
  { n: "04", title: "Testes & Validação", desc: "Validamos a solução em cenários reais antes do go-live." },
  { n: "05", title: "Entrega & Evolução", desc: "Acompanhamento contínuo e melhoria constante." },
];

export function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Processo</span>
          <h2 className="text-3xl md:text-4xl mt-3 mb-4">
            Como a SixCode trabalha
          </h2>
          <p className="text-muted-foreground">
            Um processo claro, transparente e focado em resultado.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5 items-start">
              <span className="font-display text-2xl text-primary tabular-nums shrink-1 mt-0.5">{s.n}</span>
              <div>
                <h3 className="text-xl mb-1">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
