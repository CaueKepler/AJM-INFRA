import { Link } from "react-router-dom";
import { ArrowRight, Shield, Anchor, Link2, Package, Wrench } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const products = [
  {
    icon: Shield,
    name: "Defensas",
    slug: "defensas",
    types: ["Supercelular", "Modular Pi", "Tipo D", "Cilíndrica", "Pneumática", "Cônica", "Arco"],
    description: "Soluções para proteção estrutural de píeres, cais e embarcações, projetadas para absorção de impacto e alta durabilidade em ambiente marinho.",
    application: "Portos, terminais, marinas e estruturas de atracação.",
  },
  {
    icon: Anchor,
    name: "Cabeços de Amarração",
    slug: "cabecos-de-amarracao",
    types: [],
    description: "Equipamentos robustos para amarração segura de embarcações, fabricados para suportar elevadas cargas de tração e condições severas de operação.",
    application: "Portos organizados, terminais privados e estruturas costeiras.",
    extra: "Cabeços de amarração de 2T até 500T. Moldes padrões ou fabricações sob demanda.",
  },
  {
    icon: Link2,
    name: "Ganchos de Desengate Rápido",
    slug: "ganchos-de-desengate-rapido",
    types: [],
    description: "Sistema seguro e eficiente para amarração com liberação controlada, aumentando a segurança operacional em operações portuárias.",
    application: "Berços de atracação e terminais industriais.",
  },
  {
    icon: Package,
    name: "Pontões de Aço",
    slug: "pontoes-de-aco",
    types: [],
    description: "Estruturas flutuantes de alta resistência, projetadas para operações portuárias, apoio logístico e infraestrutura temporária ou permanente.",
    application: "Apoio de obras, dragagem, transporte e operações marítimas.",
  },
  {
    icon: Wrench,
    name: "Acessórios de Atracação",
    slug: "acessorios-de-atracacao",
    types: [],
    description: "Fornecimento e instalação de componentes para sistemas completos de atracação, garantindo segurança estrutural e eficiência operacional.",
    application: "",
  },
];

export function Products() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="produtos" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-brand/8 pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
            Linha Completa
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight mb-4">
            NOSSOS <span className="text-brand">PRODUTOS</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-brand/40" />
            <div className="h-1 w-8 bg-brand rounded-full" />
            <div className="h-px w-12 bg-brand/40" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <Link
                key={i}
                to={`/produtos/${product.slug}`}
                className={`group relative bg-white/5 border border-white/10 hover:border-brand/60 hover:bg-white/8 transition-all duration-400 p-6 cursor-pointer overflow-hidden block w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 100 + 200}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="relative mb-5">
                  <div className="w-14 h-14 bg-brand/15 border border-brand/30 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Icon size={24} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display font-bold text-xl text-white leading-tight mb-3 group-hover:text-brand transition-colors duration-300">
                  {product.name}
                </h3>

                {product.types.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.types.map((type) => (
                      <span key={type} className="font-body text-xs text-white/50 bg-white/5 border border-white/10 px-2 py-0.5">
                        {type}
                      </span>
                    ))}
                  </div>
                )}

                <p className="font-body text-sm text-white/50 leading-relaxed mb-2">{product.description}</p>

                {product.application && (
                  <p className="font-body text-xs text-brand/70 leading-relaxed">
                    <span className="font-semibold text-brand">Aplicação:</span> {product.application}
                  </p>
                )}

                {"extra" in product && product.extra && (
                  <p className="font-body text-xs text-white/40 leading-relaxed mt-2 border-t border-white/10 pt-2">
                    {product.extra}
                  </p>
                )}

                <div className="flex items-center gap-2 text-brand font-body text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  Ver detalhes <ArrowRight size={14} />
                </div>

                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand/0 group-hover:border-brand/60 transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
