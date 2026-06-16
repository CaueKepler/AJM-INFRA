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
    gallery: [],
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
    gallery: [],
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
    gallery: [],
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
    gallery: [],
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
      { src: new URL("../assets/construcao-estaqueamento-1.jpeg", import.meta.url).href, caption: "Estaqueamento em obra portuária" },
      { src: new URL("../assets/construcao-estaqueamento-2.jpeg", import.meta.url).href, caption: "Estacas cravadas" },
      { src: new URL("../assets/construcao-estaqueamento-3.jpeg", import.meta.url).href, caption: "Execução de estaqueamento" },
      { src: new URL("../assets/construcao-estaqueamento-4.jpeg", import.meta.url).href, caption: "Estaca cravada em ambiente aquático" },
      { src: new URL("../assets/construcao-estaqueamento-5.jpeg", import.meta.url).href, caption: "Cravação de estacas" },
      { src: new URL("../assets/construcao-estaqueamento-6.jpeg", import.meta.url).href, caption: "Infraestrutura de fundações" },
      { src: new URL("../assets/construcao-estaqueamento-7.jpeg", import.meta.url).href, caption: "Estacas em obra costeira" },
      { src: new URL("../assets/construcao-estaqueamento-8.jpeg", import.meta.url).href, caption: "Estaca escavada" },
      { src: new URL("../assets/construcao-estaqueamento-10.jpeg", import.meta.url).href, caption: "Estaca raiz em execução" },
      { src: new URL("../assets/construcao-estaqueamento-11.jpeg", import.meta.url).href, caption: "Estaca raiz concluída" },
      { src: new URL("../assets/construcao-estaqueamento-12.jpeg", import.meta.url).href, caption: "Bate-estaca em balsa sobre o mar" },
      { src: new URL("../assets/trapiche-coberto.jpeg", import.meta.url).href, caption: "Trapiche coberto com embarcações atracadas" },
      { src: new URL("../assets/trapiche-rampa-1.jpg", import.meta.url).href, caption: "Trapiche com rampa de acesso" },
      { src: new URL("../assets/trapiche-rampa-2.jpg", import.meta.url).href, caption: "Rampa de acesso e atracação em concreto" },
      { src: new URL("../assets/trapiche-aereo-1.webp", import.meta.url).href, caption: "Vista aérea de trapiche" },
      { src: new URL("../assets/trapiche-aereo-2.jpg", import.meta.url).href, caption: "Trapiche com passarela e deck flutuante" },
      { src: new URL("../assets/trapiche-aereo-3.jpeg", import.meta.url).href, caption: "Trapiche em estrutura metálica — vista aérea" },
      { src: new URL("../assets/trapiche-aereo-4.jpeg", import.meta.url).href, caption: "Vista lateral de trapiche metálico" },
      { src: new URL("../assets/trapiche-aereo-5.jpeg", import.meta.url).href, caption: "Deck flutuante e passarela de acesso" },
      { src: new URL("../assets/trapiche-aereo-6.jpeg", import.meta.url).href, caption: "Trapiche em concreto — vista aérea" },
      { src: new URL("../assets/trapiche-aereo-7.jpeg", import.meta.url).href, caption: "Trapiche com estrutura sobre pilares" },
      { src: new URL("../assets/trapiche-aereo-8.jpeg", import.meta.url).href, caption: "Trapiche metálico com embarcação atracada" },
      { src: new URL("../assets/trapiche-aereo-9.jpeg", import.meta.url).href, caption: "Trapiche em operação — vista aérea" },
      { src: new URL("../assets/trapiche-pontao-flutuante.jpeg", import.meta.url).href, caption: "Pontão flutuante em concreto" },
    ],
  },
  "apoio-dragagem-infraestrutura": {
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
    gallery: [],
  },
  "manutencao-sinalizacao-nautica": {
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
      { src: new URL("../assets/sinalizacao-balizador-verde-mangue.jpg", import.meta.url).href, caption: "Balizador verde em área de mangue" },
      { src: new URL("../assets/sinalizacao-boia-vermelha.jpg", import.meta.url).href, caption: "Boia vermelha de sinalização náutica" },
      { src: new URL("../assets/sinalizacao-farol-vermelho-1.jpg", import.meta.url).href, caption: "Farol vermelho sobre enrocamento" },
      { src: new URL("../assets/sinalizacao-farol-verde-molhe.jpg", import.meta.url).href, caption: "Balizador verde no molhe" },
      { src: new URL("../assets/sinalizacao-baliza-amarela.jpg", import.meta.url).href, caption: "Baliza amarela com painel solar" },
      { src: new URL("../assets/sinalizacao-farol-tetrapodo.jpg", import.meta.url).href, caption: "Farol sobre tetrapodos — molhe" },
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
    gallery: [],
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
      { src: new URL("../assets/saneamento-vala-1.jpg", import.meta.url).href, caption: "Abertura de vala para rede de saneamento" },
    ],
  },
  "enrocamento": {
    title: "Enrocamento e Proteção de Margens",
    tag: "Enrocamento",
    description: "Proteção de margens de rios e canais com enrocamento e técnicas de bioengenharia.",
    fullDescription: "Proteção de margens de rios, canais e reservatórios com enrocamento de pedras e técnicas de contenção, prevenindo erosão e garantindo estabilidade estrutural das margens em obras portuárias e fluviais.",
    highlights: [
      "Proteção de margens contra erosão",
      "Enrocamento com pedras naturais",
      "Obras fluviais e costeiras",
      "Equipe e equipamentos especializados",
      "Atendimento a emergências",
    ],
    gallery: [
      { src: new URL("../assets/enrocamento-margem.jpg", import.meta.url).href, caption: "Enrocamento de margem em rio" },
    ],
  },
  "barragem": {
    title: "Obras de Barragem e Infraestrutura Hídrica",
    tag: "Barragem",
    description: "Construção, recuperação e manutenção de barragens e estruturas hídricas.",
    fullDescription: "Execução de obras de barragem, reservatórios e infraestrutura hídrica, incluindo estruturas de tomada d'água, vertedouros e edificações de apoio, com segurança e conformidade técnica.",
    highlights: [
      "Construção e recuperação de barragens",
      "Estruturas de tomada d'água",
      "Edificações e infraestrutura de apoio",
      "Conformidade com normas de segurança",
      "Equipe técnica especializada",
    ],
    gallery: [
      { src: new URL("../assets/barragem-1.jpg", import.meta.url).href, caption: "Barragem — vista aérea" },
      { src: new URL("../assets/barragem-edificio.jpg", import.meta.url).href, caption: "Edificação de apoio com energia solar" },
      { src: new URL("../assets/barragem-estrutura.jpg", import.meta.url).href, caption: "Estrutura hídrica — vista aérea" },
    ],
  },
  "contencao": {
    title: "Contenção e Obras de Arte Especiais",
    tag: "Contenção",
    description: "Execução de estruturas de contenção, pontes e obras de arte especiais.",
    fullDescription: "Execução de estruturas de contenção, pontes, bueiros e obras de arte especiais em concreto para travessias de rios, canais e áreas de drenagem, atendendo obras rurais, urbanas e industriais.",
    highlights: [
      "Pontes em concreto pré-moldado",
      "Kit ponte e obras de arte especiais",
      "Travessias de rios e canais",
      "Obras rurais, urbanas e industriais",
      "Execução rápida e segura",
    ],
    gallery: [
      { src: new URL("../assets/contencao-ponte-1.jpg", import.meta.url).href, caption: "Ponte em concreto — kit ponte" },
      { src: new URL("../assets/contencao-ponte-2.jpg", import.meta.url).href, caption: "Ponte — vista aérea" },
      { src: new URL("../assets/contencao-ponte-3.jpg", import.meta.url).href, caption: "Ponte — vista geral" },
      { src: new URL("../assets/contencao-ponte-encontro.jpg", import.meta.url).href, caption: "Encontros de ponte — execução" },
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
      { src: new URL("../assets/terraplanagem-loteamento-1.jpg", import.meta.url).href, caption: "Loteamento implantado" },
      { src: new URL("../assets/terraplanagem-loteamento-2.jpg", import.meta.url).href, caption: "Loteamento em execução — terraplanagem e vias" },
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

      {service.gallery.length > 0 && <PhotoGallery gallery={service.gallery} />}

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