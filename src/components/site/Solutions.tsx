import { Code2, Workflow, Plug, Brain, LayoutDashboard, Rocket } from "lucide-react";

const items = [
  { icon: Code2, title: "Sistemas Web", desc: "Plataformas completas, performáticas e escaláveis, desenvolvidas sob medida." },
  { icon: Workflow, title: "Automações", desc: "Eliminamos tarefas manuais e repetitivas com fluxos inteligentes." },
  { icon: Plug, title: "Integrações", desc: "Conectamos ERPs, CRMs e ferramentas com APIs robustas e seguras." },
  { icon: Brain, title: "Inteligência Artificial", desc: "IA aplicada para otimizar decisões e acelerar a operação." },
  { icon: LayoutDashboard, title: "Dashboards & BI", desc: "Painéis com indicadores em tempo real para uma gestão orientada a dados." },
  { icon: Rocket, title: "Websites & Landing Pages", desc: "Experiências digitais modernas, alinhadas à identidade da sua marca." },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow mb-5">Soluções</span>
          <h2 className="text-4xl md:text-5xl mt-5 mb-5">
            Tecnologia sob medida para cada desafio
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções digitais que resolvem problemas reais e geram impacto mensurável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8 group hover:bg-surface transition-colors">
              <Icon size={22} className="text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
