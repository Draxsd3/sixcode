const values = [
  { title: "Sob medida", desc: "Cada projeto é único e construído para resolver um problema real." },
  { title: "Código limpo", desc: "Padrões sólidos, manutenção simples e arquitetura preparada para escalar." },
  { title: "Foco em resultado", desc: "Visão de produto e negócio, não apenas entrega técnica." },
  { title: "IA aplicada", desc: "Inteligência artificial usada onde gera ganho real de eficiência." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-36 border-b border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="eyebrow mb-6">sobre</span>
            <h2 className="text-5xl md:text-6xl headline-fade mt-6 mb-8">
              Tiramos ideias do papel e colocamos em produção
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A SixCode nasceu para ajudar empresas a transformarem ideias em
              soluções digitais reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unimos desenvolvimento, automação e inteligência artificial para
              criar sistemas úteis, escaláveis e alinhados às necessidades de
              cada negócio.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-surface rounded-2xl p-7 group hover:border-primary/40 transition-all"
              >
                <div className="font-mono text-xs text-primary/70 mb-5">0{i + 1}</div>
                <h3 className="text-2xl mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
