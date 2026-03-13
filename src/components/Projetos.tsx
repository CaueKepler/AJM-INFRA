import { Link } from "react-router-dom";
import { ArrowRight, LifeBuoy, Waves, Construction, Ship, Anchor, Link2, HardHat } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projetos = [
  {
    icon: LifeBuoy,
    name: "Sinalização Náutica",
    slug: "sinalizacao-nautica",
    description: "Desenvolvimento de projetos de balizamento fixo e flutuante conforme normas marítimas vigentes, contemplando dimensionamento estrutural, fundações, sistemas de ancoragem e análise operacional.",
  },
  {
    icon: Waves,
    name: "Dragagem",
    slug: "dragagem",
    description: "Elaboração de projetos de dragagem com estudos batimétricos, definição de volumes, áreas de bota-fora e especificações técnicas para execução segura e eficiente.",
  },
  {
    icon: Construction,
    name: "Trapiches",
    slug: "trapiches",
    description: "Projetos estruturais completos em aço e concreto para acesso e atracação, considerando cargas operacionais, ação de marés, correntes e impacto de embarcações.",
  },
  {
    icon: Ship,
    name: "Moles",
    slug: "moles",
    description: "Projetos de estruturas de proteção costeira para dissipação de energia das ondas, controle de assoreamento e proteção de canais e áreas portuárias.",
  },
  {
    icon: Anchor,
    name: "Píeres",
    slug: "pieres",
    description: "Desenvolvimento de projetos de píeres fixos ou flutuantes, com dimensionamento de fundações profundas, superestrutura e sistemas de atracação.",
  },
  {
    icon: Link2,
    name: "Atracação",
    slug: "atracacao",
    description: "Projetos técnicos de sistemas de amarração e absorção de impacto, incluindo defensas, cabeços, ganchos de desengate rápido e dispositivos estruturais associados.",
  },
  {
    icon: HardHat,
    name: "Infraestrutura Portuária",
    slug: "infraestrutura-portuaria",
    description: "Projetos integrados para implantação, ampliação ou modernização de estruturas portuárias, contemplando fundações, superestrutura, drenagem, terraplenagem e sistemas auxiliares.",
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

export function Projetos() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projetos" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
            Engenharia Especializada
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-white leading-none tracking-tight mb-4">
            NOSSOS <span className="text-brand">PROJETOS</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-brand/40" />
            <div className="h-1 w-8 bg-brand rounded-full" />
            <div className="h-px w-12 bg-brand/40" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projetos.map((projeto, i) => {
            const Icon = projeto.icon;
            return (
              <Link
                key={i}
                to={`/projetos/${projeto.slug}`}
                className={`group relative bg-white/5 border border-white/10 hover:border-brand/60 hover:bg-white/8 transition-all duration-400 p-6 overflow-hidden block w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative">
                  <div className="w-12 h-12 bg-brand/15 border border-brand/30 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Icon size={22} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {projeto.name}
                  </h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed mb-3">
                    {projeto.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    Ver detalhes <ArrowRight size={14} />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand/0 group-hover:border-brand/60 transition-all duration-300" />
              </Link>
            );
          })}
        </div>

        {/* Infraestrutura Urbana */}
        <div className={`bg-white/5 border border-white/10 p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}>
          <h3 className="font-display font-bold text-xl text-white mb-4 uppercase">
            Projetos de Infraestrutura <span className="text-brand">Urbana</span>
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
    </section>
  );
}
