import { Check } from "lucide-react";

const items = [
  "Soluções sob medida",
  "Código limpo e escalável",
  "Foco em resultado de negócio",
  "Integrações inteligentes",
  "Automação com IA",
  "Interface moderna e responsiva",
  "Visão de produto, não apenas desenvolvimento",
];

export function Differentials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Diferenciais</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Tecnologia com propósito e <span className="text-gradient">precisão</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Não entregamos apenas código. Entregamos soluções pensadas para resolver problemas reais, escalar com seu negócio e gerar valor mensurável.
            </p>
          </div>

          <div className="grid gap-3">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Check className="text-primary-foreground" size={18} />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
