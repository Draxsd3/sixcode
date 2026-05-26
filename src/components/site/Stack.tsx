const groups = [
  {
    label: "frontend",
    items: ["React", "Next.js", "TanStack", "Tailwind", "TypeScript", "Vite"],
  },
  {
    label: "backend",
    items: ["Node.js", "Python", "PostgreSQL", "Supabase", "Redis", "tRPC"],
  },
  {
    label: "ai / automação",
    items: ["OpenAI", "LangChain", "n8n", "Zapier", "Make", "WhatsApp API"],
  },
  {
    label: "infra / devops",
    items: ["Vercel", "Cloudflare", "Docker", "GitHub Actions", "AWS", "Stripe"],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative py-24 lg:py-32 border-b border-border overflow-hidden"
    >
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="eyebrow mb-6">stack</span>
            <h2 className="text-5xl md:text-6xl headline-fade mt-6">
              Ferramentas modernas, decisões pragmáticas
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Escolhemos a stack certa para cada projeto. Sem hype, sem trava.
            Só o que entrega valor rápido e escala depois.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className="bg-background p-6 group hover:bg-surface/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  0{i + 1} / {g.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-foreground/90 group/item"
                  >
                    <span className="text-muted-foreground/40 font-mono text-xs group-hover/item:text-primary transition-colors">
                      ▸
                    </span>
                    <span className="group-hover/item:text-primary transition-colors">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
