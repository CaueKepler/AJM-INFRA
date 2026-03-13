import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "554733723255";
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1fb855] rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 animate-fade-in-up"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
