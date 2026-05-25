import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-surface p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl mb-5">
              Pronto para construir sua próxima <span className="text-gradient">solução digital?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fale com a SixCode e descubra como a tecnologia certa pode acelerar sua operação.
            </p>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all"
            >
              Solicitar proposta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
