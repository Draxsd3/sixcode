import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

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

  return (
    <section id="contato" className="py-24 lg:py-32 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow mb-5">Contato</span>
            <h2 className="text-4xl md:text-5xl mt-5 mb-6">
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

          <form onSubmit={onSubmit} className="lg:col-span-7 border border-border bg-background p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="name" label="Nome" required />
              <Field name="company" label="Empresa" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field name="email" label="E-mail" type="email" required />
              <Field name="whatsapp" label="WhatsApp" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Tipo de solução
              </label>
              <select
                name="type"
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none text-foreground"
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
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none text-foreground resize-none"
                placeholder="Conte um pouco sobre o seu projeto..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar solicitação"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
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
        className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none text-foreground"
      />
    </div>
  );
}
