import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, Camera, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const servicesData: Record<string, {
  title: string;
  tag: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  gallery: { src: string; caption: string }[];
}> = {
  "pericias-infraestrutura-portuaria": {
    title: "Perícias em Obras de Infraestrutura Portuária",
    tag: "Perícias",
    description: "Emissão de laudos técnicos e avaliações estruturais em obras costeiras e portuárias.",
    fullDescription: "Emissão de laudos técnicos e avaliações estruturais em obras costeiras e portuárias, com análise de desempenho, patologias e conformidade técnica. Nossa equipe de engenheiros especializados realiza avaliações detalhadas para garantir a segurança e integridade das estruturas.",
    highlights: [
      "Laudos técnicos detalhados",
      "Avaliações estruturais completas",
      "Análise de patologias",
      "Conformidade técnica e normativa",
      "Equipe de engenheiros especializados",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Perícia em estrutura portuária" },
      { src: "/placeholder.svg", caption: "Análise de patologias" },
      { src: "/placeholder.svg", caption: "Laudo técnico em campo" },
    ],
  },
  "supervisao-fiscalizacao": {
    title: "Supervisão e Fiscalização de Obras Costeiras e Portuárias",
    tag: "Supervisão",
    description: "Acompanhamento técnico especializado garantindo conformidade com projeto e normas técnicas.",
    fullDescription: "Acompanhamento técnico especializado garantindo conformidade com projeto, normas técnicas e controle de qualidade executivo. Monitoramos cada etapa da obra para assegurar o cumprimento dos prazos, especificações e padrões de qualidade exigidos.",
    highlights: [
      "Controle de qualidade executivo",
      "Conformidade com normas técnicas",
      "Acompanhamento de cronograma",
      "Relatórios técnicos periódicos",
      "Fiscalização de materiais e métodos",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Supervisão de obra costeira" },
      { src: "/placeholder.svg", caption: "Fiscalização de qualidade" },
      { src: "/placeholder.svg", caption: "Controle de execução" },
    ],
  },
  "locacao-equipamentos": {
    title: "Locação de Equipamentos Pesados",
    tag: "Locação",
    description: "Disponibilização de equipamentos para execução de obras portuárias e infraestrutura pesada.",
    fullDescription: "Disponibilização de equipamentos para execução de obras portuárias, dragagem e infraestrutura pesada. Contamos com uma frota diversificada e bem mantida para atender às necessidades específicas de cada projeto.",
    highlights: [
      "Frota diversificada de equipamentos",
      "Manutenção preventiva garantida",
      "Operadores qualificados",
      "Atendimento ágil e flexível",
      "Equipamentos para dragagem e infraestrutura",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Equipamento pesado em operação" },
      { src: "/placeholder.svg", caption: "Frota de máquinas" },
      { src: "/placeholder.svg", caption: "Operação portuária" },
    ],
  },
  "inspecoes-portuarias-subaquaticas": {
    title: "Inspeções de Infraestruturas Portuárias e Subaquáticas",
    tag: "Inspeções",
    description: "Inspeções técnicas acima e abaixo da linha d'água para avaliação estrutural e manutenção preventiva.",
    fullDescription: "Inspeções técnicas acima e abaixo da linha d'água para avaliação estrutural, integridade e manutenção preventiva. Realizamos inspeções em defensas, cabeços de amarração, passarelas, píers e diagnósticos estruturais completos.",
    highlights: [
      "Inspeções em defensas e cabeços de amarração",
      "Avaliação de passarelas e píers",
      "Diagnósticos estruturais completos",
      "Inspeções subaquáticas especializadas",
      "Manutenção preventiva programada",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Inspeção subaquática" },
      { src: "/placeholder.svg", caption: "Avaliação de defensas" },
      { src: "/placeholder.svg", caption: "Diagnóstico estrutural" },
    ],
  },
  "construcao-trapiches-pieres": {
    title: "Construção de Trapiches, Píeres, Rampas e Decks",
    tag: "Construção",
    description: "Execução completa de estruturas de acesso e atracação, em aço e concreto.",
    fullDescription: "Execução completa de estruturas de acesso e atracação, em aço e concreto, adaptadas às condições locais e operacionais. Projetos sob medida que consideram cargas operacionais, marés, correntes e impacto de embarcações.",
    highlights: [
      "Estruturas em aço e concreto",
      "Projetos sob medida",
      "Adaptação às condições locais",
      "Consideração de cargas operacionais",
      "Execução completa da obra",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Construção de trapiche" },
      { src: "/placeholder.svg", caption: "Píer em execução" },
      { src: "/placeholder.svg", caption: "Deck finalizado" },
    ],
  },
  "apoio-a-dragagem": {
    title: "Apoio a Obras de Dragagem e Infraestrutura",
    tag: "Dragagem",
    description: "Suporte técnico e operacional em projetos de dragagem e estruturas marítimas.",
    fullDescription: "Suporte técnico e operacional em projetos de dragagem, contenção, fundações e estruturas marítimas. Nossa equipe qualificada e nossos equipamentos especializados garantem o sucesso das operações.",
    highlights: [
      "Apoio operacional completo",
      "Suporte técnico especializado",
      "Equipamentos de alta performance",
      "Equipe qualificada e experiente",
      "Logística integrada de operações",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Operação de dragagem" },
      { src: "/placeholder.svg", caption: "Equipamento de apoio" },
      { src: "/placeholder.svg", caption: "Infraestrutura marítima" },
    ],
  },
  "sinalizacao-nautica": {
    title: "Manutenção e Instalação de Sinalização Náutica",
    tag: "Sinalização",
    description: "Instalação, substituição e manutenção de balizamento fixo e flutuante.",
    fullDescription: "Instalação, substituição e manutenção de balizamento fixo e flutuante conforme normas marítimas vigentes. Atuamos com boias, poitas, sinais flutuantes e fixos, garantindo a segurança da navegação.",
    highlights: [
      "Balizamento fixo e flutuante",
      "Conformidade com normas marítimas",
      "Montagem e instalação de boias",
      "Confecção de poitas",
      "Manutenção preventiva e corretiva",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Instalação de boia" },
      { src: "/placeholder.svg", caption: "Sinalização náutica" },
      { src: "/placeholder.svg", caption: "Manutenção de balizamento" },
    ],
  },
  "manutencao-acessorios-atracacao": {
    title: "Manutenção, Reparos e Instalação de Acessórios de Atracação",
    tag: "Atracação",
    description: "Serviços especializados em defensas, cabeços, ganchos e sistemas de amarração.",
    fullDescription: "Serviços especializados em defensas, cabeços, ganchos e sistemas de amarração. Oferecemos planos de manutenção contínua com equipes de prontidão para substituição ágil de peças danificadas.",
    highlights: [
      "Manutenção de defensas portuárias",
      "Reparo de cabeços de amarração",
      "Instalação de ganchos de desengate",
      "Equipes de prontidão",
      "Planos de manutenção preventiva",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Instalação de defensa" },
      { src: "/placeholder.svg", caption: "Cabeço de amarração" },
      { src: "/placeholder.svg", caption: "Sistema de atracação" },
    ],
  },
  "obras-saneamento": {
    title: "Obras de Saneamento",
    tag: "Saneamento",
    description: "Execução de redes, drenagem e infraestrutura urbana associada a obras portuárias e industriais.",
    fullDescription: "Execução de redes, drenagem e infraestrutura urbana associada a obras portuárias e industriais. Atuamos na implantação completa de sistemas de saneamento com qualidade e eficiência.",
    highlights: [
      "Redes de saneamento",
      "Sistemas de drenagem",
      "Infraestrutura urbana",
      "Obras industriais associadas",
      "Execução completa de projetos",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Obra de saneamento" },
      { src: "/placeholder.svg", caption: "Rede de drenagem" },
      { src: "/placeholder.svg", caption: "Infraestrutura urbana" },
    ],
  },
  "terraplanagem": {
    title: "Terraplanagem",
    tag: "Terraplanagem",
    description: "Movimentação de solo e preparação de base para obras industriais e portuárias.",
    fullDescription: "Movimentação de solo, preparação de base e infraestrutura para implantação de obras industriais e portuárias. Contamos com equipamentos modernos e equipe experiente para garantir a qualidade do serviço.",
    highlights: [
      "Movimentação de solo",
      "Preparação de base",
      "Equipamentos modernos",
      "Equipe experiente",
      "Obras industriais e portuárias",
    ],
    gallery: [
      { src: "/placeholder.svg", caption: "Terraplanagem em campo" },
      { src: "/placeholder.svg", caption: "Movimentação de solo" },
      { src: "/placeholder.svg", caption: "Preparação de terreno" },
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
              <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase">
                Galeria
              </span>
            </div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground uppercase">
              FOTOS DO <span className="text-brand">SERVIÇO</span>
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

          <p className="text-center font-body text-muted-foreground text-sm mt-8">
            Clique nas imagens para ampliar
          </p>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : gallery.length - 1);
            }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-brand transition-colors"
          >
            <ArrowLeft size={36} />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightbox].src}
              alt={gallery[lightbox].caption}
              className="max-w-full max-h-[75vh] object-contain border-2 border-white/10"
            />
            <p className="text-center font-body text-white/80 text-sm mt-4">
              {gallery[lightbox].caption}
              <span className="text-white/40 ml-3">
                {lightbox + 1} / {gallery.length}
              </span>
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < gallery.length - 1 ? lightbox + 1 : 0);
            }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-brand transition-colors"
          >
            <ArrowRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;
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

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-foreground mb-4">Serviço não encontrado</h1>
          <Link to="/" className="text-brand font-body font-semibold hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = Object.entries(servicesData)
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
              onClick={() => goToSection("servicos")}
              className="text-white/50 hover:text-white transition-colors"
            >
              Serviços
            </button>
            <span className="text-white/30">/</span>
            <span className="text-brand font-semibold">{service.tag}</span>
          </nav>

          <div className="inline-flex items-center bg-brand px-3 py-1 mb-4">
            <span className="font-body text-xs font-bold tracking-widest uppercase text-white">
              {service.tag}
            </span>
          </div>

          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight max-w-3xl">
            {service.title.toUpperCase()}
          </h1>

          <p className="font-body text-white/60 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto">
            <div className="accent-line">
              <h2 className="font-display font-black text-3xl md:text-4xl text-foreground leading-tight mb-6">
                SOBRE O <span className="text-brand">SERVIÇO</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <ul className="space-y-3 mb-12">
              {service.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-foreground text-sm">
                  <CheckCircle size={18} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-navy p-8 relative overflow-hidden">
              <div className="absolute inset-0 tech-grid-dark opacity-40" />
              <div className="relative text-center">
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Precisa deste serviço?
                </h3>
                <p className="font-body text-white/60 text-sm mb-6">
                  Entre em contato para um orçamento personalizado.
                </p>
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

      <PhotoGallery gallery={service.gallery} />

      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-40" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-10">
            <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
              Explore mais
            </span>
            <h3 className="font-display font-black text-3xl text-white uppercase">
              Outros <span className="text-brand">Serviços</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {otherServices.map(([key, s]) => (
              <Link
                key={key}
                to={`/servicos/${key}`}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-brand/40 transition-all duration-300 p-5"
              >
                <div className="inline-flex items-center bg-brand/20 px-2 py-0.5 mb-3">
                  <span className="font-body text-[10px] font-bold tracking-widest uppercase text-brand">
                    {s.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-white text-base leading-tight group-hover:text-brand transition-colors mb-2">
                  {s.title}
                </h4>
                <p className="font-body text-white/40 text-xs line-clamp-2 mb-3">{s.description}</p>
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
              onClick={() => goToSection("servicos")}
              className="inline-flex items-center gap-2 text-white/50 hover:text-brand transition-colors font-body text-sm"
            >
              <ArrowLeft size={14} /> Voltar para todos os serviços
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}