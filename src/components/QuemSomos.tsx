import { Shield, Target, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function QuemSomos() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="quem-somos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="accent-line">
              <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
                Sobre a empresa
              </span>
              <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-none tracking-tight">
                QUEM <span className="text-brand">SOMOS</span>
              </h2>
            </div>
            <p className="font-body text-muted-foreground text-base leading-relaxed mt-6 max-w-lg">
              A AJM Infraestrutura é uma empresa especializada em infraestrutura portuária, fornece uma ampla linha de produtos e serviços, tanto para acostagem como para sistema de balizamento.
            </p>
            <p className="font-body text-muted-foreground text-base leading-relaxed mt-4 max-w-lg">
              Nossos produtos aumentam a segurança, minimizam riscos e melhoram a produtividade de nossos clientes.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {[
              { icon: Shield, title: "Segurança", desc: "Produtos e serviços que aumentam a segurança operacional em ambientes portuários e marítimos." },
              { icon: Target, title: "Qualidade", desc: "Soluções com alto padrão de qualidade e durabilidade para infraestrutura portuária." },
              { icon: Users, title: "Confiança", desc: "Parceria sólida com os principais portos e terminais do Brasil." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`flex gap-4 group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: isVisible ? `${i * 150 + 200}ms` : "0ms" }}
                >
                  <div className="w-14 h-14 bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <Icon size={24} className="text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
