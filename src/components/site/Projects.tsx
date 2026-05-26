const projects = [
  { tag: "CRM", title: "CRM Personalizado", desc: "Gestão completa de clientes, pipeline comercial e automação de follow-up." },
  { tag: "Financeiro", title: "Sistema Financeiro", desc: "Controle de fluxo de caixa, contas a pagar/receber e DRE em tempo real." },
  { tag: "IA", title: "Plataforma com IA", desc: "Atendimento e análise de dados acelerados por inteligência artificial." },
  { tag: "Automação", title: "Automação Comercial", desc: "Fluxos automatizados conectando WhatsApp, CRM e ferramentas internas." },
  { tag: "BI", title: "Dashboard de Indicadores", desc: "KPIs centralizados, visualização clara e decisões orientadas por dados." },
  { tag: "SaaS", title: "Plataforma Multi-tenant", desc: "Sistema SaaS com múltiplos clientes, planos e billing integrado." },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow mb-5">Projetos</span>
          <h2 className="text-4xl md:text-5xl mt-5 mb-5">Casos de uso reais</h2>
          <p className="text-muted-foreground text-lg">
            Exemplos de soluções que a SixCode pode construir para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {projects.map((p) => (
            <article key={p.title} className="bg-background p-8 group hover:bg-surface transition-colors">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
                {p.tag}
              </div>
              <h3 className="text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
