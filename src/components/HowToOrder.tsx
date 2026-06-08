import React from "react";
import { MessageSquare, HeartHandshake, Utensils, CheckCircle } from "lucide-react";

export default function HowToOrder() {
  const triggerWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Abacha Village! I'd like to place an order. Please share the menu and delivery details."
    );
    window.open(`https://wa.me/2347061887939?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const steps = [
    {
      step: "01",
      title: "Choose What You Want",
      description: "Browse our menu, pick your ideal bowl—Classic Abacha, Spicy Abacha, or the massive Combo Plate—and decide your favorite extra portions.",
      icon: <Utensils className="text-gold" size={24} />,
    },
    {
      step: "02",
      title: "Message Us on WhatsApp",
      description: "Send your preferred portions and Abuja destination. We'll reply in under 2 minutes with your itemized total, delivery fee, and payment details.",
      icon: <MessageSquare className="text-green-400" size={24} fill="currentColor" />,
    },
    {
      step: "03",
      title: "Sit Back & We Deliver",
      description: "We prepare your batch fresh, pack it beautifully inside leakproof containers, and dispatch it warm. We deliver straight to your door with zero hassle.",
      icon: <HeartHandshake className="text-gold" size={24} />,
    },
  ];

  return (
    <section id="how-to-order" className="bg-[#0C0C0C] text-cream py-24 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-[9px] tracking-[0.4em] text-gold uppercase block mb-3">
            Simple Logistics
          </span>
          <h2 className="font-serif font-extralight text-3xl sm:text-5xl text-white tracking-wide leading-tight">
            Order In 3 Simple Steps —<br />No Custom Apps, No Stress
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#888] mt-4 font-light leading-relaxed">
            No long registrations, no complicated interfaces. Just chat with our friendly coordinator and track your food straight to your door.
          </p>
        </div>

        {/* 3 Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[1px] bg-white/10 z-0 pointer-events-none transform -translate-y-12" />

          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative z-10 p-8 rounded-none bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              {/* Stepper badge */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-display text-[9px] text-[#A3A3A3] tracking-[0.2em] border-b border-gold/30 pb-1">
                  STEP {s.step}
                </span>
                <div className="p-2.5 bg-white/[0.02] border border-white/10 rounded-none">
                  {s.icon}
                </div>
              </div>

              <h3 className="font-serif font-light text-lg text-white mb-3">
                {s.title}
              </h3>
              
              <p className="font-sans text-xs text-[#888] leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Actions */}
        <div className="mt-16 text-center">
          <button
            onClick={triggerWhatsApp}
            className="px-8 py-4 rounded-none font-display text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37] hover:bg-white hover:text-black text-black flex items-center justify-center gap-2 transition-transform active:scale-95 mx-auto cursor-pointer shadow-lg"
          >
            <span>Start My WhatsApp Order Now</span>
          </button>
          
          <p className="font-sans text-[10px] text-[#555] tracking-wider uppercase mt-5 font-light">
            ⏰ Mon–Fri: 9am–7pm | Sat: 8am–8pm | Sun: 10am–6pm (Abuja Wide)
          </p>
        </div>

      </div>
    </section>
  );
}
