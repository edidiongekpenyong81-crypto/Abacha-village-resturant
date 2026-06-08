import React from "react";
import { ArrowRight, Leaf, ShieldAlert, Sparkles, Trophy, Upload } from "lucide-react";
import { useCustomImages } from "../context/CustomImageContext";

interface HeroProps {
  scrollAndNavigate: (tab: "home" | "menu" | "catering" | "contact", elementId?: string) => void;
}

export default function Hero({ scrollAndNavigate }: HeroProps) {
  const { images, updateImage, isEditingSession } = useCustomImages();
  const bannerImage = images.hero;

  const trustBadges = [
    { label: "Made Fresh Daily", icon: "🍃" },
    { label: "Delivers within 60 mins", icon: "⚡" },
    { label: "50+ Events Catered", icon: "🎉" },
    { label: "100% Preservative Free", icon: "🌿" },
    { label: "Sourced from Eastern Nigeria", icon: "📍" },
  ];

  return (
    <div className="relative bg-[#0C0C0C] text-white overflow-hidden">
      
      {/* Background image container with deep dark vignette gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage}
          alt="Authentic Abacha Village food feast banner"
          className="w-full h-full object-cover opacity-20 object-center scale-102 transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-[#0C0C0C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/80 via-[#0C0C0C]/40 to-[#0C0C0C]" />

        {/* Dynamic Image Customizer Overlay */}
        {isEditingSession && (
          <div className="absolute inset-0 bg-black/75 z-20 flex flex-col items-center justify-center p-4">
            <div className="p-6 border border-dashed border-[#D4AF37]/50 bg-black/60 text-center max-w-sm">
              <Upload className="text-[#D4AF37] mx-auto mb-3" size={24} />
              <span className="font-serif text-sm text-white block mb-1">Hero Background Image</span>
              <p className="font-sans text-[10px] text-[#888] mb-4">Recommended landscape cover image</p>
              <label className="inline-block px-5 py-2.5 bg-[#D4AF37] hover:bg-white text-black font-display text-[9px] uppercase tracking-[0.2em] font-medium cursor-pointer transition-colors">
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      await updateImage("hero", file);
                    }
                  }}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Main hero contents */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-28 pb-20 md:pt-40 md:pb-32 flex flex-col items-center text-center">
        
        {/* Cultural Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/[0.02] mb-8">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-ping"></span>
          <span className="font-display text-[9px] uppercase tracking-[0.4em] text-[#999]">
            Taste the Village. Live in the City.
          </span>
        </div>

        {/* Primary Slogan */}
        <h1 className="font-serif font-extralight text-4xl sm:text-6xl md:text-7xl text-white max-w-4xl leading-[1.05] tracking-tight">
          Stop searching.<br />
          The best <span className="italic font-serif text-gold font-light">Abacha</span> in Abuja is right here.
        </h1>

        {/* Sub-slogan */}
        <p className="font-sans text-lg text-[#888] max-w-xl mt-8 leading-relaxed font-light">
          Handcrafted with pure red palm oil, authentic ugba, and raw ground spices. Delivered fresh and warm to your doorstep — the traditional village way.
        </p>

        {/* Bottom CTA Actions */}
        <div className="w-full sm:w-auto mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          <button
            onClick={() => scrollAndNavigate("home", "how-to-order")}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-[10px] uppercase tracking-[0.35em] text-white hover:bg-white hover:text-black transition-all duration-300 font-display cursor-pointer"
          >
            ORDER NOW (WHATSAPP)
          </button>

          <button
            onClick={() => scrollAndNavigate("menu")}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gold/40 text-[10px] uppercase tracking-[0.35em] text-gold hover:bg-gold hover:text-black transition-all duration-300 font-display cursor-pointer"
          >
            Our Full Menu
          </button>

        </div>

        {/* Reassurance Micro-copy */}
        <p className="font-display text-[9px] uppercase tracking-[0.25em] text-[#666] mt-8 flex flex-wrap items-center gap-x-3 justify-center">
          <span>100% Fresh Daily</span>
          <span className="text-[#D4AF37] opacity-60">•</span>
          <span>Abuja Delivery</span>
          <span className="text-[#D4AF37] opacity-60">•</span>
          <span>Zero Preservatives</span>
        </p>

      </div>

      {/* Social Proof & Continuous Scrolling Tape */}
      <div className="relative border-y border-gold/10 bg-[#070707] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Accent citation line */}
          <p className="font-sans text-xs text-center text-gold/90 font-medium tracking-wide mb-4">
            🔥 ⭐⭐⭐⭐⭐ <span className="text-white">Over 300+ orders delivered</span> with rave reviews across Gwarinpa, Wuse, Maitama & more!
          </p>

          {/* Badges Strip container */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-1">
            {trustBadges.map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 shadow-sm"
              >
                <span className="text-base select-none">{badge.icon}</span>
                <span className="font-display font-black text-[11px] tracking-wider text-cream/80 uppercase">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
