import { Code2, Workflow, Plug, Brain, LayoutDashboard, Rocket } from "lucide-react";

const items = [
  { icon: Code2, title: "Sistemas Web", desc: "Plataformas web completas, performáticas e escaláveis sob medida para o seu negócio." },
  { icon: Workflow, title: "Automações de Processos", desc: "Eliminamos tarefas manuais e repetitivas com fluxos automatizados inteligentes." },
  { icon: Plug, title: "Integrações com APIs", desc: "Conectamos sistemas, ERPs, CRMs e ferramentas com integrações robustas." },
  { icon: Brain, title: "Inteligência Artificial", desc: "Aplicamos IA real para gerar valor, otimizar decisões e acelerar operações." },
  { icon: LayoutDashboard, title: "Dashboards Gerenciais", desc: "Painéis com indicadores em tempo real para gestão orientada por dados." },
  { icon: Rocket, title: "Landing Pages & Plataformas", desc: "Experiências digitais modernas, conversoras e alinhadas à sua marca." },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">// Soluções</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-5">
            Tecnologia sob medida para cada desafio
          </h2>
          <p className="text-muted-foreground text-lg">
            Construímos soluções digitais que resolvem problemas reais e geram impacto mensurável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-7 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elegant overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-elegant">
                  <Icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-display text-2xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
