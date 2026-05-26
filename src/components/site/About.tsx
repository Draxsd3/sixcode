import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { title: "Soluções sob medida", desc: "Cada projeto é único e construído para resolver um problema real." },
  { title: "Código limpo", desc: "Padrões sólidos, manutenção simples e arquitetura preparada para escalar." },
  { title: "Foco em resultado", desc: "Visão de produto e negócio, não apenas entrega técnica." },
  { title: "IA aplicada", desc: "Inteligência artificial usada onde gera ganho real de eficiência." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Sobre</span>
            <h2 className="text-4xl md:text-5xl mt-5 mb-6">
              Tiramos ideias do papel e colocamos em produção
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A SixCode nasceu para ajudar empresas a transformarem ideias em
              soluções digitais reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Unimos desenvolvimento, automação e inteligência artificial para
              criar sistemas úteis, escaláveis e alinhados às necessidades de
              cada negócio.
            </p>

            <div className="relative">
              <div className="absolute -inset-3 bg-primary/10 blur-2xl rounded-full" aria-hidden />
              <img
                src={aboutTeam}
                alt="Equipe SixCode trabalhando em uma solução de software"
                loading="lazy"
                width={1024}
                height={768}
                className="relative w-full h-auto rounded-lg border border-border object-cover aspect-[4/3]"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-md overflow-hidden">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-background p-8 group hover:bg-surface transition-colors"
                >
                  <div className="font-mono text-xs text-primary/60 mb-4">0{i + 1}</div>
                  <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
