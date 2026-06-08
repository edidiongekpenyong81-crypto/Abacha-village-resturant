import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";

export default function StickyMobileBar() {
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      "Hi Abacha Village! I'd like to place an order. Please share the menu and delivery details."
    );
    return `https://wa.me/2347061887939?text=${text}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-3.5 flex gap-3 shadow-2xl">
      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-transparent border border-white/20 hover:border-white text-white font-display text-xs tracking-wider rounded-none py-3 px-4 flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform uppercase"
      >
        <span>ORDER ON WHATSAPP</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:08060749239"
        className="bg-[#D4AF37] text-black font-display text-xs tracking-wider rounded-none py-3 px-5 flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-transform uppercase"
        aria-label="Call Abacha Village"
      >
        <span>CALL</span>
      </a>
    </div>
  );
}
