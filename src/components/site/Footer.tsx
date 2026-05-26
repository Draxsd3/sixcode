import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <span className="inline-flex font-display font-bold text-2xl tracking-tight text-foreground px-4 py-2 rounded-2xl bg-black border border-white/10 shadow-[0_0_30px_-5px_rgba(0,0,0,0.8),0_0_60px_-10px_rgba(120,50,200,0.15)] mb-5">
              <span className="relative z-10">SIXCODE</span>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            </span>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              O padrão moderno para times que precisam de tecnologia sob medida.
              Sistemas, automações e IA para o seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">Produto</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#solucoes", label: "Soluções" },
                { href: "#processo", label: "Processo" },
                { href: "#projetos", label: "Projetos" },
                { href: "#sobre", label: "Sobre" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>contato@sixcode.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-primary" />
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 SixCode. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Todos os sistemas OK
            </span>
            <span>BR · UTC-3</span>
          </div>
        </div>

        <div className="relative mt-16 -mb-8 select-none pointer-events-none" aria-hidden>
          <h2 className="text-center text-[18vw] md:text-[14vw] font-display font-bold tracking-tighter leading-none headline-fade opacity-80">
            SIXCODE
          </h2>
        </div>
      </div>
    </footer>
  );
}
