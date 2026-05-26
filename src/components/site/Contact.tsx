import { useState, useRef } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Solicitação enviada!", {
        description: "Em breve entraremos em contato.",
      });
    }, 800);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x * 10).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  };

  return (
    <section id="contato" className="py-20 sm:py-24 lg:py-32 border-b border-border relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] max-w-[120vw] h-[700px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Contato</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mt-5 mb-6 tracking-tight">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Conte sobre o desafio do seu negócio. Em até 24h úteis nossa
              equipe entra em contato com uma proposta sob medida.
            </p>

            <div className="space-y-4 mb-10">
              <a href="mailto:contato@sixcode.com.br" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" />
                contato@sixcode.com.br
              </a>
              <a href="#" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <MessageCircle size={18} className="text-primary" />
                WhatsApp
              </a>
            </div>

            <div className="border-t border-border pt-6 space-y-3">
              {[
                { l: "Resposta", v: "Em até 24h úteis" },
                { l: "Proposta", v: "Personalizada" },
                { l: "Atendimento", v: "Consultivo" },
              ].map((i) => (
                <div key={i.l} className="flex justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{i.l}</span>
                  <span className="text-foreground text-sm">{i.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D form */}
          <div className="lg:col-span-7 perspective-deep">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="contact-3d group relative"
              style={{
                transform:
                  "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                transformStyle: "preserve-3d",
                transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* depth layer behind */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl"
                style={{ transform: "translateZ(-80px) scale(0.92)" }}
              />
              {/* gradient border frame */}
              <div
                aria-hidden
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/60 via-white/10 to-primary/30 opacity-70"
                style={{ transform: "translateZ(-1px)" }}
              />

              <form
                onSubmit={onSubmit}
                className="relative rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 space-y-5 overflow-hidden"
              >
                {/* cursor spotlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(400px circle at var(--mx) var(--my), oklch(0.62 0.20 295 / 0.18), transparent 60%)",
                  }}
                />




                <div className="grid md:grid-cols-2 gap-5" style={{ transform: "translateZ(30px)" }}>
                  <Field name="name" label="Nome" required />
                  <Field name="company" label="Empresa" />
                </div>
                <div className="grid md:grid-cols-2 gap-5" style={{ transform: "translateZ(30px)" }}>
                  <Field name="email" label="E-mail" type="email" required />
                  <Field name="whatsapp" label="WhatsApp" />
                </div>
                <div style={{ transform: "translateZ(25px)" }}>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Tipo de solução
                  </label>
                  <select
                    name="type"
                    className="w-full px-4 py-3 rounded-md bg-background/60 border border-white/10 focus:border-primary focus:outline-none text-foreground transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione</option>
                    <option>Sistema web</option>
                    <option>Automação de processos</option>
                    <option>Integração com APIs</option>
                    <option>Inteligência Artificial</option>
                    <option>Dashboard / BI</option>
                    <option>Landing page</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div style={{ transform: "translateZ(25px)" }}>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md bg-background/60 border border-white/10 focus:border-primary focus:outline-none text-foreground resize-none transition-colors"
                    placeholder="Conte um pouco sobre o seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{ transform: "translateZ(60px)" }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all disabled:opacity-60 shadow-[0_10px_30px_-10px_oklch(0.62_0.20_295/0.6)] hover:shadow-[0_20px_50px_-10px_oklch(0.62_0.20_295/0.8)]"
                >
                  {loading ? "Enviando..." : "Enviar solicitação"}
                  {!loading && <ArrowRight size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
        {label}{required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-md bg-background/60 border border-white/10 focus:border-primary focus:outline-none text-foreground transition-colors"
      />
    </div>
  );
}
