import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Atendimento",
    title: "Atendente virtual no WhatsApp",
    desc: "Responde clientes na hora, qualifica leads e agenda reuniões — mesmo de madrugada e no fim de semana.",
  },
  {
    tag: "Vendas",
    title: "CRM que sua equipe usa de verdade",
    desc: "Pipeline simples, lembretes automáticos e relatórios claros. Sem campos inúteis, sem treinamento de uma semana.",
  },
  {
    tag: "Financeiro",
    title: "Controle financeiro descomplicado",
    desc: "Entradas, saídas e contas a pagar em um só lugar. Visão clara do caixa em qualquer dia do mês.",
  },
  {
    tag: "Operação",
    title: "Automação do dia a dia",
    desc: "Pedidos, notas, mensagens e planilhas conectados. O que antes levava horas, passa a acontecer sozinho.",
  },
  {
    tag: "Gestão",
    title: "Painel com os números do negócio",
    desc: "Vendas, atendimento, equipe — tudo em uma tela. Você abre, entende em 10 segundos e toma a decisão.",
  },
  {
    tag: "Marca",
    title: "Site que traz cliente",
    desc: "Página rápida, bonita e feita pra converter visitante em contato. Conectada ao seu WhatsApp e ao seu funil.",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-36 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="eyebrow mb-6">exemplos</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl headline-fade mt-6 mb-6 tracking-tight">
            Veja o que podemos fazer
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Alguns exemplos práticos de soluções que a SixCode entrega para
            empresas como a sua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 perspective-deep">
          {projects.map((p) => (
            <article
              key={p.title}
              className="tilt-card shine group relative card-surface rounded-2xl p-7 overflow-hidden cursor-pointer hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="text-[10px] uppercase tracking-widest text-primary px-2 py-1 rounded bg-primary/10">
                  {p.tag}
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
              <h3 className="text-2xl mb-3 tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
