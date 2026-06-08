import React from "react";
import { Sparkles, Milestone, Upload } from "lucide-react";
import { useCustomImages } from "../context/CustomImageContext";

export default function AboutSection() {
  const { images, updateImage, isEditingSession } = useCustomImages();
  const classicImage = images.about;

  return (
    <section id="our-story" className="scroll-mt-24 py-24 bg-[#0C0C0C] text-cream relative overflow-hidden border-t border-white/5">
      
      {/* Absolute background accent lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-white/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* visual image side */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            {/* Elegant visual frames */}
            <div className="absolute -inset-1 rounded-none bg-[#D4AF37]/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative rounded-none overflow-hidden border border-white/10 bg-[#141414] p-2 shadow-2xl min-h-[250px]">
              <img
                src={classicImage}
                alt="Finely shredded premium Abacha bowl close-up"
                className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-102 duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {isEditingSession && (
                <div className="absolute inset-2 bg-black/85 z-20 flex flex-col items-center justify-center p-3 text-center">
                  <Upload className="text-[#D4AF37] mb-2" size={18} />
                  <span className="font-serif text-[11px] text-white block mb-2">Our Story Image</span>
                  <label className="inline-block px-4 py-1.5 bg-[#D4AF37] hover:bg-white text-black font-display text-[8px] uppercase tracking-wider font-medium cursor-pointer transition-colors">
                    Choose Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await updateImage("about", file);
                        }
                      }}
                    />
                  </label>
                </div>
              )}

              <div className="absolute bottom-2 inset-x-2 bg-gradient-to-t from-black via-black/50 to-transparent p-5">
                <span className="text-[#D4AF37] font-serif italic text-xl">100% Authentic Recipe</span>
                <p className="text-[10px] uppercase tracking-wider text-[#999] mt-1 font-display">Handcrafted daily following centuries-old Eastern methods.</p>
              </div>
            </div>

            {/* Little floating seal of quality */}
            <div className="absolute -bottom-4 -right-2 bg-[#141414] text-[#D4AF37] rounded-none p-4 shadow-2xl border border-[#D4AF37]/40 flex flex-col items-center justify-center select-none rotate-3 hover:rotate-0 transition-all duration-300">
              <span className="font-display font-light text-[9px] uppercase tracking-[0.3em]">QUALITY SEAL</span>
              <span className="font-script text-base text-white mt-1 leading-none">Eat to Remember</span>
            </div>
          </div>

          {/* Copy Writing text side */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold" />
              <span className="font-display font-light text-[10px] uppercase tracking-[0.35em] text-gold">
                The Heritage Project
              </span>
            </div>

            <h2 className="font-serif font-extralight text-3xl sm:text-4xl text-white leading-tight tracking-wide">
              From the Eastern Village kitchen to your Abuja doorstep.
            </h2>

            <div className="font-sans text-sm sm:text-base leading-relaxed text-[#888] space-y-4 font-light">
              <p className="italic text-gold font-serif">
                "There is a particular kind of hunger that no suya or shawarma can fix — the kind that only a bowl of proper Abacha can satisfy."
              </p>
              
              <p>
                For many of us living in Abuja, far from our family homes in the East, that nostalgic hunger is real. Abacha Village was born from that genuine craving.
              </p>
              
              <p>
                In a city as fast-paced as Abuja, where convenience often wins over culture, we chose to slow down and do things the true way — using cold pressed palm oil, hand-selected ugba, and ground local spices the old-fashioned way, just like our mothers did.
              </p>
              
              <p className="font-normal text-white">
                We exist to give every person in Abuja — Igbo or not — a seat at our table and a taste of something truly timeless.
              </p>
            </div>

            {/* Accent milestone statistics */}
            <div className="grid grid-cols-2 gap-4 w-full pt-6 border-t border-white/10">
              <div className="p-4 rounded-none bg-[#141414] border border-white/5">
                <span className="font-display font-light text-2xl text-[#D4AF37] block tracking-wider">300+</span>
                <span className="font-display text-[9px] uppercase tracking-[0.2em] text-[#666] block mt-1">Satisfied Customers</span>
              </div>
              <div className="p-4 rounded-none bg-[#141414] border border-white/5">
                <span className="font-display font-light text-2xl text-[#D4AF37] block tracking-wider">100%</span>
                <span className="font-display text-[9px] uppercase tracking-[0.2em] text-[#666] block mt-1">Oil Purity rate</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
