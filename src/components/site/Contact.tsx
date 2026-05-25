import { useState } from "react";
import { Send } from "lucide-react";
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
    <section id="contato" className="py-24 lg:py-32 bg-gradient-surface relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Contato</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Vamos conversar sobre seu <span className="text-gradient">projeto</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Conte-nos sobre o desafio do seu negócio. Em breve nossa equipe entrará em contato para apresentar uma proposta sob medida.
            </p>
            <div className="space-y-4">
              {[
                { l: "Resposta", v: "Em até 24h úteis" },
                { l: "Proposta", v: "Personalizada para seu contexto" },
                { l: "Atendimento", v: "100% consultivo" },
              ].map((i) => (
                <div key={i.l} className="flex justify-between py-3 border-b border-border">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{i.l}</span>
                  <span className="text-foreground font-medium">{i.v}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="p-8 rounded-2xl bg-surface-elevated border border-border shadow-card space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Nome" required />
              <Field name="company" label="Empresa" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Field name="email" label="E-mail" type="email" required />
              <Field name="whatsapp" label="WhatsApp" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Tipo de solução
              </label>
              <select
                name="type"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
                defaultValue=""
              >
                <option value="" disabled>Selecione uma opção</option>
                <option>Sistema web</option>
                <option>Automação de processos</option>
                <option>Integração com APIs</option>
                <option>Inteligência Artificial</option>
                <option>Dashboard / BI</option>
                <option>Landing page / Plataforma</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground resize-none"
                placeholder="Conte um pouco sobre o seu projeto..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar solicitação"}
              {!loading && <Send size={16} />}
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
        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none text-foreground"
      />
    </div>
  );
}
