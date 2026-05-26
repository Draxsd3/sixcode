import { Code2, Workflow, Plug, Brain, LayoutDashboard, Rocket } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Sistemas Web",
    desc: "Plataformas completas, performáticas e escaláveis, desenvolvidas sob medida para o seu negócio.",
    code: "function App() {\n  return <Platform />;\n}",
  },
  {
    icon: Workflow,
    title: "Automações",
    desc: "Eliminamos tarefas manuais e repetitivas com fluxos inteligentes que conectam suas operações.",
    nodes: true,
  },
  {
    icon: Plug,
    title: "Integrações",
    desc: "Conectamos ERPs, CRMs e ferramentas com APIs robustas, seguras e prontas para escalar.",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    desc: "IA aplicada para otimizar decisões, automatizar atendimento e acelerar a operação do seu time.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & BI",
    desc: "Painéis com indicadores em tempo real para uma gestão orientada por dados, não por achismo.",
  },
  {
    icon: Rocket,
    title: "Websites & Landing Pages",
    desc: "Experiências digitais modernas, alinhadas à identidade da sua marca e otimizadas para conversão.",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-36 border-b border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow mb-6">soluções</span>
          <h2 className="text-5xl md:text-7xl headline-fade mt-6 mb-6">
            Feito para times modernos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A SixCode é moldada pelas práticas e princípios que distinguem
            equipes de classe mundial: foco implacável, execução rápida e
            compromisso com a qualidade do código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative card-surface rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>

              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
