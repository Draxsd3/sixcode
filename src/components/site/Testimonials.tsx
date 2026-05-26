const testimonials = [
  {
    quote:
      "Em 6 semanas tínhamos um MVP rodando que levaria meses com outra agência. Time direto ao ponto, sem enrolação.",
    name: "Marina Souza",
    role: "CEO · Nestor Logística",
    initials: "MS",
  },
  {
    quote:
      "O agente de IA no WhatsApp economizou 80% do tempo do nosso atendimento. ROI em menos de 2 meses.",
    name: "Rafael Lima",
    role: "COO · Clínica Vértice",
    initials: "RL",
  },
  {
    quote:
      "Refatoraram nosso sistema legado sem parar a operação. Performance triplicou e o time agora consegue evoluir o produto.",
    name: "Juliana Castro",
    role: "CTO · Pagora",
    initials: "JC",
  },
  {
    quote:
      "Mais que fornecedor, viraram parceiro técnico. Discutem produto, negócio e arquitetura no mesmo nível.",
    name: "Bruno Almeida",
    role: "Founder · Talenta",
    initials: "BA",
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 lg:py-32 border-b border-border overflow-hidden"
    >
      <div
        className="absolute -top-40 left-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6">depoimentos</span>
            <h2 className="text-5xl md:text-6xl headline-fade mt-6">
              Times que escalaram com a SixCode
            </h2>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <div>
              <div className="text-3xl text-foreground font-semibold">+40</div>
              <div className="uppercase tracking-widest text-[10px] mt-1">
                projetos entregues
              </div>
            </div>
            <div>
              <div className="text-3xl text-foreground font-semibold">98%</div>
              <div className="uppercase tracking-widest text-[10px] mt-1">
                clientes recorrentes
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative card-surface p-8 group hover:border-primary/40 transition-all"
            >
              <div className="absolute top-6 right-8 font-display text-[6rem] leading-none text-primary/15 select-none">
                "
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">
                0{i + 1} / depoimento
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8 relative z-10">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 bg-primary/15 text-primary flex items-center justify-center font-mono text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
