import React from "react";
import { MessageSquare, Flame, ShieldCheck, HelpCircle, Upload } from "lucide-react";
import { MenuItem } from "../types";
import { useCustomImages } from "../context/CustomImageContext";

interface MenuSectionProps {
  isPreview?: boolean;
  onSeeFullMenu?: () => void;
}

export default function MenuSection({ isPreview = false, onSeeFullMenu }: MenuSectionProps) {
  const { images: customImages, updateImage, isEditingSession } = useCustomImages();

  const menuItems: MenuItem[] = [
    {
      id: "classic",
      name: "Classic Abacha",
      description:
        "Silky, tangy, and rich with the deep warmth of fresh palm oil. Made with hand-shredded African breadfruit (cassava), organic garden egg leaves, sun-dried crayfish, and a splash of authentic local spices. Every forkful feels like a welcome homecoming.",
      tags: ["🐟 Contains Dried Fish", "🌿 No Artificial Additives", "🥜 Contains Crayfish"],
      waPhrase: "Hi Abacha Village! I'd like to order the Classic Abacha. Please share your prices and delivery details.",
      image: customImages.menu_classic,
      badge: "Best Seller",
    },
    {
      id: "spicy",
      name: "Spicy Abacha",
      description:
        "Bold, fiery, and deeply satisfying. We blend the premium palm oil base with organic ground hot pepper, cured ugba, and juicy chunks of tender stockfish. Designed for those who appreciate a slow, rewarding heat that builds with every bite.",
      tags: ["🌶️ Very Spicy", "🐟 Contains Stockfish", "🥜 Contains Crayfish"],
      waPhrase: "Hi Abacha Village! I'd like to order the Spicy Abacha. Please share your prices and delivery details.",
      image: customImages.menu_spicy,
      badge: "Fiery Hot",
    },
    {
      id: "combo",
      name: "Combo Plate",
      description:
        "The ultimate Abacha Village culinary feast. A generous serving of our custom-mixed cassava salad, layered with seasoned soft Ponmo (beef skin), whole dried fish, garden egg chunks, onion rings, and your choice of cold drink. Built for true food lovers.",
      tags: ["🥩 Contains Ponmo (Meat)", "🐟 Contains Dried Fish", "🌶️ Mild-Spicy Option"],
      waPhrase: "Hi Abacha Village! I'd like to order the Combo Plate. Please share your prices and delivery details.",
      image: customImages.menu_combo,
      badge: "Value Feast",
    },
  ];

  // If preview mode, only show initial cards; else, show a rich, responsive list
  const displayedItems = isPreview ? menuItems.slice(0, 3) : menuItems;

  const triggerWhatsAppOrder = (phrase: string) => {
    const encoded = encodeURIComponent(phrase);
    window.open(`https://wa.me/2347061887939?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`py-24 ${isPreview ? "bg-[#0C0C0C]" : "bg-[#0C0C0C]"} text-cream border-t border-white/5`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/[0.02] mb-4">
            <span className="text-[9px] uppercase font-display tracking-[0.35em] text-gold">
              {isPreview ? "Fresh Daily" : "Premium Nigerian Menu"}
            </span>
          </div>
          <h2 className="font-serif font-extralight text-3xl sm:text-5xl text-white tracking-wide leading-tight">
            {isPreview ? "Real Abacha. Real Flavour." : "Our Full Ceremonial Menu"}
          </h2>
          <p className="font-sans text-[#888] text-sm sm:text-base mt-4 font-light leading-relaxed">
            Explore our curated menu, made without artificial thickeners or industrial colors. Pick your option and order directly on WhatsApp in one click.
          </p>
        </div>

        {/* 3 Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full rounded-none bg-[#141414] border border-white/10 hover:border-[#D4AF37]/40 hover:shadow-2xl transition-all duration-300 overflow-hidden group p-2"
            >
              {/* Image Thumbnail wrapper */}
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 shrink-0 border border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-102 duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {isEditingSession && (
                  <div className="absolute inset-0 bg-black/85 z-20 flex flex-col items-center justify-center p-3 text-center">
                    <Upload className="text-[#D4AF37] mb-2 animate-pulse" size={18} />
                    <span className="font-serif text-[11px] text-white block mb-2">{item.name} Image</span>
                    <label className="inline-block px-4 py-1.5 bg-[#D4AF37] hover:bg-white text-black font-display text-[8px] uppercase tracking-wider font-medium cursor-pointer transition-colors">
                      Choose Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            await updateImage(`menu_${item.id}`, file);
                          }
                        }}
                      />
                    </label>
                  </div>
                )}
                
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Badge */}
                {item.badge && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 text-[8px] font-display uppercase tracking-[0.2em] bg-[#141414] text-[#D4AF37] border border-[#D4AF37]/30 shadow-md">
                    {item.id === "spicy" ? "🔥" : "⭐"} {item.badge}
                  </span>
                )}

                <span className="absolute bottom-4 right-4 text-[8px] font-display tracking-[0.2em] text-[#999] uppercase bg-[#141414]/90 backdrop-blur-sm px-3 py-1 border border-white/10">
                  ⚡ Prepared Fresh
                </span>
              </div>

              {/* Card Contents */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif font-light text-xl text-white mb-2 tracking-wide group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
                
                {/* Description snippet */}
                <p className="font-sans text-xs text-[#888] leading-relaxed font-light mb-4 flex-1">
                  {item.description}
                </p>

                {/* Dietary details Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2..5 py-1 rounded-none bg-white/[0.02] border border-white/5 text-[9px] uppercase tracking-wider text-[#999] font-display"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Immediate order CTA */}
                <button
                  onClick={() => triggerWhatsAppOrder(item.waPhrase)}
                  className="w-full py-3.5 bg-[#1C1C1C] hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-[10px] uppercase font-display tracking-[0.2em] text-[#D4AF37] hover:text-black flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <MessageSquare size={13} fill="currentColor" />
                  <span>Order on WhatsApp →</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice & Preview footer actions */}
        <div className="mt-12 text-center p-6 bg-[#141414] border border-white/10 rounded-none max-w-3xl mx-auto">
          <p className="font-sans text-xs text-[#888] leading-relaxed font-light">
            💡 *To guarantee freshness, prices vary slightly based on seasonal fish or stockfish weights. Check out our latest premium portion sizes and pricing list immediately with one tap.*
          </p>
          
          {isPreview && onSeeFullMenu && (
            <button
              onClick={onSeeFullMenu}
              className="mt-6 inline-flex items-center gap-2 font-display text-[10px] uppercase text-[#D4AF37] hover:text-white tracking-[0.3em] transition-all duration-300 cursor-pointer"
            >
              <span>See Full Menu Catalog</span>
              <span>→</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
