import { ChevronDown } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPort})` }}
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 tech-grid-dark opacity-40" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/40 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse-orange" />
            <span className="text-brand font-body text-sm font-semibold tracking-widest uppercase">
              Soluções em Infraestrutura Náutica e Portuária
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-white leading-none mb-6 animate-fade-in-up">
            <span className="block text-6xl md:text-8xl tracking-tight">TECNOLOGIA EM</span>
            <span className="block text-6xl md:text-8xl tracking-tight text-brand">INFRAESTRUTURA</span>
            <span className="block text-6xl md:text-8xl tracking-tight">NÁUTICA E</span>
            <span className="block text-6xl md:text-8xl tracking-tight">PORTUÁRIA</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in animate-delay-300">
            <div className="h-0.5 w-16 bg-brand" />
            <div className="h-0.5 w-4 bg-brand/40" />
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
            <a
              href="#servicos"
              className="font-display font-bold text-lg uppercase tracking-widest px-8 py-4 bg-brand hover:bg-brand-dark text-white transition-all duration-300 shadow-orange hover:shadow-hover hover:-translate-y-0.5"
            >
              Nossos Serviços
            </a>
            <a
              href="#contato"
              className="font-display font-bold text-lg uppercase tracking-widest px-8 py-4 border-2 border-white/40 text-white hover:border-brand hover:text-brand transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-float">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute top-1/3 right-8 flex flex-col gap-2 opacity-40 hidden xl:flex">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-0.5 bg-brand transition-all"
            style={{ width: i === 2 ? "32px" : i === 3 ? "48px" : "16px" }}
          />
        ))}
      </div>
    </section>
  );
}
