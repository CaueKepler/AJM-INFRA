import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, Menu, X } from "lucide-react";
import logoAJM from "@/assets/logo-ajm.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Fundações", href: "#fundacoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setActive(item.label);
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + item.href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-navy shadow-[0_4px_24px_hsl(215_35%_8%/0.4)] backdrop-blur-sm"
        : "bg-transparent"
    }`}>
      {/* Top bar */}
      <div className={`border-b border-white/10 transition-all duration-300 ${scrolled ? "hidden" : "block"}`}>
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="text-white/60 text-sm font-body">
            AJM Infraestrutura
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+554733723255" className="flex items-center gap-2 text-white/80 hover:text-brand transition-colors text-sm font-body">
              <Phone size={14} />
              + 55 47 3372-3255
            </a>
            <a href="mailto:contato@ajminfra.com.br" className="flex items-center gap-2 text-brand hover:text-brand-light transition-colors text-sm font-body">
              <Mail size={14} />
              contato@ajminfra.com.br
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center group" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={logoAJM} alt="AJM Construtora" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={location.pathname === "/" ? item.href : `/${item.href}`}
                onClick={() => handleNavClick(item)}
                className={`nav-link-hover px-3 py-2 font-body font-600 text-sm tracking-wide uppercase transition-colors duration-200 ${
                  active === item.label
                    ? "text-brand"
                    : "text-white/80 hover:text-white"
                } ${active === item.label ? "active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={location.pathname === "/" ? item.href : `/${item.href}`}
                onClick={() => handleNavClick(item)}
                className={`font-body font-semibold text-sm tracking-wide uppercase py-3 border-b border-white/10 transition-colors ${
                  active === item.label ? "text-brand" : "text-white/80"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href="tel:+554733723255" className="flex items-center gap-2 text-white/70 text-sm">
                <Phone size={14} /> + 55 47 3372-3255
              </a>
              <a href="mailto:contato@ajminfra.com.br" className="flex items-center gap-2 text-brand text-sm">
                <Mail size={14} /> contato@ajminfra.com.br
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
