import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Camera, X, Shield, Anchor, Link2, Package, Wrench } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const productsData: Record<string, {
  title: string;
  tag: string;
  icon: any;
  description: string;
  fullDescription: string;
  highlights: string[];
  application: string;
  extra?: string;
  types?: string[];
  gallery: { src: string; caption: string }[];
}> = {
  "defensas": {
    title: "Defensas",
    tag: "Defensas",
    icon: Shield,
    description: "Soluções para proteção estrutural de píeres, cais e embarcações.",
    fullDescription: "Soluções para proteção estrutural de píeres, cais e embarcações, projetadas para absorção de impacto e alta durabilidade em ambiente marinho. Trabalhamos com diversas configurações para atender a diferentes portes de embarcações e condições operacionais.",
    application: "Portos, terminais, marinas e estruturas de atracação.",
    types: ["Supercelular", "Modular Pi", "Tipo D", "Cilíndrica", "Pneumática", "Cônica", "Arco"],
    highlights: [
      "Alta capacidade de absorção de impacto",
      "Durabilidade em ambiente marinho",
      "Múltiplas configurações disponíveis",
      "Dimensionamento sob projeto",
      "Instalação e manutenção especializadas",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Defensa Supercelular instalada" },
      { src: "/placeholder.svg", caption: "Defensa Pneumática em operação" },
      { src: "/placeholder.svg", caption: "Defensa Tipo D em píer" },
      { src: "/placeholder.svg", caption: "Instalação de defensas" },
      { src: "/placeholder.svg", caption: "Defensa Cilíndrica" },
      { src: "/placeholder.svg", caption: "Sistema de defensas completo" },
    ],
  },
  "cabecos-de-amarracao": {
    title: "Cabeços de Amarração",
    tag: "Cabeços",
    icon: Anchor,
    description: "Equipamentos robustos para amarração segura de embarcações.",
    fullDescription: "Equipamentos robustos para amarração segura de embarcações, fabricados para suportar elevadas cargas de tração e condições severas de operação. Cabeços de amarração de 2T até 500T, com moldes padrões ou fabricações sob demanda para atender necessidades específicas de cada terminal.",
    application: "Portos organizados, terminais privados e estruturas costeiras.",
    extra: "Cabeços de amarração de 2T até 500T. Moldes padrões ou fabricações sob demanda.",
    highlights: [
      "Capacidade de 2T até 500T",
      "Moldes padrões disponíveis",
      "Fabricação sob demanda",
      "Alta resistência a cargas de tração",
      "Projetos conforme normas internacionais",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Cabeço de amarração instalado" },
      { src: "/placeholder.svg", caption: "Fabricação de cabeço" },
      { src: "/placeholder.svg", caption: "Cabeço de alta tonelagem" },
    ],
  },
  "ganchos-de-desengate-rapido": {
    title: "Ganchos de Desengate Rápido",
    tag: "Ganchos",
    icon: Link2,
    description: "Sistema seguro e eficiente para amarração com liberação controlada.",
    fullDescription: "Sistema seguro e eficiente para amarração com liberação controlada, aumentando a segurança operacional em operações portuárias. Projetados para liberação instantânea em situações de emergência, garantindo a segurança de embarcações e estruturas.",
    application: "Berços de atracação e terminais industriais.",
    highlights: [
      "Liberação controlada e segura",
      "Operação em situações de emergência",
      "Alta confiabilidade operacional",
      "Manutenção simplificada",
      "Conformidade com normas de segurança",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Gancho de desengate rápido" },
      { src: "/placeholder.svg", caption: "Sistema instalado em terminal" },
      { src: "/placeholder.svg", caption: "Detalhe do mecanismo" },
    ],
  },
  "pontoes-de-aco": {
    title: "Pontões de Aço",
    tag: "Pontões",
    icon: Package,
    description: "Estruturas flutuantes de alta resistência para operações portuárias.",
    fullDescription: "Estruturas flutuantes de alta resistência, projetadas para operações portuárias, apoio logístico e infraestrutura temporária ou permanente. Fabricados em aço naval com tratamento anticorrosivo, garantindo longa vida útil em ambiente marinho.",
    application: "Apoio de obras, dragagem, transporte e operações marítimas.",
    highlights: [
      "Alta resistência estrutural",
      "Aço naval com tratamento anticorrosivo",
      "Infraestrutura temporária ou permanente",
      "Versatilidade de aplicações",
      "Dimensionamento sob projeto",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Pontão de aço em operação" },
      { src: "/placeholder.svg", caption: "Fabricação de pontão" },
      { src: "/placeholder.svg", caption: "Pontão em apoio de dragagem" },
    ],
  },
  "acessorios-de-atracacao": {
    title: "Acessórios de Atracação",
    tag: "Acessórios",
    icon: Wrench,
    description: "Componentes para sistemas completos de atracação.",
    fullDescription: "Fornecimento e instalação de componentes para sistemas completos de atracação, garantindo segurança estrutural e eficiência operacional. Linha completa de acessórios para complementar e otimizar as operações de atracação em portos e terminais.",
    application: "Portos, terminais e estruturas de atracação.",
    highlights: [
      "Linha completa de acessórios",
      "Instalação especializada",
      "Segurança estrutural garantida",
      "Eficiência operacional",
      "Suporte técnico contínuo",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Acessórios de atracação" },
      { src: "/placeholder.svg", caption: "Sistema completo instalado" },
      { src: "/placeholder.svg", caption: "Componentes de amarração" },
    ],
  },
};

