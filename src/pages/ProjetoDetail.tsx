import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Camera, X, LifeBuoy, Waves, Construction, Ship, Anchor, Link2, HardHat } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projetosData: Record<string, {
  title: string;
  tag: string;
  icon: any;
  description: string;
  fullDescription: string;
  highlights: string[];
  gallery: { src: string; caption: string }[];
}> = {
  "sinalizacao-nautica": {
    title: "Sinalização Náutica",
    tag: "Sinalização",
    icon: LifeBuoy,
    description: "Projetos de balizamento fixo e flutuante conforme normas marítimas vigentes.",
    fullDescription: "Desenvolvimento de projetos de balizamento fixo e flutuante conforme normas marítimas vigentes, contemplando dimensionamento estrutural, fundações, sistemas de ancoragem e análise operacional. Nossos projetos seguem rigorosamente as normas da Marinha do Brasil e padrões internacionais IALA.",
    highlights: [
      "Balizamento fixo e flutuante",
      "Dimensionamento estrutural",
      "Sistemas de ancoragem",
      "Análise operacional completa",
      "Conformidade com normas IALA",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Projeto de balizamento" },
      { src: "/placeholder.svg", caption: "Sinalização instalada" },
      { src: "/placeholder.svg", caption: "Boia de sinalização" },
    ],
  },
  "dragagem": {
    title: "Dragagem",
    tag: "Dragagem",
    icon: Waves,
    description: "Projetos de dragagem com estudos batimétricos e especificações técnicas.",
    fullDescription: "Elaboração de projetos de dragagem com estudos batimétricos, definição de volumes, áreas de bota-fora e especificações técnicas para execução segura e eficiente. Contemplamos todas as etapas desde o levantamento até o projeto executivo.",
    highlights: [
      "Estudos batimétricos detalhados",
      "Definição precisa de volumes",
      "Áreas de bota-fora otimizadas",
      "Especificações técnicas completas",
      "Projeto executivo de dragagem",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Estudo batimétrico" },
      { src: "/placeholder.svg", caption: "Operação de dragagem" },
      { src: "/placeholder.svg", caption: "Projeto executivo" },
    ],
  },
  "trapiches": {
    title: "Trapiches",
    tag: "Trapiches",
    icon: Construction,
    description: "Projetos estruturais completos em aço e concreto para acesso e atracação.",
    fullDescription: "Projetos estruturais completos em aço e concreto para acesso e atracação, considerando cargas operacionais, ação de marés, correntes e impacto de embarcações. Desenvolvemos soluções personalizadas para cada condição portuária.",
    highlights: [
      "Estruturas em aço e concreto",
      "Análise de cargas operacionais",
      "Consideração de marés e correntes",
      "Simulação de impacto",
      "Projetos personalizados",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Projeto de trapiche" },
      { src: "/placeholder.svg", caption: "Trapiche em construção" },
      { src: "/placeholder.svg", caption: "Trapiche finalizado" },
    ],
  },
  "moles": {
    title: "Moles",
    tag: "Moles",
    icon: Ship,
    description: "Projetos de estruturas de proteção costeira e dissipação de energia das ondas.",
    fullDescription: "Projetos de estruturas de proteção costeira para dissipação de energia das ondas, controle de assoreamento e proteção de canais e áreas portuárias. Utilizamos modelagem computacional avançada para otimizar o desempenho das estruturas.",
    highlights: [
      "Dissipação de energia de ondas",
      "Controle de assoreamento",
      "Proteção de canais portuários",
      "Modelagem computacional",
      "Projetos de alta complexidade",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Projeto de mole" },
      { src: "/placeholder.svg", caption: "Mole de proteção costeira" },
      { src: "/placeholder.svg", caption: "Estrutura de proteção" },
    ],
  },
  "pieres": {
    title: "Píeres",
    tag: "Píeres",
    icon: Anchor,
    description: "Projetos de píeres fixos ou flutuantes com fundações profundas.",
    fullDescription: "Desenvolvimento de projetos de píeres fixos ou flutuantes, com dimensionamento de fundações profundas, superestrutura e sistemas de atracação. Projetos completos desde a concepção até o detalhamento executivo.",
    highlights: [
      "Píeres fixos e flutuantes",
      "Fundações profundas dimensionadas",
      "Superestrutura detalhada",
      "Sistemas de atracação integrados",
      "Detalhamento executivo completo",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Projeto de píer" },
      { src: "/placeholder.svg", caption: "Píer em construção" },
      { src: "/placeholder.svg", caption: "Píer finalizado" },
    ],
  },
  "atracacao": {
    title: "Atracação",
    tag: "Atracação",
    icon: Link2,
    description: "Projetos técnicos de sistemas de amarração e absorção de impacto.",
    fullDescription: "Projetos técnicos de sistemas de amarração e absorção de impacto, incluindo defensas, cabeços, ganchos de desengate rápido e dispositivos estruturais associados. Soluções integradas para garantir a segurança das operações de atracação.",
    highlights: [
      "Sistemas de amarração completos",
      "Absorção de impacto otimizada",
      "Dimensionamento de defensas",
      "Ganchos de desengate rápido",
      "Dispositivos estruturais associados",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Sistema de atracação" },
      { src: "/placeholder.svg", caption: "Projeto de defensas" },
      { src: "/placeholder.svg", caption: "Cabeços de amarração" },
    ],
  },
  "infraestrutura-portuaria": {
    title: "Infraestrutura Portuária",
    tag: "Infra. Portuária",
    icon: HardHat,
    description: "Projetos integrados para implantação, ampliação ou modernização de estruturas portuárias.",
    fullDescription: "Projetos integrados para implantação, ampliação ou modernização de estruturas portuárias, contemplando fundações, superestrutura, drenagem, terraplenagem e sistemas auxiliares. Soluções completas de engenharia para todo o ciclo de vida portuário.",
    highlights: [
      "Implantação de estruturas portuárias",
      "Ampliação e modernização",
      "Fundações e superestrutura",
      "Drenagem e terraplenagem",
      "Sistemas auxiliares integrados",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Infraestrutura portuária" },
      { src: "/placeholder.svg", caption: "Ampliação de terminal" },
      { src: "/placeholder.svg", caption: "Modernização de porto" },
    ],
  },
};

