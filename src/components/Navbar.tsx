import React, { useState } from "react";
import { Menu, X, ShoppingBag, Phone, Sparkles } from "lucide-react";
import AbachaLogo from "./AbachaLogo";

interface NavbarProps {
  activeTab: "home" | "menu" | "catering" | "contact";
  setActiveTab: (tab: "home" | "menu" | "catering" | "contact") => void;
  scrollAndNavigate: (tab: "home" | "menu" | "catering" | "contact", elementId?: string) => void;
}

export default function Navbar({ activeTab, setActiveTab, scrollAndNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", action: () => scrollAndNavigate("home") },
    { label: "Menu", action: () => scrollAndNavigate("menu") },
    { label: "Catering", action: () => scrollAndNavigate("catering") },
    { label: "Delivery", action: () => scrollAndNavigate("home", "delivery-areas") },
    { label: "Our Story", action: () => scrollAndNavigate("home", "our-story") },
    { label: "Contact", action: () => scrollAndNavigate("contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => scrollAndNavigate("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Elegant rotating gold square motif surrounding the logo */}
            <div className="w-12 h-12 border border-gold/40 flex items-center justify-center rotate-45 scale-90 group-hover:rotate-90 transition-transform duration-500 rounded-[2px]">
              <div className="relative -rotate-45">
                <AbachaLogo size={36} showBg={false} />
              </div>
            </div>
            
            <div className="flex flex-col ml-1">
              <span className="font-display font-light text-base tracking-[0.22em] text-white leading-none">
                ABACHA <span className="text-gold font-medium">VILLAGE</span>
              </span>
              <span className="font-script text-xs text-[#999] group-hover:text-gold mt-1 tracking-wide transition-colors">
                Eat to Remember
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              // Determine if active based on state
              const isHomeSection = link.label === "Home" && activeTab === "home";
              const isMenuSection = link.label === "Menu" && activeTab === "menu";
              const isCateringSection = link.label === "Catering" && activeTab === "catering";
              const isContactSection = link.label === "Contact" && activeTab === "contact";
              const isActive = isHomeSection || isMenuSection || isCateringSection || isContactSection;

              return (
                <button
                  key={link.label}
                  onClick={() => {
                    link.action();
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 font-display text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "text-gold border-b border-gold font-semibold"
                      : "text-[#999] hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Accent Order CTA in Header */}
            <button
              onClick={() => scrollAndNavigate("home", "how-to-order")}
              className="ml-4 px-5 py-2.5 rounded-none font-display text-[10px] uppercase tracking-[0.3em] bg-[#141414] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] flex items-center gap-2 border border-white/10 transition-all duration-300 hover:scale-[1.03]"
            >
              <ShoppingBag size={12} />
              <span>ORDER NOW</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-[#0C0C0C]/98 border-b border-white/10">
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 font-display text-xs uppercase tracking-[0.2em] text-[#999] hover:text-white hover:bg-white/5 border-l border-transparent hover:border-gold transition-all"
              >
                {link.label}
              </button>
            ))}
            
            <div className="pt-4 px-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  scrollAndNavigate("home", "how-to-order");
                  setIsOpen(false);
                }}
                className="w-full py-3.5 rounded-none font-display text-[10px] uppercase tracking-[0.2em] text-center bg-[#D4AF37] text-black flex items-center justify-center gap-2 border border-[#D4AF37] shadow-lg"
              >
                <ShoppingBag size={14} />
                <span>ORDER FRESH ABACHA NOW</span>
              </button>

              <a
                href="tel:08060749239"
                className="w-full py-3.5 rounded-none font-display text-[10px] uppercase tracking-[0.2em] text-center border border-white/20 hover:bg-white/5 text-[#999] hover:text-white flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>CALL RESTAURANT</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
