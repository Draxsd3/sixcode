import { Clock, MessageSquare, TrendingUp, Bot, BarChart3, Globe } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Automação de processos",
    desc: "Elimine planilhas, e-mails repetitivos e tarefas manuais. Sua equipe foca no que realmente importa.",
    result: "Economia de horas todo dia",
  },
  {
    icon: MessageSquare,
    title: "Atendimento com IA",
    desc: "Atendentes virtuais no WhatsApp e no site que respondem clientes 24 horas por dia, sem perder vendas.",
    result: "Mais vendas, menos espera",
  },
  {
    icon: TrendingUp,
    title: "Sistemas sob medida",
    desc: "Plataformas criadas do zero para a sua operação. Sem ficar refém de softwares prontos que não servem.",
    result: "Feito do jeito que você precisa",
  },
  {
    icon: Bot,
    title: "Integrações inteligentes",
    desc: "Conectamos suas ferramentas (WhatsApp, ERP, planilhas, CRM) para que tudo converse entre si.",
    result: "Dados unificados em um só lugar",
  },
  {
    icon: BarChart3,
    title: "Painéis e relatórios",
    desc: "Veja em uma tela só o que está acontecendo no seu negócio. Decisões baseadas em dados, não em achismo.",
    result: "Visão clara em tempo real",
  },
  {
    icon: Globe,
    title: "Sites e landing pages",
    desc: "Presença digital profissional, rápida e feita para converter visitantes em clientes de verdade.",
    result: "Mais leads qualificados",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-36 border-b border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="eyebrow mb-6">o que fazemos</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl headline-fade mt-6 mb-6 tracking-tight">
            Resolvemos o que trava o seu negócio
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Cada empresa tem suas dores. A gente entende o seu problema e cria
            a solução certa — sem complicação, sem termo difícil, com foco no
            resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-deep">
          {items.map(({ icon: Icon, title, desc, result }) => (
            <article
              key={title}
              className="tilt-card shine group relative card-surface rounded-2xl p-7 overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex-1">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl mb-3 tracking-tight">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{desc}</p>
              </div>

              <div className="relative pt-4 mt-auto border-t border-border/60">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {result}
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
