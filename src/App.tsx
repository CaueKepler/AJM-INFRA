import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import ProductDetail from "./pages/ProductDetail";
import ProjetoDetail from "./pages/ProjetoDetail";
import NotFound from "./pages/NotFound";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <>
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/produtos/:slug" element={<ProductDetail />} />
          <Route path="/projetos/:slug" element={<ProjetoDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;