function PhotoGallery({ gallery }: { gallery: { src: string; caption: string }[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Camera size={20} className="text-brand" />
              <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase">Galeria</span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground uppercase">
              FOTOS DO <span className="text-brand">PROJETO</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-brand/40" />
              <div className="h-1 w-8 bg-brand rounded-full" />
              <div className="h-px w-12 bg-brand/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gallery.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] bg-muted border border-border overflow-hidden hover:border-brand/40 transition-all duration-300 cursor-pointer"
              >
                <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <Camera size={28} className="text-brand mx-auto mb-2" />
                    <span className="font-body text-white text-sm font-medium">{photo.caption}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>
          <p className="text-center font-body text-muted-foreground text-sm mt-8">Clique nas imagens para ampliar</p>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : gallery.length - 1); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-brand transition-colors"
          >
            <ArrowLeft size={36} />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[lightbox].src} alt={gallery[lightbox].caption} className="max-w-full max-h-[75vh] object-contain border-2 border-white/10" />
            <p className="text-center font-body text-white/80 text-sm mt-4">
              {gallery[lightbox].caption
              }
              <span className="text-white/40 ml-3">{lightbox + 1} / {gallery.length}</span>
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < gallery.length - 1 ? lightbox + 1 : 0); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-brand transition-colors"
          >
            <ArrowRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}

export default function ProjetoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const projeto = slug ? projetosData[slug] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!projeto) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-foreground mb-4">Projeto não encontrado</h1>
          <a href="/" className="text-brand font-body font-semibold hover:underline">Voltar ao início</a>
        </div>
      </div>
    );
  }

  const Icon = projeto.icon;
  const otherProjetos = Object.entries(projetosData)
    .filter(([key]) => key !== slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[380px] flex items-end bg-navy">
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        <div className="relative container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-body mb-8">
            <a href="/" className="text-white/50 hover:text-white transition-colors">Início</a>
            <span className="text-white/30">/</span>
            <a href="/#projetos" className="text-white/50 hover:text-white transition-colors">Projetos</a>
            <span className="text-white/30">/</span>
            <span className="text-brand font-semibold">{projeto.tag}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-brand/20 border border-brand/40 flex items-center justify-center">
              <Icon size={28} className="text-brand" />
            </div>
            <div className="inline-flex items-center bg-brand px-3 py-1">
              <span className="font-body text-xs font-bold tracking-widest uppercase text-white">{projeto.tag}</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight max-w-3xl">
            {projeto.title.toUpperCase()}
          </h1>
          <p className="font-body text-white/60 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            {projeto.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="accent-line">
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground leading-tight mb-6">
                SOBRE O <span className="text-brand">PROJETO</span>
              </h2>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">{projeto.fullDescription}</p>

            <ul className="space-y-3 mb-12">
              {projeto.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground text-sm">
                  <CheckCircle size={18} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="bg-navy p-8 relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-dark opacity-40" />
              <div className="relative text-center">
                <h3 className="font-display font-bold text-2xl text-white mb-3">Precisa deste projeto?</h3>
                <p className="font-body text-white/60 text-sm mb-6">Entre em contato para discutir seu projeto.</p>
                <a
                  href="mailto:contato@ajminfra.com.br"
                  className="inline-flex items-center gap-2 bg-brand text-white font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-brand-dark transition-all duration-300"
                >
                  Solicitar Orçamento <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery gallery={projeto.gallery} />

      {/* Other Projects */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">Explore mais</span>
            <h3 className="font-display font-black text-3xl text-white uppercase">
              Outros <span className="text-brand">Projetos</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherProjetos.map(([key, p]) => (
              <Link
                key={key}
                to={`/projetos/${key}`}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand/40 transition-all duration-300 p-5"
              >
                <div className="inline-flex items-center bg-brand/20 px-2 py-0.5 mb-3">
                  <span className="font-body text-[10px] font-bold tracking-widest uppercase text-brand">{p.tag}</span>
                </div>
                <h4 className="font-display font-bold text-white text-base leading-tight group-hover:text-brand transition-colors mb-2">
                  {p.title}
                </h4>
                <p className="font-body text-white/40 text-xs line-clamp-2 mb-3">{p.description}</p>
                <div className="flex items-center gap-2 text-brand font-body text-xs font-semibold">
                  Ver detalhes <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/#projetos" className="inline-flex items-center gap-2 text-white/50 hover:text-brand transition-colors font-body text-sm">
              <ArrowLeft size={14} /> Voltar para todos os projetos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
