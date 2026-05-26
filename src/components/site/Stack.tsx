import { useState } from "react";

const groups = [
  {
    label: "frontend",
    tagline: "Interfaces rápidas, fluidas e acessíveis.",
    items: ["React", "Next.js", "TanStack", "Tailwind", "TypeScript", "Vite"],
  },
  {
    label: "backend",
    tagline: "APIs robustas e dados sob controle.",
    items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Redis", "tRPC"],
  },
  {
    label: "ai / automação",
    tagline: "Agentes e fluxos que trabalham por você.",
    items: ["OpenAI", "LangChain", "n8n", "Zapier", "Make", "WhatsApp API"],
  },
  {
    label: "infra / devops",
    tagline: "Deploy contínuo, escala sem dor.",
    items: ["Vercel", "Cloudflare", "Docker", "GitHub Actions", "AWS", "Stripe"],
  },
];

const ticker = [
  "React", "Node.js", "PostgreSQL", "OpenAI", "TypeScript", "Supabase",
  "n8n", "Vercel", "Python", "LangChain", "Tailwind", "Cloudflare",
  "Next.js", "Redis", "Docker", "WhatsApp API", "Stripe", "tRPC",
];

export function Stack() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="stack"
      className="relative py-24 lg:py-32 border-b border-border overflow-hidden"
    >
      {/* glow */}
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6">stack</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl headline-fade mt-6 tracking-tight">
              Ferramentas modernas, decisões pragmáticas
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base">
            Escolhemos a stack certa para cada projeto. Sem hype, sem trava.
            Só o que entrega valor rápido e escala depois.
          </p>
        </div>

        {/* main split: nav + spotlight */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-px bg-border border border-border">
          {/* category nav */}
          <div className="bg-background flex lg:flex-col overflow-x-auto lg:overflow-visible">
            {groups.map((g, i) => {
              const isActive = active === i;
              return (
                <button
                  key={g.label}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative text-left p-4 lg:p-6 border-b border-border/60 last:border-b-0 lg:w-full min-w-[160px] lg:min-w-0 shrink-0 transition-colors ${
                    isActive
                      ? "bg-primary/5"
                      : "hover:bg-surface/40"
                  }`}
                >
                  {/* active bar */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-primary transition-transform origin-top ${
                      isActive ? "scale-y-100" : "scale-y-0"
                    }`}
                    aria-hidden
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive
                          ? "bg-primary shadow-[0_0_12px_var(--primary)]"
                          : "bg-primary/30"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-base font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? "text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {g.label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {g.items.length} ferramentas
                  </div>
                </button>
              );
            })}
          </div>

          {/* spotlight */}
          <div className="bg-background p-6 sm:p-8 lg:p-12 relative overflow-hidden min-h-[420px]">
            {/* grid bg */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden
            />

            <div key={active} className="relative animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  /{groups[active].label.replace(/\s/g, "")}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-muted-foreground">
                  0{active + 1} — 0{groups.length}
                </span>
              </div>

              <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-10 max-w-xl">
                {groups[active].tagline}
              </p>

              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {groups[active].items.map((it, idx) => (
                  <li
                    key={it}
                    className="group relative border border-border bg-background hover:border-primary/60 transition-all duration-300 p-4 hover:-translate-y-0.5"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    </div>
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {it}
                    </div>
                    <div
                      className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="mt-12 relative overflow-hidden border-y border-border py-5 bg-background">
          <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                className="font-mono text-sm uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors flex items-center gap-12"
              >
                {t}
                <span className="w-1 h-1 rounded-full bg-primary/40" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