function PhotoGallery({ gallery, label }: { gallery: { src: string; caption: string }[]; label: string }) {
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
              FOTOS DO <span className="text-brand">{label.toUpperCase()}</span>
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
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
              {gallery[lightbox].caption}
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

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productsData[slug] : null;
  const navigate = useNavigate();

  const goToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-foreground mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-brand font-body font-semibold hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;
  const otherProducts = Object.entries(productsData)
    .filter(([key]) => key !== slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-[380px] flex items-end bg-navy">
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        <div className="relative container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm font-body mb-8">
            <Link to="/" className="text-white/50 hover:text-white transition-colors">
              Início
            </Link>
            <span className="text-white/30">/</span>
            <button
              type="button"
              onClick={() => goToSection("produtos")}
              className="text-white/50 hover:text-white transition-colors"
            >
              Produtos
            </button>
            <span className="text-white/30">/</span>
            <span className="text-brand font-semibold">{product.tag}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-brand/20 border border-brand/40 flex items-center justify-center">
              <Icon size={28} className="text-brand" />
            </div>
            <div className="inline-flex items-center bg-brand px-3 py-1">
              <span className="font-body text-xs font-bold tracking-widest uppercase text-white">{product.tag}</span>
            </div>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight max-w-3xl">
            {product.title.toUpperCase()}
          </h1>
          <p className="font-body text-white/60 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="accent-line">
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground leading-tight mb-6">
                SOBRE O <span className="text-brand">PRODUTO</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-6">{product.fullDescription}</p>

            {product.types && product.types.length > 0 && (
              <div className="mb-8">
                <h3 className="font-display font-bold text-lg text-foreground mb-3 uppercase">Tipos disponíveis</h3>
                <div className="flex flex-wrap gap-2">
                  {product.types.map((type) => (
                    <span key={type} className="font-body text-sm bg-brand/10 text-brand border border-brand/20 px-4 py-2 font-semibold">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.application && (
              <div className="bg-muted border border-border p-5 mb-6">
                <p className="font-body text-sm">
                  <span className="font-bold text-brand">Aplicação:</span>{" "}
                  <span className="text-muted-foreground">{product.application}</span>
                </p>
              </div>
            )}

            {product.extra && (
              <div className="bg-brand/5 border border-brand/20 p-5 mb-8">
                <p className="font-body text-sm text-foreground font-medium">{product.extra}</p>
              </div>
            )}

            <ul className="space-y-3 mb-12">
              {product.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground text-sm">
                  <CheckCircle size={18} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-navy p-8 relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-dark opacity-40" />
              <div className="relative text-center">
                <h3 className="font-display font-bold text-2xl text-white mb-3">Interessado neste produto?</h3>
                <p className="font-body text-white/60 text-sm mb-6">Solicite um orçamento personalizado.</p>
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

      <PhotoGallery gallery={product.gallery} label="Produto" />

      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">Explore mais</span>
            <h3 className="font-display font-black text-3xl text-white uppercase">
              Outros <span className="text-brand">Produtos</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherProducts.map(([key, p]) => (
              <Link
                key={key}
                to={`/produtos/${key}`}
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
            <button
              type="button"
              onClick={() => goToSection("produtos")}
              className="inline-flex items-center gap-2 text-white/50 hover:text-brand transition-colors font-body text-sm"
            >
              <ArrowLeft size={14} /> Voltar para todos os produtos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}