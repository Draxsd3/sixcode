import { ArrowRight, Clock, TrendingUp, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* background fx */}
      <div className="absolute inset-0 radial-purple pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" aria-hidden />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] max-w-[120vw] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-blob"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto animate-fade-up">
          <span className="pill mb-8 max-w-full flex-wrap justify-center text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-foreground">Tecnologia sob medida para o seu negócio</span>
          </span>

          <h1 className="text-[clamp(2.5rem,11vw,7.5rem)] headline-fade mb-8 leading-[0.95] tracking-tight">
            Menos trabalho manual.
            <br />
            <span className="italic font-display">Mais resultado.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 px-2">
            A SixCode cria sistemas, automações e soluções com inteligência
            artificial para empresas que querem ganhar tempo, vender mais e
            crescer sem aumentar a equipe.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
            >
              Quero saber como
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface/60 backdrop-blur hover:border-primary/40 text-foreground text-sm transition-all"
            >
              Ver exemplos
            </a>
          </div>
        </div>

        {/* Benefits visual */}
        <div className="relative mt-20 lg:mt-28 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-x-20 -top-20 -bottom-10 bg-primary/15 blur-3xl pointer-events-none" aria-hidden />

          <div className="relative grid md:grid-cols-3 gap-4">
            <BenefitCard
              icon={<Clock size={22} />}
              kpi="até 70%"
              label="menos tempo gasto"
              desc="em tarefas repetitivas do dia a dia"
            />
            <BenefitCard
              icon={<TrendingUp size={22} />}
              kpi="3x"
              label="mais agilidade"
              desc="no atendimento e no fechamento de vendas"
              highlight
            />
            <BenefitCard
              icon={<Sparkles size={22} />}
              kpi="24/7"
              label="operação rodando"
              desc="sem depender da disponibilidade do seu time"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  kpi,
  label,
  desc,
  highlight,
}: {
  icon: React.ReactNode;
  kpi: string;
  label: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative card-surface p-6 sm:p-8 overflow-hidden transition-all hover:border-primary/50 group ${
        highlight ? "border-primary/40 bg-primary/5" : ""
      }`}
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-6">
          {icon}
        </div>
        <div className="text-4xl sm:text-5xl font-display font-semibold tracking-tight mb-1">
          {kpi}
        </div>
        <div className="text-sm uppercase tracking-wider text-foreground/80 mb-3">
          {label}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
