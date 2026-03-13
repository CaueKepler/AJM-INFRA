import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { QuemSomos } from "@/components/QuemSomos";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Fundacoes } from "@/components/Fundacoes";
import { Projetos } from "@/components/Projetos";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Services />
        <Products />
        <Fundacoes />
        <Projetos />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
