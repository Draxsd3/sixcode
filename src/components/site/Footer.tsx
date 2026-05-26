import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="sm:col-span-2">
            <span className="inline-flex font-display font-bold text-3xl tracking-tight chrome-text leading-none mb-5">
              SIXCODE
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

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-muted-foreground">
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
