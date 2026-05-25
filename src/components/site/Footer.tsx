import logo from "@/assets/sixcode-logo.png";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="SixCode" className="h-14 w-auto mb-5" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Desenvolvemos sistemas, automações e soluções com IA para empresas que querem escalar com tecnologia.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "#solucoes", label: "Soluções" },
                { href: "#processo", label: "Como Funciona" },
                { href: "#projetos", label: "Projetos" },
                { href: "#sobre", label: "Sobre" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground hover:text-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm text-foreground">
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contato@sixcode.com.br</li>
              <li className="flex items-center gap-2"><MessageCircle size={14} className="text-primary" /> WhatsApp</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 SixCode. Todos os direitos reservados.</p>
          <p className="font-mono">{"</> built with precision"}</p>
        </div>
      </div>
    </footer>
  );
}
