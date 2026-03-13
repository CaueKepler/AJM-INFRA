import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const emails = [
  { label: "Contato", email: "contato@ajminfra.com.br" },
  { label: "Financeiro", email: "financeiro@ajminfra.com.br" },
  { label: "Alberto", email: "alberto@ajminfra.com.br" },
  { label: "Alberto Filho", email: "albertofilho@ajminfra.com.br" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-dark opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

      {/* CTA banner */}
      <div className="relative bg-brand py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-black text-4xl text-white leading-none mb-2">
              SOLICITE UM ORÇAMENTO
            </h3>
            <p className="font-body text-white/80 text-sm">
              Entre em contato e descubra como podemos ajudar seu projeto.
            </p>
          </div>
          <a
            href="mailto:contato@ajminfra.com.br"
            className="flex items-center gap-3 bg-white text-brand font-display font-bold text-lg uppercase tracking-widest px-8 py-4 hover:bg-navy hover:text-white transition-all duration-300 whitespace-nowrap shadow-[0_4px_24px_hsl(215_35%_8%/0.3)]"
          >
            Fale Conosco <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display text-4xl font-black text-brand leading-none tracking-tighter">AJM</span>
              <div className="border-l border-white/20 pl-2 ml-1">
                <span className="font-display text-xs font-semibold text-white/50 tracking-widest uppercase block leading-tight">
                  INFRA<br />ESTRUTURA
                </span>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Especialistas em infraestrutura portuária, fornecendo uma ampla linha de produtos e serviços para acostagem e sistema de balizamento.
            </p>
          </div>

          {/* Orçamentos / Contato */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-brand" />
              <h4 className="font-display font-bold text-xl text-white tracking-wide uppercase">
                Orçamentos
              </h4>
            </div>
            <div className="space-y-3">
              <a
                href="tel:+554733723255"
                className="flex items-center gap-3 text-white/60 hover:text-brand transition-colors font-body text-sm group"
              >
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                  <Phone size={14} className="text-brand group-hover:text-white transition-colors" />
                </div>
                + 55 47 3372-3255
              </a>
              {emails.map((item) => (
                <a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-brand transition-colors font-body text-sm group"
                >
                  <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Mail size={14} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs block">{item.label}</span>
                    {item.email}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Onde estamos */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-brand" />
              <h4 className="font-display font-bold text-xl text-white tracking-wide uppercase">
                Como Chegar
              </h4>
            </div>
            <a
              href="https://maps.google.com/?q=Av.+Marechal+Deodoro+da+Fonseca,+1188+sl+01,+Centro,+Jaraguá+do+Sul+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/60 hover:text-brand transition-colors font-body text-sm group"
            >
              <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                <MapPin size={14} className="text-brand group-hover:text-white transition-colors" />
              </div>
              <span className="leading-relaxed">
                Av. Marechal Deodoro da Fonseca, 1188 sl 01<br />
                Centro – Jaraguá do Sul – SC
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            Copyright © 2026 AJM Infraestrutura. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Home", "Quem Somos", "Produtos", "Serviços", "Fundações", "Projetos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-").replace(/õ/g, "o").replace(/ç/g, "c")}`}
                className="font-body text-white/30 hover:text-brand text-xs tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
