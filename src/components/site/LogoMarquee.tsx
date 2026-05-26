const logos = [
  "Petrobras", "Itaú", "Magalu", "Stone", "Nubank", "Vivo",
  "iFood", "Localiza", "B3", "Ambev", "Natura", "XP",
];

export function LogoMarquee() {
  return (
    <section className="py-20 lg:py-24 border-y border-border bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Construído com as práticas dos melhores times de produto.{" "}
          <span className="text-foreground">De startups em ascensão a grandes empresas.</span>
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={`${l}-${i}`}
              className="flex items-center justify-center mx-10 shrink-0"
            >
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-muted-foreground/60 hover:text-foreground transition-colors">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
