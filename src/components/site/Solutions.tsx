import { Code2, Workflow, Plug, Brain, LayoutDashboard, Rocket } from "lucide-react";

const items = [
  { icon: Code2, title: "Sistemas Web", desc: "Plataformas completas, performáticas e escaláveis sob medida." },
  { icon: Workflow, title: "Automações", desc: "Eliminamos tarefas manuais com fluxos inteligentes." },
  { icon: Plug, title: "Integrações", desc: "Conectamos ERPs, CRMs e ferramentas com APIs robustas." },
  { icon: Brain, title: "Inteligência Artificial", desc: "IA aplicada para otimizar decisões e acelerar operações." },
  { icon: LayoutDashboard, title: "Dashboards", desc: "Painéis com indicadores em tempo real para gestão ágil." },
  { icon: Rocket, title: "Websites & Landing Pages", desc: "Experiências digitais modernas e alinhadas à sua marca." },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl md:text-4xl mb-4">
            Tecnologia sob medida para cada desafio
          </h2>
          <p className="text-muted-foreground">
            Soluções digitais que resolvem problemas reais e geram impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="shrink-1 mt-0">
                <Icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
