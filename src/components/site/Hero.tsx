import { ArrowRight, ArrowUpRight, Activity, Zap, CheckCircle2, AlertTriangle } from "lucide-react";

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
          <a href="#solucoes" className="pill mb-8 group max-w-full flex-wrap justify-center text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-muted-foreground hidden sm:inline">SixCode/overview</span>
            <span className="text-foreground">Plataformas sob medida com IA</span>
            <ArrowRight size={12} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>

          <h1 className="text-[clamp(2.5rem,11vw,7.5rem)] headline-fade mb-8 leading-[0.95] tracking-tight">
            O novo padrão para
            <br />
            construir software
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 px-2">
            Conheça o sistema para desenvolvimento moderno.
            Sistemas, automações e inteligência artificial sob medida para o seu negócio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all"
            >
              Começar agora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solucoes"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-surface/60 backdrop-blur hover:border-primary/40 text-foreground text-xs sm:text-sm transition-all max-w-full"
            >
              <span className="text-primary">Novo:</span>
              <span className="truncate">agente de IA para WhatsApp</span>
              <ArrowUpRight size={14} className="text-muted-foreground shrink-0" />
            </a>
          </div>
        </div>

        {/* Dashboard Mockup — 3D tilt */}
        <div className="relative mt-20 lg:mt-28 max-w-6xl mx-auto animate-fade-in perspective-deep tilt-3d-hover" style={{ animationDelay: "300ms" }}>
          <div className="absolute -inset-x-20 -top-20 -bottom-10 bg-primary/15 blur-3xl pointer-events-none" aria-hidden />
          <div className="tilt-3d">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative card-surface rounded-2xl overflow-hidden shadow-2xl">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground">
          <span>sixcode</span>
          <span className="opacity-40">/</span>
          <span className="text-foreground/80">dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-mono text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          LIVE
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[420px]">
        {/* sidebar */}
        <aside className="col-span-3 border-r border-border bg-background/40 p-4 hidden md:block">
          <div className="space-y-1 text-sm">
            <SidebarItem active label="Dashboard" />
            <SidebarItem label="Projetos" badge="12" />
            <SidebarItem label="Automações" />
            <SidebarItem label="Integrações" />
            <SidebarItem label="Equipe" />
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Sistema</div>
            <div className="flex items-center gap-2 text-xs text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Todos os sistemas OK
            </div>
          </div>
        </aside>

        {/* main */}
        <main className="col-span-12 md:col-span-9 p-4 md:p-7 space-y-4 md:space-y-5">
          {/* KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Kpi label="Automações ativas" value="248" delta="+12%" />
            <Kpi label="Tempo economizado" value="1.4k h" delta="+24%" />
            <Kpi label="Integrações" value="36" delta="+3" />
          </div>


          {/* chart */}
          <div className="rounded-xl border border-border bg-surface/40 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Performance · últimos 30 dias
              </div>
              <div className="flex gap-3 text-[10px] font-mono">
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Atual
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" /> Média
                </span>
              </div>
            </div>
            <svg viewBox="0 0 400 100" className="w-full h-24">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.62 0.20 295)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="oklch(0.62 0.20 295)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 C40,60 60,40 100,45 C140,50 160,25 200,30 C240,35 260,55 300,40 C340,28 360,18 400,22 L400,100 L0,100 Z"
                fill="url(#g)"
              />
              <path
                d="M0,70 C40,60 60,40 100,45 C140,50 160,25 200,30 C240,35 260,55 300,40 C340,28 360,18 400,22"
                fill="none"
                stroke="oklch(0.62 0.20 295)"
                strokeWidth="1.5"
              />
              <path
                d="M0,75 C50,72 100,65 150,68 C200,71 250,58 300,55 C350,52 380,48 400,45"
                fill="none"
                stroke="oklch(0.45 0.01 280)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* issues */}
          <div className="rounded-xl border border-border bg-surface/40">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Atividades recentes
              </div>
              <button className="text-[10px] font-mono text-primary">Ver todas</button>
            </div>
            <div className="divide-y divide-border">
              <IssueRow icon={<AlertTriangle size={12} className="text-amber-400" />} code="SIX-1294" title="Migração de banco concluída" />
              <IssueRow icon={<Zap size={12} className="text-primary" />} code="SIX-1301" title="Novo fluxo de autenticação" />
              <IssueRow icon={<CheckCircle2 size={12} className="text-emerald-400" />} code="SIX-1288" title="Integração WhatsApp finalizada" />
            </div>
          </div>
        </main>
      </div>

      {/* AI card floating */}
      <div className="hidden lg:block absolute bottom-6 right-6 w-72 rounded-xl border border-border bg-background/90 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-md bg-primary/15 text-primary flex items-center justify-center">
            <Activity size={12} />
          </div>
          <span className="text-xs font-medium">IA · Insight</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          Detectamos 3 processos manuais que podem ser automatizados nesta semana.
        </p>
        <div className="flex gap-2">
          <button className="text-[10px] px-2 py-1 rounded bg-primary text-primary-foreground font-medium">Aplicar</button>
          <button className="text-[10px] px-2 py-1 rounded border border-border text-muted-foreground">Detalhes</button>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ label, active, badge }: { label: string; active?: boolean; badge?: string }) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-md text-xs ${
        active ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <span>{label}</span>
      {badge && (
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface text-muted-foreground">{badge}</span>
      )}
    </div>
  );
}

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/40 p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight">{value}</span>
        <span className="text-[10px] font-mono text-primary">{delta}</span>
      </div>
    </div>
  );
}

function IssueRow({ icon, code, title }: { icon: React.ReactNode; code: string; title: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface/50 transition-colors">
      <div className="w-5 h-5 rounded-md bg-surface flex items-center justify-center">{icon}</div>
      <span className="font-mono text-[10px] text-muted-foreground">{code}</span>
      <span className="text-xs text-foreground/90 truncate">{title}</span>
    </div>
  );
}
