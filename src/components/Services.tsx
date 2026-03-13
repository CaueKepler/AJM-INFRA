import { Link } from "react-router-dom";
import { ArrowRight, Search, HardHat, Truck, Waves, Construction, Anchor, LifeBuoy, Wrench, Cone, Tractor } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Search,
    title: "Perícias em Obras de Infraestrutura Portuária",
    description: "Emissão de laudos técnicos e avaliações estruturais em obras costeiras e portuárias, com análise de desempenho, patologias e conformidade técnica.",
    tag: "Perícias",
    slug: "pericias-infraestrutura-portuaria",
  },
  {
    icon: HardHat,
    title: "Supervisão e Fiscalização de Obras Costeiras e Portuárias",
    description: "Acompanhamento técnico especializado garantindo conformidade com projeto, normas técnicas e controle de qualidade executivo.",
    tag: "Supervisão",
    slug: "supervisao-fiscalizacao",
  },
  {
    icon: Truck,
    title: "Locação de Equipamentos Pesados",
    description: "Disponibilização de equipamentos para execução de obras portuárias, dragagem e infraestrutura pesada.",
    tag: "Locação",
    slug: "locacao-equipamentos",
  },
  {
    icon: Waves,
    title: "Inspeções de Infraestruturas Portuárias e Subaquáticas",
    description: "Inspeções técnicas acima e abaixo da linha d'água para avaliação estrutural, integridade e manutenção preventiva.",
    tag: "Inspeções",
    slug: "inspecoes-portuarias-subaquaticas",
  },
  {
    icon: Construction,
    title: "Construção de Trapiches, Píeres, Rampas e Decks",
    description: "Execução completa de estruturas de acesso e atracação, em aço e concreto, adaptadas às condições locais e operacionais.",
    tag: "Construção",
    slug: "construcao-trapiches-pieres",
  },
  {
    icon: Waves,
    title: "Apoio a Obras de Dragagem e Infraestrutura",
    description: "Suporte técnico e operacional em projetos de dragagem, contenção, fundações e estruturas marítimas.",
    tag: "Dragagem",
    slug: "apoio-dragagem-infraestrutura",
  },
  {
    icon: LifeBuoy,
    title: "Manutenção e Instalação de Sinalização Náutica",
    description: "Instalação, substituição e manutenção de balizamento fixo e flutuante conforme normas marítimas vigentes.",
    tag: "Sinalização",
    slug: "manutencao-sinalizacao-nautica",
  },
  {
    icon: Wrench,
    title: "Manutenção, Reparos e Instalação de Acessórios de Atracação",
    description: "Serviços especializados em defensas, cabeços, ganchos e sistemas de amarração.",
    tag: "Atracação",
    slug: "manutencao-acessorios-atracacao",
  },
  {
    icon: Cone,
    title: "Obras de Saneamento",
    description: "Execução de redes, drenagem e infraestrutura urbana associada a obras portuárias e industriais.",
    tag: "Saneamento",
    slug: "obras-saneamento",
  },
  {
    icon: Tractor,
    title: "Terraplanagem",
    description: "Movimentação de solo, preparação de base e infraestrutura para implantação de obras industriais e portuárias.",
    tag: "Terraplanagem",
    slug: "terraplanagem",
  },
];

export function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4">
        {/* Section header */}
        <div className={`mb-16 max-w-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="accent-line">
            <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
              O que fazemos
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-none tracking-tight">
              NOSSOS<br />
              <span className="text-brand">SERVIÇOS</span>
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={i}
                to={`/servicos/${service.slug}`}
                className={`group relative overflow-hidden bg-card border border-border hover:border-brand/40 transition-all duration-500 shadow-card hover:shadow-hover cursor-pointer block p-6 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : "0ms" }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Icon size={22} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Tag */}
                <div className="mb-3">
                  <span className="font-body text-[10px] font-bold tracking-widest uppercase text-brand bg-brand/10 px-2 py-0.5">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-foreground leading-tight mb-2 group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-brand font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  Saiba mais <ArrowRight size={14} />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand group-hover:w-full transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
