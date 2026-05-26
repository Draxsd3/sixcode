import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sixcode-logo.png";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-3 pl-5 py-2 transition-all duration-300 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border border-border shadow-lg"
              : "bg-transparent"
          }`}
        >
          <a href="#inicio" className="flex items-center shrink-0">
            <img src={logo} alt="SixCode" className="h-8 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#contato"
              className="inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Solicitar proposta
            </a>
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground py-2.5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium"
              >
                Solicitar proposta
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
