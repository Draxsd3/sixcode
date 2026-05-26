import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
      <div
        className="absolute inset-0 bg-primary/10 blur-[160px] pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 grid-bg opacity-20 pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="relative bg-foreground text-background p-6 sm:p-10 md:p-16 overflow-hidden">
          {/* big bg word */}
          <div
            className="absolute -bottom-10 -right-6 font-display text-[22vw] md:text-[18vw] leading-none font-semibold text-background/[0.04] select-none pointer-events-none"
            aria-hidden
          >
            SIXCODE
          </div>

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>vaga aberta · resposta em 24h</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[0.95] mb-6">
                Agende um <span className="text-primary">diagnóstico</span>
                <br />
                gratuito de 30 min.
              </h2>
              <p className="text-background/70 text-base sm:text-lg max-w-xl">
                Sem compromisso. A gente entende seu problema, propõe uma
                abordagem técnica e te entrega um caminho claro — mesmo que
                você não feche com a gente.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center justify-between gap-3 px-6 py-5 bg-primary text-primary-foreground font-medium hover:bg-accent transition-all"
              >
                Agendar diagnóstico
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 px-6 py-5 border border-background/20 hover:border-primary hover:text-primary transition-all"
              >
                Chamar no WhatsApp
                <span className="font-mono text-[10px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
