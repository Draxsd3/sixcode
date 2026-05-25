import icon from "@/assets/sixcode-icon.png";

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <img src={icon} alt="" className="w-64 h-auto animate-float opacity-90" />
          </div>
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">// Sobre</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-6">
              Tiramos ideias do papel e <span className="text-gradient">colocamos em produção</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A SixCode nasceu para ajudar empresas a tirarem ideias do papel e transformá-las em soluções digitais reais.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unimos desenvolvimento, automação e inteligência artificial para criar sistemas úteis, escaláveis e alinhados às necessidades de cada negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
