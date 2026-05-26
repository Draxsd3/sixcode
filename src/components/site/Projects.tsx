import { ArrowUpRight } from "lucide-react";

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
    <section id="projetos" className="py-24 lg:py-36 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="eyebrow mb-6">projetos</span>
          <h2 className="text-5xl md:text-7xl headline-fade mt-6 mb-6">
            Casos de uso reais
          </h2>
          <p className="text-muted-foreground text-lg">
            Exemplos de soluções que a SixCode pode construir para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative card-surface rounded-2xl p-7 overflow-hidden cursor-pointer hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary px-2 py-1 rounded bg-primary/10">
                  {p.tag}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <h3 className="text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
