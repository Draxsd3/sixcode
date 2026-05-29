import { useRef, useState } from "react";

const values = [
  {
    title: "Linguagem simples",
    desc: "Falamos a sua língua. Nada de termo técnico que ninguém entende.",
    tag: "claro",
  },
  {
    title: "Foco no resultado",
    desc: "O que importa é o que muda no seu negócio. Tecnologia é só o meio.",
    tag: "prático",
  },
  {
    title: "Feito pra durar",
    desc: "Soluções pensadas pra crescer junto com a sua empresa, sem dor de cabeça.",
    tag: "sólido",
  },
  {
    title: "Sempre por perto",
    desc: "Não sumimos depois da entrega. Continuamos do seu lado quando precisar.",
    tag: "presente",
  },
];

const stats = [
  { value: "100%", label: "Sob medida" },
  { value: "24h", label: "Resposta rápida" },
  { value: "+", label: "Melhoria contínua" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-36 border-b border-border overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 blur-[180px] rounded-full pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-[0.08] pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-14 gap-4 sm:gap-6">
          <div>
            <span className="eyebrow mb-4">sobre</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>São Paulo · Brasil</span>
          </div>
        </div>

        {/* HERO */}
        <div className="relative mb-20 lg:mb-32">
          <h2 className="text-[clamp(2.2rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.04em] font-semibold break-words">
            <span className="block text-foreground/15">transformamos</span>
            <span className="block relative">
              <span className="italic font-display headline-fade">ideias</span>
              <span className="text-foreground/15"> em </span>
              <span className="relative inline-block">
                <PaperWord>negócio</PaperWord>
              </span>
            </span>
            <span className="block">
              <span className="text-foreground/15">que </span>
              <span className="relative inline-block">
                <span className="relative z-10">funciona</span>
                <span className="absolute -inset-x-2 inset-y-2 bg-primary -skew-x-6 -z-0" />
              </span>
              <span className="text-foreground/15"> de</span>
            </span>
            <span className="block text-gradient">verdade.</span>
          </h2>
        </div>

        {/* MANIFESTO + STATS */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              <span>quem somos</span>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl leading-[1.15] tracking-tight text-foreground mb-8">
              A SixCode é o parceiro de tecnologia de quem quer{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary-foreground px-2">
                  crescer sem complicar
                </span>
                <span className="absolute inset-0 bg-primary -skew-x-3" />
              </span>
              .
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              A gente cuida da parte técnica para você focar no que faz melhor:
              tocar o seu negócio. Sem promessas vazias, sem palavra difícil,
              sem cobrar caro por coisa que não entrega.
            </p>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12 space-y-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex items-baseline justify-between border-b border-border pb-6 last:border-b-0 group"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </div>
                <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap justify-end">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PaperWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10 text-background italic font-display">
        {children}
      </span>
      <span className="absolute inset-0 bg-foreground -rotate-1" />
      <svg
        className="absolute -bottom-1 left-0 w-full opacity-80"
        viewBox="0 0 300 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M2 8 Q 80 2, 150 6 T 298 4"
          stroke="oklch(0.62 0.20 295)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: { title: string; desc: string; tag: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${-y * 6}deg`);
    el.style.setProperty("--ry", `${x * 8}deg`);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    setHover(false);
  };

  return (
    <div className="perspective-deep">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={handleLeave}
        className="relative card-surface p-6 group overflow-hidden transition-all duration-300 hover:border-primary/50 min-h-[220px] flex flex-col justify-between"
        style={{
          transform:
            "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)",
          transformStyle: "preserve-3d",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: hover
              ? "radial-gradient(240px circle at var(--mx) var(--my), oklch(0.62 0.20 295 / 0.20), transparent 70%)"
              : "transparent",
          }}
        />

        <div className="flex items-start justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            0{index + 1}
          </span>
          <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 border border-border text-primary">
            {value.tag}
          </span>
        </div>

        <div style={{ transform: "translateZ(20px)" }}>
          <h3 className="text-2xl mb-2 tracking-tight group-hover:text-primary transition-colors">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
