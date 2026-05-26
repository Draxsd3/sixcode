import { Check } from "lucide-react";

const plans = [
  {
    name: "MVP",
    tag: "valide rápido",
    price: "a partir de R$ 15k",
    period: "projeto · 4-6 semanas",
    desc: "Para startups que precisam validar uma ideia no mercado com algo funcional.",
    features: [
      "Landing page + sistema básico",
      "Autenticação e banco de dados",
      "1 integração (pagamento ou IA)",
      "Deploy + domínio configurado",
      "30 dias de suporte",
    ],
    cta: "Começar MVP",
    highlight: false,
  },
  {
    name: "Scale-up",
    tag: "mais escolhido",
    price: "a partir de R$ 40k",
    period: "projeto · 8-12 semanas",
    desc: "Para empresas que querem um produto completo, escalável e com automações.",
    features: [
      "Sistema completo sob medida",
      "Painel admin + dashboards",
      "Automações e integrações ilimitadas",
      "Agente de IA personalizado",
      "CI/CD e infra escalável",
      "90 dias de suporte premium",
    ],
    cta: "Quero escalar",
    highlight: true,
  },
  {
    name: "Enterprise",
    tag: "sob medida",
    price: "sob consulta",
    period: "contrato contínuo",
    desc: "Para operações que precisam de squad dedicado e evolução constante.",
    features: [
      "Squad dedicado (dev + design + IA)",
      "SLA e suporte prioritário",
      "Arquitetura multi-tenant",
      "Compliance e segurança avançada",
      "Roadmap conjunto trimestral",
      "Suporte e evolução contínuos",
    ],
    cta: "Falar com vendas",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="planos"
      className="relative py-24 lg:py-36 border-b border-border overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/8 blur-[180px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow mb-6">planos</span>
          <h2 className="text-5xl md:text-7xl headline-fade mt-6 mb-6">
            Do MVP ao squad dedicado
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o modelo certo para o estágio do seu produto. Todos os
            projetos incluem código próprio, sem amarras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-8 flex flex-col transition-all duration-300 ${
                p.highlight
                  ? "bg-primary text-primary-foreground border border-primary"
                  : "card-surface hover:border-primary/40"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="bg-foreground text-background font-mono text-[9px] uppercase tracking-widest px-2 py-1">
                    {p.tag}
                  </span>
                </div>
              )}

              <div
                className={`font-mono text-[10px] uppercase tracking-widest mb-4 ${
                  p.highlight ? "text-primary-foreground/70" : "text-primary"
                }`}
              >
                {!p.highlight && p.tag}
                {p.highlight && "fase 02"}
              </div>

              <h3 className="text-4xl md:text-5xl tracking-tight mb-3">
                {p.name}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  p.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {p.desc}
              </p>

              <div className="mb-6 pb-6 border-b border-current/20">
                <div className="text-2xl font-semibold tracking-tight">
                  {p.price}
                </div>
                <div
                  className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${
                    p.highlight
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  {p.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        p.highlight ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        p.highlight
                          ? "text-primary-foreground/90"
                          : "text-foreground/90"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-all ${
                  p.highlight
                    ? "bg-primary-foreground text-primary hover:bg-background"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10 font-mono">
          todos os planos incluem · código próprio · sem vendor lock-in · NDA disponível
        </p>
      </div>
    </section>
  );
}
