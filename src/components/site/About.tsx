import { useRef, useState } from "react";

const values = [
  {
    title: "Sob medida",
    desc: "Cada projeto é único e construído para resolver um problema real.",
    icon: "◆",
  },
  {
    title: "Código limpo",
    desc: "Padrões sólidos, manutenção simples e arquitetura preparada para escalar.",
    icon: "▣",
  },
  {
    title: "Foco em resultado",
    desc: "Visão de produto e negócio, não apenas entrega técnica.",
    icon: "▲",
  },
  {
    title: "IA aplicada",
    desc: "Inteligência artificial usada onde gera ganho real de eficiência.",
    icon: "✦",
  },
];

const stats = [
  { value: "100%", label: "Sob medida" },
  { value: "24/7", label: "Suporte ativo" },
  { value: "∞", label: "Iteração contínua" },
];

const manifesto = [
  "IDEIA",
  "ESTRATÉGIA",
  "DESIGN",
  "CÓDIGO",
  "AUTOMAÇÃO",
  "IA",
  "PRODUÇÃO",
  "ESCALA",
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 lg:py-36 border-b border-border overflow-hidden"
    >
      {/* ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[160px] rounded-full pointer-events-none"
        aria-hidden
      />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" aria-hidden />

      <div className="container relative mx-auto px-6">
        {/* eyebrow row */}
        <div className="flex items-center justify-between mb-12">
          <span className="eyebrow">sobre</span>
          <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="w-8 h-px bg-border" />
            <span>manifesto · v1.0</span>
          </div>
        </div>

        {/* HERO STATEMENT — oversized editorial */}
        <div className="relative mb-20 lg:mb-28">
          <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.04em] font-semibold">
            <span className="block text-muted-foreground/40">Tiramos ideias</span>
            <span className="block">
              <span className="text-muted-foreground/40">do </span>
              <span className="relative inline-block">
                <span className="headline-fade italic font-display">papel</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 80 2, 150 6 T 298 4"
                    stroke="oklch(0.62 0.20 295)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
            <span className="block">
              <span className="text-muted-foreground/40">e colocamos em </span>
              <span className="text-gradient">produção.</span>
            </span>
          </h2>

          {/* floating side badge */}
          <div className="hidden lg:flex absolute top-0 right-0 flex-col items-end gap-2">
            <div className="pill">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest">
                ativo desde 2023
              </span>
            </div>
          </div>
        </div>

        {/* MANIFESTO MARQUEE */}
        <div className="relative mb-20 lg:mb-28 -mx-6 border-y border-border py-6 overflow-hidden bg-surface/30">
          <div className="marquee gap-12 items-center text-4xl md:text-6xl tracking-tight">
            {[...manifesto, ...manifesto].map((word, i) => (
              <span key={i} className="flex items-center gap-12 shrink-0">
                <span
                  className={
                    i % 2 === 0
                      ? "text-foreground/90"
                      : "text-transparent [-webkit-text-stroke:1px_oklch(0.62_0.015_280)]"
                  }
                >
                  {word}
                </span>
                <span className="text-primary text-2xl">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Manifesto text */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              <span>quem somos</span>
            </div>
            <p className="text-2xl md:text-3xl leading-tight tracking-tight text-foreground mb-8">
              A SixCode nasceu para transformar{" "}
              <span className="text-muted-foreground">ideias</span> em{" "}
              <span className="text-primary">soluções digitais reais</span>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Unimos desenvolvimento, automação e inteligência artificial para
              criar sistemas úteis, escaláveis e alinhados às necessidades de
              cada negócio.
            </p>

            {/* stats strip */}
            <div className="grid grid-cols-3 border-t border-border">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="py-6 border-r border-border last:border-r-0 first:pr-4 [&:not(:first-child)]:px-4"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values — interactive 3D tilt cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: { title: string; desc: string; icon: string };
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
    el.style.setProperty("--rx", `${-y * 8}deg`);
    el.style.setProperty("--ry", `${x * 10}deg`);
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
        className="relative card-surface rounded-sm p-7 group overflow-hidden transition-all duration-300 hover:border-primary/50"
        style={{
          transform:
            "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)",
          transformStyle: "preserve-3d",
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* cursor spotlight */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: hover
              ? "radial-gradient(280px circle at var(--mx) var(--my), oklch(0.62 0.20 295 / 0.18), transparent 70%)"
              : "transparent",
          }}
        />

        {/* corner index */}
        <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
          0{index + 1} / 04
        </div>

        <div
          className="relative"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="text-3xl text-primary mb-6 leading-none">
            {value.icon}
          </div>
          <h3 className="text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {value.desc}
          </p>
        </div>

        {/* hover arrow */}
        <div
          className="absolute bottom-5 right-5 w-8 h-8 flex items-center justify-center border border-border rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2"
          style={{ transform: "translateZ(40px)" }}
        >
          →
        </div>
      </div>
    </div>
  );
}
