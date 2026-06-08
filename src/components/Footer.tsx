import React, { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";
import AbachaLogo from "./AbachaLogo";

interface FooterProps {
  scrollAndNavigate: (tab: "home" | "menu" | "catering" | "contact", elementId?: string) => void;
}

export default function Footer({ scrollAndNavigate }: FooterProps) {
  const [broadcastPhone, setBroadcastPhone] = useState("");
  const [joinedBroadcast, setJoinedBroadcast] = useState(false);

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastPhone.trim()) return;
    setJoinedBroadcast(true);
    // Persist in local storage
    localStorage.setItem("broadcast_recipient", broadcastPhone);
  };

  return (
    <footer className="bg-[#0C0C0C] text-cream border-t border-white/10 pt-20 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              {/* Elegant rotating gold square motif surrounding the footer logo */}
              <div className="w-12 h-12 border border-[#D4AF37]/40 flex items-center justify-center rotate-45 scale-90 rounded-[2px] shrink-0">
                <div className="relative -rotate-45">
                  <AbachaLogo size={36} showBg={false} />
                </div>
              </div>
              
              <div className="flex flex-col ml-1">
                <span className="font-display font-light text-base tracking-[0.2em] text-white leading-none">
                  ABACHA <span className="text-gold font-medium">VILLAGE</span>
                </span>
                <span className="font-script text-xs text-[#999] mt-1.5 tracking-wide">Eat to Remember</span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-[#888] leading-relaxed max-w-sm mt-3">
              "Taste the village. Live in the city." We slow down to ground our spices and prepare authentic Abacha of the Eastern heartland, delivered fresh across Abuja.
            </p>

            {/* Social media icons */}
            <div className="pt-2 w-full">
              <p className="font-display text-[9px] text-[#A3A3A3] tracking-[0.25em] uppercase mb-4">
                Join our Abuja food community
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/abachavillage?igsh=MWJwdHR6Y2kxN244aQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#141414] border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#141414] border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://wa.me/2347061887939?text=Hi%20Abacha%20Village!%20I%20would%20love%20to%20get%20updates%20on%20specials."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#141414] border border-white/10 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center text-[10px] font-display font-black"
                  aria-label="WhatsApp Broadcast"
                >
                  WA
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-gold border-b border-white/10 pb-3 mb-5">
              Explore Our Site
            </h3>
            <ul className="space-y-3 font-sans text-xs text-[#888]">
              <li>
                <button
                  onClick={() => scrollAndNavigate("home")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Home / Welcome
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndNavigate("menu")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Our Authentic Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndNavigate("catering")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Event Catering Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndNavigate("home", "delivery-areas")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Where We Deliver
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndNavigate("home", "our-story")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Our Authentic Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollAndNavigate("contact")}
                  className="hover:text-white transition-colors text-left font-light tracking-wide uppercase text-[10px]"
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div>
            <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-gold border-b border-white/10 pb-3 mb-5">
              Hours & Contact
            </h3>
            <div className="space-y-4 text-[#888] text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D4AF37] shrink-0" />
                <span className="font-light tracking-wide">Abuja, Federal Capital Territory, Nigeria</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#D4AF37] shrink-0 animate-pulse" />
                <div>
                  <a href="tel:08060749239" className="hover:text-white block font-light tracking-wide">0806 074 9239</a>
                  <span className="text-[10px] text-[#555] block mt-0.5 tracking-wide uppercase">WhatsApp Available</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#D4AF37] shrink-0" />
                <a href="mailto:villageabacha@gmail.com" className="hover:text-white font-light tracking-wide break-all">villageabacha@gmail.com</a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 font-light">
                <p className="font-display text-[9px] text-[#A3A3A3] uppercase tracking-[0.2em] mb-1">Kitchen Hours</p>
                <p className="text-[11px]">Mon - Fri: 9:00 AM - 7:00 PM</p>
                <p className="text-[11px]">Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-[11px]">Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Interactive Broadcast Form */}
          <div>
            <h3 className="font-display text-[10px] tracking-[0.3em] uppercase text-gold border-b border-white/10 pb-3 mb-5">
              WhatsApp Broadcast
            </h3>
            <p className="font-sans text-xs text-[#888] leading-relaxed mb-4 font-light">
              Join our growing Abuja community. Receive weekly updates on fresh batches, unique fish portions, and discount promos straight on your WhatsApp.
            </p>

            {joinedBroadcast ? (
              <div className="p-4 bg-[#141414] border border-[#D4AF37]/50 rounded-none text-xs text-gold text-center animate-fade-in font-display uppercase tracking-wider text-[10px]">
                🎉 Perfect! You have joined our list. We will send you updates on WhatsApp.
              </div>
            ) : (
              <form onSubmit={handleBroadcastSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="WhatsApp No. (e.g. 080...)"
                    value={broadcastPhone}
                    onChange={(e) => setBroadcastPhone(e.target.value)}
                    required
                    className="w-full bg-black/40 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-none px-3 py-3 text-xs text-white placeholder-[#555]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-4 bg-[#D4AF37] hover:bg-white text-black font-display font-bold rounded-none flex items-center justify-center transition-colors shadow-md"
                    title="Subscribe"
                  >
                    <Send size={11} />
                  </button>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-[#555] font-light leading-relaxed">
                  *Opt-out anytime. No spam, ever.
                </p>
              </form>
            )}

            <div className="mt-6 p-4 bg-[#141414] border border-white/10 rounded-none text-center">
              <span className="text-[9px] text-[#A3A3A3] font-display uppercase tracking-[0.25em] block mb-1">🔥 Abuja Wide Delivery</span>
              <span className="text-[10px] text-[#666] leading-relaxed font-light block">Serving CBD, Wuse, Maitama, Gwarinpa, Kubwa + more!</span>
            </div>
          </div>

        </div>

        {/* Outer Section bottom credits */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#555]">
          <p>© 2025 Abacha Village Restaurant. Creative Excellence in Abuja.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer" onClick={() => scrollAndNavigate("home", "delivery-areas")}>Delivery Policy</span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer" onClick={() => scrollAndNavigate("contact")}>Privacy Statement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
