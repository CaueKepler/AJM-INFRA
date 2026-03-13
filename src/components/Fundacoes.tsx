import { Link } from "react-router-dom";
import { ArrowRight, Hammer, CircleDot, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fundacoes = [
  {
    icon: Hammer,
    name: "Bate Estacas",
    description: "Execução de cravação de estacas em solo e ambiente submerso, utilizando equipamentos adequados para diferentes perfis geotécnicos e condições operacionais.",
    application: "Píeres, cais, pontes, trapiches, contenções, galpões industriais e estruturas pesadas.",
  },
  {
    icon: CircleDot,
    name: "Estaca Escavada",
    description: "Execução de estacas moldadas \"in loco\", com perfuração mecânica e concretagem controlada, proporcionando elevada capacidade de carga e adaptação a diferentes tipos de solo.",
    application: "Edificações, estruturas industriais, fundações portuárias e obras de infraestrutura.",
  },
  {
    icon: Layers,
    name: "Estaca Raiz",
    description: "Estaca executada por perfuração rotativa com injeção de argamassa sob pressão, ideal para solos resistentes, rocha ou áreas com restrição de acesso.",
    application: "Obras portuárias, reforço estrutural, contenções, retrofit e fundações especiais.",
  },
];

const infraUrbana = [
  "Muros de Arrimo",
  "Saneamento",
  "Terraplanagem",
  "Loteamentos",
  "Barragens",
  "Enrocamentos",
];

export function Fundacoes() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="fundacoes" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div ref={ref} className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`mb-16 max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="accent-line">
            <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
              Obras Terrestres e Marítimas
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-none tracking-tight">
              <span className="text-brand">FUNDAÇÕES</span>
            </h2>
          </div>
          <p className="font-body text-muted-foreground text-sm leading-relaxed mt-4 max-w-lg">
            Execução de fundações profundas para obras terrestres e marítimas, garantindo estabilidade, capacidade de carga e segurança estrutural conforme projeto geotécnico. Atuamos em ambientes urbanos, industriais, portuários e costeiros.
          </p>
        </div>

        {/* Fundações grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {fundacoes.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative bg-card border border-border hover:border-brand/40 transition-all duration-500 shadow-card hover:shadow-hover p-6 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 150 + 300}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-brand/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative">
                  <div className="w-14 h-14 bg-brand/10 border border-brand/20 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Icon size={24} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="font-body text-xs text-brand/70">
                    <span className="font-semibold text-brand">Aplicação:</span> {item.application}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Infraestrutura Urbana */}
        <div className={`bg-navy p-8 relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}>
          <div className="absolute inset-0 tech-grid-dark opacity-40" />
          <div className="relative">
            <h3 className="font-display font-black text-2xl text-white mb-6 uppercase">
              Infraestrutura <span className="text-brand">Urbana</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {infraUrbana.map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 px-4 py-3 text-center hover:border-brand/40 transition-all duration-300">
                  <span className="font-body text-sm text-white/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
