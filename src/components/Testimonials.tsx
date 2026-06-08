import React from "react";
import { Star, Quote, Heart } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: "rev1",
      name: "Adaeze M.",
      role: "Gwarinpa Estate",
      stars: 5,
      quote:
        "My first order from Abacha Village was supposed to be a one-time thing — now I order every single Friday for my family. The Classic Abacha is incredibly rich, perfectly balanced in oil levels, and extremely generous in stockfish and fish topping portions.",
    },
    {
      id: "rev2",
      name: "Emeka O.",
      role: "Wuse 2",
      stars: 5,
      quote:
        "I grew up eating pure local Abacha in Imo State and finding this high level of authenticity in Wuse Abuja was a massive surprise. The palm oil is pure and the ugba is seasoned exactly the old way. This is now my absolute go-to hometown lunch spot.",
    },
    {
      id: "rev3",
      name: "Tunde B.",
      role: "Kubwa Layout",
      stars: 5,
      quote:
        "I am Yoruba and had never really experienced Igbo-style Abacha salad before. A colleague bought the Combo Plate and now I am completely hooked! The flavors are bold and complex but not overwhelming. The Ponmo is incredibly soft as well.",
    },
  ];

  return (
    <section className="bg-[#0C0C0C] text-cream py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-[9px] tracking-[0.4em] text-gold uppercase block mb-3">
            Customer Testimonials
          </span>
          <h2 className="font-serif font-extralight text-3xl sm:text-5xl text-white tracking-wide leading-tight">
            Don't Just Take Our Word for It —<br />Here's What Abuja Is Saying
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#888] mt-4 font-light leading-relaxed">
            From first-time samplings to repeat party-event catering — our diners tell our story better than we ever could.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-none bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote marks accent overlay */}
              <Quote className="absolute right-6 top-6 text-white/[0.02] group-hover:text-gold/5 h-16 w-16 pointer-events-none transition-colors" />

              <div>
                {/* 5-Star Row */}
                <div className="flex gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Star key={idx} size={12} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs sm:text-sm text-[#888] leading-relaxed font-light italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                <div className="h-8 w-8 rounded-none bg-transparent text-gold flex items-center justify-center font-display font-light text-xs border border-[#D4AF37]/40">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-serif font-light text-sm text-white">{rev.name}</h4>
                  <span className="text-[9px] uppercase font-display tracking-[0.2em] text-gold/80 block mt-0.5">
                    📍 {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews prompt banner */}
        <div className="text-center p-6 rounded-none border border-white/10 bg-[#141414] max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <Heart size={14} className="text-[#D4AF37] fill-current animate-pulse shrink-0" />
          <p className="font-sans text-xs text-[#888] font-light leading-relaxed">
            Enjoyed our Abacha bowls or catered setups? <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-gold font-normal hover:underline">Leave us a Google Review</a> to share your feedback with Abuja! 🧡
          </p>
        </div>

      </div>
    </section>
  );
}
