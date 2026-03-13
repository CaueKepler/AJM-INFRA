import { useScrollReveal } from "@/hooks/useScrollReveal";

import logoSinautica from "@/assets/clients/sinautica.png";
import logoAmvali from "@/assets/clients/amvali.png";
import logoExercito from "@/assets/clients/exercito.png";
import logoTesc from "@/assets/clients/tesc.png";
import logoWeg from "@/assets/clients/weg.png";
import logoPortoSF from "@/assets/clients/porto-sao-francisco.png";
import logoPortoImbituba from "@/assets/clients/porto-imbituba.png";
import logoPortoItajai from "@/assets/clients/porto-itajai.png";
import logoOceana from "@/assets/clients/oceana.png";
import logoCmo from "@/assets/clients/cmo.png";

const clients = [
  { name: "Porto de São Francisco do Sul", logo: logoPortoSF },
  { name: "Porto de Imbituba", logo: logoPortoImbituba },
  { name: "Porto de Itajaí", logo: logoPortoItajai },
  { name: "Sináutica", logo: logoSinautica },
  { name: "TESC", logo: logoTesc },
  { name: "Exército Brasileiro", logo: logoExercito },
  { name: "Oceana Minerais", logo: logoOceana },
  { name: "AMVALI", logo: logoAmvali },
  { name: "WEG", logo: logoWeg },
  { name: "CMO Construtora", logo: logoCmo },
];

export function Clients() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div ref={ref} className="container mx-auto px-4 relative">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="font-body text-brand text-sm font-semibold tracking-widest uppercase block mb-3">
            Quem confia em nós
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-foreground leading-none tracking-tight">
            PRINCIPAIS <span className="text-brand">CLIENTES</span>
          </h2>
        </div>

        {/* Client logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className={`group relative flex items-center justify-center w-40 h-24 bg-card border border-border hover:border-brand/40 shadow-card hover:shadow-orange transition-all duration-400 cursor-pointer overflow-hidden ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : "0ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[75%] max-h-[65%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand/0 group-hover:border-brand/60 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand/0 group-hover:border-brand/60 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
