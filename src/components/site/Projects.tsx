const projects = [
  { tag: "CRM", title: "CRM Personalizado", desc: "Gestão completa de clientes, pipeline comercial e automação de follow-up." },
  { tag: "Financeiro", title: "Sistema Financeiro", desc: "Controle de fluxo de caixa, contas a pagar/receber e DRE em tempo real." },
  { tag: "IA", title: "Plataforma com IA", desc: "Atendimento e análise de dados acelerados por inteligência artificial." },
  { tag: "Automação", title: "Automação Comercial", desc: "Fluxos automatizados conectando WhatsApp, CRM e ferramentas internas." },
  { tag: "BI", title: "Dashboard de Indicadores", desc: "KPIs centralizados, visualização clara e decisões orientadas por dados." },
  { tag: "Web", title: "Plataforma Multi-tenant", desc: "Sistema SaaS com múltiplos clientes, planos e billing integrado." },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 bg-gradient-surface relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Projetos</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-5">
            Casos de uso reais
          </h2>
          <p className="text-muted-foreground text-lg">
            Exemplos de soluções que a SixCode pode construir para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all overflow-hidden shadow-card hover:shadow-elegant"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-surface-elevated">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-6xl text-gradient opacity-50 group-hover:opacity-80 transition-opacity">
                    {p.tag}
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur border border-border text-xs font-mono text-muted-foreground">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
