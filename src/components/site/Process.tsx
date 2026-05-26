import { useState } from "react";
import processVisual from "@/assets/process-visual.jpg";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos o problema, o contexto e os objetivos do seu negócio.",
    meta: "1–2 semanas",
    tags: ["Discovery", "Workshops", "Análise"],
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definimos escopo, arquitetura e roadmap da solução.",
    meta: "1 semana",
    tags: ["Roadmap", "Arquitetura", "Estimativas"],
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Entregas iterativas com código limpo e foco em qualidade.",
    meta: "4–12 semanas",
    tags: ["Sprints", "Code review", "CI/CD"],
  },
  {
    n: "04",
    title: "Validação",
    desc: "Testamos em cenários reais antes do go-live.",
    meta: "1–2 semanas",
    tags: ["QA", "UAT", "Performance"],
  },
  {
    n: "05",
    title: "Evolução",
    desc: "Acompanhamento contínuo e melhoria constante.",
    meta: "Contínuo",
    tags: ["Suporte", "Métricas", "Iteração"],
  },
];

export function Process() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="processo"
      className="relative py-24 lg:py-36 border-b border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="eyebrow mb-6">processo</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl headline-fade mt-6 mb-6 tracking-tight">
            Como a SixCode trabalha
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Cinco fases, um único objetivo: entregar software que move o
            ponteiro do seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="perspective-deep">
              <div
                className="relative aspect-[4/5] overflow-hidden border border-white/10 rounded-sm bg-black"
                style={{
                  transform: "rotateY(-6deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <img
                  src={processVisual}
                  alt="Visualização do processo SixCode"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />

                {/* overlay grid */}
                <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay pointer-events-none" />

                {/* corner brackets */}
                <Bracket className="top-3 left-3" />
                <Bracket className="top-3 right-3 rotate-90" />
                <Bracket className="bottom-3 left-3 -rotate-90" />
                <Bracket className="bottom-3 right-3 rotate-180" />

                {/* HUD overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                    <span>fase ativa</span>
                    <span>{steps[active].meta}</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-mono text-primary text-sm tabular-nums">
                      {steps[active].n}
                    </span>
                    <h3 className="text-2xl md:text-3xl tracking-tight text-foreground">
                      {steps[active].title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {steps[active].desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {steps[active].tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-white/10 bg-white/5 text-foreground/80 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-6 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-primary transition-all duration-500"
                    style={{ width: `${((active + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Steps list */}
          <div className="lg:col-span-7">
            <ol className="relative border-l border-border ml-2">
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={s.n}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="relative pl-8 pb-10 last:pb-0 cursor-pointer group"
                  >
                    {/* node */}
                    <span
                      className={`absolute -left-[7px] top-2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "bg-primary border-primary shadow-[0_0_20px_oklch(0.62_0.20_295/0.8)] scale-125"
                          : "bg-background border-border group-hover:border-primary/60"
                      }`}
                    />

                    <div
                      className={`transition-all duration-300 ${
                        isActive ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                        <span className="font-mono text-xs text-primary tabular-nums tracking-widest">
                          {s.n}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-tight">
                          {s.title}
                        </h3>
                        <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden md:inline">
                          {s.meta}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bracket({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-4 h-4 border-l-2 border-t-2 border-primary/70 ${className}`}
    />
  );
}
